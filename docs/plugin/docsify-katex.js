!(function (t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var a = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function (e) {
              return t[e]
            }.bind(null, a)
          )
      return n
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 1))
})([
  function (t, e, r) {
    var n
    'undefined' != typeof self && self,
      (n = function () {
        return (function (t) {
          var e = {}
          function r(n) {
            if (e[n]) return e[n].exports
            var a = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
          }
          return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
              r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n })
            }),
            (r.r = function (t) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (r.t = function (t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t
              var n = Object.create(null)
              if (
                (r.r(n),
                Object.defineProperty(n, 'default', {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && 'string' != typeof t)
              )
                for (var a in t)
                  r.d(
                    n,
                    a,
                    function (e) {
                      return t[e]
                    }.bind(null, a)
                  )
              return n
            }),
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default
                    }
                  : function () {
                      return t
                    }
              return r.d(e, 'a', e), e
            }),
            (r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (r.p = ''),
            r((r.s = 1))
          )
        })([
          function (t, e, r) {},
          function (t, e, r) {
            'use strict'
            r.r(e)
            r(0)
            var n = (function () {
                function t(t, e, r) {
                  ;(this.lexer = void 0),
                    (this.start = void 0),
                    (this.end = void 0),
                    (this.lexer = t),
                    (this.start = e),
                    (this.end = r)
                }
                return (
                  (t.range = function (e, r) {
                    return r
                      ? e && e.loc && r.loc && e.loc.lexer === r.loc.lexer
                        ? new t(e.loc.lexer, e.loc.start, r.loc.end)
                        : null
                      : e && e.loc
                  }),
                  t
                )
              })(),
              a = (function () {
                function t(t, e) {
                  ;(this.text = void 0),
                    (this.loc = void 0),
                    (this.text = t),
                    (this.loc = e)
                }
                return (
                  (t.prototype.range = function (e, r) {
                    return new t(r, n.range(this, e))
                  }),
                  t
                )
              })(),
              i = function t(e, r) {
                this.position = void 0
                var n,
                  a = 'KaTeX parse error: ' + e,
                  i = r && r.loc
                if (i && i.start <= i.end) {
                  var o = i.lexer.input
                  n = i.start
                  var s = i.end
                  n === o.length
                    ? (a += ' at end of input: ')
                    : (a += ' at position ' + (n + 1) + ': ')
                  var h = o.slice(n, s).replace(/[^]/g, '$&̲')
                  a +=
                    (n > 15 ? '…' + o.slice(n - 15, n) : o.slice(0, n)) +
                    h +
                    (s + 15 < o.length ? o.slice(s, s + 15) + '…' : o.slice(s))
                }
                var l = new Error(a)
                return (
                  (l.name = 'ParseError'),
                  (l.__proto__ = t.prototype),
                  (l.position = n),
                  l
                )
              }
            i.prototype.__proto__ = Error.prototype
            var o = i,
              s = /([A-Z])/g,
              h = {
                '&': '&amp;',
                '>': '&gt;',
                '<': '&lt;',
                '"': '&quot;',
                "'": '&#x27;',
              },
              l = /[&><"']/g
            var m = function t(e) {
                return 'ordgroup' === e.type
                  ? 1 === e.body.length
                    ? t(e.body[0])
                    : e
                  : 'color' === e.type
                  ? 1 === e.body.length
                    ? t(e.body[0])
                    : e
                  : 'font' === e.type
                  ? t(e.body)
                  : e
              },
              c = {
                contains: function (t, e) {
                  return -1 !== t.indexOf(e)
                },
                deflt: function (t, e) {
                  return void 0 === t ? e : t
                },
                escape: function (t) {
                  return String(t).replace(l, function (t) {
                    return h[t]
                  })
                },
                hyphenate: function (t) {
                  return t.replace(s, '-$1').toLowerCase()
                },
                getBaseElem: m,
                isCharacterBox: function (t) {
                  var e = m(t)
                  return (
                    'mathord' === e.type ||
                    'textord' === e.type ||
                    'atom' === e.type
                  )
                },
              },
              u = (function () {
                function t(t) {
                  ;(this.displayMode = void 0),
                    (this.leqno = void 0),
                    (this.fleqn = void 0),
                    (this.throwOnError = void 0),
                    (this.errorColor = void 0),
                    (this.macros = void 0),
                    (this.colorIsTextColor = void 0),
                    (this.strict = void 0),
                    (this.maxSize = void 0),
                    (this.maxExpand = void 0),
                    (this.allowedProtocols = void 0),
                    (t = t || {}),
                    (this.displayMode = c.deflt(t.displayMode, !1)),
                    (this.leqno = c.deflt(t.leqno, !1)),
                    (this.fleqn = c.deflt(t.fleqn, !1)),
                    (this.throwOnError = c.deflt(t.throwOnError, !0)),
                    (this.errorColor = c.deflt(t.errorColor, '#cc0000')),
                    (this.macros = t.macros || {}),
                    (this.colorIsTextColor = c.deflt(t.colorIsTextColor, !1)),
                    (this.strict = c.deflt(t.strict, 'warn')),
                    (this.maxSize = Math.max(0, c.deflt(t.maxSize, 1 / 0))),
                    (this.maxExpand = Math.max(0, c.deflt(t.maxExpand, 1e3))),
                    (this.allowedProtocols = c.deflt(t.allowedProtocols, [
                      'http',
                      'https',
                      'mailto',
                      '_relative',
                    ]))
                }
                var e = t.prototype
                return (
                  (e.reportNonstrict = function (t, e, r) {
                    var n = this.strict
                    if (
                      ('function' == typeof n && (n = n(t, e, r)),
                      n && 'ignore' !== n)
                    ) {
                      if (!0 === n || 'error' === n)
                        throw new o(
                          "LaTeX-incompatible input and strict mode is set to 'error': " +
                            e +
                            ' [' +
                            t +
                            ']',
                          r
                        )
                      'warn' === n
                        ? 'undefined' != typeof console &&
                          console.warn(
                            "LaTeX-incompatible input and strict mode is set to 'warn': " +
                              e +
                              ' [' +
                              t +
                              ']'
                          )
                        : 'undefined' != typeof console &&
                          console.warn(
                            "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                              n +
                              "': " +
                              e +
                              ' [' +
                              t +
                              ']'
                          )
                    }
                  }),
                  (e.useStrictBehavior = function (t, e, r) {
                    var n = this.strict
                    if ('function' == typeof n)
                      try {
                        n = n(t, e, r)
                      } catch (t) {
                        n = 'error'
                      }
                    return (
                      !(!n || 'ignore' === n) &&
                      (!0 === n ||
                        'error' === n ||
                        ('warn' === n
                          ? ('undefined' != typeof console &&
                              console.warn(
                                "LaTeX-incompatible input and strict mode is set to 'warn': " +
                                  e +
                                  ' [' +
                                  t +
                                  ']'
                              ),
                            !1)
                          : ('undefined' != typeof console &&
                              console.warn(
                                "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                                  n +
                                  "': " +
                                  e +
                                  ' [' +
                                  t +
                                  ']'
                              ),
                            !1)))
                    )
                  }),
                  t
                )
              })(),
              d = (function () {
                function t(t, e, r) {
                  ;(this.id = void 0),
                    (this.size = void 0),
                    (this.cramped = void 0),
                    (this.id = t),
                    (this.size = e),
                    (this.cramped = r)
                }
                var e = t.prototype
                return (
                  (e.sup = function () {
                    return p[f[this.id]]
                  }),
                  (e.sub = function () {
                    return p[g[this.id]]
                  }),
                  (e.fracNum = function () {
                    return p[x[this.id]]
                  }),
                  (e.fracDen = function () {
                    return p[v[this.id]]
                  }),
                  (e.cramp = function () {
                    return p[y[this.id]]
                  }),
                  (e.text = function () {
                    return p[b[this.id]]
                  }),
                  (e.isTight = function () {
                    return this.size >= 2
                  }),
                  t
                )
              })(),
              p = [
                new d(0, 0, !1),
                new d(1, 0, !0),
                new d(2, 1, !1),
                new d(3, 1, !0),
                new d(4, 2, !1),
                new d(5, 2, !0),
                new d(6, 3, !1),
                new d(7, 3, !0),
              ],
              f = [4, 5, 4, 5, 6, 7, 6, 7],
              g = [5, 5, 5, 5, 7, 7, 7, 7],
              x = [2, 3, 4, 5, 6, 7, 6, 7],
              v = [3, 3, 5, 5, 7, 7, 7, 7],
              y = [1, 1, 3, 3, 5, 5, 7, 7],
              b = [0, 1, 2, 3, 2, 3, 2, 3],
              w = {
                DISPLAY: p[0],
                TEXT: p[2],
                SCRIPT: p[4],
                SCRIPTSCRIPT: p[6],
              },
              k = [
                {
                  name: 'latin',
                  blocks: [
                    [256, 591],
                    [768, 879],
                  ],
                },
                { name: 'cyrillic', blocks: [[1024, 1279]] },
                { name: 'brahmic', blocks: [[2304, 4255]] },
                { name: 'georgian', blocks: [[4256, 4351]] },
                {
                  name: 'cjk',
                  blocks: [
                    [12288, 12543],
                    [19968, 40879],
                    [65280, 65376],
                  ],
                },
                { name: 'hangul', blocks: [[44032, 55215]] },
              ]
            var S = []
            function M(t) {
              for (var e = 0; e < S.length; e += 2)
                if (t >= S[e] && t <= S[e + 1]) return !0
              return !1
            }
            k.forEach(function (t) {
              return t.blocks.forEach(function (t) {
                return S.push.apply(S, t)
              })
            })
            var z = {
                path: {
                  sqrtMain:
                    'M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z',
                  sqrtSize1:
                    'M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z',
                  sqrtSize2:
                    'M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z',
                  sqrtSize3:
                    'M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z',
                  sqrtSize4:
                    'M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z',
                  doubleleftarrow:
                    'M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z',
                  doublerightarrow:
                    'M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z',
                  leftarrow:
                    'M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z',
                  leftbrace:
                    'M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z',
                  leftbraceunder:
                    'M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z',
                  leftgroup:
                    'M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z',
                  leftgroupunder:
                    'M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z',
                  leftharpoon:
                    'M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z',
                  leftharpoonplus:
                    'M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z',
                  leftharpoondown:
                    'M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z',
                  leftharpoondownplus:
                    'M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z',
                  lefthook:
                    'M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z',
                  leftlinesegment:
                    'M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z',
                  leftmapsto:
                    'M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z',
                  leftToFrom:
                    'M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z',
                  longequal:
                    'M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z',
                  midbrace:
                    'M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z',
                  midbraceunder:
                    'M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z',
                  oiintSize1:
                    'M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z',
                  oiintSize2:
                    'M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z',
                  oiiintSize1:
                    'M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z',
                  oiiintSize2:
                    'M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z',
                  rightarrow:
                    'M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z',
                  rightbrace:
                    'M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z',
                  rightbraceunder:
                    'M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z',
                  rightgroup:
                    'M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z',
                  rightgroupunder:
                    'M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z',
                  rightharpoon:
                    'M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z',
                  rightharpoonplus:
                    'M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z',
                  rightharpoondown:
                    'M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z',
                  rightharpoondownplus:
                    'M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z',
                  righthook:
                    'M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z',
                  rightlinesegment:
                    'M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z',
                  rightToFrom:
                    'M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z',
                  twoheadleftarrow:
                    'M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z',
                  twoheadrightarrow:
                    'M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z',
                  tilde1:
                    'M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z',
                  tilde2:
                    'M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z',
                  tilde3:
                    'M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z',
                  tilde4:
                    'M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z',
                  vec: 'M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z',
                  widehat1:
                    'M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z',
                  widehat2:
                    'M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z',
                  widehat3:
                    'M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z',
                  widehat4:
                    'M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z',
                  widecheck1:
                    'M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z',
                  widecheck2:
                    'M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z',
                  widecheck3:
                    'M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z',
                  widecheck4:
                    'M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z',
                  baraboveleftarrow:
                    'M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z',
                  rightarrowabovebar:
                    'M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z',
                  baraboveshortleftharpoon:
                    'M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z',
                  rightharpoonaboveshortbar:
                    'M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z',
                  shortbaraboveleftharpoon:
                    'M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z',
                  shortrightharpoonabovebar:
                    'M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z',
                },
              },
              T = (function () {
                function t(t) {
                  ;(this.children = void 0),
                    (this.classes = void 0),
                    (this.height = void 0),
                    (this.depth = void 0),
                    (this.maxFontSize = void 0),
                    (this.style = void 0),
                    (this.children = t),
                    (this.classes = []),
                    (this.height = 0),
                    (this.depth = 0),
                    (this.maxFontSize = 0),
                    (this.style = {})
                }
                var e = t.prototype
                return (
                  (e.hasClass = function (t) {
                    return c.contains(this.classes, t)
                  }),
                  (e.toNode = function () {
                    for (
                      var t = document.createDocumentFragment(), e = 0;
                      e < this.children.length;
                      e++
                    )
                      t.appendChild(this.children[e].toNode())
                    return t
                  }),
                  (e.toMarkup = function () {
                    for (var t = '', e = 0; e < this.children.length; e++)
                      t += this.children[e].toMarkup()
                    return t
                  }),
                  (e.toText = function () {
                    var t = function (t) {
                      return t.toText()
                    }
                    return this.children.map(t).join('')
                  }),
                  t
                )
              })(),
              A = function (t) {
                return t
                  .filter(function (t) {
                    return t
                  })
                  .join(' ')
              },
              B = function (t, e, r) {
                if (
                  ((this.classes = t || []),
                  (this.attributes = {}),
                  (this.height = 0),
                  (this.depth = 0),
                  (this.maxFontSize = 0),
                  (this.style = r || {}),
                  e)
                ) {
                  e.style.isTight() && this.classes.push('mtight')
                  var n = e.getColor()
                  n && (this.style.color = n)
                }
              },
              C = function (t) {
                var e = document.createElement(t)
                for (var r in ((e.className = A(this.classes)), this.style))
                  this.style.hasOwnProperty(r) && (e.style[r] = this.style[r])
                for (var n in this.attributes)
                  this.attributes.hasOwnProperty(n) &&
                    e.setAttribute(n, this.attributes[n])
                for (var a = 0; a < this.children.length; a++)
                  e.appendChild(this.children[a].toNode())
                return e
              },
              N = function (t) {
                var e = '<' + t
                this.classes.length &&
                  (e += ' class="' + c.escape(A(this.classes)) + '"')
                var r = ''
                for (var n in this.style)
                  this.style.hasOwnProperty(n) &&
                    (r += c.hyphenate(n) + ':' + this.style[n] + ';')
                for (var a in (r && (e += ' style="' + c.escape(r) + '"'),
                this.attributes))
                  this.attributes.hasOwnProperty(a) &&
                    (e += ' ' + a + '="' + c.escape(this.attributes[a]) + '"')
                e += '>'
                for (var i = 0; i < this.children.length; i++)
                  e += this.children[i].toMarkup()
                return (e += '</' + t + '>')
              },
              q = (function () {
                function t(t, e, r, n) {
                  ;(this.children = void 0),
                    (this.attributes = void 0),
                    (this.classes = void 0),
                    (this.height = void 0),
                    (this.depth = void 0),
                    (this.width = void 0),
                    (this.maxFontSize = void 0),
                    (this.style = void 0),
                    B.call(this, t, r, n),
                    (this.children = e || [])
                }
                var e = t.prototype
                return (
                  (e.setAttribute = function (t, e) {
                    this.attributes[t] = e
                  }),
                  (e.hasClass = function (t) {
                    return c.contains(this.classes, t)
                  }),
                  (e.toNode = function () {
                    return C.call(this, 'span')
                  }),
                  (e.toMarkup = function () {
                    return N.call(this, 'span')
                  }),
                  t
                )
              })(),
              O = (function () {
                function t(t, e, r, n) {
                  ;(this.children = void 0),
                    (this.attributes = void 0),
                    (this.classes = void 0),
                    (this.height = void 0),
                    (this.depth = void 0),
                    (this.maxFontSize = void 0),
                    (this.style = void 0),
                    B.call(this, e, n),
                    (this.children = r || []),
                    this.setAttribute('href', t)
                }
                var e = t.prototype
                return (
                  (e.setAttribute = function (t, e) {
                    this.attributes[t] = e
                  }),
                  (e.hasClass = function (t) {
                    return c.contains(this.classes, t)
                  }),
                  (e.toNode = function () {
                    return C.call(this, 'a')
                  }),
                  (e.toMarkup = function () {
                    return N.call(this, 'a')
                  }),
                  t
                )
              })(),
              E = { î: 'ı̂', ï: 'ı̈', í: 'ı́', ì: 'ı̀' },
              I = (function () {
                function t(t, e, r, n, a, i, o, s) {
                  ;(this.text = void 0),
                    (this.height = void 0),
                    (this.depth = void 0),
                    (this.italic = void 0),
                    (this.skew = void 0),
                    (this.width = void 0),
                    (this.maxFontSize = void 0),
                    (this.classes = void 0),
                    (this.style = void 0),
                    (this.text = t),
                    (this.height = e || 0),
                    (this.depth = r || 0),
                    (this.italic = n || 0),
                    (this.skew = a || 0),
                    (this.width = i || 0),
                    (this.classes = o || []),
                    (this.style = s || {}),
                    (this.maxFontSize = 0)
                  var h = (function (t) {
                    for (var e = 0; e < k.length; e++)
                      for (var r = k[e], n = 0; n < r.blocks.length; n++) {
                        var a = r.blocks[n]
                        if (t >= a[0] && t <= a[1]) return r.name
                      }
                    return null
                  })(this.text.charCodeAt(0))
                  h && this.classes.push(h + '_fallback'),
                    /[îïíì]/.test(this.text) && (this.text = E[this.text])
                }
                var e = t.prototype
                return (
                  (e.hasClass = function (t) {
                    return c.contains(this.classes, t)
                  }),
                  (e.toNode = function () {
                    var t = document.createTextNode(this.text),
                      e = null
                    for (var r in (this.italic > 0 &&
                      ((e = document.createElement('span')).style.marginRight =
                        this.italic + 'em'),
                    this.classes.length > 0 &&
                      ((e = e || document.createElement('span')).className = A(
                        this.classes
                      )),
                    this.style))
                      this.style.hasOwnProperty(r) &&
                        ((e = e || document.createElement('span')).style[r] =
                          this.style[r])
                    return e ? (e.appendChild(t), e) : t
                  }),
                  (e.toMarkup = function () {
                    var t = !1,
                      e = '<span'
                    this.classes.length &&
                      ((t = !0),
                      (e += ' class="'),
                      (e += c.escape(A(this.classes))),
                      (e += '"'))
                    var r = ''
                    for (var n in (this.italic > 0 &&
                      (r += 'margin-right:' + this.italic + 'em;'),
                    this.style))
                      this.style.hasOwnProperty(n) &&
                        (r += c.hyphenate(n) + ':' + this.style[n] + ';')
                    r && ((t = !0), (e += ' style="' + c.escape(r) + '"'))
                    var a = c.escape(this.text)
                    return t ? ((e += '>'), (e += a), (e += '</span>')) : a
                  }),
                  t
                )
              })(),
              R = (function () {
                function t(t, e) {
                  ;(this.children = void 0),
                    (this.attributes = void 0),
                    (this.children = t || []),
                    (this.attributes = e || {})
                }
                var e = t.prototype
                return (
                  (e.toNode = function () {
                    var t = document.createElementNS(
                      'http://www.w3.org/2000/svg',
                      'svg'
                    )
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) && t.setAttribute(e, this.attributes[e])
                    for (var r = 0; r < this.children.length; r++)
                      t.appendChild(this.children[r].toNode())
                    return t
                  }),
                  (e.toMarkup = function () {
                    var t = '<svg'
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) && (t += ' ' + e + "='" + this.attributes[e] + "'")
                    t += '>'
                    for (var r = 0; r < this.children.length; r++)
                      t += this.children[r].toMarkup()
                    return (t += '</svg>')
                  }),
                  t
                )
              })(),
              L = (function () {
                function t(t, e) {
                  ;(this.pathName = void 0),
                    (this.alternate = void 0),
                    (this.pathName = t),
                    (this.alternate = e)
                }
                var e = t.prototype
                return (
                  (e.toNode = function () {
                    var t = document.createElementNS(
                      'http://www.w3.org/2000/svg',
                      'path'
                    )
                    return (
                      this.alternate
                        ? t.setAttribute('d', this.alternate)
                        : t.setAttribute('d', z.path[this.pathName]),
                      t
                    )
                  }),
                  (e.toMarkup = function () {
                    return this.alternate
                      ? "<path d='" + this.alternate + "'/>"
                      : "<path d='" + z.path[this.pathName] + "'/>"
                  }),
                  t
                )
              })(),
              P = (function () {
                function t(t) {
                  ;(this.attributes = void 0), (this.attributes = t || {})
                }
                var e = t.prototype
                return (
                  (e.toNode = function () {
                    var t = document.createElementNS(
                      'http://www.w3.org/2000/svg',
                      'line'
                    )
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) && t.setAttribute(e, this.attributes[e])
                    return t
                  }),
                  (e.toMarkup = function () {
                    var t = '<line'
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) && (t += ' ' + e + "='" + this.attributes[e] + "'")
                    return (t += '/>')
                  }),
                  t
                )
              })()
            var D = {
                'AMS-Regular': {
                  65: [0, 0.68889, 0, 0, 0.72222],
                  66: [0, 0.68889, 0, 0, 0.66667],
                  67: [0, 0.68889, 0, 0, 0.72222],
                  68: [0, 0.68889, 0, 0, 0.72222],
                  69: [0, 0.68889, 0, 0, 0.66667],
                  70: [0, 0.68889, 0, 0, 0.61111],
                  71: [0, 0.68889, 0, 0, 0.77778],
                  72: [0, 0.68889, 0, 0, 0.77778],
                  73: [0, 0.68889, 0, 0, 0.38889],
                  74: [0.16667, 0.68889, 0, 0, 0.5],
                  75: [0, 0.68889, 0, 0, 0.77778],
                  76: [0, 0.68889, 0, 0, 0.66667],
                  77: [0, 0.68889, 0, 0, 0.94445],
                  78: [0, 0.68889, 0, 0, 0.72222],
                  79: [0.16667, 0.68889, 0, 0, 0.77778],
                  80: [0, 0.68889, 0, 0, 0.61111],
                  81: [0.16667, 0.68889, 0, 0, 0.77778],
                  82: [0, 0.68889, 0, 0, 0.72222],
                  83: [0, 0.68889, 0, 0, 0.55556],
                  84: [0, 0.68889, 0, 0, 0.66667],
                  85: [0, 0.68889, 0, 0, 0.72222],
                  86: [0, 0.68889, 0, 0, 0.72222],
                  87: [0, 0.68889, 0, 0, 1],
                  88: [0, 0.68889, 0, 0, 0.72222],
                  89: [0, 0.68889, 0, 0, 0.72222],
                  90: [0, 0.68889, 0, 0, 0.66667],
                  107: [0, 0.68889, 0, 0, 0.55556],
                  165: [0, 0.675, 0.025, 0, 0.75],
                  174: [0.15559, 0.69224, 0, 0, 0.94666],
                  240: [0, 0.68889, 0, 0, 0.55556],
                  295: [0, 0.68889, 0, 0, 0.54028],
                  710: [0, 0.825, 0, 0, 2.33334],
                  732: [0, 0.9, 0, 0, 2.33334],
                  770: [0, 0.825, 0, 0, 2.33334],
                  771: [0, 0.9, 0, 0, 2.33334],
                  989: [0.08167, 0.58167, 0, 0, 0.77778],
                  1008: [0, 0.43056, 0.04028, 0, 0.66667],
                  8245: [0, 0.54986, 0, 0, 0.275],
                  8463: [0, 0.68889, 0, 0, 0.54028],
                  8487: [0, 0.68889, 0, 0, 0.72222],
                  8498: [0, 0.68889, 0, 0, 0.55556],
                  8502: [0, 0.68889, 0, 0, 0.66667],
                  8503: [0, 0.68889, 0, 0, 0.44445],
                  8504: [0, 0.68889, 0, 0, 0.66667],
                  8513: [0, 0.68889, 0, 0, 0.63889],
                  8592: [-0.03598, 0.46402, 0, 0, 0.5],
                  8594: [-0.03598, 0.46402, 0, 0, 0.5],
                  8602: [-0.13313, 0.36687, 0, 0, 1],
                  8603: [-0.13313, 0.36687, 0, 0, 1],
                  8606: [0.01354, 0.52239, 0, 0, 1],
                  8608: [0.01354, 0.52239, 0, 0, 1],
                  8610: [0.01354, 0.52239, 0, 0, 1.11111],
                  8611: [0.01354, 0.52239, 0, 0, 1.11111],
                  8619: [0, 0.54986, 0, 0, 1],
                  8620: [0, 0.54986, 0, 0, 1],
                  8621: [-0.13313, 0.37788, 0, 0, 1.38889],
                  8622: [-0.13313, 0.36687, 0, 0, 1],
                  8624: [0, 0.69224, 0, 0, 0.5],
                  8625: [0, 0.69224, 0, 0, 0.5],
                  8630: [0, 0.43056, 0, 0, 1],
                  8631: [0, 0.43056, 0, 0, 1],
                  8634: [0.08198, 0.58198, 0, 0, 0.77778],
                  8635: [0.08198, 0.58198, 0, 0, 0.77778],
                  8638: [0.19444, 0.69224, 0, 0, 0.41667],
                  8639: [0.19444, 0.69224, 0, 0, 0.41667],
                  8642: [0.19444, 0.69224, 0, 0, 0.41667],
                  8643: [0.19444, 0.69224, 0, 0, 0.41667],
                  8644: [0.1808, 0.675, 0, 0, 1],
                  8646: [0.1808, 0.675, 0, 0, 1],
                  8647: [0.1808, 0.675, 0, 0, 1],
                  8648: [0.19444, 0.69224, 0, 0, 0.83334],
                  8649: [0.1808, 0.675, 0, 0, 1],
                  8650: [0.19444, 0.69224, 0, 0, 0.83334],
                  8651: [0.01354, 0.52239, 0, 0, 1],
                  8652: [0.01354, 0.52239, 0, 0, 1],
                  8653: [-0.13313, 0.36687, 0, 0, 1],
                  8654: [-0.13313, 0.36687, 0, 0, 1],
                  8655: [-0.13313, 0.36687, 0, 0, 1],
                  8666: [0.13667, 0.63667, 0, 0, 1],
                  8667: [0.13667, 0.63667, 0, 0, 1],
                  8669: [-0.13313, 0.37788, 0, 0, 1],
                  8672: [-0.064, 0.437, 0, 0, 1.334],
                  8674: [-0.064, 0.437, 0, 0, 1.334],
                  8705: [0, 0.825, 0, 0, 0.5],
                  8708: [0, 0.68889, 0, 0, 0.55556],
                  8709: [0.08167, 0.58167, 0, 0, 0.77778],
                  8717: [0, 0.43056, 0, 0, 0.42917],
                  8722: [-0.03598, 0.46402, 0, 0, 0.5],
                  8724: [0.08198, 0.69224, 0, 0, 0.77778],
                  8726: [0.08167, 0.58167, 0, 0, 0.77778],
                  8733: [0, 0.69224, 0, 0, 0.77778],
                  8736: [0, 0.69224, 0, 0, 0.72222],
                  8737: [0, 0.69224, 0, 0, 0.72222],
                  8738: [0.03517, 0.52239, 0, 0, 0.72222],
                  8739: [0.08167, 0.58167, 0, 0, 0.22222],
                  8740: [0.25142, 0.74111, 0, 0, 0.27778],
                  8741: [0.08167, 0.58167, 0, 0, 0.38889],
                  8742: [0.25142, 0.74111, 0, 0, 0.5],
                  8756: [0, 0.69224, 0, 0, 0.66667],
                  8757: [0, 0.69224, 0, 0, 0.66667],
                  8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                  8765: [-0.13313, 0.37788, 0, 0, 0.77778],
                  8769: [-0.13313, 0.36687, 0, 0, 0.77778],
                  8770: [-0.03625, 0.46375, 0, 0, 0.77778],
                  8774: [0.30274, 0.79383, 0, 0, 0.77778],
                  8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                  8778: [0.08167, 0.58167, 0, 0, 0.77778],
                  8782: [0.06062, 0.54986, 0, 0, 0.77778],
                  8783: [0.06062, 0.54986, 0, 0, 0.77778],
                  8785: [0.08198, 0.58198, 0, 0, 0.77778],
                  8786: [0.08198, 0.58198, 0, 0, 0.77778],
                  8787: [0.08198, 0.58198, 0, 0, 0.77778],
                  8790: [0, 0.69224, 0, 0, 0.77778],
                  8791: [0.22958, 0.72958, 0, 0, 0.77778],
                  8796: [0.08198, 0.91667, 0, 0, 0.77778],
                  8806: [0.25583, 0.75583, 0, 0, 0.77778],
                  8807: [0.25583, 0.75583, 0, 0, 0.77778],
                  8808: [0.25142, 0.75726, 0, 0, 0.77778],
                  8809: [0.25142, 0.75726, 0, 0, 0.77778],
                  8812: [0.25583, 0.75583, 0, 0, 0.5],
                  8814: [0.20576, 0.70576, 0, 0, 0.77778],
                  8815: [0.20576, 0.70576, 0, 0, 0.77778],
                  8816: [0.30274, 0.79383, 0, 0, 0.77778],
                  8817: [0.30274, 0.79383, 0, 0, 0.77778],
                  8818: [0.22958, 0.72958, 0, 0, 0.77778],
                  8819: [0.22958, 0.72958, 0, 0, 0.77778],
                  8822: [0.1808, 0.675, 0, 0, 0.77778],
                  8823: [0.1808, 0.675, 0, 0, 0.77778],
                  8828: [0.13667, 0.63667, 0, 0, 0.77778],
                  8829: [0.13667, 0.63667, 0, 0, 0.77778],
                  8830: [0.22958, 0.72958, 0, 0, 0.77778],
                  8831: [0.22958, 0.72958, 0, 0, 0.77778],
                  8832: [0.20576, 0.70576, 0, 0, 0.77778],
                  8833: [0.20576, 0.70576, 0, 0, 0.77778],
                  8840: [0.30274, 0.79383, 0, 0, 0.77778],
                  8841: [0.30274, 0.79383, 0, 0, 0.77778],
                  8842: [0.13597, 0.63597, 0, 0, 0.77778],
                  8843: [0.13597, 0.63597, 0, 0, 0.77778],
                  8847: [0.03517, 0.54986, 0, 0, 0.77778],
                  8848: [0.03517, 0.54986, 0, 0, 0.77778],
                  8858: [0.08198, 0.58198, 0, 0, 0.77778],
                  8859: [0.08198, 0.58198, 0, 0, 0.77778],
                  8861: [0.08198, 0.58198, 0, 0, 0.77778],
                  8862: [0, 0.675, 0, 0, 0.77778],
                  8863: [0, 0.675, 0, 0, 0.77778],
                  8864: [0, 0.675, 0, 0, 0.77778],
                  8865: [0, 0.675, 0, 0, 0.77778],
                  8872: [0, 0.69224, 0, 0, 0.61111],
                  8873: [0, 0.69224, 0, 0, 0.72222],
                  8874: [0, 0.69224, 0, 0, 0.88889],
                  8876: [0, 0.68889, 0, 0, 0.61111],
                  8877: [0, 0.68889, 0, 0, 0.61111],
                  8878: [0, 0.68889, 0, 0, 0.72222],
                  8879: [0, 0.68889, 0, 0, 0.72222],
                  8882: [0.03517, 0.54986, 0, 0, 0.77778],
                  8883: [0.03517, 0.54986, 0, 0, 0.77778],
                  8884: [0.13667, 0.63667, 0, 0, 0.77778],
                  8885: [0.13667, 0.63667, 0, 0, 0.77778],
                  8888: [0, 0.54986, 0, 0, 1.11111],
                  8890: [0.19444, 0.43056, 0, 0, 0.55556],
                  8891: [0.19444, 0.69224, 0, 0, 0.61111],
                  8892: [0.19444, 0.69224, 0, 0, 0.61111],
                  8901: [0, 0.54986, 0, 0, 0.27778],
                  8903: [0.08167, 0.58167, 0, 0, 0.77778],
                  8905: [0.08167, 0.58167, 0, 0, 0.77778],
                  8906: [0.08167, 0.58167, 0, 0, 0.77778],
                  8907: [0, 0.69224, 0, 0, 0.77778],
                  8908: [0, 0.69224, 0, 0, 0.77778],
                  8909: [-0.03598, 0.46402, 0, 0, 0.77778],
                  8910: [0, 0.54986, 0, 0, 0.76042],
                  8911: [0, 0.54986, 0, 0, 0.76042],
                  8912: [0.03517, 0.54986, 0, 0, 0.77778],
                  8913: [0.03517, 0.54986, 0, 0, 0.77778],
                  8914: [0, 0.54986, 0, 0, 0.66667],
                  8915: [0, 0.54986, 0, 0, 0.66667],
                  8916: [0, 0.69224, 0, 0, 0.66667],
                  8918: [0.0391, 0.5391, 0, 0, 0.77778],
                  8919: [0.0391, 0.5391, 0, 0, 0.77778],
                  8920: [0.03517, 0.54986, 0, 0, 1.33334],
                  8921: [0.03517, 0.54986, 0, 0, 1.33334],
                  8922: [0.38569, 0.88569, 0, 0, 0.77778],
                  8923: [0.38569, 0.88569, 0, 0, 0.77778],
                  8926: [0.13667, 0.63667, 0, 0, 0.77778],
                  8927: [0.13667, 0.63667, 0, 0, 0.77778],
                  8928: [0.30274, 0.79383, 0, 0, 0.77778],
                  8929: [0.30274, 0.79383, 0, 0, 0.77778],
                  8934: [0.23222, 0.74111, 0, 0, 0.77778],
                  8935: [0.23222, 0.74111, 0, 0, 0.77778],
                  8936: [0.23222, 0.74111, 0, 0, 0.77778],
                  8937: [0.23222, 0.74111, 0, 0, 0.77778],
                  8938: [0.20576, 0.70576, 0, 0, 0.77778],
                  8939: [0.20576, 0.70576, 0, 0, 0.77778],
                  8940: [0.30274, 0.79383, 0, 0, 0.77778],
                  8941: [0.30274, 0.79383, 0, 0, 0.77778],
                  8994: [0.19444, 0.69224, 0, 0, 0.77778],
                  8995: [0.19444, 0.69224, 0, 0, 0.77778],
                  9416: [0.15559, 0.69224, 0, 0, 0.90222],
                  9484: [0, 0.69224, 0, 0, 0.5],
                  9488: [0, 0.69224, 0, 0, 0.5],
                  9492: [0, 0.37788, 0, 0, 0.5],
                  9496: [0, 0.37788, 0, 0, 0.5],
                  9585: [0.19444, 0.68889, 0, 0, 0.88889],
                  9586: [0.19444, 0.74111, 0, 0, 0.88889],
                  9632: [0, 0.675, 0, 0, 0.77778],
                  9633: [0, 0.675, 0, 0, 0.77778],
                  9650: [0, 0.54986, 0, 0, 0.72222],
                  9651: [0, 0.54986, 0, 0, 0.72222],
                  9654: [0.03517, 0.54986, 0, 0, 0.77778],
                  9660: [0, 0.54986, 0, 0, 0.72222],
                  9661: [0, 0.54986, 0, 0, 0.72222],
                  9664: [0.03517, 0.54986, 0, 0, 0.77778],
                  9674: [0.11111, 0.69224, 0, 0, 0.66667],
                  9733: [0.19444, 0.69224, 0, 0, 0.94445],
                  10003: [0, 0.69224, 0, 0, 0.83334],
                  10016: [0, 0.69224, 0, 0, 0.83334],
                  10731: [0.11111, 0.69224, 0, 0, 0.66667],
                  10846: [0.19444, 0.75583, 0, 0, 0.61111],
                  10877: [0.13667, 0.63667, 0, 0, 0.77778],
                  10878: [0.13667, 0.63667, 0, 0, 0.77778],
                  10885: [0.25583, 0.75583, 0, 0, 0.77778],
                  10886: [0.25583, 0.75583, 0, 0, 0.77778],
                  10887: [0.13597, 0.63597, 0, 0, 0.77778],
                  10888: [0.13597, 0.63597, 0, 0, 0.77778],
                  10889: [0.26167, 0.75726, 0, 0, 0.77778],
                  10890: [0.26167, 0.75726, 0, 0, 0.77778],
                  10891: [0.48256, 0.98256, 0, 0, 0.77778],
                  10892: [0.48256, 0.98256, 0, 0, 0.77778],
                  10901: [0.13667, 0.63667, 0, 0, 0.77778],
                  10902: [0.13667, 0.63667, 0, 0, 0.77778],
                  10933: [0.25142, 0.75726, 0, 0, 0.77778],
                  10934: [0.25142, 0.75726, 0, 0, 0.77778],
                  10935: [0.26167, 0.75726, 0, 0, 0.77778],
                  10936: [0.26167, 0.75726, 0, 0, 0.77778],
                  10937: [0.26167, 0.75726, 0, 0, 0.77778],
                  10938: [0.26167, 0.75726, 0, 0, 0.77778],
                  10949: [0.25583, 0.75583, 0, 0, 0.77778],
                  10950: [0.25583, 0.75583, 0, 0, 0.77778],
                  10955: [0.28481, 0.79383, 0, 0, 0.77778],
                  10956: [0.28481, 0.79383, 0, 0, 0.77778],
                  57350: [0.08167, 0.58167, 0, 0, 0.22222],
                  57351: [0.08167, 0.58167, 0, 0, 0.38889],
                  57352: [0.08167, 0.58167, 0, 0, 0.77778],
                  57353: [0, 0.43056, 0.04028, 0, 0.66667],
                  57356: [0.25142, 0.75726, 0, 0, 0.77778],
                  57357: [0.25142, 0.75726, 0, 0, 0.77778],
                  57358: [0.41951, 0.91951, 0, 0, 0.77778],
                  57359: [0.30274, 0.79383, 0, 0, 0.77778],
                  57360: [0.30274, 0.79383, 0, 0, 0.77778],
                  57361: [0.41951, 0.91951, 0, 0, 0.77778],
                  57366: [0.25142, 0.75726, 0, 0, 0.77778],
                  57367: [0.25142, 0.75726, 0, 0, 0.77778],
                  57368: [0.25142, 0.75726, 0, 0, 0.77778],
                  57369: [0.25142, 0.75726, 0, 0, 0.77778],
                  57370: [0.13597, 0.63597, 0, 0, 0.77778],
                  57371: [0.13597, 0.63597, 0, 0, 0.77778],
                },
                'Caligraphic-Regular': {
                  48: [0, 0.43056, 0, 0, 0.5],
                  49: [0, 0.43056, 0, 0, 0.5],
                  50: [0, 0.43056, 0, 0, 0.5],
                  51: [0.19444, 0.43056, 0, 0, 0.5],
                  52: [0.19444, 0.43056, 0, 0, 0.5],
                  53: [0.19444, 0.43056, 0, 0, 0.5],
                  54: [0, 0.64444, 0, 0, 0.5],
                  55: [0.19444, 0.43056, 0, 0, 0.5],
                  56: [0, 0.64444, 0, 0, 0.5],
                  57: [0.19444, 0.43056, 0, 0, 0.5],
                  65: [0, 0.68333, 0, 0.19445, 0.79847],
                  66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
                  67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
                  68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
                  69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
                  70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
                  71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
                  72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
                  73: [0, 0.68333, 0.07382, 0, 0.54452],
                  74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
                  75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
                  76: [0, 0.68333, 0, 0.13889, 0.68972],
                  77: [0, 0.68333, 0, 0.13889, 1.2009],
                  78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
                  79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
                  80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
                  81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
                  82: [0, 0.68333, 0, 0.08334, 0.8475],
                  83: [0, 0.68333, 0.075, 0.13889, 0.60556],
                  84: [0, 0.68333, 0.25417, 0, 0.54464],
                  85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
                  86: [0, 0.68333, 0.08222, 0, 0.61278],
                  87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
                  88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
                  89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
                  90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
                },
                'Fraktur-Regular': {
                  33: [0, 0.69141, 0, 0, 0.29574],
                  34: [0, 0.69141, 0, 0, 0.21471],
                  38: [0, 0.69141, 0, 0, 0.73786],
                  39: [0, 0.69141, 0, 0, 0.21201],
                  40: [0.24982, 0.74947, 0, 0, 0.38865],
                  41: [0.24982, 0.74947, 0, 0, 0.38865],
                  42: [0, 0.62119, 0, 0, 0.27764],
                  43: [0.08319, 0.58283, 0, 0, 0.75623],
                  44: [0, 0.10803, 0, 0, 0.27764],
                  45: [0.08319, 0.58283, 0, 0, 0.75623],
                  46: [0, 0.10803, 0, 0, 0.27764],
                  47: [0.24982, 0.74947, 0, 0, 0.50181],
                  48: [0, 0.47534, 0, 0, 0.50181],
                  49: [0, 0.47534, 0, 0, 0.50181],
                  50: [0, 0.47534, 0, 0, 0.50181],
                  51: [0.18906, 0.47534, 0, 0, 0.50181],
                  52: [0.18906, 0.47534, 0, 0, 0.50181],
                  53: [0.18906, 0.47534, 0, 0, 0.50181],
                  54: [0, 0.69141, 0, 0, 0.50181],
                  55: [0.18906, 0.47534, 0, 0, 0.50181],
                  56: [0, 0.69141, 0, 0, 0.50181],
                  57: [0.18906, 0.47534, 0, 0, 0.50181],
                  58: [0, 0.47534, 0, 0, 0.21606],
                  59: [0.12604, 0.47534, 0, 0, 0.21606],
                  61: [-0.13099, 0.36866, 0, 0, 0.75623],
                  63: [0, 0.69141, 0, 0, 0.36245],
                  65: [0, 0.69141, 0, 0, 0.7176],
                  66: [0, 0.69141, 0, 0, 0.88397],
                  67: [0, 0.69141, 0, 0, 0.61254],
                  68: [0, 0.69141, 0, 0, 0.83158],
                  69: [0, 0.69141, 0, 0, 0.66278],
                  70: [0.12604, 0.69141, 0, 0, 0.61119],
                  71: [0, 0.69141, 0, 0, 0.78539],
                  72: [0.06302, 0.69141, 0, 0, 0.7203],
                  73: [0, 0.69141, 0, 0, 0.55448],
                  74: [0.12604, 0.69141, 0, 0, 0.55231],
                  75: [0, 0.69141, 0, 0, 0.66845],
                  76: [0, 0.69141, 0, 0, 0.66602],
                  77: [0, 0.69141, 0, 0, 1.04953],
                  78: [0, 0.69141, 0, 0, 0.83212],
                  79: [0, 0.69141, 0, 0, 0.82699],
                  80: [0.18906, 0.69141, 0, 0, 0.82753],
                  81: [0.03781, 0.69141, 0, 0, 0.82699],
                  82: [0, 0.69141, 0, 0, 0.82807],
                  83: [0, 0.69141, 0, 0, 0.82861],
                  84: [0, 0.69141, 0, 0, 0.66899],
                  85: [0, 0.69141, 0, 0, 0.64576],
                  86: [0, 0.69141, 0, 0, 0.83131],
                  87: [0, 0.69141, 0, 0, 1.04602],
                  88: [0, 0.69141, 0, 0, 0.71922],
                  89: [0.18906, 0.69141, 0, 0, 0.83293],
                  90: [0.12604, 0.69141, 0, 0, 0.60201],
                  91: [0.24982, 0.74947, 0, 0, 0.27764],
                  93: [0.24982, 0.74947, 0, 0, 0.27764],
                  94: [0, 0.69141, 0, 0, 0.49965],
                  97: [0, 0.47534, 0, 0, 0.50046],
                  98: [0, 0.69141, 0, 0, 0.51315],
                  99: [0, 0.47534, 0, 0, 0.38946],
                  100: [0, 0.62119, 0, 0, 0.49857],
                  101: [0, 0.47534, 0, 0, 0.40053],
                  102: [0.18906, 0.69141, 0, 0, 0.32626],
                  103: [0.18906, 0.47534, 0, 0, 0.5037],
                  104: [0.18906, 0.69141, 0, 0, 0.52126],
                  105: [0, 0.69141, 0, 0, 0.27899],
                  106: [0, 0.69141, 0, 0, 0.28088],
                  107: [0, 0.69141, 0, 0, 0.38946],
                  108: [0, 0.69141, 0, 0, 0.27953],
                  109: [0, 0.47534, 0, 0, 0.76676],
                  110: [0, 0.47534, 0, 0, 0.52666],
                  111: [0, 0.47534, 0, 0, 0.48885],
                  112: [0.18906, 0.52396, 0, 0, 0.50046],
                  113: [0.18906, 0.47534, 0, 0, 0.48912],
                  114: [0, 0.47534, 0, 0, 0.38919],
                  115: [0, 0.47534, 0, 0, 0.44266],
                  116: [0, 0.62119, 0, 0, 0.33301],
                  117: [0, 0.47534, 0, 0, 0.5172],
                  118: [0, 0.52396, 0, 0, 0.5118],
                  119: [0, 0.52396, 0, 0, 0.77351],
                  120: [0.18906, 0.47534, 0, 0, 0.38865],
                  121: [0.18906, 0.47534, 0, 0, 0.49884],
                  122: [0.18906, 0.47534, 0, 0, 0.39054],
                  8216: [0, 0.69141, 0, 0, 0.21471],
                  8217: [0, 0.69141, 0, 0, 0.21471],
                  58112: [0, 0.62119, 0, 0, 0.49749],
                  58113: [0, 0.62119, 0, 0, 0.4983],
                  58114: [0.18906, 0.69141, 0, 0, 0.33328],
                  58115: [0.18906, 0.69141, 0, 0, 0.32923],
                  58116: [0.18906, 0.47534, 0, 0, 0.50343],
                  58117: [0, 0.69141, 0, 0, 0.33301],
                  58118: [0, 0.62119, 0, 0, 0.33409],
                  58119: [0, 0.47534, 0, 0, 0.50073],
                },
                'Main-Bold': {
                  33: [0, 0.69444, 0, 0, 0.35],
                  34: [0, 0.69444, 0, 0, 0.60278],
                  35: [0.19444, 0.69444, 0, 0, 0.95833],
                  36: [0.05556, 0.75, 0, 0, 0.575],
                  37: [0.05556, 0.75, 0, 0, 0.95833],
                  38: [0, 0.69444, 0, 0, 0.89444],
                  39: [0, 0.69444, 0, 0, 0.31944],
                  40: [0.25, 0.75, 0, 0, 0.44722],
                  41: [0.25, 0.75, 0, 0, 0.44722],
                  42: [0, 0.75, 0, 0, 0.575],
                  43: [0.13333, 0.63333, 0, 0, 0.89444],
                  44: [0.19444, 0.15556, 0, 0, 0.31944],
                  45: [0, 0.44444, 0, 0, 0.38333],
                  46: [0, 0.15556, 0, 0, 0.31944],
                  47: [0.25, 0.75, 0, 0, 0.575],
                  48: [0, 0.64444, 0, 0, 0.575],
                  49: [0, 0.64444, 0, 0, 0.575],
                  50: [0, 0.64444, 0, 0, 0.575],
                  51: [0, 0.64444, 0, 0, 0.575],
                  52: [0, 0.64444, 0, 0, 0.575],
                  53: [0, 0.64444, 0, 0, 0.575],
                  54: [0, 0.64444, 0, 0, 0.575],
                  55: [0, 0.64444, 0, 0, 0.575],
                  56: [0, 0.64444, 0, 0, 0.575],
                  57: [0, 0.64444, 0, 0, 0.575],
                  58: [0, 0.44444, 0, 0, 0.31944],
                  59: [0.19444, 0.44444, 0, 0, 0.31944],
                  60: [0.08556, 0.58556, 0, 0, 0.89444],
                  61: [-0.10889, 0.39111, 0, 0, 0.89444],
                  62: [0.08556, 0.58556, 0, 0, 0.89444],
                  63: [0, 0.69444, 0, 0, 0.54305],
                  64: [0, 0.69444, 0, 0, 0.89444],
                  65: [0, 0.68611, 0, 0, 0.86944],
                  66: [0, 0.68611, 0, 0, 0.81805],
                  67: [0, 0.68611, 0, 0, 0.83055],
                  68: [0, 0.68611, 0, 0, 0.88194],
                  69: [0, 0.68611, 0, 0, 0.75555],
                  70: [0, 0.68611, 0, 0, 0.72361],
                  71: [0, 0.68611, 0, 0, 0.90416],
                  72: [0, 0.68611, 0, 0, 0.9],
                  73: [0, 0.68611, 0, 0, 0.43611],
                  74: [0, 0.68611, 0, 0, 0.59444],
                  75: [0, 0.68611, 0, 0, 0.90138],
                  76: [0, 0.68611, 0, 0, 0.69166],
                  77: [0, 0.68611, 0, 0, 1.09166],
                  78: [0, 0.68611, 0, 0, 0.9],
                  79: [0, 0.68611, 0, 0, 0.86388],
                  80: [0, 0.68611, 0, 0, 0.78611],
                  81: [0.19444, 0.68611, 0, 0, 0.86388],
                  82: [0, 0.68611, 0, 0, 0.8625],
                  83: [0, 0.68611, 0, 0, 0.63889],
                  84: [0, 0.68611, 0, 0, 0.8],
                  85: [0, 0.68611, 0, 0, 0.88472],
                  86: [0, 0.68611, 0.01597, 0, 0.86944],
                  87: [0, 0.68611, 0.01597, 0, 1.18888],
                  88: [0, 0.68611, 0, 0, 0.86944],
                  89: [0, 0.68611, 0.02875, 0, 0.86944],
                  90: [0, 0.68611, 0, 0, 0.70277],
                  91: [0.25, 0.75, 0, 0, 0.31944],
                  92: [0.25, 0.75, 0, 0, 0.575],
                  93: [0.25, 0.75, 0, 0, 0.31944],
                  94: [0, 0.69444, 0, 0, 0.575],
                  95: [0.31, 0.13444, 0.03194, 0, 0.575],
                  97: [0, 0.44444, 0, 0, 0.55902],
                  98: [0, 0.69444, 0, 0, 0.63889],
                  99: [0, 0.44444, 0, 0, 0.51111],
                  100: [0, 0.69444, 0, 0, 0.63889],
                  101: [0, 0.44444, 0, 0, 0.52708],
                  102: [0, 0.69444, 0.10903, 0, 0.35139],
                  103: [0.19444, 0.44444, 0.01597, 0, 0.575],
                  104: [0, 0.69444, 0, 0, 0.63889],
                  105: [0, 0.69444, 0, 0, 0.31944],
                  106: [0.19444, 0.69444, 0, 0, 0.35139],
                  107: [0, 0.69444, 0, 0, 0.60694],
                  108: [0, 0.69444, 0, 0, 0.31944],
                  109: [0, 0.44444, 0, 0, 0.95833],
                  110: [0, 0.44444, 0, 0, 0.63889],
                  111: [0, 0.44444, 0, 0, 0.575],
                  112: [0.19444, 0.44444, 0, 0, 0.63889],
                  113: [0.19444, 0.44444, 0, 0, 0.60694],
                  114: [0, 0.44444, 0, 0, 0.47361],
                  115: [0, 0.44444, 0, 0, 0.45361],
                  116: [0, 0.63492, 0, 0, 0.44722],
                  117: [0, 0.44444, 0, 0, 0.63889],
                  118: [0, 0.44444, 0.01597, 0, 0.60694],
                  119: [0, 0.44444, 0.01597, 0, 0.83055],
                  120: [0, 0.44444, 0, 0, 0.60694],
                  121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
                  122: [0, 0.44444, 0, 0, 0.51111],
                  123: [0.25, 0.75, 0, 0, 0.575],
                  124: [0.25, 0.75, 0, 0, 0.31944],
                  125: [0.25, 0.75, 0, 0, 0.575],
                  126: [0.35, 0.34444, 0, 0, 0.575],
                  168: [0, 0.69444, 0, 0, 0.575],
                  172: [0, 0.44444, 0, 0, 0.76666],
                  176: [0, 0.69444, 0, 0, 0.86944],
                  177: [0.13333, 0.63333, 0, 0, 0.89444],
                  184: [0.17014, 0, 0, 0, 0.51111],
                  198: [0, 0.68611, 0, 0, 1.04166],
                  215: [0.13333, 0.63333, 0, 0, 0.89444],
                  216: [0.04861, 0.73472, 0, 0, 0.89444],
                  223: [0, 0.69444, 0, 0, 0.59722],
                  230: [0, 0.44444, 0, 0, 0.83055],
                  247: [0.13333, 0.63333, 0, 0, 0.89444],
                  248: [0.09722, 0.54167, 0, 0, 0.575],
                  305: [0, 0.44444, 0, 0, 0.31944],
                  338: [0, 0.68611, 0, 0, 1.16944],
                  339: [0, 0.44444, 0, 0, 0.89444],
                  567: [0.19444, 0.44444, 0, 0, 0.35139],
                  710: [0, 0.69444, 0, 0, 0.575],
                  711: [0, 0.63194, 0, 0, 0.575],
                  713: [0, 0.59611, 0, 0, 0.575],
                  714: [0, 0.69444, 0, 0, 0.575],
                  715: [0, 0.69444, 0, 0, 0.575],
                  728: [0, 0.69444, 0, 0, 0.575],
                  729: [0, 0.69444, 0, 0, 0.31944],
                  730: [0, 0.69444, 0, 0, 0.86944],
                  732: [0, 0.69444, 0, 0, 0.575],
                  733: [0, 0.69444, 0, 0, 0.575],
                  915: [0, 0.68611, 0, 0, 0.69166],
                  916: [0, 0.68611, 0, 0, 0.95833],
                  920: [0, 0.68611, 0, 0, 0.89444],
                  923: [0, 0.68611, 0, 0, 0.80555],
                  926: [0, 0.68611, 0, 0, 0.76666],
                  928: [0, 0.68611, 0, 0, 0.9],
                  931: [0, 0.68611, 0, 0, 0.83055],
                  933: [0, 0.68611, 0, 0, 0.89444],
                  934: [0, 0.68611, 0, 0, 0.83055],
                  936: [0, 0.68611, 0, 0, 0.89444],
                  937: [0, 0.68611, 0, 0, 0.83055],
                  8211: [0, 0.44444, 0.03194, 0, 0.575],
                  8212: [0, 0.44444, 0.03194, 0, 1.14999],
                  8216: [0, 0.69444, 0, 0, 0.31944],
                  8217: [0, 0.69444, 0, 0, 0.31944],
                  8220: [0, 0.69444, 0, 0, 0.60278],
                  8221: [0, 0.69444, 0, 0, 0.60278],
                  8224: [0.19444, 0.69444, 0, 0, 0.51111],
                  8225: [0.19444, 0.69444, 0, 0, 0.51111],
                  8242: [0, 0.55556, 0, 0, 0.34444],
                  8407: [0, 0.72444, 0.15486, 0, 0.575],
                  8463: [0, 0.69444, 0, 0, 0.66759],
                  8465: [0, 0.69444, 0, 0, 0.83055],
                  8467: [0, 0.69444, 0, 0, 0.47361],
                  8472: [0.19444, 0.44444, 0, 0, 0.74027],
                  8476: [0, 0.69444, 0, 0, 0.83055],
                  8501: [0, 0.69444, 0, 0, 0.70277],
                  8592: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8593: [0.19444, 0.69444, 0, 0, 0.575],
                  8594: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8595: [0.19444, 0.69444, 0, 0, 0.575],
                  8596: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8597: [0.25, 0.75, 0, 0, 0.575],
                  8598: [0.19444, 0.69444, 0, 0, 1.14999],
                  8599: [0.19444, 0.69444, 0, 0, 1.14999],
                  8600: [0.19444, 0.69444, 0, 0, 1.14999],
                  8601: [0.19444, 0.69444, 0, 0, 1.14999],
                  8636: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8637: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8640: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8641: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8656: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8657: [0.19444, 0.69444, 0, 0, 0.70277],
                  8658: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8659: [0.19444, 0.69444, 0, 0, 0.70277],
                  8660: [-0.10889, 0.39111, 0, 0, 1.14999],
                  8661: [0.25, 0.75, 0, 0, 0.70277],
                  8704: [0, 0.69444, 0, 0, 0.63889],
                  8706: [0, 0.69444, 0.06389, 0, 0.62847],
                  8707: [0, 0.69444, 0, 0, 0.63889],
                  8709: [0.05556, 0.75, 0, 0, 0.575],
                  8711: [0, 0.68611, 0, 0, 0.95833],
                  8712: [0.08556, 0.58556, 0, 0, 0.76666],
                  8715: [0.08556, 0.58556, 0, 0, 0.76666],
                  8722: [0.13333, 0.63333, 0, 0, 0.89444],
                  8723: [0.13333, 0.63333, 0, 0, 0.89444],
                  8725: [0.25, 0.75, 0, 0, 0.575],
                  8726: [0.25, 0.75, 0, 0, 0.575],
                  8727: [-0.02778, 0.47222, 0, 0, 0.575],
                  8728: [-0.02639, 0.47361, 0, 0, 0.575],
                  8729: [-0.02639, 0.47361, 0, 0, 0.575],
                  8730: [0.18, 0.82, 0, 0, 0.95833],
                  8733: [0, 0.44444, 0, 0, 0.89444],
                  8734: [0, 0.44444, 0, 0, 1.14999],
                  8736: [0, 0.69224, 0, 0, 0.72222],
                  8739: [0.25, 0.75, 0, 0, 0.31944],
                  8741: [0.25, 0.75, 0, 0, 0.575],
                  8743: [0, 0.55556, 0, 0, 0.76666],
                  8744: [0, 0.55556, 0, 0, 0.76666],
                  8745: [0, 0.55556, 0, 0, 0.76666],
                  8746: [0, 0.55556, 0, 0, 0.76666],
                  8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
                  8764: [-0.10889, 0.39111, 0, 0, 0.89444],
                  8768: [0.19444, 0.69444, 0, 0, 0.31944],
                  8771: [0.00222, 0.50222, 0, 0, 0.89444],
                  8776: [0.02444, 0.52444, 0, 0, 0.89444],
                  8781: [0.00222, 0.50222, 0, 0, 0.89444],
                  8801: [0.00222, 0.50222, 0, 0, 0.89444],
                  8804: [0.19667, 0.69667, 0, 0, 0.89444],
                  8805: [0.19667, 0.69667, 0, 0, 0.89444],
                  8810: [0.08556, 0.58556, 0, 0, 1.14999],
                  8811: [0.08556, 0.58556, 0, 0, 1.14999],
                  8826: [0.08556, 0.58556, 0, 0, 0.89444],
                  8827: [0.08556, 0.58556, 0, 0, 0.89444],
                  8834: [0.08556, 0.58556, 0, 0, 0.89444],
                  8835: [0.08556, 0.58556, 0, 0, 0.89444],
                  8838: [0.19667, 0.69667, 0, 0, 0.89444],
                  8839: [0.19667, 0.69667, 0, 0, 0.89444],
                  8846: [0, 0.55556, 0, 0, 0.76666],
                  8849: [0.19667, 0.69667, 0, 0, 0.89444],
                  8850: [0.19667, 0.69667, 0, 0, 0.89444],
                  8851: [0, 0.55556, 0, 0, 0.76666],
                  8852: [0, 0.55556, 0, 0, 0.76666],
                  8853: [0.13333, 0.63333, 0, 0, 0.89444],
                  8854: [0.13333, 0.63333, 0, 0, 0.89444],
                  8855: [0.13333, 0.63333, 0, 0, 0.89444],
                  8856: [0.13333, 0.63333, 0, 0, 0.89444],
                  8857: [0.13333, 0.63333, 0, 0, 0.89444],
                  8866: [0, 0.69444, 0, 0, 0.70277],
                  8867: [0, 0.69444, 0, 0, 0.70277],
                  8868: [0, 0.69444, 0, 0, 0.89444],
                  8869: [0, 0.69444, 0, 0, 0.89444],
                  8900: [-0.02639, 0.47361, 0, 0, 0.575],
                  8901: [-0.02639, 0.47361, 0, 0, 0.31944],
                  8902: [-0.02778, 0.47222, 0, 0, 0.575],
                  8968: [0.25, 0.75, 0, 0, 0.51111],
                  8969: [0.25, 0.75, 0, 0, 0.51111],
                  8970: [0.25, 0.75, 0, 0, 0.51111],
                  8971: [0.25, 0.75, 0, 0, 0.51111],
                  8994: [-0.13889, 0.36111, 0, 0, 1.14999],
                  8995: [-0.13889, 0.36111, 0, 0, 1.14999],
                  9651: [0.19444, 0.69444, 0, 0, 1.02222],
                  9657: [-0.02778, 0.47222, 0, 0, 0.575],
                  9661: [0.19444, 0.69444, 0, 0, 1.02222],
                  9667: [-0.02778, 0.47222, 0, 0, 0.575],
                  9711: [0.19444, 0.69444, 0, 0, 1.14999],
                  9824: [0.12963, 0.69444, 0, 0, 0.89444],
                  9825: [0.12963, 0.69444, 0, 0, 0.89444],
                  9826: [0.12963, 0.69444, 0, 0, 0.89444],
                  9827: [0.12963, 0.69444, 0, 0, 0.89444],
                  9837: [0, 0.75, 0, 0, 0.44722],
                  9838: [0.19444, 0.69444, 0, 0, 0.44722],
                  9839: [0.19444, 0.69444, 0, 0, 0.44722],
                  10216: [0.25, 0.75, 0, 0, 0.44722],
                  10217: [0.25, 0.75, 0, 0, 0.44722],
                  10815: [0, 0.68611, 0, 0, 0.9],
                  10927: [0.19667, 0.69667, 0, 0, 0.89444],
                  10928: [0.19667, 0.69667, 0, 0, 0.89444],
                  57376: [0.19444, 0.69444, 0, 0, 0],
                },
                'Main-BoldItalic': {
                  33: [0, 0.69444, 0.11417, 0, 0.38611],
                  34: [0, 0.69444, 0.07939, 0, 0.62055],
                  35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
                  37: [0.05556, 0.75, 0.12861, 0, 0.94444],
                  38: [0, 0.69444, 0.08528, 0, 0.88555],
                  39: [0, 0.69444, 0.12945, 0, 0.35555],
                  40: [0.25, 0.75, 0.15806, 0, 0.47333],
                  41: [0.25, 0.75, 0.03306, 0, 0.47333],
                  42: [0, 0.75, 0.14333, 0, 0.59111],
                  43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
                  44: [0.19444, 0.14722, 0, 0, 0.35555],
                  45: [0, 0.44444, 0.02611, 0, 0.41444],
                  46: [0, 0.14722, 0, 0, 0.35555],
                  47: [0.25, 0.75, 0.15806, 0, 0.59111],
                  48: [0, 0.64444, 0.13167, 0, 0.59111],
                  49: [0, 0.64444, 0.13167, 0, 0.59111],
                  50: [0, 0.64444, 0.13167, 0, 0.59111],
                  51: [0, 0.64444, 0.13167, 0, 0.59111],
                  52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                  53: [0, 0.64444, 0.13167, 0, 0.59111],
                  54: [0, 0.64444, 0.13167, 0, 0.59111],
                  55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                  56: [0, 0.64444, 0.13167, 0, 0.59111],
                  57: [0, 0.64444, 0.13167, 0, 0.59111],
                  58: [0, 0.44444, 0.06695, 0, 0.35555],
                  59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
                  61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
                  63: [0, 0.69444, 0.11472, 0, 0.59111],
                  64: [0, 0.69444, 0.09208, 0, 0.88555],
                  65: [0, 0.68611, 0, 0, 0.86555],
                  66: [0, 0.68611, 0.0992, 0, 0.81666],
                  67: [0, 0.68611, 0.14208, 0, 0.82666],
                  68: [0, 0.68611, 0.09062, 0, 0.87555],
                  69: [0, 0.68611, 0.11431, 0, 0.75666],
                  70: [0, 0.68611, 0.12903, 0, 0.72722],
                  71: [0, 0.68611, 0.07347, 0, 0.89527],
                  72: [0, 0.68611, 0.17208, 0, 0.8961],
                  73: [0, 0.68611, 0.15681, 0, 0.47166],
                  74: [0, 0.68611, 0.145, 0, 0.61055],
                  75: [0, 0.68611, 0.14208, 0, 0.89499],
                  76: [0, 0.68611, 0, 0, 0.69777],
                  77: [0, 0.68611, 0.17208, 0, 1.07277],
                  78: [0, 0.68611, 0.17208, 0, 0.8961],
                  79: [0, 0.68611, 0.09062, 0, 0.85499],
                  80: [0, 0.68611, 0.0992, 0, 0.78721],
                  81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
                  82: [0, 0.68611, 0.02559, 0, 0.85944],
                  83: [0, 0.68611, 0.11264, 0, 0.64999],
                  84: [0, 0.68611, 0.12903, 0, 0.7961],
                  85: [0, 0.68611, 0.17208, 0, 0.88083],
                  86: [0, 0.68611, 0.18625, 0, 0.86555],
                  87: [0, 0.68611, 0.18625, 0, 1.15999],
                  88: [0, 0.68611, 0.15681, 0, 0.86555],
                  89: [0, 0.68611, 0.19803, 0, 0.86555],
                  90: [0, 0.68611, 0.14208, 0, 0.70888],
                  91: [0.25, 0.75, 0.1875, 0, 0.35611],
                  93: [0.25, 0.75, 0.09972, 0, 0.35611],
                  94: [0, 0.69444, 0.06709, 0, 0.59111],
                  95: [0.31, 0.13444, 0.09811, 0, 0.59111],
                  97: [0, 0.44444, 0.09426, 0, 0.59111],
                  98: [0, 0.69444, 0.07861, 0, 0.53222],
                  99: [0, 0.44444, 0.05222, 0, 0.53222],
                  100: [0, 0.69444, 0.10861, 0, 0.59111],
                  101: [0, 0.44444, 0.085, 0, 0.53222],
                  102: [0.19444, 0.69444, 0.21778, 0, 0.4],
                  103: [0.19444, 0.44444, 0.105, 0, 0.53222],
                  104: [0, 0.69444, 0.09426, 0, 0.59111],
                  105: [0, 0.69326, 0.11387, 0, 0.35555],
                  106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
                  107: [0, 0.69444, 0.11111, 0, 0.53222],
                  108: [0, 0.69444, 0.10861, 0, 0.29666],
                  109: [0, 0.44444, 0.09426, 0, 0.94444],
                  110: [0, 0.44444, 0.09426, 0, 0.64999],
                  111: [0, 0.44444, 0.07861, 0, 0.59111],
                  112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
                  113: [0.19444, 0.44444, 0.105, 0, 0.53222],
                  114: [0, 0.44444, 0.11111, 0, 0.50167],
                  115: [0, 0.44444, 0.08167, 0, 0.48694],
                  116: [0, 0.63492, 0.09639, 0, 0.385],
                  117: [0, 0.44444, 0.09426, 0, 0.62055],
                  118: [0, 0.44444, 0.11111, 0, 0.53222],
                  119: [0, 0.44444, 0.11111, 0, 0.76777],
                  120: [0, 0.44444, 0.12583, 0, 0.56055],
                  121: [0.19444, 0.44444, 0.105, 0, 0.56166],
                  122: [0, 0.44444, 0.13889, 0, 0.49055],
                  126: [0.35, 0.34444, 0.11472, 0, 0.59111],
                  163: [0, 0.69444, 0, 0, 0.86853],
                  168: [0, 0.69444, 0.11473, 0, 0.59111],
                  176: [0, 0.69444, 0, 0, 0.94888],
                  184: [0.17014, 0, 0, 0, 0.53222],
                  198: [0, 0.68611, 0.11431, 0, 1.02277],
                  216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
                  223: [0.19444, 0.69444, 0.09736, 0, 0.665],
                  230: [0, 0.44444, 0.085, 0, 0.82666],
                  248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
                  305: [0, 0.44444, 0.09426, 0, 0.35555],
                  338: [0, 0.68611, 0.11431, 0, 1.14054],
                  339: [0, 0.44444, 0.085, 0, 0.82666],
                  567: [0.19444, 0.44444, 0.04611, 0, 0.385],
                  710: [0, 0.69444, 0.06709, 0, 0.59111],
                  711: [0, 0.63194, 0.08271, 0, 0.59111],
                  713: [0, 0.59444, 0.10444, 0, 0.59111],
                  714: [0, 0.69444, 0.08528, 0, 0.59111],
                  715: [0, 0.69444, 0, 0, 0.59111],
                  728: [0, 0.69444, 0.10333, 0, 0.59111],
                  729: [0, 0.69444, 0.12945, 0, 0.35555],
                  730: [0, 0.69444, 0, 0, 0.94888],
                  732: [0, 0.69444, 0.11472, 0, 0.59111],
                  733: [0, 0.69444, 0.11472, 0, 0.59111],
                  915: [0, 0.68611, 0.12903, 0, 0.69777],
                  916: [0, 0.68611, 0, 0, 0.94444],
                  920: [0, 0.68611, 0.09062, 0, 0.88555],
                  923: [0, 0.68611, 0, 0, 0.80666],
                  926: [0, 0.68611, 0.15092, 0, 0.76777],
                  928: [0, 0.68611, 0.17208, 0, 0.8961],
                  931: [0, 0.68611, 0.11431, 0, 0.82666],
                  933: [0, 0.68611, 0.10778, 0, 0.88555],
                  934: [0, 0.68611, 0.05632, 0, 0.82666],
                  936: [0, 0.68611, 0.10778, 0, 0.88555],
                  937: [0, 0.68611, 0.0992, 0, 0.82666],
                  8211: [0, 0.44444, 0.09811, 0, 0.59111],
                  8212: [0, 0.44444, 0.09811, 0, 1.18221],
                  8216: [0, 0.69444, 0.12945, 0, 0.35555],
                  8217: [0, 0.69444, 0.12945, 0, 0.35555],
                  8220: [0, 0.69444, 0.16772, 0, 0.62055],
                  8221: [0, 0.69444, 0.07939, 0, 0.62055],
                },
                'Main-Italic': {
                  33: [0, 0.69444, 0.12417, 0, 0.30667],
                  34: [0, 0.69444, 0.06961, 0, 0.51444],
                  35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
                  37: [0.05556, 0.75, 0.13639, 0, 0.81777],
                  38: [0, 0.69444, 0.09694, 0, 0.76666],
                  39: [0, 0.69444, 0.12417, 0, 0.30667],
                  40: [0.25, 0.75, 0.16194, 0, 0.40889],
                  41: [0.25, 0.75, 0.03694, 0, 0.40889],
                  42: [0, 0.75, 0.14917, 0, 0.51111],
                  43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
                  44: [0.19444, 0.10556, 0, 0, 0.30667],
                  45: [0, 0.43056, 0.02826, 0, 0.35778],
                  46: [0, 0.10556, 0, 0, 0.30667],
                  47: [0.25, 0.75, 0.16194, 0, 0.51111],
                  48: [0, 0.64444, 0.13556, 0, 0.51111],
                  49: [0, 0.64444, 0.13556, 0, 0.51111],
                  50: [0, 0.64444, 0.13556, 0, 0.51111],
                  51: [0, 0.64444, 0.13556, 0, 0.51111],
                  52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                  53: [0, 0.64444, 0.13556, 0, 0.51111],
                  54: [0, 0.64444, 0.13556, 0, 0.51111],
                  55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                  56: [0, 0.64444, 0.13556, 0, 0.51111],
                  57: [0, 0.64444, 0.13556, 0, 0.51111],
                  58: [0, 0.43056, 0.0582, 0, 0.30667],
                  59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
                  61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
                  63: [0, 0.69444, 0.1225, 0, 0.51111],
                  64: [0, 0.69444, 0.09597, 0, 0.76666],
                  65: [0, 0.68333, 0, 0, 0.74333],
                  66: [0, 0.68333, 0.10257, 0, 0.70389],
                  67: [0, 0.68333, 0.14528, 0, 0.71555],
                  68: [0, 0.68333, 0.09403, 0, 0.755],
                  69: [0, 0.68333, 0.12028, 0, 0.67833],
                  70: [0, 0.68333, 0.13305, 0, 0.65277],
                  71: [0, 0.68333, 0.08722, 0, 0.77361],
                  72: [0, 0.68333, 0.16389, 0, 0.74333],
                  73: [0, 0.68333, 0.15806, 0, 0.38555],
                  74: [0, 0.68333, 0.14028, 0, 0.525],
                  75: [0, 0.68333, 0.14528, 0, 0.76888],
                  76: [0, 0.68333, 0, 0, 0.62722],
                  77: [0, 0.68333, 0.16389, 0, 0.89666],
                  78: [0, 0.68333, 0.16389, 0, 0.74333],
                  79: [0, 0.68333, 0.09403, 0, 0.76666],
                  80: [0, 0.68333, 0.10257, 0, 0.67833],
                  81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
                  82: [0, 0.68333, 0.03868, 0, 0.72944],
                  83: [0, 0.68333, 0.11972, 0, 0.56222],
                  84: [0, 0.68333, 0.13305, 0, 0.71555],
                  85: [0, 0.68333, 0.16389, 0, 0.74333],
                  86: [0, 0.68333, 0.18361, 0, 0.74333],
                  87: [0, 0.68333, 0.18361, 0, 0.99888],
                  88: [0, 0.68333, 0.15806, 0, 0.74333],
                  89: [0, 0.68333, 0.19383, 0, 0.74333],
                  90: [0, 0.68333, 0.14528, 0, 0.61333],
                  91: [0.25, 0.75, 0.1875, 0, 0.30667],
                  93: [0.25, 0.75, 0.10528, 0, 0.30667],
                  94: [0, 0.69444, 0.06646, 0, 0.51111],
                  95: [0.31, 0.12056, 0.09208, 0, 0.51111],
                  97: [0, 0.43056, 0.07671, 0, 0.51111],
                  98: [0, 0.69444, 0.06312, 0, 0.46],
                  99: [0, 0.43056, 0.05653, 0, 0.46],
                  100: [0, 0.69444, 0.10333, 0, 0.51111],
                  101: [0, 0.43056, 0.07514, 0, 0.46],
                  102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
                  103: [0.19444, 0.43056, 0.08847, 0, 0.46],
                  104: [0, 0.69444, 0.07671, 0, 0.51111],
                  105: [0, 0.65536, 0.1019, 0, 0.30667],
                  106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
                  107: [0, 0.69444, 0.10764, 0, 0.46],
                  108: [0, 0.69444, 0.10333, 0, 0.25555],
                  109: [0, 0.43056, 0.07671, 0, 0.81777],
                  110: [0, 0.43056, 0.07671, 0, 0.56222],
                  111: [0, 0.43056, 0.06312, 0, 0.51111],
                  112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
                  113: [0.19444, 0.43056, 0.08847, 0, 0.46],
                  114: [0, 0.43056, 0.10764, 0, 0.42166],
                  115: [0, 0.43056, 0.08208, 0, 0.40889],
                  116: [0, 0.61508, 0.09486, 0, 0.33222],
                  117: [0, 0.43056, 0.07671, 0, 0.53666],
                  118: [0, 0.43056, 0.10764, 0, 0.46],
                  119: [0, 0.43056, 0.10764, 0, 0.66444],
                  120: [0, 0.43056, 0.12042, 0, 0.46389],
                  121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
                  122: [0, 0.43056, 0.12292, 0, 0.40889],
                  126: [0.35, 0.31786, 0.11585, 0, 0.51111],
                  163: [0, 0.69444, 0, 0, 0.76909],
                  168: [0, 0.66786, 0.10474, 0, 0.51111],
                  176: [0, 0.69444, 0, 0, 0.83129],
                  184: [0.17014, 0, 0, 0, 0.46],
                  198: [0, 0.68333, 0.12028, 0, 0.88277],
                  216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
                  223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
                  230: [0, 0.43056, 0.07514, 0, 0.71555],
                  248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
                  305: [0, 0.43056, 0, 0.02778, 0.32246],
                  338: [0, 0.68333, 0.12028, 0, 0.98499],
                  339: [0, 0.43056, 0.07514, 0, 0.71555],
                  567: [0.19444, 0.43056, 0, 0.08334, 0.38403],
                  710: [0, 0.69444, 0.06646, 0, 0.51111],
                  711: [0, 0.62847, 0.08295, 0, 0.51111],
                  713: [0, 0.56167, 0.10333, 0, 0.51111],
                  714: [0, 0.69444, 0.09694, 0, 0.51111],
                  715: [0, 0.69444, 0, 0, 0.51111],
                  728: [0, 0.69444, 0.10806, 0, 0.51111],
                  729: [0, 0.66786, 0.11752, 0, 0.30667],
                  730: [0, 0.69444, 0, 0, 0.83129],
                  732: [0, 0.66786, 0.11585, 0, 0.51111],
                  733: [0, 0.69444, 0.1225, 0, 0.51111],
                  915: [0, 0.68333, 0.13305, 0, 0.62722],
                  916: [0, 0.68333, 0, 0, 0.81777],
                  920: [0, 0.68333, 0.09403, 0, 0.76666],
                  923: [0, 0.68333, 0, 0, 0.69222],
                  926: [0, 0.68333, 0.15294, 0, 0.66444],
                  928: [0, 0.68333, 0.16389, 0, 0.74333],
                  931: [0, 0.68333, 0.12028, 0, 0.71555],
                  933: [0, 0.68333, 0.11111, 0, 0.76666],
                  934: [0, 0.68333, 0.05986, 0, 0.71555],
                  936: [0, 0.68333, 0.11111, 0, 0.76666],
                  937: [0, 0.68333, 0.10257, 0, 0.71555],
                  8211: [0, 0.43056, 0.09208, 0, 0.51111],
                  8212: [0, 0.43056, 0.09208, 0, 1.02222],
                  8216: [0, 0.69444, 0.12417, 0, 0.30667],
                  8217: [0, 0.69444, 0.12417, 0, 0.30667],
                  8220: [0, 0.69444, 0.1685, 0, 0.51444],
                  8221: [0, 0.69444, 0.06961, 0, 0.51444],
                  8463: [0, 0.68889, 0, 0, 0.54028],
                },
                'Main-Regular': {
                  32: [0, 0, 0, 0, 0.25],
                  33: [0, 0.69444, 0, 0, 0.27778],
                  34: [0, 0.69444, 0, 0, 0.5],
                  35: [0.19444, 0.69444, 0, 0, 0.83334],
                  36: [0.05556, 0.75, 0, 0, 0.5],
                  37: [0.05556, 0.75, 0, 0, 0.83334],
                  38: [0, 0.69444, 0, 0, 0.77778],
                  39: [0, 0.69444, 0, 0, 0.27778],
                  40: [0.25, 0.75, 0, 0, 0.38889],
                  41: [0.25, 0.75, 0, 0, 0.38889],
                  42: [0, 0.75, 0, 0, 0.5],
                  43: [0.08333, 0.58333, 0, 0, 0.77778],
                  44: [0.19444, 0.10556, 0, 0, 0.27778],
                  45: [0, 0.43056, 0, 0, 0.33333],
                  46: [0, 0.10556, 0, 0, 0.27778],
                  47: [0.25, 0.75, 0, 0, 0.5],
                  48: [0, 0.64444, 0, 0, 0.5],
                  49: [0, 0.64444, 0, 0, 0.5],
                  50: [0, 0.64444, 0, 0, 0.5],
                  51: [0, 0.64444, 0, 0, 0.5],
                  52: [0, 0.64444, 0, 0, 0.5],
                  53: [0, 0.64444, 0, 0, 0.5],
                  54: [0, 0.64444, 0, 0, 0.5],
                  55: [0, 0.64444, 0, 0, 0.5],
                  56: [0, 0.64444, 0, 0, 0.5],
                  57: [0, 0.64444, 0, 0, 0.5],
                  58: [0, 0.43056, 0, 0, 0.27778],
                  59: [0.19444, 0.43056, 0, 0, 0.27778],
                  60: [0.0391, 0.5391, 0, 0, 0.77778],
                  61: [-0.13313, 0.36687, 0, 0, 0.77778],
                  62: [0.0391, 0.5391, 0, 0, 0.77778],
                  63: [0, 0.69444, 0, 0, 0.47222],
                  64: [0, 0.69444, 0, 0, 0.77778],
                  65: [0, 0.68333, 0, 0, 0.75],
                  66: [0, 0.68333, 0, 0, 0.70834],
                  67: [0, 0.68333, 0, 0, 0.72222],
                  68: [0, 0.68333, 0, 0, 0.76389],
                  69: [0, 0.68333, 0, 0, 0.68056],
                  70: [0, 0.68333, 0, 0, 0.65278],
                  71: [0, 0.68333, 0, 0, 0.78472],
                  72: [0, 0.68333, 0, 0, 0.75],
                  73: [0, 0.68333, 0, 0, 0.36111],
                  74: [0, 0.68333, 0, 0, 0.51389],
                  75: [0, 0.68333, 0, 0, 0.77778],
                  76: [0, 0.68333, 0, 0, 0.625],
                  77: [0, 0.68333, 0, 0, 0.91667],
                  78: [0, 0.68333, 0, 0, 0.75],
                  79: [0, 0.68333, 0, 0, 0.77778],
                  80: [0, 0.68333, 0, 0, 0.68056],
                  81: [0.19444, 0.68333, 0, 0, 0.77778],
                  82: [0, 0.68333, 0, 0, 0.73611],
                  83: [0, 0.68333, 0, 0, 0.55556],
                  84: [0, 0.68333, 0, 0, 0.72222],
                  85: [0, 0.68333, 0, 0, 0.75],
                  86: [0, 0.68333, 0.01389, 0, 0.75],
                  87: [0, 0.68333, 0.01389, 0, 1.02778],
                  88: [0, 0.68333, 0, 0, 0.75],
                  89: [0, 0.68333, 0.025, 0, 0.75],
                  90: [0, 0.68333, 0, 0, 0.61111],
                  91: [0.25, 0.75, 0, 0, 0.27778],
                  92: [0.25, 0.75, 0, 0, 0.5],
                  93: [0.25, 0.75, 0, 0, 0.27778],
                  94: [0, 0.69444, 0, 0, 0.5],
                  95: [0.31, 0.12056, 0.02778, 0, 0.5],
                  97: [0, 0.43056, 0, 0, 0.5],
                  98: [0, 0.69444, 0, 0, 0.55556],
                  99: [0, 0.43056, 0, 0, 0.44445],
                  100: [0, 0.69444, 0, 0, 0.55556],
                  101: [0, 0.43056, 0, 0, 0.44445],
                  102: [0, 0.69444, 0.07778, 0, 0.30556],
                  103: [0.19444, 0.43056, 0.01389, 0, 0.5],
                  104: [0, 0.69444, 0, 0, 0.55556],
                  105: [0, 0.66786, 0, 0, 0.27778],
                  106: [0.19444, 0.66786, 0, 0, 0.30556],
                  107: [0, 0.69444, 0, 0, 0.52778],
                  108: [0, 0.69444, 0, 0, 0.27778],
                  109: [0, 0.43056, 0, 0, 0.83334],
                  110: [0, 0.43056, 0, 0, 0.55556],
                  111: [0, 0.43056, 0, 0, 0.5],
                  112: [0.19444, 0.43056, 0, 0, 0.55556],
                  113: [0.19444, 0.43056, 0, 0, 0.52778],
                  114: [0, 0.43056, 0, 0, 0.39167],
                  115: [0, 0.43056, 0, 0, 0.39445],
                  116: [0, 0.61508, 0, 0, 0.38889],
                  117: [0, 0.43056, 0, 0, 0.55556],
                  118: [0, 0.43056, 0.01389, 0, 0.52778],
                  119: [0, 0.43056, 0.01389, 0, 0.72222],
                  120: [0, 0.43056, 0, 0, 0.52778],
                  121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
                  122: [0, 0.43056, 0, 0, 0.44445],
                  123: [0.25, 0.75, 0, 0, 0.5],
                  124: [0.25, 0.75, 0, 0, 0.27778],
                  125: [0.25, 0.75, 0, 0, 0.5],
                  126: [0.35, 0.31786, 0, 0, 0.5],
                  160: [0, 0, 0, 0, 0.25],
                  167: [0.19444, 0.69444, 0, 0, 0.44445],
                  168: [0, 0.66786, 0, 0, 0.5],
                  172: [0, 0.43056, 0, 0, 0.66667],
                  176: [0, 0.69444, 0, 0, 0.75],
                  177: [0.08333, 0.58333, 0, 0, 0.77778],
                  182: [0.19444, 0.69444, 0, 0, 0.61111],
                  184: [0.17014, 0, 0, 0, 0.44445],
                  198: [0, 0.68333, 0, 0, 0.90278],
                  215: [0.08333, 0.58333, 0, 0, 0.77778],
                  216: [0.04861, 0.73194, 0, 0, 0.77778],
                  223: [0, 0.69444, 0, 0, 0.5],
                  230: [0, 0.43056, 0, 0, 0.72222],
                  247: [0.08333, 0.58333, 0, 0, 0.77778],
                  248: [0.09722, 0.52778, 0, 0, 0.5],
                  305: [0, 0.43056, 0, 0, 0.27778],
                  338: [0, 0.68333, 0, 0, 1.01389],
                  339: [0, 0.43056, 0, 0, 0.77778],
                  567: [0.19444, 0.43056, 0, 0, 0.30556],
                  710: [0, 0.69444, 0, 0, 0.5],
                  711: [0, 0.62847, 0, 0, 0.5],
                  713: [0, 0.56778, 0, 0, 0.5],
                  714: [0, 0.69444, 0, 0, 0.5],
                  715: [0, 0.69444, 0, 0, 0.5],
                  728: [0, 0.69444, 0, 0, 0.5],
                  729: [0, 0.66786, 0, 0, 0.27778],
                  730: [0, 0.69444, 0, 0, 0.75],
                  732: [0, 0.66786, 0, 0, 0.5],
                  733: [0, 0.69444, 0, 0, 0.5],
                  915: [0, 0.68333, 0, 0, 0.625],
                  916: [0, 0.68333, 0, 0, 0.83334],
                  920: [0, 0.68333, 0, 0, 0.77778],
                  923: [0, 0.68333, 0, 0, 0.69445],
                  926: [0, 0.68333, 0, 0, 0.66667],
                  928: [0, 0.68333, 0, 0, 0.75],
                  931: [0, 0.68333, 0, 0, 0.72222],
                  933: [0, 0.68333, 0, 0, 0.77778],
                  934: [0, 0.68333, 0, 0, 0.72222],
                  936: [0, 0.68333, 0, 0, 0.77778],
                  937: [0, 0.68333, 0, 0, 0.72222],
                  8211: [0, 0.43056, 0.02778, 0, 0.5],
                  8212: [0, 0.43056, 0.02778, 0, 1],
                  8216: [0, 0.69444, 0, 0, 0.27778],
                  8217: [0, 0.69444, 0, 0, 0.27778],
                  8220: [0, 0.69444, 0, 0, 0.5],
                  8221: [0, 0.69444, 0, 0, 0.5],
                  8224: [0.19444, 0.69444, 0, 0, 0.44445],
                  8225: [0.19444, 0.69444, 0, 0, 0.44445],
                  8230: [0, 0.12, 0, 0, 1.172],
                  8242: [0, 0.55556, 0, 0, 0.275],
                  8407: [0, 0.71444, 0.15382, 0, 0.5],
                  8463: [0, 0.68889, 0, 0, 0.54028],
                  8465: [0, 0.69444, 0, 0, 0.72222],
                  8467: [0, 0.69444, 0, 0.11111, 0.41667],
                  8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
                  8476: [0, 0.69444, 0, 0, 0.72222],
                  8501: [0, 0.69444, 0, 0, 0.61111],
                  8592: [-0.13313, 0.36687, 0, 0, 1],
                  8593: [0.19444, 0.69444, 0, 0, 0.5],
                  8594: [-0.13313, 0.36687, 0, 0, 1],
                  8595: [0.19444, 0.69444, 0, 0, 0.5],
                  8596: [-0.13313, 0.36687, 0, 0, 1],
                  8597: [0.25, 0.75, 0, 0, 0.5],
                  8598: [0.19444, 0.69444, 0, 0, 1],
                  8599: [0.19444, 0.69444, 0, 0, 1],
                  8600: [0.19444, 0.69444, 0, 0, 1],
                  8601: [0.19444, 0.69444, 0, 0, 1],
                  8614: [0.011, 0.511, 0, 0, 1],
                  8617: [0.011, 0.511, 0, 0, 1.126],
                  8618: [0.011, 0.511, 0, 0, 1.126],
                  8636: [-0.13313, 0.36687, 0, 0, 1],
                  8637: [-0.13313, 0.36687, 0, 0, 1],
                  8640: [-0.13313, 0.36687, 0, 0, 1],
                  8641: [-0.13313, 0.36687, 0, 0, 1],
                  8652: [0.011, 0.671, 0, 0, 1],
                  8656: [-0.13313, 0.36687, 0, 0, 1],
                  8657: [0.19444, 0.69444, 0, 0, 0.61111],
                  8658: [-0.13313, 0.36687, 0, 0, 1],
                  8659: [0.19444, 0.69444, 0, 0, 0.61111],
                  8660: [-0.13313, 0.36687, 0, 0, 1],
                  8661: [0.25, 0.75, 0, 0, 0.61111],
                  8704: [0, 0.69444, 0, 0, 0.55556],
                  8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
                  8707: [0, 0.69444, 0, 0, 0.55556],
                  8709: [0.05556, 0.75, 0, 0, 0.5],
                  8711: [0, 0.68333, 0, 0, 0.83334],
                  8712: [0.0391, 0.5391, 0, 0, 0.66667],
                  8715: [0.0391, 0.5391, 0, 0, 0.66667],
                  8722: [0.08333, 0.58333, 0, 0, 0.77778],
                  8723: [0.08333, 0.58333, 0, 0, 0.77778],
                  8725: [0.25, 0.75, 0, 0, 0.5],
                  8726: [0.25, 0.75, 0, 0, 0.5],
                  8727: [-0.03472, 0.46528, 0, 0, 0.5],
                  8728: [-0.05555, 0.44445, 0, 0, 0.5],
                  8729: [-0.05555, 0.44445, 0, 0, 0.5],
                  8730: [0.2, 0.8, 0, 0, 0.83334],
                  8733: [0, 0.43056, 0, 0, 0.77778],
                  8734: [0, 0.43056, 0, 0, 1],
                  8736: [0, 0.69224, 0, 0, 0.72222],
                  8739: [0.25, 0.75, 0, 0, 0.27778],
                  8741: [0.25, 0.75, 0, 0, 0.5],
                  8743: [0, 0.55556, 0, 0, 0.66667],
                  8744: [0, 0.55556, 0, 0, 0.66667],
                  8745: [0, 0.55556, 0, 0, 0.66667],
                  8746: [0, 0.55556, 0, 0, 0.66667],
                  8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
                  8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                  8768: [0.19444, 0.69444, 0, 0, 0.27778],
                  8771: [-0.03625, 0.46375, 0, 0, 0.77778],
                  8773: [-0.022, 0.589, 0, 0, 1],
                  8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                  8781: [-0.03625, 0.46375, 0, 0, 0.77778],
                  8784: [-0.133, 0.67, 0, 0, 0.778],
                  8801: [-0.03625, 0.46375, 0, 0, 0.77778],
                  8804: [0.13597, 0.63597, 0, 0, 0.77778],
                  8805: [0.13597, 0.63597, 0, 0, 0.77778],
                  8810: [0.0391, 0.5391, 0, 0, 1],
                  8811: [0.0391, 0.5391, 0, 0, 1],
                  8826: [0.0391, 0.5391, 0, 0, 0.77778],
                  8827: [0.0391, 0.5391, 0, 0, 0.77778],
                  8834: [0.0391, 0.5391, 0, 0, 0.77778],
                  8835: [0.0391, 0.5391, 0, 0, 0.77778],
                  8838: [0.13597, 0.63597, 0, 0, 0.77778],
                  8839: [0.13597, 0.63597, 0, 0, 0.77778],
                  8846: [0, 0.55556, 0, 0, 0.66667],
                  8849: [0.13597, 0.63597, 0, 0, 0.77778],
                  8850: [0.13597, 0.63597, 0, 0, 0.77778],
                  8851: [0, 0.55556, 0, 0, 0.66667],
                  8852: [0, 0.55556, 0, 0, 0.66667],
                  8853: [0.08333, 0.58333, 0, 0, 0.77778],
                  8854: [0.08333, 0.58333, 0, 0, 0.77778],
                  8855: [0.08333, 0.58333, 0, 0, 0.77778],
                  8856: [0.08333, 0.58333, 0, 0, 0.77778],
                  8857: [0.08333, 0.58333, 0, 0, 0.77778],
                  8866: [0, 0.69444, 0, 0, 0.61111],
                  8867: [0, 0.69444, 0, 0, 0.61111],
                  8868: [0, 0.69444, 0, 0, 0.77778],
                  8869: [0, 0.69444, 0, 0, 0.77778],
                  8872: [0.249, 0.75, 0, 0, 0.867],
                  8900: [-0.05555, 0.44445, 0, 0, 0.5],
                  8901: [-0.05555, 0.44445, 0, 0, 0.27778],
                  8902: [-0.03472, 0.46528, 0, 0, 0.5],
                  8904: [0.005, 0.505, 0, 0, 0.9],
                  8942: [0.03, 0.9, 0, 0, 0.278],
                  8943: [-0.19, 0.31, 0, 0, 1.172],
                  8945: [-0.1, 0.82, 0, 0, 1.282],
                  8968: [0.25, 0.75, 0, 0, 0.44445],
                  8969: [0.25, 0.75, 0, 0, 0.44445],
                  8970: [0.25, 0.75, 0, 0, 0.44445],
                  8971: [0.25, 0.75, 0, 0, 0.44445],
                  8994: [-0.14236, 0.35764, 0, 0, 1],
                  8995: [-0.14236, 0.35764, 0, 0, 1],
                  9136: [0.244, 0.744, 0, 0, 0.412],
                  9137: [0.244, 0.744, 0, 0, 0.412],
                  9651: [0.19444, 0.69444, 0, 0, 0.88889],
                  9657: [-0.03472, 0.46528, 0, 0, 0.5],
                  9661: [0.19444, 0.69444, 0, 0, 0.88889],
                  9667: [-0.03472, 0.46528, 0, 0, 0.5],
                  9711: [0.19444, 0.69444, 0, 0, 1],
                  9824: [0.12963, 0.69444, 0, 0, 0.77778],
                  9825: [0.12963, 0.69444, 0, 0, 0.77778],
                  9826: [0.12963, 0.69444, 0, 0, 0.77778],
                  9827: [0.12963, 0.69444, 0, 0, 0.77778],
                  9837: [0, 0.75, 0, 0, 0.38889],
                  9838: [0.19444, 0.69444, 0, 0, 0.38889],
                  9839: [0.19444, 0.69444, 0, 0, 0.38889],
                  10216: [0.25, 0.75, 0, 0, 0.38889],
                  10217: [0.25, 0.75, 0, 0, 0.38889],
                  10222: [0.244, 0.744, 0, 0, 0.412],
                  10223: [0.244, 0.744, 0, 0, 0.412],
                  10229: [0.011, 0.511, 0, 0, 1.609],
                  10230: [0.011, 0.511, 0, 0, 1.638],
                  10231: [0.011, 0.511, 0, 0, 1.859],
                  10232: [0.024, 0.525, 0, 0, 1.609],
                  10233: [0.024, 0.525, 0, 0, 1.638],
                  10234: [0.024, 0.525, 0, 0, 1.858],
                  10236: [0.011, 0.511, 0, 0, 1.638],
                  10815: [0, 0.68333, 0, 0, 0.75],
                  10927: [0.13597, 0.63597, 0, 0, 0.77778],
                  10928: [0.13597, 0.63597, 0, 0, 0.77778],
                  57376: [0.19444, 0.69444, 0, 0, 0],
                },
                'Math-BoldItalic': {
                  65: [0, 0.68611, 0, 0, 0.86944],
                  66: [0, 0.68611, 0.04835, 0, 0.8664],
                  67: [0, 0.68611, 0.06979, 0, 0.81694],
                  68: [0, 0.68611, 0.03194, 0, 0.93812],
                  69: [0, 0.68611, 0.05451, 0, 0.81007],
                  70: [0, 0.68611, 0.15972, 0, 0.68889],
                  71: [0, 0.68611, 0, 0, 0.88673],
                  72: [0, 0.68611, 0.08229, 0, 0.98229],
                  73: [0, 0.68611, 0.07778, 0, 0.51111],
                  74: [0, 0.68611, 0.10069, 0, 0.63125],
                  75: [0, 0.68611, 0.06979, 0, 0.97118],
                  76: [0, 0.68611, 0, 0, 0.75555],
                  77: [0, 0.68611, 0.11424, 0, 1.14201],
                  78: [0, 0.68611, 0.11424, 0, 0.95034],
                  79: [0, 0.68611, 0.03194, 0, 0.83666],
                  80: [0, 0.68611, 0.15972, 0, 0.72309],
                  81: [0.19444, 0.68611, 0, 0, 0.86861],
                  82: [0, 0.68611, 0.00421, 0, 0.87235],
                  83: [0, 0.68611, 0.05382, 0, 0.69271],
                  84: [0, 0.68611, 0.15972, 0, 0.63663],
                  85: [0, 0.68611, 0.11424, 0, 0.80027],
                  86: [0, 0.68611, 0.25555, 0, 0.67778],
                  87: [0, 0.68611, 0.15972, 0, 1.09305],
                  88: [0, 0.68611, 0.07778, 0, 0.94722],
                  89: [0, 0.68611, 0.25555, 0, 0.67458],
                  90: [0, 0.68611, 0.06979, 0, 0.77257],
                  97: [0, 0.44444, 0, 0, 0.63287],
                  98: [0, 0.69444, 0, 0, 0.52083],
                  99: [0, 0.44444, 0, 0, 0.51342],
                  100: [0, 0.69444, 0, 0, 0.60972],
                  101: [0, 0.44444, 0, 0, 0.55361],
                  102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
                  103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
                  104: [0, 0.69444, 0, 0, 0.66759],
                  105: [0, 0.69326, 0, 0, 0.4048],
                  106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
                  107: [0, 0.69444, 0.01852, 0, 0.6037],
                  108: [0, 0.69444, 0.0088, 0, 0.34815],
                  109: [0, 0.44444, 0, 0, 1.0324],
                  110: [0, 0.44444, 0, 0, 0.71296],
                  111: [0, 0.44444, 0, 0, 0.58472],
                  112: [0.19444, 0.44444, 0, 0, 0.60092],
                  113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
                  114: [0, 0.44444, 0.03194, 0, 0.5287],
                  115: [0, 0.44444, 0, 0, 0.53125],
                  116: [0, 0.63492, 0, 0, 0.41528],
                  117: [0, 0.44444, 0, 0, 0.68102],
                  118: [0, 0.44444, 0.03704, 0, 0.56666],
                  119: [0, 0.44444, 0.02778, 0, 0.83148],
                  120: [0, 0.44444, 0, 0, 0.65903],
                  121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
                  122: [0, 0.44444, 0.04213, 0, 0.55509],
                  915: [0, 0.68611, 0.15972, 0, 0.65694],
                  916: [0, 0.68611, 0, 0, 0.95833],
                  920: [0, 0.68611, 0.03194, 0, 0.86722],
                  923: [0, 0.68611, 0, 0, 0.80555],
                  926: [0, 0.68611, 0.07458, 0, 0.84125],
                  928: [0, 0.68611, 0.08229, 0, 0.98229],
                  931: [0, 0.68611, 0.05451, 0, 0.88507],
                  933: [0, 0.68611, 0.15972, 0, 0.67083],
                  934: [0, 0.68611, 0, 0, 0.76666],
                  936: [0, 0.68611, 0.11653, 0, 0.71402],
                  937: [0, 0.68611, 0.04835, 0, 0.8789],
                  945: [0, 0.44444, 0, 0, 0.76064],
                  946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
                  947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
                  948: [0, 0.69444, 0.03819, 0, 0.52222],
                  949: [0, 0.44444, 0, 0, 0.52882],
                  950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
                  951: [0.19444, 0.44444, 0.03704, 0, 0.6],
                  952: [0, 0.69444, 0.03194, 0, 0.5618],
                  953: [0, 0.44444, 0, 0, 0.41204],
                  954: [0, 0.44444, 0, 0, 0.66759],
                  955: [0, 0.69444, 0, 0, 0.67083],
                  956: [0.19444, 0.44444, 0, 0, 0.70787],
                  957: [0, 0.44444, 0.06898, 0, 0.57685],
                  958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
                  959: [0, 0.44444, 0, 0, 0.58472],
                  960: [0, 0.44444, 0.03704, 0, 0.68241],
                  961: [0.19444, 0.44444, 0, 0, 0.6118],
                  962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
                  963: [0, 0.44444, 0.03704, 0, 0.68588],
                  964: [0, 0.44444, 0.13472, 0, 0.52083],
                  965: [0, 0.44444, 0.03704, 0, 0.63055],
                  966: [0.19444, 0.44444, 0, 0, 0.74722],
                  967: [0.19444, 0.44444, 0, 0, 0.71805],
                  968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
                  969: [0, 0.44444, 0.03704, 0, 0.71782],
                  977: [0, 0.69444, 0, 0, 0.69155],
                  981: [0.19444, 0.69444, 0, 0, 0.7125],
                  982: [0, 0.44444, 0.03194, 0, 0.975],
                  1009: [0.19444, 0.44444, 0, 0, 0.6118],
                  1013: [0, 0.44444, 0, 0, 0.48333],
                },
                'Math-Italic': {
                  65: [0, 0.68333, 0, 0.13889, 0.75],
                  66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
                  67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
                  68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
                  69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
                  70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
                  71: [0, 0.68333, 0, 0.08334, 0.78625],
                  72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                  73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
                  74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
                  75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
                  76: [0, 0.68333, 0, 0.02778, 0.68056],
                  77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
                  78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
                  79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                  80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
                  81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
                  82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
                  83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
                  84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
                  85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
                  86: [0, 0.68333, 0.22222, 0, 0.58333],
                  87: [0, 0.68333, 0.13889, 0, 0.94445],
                  88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
                  89: [0, 0.68333, 0.22222, 0, 0.58056],
                  90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
                  97: [0, 0.43056, 0, 0, 0.52859],
                  98: [0, 0.69444, 0, 0, 0.42917],
                  99: [0, 0.43056, 0, 0.05556, 0.43276],
                  100: [0, 0.69444, 0, 0.16667, 0.52049],
                  101: [0, 0.43056, 0, 0.05556, 0.46563],
                  102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                  103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                  104: [0, 0.69444, 0, 0, 0.57616],
                  105: [0, 0.65952, 0, 0, 0.34451],
                  106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
                  107: [0, 0.69444, 0.03148, 0, 0.5206],
                  108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
                  109: [0, 0.43056, 0, 0, 0.87801],
                  110: [0, 0.43056, 0, 0, 0.60023],
                  111: [0, 0.43056, 0, 0.05556, 0.48472],
                  112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
                  113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                  114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
                  115: [0, 0.43056, 0, 0.05556, 0.46875],
                  116: [0, 0.61508, 0, 0.08334, 0.36111],
                  117: [0, 0.43056, 0, 0.02778, 0.57246],
                  118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
                  119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
                  120: [0, 0.43056, 0, 0.02778, 0.57153],
                  121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                  122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
                  915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
                  916: [0, 0.68333, 0, 0.16667, 0.83334],
                  920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                  923: [0, 0.68333, 0, 0.16667, 0.69445],
                  926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
                  928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                  931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
                  933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
                  934: [0, 0.68333, 0, 0.08334, 0.66667],
                  936: [0, 0.68333, 0.11, 0.05556, 0.61222],
                  937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
                  945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
                  946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                  947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
                  948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
                  949: [0, 0.43056, 0, 0.08334, 0.46632],
                  950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                  951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                  952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
                  953: [0, 0.43056, 0, 0.05556, 0.35394],
                  954: [0, 0.43056, 0, 0, 0.57616],
                  955: [0, 0.69444, 0, 0, 0.58334],
                  956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
                  957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
                  958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                  959: [0, 0.43056, 0, 0.05556, 0.48472],
                  960: [0, 0.43056, 0.03588, 0, 0.57003],
                  961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                  962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                  963: [0, 0.43056, 0.03588, 0, 0.57141],
                  964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
                  965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
                  966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
                  967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
                  968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                  969: [0, 0.43056, 0.03588, 0, 0.62245],
                  977: [0, 0.69444, 0, 0.08334, 0.59144],
                  981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
                  982: [0, 0.43056, 0.02778, 0, 0.82813],
                  1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                  1013: [0, 0.43056, 0, 0.05556, 0.4059],
                },
                'Math-Regular': {
                  65: [0, 0.68333, 0, 0.13889, 0.75],
                  66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
                  67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
                  68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
                  69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
                  70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
                  71: [0, 0.68333, 0, 0.08334, 0.78625],
                  72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                  73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
                  74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
                  75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
                  76: [0, 0.68333, 0, 0.02778, 0.68056],
                  77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
                  78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
                  79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                  80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
                  81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
                  82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
                  83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
                  84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
                  85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
                  86: [0, 0.68333, 0.22222, 0, 0.58333],
                  87: [0, 0.68333, 0.13889, 0, 0.94445],
                  88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
                  89: [0, 0.68333, 0.22222, 0, 0.58056],
                  90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
                  97: [0, 0.43056, 0, 0, 0.52859],
                  98: [0, 0.69444, 0, 0, 0.42917],
                  99: [0, 0.43056, 0, 0.05556, 0.43276],
                  100: [0, 0.69444, 0, 0.16667, 0.52049],
                  101: [0, 0.43056, 0, 0.05556, 0.46563],
                  102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                  103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                  104: [0, 0.69444, 0, 0, 0.57616],
                  105: [0, 0.65952, 0, 0, 0.34451],
                  106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
                  107: [0, 0.69444, 0.03148, 0, 0.5206],
                  108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
                  109: [0, 0.43056, 0, 0, 0.87801],
                  110: [0, 0.43056, 0, 0, 0.60023],
                  111: [0, 0.43056, 0, 0.05556, 0.48472],
                  112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
                  113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                  114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
                  115: [0, 0.43056, 0, 0.05556, 0.46875],
                  116: [0, 0.61508, 0, 0.08334, 0.36111],
                  117: [0, 0.43056, 0, 0.02778, 0.57246],
                  118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
                  119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
                  120: [0, 0.43056, 0, 0.02778, 0.57153],
                  121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                  122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
                  915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
                  916: [0, 0.68333, 0, 0.16667, 0.83334],
                  920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                  923: [0, 0.68333, 0, 0.16667, 0.69445],
                  926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
                  928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                  931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
                  933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
                  934: [0, 0.68333, 0, 0.08334, 0.66667],
                  936: [0, 0.68333, 0.11, 0.05556, 0.61222],
                  937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
                  945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
                  946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                  947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
                  948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
                  949: [0, 0.43056, 0, 0.08334, 0.46632],
                  950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                  951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                  952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
                  953: [0, 0.43056, 0, 0.05556, 0.35394],
                  954: [0, 0.43056, 0, 0, 0.57616],
                  955: [0, 0.69444, 0, 0, 0.58334],
                  956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
                  957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
                  958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                  959: [0, 0.43056, 0, 0.05556, 0.48472],
                  960: [0, 0.43056, 0.03588, 0, 0.57003],
                  961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                  962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                  963: [0, 0.43056, 0.03588, 0, 0.57141],
                  964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
                  965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
                  966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
                  967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
                  968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                  969: [0, 0.43056, 0.03588, 0, 0.62245],
                  977: [0, 0.69444, 0, 0.08334, 0.59144],
                  981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
                  982: [0, 0.43056, 0.02778, 0, 0.82813],
                  1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                  1013: [0, 0.43056, 0, 0.05556, 0.4059],
                },
                'SansSerif-Bold': {
                  33: [0, 0.69444, 0, 0, 0.36667],
                  34: [0, 0.69444, 0, 0, 0.55834],
                  35: [0.19444, 0.69444, 0, 0, 0.91667],
                  36: [0.05556, 0.75, 0, 0, 0.55],
                  37: [0.05556, 0.75, 0, 0, 1.02912],
                  38: [0, 0.69444, 0, 0, 0.83056],
                  39: [0, 0.69444, 0, 0, 0.30556],
                  40: [0.25, 0.75, 0, 0, 0.42778],
                  41: [0.25, 0.75, 0, 0, 0.42778],
                  42: [0, 0.75, 0, 0, 0.55],
                  43: [0.11667, 0.61667, 0, 0, 0.85556],
                  44: [0.10556, 0.13056, 0, 0, 0.30556],
                  45: [0, 0.45833, 0, 0, 0.36667],
                  46: [0, 0.13056, 0, 0, 0.30556],
                  47: [0.25, 0.75, 0, 0, 0.55],
                  48: [0, 0.69444, 0, 0, 0.55],
                  49: [0, 0.69444, 0, 0, 0.55],
                  50: [0, 0.69444, 0, 0, 0.55],
                  51: [0, 0.69444, 0, 0, 0.55],
                  52: [0, 0.69444, 0, 0, 0.55],
                  53: [0, 0.69444, 0, 0, 0.55],
                  54: [0, 0.69444, 0, 0, 0.55],
                  55: [0, 0.69444, 0, 0, 0.55],
                  56: [0, 0.69444, 0, 0, 0.55],
                  57: [0, 0.69444, 0, 0, 0.55],
                  58: [0, 0.45833, 0, 0, 0.30556],
                  59: [0.10556, 0.45833, 0, 0, 0.30556],
                  61: [-0.09375, 0.40625, 0, 0, 0.85556],
                  63: [0, 0.69444, 0, 0, 0.51945],
                  64: [0, 0.69444, 0, 0, 0.73334],
                  65: [0, 0.69444, 0, 0, 0.73334],
                  66: [0, 0.69444, 0, 0, 0.73334],
                  67: [0, 0.69444, 0, 0, 0.70278],
                  68: [0, 0.69444, 0, 0, 0.79445],
                  69: [0, 0.69444, 0, 0, 0.64167],
                  70: [0, 0.69444, 0, 0, 0.61111],
                  71: [0, 0.69444, 0, 0, 0.73334],
                  72: [0, 0.69444, 0, 0, 0.79445],
                  73: [0, 0.69444, 0, 0, 0.33056],
                  74: [0, 0.69444, 0, 0, 0.51945],
                  75: [0, 0.69444, 0, 0, 0.76389],
                  76: [0, 0.69444, 0, 0, 0.58056],
                  77: [0, 0.69444, 0, 0, 0.97778],
                  78: [0, 0.69444, 0, 0, 0.79445],
                  79: [0, 0.69444, 0, 0, 0.79445],
                  80: [0, 0.69444, 0, 0, 0.70278],
                  81: [0.10556, 0.69444, 0, 0, 0.79445],
                  82: [0, 0.69444, 0, 0, 0.70278],
                  83: [0, 0.69444, 0, 0, 0.61111],
                  84: [0, 0.69444, 0, 0, 0.73334],
                  85: [0, 0.69444, 0, 0, 0.76389],
                  86: [0, 0.69444, 0.01528, 0, 0.73334],
                  87: [0, 0.69444, 0.01528, 0, 1.03889],
                  88: [0, 0.69444, 0, 0, 0.73334],
                  89: [0, 0.69444, 0.0275, 0, 0.73334],
                  90: [0, 0.69444, 0, 0, 0.67223],
                  91: [0.25, 0.75, 0, 0, 0.34306],
                  93: [0.25, 0.75, 0, 0, 0.34306],
                  94: [0, 0.69444, 0, 0, 0.55],
                  95: [0.35, 0.10833, 0.03056, 0, 0.55],
                  97: [0, 0.45833, 0, 0, 0.525],
                  98: [0, 0.69444, 0, 0, 0.56111],
                  99: [0, 0.45833, 0, 0, 0.48889],
                  100: [0, 0.69444, 0, 0, 0.56111],
                  101: [0, 0.45833, 0, 0, 0.51111],
                  102: [0, 0.69444, 0.07639, 0, 0.33611],
                  103: [0.19444, 0.45833, 0.01528, 0, 0.55],
                  104: [0, 0.69444, 0, 0, 0.56111],
                  105: [0, 0.69444, 0, 0, 0.25556],
                  106: [0.19444, 0.69444, 0, 0, 0.28611],
                  107: [0, 0.69444, 0, 0, 0.53056],
                  108: [0, 0.69444, 0, 0, 0.25556],
                  109: [0, 0.45833, 0, 0, 0.86667],
                  110: [0, 0.45833, 0, 0, 0.56111],
                  111: [0, 0.45833, 0, 0, 0.55],
                  112: [0.19444, 0.45833, 0, 0, 0.56111],
                  113: [0.19444, 0.45833, 0, 0, 0.56111],
                  114: [0, 0.45833, 0.01528, 0, 0.37222],
                  115: [0, 0.45833, 0, 0, 0.42167],
                  116: [0, 0.58929, 0, 0, 0.40417],
                  117: [0, 0.45833, 0, 0, 0.56111],
                  118: [0, 0.45833, 0.01528, 0, 0.5],
                  119: [0, 0.45833, 0.01528, 0, 0.74445],
                  120: [0, 0.45833, 0, 0, 0.5],
                  121: [0.19444, 0.45833, 0.01528, 0, 0.5],
                  122: [0, 0.45833, 0, 0, 0.47639],
                  126: [0.35, 0.34444, 0, 0, 0.55],
                  168: [0, 0.69444, 0, 0, 0.55],
                  176: [0, 0.69444, 0, 0, 0.73334],
                  180: [0, 0.69444, 0, 0, 0.55],
                  184: [0.17014, 0, 0, 0, 0.48889],
                  305: [0, 0.45833, 0, 0, 0.25556],
                  567: [0.19444, 0.45833, 0, 0, 0.28611],
                  710: [0, 0.69444, 0, 0, 0.55],
                  711: [0, 0.63542, 0, 0, 0.55],
                  713: [0, 0.63778, 0, 0, 0.55],
                  728: [0, 0.69444, 0, 0, 0.55],
                  729: [0, 0.69444, 0, 0, 0.30556],
                  730: [0, 0.69444, 0, 0, 0.73334],
                  732: [0, 0.69444, 0, 0, 0.55],
                  733: [0, 0.69444, 0, 0, 0.55],
                  915: [0, 0.69444, 0, 0, 0.58056],
                  916: [0, 0.69444, 0, 0, 0.91667],
                  920: [0, 0.69444, 0, 0, 0.85556],
                  923: [0, 0.69444, 0, 0, 0.67223],
                  926: [0, 0.69444, 0, 0, 0.73334],
                  928: [0, 0.69444, 0, 0, 0.79445],
                  931: [0, 0.69444, 0, 0, 0.79445],
                  933: [0, 0.69444, 0, 0, 0.85556],
                  934: [0, 0.69444, 0, 0, 0.79445],
                  936: [0, 0.69444, 0, 0, 0.85556],
                  937: [0, 0.69444, 0, 0, 0.79445],
                  8211: [0, 0.45833, 0.03056, 0, 0.55],
                  8212: [0, 0.45833, 0.03056, 0, 1.10001],
                  8216: [0, 0.69444, 0, 0, 0.30556],
                  8217: [0, 0.69444, 0, 0, 0.30556],
                  8220: [0, 0.69444, 0, 0, 0.55834],
                  8221: [0, 0.69444, 0, 0, 0.55834],
                },
                'SansSerif-Italic': {
                  33: [0, 0.69444, 0.05733, 0, 0.31945],
                  34: [0, 0.69444, 0.00316, 0, 0.5],
                  35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
                  36: [0.05556, 0.75, 0.11156, 0, 0.5],
                  37: [0.05556, 0.75, 0.03126, 0, 0.83334],
                  38: [0, 0.69444, 0.03058, 0, 0.75834],
                  39: [0, 0.69444, 0.07816, 0, 0.27778],
                  40: [0.25, 0.75, 0.13164, 0, 0.38889],
                  41: [0.25, 0.75, 0.02536, 0, 0.38889],
                  42: [0, 0.75, 0.11775, 0, 0.5],
                  43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
                  44: [0.125, 0.08333, 0, 0, 0.27778],
                  45: [0, 0.44444, 0.01946, 0, 0.33333],
                  46: [0, 0.08333, 0, 0, 0.27778],
                  47: [0.25, 0.75, 0.13164, 0, 0.5],
                  48: [0, 0.65556, 0.11156, 0, 0.5],
                  49: [0, 0.65556, 0.11156, 0, 0.5],
                  50: [0, 0.65556, 0.11156, 0, 0.5],
                  51: [0, 0.65556, 0.11156, 0, 0.5],
                  52: [0, 0.65556, 0.11156, 0, 0.5],
                  53: [0, 0.65556, 0.11156, 0, 0.5],
                  54: [0, 0.65556, 0.11156, 0, 0.5],
                  55: [0, 0.65556, 0.11156, 0, 0.5],
                  56: [0, 0.65556, 0.11156, 0, 0.5],
                  57: [0, 0.65556, 0.11156, 0, 0.5],
                  58: [0, 0.44444, 0.02502, 0, 0.27778],
                  59: [0.125, 0.44444, 0.02502, 0, 0.27778],
                  61: [-0.13, 0.37, 0.05087, 0, 0.77778],
                  63: [0, 0.69444, 0.11809, 0, 0.47222],
                  64: [0, 0.69444, 0.07555, 0, 0.66667],
                  65: [0, 0.69444, 0, 0, 0.66667],
                  66: [0, 0.69444, 0.08293, 0, 0.66667],
                  67: [0, 0.69444, 0.11983, 0, 0.63889],
                  68: [0, 0.69444, 0.07555, 0, 0.72223],
                  69: [0, 0.69444, 0.11983, 0, 0.59722],
                  70: [0, 0.69444, 0.13372, 0, 0.56945],
                  71: [0, 0.69444, 0.11983, 0, 0.66667],
                  72: [0, 0.69444, 0.08094, 0, 0.70834],
                  73: [0, 0.69444, 0.13372, 0, 0.27778],
                  74: [0, 0.69444, 0.08094, 0, 0.47222],
                  75: [0, 0.69444, 0.11983, 0, 0.69445],
                  76: [0, 0.69444, 0, 0, 0.54167],
                  77: [0, 0.69444, 0.08094, 0, 0.875],
                  78: [0, 0.69444, 0.08094, 0, 0.70834],
                  79: [0, 0.69444, 0.07555, 0, 0.73611],
                  80: [0, 0.69444, 0.08293, 0, 0.63889],
                  81: [0.125, 0.69444, 0.07555, 0, 0.73611],
                  82: [0, 0.69444, 0.08293, 0, 0.64584],
                  83: [0, 0.69444, 0.09205, 0, 0.55556],
                  84: [0, 0.69444, 0.13372, 0, 0.68056],
                  85: [0, 0.69444, 0.08094, 0, 0.6875],
                  86: [0, 0.69444, 0.1615, 0, 0.66667],
                  87: [0, 0.69444, 0.1615, 0, 0.94445],
                  88: [0, 0.69444, 0.13372, 0, 0.66667],
                  89: [0, 0.69444, 0.17261, 0, 0.66667],
                  90: [0, 0.69444, 0.11983, 0, 0.61111],
                  91: [0.25, 0.75, 0.15942, 0, 0.28889],
                  93: [0.25, 0.75, 0.08719, 0, 0.28889],
                  94: [0, 0.69444, 0.0799, 0, 0.5],
                  95: [0.35, 0.09444, 0.08616, 0, 0.5],
                  97: [0, 0.44444, 0.00981, 0, 0.48056],
                  98: [0, 0.69444, 0.03057, 0, 0.51667],
                  99: [0, 0.44444, 0.08336, 0, 0.44445],
                  100: [0, 0.69444, 0.09483, 0, 0.51667],
                  101: [0, 0.44444, 0.06778, 0, 0.44445],
                  102: [0, 0.69444, 0.21705, 0, 0.30556],
                  103: [0.19444, 0.44444, 0.10836, 0, 0.5],
                  104: [0, 0.69444, 0.01778, 0, 0.51667],
                  105: [0, 0.67937, 0.09718, 0, 0.23889],
                  106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
                  107: [0, 0.69444, 0.08336, 0, 0.48889],
                  108: [0, 0.69444, 0.09483, 0, 0.23889],
                  109: [0, 0.44444, 0.01778, 0, 0.79445],
                  110: [0, 0.44444, 0.01778, 0, 0.51667],
                  111: [0, 0.44444, 0.06613, 0, 0.5],
                  112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
                  113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
                  114: [0, 0.44444, 0.10836, 0, 0.34167],
                  115: [0, 0.44444, 0.0778, 0, 0.38333],
                  116: [0, 0.57143, 0.07225, 0, 0.36111],
                  117: [0, 0.44444, 0.04169, 0, 0.51667],
                  118: [0, 0.44444, 0.10836, 0, 0.46111],
                  119: [0, 0.44444, 0.10836, 0, 0.68334],
                  120: [0, 0.44444, 0.09169, 0, 0.46111],
                  121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
                  122: [0, 0.44444, 0.08752, 0, 0.43472],
                  126: [0.35, 0.32659, 0.08826, 0, 0.5],
                  168: [0, 0.67937, 0.06385, 0, 0.5],
                  176: [0, 0.69444, 0, 0, 0.73752],
                  184: [0.17014, 0, 0, 0, 0.44445],
                  305: [0, 0.44444, 0.04169, 0, 0.23889],
                  567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
                  710: [0, 0.69444, 0.0799, 0, 0.5],
                  711: [0, 0.63194, 0.08432, 0, 0.5],
                  713: [0, 0.60889, 0.08776, 0, 0.5],
                  714: [0, 0.69444, 0.09205, 0, 0.5],
                  715: [0, 0.69444, 0, 0, 0.5],
                  728: [0, 0.69444, 0.09483, 0, 0.5],
                  729: [0, 0.67937, 0.07774, 0, 0.27778],
                  730: [0, 0.69444, 0, 0, 0.73752],
                  732: [0, 0.67659, 0.08826, 0, 0.5],
                  733: [0, 0.69444, 0.09205, 0, 0.5],
                  915: [0, 0.69444, 0.13372, 0, 0.54167],
                  916: [0, 0.69444, 0, 0, 0.83334],
                  920: [0, 0.69444, 0.07555, 0, 0.77778],
                  923: [0, 0.69444, 0, 0, 0.61111],
                  926: [0, 0.69444, 0.12816, 0, 0.66667],
                  928: [0, 0.69444, 0.08094, 0, 0.70834],
                  931: [0, 0.69444, 0.11983, 0, 0.72222],
                  933: [0, 0.69444, 0.09031, 0, 0.77778],
                  934: [0, 0.69444, 0.04603, 0, 0.72222],
                  936: [0, 0.69444, 0.09031, 0, 0.77778],
                  937: [0, 0.69444, 0.08293, 0, 0.72222],
                  8211: [0, 0.44444, 0.08616, 0, 0.5],
                  8212: [0, 0.44444, 0.08616, 0, 1],
                  8216: [0, 0.69444, 0.07816, 0, 0.27778],
                  8217: [0, 0.69444, 0.07816, 0, 0.27778],
                  8220: [0, 0.69444, 0.14205, 0, 0.5],
                  8221: [0, 0.69444, 0.00316, 0, 0.5],
                },
                'SansSerif-Regular': {
                  33: [0, 0.69444, 0, 0, 0.31945],
                  34: [0, 0.69444, 0, 0, 0.5],
                  35: [0.19444, 0.69444, 0, 0, 0.83334],
                  36: [0.05556, 0.75, 0, 0, 0.5],
                  37: [0.05556, 0.75, 0, 0, 0.83334],
                  38: [0, 0.69444, 0, 0, 0.75834],
                  39: [0, 0.69444, 0, 0, 0.27778],
                  40: [0.25, 0.75, 0, 0, 0.38889],
                  41: [0.25, 0.75, 0, 0, 0.38889],
                  42: [0, 0.75, 0, 0, 0.5],
                  43: [0.08333, 0.58333, 0, 0, 0.77778],
                  44: [0.125, 0.08333, 0, 0, 0.27778],
                  45: [0, 0.44444, 0, 0, 0.33333],
                  46: [0, 0.08333, 0, 0, 0.27778],
                  47: [0.25, 0.75, 0, 0, 0.5],
                  48: [0, 0.65556, 0, 0, 0.5],
                  49: [0, 0.65556, 0, 0, 0.5],
                  50: [0, 0.65556, 0, 0, 0.5],
                  51: [0, 0.65556, 0, 0, 0.5],
                  52: [0, 0.65556, 0, 0, 0.5],
                  53: [0, 0.65556, 0, 0, 0.5],
                  54: [0, 0.65556, 0, 0, 0.5],
                  55: [0, 0.65556, 0, 0, 0.5],
                  56: [0, 0.65556, 0, 0, 0.5],
                  57: [0, 0.65556, 0, 0, 0.5],
                  58: [0, 0.44444, 0, 0, 0.27778],
                  59: [0.125, 0.44444, 0, 0, 0.27778],
                  61: [-0.13, 0.37, 0, 0, 0.77778],
                  63: [0, 0.69444, 0, 0, 0.47222],
                  64: [0, 0.69444, 0, 0, 0.66667],
                  65: [0, 0.69444, 0, 0, 0.66667],
                  66: [0, 0.69444, 0, 0, 0.66667],
                  67: [0, 0.69444, 0, 0, 0.63889],
                  68: [0, 0.69444, 0, 0, 0.72223],
                  69: [0, 0.69444, 0, 0, 0.59722],
                  70: [0, 0.69444, 0, 0, 0.56945],
                  71: [0, 0.69444, 0, 0, 0.66667],
                  72: [0, 0.69444, 0, 0, 0.70834],
                  73: [0, 0.69444, 0, 0, 0.27778],
                  74: [0, 0.69444, 0, 0, 0.47222],
                  75: [0, 0.69444, 0, 0, 0.69445],
                  76: [0, 0.69444, 0, 0, 0.54167],
                  77: [0, 0.69444, 0, 0, 0.875],
                  78: [0, 0.69444, 0, 0, 0.70834],
                  79: [0, 0.69444, 0, 0, 0.73611],
                  80: [0, 0.69444, 0, 0, 0.63889],
                  81: [0.125, 0.69444, 0, 0, 0.73611],
                  82: [0, 0.69444, 0, 0, 0.64584],
                  83: [0, 0.69444, 0, 0, 0.55556],
                  84: [0, 0.69444, 0, 0, 0.68056],
                  85: [0, 0.69444, 0, 0, 0.6875],
                  86: [0, 0.69444, 0.01389, 0, 0.66667],
                  87: [0, 0.69444, 0.01389, 0, 0.94445],
                  88: [0, 0.69444, 0, 0, 0.66667],
                  89: [0, 0.69444, 0.025, 0, 0.66667],
                  90: [0, 0.69444, 0, 0, 0.61111],
                  91: [0.25, 0.75, 0, 0, 0.28889],
                  93: [0.25, 0.75, 0, 0, 0.28889],
                  94: [0, 0.69444, 0, 0, 0.5],
                  95: [0.35, 0.09444, 0.02778, 0, 0.5],
                  97: [0, 0.44444, 0, 0, 0.48056],
                  98: [0, 0.69444, 0, 0, 0.51667],
                  99: [0, 0.44444, 0, 0, 0.44445],
                  100: [0, 0.69444, 0, 0, 0.51667],
                  101: [0, 0.44444, 0, 0, 0.44445],
                  102: [0, 0.69444, 0.06944, 0, 0.30556],
                  103: [0.19444, 0.44444, 0.01389, 0, 0.5],
                  104: [0, 0.69444, 0, 0, 0.51667],
                  105: [0, 0.67937, 0, 0, 0.23889],
                  106: [0.19444, 0.67937, 0, 0, 0.26667],
                  107: [0, 0.69444, 0, 0, 0.48889],
                  108: [0, 0.69444, 0, 0, 0.23889],
                  109: [0, 0.44444, 0, 0, 0.79445],
                  110: [0, 0.44444, 0, 0, 0.51667],
                  111: [0, 0.44444, 0, 0, 0.5],
                  112: [0.19444, 0.44444, 0, 0, 0.51667],
                  113: [0.19444, 0.44444, 0, 0, 0.51667],
                  114: [0, 0.44444, 0.01389, 0, 0.34167],
                  115: [0, 0.44444, 0, 0, 0.38333],
                  116: [0, 0.57143, 0, 0, 0.36111],
                  117: [0, 0.44444, 0, 0, 0.51667],
                  118: [0, 0.44444, 0.01389, 0, 0.46111],
                  119: [0, 0.44444, 0.01389, 0, 0.68334],
                  120: [0, 0.44444, 0, 0, 0.46111],
                  121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
                  122: [0, 0.44444, 0, 0, 0.43472],
                  126: [0.35, 0.32659, 0, 0, 0.5],
                  168: [0, 0.67937, 0, 0, 0.5],
                  176: [0, 0.69444, 0, 0, 0.66667],
                  184: [0.17014, 0, 0, 0, 0.44445],
                  305: [0, 0.44444, 0, 0, 0.23889],
                  567: [0.19444, 0.44444, 0, 0, 0.26667],
                  710: [0, 0.69444, 0, 0, 0.5],
                  711: [0, 0.63194, 0, 0, 0.5],
                  713: [0, 0.60889, 0, 0, 0.5],
                  714: [0, 0.69444, 0, 0, 0.5],
                  715: [0, 0.69444, 0, 0, 0.5],
                  728: [0, 0.69444, 0, 0, 0.5],
                  729: [0, 0.67937, 0, 0, 0.27778],
                  730: [0, 0.69444, 0, 0, 0.66667],
                  732: [0, 0.67659, 0, 0, 0.5],
                  733: [0, 0.69444, 0, 0, 0.5],
                  915: [0, 0.69444, 0, 0, 0.54167],
                  916: [0, 0.69444, 0, 0, 0.83334],
                  920: [0, 0.69444, 0, 0, 0.77778],
                  923: [0, 0.69444, 0, 0, 0.61111],
                  926: [0, 0.69444, 0, 0, 0.66667],
                  928: [0, 0.69444, 0, 0, 0.70834],
                  931: [0, 0.69444, 0, 0, 0.72222],
                  933: [0, 0.69444, 0, 0, 0.77778],
                  934: [0, 0.69444, 0, 0, 0.72222],
                  936: [0, 0.69444, 0, 0, 0.77778],
                  937: [0, 0.69444, 0, 0, 0.72222],
                  8211: [0, 0.44444, 0.02778, 0, 0.5],
                  8212: [0, 0.44444, 0.02778, 0, 1],
                  8216: [0, 0.69444, 0, 0, 0.27778],
                  8217: [0, 0.69444, 0, 0, 0.27778],
                  8220: [0, 0.69444, 0, 0, 0.5],
                  8221: [0, 0.69444, 0, 0, 0.5],
                },
                'Script-Regular': {
                  65: [0, 0.7, 0.22925, 0, 0.80253],
                  66: [0, 0.7, 0.04087, 0, 0.90757],
                  67: [0, 0.7, 0.1689, 0, 0.66619],
                  68: [0, 0.7, 0.09371, 0, 0.77443],
                  69: [0, 0.7, 0.18583, 0, 0.56162],
                  70: [0, 0.7, 0.13634, 0, 0.89544],
                  71: [0, 0.7, 0.17322, 0, 0.60961],
                  72: [0, 0.7, 0.29694, 0, 0.96919],
                  73: [0, 0.7, 0.19189, 0, 0.80907],
                  74: [0.27778, 0.7, 0.19189, 0, 1.05159],
                  75: [0, 0.7, 0.31259, 0, 0.91364],
                  76: [0, 0.7, 0.19189, 0, 0.87373],
                  77: [0, 0.7, 0.15981, 0, 1.08031],
                  78: [0, 0.7, 0.3525, 0, 0.9015],
                  79: [0, 0.7, 0.08078, 0, 0.73787],
                  80: [0, 0.7, 0.08078, 0, 1.01262],
                  81: [0, 0.7, 0.03305, 0, 0.88282],
                  82: [0, 0.7, 0.06259, 0, 0.85],
                  83: [0, 0.7, 0.19189, 0, 0.86767],
                  84: [0, 0.7, 0.29087, 0, 0.74697],
                  85: [0, 0.7, 0.25815, 0, 0.79996],
                  86: [0, 0.7, 0.27523, 0, 0.62204],
                  87: [0, 0.7, 0.27523, 0, 0.80532],
                  88: [0, 0.7, 0.26006, 0, 0.94445],
                  89: [0, 0.7, 0.2939, 0, 0.70961],
                  90: [0, 0.7, 0.24037, 0, 0.8212],
                },
                'Size1-Regular': {
                  40: [0.35001, 0.85, 0, 0, 0.45834],
                  41: [0.35001, 0.85, 0, 0, 0.45834],
                  47: [0.35001, 0.85, 0, 0, 0.57778],
                  91: [0.35001, 0.85, 0, 0, 0.41667],
                  92: [0.35001, 0.85, 0, 0, 0.57778],
                  93: [0.35001, 0.85, 0, 0, 0.41667],
                  123: [0.35001, 0.85, 0, 0, 0.58334],
                  125: [0.35001, 0.85, 0, 0, 0.58334],
                  710: [0, 0.72222, 0, 0, 0.55556],
                  732: [0, 0.72222, 0, 0, 0.55556],
                  770: [0, 0.72222, 0, 0, 0.55556],
                  771: [0, 0.72222, 0, 0, 0.55556],
                  8214: [-99e-5, 0.601, 0, 0, 0.77778],
                  8593: [1e-5, 0.6, 0, 0, 0.66667],
                  8595: [1e-5, 0.6, 0, 0, 0.66667],
                  8657: [1e-5, 0.6, 0, 0, 0.77778],
                  8659: [1e-5, 0.6, 0, 0, 0.77778],
                  8719: [0.25001, 0.75, 0, 0, 0.94445],
                  8720: [0.25001, 0.75, 0, 0, 0.94445],
                  8721: [0.25001, 0.75, 0, 0, 1.05556],
                  8730: [0.35001, 0.85, 0, 0, 1],
                  8739: [-0.00599, 0.606, 0, 0, 0.33333],
                  8741: [-0.00599, 0.606, 0, 0, 0.55556],
                  8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
                  8748: [0.306, 0.805, 0.19445, 0, 0.47222],
                  8749: [0.306, 0.805, 0.19445, 0, 0.47222],
                  8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
                  8896: [0.25001, 0.75, 0, 0, 0.83334],
                  8897: [0.25001, 0.75, 0, 0, 0.83334],
                  8898: [0.25001, 0.75, 0, 0, 0.83334],
                  8899: [0.25001, 0.75, 0, 0, 0.83334],
                  8968: [0.35001, 0.85, 0, 0, 0.47222],
                  8969: [0.35001, 0.85, 0, 0, 0.47222],
                  8970: [0.35001, 0.85, 0, 0, 0.47222],
                  8971: [0.35001, 0.85, 0, 0, 0.47222],
                  9168: [-99e-5, 0.601, 0, 0, 0.66667],
                  10216: [0.35001, 0.85, 0, 0, 0.47222],
                  10217: [0.35001, 0.85, 0, 0, 0.47222],
                  10752: [0.25001, 0.75, 0, 0, 1.11111],
                  10753: [0.25001, 0.75, 0, 0, 1.11111],
                  10754: [0.25001, 0.75, 0, 0, 1.11111],
                  10756: [0.25001, 0.75, 0, 0, 0.83334],
                  10758: [0.25001, 0.75, 0, 0, 0.83334],
                },
                'Size2-Regular': {
                  40: [0.65002, 1.15, 0, 0, 0.59722],
                  41: [0.65002, 1.15, 0, 0, 0.59722],
                  47: [0.65002, 1.15, 0, 0, 0.81111],
                  91: [0.65002, 1.15, 0, 0, 0.47222],
                  92: [0.65002, 1.15, 0, 0, 0.81111],
                  93: [0.65002, 1.15, 0, 0, 0.47222],
                  123: [0.65002, 1.15, 0, 0, 0.66667],
                  125: [0.65002, 1.15, 0, 0, 0.66667],
                  710: [0, 0.75, 0, 0, 1],
                  732: [0, 0.75, 0, 0, 1],
                  770: [0, 0.75, 0, 0, 1],
                  771: [0, 0.75, 0, 0, 1],
                  8719: [0.55001, 1.05, 0, 0, 1.27778],
                  8720: [0.55001, 1.05, 0, 0, 1.27778],
                  8721: [0.55001, 1.05, 0, 0, 1.44445],
                  8730: [0.65002, 1.15, 0, 0, 1],
                  8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
                  8748: [0.862, 1.36, 0.44445, 0, 0.55556],
                  8749: [0.862, 1.36, 0.44445, 0, 0.55556],
                  8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
                  8896: [0.55001, 1.05, 0, 0, 1.11111],
                  8897: [0.55001, 1.05, 0, 0, 1.11111],
                  8898: [0.55001, 1.05, 0, 0, 1.11111],
                  8899: [0.55001, 1.05, 0, 0, 1.11111],
                  8968: [0.65002, 1.15, 0, 0, 0.52778],
                  8969: [0.65002, 1.15, 0, 0, 0.52778],
                  8970: [0.65002, 1.15, 0, 0, 0.52778],
                  8971: [0.65002, 1.15, 0, 0, 0.52778],
                  10216: [0.65002, 1.15, 0, 0, 0.61111],
                  10217: [0.65002, 1.15, 0, 0, 0.61111],
                  10752: [0.55001, 1.05, 0, 0, 1.51112],
                  10753: [0.55001, 1.05, 0, 0, 1.51112],
                  10754: [0.55001, 1.05, 0, 0, 1.51112],
                  10756: [0.55001, 1.05, 0, 0, 1.11111],
                  10758: [0.55001, 1.05, 0, 0, 1.11111],
                },
                'Size3-Regular': {
                  40: [0.95003, 1.45, 0, 0, 0.73611],
                  41: [0.95003, 1.45, 0, 0, 0.73611],
                  47: [0.95003, 1.45, 0, 0, 1.04445],
                  91: [0.95003, 1.45, 0, 0, 0.52778],
                  92: [0.95003, 1.45, 0, 0, 1.04445],
                  93: [0.95003, 1.45, 0, 0, 0.52778],
                  123: [0.95003, 1.45, 0, 0, 0.75],
                  125: [0.95003, 1.45, 0, 0, 0.75],
                  710: [0, 0.75, 0, 0, 1.44445],
                  732: [0, 0.75, 0, 0, 1.44445],
                  770: [0, 0.75, 0, 0, 1.44445],
                  771: [0, 0.75, 0, 0, 1.44445],
                  8730: [0.95003, 1.45, 0, 0, 1],
                  8968: [0.95003, 1.45, 0, 0, 0.58334],
                  8969: [0.95003, 1.45, 0, 0, 0.58334],
                  8970: [0.95003, 1.45, 0, 0, 0.58334],
                  8971: [0.95003, 1.45, 0, 0, 0.58334],
                  10216: [0.95003, 1.45, 0, 0, 0.75],
                  10217: [0.95003, 1.45, 0, 0, 0.75],
                },
                'Size4-Regular': {
                  40: [1.25003, 1.75, 0, 0, 0.79167],
                  41: [1.25003, 1.75, 0, 0, 0.79167],
                  47: [1.25003, 1.75, 0, 0, 1.27778],
                  91: [1.25003, 1.75, 0, 0, 0.58334],
                  92: [1.25003, 1.75, 0, 0, 1.27778],
                  93: [1.25003, 1.75, 0, 0, 0.58334],
                  123: [1.25003, 1.75, 0, 0, 0.80556],
                  125: [1.25003, 1.75, 0, 0, 0.80556],
                  710: [0, 0.825, 0, 0, 1.8889],
                  732: [0, 0.825, 0, 0, 1.8889],
                  770: [0, 0.825, 0, 0, 1.8889],
                  771: [0, 0.825, 0, 0, 1.8889],
                  8730: [1.25003, 1.75, 0, 0, 1],
                  8968: [1.25003, 1.75, 0, 0, 0.63889],
                  8969: [1.25003, 1.75, 0, 0, 0.63889],
                  8970: [1.25003, 1.75, 0, 0, 0.63889],
                  8971: [1.25003, 1.75, 0, 0, 0.63889],
                  9115: [0.64502, 1.155, 0, 0, 0.875],
                  9116: [1e-5, 0.6, 0, 0, 0.875],
                  9117: [0.64502, 1.155, 0, 0, 0.875],
                  9118: [0.64502, 1.155, 0, 0, 0.875],
                  9119: [1e-5, 0.6, 0, 0, 0.875],
                  9120: [0.64502, 1.155, 0, 0, 0.875],
                  9121: [0.64502, 1.155, 0, 0, 0.66667],
                  9122: [-99e-5, 0.601, 0, 0, 0.66667],
                  9123: [0.64502, 1.155, 0, 0, 0.66667],
                  9124: [0.64502, 1.155, 0, 0, 0.66667],
                  9125: [-99e-5, 0.601, 0, 0, 0.66667],
                  9126: [0.64502, 1.155, 0, 0, 0.66667],
                  9127: [1e-5, 0.9, 0, 0, 0.88889],
                  9128: [0.65002, 1.15, 0, 0, 0.88889],
                  9129: [0.90001, 0, 0, 0, 0.88889],
                  9130: [0, 0.3, 0, 0, 0.88889],
                  9131: [1e-5, 0.9, 0, 0, 0.88889],
                  9132: [0.65002, 1.15, 0, 0, 0.88889],
                  9133: [0.90001, 0, 0, 0, 0.88889],
                  9143: [0.88502, 0.915, 0, 0, 1.05556],
                  10216: [1.25003, 1.75, 0, 0, 0.80556],
                  10217: [1.25003, 1.75, 0, 0, 0.80556],
                  57344: [-0.00499, 0.605, 0, 0, 1.05556],
                  57345: [-0.00499, 0.605, 0, 0, 1.05556],
                  57680: [0, 0.12, 0, 0, 0.45],
                  57681: [0, 0.12, 0, 0, 0.45],
                  57682: [0, 0.12, 0, 0, 0.45],
                  57683: [0, 0.12, 0, 0, 0.45],
                },
                'Typewriter-Regular': {
                  32: [0, 0, 0, 0, 0.525],
                  33: [0, 0.61111, 0, 0, 0.525],
                  34: [0, 0.61111, 0, 0, 0.525],
                  35: [0, 0.61111, 0, 0, 0.525],
                  36: [0.08333, 0.69444, 0, 0, 0.525],
                  37: [0.08333, 0.69444, 0, 0, 0.525],
                  38: [0, 0.61111, 0, 0, 0.525],
                  39: [0, 0.61111, 0, 0, 0.525],
                  40: [0.08333, 0.69444, 0, 0, 0.525],
                  41: [0.08333, 0.69444, 0, 0, 0.525],
                  42: [0, 0.52083, 0, 0, 0.525],
                  43: [-0.08056, 0.53055, 0, 0, 0.525],
                  44: [0.13889, 0.125, 0, 0, 0.525],
                  45: [-0.08056, 0.53055, 0, 0, 0.525],
                  46: [0, 0.125, 0, 0, 0.525],
                  47: [0.08333, 0.69444, 0, 0, 0.525],
                  48: [0, 0.61111, 0, 0, 0.525],
                  49: [0, 0.61111, 0, 0, 0.525],
                  50: [0, 0.61111, 0, 0, 0.525],
                  51: [0, 0.61111, 0, 0, 0.525],
                  52: [0, 0.61111, 0, 0, 0.525],
                  53: [0, 0.61111, 0, 0, 0.525],
                  54: [0, 0.61111, 0, 0, 0.525],
                  55: [0, 0.61111, 0, 0, 0.525],
                  56: [0, 0.61111, 0, 0, 0.525],
                  57: [0, 0.61111, 0, 0, 0.525],
                  58: [0, 0.43056, 0, 0, 0.525],
                  59: [0.13889, 0.43056, 0, 0, 0.525],
                  60: [-0.05556, 0.55556, 0, 0, 0.525],
                  61: [-0.19549, 0.41562, 0, 0, 0.525],
                  62: [-0.05556, 0.55556, 0, 0, 0.525],
                  63: [0, 0.61111, 0, 0, 0.525],
                  64: [0, 0.61111, 0, 0, 0.525],
                  65: [0, 0.61111, 0, 0, 0.525],
                  66: [0, 0.61111, 0, 0, 0.525],
                  67: [0, 0.61111, 0, 0, 0.525],
                  68: [0, 0.61111, 0, 0, 0.525],
                  69: [0, 0.61111, 0, 0, 0.525],
                  70: [0, 0.61111, 0, 0, 0.525],
                  71: [0, 0.61111, 0, 0, 0.525],
                  72: [0, 0.61111, 0, 0, 0.525],
                  73: [0, 0.61111, 0, 0, 0.525],
                  74: [0, 0.61111, 0, 0, 0.525],
                  75: [0, 0.61111, 0, 0, 0.525],
                  76: [0, 0.61111, 0, 0, 0.525],
                  77: [0, 0.61111, 0, 0, 0.525],
                  78: [0, 0.61111, 0, 0, 0.525],
                  79: [0, 0.61111, 0, 0, 0.525],
                  80: [0, 0.61111, 0, 0, 0.525],
                  81: [0.13889, 0.61111, 0, 0, 0.525],
                  82: [0, 0.61111, 0, 0, 0.525],
                  83: [0, 0.61111, 0, 0, 0.525],
                  84: [0, 0.61111, 0, 0, 0.525],
                  85: [0, 0.61111, 0, 0, 0.525],
                  86: [0, 0.61111, 0, 0, 0.525],
                  87: [0, 0.61111, 0, 0, 0.525],
                  88: [0, 0.61111, 0, 0, 0.525],
                  89: [0, 0.61111, 0, 0, 0.525],
                  90: [0, 0.61111, 0, 0, 0.525],
                  91: [0.08333, 0.69444, 0, 0, 0.525],
                  92: [0.08333, 0.69444, 0, 0, 0.525],
                  93: [0.08333, 0.69444, 0, 0, 0.525],
                  94: [0, 0.61111, 0, 0, 0.525],
                  95: [0.09514, 0, 0, 0, 0.525],
                  96: [0, 0.61111, 0, 0, 0.525],
                  97: [0, 0.43056, 0, 0, 0.525],
                  98: [0, 0.61111, 0, 0, 0.525],
                  99: [0, 0.43056, 0, 0, 0.525],
                  100: [0, 0.61111, 0, 0, 0.525],
                  101: [0, 0.43056, 0, 0, 0.525],
                  102: [0, 0.61111, 0, 0, 0.525],
                  103: [0.22222, 0.43056, 0, 0, 0.525],
                  104: [0, 0.61111, 0, 0, 0.525],
                  105: [0, 0.61111, 0, 0, 0.525],
                  106: [0.22222, 0.61111, 0, 0, 0.525],
                  107: [0, 0.61111, 0, 0, 0.525],
                  108: [0, 0.61111, 0, 0, 0.525],
                  109: [0, 0.43056, 0, 0, 0.525],
                  110: [0, 0.43056, 0, 0, 0.525],
                  111: [0, 0.43056, 0, 0, 0.525],
                  112: [0.22222, 0.43056, 0, 0, 0.525],
                  113: [0.22222, 0.43056, 0, 0, 0.525],
                  114: [0, 0.43056, 0, 0, 0.525],
                  115: [0, 0.43056, 0, 0, 0.525],
                  116: [0, 0.55358, 0, 0, 0.525],
                  117: [0, 0.43056, 0, 0, 0.525],
                  118: [0, 0.43056, 0, 0, 0.525],
                  119: [0, 0.43056, 0, 0, 0.525],
                  120: [0, 0.43056, 0, 0, 0.525],
                  121: [0.22222, 0.43056, 0, 0, 0.525],
                  122: [0, 0.43056, 0, 0, 0.525],
                  123: [0.08333, 0.69444, 0, 0, 0.525],
                  124: [0.08333, 0.69444, 0, 0, 0.525],
                  125: [0.08333, 0.69444, 0, 0, 0.525],
                  126: [0, 0.61111, 0, 0, 0.525],
                  127: [0, 0.61111, 0, 0, 0.525],
                  160: [0, 0, 0, 0, 0.525],
                  176: [0, 0.61111, 0, 0, 0.525],
                  184: [0.19445, 0, 0, 0, 0.525],
                  305: [0, 0.43056, 0, 0, 0.525],
                  567: [0.22222, 0.43056, 0, 0, 0.525],
                  711: [0, 0.56597, 0, 0, 0.525],
                  713: [0, 0.56555, 0, 0, 0.525],
                  714: [0, 0.61111, 0, 0, 0.525],
                  715: [0, 0.61111, 0, 0, 0.525],
                  728: [0, 0.61111, 0, 0, 0.525],
                  730: [0, 0.61111, 0, 0, 0.525],
                  770: [0, 0.61111, 0, 0, 0.525],
                  771: [0, 0.61111, 0, 0, 0.525],
                  776: [0, 0.61111, 0, 0, 0.525],
                  915: [0, 0.61111, 0, 0, 0.525],
                  916: [0, 0.61111, 0, 0, 0.525],
                  920: [0, 0.61111, 0, 0, 0.525],
                  923: [0, 0.61111, 0, 0, 0.525],
                  926: [0, 0.61111, 0, 0, 0.525],
                  928: [0, 0.61111, 0, 0, 0.525],
                  931: [0, 0.61111, 0, 0, 0.525],
                  933: [0, 0.61111, 0, 0, 0.525],
                  934: [0, 0.61111, 0, 0, 0.525],
                  936: [0, 0.61111, 0, 0, 0.525],
                  937: [0, 0.61111, 0, 0, 0.525],
                  8216: [0, 0.61111, 0, 0, 0.525],
                  8217: [0, 0.61111, 0, 0, 0.525],
                  8242: [0, 0.61111, 0, 0, 0.525],
                  9251: [0.11111, 0.21944, 0, 0, 0.525],
                },
              },
              H = {
                slant: [0.25, 0.25, 0.25],
                space: [0, 0, 0],
                stretch: [0, 0, 0],
                shrink: [0, 0, 0],
                xHeight: [0.431, 0.431, 0.431],
                quad: [1, 1.171, 1.472],
                extraSpace: [0, 0, 0],
                num1: [0.677, 0.732, 0.925],
                num2: [0.394, 0.384, 0.387],
                num3: [0.444, 0.471, 0.504],
                denom1: [0.686, 0.752, 1.025],
                denom2: [0.345, 0.344, 0.532],
                sup1: [0.413, 0.503, 0.504],
                sup2: [0.363, 0.431, 0.404],
                sup3: [0.289, 0.286, 0.294],
                sub1: [0.15, 0.143, 0.2],
                sub2: [0.247, 0.286, 0.4],
                supDrop: [0.386, 0.353, 0.494],
                subDrop: [0.05, 0.071, 0.1],
                delim1: [2.39, 1.7, 1.98],
                delim2: [1.01, 1.157, 1.42],
                axisHeight: [0.25, 0.25, 0.25],
                defaultRuleThickness: [0.04, 0.049, 0.049],
                bigOpSpacing1: [0.111, 0.111, 0.111],
                bigOpSpacing2: [0.166, 0.166, 0.166],
                bigOpSpacing3: [0.2, 0.2, 0.2],
                bigOpSpacing4: [0.6, 0.611, 0.611],
                bigOpSpacing5: [0.1, 0.143, 0.143],
                sqrtRuleThickness: [0.04, 0.04, 0.04],
                ptPerEm: [10, 10, 10],
                doubleRuleSep: [0.2, 0.2, 0.2],
              },
              F = {
                Å: 'A',
                Ç: 'C',
                Ð: 'D',
                Þ: 'o',
                å: 'a',
                ç: 'c',
                ð: 'd',
                þ: 'o',
                А: 'A',
                Б: 'B',
                В: 'B',
                Г: 'F',
                Д: 'A',
                Е: 'E',
                Ж: 'K',
                З: '3',
                И: 'N',
                Й: 'N',
                К: 'K',
                Л: 'N',
                М: 'M',
                Н: 'H',
                О: 'O',
                П: 'N',
                Р: 'P',
                С: 'C',
                Т: 'T',
                У: 'y',
                Ф: 'O',
                Х: 'X',
                Ц: 'U',
                Ч: 'h',
                Ш: 'W',
                Щ: 'W',
                Ъ: 'B',
                Ы: 'X',
                Ь: 'B',
                Э: '3',
                Ю: 'X',
                Я: 'R',
                а: 'a',
                б: 'b',
                в: 'a',
                г: 'r',
                д: 'y',
                е: 'e',
                ж: 'm',
                з: 'e',
                и: 'n',
                й: 'n',
                к: 'n',
                л: 'n',
                м: 'm',
                н: 'n',
                о: 'o',
                п: 'n',
                р: 'p',
                с: 'c',
                т: 'o',
                у: 'y',
                ф: 'b',
                х: 'x',
                ц: 'n',
                ч: 'n',
                ш: 'w',
                щ: 'w',
                ъ: 'a',
                ы: 'm',
                ь: 'a',
                э: 'e',
                ю: 'm',
                я: 'r',
              }
            function V(t, e, r) {
              if (!D[e])
                throw new Error('Font metrics not found for font: ' + e + '.')
              var n = t.charCodeAt(0)
              t[0] in F && (n = F[t[0]].charCodeAt(0))
              var a = D[e][n]
              if ((a || 'text' !== r || (M(n) && (a = D[e][77])), a))
                return {
                  depth: a[0],
                  height: a[1],
                  italic: a[2],
                  skew: a[3],
                  width: a[4],
                }
            }
            var U = {}
            var G = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
              _ = {
                'accent-token': 1,
                mathord: 1,
                'op-token': 1,
                spacing: 1,
                textord: 1,
              },
              X = { math: {}, text: {} },
              Y = X
            function $(t, e, r, n, a, i) {
              ;(X[t][a] = { font: e, group: r, replace: n }),
                i && n && (X[t][n] = X[t][a])
            }
            var W = 'main',
              j = 'ams',
              Z = 'bin',
              K = 'mathord',
              J = 'op-token',
              Q = 'rel',
              tt = 'spacing'
            $('math', W, Q, '≡', '\\equiv', !0),
              $('math', W, Q, '≺', '\\prec', !0),
              $('math', W, Q, '≻', '\\succ', !0),
              $('math', W, Q, '∼', '\\sim', !0),
              $('math', W, Q, '⊥', '\\perp'),
              $('math', W, Q, '⪯', '\\preceq', !0),
              $('math', W, Q, '⪰', '\\succeq', !0),
              $('math', W, Q, '≃', '\\simeq', !0),
              $('math', W, Q, '∣', '\\mid', !0),
              $('math', W, Q, '≪', '\\ll', !0),
              $('math', W, Q, '≫', '\\gg', !0),
              $('math', W, Q, '≍', '\\asymp', !0),
              $('math', W, Q, '∥', '\\parallel'),
              $('math', W, Q, '⋈', '\\bowtie', !0),
              $('math', W, Q, '⌣', '\\smile', !0),
              $('math', W, Q, '⊑', '\\sqsubseteq', !0),
              $('math', W, Q, '⊒', '\\sqsupseteq', !0),
              $('math', W, Q, '≐', '\\doteq', !0),
              $('math', W, Q, '⌢', '\\frown', !0),
              $('math', W, Q, '∋', '\\ni', !0),
              $('math', W, Q, '∝', '\\propto', !0),
              $('math', W, Q, '⊢', '\\vdash', !0),
              $('math', W, Q, '⊣', '\\dashv', !0),
              $('math', W, Q, '∋', '\\owns'),
              $('math', W, 'punct', '.', '\\ldotp'),
              $('math', W, 'punct', '⋅', '\\cdotp'),
              $('math', W, 'textord', '#', '\\#'),
              $('text', W, 'textord', '#', '\\#'),
              $('math', W, 'textord', '&', '\\&'),
              $('text', W, 'textord', '&', '\\&'),
              $('math', W, 'textord', 'ℵ', '\\aleph', !0),
              $('math', W, 'textord', '∀', '\\forall', !0),
              $('math', W, 'textord', 'ℏ', '\\hbar', !0),
              $('math', W, 'textord', '∃', '\\exists', !0),
              $('math', W, 'textord', '∇', '\\nabla', !0),
              $('math', W, 'textord', '♭', '\\flat', !0),
              $('math', W, 'textord', 'ℓ', '\\ell', !0),
              $('math', W, 'textord', '♮', '\\natural', !0),
              $('math', W, 'textord', '♣', '\\clubsuit', !0),
              $('math', W, 'textord', '℘', '\\wp', !0),
              $('math', W, 'textord', '♯', '\\sharp', !0),
              $('math', W, 'textord', '♢', '\\diamondsuit', !0),
              $('math', W, 'textord', 'ℜ', '\\Re', !0),
              $('math', W, 'textord', '♡', '\\heartsuit', !0),
              $('math', W, 'textord', 'ℑ', '\\Im', !0),
              $('math', W, 'textord', '♠', '\\spadesuit', !0),
              $('text', W, 'textord', '§', '\\S', !0),
              $('text', W, 'textord', '¶', '\\P', !0),
              $('math', W, 'textord', '†', '\\dag'),
              $('text', W, 'textord', '†', '\\dag'),
              $('text', W, 'textord', '†', '\\textdagger'),
              $('math', W, 'textord', '‡', '\\ddag'),
              $('text', W, 'textord', '‡', '\\ddag'),
              $('text', W, 'textord', '‡', '\\textdaggerdbl'),
              $('math', W, 'close', '⎱', '\\rmoustache', !0),
              $('math', W, 'open', '⎰', '\\lmoustache', !0),
              $('math', W, 'close', '⟯', '\\rgroup', !0),
              $('math', W, 'open', '⟮', '\\lgroup', !0),
              $('math', W, Z, '∓', '\\mp', !0),
              $('math', W, Z, '⊖', '\\ominus', !0),
              $('math', W, Z, '⊎', '\\uplus', !0),
              $('math', W, Z, '⊓', '\\sqcap', !0),
              $('math', W, Z, '∗', '\\ast'),
              $('math', W, Z, '⊔', '\\sqcup', !0),
              $('math', W, Z, '◯', '\\bigcirc'),
              $('math', W, Z, '∙', '\\bullet'),
              $('math', W, Z, '‡', '\\ddagger'),
              $('math', W, Z, '≀', '\\wr', !0),
              $('math', W, Z, '⨿', '\\amalg'),
              $('math', W, Z, '&', '\\And'),
              $('math', W, Q, '⟵', '\\longleftarrow', !0),
              $('math', W, Q, '⇐', '\\Leftarrow', !0),
              $('math', W, Q, '⟸', '\\Longleftarrow', !0),
              $('math', W, Q, '⟶', '\\longrightarrow', !0),
              $('math', W, Q, '⇒', '\\Rightarrow', !0),
              $('math', W, Q, '⟹', '\\Longrightarrow', !0),
              $('math', W, Q, '↔', '\\leftrightarrow', !0),
              $('math', W, Q, '⟷', '\\longleftrightarrow', !0),
              $('math', W, Q, '⇔', '\\Leftrightarrow', !0),
              $('math', W, Q, '⟺', '\\Longleftrightarrow', !0),
              $('math', W, Q, '↦', '\\mapsto', !0),
              $('math', W, Q, '⟼', '\\longmapsto', !0),
              $('math', W, Q, '↗', '\\nearrow', !0),
              $('math', W, Q, '↩', '\\hookleftarrow', !0),
              $('math', W, Q, '↪', '\\hookrightarrow', !0),
              $('math', W, Q, '↘', '\\searrow', !0),
              $('math', W, Q, '↼', '\\leftharpoonup', !0),
              $('math', W, Q, '⇀', '\\rightharpoonup', !0),
              $('math', W, Q, '↙', '\\swarrow', !0),
              $('math', W, Q, '↽', '\\leftharpoondown', !0),
              $('math', W, Q, '⇁', '\\rightharpoondown', !0),
              $('math', W, Q, '↖', '\\nwarrow', !0),
              $('math', W, Q, '⇌', '\\rightleftharpoons', !0),
              $('math', j, Q, '≮', '\\nless', !0),
              $('math', j, Q, '', '\\nleqslant'),
              $('math', j, Q, '', '\\nleqq'),
              $('math', j, Q, '⪇', '\\lneq', !0),
              $('math', j, Q, '≨', '\\lneqq', !0),
              $('math', j, Q, '', '\\lvertneqq'),
              $('math', j, Q, '⋦', '\\lnsim', !0),
              $('math', j, Q, '⪉', '\\lnapprox', !0),
              $('math', j, Q, '⊀', '\\nprec', !0),
              $('math', j, Q, '⋠', '\\npreceq', !0),
              $('math', j, Q, '⋨', '\\precnsim', !0),
              $('math', j, Q, '⪹', '\\precnapprox', !0),
              $('math', j, Q, '≁', '\\nsim', !0),
              $('math', j, Q, '', '\\nshortmid'),
              $('math', j, Q, '∤', '\\nmid', !0),
              $('math', j, Q, '⊬', '\\nvdash', !0),
              $('math', j, Q, '⊭', '\\nvDash', !0),
              $('math', j, Q, '⋪', '\\ntriangleleft'),
              $('math', j, Q, '⋬', '\\ntrianglelefteq', !0),
              $('math', j, Q, '⊊', '\\subsetneq', !0),
              $('math', j, Q, '', '\\varsubsetneq'),
              $('math', j, Q, '⫋', '\\subsetneqq', !0),
              $('math', j, Q, '', '\\varsubsetneqq'),
              $('math', j, Q, '≯', '\\ngtr', !0),
              $('math', j, Q, '', '\\ngeqslant'),
              $('math', j, Q, '', '\\ngeqq'),
              $('math', j, Q, '⪈', '\\gneq', !0),
              $('math', j, Q, '≩', '\\gneqq', !0),
              $('math', j, Q, '', '\\gvertneqq'),
              $('math', j, Q, '⋧', '\\gnsim', !0),
              $('math', j, Q, '⪊', '\\gnapprox', !0),
              $('math', j, Q, '⊁', '\\nsucc', !0),
              $('math', j, Q, '⋡', '\\nsucceq', !0),
              $('math', j, Q, '⋩', '\\succnsim', !0),
              $('math', j, Q, '⪺', '\\succnapprox', !0),
              $('math', j, Q, '≆', '\\ncong', !0),
              $('math', j, Q, '', '\\nshortparallel'),
              $('math', j, Q, '∦', '\\nparallel', !0),
              $('math', j, Q, '⊯', '\\nVDash', !0),
              $('math', j, Q, '⋫', '\\ntriangleright'),
              $('math', j, Q, '⋭', '\\ntrianglerighteq', !0),
              $('math', j, Q, '', '\\nsupseteqq'),
              $('math', j, Q, '⊋', '\\supsetneq', !0),
              $('math', j, Q, '', '\\varsupsetneq'),
              $('math', j, Q, '⫌', '\\supsetneqq', !0),
              $('math', j, Q, '', '\\varsupsetneqq'),
              $('math', j, Q, '⊮', '\\nVdash', !0),
              $('math', j, Q, '⪵', '\\precneqq', !0),
              $('math', j, Q, '⪶', '\\succneqq', !0),
              $('math', j, Q, '', '\\nsubseteqq'),
              $('math', j, Z, '⊴', '\\unlhd'),
              $('math', j, Z, '⊵', '\\unrhd'),
              $('math', j, Q, '↚', '\\nleftarrow', !0),
              $('math', j, Q, '↛', '\\nrightarrow', !0),
              $('math', j, Q, '⇍', '\\nLeftarrow', !0),
              $('math', j, Q, '⇏', '\\nRightarrow', !0),
              $('math', j, Q, '↮', '\\nleftrightarrow', !0),
              $('math', j, Q, '⇎', '\\nLeftrightarrow', !0),
              $('math', j, Q, '△', '\\vartriangle'),
              $('math', j, 'textord', 'ℏ', '\\hslash'),
              $('math', j, 'textord', '▽', '\\triangledown'),
              $('math', j, 'textord', '◊', '\\lozenge'),
              $('math', j, 'textord', 'Ⓢ', '\\circledS'),
              $('math', j, 'textord', '®', '\\circledR'),
              $('text', j, 'textord', '®', '\\circledR'),
              $('math', j, 'textord', '∡', '\\measuredangle', !0),
              $('math', j, 'textord', '∄', '\\nexists'),
              $('math', j, 'textord', '℧', '\\mho'),
              $('math', j, 'textord', 'Ⅎ', '\\Finv', !0),
              $('math', j, 'textord', '⅁', '\\Game', !0),
              $('math', j, 'textord', 'k', '\\Bbbk'),
              $('math', j, 'textord', '‵', '\\backprime'),
              $('math', j, 'textord', '▲', '\\blacktriangle'),
              $('math', j, 'textord', '▼', '\\blacktriangledown'),
              $('math', j, 'textord', '■', '\\blacksquare'),
              $('math', j, 'textord', '⧫', '\\blacklozenge'),
              $('math', j, 'textord', '★', '\\bigstar'),
              $('math', j, 'textord', '∢', '\\sphericalangle', !0),
              $('math', j, 'textord', '∁', '\\complement', !0),
              $('math', j, 'textord', 'ð', '\\eth', !0),
              $('math', j, 'textord', '╱', '\\diagup'),
              $('math', j, 'textord', '╲', '\\diagdown'),
              $('math', j, 'textord', '□', '\\square'),
              $('math', j, 'textord', '□', '\\Box'),
              $('math', j, 'textord', '◊', '\\Diamond'),
              $('math', j, 'textord', '¥', '\\yen', !0),
              $('text', j, 'textord', '¥', '\\yen', !0),
              $('math', j, 'textord', '✓', '\\checkmark', !0),
              $('text', j, 'textord', '✓', '\\checkmark'),
              $('math', j, 'textord', 'ℶ', '\\beth', !0),
              $('math', j, 'textord', 'ℸ', '\\daleth', !0),
              $('math', j, 'textord', 'ℷ', '\\gimel', !0),
              $('math', j, 'textord', 'ϝ', '\\digamma'),
              $('math', j, 'textord', 'ϰ', '\\varkappa'),
              $('math', j, 'open', '┌', '\\ulcorner', !0),
              $('math', j, 'close', '┐', '\\urcorner', !0),
              $('math', j, 'open', '└', '\\llcorner', !0),
              $('math', j, 'close', '┘', '\\lrcorner', !0),
              $('math', j, Q, '≦', '\\leqq', !0),
              $('math', j, Q, '⩽', '\\leqslant', !0),
              $('math', j, Q, '⪕', '\\eqslantless', !0),
              $('math', j, Q, '≲', '\\lesssim', !0),
              $('math', j, Q, '⪅', '\\lessapprox', !0),
              $('math', j, Q, '≊', '\\approxeq', !0),
              $('math', j, Z, '⋖', '\\lessdot'),
              $('math', j, Q, '⋘', '\\lll', !0),
              $('math', j, Q, '≶', '\\lessgtr', !0),
              $('math', j, Q, '⋚', '\\lesseqgtr', !0),
              $('math', j, Q, '⪋', '\\lesseqqgtr', !0),
              $('math', j, Q, '≑', '\\doteqdot'),
              $('math', j, Q, '≓', '\\risingdotseq', !0),
              $('math', j, Q, '≒', '\\fallingdotseq', !0),
              $('math', j, Q, '∽', '\\backsim', !0),
              $('math', j, Q, '⋍', '\\backsimeq', !0),
              $('math', j, Q, '⫅', '\\subseteqq', !0),
              $('math', j, Q, '⋐', '\\Subset', !0),
              $('math', j, Q, '⊏', '\\sqsubset', !0),
              $('math', j, Q, '≼', '\\preccurlyeq', !0),
              $('math', j, Q, '⋞', '\\curlyeqprec', !0),
              $('math', j, Q, '≾', '\\precsim', !0),
              $('math', j, Q, '⪷', '\\precapprox', !0),
              $('math', j, Q, '⊲', '\\vartriangleleft'),
              $('math', j, Q, '⊴', '\\trianglelefteq'),
              $('math', j, Q, '⊨', '\\vDash', !0),
              $('math', j, Q, '⊪', '\\Vvdash', !0),
              $('math', j, Q, '⌣', '\\smallsmile'),
              $('math', j, Q, '⌢', '\\smallfrown'),
              $('math', j, Q, '≏', '\\bumpeq', !0),
              $('math', j, Q, '≎', '\\Bumpeq', !0),
              $('math', j, Q, '≧', '\\geqq', !0),
              $('math', j, Q, '⩾', '\\geqslant', !0),
              $('math', j, Q, '⪖', '\\eqslantgtr', !0),
              $('math', j, Q, '≳', '\\gtrsim', !0),
              $('math', j, Q, '⪆', '\\gtrapprox', !0),
              $('math', j, Z, '⋗', '\\gtrdot'),
              $('math', j, Q, '⋙', '\\ggg', !0),
              $('math', j, Q, '≷', '\\gtrless', !0),
              $('math', j, Q, '⋛', '\\gtreqless', !0),
              $('math', j, Q, '⪌', '\\gtreqqless', !0),
              $('math', j, Q, '≖', '\\eqcirc', !0),
              $('math', j, Q, '≗', '\\circeq', !0),
              $('math', j, Q, '≜', '\\triangleq', !0),
              $('math', j, Q, '∼', '\\thicksim'),
              $('math', j, Q, '≈', '\\thickapprox'),
              $('math', j, Q, '⫆', '\\supseteqq', !0),
              $('math', j, Q, '⋑', '\\Supset', !0),
              $('math', j, Q, '⊐', '\\sqsupset', !0),
              $('math', j, Q, '≽', '\\succcurlyeq', !0),
              $('math', j, Q, '⋟', '\\curlyeqsucc', !0),
              $('math', j, Q, '≿', '\\succsim', !0),
              $('math', j, Q, '⪸', '\\succapprox', !0),
              $('math', j, Q, '⊳', '\\vartriangleright'),
              $('math', j, Q, '⊵', '\\trianglerighteq'),
              $('math', j, Q, '⊩', '\\Vdash', !0),
              $('math', j, Q, '∣', '\\shortmid'),
              $('math', j, Q, '∥', '\\shortparallel'),
              $('math', j, Q, '≬', '\\between', !0),
              $('math', j, Q, '⋔', '\\pitchfork', !0),
              $('math', j, Q, '∝', '\\varpropto'),
              $('math', j, Q, '◀', '\\blacktriangleleft'),
              $('math', j, Q, '∴', '\\therefore', !0),
              $('math', j, Q, '∍', '\\backepsilon'),
              $('math', j, Q, '▶', '\\blacktriangleright'),
              $('math', j, Q, '∵', '\\because', !0),
              $('math', j, Q, '⋘', '\\llless'),
              $('math', j, Q, '⋙', '\\gggtr'),
              $('math', j, Z, '⊲', '\\lhd'),
              $('math', j, Z, '⊳', '\\rhd'),
              $('math', j, Q, '≂', '\\eqsim', !0),
              $('math', W, Q, '⋈', '\\Join'),
              $('math', j, Q, '≑', '\\Doteq', !0),
              $('math', j, Z, '∔', '\\dotplus', !0),
              $('math', j, Z, '∖', '\\smallsetminus'),
              $('math', j, Z, '⋒', '\\Cap', !0),
              $('math', j, Z, '⋓', '\\Cup', !0),
              $('math', j, Z, '⩞', '\\doublebarwedge', !0),
              $('math', j, Z, '⊟', '\\boxminus', !0),
              $('math', j, Z, '⊞', '\\boxplus', !0),
              $('math', j, Z, '⋇', '\\divideontimes', !0),
              $('math', j, Z, '⋉', '\\ltimes', !0),
              $('math', j, Z, '⋊', '\\rtimes', !0),
              $('math', j, Z, '⋋', '\\leftthreetimes', !0),
              $('math', j, Z, '⋌', '\\rightthreetimes', !0),
              $('math', j, Z, '⋏', '\\curlywedge', !0),
              $('math', j, Z, '⋎', '\\curlyvee', !0),
              $('math', j, Z, '⊝', '\\circleddash', !0),
              $('math', j, Z, '⊛', '\\circledast', !0),
              $('math', j, Z, '⋅', '\\centerdot'),
              $('math', j, Z, '⊺', '\\intercal', !0),
              $('math', j, Z, '⋒', '\\doublecap'),
              $('math', j, Z, '⋓', '\\doublecup'),
              $('math', j, Z, '⊠', '\\boxtimes', !0),
              $('math', j, Q, '⇢', '\\dashrightarrow', !0),
              $('math', j, Q, '⇠', '\\dashleftarrow', !0),
              $('math', j, Q, '⇇', '\\leftleftarrows', !0),
              $('math', j, Q, '⇆', '\\leftrightarrows', !0),
              $('math', j, Q, '⇚', '\\Lleftarrow', !0),
              $('math', j, Q, '↞', '\\twoheadleftarrow', !0),
              $('math', j, Q, '↢', '\\leftarrowtail', !0),
              $('math', j, Q, '↫', '\\looparrowleft', !0),
              $('math', j, Q, '⇋', '\\leftrightharpoons', !0),
              $('math', j, Q, '↶', '\\curvearrowleft', !0),
              $('math', j, Q, '↺', '\\circlearrowleft', !0),
              $('math', j, Q, '↰', '\\Lsh', !0),
              $('math', j, Q, '⇈', '\\upuparrows', !0),
              $('math', j, Q, '↿', '\\upharpoonleft', !0),
              $('math', j, Q, '⇃', '\\downharpoonleft', !0),
              $('math', j, Q, '⊸', '\\multimap', !0),
              $('math', j, Q, '↭', '\\leftrightsquigarrow', !0),
              $('math', j, Q, '⇉', '\\rightrightarrows', !0),
              $('math', j, Q, '⇄', '\\rightleftarrows', !0),
              $('math', j, Q, '↠', '\\twoheadrightarrow', !0),
              $('math', j, Q, '↣', '\\rightarrowtail', !0),
              $('math', j, Q, '↬', '\\looparrowright', !0),
              $('math', j, Q, '↷', '\\curvearrowright', !0),
              $('math', j, Q, '↻', '\\circlearrowright', !0),
              $('math', j, Q, '↱', '\\Rsh', !0),
              $('math', j, Q, '⇊', '\\downdownarrows', !0),
              $('math', j, Q, '↾', '\\upharpoonright', !0),
              $('math', j, Q, '⇂', '\\downharpoonright', !0),
              $('math', j, Q, '⇝', '\\rightsquigarrow', !0),
              $('math', j, Q, '⇝', '\\leadsto'),
              $('math', j, Q, '⇛', '\\Rrightarrow', !0),
              $('math', j, Q, '↾', '\\restriction'),
              $('math', W, 'textord', '‘', '`'),
              $('math', W, 'textord', '$', '\\$'),
              $('text', W, 'textord', '$', '\\$'),
              $('text', W, 'textord', '$', '\\textdollar'),
              $('math', W, 'textord', '%', '\\%'),
              $('text', W, 'textord', '%', '\\%'),
              $('math', W, 'textord', '_', '\\_'),
              $('text', W, 'textord', '_', '\\_'),
              $('text', W, 'textord', '_', '\\textunderscore'),
              $('math', W, 'textord', '∠', '\\angle', !0),
              $('math', W, 'textord', '∞', '\\infty', !0),
              $('math', W, 'textord', '′', '\\prime'),
              $('math', W, 'textord', '△', '\\triangle'),
              $('math', W, 'textord', 'Γ', '\\Gamma', !0),
              $('math', W, 'textord', 'Δ', '\\Delta', !0),
              $('math', W, 'textord', 'Θ', '\\Theta', !0),
              $('math', W, 'textord', 'Λ', '\\Lambda', !0),
              $('math', W, 'textord', 'Ξ', '\\Xi', !0),
              $('math', W, 'textord', 'Π', '\\Pi', !0),
              $('math', W, 'textord', 'Σ', '\\Sigma', !0),
              $('math', W, 'textord', 'Υ', '\\Upsilon', !0),
              $('math', W, 'textord', 'Φ', '\\Phi', !0),
              $('math', W, 'textord', 'Ψ', '\\Psi', !0),
              $('math', W, 'textord', 'Ω', '\\Omega', !0),
              $('math', W, 'textord', 'A', 'Α'),
              $('math', W, 'textord', 'B', 'Β'),
              $('math', W, 'textord', 'E', 'Ε'),
              $('math', W, 'textord', 'Z', 'Ζ'),
              $('math', W, 'textord', 'H', 'Η'),
              $('math', W, 'textord', 'I', 'Ι'),
              $('math', W, 'textord', 'K', 'Κ'),
              $('math', W, 'textord', 'M', 'Μ'),
              $('math', W, 'textord', 'N', 'Ν'),
              $('math', W, 'textord', 'O', 'Ο'),
              $('math', W, 'textord', 'P', 'Ρ'),
              $('math', W, 'textord', 'T', 'Τ'),
              $('math', W, 'textord', 'X', 'Χ'),
              $('math', W, 'textord', '¬', '\\neg', !0),
              $('math', W, 'textord', '¬', '\\lnot'),
              $('math', W, 'textord', '⊤', '\\top'),
              $('math', W, 'textord', '⊥', '\\bot'),
              $('math', W, 'textord', '∅', '\\emptyset'),
              $('math', j, 'textord', '∅', '\\varnothing'),
              $('math', W, K, 'α', '\\alpha', !0),
              $('math', W, K, 'β', '\\beta', !0),
              $('math', W, K, 'γ', '\\gamma', !0),
              $('math', W, K, 'δ', '\\delta', !0),
              $('math', W, K, 'ϵ', '\\epsilon', !0),
              $('math', W, K, 'ζ', '\\zeta', !0),
              $('math', W, K, 'η', '\\eta', !0),
              $('math', W, K, 'θ', '\\theta', !0),
              $('math', W, K, 'ι', '\\iota', !0),
              $('math', W, K, 'κ', '\\kappa', !0),
              $('math', W, K, 'λ', '\\lambda', !0),
              $('math', W, K, 'μ', '\\mu', !0),
              $('math', W, K, 'ν', '\\nu', !0),
              $('math', W, K, 'ξ', '\\xi', !0),
              $('math', W, K, 'ο', '\\omicron', !0),
              $('math', W, K, 'π', '\\pi', !0),
              $('math', W, K, 'ρ', '\\rho', !0),
              $('math', W, K, 'σ', '\\sigma', !0),
              $('math', W, K, 'τ', '\\tau', !0),
              $('math', W, K, 'υ', '\\upsilon', !0),
              $('math', W, K, 'ϕ', '\\phi', !0),
              $('math', W, K, 'χ', '\\chi', !0),
              $('math', W, K, 'ψ', '\\psi', !0),
              $('math', W, K, 'ω', '\\omega', !0),
              $('math', W, K, 'ε', '\\varepsilon', !0),
              $('math', W, K, 'ϑ', '\\vartheta', !0),
              $('math', W, K, 'ϖ', '\\varpi', !0),
              $('math', W, K, 'ϱ', '\\varrho', !0),
              $('math', W, K, 'ς', '\\varsigma', !0),
              $('math', W, K, 'φ', '\\varphi', !0),
              $('math', W, Z, '∗', '*'),
              $('math', W, Z, '+', '+'),
              $('math', W, Z, '−', '-'),
              $('math', W, Z, '⋅', '\\cdot', !0),
              $('math', W, Z, '∘', '\\circ'),
              $('math', W, Z, '÷', '\\div', !0),
              $('math', W, Z, '±', '\\pm', !0),
              $('math', W, Z, '×', '\\times', !0),
              $('math', W, Z, '∩', '\\cap', !0),
              $('math', W, Z, '∪', '\\cup', !0),
              $('math', W, Z, '∖', '\\setminus'),
              $('math', W, Z, '∧', '\\land'),
              $('math', W, Z, '∨', '\\lor'),
              $('math', W, Z, '∧', '\\wedge', !0),
              $('math', W, Z, '∨', '\\vee', !0),
              $('math', W, 'textord', '√', '\\surd'),
              $('math', W, 'open', '(', '('),
              $('math', W, 'open', '[', '['),
              $('math', W, 'open', '⟨', '\\langle', !0),
              $('math', W, 'open', '∣', '\\lvert'),
              $('math', W, 'open', '∥', '\\lVert'),
              $('math', W, 'close', ')', ')'),
              $('math', W, 'close', ']', ']'),
              $('math', W, 'close', '?', '?'),
              $('math', W, 'close', '!', '!'),
              $('math', W, 'close', '⟩', '\\rangle', !0),
              $('math', W, 'close', '∣', '\\rvert'),
              $('math', W, 'close', '∥', '\\rVert'),
              $('math', W, Q, '=', '='),
              $('math', W, Q, '<', '<'),
              $('math', W, Q, '>', '>'),
              $('math', W, Q, ':', ':'),
              $('math', W, Q, '≈', '\\approx', !0),
              $('math', W, Q, '≅', '\\cong', !0),
              $('math', W, Q, '≥', '\\ge'),
              $('math', W, Q, '≥', '\\geq', !0),
              $('math', W, Q, '←', '\\gets'),
              $('math', W, Q, '>', '\\gt'),
              $('math', W, Q, '∈', '\\in', !0),
              $('math', W, Q, '', '\\@not'),
              $('math', W, Q, '⊂', '\\subset', !0),
              $('math', W, Q, '⊃', '\\supset', !0),
              $('math', W, Q, '⊆', '\\subseteq', !0),
              $('math', W, Q, '⊇', '\\supseteq', !0),
              $('math', j, Q, '⊈', '\\nsubseteq', !0),
              $('math', j, Q, '⊉', '\\nsupseteq', !0),
              $('math', W, Q, '⊨', '\\models'),
              $('math', W, Q, '←', '\\leftarrow', !0),
              $('math', W, Q, '≤', '\\le'),
              $('math', W, Q, '≤', '\\leq', !0),
              $('math', W, Q, '<', '\\lt'),
              $('math', W, Q, '→', '\\rightarrow', !0),
              $('math', W, Q, '→', '\\to'),
              $('math', j, Q, '≱', '\\ngeq', !0),
              $('math', j, Q, '≰', '\\nleq', !0),
              $('math', W, tt, ' ', '\\ '),
              $('math', W, tt, ' ', '~'),
              $('math', W, tt, ' ', '\\space'),
              $('math', W, tt, ' ', '\\nobreakspace'),
              $('text', W, tt, ' ', '\\ '),
              $('text', W, tt, ' ', '~'),
              $('text', W, tt, ' ', '\\space'),
              $('text', W, tt, ' ', '\\nobreakspace'),
              $('math', W, tt, null, '\\nobreak'),
              $('math', W, tt, null, '\\allowbreak'),
              $('math', W, 'punct', ',', ','),
              $('math', W, 'punct', ';', ';'),
              $('math', j, Z, '⊼', '\\barwedge', !0),
              $('math', j, Z, '⊻', '\\veebar', !0),
              $('math', W, Z, '⊙', '\\odot', !0),
              $('math', W, Z, '⊕', '\\oplus', !0),
              $('math', W, Z, '⊗', '\\otimes', !0),
              $('math', W, 'textord', '∂', '\\partial', !0),
              $('math', W, Z, '⊘', '\\oslash', !0),
              $('math', j, Z, '⊚', '\\circledcirc', !0),
              $('math', j, Z, '⊡', '\\boxdot', !0),
              $('math', W, Z, '△', '\\bigtriangleup'),
              $('math', W, Z, '▽', '\\bigtriangledown'),
              $('math', W, Z, '†', '\\dagger'),
              $('math', W, Z, '⋄', '\\diamond'),
              $('math', W, Z, '⋆', '\\star'),
              $('math', W, Z, '◃', '\\triangleleft'),
              $('math', W, Z, '▹', '\\triangleright'),
              $('math', W, 'open', '{', '\\{'),
              $('text', W, 'textord', '{', '\\{'),
              $('text', W, 'textord', '{', '\\textbraceleft'),
              $('math', W, 'close', '}', '\\}'),
              $('text', W, 'textord', '}', '\\}'),
              $('text', W, 'textord', '}', '\\textbraceright'),
              $('math', W, 'open', '{', '\\lbrace'),
              $('math', W, 'close', '}', '\\rbrace'),
              $('math', W, 'open', '[', '\\lbrack'),
              $('text', W, 'textord', '[', '\\lbrack'),
              $('math', W, 'close', ']', '\\rbrack'),
              $('text', W, 'textord', ']', '\\rbrack'),
              $('math', W, 'open', '(', '\\lparen'),
              $('math', W, 'close', ')', '\\rparen'),
              $('text', W, 'textord', '<', '\\textless'),
              $('text', W, 'textord', '>', '\\textgreater'),
              $('math', W, 'open', '⌊', '\\lfloor', !0),
              $('math', W, 'close', '⌋', '\\rfloor', !0),
              $('math', W, 'open', '⌈', '\\lceil', !0),
              $('math', W, 'close', '⌉', '\\rceil', !0),
              $('math', W, 'textord', '\\', '\\backslash'),
              $('math', W, 'textord', '∣', '|'),
              $('math', W, 'textord', '∣', '\\vert'),
              $('text', W, 'textord', '|', '\\textbar'),
              $('math', W, 'textord', '∥', '\\|'),
              $('math', W, 'textord', '∥', '\\Vert'),
              $('text', W, 'textord', '∥', '\\textbardbl'),
              $('text', W, 'textord', '~', '\\textasciitilde'),
              $('text', W, 'textord', '\\', '\\textbackslash'),
              $('text', W, 'textord', '^', '\\textasciicircum'),
              $('math', W, Q, '↑', '\\uparrow', !0),
              $('math', W, Q, '⇑', '\\Uparrow', !0),
              $('math', W, Q, '↓', '\\downarrow', !0),
              $('math', W, Q, '⇓', '\\Downarrow', !0),
              $('math', W, Q, '↕', '\\updownarrow', !0),
              $('math', W, Q, '⇕', '\\Updownarrow', !0),
              $('math', W, J, '∐', '\\coprod'),
              $('math', W, J, '⋁', '\\bigvee'),
              $('math', W, J, '⋀', '\\bigwedge'),
              $('math', W, J, '⨄', '\\biguplus'),
              $('math', W, J, '⋂', '\\bigcap'),
              $('math', W, J, '⋃', '\\bigcup'),
              $('math', W, J, '∫', '\\int'),
              $('math', W, J, '∫', '\\intop'),
              $('math', W, J, '∬', '\\iint'),
              $('math', W, J, '∭', '\\iiint'),
              $('math', W, J, '∏', '\\prod'),
              $('math', W, J, '∑', '\\sum'),
              $('math', W, J, '⨂', '\\bigotimes'),
              $('math', W, J, '⨁', '\\bigoplus'),
              $('math', W, J, '⨀', '\\bigodot'),
              $('math', W, J, '∮', '\\oint'),
              $('math', W, J, '∯', '\\oiint'),
              $('math', W, J, '∰', '\\oiiint'),
              $('math', W, J, '⨆', '\\bigsqcup'),
              $('math', W, J, '∫', '\\smallint'),
              $('text', W, 'inner', '…', '\\textellipsis'),
              $('math', W, 'inner', '…', '\\mathellipsis'),
              $('text', W, 'inner', '…', '\\ldots', !0),
              $('math', W, 'inner', '…', '\\ldots', !0),
              $('math', W, 'inner', '⋯', '\\@cdots', !0),
              $('math', W, 'inner', '⋱', '\\ddots', !0),
              $('math', W, 'textord', '⋮', '\\varvdots'),
              $('math', W, 'accent-token', 'ˊ', '\\acute'),
              $('math', W, 'accent-token', 'ˋ', '\\grave'),
              $('math', W, 'accent-token', '¨', '\\ddot'),
              $('math', W, 'accent-token', '~', '\\tilde'),
              $('math', W, 'accent-token', 'ˉ', '\\bar'),
              $('math', W, 'accent-token', '˘', '\\breve'),
              $('math', W, 'accent-token', 'ˇ', '\\check'),
              $('math', W, 'accent-token', '^', '\\hat'),
              $('math', W, 'accent-token', '⃗', '\\vec'),
              $('math', W, 'accent-token', '˙', '\\dot'),
              $('math', W, 'accent-token', '˚', '\\mathring'),
              $('math', W, K, 'ı', '\\imath', !0),
              $('math', W, K, 'ȷ', '\\jmath', !0),
              $('text', W, 'textord', 'ı', '\\i', !0),
              $('text', W, 'textord', 'ȷ', '\\j', !0),
              $('text', W, 'textord', 'ß', '\\ss', !0),
              $('text', W, 'textord', 'æ', '\\ae', !0),
              $('text', W, 'textord', 'æ', '\\ae', !0),
              $('text', W, 'textord', 'œ', '\\oe', !0),
              $('text', W, 'textord', 'ø', '\\o', !0),
              $('text', W, 'textord', 'Æ', '\\AE', !0),
              $('text', W, 'textord', 'Œ', '\\OE', !0),
              $('text', W, 'textord', 'Ø', '\\O', !0),
              $('text', W, 'accent-token', 'ˊ', "\\'"),
              $('text', W, 'accent-token', 'ˋ', '\\`'),
              $('text', W, 'accent-token', 'ˆ', '\\^'),
              $('text', W, 'accent-token', '˜', '\\~'),
              $('text', W, 'accent-token', 'ˉ', '\\='),
              $('text', W, 'accent-token', '˘', '\\u'),
              $('text', W, 'accent-token', '˙', '\\.'),
              $('text', W, 'accent-token', '˚', '\\r'),
              $('text', W, 'accent-token', 'ˇ', '\\v'),
              $('text', W, 'accent-token', '¨', '\\"'),
              $('text', W, 'accent-token', '˝', '\\H'),
              $('text', W, 'accent-token', '◯', '\\textcircled')
            var et = { '--': !0, '---': !0, '``': !0, "''": !0 }
            $('text', W, 'textord', '–', '--'),
              $('text', W, 'textord', '–', '\\textendash'),
              $('text', W, 'textord', '—', '---'),
              $('text', W, 'textord', '—', '\\textemdash'),
              $('text', W, 'textord', '‘', '`'),
              $('text', W, 'textord', '‘', '\\textquoteleft'),
              $('text', W, 'textord', '’', "'"),
              $('text', W, 'textord', '’', '\\textquoteright'),
              $('text', W, 'textord', '“', '``'),
              $('text', W, 'textord', '“', '\\textquotedblleft'),
              $('text', W, 'textord', '”', "''"),
              $('text', W, 'textord', '”', '\\textquotedblright'),
              $('math', W, 'textord', '°', '\\degree', !0),
              $('text', W, 'textord', '°', '\\degree'),
              $('text', W, 'textord', '°', '\\textdegree', !0),
              $('math', W, K, '£', '\\pounds'),
              $('math', W, K, '£', '\\mathsterling', !0),
              $('text', W, K, '£', '\\pounds'),
              $('text', W, K, '£', '\\textsterling', !0),
              $('math', j, 'textord', '✠', '\\maltese'),
              $('text', j, 'textord', '✠', '\\maltese'),
              $('text', W, tt, ' ', '\\ '),
              $('text', W, tt, ' ', ' '),
              $('text', W, tt, ' ', '~')
            for (var rt = 0; rt < '0123456789/@."'.length; rt++) {
              var nt = '0123456789/@."'.charAt(rt)
              $('math', W, 'textord', nt, nt)
            }
            for (
              var at = 0;
              at < '0123456789!@*()-=+[]<>|";:?/.,'.length;
              at++
            ) {
              var it = '0123456789!@*()-=+[]<>|";:?/.,'.charAt(at)
              $('text', W, 'textord', it, it)
            }
            for (
              var ot = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                st = 0;
              st < ot.length;
              st++
            ) {
              var ht = ot.charAt(st)
              $('math', W, K, ht, ht), $('text', W, 'textord', ht, ht)
            }
            $('math', j, 'textord', 'C', 'ℂ'),
              $('text', j, 'textord', 'C', 'ℂ'),
              $('math', j, 'textord', 'H', 'ℍ'),
              $('text', j, 'textord', 'H', 'ℍ'),
              $('math', j, 'textord', 'N', 'ℕ'),
              $('text', j, 'textord', 'N', 'ℕ'),
              $('math', j, 'textord', 'P', 'ℙ'),
              $('text', j, 'textord', 'P', 'ℙ'),
              $('math', j, 'textord', 'Q', 'ℚ'),
              $('text', j, 'textord', 'Q', 'ℚ'),
              $('math', j, 'textord', 'R', 'ℝ'),
              $('text', j, 'textord', 'R', 'ℝ'),
              $('math', j, 'textord', 'Z', 'ℤ'),
              $('text', j, 'textord', 'Z', 'ℤ'),
              $('math', W, K, 'h', 'ℎ'),
              $('text', W, K, 'h', 'ℎ')
            for (var lt = '', mt = 0; mt < ot.length; mt++) {
              var ct = ot.charAt(mt)
              $(
                'math',
                W,
                K,
                ct,
                (lt = String.fromCharCode(55349, 56320 + mt))
              ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56372 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56424 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56580 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56736 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56788 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56840 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                $(
                  'math',
                  W,
                  K,
                  ct,
                  (lt = String.fromCharCode(55349, 56944 + mt))
                ),
                $('text', W, 'textord', ct, lt),
                mt < 26 &&
                  ($(
                    'math',
                    W,
                    K,
                    ct,
                    (lt = String.fromCharCode(55349, 56632 + mt))
                  ),
                  $('text', W, 'textord', ct, lt),
                  $(
                    'math',
                    W,
                    K,
                    ct,
                    (lt = String.fromCharCode(55349, 56476 + mt))
                  ),
                  $('text', W, 'textord', ct, lt))
            }
            $('math', W, K, 'k', (lt = String.fromCharCode(55349, 56668))),
              $('text', W, 'textord', 'k', lt)
            for (var ut = 0; ut < 10; ut++) {
              var dt = ut.toString()
              $(
                'math',
                W,
                K,
                dt,
                (lt = String.fromCharCode(55349, 57294 + ut))
              ),
                $('text', W, 'textord', dt, lt),
                $(
                  'math',
                  W,
                  K,
                  dt,
                  (lt = String.fromCharCode(55349, 57314 + ut))
                ),
                $('text', W, 'textord', dt, lt),
                $(
                  'math',
                  W,
                  K,
                  dt,
                  (lt = String.fromCharCode(55349, 57324 + ut))
                ),
                $('text', W, 'textord', dt, lt),
                $(
                  'math',
                  W,
                  K,
                  dt,
                  (lt = String.fromCharCode(55349, 57334 + ut))
                ),
                $('text', W, 'textord', dt, lt)
            }
            for (var pt = 0; pt < 'ÇÐÞçþ'.length; pt++) {
              var ft = 'ÇÐÞçþ'.charAt(pt)
              $('math', W, K, ft, ft), $('text', W, 'textord', ft, ft)
            }
            $('text', W, 'textord', 'ð', 'ð'),
              $('text', W, 'textord', '–', '–'),
              $('text', W, 'textord', '—', '—'),
              $('text', W, 'textord', '‘', '‘'),
              $('text', W, 'textord', '’', '’'),
              $('text', W, 'textord', '“', '“'),
              $('text', W, 'textord', '”', '”')
            var gt = [
                ['mathbf', 'textbf', 'Main-Bold'],
                ['mathbf', 'textbf', 'Main-Bold'],
                ['mathdefault', 'textit', 'Math-Italic'],
                ['mathdefault', 'textit', 'Math-Italic'],
                ['boldsymbol', 'boldsymbol', 'Main-BoldItalic'],
                ['boldsymbol', 'boldsymbol', 'Main-BoldItalic'],
                ['mathscr', 'textscr', 'Script-Regular'],
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
                ['mathfrak', 'textfrak', 'Fraktur-Regular'],
                ['mathfrak', 'textfrak', 'Fraktur-Regular'],
                ['mathbb', 'textbb', 'AMS-Regular'],
                ['mathbb', 'textbb', 'AMS-Regular'],
                ['', '', ''],
                ['', '', ''],
                ['mathsf', 'textsf', 'SansSerif-Regular'],
                ['mathsf', 'textsf', 'SansSerif-Regular'],
                ['mathboldsf', 'textboldsf', 'SansSerif-Bold'],
                ['mathboldsf', 'textboldsf', 'SansSerif-Bold'],
                ['mathitsf', 'textitsf', 'SansSerif-Italic'],
                ['mathitsf', 'textitsf', 'SansSerif-Italic'],
                ['', '', ''],
                ['', '', ''],
                ['mathtt', 'texttt', 'Typewriter-Regular'],
                ['mathtt', 'texttt', 'Typewriter-Regular'],
              ],
              xt = [
                ['mathbf', 'textbf', 'Main-Bold'],
                ['', '', ''],
                ['mathsf', 'textsf', 'SansSerif-Regular'],
                ['mathboldsf', 'textboldsf', 'SansSerif-Bold'],
                ['mathtt', 'texttt', 'Typewriter-Regular'],
              ],
              vt = [
                [1, 1, 1],
                [2, 1, 1],
                [3, 1, 1],
                [4, 2, 1],
                [5, 2, 1],
                [6, 3, 1],
                [7, 4, 2],
                [8, 6, 3],
                [9, 7, 6],
                [10, 8, 7],
                [11, 10, 9],
              ],
              yt = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
              bt = function (t, e) {
                return e.size < 2 ? t : vt[t - 1][e.size - 1]
              },
              wt = (function () {
                function t(e) {
                  ;(this.style = void 0),
                    (this.color = void 0),
                    (this.size = void 0),
                    (this.textSize = void 0),
                    (this.phantom = void 0),
                    (this.font = void 0),
                    (this.fontFamily = void 0),
                    (this.fontWeight = void 0),
                    (this.fontShape = void 0),
                    (this.sizeMultiplier = void 0),
                    (this.maxSize = void 0),
                    (this._fontMetrics = void 0),
                    (this.style = e.style),
                    (this.color = e.color),
                    (this.size = e.size || t.BASESIZE),
                    (this.textSize = e.textSize || this.size),
                    (this.phantom = !!e.phantom),
                    (this.font = e.font || ''),
                    (this.fontFamily = e.fontFamily || ''),
                    (this.fontWeight = e.fontWeight || ''),
                    (this.fontShape = e.fontShape || ''),
                    (this.sizeMultiplier = yt[this.size - 1]),
                    (this.maxSize = e.maxSize),
                    (this._fontMetrics = void 0)
                }
                var e = t.prototype
                return (
                  (e.extend = function (e) {
                    var r = {
                      style: this.style,
                      size: this.size,
                      textSize: this.textSize,
                      color: this.color,
                      phantom: this.phantom,
                      font: this.font,
                      fontFamily: this.fontFamily,
                      fontWeight: this.fontWeight,
                      fontShape: this.fontShape,
                      maxSize: this.maxSize,
                    }
                    for (var n in e) e.hasOwnProperty(n) && (r[n] = e[n])
                    return new t(r)
                  }),
                  (e.havingStyle = function (t) {
                    return this.style === t
                      ? this
                      : this.extend({ style: t, size: bt(this.textSize, t) })
                  }),
                  (e.havingCrampedStyle = function () {
                    return this.havingStyle(this.style.cramp())
                  }),
                  (e.havingSize = function (t) {
                    return this.size === t && this.textSize === t
                      ? this
                      : this.extend({
                          style: this.style.text(),
                          size: t,
                          textSize: t,
                          sizeMultiplier: yt[t - 1],
                        })
                  }),
                  (e.havingBaseStyle = function (e) {
                    e = e || this.style.text()
                    var r = bt(t.BASESIZE, e)
                    return this.size === r &&
                      this.textSize === t.BASESIZE &&
                      this.style === e
                      ? this
                      : this.extend({ style: e, size: r })
                  }),
                  (e.havingBaseSizing = function () {
                    var t
                    switch (this.style.id) {
                      case 4:
                      case 5:
                        t = 3
                        break
                      case 6:
                      case 7:
                        t = 1
                        break
                      default:
                        t = 6
                    }
                    return this.extend({ style: this.style.text(), size: t })
                  }),
                  (e.withColor = function (t) {
                    return this.extend({ color: t })
                  }),
                  (e.withPhantom = function () {
                    return this.extend({ phantom: !0 })
                  }),
                  (e.withFont = function (t) {
                    return this.extend({ font: t })
                  }),
                  (e.withTextFontFamily = function (t) {
                    return this.extend({ fontFamily: t, font: '' })
                  }),
                  (e.withTextFontWeight = function (t) {
                    return this.extend({ fontWeight: t, font: '' })
                  }),
                  (e.withTextFontShape = function (t) {
                    return this.extend({ fontShape: t, font: '' })
                  }),
                  (e.sizingClasses = function (t) {
                    return t.size !== this.size
                      ? ['sizing', 'reset-size' + t.size, 'size' + this.size]
                      : []
                  }),
                  (e.baseSizingClasses = function () {
                    return this.size !== t.BASESIZE
                      ? [
                          'sizing',
                          'reset-size' + this.size,
                          'size' + t.BASESIZE,
                        ]
                      : []
                  }),
                  (e.fontMetrics = function () {
                    return (
                      this._fontMetrics ||
                        (this._fontMetrics = (function (t) {
                          var e
                          if (!U[(e = t >= 5 ? 0 : t >= 3 ? 1 : 2)]) {
                            var r = (U[e] = { cssEmPerMu: H.quad[e] / 18 })
                            for (var n in H)
                              H.hasOwnProperty(n) && (r[n] = H[n][e])
                          }
                          return U[e]
                        })(this.size)),
                      this._fontMetrics
                    )
                  }),
                  (e.getColor = function () {
                    return this.phantom
                      ? 'transparent'
                      : null != this.color &&
                        t.colorMap.hasOwnProperty(this.color)
                      ? t.colorMap[this.color]
                      : this.color
                  }),
                  t
                )
              })()
            ;(wt.BASESIZE = 6),
              (wt.colorMap = {
                'katex-blue': '#6495ed',
                'katex-orange': '#ffa500',
                'katex-pink': '#ff00af',
                'katex-red': '#df0030',
                'katex-green': '#28ae7b',
                'katex-gray': 'gray',
                'katex-purple': '#9d38bd',
                'katex-blueA': '#ccfaff',
                'katex-blueB': '#80f6ff',
                'katex-blueC': '#63d9ea',
                'katex-blueD': '#11accd',
                'katex-blueE': '#0c7f99',
                'katex-tealA': '#94fff5',
                'katex-tealB': '#26edd5',
                'katex-tealC': '#01d1c1',
                'katex-tealD': '#01a995',
                'katex-tealE': '#208170',
                'katex-greenA': '#b6ffb0',
                'katex-greenB': '#8af281',
                'katex-greenC': '#74cf70',
                'katex-greenD': '#1fab54',
                'katex-greenE': '#0d923f',
                'katex-goldA': '#ffd0a9',
                'katex-goldB': '#ffbb71',
                'katex-goldC': '#ff9c39',
                'katex-goldD': '#e07d10',
                'katex-goldE': '#a75a05',
                'katex-redA': '#fca9a9',
                'katex-redB': '#ff8482',
                'katex-redC': '#f9685d',
                'katex-redD': '#e84d39',
                'katex-redE': '#bc2612',
                'katex-maroonA': '#ffbde0',
                'katex-maroonB': '#ff92c6',
                'katex-maroonC': '#ed5fa6',
                'katex-maroonD': '#ca337c',
                'katex-maroonE': '#9e034e',
                'katex-purpleA': '#ddd7ff',
                'katex-purpleB': '#c6b9fc',
                'katex-purpleC': '#aa87ff',
                'katex-purpleD': '#7854ab',
                'katex-purpleE': '#543b78',
                'katex-mintA': '#f5f9e8',
                'katex-mintB': '#edf2df',
                'katex-mintC': '#e0e5cc',
                'katex-grayA': '#f6f7f7',
                'katex-grayB': '#f0f1f2',
                'katex-grayC': '#e3e5e6',
                'katex-grayD': '#d6d8da',
                'katex-grayE': '#babec2',
                'katex-grayF': '#888d93',
                'katex-grayG': '#626569',
                'katex-grayH': '#3b3e40',
                'katex-grayI': '#21242c',
                'katex-kaBlue': '#314453',
                'katex-kaGreen': '#71B307',
              })
            var kt = wt,
              St = {
                pt: 1,
                mm: 7227 / 2540,
                cm: 7227 / 254,
                in: 72.27,
                bp: 1.00375,
                pc: 12,
                dd: 1238 / 1157,
                cc: 14856 / 1157,
                nd: 685 / 642,
                nc: 1370 / 107,
                sp: 1 / 65536,
                px: 1.00375,
              },
              Mt = { ex: !0, em: !0, mu: !0 },
              zt = function (t, e) {
                var r
                if (t.unit in St)
                  r = St[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier
                else if ('mu' === t.unit) r = e.fontMetrics().cssEmPerMu
                else {
                  var n
                  if (
                    ((n = e.style.isTight()
                      ? e.havingStyle(e.style.text())
                      : e),
                    'ex' === t.unit)
                  )
                    r = n.fontMetrics().xHeight
                  else {
                    if ('em' !== t.unit)
                      throw new o("Invalid unit: '" + t.unit + "'")
                    r = n.fontMetrics().quad
                  }
                  n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier)
                }
                return Math.min(t.number * r, e.maxSize)
              },
              Tt = [
                '\\imath',
                'ı',
                '\\jmath',
                'ȷ',
                '\\pounds',
                '\\mathsterling',
                '\\textsterling',
                '£',
              ],
              At = function (t, e, r) {
                return (
                  Y[r][t] && Y[r][t].replace && (t = Y[r][t].replace),
                  { value: t, metrics: V(t, e, r) }
                )
              },
              Bt = function (t, e, r, n, a) {
                var i,
                  o = At(t, e, r),
                  s = o.metrics
                if (((t = o.value), s)) {
                  var h = s.italic
                  ;('text' === r || (n && 'mathit' === n.font)) && (h = 0),
                    (i = new I(t, s.height, s.depth, h, s.skew, s.width, a))
                } else
                  'undefined' != typeof console &&
                    console.warn(
                      "No character metrics for '" +
                        t +
                        "' in style '" +
                        e +
                        "'"
                    ),
                    (i = new I(t, 0, 0, 0, 0, 0, a))
                if (n) {
                  ;(i.maxFontSize = n.sizeMultiplier),
                    n.style.isTight() && i.classes.push('mtight')
                  var l = n.getColor()
                  l && (i.style.color = l)
                }
                return i
              },
              Ct = function (t, e) {
                if (
                  A(t.classes) !== A(e.classes) ||
                  t.skew !== e.skew ||
                  t.maxFontSize !== e.maxFontSize
                )
                  return !1
                for (var r in t.style)
                  if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
                    return !1
                for (var n in e.style)
                  if (e.style.hasOwnProperty(n) && t.style[n] !== e.style[n])
                    return !1
                return !0
              },
              Nt = function (t) {
                for (
                  var e = 0, r = 0, n = 0, a = 0;
                  a < t.children.length;
                  a++
                ) {
                  var i = t.children[a]
                  i.height > e && (e = i.height),
                    i.depth > r && (r = i.depth),
                    i.maxFontSize > n && (n = i.maxFontSize)
                }
                ;(t.height = e), (t.depth = r), (t.maxFontSize = n)
              },
              qt = function (t, e, r, n) {
                var a = new q(t, e, r, n)
                return Nt(a), a
              },
              Ot = function (t, e, r, n) {
                return new q(t, e, r, n)
              },
              Et = function (t) {
                var e = new T(t)
                return Nt(e), e
              },
              It = function (t, e, r) {
                var n = ''
                switch (t) {
                  case 'amsrm':
                    n = 'AMS'
                    break
                  case 'textrm':
                    n = 'Main'
                    break
                  case 'textsf':
                    n = 'SansSerif'
                    break
                  case 'texttt':
                    n = 'Typewriter'
                    break
                  default:
                    n = t
                }
                return (
                  n +
                  '-' +
                  ('textbf' === e && 'textit' === r
                    ? 'BoldItalic'
                    : 'textbf' === e
                    ? 'Bold'
                    : 'textit' === e
                    ? 'Italic'
                    : 'Regular')
                )
              },
              Rt = {
                mathbf: { variant: 'bold', fontName: 'Main-Bold' },
                mathrm: { variant: 'normal', fontName: 'Main-Regular' },
                textit: { variant: 'italic', fontName: 'Main-Italic' },
                mathit: { variant: 'italic', fontName: 'Main-Italic' },
                mathbb: { variant: 'double-struck', fontName: 'AMS-Regular' },
                mathcal: { variant: 'script', fontName: 'Caligraphic-Regular' },
                mathfrak: { variant: 'fraktur', fontName: 'Fraktur-Regular' },
                mathscr: { variant: 'script', fontName: 'Script-Regular' },
                mathsf: {
                  variant: 'sans-serif',
                  fontName: 'SansSerif-Regular',
                },
                mathtt: {
                  variant: 'monospace',
                  fontName: 'Typewriter-Regular',
                },
              },
              Lt = {
                vec: ['vec', 0.471, 0.714],
                oiintSize1: ['oiintSize1', 0.957, 0.499],
                oiintSize2: ['oiintSize2', 1.472, 0.659],
                oiiintSize1: ['oiiintSize1', 1.304, 0.499],
                oiiintSize2: ['oiiintSize2', 1.98, 0.659],
              },
              Pt = {
                fontMap: Rt,
                makeSymbol: Bt,
                mathsym: function (t, e, r, n) {
                  return (
                    void 0 === n && (n = []),
                    r &&
                    r.font &&
                    'boldsymbol' === r.font &&
                    At(t, 'Main-Bold', e).metrics
                      ? Bt(t, 'Main-Bold', e, r, n.concat(['mathbf']))
                      : '\\' === t || 'main' === Y[e][t].font
                      ? Bt(t, 'Main-Regular', e, r, n)
                      : Bt(t, 'AMS-Regular', e, r, n.concat(['amsrm']))
                  )
                },
                makeSpan: qt,
                makeSvgSpan: Ot,
                makeLineSpan: function (t, e, r) {
                  var n = qt([t], [], e)
                  return (
                    (n.height = r || e.fontMetrics().defaultRuleThickness),
                    (n.style.borderBottomWidth = n.height + 'em'),
                    (n.maxFontSize = 1),
                    n
                  )
                },
                makeAnchor: function (t, e, r, n) {
                  var a = new O(t, e, r, n)
                  return Nt(a), a
                },
                makeFragment: Et,
                wrapFragment: function (t, e) {
                  return t instanceof T ? qt([], [t], e) : t
                },
                makeVList: function (t, e) {
                  for (
                    var r = (function (t) {
                        if ('individualShift' === t.positionType) {
                          for (
                            var e = t.children,
                              r = [e[0]],
                              n = -e[0].shift - e[0].elem.depth,
                              a = n,
                              i = 1;
                            i < e.length;
                            i++
                          ) {
                            var o = -e[i].shift - a - e[i].elem.depth,
                              s =
                                o - (e[i - 1].elem.height + e[i - 1].elem.depth)
                            ;(a += o),
                              r.push({ type: 'kern', size: s }),
                              r.push(e[i])
                          }
                          return { children: r, depth: n }
                        }
                        var h
                        if ('top' === t.positionType) {
                          for (
                            var l = t.positionData, m = 0;
                            m < t.children.length;
                            m++
                          ) {
                            var c = t.children[m]
                            l -=
                              'kern' === c.type
                                ? c.size
                                : c.elem.height + c.elem.depth
                          }
                          h = l
                        } else if ('bottom' === t.positionType)
                          h = -t.positionData
                        else {
                          var u = t.children[0]
                          if ('elem' !== u.type)
                            throw new Error(
                              'First child must have type "elem".'
                            )
                          if ('shift' === t.positionType)
                            h = -u.elem.depth - t.positionData
                          else {
                            if ('firstBaseline' !== t.positionType)
                              throw new Error(
                                'Invalid positionType ' + t.positionType + '.'
                              )
                            h = -u.elem.depth
                          }
                        }
                        return { children: t.children, depth: h }
                      })(t),
                      n = r.children,
                      a = r.depth,
                      i = 0,
                      o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s = n[o]
                    if ('elem' === s.type) {
                      var h = s.elem
                      i = Math.max(i, h.maxFontSize, h.height)
                    }
                  }
                  i += 2
                  var l = qt(['pstrut'], [])
                  l.style.height = i + 'em'
                  for (
                    var m = [], c = a, u = a, d = a, p = 0;
                    p < n.length;
                    p++
                  ) {
                    var f = n[p]
                    if ('kern' === f.type) d += f.size
                    else {
                      var g = f.elem,
                        x = f.wrapperClasses || [],
                        v = f.wrapperStyle || {},
                        y = qt(x, [l, g], void 0, v)
                      ;(y.style.top = -i - d - g.depth + 'em'),
                        f.marginLeft && (y.style.marginLeft = f.marginLeft),
                        f.marginRight && (y.style.marginRight = f.marginRight),
                        m.push(y),
                        (d += g.height + g.depth)
                    }
                    ;(c = Math.min(c, d)), (u = Math.max(u, d))
                  }
                  var b,
                    w = qt(['vlist'], m)
                  if (((w.style.height = u + 'em'), c < 0)) {
                    var k = qt([], []),
                      S = qt(['vlist'], [k])
                    S.style.height = -c + 'em'
                    var M = qt(['vlist-s'], [new I('​')])
                    b = [qt(['vlist-r'], [w, M]), qt(['vlist-r'], [S])]
                  } else b = [qt(['vlist-r'], [w])]
                  var z = qt(['vlist-t'], b)
                  return (
                    2 === b.length && z.classes.push('vlist-t2'),
                    (z.height = u),
                    (z.depth = -c),
                    z
                  )
                },
                makeOrd: function (t, e, r) {
                  var n,
                    a = t.mode,
                    i = t.text,
                    s = ['mord'],
                    h = 'math' === a || ('text' === a && e.font),
                    l = h ? e.font : e.fontFamily
                  if (55349 === i.charCodeAt(0)) {
                    var m = (function (t, e) {
                        var r =
                            1024 * (t.charCodeAt(0) - 55296) +
                            (t.charCodeAt(1) - 56320) +
                            65536,
                          n = 'math' === e ? 0 : 1
                        if (119808 <= r && r < 120484) {
                          var a = Math.floor((r - 119808) / 26)
                          return [gt[a][2], gt[a][n]]
                        }
                        if (120782 <= r && r <= 120831) {
                          var i = Math.floor((r - 120782) / 10)
                          return [xt[i][2], xt[i][n]]
                        }
                        if (120485 === r || 120486 === r)
                          return [gt[0][2], gt[0][n]]
                        if (120486 < r && r < 120782) return ['', '']
                        throw new o('Unsupported character: ' + t)
                      })(i, a),
                      u = m[0],
                      d = m[1]
                    return Bt(i, u, a, e, s.concat(d))
                  }
                  if (l) {
                    var p, f
                    if ('boldsymbol' === l || 'mathnormal' === l) {
                      var g =
                        'boldsymbol' === l
                          ? (function (t, e, r, n) {
                              return At(t, 'Math-BoldItalic', e).metrics
                                ? {
                                    fontName: 'Math-BoldItalic',
                                    fontClass: 'boldsymbol',
                                  }
                                : { fontName: 'Main-Bold', fontClass: 'mathbf' }
                            })(i, a)
                          : ((n = i),
                            c.contains(Tt, n)
                              ? { fontName: 'Main-Italic', fontClass: 'mathit' }
                              : /[0-9]/.test(n.charAt(0))
                              ? {
                                  fontName: 'Caligraphic-Regular',
                                  fontClass: 'mathcal',
                                }
                              : {
                                  fontName: 'Math-Italic',
                                  fontClass: 'mathdefault',
                                })
                      ;(p = g.fontName), (f = [g.fontClass])
                    } else
                      c.contains(Tt, i)
                        ? ((p = 'Main-Italic'), (f = ['mathit']))
                        : h
                        ? ((p = Rt[l].fontName), (f = [l]))
                        : ((p = It(l, e.fontWeight, e.fontShape)),
                          (f = [l, e.fontWeight, e.fontShape]))
                    if (At(i, p, a).metrics) return Bt(i, p, a, e, s.concat(f))
                    if (
                      et.hasOwnProperty(i) &&
                      'Typewriter' === p.substr(0, 10)
                    ) {
                      for (var x = [], v = 0; v < i.length; v++)
                        x.push(Bt(i[v], p, a, e, s.concat(f)))
                      return Et(x)
                    }
                  }
                  if ('mathord' === r) {
                    var y = (function (t, e, r, n) {
                      return /[0-9]/.test(t.charAt(0)) || c.contains(Tt, t)
                        ? { fontName: 'Main-Italic', fontClass: 'mathit' }
                        : { fontName: 'Math-Italic', fontClass: 'mathdefault' }
                    })(i)
                    return Bt(i, y.fontName, a, e, s.concat([y.fontClass]))
                  }
                  if ('textord' === r) {
                    var b = Y[a][i] && Y[a][i].font
                    if ('ams' === b) {
                      var w = It('amsrm', e.fontWeight, e.fontShape)
                      return Bt(
                        i,
                        w,
                        a,
                        e,
                        s.concat('amsrm', e.fontWeight, e.fontShape)
                      )
                    }
                    if ('main' !== b && b) {
                      var k = It(b, e.fontWeight, e.fontShape)
                      return Bt(
                        i,
                        k,
                        a,
                        e,
                        s.concat(k, e.fontWeight, e.fontShape)
                      )
                    }
                    var S = It('textrm', e.fontWeight, e.fontShape)
                    return Bt(i, S, a, e, s.concat(e.fontWeight, e.fontShape))
                  }
                  throw new Error('unexpected type: ' + r + ' in makeOrd')
                },
                makeGlue: function (t, e) {
                  var r = qt(['mspace'], [], e),
                    n = zt(t, e)
                  return (r.style.marginRight = n + 'em'), r
                },
                staticSvg: function (t, e) {
                  var r = Lt[t],
                    n = r[0],
                    a = r[1],
                    i = r[2],
                    o = new L(n),
                    s = new R([o], {
                      width: a + 'em',
                      height: i + 'em',
                      style: 'width:' + a + 'em',
                      viewBox: '0 0 ' + 1e3 * a + ' ' + 1e3 * i,
                      preserveAspectRatio: 'xMinYMin',
                    }),
                    h = Ot(['overlay'], [s], e)
                  return (
                    (h.height = i),
                    (h.style.height = i + 'em'),
                    (h.style.width = a + 'em'),
                    h
                  )
                },
                svgData: Lt,
                tryCombineChars: function (t) {
                  for (var e = 0; e < t.length - 1; e++) {
                    var r = t[e],
                      n = t[e + 1]
                    r instanceof I &&
                      n instanceof I &&
                      Ct(r, n) &&
                      ((r.text += n.text),
                      (r.height = Math.max(r.height, n.height)),
                      (r.depth = Math.max(r.depth, n.depth)),
                      (r.italic = n.italic),
                      t.splice(e + 1, 1),
                      e--)
                  }
                  return t
                },
              }
            function Dt(t, e) {
              var r = Ht(t, e)
              if (!r)
                throw new Error(
                  'Expected node of type ' +
                    e +
                    ', but got ' +
                    (t ? 'node of type ' + t.type : String(t))
                )
              return r
            }
            function Ht(t, e) {
              return t && t.type === e ? t : null
            }
            function Ft(t, e) {
              var r = (function (t, e) {
                return t && 'atom' === t.type && t.family === e ? t : null
              })(t, e)
              if (!r)
                throw new Error(
                  'Expected node of type "atom" and family "' +
                    e +
                    '", but got ' +
                    (t
                      ? 'atom' === t.type
                        ? 'atom of family ' + t.family
                        : 'node of type ' + t.type
                      : String(t))
                )
              return r
            }
            function Vt(t) {
              return t && ('atom' === t.type || _.hasOwnProperty(t.type))
                ? t
                : null
            }
            var Ut = { number: 3, unit: 'mu' },
              Gt = { number: 4, unit: 'mu' },
              _t = { number: 5, unit: 'mu' },
              Xt = {
                mord: { mop: Ut, mbin: Gt, mrel: _t, minner: Ut },
                mop: { mord: Ut, mop: Ut, mrel: _t, minner: Ut },
                mbin: { mord: Gt, mop: Gt, mopen: Gt, minner: Gt },
                mrel: { mord: _t, mop: _t, mopen: _t, minner: _t },
                mopen: {},
                mclose: { mop: Ut, mbin: Gt, mrel: _t, minner: Ut },
                mpunct: {
                  mord: Ut,
                  mop: Ut,
                  mrel: _t,
                  mopen: Ut,
                  mclose: Ut,
                  mpunct: Ut,
                  minner: Ut,
                },
                minner: {
                  mord: Ut,
                  mop: Ut,
                  mbin: Gt,
                  mrel: _t,
                  mopen: Ut,
                  mpunct: Ut,
                  minner: Ut,
                },
              },
              Yt = {
                mord: { mop: Ut },
                mop: { mord: Ut, mop: Ut },
                mbin: {},
                mrel: {},
                mopen: {},
                mclose: { mop: Ut },
                mpunct: {},
                minner: { mop: Ut },
              },
              $t = {},
              Wt = {},
              jt = {}
            function Zt(t) {
              for (
                var e = t.type,
                  r = (t.nodeType, t.names),
                  n = t.props,
                  a = t.handler,
                  i = t.htmlBuilder,
                  o = t.mathmlBuilder,
                  s = {
                    type: e,
                    numArgs: n.numArgs,
                    argTypes: n.argTypes,
                    greediness: void 0 === n.greediness ? 1 : n.greediness,
                    allowedInText: !!n.allowedInText,
                    allowedInMath:
                      void 0 === n.allowedInMath || n.allowedInMath,
                    numOptionalArgs: n.numOptionalArgs || 0,
                    infix: !!n.infix,
                    consumeMode: n.consumeMode,
                    handler: a,
                  },
                  h = 0;
                h < r.length;
                ++h
              )
                $t[r[h]] = s
              e && (i && (Wt[e] = i), o && (jt[e] = o))
            }
            function Kt(t) {
              Zt({
                type: t.type,
                names: [],
                props: { numArgs: 0 },
                handler: function () {
                  throw new Error('Should never be called.')
                },
                htmlBuilder: t.htmlBuilder,
                mathmlBuilder: t.mathmlBuilder,
              })
            }
            var Jt = function (t) {
                var e = Ht(t, 'ordgroup')
                return e ? e.body : [t]
              },
              Qt = Pt.makeSpan,
              te = ['leftmost', 'mbin', 'mopen', 'mrel', 'mop', 'mpunct'],
              ee = ['rightmost', 'mrel', 'mclose', 'mpunct'],
              re = {
                display: w.DISPLAY,
                text: w.TEXT,
                script: w.SCRIPT,
                scriptscript: w.SCRIPTSCRIPT,
              },
              ne = {
                mord: 'mord',
                mop: 'mop',
                mbin: 'mbin',
                mrel: 'mrel',
                mopen: 'mopen',
                mclose: 'mclose',
                mpunct: 'mpunct',
                minner: 'minner',
              },
              ae = function (t, e, r, n) {
                void 0 === n && (n = [null, null])
                for (var a = [], i = 0; i < t.length; i++) {
                  var o = le(t[i], e)
                  if (o instanceof T) {
                    var s = o.children
                    a.push.apply(a, s)
                  } else a.push(o)
                }
                if (!r) return a
                var h = e
                if (1 === t.length) {
                  var l = Ht(t[0], 'sizing') || Ht(t[0], 'styling')
                  l &&
                    ('sizing' === l.type
                      ? (h = e.havingSize(l.size))
                      : 'styling' === l.type &&
                        (h = e.havingStyle(re[l.style])))
                }
                var m = Qt([n[0] || 'leftmost'], [], e),
                  u = Qt([n[1] || 'rightmost'], [], e)
                return (
                  ie(
                    a,
                    function (t, e) {
                      var r = e.classes[0],
                        n = t.classes[0]
                      'mbin' === r && c.contains(ee, n)
                        ? (e.classes[0] = 'mord')
                        : 'mbin' === n &&
                          c.contains(te, r) &&
                          (t.classes[0] = 'mord')
                    },
                    { node: m },
                    u
                  ),
                  ie(
                    a,
                    function (t, e) {
                      var r = se(e),
                        n = se(t),
                        a =
                          r && n
                            ? t.hasClass('mtight')
                              ? Yt[r][n]
                              : Xt[r][n]
                            : null
                      if (a) return Pt.makeGlue(a, h)
                    },
                    { node: m },
                    u
                  ),
                  a
                )
              },
              ie = function t(e, r, n, a) {
                a && e.push(a)
                for (var i = 0; i < e.length; i++) {
                  var o = e[i],
                    s = oe(o)
                  if (s) t(s.children, r, n)
                  else if ('mspace' !== o.classes[0]) {
                    var h = r(o, n.node)
                    h &&
                      (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), i++)),
                      (n.node = o),
                      (n.insertAfter = (function (t) {
                        return function (r) {
                          e.splice(t + 1, 0, r), i++
                        }
                      })(i))
                  }
                }
                a && e.pop()
              },
              oe = function (t) {
                return t instanceof T || t instanceof O ? t : null
              },
              se = function (t, e) {
                return t
                  ? (e &&
                      (t = (function t(e, r) {
                        var n = oe(e)
                        if (n) {
                          var a = n.children
                          if (a.length) {
                            if ('right' === r)
                              return t(a[a.length - 1], 'right')
                            if ('left' === r) return t(a[0], 'left')
                          }
                        }
                        return e
                      })(t, e)),
                    ne[t.classes[0]] || null)
                  : null
              },
              he = function (t, e) {
                var r = ['nulldelimiter'].concat(t.baseSizingClasses())
                return Qt(e.concat(r))
              },
              le = function (t, e, r) {
                if (!t) return Qt()
                if (Wt[t.type]) {
                  var n = Wt[t.type](t, e)
                  if (r && e.size !== r.size) {
                    n = Qt(e.sizingClasses(r), [n], e)
                    var a = e.sizeMultiplier / r.sizeMultiplier
                    ;(n.height *= a), (n.depth *= a)
                  }
                  return n
                }
                throw new o("Got group of unknown type: '" + t.type + "'")
              }
            function me(t, e) {
              var r = Qt(['base'], t, e),
                n = Qt(['strut'])
              return (
                (n.style.height = r.height + r.depth + 'em'),
                (n.style.verticalAlign = -r.depth + 'em'),
                r.children.unshift(n),
                r
              )
            }
            function ce(t, e) {
              var r = null
              1 === t.length &&
                'tag' === t[0].type &&
                ((r = t[0].tag), (t = t[0].body))
              for (
                var n, a = ae(t, e, !0), i = [], o = [], s = 0;
                s < a.length;
                s++
              )
                if (
                  (o.push(a[s]),
                  a[s].hasClass('mbin') ||
                    a[s].hasClass('mrel') ||
                    a[s].hasClass('allowbreak'))
                ) {
                  for (
                    var h = !1;
                    s < a.length - 1 &&
                    a[s + 1].hasClass('mspace') &&
                    !a[s + 1].hasClass('newline');

                  )
                    s++, o.push(a[s]), a[s].hasClass('nobreak') && (h = !0)
                  h || (i.push(me(o, e)), (o = []))
                } else
                  a[s].hasClass('newline') &&
                    (o.pop(),
                    o.length > 0 && (i.push(me(o, e)), (o = [])),
                    i.push(a[s]))
              o.length > 0 && i.push(me(o, e)),
                r && (((n = me(ae(r, e, !0))).classes = ['tag']), i.push(n))
              var l = Qt(['katex-html'], i)
              if ((l.setAttribute('aria-hidden', 'true'), n)) {
                var m = n.children[0]
                ;(m.style.height = l.height + l.depth + 'em'),
                  (m.style.verticalAlign = -l.depth + 'em')
              }
              return l
            }
            function ue(t) {
              return new T(t)
            }
            var de = (function () {
                function t(t, e) {
                  ;(this.type = void 0),
                    (this.attributes = void 0),
                    (this.children = void 0),
                    (this.type = t),
                    (this.attributes = {}),
                    (this.children = e || [])
                }
                var e = t.prototype
                return (
                  (e.setAttribute = function (t, e) {
                    this.attributes[t] = e
                  }),
                  (e.getAttribute = function (t) {
                    return this.attributes[t]
                  }),
                  (e.toNode = function () {
                    var t = document.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      this.type
                    )
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) && t.setAttribute(e, this.attributes[e])
                    for (var r = 0; r < this.children.length; r++)
                      t.appendChild(this.children[r].toNode())
                    return t
                  }),
                  (e.toMarkup = function () {
                    var t = '<' + this.type
                    for (var e in this.attributes)
                      Object.prototype.hasOwnProperty.call(
                        this.attributes,
                        e
                      ) &&
                        ((t += ' ' + e + '="'),
                        (t += c.escape(this.attributes[e])),
                        (t += '"'))
                    t += '>'
                    for (var r = 0; r < this.children.length; r++)
                      t += this.children[r].toMarkup()
                    return (t += '</' + this.type + '>')
                  }),
                  (e.toText = function () {
                    return this.children
                      .map(function (t) {
                        return t.toText()
                      })
                      .join('')
                  }),
                  t
                )
              })(),
              pe = (function () {
                function t(t) {
                  ;(this.text = void 0), (this.text = t)
                }
                var e = t.prototype
                return (
                  (e.toNode = function () {
                    return document.createTextNode(this.text)
                  }),
                  (e.toMarkup = function () {
                    return c.escape(this.toText())
                  }),
                  (e.toText = function () {
                    return this.text
                  }),
                  t
                )
              })(),
              fe = {
                MathNode: de,
                TextNode: pe,
                SpaceNode: (function () {
                  function t(t) {
                    ;(this.width = void 0),
                      (this.character = void 0),
                      (this.width = t),
                      (this.character =
                        t >= 0.05555 && t <= 0.05556
                          ? ' '
                          : t >= 0.1666 && t <= 0.1667
                          ? ' '
                          : t >= 0.2222 && t <= 0.2223
                          ? ' '
                          : t >= 0.2777 && t <= 0.2778
                          ? '  '
                          : t >= -0.05556 && t <= -0.05555
                          ? ' ⁣'
                          : t >= -0.1667 && t <= -0.1666
                          ? ' ⁣'
                          : t >= -0.2223 && t <= -0.2222
                          ? ' ⁣'
                          : t >= -0.2778 && t <= -0.2777
                          ? ' ⁣'
                          : null)
                  }
                  var e = t.prototype
                  return (
                    (e.toNode = function () {
                      if (this.character)
                        return document.createTextNode(this.character)
                      var t = document.createElementNS(
                        'http://www.w3.org/1998/Math/MathML',
                        'mspace'
                      )
                      return t.setAttribute('width', this.width + 'em'), t
                    }),
                    (e.toMarkup = function () {
                      return this.character
                        ? '<mtext>' + this.character + '</mtext>'
                        : '<mspace width="' + this.width + 'em"/>'
                    }),
                    (e.toText = function () {
                      return this.character ? this.character : ' '
                    }),
                    t
                  )
                })(),
                newDocumentFragment: ue,
              },
              ge = function (t, e, r) {
                return (
                  !Y[e][t] ||
                    !Y[e][t].replace ||
                    55349 === t.charCodeAt(0) ||
                    (et.hasOwnProperty(t) &&
                      r &&
                      ((r.fontFamily && 'tt' === r.fontFamily.substr(4, 2)) ||
                        (r.font && 'tt' === r.font.substr(4, 2)))) ||
                    (t = Y[e][t].replace),
                  new fe.TextNode(t)
                )
              },
              xe = function (t) {
                return 1 === t.length ? t[0] : new fe.MathNode('mrow', t)
              },
              ve = function (t, e) {
                if ('texttt' === e.fontFamily) return 'monospace'
                if ('textsf' === e.fontFamily)
                  return 'textit' === e.fontShape && 'textbf' === e.fontWeight
                    ? 'sans-serif-bold-italic'
                    : 'textit' === e.fontShape
                    ? 'sans-serif-italic'
                    : 'textbf' === e.fontWeight
                    ? 'bold-sans-serif'
                    : 'sans-serif'
                if ('textit' === e.fontShape && 'textbf' === e.fontWeight)
                  return 'bold-italic'
                if ('textit' === e.fontShape) return 'italic'
                if ('textbf' === e.fontWeight) return 'bold'
                var r = e.font
                if (!r || 'mathnormal' === r) return null
                var n = t.mode
                if ('mathit' === r) return 'italic'
                if ('boldsymbol' === r) return 'bold-italic'
                var a = t.text
                return c.contains(['\\imath', '\\jmath'], a)
                  ? null
                  : (Y[n][a] && Y[n][a].replace && (a = Y[n][a].replace),
                    V(a, Pt.fontMap[r].fontName, n)
                      ? Pt.fontMap[r].variant
                      : null)
              },
              ye = function (t, e) {
                for (var r, n = [], a = 0; a < t.length; a++) {
                  var i = we(t[a], e)
                  if (i instanceof de && r instanceof de) {
                    if (
                      'mtext' === i.type &&
                      'mtext' === r.type &&
                      i.getAttribute('mathvariant') ===
                        r.getAttribute('mathvariant')
                    ) {
                      var o
                      ;(o = r.children).push.apply(o, i.children)
                      continue
                    }
                    if ('mn' === i.type && 'mn' === r.type) {
                      var s
                      ;(s = r.children).push.apply(s, i.children)
                      continue
                    }
                    if (
                      'mi' === i.type &&
                      1 === i.children.length &&
                      'mn' === r.type
                    ) {
                      var h = i.children[0]
                      if (h instanceof pe && '.' === h.text) {
                        var l
                        ;(l = r.children).push.apply(l, i.children)
                        continue
                      }
                    }
                  }
                  n.push(i), (r = i)
                }
                return n
              },
              be = function (t, e) {
                return xe(ye(t, e))
              },
              we = function (t, e) {
                if (!t) return new fe.MathNode('mrow')
                if (jt[t.type]) return jt[t.type](t, e)
                throw new o("Got group of unknown type: '" + t.type + "'")
              }
            var ke = function (t) {
                return new kt({
                  style: t.displayMode ? w.DISPLAY : w.TEXT,
                  maxSize: t.maxSize,
                })
              },
              Se = function (t, e) {
                if (e.displayMode) {
                  var r = ['katex-display']
                  e.leqno && r.push('leqno'),
                    e.fleqn && r.push('fleqn'),
                    (t = Pt.makeSpan(r, [t]))
                }
                return t
              },
              Me = function (t, e, r) {
                var n = ke(r),
                  a = (function (t, e, r) {
                    var n,
                      a = ye(t, r)
                    n =
                      1 === a.length &&
                      a[0] instanceof de &&
                      c.contains(['mrow', 'mtable'], a[0].type)
                        ? a[0]
                        : new fe.MathNode('mrow', a)
                    var i = new fe.MathNode('annotation', [new fe.TextNode(e)])
                    i.setAttribute('encoding', 'application/x-tex')
                    var o = new fe.MathNode('semantics', [n, i]),
                      s = new fe.MathNode('math', [o])
                    return Pt.makeSpan(['katex-mathml'], [s])
                  })(t, e, n),
                  i = ce(t, n),
                  o = Pt.makeSpan(['katex'], [a, i])
                return Se(o, r)
              },
              ze = {
                widehat: '^',
                widecheck: 'ˇ',
                widetilde: '~',
                utilde: '~',
                overleftarrow: '←',
                underleftarrow: '←',
                xleftarrow: '←',
                overrightarrow: '→',
                underrightarrow: '→',
                xrightarrow: '→',
                underbrace: '⎵',
                overbrace: '⏞',
                overleftrightarrow: '↔',
                underleftrightarrow: '↔',
                xleftrightarrow: '↔',
                Overrightarrow: '⇒',
                xRightarrow: '⇒',
                overleftharpoon: '↼',
                xleftharpoonup: '↼',
                overrightharpoon: '⇀',
                xrightharpoonup: '⇀',
                xLeftarrow: '⇐',
                xLeftrightarrow: '⇔',
                xhookleftarrow: '↩',
                xhookrightarrow: '↪',
                xmapsto: '↦',
                xrightharpoondown: '⇁',
                xleftharpoondown: '↽',
                xrightleftharpoons: '⇌',
                xleftrightharpoons: '⇋',
                xtwoheadleftarrow: '↞',
                xtwoheadrightarrow: '↠',
                xlongequal: '=',
                xtofrom: '⇄',
                xrightleftarrows: '⇄',
                xrightequilibrium: '⇌',
                xleftequilibrium: '⇋',
              },
              Te = {
                overrightarrow: [['rightarrow'], 0.888, 522, 'xMaxYMin'],
                overleftarrow: [['leftarrow'], 0.888, 522, 'xMinYMin'],
                underrightarrow: [['rightarrow'], 0.888, 522, 'xMaxYMin'],
                underleftarrow: [['leftarrow'], 0.888, 522, 'xMinYMin'],
                xrightarrow: [['rightarrow'], 1.469, 522, 'xMaxYMin'],
                xleftarrow: [['leftarrow'], 1.469, 522, 'xMinYMin'],
                Overrightarrow: [['doublerightarrow'], 0.888, 560, 'xMaxYMin'],
                xRightarrow: [['doublerightarrow'], 1.526, 560, 'xMaxYMin'],
                xLeftarrow: [['doubleleftarrow'], 1.526, 560, 'xMinYMin'],
                overleftharpoon: [['leftharpoon'], 0.888, 522, 'xMinYMin'],
                xleftharpoonup: [['leftharpoon'], 0.888, 522, 'xMinYMin'],
                xleftharpoondown: [['leftharpoondown'], 0.888, 522, 'xMinYMin'],
                overrightharpoon: [['rightharpoon'], 0.888, 522, 'xMaxYMin'],
                xrightharpoonup: [['rightharpoon'], 0.888, 522, 'xMaxYMin'],
                xrightharpoondown: [
                  ['rightharpoondown'],
                  0.888,
                  522,
                  'xMaxYMin',
                ],
                xlongequal: [['longequal'], 0.888, 334, 'xMinYMin'],
                xtwoheadleftarrow: [
                  ['twoheadleftarrow'],
                  0.888,
                  334,
                  'xMinYMin',
                ],
                xtwoheadrightarrow: [
                  ['twoheadrightarrow'],
                  0.888,
                  334,
                  'xMaxYMin',
                ],
                overleftrightarrow: [['leftarrow', 'rightarrow'], 0.888, 522],
                overbrace: [['leftbrace', 'midbrace', 'rightbrace'], 1.6, 548],
                underbrace: [
                  ['leftbraceunder', 'midbraceunder', 'rightbraceunder'],
                  1.6,
                  548,
                ],
                underleftrightarrow: [['leftarrow', 'rightarrow'], 0.888, 522],
                xleftrightarrow: [['leftarrow', 'rightarrow'], 1.75, 522],
                xLeftrightarrow: [
                  ['doubleleftarrow', 'doublerightarrow'],
                  1.75,
                  560,
                ],
                xrightleftharpoons: [
                  ['leftharpoondownplus', 'rightharpoonplus'],
                  1.75,
                  716,
                ],
                xleftrightharpoons: [
                  ['leftharpoonplus', 'rightharpoondownplus'],
                  1.75,
                  716,
                ],
                xhookleftarrow: [['leftarrow', 'righthook'], 1.08, 522],
                xhookrightarrow: [['lefthook', 'rightarrow'], 1.08, 522],
                overlinesegment: [
                  ['leftlinesegment', 'rightlinesegment'],
                  0.888,
                  522,
                ],
                underlinesegment: [
                  ['leftlinesegment', 'rightlinesegment'],
                  0.888,
                  522,
                ],
                overgroup: [['leftgroup', 'rightgroup'], 0.888, 342],
                undergroup: [['leftgroupunder', 'rightgroupunder'], 0.888, 342],
                xmapsto: [['leftmapsto', 'rightarrow'], 1.5, 522],
                xtofrom: [['leftToFrom', 'rightToFrom'], 1.75, 528],
                xrightleftarrows: [
                  ['baraboveleftarrow', 'rightarrowabovebar'],
                  1.75,
                  901,
                ],
                xrightequilibrium: [
                  ['baraboveshortleftharpoon', 'rightharpoonaboveshortbar'],
                  1.75,
                  716,
                ],
                xleftequilibrium: [
                  ['shortbaraboveleftharpoon', 'shortrightharpoonabovebar'],
                  1.75,
                  716,
                ],
              },
              Ae = function (t) {
                return 'ordgroup' === t.type ? t.body.length : 1
              },
              Be = function (t, e, r, n) {
                var a,
                  i = t.height + t.depth + 2 * r
                if (/fbox|color/.test(e)) {
                  if (
                    ((a = Pt.makeSpan(['stretchy', e], [], n)), 'fbox' === e)
                  ) {
                    var o = n.color && n.getColor()
                    o && (a.style.borderColor = o)
                  }
                } else {
                  var s = []
                  ;/^[bx]cancel$/.test(e) &&
                    s.push(
                      new P({
                        x1: '0',
                        y1: '0',
                        x2: '100%',
                        y2: '100%',
                        'stroke-width': '0.046em',
                      })
                    ),
                    /^x?cancel$/.test(e) &&
                      s.push(
                        new P({
                          x1: '0',
                          y1: '100%',
                          x2: '100%',
                          y2: '0',
                          'stroke-width': '0.046em',
                        })
                      )
                  var h = new R(s, { width: '100%', height: i + 'em' })
                  a = Pt.makeSvgSpan([], [h], n)
                }
                return (a.height = i), (a.style.height = i + 'em'), a
              },
              Ce = function (t) {
                var e = new fe.MathNode('mo', [
                  new fe.TextNode(ze[t.substr(1)]),
                ])
                return e.setAttribute('stretchy', 'true'), e
              },
              Ne = function (t, e) {
                var r = (function () {
                    var r = 4e5,
                      n = t.label.substr(1)
                    if (
                      c.contains(
                        ['widehat', 'widecheck', 'widetilde', 'utilde'],
                        n
                      )
                    ) {
                      var a,
                        i,
                        o,
                        s = Ae(t.base)
                      if (s > 5)
                        'widehat' === n || 'widecheck' === n
                          ? ((a = 420), (r = 2364), (o = 0.42), (i = n + '4'))
                          : ((a = 312), (r = 2340), (o = 0.34), (i = 'tilde4'))
                      else {
                        var h = [1, 1, 2, 2, 3, 3][s]
                        'widehat' === n || 'widecheck' === n
                          ? ((r = [0, 1062, 2364, 2364, 2364][h]),
                            (a = [0, 239, 300, 360, 420][h]),
                            (o = [0, 0.24, 0.3, 0.3, 0.36, 0.42][h]),
                            (i = n + h))
                          : ((r = [0, 600, 1033, 2339, 2340][h]),
                            (a = [0, 260, 286, 306, 312][h]),
                            (o = [0, 0.26, 0.286, 0.3, 0.306, 0.34][h]),
                            (i = 'tilde' + h))
                      }
                      var l = new L(i),
                        m = new R([l], {
                          width: '100%',
                          height: o + 'em',
                          viewBox: '0 0 ' + r + ' ' + a,
                          preserveAspectRatio: 'none',
                        })
                      return {
                        span: Pt.makeSvgSpan([], [m], e),
                        minWidth: 0,
                        height: o,
                      }
                    }
                    var u,
                      d,
                      p = [],
                      f = Te[n],
                      g = f[0],
                      x = f[1],
                      v = f[2],
                      y = v / 1e3,
                      b = g.length
                    if (1 === b) (u = ['hide-tail']), (d = [f[3]])
                    else if (2 === b)
                      (u = ['halfarrow-left', 'halfarrow-right']),
                        (d = ['xMinYMin', 'xMaxYMin'])
                    else {
                      if (3 !== b)
                        throw new Error(
                          'Correct katexImagesData or update code here to support\n                    ' +
                            b +
                            ' children.'
                        )
                      ;(u = ['brace-left', 'brace-center', 'brace-right']),
                        (d = ['xMinYMin', 'xMidYMin', 'xMaxYMin'])
                    }
                    for (var w = 0; w < b; w++) {
                      var k = new L(g[w]),
                        S = new R([k], {
                          width: '400em',
                          height: y + 'em',
                          viewBox: '0 0 ' + r + ' ' + v,
                          preserveAspectRatio: d[w] + ' slice',
                        }),
                        M = Pt.makeSvgSpan([u[w]], [S], e)
                      if (1 === b) return { span: M, minWidth: x, height: y }
                      ;(M.style.height = y + 'em'), p.push(M)
                    }
                    return {
                      span: Pt.makeSpan(['stretchy'], p, e),
                      minWidth: x,
                      height: y,
                    }
                  })(),
                  n = r.span,
                  a = r.minWidth,
                  i = r.height
                return (
                  (n.height = i),
                  (n.style.height = i + 'em'),
                  a > 0 && (n.style.minWidth = a + 'em'),
                  n
                )
              },
              qe = function (t, e) {
                var r,
                  n,
                  a,
                  i = Ht(t, 'supsub')
                i
                  ? ((r = (n = Dt(i.base, 'accent')).base),
                    (i.base = r),
                    (a = (function (t) {
                      if (t instanceof q) return t
                      throw new Error(
                        'Expected span<HtmlDomNode> but got ' + String(t) + '.'
                      )
                    })(le(i, e))),
                    (i.base = n))
                  : (r = (n = Dt(t, 'accent')).base)
                var o = le(r, e.havingCrampedStyle()),
                  s = 0
                if (n.isShifty && c.isCharacterBox(r)) {
                  var h = c.getBaseElem(r)
                  s = (function (t) {
                    if (t instanceof I) return t
                    throw new Error(
                      'Expected symbolNode but got ' + String(t) + '.'
                    )
                  })(le(h, e.havingCrampedStyle())).skew
                }
                var l,
                  m = Math.min(o.height, e.fontMetrics().xHeight)
                if (n.isStretchy)
                  (l = Ne(n, e)),
                    (l = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [
                          { type: 'elem', elem: o },
                          {
                            type: 'elem',
                            elem: l,
                            wrapperClasses: ['svg-align'],
                            wrapperStyle:
                              s > 0
                                ? {
                                    width: 'calc(100% - ' + 2 * s + 'em)',
                                    marginLeft: 2 * s + 'em',
                                  }
                                : void 0,
                          },
                        ],
                      },
                      e
                    ))
                else {
                  var u, d
                  '\\vec' === n.label
                    ? ((u = Pt.staticSvg('vec', e)), (d = Pt.svgData.vec[1]))
                    : (((u = Pt.makeSymbol(
                        n.label,
                        'Main-Regular',
                        n.mode,
                        e
                      )).italic = 0),
                      (d = u.width)),
                    (l = Pt.makeSpan(['accent-body'], [u]))
                  var p = '\\textcircled' === n.label
                  p && (l.classes.push('accent-full'), (m = o.height))
                  var f = s
                  p || (f -= d / 2),
                    (l.style.left = f + 'em'),
                    '\\textcircled' === n.label && (l.style.top = '.2em'),
                    (l = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [
                          { type: 'elem', elem: o },
                          { type: 'kern', size: -m },
                          { type: 'elem', elem: l },
                        ],
                      },
                      e
                    ))
                }
                var g = Pt.makeSpan(['mord', 'accent'], [l], e)
                return a
                  ? ((a.children[0] = g),
                    (a.height = Math.max(g.height, a.height)),
                    (a.classes[0] = 'mord'),
                    a)
                  : g
              },
              Oe = function (t, e) {
                var r = t.isStretchy
                    ? Ce(t.label)
                    : new fe.MathNode('mo', [ge(t.label, t.mode)]),
                  n = new fe.MathNode('mover', [we(t.base, e), r])
                return n.setAttribute('accent', 'true'), n
              },
              Ee = new RegExp(
                [
                  '\\acute',
                  '\\grave',
                  '\\ddot',
                  '\\tilde',
                  '\\bar',
                  '\\breve',
                  '\\check',
                  '\\hat',
                  '\\vec',
                  '\\dot',
                  '\\mathring',
                ]
                  .map(function (t) {
                    return '\\' + t
                  })
                  .join('|')
              )
            Zt({
              type: 'accent',
              names: [
                '\\acute',
                '\\grave',
                '\\ddot',
                '\\tilde',
                '\\bar',
                '\\breve',
                '\\check',
                '\\hat',
                '\\vec',
                '\\dot',
                '\\mathring',
                '\\widecheck',
                '\\widehat',
                '\\widetilde',
                '\\overrightarrow',
                '\\overleftarrow',
                '\\Overrightarrow',
                '\\overleftrightarrow',
                '\\overgroup',
                '\\overlinesegment',
                '\\overleftharpoon',
                '\\overrightharpoon',
              ],
              props: { numArgs: 1 },
              handler: function (t, e) {
                var r = e[0],
                  n = !Ee.test(t.funcName),
                  a =
                    !n ||
                    '\\widehat' === t.funcName ||
                    '\\widetilde' === t.funcName ||
                    '\\widecheck' === t.funcName
                return {
                  type: 'accent',
                  mode: t.parser.mode,
                  label: t.funcName,
                  isStretchy: n,
                  isShifty: a,
                  base: r,
                }
              },
              htmlBuilder: qe,
              mathmlBuilder: Oe,
            }),
              Zt({
                type: 'accent',
                names: [
                  "\\'",
                  '\\`',
                  '\\^',
                  '\\~',
                  '\\=',
                  '\\u',
                  '\\.',
                  '\\"',
                  '\\r',
                  '\\H',
                  '\\v',
                  '\\textcircled',
                ],
                props: { numArgs: 1, allowedInText: !0, allowedInMath: !1 },
                handler: function (t, e) {
                  var r = e[0]
                  return {
                    type: 'accent',
                    mode: t.parser.mode,
                    label: t.funcName,
                    isStretchy: !1,
                    isShifty: !0,
                    base: r,
                  }
                },
                htmlBuilder: qe,
                mathmlBuilder: Oe,
              }),
              Zt({
                type: 'accentUnder',
                names: [
                  '\\underleftarrow',
                  '\\underrightarrow',
                  '\\underleftrightarrow',
                  '\\undergroup',
                  '\\underlinesegment',
                  '\\utilde',
                ],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.funcName,
                    a = e[0]
                  return {
                    type: 'accentUnder',
                    mode: r.mode,
                    label: n,
                    base: a,
                  }
                },
                htmlBuilder: function (t, e) {
                  var r = le(t.base, e),
                    n = Ne(t, e),
                    a = '\\utilde' === t.label ? 0.12 : 0,
                    i = Pt.makeVList(
                      {
                        positionType: 'bottom',
                        positionData: n.height + a,
                        children: [
                          {
                            type: 'elem',
                            elem: n,
                            wrapperClasses: ['svg-align'],
                          },
                          { type: 'kern', size: a },
                          { type: 'elem', elem: r },
                        ],
                      },
                      e
                    )
                  return Pt.makeSpan(['mord', 'accentunder'], [i], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = Ce(t.label),
                    n = new fe.MathNode('munder', [we(t.base, e), r])
                  return n.setAttribute('accentunder', 'true'), n
                },
              }),
              Zt({
                type: 'xArrow',
                names: [
                  '\\xleftarrow',
                  '\\xrightarrow',
                  '\\xLeftarrow',
                  '\\xRightarrow',
                  '\\xleftrightarrow',
                  '\\xLeftrightarrow',
                  '\\xhookleftarrow',
                  '\\xhookrightarrow',
                  '\\xmapsto',
                  '\\xrightharpoondown',
                  '\\xrightharpoonup',
                  '\\xleftharpoondown',
                  '\\xleftharpoonup',
                  '\\xrightleftharpoons',
                  '\\xleftrightharpoons',
                  '\\xlongequal',
                  '\\xtwoheadrightarrow',
                  '\\xtwoheadleftarrow',
                  '\\xtofrom',
                  '\\xrightleftarrows',
                  '\\xrightequilibrium',
                  '\\xleftequilibrium',
                ],
                props: { numArgs: 1, numOptionalArgs: 1 },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = t.funcName
                  return {
                    type: 'xArrow',
                    mode: n.mode,
                    label: a,
                    body: e[0],
                    below: r[0],
                  }
                },
                htmlBuilder: function (t, e) {
                  var r,
                    n = e.style,
                    a = e.havingStyle(n.sup()),
                    i = Pt.wrapFragment(le(t.body, a, e), e)
                  i.classes.push('x-arrow-pad'),
                    t.below &&
                      ((a = e.havingStyle(n.sub())),
                      (r = Pt.wrapFragment(le(t.below, a, e), e)).classes.push(
                        'x-arrow-pad'
                      ))
                  var o,
                    s = Ne(t, e),
                    h = -e.fontMetrics().axisHeight + 0.5 * s.height,
                    l = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111
                  if (
                    ((i.depth > 0.25 || '\\xleftequilibrium' === t.label) &&
                      (l -= i.depth),
                    r)
                  ) {
                    var m =
                      -e.fontMetrics().axisHeight +
                      r.height +
                      0.5 * s.height +
                      0.111
                    o = Pt.makeVList(
                      {
                        positionType: 'individualShift',
                        children: [
                          { type: 'elem', elem: i, shift: l },
                          { type: 'elem', elem: s, shift: h },
                          { type: 'elem', elem: r, shift: m },
                        ],
                      },
                      e
                    )
                  } else
                    o = Pt.makeVList(
                      {
                        positionType: 'individualShift',
                        children: [
                          { type: 'elem', elem: i, shift: l },
                          { type: 'elem', elem: s, shift: h },
                        ],
                      },
                      e
                    )
                  return (
                    o.children[0].children[0].children[1].classes.push(
                      'svg-align'
                    ),
                    Pt.makeSpan(['mrel', 'x-arrow'], [o], e)
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r,
                    n,
                    a = Ce(t.label)
                  if (t.body) {
                    var i = we(t.body, e)
                    t.below
                      ? ((n = we(t.below, e)),
                        (r = new fe.MathNode('munderover', [a, n, i])))
                      : (r = new fe.MathNode('mover', [a, i]))
                  } else
                    t.below
                      ? ((n = we(t.below, e)),
                        (r = new fe.MathNode('munder', [a, n])))
                      : (r = new fe.MathNode('mover', [a]))
                  return r
                },
              }),
              Zt({
                type: 'textord',
                names: ['\\@char'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  for (
                    var r = t.parser,
                      n = Dt(e[0], 'ordgroup').body,
                      a = '',
                      i = 0;
                    i < n.length;
                    i++
                  ) {
                    a += Dt(n[i], 'textord').text
                  }
                  var s = parseInt(a)
                  if (isNaN(s))
                    throw new o('\\@char has non-numeric argument ' + a)
                  return {
                    type: 'textord',
                    mode: r.mode,
                    text: String.fromCharCode(s),
                  }
                },
              })
            var Ie = function (t, e) {
                var r = ae(t.body, e.withColor(t.color), !1)
                return Pt.makeFragment(r)
              },
              Re = function (t, e) {
                var r = ye(t.body, e),
                  n = new fe.MathNode('mstyle', r)
                return n.setAttribute('mathcolor', t.color), n
              }
            Zt({
              type: 'color',
              names: ['\\textcolor'],
              props: {
                numArgs: 2,
                allowedInText: !0,
                greediness: 3,
                argTypes: ['color', 'original'],
              },
              handler: function (t, e) {
                var r = t.parser,
                  n = Dt(e[0], 'color-token').color,
                  a = e[1]
                return { type: 'color', mode: r.mode, color: n, body: Jt(a) }
              },
              htmlBuilder: Ie,
              mathmlBuilder: Re,
            }),
              Zt({
                type: 'color',
                names: [
                  '\\blue',
                  '\\orange',
                  '\\pink',
                  '\\red',
                  '\\green',
                  '\\gray',
                  '\\purple',
                  '\\blueA',
                  '\\blueB',
                  '\\blueC',
                  '\\blueD',
                  '\\blueE',
                  '\\tealA',
                  '\\tealB',
                  '\\tealC',
                  '\\tealD',
                  '\\tealE',
                  '\\greenA',
                  '\\greenB',
                  '\\greenC',
                  '\\greenD',
                  '\\greenE',
                  '\\goldA',
                  '\\goldB',
                  '\\goldC',
                  '\\goldD',
                  '\\goldE',
                  '\\redA',
                  '\\redB',
                  '\\redC',
                  '\\redD',
                  '\\redE',
                  '\\maroonA',
                  '\\maroonB',
                  '\\maroonC',
                  '\\maroonD',
                  '\\maroonE',
                  '\\purpleA',
                  '\\purpleB',
                  '\\purpleC',
                  '\\purpleD',
                  '\\purpleE',
                  '\\mintA',
                  '\\mintB',
                  '\\mintC',
                  '\\grayA',
                  '\\grayB',
                  '\\grayC',
                  '\\grayD',
                  '\\grayE',
                  '\\grayF',
                  '\\grayG',
                  '\\grayH',
                  '\\grayI',
                  '\\kaBlue',
                  '\\kaGreen',
                ],
                props: { numArgs: 1, allowedInText: !0, greediness: 3 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.funcName,
                    a = e[0]
                  return {
                    type: 'color',
                    mode: r.mode,
                    color: 'katex-' + n.slice(1),
                    body: Jt(a),
                  }
                },
                htmlBuilder: Ie,
                mathmlBuilder: Re,
              }),
              Zt({
                type: 'color',
                names: ['\\color'],
                props: {
                  numArgs: 1,
                  allowedInText: !0,
                  greediness: 3,
                  argTypes: ['color'],
                },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.breakOnTokenText,
                    a = Dt(e[0], 'color-token').color,
                    i = r.parseExpression(!0, n)
                  return { type: 'color', mode: r.mode, color: a, body: i }
                },
                htmlBuilder: Ie,
                mathmlBuilder: Re,
              }),
              Zt({
                type: 'cr',
                names: ['\\cr', '\\newline'],
                props: {
                  numArgs: 0,
                  numOptionalArgs: 1,
                  argTypes: ['size'],
                  allowedInText: !0,
                },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = t.funcName,
                    i = r[0],
                    o = '\\cr' === a,
                    s = !1
                  return (
                    o ||
                      (s =
                        !n.settings.displayMode ||
                        !n.settings.useStrictBehavior(
                          'newLineInDisplayMode',
                          'In LaTeX, \\\\ or \\newline does nothing in display mode'
                        )),
                    {
                      type: 'cr',
                      mode: n.mode,
                      newLine: s,
                      newRow: o,
                      size: i && Dt(i, 'size').value,
                    }
                  )
                },
                htmlBuilder: function (t, e) {
                  if (t.newRow)
                    throw new o(
                      '\\cr valid only within a tabular/array environment'
                    )
                  var r = Pt.makeSpan(['mspace'], [], e)
                  return (
                    t.newLine &&
                      (r.classes.push('newline'),
                      t.size && (r.style.marginTop = zt(t.size, e) + 'em')),
                    r
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mspace')
                  return (
                    t.newLine &&
                      (r.setAttribute('linebreak', 'newline'),
                      t.size && r.setAttribute('height', zt(t.size, e) + 'em')),
                    r
                  )
                },
              })
            var Le = function (t, e, r) {
                var n = V((Y.math[t] && Y.math[t].replace) || t, e, r)
                if (!n)
                  throw new Error(
                    'Unsupported symbol ' + t + ' and font size ' + e + '.'
                  )
                return n
              },
              Pe = function (t, e, r, n) {
                var a = r.havingBaseStyle(e),
                  i = Pt.makeSpan(n.concat(a.sizingClasses(r)), [t], r),
                  o = a.sizeMultiplier / r.sizeMultiplier
                return (
                  (i.height *= o),
                  (i.depth *= o),
                  (i.maxFontSize = a.sizeMultiplier),
                  i
                )
              },
              De = function (t, e, r) {
                var n = e.havingBaseStyle(r),
                  a =
                    (1 - e.sizeMultiplier / n.sizeMultiplier) *
                    e.fontMetrics().axisHeight
                t.classes.push('delimcenter'),
                  (t.style.top = a + 'em'),
                  (t.height -= a),
                  (t.depth += a)
              },
              He = function (t, e, r, n, a, i) {
                var o = (function (t, e, r, n) {
                    return Pt.makeSymbol(t, 'Size' + e + '-Regular', r, n)
                  })(t, e, a, n),
                  s = Pe(
                    Pt.makeSpan(['delimsizing', 'size' + e], [o], n),
                    w.TEXT,
                    n,
                    i
                  )
                return r && De(s, n, w.TEXT), s
              },
              Fe = function (t, e, r) {
                var n
                return (
                  (n = 'Size1-Regular' === e ? 'delim-size1' : 'delim-size4'),
                  {
                    type: 'elem',
                    elem: Pt.makeSpan(
                      ['delimsizinginner', n],
                      [Pt.makeSpan([], [Pt.makeSymbol(t, e, r)])]
                    ),
                  }
                )
              },
              Ve = function (t, e, r, n, a, i) {
                var o, s, h, l
                ;(o = h = l = t), (s = null)
                var m = 'Size1-Regular'
                '\\uparrow' === t
                  ? (h = l = '⏐')
                  : '\\Uparrow' === t
                  ? (h = l = '‖')
                  : '\\downarrow' === t
                  ? (o = h = '⏐')
                  : '\\Downarrow' === t
                  ? (o = h = '‖')
                  : '\\updownarrow' === t
                  ? ((o = '\\uparrow'), (h = '⏐'), (l = '\\downarrow'))
                  : '\\Updownarrow' === t
                  ? ((o = '\\Uparrow'), (h = '‖'), (l = '\\Downarrow'))
                  : '[' === t || '\\lbrack' === t
                  ? ((o = '⎡'), (h = '⎢'), (l = '⎣'), (m = 'Size4-Regular'))
                  : ']' === t || '\\rbrack' === t
                  ? ((o = '⎤'), (h = '⎥'), (l = '⎦'), (m = 'Size4-Regular'))
                  : '\\lfloor' === t || '⌊' === t
                  ? ((h = o = '⎢'), (l = '⎣'), (m = 'Size4-Regular'))
                  : '\\lceil' === t || '⌈' === t
                  ? ((o = '⎡'), (h = l = '⎢'), (m = 'Size4-Regular'))
                  : '\\rfloor' === t || '⌋' === t
                  ? ((h = o = '⎥'), (l = '⎦'), (m = 'Size4-Regular'))
                  : '\\rceil' === t || '⌉' === t
                  ? ((o = '⎤'), (h = l = '⎥'), (m = 'Size4-Regular'))
                  : '(' === t || '\\lparen' === t
                  ? ((o = '⎛'), (h = '⎜'), (l = '⎝'), (m = 'Size4-Regular'))
                  : ')' === t || '\\rparen' === t
                  ? ((o = '⎞'), (h = '⎟'), (l = '⎠'), (m = 'Size4-Regular'))
                  : '\\{' === t || '\\lbrace' === t
                  ? ((o = '⎧'),
                    (s = '⎨'),
                    (l = '⎩'),
                    (h = '⎪'),
                    (m = 'Size4-Regular'))
                  : '\\}' === t || '\\rbrace' === t
                  ? ((o = '⎫'),
                    (s = '⎬'),
                    (l = '⎭'),
                    (h = '⎪'),
                    (m = 'Size4-Regular'))
                  : '\\lgroup' === t || '⟮' === t
                  ? ((o = '⎧'), (l = '⎩'), (h = '⎪'), (m = 'Size4-Regular'))
                  : '\\rgroup' === t || '⟯' === t
                  ? ((o = '⎫'), (l = '⎭'), (h = '⎪'), (m = 'Size4-Regular'))
                  : '\\lmoustache' === t || '⎰' === t
                  ? ((o = '⎧'), (l = '⎭'), (h = '⎪'), (m = 'Size4-Regular'))
                  : ('\\rmoustache' !== t && '⎱' !== t) ||
                    ((o = '⎫'), (l = '⎩'), (h = '⎪'), (m = 'Size4-Regular'))
                var c = Le(o, m, a),
                  u = c.height + c.depth,
                  d = Le(h, m, a),
                  p = d.height + d.depth,
                  f = Le(l, m, a),
                  g = f.height + f.depth,
                  x = 0,
                  v = 1
                if (null !== s) {
                  var y = Le(s, m, a)
                  ;(x = y.height + y.depth), (v = 2)
                }
                var b = u + g + x,
                  k = Math.ceil((e - b) / (v * p)),
                  S = b + k * v * p,
                  M = n.fontMetrics().axisHeight
                r && (M *= n.sizeMultiplier)
                var z = S / 2 - M,
                  T = []
                if ((T.push(Fe(l, m, a)), null === s))
                  for (var A = 0; A < k; A++) T.push(Fe(h, m, a))
                else {
                  for (var B = 0; B < k; B++) T.push(Fe(h, m, a))
                  T.push(Fe(s, m, a))
                  for (var C = 0; C < k; C++) T.push(Fe(h, m, a))
                }
                T.push(Fe(o, m, a))
                var N = n.havingBaseStyle(w.TEXT),
                  q = Pt.makeVList(
                    { positionType: 'bottom', positionData: z, children: T },
                    N
                  )
                return Pe(
                  Pt.makeSpan(['delimsizing', 'mult'], [q], N),
                  w.TEXT,
                  n,
                  i
                )
              },
              Ue = function (t, e, r, n) {
                var a
                'sqrtTall' === t &&
                  (a =
                    'M702 80H400000v40H742v' +
                    (r - 54 - 80) +
                    'l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z')
                var i = new L(t, a),
                  o = new R([i], {
                    width: '400em',
                    height: e + 'em',
                    viewBox: '0 0 400000 ' + r,
                    preserveAspectRatio: 'xMinYMin slice',
                  })
                return Pt.makeSvgSpan(['hide-tail'], [o], n)
              },
              Ge = [
                '(',
                '\\lparen',
                ')',
                '\\rparen',
                '[',
                '\\lbrack',
                ']',
                '\\rbrack',
                '\\{',
                '\\lbrace',
                '\\}',
                '\\rbrace',
                '\\lfloor',
                '\\rfloor',
                '⌊',
                '⌋',
                '\\lceil',
                '\\rceil',
                '⌈',
                '⌉',
                '\\surd',
              ],
              _e = [
                '\\uparrow',
                '\\downarrow',
                '\\updownarrow',
                '\\Uparrow',
                '\\Downarrow',
                '\\Updownarrow',
                '|',
                '\\|',
                '\\vert',
                '\\Vert',
                '\\lvert',
                '\\rvert',
                '\\lVert',
                '\\rVert',
                '\\lgroup',
                '\\rgroup',
                '⟮',
                '⟯',
                '\\lmoustache',
                '\\rmoustache',
                '⎰',
                '⎱',
              ],
              Xe = [
                '<',
                '>',
                '\\langle',
                '\\rangle',
                '/',
                '\\backslash',
                '\\lt',
                '\\gt',
              ],
              Ye = [0, 1.2, 1.8, 2.4, 3],
              $e = [
                { type: 'small', style: w.SCRIPTSCRIPT },
                { type: 'small', style: w.SCRIPT },
                { type: 'small', style: w.TEXT },
                { type: 'large', size: 1 },
                { type: 'large', size: 2 },
                { type: 'large', size: 3 },
                { type: 'large', size: 4 },
              ],
              We = [
                { type: 'small', style: w.SCRIPTSCRIPT },
                { type: 'small', style: w.SCRIPT },
                { type: 'small', style: w.TEXT },
                { type: 'stack' },
              ],
              je = [
                { type: 'small', style: w.SCRIPTSCRIPT },
                { type: 'small', style: w.SCRIPT },
                { type: 'small', style: w.TEXT },
                { type: 'large', size: 1 },
                { type: 'large', size: 2 },
                { type: 'large', size: 3 },
                { type: 'large', size: 4 },
                { type: 'stack' },
              ],
              Ze = function (t) {
                if ('small' === t.type) return 'Main-Regular'
                if ('large' === t.type) return 'Size' + t.size + '-Regular'
                if ('stack' === t.type) return 'Size4-Regular'
                throw new Error(
                  "Add support for delim type '" + t.type + "' here."
                )
              },
              Ke = function (t, e, r, n) {
                for (
                  var a = Math.min(2, 3 - n.style.size);
                  a < r.length && 'stack' !== r[a].type;
                  a++
                ) {
                  var i = Le(t, Ze(r[a]), 'math'),
                    o = i.height + i.depth
                  if (
                    ('small' === r[a].type &&
                      (o *= n.havingBaseStyle(r[a].style).sizeMultiplier),
                    o > e)
                  )
                    return r[a]
                }
                return r[r.length - 1]
              },
              Je = function (t, e, r, n, a, i) {
                var o
                '<' === t || '\\lt' === t || '⟨' === t
                  ? (t = '\\langle')
                  : ('>' !== t && '\\gt' !== t && '⟩' !== t) ||
                    (t = '\\rangle'),
                  (o = c.contains(Xe, t) ? $e : c.contains(Ge, t) ? je : We)
                var s = Ke(t, e, o, n)
                return 'small' === s.type
                  ? (function (t, e, r, n, a, i) {
                      var o = Pt.makeSymbol(t, 'Main-Regular', a, n),
                        s = Pe(o, e, n, i)
                      return r && De(s, n, e), s
                    })(t, s.style, r, n, a, i)
                  : 'large' === s.type
                  ? He(t, s.size, r, n, a, i)
                  : Ve(t, e, r, n, a, i)
              },
              Qe = function (t, e) {
                var r,
                  n,
                  a = e.havingBaseSizing(),
                  i = Ke('\\surd', t * a.sizeMultiplier, je, a),
                  o = a.sizeMultiplier,
                  s = 0,
                  h = 0,
                  l = 0
                return (
                  'small' === i.type
                    ? (t < 1 ? (o = 1) : t < 1.4 && (o = 0.7),
                      (h = 1 / o),
                      ((r = Ue(
                        'sqrtMain',
                        (s = 1.08 / o),
                        (l = 1080),
                        e
                      )).style.minWidth = '0.853em'),
                      (n = 0.833 / o))
                    : 'large' === i.type
                    ? ((l = 1080 * Ye[i.size]),
                      (h = Ye[i.size] / o),
                      (s = (Ye[i.size] + 0.08) / o),
                      ((r = Ue('sqrtSize' + i.size, s, l, e)).style.minWidth =
                        '1.02em'),
                      (n = 1 / o))
                    : ((s = t + 0.08),
                      (h = t),
                      (l = Math.floor(1e3 * t) + 80),
                      ((r = Ue('sqrtTall', s, l, e)).style.minWidth =
                        '0.742em'),
                      (n = 1.056)),
                  (r.height = h),
                  (r.style.height = s + 'em'),
                  {
                    span: r,
                    advanceWidth: n,
                    ruleWidth: e.fontMetrics().sqrtRuleThickness * o,
                  }
                )
              },
              tr = function (t, e, r, n, a) {
                if (
                  ('<' === t || '\\lt' === t || '⟨' === t
                    ? (t = '\\langle')
                    : ('>' !== t && '\\gt' !== t && '⟩' !== t) ||
                      (t = '\\rangle'),
                  c.contains(Ge, t) || c.contains(Xe, t))
                )
                  return He(t, e, !1, r, n, a)
                if (c.contains(_e, t)) return Ve(t, Ye[e], !1, r, n, a)
                throw new o("Illegal delimiter: '" + t + "'")
              },
              er = Je,
              rr = function (t, e, r, n, a, i) {
                var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
                  s = 5 / n.fontMetrics().ptPerEm,
                  h = Math.max(e - o, r + o),
                  l = Math.max((h / 500) * 901, 2 * h - s)
                return Je(t, l, !0, n, a, i)
              },
              nr = {
                '\\bigl': { mclass: 'mopen', size: 1 },
                '\\Bigl': { mclass: 'mopen', size: 2 },
                '\\biggl': { mclass: 'mopen', size: 3 },
                '\\Biggl': { mclass: 'mopen', size: 4 },
                '\\bigr': { mclass: 'mclose', size: 1 },
                '\\Bigr': { mclass: 'mclose', size: 2 },
                '\\biggr': { mclass: 'mclose', size: 3 },
                '\\Biggr': { mclass: 'mclose', size: 4 },
                '\\bigm': { mclass: 'mrel', size: 1 },
                '\\Bigm': { mclass: 'mrel', size: 2 },
                '\\biggm': { mclass: 'mrel', size: 3 },
                '\\Biggm': { mclass: 'mrel', size: 4 },
                '\\big': { mclass: 'mord', size: 1 },
                '\\Big': { mclass: 'mord', size: 2 },
                '\\bigg': { mclass: 'mord', size: 3 },
                '\\Bigg': { mclass: 'mord', size: 4 },
              },
              ar = [
                '(',
                '\\lparen',
                ')',
                '\\rparen',
                '[',
                '\\lbrack',
                ']',
                '\\rbrack',
                '\\{',
                '\\lbrace',
                '\\}',
                '\\rbrace',
                '\\lfloor',
                '\\rfloor',
                '⌊',
                '⌋',
                '\\lceil',
                '\\rceil',
                '⌈',
                '⌉',
                '<',
                '>',
                '\\langle',
                '⟨',
                '\\rangle',
                '⟩',
                '\\lt',
                '\\gt',
                '\\lvert',
                '\\rvert',
                '\\lVert',
                '\\rVert',
                '\\lgroup',
                '\\rgroup',
                '⟮',
                '⟯',
                '\\lmoustache',
                '\\rmoustache',
                '⎰',
                '⎱',
                '/',
                '\\backslash',
                '|',
                '\\vert',
                '\\|',
                '\\Vert',
                '\\uparrow',
                '\\Uparrow',
                '\\downarrow',
                '\\Downarrow',
                '\\updownarrow',
                '\\Updownarrow',
                '.',
              ]
            function ir(t, e) {
              var r = Vt(t)
              if (r && c.contains(ar, r.text)) return r
              throw new o(
                "Invalid delimiter: '" +
                  (r ? r.text : JSON.stringify(t)) +
                  "' after '" +
                  e.funcName +
                  "'",
                t
              )
            }
            function or(t) {
              if (!t.body)
                throw new Error(
                  "Bug: The leftright ParseNode wasn't fully parsed."
                )
            }
            Zt({
              type: 'delimsizing',
              names: [
                '\\bigl',
                '\\Bigl',
                '\\biggl',
                '\\Biggl',
                '\\bigr',
                '\\Bigr',
                '\\biggr',
                '\\Biggr',
                '\\bigm',
                '\\Bigm',
                '\\biggm',
                '\\Biggm',
                '\\big',
                '\\Big',
                '\\bigg',
                '\\Bigg',
              ],
              props: { numArgs: 1 },
              handler: function (t, e) {
                var r = ir(e[0], t)
                return {
                  type: 'delimsizing',
                  mode: t.parser.mode,
                  size: nr[t.funcName].size,
                  mclass: nr[t.funcName].mclass,
                  delim: r.text,
                }
              },
              htmlBuilder: function (t, e) {
                return '.' === t.delim
                  ? Pt.makeSpan([t.mclass])
                  : tr(t.delim, t.size, e, t.mode, [t.mclass])
              },
              mathmlBuilder: function (t) {
                var e = []
                '.' !== t.delim && e.push(ge(t.delim, t.mode))
                var r = new fe.MathNode('mo', e)
                return (
                  'mopen' === t.mclass || 'mclose' === t.mclass
                    ? r.setAttribute('fence', 'true')
                    : r.setAttribute('fence', 'false'),
                  r
                )
              },
            }),
              Zt({
                type: 'leftright-right',
                names: ['\\right'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  return {
                    type: 'leftright-right',
                    mode: t.parser.mode,
                    delim: ir(e[0], t).text,
                  }
                },
              }),
              Zt({
                type: 'leftright',
                names: ['\\left'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = ir(e[0], t),
                    n = t.parser
                  ++n.leftrightDepth
                  var a = n.parseExpression(!1)
                  --n.leftrightDepth, n.expect('\\right', !1)
                  var i = Dt(n.parseFunction(), 'leftright-right')
                  return {
                    type: 'leftright',
                    mode: n.mode,
                    body: a,
                    left: r.text,
                    right: i.delim,
                  }
                },
                htmlBuilder: function (t, e) {
                  or(t)
                  for (
                    var r,
                      n,
                      a = ae(t.body, e, !0, ['mopen', 'mclose']),
                      i = 0,
                      o = 0,
                      s = !1,
                      h = 0;
                    h < a.length;
                    h++
                  )
                    a[h].isMiddle
                      ? (s = !0)
                      : ((i = Math.max(a[h].height, i)),
                        (o = Math.max(a[h].depth, o)))
                  if (
                    ((i *= e.sizeMultiplier),
                    (o *= e.sizeMultiplier),
                    (r =
                      '.' === t.left
                        ? he(e, ['mopen'])
                        : rr(t.left, i, o, e, t.mode, ['mopen'])),
                    a.unshift(r),
                    s)
                  )
                    for (var l = 1; l < a.length; l++) {
                      var m = a[l].isMiddle
                      m && (a[l] = rr(m.delim, i, o, m.options, t.mode, []))
                    }
                  return (
                    (n =
                      '.' === t.right
                        ? he(e, ['mclose'])
                        : rr(t.right, i, o, e, t.mode, ['mclose'])),
                    a.push(n),
                    Pt.makeSpan(['minner'], a, e)
                  )
                },
                mathmlBuilder: function (t, e) {
                  or(t)
                  var r = ye(t.body, e)
                  if ('.' !== t.left) {
                    var n = new fe.MathNode('mo', [ge(t.left, t.mode)])
                    n.setAttribute('fence', 'true'), r.unshift(n)
                  }
                  if ('.' !== t.right) {
                    var a = new fe.MathNode('mo', [ge(t.right, t.mode)])
                    a.setAttribute('fence', 'true'), r.push(a)
                  }
                  return xe(r)
                },
              }),
              Zt({
                type: 'middle',
                names: ['\\middle'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = ir(e[0], t)
                  if (!t.parser.leftrightDepth)
                    throw new o('\\middle without preceding \\left', r)
                  return { type: 'middle', mode: t.parser.mode, delim: r.text }
                },
                htmlBuilder: function (t, e) {
                  var r
                  if ('.' === t.delim) r = he(e, [])
                  else {
                    r = tr(t.delim, 1, e, t.mode, [])
                    var n = { delim: t.delim, options: e }
                    r.isMiddle = n
                  }
                  return r
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mo', [ge(t.delim, t.mode)])
                  return r.setAttribute('fence', 'true'), r
                },
              })
            var sr = function (t, e) {
                var r,
                  n,
                  a = Pt.wrapFragment(le(t.body, e), e),
                  i = t.label.substr(1),
                  o = e.sizeMultiplier,
                  s = 0,
                  h = c.isCharacterBox(t.body)
                if ('sout' === i)
                  ((r = Pt.makeSpan(['stretchy', 'sout'])).height =
                    e.fontMetrics().defaultRuleThickness / o),
                    (s = -0.5 * e.fontMetrics().xHeight)
                else {
                  ;/cancel/.test(i)
                    ? h || a.classes.push('cancel-pad')
                    : a.classes.push('boxpad')
                  var l = 0
                  ;(l = /box/.test(i)
                    ? 'colorbox' === i
                      ? 0.3
                      : 0.34
                    : h
                    ? 0.2
                    : 0),
                    (r = Be(a, i, l, e)),
                    (s = a.depth + l),
                    t.backgroundColor &&
                      ((r.style.backgroundColor = t.backgroundColor),
                      t.borderColor && (r.style.borderColor = t.borderColor))
                }
                return (
                  (n = t.backgroundColor
                    ? Pt.makeVList(
                        {
                          positionType: 'individualShift',
                          children: [
                            { type: 'elem', elem: r, shift: s },
                            { type: 'elem', elem: a, shift: 0 },
                          ],
                        },
                        e
                      )
                    : Pt.makeVList(
                        {
                          positionType: 'individualShift',
                          children: [
                            { type: 'elem', elem: a, shift: 0 },
                            {
                              type: 'elem',
                              elem: r,
                              shift: s,
                              wrapperClasses: /cancel/.test(i)
                                ? ['svg-align']
                                : [],
                            },
                          ],
                        },
                        e
                      )),
                  /cancel/.test(i) &&
                    ((n.height = a.height), (n.depth = a.depth)),
                  /cancel/.test(i) && !h
                    ? Pt.makeSpan(['mord', 'cancel-lap'], [n], e)
                    : Pt.makeSpan(['mord'], [n], e)
                )
              },
              hr = function (t, e) {
                var r = new fe.MathNode('menclose', [we(t.body, e)])
                switch (t.label) {
                  case '\\cancel':
                    r.setAttribute('notation', 'updiagonalstrike')
                    break
                  case '\\bcancel':
                    r.setAttribute('notation', 'downdiagonalstrike')
                    break
                  case '\\sout':
                    r.setAttribute('notation', 'horizontalstrike')
                    break
                  case '\\fbox':
                  case '\\fcolorbox':
                    r.setAttribute('notation', 'box')
                    break
                  case '\\xcancel':
                    r.setAttribute(
                      'notation',
                      'updiagonalstrike downdiagonalstrike'
                    )
                }
                return (
                  t.backgroundColor &&
                    r.setAttribute('mathbackground', t.backgroundColor),
                  r
                )
              }
            Zt({
              type: 'enclose',
              names: ['\\colorbox'],
              props: {
                numArgs: 2,
                allowedInText: !0,
                greediness: 3,
                argTypes: ['color', 'text'],
              },
              handler: function (t, e, r) {
                var n = t.parser,
                  a = t.funcName,
                  i = Dt(e[0], 'color-token').color,
                  o = e[1]
                return {
                  type: 'enclose',
                  mode: n.mode,
                  label: a,
                  backgroundColor: i,
                  body: o,
                }
              },
              htmlBuilder: sr,
              mathmlBuilder: hr,
            }),
              Zt({
                type: 'enclose',
                names: ['\\fcolorbox'],
                props: {
                  numArgs: 3,
                  allowedInText: !0,
                  greediness: 3,
                  argTypes: ['color', 'color', 'text'],
                },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = t.funcName,
                    i = Dt(e[0], 'color-token').color,
                    o = Dt(e[1], 'color-token').color,
                    s = e[2]
                  return {
                    type: 'enclose',
                    mode: n.mode,
                    label: a,
                    backgroundColor: o,
                    borderColor: i,
                    body: s,
                  }
                },
                htmlBuilder: sr,
                mathmlBuilder: hr,
              }),
              Zt({
                type: 'enclose',
                names: ['\\fbox'],
                props: { numArgs: 1, argTypes: ['text'], allowedInText: !0 },
                handler: function (t, e) {
                  return {
                    type: 'enclose',
                    mode: t.parser.mode,
                    label: '\\fbox',
                    body: e[0],
                  }
                },
              }),
              Zt({
                type: 'enclose',
                names: ['\\cancel', '\\bcancel', '\\xcancel', '\\sout'],
                props: { numArgs: 1 },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = t.funcName,
                    i = e[0]
                  return { type: 'enclose', mode: n.mode, label: a, body: i }
                },
                htmlBuilder: sr,
                mathmlBuilder: hr,
              })
            var lr = {}
            function mr(t) {
              for (
                var e = t.type,
                  r = t.names,
                  n = t.props,
                  a = t.handler,
                  i = t.htmlBuilder,
                  o = t.mathmlBuilder,
                  s = {
                    type: e,
                    numArgs: n.numArgs || 0,
                    greediness: 1,
                    allowedInText: !1,
                    numOptionalArgs: 0,
                    handler: a,
                  },
                  h = 0;
                h < r.length;
                ++h
              )
                lr[r[h]] = s
              i && (Wt[e] = i), o && (jt[e] = o)
            }
            function cr(t) {
              var e = []
              t.consumeSpaces()
              for (
                var r = t.nextToken.text;
                '\\hline' === r || '\\hdashline' === r;

              )
                t.consume(),
                  e.push('\\hdashline' === r),
                  t.consumeSpaces(),
                  (r = t.nextToken.text)
              return e
            }
            function ur(t, e, r) {
              var n = e.hskipBeforeAndAfter,
                a = e.addJot,
                i = e.cols,
                s = e.arraystretch
              if (
                (t.gullet.beginGroup(), t.gullet.macros.set('\\\\', '\\cr'), !s)
              ) {
                var h = t.gullet.expandMacroAsText('\\arraystretch')
                if (null == h) s = 1
                else if (!(s = parseFloat(h)) || s < 0)
                  throw new o('Invalid \\arraystretch: ' + h)
              }
              var l = [],
                m = [l],
                c = [],
                u = []
              for (u.push(cr(t)); ; ) {
                var d = t.parseExpression(!1, '\\cr')
                ;(d = { type: 'ordgroup', mode: t.mode, body: d }),
                  r &&
                    (d = {
                      type: 'styling',
                      mode: t.mode,
                      style: r,
                      body: [d],
                    }),
                  l.push(d)
                var p = t.nextToken.text
                if ('&' === p) t.consume()
                else {
                  if ('\\end' === p) {
                    1 === l.length &&
                      'styling' === d.type &&
                      0 === d.body[0].body.length &&
                      m.pop(),
                      u.length < m.length + 1 && u.push([])
                    break
                  }
                  if ('\\cr' !== p)
                    throw new o(
                      'Expected & or \\\\ or \\cr or \\end',
                      t.nextToken
                    )
                  var f = Dt(t.parseFunction(), 'cr')
                  c.push(f.size), u.push(cr(t)), (l = []), m.push(l)
                }
              }
              return (
                t.gullet.endGroup(),
                {
                  type: 'array',
                  mode: t.mode,
                  addJot: a,
                  arraystretch: s,
                  body: m,
                  cols: i,
                  rowGaps: c,
                  hskipBeforeAndAfter: n,
                  hLinesBeforeRow: u,
                }
              )
            }
            function dr(t) {
              return 'd' === t.substr(0, 1) ? 'display' : 'text'
            }
            var pr = function (t, e) {
                var r,
                  n,
                  a = t.body.length,
                  i = t.hLinesBeforeRow,
                  s = 0,
                  h = new Array(a),
                  l = [],
                  m = 1 / e.fontMetrics().ptPerEm,
                  u = 5 * m,
                  d = 12 * m,
                  p = 3 * m,
                  f = t.arraystretch * d,
                  g = 0.7 * f,
                  x = 0.3 * f,
                  v = 0
                function y(t) {
                  for (var e = 0; e < t.length; ++e)
                    e > 0 && (v += 0.25), l.push({ pos: v, isDashed: t[e] })
                }
                for (y(i[0]), r = 0; r < t.body.length; ++r) {
                  var b = t.body[r],
                    w = g,
                    k = x
                  s < b.length && (s = b.length)
                  var S = new Array(b.length)
                  for (n = 0; n < b.length; ++n) {
                    var M = le(b[n], e)
                    k < M.depth && (k = M.depth),
                      w < M.height && (w = M.height),
                      (S[n] = M)
                  }
                  var z = t.rowGaps[r],
                    T = 0
                  z && (T = zt(z, e)) > 0 && (k < (T += x) && (k = T), (T = 0)),
                    t.addJot && (k += p),
                    (S.height = w),
                    (S.depth = k),
                    (v += w),
                    (S.pos = v),
                    (v += k + T),
                    (h[r] = S),
                    y(i[r + 1])
                }
                var A,
                  B,
                  C = v / 2 + e.fontMetrics().axisHeight,
                  N = t.cols || [],
                  q = []
                for (n = 0, B = 0; n < s || B < N.length; ++n, ++B) {
                  for (var O = N[B] || {}, E = !0; 'separator' === O.type; ) {
                    if (
                      (E ||
                        (((A = Pt.makeSpan(['arraycolsep'], [])).style.width =
                          e.fontMetrics().doubleRuleSep + 'em'),
                        q.push(A)),
                      '|' === O.separator)
                    ) {
                      var I = Pt.makeSpan(['vertical-separator'], [], e)
                      ;(I.style.height = v + 'em'),
                        (I.style.verticalAlign = -(v - C) + 'em'),
                        q.push(I)
                    } else {
                      if (':' !== O.separator)
                        throw new o('Invalid separator type: ' + O.separator)
                      var R = Pt.makeSpan(
                        ['vertical-separator', 'vs-dashed'],
                        [],
                        e
                      )
                      ;(R.style.height = v + 'em'),
                        (R.style.verticalAlign = -(v - C) + 'em'),
                        q.push(R)
                    }
                    ;(O = N[++B] || {}), (E = !1)
                  }
                  if (!(n >= s)) {
                    var L = void 0
                    ;(n > 0 || t.hskipBeforeAndAfter) &&
                      0 !== (L = c.deflt(O.pregap, u)) &&
                      (((A = Pt.makeSpan(['arraycolsep'], [])).style.width =
                        L + 'em'),
                      q.push(A))
                    var P = []
                    for (r = 0; r < a; ++r) {
                      var D = h[r],
                        H = D[n]
                      if (H) {
                        var F = D.pos - C
                        ;(H.depth = D.depth),
                          (H.height = D.height),
                          P.push({ type: 'elem', elem: H, shift: F })
                      }
                    }
                    ;(P = Pt.makeVList(
                      { positionType: 'individualShift', children: P },
                      e
                    )),
                      (P = Pt.makeSpan(['col-align-' + (O.align || 'c')], [P])),
                      q.push(P),
                      (n < s - 1 || t.hskipBeforeAndAfter) &&
                        0 !== (L = c.deflt(O.postgap, u)) &&
                        (((A = Pt.makeSpan(['arraycolsep'], [])).style.width =
                          L + 'em'),
                        q.push(A))
                  }
                }
                if (((h = Pt.makeSpan(['mtable'], q)), l.length > 0)) {
                  for (
                    var V = Pt.makeLineSpan('hline', e, 0.05),
                      U = Pt.makeLineSpan('hdashline', e, 0.05),
                      G = [{ type: 'elem', elem: h, shift: 0 }];
                    l.length > 0;

                  ) {
                    var _ = l.pop(),
                      X = _.pos - C
                    _.isDashed
                      ? G.push({ type: 'elem', elem: U, shift: X })
                      : G.push({ type: 'elem', elem: V, shift: X })
                  }
                  h = Pt.makeVList(
                    { positionType: 'individualShift', children: G },
                    e
                  )
                }
                return Pt.makeSpan(['mord'], [h], e)
              },
              fr = function (t, e) {
                return new fe.MathNode(
                  'mtable',
                  t.body.map(function (t) {
                    return new fe.MathNode(
                      'mtr',
                      t.map(function (t) {
                        return new fe.MathNode('mtd', [we(t, e)])
                      })
                    )
                  })
                )
              },
              gr = function (t, e) {
                var r,
                  n = [],
                  a = ur(t.parser, { cols: n, addJot: !0 }, 'display'),
                  i = 0,
                  s = { type: 'ordgroup', mode: t.mode, body: [] },
                  h = Ht(e[0], 'ordgroup')
                if (h) {
                  for (var l = '', m = 0; m < h.body.length; m++) {
                    l += Dt(h.body[m], 'textord').text
                  }
                  ;(r = Number(l)), (i = 2 * r)
                }
                var c = !i
                a.body.forEach(function (t) {
                  for (var e = 1; e < t.length; e += 2) {
                    var n = Dt(t[e], 'styling')
                    Dt(n.body[0], 'ordgroup').body.unshift(s)
                  }
                  if (c) i < t.length && (i = t.length)
                  else {
                    var a = t.length / 2
                    if (r < a)
                      throw new o(
                        'Too many math in a row: expected ' +
                          r +
                          ', but got ' +
                          a,
                        t[0]
                      )
                  }
                })
                for (var u = 0; u < i; ++u) {
                  var d = 'r',
                    p = 0
                  u % 2 == 1 ? (d = 'l') : u > 0 && c && (p = 1),
                    (n[u] = { type: 'align', align: d, pregap: p, postgap: 0 })
                }
                return a
              }
            mr({
              type: 'array',
              names: ['array', 'darray'],
              props: { numArgs: 1 },
              handler: function (t, e) {
                var r = {
                  cols: (Vt(e[0]) ? [e[0]] : Dt(e[0], 'ordgroup').body).map(
                    function (t) {
                      var e = (function (t) {
                        var e = Vt(t)
                        if (!e)
                          throw new Error(
                            'Expected node of symbol group type, but got ' +
                              (t ? 'node of type ' + t.type : String(t))
                          )
                        return e
                      })(t).text
                      if (-1 !== 'lcr'.indexOf(e))
                        return { type: 'align', align: e }
                      if ('|' === e)
                        return { type: 'separator', separator: '|' }
                      if (':' === e)
                        return { type: 'separator', separator: ':' }
                      throw new o('Unknown column alignment: ' + e, t)
                    }
                  ),
                  hskipBeforeAndAfter: !0,
                }
                return ur(t.parser, r, dr(t.envName))
              },
              htmlBuilder: pr,
              mathmlBuilder: fr,
            }),
              mr({
                type: 'array',
                names: [
                  'matrix',
                  'pmatrix',
                  'bmatrix',
                  'Bmatrix',
                  'vmatrix',
                  'Vmatrix',
                ],
                props: { numArgs: 0 },
                handler: function (t) {
                  var e = {
                      matrix: null,
                      pmatrix: ['(', ')'],
                      bmatrix: ['[', ']'],
                      Bmatrix: ['\\{', '\\}'],
                      vmatrix: ['|', '|'],
                      Vmatrix: ['\\Vert', '\\Vert'],
                    }[t.envName],
                    r = ur(t.parser, { hskipBeforeAndAfter: !1 }, dr(t.envName))
                  return e
                    ? {
                        type: 'leftright',
                        mode: t.mode,
                        body: [r],
                        left: e[0],
                        right: e[1],
                      }
                    : r
                },
                htmlBuilder: pr,
                mathmlBuilder: fr,
              }),
              mr({
                type: 'array',
                names: ['cases', 'dcases'],
                props: { numArgs: 0 },
                handler: function (t) {
                  var e = ur(
                    t.parser,
                    {
                      arraystretch: 1.2,
                      cols: [
                        { type: 'align', align: 'l', pregap: 0, postgap: 1 },
                        { type: 'align', align: 'l', pregap: 0, postgap: 0 },
                      ],
                    },
                    dr(t.envName)
                  )
                  return {
                    type: 'leftright',
                    mode: t.mode,
                    body: [e],
                    left: '\\{',
                    right: '.',
                  }
                },
                htmlBuilder: pr,
                mathmlBuilder: fr,
              }),
              mr({
                type: 'array',
                names: ['aligned'],
                props: { numArgs: 0 },
                handler: gr,
                htmlBuilder: pr,
                mathmlBuilder: fr,
              }),
              mr({
                type: 'array',
                names: ['gathered'],
                props: { numArgs: 0 },
                handler: function (t) {
                  return ur(
                    t.parser,
                    { cols: [{ type: 'align', align: 'c' }], addJot: !0 },
                    'display'
                  )
                },
                htmlBuilder: pr,
                mathmlBuilder: fr,
              }),
              mr({
                type: 'array',
                names: ['alignedat'],
                props: { numArgs: 1 },
                handler: gr,
                htmlBuilder: pr,
                mathmlBuilder: fr,
              }),
              Zt({
                type: 'text',
                names: ['\\hline', '\\hdashline'],
                props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
                handler: function (t, e) {
                  throw new o(
                    t.funcName + ' valid only within array environment'
                  )
                },
              })
            var xr = lr
            Zt({
              type: 'environment',
              names: ['\\begin', '\\end'],
              props: { numArgs: 1, argTypes: ['text'] },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName,
                  a = e[0]
                if ('ordgroup' !== a.type)
                  throw new o('Invalid environment name', a)
                for (var i = '', s = 0; s < a.body.length; ++s)
                  i += Dt(a.body[s], 'textord').text
                if ('\\begin' === n) {
                  if (!xr.hasOwnProperty(i))
                    throw new o('No such environment: ' + i, a)
                  var h = xr[i],
                    l = r.parseArguments('\\begin{' + i + '}', h),
                    m = l.args,
                    c = l.optArgs,
                    u = { mode: r.mode, envName: i, parser: r },
                    d = h.handler(u, m, c)
                  r.expect('\\end', !1)
                  var p = r.nextToken,
                    f = Dt(r.parseFunction(), 'environment')
                  if (f.name !== i)
                    throw new o(
                      'Mismatch: \\begin{' +
                        i +
                        '} matched by \\end{' +
                        f.name +
                        '}',
                      p
                    )
                  return d
                }
                return {
                  type: 'environment',
                  mode: r.mode,
                  name: i,
                  nameGroup: a,
                }
              },
            })
            var vr = Pt.makeSpan
            function yr(t, e) {
              var r = ae(t.body, e, !0)
              return vr([t.mclass], r, e)
            }
            function br(t, e) {
              var r = ye(t.body, e)
              return fe.newDocumentFragment(r)
            }
            Zt({
              type: 'mclass',
              names: [
                '\\mathord',
                '\\mathbin',
                '\\mathrel',
                '\\mathopen',
                '\\mathclose',
                '\\mathpunct',
                '\\mathinner',
              ],
              props: { numArgs: 1 },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName,
                  a = e[0]
                return {
                  type: 'mclass',
                  mode: r.mode,
                  mclass: 'm' + n.substr(5),
                  body: Jt(a),
                }
              },
              htmlBuilder: yr,
              mathmlBuilder: br,
            })
            var wr = function (t) {
              var e = 'ordgroup' === t.type && t.body.length ? t.body[0] : t
              return 'atom' !== e.type ||
                ('bin' !== e.family && 'rel' !== e.family)
                ? 'mord'
                : 'm' + e.family
            }
            Zt({
              type: 'mclass',
              names: ['\\@binrel'],
              props: { numArgs: 2 },
              handler: function (t, e) {
                return {
                  type: 'mclass',
                  mode: t.parser.mode,
                  mclass: wr(e[0]),
                  body: [e[1]],
                }
              },
            }),
              Zt({
                type: 'mclass',
                names: ['\\stackrel', '\\overset', '\\underset'],
                props: { numArgs: 2 },
                handler: function (t, e) {
                  var r,
                    n = t.parser,
                    a = t.funcName,
                    i = e[1],
                    o = e[0]
                  r = '\\stackrel' !== a ? wr(i) : 'mrel'
                  var s = {
                      type: 'op',
                      mode: i.mode,
                      limits: !0,
                      alwaysHandleSupSub: !0,
                      symbol: !1,
                      suppressBaseShift: '\\stackrel' !== a,
                      body: Jt(i),
                    },
                    h = {
                      type: 'supsub',
                      mode: o.mode,
                      base: s,
                      sup: '\\underset' === a ? null : o,
                      sub: '\\underset' === a ? o : null,
                    }
                  return { type: 'mclass', mode: n.mode, mclass: r, body: [h] }
                },
                htmlBuilder: yr,
                mathmlBuilder: br,
              })
            var kr = function (t, e) {
                var r = t.font,
                  n = e.withFont(r)
                return le(t.body, n)
              },
              Sr = function (t, e) {
                var r = t.font,
                  n = e.withFont(r)
                return we(t.body, n)
              },
              Mr = {
                '\\Bbb': '\\mathbb',
                '\\bold': '\\mathbf',
                '\\frak': '\\mathfrak',
                '\\bm': '\\boldsymbol',
              }
            Zt({
              type: 'font',
              names: [
                '\\mathrm',
                '\\mathit',
                '\\mathbf',
                '\\mathnormal',
                '\\mathbb',
                '\\mathcal',
                '\\mathfrak',
                '\\mathscr',
                '\\mathsf',
                '\\mathtt',
                '\\Bbb',
                '\\bold',
                '\\frak',
              ],
              props: { numArgs: 1, greediness: 2 },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName,
                  a = e[0],
                  i = n
                return (
                  i in Mr && (i = Mr[i]),
                  { type: 'font', mode: r.mode, font: i.slice(1), body: a }
                )
              },
              htmlBuilder: kr,
              mathmlBuilder: Sr,
            }),
              Zt({
                type: 'mclass',
                names: ['\\boldsymbol', '\\bm'],
                props: { numArgs: 1, greediness: 2 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return {
                    type: 'mclass',
                    mode: r.mode,
                    mclass: wr(n),
                    body: [
                      {
                        type: 'font',
                        mode: r.mode,
                        font: 'boldsymbol',
                        body: n,
                      },
                    ],
                  }
                },
              }),
              Zt({
                type: 'font',
                names: ['\\rm', '\\sf', '\\tt', '\\bf', '\\it'],
                props: { numArgs: 0, allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.funcName,
                    a = t.breakOnTokenText,
                    i = r.mode,
                    o = r.parseExpression(!0, a)
                  return {
                    type: 'font',
                    mode: i,
                    font: 'math' + n.slice(1),
                    body: { type: 'ordgroup', mode: r.mode, body: o },
                  }
                },
                htmlBuilder: kr,
                mathmlBuilder: Sr,
              })
            var zr = function (t, e) {
                var r = e.style
                'display' === t.size
                  ? (r = w.DISPLAY)
                  : 'text' === t.size && r.size === w.DISPLAY.size
                  ? (r = w.TEXT)
                  : 'script' === t.size
                  ? (r = w.SCRIPT)
                  : 'scriptscript' === t.size && (r = w.SCRIPTSCRIPT)
                var n,
                  a = r.fracNum(),
                  i = r.fracDen()
                n = e.havingStyle(a)
                var o = le(t.numer, n, e)
                if (t.continued) {
                  var s = 8.5 / e.fontMetrics().ptPerEm,
                    h = 3.5 / e.fontMetrics().ptPerEm
                  ;(o.height = o.height < s ? s : o.height),
                    (o.depth = o.depth < h ? h : o.depth)
                }
                n = e.havingStyle(i)
                var l,
                  m,
                  c,
                  u,
                  d,
                  p,
                  f,
                  g,
                  x,
                  v,
                  y = le(t.denom, n, e)
                if (
                  (t.hasBarLine
                    ? (t.barSize
                        ? ((m = zt(t.barSize, e)),
                          (l = Pt.makeLineSpan('frac-line', e, m)))
                        : (l = Pt.makeLineSpan('frac-line', e)),
                      (m = l.height),
                      (c = l.height))
                    : ((l = null),
                      (m = 0),
                      (c = e.fontMetrics().defaultRuleThickness)),
                  r.size === w.DISPLAY.size
                    ? ((u = e.fontMetrics().num1),
                      (d = m > 0 ? 3 * c : 7 * c),
                      (p = e.fontMetrics().denom1))
                    : (m > 0
                        ? ((u = e.fontMetrics().num2), (d = c))
                        : ((u = e.fontMetrics().num3), (d = 3 * c)),
                      (p = e.fontMetrics().denom2)),
                  l)
                ) {
                  var b = e.fontMetrics().axisHeight
                  u - o.depth - (b + 0.5 * m) < d &&
                    (u += d - (u - o.depth - (b + 0.5 * m))),
                    b - 0.5 * m - (y.height - p) < d &&
                      (p += d - (b - 0.5 * m - (y.height - p)))
                  var k = -(b - 0.5 * m)
                  f = Pt.makeVList(
                    {
                      positionType: 'individualShift',
                      children: [
                        { type: 'elem', elem: y, shift: p },
                        { type: 'elem', elem: l, shift: k },
                        { type: 'elem', elem: o, shift: -u },
                      ],
                    },
                    e
                  )
                } else {
                  var S = u - o.depth - (y.height - p)
                  S < d && ((u += 0.5 * (d - S)), (p += 0.5 * (d - S))),
                    (f = Pt.makeVList(
                      {
                        positionType: 'individualShift',
                        children: [
                          { type: 'elem', elem: y, shift: p },
                          { type: 'elem', elem: o, shift: -u },
                        ],
                      },
                      e
                    ))
                }
                return (
                  (n = e.havingStyle(r)),
                  (f.height *= n.sizeMultiplier / e.sizeMultiplier),
                  (f.depth *= n.sizeMultiplier / e.sizeMultiplier),
                  (g =
                    r.size === w.DISPLAY.size
                      ? e.fontMetrics().delim1
                      : e.fontMetrics().delim2),
                  (x =
                    null == t.leftDelim
                      ? he(e, ['mopen'])
                      : er(t.leftDelim, g, !0, e.havingStyle(r), t.mode, [
                          'mopen',
                        ])),
                  (v = t.continued
                    ? Pt.makeSpan([])
                    : null == t.rightDelim
                    ? he(e, ['mclose'])
                    : er(t.rightDelim, g, !0, e.havingStyle(r), t.mode, [
                        'mclose',
                      ])),
                  Pt.makeSpan(
                    ['mord'].concat(n.sizingClasses(e)),
                    [x, Pt.makeSpan(['mfrac'], [f]), v],
                    e
                  )
                )
              },
              Tr = function (t, e) {
                var r = new fe.MathNode('mfrac', [
                  we(t.numer, e),
                  we(t.denom, e),
                ])
                if (t.hasBarLine) {
                  if (t.barSize) {
                    var n = zt(t.barSize, e)
                    r.setAttribute('linethickness', n + 'em')
                  }
                } else r.setAttribute('linethickness', '0px')
                if (null != t.leftDelim || null != t.rightDelim) {
                  var a = []
                  if (null != t.leftDelim) {
                    var i = new fe.MathNode('mo', [
                      new fe.TextNode(t.leftDelim),
                    ])
                    i.setAttribute('fence', 'true'), a.push(i)
                  }
                  if ((a.push(r), null != t.rightDelim)) {
                    var o = new fe.MathNode('mo', [
                      new fe.TextNode(t.rightDelim),
                    ])
                    o.setAttribute('fence', 'true'), a.push(o)
                  }
                  return xe(a)
                }
                return r
              }
            Zt({
              type: 'genfrac',
              names: [
                '\\cfrac',
                '\\dfrac',
                '\\frac',
                '\\tfrac',
                '\\dbinom',
                '\\binom',
                '\\tbinom',
                '\\\\atopfrac',
                '\\\\bracefrac',
                '\\\\brackfrac',
              ],
              props: { numArgs: 2, greediness: 2 },
              handler: function (t, e) {
                var r,
                  n = t.parser,
                  a = t.funcName,
                  i = e[0],
                  o = e[1],
                  s = null,
                  h = null,
                  l = 'auto'
                switch (a) {
                  case '\\cfrac':
                  case '\\dfrac':
                  case '\\frac':
                  case '\\tfrac':
                    r = !0
                    break
                  case '\\\\atopfrac':
                    r = !1
                    break
                  case '\\dbinom':
                  case '\\binom':
                  case '\\tbinom':
                    ;(r = !1), (s = '('), (h = ')')
                    break
                  case '\\\\bracefrac':
                    ;(r = !1), (s = '\\{'), (h = '\\}')
                    break
                  case '\\\\brackfrac':
                    ;(r = !1), (s = '['), (h = ']')
                    break
                  default:
                    throw new Error('Unrecognized genfrac command')
                }
                switch (a) {
                  case '\\cfrac':
                  case '\\dfrac':
                  case '\\dbinom':
                    l = 'display'
                    break
                  case '\\tfrac':
                  case '\\tbinom':
                    l = 'text'
                }
                return {
                  type: 'genfrac',
                  mode: n.mode,
                  continued: '\\cfrac' === a,
                  numer: i,
                  denom: o,
                  hasBarLine: r,
                  leftDelim: s,
                  rightDelim: h,
                  size: l,
                  barSize: null,
                }
              },
              htmlBuilder: zr,
              mathmlBuilder: Tr,
            }),
              Zt({
                type: 'infix',
                names: ['\\over', '\\choose', '\\atop', '\\brace', '\\brack'],
                props: { numArgs: 0, infix: !0 },
                handler: function (t) {
                  var e,
                    r = t.parser,
                    n = t.funcName,
                    a = t.token
                  switch (n) {
                    case '\\over':
                      e = '\\frac'
                      break
                    case '\\choose':
                      e = '\\binom'
                      break
                    case '\\atop':
                      e = '\\\\atopfrac'
                      break
                    case '\\brace':
                      e = '\\\\bracefrac'
                      break
                    case '\\brack':
                      e = '\\\\brackfrac'
                      break
                    default:
                      throw new Error('Unrecognized infix genfrac command')
                  }
                  return {
                    type: 'infix',
                    mode: r.mode,
                    replaceWith: e,
                    token: a,
                  }
                },
              })
            var Ar = ['display', 'text', 'script', 'scriptscript'],
              Br = function (t) {
                var e = null
                return t.length > 0 && (e = '.' === (e = t) ? null : e), e
              }
            Zt({
              type: 'genfrac',
              names: ['\\genfrac'],
              props: {
                numArgs: 6,
                greediness: 6,
                argTypes: ['math', 'math', 'size', 'text', 'math', 'math'],
              },
              handler: function (t, e) {
                var r = t.parser,
                  n = e[4],
                  a = e[5],
                  i = Ht(e[0], 'atom')
                i && (i = Ft(e[0], 'open'))
                var o = i ? Br(i.text) : null,
                  s = Ht(e[1], 'atom')
                s && (s = Ft(e[1], 'close'))
                var h,
                  l = s ? Br(s.text) : null,
                  m = Dt(e[2], 'size'),
                  c = null
                h = !!m.isBlank || (c = m.value).number > 0
                var u = 'auto',
                  d = Ht(e[3], 'ordgroup')
                if (d) {
                  if (d.body.length > 0) {
                    var p = Dt(d.body[0], 'textord')
                    u = Ar[Number(p.text)]
                  }
                } else (d = Dt(e[3], 'textord')), (u = Ar[Number(d.text)])
                return {
                  type: 'genfrac',
                  mode: r.mode,
                  numer: n,
                  denom: a,
                  continued: !1,
                  hasBarLine: h,
                  barSize: c,
                  leftDelim: o,
                  rightDelim: l,
                  size: u,
                }
              },
              htmlBuilder: zr,
              mathmlBuilder: Tr,
            }),
              Zt({
                type: 'infix',
                names: ['\\above'],
                props: { numArgs: 1, argTypes: ['size'], infix: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = (t.funcName, t.token)
                  return {
                    type: 'infix',
                    mode: r.mode,
                    replaceWith: '\\\\abovefrac',
                    size: Dt(e[0], 'size').value,
                    token: n,
                  }
                },
              }),
              Zt({
                type: 'genfrac',
                names: ['\\\\abovefrac'],
                props: { numArgs: 3, argTypes: ['math', 'size', 'math'] },
                handler: function (t, e) {
                  var r = t.parser,
                    n = (t.funcName, e[0]),
                    a = (function (t) {
                      if (!t)
                        throw new Error(
                          'Expected non-null, but got ' + String(t)
                        )
                      return t
                    })(Dt(e[1], 'infix').size),
                    i = e[2],
                    o = a.number > 0
                  return {
                    type: 'genfrac',
                    mode: r.mode,
                    numer: n,
                    denom: i,
                    continued: !1,
                    hasBarLine: o,
                    barSize: a,
                    leftDelim: null,
                    rightDelim: null,
                    size: 'auto',
                  }
                },
                htmlBuilder: zr,
                mathmlBuilder: Tr,
              })
            var Cr = function (t, e) {
              var r,
                n,
                a = e.style,
                i = Ht(t, 'supsub')
              i
                ? ((r = i.sup
                    ? le(i.sup, e.havingStyle(a.sup()), e)
                    : le(i.sub, e.havingStyle(a.sub()), e)),
                  (n = Dt(i.base, 'horizBrace')))
                : (n = Dt(t, 'horizBrace'))
              var o,
                s = le(n.base, e.havingBaseStyle(w.DISPLAY)),
                h = Ne(n, e)
              if (
                (n.isOver
                  ? (o = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [
                          { type: 'elem', elem: s },
                          { type: 'kern', size: 0.1 },
                          { type: 'elem', elem: h },
                        ],
                      },
                      e
                    )).children[0].children[0].children[1].classes.push(
                      'svg-align'
                    )
                  : (o = Pt.makeVList(
                      {
                        positionType: 'bottom',
                        positionData: s.depth + 0.1 + h.height,
                        children: [
                          { type: 'elem', elem: h },
                          { type: 'kern', size: 0.1 },
                          { type: 'elem', elem: s },
                        ],
                      },
                      e
                    )).children[0].children[0].children[0].classes.push(
                      'svg-align'
                    ),
                r)
              ) {
                var l = Pt.makeSpan(
                  ['mord', n.isOver ? 'mover' : 'munder'],
                  [o],
                  e
                )
                o = n.isOver
                  ? Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [
                          { type: 'elem', elem: l },
                          { type: 'kern', size: 0.2 },
                          { type: 'elem', elem: r },
                        ],
                      },
                      e
                    )
                  : Pt.makeVList(
                      {
                        positionType: 'bottom',
                        positionData: l.depth + 0.2 + r.height + r.depth,
                        children: [
                          { type: 'elem', elem: r },
                          { type: 'kern', size: 0.2 },
                          { type: 'elem', elem: l },
                        ],
                      },
                      e
                    )
              }
              return Pt.makeSpan(
                ['mord', n.isOver ? 'mover' : 'munder'],
                [o],
                e
              )
            }
            Zt({
              type: 'horizBrace',
              names: ['\\overbrace', '\\underbrace'],
              props: { numArgs: 1 },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName
                return {
                  type: 'horizBrace',
                  mode: r.mode,
                  label: n,
                  isOver: /^\\over/.test(n),
                  base: e[0],
                }
              },
              htmlBuilder: Cr,
              mathmlBuilder: function (t, e) {
                var r = Ce(t.label)
                return new fe.MathNode(t.isOver ? 'mover' : 'munder', [
                  we(t.base, e),
                  r,
                ])
              },
            }),
              Zt({
                type: 'href',
                names: ['\\href'],
                props: {
                  numArgs: 2,
                  argTypes: ['url', 'original'],
                  allowedInText: !0,
                },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[1],
                    a = Dt(e[0], 'url').url
                  return { type: 'href', mode: r.mode, href: a, body: Jt(n) }
                },
                htmlBuilder: function (t, e) {
                  var r = ae(t.body, e, !1)
                  return Pt.makeAnchor(t.href, [], r, e)
                },
                mathmlBuilder: function (t, e) {
                  var r = be(t.body, e)
                  return (
                    r instanceof de || (r = new de('mrow', [r])),
                    r.setAttribute('href', t.href),
                    r
                  )
                },
              }),
              Zt({
                type: 'href',
                names: ['\\url'],
                props: { numArgs: 1, argTypes: ['url'], allowedInText: !0 },
                handler: function (t, e) {
                  for (
                    var r = t.parser, n = Dt(e[0], 'url').url, a = [], i = 0;
                    i < n.length;
                    i++
                  ) {
                    var o = n[i]
                    '~' === o && (o = '\\textasciitilde'),
                      a.push({ type: 'textord', mode: 'text', text: o })
                  }
                  var s = {
                    type: 'text',
                    mode: r.mode,
                    font: '\\texttt',
                    body: a,
                  }
                  return { type: 'href', mode: r.mode, href: n, body: Jt(s) }
                },
              }),
              Zt({
                type: 'htmlmathml',
                names: ['\\html@mathml'],
                props: { numArgs: 2, allowedInText: !0 },
                handler: function (t, e) {
                  return {
                    type: 'htmlmathml',
                    mode: t.parser.mode,
                    html: Jt(e[0]),
                    mathml: Jt(e[1]),
                  }
                },
                htmlBuilder: function (t, e) {
                  var r = ae(t.html, e, !1)
                  return Pt.makeFragment(r)
                },
                mathmlBuilder: function (t, e) {
                  return be(t.mathml, e)
                },
              }),
              Zt({
                type: 'kern',
                names: ['\\kern', '\\mkern', '\\hskip', '\\mskip'],
                props: { numArgs: 1, argTypes: ['size'], allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.funcName,
                    a = Dt(e[0], 'size')
                  if (r.settings.strict) {
                    var i = 'm' === n[1],
                      o = 'mu' === a.value.unit
                    i
                      ? (o ||
                          r.settings.reportNonstrict(
                            'mathVsTextUnits',
                            "LaTeX's " +
                              n +
                              ' supports only mu units, not ' +
                              a.value.unit +
                              ' units'
                          ),
                        'math' !== r.mode &&
                          r.settings.reportNonstrict(
                            'mathVsTextUnits',
                            "LaTeX's " + n + ' works only in math mode'
                          ))
                      : o &&
                        r.settings.reportNonstrict(
                          'mathVsTextUnits',
                          "LaTeX's " + n + " doesn't support mu units"
                        )
                  }
                  return { type: 'kern', mode: r.mode, dimension: a.value }
                },
                htmlBuilder: function (t, e) {
                  return Pt.makeGlue(t.dimension, e)
                },
                mathmlBuilder: function (t, e) {
                  var r = zt(t.dimension, e)
                  return new fe.SpaceNode(r)
                },
              }),
              Zt({
                type: 'lap',
                names: ['\\mathllap', '\\mathrlap', '\\mathclap'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = t.funcName,
                    a = e[0]
                  return {
                    type: 'lap',
                    mode: r.mode,
                    alignment: n.slice(5),
                    body: a,
                  }
                },
                htmlBuilder: function (t, e) {
                  var r
                  'clap' === t.alignment
                    ? ((r = Pt.makeSpan([], [le(t.body, e)])),
                      (r = Pt.makeSpan(['inner'], [r], e)))
                    : (r = Pt.makeSpan(['inner'], [le(t.body, e)]))
                  var n = Pt.makeSpan(['fix'], []),
                    a = Pt.makeSpan([t.alignment], [r, n], e),
                    i = Pt.makeSpan(['strut'])
                  return (
                    (i.style.height = a.height + a.depth + 'em'),
                    (i.style.verticalAlign = -a.depth + 'em'),
                    a.children.unshift(i),
                    (a = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [{ type: 'elem', elem: a }],
                      },
                      e
                    )),
                    Pt.makeSpan(['mord'], [a], e)
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mpadded', [we(t.body, e)])
                  if ('rlap' !== t.alignment) {
                    var n = 'llap' === t.alignment ? '-1' : '-0.5'
                    r.setAttribute('lspace', n + 'width')
                  }
                  return r.setAttribute('width', '0px'), r
                },
              }),
              Zt({
                type: 'styling',
                names: ['\\(', '$'],
                props: {
                  numArgs: 0,
                  allowedInText: !0,
                  allowedInMath: !1,
                  consumeMode: 'math',
                },
                handler: function (t, e) {
                  var r = t.funcName,
                    n = t.parser,
                    a = n.mode
                  n.switchMode('math')
                  var i = '\\(' === r ? '\\)' : '$',
                    o = n.parseExpression(!1, i)
                  return (
                    n.expect(i, !1),
                    n.switchMode(a),
                    n.consume(),
                    { type: 'styling', mode: n.mode, style: 'text', body: o }
                  )
                },
              }),
              Zt({
                type: 'text',
                names: ['\\)', '\\]'],
                props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
                handler: function (t, e) {
                  throw new o('Mismatched ' + t.funcName)
                },
              })
            var Nr = function (t, e) {
              switch (e.style.size) {
                case w.DISPLAY.size:
                  return t.display
                case w.TEXT.size:
                  return t.text
                case w.SCRIPT.size:
                  return t.script
                case w.SCRIPTSCRIPT.size:
                  return t.scriptscript
                default:
                  return t.text
              }
            }
            Zt({
              type: 'mathchoice',
              names: ['\\mathchoice'],
              props: { numArgs: 4 },
              handler: function (t, e) {
                return {
                  type: 'mathchoice',
                  mode: t.parser.mode,
                  display: Jt(e[0]),
                  text: Jt(e[1]),
                  script: Jt(e[2]),
                  scriptscript: Jt(e[3]),
                }
              },
              htmlBuilder: function (t, e) {
                var r = Nr(t, e),
                  n = ae(r, e, !1)
                return Pt.makeFragment(n)
              },
              mathmlBuilder: function (t, e) {
                var r = Nr(t, e)
                return be(r, e)
              },
            })
            var qr = function (t, e) {
                var r,
                  n,
                  a,
                  i = !1,
                  o = Ht(t, 'supsub')
                o
                  ? ((r = o.sup), (n = o.sub), (a = Dt(o.base, 'op')), (i = !0))
                  : (a = Dt(t, 'op'))
                var s,
                  h = e.style,
                  l = !1
                if (
                  (h.size === w.DISPLAY.size &&
                    a.symbol &&
                    !c.contains(['\\smallint'], a.name) &&
                    (l = !0),
                  a.symbol)
                ) {
                  var m = l ? 'Size2-Regular' : 'Size1-Regular',
                    u = ''
                  if (
                    (('\\oiint' !== a.name && '\\oiiint' !== a.name) ||
                      ((u = a.name.substr(1)),
                      (a.name = 'oiint' === u ? '\\iint' : '\\iiint')),
                    (s = Pt.makeSymbol(a.name, m, 'math', e, [
                      'mop',
                      'op-symbol',
                      l ? 'large-op' : 'small-op',
                    ])),
                    u.length > 0)
                  ) {
                    var d = s.italic,
                      p = Pt.staticSvg(u + 'Size' + (l ? '2' : '1'), e)
                    ;(s = Pt.makeVList(
                      {
                        positionType: 'individualShift',
                        children: [
                          { type: 'elem', elem: s, shift: 0 },
                          { type: 'elem', elem: p, shift: l ? 0.08 : 0 },
                        ],
                      },
                      e
                    )),
                      (a.name = '\\' + u),
                      s.classes.unshift('mop'),
                      (s.italic = d)
                  }
                } else if (a.body) {
                  var f = ae(a.body, e, !0)
                  1 === f.length && f[0] instanceof I
                    ? ((s = f[0]).classes[0] = 'mop')
                    : (s = Pt.makeSpan(['mop'], Pt.tryCombineChars(f), e))
                } else {
                  for (var g = [], x = 1; x < a.name.length; x++)
                    g.push(Pt.mathsym(a.name[x], a.mode))
                  s = Pt.makeSpan(['mop'], g, e)
                }
                var v = 0,
                  y = 0
                if (
                  ((s instanceof I ||
                    '\\oiint' === a.name ||
                    '\\oiiint' === a.name) &&
                    !a.suppressBaseShift &&
                    ((v =
                      (s.height - s.depth) / 2 - e.fontMetrics().axisHeight),
                    (y = s.italic)),
                  i)
                ) {
                  var b, k, S
                  if (((s = Pt.makeSpan([], [s])), r)) {
                    var M = le(r, e.havingStyle(h.sup()), e)
                    k = {
                      elem: M,
                      kern: Math.max(
                        e.fontMetrics().bigOpSpacing1,
                        e.fontMetrics().bigOpSpacing3 - M.depth
                      ),
                    }
                  }
                  if (n) {
                    var z = le(n, e.havingStyle(h.sub()), e)
                    b = {
                      elem: z,
                      kern: Math.max(
                        e.fontMetrics().bigOpSpacing2,
                        e.fontMetrics().bigOpSpacing4 - z.height
                      ),
                    }
                  }
                  if (k && b) {
                    var T =
                      e.fontMetrics().bigOpSpacing5 +
                      b.elem.height +
                      b.elem.depth +
                      b.kern +
                      s.depth +
                      v
                    S = Pt.makeVList(
                      {
                        positionType: 'bottom',
                        positionData: T,
                        children: [
                          { type: 'kern', size: e.fontMetrics().bigOpSpacing5 },
                          { type: 'elem', elem: b.elem, marginLeft: -y + 'em' },
                          { type: 'kern', size: b.kern },
                          { type: 'elem', elem: s },
                          { type: 'kern', size: k.kern },
                          { type: 'elem', elem: k.elem, marginLeft: y + 'em' },
                          { type: 'kern', size: e.fontMetrics().bigOpSpacing5 },
                        ],
                      },
                      e
                    )
                  } else if (b) {
                    var A = s.height - v
                    S = Pt.makeVList(
                      {
                        positionType: 'top',
                        positionData: A,
                        children: [
                          { type: 'kern', size: e.fontMetrics().bigOpSpacing5 },
                          { type: 'elem', elem: b.elem, marginLeft: -y + 'em' },
                          { type: 'kern', size: b.kern },
                          { type: 'elem', elem: s },
                        ],
                      },
                      e
                    )
                  } else {
                    if (!k) return s
                    var B = s.depth + v
                    S = Pt.makeVList(
                      {
                        positionType: 'bottom',
                        positionData: B,
                        children: [
                          { type: 'elem', elem: s },
                          { type: 'kern', size: k.kern },
                          { type: 'elem', elem: k.elem, marginLeft: y + 'em' },
                          { type: 'kern', size: e.fontMetrics().bigOpSpacing5 },
                        ],
                      },
                      e
                    )
                  }
                  return Pt.makeSpan(['mop', 'op-limits'], [S], e)
                }
                return (
                  v &&
                    ((s.style.position = 'relative'), (s.style.top = v + 'em')),
                  s
                )
              },
              Or = function (t, e) {
                var r
                if (t.symbol) r = new de('mo', [ge(t.name, t.mode)])
                else {
                  if (!t.body)
                    return ue([
                      (r = new de('mi', [new pe(t.name.slice(1))])),
                      new de('mo', [ge('⁡', 'text')]),
                    ])
                  r = new de('mo', ye(t.body, e))
                }
                return r
              },
              Er = {
                '∏': '\\prod',
                '∐': '\\coprod',
                '∑': '\\sum',
                '⋀': '\\bigwedge',
                '⋁': '\\bigvee',
                '⋂': '\\bigcap',
                '⋃': '\\bigcup',
                '⨀': '\\bigodot',
                '⨁': '\\bigoplus',
                '⨂': '\\bigotimes',
                '⨄': '\\biguplus',
                '⨆': '\\bigsqcup',
              }
            Zt({
              type: 'op',
              names: [
                '\\coprod',
                '\\bigvee',
                '\\bigwedge',
                '\\biguplus',
                '\\bigcap',
                '\\bigcup',
                '\\intop',
                '\\prod',
                '\\sum',
                '\\bigotimes',
                '\\bigoplus',
                '\\bigodot',
                '\\bigsqcup',
                '\\smallint',
                '∏',
                '∐',
                '∑',
                '⋀',
                '⋁',
                '⋂',
                '⋃',
                '⨀',
                '⨁',
                '⨂',
                '⨄',
                '⨆',
              ],
              props: { numArgs: 0 },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName
                return (
                  1 === n.length && (n = Er[n]),
                  { type: 'op', mode: r.mode, limits: !0, symbol: !0, name: n }
                )
              },
              htmlBuilder: qr,
              mathmlBuilder: Or,
            }),
              Zt({
                type: 'op',
                names: ['\\mathop'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return {
                    type: 'op',
                    mode: r.mode,
                    limits: !1,
                    symbol: !1,
                    body: Jt(n),
                  }
                },
                htmlBuilder: qr,
                mathmlBuilder: Or,
              })
            var Ir = {
              '∫': '\\int',
              '∬': '\\iint',
              '∭': '\\iiint',
              '∮': '\\oint',
              '∯': '\\oiint',
              '∰': '\\oiiint',
            }
            function Rr(t, e, r) {
              for (
                var n = ae(t, e, !1),
                  a = e.sizeMultiplier / r.sizeMultiplier,
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i].classes.indexOf('sizing')
                o < 0
                  ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(r))
                  : n[i].classes[o + 1] === 'reset-size' + e.size &&
                    (n[i].classes[o + 1] = 'reset-size' + r.size),
                  (n[i].height *= a),
                  (n[i].depth *= a)
              }
              return Pt.makeFragment(n)
            }
            Zt({
              type: 'op',
              names: [
                '\\arcsin',
                '\\arccos',
                '\\arctan',
                '\\arctg',
                '\\arcctg',
                '\\arg',
                '\\ch',
                '\\cos',
                '\\cosec',
                '\\cosh',
                '\\cot',
                '\\cotg',
                '\\coth',
                '\\csc',
                '\\ctg',
                '\\cth',
                '\\deg',
                '\\dim',
                '\\exp',
                '\\hom',
                '\\ker',
                '\\lg',
                '\\ln',
                '\\log',
                '\\sec',
                '\\sin',
                '\\sinh',
                '\\sh',
                '\\tan',
                '\\tanh',
                '\\tg',
                '\\th',
              ],
              props: { numArgs: 0 },
              handler: function (t) {
                var e = t.parser,
                  r = t.funcName
                return {
                  type: 'op',
                  mode: e.mode,
                  limits: !1,
                  symbol: !1,
                  name: r,
                }
              },
              htmlBuilder: qr,
              mathmlBuilder: Or,
            }),
              Zt({
                type: 'op',
                names: [
                  '\\det',
                  '\\gcd',
                  '\\inf',
                  '\\lim',
                  '\\max',
                  '\\min',
                  '\\Pr',
                  '\\sup',
                ],
                props: { numArgs: 0 },
                handler: function (t) {
                  var e = t.parser,
                    r = t.funcName
                  return {
                    type: 'op',
                    mode: e.mode,
                    limits: !0,
                    symbol: !1,
                    name: r,
                  }
                },
                htmlBuilder: qr,
                mathmlBuilder: Or,
              }),
              Zt({
                type: 'op',
                names: [
                  '\\int',
                  '\\iint',
                  '\\iiint',
                  '\\oint',
                  '\\oiint',
                  '\\oiiint',
                  '∫',
                  '∬',
                  '∭',
                  '∮',
                  '∯',
                  '∰',
                ],
                props: { numArgs: 0 },
                handler: function (t) {
                  var e = t.parser,
                    r = t.funcName
                  return (
                    1 === r.length && (r = Ir[r]),
                    {
                      type: 'op',
                      mode: e.mode,
                      limits: !1,
                      symbol: !0,
                      name: r,
                    }
                  )
                },
                htmlBuilder: qr,
                mathmlBuilder: Or,
              }),
              Zt({
                type: 'operatorname',
                names: ['\\operatorname'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return { type: 'operatorname', mode: r.mode, body: Jt(n) }
                },
                htmlBuilder: function (t, e) {
                  if (t.body.length > 0) {
                    for (
                      var r = t.body.map(function (t) {
                          var e = t.text
                          return 'string' == typeof e
                            ? { type: 'textord', mode: t.mode, text: e }
                            : t
                        }),
                        n = ae(r, e.withFont('mathrm'), !0),
                        a = 0;
                      a < n.length;
                      a++
                    ) {
                      var i = n[a]
                      i instanceof I &&
                        (i.text = i.text
                          .replace(/\u2212/, '-')
                          .replace(/\u2217/, '*'))
                    }
                    return Pt.makeSpan(['mop'], n, e)
                  }
                  return Pt.makeSpan(['mop'], [], e)
                },
                mathmlBuilder: function (t, e) {
                  for (
                    var r = ye(t.body, e.withFont('mathrm')), n = !0, a = 0;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a]
                    if (i instanceof fe.SpaceNode);
                    else if (i instanceof fe.MathNode)
                      switch (i.type) {
                        case 'mi':
                        case 'mn':
                        case 'ms':
                        case 'mspace':
                        case 'mtext':
                          break
                        case 'mo':
                          var o = i.children[0]
                          1 === i.children.length && o instanceof fe.TextNode
                            ? (o.text = o.text
                                .replace(/\u2212/, '-')
                                .replace(/\u2217/, '*'))
                            : (n = !1)
                          break
                        default:
                          n = !1
                      }
                    else n = !1
                  }
                  if (n) {
                    var s = r
                      .map(function (t) {
                        return t.toText()
                      })
                      .join('')
                    r = [new fe.TextNode(s)]
                  }
                  var h = new fe.MathNode('mi', r)
                  h.setAttribute('mathvariant', 'normal')
                  var l = new fe.MathNode('mo', [ge('⁡', 'text')])
                  return fe.newDocumentFragment([h, l])
                },
              }),
              Kt({
                type: 'ordgroup',
                htmlBuilder: function (t, e) {
                  return t.semisimple
                    ? Pt.makeFragment(ae(t.body, e, !1))
                    : Pt.makeSpan(['mord'], ae(t.body, e, !0), e)
                },
                mathmlBuilder: function (t, e) {
                  return be(t.body, e)
                },
              }),
              Zt({
                type: 'overline',
                names: ['\\overline'],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return { type: 'overline', mode: r.mode, body: n }
                },
                htmlBuilder: function (t, e) {
                  var r = le(t.body, e.havingCrampedStyle()),
                    n = Pt.makeLineSpan('overline-line', e),
                    a = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [
                          { type: 'elem', elem: r },
                          { type: 'kern', size: 3 * n.height },
                          { type: 'elem', elem: n },
                          { type: 'kern', size: n.height },
                        ],
                      },
                      e
                    )
                  return Pt.makeSpan(['mord', 'overline'], [a], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mo', [new fe.TextNode('‾')])
                  r.setAttribute('stretchy', 'true')
                  var n = new fe.MathNode('mover', [we(t.body, e), r])
                  return n.setAttribute('accent', 'true'), n
                },
              }),
              Zt({
                type: 'phantom',
                names: ['\\phantom'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return { type: 'phantom', mode: r.mode, body: Jt(n) }
                },
                htmlBuilder: function (t, e) {
                  var r = ae(t.body, e.withPhantom(), !1)
                  return Pt.makeFragment(r)
                },
                mathmlBuilder: function (t, e) {
                  var r = ye(t.body, e)
                  return new fe.MathNode('mphantom', r)
                },
              }),
              Zt({
                type: 'hphantom',
                names: ['\\hphantom'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return { type: 'hphantom', mode: r.mode, body: n }
                },
                htmlBuilder: function (t, e) {
                  var r = Pt.makeSpan([], [le(t.body, e.withPhantom())])
                  if (((r.height = 0), (r.depth = 0), r.children))
                    for (var n = 0; n < r.children.length; n++)
                      (r.children[n].height = 0), (r.children[n].depth = 0)
                  return (
                    (r = Pt.makeVList(
                      {
                        positionType: 'firstBaseline',
                        children: [{ type: 'elem', elem: r }],
                      },
                      e
                    )),
                    Pt.makeSpan(['mord'], [r], e)
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r = ye(Jt(t.body), e),
                    n = new fe.MathNode('mphantom', r)
                  return n.setAttribute('height', '0px'), n
                },
              }),
              Zt({
                type: 'vphantom',
                names: ['\\vphantom'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  var r = t.parser,
                    n = e[0]
                  return { type: 'vphantom', mode: r.mode, body: n }
                },
                htmlBuilder: function (t, e) {
                  var r = Pt.makeSpan(['inner'], [le(t.body, e.withPhantom())]),
                    n = Pt.makeSpan(['fix'], [])
                  return Pt.makeSpan(['mord', 'rlap'], [r, n], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = ye(Jt(t.body), e),
                    n = new fe.MathNode('mphantom', r)
                  return n.setAttribute('width', '0px'), n
                },
              })
            var Lr = [
                '\\tiny',
                '\\sixptsize',
                '\\scriptsize',
                '\\footnotesize',
                '\\small',
                '\\normalsize',
                '\\large',
                '\\Large',
                '\\LARGE',
                '\\huge',
                '\\Huge',
              ],
              Pr = function (t, e) {
                var r = e.havingSize(t.size)
                return Rr(t.body, r, e)
              }
            Zt({
              type: 'sizing',
              names: Lr,
              props: { numArgs: 0, allowedInText: !0 },
              handler: function (t, e) {
                var r = t.breakOnTokenText,
                  n = t.funcName,
                  a = t.parser,
                  i = a.parseExpression(!1, r)
                return {
                  type: 'sizing',
                  mode: a.mode,
                  size: Lr.indexOf(n) + 1,
                  body: i,
                }
              },
              htmlBuilder: Pr,
              mathmlBuilder: function (t, e) {
                var r = e.havingSize(t.size),
                  n = ye(t.body, r),
                  a = new fe.MathNode('mstyle', n)
                return a.setAttribute('mathsize', r.sizeMultiplier + 'em'), a
              },
            }),
              Zt({
                type: 'raisebox',
                names: ['\\raisebox'],
                props: {
                  numArgs: 2,
                  argTypes: ['size', 'text'],
                  allowedInText: !0,
                },
                handler: function (t, e) {
                  var r = t.parser,
                    n = Dt(e[0], 'size').value,
                    a = e[1]
                  return { type: 'raisebox', mode: r.mode, dy: n, body: a }
                },
                htmlBuilder: function (t, e) {
                  var r = {
                      type: 'text',
                      mode: t.mode,
                      body: Jt(t.body),
                      font: 'mathrm',
                    },
                    n = { type: 'sizing', mode: t.mode, body: [r], size: 6 },
                    a = Pr(n, e),
                    i = zt(t.dy, e)
                  return Pt.makeVList(
                    {
                      positionType: 'shift',
                      positionData: -i,
                      children: [{ type: 'elem', elem: a }],
                    },
                    e
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mpadded', [we(t.body, e)]),
                    n = t.dy.number + t.dy.unit
                  return r.setAttribute('voffset', n), r
                },
              }),
              Zt({
                type: 'rule',
                names: ['\\rule'],
                props: {
                  numArgs: 2,
                  numOptionalArgs: 1,
                  argTypes: ['size', 'size', 'size'],
                },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = r[0],
                    i = Dt(e[0], 'size'),
                    o = Dt(e[1], 'size')
                  return {
                    type: 'rule',
                    mode: n.mode,
                    shift: a && Dt(a, 'size').value,
                    width: i.value,
                    height: o.value,
                  }
                },
                htmlBuilder: function (t, e) {
                  var r = Pt.makeSpan(['mord', 'rule'], [], e),
                    n = 0
                  t.shift && (n = zt(t.shift, e))
                  var a = zt(t.width, e),
                    i = zt(t.height, e)
                  return (
                    (r.style.borderRightWidth = a + 'em'),
                    (r.style.borderTopWidth = i + 'em'),
                    (r.style.bottom = n + 'em'),
                    (r.width = a),
                    (r.height = i + n),
                    (r.depth = -n),
                    (r.maxFontSize = 1.125 * i * e.sizeMultiplier),
                    r
                  )
                },
                mathmlBuilder: function (t, e) {
                  return new fe.MathNode('mrow')
                },
              }),
              Zt({
                type: 'smash',
                names: ['\\smash'],
                props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = !1,
                    i = !1,
                    o = r[0] && Dt(r[0], 'ordgroup')
                  if (o)
                    for (var s = '', h = 0; h < o.body.length; ++h) {
                      if ('t' === (s = o.body[h].text)) a = !0
                      else {
                        if ('b' !== s) {
                          ;(a = !1), (i = !1)
                          break
                        }
                        i = !0
                      }
                    }
                  else (a = !0), (i = !0)
                  var l = e[0]
                  return {
                    type: 'smash',
                    mode: n.mode,
                    body: l,
                    smashHeight: a,
                    smashDepth: i,
                  }
                },
                htmlBuilder: function (t, e) {
                  var r = Pt.makeSpan([], [le(t.body, e)])
                  if (!t.smashHeight && !t.smashDepth) return r
                  if (t.smashHeight && ((r.height = 0), r.children))
                    for (var n = 0; n < r.children.length; n++)
                      r.children[n].height = 0
                  if (t.smashDepth && ((r.depth = 0), r.children))
                    for (var a = 0; a < r.children.length; a++)
                      r.children[a].depth = 0
                  var i = Pt.makeVList(
                    {
                      positionType: 'firstBaseline',
                      children: [{ type: 'elem', elem: r }],
                    },
                    e
                  )
                  return Pt.makeSpan(['mord'], [i], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mpadded', [we(t.body, e)])
                  return (
                    t.smashHeight && r.setAttribute('height', '0px'),
                    t.smashDepth && r.setAttribute('depth', '0px'),
                    r
                  )
                },
              }),
              Zt({
                type: 'sqrt',
                names: ['\\sqrt'],
                props: { numArgs: 1, numOptionalArgs: 1 },
                handler: function (t, e, r) {
                  var n = t.parser,
                    a = r[0],
                    i = e[0]
                  return { type: 'sqrt', mode: n.mode, body: i, index: a }
                },
                htmlBuilder: function (t, e) {
                  var r = le(t.body, e.havingCrampedStyle())
                  0 === r.height && (r.height = e.fontMetrics().xHeight),
                    (r = Pt.wrapFragment(r, e))
                  var n = e.fontMetrics().defaultRuleThickness,
                    a = n
                  e.style.id < w.TEXT.id && (a = e.fontMetrics().xHeight)
                  var i = n + a / 4,
                    o = r.height + r.depth + i + n,
                    s = Qe(o, e),
                    h = s.span,
                    l = s.ruleWidth,
                    m = s.advanceWidth,
                    c = h.height - l
                  c > r.height + r.depth + i &&
                    (i = (i + c - r.height - r.depth) / 2)
                  var u = h.height - r.height - i - l
                  r.style.paddingLeft = m + 'em'
                  var d = Pt.makeVList(
                    {
                      positionType: 'firstBaseline',
                      children: [
                        {
                          type: 'elem',
                          elem: r,
                          wrapperClasses: ['svg-align'],
                        },
                        { type: 'kern', size: -(r.height + u) },
                        { type: 'elem', elem: h },
                        { type: 'kern', size: l },
                      ],
                    },
                    e
                  )
                  if (t.index) {
                    var p = e.havingStyle(w.SCRIPTSCRIPT),
                      f = le(t.index, p, e),
                      g = 0.6 * (d.height - d.depth),
                      x = Pt.makeVList(
                        {
                          positionType: 'shift',
                          positionData: -g,
                          children: [{ type: 'elem', elem: f }],
                        },
                        e
                      ),
                      v = Pt.makeSpan(['root'], [x])
                    return Pt.makeSpan(['mord', 'sqrt'], [v, d], e)
                  }
                  return Pt.makeSpan(['mord', 'sqrt'], [d], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = t.body,
                    n = t.index
                  return n
                    ? new fe.MathNode('mroot', [we(r, e), we(n, e)])
                    : new fe.MathNode('msqrt', [we(r, e)])
                },
              })
            var Dr = {
              display: w.DISPLAY,
              text: w.TEXT,
              script: w.SCRIPT,
              scriptscript: w.SCRIPTSCRIPT,
            }
            Zt({
              type: 'styling',
              names: [
                '\\displaystyle',
                '\\textstyle',
                '\\scriptstyle',
                '\\scriptscriptstyle',
              ],
              props: { numArgs: 0, allowedInText: !0 },
              handler: function (t, e) {
                var r = t.breakOnTokenText,
                  n = t.funcName,
                  a = t.parser,
                  i = a.parseExpression(!0, r),
                  o = n.slice(1, n.length - 5)
                return { type: 'styling', mode: a.mode, style: o, body: i }
              },
              htmlBuilder: function (t, e) {
                var r = Dr[t.style],
                  n = e.havingStyle(r).withFont('')
                return Rr(t.body, n, e)
              },
              mathmlBuilder: function (t, e) {
                var r = {
                    display: w.DISPLAY,
                    text: w.TEXT,
                    script: w.SCRIPT,
                    scriptscript: w.SCRIPTSCRIPT,
                  }[t.style],
                  n = e.havingStyle(r),
                  a = ye(t.body, n),
                  i = new fe.MathNode('mstyle', a),
                  o = {
                    display: ['0', 'true'],
                    text: ['0', 'false'],
                    script: ['1', 'false'],
                    scriptscript: ['2', 'false'],
                  }[t.style]
                return (
                  i.setAttribute('scriptlevel', o[0]),
                  i.setAttribute('displaystyle', o[1]),
                  i
                )
              },
            })
            Kt({
              type: 'supsub',
              htmlBuilder: function (t, e) {
                var r = (function (t, e) {
                  var r = t.base
                  return r
                    ? 'op' === r.type
                      ? r.limits &&
                        (e.style.size === w.DISPLAY.size ||
                          r.alwaysHandleSupSub)
                        ? qr
                        : null
                      : 'accent' === r.type
                      ? c.isCharacterBox(r.base)
                        ? qe
                        : null
                      : 'horizBrace' === r.type && !t.sub === r.isOver
                      ? Cr
                      : null
                    : null
                })(t, e)
                if (r) return r(t, e)
                var n,
                  a,
                  i,
                  o = t.base,
                  s = t.sup,
                  h = t.sub,
                  l = le(o, e),
                  m = e.fontMetrics(),
                  u = 0,
                  d = 0,
                  p = o && c.isCharacterBox(o)
                if (s) {
                  var f = e.havingStyle(e.style.sup())
                  ;(n = le(s, f, e)),
                    p ||
                      (u =
                        l.height -
                        (f.fontMetrics().supDrop * f.sizeMultiplier) /
                          e.sizeMultiplier)
                }
                if (h) {
                  var g = e.havingStyle(e.style.sub())
                  ;(a = le(h, g, e)),
                    p ||
                      (d =
                        l.depth +
                        (g.fontMetrics().subDrop * g.sizeMultiplier) /
                          e.sizeMultiplier)
                }
                i =
                  e.style === w.DISPLAY
                    ? m.sup1
                    : e.style.cramped
                    ? m.sup3
                    : m.sup2
                var x,
                  v = e.sizeMultiplier,
                  y = 0.5 / m.ptPerEm / v + 'em',
                  b = null
                if (a) {
                  var k =
                    t.base &&
                    'op' === t.base.type &&
                    t.base.name &&
                    ('\\oiint' === t.base.name || '\\oiiint' === t.base.name)
                  ;(l instanceof I || k) && (b = -l.italic + 'em')
                }
                if (n && a) {
                  ;(u = Math.max(u, i, n.depth + 0.25 * m.xHeight)),
                    (d = Math.max(d, m.sub2))
                  var S = 4 * m.defaultRuleThickness
                  if (u - n.depth - (a.height - d) < S) {
                    d = S - (u - n.depth) + a.height
                    var M = 0.8 * m.xHeight - (u - n.depth)
                    M > 0 && ((u += M), (d -= M))
                  }
                  var z = [
                    {
                      type: 'elem',
                      elem: a,
                      shift: d,
                      marginRight: y,
                      marginLeft: b,
                    },
                    { type: 'elem', elem: n, shift: -u, marginRight: y },
                  ]
                  x = Pt.makeVList(
                    { positionType: 'individualShift', children: z },
                    e
                  )
                } else if (a) {
                  d = Math.max(d, m.sub1, a.height - 0.8 * m.xHeight)
                  var T = [
                    { type: 'elem', elem: a, marginLeft: b, marginRight: y },
                  ]
                  x = Pt.makeVList(
                    { positionType: 'shift', positionData: d, children: T },
                    e
                  )
                } else {
                  if (!n) throw new Error('supsub must have either sup or sub.')
                  ;(u = Math.max(u, i, n.depth + 0.25 * m.xHeight)),
                    (x = Pt.makeVList(
                      {
                        positionType: 'shift',
                        positionData: -u,
                        children: [{ type: 'elem', elem: n, marginRight: y }],
                      },
                      e
                    ))
                }
                var A = se(l, 'right') || 'mord'
                return Pt.makeSpan([A], [l, Pt.makeSpan(['msupsub'], [x])], e)
              },
              mathmlBuilder: function (t, e) {
                var r,
                  n = !1,
                  a = Ht(t.base, 'horizBrace')
                a && !!t.sup === a.isOver && ((n = !0), (r = a.isOver))
                var i,
                  o = [we(t.base, e)]
                if (
                  (t.sub && o.push(we(t.sub, e)),
                  t.sup && o.push(we(t.sup, e)),
                  n)
                )
                  i = r ? 'mover' : 'munder'
                else if (t.sub)
                  if (t.sup) {
                    var s = t.base
                    i =
                      s && 'op' === s.type && s.limits && e.style === w.DISPLAY
                        ? 'munderover'
                        : 'msubsup'
                  } else {
                    var h = t.base
                    i =
                      h && 'op' === h.type && h.limits && e.style === w.DISPLAY
                        ? 'munder'
                        : 'msub'
                  }
                else {
                  var l = t.base
                  i =
                    l && 'op' === l.type && l.limits && e.style === w.DISPLAY
                      ? 'mover'
                      : 'msup'
                }
                return new fe.MathNode(i, o)
              },
            }),
              Kt({
                type: 'atom',
                htmlBuilder: function (t, e) {
                  return Pt.mathsym(t.text, t.mode, e, ['m' + t.family])
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mo', [ge(t.text, t.mode)])
                  if ('bin' === t.family) {
                    var n = ve(t, e)
                    'bold-italic' === n && r.setAttribute('mathvariant', n)
                  } else
                    'punct' === t.family && r.setAttribute('separator', 'true')
                  return r
                },
              })
            var Hr = { mi: 'italic', mn: 'normal', mtext: 'normal' }
            Kt({
              type: 'mathord',
              htmlBuilder: function (t, e) {
                return Pt.makeOrd(t, e, 'mathord')
              },
              mathmlBuilder: function (t, e) {
                var r = new fe.MathNode('mi', [ge(t.text, t.mode, e)]),
                  n = ve(t, e) || 'italic'
                return n !== Hr[r.type] && r.setAttribute('mathvariant', n), r
              },
            }),
              Kt({
                type: 'textord',
                htmlBuilder: function (t, e) {
                  return Pt.makeOrd(t, e, 'textord')
                },
                mathmlBuilder: function (t, e) {
                  var r,
                    n = ge(t.text, t.mode, e),
                    a = ve(t, e) || 'normal'
                  return (
                    (r =
                      'text' === t.mode
                        ? new fe.MathNode('mtext', [n])
                        : /[0-9]/.test(t.text)
                        ? new fe.MathNode('mn', [n])
                        : '\\prime' === t.text
                        ? new fe.MathNode('mo', [n])
                        : new fe.MathNode('mi', [n])),
                    a !== Hr[r.type] && r.setAttribute('mathvariant', a),
                    r
                  )
                },
              })
            var Fr = { '\\nobreak': 'nobreak', '\\allowbreak': 'allowbreak' },
              Vr = {
                ' ': {},
                '\\ ': {},
                '~': { className: 'nobreak' },
                '\\space': {},
                '\\nobreakspace': { className: 'nobreak' },
              }
            Kt({
              type: 'spacing',
              htmlBuilder: function (t, e) {
                if (Vr.hasOwnProperty(t.text)) {
                  var r = Vr[t.text].className || ''
                  if ('text' === t.mode) {
                    var n = Pt.makeOrd(t, e, 'textord')
                    return n.classes.push(r), n
                  }
                  return Pt.makeSpan(
                    ['mspace', r],
                    [Pt.mathsym(t.text, t.mode, e)],
                    e
                  )
                }
                if (Fr.hasOwnProperty(t.text))
                  return Pt.makeSpan(['mspace', Fr[t.text]], [], e)
                throw new o('Unknown type of space "' + t.text + '"')
              },
              mathmlBuilder: function (t, e) {
                if (!Vr.hasOwnProperty(t.text)) {
                  if (Fr.hasOwnProperty(t.text))
                    return new fe.MathNode('mspace')
                  throw new o('Unknown type of space "' + t.text + '"')
                }
                return new fe.MathNode('mtext', [new fe.TextNode(' ')])
              },
            }),
              Kt({
                type: 'tag',
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mtable', [
                    new fe.MathNode('mlabeledtr', [
                      new fe.MathNode('mtd', [be(t.tag, e)]),
                      new fe.MathNode('mtd', [be(t.body, e)]),
                    ]),
                  ])
                  return r.setAttribute('side', 'right'), r
                },
              })
            var Ur = {
                '\\text': void 0,
                '\\textrm': 'textrm',
                '\\textsf': 'textsf',
                '\\texttt': 'texttt',
                '\\textnormal': 'textrm',
              },
              Gr = { '\\textbf': 'textbf' },
              _r = { '\\textit': 'textit' },
              Xr = function (t, e) {
                var r = t.font
                return r
                  ? Ur[r]
                    ? e.withTextFontFamily(Ur[r])
                    : Gr[r]
                    ? e.withTextFontWeight(Gr[r])
                    : e.withTextFontShape(_r[r])
                  : e
              }
            Zt({
              type: 'text',
              names: [
                '\\text',
                '\\textrm',
                '\\textsf',
                '\\texttt',
                '\\textnormal',
                '\\textbf',
                '\\textit',
              ],
              props: {
                numArgs: 1,
                argTypes: ['text'],
                greediness: 2,
                allowedInText: !0,
                consumeMode: 'text',
              },
              handler: function (t, e) {
                var r = t.parser,
                  n = t.funcName,
                  a = e[0]
                return { type: 'text', mode: r.mode, body: Jt(a), font: n }
              },
              htmlBuilder: function (t, e) {
                var r = Xr(t, e),
                  n = ae(t.body, r, !0)
                return Pt.makeSpan(['mord', 'text'], Pt.tryCombineChars(n), r)
              },
              mathmlBuilder: function (t, e) {
                var r = Xr(t, e)
                return be(t.body, r)
              },
            }),
              Zt({
                type: 'underline',
                names: ['\\underline'],
                props: { numArgs: 1, allowedInText: !0 },
                handler: function (t, e) {
                  return { type: 'underline', mode: t.parser.mode, body: e[0] }
                },
                htmlBuilder: function (t, e) {
                  var r = le(t.body, e),
                    n = Pt.makeLineSpan('underline-line', e),
                    a = Pt.makeVList(
                      {
                        positionType: 'top',
                        positionData: r.height,
                        children: [
                          { type: 'kern', size: n.height },
                          { type: 'elem', elem: n },
                          { type: 'kern', size: 3 * n.height },
                          { type: 'elem', elem: r },
                        ],
                      },
                      e
                    )
                  return Pt.makeSpan(['mord', 'underline'], [a], e)
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.MathNode('mo', [new fe.TextNode('‾')])
                  r.setAttribute('stretchy', 'true')
                  var n = new fe.MathNode('munder', [we(t.body, e), r])
                  return n.setAttribute('accentunder', 'true'), n
                },
              }),
              Zt({
                type: 'verb',
                names: ['\\verb'],
                props: { numArgs: 0, allowedInText: !0 },
                handler: function (t, e, r) {
                  throw new o(
                    '\\verb ended by end of line instead of matching delimiter'
                  )
                },
                htmlBuilder: function (t, e) {
                  for (
                    var r = Yr(t),
                      n = [],
                      a = e.havingStyle(e.style.text()),
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    var o = r[i]
                    '~' === o && (o = '\\textasciitilde'),
                      n.push(
                        Pt.makeSymbol(o, 'Typewriter-Regular', t.mode, a, [
                          'mord',
                          'texttt',
                        ])
                      )
                  }
                  return Pt.makeSpan(
                    ['mord', 'text'].concat(a.sizingClasses(e)),
                    Pt.tryCombineChars(n),
                    a
                  )
                },
                mathmlBuilder: function (t, e) {
                  var r = new fe.TextNode(Yr(t)),
                    n = new fe.MathNode('mtext', [r])
                  return n.setAttribute('mathvariant', 'monospace'), n
                },
              })
            var Yr = function (t) {
                return t.body.replace(/ /g, t.star ? '␣' : ' ')
              },
              $r = $t,
              Wr = new RegExp('^(\\\\[a-zA-Z@]+)[ \r\n\t]*$'),
              jr = new RegExp('[̀-ͯ]+$'),
              Zr =
                '([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])',
              Kr = (function () {
                function t(t, e) {
                  ;(this.input = void 0),
                    (this.settings = void 0),
                    (this.tokenRegex = void 0),
                    (this.catcodes = void 0),
                    (this.input = t),
                    (this.settings = e),
                    (this.tokenRegex = new RegExp(Zr, 'g')),
                    (this.catcodes = { '%': 14 })
                }
                var e = t.prototype
                return (
                  (e.setCatcode = function (t, e) {
                    this.catcodes[t] = e
                  }),
                  (e.lex = function () {
                    var t = this.input,
                      e = this.tokenRegex.lastIndex
                    if (e === t.length) return new a('EOF', new n(this, e, e))
                    var r = this.tokenRegex.exec(t)
                    if (null === r || r.index !== e)
                      throw new o(
                        "Unexpected character: '" + t[e] + "'",
                        new a(t[e], new n(this, e, e + 1))
                      )
                    var i = r[2] || ' '
                    if (14 === this.catcodes[i]) {
                      var s = t.indexOf('\n', this.tokenRegex.lastIndex)
                      return (
                        -1 === s
                          ? ((this.tokenRegex.lastIndex = t.length),
                            this.settings.reportNonstrict(
                              'commentAtEnd',
                              '% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)'
                            ))
                          : (this.tokenRegex.lastIndex = s + 1),
                        this.lex()
                      )
                    }
                    var h = i.match(Wr)
                    return (
                      h && (i = h[1]),
                      new a(i, new n(this, e, this.tokenRegex.lastIndex))
                    )
                  }),
                  t
                )
              })(),
              Jr = (function () {
                function t(t, e) {
                  void 0 === t && (t = {}),
                    void 0 === e && (e = {}),
                    (this.current = void 0),
                    (this.builtins = void 0),
                    (this.undefStack = void 0),
                    (this.current = e),
                    (this.builtins = t),
                    (this.undefStack = [])
                }
                var e = t.prototype
                return (
                  (e.beginGroup = function () {
                    this.undefStack.push({})
                  }),
                  (e.endGroup = function () {
                    if (0 === this.undefStack.length)
                      throw new o(
                        'Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug'
                      )
                    var t = this.undefStack.pop()
                    for (var e in t)
                      t.hasOwnProperty(e) &&
                        (void 0 === t[e]
                          ? delete this.current[e]
                          : (this.current[e] = t[e]))
                  }),
                  (e.has = function (t) {
                    return (
                      this.current.hasOwnProperty(t) ||
                      this.builtins.hasOwnProperty(t)
                    )
                  }),
                  (e.get = function (t) {
                    return this.current.hasOwnProperty(t)
                      ? this.current[t]
                      : this.builtins[t]
                  }),
                  (e.set = function (t, e, r) {
                    if ((void 0 === r && (r = !1), r)) {
                      for (var n = 0; n < this.undefStack.length; n++)
                        delete this.undefStack[n][t]
                      this.undefStack.length > 0 &&
                        (this.undefStack[this.undefStack.length - 1][t] = e)
                    } else {
                      var a = this.undefStack[this.undefStack.length - 1]
                      a && !a.hasOwnProperty(t) && (a[t] = this.current[t])
                    }
                    this.current[t] = e
                  }),
                  t
                )
              })(),
              Qr = {},
              tn = Qr
            function en(t, e) {
              Qr[t] = e
            }
            en('\\@firstoftwo', function (t) {
              return { tokens: t.consumeArgs(2)[0], numArgs: 0 }
            }),
              en('\\@secondoftwo', function (t) {
                return { tokens: t.consumeArgs(2)[1], numArgs: 0 }
              }),
              en('\\@ifnextchar', function (t) {
                var e = t.consumeArgs(3),
                  r = t.future()
                return 1 === e[0].length && e[0][0].text === r.text
                  ? { tokens: e[1], numArgs: 0 }
                  : { tokens: e[2], numArgs: 0 }
              }),
              en('\\@ifstar', '\\@ifnextchar *{\\@firstoftwo{#1}}'),
              en('\\TextOrMath', function (t) {
                var e = t.consumeArgs(2)
                return 'text' === t.mode
                  ? { tokens: e[0], numArgs: 0 }
                  : { tokens: e[1], numArgs: 0 }
              })
            var rn = {
              0: 0,
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              a: 10,
              A: 10,
              b: 11,
              B: 11,
              c: 12,
              C: 12,
              d: 13,
              D: 13,
              e: 14,
              E: 14,
              f: 15,
              F: 15,
            }
            en('\\char', function (t) {
              var e,
                r = t.popToken(),
                n = ''
              if ("'" === r.text) (e = 8), (r = t.popToken())
              else if ('"' === r.text) (e = 16), (r = t.popToken())
              else if ('`' === r.text)
                if ('\\' === (r = t.popToken()).text[0])
                  n = r.text.charCodeAt(1)
                else {
                  if ('EOF' === r.text) throw new o('\\char` missing argument')
                  n = r.text.charCodeAt(0)
                }
              else e = 10
              if (e) {
                if (null == (n = rn[r.text]) || n >= e)
                  throw new o('Invalid base-' + e + ' digit ' + r.text)
                for (var a; null != (a = rn[t.future().text]) && a < e; )
                  (n *= e), (n += a), t.popToken()
              }
              return '\\@char{' + n + '}'
            })
            var nn = function (t, e) {
              var r = t.consumeArgs(1)[0]
              if (1 !== r.length)
                throw new o("\\gdef's first argument must be a macro name")
              var n = r[0].text,
                a = 0
              for (
                r = t.consumeArgs(1)[0];
                1 === r.length && '#' === r[0].text;

              ) {
                if (1 !== (r = t.consumeArgs(1)[0]).length)
                  throw new o(
                    'Invalid argument number length "' + r.length + '"'
                  )
                if (!/^[1-9]$/.test(r[0].text))
                  throw new o('Invalid argument number "' + r[0].text + '"')
                if ((a++, parseInt(r[0].text) !== a))
                  throw new o(
                    'Argument number "' + r[0].text + '" out of order'
                  )
                r = t.consumeArgs(1)[0]
              }
              return t.macros.set(n, { tokens: r, numArgs: a }, e), ''
            }
            en('\\gdef', function (t) {
              return nn(t, !0)
            }),
              en('\\def', function (t) {
                return nn(t, !1)
              }),
              en('\\global', function (t) {
                var e = t.consumeArgs(1)[0]
                if (1 !== e.length)
                  throw new o('Invalid command after \\global')
                var r = e[0].text
                if ('\\def' === r) return nn(t, !0)
                throw new o("Invalid command '" + r + "' after \\global")
              })
            var an = function (t, e, r) {
              var n = t.consumeArgs(1)[0]
              if (1 !== n.length)
                throw new o(
                  "\\newcommand's first argument must be a macro name"
                )
              var a = n[0].text,
                i = t.isDefined(a)
              if (i && !e)
                throw new o(
                  '\\newcommand{' +
                    a +
                    '} attempting to redefine ' +
                    a +
                    '; use \\renewcommand'
                )
              if (!i && !r)
                throw new o(
                  '\\renewcommand{' +
                    a +
                    '} when command ' +
                    a +
                    ' does not yet exist; use \\newcommand'
                )
              var s = 0
              if (1 === (n = t.consumeArgs(1)[0]).length && '[' === n[0].text) {
                for (
                  var h = '', l = t.expandNextToken();
                  ']' !== l.text && 'EOF' !== l.text;

                )
                  (h += l.text), (l = t.expandNextToken())
                if (!h.match(/^\s*[0-9]+\s*$/))
                  throw new o('Invalid number of arguments: ' + h)
                ;(s = parseInt(h)), (n = t.consumeArgs(1)[0])
              }
              return t.macros.set(a, { tokens: n, numArgs: s }), ''
            }
            en('\\newcommand', function (t) {
              return an(t, !1, !0)
            }),
              en('\\renewcommand', function (t) {
                return an(t, !0, !1)
              }),
              en('\\providecommand', function (t) {
                return an(t, !0, !0)
              }),
              en('\\bgroup', '{'),
              en('\\egroup', '}'),
              en('\\lq', '`'),
              en('\\rq', "'"),
              en('\\aa', '\\r a'),
              en('\\AA', '\\r A'),
              en(
                '\\textcopyright',
                '\\html@mathml{\\textcircled{c}}{\\char`©}'
              ),
              en(
                '\\copyright',
                '\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}'
              ),
              en(
                '\\textregistered',
                '\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}'
              ),
              en('ℬ', '\\mathscr{B}'),
              en('ℰ', '\\mathscr{E}'),
              en('ℱ', '\\mathscr{F}'),
              en('ℋ', '\\mathscr{H}'),
              en('ℐ', '\\mathscr{I}'),
              en('ℒ', '\\mathscr{L}'),
              en('ℳ', '\\mathscr{M}'),
              en('ℛ', '\\mathscr{R}'),
              en('ℭ', '\\mathfrak{C}'),
              en('ℌ', '\\mathfrak{H}'),
              en('ℨ', '\\mathfrak{Z}'),
              en('·', '\\cdotp'),
              en('\\llap', '\\mathllap{\\textrm{#1}}'),
              en('\\rlap', '\\mathrlap{\\textrm{#1}}'),
              en('\\clap', '\\mathclap{\\textrm{#1}}'),
              en('\\not', '\\mathrel{\\mathrlap\\@not}'),
              en(
                '\\neq',
                '\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}'
              ),
              en('\\ne', '\\neq'),
              en('≠', '\\neq'),
              en(
                '\\notin',
                '\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}'
              ),
              en('∉', '\\notin'),
              en(
                '≘',
                '\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}'
              ),
              en(
                '≙',
                '\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}'
              ),
              en(
                '≚',
                '\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}'
              ),
              en(
                '≛',
                '\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}'
              ),
              en(
                '≝',
                '\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}'
              ),
              en(
                '≞',
                '\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}'
              ),
              en(
                '≟',
                '\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}'
              ),
              en('⟂', '\\perp'),
              en('‼', '\\mathclose{!\\mkern-0.8mu!}'),
              en('∌', '\\notni'),
              en('⌜', '\\ulcorner'),
              en('⌝', '\\urcorner'),
              en('⌞', '\\llcorner'),
              en('⌟', '\\lrcorner'),
              en('©', '\\copyright'),
              en('®', '\\textregistered'),
              en('️', '\\textregistered'),
              en('\\vdots', '\\mathord{\\varvdots\\rule{0pt}{15pt}}'),
              en('⋮', '\\vdots'),
              en('\\varGamma', '\\mathit{\\Gamma}'),
              en('\\varDelta', '\\mathit{\\Delta}'),
              en('\\varTheta', '\\mathit{\\Theta}'),
              en('\\varLambda', '\\mathit{\\Lambda}'),
              en('\\varXi', '\\mathit{\\Xi}'),
              en('\\varPi', '\\mathit{\\Pi}'),
              en('\\varSigma', '\\mathit{\\Sigma}'),
              en('\\varUpsilon', '\\mathit{\\Upsilon}'),
              en('\\varPhi', '\\mathit{\\Phi}'),
              en('\\varPsi', '\\mathit{\\Psi}'),
              en('\\varOmega', '\\mathit{\\Omega}'),
              en(
                '\\colon',
                '\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu'
              ),
              en('\\boxed', '\\fbox{$\\displaystyle{#1}$}'),
              en('\\iff', '\\DOTSB\\;\\Longleftrightarrow\\;'),
              en('\\implies', '\\DOTSB\\;\\Longrightarrow\\;'),
              en('\\impliedby', '\\DOTSB\\;\\Longleftarrow\\;')
            var on = {
              ',': '\\dotsc',
              '\\not': '\\dotsb',
              '+': '\\dotsb',
              '=': '\\dotsb',
              '<': '\\dotsb',
              '>': '\\dotsb',
              '-': '\\dotsb',
              '*': '\\dotsb',
              ':': '\\dotsb',
              '\\DOTSB': '\\dotsb',
              '\\coprod': '\\dotsb',
              '\\bigvee': '\\dotsb',
              '\\bigwedge': '\\dotsb',
              '\\biguplus': '\\dotsb',
              '\\bigcap': '\\dotsb',
              '\\bigcup': '\\dotsb',
              '\\prod': '\\dotsb',
              '\\sum': '\\dotsb',
              '\\bigotimes': '\\dotsb',
              '\\bigoplus': '\\dotsb',
              '\\bigodot': '\\dotsb',
              '\\bigsqcup': '\\dotsb',
              '\\And': '\\dotsb',
              '\\longrightarrow': '\\dotsb',
              '\\Longrightarrow': '\\dotsb',
              '\\longleftarrow': '\\dotsb',
              '\\Longleftarrow': '\\dotsb',
              '\\longleftrightarrow': '\\dotsb',
              '\\Longleftrightarrow': '\\dotsb',
              '\\mapsto': '\\dotsb',
              '\\longmapsto': '\\dotsb',
              '\\hookrightarrow': '\\dotsb',
              '\\doteq': '\\dotsb',
              '\\mathbin': '\\dotsb',
              '\\mathrel': '\\dotsb',
              '\\relbar': '\\dotsb',
              '\\Relbar': '\\dotsb',
              '\\xrightarrow': '\\dotsb',
              '\\xleftarrow': '\\dotsb',
              '\\DOTSI': '\\dotsi',
              '\\int': '\\dotsi',
              '\\oint': '\\dotsi',
              '\\iint': '\\dotsi',
              '\\iiint': '\\dotsi',
              '\\iiiint': '\\dotsi',
              '\\idotsint': '\\dotsi',
              '\\DOTSX': '\\dotsx',
            }
            en('\\dots', function (t) {
              var e = '\\dotso',
                r = t.expandAfterFuture().text
              return (
                r in on
                  ? (e = on[r])
                  : '\\not' === r.substr(0, 4)
                  ? (e = '\\dotsb')
                  : r in Y.math &&
                    c.contains(['bin', 'rel'], Y.math[r].group) &&
                    (e = '\\dotsb'),
                e
              )
            })
            var sn = {
              ')': !0,
              ']': !0,
              '\\rbrack': !0,
              '\\}': !0,
              '\\rbrace': !0,
              '\\rangle': !0,
              '\\rceil': !0,
              '\\rfloor': !0,
              '\\rgroup': !0,
              '\\rmoustache': !0,
              '\\right': !0,
              '\\bigr': !0,
              '\\biggr': !0,
              '\\Bigr': !0,
              '\\Biggr': !0,
              $: !0,
              ';': !0,
              '.': !0,
              ',': !0,
            }
            en('\\dotso', function (t) {
              return t.future().text in sn ? '\\ldots\\,' : '\\ldots'
            }),
              en('\\dotsc', function (t) {
                var e = t.future().text
                return e in sn && ',' !== e ? '\\ldots\\,' : '\\ldots'
              }),
              en('\\cdots', function (t) {
                return t.future().text in sn ? '\\@cdots\\,' : '\\@cdots'
              }),
              en('\\dotsb', '\\cdots'),
              en('\\dotsm', '\\cdots'),
              en('\\dotsi', '\\!\\cdots'),
              en('\\dotsx', '\\ldots\\,'),
              en('\\DOTSI', '\\relax'),
              en('\\DOTSB', '\\relax'),
              en('\\DOTSX', '\\relax'),
              en('\\tmspace', '\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax'),
              en('\\,', '\\tmspace+{3mu}{.1667em}'),
              en('\\thinspace', '\\,'),
              en('\\>', '\\mskip{4mu}'),
              en('\\:', '\\tmspace+{4mu}{.2222em}'),
              en('\\medspace', '\\:'),
              en('\\;', '\\tmspace+{5mu}{.2777em}'),
              en('\\thickspace', '\\;'),
              en('\\!', '\\tmspace-{3mu}{.1667em}'),
              en('\\negthinspace', '\\!'),
              en('\\negmedspace', '\\tmspace-{4mu}{.2222em}'),
              en('\\negthickspace', '\\tmspace-{5mu}{.277em}'),
              en('\\enspace', '\\kern.5em '),
              en('\\enskip', '\\hskip.5em\\relax'),
              en('\\quad', '\\hskip1em\\relax'),
              en('\\qquad', '\\hskip2em\\relax'),
              en('\\tag', '\\@ifstar\\tag@literal\\tag@paren'),
              en('\\tag@paren', '\\tag@literal{({#1})}'),
              en('\\tag@literal', function (t) {
                if (t.macros.get('\\df@tag')) throw new o('Multiple \\tag')
                return '\\gdef\\df@tag{\\text{#1}}'
              }),
              en(
                '\\bmod',
                '\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}'
              ),
              en(
                '\\pod',
                '\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)'
              ),
              en('\\pmod', '\\pod{{\\rm mod}\\mkern6mu#1}'),
              en(
                '\\mod',
                '\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1'
              ),
              en(
                '\\pmb',
                '\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\mathrlap{\\mkern0.4mu\\raisebox{0.4mu}{$#1$}}{\\mkern0.8mu#1}}}{\\mathbf{#1}}'
              ),
              en('\\\\', '\\newline'),
              en(
                '\\TeX',
                '\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}'
              )
            var hn =
              D['Main-Regular']['T'.charCodeAt(0)][1] -
              0.7 * D['Main-Regular']['A'.charCodeAt(0)][1] +
              'em'
            en(
              '\\LaTeX',
              '\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{' +
                hn +
                '}{\\scriptsize A}\\kern-.15em\\TeX}{LaTeX}}'
            ),
              en(
                '\\KaTeX',
                '\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{' +
                  hn +
                  '}{\\scriptsize A}\\kern-.15em\\TeX}{KaTeX}}'
              ),
              en('\\hspace', '\\@ifstar\\@hspacer\\@hspace'),
              en('\\@hspace', '\\hskip #1\\relax'),
              en('\\@hspacer', '\\rule{0pt}{0pt}\\hskip #1\\relax'),
              en('\\ordinarycolon', ':'),
              en('\\vcentcolon', '\\mathrel{\\mathop\\ordinarycolon}'),
              en(
                '\\dblcolon',
                '\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}'
              ),
              en(
                '\\coloneqq',
                '\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}'
              ),
              en(
                '\\Coloneqq',
                '\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}'
              ),
              en(
                '\\coloneq',
                '\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}'
              ),
              en(
                '\\Coloneq',
                '\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}'
              ),
              en(
                '\\eqqcolon',
                '\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}'
              ),
              en(
                '\\Eqqcolon',
                '\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}'
              ),
              en(
                '\\eqcolon',
                '\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}'
              ),
              en(
                '\\Eqcolon',
                '\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}'
              ),
              en(
                '\\colonapprox',
                '\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}'
              ),
              en(
                '\\Colonapprox',
                '\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}'
              ),
              en(
                '\\colonsim',
                '\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}'
              ),
              en(
                '\\Colonsim',
                '\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}'
              ),
              en('≔', '\\coloneqq'),
              en('≕', '\\eqqcolon'),
              en('⩴', '\\Coloneqq'),
              en('\\ratio', '\\vcentcolon'),
              en('\\coloncolon', '\\dblcolon'),
              en('\\colonequals', '\\coloneqq'),
              en('\\coloncolonequals', '\\Coloneqq'),
              en('\\equalscolon', '\\eqqcolon'),
              en('\\equalscoloncolon', '\\Eqqcolon'),
              en('\\colonminus', '\\coloneq'),
              en('\\coloncolonminus', '\\Coloneq'),
              en('\\minuscolon', '\\eqcolon'),
              en('\\minuscoloncolon', '\\Eqcolon'),
              en('\\coloncolonapprox', '\\Colonapprox'),
              en('\\coloncolonsim', '\\Colonsim'),
              en(
                '\\simcolon',
                '\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}'
              ),
              en(
                '\\simcoloncolon',
                '\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}'
              ),
              en(
                '\\approxcolon',
                '\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}'
              ),
              en(
                '\\approxcoloncolon',
                '\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}'
              ),
              en('\\notni', '\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}'),
              en(
                '\\limsup',
                '\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits'
              ),
              en(
                '\\liminf',
                '\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits'
              ),
              en('⟦', '\\mathopen{[\\mkern-3.2mu[}'),
              en('⟧', '\\mathclose{]\\mkern-3.2mu]}'),
              en('\\darr', '\\downarrow'),
              en('\\dArr', '\\Downarrow'),
              en('\\Darr', '\\Downarrow'),
              en('\\lang', '\\langle'),
              en('\\rang', '\\rangle'),
              en('\\uarr', '\\uparrow'),
              en('\\uArr', '\\Uparrow'),
              en('\\Uarr', '\\Uparrow'),
              en('\\N', '\\mathbb{N}'),
              en('\\R', '\\mathbb{R}'),
              en('\\Z', '\\mathbb{Z}'),
              en('\\alef', '\\aleph'),
              en('\\alefsym', '\\aleph'),
              en('\\Alpha', '\\mathrm{A}'),
              en('\\Beta', '\\mathrm{B}'),
              en('\\bull', '\\bullet'),
              en('\\Chi', '\\mathrm{X}'),
              en('\\clubs', '\\clubsuit'),
              en('\\cnums', '\\mathbb{C}'),
              en('\\Complex', '\\mathbb{C}'),
              en('\\Dagger', '\\ddagger'),
              en('\\diamonds', '\\diamondsuit'),
              en('\\empty', '\\emptyset'),
              en('\\Epsilon', '\\mathrm{E}'),
              en('\\Eta', '\\mathrm{H}'),
              en('\\exist', '\\exists'),
              en('\\harr', '\\leftrightarrow'),
              en('\\hArr', '\\Leftrightarrow'),
              en('\\Harr', '\\Leftrightarrow'),
              en('\\hearts', '\\heartsuit'),
              en('\\image', '\\Im'),
              en('\\infin', '\\infty'),
              en('\\Iota', '\\mathrm{I}'),
              en('\\isin', '\\in'),
              en('\\Kappa', '\\mathrm{K}'),
              en('\\larr', '\\leftarrow'),
              en('\\lArr', '\\Leftarrow'),
              en('\\Larr', '\\Leftarrow'),
              en('\\lrarr', '\\leftrightarrow'),
              en('\\lrArr', '\\Leftrightarrow'),
              en('\\Lrarr', '\\Leftrightarrow'),
              en('\\Mu', '\\mathrm{M}'),
              en('\\natnums', '\\mathbb{N}'),
              en('\\Nu', '\\mathrm{N}'),
              en('\\Omicron', '\\mathrm{O}'),
              en('\\plusmn', '\\pm'),
              en('\\rarr', '\\rightarrow'),
              en('\\rArr', '\\Rightarrow'),
              en('\\Rarr', '\\Rightarrow'),
              en('\\real', '\\Re'),
              en('\\reals', '\\mathbb{R}'),
              en('\\Reals', '\\mathbb{R}'),
              en('\\Rho', '\\mathrm{R}'),
              en('\\sdot', '\\cdot'),
              en('\\sect', '\\S'),
              en('\\spades', '\\spadesuit'),
              en('\\sub', '\\subset'),
              en('\\sube', '\\subseteq'),
              en('\\supe', '\\supseteq'),
              en('\\Tau', '\\mathrm{T}'),
              en('\\thetasym', '\\vartheta'),
              en('\\weierp', '\\wp'),
              en('\\Zeta', '\\mathrm{Z}'),
              en(
                '\\argmin',
                '\\DOTSB\\mathop{\\operatorname{arg\\,min}}\\limits'
              ),
              en(
                '\\argmax',
                '\\DOTSB\\mathop{\\operatorname{arg\\,max}}\\limits'
              )
            var ln = {
                '\\relax': !0,
                '^': !0,
                _: !0,
                '\\limits': !0,
                '\\nolimits': !0,
              },
              mn = (function () {
                function t(t, e, r) {
                  ;(this.settings = void 0),
                    (this.expansionCount = void 0),
                    (this.lexer = void 0),
                    (this.macros = void 0),
                    (this.stack = void 0),
                    (this.mode = void 0),
                    (this.settings = e),
                    (this.expansionCount = 0),
                    this.feed(t),
                    (this.macros = new Jr(tn, e.macros)),
                    (this.mode = r),
                    (this.stack = [])
                }
                var e = t.prototype
                return (
                  (e.feed = function (t) {
                    this.lexer = new Kr(t, this.settings)
                  }),
                  (e.switchMode = function (t) {
                    this.mode = t
                  }),
                  (e.beginGroup = function () {
                    this.macros.beginGroup()
                  }),
                  (e.endGroup = function () {
                    this.macros.endGroup()
                  }),
                  (e.future = function () {
                    return (
                      0 === this.stack.length &&
                        this.pushToken(this.lexer.lex()),
                      this.stack[this.stack.length - 1]
                    )
                  }),
                  (e.popToken = function () {
                    return this.future(), this.stack.pop()
                  }),
                  (e.pushToken = function (t) {
                    this.stack.push(t)
                  }),
                  (e.pushTokens = function (t) {
                    var e
                    ;(e = this.stack).push.apply(e, t)
                  }),
                  (e.consumeSpaces = function () {
                    for (;;) {
                      if (' ' !== this.future().text) break
                      this.stack.pop()
                    }
                  }),
                  (e.consumeArgs = function (t) {
                    for (var e = [], r = 0; r < t; ++r) {
                      this.consumeSpaces()
                      var n = this.popToken()
                      if ('{' === n.text) {
                        for (var a = [], i = 1; 0 !== i; ) {
                          var s = this.popToken()
                          if ((a.push(s), '{' === s.text)) ++i
                          else if ('}' === s.text) --i
                          else if ('EOF' === s.text)
                            throw new o('End of input in macro argument', n)
                        }
                        a.pop(), a.reverse(), (e[r] = a)
                      } else {
                        if ('EOF' === n.text)
                          throw new o('End of input expecting macro argument')
                        e[r] = [n]
                      }
                    }
                    return e
                  }),
                  (e.expandOnce = function () {
                    var t = this.popToken(),
                      e = t.text,
                      r = this._getExpansion(e)
                    if (null == r) return this.pushToken(t), t
                    if (
                      (this.expansionCount++,
                      this.expansionCount > this.settings.maxExpand)
                    )
                      throw new o(
                        'Too many expansions: infinite loop or need to increase maxExpand setting'
                      )
                    var n = r.tokens
                    if (r.numArgs)
                      for (
                        var a = this.consumeArgs(r.numArgs),
                          i = (n = n.slice()).length - 1;
                        i >= 0;
                        --i
                      ) {
                        var s = n[i]
                        if ('#' === s.text) {
                          if (0 === i)
                            throw new o(
                              'Incomplete placeholder at end of macro body',
                              s
                            )
                          if ('#' === (s = n[--i]).text) n.splice(i + 1, 1)
                          else {
                            if (!/^[1-9]$/.test(s.text))
                              throw new o('Not a valid argument number', s)
                            var h
                            ;(h = n).splice.apply(
                              h,
                              [i, 2].concat(a[+s.text - 1])
                            )
                          }
                        }
                      }
                    return this.pushTokens(n), n
                  }),
                  (e.expandAfterFuture = function () {
                    return this.expandOnce(), this.future()
                  }),
                  (e.expandNextToken = function () {
                    for (;;) {
                      var t = this.expandOnce()
                      if (t instanceof a) {
                        if ('\\relax' !== t.text) return this.stack.pop()
                        this.stack.pop()
                      }
                    }
                    throw new Error()
                  }),
                  (e.expandMacro = function (t) {
                    if (this.macros.get(t)) {
                      var e = [],
                        r = this.stack.length
                      for (this.pushToken(new a(t)); this.stack.length > r; ) {
                        this.expandOnce() instanceof a &&
                          e.push(this.stack.pop())
                      }
                      return e
                    }
                  }),
                  (e.expandMacroAsText = function (t) {
                    var e = this.expandMacro(t)
                    return e
                      ? e
                          .map(function (t) {
                            return t.text
                          })
                          .join('')
                      : e
                  }),
                  (e._getExpansion = function (t) {
                    var e = this.macros.get(t)
                    if (null == e) return e
                    var r = 'function' == typeof e ? e(this) : e
                    if ('string' == typeof r) {
                      var n = 0
                      if (-1 !== r.indexOf('#'))
                        for (
                          var a = r.replace(/##/g, '');
                          -1 !== a.indexOf('#' + (n + 1));

                        )
                          ++n
                      for (
                        var i = new Kr(r, this.settings), o = [], s = i.lex();
                        'EOF' !== s.text;

                      )
                        o.push(s), (s = i.lex())
                      return o.reverse(), { tokens: o, numArgs: n }
                    }
                    return r
                  }),
                  (e.isDefined = function (t) {
                    return (
                      this.macros.has(t) ||
                      $r.hasOwnProperty(t) ||
                      Y.math.hasOwnProperty(t) ||
                      Y.text.hasOwnProperty(t) ||
                      ln.hasOwnProperty(t)
                    )
                  }),
                  t
                )
              })(),
              cn = {
                '́': { text: "\\'", math: '\\acute' },
                '̀': { text: '\\`', math: '\\grave' },
                '̈': { text: '\\"', math: '\\ddot' },
                '̃': { text: '\\~', math: '\\tilde' },
                '̄': { text: '\\=', math: '\\bar' },
                '̆': { text: '\\u', math: '\\breve' },
                '̌': { text: '\\v', math: '\\check' },
                '̂': { text: '\\^', math: '\\hat' },
                '̇': { text: '\\.', math: '\\dot' },
                '̊': { text: '\\r', math: '\\mathring' },
                '̋': { text: '\\H' },
              },
              un = {
                á: 'á',
                à: 'à',
                ä: 'ä',
                ǟ: 'ǟ',
                ã: 'ã',
                ā: 'ā',
                ă: 'ă',
                ắ: 'ắ',
                ằ: 'ằ',
                ẵ: 'ẵ',
                ǎ: 'ǎ',
                â: 'â',
                ấ: 'ấ',
                ầ: 'ầ',
                ẫ: 'ẫ',
                ȧ: 'ȧ',
                ǡ: 'ǡ',
                å: 'å',
                ǻ: 'ǻ',
                ḃ: 'ḃ',
                ć: 'ć',
                č: 'č',
                ĉ: 'ĉ',
                ċ: 'ċ',
                ď: 'ď',
                ḋ: 'ḋ',
                é: 'é',
                è: 'è',
                ë: 'ë',
                ẽ: 'ẽ',
                ē: 'ē',
                ḗ: 'ḗ',
                ḕ: 'ḕ',
                ĕ: 'ĕ',
                ě: 'ě',
                ê: 'ê',
                ế: 'ế',
                ề: 'ề',
                ễ: 'ễ',
                ė: 'ė',
                ḟ: 'ḟ',
                ǵ: 'ǵ',
                ḡ: 'ḡ',
                ğ: 'ğ',
                ǧ: 'ǧ',
                ĝ: 'ĝ',
                ġ: 'ġ',
                ḧ: 'ḧ',
                ȟ: 'ȟ',
                ĥ: 'ĥ',
                ḣ: 'ḣ',
                í: 'í',
                ì: 'ì',
                ï: 'ï',
                ḯ: 'ḯ',
                ĩ: 'ĩ',
                ī: 'ī',
                ĭ: 'ĭ',
                ǐ: 'ǐ',
                î: 'î',
                ǰ: 'ǰ',
                ĵ: 'ĵ',
                ḱ: 'ḱ',
                ǩ: 'ǩ',
                ĺ: 'ĺ',
                ľ: 'ľ',
                ḿ: 'ḿ',
                ṁ: 'ṁ',
                ń: 'ń',
                ǹ: 'ǹ',
                ñ: 'ñ',
                ň: 'ň',
                ṅ: 'ṅ',
                ó: 'ó',
                ò: 'ò',
                ö: 'ö',
                ȫ: 'ȫ',
                õ: 'õ',
                ṍ: 'ṍ',
                ṏ: 'ṏ',
                ȭ: 'ȭ',
                ō: 'ō',
                ṓ: 'ṓ',
                ṑ: 'ṑ',
                ŏ: 'ŏ',
                ǒ: 'ǒ',
                ô: 'ô',
                ố: 'ố',
                ồ: 'ồ',
                ỗ: 'ỗ',
                ȯ: 'ȯ',
                ȱ: 'ȱ',
                ő: 'ő',
                ṕ: 'ṕ',
                ṗ: 'ṗ',
                ŕ: 'ŕ',
                ř: 'ř',
                ṙ: 'ṙ',
                ś: 'ś',
                ṥ: 'ṥ',
                š: 'š',
                ṧ: 'ṧ',
                ŝ: 'ŝ',
                ṡ: 'ṡ',
                ẗ: 'ẗ',
                ť: 'ť',
                ṫ: 'ṫ',
                ú: 'ú',
                ù: 'ù',
                ü: 'ü',
                ǘ: 'ǘ',
                ǜ: 'ǜ',
                ǖ: 'ǖ',
                ǚ: 'ǚ',
                ũ: 'ũ',
                ṹ: 'ṹ',
                ū: 'ū',
                ṻ: 'ṻ',
                ŭ: 'ŭ',
                ǔ: 'ǔ',
                û: 'û',
                ů: 'ů',
                ű: 'ű',
                ṽ: 'ṽ',
                ẃ: 'ẃ',
                ẁ: 'ẁ',
                ẅ: 'ẅ',
                ŵ: 'ŵ',
                ẇ: 'ẇ',
                ẘ: 'ẘ',
                ẍ: 'ẍ',
                ẋ: 'ẋ',
                ý: 'ý',
                ỳ: 'ỳ',
                ÿ: 'ÿ',
                ỹ: 'ỹ',
                ȳ: 'ȳ',
                ŷ: 'ŷ',
                ẏ: 'ẏ',
                ẙ: 'ẙ',
                ź: 'ź',
                ž: 'ž',
                ẑ: 'ẑ',
                ż: 'ż',
                Á: 'Á',
                À: 'À',
                Ä: 'Ä',
                Ǟ: 'Ǟ',
                Ã: 'Ã',
                Ā: 'Ā',
                Ă: 'Ă',
                Ắ: 'Ắ',
                Ằ: 'Ằ',
                Ẵ: 'Ẵ',
                Ǎ: 'Ǎ',
                Â: 'Â',
                Ấ: 'Ấ',
                Ầ: 'Ầ',
                Ẫ: 'Ẫ',
                Ȧ: 'Ȧ',
                Ǡ: 'Ǡ',
                Å: 'Å',
                Ǻ: 'Ǻ',
                Ḃ: 'Ḃ',
                Ć: 'Ć',
                Č: 'Č',
                Ĉ: 'Ĉ',
                Ċ: 'Ċ',
                Ď: 'Ď',
                Ḋ: 'Ḋ',
                É: 'É',
                È: 'È',
                Ë: 'Ë',
                Ẽ: 'Ẽ',
                Ē: 'Ē',
                Ḗ: 'Ḗ',
                Ḕ: 'Ḕ',
                Ĕ: 'Ĕ',
                Ě: 'Ě',
                Ê: 'Ê',
                Ế: 'Ế',
                Ề: 'Ề',
                Ễ: 'Ễ',
                Ė: 'Ė',
                Ḟ: 'Ḟ',
                Ǵ: 'Ǵ',
                Ḡ: 'Ḡ',
                Ğ: 'Ğ',
                Ǧ: 'Ǧ',
                Ĝ: 'Ĝ',
                Ġ: 'Ġ',
                Ḧ: 'Ḧ',
                Ȟ: 'Ȟ',
                Ĥ: 'Ĥ',
                Ḣ: 'Ḣ',
                Í: 'Í',
                Ì: 'Ì',
                Ï: 'Ï',
                Ḯ: 'Ḯ',
                Ĩ: 'Ĩ',
                Ī: 'Ī',
                Ĭ: 'Ĭ',
                Ǐ: 'Ǐ',
                Î: 'Î',
                İ: 'İ',
                Ĵ: 'Ĵ',
                Ḱ: 'Ḱ',
                Ǩ: 'Ǩ',
                Ĺ: 'Ĺ',
                Ľ: 'Ľ',
                Ḿ: 'Ḿ',
                Ṁ: 'Ṁ',
                Ń: 'Ń',
                Ǹ: 'Ǹ',
                Ñ: 'Ñ',
                Ň: 'Ň',
                Ṅ: 'Ṅ',
                Ó: 'Ó',
                Ò: 'Ò',
                Ö: 'Ö',
                Ȫ: 'Ȫ',
                Õ: 'Õ',
                Ṍ: 'Ṍ',
                Ṏ: 'Ṏ',
                Ȭ: 'Ȭ',
                Ō: 'Ō',
                Ṓ: 'Ṓ',
                Ṑ: 'Ṑ',
                Ŏ: 'Ŏ',
                Ǒ: 'Ǒ',
                Ô: 'Ô',
                Ố: 'Ố',
                Ồ: 'Ồ',
                Ỗ: 'Ỗ',
                Ȯ: 'Ȯ',
                Ȱ: 'Ȱ',
                Ő: 'Ő',
                Ṕ: 'Ṕ',
                Ṗ: 'Ṗ',
                Ŕ: 'Ŕ',
                Ř: 'Ř',
                Ṙ: 'Ṙ',
                Ś: 'Ś',
                Ṥ: 'Ṥ',
                Š: 'Š',
                Ṧ: 'Ṧ',
                Ŝ: 'Ŝ',
                Ṡ: 'Ṡ',
                Ť: 'Ť',
                Ṫ: 'Ṫ',
                Ú: 'Ú',
                Ù: 'Ù',
                Ü: 'Ü',
                Ǘ: 'Ǘ',
                Ǜ: 'Ǜ',
                Ǖ: 'Ǖ',
                Ǚ: 'Ǚ',
                Ũ: 'Ũ',
                Ṹ: 'Ṹ',
                Ū: 'Ū',
                Ṻ: 'Ṻ',
                Ŭ: 'Ŭ',
                Ǔ: 'Ǔ',
                Û: 'Û',
                Ů: 'Ů',
                Ű: 'Ű',
                Ṽ: 'Ṽ',
                Ẃ: 'Ẃ',
                Ẁ: 'Ẁ',
                Ẅ: 'Ẅ',
                Ŵ: 'Ŵ',
                Ẇ: 'Ẇ',
                Ẍ: 'Ẍ',
                Ẋ: 'Ẋ',
                Ý: 'Ý',
                Ỳ: 'Ỳ',
                Ÿ: 'Ÿ',
                Ỹ: 'Ỹ',
                Ȳ: 'Ȳ',
                Ŷ: 'Ŷ',
                Ẏ: 'Ẏ',
                Ź: 'Ź',
                Ž: 'Ž',
                Ẑ: 'Ẑ',
                Ż: 'Ż',
                ά: 'ά',
                ὰ: 'ὰ',
                ᾱ: 'ᾱ',
                ᾰ: 'ᾰ',
                έ: 'έ',
                ὲ: 'ὲ',
                ή: 'ή',
                ὴ: 'ὴ',
                ί: 'ί',
                ὶ: 'ὶ',
                ϊ: 'ϊ',
                ΐ: 'ΐ',
                ῒ: 'ῒ',
                ῑ: 'ῑ',
                ῐ: 'ῐ',
                ό: 'ό',
                ὸ: 'ὸ',
                ύ: 'ύ',
                ὺ: 'ὺ',
                ϋ: 'ϋ',
                ΰ: 'ΰ',
                ῢ: 'ῢ',
                ῡ: 'ῡ',
                ῠ: 'ῠ',
                ώ: 'ώ',
                ὼ: 'ὼ',
                Ύ: 'Ύ',
                Ὺ: 'Ὺ',
                Ϋ: 'Ϋ',
                Ῡ: 'Ῡ',
                Ῠ: 'Ῠ',
                Ώ: 'Ώ',
                Ὼ: 'Ὼ',
              },
              dn = (function () {
                function t(t, e) {
                  ;(this.mode = void 0),
                    (this.gullet = void 0),
                    (this.settings = void 0),
                    (this.leftrightDepth = void 0),
                    (this.nextToken = void 0),
                    (this.mode = 'math'),
                    (this.gullet = new mn(t, e, this.mode)),
                    (this.settings = e),
                    (this.leftrightDepth = 0)
                }
                var e = t.prototype
                return (
                  (e.expect = function (t, e) {
                    if ((void 0 === e && (e = !0), this.nextToken.text !== t))
                      throw new o(
                        "Expected '" +
                          t +
                          "', got '" +
                          this.nextToken.text +
                          "'",
                        this.nextToken
                      )
                    e && this.consume()
                  }),
                  (e.consume = function () {
                    this.nextToken = this.gullet.expandNextToken()
                  }),
                  (e.switchMode = function (t) {
                    ;(this.mode = t), this.gullet.switchMode(t)
                  }),
                  (e.parse = function () {
                    this.gullet.beginGroup(),
                      this.settings.colorIsTextColor &&
                        this.gullet.macros.set('\\color', '\\textcolor'),
                      this.consume()
                    var t = this.parseExpression(!1)
                    return this.expect('EOF', !1), this.gullet.endGroup(), t
                  }),
                  (e.parseExpression = function (e, r) {
                    for (var n = []; ; ) {
                      'math' === this.mode && this.consumeSpaces()
                      var a = this.nextToken
                      if (-1 !== t.endOfExpression.indexOf(a.text)) break
                      if (r && a.text === r) break
                      if (e && $r[a.text] && $r[a.text].infix) break
                      var i = this.parseAtom(r)
                      if (!i) break
                      n.push(i)
                    }
                    return (
                      'text' === this.mode && this.formLigatures(n),
                      this.handleInfixNodes(n)
                    )
                  }),
                  (e.handleInfixNodes = function (t) {
                    for (var e, r = -1, n = 0; n < t.length; n++) {
                      var a = Ht(t[n], 'infix')
                      if (a) {
                        if (-1 !== r)
                          throw new o(
                            'only one infix operator per group',
                            a.token
                          )
                        ;(r = n), (e = a.replaceWith)
                      }
                    }
                    if (-1 !== r && e) {
                      var i,
                        s,
                        h = t.slice(0, r),
                        l = t.slice(r + 1)
                      return (
                        (i =
                          1 === h.length && 'ordgroup' === h[0].type
                            ? h[0]
                            : { type: 'ordgroup', mode: this.mode, body: h }),
                        (s =
                          1 === l.length && 'ordgroup' === l[0].type
                            ? l[0]
                            : { type: 'ordgroup', mode: this.mode, body: l }),
                        [
                          '\\\\abovefrac' === e
                            ? this.callFunction(e, [i, t[r], s], [])
                            : this.callFunction(e, [i, s], []),
                        ]
                      )
                    }
                    return t
                  }),
                  (e.handleSupSubscript = function (e) {
                    var r = this.nextToken,
                      n = r.text
                    this.consume(), this.consumeSpaces()
                    var a = this.parseGroup(e, !1, t.SUPSUB_GREEDINESS)
                    if (!a) throw new o("Expected group after '" + n + "'", r)
                    return a
                  }),
                  (e.handleUnsupportedCmd = function () {
                    for (
                      var t = this.nextToken.text, e = [], r = 0;
                      r < t.length;
                      r++
                    )
                      e.push({ type: 'textord', mode: 'text', text: t[r] })
                    var n = { type: 'text', mode: this.mode, body: e },
                      a = {
                        type: 'color',
                        mode: this.mode,
                        color: this.settings.errorColor,
                        body: [n],
                      }
                    return this.consume(), a
                  }),
                  (e.parseAtom = function (t) {
                    var e,
                      r,
                      n = this.parseGroup('atom', !1, null, t)
                    if ('text' === this.mode) return n
                    for (;;) {
                      this.consumeSpaces()
                      var a = this.nextToken
                      if ('\\limits' === a.text || '\\nolimits' === a.text) {
                        var i = Ht(n, 'op')
                        if (!i)
                          throw new o(
                            'Limit controls must follow a math operator',
                            a
                          )
                        var s = '\\limits' === a.text
                        ;(i.limits = s),
                          (i.alwaysHandleSupSub = !0),
                          this.consume()
                      } else if ('^' === a.text) {
                        if (e) throw new o('Double superscript', a)
                        e = this.handleSupSubscript('superscript')
                      } else if ('_' === a.text) {
                        if (r) throw new o('Double subscript', a)
                        r = this.handleSupSubscript('subscript')
                      } else {
                        if ("'" !== a.text) break
                        if (e) throw new o('Double superscript', a)
                        var h = {
                            type: 'textord',
                            mode: this.mode,
                            text: '\\prime',
                          },
                          l = [h]
                        for (this.consume(); "'" === this.nextToken.text; )
                          l.push(h), this.consume()
                        '^' === this.nextToken.text &&
                          l.push(this.handleSupSubscript('superscript')),
                          (e = { type: 'ordgroup', mode: this.mode, body: l })
                      }
                    }
                    return e || r
                      ? {
                          type: 'supsub',
                          mode: this.mode,
                          base: n,
                          sup: e,
                          sub: r,
                        }
                      : n
                  }),
                  (e.parseFunction = function (t, e, r) {
                    var n = this.nextToken,
                      a = n.text,
                      i = $r[a]
                    if (!i) return null
                    if (null != r && i.greediness <= r)
                      throw new o(
                        "Got function '" +
                          a +
                          "' with no arguments" +
                          (e ? ' as ' + e : ''),
                        n
                      )
                    if ('text' === this.mode && !i.allowedInText)
                      throw new o(
                        "Can't use function '" + a + "' in text mode",
                        n
                      )
                    if ('math' === this.mode && !1 === i.allowedInMath)
                      throw new o(
                        "Can't use function '" + a + "' in math mode",
                        n
                      )
                    if (
                      (i.argTypes &&
                        'url' === i.argTypes[0] &&
                        this.gullet.lexer.setCatcode('%', 13),
                      i.consumeMode)
                    ) {
                      var s = this.mode
                      this.switchMode(i.consumeMode),
                        this.consume(),
                        this.switchMode(s)
                    } else this.consume()
                    var h = this.parseArguments(a, i),
                      l = h.args,
                      m = h.optArgs
                    return this.callFunction(a, l, m, n, t)
                  }),
                  (e.callFunction = function (t, e, r, n, a) {
                    var i = {
                        funcName: t,
                        parser: this,
                        token: n,
                        breakOnTokenText: a,
                      },
                      s = $r[t]
                    if (s && s.handler) return s.handler(i, e, r)
                    throw new o('No function handler for ' + t)
                  }),
                  (e.parseArguments = function (t, e) {
                    var r = e.numArgs + e.numOptionalArgs
                    if (0 === r) return { args: [], optArgs: [] }
                    for (
                      var n = e.greediness, a = [], i = [], s = 0;
                      s < r;
                      s++
                    ) {
                      var h = e.argTypes && e.argTypes[s],
                        l = s < e.numOptionalArgs
                      s > 0 && !l && this.consumeSpaces(),
                        0 !== s ||
                          l ||
                          'math' !== this.mode ||
                          this.consumeSpaces()
                      var m = this.nextToken,
                        c = this.parseGroupOfType(
                          "argument to '" + t + "'",
                          h,
                          l,
                          n
                        )
                      if (!c) {
                        if (l) {
                          i.push(null)
                          continue
                        }
                        throw new o("Expected group after '" + t + "'", m)
                      }
                      ;(l ? i : a).push(c)
                    }
                    return { args: a, optArgs: i }
                  }),
                  (e.parseGroupOfType = function (t, e, r, n) {
                    switch (e) {
                      case 'color':
                        return this.parseColorGroup(r)
                      case 'size':
                        return this.parseSizeGroup(r)
                      case 'url':
                        return this.parseUrlGroup(r)
                      case 'math':
                      case 'text':
                        return this.parseGroup(t, r, n, void 0, e)
                      case 'raw':
                        if (r && '{' === this.nextToken.text) return null
                        var a = this.parseStringGroup('raw', r, !0)
                        if (a)
                          return { type: 'raw', mode: 'text', string: a.text }
                        throw new o('Expected raw group', this.nextToken)
                      case 'original':
                      case null:
                      case void 0:
                        return this.parseGroup(t, r, n)
                      default:
                        throw new o(
                          'Unknown group type as ' + t,
                          this.nextToken
                        )
                    }
                  }),
                  (e.consumeSpaces = function () {
                    for (; ' ' === this.nextToken.text; ) this.consume()
                  }),
                  (e.parseStringGroup = function (t, e, r) {
                    var n = e ? '[' : '{',
                      a = e ? ']' : '}',
                      i = this.nextToken
                    if (i.text !== n) {
                      if (e) return null
                      if (r && 'EOF' !== i.text && /[^{}[\]]/.test(i.text))
                        return (
                          this.gullet.lexer.setCatcode('%', 14),
                          this.consume(),
                          i
                        )
                    }
                    var s = this.mode
                    ;(this.mode = 'text'), this.expect(n)
                    for (
                      var h = '', l = this.nextToken, m = 0, c = l;
                      (r && m > 0) || this.nextToken.text !== a;

                    ) {
                      switch (this.nextToken.text) {
                        case 'EOF':
                          throw new o(
                            'Unexpected end of input in ' + t,
                            l.range(c, h)
                          )
                        case n:
                          m++
                          break
                        case a:
                          m--
                      }
                      ;(h += (c = this.nextToken).text), this.consume()
                    }
                    return (
                      (this.mode = s),
                      this.gullet.lexer.setCatcode('%', 14),
                      this.expect(a),
                      l.range(c, h)
                    )
                  }),
                  (e.parseRegexGroup = function (t, e) {
                    var r = this.mode
                    this.mode = 'text'
                    for (
                      var n = this.nextToken, a = n, i = '';
                      'EOF' !== this.nextToken.text &&
                      t.test(i + this.nextToken.text);

                    )
                      (i += (a = this.nextToken).text), this.consume()
                    if ('' === i)
                      throw new o('Invalid ' + e + ": '" + n.text + "'", n)
                    return (this.mode = r), n.range(a, i)
                  }),
                  (e.parseColorGroup = function (t) {
                    var e = this.parseStringGroup('color', t)
                    if (!e) return null
                    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(
                      e.text
                    )
                    if (!r) throw new o("Invalid color: '" + e.text + "'", e)
                    var n = r[0]
                    return (
                      /^[0-9a-f]{6}$/i.test(n) && (n = '#' + n),
                      { type: 'color-token', mode: this.mode, color: n }
                    )
                  }),
                  (e.parseSizeGroup = function (t) {
                    var e,
                      r = !1
                    if (
                      !(e =
                        t || '{' === this.nextToken.text
                          ? this.parseStringGroup('size', t)
                          : this.parseRegexGroup(
                              /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                              'size'
                            ))
                    )
                      return null
                    t || 0 !== e.text.length || ((e.text = '0pt'), (r = !0))
                    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
                      e.text
                    )
                    if (!n) throw new o("Invalid size: '" + e.text + "'", e)
                    var a,
                      i = { number: +(n[1] + n[2]), unit: n[3] }
                    if (
                      ('string' != typeof (a = i) && (a = a.unit),
                      !(a in St || a in Mt || 'ex' === a))
                    )
                      throw new o("Invalid unit: '" + i.unit + "'", e)
                    return {
                      type: 'size',
                      mode: this.mode,
                      value: i,
                      isBlank: r,
                    }
                  }),
                  (e.parseUrlGroup = function (t) {
                    var e = this.parseStringGroup('url', t, !0)
                    if (!e) return null
                    var r = e.text.replace(/\\([#$%&~_^{}])/g, '$1'),
                      n = /^\s*([^\\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(r)
                    n = null != n ? n[1] : '_relative'
                    var a = this.settings.allowedProtocols
                    if (!c.contains(a, '*') && !c.contains(a, n))
                      throw new o("Forbidden protocol '" + n + "'", e)
                    return { type: 'url', mode: this.mode, url: r }
                  }),
                  (e.parseGroup = function (e, r, a, i, s) {
                    var h,
                      l,
                      m = this.mode,
                      c = this.nextToken,
                      u = c.text
                    if (
                      (s && this.switchMode(s),
                      r ? '[' === u : '{' === u || '\\begingroup' === u)
                    ) {
                      ;(h = t.endOfGroup[u]),
                        this.gullet.beginGroup(),
                        this.consume()
                      var d = this.parseExpression(!1, h),
                        p = this.nextToken
                      this.gullet.endGroup(),
                        (l = {
                          type: 'ordgroup',
                          mode: this.mode,
                          loc: n.range(c, p),
                          body: d,
                          semisimple: '\\begingroup' === u || void 0,
                        })
                    } else if (r) l = null
                    else if (
                      null ==
                        (l =
                          this.parseFunction(i, e, a) || this.parseSymbol()) &&
                      '\\' === u[0] &&
                      !ln.hasOwnProperty(u)
                    ) {
                      if (this.settings.throwOnError)
                        throw new o('Undefined control sequence: ' + u, c)
                      l = this.handleUnsupportedCmd()
                    }
                    return s && this.switchMode(m), h && this.expect(h), l
                  }),
                  (e.formLigatures = function (t) {
                    for (var e = t.length - 1, r = 0; r < e; ++r) {
                      var a = t[r],
                        i = a.text
                      '-' === i &&
                        '-' === t[r + 1].text &&
                        (r + 1 < e && '-' === t[r + 2].text
                          ? (t.splice(r, 3, {
                              type: 'textord',
                              mode: 'text',
                              loc: n.range(a, t[r + 2]),
                              text: '---',
                            }),
                            (e -= 2))
                          : (t.splice(r, 2, {
                              type: 'textord',
                              mode: 'text',
                              loc: n.range(a, t[r + 1]),
                              text: '--',
                            }),
                            (e -= 1))),
                        ("'" !== i && '`' !== i) ||
                          t[r + 1].text !== i ||
                          (t.splice(r, 2, {
                            type: 'textord',
                            mode: 'text',
                            loc: n.range(a, t[r + 1]),
                            text: i + i,
                          }),
                          (e -= 1))
                    }
                  }),
                  (e.parseSymbol = function () {
                    var t = this.nextToken,
                      e = t.text
                    if (/^\\verb[^a-zA-Z]/.test(e)) {
                      this.consume()
                      var r = e.slice(5),
                        a = '*' === r.charAt(0)
                      if (
                        (a && (r = r.slice(1)),
                        r.length < 2 || r.charAt(0) !== r.slice(-1))
                      )
                        throw new o(
                          '\\verb assertion failed --\n                    please report what input caused this bug'
                        )
                      return {
                        type: 'verb',
                        mode: 'text',
                        body: (r = r.slice(1, -1)),
                        star: a,
                      }
                    }
                    un.hasOwnProperty(e[0]) &&
                      !Y[this.mode][e[0]] &&
                      (this.settings.strict &&
                        'math' === this.mode &&
                        this.settings.reportNonstrict(
                          'unicodeTextInMathMode',
                          'Accented Unicode text character "' +
                            e[0] +
                            '" used in math mode',
                          t
                        ),
                      (e = un[e[0]] + e.substr(1)))
                    var i,
                      s = jr.exec(e)
                    if (
                      (s &&
                        ('i' === (e = e.substring(0, s.index))
                          ? (e = 'ı')
                          : 'j' === e && (e = 'ȷ')),
                      Y[this.mode][e])
                    ) {
                      this.settings.strict &&
                        'math' === this.mode &&
                        'ÇÐÞçþ'.indexOf(e) >= 0 &&
                        this.settings.reportNonstrict(
                          'unicodeTextInMathMode',
                          'Latin-1/Unicode text character "' +
                            e[0] +
                            '" used in math mode',
                          t
                        )
                      var h,
                        l = Y[this.mode][e].group,
                        m = n.range(t)
                      if (G.hasOwnProperty(l)) {
                        var c = l
                        h = {
                          type: 'atom',
                          mode: this.mode,
                          family: c,
                          loc: m,
                          text: e,
                        }
                      } else h = { type: l, mode: this.mode, loc: m, text: e }
                      i = h
                    } else {
                      if (!(e.charCodeAt(0) >= 128)) return null
                      this.settings.strict &&
                        (M(e.charCodeAt(0))
                          ? 'math' === this.mode &&
                            this.settings.reportNonstrict(
                              'unicodeTextInMathMode',
                              'Unicode text character "' +
                                e[0] +
                                '" used in math mode',
                              t
                            )
                          : this.settings.reportNonstrict(
                              'unknownSymbol',
                              'Unrecognized Unicode character "' +
                                e[0] +
                                '" (' +
                                e.charCodeAt(0) +
                                ')',
                              t
                            )),
                        (i = {
                          type: 'textord',
                          mode: this.mode,
                          loc: n.range(t),
                          text: e,
                        })
                    }
                    if ((this.consume(), s))
                      for (var u = 0; u < s[0].length; u++) {
                        var d = s[0][u]
                        if (!cn[d])
                          throw new o("Unknown accent ' " + d + "'", t)
                        var p = cn[d][this.mode]
                        if (!p)
                          throw new o(
                            'Accent ' +
                              d +
                              ' unsupported in ' +
                              this.mode +
                              ' mode',
                            t
                          )
                        i = {
                          type: 'accent',
                          mode: this.mode,
                          loc: n.range(t),
                          label: p,
                          isStretchy: !1,
                          isShifty: !0,
                          base: i,
                        }
                      }
                    return i
                  }),
                  t
                )
              })()
            ;(dn.endOfExpression = [
              '}',
              '\\endgroup',
              '\\end',
              '\\right',
              '&',
            ]),
              (dn.endOfGroup = {
                '[': ']',
                '{': '}',
                '\\begingroup': '\\endgroup',
              }),
              (dn.SUPSUB_GREEDINESS = 1)
            var pn = function (t, e) {
                if (!('string' == typeof t || t instanceof String))
                  throw new TypeError(
                    'KaTeX can only parse string typed expression'
                  )
                var r = new dn(t, e)
                delete r.gullet.macros.current['\\df@tag']
                var n = r.parse()
                if (r.gullet.macros.get('\\df@tag')) {
                  if (!e.displayMode)
                    throw new o('\\tag works only in display equations')
                  r.gullet.feed('\\df@tag'),
                    (n = [
                      { type: 'tag', mode: 'text', body: n, tag: r.parse() },
                    ])
                }
                return n
              },
              fn = function (t, e, r) {
                e.textContent = ''
                var n = xn(t, r).toNode()
                e.appendChild(n)
              }
            'undefined' != typeof document &&
              'CSS1Compat' !== document.compatMode &&
              ('undefined' != typeof console &&
                console.warn(
                  "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."
                ),
              (fn = function () {
                throw new o("KaTeX doesn't work in quirks mode.")
              }))
            var gn = function (t, e, r) {
                if (r.throwOnError || !(t instanceof o)) throw t
                var n = Pt.makeSpan(['katex-error'], [new I(e)])
                return (
                  n.setAttribute('title', t.toString()),
                  n.setAttribute('style', 'color:' + r.errorColor),
                  n
                )
              },
              xn = function (t, e) {
                var r = new u(e)
                try {
                  var n = pn(t, r)
                  return Me(n, t, r)
                } catch (e) {
                  return gn(e, t, r)
                }
              },
              vn = {
                version: '0.10.1',
                render: fn,
                renderToString: function (t, e) {
                  return xn(t, e).toMarkup()
                },
                ParseError: o,
                __parse: function (t, e) {
                  var r = new u(e)
                  return pn(t, r)
                },
                __renderToDomTree: xn,
                __renderToHTMLTree: function (t, e) {
                  var r = new u(e)
                  try {
                    return (function (t, e, r) {
                      var n = ce(t, ke(r)),
                        a = Pt.makeSpan(['katex'], [n])
                      return Se(a, r)
                    })(pn(t, r), 0, r)
                  } catch (e) {
                    return gn(e, t, r)
                  }
                },
                __setFontMetrics: function (t, e) {
                  D[t] = e
                },
                __defineSymbol: $,
                __defineMacro: en,
                __domTree: {
                  Span: q,
                  Anchor: O,
                  SymbolNode: I,
                  SvgNode: R,
                  PathNode: L,
                  LineNode: P,
                },
              }
            e.default = vn
          },
        ]).default
      }),
      (t.exports = n())
  },
  function (t, e, r) {
    'use strict'
    r.r(e)
    var n = r(0),
      a = r.n(n)
    let i = { throwOnError: !1, displayMode: !1 },
      o = { throwOnError: !1, displayMode: !0 }
    const s = 'c194a9eb',
      h = /c194a9eb/g,
      l = 'c194a9ec',
      m = /c194a9ec/g,
      c = 'c194a9ed',
      u = /c194a9ed/g,
      d = 'c194a9ee',
      p = /c194a9ee/g,
      f = 'c194a9ef',
      g = /c194a9ef/g,
      x = 'c194a9eg\x3c!-- begin-inline-katex',
      v = 'end-inline-katex--\x3e',
      y = /c194a9eg<!-- begin-inline-katex([\s\S]*?)end-inline-katex-->/g,
      b = '\x3c!-- begin-block-katex',
      w = 'end-block-katex--\x3e',
      k = /<!-- begin-block-katex([\s\S]*?)end-block-katex-->/g
    !(function () {
      $docsify.plugins = [].concat(function (t) {
        t.beforeEach((t) => {
          let e = t
            .replace(/<code>(.*)<\/code>/g, function (t, e) {
              return `<code>${e.replace(/`/g, l)}</code>`
            })
            .replace(/\$`\$/g, c)
            .replace(/\\`\{/g, d)
            .replace(/\\\$/g, s)
            .replace(/`[^`]*`/g, function (t) {
              return t.replace(/\$/g, f)
            })
            .replace(m, '`')
          return (e = (e = e.replace(u, '$ `$').replace(p, '\\`{'))
            .replace(/(\$\$)([\s\S]*?)(\$\$)/g, function (t, e, r) {
              return b + r + w
            })
            .replace(/(\$)([\s\S]*?)(\$)/g, function (t, e, r) {
              return x + r.replace(h, '\\$') + v
            })
            .replace(h, '\\$'))
        }),
          t.afterEach(function (t, e) {
            let r = t.replace(y, function (t, e) {
              return a.a.renderToString(e, i)
            })
            e(
              (r = r.replace(k, function (t, e) {
                return a.a.renderToString(e, o)
              })).replace(g, '$')
            )
          })
      }, $docsify.plugins)
    })()
  },
])
