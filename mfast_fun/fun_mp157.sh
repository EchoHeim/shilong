#!/bin/bash

function mp157_cpmpile_TF-a() {
    if [ ! -f /usr/bin/stm32wrapper4dbg ]; then
        cd $PATH_ST_WORKSPACE/tools/stm32wrapper4dbg/
        make
        sudo cp stm32wrapper4dbg /usr/bin
    fi

    cd $PATH_ST_TF_A
    choose "yn" "Compile TF-A firmware? (y/N) "
    case "$yn" in
    Y | y)
        make -f ../Makefile.sdk clean
        make -f ../Makefile.sdk TFA_DEVICETREE=stm32mp157d-${mp157_board} TF_A_CONFIG=serialboot ELF_DEBUG_ENABLE='1' all
        cp ../build/serialboot/tf-a-stm32mp157d-${mp157_board}-serialboot.stm32 $PATH_UPDATE/tf-a/

        make -f ../Makefile.sdk clean
        make -f ../Makefile.sdk all

        status_msg "Copy file..."
        cp ../build/trusted/tf-a-stm32mp157d-${mp157_board}-trusted.stm32 $PATH_UPDATE/tf-a/
        sync
        ok_msg "Build TF-A complete!"
        ;;

    N | n | "") quit_msg ;;
    esac
}

function mp157_cpmpile_u-boot() {
    cd $PATH_ST_UBOOT
    choose "yn" "Compile u-boot firmware? (y/N) "
    case "$yn" in
    Y | y)
        # make stm32mp157d_${CompanyLogo}_defconfig

        make menuconfig
        cp ./.config ./configs/stm32mp157d_${CompanyLogo}_defconfig

        make V=1 DEVICE_TREE=stm32mp157d-${CompanyLogo} all -j8 # V=1 表示编译 uboot 的时候输出详细的编译过程;

        #make DEVICE_TREE=stm32mp157d-${CompanyLogo} UBOOT_CONFIGS=stm32mp15_${CompanyLogo}_trusted_defconfig,trusted,u-boot.stm32 all

        status_msg "Copy file..."
        cp ./u-boot.stm32 $PATH_UPDATE/u-boot/u-boot-stm32mp157d-${CompanyLogo}.stm32
        cp ./u-boot.stm32 $PATH_UPDATE/u-boot/u-boot-stm32mp157d-${CompanyLogo}-sr.stm32
        sync
        ok_msg "Build u-boot complete!"
        ;;

    N | n | "") quit_msg ;;
    esac
}

function mp157_cpmpile_kernel() {
    cd $PATH_ST_KERNEL
    choose "yn" "Compile kernel firmware? (y/N) "
    case "$yn" in
    Y | y)
        choose "yn" "Install kernel driver modules? (y/N) "
        case "$yn" in
        Y | y)
            if [ -d "/media/$USER/$MOUNT_DIR" ]; then # 判断文件夹是否存在;
                status_msg "Compile module files..."
                make dtbs         # 重新编译设备树;
                make modules -j12 # 编译驱动模块;

                status_msg "Modules install..."
                sudo make modules_install INSTALL_MOD_PATH=/media/$USER/$MOUNT_DIR # 安装模块;
            else                                                                   # 文件夹不存在;
                warn_msg "No sd card inserted!"
                warn_msg "Continue compiling the kernel..."
                sleep 3
            fi
            ;;
        esac

        status_msg "make menuconfig"
        # make stm32mp157d_${CompanyLogo}_defconfig
        make menuconfig

        status_msg "Compile kernel..."
        make DEVICE_TREE=stm32mp157d-${CompanyLogo} uImage dtbs LOADADDR=0XC2000040 -j16

        status_msg "Copy file..."
        cp arch/arm/boot/uImage $PATH_UPDATE/tftpboot/
        cp arch/arm/boot/dts/stm32mp157d-${CompanyLogo}.dtb $PATH_UPDATE/tftpboot/

        cp arch/arm/boot/uImage $PATH_UPDATE/kernel/
        cp arch/arm/boot/dts/stm32mp157d-${CompanyLogo}.dtb $PATH_UPDATE/kernel/
        sync
        status_msg "Packing bootfs..."

        cd $PATH_UPDATE/kernel/
        dd if=/dev/zero of=bootfs.ext4 bs=1M count=20
        mkfs.ext4 -L bootfs bootfs.ext4

        [[ ! -d /mnt/bootfs ]] && sudo mkdir -p /mnt/bootfs

        sudo mount bootfs.ext4 /mnt/bootfs/
        sudo cp uImage stm32mp157d-${CompanyLogo}.dtb /mnt/bootfs/
        sudo umount /mnt/bootfs
        mv bootfs.ext4 $PATH_UPDATE/${CompanyLogo}-image-bootfs.ext4

        sync
        ok_msg "Build kernel complete!"
        ;;

    N | n | "") quit_msg ;;
    esac
}

