const bd = document.querySelector('body')
const qbox = bd.querySelector('#QRBox')
const mbox = bd.querySelector('#MainBox')
const dbox = bd.querySelector('#donateBox')

const qqr =
  'https://cdn.jsdelivr.net/gh/EchoHeim/Astapb/docs/sponsor/images/QQPayQR.png'
const aqr =
  'https://cdn.jsdelivr.net/gh/EchoHeim/Astapb/docs/sponsor/images/AliPayQR.png'
const wqr =
  'https://cdn.jsdelivr.net/gh/EchoHeim/Astapb/docs/sponsor/images/WeChatQR.png'

const showQR = (QR) => {
  if (QR) mbox.style.backgroundImage = `url(${QR})`
  bd.classList.add('blur')
  qbox.classList.add('fadeIn')
  mbox.classList.add('showQR')
}

dbox.addEventListener('click', (e) => {
  let el = e.target
  if (el.id === 'QQPay') showQR(qqr)
  else if (el.id === 'AliPay') showQR(aqr)
  else if (el.id === 'WeChat') showQR(wqr)
})

mbox.addEventListener('click', () => {
  mbox.classList.remove('showQR')
  mbox.classList.add('hideQR')
  setTimeout((a) => {
    qbox.classList.remove('fadeIn')
    mbox.classList.remove('hideQR')
    bd.classList.remove('blur')
  }, 600)
})
