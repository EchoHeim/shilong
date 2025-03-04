/*! livere.tower 2020-04-23, 4:53:04 PM */
var LivereTower = (function () {
  'use strict'
  function serial(a) {
    return a + '-' + Math.floor(1e3 * Math.random())
  }
  function addEventListener(a, b, c) {
    ;(c = c || window),
      (bound[a] || (bound[a] = [])).push(b),
      c.addEventListener
        ? c.addEventListener(a, b)
        : c.attachEvent && c.attachEvent('on' + a, b)
  }
  function removeEventListener(a, b, c) {
    ;(c = c || window),
      c.removeEventListener
        ? c.removeEventListener(a, b)
        : c.detachEvent && c.detachEvent('on' + a, b)
  }
  function isMobile() {
    var a = !1
    return (
      (function (b) {
        ;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          b
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            b.substr(0, 4)
          )) &&
          (a = !0)
      })(navigator.userAgent || navigator.vendor || window.opera),
      a
    )
  }
  function postMessage(a, b) {
    if (a && b && !isRestrictIEVersion(7))
      return a.postMessage(JSON.stringify(b), '*')
  }
  function animateScroll(a, b) {
    function c(a) {
      return a >= offset()
    }
    function d(a) {
      return a <= offset()
    }
    function e() {
      return clearInterval(get('timer'))
    }
    set(
      'timer',
      setInterval(function () {
        return (b ? c(a) : d(a))
          ? (clearInterval(get('timer')), set('timer', null))
          : (setTimeout(e, 1e3),
            window.scrollTo(0, b ? offset() - 100 : offset() + 100))
      }, 1)
    )
  }
  function isRestrictIEVersion(a) {
    if (a) {
      var b = (get('browser') ? get('browser') : setBrowser()).split(' ')[0],
        c = Number(get('browser').split(' ')[1])
      return 'MSIE' === b && !(c && c > a)
    }
  }
  function setBrowser() {
    return set(
      'browser',
      (function () {
        var a,
          b = navigator.userAgent,
          c =
            b.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || []
        return /trident/i.test(c[1])
          ? ((a = /\brv[ :]+(\d+)/g.exec(b) || []), 'IE ' + (a[1] || ''))
          : 'Chrome' === c[1] && null != (a = b.match(/\bOPR\/(\d+)/))
          ? 'Opera ' + a[1]
          : ((c = c[2]
              ? [c[1], c[2]]
              : [navigator.appName, navigator.appVersion, '-?']),
            null != (a = b.match(/version\/(\d+)/i)) && c.splice(1, 1, a[1]),
            c.join(' '))
      })()
    )
  }
  function isObjectPropertiesNull(a) {
    for (var b in a)
      if ('string' != typeof b || (!a[b] && 0 !== a[b])) return !0
    return !1
  }
  function hasProtocol(a) {
    return new RegExp('^(http|https)://', 'i').test(a)
  }
  function search(a, b, c) {
    return a < 1
      ? c
      : 'object' == typeof c
      ? search(a - 1, b, c[b[b.length - a]])
      : void 0
  }
  function get(a) {
    var b = variables[a],
      a = a.split('.')
    return (
      'object' == typeof a &&
        a.length > 1 &&
        (b = search(a.length, a, variables)),
      b
    )
  }
  function set(a, b) {
    if ('object' != typeof a || b) return (variables[a] = b), get(a)
    for (var c in a) variables[c] = a[c]
  }
  function warning(a) {
    console.log(['WARN: ', a].join(''))
  }
  function error(a) {
    throw ['ERROR: ', a].join('')
  }
  function template(a, b) {
    var c = ['comment', 'sidebar', 'check']
    if (a && !(c.indexOf(a) < 0))
      return (function (a, b) {
        var c = document.createElement('iframe'),
          d = get('baseURI') + a + '/' + b.id
        return (
          (c.title = 'livere'),
          (c.scrolling = 'no'),
          (c.async = !0),
          (c.frameBorder = 0),
          (c.allowTransparency = 'true'),
          (c.src =
            'check' === a
              ? 'https://101.livere.co.kr/html/systemCheck.html'
              : concatURI(d, b, !0)),
          isRestrictIEVersion(7) &&
            ((c.scrolling = 'auto'), (c.height = '1000px')),
          c
        )
      })(a, b)
  }
  function concatURI(a, b, c) {
    var d = '?'
    for (var e in b)
      b[e] &&
        ((d += '?' !== d ? '&' : ''), (d += e + '=' + encodeURIComponent(b[e])))
    return a + d + (c ? '' : 'callback=?')
  }
  function offset() {
    return window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
  }
  function getCommentOffset() {
    var a = get('lv_comment'),
      b = a.ownerDocument,
      c = b.documentElement,
      d = a.getBoundingClientRect(),
      e = b.body,
      f = window,
      g = c.clientTop || e.clientTop || 0,
      h = c.clientLeft || e.clientLeft || 0,
      i = f.pageYOffset || e.scrollTop,
      j = f.pageXOffset || e.scrollLeft
    return { top: d.top + i - g, left: d.left + j - h }
  }
  function getPosition(a) {
    for (var b = 0, c = 0; a; ) {
      if ('BODY' == a.tagName) {
        var d = a.scrollLeft || document.documentElement.scrollLeft,
          e = a.scrollTop || document.documentElement.scrollTop
        ;(b += a.offsetLeft - d + a.clientLeft),
          (c += a.offsetTop - e + a.clientTop)
      } else
        (b += a.offsetLeft - a.scrollLeft + a.clientLeft),
          (c += a.offsetTop - a.scrollTop + a.clientTop)
      a = a.offsetParent
    }
    return { x: b, y: c }
  }
  function getWindowHeight() {
    var a = void 0 !== window.pageXOffset,
      b = 'CSS1Compat' === (document.compatMode || '')
    a
      ? window.pageXOffset
      : b
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft
    return a
      ? window.pageYOffset
      : b
      ? document.documentElement.scrollTop
      : document.body.scrollTop
  }
  function request(a, b, c) {
    if (a) {
      var d =
        'undefined' != typeof XDomainRequest &&
        -1 == navigator.appVersion.indexOf('MSIE 1')
      if (d) {
        var e = new XDomainRequest(),
          f = a.split(':').slice(1)
        a = 0 === f.length ? a : f.join(':')
      } else var e = new XMLHttpRequest()
      if ((e.open((b.method && b.method.toUpperCase()) || 'GET', a), d))
        (e.onload = function () {
          c && 'function' == typeof c && c(e.responseText)
        }),
          e.send(b.data)
      else {
        if (b.header) {
          for (var g in b.header) var h = b.header[g]
          e.setRequestHeader(g, h)
        }
        ;(e.onreadystatechange = function () {
          4 == e.readyState && 200 == e.status
            ? c && 'function' == typeof c && c(e.responseText)
            : 4 == e.readyState && e.status
        }),
          e.send(b.data)
      }
    }
  }
  function requestLog(a) {
    var b,
      c = config.parse(),
      d = atob(c.uid).split('/')
    try {
      b = unescape(decodeURIComponent(c.title))
    } catch (a) {
      b = c.title
    }
    var e = {
      title: b,
      url: c.site,
      consumer_seq: +d[0],
      livere_seq: +d[1],
      livere_referer: c.refer,
      sender: 'tower',
      uuid: uuid,
    }
    for (var f in e) a[f] = e[f]
    request('https://saluton.cizion.com/livere', {
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      data: JSON.stringify(a),
    })
  }
  function getUUID(a) {
    function b(a) {
      var b = a.data
      if ('string' == typeof b)
        try {
          b = JSON.parse(b)
        } catch (a) {
          b = {}
        }
      if (b && 'send uuid' === b.type) {
        try {
          uuid = b.uuid
        } catch (a) {}
        d('good bye')
      }
    }
    function c() {
      h.contentWindow.postMessage(JSON.stringify({ type: 'get uuid' }), '*')
    }
    function d(b) {
      clearTimeout(i), !f && a && 'function' == typeof a && ((f = !0), a())
    }
    var e = 2e3,
      f = !1
    window.addEventListener('message', b)
    var g = document.querySelector('#lv-container'),
      h = document.createElement('iframe')
    ;(h.src = 'https://was.livere.me/get-uuid'),
      (h.title = 'livere-uuid'),
      (h.id = 'livere-uuid'),
      (h.style.display = 'none'),
      (h.onload = c),
      g.appendChild(h)
    var i = setTimeout(d, e, 'timeout bye')
  }
  function getConsumer(a, b) {
    var c = config.parse()
    request(
      'https://was.livere.me/v1/consumer?consumerSeq=' +
        a +
        '&refer=' +
        c.refer,
      {
        method: 'GET',
        header: { 'Content-Type': 'application/json' },
        dataType: 'jsonp',
      },
      function (d) {
        var e = d ? JSON.parse(d) : null
        e &&
          !0 === e.consumer.isMedia &&
          (!1 === e.redisRepCheck
            ? (Object.assign(c, { consumerSeq: a, livereSeq: b }),
              (c.title = c.titleString),
              createRep(c))
            : !1 === e.redisMetaCheck && createMeta(c, b))
      }
    )
  }
  function createRep(a) {
    var b = ''
    Object.keys(a).map(function (c) {
      ;(a[c] = null === a[c] ? '' : a[c]),
        b && (b += '&'),
        (b += c + '=' + a[c])
    }),
      request(
        'https://was.livere.me/v1/rep',
        {
          method: 'POST',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          dataType: 'jsonp',
          data: b,
        },
        function (b) {
          return createMeta(a, a.livereSeq), b
        }
      )
  }
  function createMeta(a, b) {
    var c = {
        refer: a.refer,
        livereSeq: b,
        category: getMetaData('category'),
        keyword: getMetaData('keyword'),
        reporter: getMetaData('reporter'),
      },
      d = ''
    Object.keys(c).map(function (a) {
      ;(c[a] = null === c[a] ? '' : c[a]),
        d && (d += '&'),
        (d += a + '=' + c[a])
    }),
      request(
        'https://was.livere.me/v1/meta',
        {
          method: 'POST',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          dataType: 'jsonp',
          data: d,
        },
        function (a) {
          return a
        }
      )
  }
  function getMetaData(a) {
    var b,
      c,
      d = []
    'category' === a
      ? (b = ['article:section', 'article:section2', 'article:section3'])
      : 'keyword' === a
      ? (c = [
          "property='article:tag'",
          "name='news_keywords'",
          "name='keywords'",
        ])
      : 'reporter' === a &&
        ((b = ['dable:author', 'article:author']),
        (c = [
          "name='byl'",
          "name='author'",
          "name='writer'",
          "name='twitter:creator'",
        ])),
      b
        ? b.map(function (a, b) {
            var c = document.querySelector('meta[property="' + a + '"]')
            d[b] = c ? c.getAttribute('content') : null
          })
        : c.map(function (a, b) {
            var c = document.querySelector('meta[' + a + ']')
            d[b] = c ? c.getAttribute('content') : null
          })
    var e = ''
    return (
      d.map(function (a) {
        a && (e = e ? e + '||' + a : a)
      }),
      e
    )
  }
  var livere = {},
    widget = {},
    config = {},
    variables = {},
    uuid,
    bound = {}
  ;(livere.__version__ = '9.1'),
    (livere.init = function () {
      function a() {
        var a = {
          type: 'livere_pv',
          action: 'loading',
          extra: { useEagerLoading: f || !1 },
        }
        if ((e && (a.extra.forceEagerLoading = e), requestLog(a), f))
          return location.search.indexOf('redirectOrigin=true') > -1
            ? widget.oauth.call(this)
            : livere.start.call(this)
        livere.loading.call(this)
      }
      var b = window.livereOptions || {}
      isRestrictIEVersion(9) && config.previousVersion.call(this)
      var c = [
          10, 12, 13, 17, 30, 36, 39, 48, 49, 66, 427, 586, 590, 649, 936, 938,
          982, 988, 1141, 2771, 3325, 3544, 3662, 5255, 5757, 5844, 6204, 6783,
          7591, 7622, 7625, 7817, 7819, 7909, 7999, 8089, 8209, 8326, 8651,
          8808, 9135, 9139, 9792, 10020, 10078, 10436, 10618, 10663, 11055,
          11659, 11861, 12617, 12669, 12740, 12940, 13058, 13149, 13156, 13167,
          13204, 13216, 13314, 13319, 13352, 13398, 13404, 13427, 13448, 13449,
          13455, 13457, 13458, 13489, 13511, 13512, 13514, 13529, 13536, 13540,
          13541, 13550, 13552, 13553, 13555, 13582, 13584, 13636, 13637, 13649,
          13656, 13665, 13720, 13724, 13741, 13770, 13858, 13878, 13880, 13884,
          13904, 14002, 14020, 14021, 14026, 14149, 14173, 14254, 14255, 14256,
          14354, 14374, 14380, 14383, 14520, 14584, 14863, 15007, 15105, 15149,
          15201, 15269, 15291, 15304, 15344, 15414, 15418, 15486, 15527, 15560,
          15601, 15638, 15759, 15873, 16030, 16171, 16292, 16302, 16446, 16455,
          16543, 16712, 17414, 17509, 17540, 17554, 17610, 17618, 17674, 17765,
          17806, 17857, 17869, 18130, 18179, 18243, 18306, 18427, 18728, 18803,
          18824, 19005, 19208, 19212, 19336, 19483, 19493, 19650, 19651, 19696,
          19736, 19737, 19831, 20032, 20047, 20048, 20299, 20325, 20424, 20742,
          20769, 20841, 20903, 21093, 21158, 21426, 21503, 21551, 21628, 21961,
          22094, 22095, 22285, 22354, 22389, 22473, 22474, 22589, 22621, 22637,
          22711, 22784, 22853, 22915, 23026, 23038, 23069, 23092, 23296, 23341,
          23545, 23548, 23739, 23792, 23934, 23957, 24028, 24083, 24173, 24229,
          24249, 24254, 24326, 24458, 24589, 24622, 24627, 24641, 24656, 24661,
          24682, 24683, 24684, 24704, 24705, 24716, 24742, 24752, 24758, 24768,
          24785, 24804, 24810, 24820, 24827, 24830, 24834, 24886, 24889, 24895,
          24967, 24968, 24974, 24997, 24998, 25006, 25009, 25056, 25064, 25071,
          25085, 25148, 25158, 25164, 25422, 25428, 25438, 25441, 25455, 25500,
          25509, 25521, 25532, 25549, 25565, 25593, 25599, 25609, 25622, 25639,
          25643, 25672, 25688, 25700, 25703, 25715, 25766, 25770, 25780, 25790,
          25801, 25803, 25816, 25818, 25820, 25833, 25880, 25885, 25887, 25889,
          25891, 25897, 25898, 25934, 25935, 25941, 25947, 25984, 25993, 26e3,
          26002, 26005, 26010, 26013, 26054, 26083, 26106, 26111, 26130, 26140,
          26143, 26148, 26155, 26163, 26165, 26173, 26176, 26182, 26183, 26191,
          26212, 26219, 26220, 26223, 26234, 26253, 26261, 26268, 26274, 26297,
          26307, 26319, 26320, 26326, 26329, 26341, 26354, 26360, 26365, 26389,
          26392, 26419, 26421, 26438, 26443, 26455, 26468, 26478, 26484, 26493,
          26506, 26514, 26522, 26525, 26530, 26534, 26558, 26561, 26612, 26624,
          26625, 26635, 26650, 26663, 26669, 26673, 26693, 26696, 26699, 26715,
          26743, 26754, 26759, 26779, 26789, 26790, 26796, 26797, 26812, 26814,
          26822, 26879, 26886, 26889, 26900, 26923, 26929, 26932, 26935, 26940,
          26954, 26956, 26977, 26988, 26995, 27024, 27033, 27048, 27049, 27056,
          27084, 27108, 27124, 27156, 27159, 27160, 27163, 27166, 27169, 27171,
          27172, 27192, 27212, 27214, 27219, 27222, 27226, 27229, 27233, 27245,
          27247, 27249, 27252, 27283, 27292, 27312, 27316, 27323, 27325, 27327,
          27342, 27349, 27351, 27361, 27363, 27367, 27375, 27383, 27401, 27419,
          27429, 27449, 27456, 27461, 27472, 27473, 27482, 27486, 27487, 27490,
          27493, 27494, 27495, 27520, 27531, 27546, 27551, 27566, 27568, 27601,
          27606, 27612, 27615, 27625, 27627, 27631, 27634, 27647, 27653, 27668,
          27670, 27676, 27677, 27680, 27687, 27695, 27697, 27709, 27715, 27722,
          27723, 27724, 27729, 27731, 27733, 27740, 27754, 27758, 27764, 27771,
          27777, 27932, 27933, 27939, 27982, 28019, 28023, 28028, 28039, 28046,
          28062, 28063, 28075, 28142, 28148, 28179, 28219, 28250, 28267, 28274,
          28276, 28287, 28288, 28353, 28377, 28382, 28394, 28474, 28587, 28616,
          28620, 28687, 28773, 28785, 28793, 28802, 28806, 28828, 28920, 28924,
          28957, 28978, 29006, 29026, 29027, 29070, 29079, 29146, 29157, 29163,
          29188, 29200, 29228, 29238, 29284, 29319, 29334, 29343, 29383, 29534,
          29632, 29684, 29702, 29705, 29716, 29721, 29764, 29914, 29930, 30116,
          30126, 30251, 30266, 30288, 30341, 30373, 30376, 30389, 30430, 30431,
          30435, 30540, 30541, 30542, 30544, 30545, 30548, 30604, 30638, 30657,
          30659, 30669, 30690, 30691, 30731, 30742, 30785, 30796, 30801, 30841,
          30854, 30934, 31042, 31047, 31081, 31116, 31122, 31123, 31124, 31125,
          31169, 31200, 31208, 31280, 31291, 31292, 31299, 31335, 31345, 31364,
          31373, 31399, 31403, 31484, 31497, 31526, 31541, 31547, 31591, 31599,
          31640, 31659, 31667, 31682, 31720, 31729, 31731, 31746, 31747, 31778,
          31782, 31811, 31825, 31850, 31854, 31891, 31928, 31930, 31931, 31957,
          31964, 31968, 31980, 31985, 31997, 32040, 32088, 32170, 32179, 32182,
          32221, 32223, 32343, 32370, 32412, 32467, 32513, 32528, 32556, 32574,
          32693, 32694, 32698, 32705, 32799, 32953, 32969, 32992, 33002, 33017,
          33046, 33070, 33092, 33134, 33185, 33331, 33334, 33360, 33470, 33506,
          33653, 33657, 33697, 33720, 33723, 33798, 33890, 33993, 34083, 34103,
          34126, 34129, 34130, 34140, 34147, 34197, 34234, 34267, 34288, 34358,
          34374, 34400, 34411, 34712, 34741, 34852, 34931, 34987, 35007, 35076,
          35199, 35255, 35260, 35315, 35320, 35323, 35426, 35470, 35501, 35546,
          35559, 35573, 35607, 35654, 35657, 35694, 35738, 35826, 35843, 35872,
          35883, 35893, 35954, 35996, 36039, 36043, 36049, 36062, 36184, 36200,
          36202, 36221, 36227, 36229, 36258, 36273, 36333, 36346, 36402, 36417,
          36486, 36491, 36519, 36650, 36665, 36670, 36685, 36803, 36862, 36936,
          36937, 36943, 37058, 37103, 37190, 37203, 37300, 37401, 37423, 37452,
          37489, 37555, 37585, 37595, 37596, 37597, 37658, 37695, 37704, 37767,
          37799, 37980, 37988, 37994, 38053, 38096, 38101, 38115, 38116, 38145,
          38161, 38169, 38175, 38184, 38222, 38271, 38366, 38388, 38462, 38463,
          38512, 38516, 38566, 38582, 38585, 38589, 38599, 38612, 38623, 38629,
          38663, 38682, 38683, 38695, 38708, 38730, 38745, 38766, 38832, 38853,
          38873, 38909, 38979, 39020, 39198, 39277, 39325, 39337, 39367, 39376,
          39405, 39423, 39504, 39525, 39527, 39531, 39537, 39605, 39658, 39681,
          39693, 39754, 39761, 39786, 39817, 39841, 39847, 39850, 39851, 39942,
          39981, 39986, 40059, 40067, 40080, 40088, 40093, 40098, 40106, 40113,
          40117, 40130, 40131, 40167, 40185, 40189, 40196, 40197, 40198, 40205,
          40207, 40258, 40275, 40286, 40304, 40324, 40331, 40336, 40341, 40387,
          40619, 40963, 41023, 41024, 41154, 41183, 41736, 42101, 42162, 42168,
          42289, 42338, 42455, 42881, 43245, 43247, 43257, 43258, 43277, 43408,
          43734, 43906,
        ],
        d = +atob(
          document.querySelector('#lv-container').getAttribute('data-uid')
        ).split('/')[1],
        e = !!~c.indexOf(d),
        f = b.eagerLoading || e
      getUUID(a)
    }),
    (livere.loading = function () {
      function a() {
        var c = getPosition(b)
        if (
          isNaN(window.innerHeight) ||
          isNaN(getWindowHeight()) ||
          c.y - getWindowHeight() - window.innerHeight < 100
        )
          return (
            removeEventListener('scroll', a, d),
            location.search.indexOf('redirectOrigin=true') > -1
              ? widget.oauth.call(this)
              : livere.start.call(this)
          )
      }
      var b = document.querySelector('#lv-container'),
        c = window.livereOptions || {},
        d = document.querySelector(c.scrollEventTargetSelector)
      addEventListener('scroll', a, d), a()
    }),
    (livere.start = function () {
      livere.attachEvents.call(this),
        set({
          baseURI: 'https://was.livere.me/',
          mobile: isMobile(),
          common: config.parse(),
        })
      var a = window.livereOptions || {},
        b = a.components || ['comment', 'sidebar']
      livere.load(isRestrictIEVersion(7) ? ['comment'] : b)
    }),
    (livere.attachEvents = function () {
      var a = {
        comment: {
          requestCustomLivereOption: function (a, b) {
            widget.comment.sendCustomLivereOption()
          },
          loaded: function (a, b) {
            widget.comment.resize(a, b.height),
              widget.comment.updateParams(),
              widget.comment.insertTaboola(b.taboola)
          },
          resize: function (a, b) {
            return widget.comment.resize(a, b.height)
          },
          highlight: function (a, b) {
            return widget.comment.highlight(a, b.top)
          },
          attached: function () {
            var a = window.livereOptions || {},
              b = document.querySelector(a.scrollEventTargetSelector)
            return (
              addEventListener('scroll', widget.comment.parentHeight, b),
              widget.comment.parentHeight()
            )
          },
          detached: function () {
            var a = window.livereOptions || {},
              b = document.querySelector(a.scrollEventTargetSelector)
            return removeEventListener('scroll', widget.comment.parentHeight, b)
          },
          scrollTo: function (a, b) {
            var c = get('lv_comment').offsetTop,
              d = c + b.position
            return window.scrollTo(0, Math.abs(d) - 50)
          },
          scrollToQuotation: function (a, b) {
            var c = get('lv_comment').offsetTop,
              d = get('quotation'),
              e = b.direction
            return e
              ? (set('quotation', offset()),
                offset() > 5e3 ? window.scrollTo(0, c) : animateScroll(c, e))
              : d > 5e3
              ? window.scrollTo(0, d)
              : animateScroll(d, e)
          },
          sidebar: function (a, b) {
            return widget.sidebar.open(b)
          },
          openCardReplyPopup: function (a, b) {
            return widget.sidebar.openCardReplyPopup(b)
          },
          actionSuccess: function (a, b) {
            return widget.sidebar.actionSuccess(b)
          },
          deleteSuccess: function (a, b) {
            return widget.sidebar.deleteSuccess(b)
          },
          hooker: function (a, b) {
            var c = window.livereHooks
            if (c) {
              var d = {
                common: function (a) {
                  return c[b.type] ? c[b.type].call(this, a) : null
                },
                created: function (a) {
                  return d.common(a)
                },
                write: function (a) {
                  return d.common(a)
                },
                modify: function (a) {
                  return d.common(a)
                },
                remove: function (a) {
                  return d.common(a)
                },
                like: function (a) {
                  return d.common(a)
                },
                dislike: function (a) {
                  return d.common(a)
                },
              }
              return d[b.type] ? d[b.type].call(this, b.data) : null
            }
          },
        },
        sidebar: {
          inited: function (b, c) {
            return a.sidebar.hooker(b, c)
          },
          fail: function () {
            return a.sidebar.close(this)
          },
          state: function () {
            return widget.comment.state()
          },
          close: function (a) {
            return widget.sidebar.close()
          },
          updateBlock: function (a, b) {
            return widget.comment.updateBlock(b)
          },
          closeCardReplyPopup: function (a, b) {
            return widget.sidebar.closeCardReplyPopup()
          },
          requestAction: function (a, b) {
            return widget.comment.requestAction(b)
          },
          requestDeleteReply: function (a, b) {
            return widget.comment.requestDeleteReply(b)
          },
          modifyReplyInformation: function (a, b) {
            return widget.comment.modifyReplyInformation(b)
          },
          removeReply: function (a, b) {
            return widget.comment.removeReply(b)
          },
          notifyCountUpdate: function (a) {
            return widget.sidebar.notifyCountUpdate()
          },
          hooker: function (a, b) {
            var c = window.livereHooks
            if (c) {
              var d = {
                inited: function (a) {
                  return c.sidebarInit ? c.sidebarInit.call(this, a) : null
                },
              }
              return d[b.type] ? d[b.type].call(this, b.data) : null
            }
          },
        },
        utils: {
          hooker: function (a, b) {
            var c = window.livereHooks
            if (c) {
              var d = {
                loginData: function (a) {
                  return c.loginData ? c.loginData.call(this, a) : null
                },
                sessionData: function (a) {
                  return c.sessionData ? c.sessionData.call(this, a) : null
                },
              }
              return d[b.type] ? d[b.type].call(this, b.data) : null
            }
          },
          livereLoggedIn: function () {
            return widget.sidebar.getLoginData()
          },
          cityLoggedIn: function () {
            return widget.sidebar.getCurrentSessionData()
          },
        },
        popup: {
          image: function (a, b) {
            return widget.sidebar.image(b)
          },
        },
      }
      return addEventListener('message', function (b) {
        if (b.data && 'string' == typeof b.data && b.data.match(/^{.*}$/g)) {
          var c = JSON.parse(b.data),
            d = a[c.caller]
          return !!d && d[c.e](c.caller, c.params)
        }
      })
    }),
    (livere.load = function (a) {
      var b = get('common')
      if (!(!a instanceof Array))
        for (var c = 0; c < a.length; c++)
          widget[a[c]] && widget[a[c]].draw(template(a[c], b))
    }),
    (widget.check = (function () {
      var a = {}
      return (
        (a.draw = function (a) {
          if ((console.log(a), a)) {
            var b = serial('lv-check')
            ;(a.style.cssText =
              'min-width:100%;width:100px;*width:100%;height:250px;overflow:hidden;border:0;z-index:124212;'),
              (a.id = b),
              document.getElementById('lv-container').appendChild(a)
          }
        }),
        a
      )
    })()),
    (widget.comment = (function () {
      var a = {}
      return (
        (a.state = function () {
          var a = get('lv_comment')
          if (a) return postMessage(a.contentWindow, { e: 'state' })
        }),
        (a.updateBlock = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'updateBlock',
            params: a,
          })
        }),
        (a.highlight = function (a, b) {
          var c = get('lv_comment').offsetTop
          return window.scrollTo(0, c + b)
        }),
        (a.parentHeight = function (a) {
          var b = offset() - getCommentOffset().top + 30,
            c = document.documentElement.clientHeight,
            d = c / 2
          return postMessage(get('lv_comment').contentWindow, {
            e: 'position',
            params: {
              top: b > 0 ? b : 0,
              center: b > 0 ? b + d : d,
              bottom: c + offset() - 100,
            },
          })
        }),
        (a.draw = function (a) {
          function b(a) {
            return set('lv_comment', document.getElementById(a))
          }
          if (a) {
            var c = serial('lv-comment')
            return (
              (a.style.cssText =
                'min-width:100%;width:100px;*width:100%;height:500px;overflow:hidden;border:0;z-index:124212;'),
              (a.id = c),
              document.getElementById('lv-container').appendChild(a),
              b(c)
            )
          }
        }),
        (a.resize = function (a, b) {
          var c = window.livereOptions,
            d =
              c &&
              void 0 !== c.bottomMargin &&
              !isNaN(Number(c.bottomMargin)) &&
              c.bottomMargin >= 0
                ? c.bottomMargin
                : 40
          return (get('lv_comment').style.height = b + d + 'px')
        }),
        (a.updateParams = function () {
          var a = document.querySelector('meta[property="og:description"]')
          if (a && a.content)
            return postMessage(get('lv_comment').contentWindow, {
              e: 'updateParams',
              params: { description: a.content },
            })
        }),
        (a.sendCustomLivereOption = function () {
          var a = window.livereOptions
          return postMessage(get('lv_comment').contentWindow, {
            e: 'getCustomLivereOption',
            params: { options: a },
          })
        }),
        (a.insertTaboola = function (a) {
          if (a && void 0 !== a.status && !a.status) {
            var b = 'taboola-livere'
            ;(window._taboola = window._taboola || []),
              _taboola.push({ article: 'auto' }),
              (function (a, b, c, d) {
                document.getElementById(d) ||
                  ((a.async = 1),
                  (a.src = c),
                  (a.id = d),
                  b.parentNode.insertBefore(a, b))
              })(
                document.createElement('script'),
                document.getElementsByTagName('script')[0],
                '//cdn.taboola.com/libtrc/' + a.accountId + '/loader.js',
                'tb_loader_script'
              ),
              window.performance &&
                'function' == typeof window.performance.mark &&
                window.performance.mark('tbl_ic')
            var c = document,
              d = c.querySelector('#lv-container'),
              e = c.createElement('div')
            ;(e.id = b),
              d.parentNode.insertBefore(e, d.nextSibling),
              (window._taboola = window._taboola || []),
              _taboola.push({
                mode: 'thumbnails-a',
                container: b,
                placement: a.placement,
                target_type: 'mix',
              }),
              (window._taboola = window._taboola || []),
              _taboola.push({ flush: !0 })
          }
        }),
        (a.updateBlock = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'updateBlock',
            params: a,
          })
        }),
        (a.requestAction = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'requestAction',
            params: a,
          })
        }),
        (a.requestDeleteReply = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'requestDeleteReply',
            params: a,
          })
        }),
        (a.modifyReplyInformation = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'modifyReplyInformation',
            params: a,
          })
        }),
        (a.removeReply = function (a) {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'removeReply',
            params: a,
          })
        }),
        (a.emitPositionEvent = function (a) {
          var b = get('lv_comment')
          if (b) {
            var c = getPosition(b)
            return postMessage(b.contentWindow, {
              e: 'scroll',
              params: {
                relativeX: c.x,
                relativeY: c.y,
                screenHeight: window.innerHeight,
              },
            })
          }
        }),
        a
      )
    })()),
    (widget.sidebar = (function () {
      var a = {}
      return (
        (a.open = function (a) {
          function b(a) {
            var b = get('lv_utils')
            if (b)
              return (
                (b.style.height = '100%'),
                (b.style.display = 'block'),
                postMessage(b.contentWindow, { e: 'open', params: a })
              )
          }
          function c(a) {
            var b = get('common.id'),
              c = 'https://was.livere.me/sidebar/' + b
            if (!a) return (top.location.href = c)
            var d = concatURI(
              c,
              {
                uid: a.uid,
                code: a.code,
                member_group_seq: a.member_group_seq,
                path: a.path,
                memberGroupSeq: a.member_group_seq,
                refer:
                  (window.livereOptions && window.livereOptions.refer) ||
                  window.refer ||
                  location.host + location.pathname,
                mode: 'mobile',
                type: a.target,
              },
              !0
            )
            return (top.location.href = d)
          }
          return (get('mobile') ? c : b).call(this, a)
        }),
        (a.image = function (a) {
          var b = get('lv_utils')
          if (b)
            return (
              (b.style.display = 'block'),
              postMessage(b.contentWindow, { e: 'image', params: a })
            )
        }),
        (a.draw = function (b) {
          function c(a) {
            return set('lv_utils', document.getElementById(a))
          }
          if (b) {
            var d = serial('lv-utils')
            return (
              (b.style.cssText =
                'width:100%;overflow:hidden;border:0;position:fixed;left:0;top:0;z-index:2147483647;display:none'),
              (b.style.height = document.documentElement.clientHeight + 'px'),
              (b.id = d),
              document.getElementsByTagName('body')[0].appendChild(b),
              a.attachEvent(),
              c(d)
            )
          }
        }),
        (a.openCardReplyPopup = function (a) {
          var b = get('lv_utils')
          return (
            (b.style.display = 'block'),
            postMessage(b.contentWindow, { e: 'openCardReplyPopup', params: a })
          )
        }),
        (a.closeCardReplyPopup = function (a) {
          get('lv_utils').style.display = 'none'
        }),
        (a.actionSuccess = function (a) {
          return postMessage(get('lv_utils').contentWindow, {
            e: 'actionSuccess',
            params: a,
          })
        }),
        (a.deleteSuccess = function (a) {
          var b = get('lv_utils')
          return (
            (b.style.display = 'none'),
            postMessage(b.contentWindow, { e: 'deleteSuccess', params: a })
          )
        }),
        (a.attachEvent = function () {
          addEventListener('resize', widget.sidebar.resize)
        }),
        (a.resize = function () {
          var a = get('lv_utils'),
            b = document.documentElement.clientHeight
          ;(a.style.height = b + 'px'),
            postMessage(a.contentWindow, { e: 'resize', params: { height: b } })
        }),
        (a.close = function () {
          return (
            (get('lv_utils').style.display = 'none'),
            removeEventListener('resize', widget.sidebar.resize),
            postMessage(get('lv_comment').contentWindow, {
              e: 'setCurrentFocus',
            })
          )
        }),
        (a.getLoginData = function () {
          return postMessage(get('lv_utils').contentWindow, { e: 'loginData' })
        }),
        (a.getCurrentSessionData = function () {
          return postMessage(get('lv_utils').contentWindow, {
            e: 'sessionData',
          })
        }),
        (a.notifyCountUpdate = function () {
          return postMessage(get('lv_comment').contentWindow, {
            e: 'notifyCountUpdate',
          })
        }),
        a
      )
    })()),
    (widget.oauth = function () {
      !(function (a, b) {
        var c,
          d = a.getElementsByTagName(b)[0]
        ;(c = a.createElement(b)),
          (c.src = 'https://api-city.livere.com/smartlogin'),
          (c.async = !0),
          d.parentNode.insertBefore(c, d)
      })(document, 'script')
    }),
    (config.previousVersion = function () {
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (a, b) {
          for (var c = b || 0, d = this.length; c < d; c++)
            if (this[c] === a) return c
          return -1
        }),
        (function () {
          var a = document.createStyleSheet(),
            b = function (b, c) {
              var d,
                e = document.all,
                f = e.length,
                g = []
              for (
                a.addRule(b, 'foo:bar'), d = 0;
                d < f &&
                !(
                  'bar' === e[d].currentStyle.foo &&
                  (g.push(e[d]), g.length > c)
                );
                d += 1
              );
              return a.removeRule(0), g
            }
          document.querySelectorAll ||
            document.querySelector ||
            ((document.querySelectorAll = function (a) {
              return b(a, 1 / 0)
            }),
            (document.querySelector = function (a) {
              return b(a, 1)[0] || null
            }))
        })(),
        'object' != typeof JSON && (JSON = {}),
        (function () {
          function f(a) {
            return a < 10 ? '0' + a : a
          }
          function this_value() {
            return this.valueOf()
          }
          function quote(a) {
            return (
              (escapable.lastIndex = 0),
              escapable.test(a)
                ? '"' +
                  a.replace(escapable, function (a) {
                    var b = meta[a]
                    return 'string' == typeof b
                      ? b
                      : '\\u' +
                          ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
                  }) +
                  '"'
                : '"' + a + '"'
            )
          }
          function str(a, b) {
            var c,
              d,
              e,
              f,
              g,
              h = gap,
              i = b[a]
            switch (
              (i &&
                'object' == typeof i &&
                'function' == typeof i.toJSON &&
                (i = i.toJSON(a)),
              'function' == typeof rep && (i = rep.call(b, a, i)),
              typeof i)
            ) {
              case 'string':
                return quote(i)
              case 'number':
                return isFinite(i) ? String(i) : 'null'
              case 'boolean':
              case 'null':
                return String(i)
              case 'object':
                if (!i) return 'null'
                if (
                  ((gap += indent),
                  (g = []),
                  '[object Array]' === Object.prototype.toString.apply(i))
                ) {
                  for (f = i.length, c = 0; c < f; c += 1)
                    g[c] = str(c, i) || 'null'
                  return (
                    (e =
                      0 === g.length
                        ? '[]'
                        : gap
                        ? '[\n' + gap + g.join(',\n' + gap) + '\n' + h + ']'
                        : '[' + g.join(',') + ']'),
                    (gap = h),
                    e
                  )
                }
                if (rep && 'object' == typeof rep)
                  for (f = rep.length, c = 0; c < f; c += 1)
                    'string' == typeof rep[c] &&
                      ((d = rep[c]),
                      (e = str(d, i)) &&
                        g.push(quote(d) + (gap ? ': ' : ':') + e))
                else
                  for (d in i)
                    Object.prototype.hasOwnProperty.call(i, d) &&
                      (e = str(d, i)) &&
                      g.push(quote(d) + (gap ? ': ' : ':') + e)
                return (
                  (e =
                    0 === g.length
                      ? '{}'
                      : gap
                      ? '{\n' + gap + g.join(',\n' + gap) + '\n' + h + '}'
                      : '{' + g.join(',') + '}'),
                  (gap = h),
                  e
                )
            }
          }
          'function' != typeof Date.prototype.toJSON &&
            ((Date.prototype.toJSON = function () {
              return isFinite(this.valueOf())
                ? this.getUTCFullYear() +
                    '-' +
                    f(this.getUTCMonth() + 1) +
                    '-' +
                    f(this.getUTCDate()) +
                    'T' +
                    f(this.getUTCHours()) +
                    ':' +
                    f(this.getUTCMinutes()) +
                    ':' +
                    f(this.getUTCSeconds()) +
                    'Z'
                : null
            }),
            (Boolean.prototype.toJSON = this_value),
            (Number.prototype.toJSON = this_value),
            (String.prototype.toJSON = this_value))
          var cx, escapable, gap, indent, meta, rep
          'function' != typeof JSON.stringify &&
            ((escapable =
              /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
            (meta = {
              '\b': '\\b',
              '\t': '\\t',
              '\n': '\\n',
              '\f': '\\f',
              '\r': '\\r',
              '"': '\\"',
              '\\': '\\\\',
            }),
            (JSON.stringify = function (a, b, c) {
              var d
              if (((gap = ''), (indent = ''), 'number' == typeof c))
                for (d = 0; d < c; d += 1) indent += ' '
              else 'string' == typeof c && (indent = c)
              if (
                ((rep = b),
                b &&
                  'function' != typeof b &&
                  ('object' != typeof b || 'number' != typeof b.length))
              )
                throw new Error('JSON.stringify')
              return str('', { '': a })
            })),
            'function' != typeof JSON.parse &&
              ((cx =
                /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
              (JSON.parse = function (text, reviver) {
                function walk(a, b) {
                  var c,
                    d,
                    e = a[b]
                  if (e && 'object' == typeof e)
                    for (c in e)
                      Object.prototype.hasOwnProperty.call(e, c) &&
                        ((d = walk(e, c)),
                        void 0 !== d ? (e[c] = d) : delete e[c])
                  return reviver.call(a, b, e)
                }
                var j
                if (
                  ((text = String(text)),
                  (cx.lastIndex = 0),
                  cx.test(text) &&
                    (text = text.replace(cx, function (a) {
                      return (
                        '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
                      )
                    })),
                  /^[\],:{}\s]*$/.test(
                    text
                      .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                      .replace(
                        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        ']'
                      )
                      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                  ))
                )
                  return (
                    (j = eval('(' + text + ')')),
                    'function' == typeof reviver ? walk({ '': j }, '') : j
                  )
                throw new SyntaxError('JSON.parse')
              }))
        })(),
        (window.atob = function (a) {
          a = String(a)
          var b,
            c = 0,
            d = [],
            e = 0,
            f = 0
          if (
            ((a = a.replace(/\s/g, '')),
            a.length % 4 == 0 && (a = a.replace(/=+$/, '')),
            a.length % 4 == 1)
          )
            throw Error('InvalidCharacterError')
          if (/[^+\/0-9A-Za-z]/.test(a)) throw Error('InvalidCharacterError')
          for (; c < a.length; )
            (b =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                a.charAt(c)
              )),
              (e = (e << 6) | b),
              (f += 6),
              24 === f &&
                (d.push(String.fromCharCode((e >> 16) & 255)),
                d.push(String.fromCharCode((e >> 8) & 255)),
                d.push(String.fromCharCode(255 & e)),
                (f = 0),
                (e = 0)),
              (c += 1)
          return (
            12 === f
              ? ((e >>= 4), d.push(String.fromCharCode(255 & e)))
              : 18 === f &&
                ((e >>= 2),
                d.push(String.fromCharCode((e >> 8) & 255)),
                d.push(String.fromCharCode(255 & e))),
            d.join('')
          )
        }),
        Object.keys ||
          (Object.keys = function (a) {
            if (a !== Object(a))
              throw new TypeError('Object.keys called on a non-object')
            var b,
              c = []
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b)
            return c
          })
    }),
    (config.parse = function () {
      var a = document,
        b = a.querySelector('#lv-container'),
        c = window.livereOptions || {}
      if (b) {
        var d = a.querySelector('meta[property="og:image"]'),
          e = a.querySelector('meta[property="og:title"]'),
          f = a.querySelector('meta[property="og:url"]'),
          g = location.hash,
          h = g.match(/#highlight-comment=([0-9]{1,})/),
          i = {
            id: b.getAttribute('data-id'),
            refer: c.refer || window.refer || location.host + location.pathname,
          }
        if (
          (~location.host.indexOf('tistory.com') &&
            hasProtocol(i.refer) &&
            (i.refer = i.refer.replace(
              new RegExp('^https?://', 'i'),
              'http://'
            )),
          !isObjectPropertiesNull(i))
        ) {
          ;(i.uid = b.getAttribute('data-uid') || null),
            (i.site = c.site || (f ? f.getAttribute('content') : location.href))
          var j =
            (e ? e.getAttribute('content') : document.title) ||
            'Welcome to the black parade'
          return (
            (i.title = encodeURIComponent(escape(j))),
            (i.titleLength = j.length),
            (i.logo = d ? d.getAttribute('content') : null),
            (i.highlightSeq = h ? h[h.length - 1] : null),
            (i.redirectOrigin = c.redirectOrigin || null),
            (i.preview = !!c.preview && c.preview),
            c.facebookPageId &&
              c.facebookUploadUrl &&
              ((i.facebookPageId = c.facebookPageId),
              (i.facebookUploadUrl = c.facebookUploadUrl)),
            i
          )
        }
      }
    })
  var options = window.livereOptions || {},
    scrollEventTarget = document.querySelector(
      options.scrollEventTargetSelector
    )
  return (
    addEventListener(
      'scroll',
      widget.comment.emitPositionEvent,
      scrollEventTarget
    ),
    (livere.reload = function () {
      var a,
        b,
        c = Object.keys(bound)
      for (a = 0; a < c.length; a++) {
        var d = c[a],
          e = bound[d]
        for (b = 0; b < e.length; b++) removeEventListener(d, e[b])
        delete bound[d]
      }
      var f = document.querySelector('#lv-container'),
        g = get('lv_comment'),
        h = get('lv_utils')
      if (
        (f && (g && f.removeChild(g), h && document.body.removeChild(h)),
        (variables = {}),
        (bound = {}),
        (window.livereOptions || {}).eagerLoading)
      )
        return location.search.indexOf('redirectOrigin=true') > -1
          ? widget.oauth.call(this)
          : livere.start.call(this)
      livere.loading.call(this)
    }),
    (livere.get = get),
    (livere.set = set),
    (livere.refresh = function () {
      return widget.comment.state()
    }),
    (livere.common = {
      utils: {
        open: function () {
          return widget.sidebar.open()
        },
        getLoginData: function () {
          return widget.sidebar.getLoginData()
        },
        getCurrentSessionData: function () {
          return widget.sidebar.getCurrentSessionData()
        },
      },
    }),
    livere
  )
})()
LivereTower.init()