function mp157_clear() {
    case "$1" in
    "TF-a")
        cd $PATH_ST_TF_A
        choose "yn" "Clean the TF-A? (y/N) "
        if [[ "$yn" =~ "Y"|"y" ]]; then
            make -f ../Makefile.sdk clean
            ok_msg "Clean TF-A complete!"
        fi
        ;;

    "u-boot")
        cd $PATH_ST_UBOOT
        choose "yn" "Clean the u-boot? (y/N) "
        if [[ "$yn" =~ "Y"|"y" ]]; then
            make distclean
            make stm32mp157d_${CompanyLogo}_defconfig
            ok_msg "Clean u-boot complete!"
        fi
        ;;

    "kernel")
        cd $PATH_ST_KERNEL
        choose "yn" "Clean the kernel? (y/N) "
        if [[ "$yn" =~ "Y"|"y" ]]; then
            make distclean
            make stm32mp157d_${CompanyLogo}_defconfig
            ok_msg "Clean kernel complete!"
        fi
        ;;
    esac
}

function mp157_flash() {
    STM32_Programmer_CLI -l usb
    choose "yn" "Restore image via usb1? (y/N) "
    select_msg $yn
    if [[ "$yn" =~ "Y"|"y" ]]; then
        choose "SD_or_eMMC"
        if [[ $SD_or_eMMC == 2 ]]; then
            SD_or_eMMC="eMMC"
        elif [[ $SD_or_eMMC == 1 ]]; then
            SD_or_eMMC="SD_card"
        else
            warn_msg "Wrong choice!"
        fi

        case "$1" in
        "factory")
            cd $PATH_FACTORY_IMAGE
            [[ $SD_or_eMMC == "eMMC" ]] && prg_file="atk_emmc-stm32mp157d-atk-qt"
            [[ $SD_or_eMMC == "SD_card" ]] && prg_file="atk_sd_card-stm32mp157d-atk-qt"
            ;;

        "bootfs")
            cd $PATH_UPDATE
            [[ $SD_or_eMMC == "eMMC" ]] && prg_file="atk_emmc-stm32mp157d-atk-qt"
            [[ $SD_or_eMMC == "SD_card" ]] && prg_file="atk_sd_card-stm32mp157d-atk-qt"
            ;;

        "rootfs")
            cd $PATH_UPDATE
            [[ $SD_or_eMMC == "eMMC" ]] && prg_file="atk_emmc-stm32mp157d-atk-qt"
            [[ $SD_or_eMMC == "SD_card" ]] && prg_file="atk_sd_card-stm32mp157d-atk-qt"
            ;;
        esac

        [[ $SD_or_eMMC =~ "eMMC"|"SD_card" ]] && status_msg "Restore $1 image to $SD_or_eMMC..." && STM32_Programmer_CLI -c port=usb1 -w $prg_file.tsv -tm 20000
    fi

    unset SD_or_eMMC
    unset prg_file
}

function mp157_cpmpile_rootfs() {
    cd $PATH_SOURCE_5_4_BUSYBOX

    echo -e "\n Compile busybox firmware? (y/N) \c"
    read Compile_busybox_YN
    if [[ $Compile_busybox_YN == "y" || $Compile_busybox_YN == "Y" ]]; then

        make

        echo -e "\n$green **** Copy file... ****$clear\n"

        cp $PWD/arch/arm/boot/uImage $PATH_UPDATE/tftpboot/
        cp $PWD/arch/arm/boot/dts/stm32mp157d-${CompanyLogo}.dtb $PATH_UPDATE/tftpboot/

        cp $PWD/arch/arm/boot/uImage $PATH_UPDATE/kernel/
        cp $PWD/arch/arm/boot/dts/stm32mp157d-${CompanyLogo}.dtb $PATH_UPDATE/kernel/

        echo -e "\n$green **** Build busybox complete! ****$clear\n"
    fi
}
