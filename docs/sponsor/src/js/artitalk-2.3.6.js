/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /gh/Artitalk/Artitalk-jsdelivr@master/at236.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
'use strict'
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.AV = t())
    : (e.AV = t())
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports
      var i = (n[r] = { i: r, l: !1, exports: {} })
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
    }
    var n = {}
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          })
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return t.d(n, 'a', n), n
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (t.p = ''),
      t((t.s = 81))
    )
  })([
    function (e, t, n) {
      ;(function (e, n) {
        var r
        !(function () {
          var i =
              ('object' == typeof self && self.self === self && self) ||
              ('object' == typeof e && e.global === e && e) ||
              this ||
              {},
            o = i._,
            a = Array.prototype,
            s = Object.prototype,
            u = 'undefined' != typeof Symbol ? Symbol.prototype : null,
            c = a.push,
            l = a.slice,
            d = s.toString,
            h = s.hasOwnProperty,
            p = Array.isArray,
            f = Object.keys,
            g = Object.create,
            m = function () {},
            _ = function (e) {
              return e instanceof _
                ? e
                : this instanceof _
                ? void (this._wrapped = e)
                : new _(e)
            }
          void 0 === t || t.nodeType
            ? (i._ = _)
            : (void 0 !== n && !n.nodeType && n.exports && (t = n.exports = _),
              (t._ = _)),
            (_.VERSION = '1.9.1')
          var v,
            b = function (e, t, n) {
              if (void 0 === t) return e
              switch (null == n ? 3 : n) {
                case 1:
                  return function (n) {
                    return e.call(t, n)
                  }
                case 3:
                  return function (n, r, i) {
                    return e.call(t, n, r, i)
                  }
                case 4:
                  return function (n, r, i, o) {
                    return e.call(t, n, r, i, o)
                  }
              }
              return function () {
                return e.apply(t, arguments)
              }
            },
            y = function (e, t, n) {
              return _.iteratee !== v
                ? _.iteratee(e, t)
                : null == e
                ? _.identity
                : _.isFunction(e)
                ? b(e, t, n)
                : _.isObject(e) && !_.isArray(e)
                ? _.matcher(e)
                : _.property(e)
            }
          _.iteratee = v = function (e, t) {
            return y(e, t, 1 / 0)
          }
          var w = function (e, t) {
              return (
                (t = null == t ? e.length - 1 : +t),
                function () {
                  for (
                    var n = Math.max(arguments.length - t, 0),
                      r = Array(n),
                      i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i + t]
                  switch (t) {
                    case 0:
                      return e.call(this, r)
                    case 1:
                      return e.call(this, arguments[0], r)
                    case 2:
                      return e.call(this, arguments[0], arguments[1], r)
                  }
                  var o = Array(t + 1)
                  for (i = 0; i < t; i++) o[i] = arguments[i]
                  return (o[t] = r), e.apply(this, o)
                }
              )
            },
            k = function (e) {
              if (!_.isObject(e)) return {}
              if (g) return g(e)
              m.prototype = e
              var t = new m()
              return (m.prototype = null), t
            },
            A = function (e) {
              return function (t) {
                return null == t ? void 0 : t[e]
              }
            },
            j = function (e, t) {
              return null != e && h.call(e, t)
            },
            x = function (e, t) {
              for (var n = t.length, r = 0; r < n; r++) {
                if (null == e) return
                e = e[t[r]]
              }
              return n ? e : void 0
            },
            E = Math.pow(2, 53) - 1,
            S = A('length'),
            O = function (e) {
              var t = S(e)
              return 'number' == typeof t && t >= 0 && t <= E
            }
          ;(_.each = _.forEach =
            function (e, t, n) {
              var r, i
              if (((t = b(t, n)), O(e)))
                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e)
              else {
                var o = _.keys(e)
                for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
              }
              return e
            }),
            (_.map = _.collect =
              function (e, t, n) {
                t = y(t, n)
                for (
                  var r = !O(e) && _.keys(e),
                    i = (r || e).length,
                    o = Array(i),
                    a = 0;
                  a < i;
                  a++
                ) {
                  var s = r ? r[a] : a
                  o[a] = t(e[s], s, e)
                }
                return o
              })
          var C = function (e) {
            var t = function (t, n, r, i) {
              var o = !O(t) && _.keys(t),
                a = (o || t).length,
                s = e > 0 ? 0 : a - 1
              for (
                i || ((r = t[o ? o[s] : s]), (s += e));
                s >= 0 && s < a;
                s += e
              ) {
                var u = o ? o[s] : s
                r = n(r, t[u], u, t)
              }
              return r
            }
            return function (e, n, r, i) {
              var o = arguments.length >= 3
              return t(e, b(n, i, 4), r, o)
            }
          }
          ;(_.reduce = _.foldl = _.inject = C(1)),
            (_.reduceRight = _.foldr = C(-1)),
            (_.find = _.detect =
              function (e, t, n) {
                var r = (O(e) ? _.findIndex : _.findKey)(e, t, n)
                if (void 0 !== r && -1 !== r) return e[r]
              }),
            (_.filter = _.select =
              function (e, t, n) {
                var r = []
                return (
                  (t = y(t, n)),
                  _.each(e, function (e, n, i) {
                    t(e, n, i) && r.push(e)
                  }),
                  r
                )
              }),
            (_.reject = function (e, t, n) {
              return _.filter(e, _.negate(y(t)), n)
            }),
            (_.every = _.all =
              function (e, t, n) {
                t = y(t, n)
                for (
                  var r = !O(e) && _.keys(e), i = (r || e).length, o = 0;
                  o < i;
                  o++
                ) {
                  var a = r ? r[o] : o
                  if (!t(e[a], a, e)) return !1
                }
                return !0
              }),
            (_.some = _.any =
              function (e, t, n) {
                t = y(t, n)
                for (
                  var r = !O(e) && _.keys(e), i = (r || e).length, o = 0;
                  o < i;
                  o++
                ) {
                  var a = r ? r[o] : o
                  if (t(e[a], a, e)) return !0
                }
                return !1
              }),
            (_.contains =
              _.includes =
              _.include =
                function (e, t, n, r) {
                  return (
                    O(e) || (e = _.values(e)),
                    ('number' != typeof n || r) && (n = 0),
                    _.indexOf(e, t, n) >= 0
                  )
                }),
            (_.invoke = w(function (e, t, n) {
              var r, i
              return (
                _.isFunction(t)
                  ? (i = t)
                  : _.isArray(t) &&
                    ((r = t.slice(0, -1)), (t = t[t.length - 1])),
                _.map(e, function (e) {
                  var o = i
                  if (!o) {
                    if ((r && r.length && (e = x(e, r)), null == e)) return
                    o = e[t]
                  }
                  return null == o ? o : o.apply(e, n)
                })
              )
            })),
            (_.pluck = function (e, t) {
              return _.map(e, _.property(t))
            }),
            (_.where = function (e, t) {
              return _.filter(e, _.matcher(t))
            }),
            (_.findWhere = function (e, t) {
              return _.find(e, _.matcher(t))
            }),
            (_.max = function (e, t, n) {
              var r,
                i,
                o = -1 / 0,
                a = -1 / 0
              if (
                null == t ||
                ('number' == typeof t && 'object' != typeof e[0] && null != e)
              )
                for (
                  var s = 0, u = (e = O(e) ? e : _.values(e)).length;
                  s < u;
                  s++
                )
                  null != (r = e[s]) && r > o && (o = r)
              else
                (t = y(t, n)),
                  _.each(e, function (e, n, r) {
                    ;((i = t(e, n, r)) > a || (i === -1 / 0 && o === -1 / 0)) &&
                      ((o = e), (a = i))
                  })
              return o
            }),
            (_.min = function (e, t, n) {
              var r,
                i,
                o = 1 / 0,
                a = 1 / 0
              if (
                null == t ||
                ('number' == typeof t && 'object' != typeof e[0] && null != e)
              )
                for (
                  var s = 0, u = (e = O(e) ? e : _.values(e)).length;
                  s < u;
                  s++
                )
                  null != (r = e[s]) && r < o && (o = r)
              else
                (t = y(t, n)),
                  _.each(e, function (e, n, r) {
                    ;((i = t(e, n, r)) < a || (i === 1 / 0 && o === 1 / 0)) &&
                      ((o = e), (a = i))
                  })
              return o
            }),
            (_.shuffle = function (e) {
              return _.sample(e, 1 / 0)
            }),
            (_.sample = function (e, t, n) {
              if (null == t || n)
                return O(e) || (e = _.values(e)), e[_.random(e.length - 1)]
              var r = O(e) ? _.clone(e) : _.values(e),
                i = S(r)
              t = Math.max(Math.min(t, i), 0)
              for (var o = i - 1, a = 0; a < t; a++) {
                var s = _.random(a, o),
                  u = r[a]
                ;(r[a] = r[s]), (r[s] = u)
              }
              return r.slice(0, t)
            }),
            (_.sortBy = function (e, t, n) {
              var r = 0
              return (
                (t = y(t, n)),
                _.pluck(
                  _.map(e, function (e, n, i) {
                    return { value: e, index: r++, criteria: t(e, n, i) }
                  }).sort(function (e, t) {
                    var n = e.criteria,
                      r = t.criteria
                    if (n !== r) {
                      if (n > r || void 0 === n) return 1
                      if (n < r || void 0 === r) return -1
                    }
                    return e.index - t.index
                  }),
                  'value'
                )
              )
            })
          var T = function (e, t) {
            return function (n, r, i) {
              var o = t ? [[], []] : {}
              return (
                (r = y(r, i)),
                _.each(n, function (t, i) {
                  var a = r(t, i, n)
                  e(o, t, a)
                }),
                o
              )
            }
          }
          ;(_.groupBy = T(function (e, t, n) {
            j(e, n) ? e[n].push(t) : (e[n] = [t])
          })),
            (_.indexBy = T(function (e, t, n) {
              e[n] = t
            })),
            (_.countBy = T(function (e, t, n) {
              j(e, n) ? e[n]++ : (e[n] = 1)
            }))
          var I =
            /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g
          ;(_.toArray = function (e) {
            return e
              ? _.isArray(e)
                ? l.call(e)
                : _.isString(e)
                ? e.match(I)
                : O(e)
                ? _.map(e, _.identity)
                : _.values(e)
              : []
          }),
            (_.size = function (e) {
              return null == e ? 0 : O(e) ? e.length : _.keys(e).length
            }),
            (_.partition = T(function (e, t, n) {
              e[n ? 0 : 1].push(t)
            }, !0)),
            (_.first =
              _.head =
              _.take =
                function (e, t, n) {
                  return null == e || e.length < 1
                    ? null == t
                      ? void 0
                      : []
                    : null == t || n
                    ? e[0]
                    : _.initial(e, e.length - t)
                }),
            (_.initial = function (e, t, n) {
              return l.call(
                e,
                0,
                Math.max(0, e.length - (null == t || n ? 1 : t))
              )
            }),
            (_.last = function (e, t, n) {
              return null == e || e.length < 1
                ? null == t
                  ? void 0
                  : []
                : null == t || n
                ? e[e.length - 1]
                : _.rest(e, Math.max(0, e.length - t))
            }),
            (_.rest =
              _.tail =
              _.drop =
                function (e, t, n) {
                  return l.call(e, null == t || n ? 1 : t)
                }),
            (_.compact = function (e) {
              return _.filter(e, Boolean)
            })
          var P = function (e, t, n, r) {
            for (var i = (r = r || []).length, o = 0, a = S(e); o < a; o++) {
              var s = e[o]
              if (O(s) && (_.isArray(s) || _.isArguments(s)))
                if (t) for (var u = 0, c = s.length; u < c; ) r[i++] = s[u++]
                else P(s, t, n, r), (i = r.length)
              else n || (r[i++] = s)
            }
            return r
          }
          ;(_.flatten = function (e, t) {
            return P(e, t, !1)
          }),
            (_.without = w(function (e, t) {
              return _.difference(e, t)
            })),
            (_.uniq = _.unique =
              function (e, t, n, r) {
                _.isBoolean(t) || ((r = n), (n = t), (t = !1)),
                  null != n && (n = y(n, r))
                for (var i = [], o = [], a = 0, s = S(e); a < s; a++) {
                  var u = e[a],
                    c = n ? n(u, a, e) : u
                  t && !n
                    ? ((a && o === c) || i.push(u), (o = c))
                    : n
                    ? _.contains(o, c) || (o.push(c), i.push(u))
                    : _.contains(i, u) || i.push(u)
                }
                return i
              }),
            (_.union = w(function (e) {
              return _.uniq(P(e, !0, !0))
            })),
            (_.intersection = function (e) {
              for (
                var t = [], n = arguments.length, r = 0, i = S(e);
                r < i;
                r++
              ) {
                var o = e[r]
                if (!_.contains(t, o)) {
                  var a
                  for (a = 1; a < n && _.contains(arguments[a], o); a++);
                  a === n && t.push(o)
                }
              }
              return t
            }),
            (_.difference = w(function (e, t) {
              return (
                (t = P(t, !0, !0)),
                _.filter(e, function (e) {
                  return !_.contains(t, e)
                })
              )
            })),
            (_.unzip = function (e) {
              for (
                var t = (e && _.max(e, S).length) || 0, n = Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = _.pluck(e, r)
              return n
            }),
            (_.zip = w(_.unzip)),
            (_.object = function (e, t) {
              for (var n = {}, r = 0, i = S(e); r < i; r++)
                t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1])
              return n
            })
          var M = function (e) {
            return function (t, n, r) {
              n = y(n, r)
              for (var i = S(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                if (n(t[o], o, t)) return o
              return -1
            }
          }
          ;(_.findIndex = M(1)),
            (_.findLastIndex = M(-1)),
            (_.sortedIndex = function (e, t, n, r) {
              for (var i = (n = y(n, r, 1))(t), o = 0, a = S(e); o < a; ) {
                var s = Math.floor((o + a) / 2)
                n(e[s]) < i ? (o = s + 1) : (a = s)
              }
              return o
            })
          var L = function (e, t, n) {
            return function (r, i, o) {
              var a = 0,
                s = S(r)
              if ('number' == typeof o)
                e > 0
                  ? (a = o >= 0 ? o : Math.max(o + s, a))
                  : (s = o >= 0 ? Math.min(o + 1, s) : o + s + 1)
              else if (n && o && s) return r[(o = n(r, i))] === i ? o : -1
              if (i != i)
                return (o = t(l.call(r, a, s), _.isNaN)) >= 0 ? o + a : -1
              for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
                if (r[o] === i) return o
              return -1
            }
          }
          ;(_.indexOf = L(1, _.findIndex, _.sortedIndex)),
            (_.lastIndexOf = L(-1, _.findLastIndex)),
            (_.range = function (e, t, n) {
              null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1)
              for (
                var r = Math.max(Math.ceil((t - e) / n), 0),
                  i = Array(r),
                  o = 0;
                o < r;
                o++, e += n
              )
                i[o] = e
              return i
            }),
            (_.chunk = function (e, t) {
              if (null == t || t < 1) return []
              for (var n = [], r = 0, i = e.length; r < i; )
                n.push(l.call(e, r, (r += t)))
              return n
            })
          var q = function (e, t, n, r, i) {
            if (!(r instanceof t)) return e.apply(n, i)
            var o = k(e.prototype),
              a = e.apply(o, i)
            return _.isObject(a) ? a : o
          }
          ;(_.bind = w(function (e, t, n) {
            if (!_.isFunction(e))
              throw new TypeError('Bind must be called on a function')
            var r = w(function (i) {
              return q(e, r, t, this, n.concat(i))
            })
            return r
          })),
            (_.partial = w(function (e, t) {
              var n = _.partial.placeholder,
                r = function () {
                  for (var i = 0, o = t.length, a = Array(o), s = 0; s < o; s++)
                    a[s] = t[s] === n ? arguments[i++] : t[s]
                  for (; i < arguments.length; ) a.push(arguments[i++])
                  return q(e, r, this, this, a)
                }
              return r
            })),
            (_.partial.placeholder = _),
            (_.bindAll = w(function (e, t) {
              var n = (t = P(t, !1, !1)).length
              if (n < 1)
                throw new Error('bindAll must be passed function names')
              for (; n--; ) {
                var r = t[n]
                e[r] = _.bind(e[r], e)
              }
            })),
            (_.memoize = function (e, t) {
              var n = function (r) {
                var i = n.cache,
                  o = '' + (t ? t.apply(this, arguments) : r)
                return j(i, o) || (i[o] = e.apply(this, arguments)), i[o]
              }
              return (n.cache = {}), n
            }),
            (_.delay = w(function (e, t, n) {
              return setTimeout(function () {
                return e.apply(null, n)
              }, t)
            })),
            (_.defer = _.partial(_.delay, _, 1)),
            (_.throttle = function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = 0
              n || (n = {})
              var u = function () {
                  ;(s = !1 === n.leading ? 0 : _.now()),
                    (r = null),
                    (a = e.apply(i, o)),
                    r || (i = o = null)
                },
                c = function () {
                  var c = _.now()
                  s || !1 !== n.leading || (s = c)
                  var l = t - (c - s)
                  return (
                    (i = this),
                    (o = arguments),
                    l <= 0 || l > t
                      ? (r && (clearTimeout(r), (r = null)),
                        (s = c),
                        (a = e.apply(i, o)),
                        r || (i = o = null))
                      : r || !1 === n.trailing || (r = setTimeout(u, l)),
                    a
                  )
                }
              return (
                (c.cancel = function () {
                  clearTimeout(r), (s = 0), (r = i = o = null)
                }),
                c
              )
            }),
            (_.debounce = function (e, t, n) {
              var r,
                i,
                o = function (t, n) {
                  ;(r = null), n && (i = e.apply(t, n))
                },
                a = w(function (a) {
                  if ((r && clearTimeout(r), n)) {
                    var s = !r
                    ;(r = setTimeout(o, t)), s && (i = e.apply(this, a))
                  } else r = _.delay(o, t, this, a)
                  return i
                })
              return (
                (a.cancel = function () {
                  clearTimeout(r), (r = null)
                }),
                a
              )
            }),
            (_.wrap = function (e, t) {
              return _.partial(t, e)
            }),
            (_.negate = function (e) {
              return function () {
                return !e.apply(this, arguments)
              }
            }),
            (_.compose = function () {
              var e = arguments,
                t = e.length - 1
              return function () {
                for (var n = t, r = e[t].apply(this, arguments); n--; )
                  r = e[n].call(this, r)
                return r
              }
            }),
            (_.after = function (e, t) {
              return function () {
                if (--e < 1) return t.apply(this, arguments)
              }
            }),
            (_.before = function (e, t) {
              var n
              return function () {
                return (
                  --e > 0 && (n = t.apply(this, arguments)),
                  e <= 1 && (t = null),
                  n
                )
              }
            }),
            (_.once = _.partial(_.before, 2)),
            (_.restArguments = w)
          var z = !{ toString: null }.propertyIsEnumerable('toString'),
            N = [
              'valueOf',
              'isPrototypeOf',
              'toString',
              'propertyIsEnumerable',
              'hasOwnProperty',
              'toLocaleString',
            ],
            U = function (e, t) {
              var n = N.length,
                r = e.constructor,
                i = (_.isFunction(r) && r.prototype) || s,
                o = 'constructor'
              for (j(e, o) && !_.contains(t, o) && t.push(o); n--; )
                (o = N[n]) in e &&
                  e[o] !== i[o] &&
                  !_.contains(t, o) &&
                  t.push(o)
            }
          ;(_.keys = function (e) {
            if (!_.isObject(e)) return []
            if (f) return f(e)
            var t = []
            for (var n in e) j(e, n) && t.push(n)
            return z && U(e, t), t
          }),
            (_.allKeys = function (e) {
              if (!_.isObject(e)) return []
              var t = []
              for (var n in e) t.push(n)
              return z && U(e, t), t
            }),
            (_.values = function (e) {
              for (
                var t = _.keys(e), n = t.length, r = Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = e[t[i]]
              return r
            }),
            (_.mapObject = function (e, t, n) {
              t = y(t, n)
              for (var r = _.keys(e), i = r.length, o = {}, a = 0; a < i; a++) {
                var s = r[a]
                o[s] = t(e[s], s, e)
              }
              return o
            }),
            (_.pairs = function (e) {
              for (
                var t = _.keys(e), n = t.length, r = Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = [t[i], e[t[i]]]
              return r
            }),
            (_.invert = function (e) {
              for (var t = {}, n = _.keys(e), r = 0, i = n.length; r < i; r++)
                t[e[n[r]]] = n[r]
              return t
            }),
            (_.functions = _.methods =
              function (e) {
                var t = []
                for (var n in e) _.isFunction(e[n]) && t.push(n)
                return t.sort()
              })
          var R = function (e, t) {
            return function (n) {
              var r = arguments.length
              if ((t && (n = Object(n)), r < 2 || null == n)) return n
              for (var i = 1; i < r; i++)
                for (
                  var o = arguments[i], a = e(o), s = a.length, u = 0;
                  u < s;
                  u++
                ) {
                  var c = a[u]
                  ;(t && void 0 !== n[c]) || (n[c] = o[c])
                }
              return n
            }
          }
          ;(_.extend = R(_.allKeys)),
            (_.extendOwn = _.assign = R(_.keys)),
            (_.findKey = function (e, t, n) {
              t = y(t, n)
              for (var r, i = _.keys(e), o = 0, a = i.length; o < a; o++)
                if (t(e[(r = i[o])], r, e)) return r
            })
          var B,
            D,
            H = function (e, t, n) {
              return t in n
            }
          ;(_.pick = w(function (e, t) {
            var n = {},
              r = t[0]
            if (null == e) return n
            _.isFunction(r)
              ? (t.length > 1 && (r = b(r, t[1])), (t = _.allKeys(e)))
              : ((r = H), (t = P(t, !1, !1)), (e = Object(e)))
            for (var i = 0, o = t.length; i < o; i++) {
              var a = t[i],
                s = e[a]
              r(s, a, e) && (n[a] = s)
            }
            return n
          })),
            (_.omit = w(function (e, t) {
              var n,
                r = t[0]
              return (
                _.isFunction(r)
                  ? ((r = _.negate(r)), t.length > 1 && (n = t[1]))
                  : ((t = _.map(P(t, !1, !1), String)),
                    (r = function (e, n) {
                      return !_.contains(t, n)
                    })),
                _.pick(e, r, n)
              )
            })),
            (_.defaults = R(_.allKeys, !0)),
            (_.create = function (e, t) {
              var n = k(e)
              return t && _.extendOwn(n, t), n
            }),
            (_.clone = function (e) {
              return _.isObject(e)
                ? _.isArray(e)
                  ? e.slice()
                  : _.extend({}, e)
                : e
            }),
            (_.tap = function (e, t) {
              return t(e), e
            }),
            (_.isMatch = function (e, t) {
              var n = _.keys(t),
                r = n.length
              if (null == e) return !r
              for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o]
                if (t[a] !== i[a] || !(a in i)) return !1
              }
              return !0
            }),
            (B = function (e, t, n, r) {
              if (e === t) return 0 !== e || 1 / e == 1 / t
              if (null == e || null == t) return !1
              if (e != e) return t != t
              var i = typeof e
              return (
                ('function' === i || 'object' === i || 'object' == typeof t) &&
                D(e, t, n, r)
              )
            }),
            (D = function (e, t, n, r) {
              e instanceof _ && (e = e._wrapped),
                t instanceof _ && (t = t._wrapped)
              var i = d.call(e)
              if (i !== d.call(t)) return !1
              switch (i) {
                case '[object RegExp]':
                case '[object String]':
                  return '' + e == '' + t
                case '[object Number]':
                  return +e != +e
                    ? +t != +t
                    : 0 == +e
                    ? 1 / +e == 1 / t
                    : +e == +t
                case '[object Date]':
                case '[object Boolean]':
                  return +e == +t
                case '[object Symbol]':
                  return u.valueOf.call(e) === u.valueOf.call(t)
              }
              var o = '[object Array]' === i
              if (!o) {
                if ('object' != typeof e || 'object' != typeof t) return !1
                var a = e.constructor,
                  s = t.constructor
                if (
                  a !== s &&
                  !(
                    _.isFunction(a) &&
                    a instanceof a &&
                    _.isFunction(s) &&
                    s instanceof s
                  ) &&
                  'constructor' in e &&
                  'constructor' in t
                )
                  return !1
              }
              r = r || []
              for (var c = (n = n || []).length; c--; )
                if (n[c] === e) return r[c] === t
              if ((n.push(e), r.push(t), o)) {
                if ((c = e.length) !== t.length) return !1
                for (; c--; ) if (!B(e[c], t[c], n, r)) return !1
              } else {
                var l,
                  h = _.keys(e)
                if (((c = h.length), _.keys(t).length !== c)) return !1
                for (; c--; )
                  if (((l = h[c]), !j(t, l) || !B(e[l], t[l], n, r))) return !1
              }
              return n.pop(), r.pop(), !0
            }),
            (_.isEqual = function (e, t) {
              return B(e, t)
            }),
            (_.isEmpty = function (e) {
              return (
                null == e ||
                (O(e) && (_.isArray(e) || _.isString(e) || _.isArguments(e))
                  ? 0 === e.length
                  : 0 === _.keys(e).length)
              )
            }),
            (_.isElement = function (e) {
              return !(!e || 1 !== e.nodeType)
            }),
            (_.isArray =
              p ||
              function (e) {
                return '[object Array]' === d.call(e)
              }),
            (_.isObject = function (e) {
              var t = typeof e
              return 'function' === t || ('object' === t && !!e)
            }),
            _.each(
              [
                'Arguments',
                'Function',
                'String',
                'Number',
                'Date',
                'RegExp',
                'Error',
                'Symbol',
                'Map',
                'WeakMap',
                'Set',
                'WeakSet',
              ],
              function (e) {
                _['is' + e] = function (t) {
                  return d.call(t) === '[object ' + e + ']'
                }
              }
            ),
            _.isArguments(arguments) ||
              (_.isArguments = function (e) {
                return j(e, 'callee')
              })
          var F = i.document && i.document.childNodes
          'function' != typeof / . / &&
            'object' != typeof Int8Array &&
            'function' != typeof F &&
            (_.isFunction = function (e) {
              return 'function' == typeof e || !1
            }),
            (_.isFinite = function (e) {
              return !_.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
            }),
            (_.isNaN = function (e) {
              return _.isNumber(e) && isNaN(e)
            }),
            (_.isBoolean = function (e) {
              return !0 === e || !1 === e || '[object Boolean]' === d.call(e)
            }),
            (_.isNull = function (e) {
              return null === e
            }),
            (_.isUndefined = function (e) {
              return void 0 === e
            }),
            (_.has = function (e, t) {
              if (!_.isArray(t)) return j(e, t)
              for (var n = t.length, r = 0; r < n; r++) {
                var i = t[r]
                if (null == e || !h.call(e, i)) return !1
                e = e[i]
              }
              return !!n
            }),
            (_.noConflict = function () {
              return (i._ = o), this
            }),
            (_.identity = function (e) {
              return e
            }),
            (_.constant = function (e) {
              return function () {
                return e
              }
            }),
            (_.noop = function () {}),
            (_.property = function (e) {
              return _.isArray(e)
                ? function (t) {
                    return x(t, e)
                  }
                : A(e)
            }),
            (_.propertyOf = function (e) {
              return null == e
                ? function () {}
                : function (t) {
                    return _.isArray(t) ? x(e, t) : e[t]
                  }
            }),
            (_.matcher = _.matches =
              function (e) {
                return (
                  (e = _.extendOwn({}, e)),
                  function (t) {
                    return _.isMatch(t, e)
                  }
                )
              }),
            (_.times = function (e, t, n) {
              var r = Array(Math.max(0, e))
              t = b(t, n, 1)
              for (var i = 0; i < e; i++) r[i] = t(i)
              return r
            }),
            (_.random = function (e, t) {
              return (
                null == t && ((t = e), (e = 0)),
                e + Math.floor(Math.random() * (t - e + 1))
              )
            }),
            (_.now =
              Date.now ||
              function () {
                return new Date().getTime()
              })
          var W = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#x27;',
              '`': '&#x60;',
            },
            V = _.invert(W),
            $ = function (e) {
              var t = function (t) {
                  return e[t]
                },
                n = '(?:' + _.keys(e).join('|') + ')',
                r = RegExp(n),
                i = RegExp(n, 'g')
              return function (e) {
                return (
                  (e = null == e ? '' : '' + e), r.test(e) ? e.replace(i, t) : e
                )
              }
            }
          ;(_.escape = $(W)),
            (_.unescape = $(V)),
            (_.result = function (e, t, n) {
              _.isArray(t) || (t = [t])
              var r = t.length
              if (!r) return _.isFunction(n) ? n.call(e) : n
              for (var i = 0; i < r; i++) {
                var o = null == e ? void 0 : e[t[i]]
                void 0 === o && ((o = n), (i = r)),
                  (e = _.isFunction(o) ? o.call(e) : o)
              }
              return e
            })
          var Q = 0
          ;(_.uniqueId = function (e) {
            var t = ++Q + ''
            return e ? e + t : t
          }),
            (_.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g,
            })
          var G = /(.)^/,
            K = {
              "'": "'",
              '\\': '\\',
              '\r': 'r',
              '\n': 'n',
              '\u2028': 'u2028',
              '\u2029': 'u2029',
            },
            J = /\\|'|\r|\n|\u2028|\u2029/g,
            X = function (e) {
              return '\\' + K[e]
            }
          ;(_.template = function (e, t, n) {
            !t && n && (t = n), (t = _.defaults({}, t, _.templateSettings))
            var r,
              i = RegExp(
                [
                  (t.escape || G).source,
                  (t.interpolate || G).source,
                  (t.evaluate || G).source,
                ].join('|') + '|$',
                'g'
              ),
              o = 0,
              a = "__p+='"
            e.replace(i, function (t, n, r, i, s) {
              return (
                (a += e.slice(o, s).replace(J, X)),
                (o = s + t.length),
                n
                  ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                  : r
                  ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                  : i && (a += "';\n" + i + "\n__p+='"),
                t
              )
            }),
              (a += "';\n"),
              t.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
              (a =
                "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                a +
                'return __p;\n')
            try {
              r = new Function(t.variable || 'obj', '_', a)
            } catch (e) {
              throw ((e.source = a), e)
            }
            var s = function (e) {
              return r.call(this, e, _)
            }
            return (
              (s.source =
                'function(' + (t.variable || 'obj') + '){\n' + a + '}'),
              s
            )
          }),
            (_.chain = function (e) {
              var t = _(e)
              return (t._chain = !0), t
            })
          var Y = function (e, t) {
            return e._chain ? _(t).chain() : t
          }
          ;(_.mixin = function (e) {
            return (
              _.each(_.functions(e), function (t) {
                var n = (_[t] = e[t])
                _.prototype[t] = function () {
                  var e = [this._wrapped]
                  return c.apply(e, arguments), Y(this, n.apply(_, e))
                }
              }),
              _
            )
          }),
            _.mixin(_),
            _.each(
              ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
              function (e) {
                var t = a[e]
                _.prototype[e] = function () {
                  var n = this._wrapped
                  return (
                    t.apply(n, arguments),
                    ('shift' !== e && 'splice' !== e) ||
                      0 !== n.length ||
                      delete n[0],
                    Y(this, n)
                  )
                }
              }
            ),
            _.each(['concat', 'join', 'slice'], function (e) {
              var t = a[e]
              _.prototype[e] = function () {
                return Y(this, t.apply(this._wrapped, arguments))
              }
            }),
            (_.prototype.value = function () {
              return this._wrapped
            }),
            (_.prototype.valueOf = _.prototype.toJSON = _.prototype.value),
            (_.prototype.toString = function () {
              return String(this._wrapped)
            }),
            void 0 !==
              (r = function () {
                return _
              }.apply(t, [])) && (n.exports = r)
        })()
      }.call(t, n(67), n(104)(e)))
    },
    function (e, t) {
      var n = (e.exports = { version: '2.6.9' })
      'number' == typeof __e && (__e = n)
    },
    function (e, t, n) {
      e.exports = { default: n(84), __esModule: !0 }
    },
    function (e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
      'number' == typeof __g && (__g = n)
    },
    function (e, t, n) {
      var r = n(42)('wks'),
        i = n(31),
        o = n(3).Symbol,
        a = 'function' == typeof o
      ;(e.exports = function (e) {
        return r[e] || (r[e] = (a && o[e]) || (a ? o : i)('Symbol.' + e))
      }).store = r
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(138),
        a = n(0).extend,
        s = n(18),
        u = n(6).getSessionToken,
        c = n(48),
        l = function (e, t) {
          var n = new Date().getTime(),
            r = o(n + e)
          return t ? r + ',' + n + ',master' : r + ',' + n
        },
        d = function (e, t) {
          t
            ? (e['X-LC-Sign'] = l(s.applicationKey))
            : (e['X-LC-Key'] = s.applicationKey)
        },
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments[1],
            n = {
              'X-LC-Id': s.applicationId,
              'Content-Type': 'application/json;charset=UTF-8',
            },
            i = !1
          return (
            'boolean' == typeof e.useMasterKey
              ? (i = e.useMasterKey)
              : 'boolean' == typeof s._config.useMasterKey &&
                (i = s._config.useMasterKey),
            i
              ? s.masterKey
                ? t
                  ? (n['X-LC-Sign'] = l(s.masterKey, !0))
                  : (n['X-LC-Key'] = s.masterKey + ',master')
                : (console.warn(
                    'masterKey is not set, fall back to use appKey'
                  ),
                  d(n, t))
              : d(n, t),
            s.hookKey && (n['X-LC-Hook-Key'] = s.hookKey),
            null !== s._config.production &&
              (n['X-LC-Prod'] = String(s._config.production)),
            (n['X-LC-UA'] = s._sharedConfig.userAgent),
            r.default.resolve().then(function () {
              var t = u(e)
              if (t) n['X-LC-Session'] = t
              else if (!s._config.disableCurrentUser)
                return s.User.currentAsync().then(function (e) {
                  return (
                    e &&
                      e._sessionToken &&
                      (n['X-LC-Session'] = e._sessionToken),
                    n
                  )
                })
              return n
            })
          )
        },
        p = function (e) {
          var t = e.service,
            n = e.version,
            r = e.method,
            o = e.path,
            a = e.query,
            u = e.data,
            l = e.authOptions,
            d = e.signKey,
            p = void 0 === d || d
          if (!s.applicationId || (!s.applicationKey && !s.masterKey))
            throw new Error('Not initialized')
          s._appRouter && s._appRouter.refresh()
          var f = s._config.requestTimeout,
            g = (function (e) {
              var t = e.service,
                n = void 0 === t ? 'api' : t,
                r = e.version,
                i = void 0 === r ? '1.1' : r,
                o = e.path,
                a = s._config.serverURLs[n]
              if (!a) throw new Error('undefined server URL for ' + n)
              return (
                '/' !== a.charAt(a.length - 1) && (a += '/'),
                (a += i),
                o && (a += o),
                a
              )
            })({ service: t, path: o, version: n })
          return h(l, p).then(function (e) {
            return c({
              method: r,
              url: g,
              query: a,
              data: u,
              headers: e,
              timeout: f,
            }).catch(function (e) {
              var t = { code: e.code || -1, error: e.message || e.responseText }
              if (e.response && e.response.code) t = e.response
              else if (e.responseText)
                try {
                  t = JSON.parse(e.responseText)
                } catch (e) {}
              ;(t.rawMessage = t.rawMessage || t.error),
                s._sharedConfig.keepErrorRawMessage ||
                  (t.error +=
                    ' [' + (e.statusCode || 'N/A') + ' ' + r + ' ' + g + ']')
              var n = new Error(t.error)
              throw (delete t.error, i.extend(n, t))
            })
          })
        }
      ;(s.request = p),
        (e.exports = {
          _request: function (e, t, n, r, i, o, s) {
            var u = ''
            if (
              (e && (u += '/' + e),
              t && (u += '/' + t),
              n && (u += '/' + n),
              i && i._fetchWhenSave)
            )
              throw new Error('_fetchWhenSave should be in the query')
            if (i && i._where) throw new Error('_where should be in the query')
            return (
              r && 'get' === r.toLowerCase() && ((s = a({}, s, i)), (i = null)),
              p({ method: r, path: u, query: s, data: i, authOptions: o })
            )
          },
          request: p,
        })
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(2)),
        o = r(n(112)),
        a = n(0),
        s = function (e) {
          return a.isArray(e) ? e : null == e ? [] : [e]
        },
        u = function () {}
      e.exports = {
        isNullOrUndefined: function (e) {
          return a.isNull(e) || a.isUndefined(e)
        },
        ensureArray: s,
        transformFetchOptions: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.keys,
            n = e.include,
            r = e.includeACL,
            i = {}
          return (
            t && (i.keys = s(t).join(',')),
            n && (i.include = s(n).join(',')),
            r && (i.returnACL = r),
            i
          )
        },
        getSessionToken: function (e) {
          return e.sessionToken
            ? e.sessionToken
            : e.user && 'function' == typeof e.user.getSessionToken
            ? e.user.getSessionToken()
            : void 0
        },
        tap: function (e) {
          return function (t) {
            return e(t), t
          }
        },
        inherits: function (e, t, n) {
          var r
          return (
            (r =
              t && t.hasOwnProperty('constructor')
                ? t.constructor
                : function () {
                    e.apply(this, arguments)
                  }),
            a.extend(r, e),
            (u.prototype = e.prototype),
            (r.prototype = new u()),
            t && a.extend(r.prototype, t),
            n && a.extend(r, n),
            (r.prototype.constructor = r),
            (r.__super__ = e.prototype),
            r
          )
        },
        parseDate: function (e) {
          return new Date(e)
        },
        setValue: function (e, t, n) {
          var r = t.split('.'),
            i = r.pop(),
            o = e
          return (
            r.forEach(function (e) {
              void 0 === o[e] && (o[e] = {}), (o = o[e])
            }),
            (o[i] = n),
            e
          )
        },
        findValue: function (e, t) {
          for (
            var n = t.split('.'), r = n[0], i = n.pop(), o = e, a = 0;
            a < n.length;
            a++
          )
            if (void 0 === (o = o[n[a]])) return [void 0, void 0, i]
          return [o[i], o, i, r]
        },
        isPlainObject: function (e) {
          return a.isObject(e) && (0, o.default)(e) === Object.prototype
        },
        continueWhile: function e(t, n) {
          return t()
            ? n().then(function () {
                return e(t, n)
              })
            : i.default.resolve()
        },
      }
    },
    function (e, t, n) {
      var r = n(8),
        i = n(54),
        o = n(39),
        a = Object.defineProperty
      t.f = n(11)
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), i))
              try {
                return a(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    function (e, t, n) {
      var r = n(13)
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!')
        return e
      }
    },
    function (e, t, n) {
      e.exports = { default: n(105), __esModule: !0 }
    },
    function (e, t, n) {
      var r = n(3),
        i = n(1),
        o = n(23),
        a = n(12),
        s = n(14),
        u = function (e, t, n) {
          var c,
            l,
            d,
            h = e & u.F,
            p = e & u.G,
            f = e & u.S,
            g = e & u.P,
            m = e & u.B,
            _ = e & u.W,
            v = p ? i : i[t] || (i[t] = {}),
            b = v.prototype,
            y = p ? r : f ? r[t] : (r[t] || {}).prototype
          for (c in (p && (n = t), n))
            ((l = !h && y && void 0 !== y[c]) && s(v, c)) ||
              ((d = l ? y[c] : n[c]),
              (v[c] =
                p && 'function' != typeof y[c]
                  ? n[c]
                  : m && l
                  ? o(d, r)
                  : _ && y[c] == d
                  ? (function (e) {
                      var t = function (t, n, r) {
                        if (this instanceof e) {
                          switch (arguments.length) {
                            case 0:
                              return new e()
                            case 1:
                              return new e(t)
                            case 2:
                              return new e(t, n)
                          }
                          return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                      }
                      return (t.prototype = e.prototype), t
                    })(d)
                  : g && 'function' == typeof d
                  ? o(Function.call, d)
                  : d),
              g &&
                (((v.virtual || (v.virtual = {}))[c] = d),
                e & u.R && b && !b[c] && a(b, c, d)))
        }
      ;(u.F = 1),
        (u.G = 2),
        (u.S = 4),
        (u.P = 8),
        (u.B = 16),
        (u.W = 32),
        (u.U = 64),
        (u.R = 128),
        (e.exports = u)
    },
    function (e, t, n) {
      e.exports = !n(24)(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    function (e, t, n) {
      var r = n(7),
        i = n(25)
      e.exports = n(11)
        ? function (e, t, n) {
            return r.f(e, t, i(1, n))
          }
        : function (e, t, n) {
            return (e[t] = n), e
          }
    },
    function (e, t) {
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : 'function' == typeof e
      }
    },
    function (e, t) {
      var n = {}.hasOwnProperty
      e.exports = function (e, t) {
        return n.call(e, t)
      }
    },
    function (e, t, n) {
      var r = n(88),
        i = n(37)
      e.exports = function (e) {
        return r(i(e))
      }
    },
    function (e, t, n) {
      function r(e, t) {
        var n = new Error(t)
        return (n.code = e), n
      }
      n(0).extend(r, {
        OTHER_CAUSE: -1,
        INTERNAL_SERVER_ERROR: 1,
        CONNECTION_FAILED: 100,
        OBJECT_NOT_FOUND: 101,
        INVALID_QUERY: 102,
        INVALID_CLASS_NAME: 103,
        MISSING_OBJECT_ID: 104,
        INVALID_KEY_NAME: 105,
        INVALID_POINTER: 106,
        INVALID_JSON: 107,
        COMMAND_UNAVAILABLE: 108,
        NOT_INITIALIZED: 109,
        INCORRECT_TYPE: 111,
        INVALID_CHANNEL_NAME: 112,
        PUSH_MISCONFIGURED: 115,
        OBJECT_TOO_LARGE: 116,
        OPERATION_FORBIDDEN: 119,
        CACHE_MISS: 120,
        INVALID_NESTED_KEY: 121,
        INVALID_FILE_NAME: 122,
        INVALID_ACL: 123,
        TIMEOUT: 124,
        INVALID_EMAIL_ADDRESS: 125,
        MISSING_CONTENT_TYPE: 126,
        MISSING_CONTENT_LENGTH: 127,
        INVALID_CONTENT_LENGTH: 128,
        FILE_TOO_LARGE: 129,
        FILE_SAVE_ERROR: 130,
        FILE_DELETE_ERROR: 153,
        DUPLICATE_VALUE: 137,
        INVALID_ROLE_NAME: 139,
        EXCEEDED_QUOTA: 140,
        SCRIPT_FAILED: 141,
        VALIDATION_ERROR: 142,
        INVALID_IMAGE_DATA: 150,
        UNSAVED_FILE_ERROR: 151,
        INVALID_PUSH_TIME_ERROR: 152,
        USERNAME_MISSING: 200,
        PASSWORD_MISSING: 201,
        USERNAME_TAKEN: 202,
        EMAIL_TAKEN: 203,
        EMAIL_MISSING: 204,
        EMAIL_NOT_FOUND: 205,
        SESSION_MISSING: 206,
        MUST_CREATE_USER_THROUGH_SIGNUP: 207,
        ACCOUNT_ALREADY_LINKED: 208,
        LINKED_ID_MISSING: 250,
        INVALID_LINKED_SESSION: 251,
        UNSUPPORTED_SERVICE: 252,
        X_DOMAIN_REQUEST: 602,
      }),
        (e.exports = r)
    },
    function (e, t) {
      e.exports = {}
    },
    function (e, t, n) {
      ;(function (t) {
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var i = r(n(9)),
          o = r(n(68)),
          a = r(n(2)),
          s = n(0),
          u = n(69),
          c = n(19),
          l = n(6),
          d = l.inherits,
          h = l.parseDate,
          p = n(70),
          f = n(20),
          g = f.setAdapters,
          m = f.adapterManager,
          _ = t.AV || {}
        _._config = {
          serverURLs: {},
          useMasterKey: !1,
          production: null,
          realtime: null,
          requestTimeout: null,
        }
        var v = 'LeanCloud-JS-SDK/' + p
        ;(_._sharedConfig = { userAgent: v, liveQueryRealtime: null }),
          m.on('platformInfo', function (e) {
            var t = v
            if (e)
              if (e.userAgent) t = e.userAgent
              else {
                var n = e.name
                e.version && (n += '/' + e.version),
                  e.extra && (n += '; ' + e.extra),
                  (t += ' (' + n + ')')
              }
            _._sharedConfig.userAgent = t
          }),
          (_._getAVPath = function (e) {
            if (!_.applicationId)
              throw new Error('You need to call AV.initialize before using AV.')
            if ((e || (e = ''), !s.isString(e)))
              throw new Error(
                "Tried to get a localStorage path that wasn't a String."
              )
            return (
              '/' === e[0] && (e = e.substring(1)),
              'AV/' + _.applicationId + '/' + e
            )
          }),
          (_._installationId = null),
          (_._getInstallationId = function () {
            if (_._installationId) return a.default.resolve(_._installationId)
            var e = _._getAVPath('installationId')
            return _.localStorage.getItemAsync(e).then(function (t) {
              return (
                (_._installationId = t),
                _._installationId
                  ? t
                  : ((_._installationId = t = u()),
                    _.localStorage.setItemAsync(e, t).then(function () {
                      return t
                    }))
              )
            })
          }),
          (_._subscriptionId = null),
          (_._refreshSubscriptionId = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : _._getAVPath('subscriptionId'),
              t = (_._subscriptionId = u())
            return _.localStorage.setItemAsync(e, t).then(function () {
              return t
            })
          }),
          (_._getSubscriptionId = function () {
            if (_._subscriptionId) return a.default.resolve(_._subscriptionId)
            var e = _._getAVPath('subscriptionId')
            return _.localStorage.getItemAsync(e).then(function (t) {
              return (
                (_._subscriptionId = t),
                _._subscriptionId || (t = _._refreshSubscriptionId(e)),
                t
              )
            })
          }),
          (_._parseDate = h),
          (_._extend = function (e, t) {
            var n = d(this, e, t)
            return (n.extend = this.extend), n
          }),
          (_._encode = function (e, t, n) {
            var r =
              !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
            if (e instanceof _.Object) {
              if (n) throw new Error('AV.Objects not allowed here')
              return t && !s.include(t, e) && e._hasData
                ? e._toFullJSON(t.concat(e), r)
                : e._toPointer()
            }
            if (e instanceof _.ACL) return e.toJSON()
            if (s.isDate(e))
              return r ? { __type: 'Date', iso: e.toJSON() } : e.toJSON()
            if (e instanceof _.GeoPoint) return e.toJSON()
            if (s.isArray(e))
              return s.map(e, function (e) {
                return _._encode(e, t, n, r)
              })
            if (s.isRegExp(e)) return e.source
            if (e instanceof _.Relation) return e.toJSON()
            if (e instanceof _.Op) return e.toJSON()
            if (e instanceof _.File) {
              if (!e.url() && !e.id)
                throw new Error(
                  'Tried to save an object containing an unsaved file.'
                )
              return e._toFullJSON(t, r)
            }
            return s.isObject(e)
              ? s.mapObject(e, function (e, i) {
                  return _._encode(e, t, n, r)
                })
              : e
          }),
          (_._decode = function (e, t) {
            if (!s.isObject(e) || s.isDate(e)) return e
            if (s.isArray(e))
              return s.map(e, function (e) {
                return _._decode(e)
              })
            if (e instanceof _.Object) return e
            if (e instanceof _.File) return e
            if (e instanceof _.Op) return e
            if (e instanceof _.GeoPoint) return e
            if (e instanceof _.ACL) return e
            if ('ACL' === t) return new _.ACL(e)
            if (e.__op) return _.Op._decode(e)
            var n
            if ('Pointer' === e.__type) {
              n = e.className
              var r = _.Object._create(n)
              if ((0, o.default)(e).length > 3) {
                var i = s.clone(e)
                delete i.__type, delete i.className, r._finishFetch(i, !0)
              } else r._finishFetch({ objectId: e.objectId }, !1)
              return r
            }
            if ('Object' === e.__type) {
              n = e.className
              var a = s.clone(e)
              delete a.__type, delete a.className
              var u = _.Object._create(n)
              return u._finishFetch(a, !0), u
            }
            if ('Date' === e.__type) return _._parseDate(e.iso)
            if ('GeoPoint' === e.__type)
              return new _.GeoPoint({
                latitude: e.latitude,
                longitude: e.longitude,
              })
            if ('Relation' === e.__type) {
              if (!t) throw new Error('key missing decoding a Relation')
              var c = new _.Relation(null, t)
              return (c.targetClassName = e.className), c
            }
            if ('File' === e.__type) {
              var l = new _.File(e.name),
                d = s.clone(e)
              return delete d.__type, l._finishFetch(d), l
            }
            return s.mapObject(e, _._decode)
          }),
          (_.parseJSON = _._decode),
          (_.parse = function (e) {
            return _.parseJSON(JSON.parse(e))
          }),
          (_.stringify = function (e) {
            return (0, i.default)(_._encode(e, [], !1, !0))
          }),
          (_._encodeObjectOrArray = function (e) {
            var t = function (e) {
              return (
                e && e._toFullJSON && (e = e._toFullJSON([])),
                s.mapObject(e, function (e) {
                  return _._encode(e, [])
                })
              )
            }
            return s.isArray(e)
              ? e.map(function (e) {
                  return t(e)
                })
              : t(e)
          }),
          (_._arrayEach = s.each),
          (_._traverse = function (e, t, n) {
            if (e instanceof _.Object) {
              if (((n = n || []), s.indexOf(n, e) >= 0)) return
              return n.push(e), _._traverse(e.attributes, t, n), t(e)
            }
            return e instanceof _.Relation || e instanceof _.File
              ? t(e)
              : s.isArray(e)
              ? (s.each(e, function (r, i) {
                  var o = _._traverse(r, t, n)
                  o && (e[i] = o)
                }),
                t(e))
              : s.isObject(e)
              ? (_._each(e, function (r, i) {
                  var o = _._traverse(r, t, n)
                  o && (e[i] = o)
                }),
                t(e))
              : t(e)
          }),
          (_._objectEach = _._each =
            function (e, t) {
              s.isObject(e)
                ? s.each(s.keys(e), function (n) {
                    t(e[n], n)
                  })
                : s.each(e, t)
            }),
          (_.debug = {
            enable: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'leancloud*'
              return c.enable(e)
            },
            disable: c.disable,
          }),
          (_.setAdapters = g),
          (e.exports = _)
      }.call(t, n(67)))
    },
    function (e, t, n) {
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      ;(t.log = function () {
        var e
        return (
          'object' ===
            ('undefined' == typeof console ? 'undefined' : r(console)) &&
          console.log &&
          (e = console).log.apply(e, arguments)
        )
      }),
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              t[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              e.exports.humanize(this.diff)),
            this.useColors)
          ) {
            var n = 'color: ' + this.color
            t.splice(1, 0, n, 'color: inherit')
            var r = 0,
              i = 0
            t[0].replace(/%[a-zA-Z%]/g, function (e) {
              '%%' !== e && (r++, '%c' === e && (i = r))
            }),
              t.splice(i, 0, n)
          }
        }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug')
          } catch (e) {}
        }),
        (t.load = function () {
          var e
          try {
            e = t.storage.getItem('debug')
          } catch (e) {}
          return (
            !e &&
              'undefined' != typeof process &&
              'env' in process &&
              (e = process.env.DEBUG),
            e
          )
        }),
        (t.useColors = function () {
          return (
            !(
              'undefined' == typeof window ||
              !window.process ||
              ('renderer' !== window.process.type && !window.process.__nwjs)
            ) ||
            (('undefined' == typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (('undefined' != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ('undefined' != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          )
        }),
        (t.storage = (function () {
          try {
            return localStorage
          } catch (e) {}
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (e.exports = n(110)(t)),
        (e.exports.formatters.j = function (e) {
          try {
            return JSON.stringify(e)
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message
          }
        })
    },
    function (e, t, n) {
      var r = n(0),
        i = n(71),
        o = new ((0, n(6).inherits)(i, {
          constructor: function () {
            i.apply(this), (this._adapters = {})
          },
          getAdapter: function (e) {
            var t = this._adapters[e]
            if (void 0 === t) throw new Error(e + ' adapter is not configured')
            return t
          },
          setAdapters: function (e) {
            var t = this
            r.extend(this._adapters, e),
              r.keys(e).forEach(function (n) {
                return t.emit(n, e[n])
              })
          },
        }))()
      e.exports = {
        getAdapter: o.getAdapter.bind(o),
        setAdapters: o.setAdapters.bind(o),
        adapterManager: o,
      }
    },
    function (e, t, n) {
      var r = n(85)(!0)
      n(53)(
        String,
        'String',
        function (e) {
          ;(this._t = String(e)), (this._i = 0)
        },
        function () {
          var e,
            t = this._t,
            n = this._i
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 })
        }
      )
    },
    function (e, t) {
      e.exports = !0
    },
    function (e, t, n) {
      var r = n(29)
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            }
          case 2:
            return function (n, r) {
              return e.call(t, n, r)
            }
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      }
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        }
      }
    },
    function (e, t) {
      var n = {}.toString
      e.exports = function (e) {
        return n.call(e).slice(8, -1)
      }
    },
    function (e, t, n) {
      var r = n(37)
      e.exports = function (e) {
        return Object(r(e))
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = r(n(34)),
        o = r(n(35)),
        a =
          'function' == typeof o.default && 'symbol' == typeof i.default
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof o.default &&
                  e.constructor === o.default &&
                  e !== o.default.prototype
                  ? 'symbol'
                  : typeof e
              }
      t.default =
        'function' == typeof o.default && 'symbol' === a(i.default)
          ? function (e) {
              return void 0 === e ? 'undefined' : a(e)
            }
          : function (e) {
              return e &&
                'function' == typeof o.default &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : void 0 === e
                ? 'undefined'
                : a(e)
            }
    },
    function (e, t) {
      e.exports = function (e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!')
        return e
      }
    },
    function (e, t, n) {
      var r = n(57),
        i = n(43)
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, i)
        }
    },
    function (e, t) {
      var n = 0,
        r = Math.random()
      e.exports = function (e) {
        return 'Symbol('.concat(
          void 0 === e ? '' : e,
          ')_',
          (++n + r).toString(36)
        )
      }
    },
    function (e, t, n) {
      var r = n(7).f,
        i = n(14),
        o = n(4)('toStringTag')
      e.exports = function (e, t, n) {
        e &&
          !i((e = n ? e : e.prototype), o) &&
          r(e, o, { configurable: !0, value: t })
      }
    },
    function (e, t, n) {
      n(91)
      for (
        var r = n(3),
          i = n(12),
          o = n(17),
          a = n(4)('toStringTag'),
          s =
            'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
              ','
            ),
          u = 0;
        u < s.length;
        u++
      ) {
        var c = s[u],
          l = r[c],
          d = l && l.prototype
        d && !d[a] && i(d, a, c), (o[c] = o.Array)
      }
    },
    function (e, t, n) {
      e.exports = { default: n(119), __esModule: !0 }
    },
    function (e, t, n) {
      e.exports = { default: n(120), __esModule: !0 }
    },
    function (e, t) {
      var n = Math.ceil,
        r = Math.floor
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    function (e, t, n) {
      var r = n(13),
        i = n(3).document,
        o = r(i) && r(i.createElement)
      e.exports = function (e) {
        return o ? i.createElement(e) : {}
      }
    },
    function (e, t, n) {
      var r = n(13)
      e.exports = function (e, t) {
        if (!r(e)) return e
        var n, i
        if (t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i
        if ('function' == typeof (n = e.valueOf) && !r((i = n.call(e))))
          return i
        if (!t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function (e, t, n) {
      var r = n(36),
        i = Math.min
      e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
      }
    },
    function (e, t, n) {
      var r = n(42)('keys'),
        i = n(31)
      e.exports = function (e) {
        return r[e] || (r[e] = i(e))
      }
    },
    function (e, t, n) {
      var r = n(1),
        i = n(3),
        o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {})
      ;(e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: r.version,
        mode: n(22) ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      })
    },
    function (e, t) {
      e.exports =
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        )
    },
    function (e, t, n) {
      var r = n(26),
        i = n(4)('toStringTag'),
        o =
          'Arguments' ==
          r(
            (function () {
              return arguments
            })()
          )
      e.exports = function (e) {
        var t, n, a
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            })((t = Object(e)), i))
          ? n
          : o
          ? r(t)
          : 'Object' == (a = r(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : a
      }
    },
    function (e, t, n) {
      var r = n(44),
        i = n(4)('iterator'),
        o = n(17)
      e.exports = n(1).getIteratorMethod = function (e) {
        if (null != e) return e[i] || e['@@iterator'] || o[r(e)]
      }
    },
    function (e, t, n) {
      function r(e) {
        var t, n
        ;(this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError('Bad Promise constructor')
          ;(t = e), (n = r)
        })),
          (this.resolve = i(t)),
          (this.reject = i(n))
      }
      var i = n(29)
      e.exports.f = function (e) {
        return new r(e)
      }
    },
    function (e, t, n) {
      var r = n(10),
        i = n(1),
        o = n(24)
      e.exports = function (e, t) {
        var n = (i.Object || {})[e] || Object[e],
          a = {}
        ;(a[e] = t(n)),
          r(
            r.S +
              r.F *
                o(function () {
                  n(1)
                }),
            'Object',
            a
          )
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(9)),
        o = r(n(28)),
        a = r(n(68)),
        s = (n(0), n(128)).timeout,
        u = n(19),
        c = u('leancloud:request'),
        l = u('leancloud:request:error'),
        d = n(20).getAdapter,
        h = 0
      e.exports = function (e) {
        var t = e.method,
          n = e.url,
          r = e.query,
          p = e.data,
          f = e.headers,
          g = void 0 === f ? {} : f,
          m = e.timeout,
          _ = e.onprogress
        if (r) {
          var v = (0, a.default)(r)
            .map(function (e) {
              var t = r[e]
              if (void 0 !== t) {
                var n =
                  'object' === (void 0 === t ? 'undefined' : (0, o.default)(t))
                    ? (0, i.default)(t)
                    : t
                return encodeURIComponent(e) + '=' + encodeURIComponent(n)
              }
            })
            .filter(function (e) {
              return e
            })
            .join('&')
          n = n + '?' + v
        }
        var b = h++
        c('request(%d) %s %s %o %o %o', b, t, n, r, p, g)
        var y = d('request')(n, {
          method: t,
          headers: g,
          data: p,
          onprogress: _,
        })
          .then(function (e) {
            if (
              (c(
                'response(%d) %d %O %o',
                b,
                e.status,
                e.data || e.text,
                e.header
              ),
              !1 === e.ok)
            ) {
              var t = new Error()
              throw ((t.response = e), t)
            }
            return e.data
          })
          .catch(function (e) {
            throw (
              (e.response &&
                (u.enabled('leancloud:request') ||
                  l('request(%d) %s %s %o %o %o', b, t, n, r, p, g),
                l(
                  'response(%d) %d %O %o',
                  b,
                  e.response.status,
                  e.response.data || e.response.text,
                  e.response.header
                ),
                (e.statusCode = e.response.status),
                (e.responseText = e.response.text),
                (e.response = e.response.data)),
              e)
            )
          })
        return m ? s(y, m) : y
      }
    },
    function (e, t, n) {
      t.f = n(4)
    },
    function (e, t, n) {
      var r = n(3),
        i = n(1),
        o = n(22),
        a = n(49),
        s = n(7).f
      e.exports = function (e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {})
        '_' == e.charAt(0) || e in t || s(t, e, { value: a.f(e) })
      }
    },
    function (e, t) {
      t.f = {}.propertyIsEnumerable
    },
    function (e, t) {},
    function (e, t, n) {
      var r = n(22),
        i = n(10),
        o = n(55),
        a = n(12),
        s = n(17),
        u = n(86),
        c = n(32),
        l = n(59),
        d = n(4)('iterator'),
        h = !([].keys && 'next' in [].keys()),
        p = function () {
          return this
        }
      e.exports = function (e, t, n, f, g, m, _) {
        u(n, t, f)
        var v,
          b,
          y,
          w = function (e) {
            if (!h && e in x) return x[e]
            switch (e) {
              case 'keys':
              case 'values':
                return function () {
                  return new n(this, e)
                }
            }
            return function () {
              return new n(this, e)
            }
          },
          k = t + ' Iterator',
          A = 'values' == g,
          j = !1,
          x = e.prototype,
          E = x[d] || x['@@iterator'] || (g && x[g]),
          S = E || w(g),
          O = g ? (A ? w('entries') : S) : void 0,
          C = ('Array' == t && x.entries) || E
        if (
          (C &&
            (y = l(C.call(new e()))) !== Object.prototype &&
            y.next &&
            (c(y, k, !0), r || 'function' == typeof y[d] || a(y, d, p)),
          A &&
            E &&
            'values' !== E.name &&
            ((j = !0),
            (S = function () {
              return E.call(this)
            })),
          (r && !_) || (!h && !j && x[d]) || a(x, d, S),
          (s[t] = S),
          (s[k] = p),
          g)
        )
          if (
            ((v = {
              values: A ? S : w('values'),
              keys: m ? S : w('keys'),
              entries: O,
            }),
            _)
          )
            for (b in v) b in x || o(x, b, v[b])
          else i(i.P + i.F * (h || j), t, v)
        return v
      }
    },
    function (e, t, n) {
      e.exports =
        !n(11) &&
        !n(24)(function () {
          return (
            7 !=
            Object.defineProperty(n(38)('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    function (e, t, n) {
      e.exports = n(12)
    },
    function (e, t, n) {
      var r = n(8),
        i = n(87),
        o = n(43),
        a = n(41)('IE_PROTO'),
        s = function () {},
        u = function () {
          var e,
            t = n(38)('iframe'),
            r = o.length
          for (
            t.style.display = 'none',
              n(58).appendChild(t),
              t.src = 'javascript:',
              (e = t.contentWindow.document).open(),
              e.write('<script>document.F=Object</script>'),
              e.close(),
              u = e.F;
            r--;

          )
            delete u.prototype[o[r]]
          return u()
        }
      e.exports =
        Object.create ||
        function (e, t) {
          var n
          return (
            null !== e
              ? ((s.prototype = r(e)),
                (n = new s()),
                (s.prototype = null),
                (n[a] = e))
              : (n = u()),
            void 0 === t ? n : i(n, t)
          )
        }
    },
    function (e, t, n) {
      var r = n(14),
        i = n(15),
        o = n(89)(!1),
        a = n(41)('IE_PROTO')
      e.exports = function (e, t) {
        var n,
          s = i(e),
          u = 0,
          c = []
        for (n in s) n != a && r(s, n) && c.push(n)
        for (; t.length > u; ) r(s, (n = t[u++])) && (~o(c, n) || c.push(n))
        return c
      }
    },
    function (e, t, n) {
      var r = n(3).document
      e.exports = r && r.documentElement
    },
    function (e, t, n) {
      var r = n(14),
        i = n(27),
        o = n(41)('IE_PROTO'),
        a = Object.prototype
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = i(e)),
            r(e, o)
              ? e[o]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? a
              : null
          )
        }
    },
    function (e, t, n) {
      var r = n(8)
      e.exports = function (e, t, n, i) {
        try {
          return i ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
          var o = e.return
          throw (void 0 !== o && r(o.call(e)), t)
        }
      }
    },
    function (e, t, n) {
      var r = n(17),
        i = n(4)('iterator'),
        o = Array.prototype
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
      }
    },
    function (e, t, n) {
      var r = n(8),
        i = n(29),
        o = n(4)('species')
      e.exports = function (e, t) {
        var n,
          a = r(e).constructor
        return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
      }
    },
    function (e, t, n) {
      var r,
        i,
        o,
        a = n(23),
        s = n(97),
        u = n(58),
        c = n(38),
        l = n(3),
        d = l.process,
        h = l.setImmediate,
        p = l.clearImmediate,
        f = l.MessageChannel,
        g = l.Dispatch,
        m = 0,
        _ = {},
        v = function () {
          var e = +this
          if (_.hasOwnProperty(e)) {
            var t = _[e]
            delete _[e], t()
          }
        },
        b = function (e) {
          v.call(e.data)
        }
      ;(h && p) ||
        ((h = function (e) {
          for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
          return (
            (_[++m] = function () {
              s('function' == typeof e ? e : Function(e), t)
            }),
            r(m),
            m
          )
        }),
        (p = function (e) {
          delete _[e]
        }),
        'process' == n(26)(d)
          ? (r = function (e) {
              d.nextTick(a(v, e, 1))
            })
          : g && g.now
          ? (r = function (e) {
              g.now(a(v, e, 1))
            })
          : f
          ? ((o = (i = new f()).port2),
            (i.port1.onmessage = b),
            (r = a(o.postMessage, o, 1)))
          : l.addEventListener &&
            'function' == typeof postMessage &&
            !l.importScripts
          ? ((r = function (e) {
              l.postMessage(e + '', '*')
            }),
            l.addEventListener('message', b, !1))
          : (r =
              'onreadystatechange' in c('script')
                ? function (e) {
                    u.appendChild(c('script')).onreadystatechange =
                      function () {
                        u.removeChild(this), v.call(e)
                      }
                  }
                : function (e) {
                    setTimeout(a(v, e, 1), 0)
                  })),
        (e.exports = { set: h, clear: p })
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() }
        } catch (e) {
          return { e: !0, v: e }
        }
      }
    },
    function (e, t, n) {
      var r = n(8),
        i = n(13),
        o = n(46)
      e.exports = function (e, t) {
        if ((r(e), i(t) && t.constructor === e)) return t
        var n = o.f(e)
        return (0, n.resolve)(t), n.promise
      }
    },
    function (e, t, n) {
      var r = n(4)('iterator'),
        i = !1
      try {
        var o = [7][r]()
        ;(o.return = function () {
          i = !0
        }),
          Array.from(o, function () {
            throw 2
          })
      } catch (e) {}
      e.exports = function (e, t) {
        if (!t && !i) return !1
        var n = !1
        try {
          var o = [7],
            a = o[r]()
          ;(a.next = function () {
            return { done: (n = !0) }
          }),
            (o[r] = function () {
              return a
            }),
            e(o)
        } catch (e) {}
        return n
      }
    },
    function (e, t) {
      var n
      n = (function () {
        return this
      })()
      try {
        n = n || Function('return this')() || (0, eval)('this')
      } catch (e) {
        'object' == typeof window && (n = window)
      }
      e.exports = n
    },
    function (e, t, n) {
      e.exports = { default: n(106), __esModule: !0 }
    },
    function (e, t, n) {
      var r = n(108),
        i = n(109)
      e.exports = function (e, t, n) {
        var o = (t && n) || 0
        'string' == typeof e &&
          ((t = 'binary' === e ? new Array(16) : null), (e = null))
        var a = (e = e || {}).random || (e.rng || r)()
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
          for (var s = 0; s < 16; ++s) t[o + s] = a[s]
        return t || i(a)
      }
    },
    function (e, t, n) {
      e.exports = '4.6.0'
    },
    function (e, t, n) {
      function r() {}
      function i(e, t, n) {
        ;(this.fn = e), (this.context = t), (this.once = n || !1)
      }
      function o() {
        ;(this._events = new r()), (this._eventsCount = 0)
      }
      var a = Object.prototype.hasOwnProperty,
        s = '~'
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (s = !1)),
        (o.prototype.eventNames = function () {
          var e,
            t,
            n = []
          if (0 === this._eventsCount) return n
          for (t in (e = this._events))
            a.call(e, t) && n.push(s ? t.slice(1) : t)
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(e))
            : n
        }),
        (o.prototype.listeners = function (e, t) {
          var n = s ? s + e : e,
            r = this._events[n]
          if (t) return !!r
          if (!r) return []
          if (r.fn) return [r.fn]
          for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
            a[i] = r[i].fn
          return a
        }),
        (o.prototype.emit = function (e, t, n, r, i, o) {
          var a = s ? s + e : e
          if (!this._events[a]) return !1
          var u,
            c,
            l = this._events[a],
            d = arguments.length
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return l.fn.call(l.context), !0
              case 2:
                return l.fn.call(l.context, t), !0
              case 3:
                return l.fn.call(l.context, t, n), !0
              case 4:
                return l.fn.call(l.context, t, n, r), !0
              case 5:
                return l.fn.call(l.context, t, n, r, i), !0
              case 6:
                return l.fn.call(l.context, t, n, r, i, o), !0
            }
            for (c = 1, u = new Array(d - 1); c < d; c++)
              u[c - 1] = arguments[c]
            l.fn.apply(l.context, u)
          } else {
            var h,
              p = l.length
            for (c = 0; c < p; c++)
              switch (
                (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), d)
              ) {
                case 1:
                  l[c].fn.call(l[c].context)
                  break
                case 2:
                  l[c].fn.call(l[c].context, t)
                  break
                case 3:
                  l[c].fn.call(l[c].context, t, n)
                  break
                case 4:
                  l[c].fn.call(l[c].context, t, n, r)
                  break
                default:
                  if (!u)
                    for (h = 1, u = new Array(d - 1); h < d; h++)
                      u[h - 1] = arguments[h]
                  l[c].fn.apply(l[c].context, u)
              }
          }
          return !0
        }),
        (o.prototype.on = function (e, t, n) {
          var r = new i(t, n || this),
            o = s ? s + e : e
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], r])
                : this._events[o].push(r)
              : ((this._events[o] = r), this._eventsCount++),
            this
          )
        }),
        (o.prototype.once = function (e, t, n) {
          var r = new i(t, n || this, !0),
            o = s ? s + e : e
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], r])
                : this._events[o].push(r)
              : ((this._events[o] = r), this._eventsCount++),
            this
          )
        }),
        (o.prototype.removeListener = function (e, t, n, i) {
          var o = s ? s + e : e
          if (!this._events[o]) return this
          if (!t)
            return (
              0 == --this._eventsCount
                ? (this._events = new r())
                : delete this._events[o],
              this
            )
          var a = this._events[o]
          if (a.fn)
            a.fn !== t ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              (0 == --this._eventsCount
                ? (this._events = new r())
                : delete this._events[o])
          else {
            for (var u = 0, c = [], l = a.length; u < l; u++)
              (a[u].fn !== t ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                c.push(a[u])
            c.length
              ? (this._events[o] = 1 === c.length ? c[0] : c)
              : 0 == --this._eventsCount
              ? (this._events = new r())
              : delete this._events[o]
          }
          return this
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t
          return (
            e
              ? ((t = s ? s + e : e),
                this._events[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = new r())
                    : delete this._events[t]))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          )
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prototype.setMaxListeners = function () {
          return this
        }),
        (o.prefixed = s),
        (o.EventEmitter = o),
        (e.exports = o)
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(20).getAdapter,
        o = {
          get async() {
            return i('storage').async
          },
        }
      ;['getItem', 'setItem', 'removeItem', 'clear'].forEach(function (e) {
        ;(o[e + 'Async'] = function () {
          var t = i('storage')
          return r.default.resolve(t[e].apply(t, arguments))
        }),
          (o[e] = function () {
            var t = i('storage')
            if (!t.async) return t[e].apply(t, arguments)
            var n = new Error(
              'Synchronous API [' + e + '] is not available in this runtime.'
            )
            throw ((n.code = 'SYNC_API_NOT_AVAILABLE'), n)
          })
      }),
        (e.exports = o)
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(9)),
        i = n(72),
        o = n(18),
        a = (t.removeAsync = i.removeItemAsync.bind(i))
      ;(t.getAsync = function (e) {
        return (
          (e = 'AV/' + o.applicationId + '/' + e),
          i.getItemAsync(e).then(function (t) {
            return (function (e, t) {
              try {
                e = JSON.parse(e)
              } catch (e) {
                return null
              }
              return e
                ? e.expiredAt && e.expiredAt < Date.now()
                  ? a(t).then(function () {
                      return null
                    })
                  : e.value
                : null
            })(t, e)
          })
        )
      }),
        (t.setAsync = function (e, t, n) {
          var a = { value: t }
          return (
            'number' == typeof n && (a.expiredAt = Date.now() + n),
            i.setItemAsync('AV/' + o.applicationId + '/' + e, (0, r.default)(a))
          )
        })
    },
    function (e, t, n) {
      e.exports = { default: n(116), __esModule: !0 }
    },
    function (e, t) {
      t.f = Object.getOwnPropertySymbols
    },
    function (e, t, n) {
      var r = n(57),
        i = n(43).concat('length', 'prototype')
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i)
        }
    },
    function (e, t, n) {
      var r = n(51),
        i = n(25),
        o = n(15),
        a = n(39),
        s = n(14),
        u = n(54),
        c = Object.getOwnPropertyDescriptor
      t.f = n(11)
        ? c
        : function (e, t) {
            if (((e = o(e)), (t = a(t, !0)), u))
              try {
                return c(e, t)
              } catch (e) {}
            if (s(e, t)) return i(!r.f.call(e, t), e[t])
          }
    },
    function (e, t) {
      var n = {
        utf8: {
          stringToBytes: function (e) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
          },
          bytesToString: function (e) {
            return decodeURIComponent(escape(n.bin.bytesToString(e)))
          },
        },
        bin: {
          stringToBytes: function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              t.push(255 & e.charCodeAt(n))
            return t
          },
          bytesToString: function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              t.push(String.fromCharCode(e[n]))
            return t.join('')
          },
        },
      }
      e.exports = n
    },
    function (e, t, n) {
      e.exports = { default: n(147), __esModule: !0 }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return (i =
          'function' == typeof s.default &&
          'symbol' === (0, a.default)(o.default)
            ? function (e) {
                return void 0 === e ? 'undefined' : (0, a.default)(e)
              }
            : function (e) {
                return e &&
                  'function' == typeof s.default &&
                  e.constructor === s.default &&
                  e !== s.default.prototype
                  ? 'symbol'
                  : void 0 === e
                  ? 'undefined'
                  : (0, a.default)(e)
              })(e)
      }
      var o = r(n(34)),
        a = r(n(28)),
        s = r(n(35))
      e.exports = function (e) {
        return null !== e && 'object' === i(e)
      }
    },
    function (e, t, n) {
      var r = n(82),
        i = n(165)
      e.exports = i(r)
    },
    function (e, t, n) {
      e.exports = n(83)
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(18)
      ;(o._ = i),
        (o.version = n(70)),
        (o.Promise = r.default),
        (o.localStorage = n(72)),
        (o.Cache = n(73)),
        (o.Error = n(16)),
        n(115),
        n(129)(o),
        n(130)(o),
        n(131)(o),
        n(132)(o),
        n(133)(o),
        n(134)(o),
        n(142)(o),
        n(152)(o),
        n(153)(o),
        n(155)(o),
        n(156)(o),
        n(157)(o),
        n(158)(o),
        n(159)(o),
        n(160)(o),
        n(161)(o),
        n(162)(o),
        (o.Conversation = n(163)),
        n(164),
        (e.exports = o)
    },
    function (e, t, n) {
      n(52), n(21), n(33), n(94), n(102), n(103), (e.exports = n(1).Promise)
    },
    function (e, t, n) {
      var r = n(36),
        i = n(37)
      e.exports = function (e) {
        return function (t, n) {
          var o,
            a,
            s = String(i(t)),
            u = r(n),
            c = s.length
          return u < 0 || u >= c
            ? e
              ? ''
              : void 0
            : (o = s.charCodeAt(u)) < 55296 ||
              o > 56319 ||
              u + 1 === c ||
              (a = s.charCodeAt(u + 1)) < 56320 ||
              a > 57343
            ? e
              ? s.charAt(u)
              : o
            : e
            ? s.slice(u, u + 2)
            : a - 56320 + ((o - 55296) << 10) + 65536
        }
      }
    },
    function (e, t, n) {
      var r = n(56),
        i = n(25),
        o = n(32),
        a = {}
      n(12)(a, n(4)('iterator'), function () {
        return this
      }),
        (e.exports = function (e, t, n) {
          ;(e.prototype = r(a, { next: i(1, n) })), o(e, t + ' Iterator')
        })
    },
    function (e, t, n) {
      var r = n(7),
        i = n(8),
        o = n(30)
      e.exports = n(11)
        ? Object.defineProperties
        : function (e, t) {
            i(e)
            for (var n, a = o(t), s = a.length, u = 0; s > u; )
              r.f(e, (n = a[u++]), t[n])
            return e
          }
    },
    function (e, t, n) {
      var r = n(26)
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return 'String' == r(e) ? e.split('') : Object(e)
          }
    },
    function (e, t, n) {
      var r = n(15),
        i = n(40),
        o = n(90)
      e.exports = function (e) {
        return function (t, n, a) {
          var s,
            u = r(t),
            c = i(u.length),
            l = o(a, c)
          if (e && n != n) {
            for (; c > l; ) if ((s = u[l++]) != s) return !0
          } else
            for (; c > l; l++)
              if ((e || l in u) && u[l] === n) return e || l || 0
          return !e && -1
        }
      }
    },
    function (e, t, n) {
      var r = n(36),
        i = Math.max,
        o = Math.min
      e.exports = function (e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
      }
    },
    function (e, t, n) {
      var r = n(92),
        i = n(93),
        o = n(17),
        a = n(15)
      ;(e.exports = n(53)(
        Array,
        'Array',
        function (e, t) {
          ;(this._t = a(e)), (this._i = 0), (this._k = t)
        },
        function () {
          var e = this._t,
            t = this._k,
            n = this._i++
          return !e || n >= e.length
            ? ((this._t = void 0), i(1))
            : i(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]])
        },
        'values'
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries')
    },
    function (e, t) {
      e.exports = function () {}
    },
    function (e, t) {
      e.exports = function (e, t) {
        return { value: t, done: !!e }
      }
    },
    function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = n(22),
        u = n(3),
        c = n(23),
        l = n(44),
        d = n(10),
        h = n(13),
        p = n(29),
        f = n(95),
        g = n(96),
        m = n(62),
        _ = n(63).set,
        v = n(98)(),
        b = n(46),
        y = n(64),
        w = n(99),
        k = n(65),
        A = u.TypeError,
        j = u.process,
        x = j && j.versions,
        E = (x && x.v8) || '',
        S = u.Promise,
        O = 'process' == l(j),
        C = function () {},
        T = (i = b.f),
        I = !!(function () {
          try {
            var e = S.resolve(1),
              t = ((e.constructor = {})[n(4)('species')] = function (e) {
                e(C, C)
              })
            return (
              (O || 'function' == typeof PromiseRejectionEvent) &&
              e.then(C) instanceof t &&
              0 !== E.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            )
          } catch (e) {}
        })(),
        P = function (e) {
          var t
          return !(!h(e) || 'function' != typeof (t = e.then)) && t
        },
        M = function (e, t) {
          if (!e._n) {
            e._n = !0
            var n = e._c
            v(function () {
              for (var r = e._v, i = 1 == e._s, o = 0; n.length > o; )
                !(function (t) {
                  var n,
                    o,
                    a,
                    s = i ? t.ok : t.fail,
                    u = t.resolve,
                    c = t.reject,
                    l = t.domain
                  try {
                    s
                      ? (i || (2 == e._h && z(e), (e._h = 1)),
                        !0 === s
                          ? (n = r)
                          : (l && l.enter(),
                            (n = s(r)),
                            l && (l.exit(), (a = !0))),
                        n === t.promise
                          ? c(A('Promise-chain cycle'))
                          : (o = P(n))
                          ? o.call(n, u, c)
                          : u(n))
                      : c(r)
                  } catch (e) {
                    l && !a && l.exit(), c(e)
                  }
                })(n[o++])
              ;(e._c = []), (e._n = !1), t && !e._h && L(e)
            })
          }
        },
        L = function (e) {
          _.call(u, function () {
            var t,
              n,
              r,
              i = e._v,
              o = q(e)
            if (
              (o &&
                ((t = y(function () {
                  O
                    ? j.emit('unhandledRejection', i, e)
                    : (n = u.onunhandledrejection)
                    ? n({ promise: e, reason: i })
                    : (r = u.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', i)
                })),
                (e._h = O || q(e) ? 2 : 1)),
              (e._a = void 0),
              o && t.e)
            )
              throw t.v
          })
        },
        q = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length
        },
        z = function (e) {
          _.call(u, function () {
            var t
            O
              ? j.emit('rejectionHandled', e)
              : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v })
          })
        },
        N = function (e) {
          var t = this
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            M(t, !0))
        },
        U = function (e) {
          var t,
            n = this
          if (!n._d) {
            ;(n._d = !0), (n = n._w || n)
            try {
              if (n === e) throw A("Promise can't be resolved itself")
              ;(t = P(e))
                ? v(function () {
                    var r = { _w: n, _d: !1 }
                    try {
                      t.call(e, c(U, r, 1), c(N, r, 1))
                    } catch (e) {
                      N.call(r, e)
                    }
                  })
                : ((n._v = e), (n._s = 1), M(n, !1))
            } catch (e) {
              N.call({ _w: n, _d: !1 }, e)
            }
          }
        }
      I ||
        ((S = function (e) {
          f(this, S, 'Promise', '_h'), p(e), r.call(this)
          try {
            e(c(U, this, 1), c(N, this, 1))
          } catch (e) {
            N.call(this, e)
          }
        }),
        ((r = function (e) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }).prototype = n(100)(S.prototype, {
          then: function (e, t) {
            var n = T(m(this, S))
            return (
              (n.ok = 'function' != typeof e || e),
              (n.fail = 'function' == typeof t && t),
              (n.domain = O ? j.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && M(this, !1),
              n.promise
            )
          },
          catch: function (e) {
            return this.then(void 0, e)
          },
        })),
        (o = function () {
          var e = new r()
          ;(this.promise = e),
            (this.resolve = c(U, e, 1)),
            (this.reject = c(N, e, 1))
        }),
        (b.f = T =
          function (e) {
            return e === S || e === a ? new o(e) : i(e)
          })),
        d(d.G + d.W + d.F * !I, { Promise: S }),
        n(32)(S, 'Promise'),
        n(101)('Promise'),
        (a = n(1).Promise),
        d(d.S + d.F * !I, 'Promise', {
          reject: function (e) {
            var t = T(this)
            return (0, t.reject)(e), t.promise
          },
        }),
        d(d.S + d.F * (s || !I), 'Promise', {
          resolve: function (e) {
            return k(s && this === a ? S : this, e)
          },
        }),
        d(
          d.S +
            d.F *
              !(
                I &&
                n(66)(function (e) {
                  S.all(e).catch(C)
                })
              ),
          'Promise',
          {
            all: function (e) {
              var t = this,
                n = T(t),
                r = n.resolve,
                i = n.reject,
                o = y(function () {
                  var n = [],
                    o = 0,
                    a = 1
                  g(e, !1, function (e) {
                    var s = o++,
                      u = !1
                    n.push(void 0),
                      a++,
                      t.resolve(e).then(function (e) {
                        u || ((u = !0), (n[s] = e), --a || r(n))
                      }, i)
                  }),
                    --a || r(n)
                })
              return o.e && i(o.v), n.promise
            },
            race: function (e) {
              var t = this,
                n = T(t),
                r = n.reject,
                i = y(function () {
                  g(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                  })
                })
              return i.e && r(i.v), n.promise
            },
          }
        )
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(n + ': incorrect invocation!')
        return e
      }
    },
    function (e, t, n) {
      var r = n(23),
        i = n(60),
        o = n(61),
        a = n(8),
        s = n(40),
        u = n(45),
        c = {},
        l = {}
      ;((t = e.exports =
        function (e, t, n, d, h) {
          var p,
            f,
            g,
            m,
            _ = h
              ? function () {
                  return e
                }
              : u(e),
            v = r(n, d, t ? 2 : 1),
            b = 0
          if ('function' != typeof _) throw TypeError(e + ' is not iterable!')
          if (o(_)) {
            for (p = s(e.length); p > b; b++)
              if (
                (m = t ? v(a((f = e[b]))[0], f[1]) : v(e[b])) === c ||
                m === l
              )
                return m
          } else
            for (g = _.call(e); !(f = g.next()).done; )
              if ((m = i(g, v, f.value, t)) === c || m === l) return m
        }).BREAK = c),
        (t.RETURN = l)
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        var r = void 0 === n
        switch (t.length) {
          case 0:
            return r ? e() : e.call(n)
          case 1:
            return r ? e(t[0]) : e.call(n, t[0])
          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1])
          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2])
          case 4:
            return r
              ? e(t[0], t[1], t[2], t[3])
              : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
      }
    },
    function (e, t, n) {
      var r = n(3),
        i = n(63).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = 'process' == n(26)(a)
      e.exports = function () {
        var e,
          t,
          n,
          c = function () {
            var r, i
            for (u && (r = a.domain) && r.exit(); e; ) {
              ;(i = e.fn), (e = e.next)
              try {
                i()
              } catch (r) {
                throw (e ? n() : (t = void 0), r)
              }
            }
            ;(t = void 0), r && r.enter()
          }
        if (u)
          n = function () {
            a.nextTick(c)
          }
        else if (!o || (r.navigator && r.navigator.standalone))
          if (s && s.resolve) {
            var l = s.resolve(void 0)
            n = function () {
              l.then(c)
            }
          } else
            n = function () {
              i.call(r, c)
            }
        else {
          var d = !0,
            h = document.createTextNode('')
          new o(c).observe(h, { characterData: !0 }),
            (n = function () {
              h.data = d = !d
            })
        }
        return function (r) {
          var i = { fn: r, next: void 0 }
          t && (t.next = i), e || ((e = i), n()), (t = i)
        }
      }
    },
    function (e, t, n) {
      var r = n(3).navigator
      e.exports = (r && r.userAgent) || ''
    },
    function (e, t, n) {
      var r = n(12)
      e.exports = function (e, t, n) {
        for (var i in t) n && e[i] ? (e[i] = t[i]) : r(e, i, t[i])
        return e
      }
    },
    function (e, t, n) {
      var r = n(3),
        i = n(1),
        o = n(7),
        a = n(11),
        s = n(4)('species')
      e.exports = function (e) {
        var t = 'function' == typeof i[e] ? i[e] : r[e]
        a &&
          t &&
          !t[s] &&
          o.f(t, s, {
            configurable: !0,
            get: function () {
              return this
            },
          })
      }
    },
    function (e, t, n) {
      var r = n(10),
        i = n(1),
        o = n(3),
        a = n(62),
        s = n(65)
      r(r.P + r.R, 'Promise', {
        finally: function (e) {
          var t = a(this, i.Promise || o.Promise),
            n = 'function' == typeof e
          return this.then(
            n
              ? function (n) {
                  return s(t, e()).then(function () {
                    return n
                  })
                }
              : e,
            n
              ? function (n) {
                  return s(t, e()).then(function () {
                    throw n
                  })
                }
              : e
          )
        },
      })
    },
    function (e, t, n) {
      var r = n(10),
        i = n(46),
        o = n(64)
      r(r.S, 'Promise', {
        try: function (e) {
          var t = i.f(this),
            n = o(e)
          return (n.e ? t.reject : t.resolve)(n.v), t.promise
        },
      })
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        )
      }
    },
    function (e, t, n) {
      var r = n(1),
        i = r.JSON || (r.JSON = { stringify: JSON.stringify })
      e.exports = function (e) {
        return i.stringify.apply(i, arguments)
      }
    },
    function (e, t, n) {
      n(107), (e.exports = n(1).Object.keys)
    },
    function (e, t, n) {
      var r = n(27),
        i = n(30)
      n(47)('keys', function () {
        return function (e) {
          return i(r(e))
        }
      })
    },
    function (e, t) {
      var n =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto))
      if (n) {
        var r = new Uint8Array(16)
        e.exports = function () {
          return n(r), r
        }
      } else {
        var i = new Array(16)
        e.exports = function () {
          for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()),
              (i[t] = (e >>> ((3 & t) << 3)) & 255)
          return i
        }
      }
    },
    function (e, t) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1)
      e.exports = function (e, t) {
        var r = t || 0,
          i = n
        return [
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
        ].join('')
      }
    },
    function (e, t, n) {
      e.exports = function (e) {
        function t(e) {
          for (var t = 0, n = 0; n < e.length; n++)
            (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0)
          return r.colors[Math.abs(t) % r.colors.length]
        }
        function r(e) {
          function n() {
            if (n.enabled) {
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i]
              var o = n,
                s = Number(new Date()),
                u = s - (a || s)
              ;(o.diff = u),
                (o.prev = a),
                (o.curr = s),
                (a = s),
                (t[0] = r.coerce(t[0])),
                'string' != typeof t[0] && t.unshift('%O')
              var c = 0
              ;(t[0] = t[0].replace(/%([a-zA-Z%])/g, function (e, n) {
                if ('%%' === e) return e
                c++
                var i = r.formatters[n]
                if ('function' == typeof i) {
                  var a = t[c]
                  ;(e = i.call(o, a)), t.splice(c, 1), c--
                }
                return e
              })),
                r.formatArgs.call(o, t),
                (o.log || r.log).apply(o, t)
            }
          }
          var a
          return (
            (n.namespace = e),
            (n.enabled = r.enabled(e)),
            (n.useColors = r.useColors()),
            (n.color = t(e)),
            (n.destroy = i),
            (n.extend = o),
            'function' == typeof r.init && r.init(n),
            r.instances.push(n),
            n
          )
        }
        function i() {
          var e = r.instances.indexOf(this)
          return -1 !== e && (r.instances.splice(e, 1), !0)
        }
        function o(e, t) {
          return r(this.namespace + (void 0 === t ? ':' : t) + e)
        }
        return (
          (r.debug = r),
          (r.default = r),
          (r.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e
          }),
          (r.disable = function () {
            r.enable('')
          }),
          (r.enable = function (e) {
            r.save(e), (r.names = []), (r.skips = [])
            var t,
              n = ('string' == typeof e ? e : '').split(/[\s,]+/),
              i = n.length
            for (t = 0; t < i; t++)
              n[t] &&
                ('-' === (e = n[t].replace(/\*/g, '.*?'))[0]
                  ? r.skips.push(new RegExp('^' + e.substr(1) + '$'))
                  : r.names.push(new RegExp('^' + e + '$')))
            for (t = 0; t < r.instances.length; t++) {
              var o = r.instances[t]
              o.enabled = r.enabled(o.namespace)
            }
          }),
          (r.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0
            var t, n
            for (t = 0, n = r.skips.length; t < n; t++)
              if (r.skips[t].test(e)) return !1
            for (t = 0, n = r.names.length; t < n; t++)
              if (r.names[t].test(e)) return !0
            return !1
          }),
          (r.humanize = n(111)),
          Object.keys(e).forEach(function (t) {
            r[t] = e[t]
          }),
          (r.instances = []),
          (r.names = []),
          (r.skips = []),
          (r.formatters = {}),
          (r.selectColor = t),
          r.enable(r.load()),
          r
        )
      }
    },
    function (e, t) {
      function n(e) {
        var t = Math.abs(e)
        return t >= s
          ? r(e, t, s, 'day')
          : t >= a
          ? r(e, t, a, 'hour')
          : t >= o
          ? r(e, t, o, 'minute')
          : t >= i
          ? r(e, t, i, 'second')
          : e + ' ms'
      }
      function r(e, t, n, r) {
        var i = t >= 1.5 * n
        return Math.round(e / n) + ' ' + r + (i ? 's' : '')
      }
      var i = 1e3,
        o = 60 * i,
        a = 60 * o,
        s = 24 * a,
        u = 7 * s,
        c = 365.25 * s
      e.exports = function (e, t) {
        t = t || {}
        var r = typeof e
        if ('string' === r && e.length > 0)
          return (function (e) {
            if (!((e = String(e)).length > 100)) {
              var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e
                )
              if (t) {
                var n = parseFloat(t[1])
                switch ((t[2] || 'ms').toLowerCase()) {
                  case 'years':
                  case 'year':
                  case 'yrs':
                  case 'yr':
                  case 'y':
                    return n * c
                  case 'weeks':
                  case 'week':
                  case 'w':
                    return n * u
                  case 'days':
                  case 'day':
                  case 'd':
                    return n * s
                  case 'hours':
                  case 'hour':
                  case 'hrs':
                  case 'hr':
                  case 'h':
                    return n * a
                  case 'minutes':
                  case 'minute':
                  case 'mins':
                  case 'min':
                  case 'm':
                    return n * o
                  case 'seconds':
                  case 'second':
                  case 'secs':
                  case 'sec':
                  case 's':
                    return n * i
                  case 'milliseconds':
                  case 'millisecond':
                  case 'msecs':
                  case 'msec':
                  case 'ms':
                    return n
                  default:
                    return
                }
              }
            }
          })(e)
        if ('number' === r && isFinite(e))
          return t.long
            ? n(e)
            : (function (e) {
                var t = Math.abs(e)
                return t >= s
                  ? Math.round(e / s) + 'd'
                  : t >= a
                  ? Math.round(e / a) + 'h'
                  : t >= o
                  ? Math.round(e / o) + 'm'
                  : t >= i
                  ? Math.round(e / i) + 's'
                  : e + 'ms'
              })(e)
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e)
        )
      }
    },
    function (e, t, n) {
      e.exports = { default: n(113), __esModule: !0 }
    },
    function (e, t, n) {
      n(114), (e.exports = n(1).Object.getPrototypeOf)
    },
    function (e, t, n) {
      var r = n(27),
        i = n(59)
      n(47)('getPrototypeOf', function () {
        return function (e) {
          return i(r(e))
        }
      })
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(74)),
        i = n(18),
        o = n(118),
        a = n(6).isNullOrUndefined,
        s = n(0),
        u = s.extend,
        c = s.isObject,
        l = s.isEmpty,
        d = function (e) {
          return '-MdYXbMMI' !== e.slice(-9)
        },
        h = function (e) {
          return { push: e, stats: e, engine: e, api: e, rtm: e }
        },
        p = !1,
        f = !1
      ;(i.init = function (e) {
        if (!c(e))
          return i.init({
            appId: e,
            appKey: arguments.length <= 1 ? void 0 : arguments[1],
            masterKey: arguments.length <= 2 ? void 0 : arguments[2],
          })
        var t = e.appId,
          n = e.appKey,
          r = e.masterKey,
          a = e.hookKey,
          s = e.serverURL,
          g = e.serverURLs,
          m = void 0 === g ? s : g,
          _ = e.disableCurrentUser,
          v = e.production,
          b = e.realtime
        if (
          (f &&
            console.warn(
              'Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.'
            ),
          !t)
        )
          throw new TypeError('appId must be a string')
        if (!n) throw new TypeError('appKey must be a string')
        if (
          (r &&
            console.warn(
              'MasterKey is not supposed to be used at client side.'
            ),
          d(t) && !m && l(i._config.serverURLs))
        )
          throw new TypeError(
            'serverURL option is required for apps from CN region'
          )
        t !== i._config.applicationId
          ? ((i._config.masterKey = r), (i._config.hookKey = a))
          : (r && (i._config.masterKey = r), a && (i._config.hookKey = a)),
          (i._config.applicationId = t),
          (i._config.applicationKey = n),
          i.setProduction(v),
          void 0 !== _ && (i._config.disableCurrentUser = _)
        var y = p || void 0 !== m
        if (
          (y || (i._appRouter = new o(i)),
          i._setServerURLs(
            u(
              {},
              (function (e) {
                if (d(e)) return {}
                var t = e.slice(0, 8).toLowerCase(),
                  n = 'lncldglobal.com'
                return {
                  push: 'https://' + t + '.push.' + n,
                  stats: 'https://' + t + '.stats.' + n,
                  engine: 'https://' + t + '.engine.' + n,
                  api: 'https://' + t + '.api.' + n,
                  rtm: 'https://' + t + '.rtm.' + n,
                }
              })(t),
              i._config.serverURLs,
              'string' == typeof m ? h(m) : m
            ),
            y
          ),
          b)
        )
          i._config.realtime = b
        else if (i._sharedConfig.liveQueryRealtime) {
          var w = i._config.serverURLs,
            k = w.api,
            A = w.rtm
          i._config.realtime = new i._sharedConfig.liveQueryRealtime({
            appId: t,
            appKey: n,
            server: { api: k, RTMRouter: A },
          })
        }
        f = !0
      }),
        (i.setProduction = function (e) {
          a(e)
            ? (i._config.production = null)
            : (i._config.production = e ? 1 : 0)
        }),
        (i._setServerURLs = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          'string' != typeof e
            ? u(i._config.serverURLs, e)
            : (i._config.serverURLs = h(e)),
            t && (i._appRouter ? i._appRouter.disable() : (p = !0))
        }),
        (i.setServerURL = function (e) {
          return i._setServerURLs(e)
        }),
        (i.setServerURLs = i.setServerURL),
        (i.keepErrorRawMessage = function (e) {
          i._sharedConfig.keepErrorRawMessage = e
        }),
        (i.setRequestTimeout = function (e) {
          i._config.requestTimeout = e
        }),
        (i.initialize = i.init),
        ['applicationId', 'applicationKey', 'masterKey', 'hookKey'].forEach(
          function (e) {
            return (0, r.default)(i, e, {
              get: function () {
                return i._config[e]
              },
              set: function (t) {
                i._config[e] = t
              },
            })
          }
        )
    },
    function (e, t, n) {
      n(117)
      var r = n(1).Object
      e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n)
      }
    },
    function (e, t, n) {
      var r = n(10)
      r(r.S + r.F * !n(11), 'Object', { defineProperty: n(7).f })
    },
    function (e, t, n) {
      function r(e) {
        var t = this
        ;(this.AV = e),
          (this.lockedUntil = 0),
          o
            .getAsync('serverURLs')
            .then(function (e) {
              if (!t.disabled) {
                if (!e) return t.lock(0)
                var n = e.serverURLs,
                  r = e.lockedUntil
                t.AV._setServerURLs(n, !1), (t.lockedUntil = r)
              }
            })
            .catch(function () {
              return t.lock(0)
            })
      }
      var i = n(48),
        o = n(73)
      ;(r.prototype.disable = function () {
        this.disabled = !0
      }),
        (r.prototype.lock = function (e) {
          this.lockedUntil = Date.now() + e
        }),
        (r.prototype.refresh = function () {
          var e = this
          if (!(this.disabled || Date.now() < this.lockedUntil))
            return (
              this.lock(10),
              i({
                method: 'get',
                url: 'https://app-router.com/2/route',
                query: { appId: this.AV.applicationId },
              })
                .then(function (t) {
                  if (!e.disabled) {
                    var n = t.ttl
                    if (!n) throw new Error('missing ttl')
                    n *= 1e3
                    var r = {
                      push: 'https://' + t.push_server,
                      stats: 'https://' + t.stats_server,
                      engine: 'https://' + t.engine_server,
                      api: 'https://' + t.api_server,
                    }
                    return (
                      e.AV._setServerURLs(r, !1),
                      e.lock(n),
                      o.setAsync(
                        'serverURLs',
                        { serverURLs: r, lockedUntil: e.lockedUntil },
                        n
                      )
                    )
                  }
                })
                .catch(function (t) {
                  console.warn('refresh server URLs failed: ' + t.message),
                    e.lock(600)
                })
            )
        }),
        (e.exports = r)
    },
    function (e, t, n) {
      n(21), n(33), (e.exports = n(49).f('iterator'))
    },
    function (e, t, n) {
      n(121), n(52), n(126), n(127), (e.exports = n(1).Symbol)
    },
    function (e, t, n) {
      var r = n(3),
        i = n(14),
        o = n(11),
        a = n(10),
        s = n(55),
        u = n(122).KEY,
        c = n(24),
        l = n(42),
        d = n(32),
        h = n(31),
        p = n(4),
        f = n(49),
        g = n(50),
        m = n(123),
        _ = n(124),
        v = n(8),
        b = n(13),
        y = n(27),
        w = n(15),
        k = n(39),
        A = n(25),
        j = n(56),
        x = n(125),
        E = n(77),
        S = n(75),
        O = n(7),
        C = n(30),
        T = E.f,
        I = O.f,
        P = x.f,
        M = r.Symbol,
        L = r.JSON,
        q = L && L.stringify,
        z = p('_hidden'),
        N = p('toPrimitive'),
        U = {}.propertyIsEnumerable,
        R = l('symbol-registry'),
        B = l('symbols'),
        D = l('op-symbols'),
        H = Object.prototype,
        F = 'function' == typeof M && !!S.f,
        W = r.QObject,
        V = !W || !W.prototype || !W.prototype.findChild,
        $ =
          o &&
          c(function () {
            return (
              7 !=
              j(
                I({}, 'a', {
                  get: function () {
                    return I(this, 'a', { value: 7 }).a
                  },
                })
              ).a
            )
          })
            ? function (e, t, n) {
                var r = T(H, t)
                r && delete H[t], I(e, t, n), r && e !== H && I(H, t, r)
              }
            : I,
        Q = function (e) {
          var t = (B[e] = j(M.prototype))
          return (t._k = e), t
        },
        G =
          F && 'symbol' == typeof M.iterator
            ? function (e) {
                return 'symbol' == typeof e
              }
            : function (e) {
                return e instanceof M
              },
        K = function (e, t, n) {
          return (
            e === H && K(D, t, n),
            v(e),
            (t = k(t, !0)),
            v(n),
            i(B, t)
              ? (n.enumerable
                  ? (i(e, z) && e[z][t] && (e[z][t] = !1),
                    (n = j(n, { enumerable: A(0, !1) })))
                  : (i(e, z) || I(e, z, A(1, {})), (e[z][t] = !0)),
                $(e, t, n))
              : I(e, t, n)
          )
        },
        J = function (e, t) {
          v(e)
          for (var n, r = m((t = w(t))), i = 0, o = r.length; o > i; )
            K(e, (n = r[i++]), t[n])
          return e
        },
        X = function (e) {
          var t = U.call(this, (e = k(e, !0)))
          return (
            !(this === H && i(B, e) && !i(D, e)) &&
            (!(t || !i(this, e) || !i(B, e) || (i(this, z) && this[z][e])) || t)
          )
        },
        Y = function (e, t) {
          if (((e = w(e)), (t = k(t, !0)), e !== H || !i(B, t) || i(D, t))) {
            var n = T(e, t)
            return (
              !n || !i(B, t) || (i(e, z) && e[z][t]) || (n.enumerable = !0), n
            )
          }
        },
        Z = function (e) {
          for (var t, n = P(w(e)), r = [], o = 0; n.length > o; )
            i(B, (t = n[o++])) || t == z || t == u || r.push(t)
          return r
        },
        ee = function (e) {
          for (
            var t, n = e === H, r = P(n ? D : w(e)), o = [], a = 0;
            r.length > a;

          )
            !i(B, (t = r[a++])) || (n && !i(H, t)) || o.push(B[t])
          return o
        }
      F ||
        (s(
          (M = function () {
            if (this instanceof M)
              throw TypeError('Symbol is not a constructor!')
            var e = h(arguments.length > 0 ? arguments[0] : void 0),
              t = function (n) {
                this === H && t.call(D, n),
                  i(this, z) && i(this[z], e) && (this[z][e] = !1),
                  $(this, e, A(1, n))
              }
            return o && V && $(H, e, { configurable: !0, set: t }), Q(e)
          }).prototype,
          'toString',
          function () {
            return this._k
          }
        ),
        (E.f = Y),
        (O.f = K),
        (n(76).f = x.f = Z),
        (n(51).f = X),
        (S.f = ee),
        o && !n(22) && s(H, 'propertyIsEnumerable', X, !0),
        (f.f = function (e) {
          return Q(p(e))
        })),
        a(a.G + a.W + a.F * !F, { Symbol: M })
      for (
        var te =
            'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
              ','
            ),
          ne = 0;
        te.length > ne;

      )
        p(te[ne++])
      for (var re = C(p.store), ie = 0; re.length > ie; ) g(re[ie++])
      a(a.S + a.F * !F, 'Symbol', {
        for: function (e) {
          return i(R, (e += '')) ? R[e] : (R[e] = M(e))
        },
        keyFor: function (e) {
          if (!G(e)) throw TypeError(e + ' is not a symbol!')
          for (var t in R) if (R[t] === e) return t
        },
        useSetter: function () {
          V = !0
        },
        useSimple: function () {
          V = !1
        },
      }),
        a(a.S + a.F * !F, 'Object', {
          create: function (e, t) {
            return void 0 === t ? j(e) : J(j(e), t)
          },
          defineProperty: K,
          defineProperties: J,
          getOwnPropertyDescriptor: Y,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: ee,
        })
      var oe = c(function () {
        S.f(1)
      })
      a(a.S + a.F * oe, 'Object', {
        getOwnPropertySymbols: function (e) {
          return S.f(y(e))
        },
      }),
        L &&
          a(
            a.S +
              a.F *
                (!F ||
                  c(function () {
                    var e = M()
                    return (
                      '[null]' != q([e]) ||
                      '{}' != q({ a: e }) ||
                      '{}' != q(Object(e))
                    )
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, n, r = [e], i = 1; arguments.length > i; )
                  r.push(arguments[i++])
                if (((n = t = r[1]), (b(t) || void 0 !== e) && !G(e)))
                  return (
                    _(t) ||
                      (t = function (e, t) {
                        if (
                          ('function' == typeof n && (t = n.call(this, e, t)),
                          !G(t))
                        )
                          return t
                      }),
                    (r[1] = t),
                    q.apply(L, r)
                  )
              },
            }
          ),
        M.prototype[N] || n(12)(M.prototype, N, M.prototype.valueOf),
        d(M, 'Symbol'),
        d(Math, 'Math', !0),
        d(r.JSON, 'JSON', !0)
    },
    function (e, t, n) {
      var r = n(31)('meta'),
        i = n(13),
        o = n(14),
        a = n(7).f,
        s = 0,
        u =
          Object.isExtensible ||
          function () {
            return !0
          },
        c = !n(24)(function () {
          return u(Object.preventExtensions({}))
        }),
        l = function (e) {
          a(e, r, { value: { i: 'O' + ++s, w: {} } })
        },
        d = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (e, t) {
            if (!i(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e
            if (!o(e, r)) {
              if (!u(e)) return 'F'
              if (!t) return 'E'
              l(e)
            }
            return e[r].i
          },
          getWeak: function (e, t) {
            if (!o(e, r)) {
              if (!u(e)) return !0
              if (!t) return !1
              l(e)
            }
            return e[r].w
          },
          onFreeze: function (e) {
            return c && d.NEED && u(e) && !o(e, r) && l(e), e
          },
        })
    },
    function (e, t, n) {
      var r = n(30),
        i = n(75),
        o = n(51)
      e.exports = function (e) {
        var t = r(e),
          n = i.f
        if (n)
          for (var a, s = n(e), u = o.f, c = 0; s.length > c; )
            u.call(e, (a = s[c++])) && t.push(a)
        return t
      }
    },
    function (e, t, n) {
      var r = n(26)
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' == r(e)
        }
    },
    function (e, t, n) {
      var r = n(15),
        i = n(76).f,
        o = {}.toString,
        a =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      e.exports.f = function (e) {
        return a && '[object Window]' == o.call(e)
          ? (function (e) {
              try {
                return i(e)
              } catch (e) {
                return a.slice()
              }
            })(e)
          : i(r(e))
      }
    },
    function (e, t, n) {
      n(50)('asyncIterator')
    },
    function (e, t, n) {
      n(50)('observable')
    },
    function (e, t, n) {
      var r
      ;(e.exports.timeout = function (e, t) {
        var n,
          i = new r()
        return Promise.race([
          e,
          new Promise(function (e, r) {
            n = setTimeout(function () {
              r(i)
            }, t)
          }),
        ]).then(
          function (e) {
            return clearTimeout(n), e
          },
          function (e) {
            throw (clearTimeout(n), e)
          }
        )
      }),
        ((r = e.exports.TimeoutError =
          function () {
            Error.call(this),
              (this.stack = Error().stack),
              (this.message = 'Timeout')
          }).prototype = Object.create(Error.prototype)),
        (r.prototype.name = 'TimeoutError')
    },
    function (e, t, n) {
      var r = n(0)
      e.exports = function (e) {
        var t = /\s+/,
          n = Array.prototype.slice
        ;(e.Events = {
          on: function (e, n, r) {
            var i, o, a, s, u
            if (!n) return this
            for (
              e = e.split(t),
                i = this._callbacks || (this._callbacks = {}),
                o = e.shift();
              o;

            )
              ((a = (u = i[o]) ? u.tail : {}).next = s = {}),
                (a.context = r),
                (a.callback = n),
                (i[o] = { tail: s, next: u ? u.next : a }),
                (o = e.shift())
            return this
          },
          off: function (e, n, i) {
            var o, a, s, u, c, l
            if ((a = this._callbacks)) {
              if (!(e || n || i)) return delete this._callbacks, this
              for (o = (e = e ? e.split(t) : r.keys(a)).shift(); o; )
                if (((s = a[o]), delete a[o], s && (n || i))) {
                  for (u = s.tail, s = s.next; s !== u; )
                    (c = s.callback),
                      (l = s.context),
                      ((n && c !== n) || (i && l !== i)) && this.on(o, c, l),
                      (s = s.next)
                  o = e.shift()
                }
              return this
            }
          },
          trigger: function (e) {
            var r, i, o, a, s, u, c
            if (!(o = this._callbacks)) return this
            for (
              u = o.all,
                e = e.split(t),
                c = n.call(arguments, 1),
                r = e.shift();
              r;

            ) {
              if ((i = o[r]))
                for (a = i.tail; (i = i.next) !== a; )
                  i.callback.apply(i.context || this, c)
              if ((i = u))
                for (a = i.tail, s = [r].concat(c); (i = i.next) !== a; )
                  i.callback.apply(i.context || this, s)
              r = e.shift()
            }
            return this
          },
        }),
          (e.Events.bind = e.Events.on),
          (e.Events.unbind = e.Events.off)
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0)
      e.exports = function (e) {
        ;(e.GeoPoint = function (t, n) {
          i.isArray(t)
            ? (e.GeoPoint._validate(t[0], t[1]),
              (this.latitude = t[0]),
              (this.longitude = t[1]))
            : i.isObject(t)
            ? (e.GeoPoint._validate(t.latitude, t.longitude),
              (this.latitude = t.latitude),
              (this.longitude = t.longitude))
            : i.isNumber(t) && i.isNumber(n)
            ? (e.GeoPoint._validate(t, n),
              (this.latitude = t),
              (this.longitude = n))
            : ((this.latitude = 0), (this.longitude = 0))
          var r = this
          this.__defineGetter__ &&
            this.__defineSetter__ &&
            ((this._latitude = this.latitude),
            (this._longitude = this.longitude),
            this.__defineGetter__('latitude', function () {
              return r._latitude
            }),
            this.__defineGetter__('longitude', function () {
              return r._longitude
            }),
            this.__defineSetter__('latitude', function (t) {
              e.GeoPoint._validate(t, r.longitude), (r._latitude = t)
            }),
            this.__defineSetter__('longitude', function (t) {
              e.GeoPoint._validate(r.latitude, t), (r._longitude = t)
            }))
        }),
          (e.GeoPoint._validate = function (e, t) {
            if (e < -90)
              throw new Error('AV.GeoPoint latitude ' + e + ' < -90.0.')
            if (e > 90)
              throw new Error('AV.GeoPoint latitude ' + e + ' > 90.0.')
            if (t < -180)
              throw new Error('AV.GeoPoint longitude ' + t + ' < -180.0.')
            if (t > 180)
              throw new Error('AV.GeoPoint longitude ' + t + ' > 180.0.')
          }),
          (e.GeoPoint.current = function () {
            return new r.default(function (t, n) {
              navigator.geolocation.getCurrentPosition(function (n) {
                t(
                  new e.GeoPoint({
                    latitude: n.coords.latitude,
                    longitude: n.coords.longitude,
                  })
                )
              }, n)
            })
          }),
          i.extend(e.GeoPoint.prototype, {
            toJSON: function () {
              return (
                e.GeoPoint._validate(this.latitude, this.longitude),
                {
                  __type: 'GeoPoint',
                  latitude: this.latitude,
                  longitude: this.longitude,
                }
              )
            },
            radiansTo: function (e) {
              var t = Math.PI / 180,
                n = this.latitude * t,
                r = this.longitude * t,
                i = e.latitude * t,
                o = n - i,
                a = r - e.longitude * t,
                s = Math.sin(o / 2),
                u = Math.sin(a / 2),
                c = s * s + Math.cos(n) * Math.cos(i) * u * u
              return (c = Math.min(1, c)), 2 * Math.asin(Math.sqrt(c))
            },
            kilometersTo: function (e) {
              return 6371 * this.radiansTo(e)
            },
            milesTo: function (e) {
              return 3958.8 * this.radiansTo(e)
            },
          })
      }
    },
    function (e, t, n) {
      var r = n(0)
      e.exports = function (e) {
        ;(e.ACL = function (t) {
          var n = this
          if (((n.permissionsById = {}), r.isObject(t)))
            if (t instanceof e.User)
              n.setReadAccess(t, !0), n.setWriteAccess(t, !0)
            else {
              if (r.isFunction(t))
                throw new Error(
                  'AV.ACL() called with a function.  Did you forget ()?'
                )
              e._objectEach(t, function (t, i) {
                if (!r.isString(i))
                  throw new Error(
                    'Tried to create an ACL with an invalid userId.'
                  )
                ;(n.permissionsById[i] = {}),
                  e._objectEach(t, function (e, t) {
                    if ('read' !== t && 'write' !== t)
                      throw new Error(
                        'Tried to create an ACL with an invalid permission type.'
                      )
                    if (!r.isBoolean(e))
                      throw new Error(
                        'Tried to create an ACL with an invalid permission value.'
                      )
                    n.permissionsById[i][t] = e
                  })
              })
            }
        }),
          (e.ACL.prototype.toJSON = function () {
            return r.clone(this.permissionsById)
          }),
          (e.ACL.prototype._setAccess = function (t, n, i) {
            if (
              (n instanceof e.User
                ? (n = n.id)
                : n instanceof e.Role && (n = 'role:' + n.getName()),
              !r.isString(n))
            )
              throw new Error('userId must be a string.')
            if (!r.isBoolean(i))
              throw new Error('allowed must be either true or false.')
            var o = this.permissionsById[n]
            if (!o) {
              if (!i) return
              ;(o = {}), (this.permissionsById[n] = o)
            }
            i
              ? (this.permissionsById[n][t] = !0)
              : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n])
          }),
          (e.ACL.prototype._getAccess = function (t, n) {
            n instanceof e.User
              ? (n = n.id)
              : n instanceof e.Role && (n = 'role:' + n.getName())
            var r = this.permissionsById[n]
            return !!r && !!r[t]
          }),
          (e.ACL.prototype.setReadAccess = function (e, t) {
            this._setAccess('read', e, t)
          }),
          (e.ACL.prototype.getReadAccess = function (e) {
            return this._getAccess('read', e)
          }),
          (e.ACL.prototype.setWriteAccess = function (e, t) {
            this._setAccess('write', e, t)
          }),
          (e.ACL.prototype.getWriteAccess = function (e) {
            return this._getAccess('write', e)
          }),
          (e.ACL.prototype.setPublicReadAccess = function (e) {
            this.setReadAccess('*', e)
          }),
          (e.ACL.prototype.getPublicReadAccess = function () {
            return this.getReadAccess('*')
          }),
          (e.ACL.prototype.setPublicWriteAccess = function (e) {
            this.setWriteAccess('*', e)
          }),
          (e.ACL.prototype.getPublicWriteAccess = function () {
            return this.getWriteAccess('*')
          }),
          (e.ACL.prototype.getRoleReadAccess = function (t) {
            if ((t instanceof e.Role && (t = t.getName()), r.isString(t)))
              return this.getReadAccess('role:' + t)
            throw new Error('role must be a AV.Role or a String')
          }),
          (e.ACL.prototype.getRoleWriteAccess = function (t) {
            if ((t instanceof e.Role && (t = t.getName()), r.isString(t)))
              return this.getWriteAccess('role:' + t)
            throw new Error('role must be a AV.Role or a String')
          }),
          (e.ACL.prototype.setRoleReadAccess = function (t, n) {
            if ((t instanceof e.Role && (t = t.getName()), !r.isString(t)))
              throw new Error('role must be a AV.Role or a String')
            this.setReadAccess('role:' + t, n)
          }),
          (e.ACL.prototype.setRoleWriteAccess = function (t, n) {
            if ((t instanceof e.Role && (t = t.getName()), !r.isString(t)))
              throw new Error('role must be a AV.Role or a String')
            this.setWriteAccess('role:' + t, n)
          })
      }
    },
    function (e, t, n) {
      var r = n(0)
      e.exports = function (e) {
        ;(e.Op = function () {
          this._initialize.apply(this, arguments)
        }),
          r.extend(e.Op.prototype, { _initialize: function () {} }),
          r.extend(e.Op, {
            _extend: e._extend,
            _opDecoderMap: {},
            _registerDecoder: function (t, n) {
              e.Op._opDecoderMap[t] = n
            },
            _decode: function (t) {
              var n = e.Op._opDecoderMap[t.__op]
              return n ? n(t) : void 0
            },
          }),
          e.Op._registerDecoder('Batch', function (t) {
            var n = null
            return (
              e._arrayEach(t.ops, function (t) {
                ;(t = e.Op._decode(t)), (n = t._mergeWithPrevious(n))
              }),
              n
            )
          }),
          (e.Op.Set = e.Op._extend({
            _initialize: function (e) {
              this._value = e
            },
            value: function () {
              return this._value
            },
            toJSON: function () {
              return e._encode(this.value())
            },
            _mergeWithPrevious: function (e) {
              return this
            },
            _estimate: function (e) {
              return this.value()
            },
          })),
          (e.Op._UNSET = {}),
          (e.Op.Unset = e.Op._extend({
            toJSON: function () {
              return { __op: 'Delete' }
            },
            _mergeWithPrevious: function (e) {
              return this
            },
            _estimate: function (t) {
              return e.Op._UNSET
            },
          })),
          e.Op._registerDecoder('Delete', function (t) {
            return new e.Op.Unset()
          }),
          (e.Op.Increment = e.Op._extend({
            _initialize: function (e) {
              this._amount = e
            },
            amount: function () {
              return this._amount
            },
            toJSON: function () {
              return { __op: 'Increment', amount: this._amount }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount())
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(t.value() + this.amount())
                if (t instanceof e.Op.Increment)
                  return new e.Op.Increment(this.amount() + t.amount())
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (e) {
              return e ? e + this.amount() : this.amount()
            },
          })),
          e.Op._registerDecoder('Increment', function (t) {
            return new e.Op.Increment(t.amount)
          }),
          (e.Op.BitAnd = e.Op._extend({
            _initialize: function (e) {
              this._value = e
            },
            value: function () {
              return this._value
            },
            toJSON: function () {
              return { __op: 'BitAnd', value: this.value() }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(0)
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(t.value() & this.value())
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (e) {
              return e & this.value()
            },
          })),
          e.Op._registerDecoder('BitAnd', function (t) {
            return new e.Op.BitAnd(t.value)
          }),
          (e.Op.BitOr = e.Op._extend({
            _initialize: function (e) {
              this._value = e
            },
            value: function () {
              return this._value
            },
            toJSON: function () {
              return { __op: 'BitOr', value: this.value() }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(this.value())
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(t.value() | this.value())
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (e) {
              return e | this.value()
            },
          })),
          e.Op._registerDecoder('BitOr', function (t) {
            return new e.Op.BitOr(t.value)
          }),
          (e.Op.BitXor = e.Op._extend({
            _initialize: function (e) {
              this._value = e
            },
            value: function () {
              return this._value
            },
            toJSON: function () {
              return { __op: 'BitXor', value: this.value() }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(this.value())
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(t.value() ^ this.value())
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (e) {
              return e ^ this.value()
            },
          })),
          e.Op._registerDecoder('BitXor', function (t) {
            return new e.Op.BitXor(t.value)
          }),
          (e.Op.Add = e.Op._extend({
            _initialize: function (e) {
              this._objects = e
            },
            objects: function () {
              return this._objects
            },
            toJSON: function () {
              return { __op: 'Add', objects: e._encode(this.objects()) }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects())
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(this._estimate(t.value()))
                if (t instanceof e.Op.Add)
                  return new e.Op.Add(t.objects().concat(this.objects()))
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (e) {
              return e ? e.concat(this.objects()) : r.clone(this.objects())
            },
          })),
          e.Op._registerDecoder('Add', function (t) {
            return new e.Op.Add(e._decode(t.objects))
          }),
          (e.Op.AddUnique = e.Op._extend({
            _initialize: function (e) {
              this._objects = r.uniq(e)
            },
            objects: function () {
              return this._objects
            },
            toJSON: function () {
              return { __op: 'AddUnique', objects: e._encode(this.objects()) }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects())
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(this._estimate(t.value()))
                if (t instanceof e.Op.AddUnique)
                  return new e.Op.AddUnique(this._estimate(t.objects()))
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (t) {
              if (t) {
                var n = r.clone(t)
                return (
                  e._arrayEach(this.objects(), function (t) {
                    if (t instanceof e.Object && t.id) {
                      var i = r.find(n, function (n) {
                        return n instanceof e.Object && n.id === t.id
                      })
                      if (i) {
                        var o = r.indexOf(n, i)
                        n[o] = t
                      } else n.push(t)
                    } else r.contains(n, t) || n.push(t)
                  }),
                  n
                )
              }
              return r.clone(this.objects())
            },
          })),
          e.Op._registerDecoder('AddUnique', function (t) {
            return new e.Op.AddUnique(e._decode(t.objects))
          }),
          (e.Op.Remove = e.Op._extend({
            _initialize: function (e) {
              this._objects = r.uniq(e)
            },
            objects: function () {
              return this._objects
            },
            toJSON: function () {
              return { __op: 'Remove', objects: e._encode(this.objects()) }
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset) return t
                if (t instanceof e.Op.Set)
                  return new e.Op.Set(this._estimate(t.value()))
                if (t instanceof e.Op.Remove)
                  return new e.Op.Remove(r.union(t.objects(), this.objects()))
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (t) {
              if (t) {
                var n = r.difference(t, this.objects())
                return (
                  e._arrayEach(this.objects(), function (t) {
                    t instanceof e.Object &&
                      t.id &&
                      (n = r.reject(n, function (n) {
                        return n instanceof e.Object && n.id === t.id
                      }))
                  }),
                  n
                )
              }
              return []
            },
          })),
          e.Op._registerDecoder('Remove', function (t) {
            return new e.Op.Remove(e._decode(t.objects))
          }),
          (e.Op.Relation = e.Op._extend({
            _initialize: function (t, n) {
              this._targetClassName = null
              var i = this,
                o = function (t) {
                  if (t instanceof e.Object) {
                    if (!t.id)
                      throw new Error(
                        "You can't add an unsaved AV.Object to a relation."
                      )
                    if (
                      (i._targetClassName || (i._targetClassName = t.className),
                      i._targetClassName !== t.className)
                    )
                      throw new Error(
                        'Tried to create a AV.Relation with 2 different types: ' +
                          i._targetClassName +
                          ' and ' +
                          t.className +
                          '.'
                      )
                    return t.id
                  }
                  return t
                }
              ;(this.relationsToAdd = r.uniq(r.map(t, o))),
                (this.relationsToRemove = r.uniq(r.map(n, o)))
            },
            added: function () {
              var t = this
              return r.map(this.relationsToAdd, function (n) {
                var r = e.Object._create(t._targetClassName)
                return (r.id = n), r
              })
            },
            removed: function () {
              var t = this
              return r.map(this.relationsToRemove, function (n) {
                var r = e.Object._create(t._targetClassName)
                return (r.id = n), r
              })
            },
            toJSON: function () {
              var e = null,
                t = null,
                n = this,
                i = function (e) {
                  return {
                    __type: 'Pointer',
                    className: n._targetClassName,
                    objectId: e,
                  }
                }
              return (
                this.relationsToAdd.length > 0 &&
                  (e = {
                    __op: 'AddRelation',
                    objects: r.map(this.relationsToAdd, i),
                  }),
                this.relationsToRemove.length > 0 &&
                  (t = {
                    __op: 'RemoveRelation',
                    objects: r.map(this.relationsToRemove, i),
                  }),
                e && t ? { __op: 'Batch', ops: [e, t] } : e || t || {}
              )
            },
            _mergeWithPrevious: function (t) {
              if (t) {
                if (t instanceof e.Op.Unset)
                  throw new Error(
                    "You can't modify a relation after deleting it."
                  )
                if (t instanceof e.Op.Relation) {
                  if (
                    t._targetClassName &&
                    t._targetClassName !== this._targetClassName
                  )
                    throw new Error(
                      'Related object must be of class ' +
                        t._targetClassName +
                        ', but ' +
                        this._targetClassName +
                        ' was passed in.'
                    )
                  var n = r.union(
                      r.difference(t.relationsToAdd, this.relationsToRemove),
                      this.relationsToAdd
                    ),
                    i = r.union(
                      r.difference(t.relationsToRemove, this.relationsToAdd),
                      this.relationsToRemove
                    ),
                    o = new e.Op.Relation(n, i)
                  return (o._targetClassName = this._targetClassName), o
                }
                throw new Error('Op is invalid after previous op.')
              }
              return this
            },
            _estimate: function (t, n, r) {
              if (t) {
                if (t instanceof e.Relation) {
                  if (this._targetClassName)
                    if (t.targetClassName) {
                      if (t.targetClassName !== this._targetClassName)
                        throw new Error(
                          'Related object must be a ' +
                            t.targetClassName +
                            ', but a ' +
                            this._targetClassName +
                            ' was passed in.'
                        )
                    } else t.targetClassName = this._targetClassName
                  return t
                }
                throw new Error('Op is invalid after previous op.')
              }
              new e.Relation(n, r).targetClassName = this._targetClassName
            },
          })),
          e.Op._registerDecoder('AddRelation', function (t) {
            return new e.Op.Relation(e._decode(t.objects), [])
          }),
          e.Op._registerDecoder('RemoveRelation', function (t) {
            return new e.Op.Relation([], e._decode(t.objects))
          })
      }
    },
    function (e, t, n) {
      var r = n(0)
      e.exports = function (e) {
        ;(e.Relation = function (e, t) {
          if (!r.isString(t)) throw new TypeError('key must be a string')
          ;(this.parent = e), (this.key = t), (this.targetClassName = null)
        }),
          (e.Relation.reverseQuery = function (t, n, r) {
            var i = new e.Query(t)
            return i.equalTo(n, r._toPointer()), i
          }),
          r.extend(e.Relation.prototype, {
            _ensureParentAndKey: function (e, t) {
              if (
                ((this.parent = this.parent || e),
                (this.key = this.key || t),
                this.parent !== e)
              )
                throw new Error(
                  'Internal Error. Relation retrieved from two different Objects.'
                )
              if (this.key !== t)
                throw new Error(
                  'Internal Error. Relation retrieved from two different keys.'
                )
            },
            add: function (t) {
              r.isArray(t) || (t = [t])
              var n = new e.Op.Relation(t, [])
              this.parent.set(this.key, n),
                (this.targetClassName = n._targetClassName)
            },
            remove: function (t) {
              r.isArray(t) || (t = [t])
              var n = new e.Op.Relation([], t)
              this.parent.set(this.key, n),
                (this.targetClassName = n._targetClassName)
            },
            toJSON: function () {
              return { __type: 'Relation', className: this.targetClassName }
            },
            query: function () {
              var t, n
              return (
                this.targetClassName
                  ? ((t = e.Object._getSubclass(this.targetClassName)),
                    (n = new e.Query(t)))
                  : ((t = e.Object._getSubclass(this.parent.className)),
                    ((n = new e.Query(
                      t
                    ))._defaultParams.redirectClassNameForKey = this.key)),
                n._addCondition(
                  '$relatedTo',
                  'object',
                  this.parent._toPointer()
                ),
                n._addCondition('$relatedTo', 'key', this.key),
                n
              )
            },
          })
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(135),
        a = n(136),
        s = n(137),
        u = n(16),
        c = n(5)._request,
        l = n(6),
        d = l.tap,
        h = l.transformFetchOptions,
        p = n(19)('leancloud:file'),
        f = n(141)
      e.exports = function (e) {
        var t = function () {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1)
          },
          n = function (e) {
            return i.isString(e)
              ? e.match(
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                )[4]
              : ''
          },
          l = function (e) {
            if (e < 26) return String.fromCharCode(65 + e)
            if (e < 52) return String.fromCharCode(e - 26 + 97)
            if (e < 62) return String.fromCharCode(e - 52 + 48)
            if (62 === e) return '+'
            if (63 === e) return '/'
            throw new Error('Tried to encode large digit ' + e + ' in base64.')
          },
          g = function (e) {
            var t = []
            return (
              (t.length = Math.ceil(e.length / 3)),
              i.times(t.length, function (n) {
                var r = e[3 * n],
                  i = e[3 * n + 1] || 0,
                  o = e[3 * n + 2] || 0,
                  a = 3 * n + 1 < e.length,
                  s = 3 * n + 2 < e.length
                t[n] = [
                  l((r >> 2) & 63),
                  l(((r << 4) & 48) | ((i >> 4) & 15)),
                  a ? l(((i << 2) & 60) | ((o >> 6) & 3)) : '=',
                  s ? l(63 & o) : '=',
                ].join('')
              }),
              t.join('')
            )
          }
        ;(e.File = function (t, r, o) {
          if (
            ((this.attributes = { name: t, url: '', metaData: {}, base64: '' }),
            i.isString(r))
          )
            throw new TypeError(
              'Creating an AV.File from a String is not yet supported.'
            )
          i.isArray(r) &&
            ((this.attributes.metaData.size = r.length),
            (r = { base64: g(r) })),
            (this._extName = ''),
            (this._data = r),
            (this._uploadHeaders = {}),
            r &&
              r.blob &&
              'string' == typeof r.blob.uri &&
              (this._extName = n(r.blob.uri)),
            'undefined' != typeof Blob &&
              r instanceof Blob &&
              (r.size && (this.attributes.metaData.size = r.size),
              r.name && (this._extName = n(r.name)))
          var a = void 0
          if (r && r.owner) a = r.owner
          else if (!e._config.disableCurrentUser)
            try {
              a = e.User.current()
            } catch (e) {
              if ('SYNC_API_NOT_AVAILABLE' !== e.code) throw e
            }
          ;(this.attributes.metaData.owner = a ? a.id : 'unknown'),
            this.set('mime_type', o)
        }),
          (e.File.withURL = function (t, n, r, i) {
            if (!t || !n) throw new Error('Please provide file name and url')
            var o = new e.File(t, null, i)
            if (r)
              for (var a in r)
                o.attributes.metaData[a] || (o.attributes.metaData[a] = r[a])
            return (
              (o.attributes.url = n),
              (o.attributes.metaData.__source = 'external'),
              o
            )
          }),
          (e.File.createWithoutData = function (t) {
            var n = new e.File()
            return (n.id = t), n
          }),
          i.extend(e.File.prototype, {
            className: '_File',
            _toFullJSON: function (t) {
              var n = this,
                r =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                o = i.clone(this.attributes)
              return (
                e._objectEach(o, function (n, i) {
                  o[i] = e._encode(n, t, void 0, r)
                }),
                e._objectEach(this._operations, function (e, t) {
                  o[t] = e
                }),
                i.has(this, 'id') && (o.objectId = this.id),
                i(['createdAt', 'updatedAt']).each(function (e) {
                  if (i.has(n, e)) {
                    var t = n[e]
                    o[e] = i.isDate(t) ? t.toJSON() : t
                  }
                }),
                r && (o.__type = 'File'),
                o
              )
            },
            toFullJSON: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
              return this._toFullJSON(e)
            },
            toJSON: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [this]
              return this._toFullJSON(n, !1)
            },
            _toPointer: function () {
              return {
                __type: 'Pointer',
                className: this.className,
                objectId: this.id,
              }
            },
            getACL: function () {
              return this._acl
            },
            setACL: function (t) {
              return t instanceof e.ACL
                ? ((this._acl = t), this)
                : new u(u.OTHER_CAUSE, 'ACL must be a AV.ACL.')
            },
            name: function () {
              return this.get('name')
            },
            url: function () {
              return this.get('url')
            },
            get: function (e) {
              switch (e) {
                case 'objectId':
                  return this.id
                case 'url':
                case 'name':
                case 'mime_type':
                case 'metaData':
                case 'createdAt':
                case 'updatedAt':
                  return this.attributes[e]
                default:
                  return this.attributes.metaData[e]
              }
            },
            set: function () {
              for (
                var e = this,
                  t = function (t, n) {
                    switch (t) {
                      case 'name':
                      case 'url':
                      case 'mime_type':
                      case 'base64':
                      case 'metaData':
                        e.attributes[t] = n
                        break
                      default:
                        e.attributes.metaData[t] = n
                    }
                  },
                  n = arguments.length,
                  r = Array(n),
                  i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              switch (r.length) {
                case 1:
                  for (var o in r[0]) t(o, r[0][o])
                  break
                case 2:
                  t(r[0], r[1])
              }
              return this
            },
            setUploadHeader: function (e, t) {
              return (this._uploadHeaders[e] = t), this
            },
            metaData: function (e, t) {
              return e && t
                ? ((this.attributes.metaData[e] = t), this)
                : e && !t
                ? this.attributes.metaData[e]
                : this.attributes.metaData
            },
            thumbnailURL: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 100,
                r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 'png',
                o = this.attributes.url
              if (!o) throw new Error('Invalid url.')
              if (!e || !t || e <= 0 || t <= 0)
                throw new Error('Invalid width or height value.')
              if (n <= 0 || n > 100) throw new Error('Invalid quality value.')
              return (
                o +
                '?imageView/' +
                (r ? 2 : 1) +
                '/w/' +
                e +
                '/h/' +
                t +
                '/q/' +
                n +
                '/format/' +
                i
              )
            },
            size: function () {
              return this.metaData().size
            },
            ownerId: function () {
              return this.metaData().owner
            },
            destroy: function (e) {
              return this.id
                ? c('files', null, this.id, 'DELETE', null, e)
                : r.default.reject(new Error('The file id does not eixst.'))
            },
            _fileToken: function (e, r) {
              var i = this.attributes.name,
                o = n(i)
              !o && this._extName && ((i += this._extName), (o = this._extName))
              var a = t() + t() + t() + t() + t() + o,
                s = {
                  key: a,
                  name: i,
                  keep_file_name: r.keepFileName,
                  ACL: this._acl,
                  mime_type: e,
                  metaData: this.attributes.metaData,
                }
              return (
                (this._qiniu_key = a), c('fileTokens', null, null, 'POST', s, r)
              )
            },
            save: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
              if (this.id) throw new Error('File is already saved.')
              if (!this._previousSave)
                if (this._data) {
                  var n = this.get('mime_type')
                  this._previousSave = this._fileToken(n, t).then(function (u) {
                    return (
                      u.mime_type && ((n = u.mime_type), e.set('mime_type', n)),
                      (e._token = u.token),
                      r.default
                        .resolve()
                        .then(function () {
                          var t = e._data
                          if (t && t.base64) return f(t.base64, n)
                          if (t && t.blob)
                            return (
                              !t.blob.type && n && (t.blob.type = n),
                              t.blob.name || (t.blob.name = e.get('name')),
                              t.blob
                            )
                          if ('undefined' != typeof Blob && t instanceof Blob)
                            return t
                          throw new TypeError('malformed file data')
                        })
                        .then(function (n) {
                          var r = i.extend({}, t)
                          switch (
                            (t.onprogress &&
                              (r.onprogress = function (e) {
                                if ('download' !== e.direction)
                                  return t.onprogress(e)
                              }),
                            u.provider)
                          ) {
                            case 's3':
                              return s(u, n, e, r)
                            case 'qcloud':
                              return o(u, n, e, r)
                            case 'qiniu':
                            default:
                              return a(u, n, e, r)
                          }
                        })
                        .then(
                          d(function () {
                            return e._callback(!0)
                          }),
                          function (t) {
                            throw (e._callback(!1), t)
                          }
                        )
                    )
                  })
                } else if (
                  this.attributes.url &&
                  'external' === this.attributes.metaData.__source
                ) {
                  var u = {
                    name: this.attributes.name,
                    ACL: this._acl,
                    metaData: this.attributes.metaData,
                    mime_type: this.mimeType,
                    url: this.attributes.url,
                  }
                  this._previousSave = c(
                    'files',
                    this.attributes.name,
                    null,
                    'post',
                    u,
                    t
                  ).then(function (t) {
                    return (
                      (e.attributes.name = t.name),
                      (e.attributes.url = t.url),
                      (e.id = t.objectId),
                      t.size && (e.attributes.metaData.size = t.size),
                      e
                    )
                  })
                }
              return this._previousSave
            },
            _callback: function (e) {
              c('fileCallback', null, null, 'post', {
                token: this._token,
                result: e,
              }).catch(p),
                delete this._token,
                delete this._data
            },
            fetch: function (e, t) {
              return c('files', null, this.id, 'GET', h(e), t).then(
                this._finishFetch.bind(this)
              )
            },
            _finishFetch: function (t) {
              var n = e.Object.prototype.parse(t)
              return (
                (n.attributes = {
                  name: n.name,
                  url: n.url,
                  mime_type: n.mime_type,
                  bucket: n.bucket,
                }),
                (n.attributes.metaData = n.metaData || {}),
                (n.id = n.objectId),
                delete n.objectId,
                delete n.metaData,
                delete n.url,
                delete n.name,
                delete n.mime_type,
                delete n.bucket,
                i.extend(this, n),
                this
              )
            },
          })
      }
    },
    function (e, t, n) {
      var r = n(20).getAdapter,
        i = n(19)('cos')
      e.exports = function (e, t, n) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        ;(n.attributes.url = e.url), (n._bucket = e.bucket), (n.id = e.objectId)
        var a = e.upload_url + '?sign=' + encodeURIComponent(e.token),
          s = { field: 'fileContent', data: t, name: n.attributes.name },
          u = {
            headers: n._uploadHeaders,
            data: { op: 'upload' },
            onprogress: o.onprogress,
          }
        return (
          i('url: %s, file: %o, options: %o', a, s, u),
          r('upload')(a, s, u).then(
            function (e) {
              if ((i(e.status, e.data), !1 === e.ok)) {
                var t = new Error(e.status)
                throw ((t.response = e), t)
              }
              return n
            },
            function (e) {
              var t = e.response
              throw (
                (t &&
                  (i(t.status, t.data),
                  (e.statusCode = t.status),
                  (e.response = t.data)),
                e)
              )
            }
          )
        )
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(9)),
        i = n(20).getAdapter,
        o = n(19)('leancloud:qiniu')
      e.exports = function (e, t, n) {
        var a =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        ;(n.attributes.url = e.url), (n._bucket = e.bucket), (n.id = e.objectId)
        var s = e.token,
          u = e.upload_url || 'https://upload.qiniup.com',
          c = { field: 'file', data: t, name: n.attributes.name },
          l = {
            headers: n._uploadHeaders,
            data: {
              name: n.attributes.name,
              key: e.key || n._qiniu_key,
              token: s,
            },
            onprogress: a.onprogress,
          }
        return (
          o('url: %s, file: %o, options: %o', u, c, l),
          i('upload')(u, c, l).then(
            function (e) {
              if ((o(e.status, e.data), !1 === e.ok)) {
                var t = e.status
                e.data &&
                  (t = e.data.error ? e.data.error : (0, r.default)(e.data))
                var i = new Error(t)
                throw ((i.response = e), i)
              }
              return n
            },
            function (e) {
              var t = e.response
              throw (
                (t &&
                  (o(t.status, t.data),
                  (e.statusCode = t.status),
                  (e.response = t.data)),
                e)
              )
            }
          )
        )
      }
    },
    function (e, t, n) {
      var r = n(0),
        i = n(48)
      e.exports = function (e, t, n) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        return (
          (n.attributes.url = e.url),
          (n._bucket = e.bucket),
          (n.id = e.objectId),
          i({
            url: e.upload_url,
            method: 'PUT',
            data: t,
            headers: r.extend(
              {
                'Content-Type': n.get('mime_type'),
                'Cache-Control': 'public, max-age=31536000',
              },
              n._uploadHeaders
            ),
            onprogress: o.onprogress,
          }).then(function () {
            return n
          })
        )
      }
    },
    function (e, t, n) {
      !(function () {
        var t = n(139),
          r = n(78).utf8,
          i = n(140),
          o = n(78).bin,
          a = function (e, n) {
            e.constructor == String
              ? (e =
                  n && 'binary' === n.encoding
                    ? o.stringToBytes(e)
                    : r.stringToBytes(e))
              : i(e)
              ? (e = Array.prototype.slice.call(e, 0))
              : Array.isArray(e) || (e = e.toString())
            for (
              var s = t.bytesToWords(e),
                u = 8 * e.length,
                c = 1732584193,
                l = -271733879,
                d = -1732584194,
                h = 271733878,
                p = 0;
              p < s.length;
              p++
            )
              s[p] =
                (16711935 & ((s[p] << 8) | (s[p] >>> 24))) |
                (4278255360 & ((s[p] << 24) | (s[p] >>> 8)))
            ;(s[u >>> 5] |= 128 << u % 32),
              (s[14 + (((u + 64) >>> 9) << 4)] = u)
            var f = a._ff,
              g = a._gg,
              m = a._hh,
              _ = a._ii
            for (p = 0; p < s.length; p += 16) {
              var v = c,
                b = l,
                y = d,
                w = h
              ;(c = f(c, l, d, h, s[p + 0], 7, -680876936)),
                (h = f(h, c, l, d, s[p + 1], 12, -389564586)),
                (d = f(d, h, c, l, s[p + 2], 17, 606105819)),
                (l = f(l, d, h, c, s[p + 3], 22, -1044525330)),
                (c = f(c, l, d, h, s[p + 4], 7, -176418897)),
                (h = f(h, c, l, d, s[p + 5], 12, 1200080426)),
                (d = f(d, h, c, l, s[p + 6], 17, -1473231341)),
                (l = f(l, d, h, c, s[p + 7], 22, -45705983)),
                (c = f(c, l, d, h, s[p + 8], 7, 1770035416)),
                (h = f(h, c, l, d, s[p + 9], 12, -1958414417)),
                (d = f(d, h, c, l, s[p + 10], 17, -42063)),
                (l = f(l, d, h, c, s[p + 11], 22, -1990404162)),
                (c = f(c, l, d, h, s[p + 12], 7, 1804603682)),
                (h = f(h, c, l, d, s[p + 13], 12, -40341101)),
                (d = f(d, h, c, l, s[p + 14], 17, -1502002290)),
                (c = g(
                  c,
                  (l = f(l, d, h, c, s[p + 15], 22, 1236535329)),
                  d,
                  h,
                  s[p + 1],
                  5,
                  -165796510
                )),
                (h = g(h, c, l, d, s[p + 6], 9, -1069501632)),
                (d = g(d, h, c, l, s[p + 11], 14, 643717713)),
                (l = g(l, d, h, c, s[p + 0], 20, -373897302)),
                (c = g(c, l, d, h, s[p + 5], 5, -701558691)),
                (h = g(h, c, l, d, s[p + 10], 9, 38016083)),
                (d = g(d, h, c, l, s[p + 15], 14, -660478335)),
                (l = g(l, d, h, c, s[p + 4], 20, -405537848)),
                (c = g(c, l, d, h, s[p + 9], 5, 568446438)),
                (h = g(h, c, l, d, s[p + 14], 9, -1019803690)),
                (d = g(d, h, c, l, s[p + 3], 14, -187363961)),
                (l = g(l, d, h, c, s[p + 8], 20, 1163531501)),
                (c = g(c, l, d, h, s[p + 13], 5, -1444681467)),
                (h = g(h, c, l, d, s[p + 2], 9, -51403784)),
                (d = g(d, h, c, l, s[p + 7], 14, 1735328473)),
                (c = m(
                  c,
                  (l = g(l, d, h, c, s[p + 12], 20, -1926607734)),
                  d,
                  h,
                  s[p + 5],
                  4,
                  -378558
                )),
                (h = m(h, c, l, d, s[p + 8], 11, -2022574463)),
                (d = m(d, h, c, l, s[p + 11], 16, 1839030562)),
                (l = m(l, d, h, c, s[p + 14], 23, -35309556)),
                (c = m(c, l, d, h, s[p + 1], 4, -1530992060)),
                (h = m(h, c, l, d, s[p + 4], 11, 1272893353)),
                (d = m(d, h, c, l, s[p + 7], 16, -155497632)),
                (l = m(l, d, h, c, s[p + 10], 23, -1094730640)),
                (c = m(c, l, d, h, s[p + 13], 4, 681279174)),
                (h = m(h, c, l, d, s[p + 0], 11, -358537222)),
                (d = m(d, h, c, l, s[p + 3], 16, -722521979)),
                (l = m(l, d, h, c, s[p + 6], 23, 76029189)),
                (c = m(c, l, d, h, s[p + 9], 4, -640364487)),
                (h = m(h, c, l, d, s[p + 12], 11, -421815835)),
                (d = m(d, h, c, l, s[p + 15], 16, 530742520)),
                (c = _(
                  c,
                  (l = m(l, d, h, c, s[p + 2], 23, -995338651)),
                  d,
                  h,
                  s[p + 0],
                  6,
                  -198630844
                )),
                (h = _(h, c, l, d, s[p + 7], 10, 1126891415)),
                (d = _(d, h, c, l, s[p + 14], 15, -1416354905)),
                (l = _(l, d, h, c, s[p + 5], 21, -57434055)),
                (c = _(c, l, d, h, s[p + 12], 6, 1700485571)),
                (h = _(h, c, l, d, s[p + 3], 10, -1894986606)),
                (d = _(d, h, c, l, s[p + 10], 15, -1051523)),
                (l = _(l, d, h, c, s[p + 1], 21, -2054922799)),
                (c = _(c, l, d, h, s[p + 8], 6, 1873313359)),
                (h = _(h, c, l, d, s[p + 15], 10, -30611744)),
                (d = _(d, h, c, l, s[p + 6], 15, -1560198380)),
                (l = _(l, d, h, c, s[p + 13], 21, 1309151649)),
                (c = _(c, l, d, h, s[p + 4], 6, -145523070)),
                (h = _(h, c, l, d, s[p + 11], 10, -1120210379)),
                (d = _(d, h, c, l, s[p + 2], 15, 718787259)),
                (l = _(l, d, h, c, s[p + 9], 21, -343485551)),
                (c = (c + v) >>> 0),
                (l = (l + b) >>> 0),
                (d = (d + y) >>> 0),
                (h = (h + w) >>> 0)
            }
            return t.endian([c, l, d, h])
          }
        ;(a._ff = function (e, t, n, r, i, o, a) {
          var s = e + ((t & n) | (~t & r)) + (i >>> 0) + a
          return ((s << o) | (s >>> (32 - o))) + t
        }),
          (a._gg = function (e, t, n, r, i, o, a) {
            var s = e + ((t & r) | (n & ~r)) + (i >>> 0) + a
            return ((s << o) | (s >>> (32 - o))) + t
          }),
          (a._hh = function (e, t, n, r, i, o, a) {
            var s = e + (t ^ n ^ r) + (i >>> 0) + a
            return ((s << o) | (s >>> (32 - o))) + t
          }),
          (a._ii = function (e, t, n, r, i, o, a) {
            var s = e + (n ^ (t | ~r)) + (i >>> 0) + a
            return ((s << o) | (s >>> (32 - o))) + t
          }),
          (a._blocksize = 16),
          (a._digestsize = 16),
          (e.exports = function (e, n) {
            if (null == e) throw new Error('Illegal argument ' + e)
            var r = t.wordsToBytes(a(e, n))
            return n && n.asBytes
              ? r
              : n && n.asString
              ? o.bytesToString(r)
              : t.bytesToHex(r)
          })
      })()
    },
    function (e, t) {
      !(function () {
        var t =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          n = {
            rotl: function (e, t) {
              return (e << t) | (e >>> (32 - t))
            },
            rotr: function (e, t) {
              return (e << (32 - t)) | (e >>> t)
            },
            endian: function (e) {
              if (e.constructor == Number)
                return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24))
              for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t])
              return e
            },
            randomBytes: function (e) {
              for (var t = []; e > 0; e--)
                t.push(Math.floor(256 * Math.random()))
              return t
            },
            bytesToWords: function (e) {
              for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
                t[r >>> 5] |= e[n] << (24 - (r % 32))
              return t
            },
            wordsToBytes: function (e) {
              for (var t = [], n = 0; n < 32 * e.length; n += 8)
                t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255)
              return t
            },
            bytesToHex: function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                t.push((e[n] >>> 4).toString(16)),
                  t.push((15 & e[n]).toString(16))
              return t.join('')
            },
            hexToBytes: function (e) {
              for (var t = [], n = 0; n < e.length; n += 2)
                t.push(parseInt(e.substr(n, 2), 16))
              return t
            },
            bytesToBase64: function (e) {
              for (var n = [], r = 0; r < e.length; r += 3)
                for (
                  var i = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], o = 0;
                  o < 4;
                  o++
                )
                  8 * r + 6 * o <= 8 * e.length
                    ? n.push(t.charAt((i >>> (6 * (3 - o))) & 63))
                    : n.push('=')
              return n.join('')
            },
            base64ToBytes: function (e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, '')
              for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)
                0 != i &&
                  n.push(
                    ((t.indexOf(e.charAt(r - 1)) &
                      (Math.pow(2, -2 * i + 8) - 1)) <<
                      (2 * i)) |
                      (t.indexOf(e.charAt(r)) >>> (6 - 2 * i))
                  )
              return n
            },
          }
        e.exports = n
      })()
    },
    function (e, t) {
      function n(e) {
        return (
          !!e.constructor &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      }
      e.exports = function (e) {
        return (
          null != e &&
          (n(e) ||
            (function (e) {
              return (
                'function' == typeof e.readFloatLE &&
                'function' == typeof e.slice &&
                n(e.slice(0, 0))
              )
            })(e) ||
            !!e._isBuffer)
        )
      }
    },
    function (e, t, n) {
      e.exports = function (e, t) {
        var n
        e.indexOf('base64') < 0
          ? (n = atob(e))
          : e.split(',')[0].indexOf('base64') >= 0
          ? ((t = t || e.split(',')[0].split(':')[1].split(';')[0]),
            (n = atob(e.split(',')[1])))
          : (n = unescape(e.split(',')[1]))
        for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++)
          r[i] = n.charCodeAt(i)
        return new Blob([r], { type: t })
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(143)),
        o = r(n(9)),
        a = r(n(146)),
        s = r(n(2)),
        u = n(0),
        c = n(16),
        l = n(5)._request,
        d = n(6),
        h = d.isNullOrUndefined,
        p = d.ensureArray,
        f = d.transformFetchOptions,
        g = d.setValue,
        m = d.findValue,
        _ = d.isPlainObject,
        v = d.continueWhile,
        b = ['objectId', 'createdAt', 'updatedAt'],
        y = function (e) {
          if (-1 !== b.indexOf(e)) throw new Error('key[' + e + '] is reserved')
        },
        w = function (e) {
          var t = u.find(e, function (e) {
            return e instanceof Error
          })
          if (!t) return e
          var n = new c(t.code, t.message)
          throw ((n.results = e), n)
        }
      e.exports = function (e) {
        ;(e.Object = function (t, n) {
          if (u.isString(t)) return e.Object._create.apply(this, arguments)
          ;(t = t || {}),
            n &&
              n.parse &&
              ((t = this.parse(t)), (t = this._mergeMagicFields(t)))
          var r = (function (e, t) {
            return e && e[t] ? (u.isFunction(e[t]) ? e[t]() : e[t]) : null
          })(this, 'defaults')
          r && (t = u.extend({}, r, t)),
            n && n.collection && (this.collection = n.collection),
            (this._serverData = {}),
            (this._opSetQueue = [{}]),
            (this._flags = {}),
            (this.attributes = {}),
            (this._hashedJSON = {}),
            (this._escapedAttributes = {}),
            (this.cid = u.uniqueId('c')),
            (this.changed = {}),
            (this._silent = {}),
            (this._pending = {}),
            this.set(t, { silent: !0 }),
            (this.changed = {}),
            (this._silent = {}),
            (this._pending = {}),
            (this._hasData = !0),
            (this._previousAttributes = u.clone(this.attributes)),
            this.initialize.apply(this, arguments)
        }),
          (e.Object.saveAll = function (t, n) {
            return e.Object._deepSaveAsync(t, null, n)
          }),
          (e.Object.fetchAll = function (e, t) {
            return s.default
              .resolve()
              .then(function () {
                return l(
                  'batch',
                  null,
                  null,
                  'POST',
                  {
                    requests: u.map(e, function (e) {
                      if (!e.className)
                        throw new Error('object must have className to fetch')
                      if (!e.id) throw new Error('object must have id to fetch')
                      if (e.dirty())
                        throw new Error('object is modified but not saved')
                      return {
                        method: 'GET',
                        path: '/1.1/classes/' + e.className + '/' + e.id,
                      }
                    }),
                  },
                  t
                )
              })
              .then(function (t) {
                var n = u.map(e, function (e, n) {
                  if (t[n].success) {
                    var r = e.parse(t[n].success)
                    return e._cleanupUnsetKeys(r), e._finishFetch(r), e
                  }
                  return null === t[n].success
                    ? new c(c.OBJECT_NOT_FOUND, 'Object not found.')
                    : new c(t[n].error.code, t[n].error.error)
                })
                return w(n)
              })
          }),
          u.extend(e.Object.prototype, e.Events, {
            _fetchWhenSave: !1,
            initialize: function () {},
            fetchWhenSave: function (e) {
              if (
                (console.warn(
                  'AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.'
                ),
                !u.isBoolean(e))
              )
                throw new Error('Expect boolean value for fetchWhenSave')
              this._fetchWhenSave = e
            },
            getObjectId: function () {
              return this.id
            },
            getCreatedAt: function () {
              return this.createdAt
            },
            getUpdatedAt: function () {
              return this.updatedAt
            },
            toJSON: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : []
              return this._toFullJSON(n, !1)
            },
            toFullJSON: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
              return this._toFullJSON(e)
            },
            _toFullJSON: function (t) {
              var n = this,
                r =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = u.clone(this.attributes)
              if (u.isArray(t)) var o = t.concat(this)
              return (
                e._objectEach(i, function (t, n) {
                  i[n] = e._encode(t, o, void 0, r)
                }),
                e._objectEach(this._operations, function (e, t) {
                  i[t] = e
                }),
                u.has(this, 'id') && (i.objectId = this.id),
                u(['createdAt', 'updatedAt']).each(function (e) {
                  if (u.has(n, e)) {
                    var t = n[e]
                    i[e] = u.isDate(t) ? t.toJSON() : t
                  }
                }),
                r &&
                  ((i.__type = 'Object'),
                  u.isArray(t) && t.length && (i.__type = 'Pointer'),
                  (i.className = this.className)),
                i
              )
            },
            _refreshCache: function () {
              var t = this
              t._refreshingCache ||
                ((t._refreshingCache = !0),
                e._objectEach(this.attributes, function (n, r) {
                  n instanceof e.Object
                    ? n._refreshCache()
                    : u.isObject(n) &&
                      t._resetCacheForKey(r) &&
                      t.set(r, new e.Op.Set(n), { silent: !0 })
                }),
                delete t._refreshingCache)
            },
            dirty: function (e) {
              this._refreshCache()
              var t = u.last(this._opSetQueue)
              return e ? !!t[e] : !this.id || u.keys(t).length > 0
            },
            dirtyKeys: function () {
              this._refreshCache()
              var e = u.last(this._opSetQueue)
              return u.keys(e)
            },
            _toPointer: function () {
              return {
                __type: 'Pointer',
                className: this.className,
                objectId: this.id,
              }
            },
            get: function (e) {
              switch (e) {
                case 'objectId':
                  return this.id
                case 'createdAt':
                case 'updatedAt':
                  return this[e]
                default:
                  return this.attributes[e]
              }
            },
            relation: function (t) {
              var n = this.get(t)
              if (n) {
                if (!(n instanceof e.Relation))
                  throw new Error(
                    'Called relation() on non-relation field ' + t
                  )
                return n._ensureParentAndKey(this, t), n
              }
              return new e.Relation(this, t)
            },
            escape: function (e) {
              var t = this._escapedAttributes[e]
              if (t) return t
              var n,
                r = this.attributes[e]
              return (
                (n = h(r) ? '' : u.escape(r.toString())),
                (this._escapedAttributes[e] = n),
                n
              )
            },
            has: function (e) {
              return !h(this.attributes[e])
            },
            _mergeMagicFields: function (t) {
              var n = this
              return (
                e._arrayEach(
                  ['objectId', 'createdAt', 'updatedAt'],
                  function (r) {
                    t[r] &&
                      ('objectId' === r
                        ? (n.id = t[r])
                        : ('createdAt' !== r && 'updatedAt' !== r) ||
                          u.isDate(t[r])
                        ? (n[r] = t[r])
                        : (n[r] = e._parseDate(t[r])),
                      delete t[r])
                  }
                ),
                t
              )
            },
            _startSave: function () {
              this._opSetQueue.push({})
            },
            _cancelSave: function () {
              var t = u.first(this._opSetQueue)
              this._opSetQueue = u.rest(this._opSetQueue)
              var n = u.first(this._opSetQueue)
              e._objectEach(t, function (e, r) {
                var i = t[r],
                  o = n[r]
                i && o ? (n[r] = o._mergeWithPrevious(i)) : i && (n[r] = i)
              }),
                (this._saving = this._saving - 1)
            },
            _finishSave: function (t) {
              var n = {}
              e._traverse(this.attributes, function (t) {
                t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
              })
              var r = u.first(this._opSetQueue)
              ;(this._opSetQueue = u.rest(this._opSetQueue)),
                this._applyOpSet(r, this._serverData),
                this._mergeMagicFields(t)
              var i = this
              e._objectEach(t, function (t, r) {
                i._serverData[r] = e._decode(t, r)
                var o = e._traverse(i._serverData[r], function (t) {
                  if (t instanceof e.Object && n[t.id]) return n[t.id]
                })
                o && (i._serverData[r] = o)
              }),
                this._rebuildAllEstimatedData()
              var o = this._opSetQueue.map(u.clone)
              this._refreshCache(),
                (this._opSetQueue = o),
                (this._saving = this._saving - 1)
            },
            _finishFetch: function (t, n) {
              ;(this._opSetQueue = [{}]), this._mergeMagicFields(t)
              var r = this
              e._objectEach(t, function (t, n) {
                r._serverData[n] = e._decode(t, n)
              }),
                this._rebuildAllEstimatedData(),
                this._refreshCache(),
                (this._opSetQueue = [{}]),
                (this._hasData = n)
            },
            _applyOpSet: function (t, n) {
              var r = this
              e._objectEach(t, function (t, i) {
                var o = m(n, i),
                  s = (0, a.default)(o, 3),
                  u = s[0],
                  c = s[1],
                  l = s[2]
                g(n, i, t._estimate(u, r, i)),
                  c && c[l] === e.Op._UNSET && delete c[l]
              })
            },
            _resetCacheForKey: function (t) {
              var n = this.attributes[t]
              if (
                u.isObject(n) &&
                !(n instanceof e.Object) &&
                !(n instanceof e.File)
              ) {
                var r = (0, o.default)(
                  (function e(t) {
                    return u.isArray(t)
                      ? t.map(e)
                      : _(t)
                      ? u.mapObject(t, e)
                      : u.isObject(t) && t._toPointer
                      ? t._toPointer()
                      : t
                  })(n)
                )
                if (this._hashedJSON[t] !== r) {
                  var i = !!this._hashedJSON[t]
                  return (this._hashedJSON[t] = r), i
                }
              }
              return !1
            },
            _rebuildEstimatedDataForKey: function (t) {
              var n = this
              delete this.attributes[t],
                this._serverData[t] &&
                  (this.attributes[t] = this._serverData[t]),
                e._arrayEach(this._opSetQueue, function (r) {
                  var i = r[t]
                  if (i) {
                    var o = m(n.attributes, t),
                      s = (0, a.default)(o, 4),
                      u = s[0],
                      c = s[1],
                      l = s[2],
                      d = s[3]
                    g(n.attributes, t, i._estimate(u, n, t)),
                      c && c[l] === e.Op._UNSET && delete c[l],
                      n._resetCacheForKey(d)
                  }
                })
            },
            _rebuildAllEstimatedData: function () {
              var t = this,
                n = u.clone(this.attributes)
              ;(this.attributes = u.clone(this._serverData)),
                e._arrayEach(this._opSetQueue, function (n) {
                  t._applyOpSet(n, t.attributes),
                    e._objectEach(n, function (e, n) {
                      t._resetCacheForKey(n)
                    })
                }),
                e._objectEach(n, function (e, n) {
                  t.attributes[n] !== e &&
                    t.trigger('change:' + n, t, t.attributes[n], {})
                }),
                e._objectEach(this.attributes, function (e, r) {
                  u.has(n, r) || t.trigger('change:' + r, t, e, {})
                })
            },
            set: function (t, n, r) {
              var i
              if (
                (u.isObject(t) || h(t)
                  ? ((i = u.mapObject(t, function (t, n) {
                      return y(n), e._decode(t, n)
                    })),
                    (r = n))
                  : ((i = {}), y(t), (i[t] = e._decode(n, t))),
                (r = r || {}),
                !i)
              )
                return this
              i instanceof e.Object && (i = i.attributes),
                r.unset &&
                  e._objectEach(i, function (t, n) {
                    i[n] = new e.Op.Unset()
                  })
              var o = u.clone(i),
                a = this
              e._objectEach(o, function (t, n) {
                t instanceof e.Op &&
                  ((o[n] = t._estimate(a.attributes[n], a, n)),
                  o[n] === e.Op._UNSET && delete o[n])
              }),
                this._validate(i, r),
                (r.changes = {})
              var s = this._escapedAttributes
              return (
                e._arrayEach(u.keys(i), function (t) {
                  var n = i[t]
                  n instanceof e.Relation && (n.parent = a),
                    n instanceof e.Op || (n = new e.Op.Set(n))
                  var o = !0
                  n instanceof e.Op.Set &&
                    u.isEqual(a.attributes[t], n.value) &&
                    (o = !1),
                    o &&
                      (delete s[t],
                      r.silent ? (a._silent[t] = !0) : (r.changes[t] = !0))
                  var c = u.last(a._opSetQueue)
                  ;(c[t] = n._mergeWithPrevious(c[t])),
                    a._rebuildEstimatedDataForKey(t),
                    o
                      ? ((a.changed[t] = a.attributes[t]),
                        r.silent || (a._pending[t] = !0))
                      : (delete a.changed[t], delete a._pending[t])
                }),
                r.silent || this.change(r),
                this
              )
            },
            unset: function (e, t) {
              return ((t = t || {}).unset = !0), this.set(e, null, t)
            },
            increment: function (t, n) {
              return (
                (u.isUndefined(n) || u.isNull(n)) && (n = 1),
                this.set(t, new e.Op.Increment(n))
              )
            },
            add: function (t, n) {
              return this.set(t, new e.Op.Add(p(n)))
            },
            addUnique: function (t, n) {
              return this.set(t, new e.Op.AddUnique(p(n)))
            },
            remove: function (t, n) {
              return this.set(t, new e.Op.Remove(p(n)))
            },
            bitAnd: function (t, n) {
              return this.set(t, new e.Op.BitAnd(n))
            },
            bitOr: function (t, n) {
              return this.set(t, new e.Op.BitOr(n))
            },
            bitXor: function (t, n) {
              return this.set(t, new e.Op.BitXor(n))
            },
            op: function (e) {
              return u.last(this._opSetQueue)[e]
            },
            clear: function (e) {
              ;(e = e || {}).unset = !0
              var t = u.extend(this.attributes, this._operations)
              return this.set(t, e)
            },
            revert: function (e) {
              var t = u.last(this._opSetQueue)
              return (
                p(e || u.keys(t)).forEach(function (e) {
                  delete t[e]
                }),
                this._rebuildAllEstimatedData(),
                this
              )
            },
            _getSaveJSON: function () {
              var t = u.clone(u.first(this._opSetQueue))
              return (
                e._objectEach(t, function (e, n) {
                  t[n] = e.toJSON()
                }),
                t
              )
            },
            _canBeSerialized: function () {
              return e.Object._canBeSerializedAsValue(this.attributes)
            },
            fetch: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = arguments[1],
                n = this
              return l('classes', this.className, this.id, 'GET', f(e), t).then(
                function (t) {
                  var r = n.parse(t)
                  return (
                    n._cleanupUnsetKeys(
                      r,
                      e.keys ? p(e.keys).join(',').split(',') : void 0
                    ),
                    n._finishFetch(r, !0),
                    n
                  )
                }
              )
            },
            _cleanupUnsetKeys: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : u.keys(this._serverData)
              u.forEach(n, function (n) {
                void 0 === e[n] && delete t._serverData[n]
              })
            },
            save: function (t, n, r) {
              var i, o, a
              u.isObject(t) || h(t)
                ? ((i = t), (a = n))
                : (((i = {})[t] = n), (a = r)),
                (a = u.clone(a) || {}).wait && (o = u.clone(this.attributes))
              var c = u.clone(a) || {}
              c.wait && (c.silent = !0), i && this.set(i, c)
              var d = this,
                p = [],
                f = []
              return (
                e.Object._findUnsavedChildren(d, p, f),
                p.length + f.length > 1
                  ? e.Object._deepSaveAsync(this, d, a)
                  : (this._startSave(),
                    (this._saving = (this._saving || 0) + 1),
                    (this._allPreviousSaves =
                      this._allPreviousSaves || s.default.resolve()),
                    (this._allPreviousSaves = this._allPreviousSaves
                      .catch(function (e) {})
                      .then(function () {
                        var e,
                          t = d.id ? 'PUT' : 'POST',
                          n = d._getSaveJSON(),
                          r = {}
                        if (
                          ((d._fetchWhenSave || a.fetchWhenSave) &&
                            (r.new = 'true'),
                          a._failOnNotExist && (r.failOnNotExist = 'true'),
                          a.query) &&
                          ('function' == typeof a.query._getParams &&
                            (e = a.query._getParams()) &&
                            (r.where = e.where),
                          !r.where)
                        )
                          throw new Error('options.query is not an AV.Query')
                        u.extend(n, d._flags)
                        var s = 'classes',
                          h = d.className
                        '_User' !== d.className ||
                          d.id ||
                          ((s = 'users'), (h = null))
                        var p = (a._makeRequest || l)(s, h, d.id, t, n, a, r)
                        return p.then(
                          function (e) {
                            var t = d.parse(e)
                            return (
                              a.wait && (t = u.extend(i || {}, t)),
                              d._finishSave(t),
                              a.wait && d.set(o, c),
                              d
                            )
                          },
                          function (e) {
                            throw (d._cancelSave(), e)
                          }
                        )
                      })),
                    this._allPreviousSaves)
              )
            },
            destroy: function (e) {
              e = e || {}
              var t = this,
                n = function () {
                  t.trigger('destroy', t, t.collection, e)
                }
              return this.id
                ? (e.wait || n(),
                  l(
                    'classes',
                    this.className,
                    this.id,
                    'DELETE',
                    this._flags,
                    e
                  ).then(function () {
                    return e.wait && n(), t
                  }))
                : n()
            },
            parse: function (t) {
              var n = u.clone(t)
              return (
                u(['createdAt', 'updatedAt']).each(function (t) {
                  n[t] && (n[t] = e._parseDate(n[t]))
                }),
                n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt),
                n
              )
            },
            clone: function () {
              return new this.constructor(this.attributes)
            },
            isNew: function () {
              return !this.id
            },
            change: function (t) {
              t = t || {}
              var n = this._changing
              this._changing = !0
              var r = this
              e._objectEach(this._silent, function (e) {
                r._pending[e] = !0
              })
              var i = u.extend({}, t.changes, this._silent)
              if (
                ((this._silent = {}),
                e._objectEach(i, function (e, n) {
                  r.trigger('change:' + n, r, r.get(n), t)
                }),
                n)
              )
                return this
              for (
                var o = function (e, t) {
                  r._pending[t] || r._silent[t] || delete r.changed[t]
                };
                !u.isEmpty(this._pending);

              )
                (this._pending = {}),
                  this.trigger('change', this, t),
                  e._objectEach(this.changed, o),
                  (r._previousAttributes = u.clone(this.attributes))
              return (this._changing = !1), this
            },
            previous: function (e) {
              return arguments.length && this._previousAttributes
                ? this._previousAttributes[e]
                : null
            },
            previousAttributes: function () {
              return u.clone(this._previousAttributes)
            },
            isValid: function () {
              try {
                this.validate(this.attributes)
              } catch (e) {
                return !1
              }
              return !0
            },
            validate: function (t) {
              if (u.has(t, 'ACL') && !(t.ACL instanceof e.ACL))
                throw new c(c.OTHER_CAUSE, 'ACL must be a AV.ACL.')
            },
            _validate: function (e, t) {
              !t.silent &&
                this.validate &&
                ((e = u.extend({}, this.attributes, e)), this.validate(e))
            },
            getACL: function () {
              return this.get('ACL')
            },
            setACL: function (e, t) {
              return this.set('ACL', e, t)
            },
            disableBeforeHook: function () {
              this.ignoreHook('beforeSave'),
                this.ignoreHook('beforeUpdate'),
                this.ignoreHook('beforeDelete')
            },
            disableAfterHook: function () {
              this.ignoreHook('afterSave'),
                this.ignoreHook('afterUpdate'),
                this.ignoreHook('afterDelete')
            },
            ignoreHook: function (t) {
              if (
                !u.contains(
                  [
                    'beforeSave',
                    'afterSave',
                    'beforeUpdate',
                    'afterUpdate',
                    'beforeDelete',
                    'afterDelete',
                  ],
                  t
                )
              )
                throw new Error('Unsupported hookName: ' + t)
              if (!e.hookKey) throw new Error('ignoreHook required hookKey')
              this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []),
                this._flags.__ignore_hooks.push(t)
            },
          }),
          (e.Object.createWithoutData = function (t, n, r) {
            var i = void 0
            if (u.isString(t)) i = e.Object._getSubclass(t)
            else {
              if (!(t.prototype && t.prototype instanceof e.Object))
                throw new Error(
                  'class must be a string or a subclass of AV.Object.'
                )
              i = t
            }
            var o = new i()
            return (o.id = n), (o._hasData = r), o
          }),
          (e.Object.destroyAll = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            if (!e || 0 === e.length) return s.default.resolve()
            var n = u.groupBy(e, function (e) {
                return (0,
                o.default)({ className: e.className, flags: e._flags })
              }),
              r = {
                requests: u.map(n, function (e) {
                  var t = u.map(e, 'id').join(',')
                  return {
                    method: 'DELETE',
                    path: '/1.1/classes/' + e[0].className + '/' + t,
                    body: e[0]._flags,
                  }
                }),
              }
            return l('batch', null, null, 'POST', r, t).then(function (e) {
              var t = u.find(e, function (e) {
                return !e.success
              })
              if (t) throw new c(t.error.code, t.error.error)
            })
          }),
          (e.Object._getSubclass = function (t) {
            if (!u.isString(t))
              throw new Error(
                'AV.Object._getSubclass requires a string argument.'
              )
            var n = e.Object._classMap[t]
            return (
              n || ((n = e.Object.extend(t)), (e.Object._classMap[t] = n)), n
            )
          }),
          (e.Object._create = function (t, n, r) {
            return new (e.Object._getSubclass(t))(n, r)
          }),
          (e.Object._classMap = {}),
          (e.Object._extend = e._extend),
          (e.Object.new = function (t, n) {
            return new e.Object(t, n)
          }),
          (e.Object.extend = function (t, n, r) {
            if (!u.isString(t)) {
              if (t && u.has(t, 'className'))
                return e.Object.extend(t.className, t, n)
              throw new Error(
                "AV.Object.extend's first argument should be the className."
              )
            }
            'User' === t && (t = '_User')
            var o = null
            if (u.has(e.Object._classMap, t)) {
              var a = e.Object._classMap[t]
              if (!n && !r) return a
              o = a._extend(n, r)
            } else ((n = n || {})._className = t), (o = this._extend(n, r))
            return (
              (o.extend = function (n) {
                if (u.isString(n) || (n && u.has(n, 'className')))
                  return e.Object.extend.apply(o, arguments)
                var r = [t].concat(u.toArray(arguments))
                return e.Object.extend.apply(o, r)
              }),
              Object.defineProperty(
                o,
                'query',
                (0, i.default)(e.Object, 'query')
              ),
              (o.new = function (e, t) {
                return new o(e, t)
              }),
              (e.Object._classMap[t] = o),
              o
            )
          }),
          Object.defineProperty(e.Object.prototype, 'className', {
            get: function () {
              var e =
                this._className ||
                this.constructor._LCClassName ||
                this.constructor.name
              return 'User' === e ? '_User' : e
            },
          }),
          (e.Object.register = function (t, n) {
            if (!(t.prototype instanceof e.Object))
              throw new Error('registered class is not a subclass of AV.Object')
            var r = n || t.name
            if (!r.length) throw new Error('registered class must be named')
            n && (t._LCClassName = n), (e.Object._classMap[r] = t)
          }),
          Object.defineProperty(e.Object, 'query', {
            get: function () {
              return new e.Query(this.prototype.className)
            },
          }),
          (e.Object._findUnsavedChildren = function (t, n, r) {
            e._traverse(t, function (t) {
              return t instanceof e.Object
                ? void (t.dirty() && n.push(t))
                : t instanceof e.File
                ? void (t.id || r.push(t))
                : void 0
            })
          }),
          (e.Object._canBeSerializedAsValue = function (t) {
            var n = !0
            return (
              t instanceof e.Object || t instanceof e.File
                ? (n = !!t.id)
                : u.isArray(t)
                ? e._arrayEach(t, function (t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1)
                  })
                : u.isObject(t) &&
                  e._objectEach(t, function (t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1)
                  }),
              n
            )
          }),
          (e.Object._deepSaveAsync = function (t, n, r) {
            var i = [],
              o = []
            e.Object._findUnsavedChildren(t, i, o)
            var a = s.default.resolve()
            u.each(o, function (e) {
              a = a.then(function () {
                return e.save()
              })
            })
            var d = u.uniq(i),
              h = u.uniq(d)
            return a
              .then(function () {
                return v(
                  function () {
                    return h.length > 0
                  },
                  function () {
                    var t = [],
                      n = []
                    if (
                      (e._arrayEach(h, function (e) {
                        t.length > 20
                          ? n.push(e)
                          : e._canBeSerialized()
                          ? t.push(e)
                          : n.push(e)
                      }),
                      (h = n),
                      0 === t.length)
                    )
                      return s.default.reject(
                        new c(
                          c.OTHER_CAUSE,
                          'Tried to save a batch with a cycle.'
                        )
                      )
                    var i = s.default
                      .resolve(
                        u.map(t, function (e) {
                          return e._allPreviousSaves || s.default.resolve()
                        })
                      )
                      .then(function () {
                        return l(
                          'batch',
                          null,
                          null,
                          'POST',
                          {
                            requests: u.map(t, function (e) {
                              var t = e.id ? 'PUT' : 'POST',
                                n = e._getSaveJSON()
                              u.extend(n, e._flags)
                              var r = '/classes/' + e.className
                              '_User' !== e.className || e.id || (r = '/users')
                              r = '/1.1' + r
                              return (
                                e.id && (r = r + '/' + e.id),
                                e._startSave(),
                                { method: t, path: r, body: n }
                              )
                            }),
                          },
                          r
                        ).then(function (e) {
                          var n = u.map(t, function (t, n) {
                            return e[n].success
                              ? (t._finishSave(t.parse(e[n].success)), t)
                              : (t._cancelSave(),
                                new c(e[n].error.code, e[n].error.error))
                          })
                          return w(n)
                        })
                      })
                    return (
                      e._arrayEach(t, function (e) {
                        e._allPreviousSaves = i
                      }),
                      i
                    )
                  }
                )
              })
              .then(function () {
                return t
              })
          })
      }
    },
    function (e, t, n) {
      e.exports = { default: n(144), __esModule: !0 }
    },
    function (e, t, n) {
      n(145)
      var r = n(1).Object
      e.exports = function (e, t) {
        return r.getOwnPropertyDescriptor(e, t)
      }
    },
    function (e, t, n) {
      var r = n(15),
        i = n(77).f
      n(47)('getOwnPropertyDescriptor', function () {
        return function (e, t) {
          return i(r(e), t)
        }
      })
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = r(n(79)),
        o = r(n(149))
      t.default = (function () {
        return function (e, t) {
          if (Array.isArray(e)) return e
          if ((0, i.default)(Object(e)))
            return (function (e, t) {
              var n = [],
                r = !0,
                i = !1,
                a = void 0
              try {
                for (
                  var s, u = (0, o.default)(e);
                  !(r = (s = u.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                ;(i = !0), (a = e)
              } finally {
                try {
                  !r && u.return && u.return()
                } finally {
                  if (i) throw a
                }
              }
              return n
            })(e, t)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }
      })()
    },
    function (e, t, n) {
      n(33), n(21), (e.exports = n(148))
    },
    function (e, t, n) {
      var r = n(44),
        i = n(4)('iterator'),
        o = n(17)
      e.exports = n(1).isIterable = function (e) {
        var t = Object(e)
        return void 0 !== t[i] || '@@iterator' in t || o.hasOwnProperty(r(t))
      }
    },
    function (e, t, n) {
      e.exports = { default: n(150), __esModule: !0 }
    },
    function (e, t, n) {
      n(33), n(21), (e.exports = n(151))
    },
    function (e, t, n) {
      var r = n(8),
        i = n(45)
      e.exports = n(1).getIterator = function (e) {
        var t = i(e)
        if ('function' != typeof t) throw TypeError(e + ' is not iterable!')
        return r(t.call(e))
      }
    },
    function (e, t, n) {
      var r = n(0),
        i = n(16)
      e.exports = function (e) {
        e.Role = e.Object.extend('_Role', {
          constructor: function (t, n) {
            if (
              (r.isString(t)
                ? (e.Object.prototype.constructor.call(this, null, null),
                  this.setName(t))
                : e.Object.prototype.constructor.call(this, t, n),
              n)
            ) {
              if (!(n instanceof e.ACL))
                throw new TypeError('acl must be an instance of AV.ACL')
              this.setACL(n)
            }
          },
          getName: function () {
            return this.get('name')
          },
          setName: function (e, t) {
            return this.set('name', e, t)
          },
          getUsers: function () {
            return this.relation('users')
          },
          getRoles: function () {
            return this.relation('roles')
          },
          validate: function (t, n) {
            if ('name' in t && t.name !== this.getName()) {
              var o = t.name
              if (this.id && this.id !== t.objectId)
                return new i(
                  i.OTHER_CAUSE,
                  "A role's name can only be set before it has been saved."
                )
              if (!r.isString(o))
                return new i(i.OTHER_CAUSE, "A role's name must be a String.")
              if (!/^[0-9a-zA-Z\-_ ]+$/.test(o))
                return new i(
                  i.OTHER_CAUSE,
                  "A role's name can only contain alphanumeric characters, _, -, and spaces."
                )
            }
            return (
              !!e.Object.prototype.validate &&
              e.Object.prototype.validate.call(this, t, n)
            )
          },
        })
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(9)),
        o = r(n(154)),
        a = r(n(2)),
        s = n(0),
        u = n(69),
        c = n(16),
        l = n(5),
        d = l._request,
        h = l.request,
        p = n(20).getAdapter,
        f = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'weixin'
          return function (t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = r.unionIdPlatform,
              o = void 0 === i ? e : i,
              a = r.asMainAccount,
              u = void 0 !== a && a
            if ('string' != typeof n)
              throw new c(c.OTHER_CAUSE, 'unionId is not a string')
            if ('string' != typeof o)
              throw new c(c.OTHER_CAUSE, 'unionIdPlatform is not a string')
            return s.extend({}, t, {
              platform: o,
              unionid: n,
              main_account: Boolean(u),
            })
          }
        }
      e.exports = function (e) {
        e.User = e.Object.extend(
          '_User',
          {
            _isCurrentUser: !1,
            _mergeMagicFields: function (t) {
              return (
                t.sessionToken &&
                  ((this._sessionToken = t.sessionToken),
                  delete t.sessionToken),
                e.User.__super__._mergeMagicFields.call(this, t)
              )
            },
            _cleanupAuthData: function () {
              if (this.isCurrent()) {
                var t = this.get('authData')
                t &&
                  e._objectEach(this.get('authData'), function (e, n) {
                    t[n] || delete t[n]
                  })
              }
            },
            _synchronizeAllAuthData: function () {
              if (this.get('authData')) {
                var t = this
                e._objectEach(this.get('authData'), function (e, n) {
                  t._synchronizeAuthData(n)
                })
              }
            },
            _synchronizeAuthData: function (t) {
              if (this.isCurrent()) {
                var n
                s.isString(t)
                  ? ((n = t), (t = e.User._authProviders[n]))
                  : (n = t.getAuthType())
                var r = this.get('authData')
                r &&
                  t &&
                  (t.restoreAuthentication(r[n]) || this.dissociateAuthData(t))
              }
            },
            _handleSaveResult: function (t) {
              return (
                t &&
                  !e._config.disableCurrentUser &&
                  (this._isCurrentUser = !0),
                this._cleanupAuthData(),
                this._synchronizeAllAuthData(),
                delete this._serverData.password,
                this._rebuildEstimatedDataForKey('password'),
                this._refreshCache(),
                (!t && !this.isCurrent()) || e._config.disableCurrentUser
                  ? a.default.resolve()
                  : a.default.resolve(e.User._saveCurrentUser(this))
              )
            },
            _linkWith: function (t, n) {
              var r,
                i = this,
                a = (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ).failOnNotExist,
                u = void 0 !== a && a
              return (
                s.isString(t)
                  ? ((r = t), (t = e.User._authProviders[t]))
                  : (r = t.getAuthType()),
                n
                  ? this.save(
                      { authData: (0, o.default)({}, r, n) },
                      {
                        fetchWhenSave: !!this.get('authData'),
                        _failOnNotExist: u,
                      }
                    ).then(function (e) {
                      return e._handleSaveResult(!0).then(function () {
                        return e
                      })
                    })
                  : t.authenticate().then(function (e) {
                      return i._linkWith(t, e)
                    })
              )
            },
            associateWithAuthData: function (e, t) {
              return this._linkWith(t, e)
            },
            associateWithAuthDataAndUnionId: function (e, t, n, r) {
              return this._linkWith(t, f()(e, n, r))
            },
            associateWithMiniApp: function (e, t) {
              var n = this
              return void 0 === e
                ? p('getAuthInfo')().then(function (e) {
                    return n._linkWith(e.provider, e.authData, t)
                  })
                : this._linkWith(e.provider, e.authData, t)
            },
            associateWithQQApp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = t.asMainAccount,
                s = void 0 === a || a
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return (t.provider = 'lc_qqapp'), e.associateWithMiniApp(t)
              })
            },
            associateWithWeapp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = t.asMainAccount,
                s = void 0 === a || a
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return e.associateWithMiniApp(t)
              })
            },
            linkWithWeapp: function (e) {
              return (
                console.warn(
                  'DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替'
                ),
                this.associateWithWeapp(e)
              )
            },
            associateWithQQAppWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  ((r = e.User.mergeUnionId(r, t, {
                    asMainAccount: s,
                  })).provider = 'lc_qqapp'),
                  n.associateWithMiniApp(r)
                )
              })
            },
            associateWithWeappWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  (r = e.User.mergeUnionId(r, t, { asMainAccount: s })),
                  n.associateWithMiniApp(r)
                )
              })
            },
            dissociateAuthData: function (e) {
              return (
                this.unset('authData.' + e),
                this.save().then(function (e) {
                  return e._handleSaveResult(!0).then(function () {
                    return e
                  })
                })
              )
            },
            _unlinkFrom: function (e) {
              return (
                console.warn(
                  'DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替'
                ),
                this.dissociateAuthData(e)
              )
            },
            _isLinked: function (e) {
              var t
              return (
                (t = s.isString(e) ? e : e.getAuthType()),
                !!(this.get('authData') || {})[t]
              )
            },
            isAnonymous: function () {
              return this._isLinked('anonymous')
            },
            logOut: function () {
              this._logOutWithAll(), (this._isCurrentUser = !1)
            },
            _logOutWithAll: function () {
              if (this.get('authData')) {
                var t = this
                e._objectEach(this.get('authData'), function (e, n) {
                  t._logOutWith(n)
                })
              }
            },
            _logOutWith: function (t) {
              this.isCurrent() &&
                (s.isString(t) && (t = e.User._authProviders[t]),
                t && t.deauthenticate && t.deauthenticate())
            },
            signUp: function (e, t) {
              var n = (e && e.username) || this.get('username')
              if (!n || '' === n)
                throw new c(
                  c.OTHER_CAUSE,
                  'Cannot sign up user with an empty name.'
                )
              var r = (e && e.password) || this.get('password')
              if (!r || '' === r)
                throw new c(
                  c.OTHER_CAUSE,
                  'Cannot sign up user with an empty password.'
                )
              return this.save(e, t).then(function (e) {
                return (
                  e.isAnonymous() &&
                    (e.unset('authData.anonymous'), (e._opSetQueue = [{}])),
                  e._handleSaveResult(!0).then(function () {
                    return e
                  })
                )
              })
            },
            signUpOrlogInWithMobilePhone: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = (e && e.mobilePhoneNumber) || this.get('mobilePhoneNumber')
              if (!n || '' === n)
                throw new c(
                  c.OTHER_CAUSE,
                  'Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.'
                )
              var r = (e && e.smsCode) || this.get('smsCode')
              if (!r || '' === r)
                throw new c(
                  c.OTHER_CAUSE,
                  'Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.'
                )
              return (
                (t._makeRequest = function (e, t, n, r, i) {
                  return d('usersByMobilePhone', null, null, 'POST', i)
                }),
                this.save(e, t).then(function (e) {
                  return (
                    delete e.attributes.smsCode,
                    delete e._serverData.smsCode,
                    e._handleSaveResult(!0).then(function () {
                      return e
                    })
                  )
                })
              )
            },
            loginWithAuthData: function (e, t, n) {
              return this._linkWith(t, e, n)
            },
            loginWithAuthDataAndUnionId: function (e, t, n, r) {
              return this.loginWithAuthData(f()(e, n, r), t, r)
            },
            loginWithWeapp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = t.asMainAccount,
                s = void 0 === a || a,
                u = t.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return e.loginWithMiniApp(t, { failOnNotExist: c })
              })
            },
            loginWithWeappWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a,
                u = r.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  (r = e.User.mergeUnionId(r, t, { asMainAccount: s })),
                  n.loginWithMiniApp(r, { failOnNotExist: c })
                )
              })
            },
            loginWithQQApp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = t.asMainAccount,
                s = void 0 === a || a,
                u = t.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return (
                  (t.provider = 'lc_qqapp'),
                  e.loginWithMiniApp(t, { failOnNotExist: c })
                )
              })
            },
            loginWithQQAppWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a,
                u = r.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  ((r = e.User.mergeUnionId(r, t, {
                    asMainAccount: s,
                  })).provider = 'lc_qqapp'),
                  n.loginWithMiniApp(r, { failOnNotExist: c })
                )
              })
            },
            loginWithMiniApp: function (e, t) {
              var n = this
              return void 0 === e
                ? p('getAuthInfo')().then(function (e) {
                    return n.loginWithAuthData(e.authData, e.provider, t)
                  })
                : this.loginWithAuthData(e.authData, e.provider, t)
            },
            logIn: function () {
              var e = this
              return d('login', null, null, 'POST', this.toJSON()).then(
                function (t) {
                  var n = e.parse(t)
                  return (
                    e._finishFetch(n),
                    e._handleSaveResult(!0).then(function () {
                      return n.smsCode || delete e.attributes.smsCode, e
                    })
                  )
                }
              )
            },
            save: function (t, n, r) {
              var i, o
              return (
                s.isObject(t) || s.isNull(t) || s.isUndefined(t)
                  ? ((i = t), (o = n))
                  : (((i = {})[t] = n), (o = r)),
                (o = o || {}),
                e.Object.prototype.save.call(this, i, o).then(function (e) {
                  return e._handleSaveResult(!1).then(function () {
                    return e
                  })
                })
              )
            },
            follow: function (t, n) {
              if (!this.id) throw new Error('Please signin.')
              var r = void 0,
                i = void 0
              t.user ? ((r = t.user), (i = t.attributes)) : (r = t)
              var o = s.isString(r) ? r : r.id
              if (!o) throw new Error('Invalid target user.')
              var a = 'users/' + this.id + '/friendship/' + o
              return d(a, null, null, 'POST', e._encode(i), n)
            },
            unfollow: function (e, t) {
              if (!this.id) throw new Error('Please signin.')
              var n
              n = e.user ? e.user : e
              var r = s.isString(n) ? n : n.id
              if (!r) throw new Error('Invalid target user.')
              var i = 'users/' + this.id + '/friendship/' + r
              return d(i, null, null, 'DELETE', null, t)
            },
            followerQuery: function () {
              return e.User.followerQuery(this.id)
            },
            followeeQuery: function () {
              return e.User.followeeQuery(this.id)
            },
            fetch: function (t, n) {
              return e.Object.prototype.fetch
                .call(this, t, n)
                .then(function (e) {
                  return e._handleSaveResult(!1).then(function () {
                    return e
                  })
                })
            },
            updatePassword: function (e, t, n) {
              var r = this,
                i = 'users/' + this.id + '/updatePassword'
              return d(
                i,
                null,
                null,
                'PUT',
                { old_password: e, new_password: t },
                n
              ).then(function (e) {
                return (
                  r._finishFetch(r.parse(e)),
                  r._handleSaveResult(!0).then(function () {
                    return e
                  })
                )
              })
            },
            isCurrent: function () {
              return this._isCurrentUser
            },
            getUsername: function () {
              return this.get('username')
            },
            getMobilePhoneNumber: function () {
              return this.get('mobilePhoneNumber')
            },
            setMobilePhoneNumber: function (e, t) {
              return this.set('mobilePhoneNumber', e, t)
            },
            setUsername: function (e, t) {
              return this.set('username', e, t)
            },
            setPassword: function (e, t) {
              return this.set('password', e, t)
            },
            getEmail: function () {
              return this.get('email')
            },
            setEmail: function (e, t) {
              return this.set('email', e, t)
            },
            authenticated: function () {
              return (
                console.warn(
                  'DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。'
                ),
                !!this._sessionToken &&
                  !e._config.disableCurrentUser &&
                  e.User.current() &&
                  e.User.current().id === this.id
              )
            },
            isAuthenticated: function () {
              var t = this
              return a.default.resolve().then(function () {
                return (
                  !!t._sessionToken &&
                  e.User._fetchUserBySessionToken(t._sessionToken).then(
                    function () {
                      return !0
                    },
                    function (e) {
                      if (211 === e.code) return !1
                      throw e
                    }
                  )
                )
              })
            },
            getSessionToken: function () {
              return this._sessionToken
            },
            refreshSessionToken: function (e) {
              var t = this
              return d(
                'users/' + this.id + '/refreshSessionToken',
                null,
                null,
                'PUT',
                null,
                e
              ).then(function (e) {
                return (
                  t._finishFetch(e),
                  t._handleSaveResult(!0).then(function () {
                    return t
                  })
                )
              })
            },
            getRoles: function (t) {
              return e.Relation.reverseQuery('_Role', 'users', this).find(t)
            },
          },
          {
            _currentUser: null,
            _currentUserMatchesDisk: !1,
            _CURRENT_USER_KEY: 'currentUser',
            _authProviders: {},
            signUp: function (t, n, r, i) {
              return (
                ((r = r || {}).username = t),
                (r.password = n),
                e.Object._create('_User').signUp(r, i)
              )
            },
            logIn: function (t, n) {
              var r = e.Object._create('_User')
              return r._finishFetch({ username: t, password: n }), r.logIn()
            },
            become: function (e) {
              return this._fetchUserBySessionToken(e).then(function (e) {
                return e._handleSaveResult(!0).then(function () {
                  return e
                })
              })
            },
            _fetchUserBySessionToken: function (t) {
              if (void 0 === t)
                return a.default.reject(
                  new Error('The sessionToken cannot be undefined')
                )
              var n = e.Object._create('_User')
              return h({
                method: 'GET',
                path: '/users/me',
                authOptions: { sessionToken: t },
              }).then(function (e) {
                var t = n.parse(e)
                return n._finishFetch(t), n
              })
            },
            logInWithMobilePhoneSmsCode: function (t, n) {
              var r = e.Object._create('_User')
              return (
                r._finishFetch({ mobilePhoneNumber: t, smsCode: n }), r.logIn()
              )
            },
            signUpOrlogInWithMobilePhone: function (t, n, r, i) {
              return (
                ((r = r || {}).mobilePhoneNumber = t),
                (r.smsCode = n),
                e.Object._create('_User').signUpOrlogInWithMobilePhone(r, i)
              )
            },
            logInWithMobilePhone: function (t, n) {
              var r = e.Object._create('_User')
              return (
                r._finishFetch({ mobilePhoneNumber: t, password: n }), r.logIn()
              )
            },
            loginWithEmail: function (t, n) {
              var r = e.Object._create('_User')
              return r._finishFetch({ email: t, password: n }), r.logIn()
            },
            loginWithAuthData: function (t, n, r) {
              return e.User._logInWith(n, t, r)
            },
            signUpOrlogInWithAuthData: function () {
              return (
                console.warn(
                  'DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替'
                ),
                this.loginWithAuthData.apply(this, arguments)
              )
            },
            loginWithAuthDataAndUnionId: function (e, t, n, r) {
              return this.loginWithAuthData(f()(e, n, r), t, r)
            },
            signUpOrlogInWithAuthDataAndUnionId: function () {
              return (
                console.warn(
                  'DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替'
                ),
                this.loginWithAuthDataAndUnionId.apply(this, arguments)
              )
            },
            mergeUnionId: function (e, t) {
              var n = (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ).asMainAccount,
                r = void 0 !== n && n,
                o = (e = JSON.parse((0, i.default)(e))),
                a = o.authData,
                s = o.platform
              return (a.platform = s), (a.main_account = r), (a.unionid = t), e
            },
            loginWithWeapp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = t.asMainAccount,
                s = void 0 === a || a,
                u = t.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return e.loginWithMiniApp(t, { failOnNotExist: c })
              })
            },
            loginWithWeappWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'weixin' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a,
                u = r.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  (r = e.User.mergeUnionId(r, t, { asMainAccount: s })),
                  n.loginWithMiniApp(r, { failOnNotExist: c })
                )
              })
            },
            loginWithQQApp: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.preferUnionId,
                r = void 0 !== n && n,
                i = t.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = t.asMainAccount,
                s = void 0 === a || a,
                u = t.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({
                preferUnionId: r,
                asMainAccount: s,
                platform: o,
              }).then(function (t) {
                return (
                  (t.provider = 'lc_qqapp'),
                  e.loginWithMiniApp(t, { failOnNotExist: c })
                )
              })
            },
            loginWithQQAppWithUnionId: function (t) {
              var n = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? 'qq' : i,
                a = r.asMainAccount,
                s = void 0 !== a && a,
                u = r.failOnNotExist,
                c = void 0 !== u && u
              return p('getAuthInfo')({ platform: o }).then(function (r) {
                return (
                  ((r = e.User.mergeUnionId(r, t, {
                    asMainAccount: s,
                  })).provider = 'lc_qqapp'),
                  n.loginWithMiniApp(r, { failOnNotExist: c })
                )
              })
            },
            loginWithMiniApp: function (e, t) {
              var n = this
              return void 0 === e
                ? p('getAuthInfo')().then(function (e) {
                    return n.loginWithAuthData(e.authData, e.provider, t)
                  })
                : this.loginWithAuthData(e.authData, e.provider, t)
            },
            _genId: function () {
              return u()
            },
            loginAnonymously: function () {
              return this.loginWithAuthData(
                { id: e.User._genId() },
                'anonymous'
              )
            },
            associateWithAuthData: function (e, t, n) {
              return (
                console.warn(
                  'DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替'
                ),
                e._linkWith(t, n)
              )
            },
            logOut: function () {
              return e._config.disableCurrentUser
                ? (console.warn(
                    'AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html'
                  ),
                  a.default.resolve(null))
                : (null !== e.User._currentUser &&
                    (e.User._currentUser._logOutWithAll(),
                    (e.User._currentUser._isCurrentUser = !1)),
                  (e.User._currentUserMatchesDisk = !0),
                  (e.User._currentUser = null),
                  e.localStorage
                    .removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY))
                    .then(function () {
                      return e._refreshSubscriptionId()
                    }))
            },
            followerQuery: function (t) {
              if (!t || !s.isString(t))
                throw new Error('Invalid user object id.')
              var n = new e.FriendShipQuery('_Follower')
              return (
                (n._friendshipTag = 'follower'),
                n.equalTo('user', e.Object.createWithoutData('_User', t)),
                n
              )
            },
            followeeQuery: function (t) {
              if (!t || !s.isString(t))
                throw new Error('Invalid user object id.')
              var n = new e.FriendShipQuery('_Followee')
              return (
                (n._friendshipTag = 'followee'),
                n.equalTo('user', e.Object.createWithoutData('_User', t)),
                n
              )
            },
            requestPasswordReset: function (e) {
              return d('requestPasswordReset', null, null, 'POST', { email: e })
            },
            requestEmailVerify: function (e) {
              return d('requestEmailVerify', null, null, 'POST', { email: e })
            },
            requestMobilePhoneVerify: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = { mobilePhoneNumber: e }
              return (
                t.validateToken && (n.validate_token = t.validateToken),
                d('requestMobilePhoneVerify', null, null, 'POST', n, t)
              )
            },
            requestPasswordResetBySmsCode: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = { mobilePhoneNumber: e }
              return (
                t.validateToken && (n.validate_token = t.validateToken),
                d('requestPasswordResetBySmsCode', null, null, 'POST', n, t)
              )
            },
            resetPasswordBySmsCode: function (e, t) {
              return d('resetPasswordBySmsCode', null, e, 'PUT', {
                password: t,
              })
            },
            verifyMobilePhone: function (e) {
              return d('verifyMobilePhone', null, e, 'POST', null)
            },
            requestLoginSmsCode: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = { mobilePhoneNumber: e }
              return (
                t.validateToken && (n.validate_token = t.validateToken),
                d('requestLoginSmsCode', null, null, 'POST', n, t)
              )
            },
            currentAsync: function () {
              return e._config.disableCurrentUser
                ? (console.warn(
                    'AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html'
                  ),
                  a.default.resolve(null))
                : e.User._currentUser
                ? a.default.resolve(e.User._currentUser)
                : e.User._currentUserMatchesDisk
                ? a.default.resolve(e.User._currentUser)
                : e.localStorage
                    .getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY))
                    .then(function (t) {
                      if (!t) return null
                      ;(e.User._currentUserMatchesDisk = !0),
                        (e.User._currentUser = e.Object._create('_User')),
                        (e.User._currentUser._isCurrentUser = !0)
                      var n = JSON.parse(t)
                      return (
                        (e.User._currentUser.id = n._id),
                        delete n._id,
                        (e.User._currentUser._sessionToken = n._sessionToken),
                        delete n._sessionToken,
                        e.User._currentUser._finishFetch(n),
                        e.User._currentUser._synchronizeAllAuthData(),
                        e.User._currentUser._refreshCache(),
                        (e.User._currentUser._opSetQueue = [{}]),
                        e.User._currentUser
                      )
                    })
            },
            current: function () {
              if (e._config.disableCurrentUser)
                return (
                  console.warn(
                    'AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html'
                  ),
                  null
                )
              if (e.localStorage.async) {
                var t = new Error(
                  'Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.'
                )
                throw ((t.code = 'SYNC_API_NOT_AVAILABLE'), t)
              }
              if (e.User._currentUser) return e.User._currentUser
              if (e.User._currentUserMatchesDisk) return e.User._currentUser
              e.User._currentUserMatchesDisk = !0
              var n = e.localStorage.getItem(
                e._getAVPath(e.User._CURRENT_USER_KEY)
              )
              if (!n) return null
              ;(e.User._currentUser = e.Object._create('_User')),
                (e.User._currentUser._isCurrentUser = !0)
              var r = JSON.parse(n)
              return (
                (e.User._currentUser.id = r._id),
                delete r._id,
                (e.User._currentUser._sessionToken = r._sessionToken),
                delete r._sessionToken,
                e.User._currentUser._finishFetch(r),
                e.User._currentUser._synchronizeAllAuthData(),
                e.User._currentUser._refreshCache(),
                (e.User._currentUser._opSetQueue = [{}]),
                e.User._currentUser
              )
            },
            _saveCurrentUser: function (t) {
              return (
                e.User._currentUser !== t
                  ? e.User.logOut()
                  : a.default.resolve()
              ).then(function () {
                ;(t._isCurrentUser = !0), (e.User._currentUser = t)
                var n = t._toFullJSON()
                return (
                  (n._id = t.id),
                  (n._sessionToken = t._sessionToken),
                  e.localStorage
                    .setItemAsync(
                      e._getAVPath(e.User._CURRENT_USER_KEY),
                      (0, i.default)(n)
                    )
                    .then(function () {
                      return (
                        (e.User._currentUserMatchesDisk = !0),
                        e._refreshSubscriptionId()
                      )
                    })
                )
              })
            },
            _registerAuthenticationProvider: function (t) {
              ;(e.User._authProviders[t.getAuthType()] = t),
                !e._config.disableCurrentUser &&
                  e.User.current() &&
                  e.User.current()._synchronizeAuthData(t.getAuthType())
            },
            _logInWith: function (t, n, r) {
              return e.Object._create('_User')._linkWith(t, n, r)
            },
          }
        )
      }
    },
    function (e, t, n) {
      t.__esModule = !0
      var r = (function (e) {
        return e && e.__esModule ? e : { default: e }
      })(n(74))
      t.default = function (e, t, n) {
        return (
          t in e
            ? (0, r.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(9)),
        o = r(n(2)),
        a = n(0),
        s = n(19)('leancloud:query'),
        u = n(16),
        c = n(5),
        l = c._request,
        d = c.request,
        h = n(6),
        p = h.ensureArray,
        f = h.transformFetchOptions,
        g = h.continueWhile,
        m = function (e, t) {
          if (void 0 === e) throw new Error(t)
        }
      e.exports = function (e) {
        ;(e.Query = function (t) {
          a.isString(t) && (t = e.Object._getSubclass(t)),
            (this.objectClass = t),
            (this.className = t.prototype.className),
            (this._where = {}),
            (this._include = []),
            (this._select = []),
            (this._limit = -1),
            (this._skip = 0),
            (this._defaultParams = {})
        }),
          (e.Query.or = function () {
            var t = a.toArray(arguments),
              n = null
            e._arrayEach(t, function (e) {
              if ((a.isNull(n) && (n = e.className), n !== e.className))
                throw new Error('All queries must be for the same class')
            })
            var r = new e.Query(n)
            return r._orQuery(t), r
          }),
          (e.Query.and = function () {
            var t = a.toArray(arguments),
              n = null
            e._arrayEach(t, function (e) {
              if ((a.isNull(n) && (n = e.className), n !== e.className))
                throw new Error('All queries must be for the same class')
            })
            var r = new e.Query(n)
            return r._andQuery(t), r
          }),
          (e.Query.doCloudQuery = function (t, n, r) {
            var i = { cql: t }
            return (
              a.isArray(n) ? (i.pvalues = n) : (r = n),
              l('cloudQuery', null, null, 'GET', i, r).then(function (t) {
                var n = new e.Query(t.className)
                return {
                  results: a.map(t.results, function (e) {
                    var r = n._newObject(t)
                    return (
                      r._finishFetch && r._finishFetch(n._processResult(e), !0),
                      r
                    )
                  }),
                  count: t.count,
                  className: t.className,
                }
              })
            )
          }),
          (e.Query.fromJSON = function (t) {
            var n = t.className,
              r = t.where,
              i = t.include,
              o = t.select,
              s = t.includeACL,
              u = t.limit,
              c = t.skip,
              l = t.order
            if ('string' != typeof n)
              throw new TypeError(
                'Invalid Query JSON, className must be a String.'
              )
            var d = new e.Query(n)
            return (
              a.extend(d, {
                _where: r,
                _include: i,
                _select: o,
                _includeACL: s,
                _limit: u,
                _skip: c,
                _order: l,
              }),
              d
            )
          }),
          (e.Query._extend = e._extend),
          a.extend(e.Query.prototype, {
            _processResult: function (e) {
              return e
            },
            get: function (e, t) {
              if (!a.isString(e)) throw new Error('objectId must be a string')
              if ('' === e)
                return o.default.reject(
                  new u(u.OBJECT_NOT_FOUND, 'Object not found.')
                )
              var n = this._newObject()
              n.id = e
              var r = this._getParams(),
                i = {}
              return (
                r.keys && (i.keys = r.keys),
                r.include && (i.include = r.include),
                r.includeACL && (i.includeACL = r.includeACL),
                l('classes', this.className, e, 'GET', f(i), t).then(function (
                  e
                ) {
                  if (a.isEmpty(e))
                    throw new u(u.OBJECT_NOT_FOUND, 'Object not found.')
                  return n._finishFetch(n.parse(e), !0), n
                })
              )
            },
            toJSON: function () {
              return {
                className: this.className,
                where: this._where,
                include: this._include,
                select: this._select,
                includeACL: this._includeACL,
                limit: this._limit,
                skip: this._skip,
                order: this._order,
              }
            },
            _getParams: function () {
              var e = a.extend({}, this._defaultParams, { where: this._where })
              return (
                this._include.length > 0 &&
                  (e.include = this._include.join(',')),
                this._select.length > 0 && (e.keys = this._select.join(',')),
                void 0 !== this._includeACL && (e.returnACL = this._includeACL),
                this._limit >= 0 && (e.limit = this._limit),
                this._skip > 0 && (e.skip = this._skip),
                void 0 !== this._order && (e.order = this._order),
                e
              )
            },
            _newObject: function (t) {
              return t && t.className
                ? new e.Object(t.className)
                : new this.objectClass()
            },
            _createRequest: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this._getParams(),
                t = arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : '/classes/' + this.className
              return encodeURIComponent((0, i.default)(e)).length > 2e3
                ? d({
                    path: '/batch',
                    method: 'POST',
                    data: {
                      requests: [
                        { method: 'GET', path: '/1.1' + n, params: e },
                      ],
                    },
                    authOptions: t,
                  }).then(function (e) {
                    var t = e[0]
                    if (t.success) return t.success
                    var n = new Error(t.error.error || 'Unknown batch error')
                    throw ((n.code = t.error.code), n)
                  })
                : d({ method: 'GET', path: n, query: e, authOptions: t })
            },
            _parseResponse: function (e) {
              var t = this
              return a.map(e.results, function (n) {
                var r = t._newObject(e)
                return (
                  r._finishFetch && r._finishFetch(t._processResult(n), !0), r
                )
              })
            },
            find: function (e) {
              return this._createRequest(void 0, e).then(
                this._parseResponse.bind(this)
              )
            },
            scan: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.orderedBy,
                r = t.batchSize,
                i = arguments[1],
                u = this._getParams()
              s('scan %O', u),
                u.order &&
                  (console.warn(
                    'The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.'
                  ),
                  delete u.order),
                u.skip &&
                  (console.warn(
                    'The skip option of the query is ignored for Query#scan.'
                  ),
                  delete u.skip),
                u.limit &&
                  (console.warn(
                    'The limit option of the query is ignored for Query#scan.'
                  ),
                  delete u.limit),
                n && (u.scan_key = n),
                r && (u.limit = r)
              var c = o.default.resolve([]),
                d = void 0,
                h = !1
              return {
                next: function () {
                  return (c = c.then(function (t) {
                    return h
                      ? []
                      : t.length > 1
                      ? t
                      : d || 0 === t.length
                      ? l(
                          'scan/classes',
                          e.className,
                          null,
                          'GET',
                          d ? a.extend({}, u, { cursor: d }) : u,
                          i
                        )
                          .then(function (t) {
                            return (d = t.cursor), e._parseResponse(t)
                          })
                          .then(function (e) {
                            return e.length || (h = !0), t.concat(e)
                          })
                      : ((h = !0), t)
                  }))
                    .then(function (e) {
                      return e.shift()
                    })
                    .then(function (e) {
                      return { value: e, done: h }
                    })
                },
              }
            },
            destroyAll: function (t) {
              return this.find(t).then(function (n) {
                return e.Object.destroyAll(n, t)
              })
            },
            count: function (e) {
              var t = this._getParams()
              return (
                (t.limit = 0),
                (t.count = 1),
                this._createRequest(t, e).then(function (e) {
                  return e.count
                })
              )
            },
            first: function (e) {
              var t = this,
                n = this._getParams()
              return (
                (n.limit = 1),
                this._createRequest(n, e).then(function (e) {
                  return a.map(e.results, function (e) {
                    var n = t._newObject()
                    return (
                      n._finishFetch && n._finishFetch(t._processResult(e), !0),
                      n
                    )
                  })[0]
                })
              )
            },
            skip: function (e) {
              return (
                m(e, 'undefined is not a valid skip value'),
                (this._skip = e),
                this
              )
            },
            limit: function (e) {
              return (
                m(e, 'undefined is not a valid limit value'),
                (this._limit = e),
                this
              )
            },
            equalTo: function (t, n) {
              return (
                m(t, 'undefined is not a valid key'),
                m(n, 'undefined is not a valid value'),
                (this._where[t] = e._encode(n)),
                this
              )
            },
            _addCondition: function (t, n, r) {
              return (
                m(t, 'undefined is not a valid condition key'),
                m(n, 'undefined is not a valid condition'),
                m(r, 'undefined is not a valid condition value'),
                this._where[t] || (this._where[t] = {}),
                (this._where[t][n] = e._encode(r)),
                this
              )
            },
            sizeEqualTo: function (e, t) {
              return this._addCondition(e, '$size', t), this
            },
            notEqualTo: function (e, t) {
              return this._addCondition(e, '$ne', t), this
            },
            lessThan: function (e, t) {
              return this._addCondition(e, '$lt', t), this
            },
            greaterThan: function (e, t) {
              return this._addCondition(e, '$gt', t), this
            },
            lessThanOrEqualTo: function (e, t) {
              return this._addCondition(e, '$lte', t), this
            },
            greaterThanOrEqualTo: function (e, t) {
              return this._addCondition(e, '$gte', t), this
            },
            containedIn: function (e, t) {
              return this._addCondition(e, '$in', t), this
            },
            notContainedIn: function (e, t) {
              return this._addCondition(e, '$nin', t), this
            },
            containsAll: function (e, t) {
              return this._addCondition(e, '$all', t), this
            },
            exists: function (e) {
              return this._addCondition(e, '$exists', !0), this
            },
            doesNotExist: function (e) {
              return this._addCondition(e, '$exists', !1), this
            },
            matches: function (e, t, n) {
              return (
                this._addCondition(e, '$regex', t),
                n || (n = ''),
                t.ignoreCase && (n += 'i'),
                t.multiline && (n += 'm'),
                n && n.length && this._addCondition(e, '$options', n),
                this
              )
            },
            matchesQuery: function (e, t) {
              var n = t._getParams()
              return (
                (n.className = t.className),
                this._addCondition(e, '$inQuery', n),
                this
              )
            },
            doesNotMatchQuery: function (e, t) {
              var n = t._getParams()
              return (
                (n.className = t.className),
                this._addCondition(e, '$notInQuery', n),
                this
              )
            },
            matchesKeyInQuery: function (e, t, n) {
              var r = n._getParams()
              return (
                (r.className = n.className),
                this._addCondition(e, '$select', { key: t, query: r }),
                this
              )
            },
            doesNotMatchKeyInQuery: function (e, t, n) {
              var r = n._getParams()
              return (
                (r.className = n.className),
                this._addCondition(e, '$dontSelect', { key: t, query: r }),
                this
              )
            },
            _orQuery: function (e) {
              var t = a.map(e, function (e) {
                return e._getParams().where
              })
              return (this._where.$or = t), this
            },
            _andQuery: function (e) {
              var t = a.map(e, function (e) {
                return e._getParams().where
              })
              return (this._where.$and = t), this
            },
            _quote: function (e) {
              return '\\Q' + e.replace('\\E', '\\E\\\\E\\Q') + '\\E'
            },
            contains: function (e, t) {
              return this._addCondition(e, '$regex', this._quote(t)), this
            },
            startsWith: function (e, t) {
              return this._addCondition(e, '$regex', '^' + this._quote(t)), this
            },
            endsWith: function (e, t) {
              return this._addCondition(e, '$regex', this._quote(t) + '$'), this
            },
            ascending: function (e) {
              return (
                m(e, 'undefined is not a valid key'), (this._order = e), this
              )
            },
            addAscending: function (e) {
              return (
                m(e, 'undefined is not a valid key'),
                this._order ? (this._order += ',' + e) : (this._order = e),
                this
              )
            },
            descending: function (e) {
              return (
                m(e, 'undefined is not a valid key'),
                (this._order = '-' + e),
                this
              )
            },
            addDescending: function (e) {
              return (
                m(e, 'undefined is not a valid key'),
                this._order
                  ? (this._order += ',-' + e)
                  : (this._order = '-' + e),
                this
              )
            },
            near: function (t, n) {
              return (
                n instanceof e.GeoPoint || (n = new e.GeoPoint(n)),
                this._addCondition(t, '$nearSphere', n),
                this
              )
            },
            withinRadians: function (e, t, n) {
              return (
                this.near(e, t), this._addCondition(e, '$maxDistance', n), this
              )
            },
            withinMiles: function (e, t, n) {
              return this.withinRadians(e, t, n / 3958.8)
            },
            withinKilometers: function (e, t, n) {
              return this.withinRadians(e, t, n / 6371)
            },
            withinGeoBox: function (t, n, r) {
              return (
                n instanceof e.GeoPoint || (n = new e.GeoPoint(n)),
                r instanceof e.GeoPoint || (r = new e.GeoPoint(r)),
                this._addCondition(t, '$within', { $box: [n, r] }),
                this
              )
            },
            include: function (e) {
              var t = this
              return (
                m(e, 'undefined is not a valid key'),
                a.forEach(arguments, function (e) {
                  t._include = t._include.concat(p(e))
                }),
                this
              )
            },
            includeACL: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0]
              return (this._includeACL = e), this
            },
            select: function (e) {
              var t = this
              return (
                m(e, 'undefined is not a valid key'),
                a.forEach(arguments, function (e) {
                  t._select = t._select.concat(p(e))
                }),
                this
              )
            },
            each: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              if (this._order || this._skip || this._limit >= 0) {
                var r = new Error(
                  'Cannot iterate on a query with sort, skip, or limit.'
                )
                return o.default.reject(r)
              }
              var i = new e.Query(this.objectClass)
              ;(i._limit = n.batchSize || 100),
                (i._where = a.clone(this._where)),
                (i._include = a.clone(this._include)),
                i.ascending('objectId')
              var s = !1
              return g(
                function () {
                  return !s
                },
                function () {
                  return i.find(n).then(function (e) {
                    var n = o.default.resolve()
                    return (
                      a.each(e, function (e) {
                        n = n.then(function () {
                          return t(e)
                        })
                      }),
                      n.then(function () {
                        e.length >= i._limit
                          ? i.greaterThan('objectId', e[e.length - 1].id)
                          : (s = !0)
                      })
                    )
                  })
                }
              )
            },
            subscribe: function (t) {
              return e.LiveQuery.init(this, t)
            },
          }),
          (e.FriendShipQuery = e.Query._extend({
            _newObject: function () {
              return new (e.Object._getSubclass('_User'))()
            },
            _processResult: function (e) {
              if (e && e[this._friendshipTag]) {
                var t = e[this._friendshipTag]
                return (
                  'Pointer' === t.__type &&
                    '_User' === t.className &&
                    (delete t.__type, delete t.className),
                  t
                )
              }
              return null
            },
          }))
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(71),
        a = n(6).inherits,
        s = n(5).request,
        u = function (e, t) {
          return s({
            method: 'POST',
            path: '/LiveQuery/subscribe',
            data: { query: e, id: t },
          })
        }
      e.exports = function (e) {
        var t = function () {
          if (!e._config.realtime)
            throw new Error(
              'LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query'
            )
        }
        e.LiveQuery = a(
          o,
          {
            constructor: function (e, t, n, r) {
              var i = this
              o.apply(this),
                (this.id = e),
                (this._client = t),
                this._client.register(this),
                (this._queryJSON = n),
                (this._subscriptionId = r),
                (this._onMessage = this._dispatch.bind(this)),
                (this._onReconnect = function () {
                  u(i._queryJSON, i._subscriptionId).catch(function (e) {
                    return console.error(
                      'LiveQuery resubscribe error: ' + e.message
                    )
                  })
                }),
                t.on('message', this._onMessage),
                t.on('reconnect', this._onReconnect)
            },
            _dispatch: function (t) {
              var n = this
              t.forEach(function (t) {
                var r = t.op,
                  o = t.object,
                  a = t.query_id,
                  s = t.updatedKeys
                if (a === n.id) {
                  var u = e.parseJSON(
                    i.extend(
                      { __type: '_File' === o.className ? 'File' : 'Object' },
                      o
                    )
                  )
                  s ? n.emit(r, u, s) : n.emit(r, u)
                }
              })
            },
            unsubscribe: function () {
              var e = this._client
              return (
                e.off('message', this._onMessage),
                e.off('reconnect', this._onReconnect),
                e.deregister(this),
                s({
                  method: 'POST',
                  path: '/LiveQuery/unsubscribe',
                  data: { id: e.id, query_id: this.id },
                })
              )
            },
          },
          {
            init: function (n) {
              var i = (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                ).subscriptionId,
                o = void 0 === i ? e._getSubscriptionId() : i
              if ((t(), !(n instanceof e.Query)))
                throw new TypeError('LiveQuery must be inited with a Query')
              return r.default.resolve(o).then(function (t) {
                return e._config.realtime
                  .createLiveQueryClient(t)
                  .then(function (r) {
                    var i = n._getParams(),
                      o = {
                        where: i.where,
                        keys: i.keys,
                        returnACL: i.returnACL,
                        className: n.className,
                      },
                      a = u(o, t)
                        .then(function (n) {
                          var i = n.query_id
                          return new e.LiveQuery(i, r, o, t)
                        })
                        .finally(function () {
                          r.deregister(a)
                        })
                    return r.register(a), a
                  })
              })
            },
            pause: function () {
              return t(), e._config.realtime.pause()
            },
            resume: function () {
              return t(), e._config.realtime.resume()
            },
          }
        )
      }
    },
    function (e, t, n) {
      var r = n(0),
        i = n(6).tap
      e.exports = function (e) {
        ;(e.Captcha = function (e, t) {
          ;(this._options = e),
            (this._authOptions = t),
            (this.url = void 0),
            (this.captchaToken = void 0),
            (this.validateToken = void 0)
        }),
          (e.Captcha.prototype.refresh = function () {
            var t = this
            return e.Cloud._requestCaptcha(
              this._options,
              this._authOptions
            ).then(function (e) {
              var n = e.captchaToken,
                i = e.url
              return r.extend(t, { captchaToken: n, url: i }), i
            })
          }),
          (e.Captcha.prototype.verify = function (t) {
            var n = this
            return e.Cloud.verifyCaptcha(t, this.captchaToken).then(
              i(function (e) {
                return (n.validateToken = e)
              })
            )
          }),
          (e.Captcha.prototype.bind = function (e, t) {
            var n = this,
              r = e.textInput,
              i = e.image,
              o = e.verifyButton,
              a = t.success,
              s = t.error
            if ('string' == typeof r && !(r = document.getElementById(r)))
              throw new Error('textInput with id ' + r + ' not found')
            if ('string' == typeof i && !(i = document.getElementById(i)))
              throw new Error('image with id ' + i + ' not found')
            if ('string' == typeof o && !(o = document.getElementById(o)))
              throw new Error('verifyButton with id ' + o + ' not found')
            ;(this.__refresh = function () {
              return n
                .refresh()
                .then(function (e) {
                  ;(i.src = e), r && ((r.value = ''), r.focus())
                })
                .catch(function (e) {
                  return console.warn('refresh captcha fail: ' + e.message)
                })
            }),
              i &&
                ((this.__image = i),
                (i.src = this.url),
                i.addEventListener('click', this.__refresh)),
              (this.__verify = function () {
                var e = r.value
                n.verify(e)
                  .catch(function (e) {
                    throw (n.__refresh(), e)
                  })
                  .then(a, s)
                  .catch(function (e) {
                    return console.warn('verify captcha fail: ' + e.message)
                  })
              }),
              r &&
                o &&
                ((this.__verifyButton = o),
                o.addEventListener('click', this.__verify))
          }),
          (e.Captcha.prototype.unbind = function () {
            this.__image &&
              this.__image.removeEventListener('click', this.__refresh),
              this.__verifyButton &&
                this.__verifyButton.removeEventListener('click', this.__verify)
          }),
          (e.Captcha.request = function (t, n) {
            var r = new e.Captcha(t, n)
            return r.refresh().then(function () {
              return r
            })
          })
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(5),
        a = o._request,
        s = o.request
      e.exports = function (e) {
        ;(e.Cloud = e.Cloud || {}),
          i.extend(e.Cloud, {
            run: function (t, n, r) {
              return s({
                service: 'engine',
                method: 'POST',
                path: '/functions/' + t,
                data: e._encode(n, null, !0),
                authOptions: r,
              }).then(function (t) {
                return e._decode(t).result
              })
            },
            rpc: function (t, n, o) {
              return i.isArray(n)
                ? r.default.reject(
                    new Error(
                      "Can't pass Array as the param of rpc function in JavaScript SDK."
                    )
                  )
                : s({
                    service: 'engine',
                    method: 'POST',
                    path: '/call/' + t,
                    data: e._encodeObjectOrArray(n),
                    authOptions: o,
                  }).then(function (t) {
                    return e._decode(t).result
                  })
            },
            getServerDate: function () {
              return a('date', null, null, 'GET').then(function (t) {
                return e._decode(t)
              })
            },
            requestSmsCode: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              if (
                (i.isString(e) && (e = { mobilePhoneNumber: e }),
                !e.mobilePhoneNumber)
              )
                throw new Error('Missing mobilePhoneNumber.')
              return (
                t.validateToken &&
                  (e = i.extend({}, e, { validate_token: t.validateToken })),
                a('requestSmsCode', null, null, 'POST', e, t)
              )
            },
            verifySmsCode: function (e, t) {
              if (!e) throw new Error('Missing sms code.')
              var n = {}
              return (
                i.isString(t) && (n.mobilePhoneNumber = t),
                a('verifySmsCode', e, null, 'POST', n)
              )
            },
            _requestCaptcha: function (e, t) {
              return a('requestCaptcha', null, null, 'GET', e, t).then(
                function (e) {
                  var t = e.captcha_url
                  return { captchaToken: e.captcha_token, url: t }
                }
              )
            },
            requestCaptcha: e.Captcha.request,
            verifyCaptcha: function (e, t) {
              return a('verifyCaptcha', null, null, 'POST', {
                captcha_code: e,
                captcha_token: t,
              }).then(function (e) {
                return e.validate_token
              })
            },
          })
      }
    },
    function (e, t, n) {
      var r = n(5).request
      e.exports = function (e) {
        ;(e.Installation = e.Object.extend('_Installation')),
          (e.Push = e.Push || {}),
          (e.Push.send = function (e, t) {
            if (
              (e.where && (e.where = e.where._getParams().where),
              e.where && e.cql)
            )
              throw new Error("Both where and cql can't be set")
            if (
              (e.push_time && (e.push_time = e.push_time.toJSON()),
              e.expiration_time &&
                (e.expiration_time = e.expiration_time.toJSON()),
              e.expiration_time && e.expiration_time_interval)
            )
              throw new Error(
                "Both expiration_time and expiration_time_interval can't be set"
              )
            return r({
              service: 'push',
              method: 'POST',
              path: '/push',
              data: e,
              authOptions: t,
            })
          })
      }
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = r(n(2)),
        o = r(n(28)),
        a = n(0),
        s = n(5)._request,
        u = n(6).getSessionToken
      e.exports = function (e) {
        var t = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            return u(t)
              ? e.User._fetchUserBySessionToken(u(t))
              : e.User.currentAsync()
          },
          n = function (n) {
            return t(n).then(function (t) {
              return e.Object.createWithoutData('_User', t.id)._toPointer()
            })
          }
        ;(e.Status = function (e, t) {
          return (
            (this.data = {}),
            (this.inboxType = 'default'),
            (this.query = null),
            e && 'object' === (void 0 === e ? 'undefined' : (0, o.default)(e))
              ? (this.data = e)
              : (e && (this.data.image = e), t && (this.data.message = t)),
            this
          )
        }),
          a.extend(e.Status.prototype, {
            get: function (e) {
              return this.data[e]
            },
            set: function (e, t) {
              return (this.data[e] = t), this
            },
            destroy: function (e) {
              return this.id
                ? s('statuses', null, this.id, 'DELETE', e)
                : i.default.reject(new Error('The status id is not exists.'))
            },
            toObject: function () {
              return this.id
                ? e.Object.createWithoutData('_Status', this.id)
                : null
            },
            _getDataJSON: function () {
              var t = a.clone(this.data)
              return e._encode(t)
            },
            send: function () {
              var t = this,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
              if (!u(r) && !e.User.current())
                throw new Error('Please signin an user.')
              return this.query
                ? n(r)
                    .then(function (e) {
                      var n = t.query._getParams()
                      n.className = t.query.className
                      var i = {}
                      return (
                        (i.query = n),
                        (t.data = t.data || {}),
                        (t.data.source = t.data.source || e),
                        (i.data = t._getDataJSON()),
                        (i.inboxType = t.inboxType || 'default'),
                        s('statuses', null, null, 'POST', i, r)
                      )
                    })
                    .then(function (n) {
                      return (
                        (t.id = n.objectId),
                        (t.createdAt = e._parseDate(n.createdAt)),
                        t
                      )
                    })
                : e.Status.sendStatusToFollowers(this, r)
            },
            _finishFetch: function (t) {
              ;(this.id = t.objectId),
                (this.createdAt = e._parseDate(t.createdAt)),
                (this.updatedAt = e._parseDate(t.updatedAt)),
                (this.messageId = t.messageId),
                delete t.messageId,
                delete t.objectId,
                delete t.createdAt,
                delete t.updatedAt,
                (this.data = e._decode(t))
            },
          }),
          (e.Status.sendStatusToFollowers = function (t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            if (!u(r) && !e.User.current())
              throw new Error('Please signin an user.')
            return n(r).then(function (n) {
              var i = { className: '_Follower', keys: 'follower' }
              i.where = { user: n }
              var o = {}
              return (
                (o.query = i),
                (t.data = t.data || {}),
                (t.data.source = t.data.source || n),
                (o.data = t._getDataJSON()),
                (o.inboxType = t.inboxType || 'default'),
                s('statuses', null, null, 'POST', o, r).then(function (n) {
                  return (
                    (t.id = n.objectId),
                    (t.createdAt = e._parseDate(n.createdAt)),
                    t
                  )
                })
              )
            })
          }),
          (e.Status.sendPrivateStatus = function (t, r) {
            var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            if (!u(i) && !e.User.current())
              throw new Error('Please signin an user.')
            if (!r) throw new Error('Invalid target user.')
            var o = a.isString(r) ? r : r.id
            if (!o) throw new Error('Invalid target user.')
            return n(i).then(function (n) {
              var r = { className: '_User' }
              r.where = { objectId: o }
              var a = {}
              return (
                (a.query = r),
                (t.data = t.data || {}),
                (t.data.source = t.data.source || n),
                (a.data = t._getDataJSON()),
                (a.inboxType = 'private'),
                (t.inboxType = 'private'),
                s('statuses', null, null, 'POST', a, i).then(function (n) {
                  return (
                    (t.id = n.objectId),
                    (t.createdAt = e._parseDate(n.createdAt)),
                    t
                  )
                })
              )
            })
          }),
          (e.Status.countUnreadStatuses = function (n) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'default',
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
            if (
              (a.isString(r) || (o = r),
              !u(o) && null == n && !e.User.current())
            )
              throw new Error(
                'Please signin an user or pass the owner objectId.'
              )
            return i.default.resolve(n || t(o)).then(function (t) {
              var n = {}
              return (
                (n.inboxType = e._encode(r)),
                (n.owner = e._encode(t)),
                s('subscribe/statuses/count', null, null, 'GET', n, o)
              )
            })
          }),
          (e.Status.resetUnreadCount = function (n) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'default',
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
            if (
              (a.isString(r) || (o = r),
              !u(o) && null == n && !e.User.current())
            )
              throw new Error(
                'Please signin an user or pass the owner objectId.'
              )
            return i.default.resolve(n || t(o)).then(function (t) {
              var n = {}
              return (
                (n.inboxType = e._encode(r)),
                (n.owner = e._encode(t)),
                s(
                  'subscribe/statuses/resetUnreadCount',
                  null,
                  null,
                  'POST',
                  n,
                  o
                )
              )
            })
          }),
          (e.Status.statusQuery = function (t) {
            var n = new e.Query('_Status')
            return t && n.equalTo('source', t), n
          }),
          (e.InboxQuery = e.Query._extend({
            _objectClass: e.Status,
            _sinceId: 0,
            _maxId: 0,
            _inboxType: 'default',
            _owner: null,
            _newObject: function () {
              return new e.Status()
            },
            _createRequest: function (t, n) {
              return e.InboxQuery.__super__._createRequest.call(
                this,
                t,
                n,
                '/subscribe/statuses'
              )
            },
            sinceId: function (e) {
              return (this._sinceId = e), this
            },
            maxId: function (e) {
              return (this._maxId = e), this
            },
            owner: function (e) {
              return (this._owner = e), this
            },
            inboxType: function (e) {
              return (this._inboxType = e), this
            },
            _getParams: function () {
              var t = e.InboxQuery.__super__._getParams.call(this)
              return (
                (t.owner = e._encode(this._owner)),
                (t.inboxType = e._encode(this._inboxType)),
                (t.sinceId = e._encode(this._sinceId)),
                (t.maxId = e._encode(this._maxId)),
                t
              )
            },
          })),
          (e.Status.inboxQuery = function (t, n) {
            var r = new e.InboxQuery(e.Status)
            return t && (r._owner = t), n && (r._inboxType = n), r
          })
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(9)),
        i = n(0),
        o = n(5)._request
      e.exports = function (e) {
        ;(e.SearchSortBuilder = function () {
          this._sortFields = []
        }),
          i.extend(e.SearchSortBuilder.prototype, {
            _addField: function (e, t, n, r) {
              var i = {}
              return (
                (i[e] = {
                  order: t || 'asc',
                  mode: n || 'avg',
                  missing: '_' + (r || 'last'),
                }),
                this._sortFields.push(i),
                this
              )
            },
            ascending: function (e, t, n) {
              return this._addField(e, 'asc', t, n)
            },
            descending: function (e, t, n) {
              return this._addField(e, 'desc', t, n)
            },
            whereNear: function (e, t, n) {
              n = n || {}
              var r = {},
                i = { lat: t.latitude, lon: t.longitude },
                o = {
                  order: n.order || 'asc',
                  mode: n.mode || 'avg',
                  unit: n.unit || 'km',
                }
              return (
                (o[e] = i),
                (r._geo_distance = o),
                this._sortFields.push(r),
                this
              )
            },
            build: function () {
              return (0, r.default)(e._encode(this._sortFields))
            },
          }),
          (e.SearchQuery = e.Query._extend({
            _sid: null,
            _hits: 0,
            _queryString: null,
            _highlights: null,
            _sortBuilder: null,
            _createRequest: function (e, t) {
              return o(
                'search/select',
                null,
                null,
                'GET',
                e || this._getParams(),
                t
              )
            },
            sid: function (e) {
              return (this._sid = e), this
            },
            queryString: function (e) {
              return (this._queryString = e), this
            },
            highlights: function (e) {
              var t
              return (
                (t = e && i.isString(e) ? arguments : e),
                (this._highlights = t),
                this
              )
            },
            sortBy: function (e) {
              return (this._sortBuilder = e), this
            },
            hits: function () {
              return this._hits || (this._hits = 0), this._hits
            },
            _processResult: function (e) {
              return (
                delete e.className, delete e._app_url, delete e._deeplink, e
              )
            },
            hasMore: function () {
              return !this._hitEnd
            },
            reset: function () {
              ;(this._hitEnd = !1), (this._sid = null), (this._hits = 0)
            },
            find: function () {
              var e = this
              return this._createRequest().then(function (t) {
                return (
                  t.sid
                    ? ((e._oldSid = e._sid), (e._sid = t.sid))
                    : ((e._sid = null), (e._hitEnd = !0)),
                  (e._hits = t.hits || 0),
                  i.map(t.results, function (n) {
                    n.className && (t.className = n.className)
                    var r = e._newObject(t)
                    return (
                      (r.appURL = n._app_url),
                      r._finishFetch(e._processResult(n), !0),
                      r
                    )
                  })
                )
              })
            },
            _getParams: function () {
              var t = e.SearchQuery.__super__._getParams.call(this)
              if (
                (delete t.where,
                this.className && (t.clazz = this.className),
                this._sid && (t.sid = this._sid),
                !this._queryString)
              )
                throw new Error('Please set query string.')
              if (
                ((t.q = this._queryString),
                this._highlights && (t.highlights = this._highlights.join(',')),
                this._sortBuilder && t.order)
              )
                throw new Error('sort and order can not be set at same time.')
              return (
                this._sortBuilder && (t.sort = this._sortBuilder.build()), t
              )
            },
          }))
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        i = n(0),
        o = n(16),
        a = n(5).request
      e.exports = function (e) {
        ;(e.Insight = e.Insight || {}),
          i.extend(e.Insight, {
            startJob: function (t, n) {
              if (!t || !t.sql)
                throw new Error('Please provide the sql to run the job.')
              var r = { jobConfig: t, appId: e.applicationId }
              return a({
                path: '/bigquery/jobs',
                method: 'POST',
                data: e._encode(r, null, !0),
                authOptions: n,
                signKey: !1,
              }).then(function (t) {
                return e._decode(t).id
              })
            },
            on: function (e, t) {},
          }),
          (e.Insight.JobQuery = function (e, t) {
            if (!e) throw new Error('Please provide the job id.')
            ;(this.id = e),
              (this.className = t),
              (this._skip = 0),
              (this._limit = 100)
          }),
          i.extend(e.Insight.JobQuery.prototype, {
            skip: function (e) {
              return (this._skip = e), this
            },
            limit: function (e) {
              return (this._limit = e), this
            },
            find: function (e) {
              var t = { skip: this._skip, limit: this._limit }
              return a({
                path: '/bigquery/jobs/' + this.id,
                method: 'GET',
                query: t,
                authOptions: e,
                signKey: !1,
              }).then(function (e) {
                return e.error
                  ? r.default.reject(new o(e.code, e.error))
                  : r.default.resolve(e)
              })
            },
          })
      }
    },
    function (e, t, n) {
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(9)),
        i = n(0),
        o = n(5)._request,
        a = n(18),
        s = function (e) {
          return 'string' == typeof e
            ? e
            : 'function' == typeof e.getPayload
            ? (0, r.default)(e.getPayload())
            : (0, r.default)(e)
        }
      e.exports = a.Object.extend('_Conversation', {
        constructor: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          a.Object.prototype.constructor.call(this, null, null),
            this.set('name', e),
            void 0 !== t.isSystem && this.set('sys', !!t.isSystem),
            void 0 !== t.isTransient && this.set('tr', !!t.isTransient)
        },
        getCreator: function () {
          return this.get('c')
        },
        getLastMessageAt: function () {
          return this.get('lm')
        },
        getMembers: function () {
          return this.get('m')
        },
        addMember: function (e) {
          return this.add('m', e)
        },
        getMutedMembers: function () {
          return this.get('mu')
        },
        getName: function () {
          return this.get('name')
        },
        isTransient: function () {
          return this.get('tr')
        },
        isSystem: function () {
          return this.get('sys')
        },
        send: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = { from_peer: e, conv_id: this.id, transient: !1, message: s(t) }
          return (
            void 0 !== n.toClients && (i.to_peers = n.toClients),
            void 0 !== n.transient && (i.transient = !!n.transient),
            void 0 !== n.pushData && (i.push_data = n.pushData),
            o('rtm', 'messages', null, 'POST', i, r)
          )
        },
        broadcast: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = { from_peer: e, conv_id: this.id, message: s(t) }
          if (
            (void 0 !== n.pushData && (a.push = n.pushData),
            void 0 !== n.validTill)
          ) {
            var u = n.validTill
            i.isDate(u) && (u = u.getTime()), (n.valid_till = u)
          }
          return o('rtm', 'broadcast', null, 'POST', a, r)
        },
      })
    },
    function (e, t, n) {
      function r(e) {
        var t = e.name,
          n = e.value,
          r = e.version
        ;(this.name = t), (this.value = n), (this.version = r)
      }
      var i = (function (e) {
          return e && e.__esModule ? e : { default: e }
        })(n(2)),
        o = n(0),
        a = n(5).request,
        s = n(6),
        u = s.ensureArray,
        c = s.parseDate,
        l = n(18)
      ;(l.LeaderboardVersionChangeInterval = {
        NEVER: 'never',
        DAY: 'day',
        WEEK: 'week',
        MONTH: 'month',
      }),
        (l.LeaderboardOrder = {
          ASCENDING: 'ascending',
          DESCENDING: 'descending',
        }),
        (l.LeaderboardUpdateStrategy = {
          BETTER: 'better',
          LAST: 'last',
          SUM: 'sum',
        })
      var d = function (e) {
        var t = l._decode(e)
        return new r({
          name: t.statisticName,
          value: t.statisticValue,
          version: t.version,
        })
      }
      l.Leaderboard = function (e) {
        ;(this.statisticName = e),
          (this.order = void 0),
          (this.updateStrategy = void 0),
          (this.versionChangeInterval = void 0),
          (this.version = void 0),
          (this.nextResetAt = void 0),
          (this.createdAt = void 0)
      }
      var h = l.Leaderboard
      ;(l.Leaderboard.createWithoutData = function (e) {
        return new h(e)
      }),
        (l.Leaderboard.createLeaderboard = function (e, t) {
          var n = e.statisticName,
            r = e.order,
            i = e.versionChangeInterval,
            o = e.updateStrategy
          return a({
            method: 'POST',
            path: '/leaderboard/leaderboards',
            data: {
              statisticName: n,
              order: r,
              versionChangeInterval: i,
              updateStrategy: o,
            },
            authOptions: t,
          }).then(function (e) {
            return new h(n)._finishFetch(e)
          })
        }),
        (l.Leaderboard.getLeaderboard = function (e, t) {
          return h.createWithoutData(e).fetch(t)
        }),
        (l.Leaderboard.getStatistics = function (e) {
          var t = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ).statisticNames,
            n = arguments[2]
          return i.default.resolve().then(function () {
            if (!e || !e.id) throw new Error('user must be an AV.User')
            return a({
              method: 'GET',
              path: '/leaderboard/users/' + e.id + '/statistics',
              query: { statistics: t ? u(t).join(',') : void 0 },
              authOptions: n,
            }).then(function (e) {
              return e.results.map(d)
            })
          })
        }),
        (l.Leaderboard.updateStatistics = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          return i.default.resolve().then(function () {
            if (!e || !e.id) throw new Error('user must be an AV.User')
            var r = o.map(t, function (e, t) {
                return { statisticName: t, statisticValue: e }
              }),
              i = n.overwrite
            return a({
              method: 'POST',
              path: '/leaderboard/users/' + e.id + '/statistics',
              query: { overwrite: i ? 1 : void 0 },
              data: r,
              authOptions: n,
            }).then(function (e) {
              return e.results.map(d)
            })
          })
        }),
        (l.Leaderboard.deleteStatistics = function (e, t, n) {
          return i.default.resolve().then(function () {
            if (!e || !e.id) throw new Error('user must be an AV.User')
            return a({
              method: 'DELETE',
              path: '/leaderboard/users/' + e.id + '/statistics',
              query: { statistics: u(t).join(',') },
              authOptions: n,
            }).then(function () {})
          })
        }),
        o.extend(h.prototype, {
          _finishFetch: function (e) {
            var t = this
            return (
              o.forEach(e, function (e, n) {
                'updatedAt' !== n &&
                  'objectId' !== n &&
                  ('expiredAt' === n && (n = 'nextResetAt'),
                  'createdAt' === n && (e = c(e)),
                  e && 'Date' === e.__type && (e = c(e.iso)),
                  (t[n] = e))
              }),
              this
            )
          },
          fetch: function (e) {
            var t = this
            return a({
              method: 'GET',
              path: '/leaderboard/leaderboards/' + this.statisticName,
              authOptions: e,
            }).then(function (e) {
              return t._finishFetch(e)
            })
          },
          count: function () {
            var e = (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              ).version,
              t = arguments[1]
            return a({
              method: 'GET',
              path:
                '/leaderboard/leaderboards/' + this.statisticName + '/ranks',
              query: { count: 1, limit: 0, version: e },
              authOptions: t,
            }).then(function (e) {
              return e.count
            })
          },
          _getResults: function (e, t, n) {
            var r = e.skip,
              i = e.limit,
              s = e.selectUserKeys,
              c = e.includeUserKeys,
              h = e.includeStatistics,
              p = e.version
            return a({
              method: 'GET',
              path:
                '/leaderboard/leaderboards/' +
                this.statisticName +
                '/ranks' +
                (n ? '/' + n : ''),
              query: {
                skip: r,
                limit: i,
                selectUserKeys: o.union(u(s), u(c)).join(',') || void 0,
                includeUser: c ? u(c).join(',') : void 0,
                includeStatistics: h ? u(h).join(',') : void 0,
                version: p,
              },
              authOptions: t,
            }).then(function (e) {
              return e.results.map(function (e) {
                var t = l._decode(e),
                  n = t.user,
                  r = t.statisticValue,
                  i = t.rank,
                  o = t.statistics
                return {
                  user: n,
                  value: r,
                  rank: i,
                  includedStatistics: (void 0 === o ? [] : o).map(d),
                }
              })
            })
          },
          getResults: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.skip,
              n = e.limit,
              r = e.selectUserKeys,
              i = e.includeUserKeys,
              o = e.includeStatistics,
              a = e.version,
              s = arguments[1]
            return this._getResults(
              {
                skip: t,
                limit: n,
                selectUserKeys: r,
                includeUserKeys: i,
                includeStatistics: o,
                version: a,
              },
              s
            )
          },
          getResultsAroundUser: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = arguments[2]
            if (e && 'string' != typeof e.id)
              return this.getResultsAroundUser(void 0, e, t)
            var r = t.limit,
              i = t.selectUserKeys,
              o = t.includeUserKeys,
              a = t.includeStatistics,
              s = t.version
            return this._getResults(
              {
                limit: r,
                selectUserKeys: i,
                includeUserKeys: o,
                includeStatistics: a,
                version: s,
              },
              n,
              e ? e.id : 'self'
            )
          },
          _update: function (e, t) {
            var n = this
            return a({
              method: 'PUT',
              path: '/leaderboard/leaderboards/' + this.statisticName,
              data: e,
              authOptions: t,
            }).then(function (e) {
              return n._finishFetch(e)
            })
          },
          updateVersionChangeInterval: function (e, t) {
            return this._update({ versionChangeInterval: e }, t)
          },
          updateUpdateStrategy: function (e, t) {
            return this._update({ updateStrategy: e }, t)
          },
          reset: function (e) {
            var t = this
            return a({
              method: 'PUT',
              path:
                '/leaderboard/leaderboards/' +
                this.statisticName +
                '/incrementVersion',
              authOptions: e,
            }).then(function (e) {
              return t._finishFetch(e)
            })
          },
          destroy: function (e) {
            return l
              .request({
                method: 'DELETE',
                path: '/leaderboard/leaderboards/' + this.statisticName,
                authOptions: e,
              })
              .then(function () {})
          },
          getArchives: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.skip,
              r = t.limit,
              i = arguments[1]
            return a({
              method: 'GET',
              path:
                '/leaderboard/leaderboards/' + this.statisticName + '/archives',
              query: { skip: n, limit: r },
              authOptions: i,
            }).then(function (t) {
              return t.results.map(function (t) {
                var n = t.version,
                  r = t.status,
                  i = t.url,
                  o = t.activatedAt,
                  a = t.deactivatedAt
                return {
                  statisticName: e.statisticName,
                  version: n,
                  status: r,
                  url: i,
                  activatedAt: c(o.iso),
                  deactivatedAt: c(a.iso),
                }
              })
            })
          },
        })
    },
    function (e, t, n) {
      var r = n(166)
      e.exports = function (e) {
        return e.setAdapters(r), e
      }
    },
    function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(167)
      ;(t.request = r.request),
        (t.upload = r.upload),
        (t.storage = window.localStorage),
        (t.WebSocket = window.WebSocket),
        (t.platformInfo = { name: 'Browser' })
    },
    function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(168)
      ;(t.request = function (e, t) {
        void 0 === t && (t = {})
        var n = t.method,
          i = void 0 === n ? 'GET' : n,
          o = t.data,
          a = t.headers,
          s = t.onprogress,
          u = r(i, e)
        return (
          a && u.set(a),
          s && u.on('progress', s),
          u
            .send(o)
            .catch(function (e) {
              if (e.response) return e.response
              throw e
            })
            .then(function (e) {
              return {
                status: e.status,
                ok: e.ok,
                headers: e.header,
                data: e.body,
              }
            })
        )
      }),
        (t.upload = function (e, t, n) {
          void 0 === n && (n = {})
          var i = n.data,
            o = n.headers,
            a = n.onprogress,
            s = r('POST', e).attach(t.field, t.data, t.name)
          return (
            i && s.field(i),
            o && s.set(o),
            a && s.on('progress', a),
            s
              .catch(function (e) {
                if (e.response) return e.response
                throw e
              })
              .then(function (e) {
                return {
                  status: e.status,
                  ok: e.ok,
                  headers: e.header,
                  data: e.body,
                }
              })
          )
        })
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return (i =
          'function' == typeof m.default &&
          'symbol' === (0, g.default)(f.default)
            ? function (e) {
                return void 0 === e ? 'undefined' : (0, g.default)(e)
              }
            : function (e) {
                return e &&
                  'function' == typeof m.default &&
                  e.constructor === m.default &&
                  e !== m.default.prototype
                  ? 'symbol'
                  : void 0 === e
                  ? 'undefined'
                  : (0, g.default)(e)
              })(e)
      }
      function o() {}
      function a(e) {
        if (!y(e)) return e
        var t = []
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && s(t, n, e[n])
        return t.join('&')
      }
      function s(e, t, n) {
        if (void 0 !== n) {
          if (null === n) return void e.push(encodeURI(t))
          if (Array.isArray(n))
            n.forEach(function (n) {
              s(e, t, n)
            })
          else if (y(n))
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) &&
                s(e, ''.concat(t, '[').concat(r, ']'), n[r])
          else e.push(encodeURI(t) + '=' + encodeURIComponent(n))
        }
      }
      function u(e) {
        for (
          var t, n, r = {}, i = e.split('&'), o = 0, a = i.length;
          o < a;
          ++o
        )
          -1 === (n = (t = i[o]).indexOf('='))
            ? (r[decodeURIComponent(t)] = '')
            : (r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(
                t.slice(n + 1)
              ))
        return r
      }
      function c(e) {
        return /[\/+]json($|[^-\w])/.test(e)
      }
      function l(e) {
        ;(this.req = e),
          (this.xhr = this.req.xhr),
          (this.text =
            ('HEAD' !== this.req.method &&
              ('' === this.xhr.responseType ||
                'text' === this.xhr.responseType)) ||
            void 0 === this.xhr.responseType
              ? this.xhr.responseText
              : null),
          (this.statusText = this.req.xhr.statusText)
        var t = this.xhr.status
        1223 === t && (t = 204),
          this._setStatusProperties(t),
          (this.headers = (function (e) {
            for (
              var t, n, r, i, o = e.split(/\r?\n/), a = {}, s = 0, u = o.length;
              s < u;
              ++s
            )
              -1 !== (t = (n = o[s]).indexOf(':')) &&
                ((r = n.slice(0, t).toLowerCase()),
                (i = j(n.slice(t + 1))),
                (a[r] = i))
            return a
          })(this.xhr.getAllResponseHeaders())),
          (this.header = this.headers),
          (this.header['content-type'] =
            this.xhr.getResponseHeader('content-type')),
          this._setHeaderProperties(this.header),
          null === this.text && e._responseType
            ? (this.body = this.xhr.response)
            : (this.body =
                'HEAD' === this.req.method
                  ? null
                  : this._parseBody(this.text ? this.text : this.xhr.response))
      }
      function d(e, t) {
        var n = this
        ;(this._query = this._query || []),
          (this.method = e),
          (this.url = t),
          (this.header = {}),
          (this._header = {}),
          this.on('end', function () {
            var e,
              t = null,
              r = null
            try {
              r = new l(n)
            } catch (r) {
              return (
                ((t = new Error(
                  'Parser is unable to parse the response'
                )).parse = !0),
                (t.original = r),
                n.xhr
                  ? ((t.rawResponse =
                      void 0 === n.xhr.responseType
                        ? n.xhr.responseText
                        : n.xhr.response),
                    (t.status = n.xhr.status ? n.xhr.status : null),
                    (t.statusCode = t.status))
                  : ((t.rawResponse = null), (t.status = null)),
                n.callback(t)
              )
            }
            n.emit('response', r)
            try {
              n._isResponseOK(r) ||
                (e = new Error(
                  r.statusText || r.text || 'Unsuccessful HTTP response'
                ))
            } catch (t) {
              e = t
            }
            e
              ? ((e.original = t),
                (e.response = r),
                (e.status = r.status),
                n.callback(e, r))
              : n.callback(null, r)
          })
      }
      function h(e, t, n) {
        var r = A('DELETE', e)
        return (
          'function' == typeof t && ((n = t), (t = null)),
          t && r.send(t),
          n && r.end(n),
          r
        )
      }
      var p,
        f = r(n(34)),
        g = r(n(28)),
        m = r(n(35))
      'undefined' != typeof window
        ? (p = window)
        : 'undefined' == typeof self
        ? (console.warn(
            'Using browser-only version of superagent in non-browser environment'
          ),
          (p = void 0))
        : (p = self)
      var _ = n(169),
        v = n(170),
        b = n(171),
        y = n(80),
        w = n(172),
        k = n(174)
      e.exports = function (e, n) {
        return 'function' == typeof n
          ? new t.Request('GET', e).end(n)
          : 1 === arguments.length
          ? new t.Request('GET', e)
          : new t.Request(e, n)
      }
      var A = (t = e.exports)
      ;(t.Request = d),
        (A.getXHR = function () {
          if (
            p.XMLHttpRequest &&
            (!p.location || 'file:' !== p.location.protocol || !p.ActiveXObject)
          )
            return new XMLHttpRequest()
          try {
            return new ActiveXObject('Microsoft.XMLHTTP')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0')
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP')
          } catch (e) {}
          throw new Error(
            'Browser-only version of superagent could not find XHR'
          )
        })
      var j = ''.trim
        ? function (e) {
            return e.trim()
          }
        : function (e) {
            return e.replace(/(^\s*|\s*$)/g, '')
          }
      ;(A.serializeObject = a),
        (A.parseString = u),
        (A.types = {
          html: 'text/html',
          json: 'application/json',
          xml: 'text/xml',
          urlencoded: 'application/x-www-form-urlencoded',
          form: 'application/x-www-form-urlencoded',
          'form-data': 'application/x-www-form-urlencoded',
        }),
        (A.serialize = {
          'application/x-www-form-urlencoded': a,
          'application/json': v,
        }),
        (A.parse = {
          'application/x-www-form-urlencoded': u,
          'application/json': JSON.parse,
        }),
        w(l.prototype),
        (l.prototype._parseBody = function (e) {
          var t = A.parse[this.type]
          return this.req._parser
            ? this.req._parser(this, e)
            : (!t && c(this.type) && (t = A.parse['application/json']),
              t && e && (e.length > 0 || e instanceof Object) ? t(e) : null)
        }),
        (l.prototype.toError = function () {
          var e = this.req,
            t = e.method,
            n = e.url,
            r = 'cannot '
              .concat(t, ' ')
              .concat(n, ' (')
              .concat(this.status, ')'),
            i = new Error(r)
          return (i.status = this.status), (i.method = t), (i.url = n), i
        }),
        (A.Response = l),
        _(d.prototype),
        b(d.prototype),
        (d.prototype.type = function (e) {
          return this.set('Content-Type', A.types[e] || e), this
        }),
        (d.prototype.accept = function (e) {
          return this.set('Accept', A.types[e] || e), this
        }),
        (d.prototype.auth = function (e, t, n) {
          1 === arguments.length && (t = ''),
            'object' === i(t) && null !== t && ((n = t), (t = '')),
            n || (n = { type: 'function' == typeof btoa ? 'basic' : 'auto' })
          return this._auth(e, t, n, function (e) {
            if ('function' == typeof btoa) return btoa(e)
            throw new Error('Cannot use basic auth, btoa is not a function')
          })
        }),
        (d.prototype.query = function (e) {
          return (
            'string' != typeof e && (e = a(e)), e && this._query.push(e), this
          )
        }),
        (d.prototype.attach = function (e, t, n) {
          if (t) {
            if (this._data)
              throw new Error("superagent can't mix .send() and .attach()")
            this._getFormData().append(e, t, n || t.name)
          }
          return this
        }),
        (d.prototype._getFormData = function () {
          return (
            this._formData || (this._formData = new p.FormData()),
            this._formData
          )
        }),
        (d.prototype.callback = function (e, t) {
          if (this._shouldRetry(e, t)) return this._retry()
          var n = this._callback
          this.clearTimeout(),
            e &&
              (this._maxRetries && (e.retries = this._retries - 1),
              this.emit('error', e)),
            n(e, t)
        }),
        (d.prototype.crossDomainError = function () {
          var e = new Error(
            'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
          )
          ;(e.crossDomain = !0),
            (e.status = this.status),
            (e.method = this.method),
            (e.url = this.url),
            this.callback(e)
        }),
        (d.prototype.agent = function () {
          return (
            console.warn(
              'This is not supported in browser version of superagent'
            ),
            this
          )
        }),
        (d.prototype.ca = d.prototype.agent),
        (d.prototype.buffer = d.prototype.ca),
        (d.prototype.write = function () {
          throw new Error(
            'Streaming is not supported in browser version of superagent'
          )
        }),
        (d.prototype.pipe = d.prototype.write),
        (d.prototype._isHost = function (e) {
          return (
            e &&
            'object' === i(e) &&
            !Array.isArray(e) &&
            '[object Object]' !== Object.prototype.toString.call(e)
          )
        }),
        (d.prototype.end = function (e) {
          this._endCalled &&
            console.warn(
              'Warning: .end() was called twice. This is not supported in superagent'
            ),
            (this._endCalled = !0),
            (this._callback = e || o),
            this._finalizeQueryString(),
            this._end()
        }),
        (d.prototype._setUploadTimeout = function () {
          var e = this
          this._uploadTimeout &&
            !this._uploadTimeoutTimer &&
            (this._uploadTimeoutTimer = setTimeout(function () {
              e._timeoutError(
                'Upload timeout of ',
                e._uploadTimeout,
                'ETIMEDOUT'
              )
            }, this._uploadTimeout))
        }),
        (d.prototype._end = function () {
          if (this._aborted)
            return this.callback(
              new Error(
                'The request has been aborted even before .end() was called'
              )
            )
          var e = this
          this.xhr = A.getXHR()
          var t = this.xhr,
            n = this._formData || this._data
          this._setTimeouts(),
            (t.onreadystatechange = function () {
              var n = t.readyState
              if (
                (n >= 2 &&
                  e._responseTimeoutTimer &&
                  clearTimeout(e._responseTimeoutTimer),
                4 === n)
              ) {
                var r
                try {
                  r = t.status
                } catch (e) {
                  r = 0
                }
                if (!r) {
                  if (e.timedout || e._aborted) return
                  return e.crossDomainError()
                }
                e.emit('end')
              }
            })
          var r = function (t, n) {
            n.total > 0 &&
              ((n.percent = (n.loaded / n.total) * 100),
              100 === n.percent && clearTimeout(e._uploadTimeoutTimer)),
              (n.direction = t),
              e.emit('progress', n)
          }
          if (this.hasListeners('progress'))
            try {
              t.addEventListener('progress', r.bind(null, 'download')),
                t.upload &&
                  t.upload.addEventListener('progress', r.bind(null, 'upload'))
            } catch (e) {}
          t.upload && this._setUploadTimeout()
          try {
            this.username && this.password
              ? t.open(this.method, this.url, !0, this.username, this.password)
              : t.open(this.method, this.url, !0)
          } catch (e) {
            return this.callback(e)
          }
          if (
            (this._withCredentials && (t.withCredentials = !0),
            !this._formData &&
              'GET' !== this.method &&
              'HEAD' !== this.method &&
              'string' != typeof n &&
              !this._isHost(n))
          ) {
            var i = this._header['content-type'],
              o = this._serializer || A.serialize[i ? i.split(';')[0] : '']
            !o && c(i) && (o = A.serialize['application/json']), o && (n = o(n))
          }
          for (var a in this.header)
            null !== this.header[a] &&
              Object.prototype.hasOwnProperty.call(this.header, a) &&
              t.setRequestHeader(a, this.header[a])
          this._responseType && (t.responseType = this._responseType),
            this.emit('request', this),
            t.send(void 0 === n ? null : n)
        }),
        (A.agent = function () {
          return new k()
        }),
        ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (
          e
        ) {
          k.prototype[e.toLowerCase()] = function (t, n) {
            var r = new A.Request(e, t)
            return this._setDefaults(r), n && r.end(n), r
          }
        }),
        (k.prototype.del = k.prototype.delete),
        (A.get = function (e, t, n) {
          var r = A('GET', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.query(t),
            n && r.end(n),
            r
          )
        }),
        (A.head = function (e, t, n) {
          var r = A('HEAD', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.query(t),
            n && r.end(n),
            r
          )
        }),
        (A.options = function (e, t, n) {
          var r = A('OPTIONS', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.send(t),
            n && r.end(n),
            r
          )
        }),
        (A.del = h),
        (A.delete = h),
        (A.patch = function (e, t, n) {
          var r = A('PATCH', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.send(t),
            n && r.end(n),
            r
          )
        }),
        (A.post = function (e, t, n) {
          var r = A('POST', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.send(t),
            n && r.end(n),
            r
          )
        }),
        (A.put = function (e, t, n) {
          var r = A('PUT', e)
          return (
            'function' == typeof t && ((n = t), (t = null)),
            t && r.send(t),
            n && r.end(n),
            r
          )
        })
    },
    function (e, t, n) {
      function r(e) {
        if (e)
          return (function (e) {
            for (var t in r.prototype) e[t] = r.prototype[t]
            return e
          })(e)
      }
      ;(e.exports = r),
        (r.prototype.on = r.prototype.addEventListener =
          function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(
                t
              ),
              this
            )
          }),
        (r.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments)
          }
          return (n.fn = t), this.on(e, n), this
        }),
        (r.prototype.off =
          r.prototype.removeListener =
          r.prototype.removeAllListeners =
          r.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this
              var n = this._callbacks['$' + e]
              if (!n) return this
              if (1 == arguments.length)
                return delete this._callbacks['$' + e], this
              for (var r, i = 0; i < n.length; i++)
                if ((r = n[i]) === t || r.fn === t) {
                  n.splice(i, 1)
                  break
                }
              return 0 === n.length && delete this._callbacks['$' + e], this
            }),
        (r.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {}
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks['$' + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r]
          if (n) {
            r = 0
            for (var i = (n = n.slice(0)).length; r < i; ++r)
              n[r].apply(this, t)
          }
          return this
        }),
        (r.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks['$' + e] || []
          )
        }),
        (r.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length
        })
    },
    function (e, t) {
      function n(e, t, n) {
        var r
        for (
          (function e(t, n, r, i) {
            var o
            if ('object' == typeof t && null !== t) {
              for (o = 0; o < r.length; o++)
                if (r[o] === t) {
                  var a = Object.getOwnPropertyDescriptor(i, n)
                  return void (void 0 !== a.get
                    ? a.configurable
                      ? (Object.defineProperty(i, n, { value: '[Circular]' }),
                        s.push([i, n, t, a]))
                      : u.push([t, n])
                    : ((i[n] = '[Circular]'), s.push([i, n, t])))
                }
              if ((r.push(t), Array.isArray(t)))
                for (o = 0; o < t.length; o++) e(t[o], o, r, t)
              else {
                var c = Object.keys(t)
                for (o = 0; o < c.length; o++) {
                  var l = c[o]
                  e(t[l], l, r, t)
                }
              }
              r.pop()
            }
          })(e, '', [], void 0),
            r =
              0 === u.length
                ? JSON.stringify(e, t, n)
                : JSON.stringify(e, a(t), n);
          0 !== s.length;

        ) {
          var i = s.pop()
          4 === i.length
            ? Object.defineProperty(i[0], i[1], i[3])
            : (i[0][i[1]] = i[2])
        }
        return r
      }
      function r(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }
      function i(e, t, n) {
        var r,
          i = o(e, '', [], void 0) || e
        for (
          r =
            0 === u.length
              ? JSON.stringify(i, t, n)
              : JSON.stringify(i, a(t), n);
          0 !== s.length;

        ) {
          var c = s.pop()
          4 === c.length
            ? Object.defineProperty(c[0], c[1], c[3])
            : (c[0][c[1]] = c[2])
        }
        return r
      }
      function o(e, t, n, i) {
        var a
        if ('object' == typeof e && null !== e) {
          for (a = 0; a < n.length; a++)
            if (n[a] === e) {
              var c = Object.getOwnPropertyDescriptor(i, t)
              return void (void 0 !== c.get
                ? c.configurable
                  ? (Object.defineProperty(i, t, { value: '[Circular]' }),
                    s.push([i, t, e, c]))
                  : u.push([e, t])
                : ((i[t] = '[Circular]'), s.push([i, t, e])))
            }
          if ('function' == typeof e.toJSON) return
          if ((n.push(e), Array.isArray(e)))
            for (a = 0; a < e.length; a++) o(e[a], a, n, e)
          else {
            var l = {},
              d = Object.keys(e).sort(r)
            for (a = 0; a < d.length; a++) {
              var h = d[a]
              o(e[h], h, n, e), (l[h] = e[h])
            }
            if (void 0 === i) return l
            s.push([i, t, e]), (i[t] = l)
          }
          n.pop()
        }
      }
      function a(e) {
        return (
          (e =
            void 0 !== e
              ? e
              : function (e, t) {
                  return t
                }),
          function (t, n) {
            if (u.length > 0)
              for (var r = 0; r < u.length; r++) {
                var i = u[r]
                if (i[1] === t && i[0] === n) {
                  ;(n = '[Circular]'), u.splice(r, 1)
                  break
                }
              }
            return e.call(this, t, n)
          }
        )
      }
      ;(e.exports = n), (n.default = n), (n.stable = i), (n.stableStringify = i)
      var s = [],
        u = []
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return (i =
          'function' == typeof c.default &&
          'symbol' === (0, u.default)(s.default)
            ? function (e) {
                return void 0 === e ? 'undefined' : (0, u.default)(e)
              }
            : function (e) {
                return e &&
                  'function' == typeof c.default &&
                  e.constructor === c.default &&
                  e !== c.default.prototype
                  ? 'symbol'
                  : void 0 === e
                  ? 'undefined'
                  : (0, u.default)(e)
              })(e)
      }
      function o(e) {
        if (e)
          return (function (e) {
            for (var t in o.prototype)
              Object.prototype.hasOwnProperty.call(o.prototype, t) &&
                (e[t] = o.prototype[t])
            return e
          })(e)
      }
      var a = r(n(2)),
        s = r(n(34)),
        u = r(n(28)),
        c = r(n(35)),
        l = n(80)
      ;(e.exports = o),
        (o.prototype.clearTimeout = function () {
          return (
            clearTimeout(this._timer),
            clearTimeout(this._responseTimeoutTimer),
            clearTimeout(this._uploadTimeoutTimer),
            delete this._timer,
            delete this._responseTimeoutTimer,
            delete this._uploadTimeoutTimer,
            this
          )
        }),
        (o.prototype.parse = function (e) {
          return (this._parser = e), this
        }),
        (o.prototype.responseType = function (e) {
          return (this._responseType = e), this
        }),
        (o.prototype.serialize = function (e) {
          return (this._serializer = e), this
        }),
        (o.prototype.timeout = function (e) {
          if (!e || 'object' !== i(e))
            return (
              (this._timeout = e),
              (this._responseTimeout = 0),
              (this._uploadTimeout = 0),
              this
            )
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t))
              switch (t) {
                case 'deadline':
                  this._timeout = e.deadline
                  break
                case 'response':
                  this._responseTimeout = e.response
                  break
                case 'upload':
                  this._uploadTimeout = e.upload
                  break
                default:
                  console.warn('Unknown timeout option', t)
              }
          return this
        }),
        (o.prototype.retry = function (e, t) {
          return (
            (0 !== arguments.length && !0 !== e) || (e = 1),
            e <= 0 && (e = 0),
            (this._maxRetries = e),
            (this._retries = 0),
            (this._retryCallback = t),
            this
          )
        })
      var d = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT']
      ;(o.prototype._shouldRetry = function (e, t) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1
        if (this._retryCallback)
          try {
            var n = this._retryCallback(e, t)
            if (!0 === n) return !0
            if (!1 === n) return !1
          } catch (e) {
            console.error(e)
          }
        if (t && t.status && t.status >= 500 && 501 !== t.status) return !0
        if (e) {
          if (e.code && d.includes(e.code)) return !0
          if (e.timeout && 'ECONNABORTED' === e.code) return !0
          if (e.crossDomain) return !0
        }
        return !1
      }),
        (o.prototype._retry = function () {
          return (
            this.clearTimeout(),
            this.req && ((this.req = null), (this.req = this.request())),
            (this._aborted = !1),
            (this.timedout = !1),
            (this.timedoutError = null),
            this._end()
          )
        }),
        (o.prototype.then = function (e, t) {
          var n = this
          if (!this._fullfilledPromise) {
            var r = this
            this._endCalled &&
              console.warn(
                'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
              ),
              (this._fullfilledPromise = new a.default(function (e, t) {
                r.on('abort', function () {
                  if (n.timedout && n.timedoutError) t(n.timedoutError)
                  else {
                    var e = new Error('Aborted')
                    ;(e.code = 'ABORTED'),
                      (e.status = n.status),
                      (e.method = n.method),
                      (e.url = n.url),
                      t(e)
                  }
                }),
                  r.end(function (n, r) {
                    n ? t(n) : e(r)
                  })
              }))
          }
          return this._fullfilledPromise.then(e, t)
        }),
        (o.prototype.catch = function (e) {
          return this.then(void 0, e)
        }),
        (o.prototype.use = function (e) {
          return e(this), this
        }),
        (o.prototype.ok = function (e) {
          if ('function' != typeof e) throw new Error('Callback required')
          return (this._okCallback = e), this
        }),
        (o.prototype._isResponseOK = function (e) {
          return (
            !!e &&
            (this._okCallback
              ? this._okCallback(e)
              : e.status >= 200 && e.status < 300)
          )
        }),
        (o.prototype.get = function (e) {
          return this._header[e.toLowerCase()]
        }),
        (o.prototype.getHeader = o.prototype.get),
        (o.prototype.set = function (e, t) {
          if (l(e)) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && this.set(n, e[n])
            return this
          }
          return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this
        }),
        (o.prototype.unset = function (e) {
          return (
            delete this._header[e.toLowerCase()], delete this.header[e], this
          )
        }),
        (o.prototype.field = function (e, t) {
          if (null == e)
            throw new Error('.field(name, val) name can not be empty')
          if (this._data)
            throw new Error(
              ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
            )
          if (l(e)) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && this.field(n, e[n])
            return this
          }
          if (Array.isArray(t)) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && this.field(e, t[r])
            return this
          }
          if (null == t)
            throw new Error('.field(name, val) val can not be empty')
          return (
            'boolean' == typeof t && (t = String(t)),
            this._getFormData().append(e, t),
            this
          )
        }),
        (o.prototype.abort = function () {
          return this._aborted
            ? this
            : ((this._aborted = !0),
              this.xhr && this.xhr.abort(),
              this.req && this.req.abort(),
              this.clearTimeout(),
              this.emit('abort'),
              this)
        }),
        (o.prototype._auth = function (e, t, n, r) {
          switch (n.type) {
            case 'basic':
              this.set(
                'Authorization',
                'Basic '.concat(r(''.concat(e, ':').concat(t)))
              )
              break
            case 'auto':
              ;(this.username = e), (this.password = t)
              break
            case 'bearer':
              this.set('Authorization', 'Bearer '.concat(e))
          }
          return this
        }),
        (o.prototype.withCredentials = function (e) {
          return void 0 === e && (e = !0), (this._withCredentials = e), this
        }),
        (o.prototype.redirects = function (e) {
          return (this._maxRedirects = e), this
        }),
        (o.prototype.maxResponseSize = function (e) {
          if ('number' != typeof e) throw new TypeError('Invalid argument')
          return (this._maxResponseSize = e), this
        }),
        (o.prototype.toJSON = function () {
          return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header,
          }
        }),
        (o.prototype.send = function (e) {
          var t = l(e),
            n = this._header['content-type']
          if (this._formData)
            throw new Error(
              ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
            )
          if (t && !this._data)
            Array.isArray(e)
              ? (this._data = [])
              : this._isHost(e) || (this._data = {})
          else if (e && this._data && this._isHost(this._data))
            throw new Error("Can't merge these send calls")
          if (t && l(this._data))
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                (this._data[r] = e[r])
          else
            'string' == typeof e
              ? (n || this.type('form'),
                (n = this._header['content-type']),
                (this._data =
                  'application/x-www-form-urlencoded' === n
                    ? this._data
                      ? ''.concat(this._data, '&').concat(e)
                      : e
                    : (this._data || '') + e))
              : (this._data = e)
          return !t || this._isHost(e) ? this : (n || this.type('json'), this)
        }),
        (o.prototype.sortQuery = function (e) {
          return (this._sort = void 0 === e || e), this
        }),
        (o.prototype._finalizeQueryString = function () {
          var e = this._query.join('&')
          if (
            (e && (this.url += (this.url.includes('?') ? '&' : '?') + e),
            (this._query.length = 0),
            this._sort)
          ) {
            var t = this.url.indexOf('?')
            if (t >= 0) {
              var n = this.url.slice(t + 1).split('&')
              'function' == typeof this._sort ? n.sort(this._sort) : n.sort(),
                (this.url = this.url.slice(0, t) + '?' + n.join('&'))
            }
          }
        }),
        (o.prototype._appendQueryString = function () {
          console.warn('Unsupported')
        }),
        (o.prototype._timeoutError = function (e, t, n) {
          if (!this._aborted) {
            var r = new Error(''.concat(e + t, 'ms exceeded'))
            ;(r.timeout = t),
              (r.code = 'ECONNABORTED'),
              (r.errno = n),
              (this.timedout = !0),
              (this.timedoutError = r),
              this.abort(),
              this.callback(r)
          }
        }),
        (o.prototype._setTimeouts = function () {
          var e = this
          this._timeout &&
            !this._timer &&
            (this._timer = setTimeout(function () {
              e._timeoutError('Timeout of ', e._timeout, 'ETIME')
            }, this._timeout)),
            this._responseTimeout &&
              !this._responseTimeoutTimer &&
              (this._responseTimeoutTimer = setTimeout(function () {
                e._timeoutError(
                  'Response timeout of ',
                  e._responseTimeout,
                  'ETIMEDOUT'
                )
              }, this._responseTimeout))
        })
    },
    function (e, t, n) {
      function r(e) {
        if (e)
          return (function (e) {
            for (var t in r.prototype)
              Object.prototype.hasOwnProperty.call(r.prototype, t) &&
                (e[t] = r.prototype[t])
            return e
          })(e)
      }
      var i = n(173)
      ;(e.exports = r),
        (r.prototype.get = function (e) {
          return this.header[e.toLowerCase()]
        }),
        (r.prototype._setHeaderProperties = function (e) {
          var t = e['content-type'] || ''
          this.type = i.type(t)
          var n = i.params(t)
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r])
          this.links = {}
          try {
            e.link && (this.links = i.parseLinks(e.link))
          } catch (e) {}
        }),
        (r.prototype._setStatusProperties = function (e) {
          var t = (e / 100) | 0
          ;(this.statusCode = e),
            (this.status = this.statusCode),
            (this.statusType = t),
            (this.info = 1 === t),
            (this.ok = 2 === t),
            (this.redirect = 3 === t),
            (this.clientError = 4 === t),
            (this.serverError = 5 === t),
            (this.error = (4 === t || 5 === t) && this.toError()),
            (this.created = 201 === e),
            (this.accepted = 202 === e),
            (this.noContent = 204 === e),
            (this.badRequest = 400 === e),
            (this.unauthorized = 401 === e),
            (this.notAcceptable = 406 === e),
            (this.forbidden = 403 === e),
            (this.notFound = 404 === e),
            (this.unprocessableEntity = 422 === e)
        })
    },
    function (e, t, n) {
      ;(t.type = function (e) {
        return e.split(/ *; */).shift()
      }),
        (t.params = function (e) {
          return e.split(/ *; */).reduce(function (e, t) {
            var n = t.split(/ *= */),
              r = n.shift(),
              i = n.shift()
            return r && i && (e[r] = i), e
          }, {})
        }),
        (t.parseLinks = function (e) {
          return e.split(/ *, */).reduce(function (e, t) {
            var n = t.split(/ *; */),
              r = n[0].slice(1, -1)
            return (e[n[1].split(/ *= */)[1].slice(1, -1)] = r), e
          }, {})
        }),
        (t.cleanHeader = function (e, t) {
          return (
            delete e['content-type'],
            delete e['content-length'],
            delete e['transfer-encoding'],
            delete e.host,
            t && (delete e.authorization, delete e.cookie),
            e
          )
        })
    },
    function (e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function (e) {
            if (
              (0, s.default)(Object(e)) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return (0, a.default)(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      function o() {
        this._defaults = []
      }
      var a = r(n(175)),
        s = r(n(79))
      ;[
        'use',
        'on',
        'once',
        'set',
        'query',
        'type',
        'accept',
        'auth',
        'withCredentials',
        'sortQuery',
        'retry',
        'ok',
        'redirects',
        'timeout',
        'buffer',
        'serialize',
        'parse',
        'ca',
        'key',
        'pfx',
        'cert',
        'disableTLSCerts',
      ].forEach(function (e) {
        o.prototype[e] = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          return this._defaults.push({ fn: e, args: n }), this
        }
      }),
        (o.prototype._setDefaults = function (e) {
          this._defaults.forEach(function (t) {
            e[t.fn].apply(e, i(t.args))
          })
        }),
        (e.exports = o)
    },
    function (e, t, n) {
      e.exports = { default: n(176), __esModule: !0 }
    },
    function (e, t, n) {
      n(21), n(177), (e.exports = n(1).Array.from)
    },
    function (e, t, n) {
      var r = n(23),
        i = n(10),
        o = n(27),
        a = n(60),
        s = n(61),
        u = n(40),
        c = n(178),
        l = n(45)
      i(
        i.S +
          i.F *
            !n(66)(function (e) {
              Array.from(e)
            }),
        'Array',
        {
          from: function (e) {
            var t,
              n,
              i,
              d,
              h = o(e),
              p = 'function' == typeof this ? this : Array,
              f = arguments.length,
              g = f > 1 ? arguments[1] : void 0,
              m = void 0 !== g,
              _ = 0,
              v = l(h)
            if (
              (m && (g = r(g, f > 2 ? arguments[2] : void 0, 2)),
              null == v || (p == Array && s(v)))
            )
              for (n = new p((t = u(h.length))); t > _; _++)
                c(n, _, m ? g(h[_], _) : h[_])
            else
              for (d = v.call(h), n = new p(); !(i = d.next()).done; _++)
                c(n, _, m ? a(d, g, [i.value, _], !0) : i.value)
            return (n.length = _), n
          },
        }
      )
    },
    function (e, t, n) {
      var r = n(7),
        i = n(25)
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : (e[t] = n)
      }
    },
  ])
})
var version = 'v2.3.6'
if (
  document.getElementById('lazy') ||
  !document.getElementById('artitalk_main')
) {
  var r = confirm(
    '旧版本需要进行一些改动，未进行改动无法正常加载页面属于正常现象。点击确定前往查看改动'
  )
  1 == r &&
    (window.location.href =
      'https://artitalk.js.org/release.html#_2020-6-27-11-50')
}
!(function () {
  var root = 'object' == typeof window ? window : {},
    NODE_JS =
      !root.JS_SHA1_NO_NODE_JS &&
      'object' == typeof process &&
      process.versions &&
      process.versions.node
  NODE_JS && (root = global)
  var COMMON_JS =
      !root.JS_SHA1_NO_COMMON_JS && 'object' == typeof module && module.exports,
    AMD = 'function' == typeof define && define.amd,
    HEX_CHARS = '0123456789abcdef'.split(''),
    EXTRA = [-2147483648, 8388608, 32768, 128],
    SHIFT = [24, 16, 8, 0],
    OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'],
    blocks = [],
    createOutputMethod = function (e) {
      return function (t) {
        return new Sha1(!0).update(t)[e]()
      }
    },
    createMethod = function () {
      var e = createOutputMethod('hex')
      NODE_JS && (e = nodeWrap(e)),
        (e.create = function () {
          return new Sha1()
        }),
        (e.update = function (t) {
          return e.create().update(t)
        })
      for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
        var n = OUTPUT_TYPES[t]
        e[n] = createOutputMethod(n)
      }
      return e
    },
    nodeWrap = function (method) {
      var crypto = eval("require('crypto')"),
        Buffer = eval("require('buffer').Buffer"),
        nodeMethod = function (e) {
          if ('string' == typeof e)
            return crypto.createHash('sha1').update(e, 'utf8').digest('hex')
          if (e.constructor === ArrayBuffer) e = new Uint8Array(e)
          else if (void 0 === e.length) return method(e)
          return crypto.createHash('sha1').update(new Buffer(e)).digest('hex')
        }
      return nodeMethod
    }
  function Sha1(e) {
    e
      ? ((blocks[0] =
          blocks[16] =
          blocks[1] =
          blocks[2] =
          blocks[3] =
          blocks[4] =
          blocks[5] =
          blocks[6] =
          blocks[7] =
          blocks[8] =
          blocks[9] =
          blocks[10] =
          blocks[11] =
          blocks[12] =
          blocks[13] =
          blocks[14] =
          blocks[15] =
            0),
        (this.blocks = blocks))
      : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      (this.h0 = 1732584193),
      (this.h1 = 4023233417),
      (this.h2 = 2562383102),
      (this.h3 = 271733878),
      (this.h4 = 3285377520),
      (this.block = this.start = this.bytes = this.hBytes = 0),
      (this.finalized = this.hashed = !1),
      (this.first = !0)
  }
  ;(Sha1.prototype.update = function (e) {
    if (!this.finalized) {
      var t = 'string' != typeof e
      t && e.constructor === root.ArrayBuffer && (e = new Uint8Array(e))
      for (var n, r, i = 0, o = e.length || 0, a = this.blocks; i < o; ) {
        if (
          (this.hashed &&
            ((this.hashed = !1),
            (a[0] = this.block),
            (a[16] =
              a[1] =
              a[2] =
              a[3] =
              a[4] =
              a[5] =
              a[6] =
              a[7] =
              a[8] =
              a[9] =
              a[10] =
              a[11] =
              a[12] =
              a[13] =
              a[14] =
              a[15] =
                0)),
          t)
        )
          for (r = this.start; i < o && r < 64; ++i)
            a[r >> 2] |= e[i] << SHIFT[3 & r++]
        else
          for (r = this.start; i < o && r < 64; ++i)
            (n = e.charCodeAt(i)) < 128
              ? (a[r >> 2] |= n << SHIFT[3 & r++])
              : n < 2048
              ? ((a[r >> 2] |= (192 | (n >> 6)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | (63 & n)) << SHIFT[3 & r++]))
              : n < 55296 || n >= 57344
              ? ((a[r >> 2] |= (224 | (n >> 12)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | (63 & n)) << SHIFT[3 & r++]))
              : ((n =
                  65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(++i)))),
                (a[r >> 2] |= (240 | (n >> 18)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | ((n >> 12) & 63)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & r++]),
                (a[r >> 2] |= (128 | (63 & n)) << SHIFT[3 & r++]))
        ;(this.lastByteIndex = r),
          (this.bytes += r - this.start),
          r >= 64
            ? ((this.block = a[16]),
              (this.start = r - 64),
              this.hash(),
              (this.hashed = !0))
            : (this.start = r)
      }
      return (
        this.bytes > 4294967295 &&
          ((this.hBytes += (this.bytes / 4294967296) << 0),
          (this.bytes = this.bytes % 4294967296)),
        this
      )
    }
  }),
    (Sha1.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0
        var e = this.blocks,
          t = this.lastByteIndex
        ;(e[16] = this.block),
          (e[t >> 2] |= EXTRA[3 & t]),
          (this.block = e[16]),
          t >= 56 &&
            (this.hashed || this.hash(),
            (e[0] = this.block),
            (e[16] =
              e[1] =
              e[2] =
              e[3] =
              e[4] =
              e[5] =
              e[6] =
              e[7] =
              e[8] =
              e[9] =
              e[10] =
              e[11] =
              e[12] =
              e[13] =
              e[14] =
              e[15] =
                0)),
          (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
          (e[15] = this.bytes << 3),
          this.hash()
      }
    }),
    (Sha1.prototype.hash = function () {
      var e,
        t,
        n = this.h0,
        r = this.h1,
        i = this.h2,
        o = this.h3,
        a = this.h4,
        s = this.blocks
      for (e = 16; e < 80; ++e)
        (t = s[e - 3] ^ s[e - 8] ^ s[e - 14] ^ s[e - 16]),
          (s[e] = (t << 1) | (t >>> 31))
      for (e = 0; e < 20; e += 5)
        (n =
          ((t =
            ((r =
              ((t =
                ((i =
                  ((t =
                    ((o =
                      ((t =
                        ((a =
                          ((t = (n << 5) | (n >>> 27)) +
                            ((r & i) | (~r & o)) +
                            a +
                            1518500249 +
                            s[e]) <<
                          0) <<
                          5) |
                        (a >>> 27)) +
                        ((n & (r = (r << 30) | (r >>> 2))) | (~n & i)) +
                        o +
                        1518500249 +
                        s[e + 1]) <<
                      0) <<
                      5) |
                    (o >>> 27)) +
                    ((a & (n = (n << 30) | (n >>> 2))) | (~a & r)) +
                    i +
                    1518500249 +
                    s[e + 2]) <<
                  0) <<
                  5) |
                (i >>> 27)) +
                ((o & (a = (a << 30) | (a >>> 2))) | (~o & n)) +
                r +
                1518500249 +
                s[e + 3]) <<
              0) <<
              5) |
            (r >>> 27)) +
            ((i & (o = (o << 30) | (o >>> 2))) | (~i & a)) +
            n +
            1518500249 +
            s[e + 4]) <<
          0),
          (i = (i << 30) | (i >>> 2))
      for (; e < 40; e += 5)
        (n =
          ((t =
            ((r =
              ((t =
                ((i =
                  ((t =
                    ((o =
                      ((t =
                        ((a =
                          ((t = (n << 5) | (n >>> 27)) +
                            (r ^ i ^ o) +
                            a +
                            1859775393 +
                            s[e]) <<
                          0) <<
                          5) |
                        (a >>> 27)) +
                        (n ^ (r = (r << 30) | (r >>> 2)) ^ i) +
                        o +
                        1859775393 +
                        s[e + 1]) <<
                      0) <<
                      5) |
                    (o >>> 27)) +
                    (a ^ (n = (n << 30) | (n >>> 2)) ^ r) +
                    i +
                    1859775393 +
                    s[e + 2]) <<
                  0) <<
                  5) |
                (i >>> 27)) +
                (o ^ (a = (a << 30) | (a >>> 2)) ^ n) +
                r +
                1859775393 +
                s[e + 3]) <<
              0) <<
              5) |
            (r >>> 27)) +
            (i ^ (o = (o << 30) | (o >>> 2)) ^ a) +
            n +
            1859775393 +
            s[e + 4]) <<
          0),
          (i = (i << 30) | (i >>> 2))
      for (; e < 60; e += 5)
        (n =
          ((t =
            ((r =
              ((t =
                ((i =
                  ((t =
                    ((o =
                      ((t =
                        ((a =
                          ((t = (n << 5) | (n >>> 27)) +
                            ((r & i) | (r & o) | (i & o)) +
                            a -
                            1894007588 +
                            s[e]) <<
                          0) <<
                          5) |
                        (a >>> 27)) +
                        ((n & (r = (r << 30) | (r >>> 2))) |
                          (n & i) |
                          (r & i)) +
                        o -
                        1894007588 +
                        s[e + 1]) <<
                      0) <<
                      5) |
                    (o >>> 27)) +
                    ((a & (n = (n << 30) | (n >>> 2))) | (a & r) | (n & r)) +
                    i -
                    1894007588 +
                    s[e + 2]) <<
                  0) <<
                  5) |
                (i >>> 27)) +
                ((o & (a = (a << 30) | (a >>> 2))) | (o & n) | (a & n)) +
                r -
                1894007588 +
                s[e + 3]) <<
              0) <<
              5) |
            (r >>> 27)) +
            ((i & (o = (o << 30) | (o >>> 2))) | (i & a) | (o & a)) +
            n -
            1894007588 +
            s[e + 4]) <<
          0),
          (i = (i << 30) | (i >>> 2))
      for (; e < 80; e += 5)
        (n =
          ((t =
            ((r =
              ((t =
                ((i =
                  ((t =
                    ((o =
                      ((t =
                        ((a =
                          ((t = (n << 5) | (n >>> 27)) +
                            (r ^ i ^ o) +
                            a -
                            899497514 +
                            s[e]) <<
                          0) <<
                          5) |
                        (a >>> 27)) +
                        (n ^ (r = (r << 30) | (r >>> 2)) ^ i) +
                        o -
                        899497514 +
                        s[e + 1]) <<
                      0) <<
                      5) |
                    (o >>> 27)) +
                    (a ^ (n = (n << 30) | (n >>> 2)) ^ r) +
                    i -
                    899497514 +
                    s[e + 2]) <<
                  0) <<
                  5) |
                (i >>> 27)) +
                (o ^ (a = (a << 30) | (a >>> 2)) ^ n) +
                r -
                899497514 +
                s[e + 3]) <<
              0) <<
              5) |
            (r >>> 27)) +
            (i ^ (o = (o << 30) | (o >>> 2)) ^ a) +
            n -
            899497514 +
            s[e + 4]) <<
          0),
          (i = (i << 30) | (i >>> 2))
      ;(this.h0 = (this.h0 + n) << 0),
        (this.h1 = (this.h1 + r) << 0),
        (this.h2 = (this.h2 + i) << 0),
        (this.h3 = (this.h3 + o) << 0),
        (this.h4 = (this.h4 + a) << 0)
    }),
    (Sha1.prototype.hex = function () {
      this.finalize()
      var e = this.h0,
        t = this.h1,
        n = this.h2,
        r = this.h3,
        i = this.h4
      return (
        HEX_CHARS[(e >> 28) & 15] +
        HEX_CHARS[(e >> 24) & 15] +
        HEX_CHARS[(e >> 20) & 15] +
        HEX_CHARS[(e >> 16) & 15] +
        HEX_CHARS[(e >> 12) & 15] +
        HEX_CHARS[(e >> 8) & 15] +
        HEX_CHARS[(e >> 4) & 15] +
        HEX_CHARS[15 & e] +
        HEX_CHARS[(t >> 28) & 15] +
        HEX_CHARS[(t >> 24) & 15] +
        HEX_CHARS[(t >> 20) & 15] +
        HEX_CHARS[(t >> 16) & 15] +
        HEX_CHARS[(t >> 12) & 15] +
        HEX_CHARS[(t >> 8) & 15] +
        HEX_CHARS[(t >> 4) & 15] +
        HEX_CHARS[15 & t] +
        HEX_CHARS[(n >> 28) & 15] +
        HEX_CHARS[(n >> 24) & 15] +
        HEX_CHARS[(n >> 20) & 15] +
        HEX_CHARS[(n >> 16) & 15] +
        HEX_CHARS[(n >> 12) & 15] +
        HEX_CHARS[(n >> 8) & 15] +
        HEX_CHARS[(n >> 4) & 15] +
        HEX_CHARS[15 & n] +
        HEX_CHARS[(r >> 28) & 15] +
        HEX_CHARS[(r >> 24) & 15] +
        HEX_CHARS[(r >> 20) & 15] +
        HEX_CHARS[(r >> 16) & 15] +
        HEX_CHARS[(r >> 12) & 15] +
        HEX_CHARS[(r >> 8) & 15] +
        HEX_CHARS[(r >> 4) & 15] +
        HEX_CHARS[15 & r] +
        HEX_CHARS[(i >> 28) & 15] +
        HEX_CHARS[(i >> 24) & 15] +
        HEX_CHARS[(i >> 20) & 15] +
        HEX_CHARS[(i >> 16) & 15] +
        HEX_CHARS[(i >> 12) & 15] +
        HEX_CHARS[(i >> 8) & 15] +
        HEX_CHARS[(i >> 4) & 15] +
        HEX_CHARS[15 & i]
      )
    }),
    (Sha1.prototype.toString = Sha1.prototype.hex),
    (Sha1.prototype.digest = function () {
      this.finalize()
      var e = this.h0,
        t = this.h1,
        n = this.h2,
        r = this.h3,
        i = this.h4
      return [
        (e >> 24) & 255,
        (e >> 16) & 255,
        (e >> 8) & 255,
        255 & e,
        (t >> 24) & 255,
        (t >> 16) & 255,
        (t >> 8) & 255,
        255 & t,
        (n >> 24) & 255,
        (n >> 16) & 255,
        (n >> 8) & 255,
        255 & n,
        (r >> 24) & 255,
        (r >> 16) & 255,
        (r >> 8) & 255,
        255 & r,
        (i >> 24) & 255,
        (i >> 16) & 255,
        (i >> 8) & 255,
        255 & i,
      ]
    }),
    (Sha1.prototype.array = Sha1.prototype.digest),
    (Sha1.prototype.arrayBuffer = function () {
      this.finalize()
      var e = new ArrayBuffer(20),
        t = new DataView(e)
      return (
        t.setUint32(0, this.h0),
        t.setUint32(4, this.h1),
        t.setUint32(8, this.h2),
        t.setUint32(12, this.h3),
        t.setUint32(16, this.h4),
        e
      )
    })
  var exports = createMethod()
  COMMON_JS
    ? (module.exports = exports)
    : ((root.sha1 = exports),
      AMD &&
        define(function () {
          return exports
        }))
})(),
  function () {
    function e(e) {
      var t = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: 'Omit the default extra whiteline added to code blocks',
          type: 'boolean',
        },
        noHeaderId: {
          defaultValue: !1,
          describe: 'Turn on/off generated header id',
          type: 'boolean',
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe:
            "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: 'string',
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe:
            'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: 'boolean',
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe:
            'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
          type: 'boolean',
        },
        rawHeaderId: {
          defaultValue: !1,
          describe:
            'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
          type: 'boolean',
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: 'The header blocks level start',
          type: 'integer',
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: 'Turn on/off image dimension parsing',
          type: 'boolean',
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: 'Turn on/off GFM autolink style',
          type: 'boolean',
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe:
            'Excludes trailing punctuation from links generated with autoLinking',
          type: 'boolean',
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: 'Parse midword underscores as literal underscores',
          type: 'boolean',
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: 'Parse midword asterisks as literal asterisks',
          type: 'boolean',
        },
        strikethrough: {
          defaultValue: !0,
          describe: 'Turn on/off strikethrough support',
          type: 'boolean',
        },
        tables: {
          defaultValue: !1,
          describe: 'Turn on/off tables support',
          type: 'boolean',
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: 'Add an id to table headers',
          type: 'boolean',
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: 'Turn on/off GFM fenced code blocks support',
          type: 'boolean',
        },
        tasklists: {
          defaultValue: !1,
          describe: 'Turn on/off GFM tasklist support',
          type: 'boolean',
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe:
            'Prevents weird effects in live previews due to incomplete input',
          type: 'boolean',
        },
        smartIndentationFix: {
          defaultValue: !1,
          description: 'Tries to smartly fix indentation in es6 strings',
          type: 'boolean',
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          description:
            'Disables the requirement of indenting nested sublists by 4 spaces',
          type: 'boolean',
        },
        simpleLineBreaks: {
          defaultValue: !1,
          description: 'Parses simple line breaks as <br> (GFM Style)',
          type: 'boolean',
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          description:
            'Makes adding a space between `#` and the header text mandatory (GFM Style)',
          type: 'boolean',
        },
        ghMentions: {
          defaultValue: !1,
          description: 'Enables github @mentions',
          type: 'boolean',
        },
        ghMentionsLink: {
          defaultValue: 'https://github.com/{u}',
          description:
            'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
          type: 'string',
        },
        encodeEmails: {
          defaultValue: !0,
          description:
            'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
          type: 'boolean',
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          description: 'Open all links in new windows',
          type: 'boolean',
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          description: 'Support for HTML Tag escaping. ex: <div>foo</div>',
          type: 'boolean',
        },
        emoji: {
          defaultValue: !1,
          description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
          type: 'boolean',
        },
        underline: {
          defaultValue: !1,
          description:
            'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
          type: 'boolean',
        },
        completeHTMLDocument: {
          defaultValue: !1,
          description:
            'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
          type: 'boolean',
        },
        metadata: {
          defaultValue: !1,
          description:
            'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
          type: 'boolean',
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          description: 'Split adjacent blockquote blocks',
          type: 'boolean',
        },
      }
      if (!1 === e) return JSON.parse(JSON.stringify(t))
      var n = {}
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue)
      return n
    }
    var t = {},
      n = {},
      r = {},
      i = e(!0),
      o = 'vanilla',
      a = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0,
        },
        original: { noHeaderId: !0, ghCodeBlocks: !1 },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0,
        },
        vanilla: e(!0),
        allOn: (function () {
          var t = e(!0),
            n = {}
          for (var r in t) t.hasOwnProperty(r) && (n[r] = !0)
          return n
        })(),
      }
    function s(e, n) {
      var r = n
          ? 'Error in ' + n + ' extension->'
          : 'Error in unnamed extension',
        i = { valid: !0, error: '' }
      t.helper.isArray(e) || (e = [e])
      for (var o = 0; o < e.length; ++o) {
        var a = r + ' sub-extension ' + o + ': ',
          s = e[o]
        if ('object' != typeof s)
          return (
            (i.valid = !1),
            (i.error = a + 'must be an object, but ' + typeof s + ' given'),
            i
          )
        if (!t.helper.isString(s.type))
          return (
            (i.valid = !1),
            (i.error =
              a +
              'property "type" must be a string, but ' +
              typeof s.type +
              ' given'),
            i
          )
        var u = (s.type = s.type.toLowerCase())
        if (
          ('language' === u && (u = s.type = 'lang'),
          'html' === u && (u = s.type = 'output'),
          'lang' !== u && 'output' !== u && 'listener' !== u)
        )
          return (
            (i.valid = !1),
            (i.error =
              a +
              'type ' +
              u +
              ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
            i
          )
        if ('listener' === u) {
          if (t.helper.isUndefined(s.listeners))
            return (
              (i.valid = !1),
              (i.error =
                a +
                '. Extensions of type "listener" must have a property called "listeners"'),
              i
            )
        } else if (
          t.helper.isUndefined(s.filter) &&
          t.helper.isUndefined(s.regex)
        )
          return (
            (i.valid = !1),
            (i.error =
              a +
              u +
              ' extensions must define either a "regex" property or a "filter" method'),
            i
          )
        if (s.listeners) {
          if ('object' != typeof s.listeners)
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"listeners" property must be an object but ' +
                typeof s.listeners +
                ' given'),
              i
            )
          for (var c in s.listeners)
            if (
              s.listeners.hasOwnProperty(c) &&
              'function' != typeof s.listeners[c]
            )
              return (
                (i.valid = !1),
                (i.error =
                  a +
                  '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                  c +
                  ' must be a function but ' +
                  typeof s.listeners[c] +
                  ' given'),
                i
              )
        }
        if (s.filter) {
          if ('function' != typeof s.filter)
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"filter" must be a function, but ' +
                typeof s.filter +
                ' given'),
              i
            )
        } else if (s.regex) {
          if (
            (t.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, 'g')),
            !(s.regex instanceof RegExp))
          )
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"regex" property must either be a string or a RegExp object, but ' +
                typeof s.regex +
                ' given'),
              i
            )
          if (t.helper.isUndefined(s.replace))
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"regex" extensions must implement a replace string or function'),
              i
            )
        }
      }
      return i
    }
    function u(e, t) {
      return '¨E' + t.charCodeAt(0) + 'E'
    }
    ;(t.helper = {}),
      (t.extensions = {}),
      (t.setOption = function (e, t) {
        return (i[e] = t), this
      }),
      (t.getOption = function (e) {
        return i[e]
      }),
      (t.getOptions = function () {
        return i
      }),
      (t.resetOptions = function () {
        i = e(!0)
      }),
      (t.setFlavor = function (e) {
        if (!a.hasOwnProperty(e)) throw Error(e + ' flavor was not found')
        t.resetOptions()
        var n = a[e]
        for (var r in ((o = e), n)) n.hasOwnProperty(r) && (i[r] = n[r])
      }),
      (t.getFlavor = function () {
        return o
      }),
      (t.getFlavorOptions = function (e) {
        if (a.hasOwnProperty(e)) return a[e]
      }),
      (t.getDefaultOptions = function (t) {
        return e(t)
      }),
      (t.subParser = function (e, r) {
        if (t.helper.isString(e)) {
          if (void 0 === r) {
            if (n.hasOwnProperty(e)) return n[e]
            throw Error('SubParser named ' + e + ' not registered!')
          }
          n[e] = r
        }
      }),
      (t.extension = function (e, n) {
        if (!t.helper.isString(e))
          throw Error("Extension 'name' must be a string")
        if (((e = t.helper.stdExtName(e)), t.helper.isUndefined(n))) {
          if (!r.hasOwnProperty(e))
            throw Error('Extension named ' + e + ' is not registered!')
          return r[e]
        }
        'function' == typeof n && (n = n()), t.helper.isArray(n) || (n = [n])
        var i = s(n, e)
        if (!i.valid) throw Error(i.error)
        r[e] = n
      }),
      (t.getAllExtensions = function () {
        return r
      }),
      (t.removeExtension = function (e) {
        delete r[e]
      }),
      (t.resetExtensions = function () {
        r = {}
      }),
      (t.validateExtension = function (e) {
        var t = s(e, null)
        return !!t.valid || (console.warn(t.error), !1)
      }),
      t.hasOwnProperty('helper') || (t.helper = {}),
      (t.helper.isString = function (e) {
        return 'string' == typeof e || e instanceof String
      }),
      (t.helper.isFunction = function (e) {
        return e && '[object Function]' === {}.toString.call(e)
      }),
      (t.helper.isArray = function (e) {
        return Array.isArray(e)
      }),
      (t.helper.isUndefined = function (e) {
        return void 0 === e
      }),
      (t.helper.forEach = function (e, n) {
        if (t.helper.isUndefined(e)) throw new Error('obj param is required')
        if (t.helper.isUndefined(n))
          throw new Error('callback param is required')
        if (!t.helper.isFunction(n))
          throw new Error('callback param must be a function/closure')
        if ('function' == typeof e.forEach) e.forEach(n)
        else if (t.helper.isArray(e))
          for (var r = 0; r < e.length; r++) n(e[r], r, e)
        else {
          if ('object' != typeof e)
            throw new Error(
              'obj does not seem to be an array or an iterable object'
            )
          for (var i in e) e.hasOwnProperty(i) && n(e[i], i, e)
        }
      }),
      (t.helper.stdExtName = function (e) {
        return e
          .replace(/[_?*+\/\\.^-]/g, '')
          .replace(/\s/g, '')
          .toLowerCase()
      }),
      (t.helper.escapeCharactersCallback = u),
      (t.helper.escapeCharacters = function (e, t, n) {
        var r = '([' + t.replace(/([\[\]\\])/g, '\\$1') + '])'
        n && (r = '\\\\' + r)
        var i = new RegExp(r, 'g')
        return (e = e.replace(i, u))
      }),
      (t.helper.unescapeHTMLEntities = function (e) {
        return e
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
      })
    var c = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        c = r || '',
        l = c.indexOf('g') > -1,
        d = new RegExp(t + '|' + n, 'g' + c.replace(/g/g, '')),
        h = new RegExp(t, c.replace(/g/g, '')),
        p = []
      do {
        for (i = 0; (a = d.exec(e)); )
          if (h.test(a[0])) i++ || (s = (o = d.lastIndex) - a[0].length)
          else if (i && !--i) {
            u = a.index + a[0].length
            var f = {
              left: { start: s, end: o },
              match: { start: o, end: a.index },
              right: { start: a.index, end: u },
              wholeMatch: { start: s, end: u },
            }
            if ((p.push(f), !l)) return p
          }
      } while (i && (d.lastIndex = o))
      return p
    }
    ;(t.helper.matchRecursiveRegExp = function (e, t, n, r) {
      for (var i = c(e, t, n, r), o = [], a = 0; a < i.length; ++a)
        o.push([
          e.slice(i[a].wholeMatch.start, i[a].wholeMatch.end),
          e.slice(i[a].match.start, i[a].match.end),
          e.slice(i[a].left.start, i[a].left.end),
          e.slice(i[a].right.start, i[a].right.end),
        ])
      return o
    }),
      (t.helper.replaceRecursiveRegExp = function (e, n, r, i, o) {
        if (!t.helper.isFunction(n)) {
          var a = n
          n = function () {
            return a
          }
        }
        var s = c(e, r, i, o),
          u = e,
          l = s.length
        if (l > 0) {
          var d = []
          0 !== s[0].wholeMatch.start &&
            d.push(e.slice(0, s[0].wholeMatch.start))
          for (var h = 0; h < l; ++h)
            d.push(
              n(
                e.slice(s[h].wholeMatch.start, s[h].wholeMatch.end),
                e.slice(s[h].match.start, s[h].match.end),
                e.slice(s[h].left.start, s[h].left.end),
                e.slice(s[h].right.start, s[h].right.end)
              )
            ),
              h < l - 1 &&
                d.push(e.slice(s[h].wholeMatch.end, s[h + 1].wholeMatch.start))
          s[l - 1].wholeMatch.end < e.length &&
            d.push(e.slice(s[l - 1].wholeMatch.end)),
            (u = d.join(''))
        }
        return u
      }),
      (t.helper.regexIndexOf = function (e, n, r) {
        if (!t.helper.isString(e))
          throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string'
        if (n instanceof RegExp == !1)
          throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp'
        var i = e.substring(r || 0).search(n)
        return i >= 0 ? i + (r || 0) : i
      }),
      (t.helper.splitAtIndex = function (e, n) {
        if (!t.helper.isString(e))
          throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string'
        return [e.substring(0, n), e.substring(n)]
      }),
      (t.helper.encodeEmailAddress = function (e) {
        var t = [
          function (e) {
            return '&#' + e.charCodeAt(0) + ';'
          },
          function (e) {
            return '&#x' + e.charCodeAt(0).toString(16) + ';'
          },
          function (e) {
            return e
          },
        ]
        return (e = e.replace(/./g, function (e) {
          if ('@' === e) e = t[Math.floor(2 * Math.random())](e)
          else {
            var n = Math.random()
            e = n > 0.9 ? t[2](e) : n > 0.45 ? t[1](e) : t[0](e)
          }
          return e
        }))
      }),
      (t.helper.padEnd = function (e, t, n) {
        return (
          (t >>= 0),
          (n = String(n || ' ')),
          e.length > t
            ? String(e)
            : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)),
              String(e) + n.slice(0, t))
        )
      }),
      'undefined' == typeof console &&
        (console = {
          warn: function (e) {
            alert(e)
          },
          log: function (e) {
            alert(e)
          },
          error: function (e) {
            throw e
          },
        }),
      (t.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
      (t.helper.emojis = {
        '+1': '👍',
        '-1': '👎',
        100: '💯',
        1234: '🔢',
        '1st_place_medal': '🥇',
        '2nd_place_medal': '🥈',
        '3rd_place_medal': '🥉',
        '8ball': '🎱',
        a: '🅰️',
        ab: '🆎',
        abc: '🔤',
        abcd: '🔡',
        accept: '🉑',
        aerial_tramway: '🚡',
        airplane: '✈️',
        alarm_clock: '⏰',
        alembic: '⚗️',
        alien: '👽',
        ambulance: '🚑',
        amphora: '🏺',
        anchor: '⚓️',
        angel: '👼',
        anger: '💢',
        angry: '😠',
        anguished: '😧',
        ant: '🐜',
        apple: '🍎',
        aquarius: '♒️',
        aries: '♈️',
        arrow_backward: '◀️',
        arrow_double_down: '⏬',
        arrow_double_up: '⏫',
        arrow_down: '⬇️',
        arrow_down_small: '🔽',
        arrow_forward: '▶️',
        arrow_heading_down: '⤵️',
        arrow_heading_up: '⤴️',
        arrow_left: '⬅️',
        arrow_lower_left: '↙️',
        arrow_lower_right: '↘️',
        arrow_right: '➡️',
        arrow_right_hook: '↪️',
        arrow_up: '⬆️',
        arrow_up_down: '↕️',
        arrow_up_small: '🔼',
        arrow_upper_left: '↖️',
        arrow_upper_right: '↗️',
        arrows_clockwise: '🔃',
        arrows_counterclockwise: '🔄',
        art: '🎨',
        articulated_lorry: '🚛',
        artificial_satellite: '🛰',
        astonished: '😲',
        athletic_shoe: '👟',
        atm: '🏧',
        atom_symbol: '⚛️',
        avocado: '🥑',
        b: '🅱️',
        baby: '👶',
        baby_bottle: '🍼',
        baby_chick: '🐤',
        baby_symbol: '🚼',
        back: '🔙',
        bacon: '🥓',
        badminton: '🏸',
        baggage_claim: '🛄',
        baguette_bread: '🥖',
        balance_scale: '⚖️',
        balloon: '🎈',
        ballot_box: '🗳',
        ballot_box_with_check: '☑️',
        bamboo: '🎍',
        banana: '🍌',
        bangbang: '‼️',
        bank: '🏦',
        bar_chart: '📊',
        barber: '💈',
        baseball: '⚾️',
        basketball: '🏀',
        basketball_man: '⛹️',
        basketball_woman: '⛹️&zwj;♀️',
        bat: '🦇',
        bath: '🛀',
        bathtub: '🛁',
        battery: '🔋',
        beach_umbrella: '🏖',
        bear: '🐻',
        bed: '🛏',
        bee: '🐝',
        beer: '🍺',
        beers: '🍻',
        beetle: '🐞',
        beginner: '🔰',
        bell: '🔔',
        bellhop_bell: '🛎',
        bento: '🍱',
        biking_man: '🚴',
        bike: '🚲',
        biking_woman: '🚴&zwj;♀️',
        bikini: '👙',
        biohazard: '☣️',
        bird: '🐦',
        birthday: '🎂',
        black_circle: '⚫️',
        black_flag: '🏴',
        black_heart: '🖤',
        black_joker: '🃏',
        black_large_square: '⬛️',
        black_medium_small_square: '◾️',
        black_medium_square: '◼️',
        black_nib: '✒️',
        black_small_square: '▪️',
        black_square_button: '🔲',
        blonde_man: '👱',
        blonde_woman: '👱&zwj;♀️',
        blossom: '🌼',
        blowfish: '🐡',
        blue_book: '📘',
        blue_car: '🚙',
        blue_heart: '💙',
        blush: '😊',
        boar: '🐗',
        boat: '⛵️',
        bomb: '💣',
        book: '📖',
        bookmark: '🔖',
        bookmark_tabs: '📑',
        books: '📚',
        boom: '💥',
        boot: '👢',
        bouquet: '💐',
        bowing_man: '🙇',
        bow_and_arrow: '🏹',
        bowing_woman: '🙇&zwj;♀️',
        bowling: '🎳',
        boxing_glove: '🥊',
        boy: '👦',
        bread: '🍞',
        bride_with_veil: '👰',
        bridge_at_night: '🌉',
        briefcase: '💼',
        broken_heart: '💔',
        bug: '🐛',
        building_construction: '🏗',
        bulb: '💡',
        bullettrain_front: '🚅',
        bullettrain_side: '🚄',
        burrito: '🌯',
        bus: '🚌',
        business_suit_levitating: '🕴',
        busstop: '🚏',
        bust_in_silhouette: '👤',
        busts_in_silhouette: '👥',
        butterfly: '🦋',
        cactus: '🌵',
        cake: '🍰',
        calendar: '📆',
        call_me_hand: '🤙',
        calling: '📲',
        camel: '🐫',
        camera: '📷',
        camera_flash: '📸',
        camping: '🏕',
        cancer: '♋️',
        candle: '🕯',
        candy: '🍬',
        canoe: '🛶',
        capital_abcd: '🔠',
        capricorn: '♑️',
        car: '🚗',
        card_file_box: '🗃',
        card_index: '📇',
        card_index_dividers: '🗂',
        carousel_horse: '🎠',
        carrot: '🥕',
        cat: '🐱',
        cat2: '🐈',
        cd: '💿',
        chains: '⛓',
        champagne: '🍾',
        chart: '💹',
        chart_with_downwards_trend: '📉',
        chart_with_upwards_trend: '📈',
        checkered_flag: '🏁',
        cheese: '🧀',
        cherries: '🍒',
        cherry_blossom: '🌸',
        chestnut: '🌰',
        chicken: '🐔',
        children_crossing: '🚸',
        chipmunk: '🐿',
        chocolate_bar: '🍫',
        christmas_tree: '🎄',
        church: '⛪️',
        cinema: '🎦',
        circus_tent: '🎪',
        city_sunrise: '🌇',
        city_sunset: '🌆',
        cityscape: '🏙',
        cl: '🆑',
        clamp: '🗜',
        clap: '👏',
        clapper: '🎬',
        classical_building: '🏛',
        clinking_glasses: '🥂',
        clipboard: '📋',
        clock1: '🕐',
        clock10: '🕙',
        clock1030: '🕥',
        clock11: '🕚',
        clock1130: '🕦',
        clock12: '🕛',
        clock1230: '🕧',
        clock130: '🕜',
        clock2: '🕑',
        clock230: '🕝',
        clock3: '🕒',
        clock330: '🕞',
        clock4: '🕓',
        clock430: '🕟',
        clock5: '🕔',
        clock530: '🕠',
        clock6: '🕕',
        clock630: '🕡',
        clock7: '🕖',
        clock730: '🕢',
        clock8: '🕗',
        clock830: '🕣',
        clock9: '🕘',
        clock930: '🕤',
        closed_book: '📕',
        closed_lock_with_key: '🔐',
        closed_umbrella: '🌂',
        cloud: '☁️',
        cloud_with_lightning: '🌩',
        cloud_with_lightning_and_rain: '⛈',
        cloud_with_rain: '🌧',
        cloud_with_snow: '🌨',
        clown_face: '🤡',
        clubs: '♣️',
        cocktail: '🍸',
        coffee: '☕️',
        coffin: '⚰️',
        cold_sweat: '😰',
        comet: '☄️',
        computer: '💻',
        computer_mouse: '🖱',
        confetti_ball: '🎊',
        confounded: '😖',
        confused: '😕',
        congratulations: '㊗️',
        construction: '🚧',
        construction_worker_man: '👷',
        construction_worker_woman: '👷&zwj;♀️',
        control_knobs: '🎛',
        convenience_store: '🏪',
        cookie: '🍪',
        cool: '🆒',
        policeman: '👮',
        copyright: '©️',
        corn: '🌽',
        couch_and_lamp: '🛋',
        couple: '👫',
        couple_with_heart_woman_man: '💑',
        couple_with_heart_man_man: '👨&zwj;❤️&zwj;👨',
        couple_with_heart_woman_woman: '👩&zwj;❤️&zwj;👩',
        couplekiss_man_man: '👨&zwj;❤️&zwj;💋&zwj;👨',
        couplekiss_man_woman: '💏',
        couplekiss_woman_woman: '👩&zwj;❤️&zwj;💋&zwj;👩',
        cow: '🐮',
        cow2: '🐄',
        cowboy_hat_face: '🤠',
        crab: '🦀',
        crayon: '🖍',
        credit_card: '💳',
        crescent_moon: '🌙',
        cricket: '🏏',
        crocodile: '🐊',
        croissant: '🥐',
        crossed_fingers: '🤞',
        crossed_flags: '🎌',
        crossed_swords: '⚔️',
        crown: '👑',
        cry: '😢',
        crying_cat_face: '😿',
        crystal_ball: '🔮',
        cucumber: '🥒',
        cupid: '💘',
        curly_loop: '➰',
        currency_exchange: '💱',
        curry: '🍛',
        custard: '🍮',
        customs: '🛃',
        cyclone: '🌀',
        dagger: '🗡',
        dancer: '💃',
        dancing_women: '👯',
        dancing_men: '👯&zwj;♂️',
        dango: '🍡',
        dark_sunglasses: '🕶',
        dart: '🎯',
        dash: '💨',
        date: '📅',
        deciduous_tree: '🌳',
        deer: '🦌',
        department_store: '🏬',
        derelict_house: '🏚',
        desert: '🏜',
        desert_island: '🏝',
        desktop_computer: '🖥',
        male_detective: '🕵️',
        diamond_shape_with_a_dot_inside: '💠',
        diamonds: '♦️',
        disappointed: '😞',
        disappointed_relieved: '😥',
        dizzy: '💫',
        dizzy_face: '😵',
        do_not_litter: '🚯',
        dog: '🐶',
        dog2: '🐕',
        dollar: '💵',
        dolls: '🎎',
        dolphin: '🐬',
        door: '🚪',
        doughnut: '🍩',
        dove: '🕊',
        dragon: '🐉',
        dragon_face: '🐲',
        dress: '👗',
        dromedary_camel: '🐪',
        drooling_face: '🤤',
        droplet: '💧',
        drum: '🥁',
        duck: '🦆',
        dvd: '📀',
        'e-mail': '📧',
        eagle: '🦅',
        ear: '👂',
        ear_of_rice: '🌾',
        earth_africa: '🌍',
        earth_americas: '🌎',
        earth_asia: '🌏',
        egg: '🥚',
        eggplant: '🍆',
        eight_pointed_black_star: '✴️',
        eight_spoked_asterisk: '✳️',
        electric_plug: '🔌',
        elephant: '🐘',
        email: '✉️',
        end: '🔚',
        envelope_with_arrow: '📩',
        euro: '💶',
        european_castle: '🏰',
        european_post_office: '🏤',
        evergreen_tree: '🌲',
        exclamation: '❗️',
        expressionless: '😑',
        eye: '👁',
        eye_speech_bubble: '👁&zwj;🗨',
        eyeglasses: '👓',
        eyes: '👀',
        face_with_head_bandage: '🤕',
        face_with_thermometer: '🤒',
        fist_oncoming: '👊',
        factory: '🏭',
        fallen_leaf: '🍂',
        family_man_woman_boy: '👪',
        family_man_boy: '👨&zwj;👦',
        family_man_boy_boy: '👨&zwj;👦&zwj;👦',
        family_man_girl: '👨&zwj;👧',
        family_man_girl_boy: '👨&zwj;👧&zwj;👦',
        family_man_girl_girl: '👨&zwj;👧&zwj;👧',
        family_man_man_boy: '👨&zwj;👨&zwj;👦',
        family_man_man_boy_boy: '👨&zwj;👨&zwj;👦&zwj;👦',
        family_man_man_girl: '👨&zwj;👨&zwj;👧',
        family_man_man_girl_boy: '👨&zwj;👨&zwj;👧&zwj;👦',
        family_man_man_girl_girl: '👨&zwj;👨&zwj;👧&zwj;👧',
        family_man_woman_boy_boy: '👨&zwj;👩&zwj;👦&zwj;👦',
        family_man_woman_girl: '👨&zwj;👩&zwj;👧',
        family_man_woman_girl_boy: '👨&zwj;👩&zwj;👧&zwj;👦',
        family_man_woman_girl_girl: '👨&zwj;👩&zwj;👧&zwj;👧',
        family_woman_boy: '👩&zwj;👦',
        family_woman_boy_boy: '👩&zwj;👦&zwj;👦',
        family_woman_girl: '👩&zwj;👧',
        family_woman_girl_boy: '👩&zwj;👧&zwj;👦',
        family_woman_girl_girl: '👩&zwj;👧&zwj;👧',
        family_woman_woman_boy: '👩&zwj;👩&zwj;👦',
        family_woman_woman_boy_boy: '👩&zwj;👩&zwj;👦&zwj;👦',
        family_woman_woman_girl: '👩&zwj;👩&zwj;👧',
        family_woman_woman_girl_boy: '👩&zwj;👩&zwj;👧&zwj;👦',
        family_woman_woman_girl_girl: '👩&zwj;👩&zwj;👧&zwj;👧',
        fast_forward: '⏩',
        fax: '📠',
        fearful: '😨',
        feet: '🐾',
        female_detective: '🕵️&zwj;♀️',
        ferris_wheel: '🎡',
        ferry: '⛴',
        field_hockey: '🏑',
        file_cabinet: '🗄',
        file_folder: '📁',
        film_projector: '📽',
        film_strip: '🎞',
        fire: '🔥',
        fire_engine: '🚒',
        fireworks: '🎆',
        first_quarter_moon: '🌓',
        first_quarter_moon_with_face: '🌛',
        fish: '🐟',
        fish_cake: '🍥',
        fishing_pole_and_fish: '🎣',
        fist_raised: '✊',
        fist_left: '🤛',
        fist_right: '🤜',
        flags: '🎏',
        flashlight: '🔦',
        fleur_de_lis: '⚜️',
        flight_arrival: '🛬',
        flight_departure: '🛫',
        floppy_disk: '💾',
        flower_playing_cards: '🎴',
        flushed: '😳',
        fog: '🌫',
        foggy: '🌁',
        football: '🏈',
        footprints: '👣',
        fork_and_knife: '🍴',
        fountain: '⛲️',
        fountain_pen: '🖋',
        four_leaf_clover: '🍀',
        fox_face: '🦊',
        framed_picture: '🖼',
        free: '🆓',
        fried_egg: '🍳',
        fried_shrimp: '🍤',
        fries: '🍟',
        frog: '🐸',
        frowning: '😦',
        frowning_face: '☹️',
        frowning_man: '🙍&zwj;♂️',
        frowning_woman: '🙍',
        middle_finger: '🖕',
        fuelpump: '⛽️',
        full_moon: '🌕',
        full_moon_with_face: '🌝',
        funeral_urn: '⚱️',
        game_die: '🎲',
        gear: '⚙️',
        gem: '💎',
        gemini: '♊️',
        ghost: '👻',
        gift: '🎁',
        gift_heart: '💝',
        girl: '👧',
        globe_with_meridians: '🌐',
        goal_net: '🥅',
        goat: '🐐',
        golf: '⛳️',
        golfing_man: '🏌️',
        golfing_woman: '🏌️&zwj;♀️',
        gorilla: '🦍',
        grapes: '🍇',
        green_apple: '🍏',
        green_book: '📗',
        green_heart: '💚',
        green_salad: '🥗',
        grey_exclamation: '❕',
        grey_question: '❔',
        grimacing: '😬',
        grin: '😁',
        grinning: '😀',
        guardsman: '💂',
        guardswoman: '💂&zwj;♀️',
        guitar: '🎸',
        gun: '🔫',
        haircut_woman: '💇',
        haircut_man: '💇&zwj;♂️',
        hamburger: '🍔',
        hammer: '🔨',
        hammer_and_pick: '⚒',
        hammer_and_wrench: '🛠',
        hamster: '🐹',
        hand: '✋',
        handbag: '👜',
        handshake: '🤝',
        hankey: '💩',
        hatched_chick: '🐥',
        hatching_chick: '🐣',
        headphones: '🎧',
        hear_no_evil: '🙉',
        heart: '❤️',
        heart_decoration: '💟',
        heart_eyes: '😍',
        heart_eyes_cat: '😻',
        heartbeat: '💓',
        heartpulse: '💗',
        hearts: '♥️',
        heavy_check_mark: '✔️',
        heavy_division_sign: '➗',
        heavy_dollar_sign: '💲',
        heavy_heart_exclamation: '❣️',
        heavy_minus_sign: '➖',
        heavy_multiplication_x: '✖️',
        heavy_plus_sign: '➕',
        helicopter: '🚁',
        herb: '🌿',
        hibiscus: '🌺',
        high_brightness: '🔆',
        high_heel: '👠',
        hocho: '🔪',
        hole: '🕳',
        honey_pot: '🍯',
        horse: '🐴',
        horse_racing: '🏇',
        hospital: '🏥',
        hot_pepper: '🌶',
        hotdog: '🌭',
        hotel: '🏨',
        hotsprings: '♨️',
        hourglass: '⌛️',
        hourglass_flowing_sand: '⏳',
        house: '🏠',
        house_with_garden: '🏡',
        houses: '🏘',
        hugs: '🤗',
        hushed: '😯',
        ice_cream: '🍨',
        ice_hockey: '🏒',
        ice_skate: '⛸',
        icecream: '🍦',
        id: '🆔',
        ideograph_advantage: '🉐',
        imp: '👿',
        inbox_tray: '📥',
        incoming_envelope: '📨',
        tipping_hand_woman: '💁',
        information_source: 'ℹ️',
        innocent: '😇',
        interrobang: '⁉️',
        iphone: '📱',
        izakaya_lantern: '🏮',
        jack_o_lantern: '🎃',
        japan: '🗾',
        japanese_castle: '🏯',
        japanese_goblin: '👺',
        japanese_ogre: '👹',
        jeans: '👖',
        joy: '😂',
        joy_cat: '😹',
        joystick: '🕹',
        kaaba: '🕋',
        key: '🔑',
        keyboard: '⌨️',
        keycap_ten: '🔟',
        kick_scooter: '🛴',
        kimono: '👘',
        kiss: '💋',
        kissing: '😗',
        kissing_cat: '😽',
        kissing_closed_eyes: '😚',
        kissing_heart: '😘',
        kissing_smiling_eyes: '😙',
        kiwi_fruit: '🥝',
        koala: '🐨',
        koko: '🈁',
        label: '🏷',
        large_blue_circle: '🔵',
        large_blue_diamond: '🔷',
        large_orange_diamond: '🔶',
        last_quarter_moon: '🌗',
        last_quarter_moon_with_face: '🌜',
        latin_cross: '✝️',
        laughing: '😆',
        leaves: '🍃',
        ledger: '📒',
        left_luggage: '🛅',
        left_right_arrow: '↔️',
        leftwards_arrow_with_hook: '↩️',
        lemon: '🍋',
        leo: '♌️',
        leopard: '🐆',
        level_slider: '🎚',
        libra: '♎️',
        light_rail: '🚈',
        link: '🔗',
        lion: '🦁',
        lips: '👄',
        lipstick: '💄',
        lizard: '🦎',
        lock: '🔒',
        lock_with_ink_pen: '🔏',
        lollipop: '🍭',
        loop: '➿',
        loud_sound: '🔊',
        loudspeaker: '📢',
        love_hotel: '🏩',
        love_letter: '💌',
        low_brightness: '🔅',
        lying_face: '🤥',
        m: 'Ⓜ️',
        mag: '🔍',
        mag_right: '🔎',
        mahjong: '🀄️',
        mailbox: '📫',
        mailbox_closed: '📪',
        mailbox_with_mail: '📬',
        mailbox_with_no_mail: '📭',
        man: '👨',
        man_artist: '👨&zwj;🎨',
        man_astronaut: '👨&zwj;🚀',
        man_cartwheeling: '🤸&zwj;♂️',
        man_cook: '👨&zwj;🍳',
        man_dancing: '🕺',
        man_facepalming: '🤦&zwj;♂️',
        man_factory_worker: '👨&zwj;🏭',
        man_farmer: '👨&zwj;🌾',
        man_firefighter: '👨&zwj;🚒',
        man_health_worker: '👨&zwj;⚕️',
        man_in_tuxedo: '🤵',
        man_judge: '👨&zwj;⚖️',
        man_juggling: '🤹&zwj;♂️',
        man_mechanic: '👨&zwj;🔧',
        man_office_worker: '👨&zwj;💼',
        man_pilot: '👨&zwj;✈️',
        man_playing_handball: '🤾&zwj;♂️',
        man_playing_water_polo: '🤽&zwj;♂️',
        man_scientist: '👨&zwj;🔬',
        man_shrugging: '🤷&zwj;♂️',
        man_singer: '👨&zwj;🎤',
        man_student: '👨&zwj;🎓',
        man_teacher: '👨&zwj;🏫',
        man_technologist: '👨&zwj;💻',
        man_with_gua_pi_mao: '👲',
        man_with_turban: '👳',
        tangerine: '🍊',
        mans_shoe: '👞',
        mantelpiece_clock: '🕰',
        maple_leaf: '🍁',
        martial_arts_uniform: '🥋',
        mask: '😷',
        massage_woman: '💆',
        massage_man: '💆&zwj;♂️',
        meat_on_bone: '🍖',
        medal_military: '🎖',
        medal_sports: '🏅',
        mega: '📣',
        melon: '🍈',
        memo: '📝',
        men_wrestling: '🤼&zwj;♂️',
        menorah: '🕎',
        mens: '🚹',
        metal: '🤘',
        metro: '🚇',
        microphone: '🎤',
        microscope: '🔬',
        milk_glass: '🥛',
        milky_way: '🌌',
        minibus: '🚐',
        minidisc: '💽',
        mobile_phone_off: '📴',
        money_mouth_face: '🤑',
        money_with_wings: '💸',
        moneybag: '💰',
        monkey: '🐒',
        monkey_face: '🐵',
        monorail: '🚝',
        moon: '🌔',
        mortar_board: '🎓',
        mosque: '🕌',
        motor_boat: '🛥',
        motor_scooter: '🛵',
        motorcycle: '🏍',
        motorway: '🛣',
        mount_fuji: '🗻',
        mountain: '⛰',
        mountain_biking_man: '🚵',
        mountain_biking_woman: '🚵&zwj;♀️',
        mountain_cableway: '🚠',
        mountain_railway: '🚞',
        mountain_snow: '🏔',
        mouse: '🐭',
        mouse2: '🐁',
        movie_camera: '🎥',
        moyai: '🗿',
        mrs_claus: '🤶',
        muscle: '💪',
        mushroom: '🍄',
        musical_keyboard: '🎹',
        musical_note: '🎵',
        musical_score: '🎼',
        mute: '🔇',
        nail_care: '💅',
        name_badge: '📛',
        national_park: '🏞',
        nauseated_face: '🤢',
        necktie: '👔',
        negative_squared_cross_mark: '❎',
        nerd_face: '🤓',
        neutral_face: '😐',
        new: '🆕',
        new_moon: '🌑',
        new_moon_with_face: '🌚',
        newspaper: '📰',
        newspaper_roll: '🗞',
        next_track_button: '⏭',
        ng: '🆖',
        no_good_man: '🙅&zwj;♂️',
        no_good_woman: '🙅',
        night_with_stars: '🌃',
        no_bell: '🔕',
        no_bicycles: '🚳',
        no_entry: '⛔️',
        no_entry_sign: '🚫',
        no_mobile_phones: '📵',
        no_mouth: '😶',
        no_pedestrians: '🚷',
        no_smoking: '🚭',
        'non-potable_water': '🚱',
        nose: '👃',
        notebook: '📓',
        notebook_with_decorative_cover: '📔',
        notes: '🎶',
        nut_and_bolt: '🔩',
        o: '⭕️',
        o2: '🅾️',
        ocean: '🌊',
        octopus: '🐙',
        oden: '🍢',
        office: '🏢',
        oil_drum: '🛢',
        ok: '🆗',
        ok_hand: '👌',
        ok_man: '🙆&zwj;♂️',
        ok_woman: '🙆',
        old_key: '🗝',
        older_man: '👴',
        older_woman: '👵',
        om: '🕉',
        on: '🔛',
        oncoming_automobile: '🚘',
        oncoming_bus: '🚍',
        oncoming_police_car: '🚔',
        oncoming_taxi: '🚖',
        open_file_folder: '📂',
        open_hands: '👐',
        open_mouth: '😮',
        open_umbrella: '☂️',
        ophiuchus: '⛎',
        orange_book: '📙',
        orthodox_cross: '☦️',
        outbox_tray: '📤',
        owl: '🦉',
        ox: '🐂',
        package: '📦',
        page_facing_up: '📄',
        page_with_curl: '📃',
        pager: '📟',
        paintbrush: '🖌',
        palm_tree: '🌴',
        pancakes: '🥞',
        panda_face: '🐼',
        paperclip: '📎',
        paperclips: '🖇',
        parasol_on_ground: '⛱',
        parking: '🅿️',
        part_alternation_mark: '〽️',
        partly_sunny: '⛅️',
        passenger_ship: '🛳',
        passport_control: '🛂',
        pause_button: '⏸',
        peace_symbol: '☮️',
        peach: '🍑',
        peanuts: '🥜',
        pear: '🍐',
        pen: '🖊',
        pencil2: '✏️',
        penguin: '🐧',
        pensive: '😔',
        performing_arts: '🎭',
        persevere: '😣',
        person_fencing: '🤺',
        pouting_woman: '🙎',
        phone: '☎️',
        pick: '⛏',
        pig: '🐷',
        pig2: '🐖',
        pig_nose: '🐽',
        pill: '💊',
        pineapple: '🍍',
        ping_pong: '🏓',
        pisces: '♓️',
        pizza: '🍕',
        place_of_worship: '🛐',
        plate_with_cutlery: '🍽',
        play_or_pause_button: '⏯',
        point_down: '👇',
        point_left: '👈',
        point_right: '👉',
        point_up: '☝️',
        point_up_2: '👆',
        police_car: '🚓',
        policewoman: '👮&zwj;♀️',
        poodle: '🐩',
        popcorn: '🍿',
        post_office: '🏣',
        postal_horn: '📯',
        postbox: '📮',
        potable_water: '🚰',
        potato: '🥔',
        pouch: '👝',
        poultry_leg: '🍗',
        pound: '💷',
        rage: '😡',
        pouting_cat: '😾',
        pouting_man: '🙎&zwj;♂️',
        pray: '🙏',
        prayer_beads: '📿',
        pregnant_woman: '🤰',
        previous_track_button: '⏮',
        prince: '🤴',
        princess: '👸',
        printer: '🖨',
        purple_heart: '💜',
        purse: '👛',
        pushpin: '📌',
        put_litter_in_its_place: '🚮',
        question: '❓',
        rabbit: '🐰',
        rabbit2: '🐇',
        racehorse: '🐎',
        racing_car: '🏎',
        radio: '📻',
        radio_button: '🔘',
        radioactive: '☢️',
        railway_car: '🚃',
        railway_track: '🛤',
        rainbow: '🌈',
        rainbow_flag: '🏳️&zwj;🌈',
        raised_back_of_hand: '🤚',
        raised_hand_with_fingers_splayed: '🖐',
        raised_hands: '🙌',
        raising_hand_woman: '🙋',
        raising_hand_man: '🙋&zwj;♂️',
        ram: '🐏',
        ramen: '🍜',
        rat: '🐀',
        record_button: '⏺',
        recycle: '♻️',
        red_circle: '🔴',
        registered: '®️',
        relaxed: '☺️',
        relieved: '😌',
        reminder_ribbon: '🎗',
        repeat: '🔁',
        repeat_one: '🔂',
        rescue_worker_helmet: '⛑',
        restroom: '🚻',
        revolving_hearts: '💞',
        rewind: '⏪',
        rhinoceros: '🦏',
        ribbon: '🎀',
        rice: '🍚',
        rice_ball: '🍙',
        rice_cracker: '🍘',
        rice_scene: '🎑',
        right_anger_bubble: '🗯',
        ring: '💍',
        robot: '🤖',
        rocket: '🚀',
        rofl: '🤣',
        roll_eyes: '🙄',
        roller_coaster: '🎢',
        rooster: '🐓',
        rose: '🌹',
        rosette: '🏵',
        rotating_light: '🚨',
        round_pushpin: '📍',
        rowing_man: '🚣',
        rowing_woman: '🚣&zwj;♀️',
        rugby_football: '🏉',
        running_man: '🏃',
        running_shirt_with_sash: '🎽',
        running_woman: '🏃&zwj;♀️',
        sa: '🈂️',
        sagittarius: '♐️',
        sake: '🍶',
        sandal: '👡',
        santa: '🎅',
        satellite: '📡',
        saxophone: '🎷',
        school: '🏫',
        school_satchel: '🎒',
        scissors: '✂️',
        scorpion: '🦂',
        scorpius: '♏️',
        scream: '😱',
        scream_cat: '🙀',
        scroll: '📜',
        seat: '💺',
        secret: '㊙️',
        see_no_evil: '🙈',
        seedling: '🌱',
        selfie: '🤳',
        shallow_pan_of_food: '🥘',
        shamrock: '☘️',
        shark: '🦈',
        shaved_ice: '🍧',
        sheep: '🐑',
        shell: '🐚',
        shield: '🛡',
        shinto_shrine: '⛩',
        ship: '🚢',
        shirt: '👕',
        shopping: '🛍',
        shopping_cart: '🛒',
        shower: '🚿',
        shrimp: '🦐',
        signal_strength: '📶',
        six_pointed_star: '🔯',
        ski: '🎿',
        skier: '⛷',
        skull: '💀',
        skull_and_crossbones: '☠️',
        sleeping: '😴',
        sleeping_bed: '🛌',
        sleepy: '😪',
        slightly_frowning_face: '🙁',
        slightly_smiling_face: '🙂',
        slot_machine: '🎰',
        small_airplane: '🛩',
        small_blue_diamond: '🔹',
        small_orange_diamond: '🔸',
        small_red_triangle: '🔺',
        small_red_triangle_down: '🔻',
        smile: '😄',
        smile_cat: '😸',
        smiley: '😃',
        smiley_cat: '😺',
        smiling_imp: '😈',
        smirk: '😏',
        smirk_cat: '😼',
        smoking: '🚬',
        snail: '🐌',
        snake: '🐍',
        sneezing_face: '🤧',
        snowboarder: '🏂',
        snowflake: '❄️',
        snowman: '⛄️',
        snowman_with_snow: '☃️',
        sob: '😭',
        soccer: '⚽️',
        soon: '🔜',
        sos: '🆘',
        sound: '🔉',
        space_invader: '👾',
        spades: '♠️',
        spaghetti: '🍝',
        sparkle: '❇️',
        sparkler: '🎇',
        sparkles: '✨',
        sparkling_heart: '💖',
        speak_no_evil: '🙊',
        speaker: '🔈',
        speaking_head: '🗣',
        speech_balloon: '💬',
        speedboat: '🚤',
        spider: '🕷',
        spider_web: '🕸',
        spiral_calendar: '🗓',
        spiral_notepad: '🗒',
        spoon: '🥄',
        squid: '🦑',
        stadium: '🏟',
        star: '⭐️',
        star2: '🌟',
        star_and_crescent: '☪️',
        star_of_david: '✡️',
        stars: '🌠',
        station: '🚉',
        statue_of_liberty: '🗽',
        steam_locomotive: '🚂',
        stew: '🍲',
        stop_button: '⏹',
        stop_sign: '🛑',
        stopwatch: '⏱',
        straight_ruler: '📏',
        strawberry: '🍓',
        stuck_out_tongue: '😛',
        stuck_out_tongue_closed_eyes: '😝',
        stuck_out_tongue_winking_eye: '😜',
        studio_microphone: '🎙',
        stuffed_flatbread: '🥙',
        sun_behind_large_cloud: '🌥',
        sun_behind_rain_cloud: '🌦',
        sun_behind_small_cloud: '🌤',
        sun_with_face: '🌞',
        sunflower: '🌻',
        sunglasses: '😎',
        sunny: '☀️',
        sunrise: '🌅',
        sunrise_over_mountains: '🌄',
        surfing_man: '🏄',
        surfing_woman: '🏄&zwj;♀️',
        sushi: '🍣',
        suspension_railway: '🚟',
        sweat: '😓',
        sweat_drops: '💦',
        sweat_smile: '😅',
        sweet_potato: '🍠',
        swimming_man: '🏊',
        swimming_woman: '🏊&zwj;♀️',
        symbols: '🔣',
        synagogue: '🕍',
        syringe: '💉',
        taco: '🌮',
        tada: '🎉',
        tanabata_tree: '🎋',
        taurus: '♉️',
        taxi: '🚕',
        tea: '🍵',
        telephone_receiver: '📞',
        telescope: '🔭',
        tennis: '🎾',
        tent: '⛺️',
        thermometer: '🌡',
        thinking: '🤔',
        thought_balloon: '💭',
        ticket: '🎫',
        tickets: '🎟',
        tiger: '🐯',
        tiger2: '🐅',
        timer_clock: '⏲',
        tipping_hand_man: '💁&zwj;♂️',
        tired_face: '😫',
        tm: '™️',
        toilet: '🚽',
        tokyo_tower: '🗼',
        tomato: '🍅',
        tongue: '👅',
        top: '🔝',
        tophat: '🎩',
        tornado: '🌪',
        trackball: '🖲',
        tractor: '🚜',
        traffic_light: '🚥',
        train: '🚋',
        train2: '🚆',
        tram: '🚊',
        triangular_flag_on_post: '🚩',
        triangular_ruler: '📐',
        trident: '🔱',
        triumph: '😤',
        trolleybus: '🚎',
        trophy: '🏆',
        tropical_drink: '🍹',
        tropical_fish: '🐠',
        truck: '🚚',
        trumpet: '🎺',
        tulip: '🌷',
        tumbler_glass: '🥃',
        turkey: '🦃',
        turtle: '🐢',
        tv: '📺',
        twisted_rightwards_arrows: '🔀',
        two_hearts: '💕',
        two_men_holding_hands: '👬',
        two_women_holding_hands: '👭',
        u5272: '🈹',
        u5408: '🈴',
        u55b6: '🈺',
        u6307: '🈯️',
        u6708: '🈷️',
        u6709: '🈶',
        u6e80: '🈵',
        u7121: '🈚️',
        u7533: '🈸',
        u7981: '🈲',
        u7a7a: '🈳',
        umbrella: '☔️',
        unamused: '😒',
        underage: '🔞',
        unicorn: '🦄',
        unlock: '🔓',
        up: '🆙',
        upside_down_face: '🙃',
        v: '✌️',
        vertical_traffic_light: '🚦',
        vhs: '📼',
        vibration_mode: '📳',
        video_camera: '📹',
        video_game: '🎮',
        violin: '🎻',
        virgo: '♍️',
        volcano: '🌋',
        volleyball: '🏐',
        vs: '🆚',
        vulcan_salute: '🖖',
        walking_man: '🚶',
        walking_woman: '🚶&zwj;♀️',
        waning_crescent_moon: '🌘',
        waning_gibbous_moon: '🌖',
        warning: '⚠️',
        wastebasket: '🗑',
        watch: '⌚️',
        water_buffalo: '🐃',
        watermelon: '🍉',
        wave: '👋',
        wavy_dash: '〰️',
        waxing_crescent_moon: '🌒',
        wc: '🚾',
        weary: '😩',
        wedding: '💒',
        weight_lifting_man: '🏋️',
        weight_lifting_woman: '🏋️&zwj;♀️',
        whale: '🐳',
        whale2: '🐋',
        wheel_of_dharma: '☸️',
        wheelchair: '♿️',
        white_check_mark: '✅',
        white_circle: '⚪️',
        white_flag: '🏳️',
        white_flower: '💮',
        white_large_square: '⬜️',
        white_medium_small_square: '◽️',
        white_medium_square: '◻️',
        white_small_square: '▫️',
        white_square_button: '🔳',
        wilted_flower: '🥀',
        wind_chime: '🎐',
        wind_face: '🌬',
        wine_glass: '🍷',
        wink: '😉',
        wolf: '🐺',
        woman: '👩',
        woman_artist: '👩&zwj;🎨',
        woman_astronaut: '👩&zwj;🚀',
        woman_cartwheeling: '🤸&zwj;♀️',
        woman_cook: '👩&zwj;🍳',
        woman_facepalming: '🤦&zwj;♀️',
        woman_factory_worker: '👩&zwj;🏭',
        woman_farmer: '👩&zwj;🌾',
        woman_firefighter: '👩&zwj;🚒',
        woman_health_worker: '👩&zwj;⚕️',
        woman_judge: '👩&zwj;⚖️',
        woman_juggling: '🤹&zwj;♀️',
        woman_mechanic: '👩&zwj;🔧',
        woman_office_worker: '👩&zwj;💼',
        woman_pilot: '👩&zwj;✈️',
        woman_playing_handball: '🤾&zwj;♀️',
        woman_playing_water_polo: '🤽&zwj;♀️',
        woman_scientist: '👩&zwj;🔬',
        woman_shrugging: '🤷&zwj;♀️',
        woman_singer: '👩&zwj;🎤',
        woman_student: '👩&zwj;🎓',
        woman_teacher: '👩&zwj;🏫',
        woman_technologist: '👩&zwj;💻',
        woman_with_turban: '👳&zwj;♀️',
        womans_clothes: '👚',
        womans_hat: '👒',
        women_wrestling: '🤼&zwj;♀️',
        womens: '🚺',
        world_map: '🗺',
        worried: '😟',
        wrench: '🔧',
        writing_hand: '✍️',
        x: '❌',
        yellow_heart: '💛',
        yen: '💴',
        yin_yang: '☯️',
        yum: '😋',
        zap: '⚡️',
        zipper_mouth_face: '🤐',
        zzz: '💤',
        octocat:
          '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown:
          '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>',
      }),
      (t.Converter = function (e) {
        var n = {},
          u = [],
          c = [],
          l = {},
          d = o,
          h = { parsed: {}, raw: '', format: '' }
        function p(e, n) {
          if (((n = n || null), t.helper.isString(e))) {
            if (((n = e = t.helper.stdExtName(e)), t.extensions[e]))
              return (
                console.warn(
                  'DEPRECATION WARNING: ' +
                    e +
                    ' is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!'
                ),
                void (function (e, n) {
                  'function' == typeof e && (e = e(new t.Converter()))
                  t.helper.isArray(e) || (e = [e])
                  var r = s(e, n)
                  if (!r.valid) throw Error(r.error)
                  for (var i = 0; i < e.length; ++i)
                    switch (e[i].type) {
                      case 'lang':
                        u.push(e[i])
                        break
                      case 'output':
                        c.push(e[i])
                        break
                      default:
                        throw Error(
                          'Extension loader error: Type unrecognized!!!'
                        )
                    }
                })(t.extensions[e], e)
              )
            if (t.helper.isUndefined(r[e]))
              throw Error(
                'Extension "' +
                  e +
                  '" could not be loaded. It was either not found or is not a valid extension.'
              )
            e = r[e]
          }
          'function' == typeof e && (e = e()), t.helper.isArray(e) || (e = [e])
          var i = s(e, n)
          if (!i.valid) throw Error(i.error)
          for (var o = 0; o < e.length; ++o) {
            switch (e[o].type) {
              case 'lang':
                u.push(e[o])
                break
              case 'output':
                c.push(e[o])
            }
            if (e[o].hasOwnProperty('listeners'))
              for (var a in e[o].listeners)
                e[o].listeners.hasOwnProperty(a) && f(a, e[o].listeners[a])
          }
        }
        function f(e, n) {
          if (!t.helper.isString(e))
            throw Error(
              'Invalid argument in converter.listen() method: name must be a string, but ' +
                typeof e +
                ' given'
            )
          if ('function' != typeof n)
            throw Error(
              'Invalid argument in converter.listen() method: callback must be a function, but ' +
                typeof n +
                ' given'
            )
          l.hasOwnProperty(e) || (l[e] = []), l[e].push(n)
        }
        !(function () {
          for (var r in ((e = e || {}), i)) i.hasOwnProperty(r) && (n[r] = i[r])
          if ('object' != typeof e)
            throw Error(
              'Converter expects the passed parameter to be an object, but ' +
                typeof e +
                ' was passed instead.'
            )
          for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o])
          n.extensions && t.helper.forEach(n.extensions, p)
        })(),
          (this._dispatch = function (e, t, n, r) {
            if (l.hasOwnProperty(e))
              for (var i = 0; i < l[e].length; ++i) {
                var o = l[e][i](e, t, this, n, r)
                o && void 0 !== o && (t = o)
              }
            return t
          }),
          (this.listen = function (e, t) {
            return f(e, t), this
          }),
          (this.makeHtml = function (e) {
            if (!e) return e
            var r = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions: u,
              outputModifiers: c,
              converter: this,
              ghCodeBlocks: [],
              metadata: { parsed: {}, raw: '', format: '' },
            }
            return (
              (e = (e = (e = (e = (e = e.replace(/¨/g, '¨T')).replace(
                /\$/g,
                '¨D'
              )).replace(/\r\n/g, '\n')).replace(/\r/g, '\n')).replace(
                /\u00A0/g,
                '&nbsp;'
              )),
              n.smartIndentationFix &&
                (e = (function (e) {
                  var t = e.match(/^\s*/)[0].length,
                    n = new RegExp('^\\s{0,' + t + '}', 'gm')
                  return e.replace(n, '')
                })(e)),
              (e = '\n\n' + e + '\n\n'),
              (e = (e = t.subParser('detab')(e, n, r)).replace(
                /^[ \t]+$/gm,
                ''
              )),
              t.helper.forEach(u, function (i) {
                e = t.subParser('runExtension')(i, e, n, r)
              }),
              (e = t.subParser('metadata')(e, n, r)),
              (e = t.subParser('hashPreCodeTags')(e, n, r)),
              (e = t.subParser('githubCodeBlocks')(e, n, r)),
              (e = t.subParser('hashHTMLBlocks')(e, n, r)),
              (e = t.subParser('hashCodeTags')(e, n, r)),
              (e = t.subParser('stripLinkDefinitions')(e, n, r)),
              (e = t.subParser('blockGamut')(e, n, r)),
              (e = t.subParser('unhashHTMLSpans')(e, n, r)),
              (e = (e = (e = t.subParser('unescapeSpecialChars')(
                e,
                n,
                r
              )).replace(/¨D/g, '$$')).replace(/¨T/g, '¨')),
              (e = t.subParser('completeHTMLDocument')(e, n, r)),
              t.helper.forEach(c, function (i) {
                e = t.subParser('runExtension')(i, e, n, r)
              }),
              (h = r.metadata),
              e
            )
          }),
          (this.makeMarkdown = this.makeMd =
            function (e, n) {
              if (
                ((e = (e = (e = e.replace(/\r\n/g, '\n')).replace(
                  /\r/g,
                  '\n'
                )).replace(/>[ \t]+</, '>¨NBSP;<')),
                !n)
              ) {
                if (!window || !window.document)
                  throw new Error(
                    'HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM'
                  )
                n = window.document
              }
              var r = n.createElement('div')
              r.innerHTML = e
              var i = {
                preList: (function (e) {
                  for (
                    var n = e.querySelectorAll('pre'), r = [], i = 0;
                    i < n.length;
                    ++i
                  )
                    if (
                      1 === n[i].childElementCount &&
                      'code' === n[i].firstChild.tagName.toLowerCase()
                    ) {
                      var o = n[i].firstChild.innerHTML.trim(),
                        a = n[i].firstChild.getAttribute('data-language') || ''
                      if ('' === a)
                        for (
                          var s = n[i].firstChild.className.split(' '), u = 0;
                          u < s.length;
                          ++u
                        ) {
                          var c = s[u].match(/^language-(.+)$/)
                          if (null !== c) {
                            a = c[1]
                            break
                          }
                        }
                      ;(o = t.helper.unescapeHTMLEntities(o)),
                        r.push(o),
                        (n[i].outerHTML =
                          '<precode language="' +
                          a +
                          '" precodenum="' +
                          i.toString() +
                          '"></precode>')
                    } else
                      r.push(n[i].innerHTML),
                        (n[i].innerHTML = ''),
                        n[i].setAttribute('prenum', i.toString())
                  return r
                })(r),
              }
              !(function e(t) {
                for (var n = 0; n < t.childNodes.length; ++n) {
                  var r = t.childNodes[n]
                  3 === r.nodeType
                    ? /\S/.test(r.nodeValue)
                      ? ((r.nodeValue = r.nodeValue.split('\n').join(' ')),
                        (r.nodeValue = r.nodeValue.replace(/(\s)+/g, '$1')))
                      : (t.removeChild(r), --n)
                    : 1 === r.nodeType && e(r)
                }
              })(r)
              for (var o = r.childNodes, a = '', s = 0; s < o.length; s++)
                a += t.subParser('makeMarkdown.node')(o[s], i)
              return a
            }),
          (this.setOption = function (e, t) {
            n[e] = t
          }),
          (this.getOption = function (e) {
            return n[e]
          }),
          (this.getOptions = function () {
            return n
          }),
          (this.addExtension = function (e, t) {
            p(e, (t = t || null))
          }),
          (this.useExtension = function (e) {
            p(e)
          }),
          (this.setFlavor = function (e) {
            if (!a.hasOwnProperty(e)) throw Error(e + ' flavor was not found')
            var t = a[e]
            for (var r in ((d = e), t)) t.hasOwnProperty(r) && (n[r] = t[r])
          }),
          (this.getFlavor = function () {
            return d
          }),
          (this.removeExtension = function (e) {
            t.helper.isArray(e) || (e = [e])
            for (var n = 0; n < e.length; ++n) {
              for (var r = e[n], i = 0; i < u.length; ++i)
                u[i] === r && u[i].splice(i, 1)
              for (; 0 < c.length; ++i) c[0] === r && c[0].splice(i, 1)
            }
          }),
          (this.getAllExtensions = function () {
            return { language: u, output: c }
          }),
          (this.getMetadata = function (e) {
            return e ? h.raw : h.parsed
          }),
          (this.getMetadataFormat = function () {
            return h.format
          }),
          (this._setMetadataPair = function (e, t) {
            h.parsed[e] = t
          }),
          (this._setMetadataFormat = function (e) {
            h.format = e
          }),
          (this._setMetadataRaw = function (e) {
            h.raw = e
          })
      }),
      t.subParser('anchors', function (e, n, r) {
        var i = function (e, i, o, a, s, u, c) {
          if (
            (t.helper.isUndefined(c) && (c = ''),
            (o = o.toLowerCase()),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            a = ''
          else if (!a) {
            if (
              (o || (o = i.toLowerCase().replace(/ ?\n/g, ' ')),
              (a = '#' + o),
              t.helper.isUndefined(r.gUrls[o]))
            )
              return e
            ;(a = r.gUrls[o]),
              t.helper.isUndefined(r.gTitles[o]) || (c = r.gTitles[o])
          }
          var l =
            '<a href="' +
            (a = a.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )) +
            '"'
          return (
            '' !== c &&
              null !== c &&
              (l +=
                ' title="' +
                (c = (c = c.replace(/"/g, '&quot;')).replace(
                  t.helper.regexes.asteriskDashAndColon,
                  t.helper.escapeCharactersCallback
                )) +
                '"'),
            n.openLinksInNewWindow &&
              !/^#/.test(a) &&
              (l += ' rel="noopener noreferrer" target="¨E95Eblank"'),
            (l += '>' + i + '</a>')
          )
        }
        return (
          (e = (e = (e = (e = (e = r.converter._dispatch(
            'anchors.before',
            e,
            n,
            r
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
            i
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            i
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            i
          )).replace(/\[([^\[\]]+)]()()()()()/g, i)),
          n.ghMentions &&
            (e = e.replace(
              /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
              function (e, r, i, o, a) {
                if ('\\' === i) return r + o
                if (!t.helper.isString(n.ghMentionsLink))
                  throw new Error('ghMentionsLink option must be a string')
                var s = n.ghMentionsLink.replace(/\{u}/g, a),
                  u = ''
                return (
                  n.openLinksInNewWindow &&
                    (u = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  r + '<a href="' + s + '"' + u + '>' + o + '</a>'
                )
              }
            )),
          (e = r.converter._dispatch('anchors.after', e, n, r))
        )
      })
    var l =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      d =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      p =
        /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
      f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
      g = function (e) {
        return function (n, r, i, o, a, s, u) {
          var c = (i = i.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )),
            l = '',
            d = '',
            h = r || '',
            p = u || ''
          return (
            /^www\./i.test(i) && (i = i.replace(/^www\./i, 'http://www.')),
            e.excludeTrailingPunctuationFromURLs && s && (l = s),
            e.openLinksInNewWindow &&
              (d = ' rel="noopener noreferrer" target="¨E95Eblank"'),
            h + '<a href="' + i + '"' + d + '>' + c + '</a>' + l + p
          )
        }
      },
      m = function (e, n) {
        return function (r, i, o) {
          var a = 'mailto:'
          return (
            (i = i || ''),
            (o = t.subParser('unescapeSpecialChars')(o, e, n)),
            e.encodeEmails
              ? ((a = t.helper.encodeEmailAddress(a + o)),
                (o = t.helper.encodeEmailAddress(o)))
              : (a += o),
            i + '<a href="' + a + '">' + o + '</a>'
          )
        }
      }
    t.subParser('autoLinks', function (e, t, n) {
      return (
        (e = (e = (e = n.converter._dispatch(
          'autoLinks.before',
          e,
          t,
          n
        )).replace(h, g(t))).replace(f, m(t, n))),
        (e = n.converter._dispatch('autoLinks.after', e, t, n))
      )
    }),
      t.subParser('simplifiedAutoLinks', function (e, t, n) {
        return t.simplifiedAutoLink
          ? ((e = n.converter._dispatch('simplifiedAutoLinks.before', e, t, n)),
            (e = (e = t.excludeTrailingPunctuationFromURLs
              ? e.replace(d, g(t))
              : e.replace(l, g(t))).replace(p, m(t, n))),
            (e = n.converter._dispatch('simplifiedAutoLinks.after', e, t, n)))
          : e
      }),
      t.subParser('blockGamut', function (e, n, r) {
        return (
          (e = r.converter._dispatch('blockGamut.before', e, n, r)),
          (e = t.subParser('blockQuotes')(e, n, r)),
          (e = t.subParser('headers')(e, n, r)),
          (e = t.subParser('horizontalRule')(e, n, r)),
          (e = t.subParser('lists')(e, n, r)),
          (e = t.subParser('codeBlocks')(e, n, r)),
          (e = t.subParser('tables')(e, n, r)),
          (e = t.subParser('hashHTMLBlocks')(e, n, r)),
          (e = t.subParser('paragraphs')(e, n, r)),
          (e = r.converter._dispatch('blockGamut.after', e, n, r))
        )
      }),
      t.subParser('blockQuotes', function (e, n, r) {
        ;(e = r.converter._dispatch('blockQuotes.before', e, n, r)),
          (e += '\n\n')
        var i = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm
        return (
          n.splitAdjacentBlockquotes && (i = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
          (e = e.replace(i, function (e) {
            return (
              (e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, '')).replace(
                /¨0/g,
                ''
              )).replace(/^[ \t]+$/gm, '')),
              (e = t.subParser('githubCodeBlocks')(e, n, r)),
              (e = (e = (e = t.subParser('blockGamut')(e, n, r)).replace(
                /(^|\n)/g,
                '$1  '
              )).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                var n = t
                return (n = (n = n.replace(/^  /gm, '¨0')).replace(/¨0/g, ''))
              })),
              t.subParser('hashBlock')(
                '<blockquote>\n' + e + '\n</blockquote>',
                n,
                r
              )
            )
          })),
          (e = r.converter._dispatch('blockQuotes.after', e, n, r))
        )
      }),
      t.subParser('codeBlocks', function (e, n, r) {
        e = r.converter._dispatch('codeBlocks.before', e, n, r)
        return (
          (e = (e = (e += '¨0').replace(
            /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,
            function (e, i, o) {
              var a = i,
                s = o,
                u = '\n'
              return (
                (a = t.subParser('outdent')(a, n, r)),
                (a = t.subParser('encodeCode')(a, n, r)),
                (a = (a = (a = t.subParser('detab')(a, n, r)).replace(
                  /^\n+/g,
                  ''
                )).replace(/\n+$/g, '')),
                n.omitExtraWLInCodeBlocks && (u = ''),
                (a = '<pre><code>' + a + u + '</code></pre>'),
                t.subParser('hashBlock')(a, n, r) + s
              )
            }
          )).replace(/¨0/, '')),
          (e = r.converter._dispatch('codeBlocks.after', e, n, r))
        )
      }),
      t.subParser('codeSpans', function (e, n, r) {
        return (
          void 0 === (e = r.converter._dispatch('codeSpans.before', e, n, r)) &&
            (e = ''),
          (e = e.replace(
            /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function (e, i, o, a) {
              var s = a
              return (
                (s = (s = s.replace(/^([ \t]*)/g, '')).replace(/[ \t]*$/g, '')),
                (s =
                  i +
                  '<code>' +
                  (s = t.subParser('encodeCode')(s, n, r)) +
                  '</code>'),
                (s = t.subParser('hashHTMLSpans')(s, n, r))
              )
            }
          )),
          (e = r.converter._dispatch('codeSpans.after', e, n, r))
        )
      }),
      t.subParser('completeHTMLDocument', function (e, t, n) {
        if (!t.completeHTMLDocument) return e
        e = n.converter._dispatch('completeHTMLDocument.before', e, t, n)
        var r = 'html',
          i = '<!DOCTYPE HTML>\n',
          o = '',
          a = '<meta charset="utf-8">\n',
          s = '',
          u = ''
        for (var c in (void 0 !== n.metadata.parsed.doctype &&
          ((i = '<!DOCTYPE ' + n.metadata.parsed.doctype + '>\n'),
          ('html' !==
            (r = n.metadata.parsed.doctype.toString().toLowerCase()) &&
            'html5' !== r) ||
            (a = '<meta charset="utf-8">')),
        n.metadata.parsed))
          if (n.metadata.parsed.hasOwnProperty(c))
            switch (c.toLowerCase()) {
              case 'doctype':
                break
              case 'title':
                o = '<title>' + n.metadata.parsed.title + '</title>\n'
                break
              case 'charset':
                a =
                  'html' === r || 'html5' === r
                    ? '<meta charset="' + n.metadata.parsed.charset + '">\n'
                    : '<meta name="charset" content="' +
                      n.metadata.parsed.charset +
                      '">\n'
                break
              case 'language':
              case 'lang':
                ;(s = ' lang="' + n.metadata.parsed[c] + '"'),
                  (u +=
                    '<meta name="' +
                    c +
                    '" content="' +
                    n.metadata.parsed[c] +
                    '">\n')
                break
              default:
                u +=
                  '<meta name="' +
                  c +
                  '" content="' +
                  n.metadata.parsed[c] +
                  '">\n'
            }
        return (
          (e =
            i +
            '<html' +
            s +
            '>\n<head>\n' +
            o +
            a +
            u +
            '</head>\n<body>\n' +
            e.trim() +
            '\n</body>\n</html>'),
          (e = n.converter._dispatch('completeHTMLDocument.after', e, t, n))
        )
      }),
      t.subParser('detab', function (e, t, n) {
        return (
          (e = (e = (e = (e = (e = (e = n.converter._dispatch(
            'detab.before',
            e,
            t,
            n
          )).replace(/\t(?=\t)/g, '    ')).replace(/\t/g, '¨A¨B')).replace(
            /¨B(.+?)¨A/g,
            function (e, t) {
              for (var n = t, r = 4 - (n.length % 4), i = 0; i < r; i++)
                n += ' '
              return n
            }
          )).replace(/¨A/g, '    ')).replace(/¨B/g, '')),
          (e = n.converter._dispatch('detab.after', e, t, n))
        )
      }),
      t.subParser('ellipsis', function (e, t, n) {
        return (
          (e = (e = n.converter._dispatch('ellipsis.before', e, t, n)).replace(
            /\.\.\./g,
            '…'
          )),
          (e = n.converter._dispatch('ellipsis.after', e, t, n))
        )
      }),
      t.subParser('emoji', function (e, n, r) {
        if (!n.emoji) return e
        return (
          (e = (e = r.converter._dispatch('emoji.before', e, n, r)).replace(
            /:([\S]+?):/g,
            function (e, n) {
              return t.helper.emojis.hasOwnProperty(n) ? t.helper.emojis[n] : e
            }
          )),
          (e = r.converter._dispatch('emoji.after', e, n, r))
        )
      }),
      t.subParser('encodeAmpsAndAngles', function (e, t, n) {
        return (
          (e = (e = (e = (e = (e = n.converter._dispatch(
            'encodeAmpsAndAngles.before',
            e,
            t,
            n
          )).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;')).replace(
            /<(?![a-z\/?$!])/gi,
            '&lt;'
          )).replace(/</g, '&lt;')).replace(/>/g, '&gt;')),
          (e = n.converter._dispatch('encodeAmpsAndAngles.after', e, t, n))
        )
      }),
      t.subParser('encodeBackslashEscapes', function (e, n, r) {
        return (
          (e = (e = (e = r.converter._dispatch(
            'encodeBackslashEscapes.before',
            e,
            n,
            r
          )).replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(
            /\\([`*_{}\[\]()>#+.!~=|-])/g,
            t.helper.escapeCharactersCallback
          )),
          (e = r.converter._dispatch('encodeBackslashEscapes.after', e, n, r))
        )
      }),
      t.subParser('encodeCode', function (e, n, r) {
        return (
          (e = (e = r.converter._dispatch('encodeCode.before', e, n, r))
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/([*_{}\[\]\\=~-])/g, t.helper.escapeCharactersCallback)),
          (e = r.converter._dispatch('encodeCode.after', e, n, r))
        )
      }),
      t.subParser('escapeSpecialCharsWithinTagAttributes', function (e, n, r) {
        return (
          (e = (e = (e = r.converter._dispatch(
            'escapeSpecialCharsWithinTagAttributes.before',
            e,
            n,
            r
          )).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function (e) {
            return e
              .replace(/(.)<\/?code>(?=.)/g, '$1`')
              .replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback)
          })).replace(
            /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,
            function (e) {
              return e.replace(
                /([\\`*_~=|])/g,
                t.helper.escapeCharactersCallback
              )
            }
          )),
          (e = r.converter._dispatch(
            'escapeSpecialCharsWithinTagAttributes.after',
            e,
            n,
            r
          ))
        )
      }),
      t.subParser('githubCodeBlocks', function (e, n, r) {
        return n.ghCodeBlocks
          ? ((e = r.converter._dispatch('githubCodeBlocks.before', e, n, r)),
            (e = (e = (e += '¨0').replace(
              /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
              function (e, i, o, a) {
                var s = n.omitExtraWLInCodeBlocks ? '' : '\n'
                return (
                  (a = t.subParser('encodeCode')(a, n, r)),
                  (a =
                    '<pre><code' +
                    (o ? ' class="' + o + ' language-' + o + '"' : '') +
                    '>' +
                    (a = (a = (a = t.subParser('detab')(a, n, r)).replace(
                      /^\n+/g,
                      ''
                    )).replace(/\n+$/g, '')) +
                    s +
                    '</code></pre>'),
                  (a = t.subParser('hashBlock')(a, n, r)),
                  '\n\n¨G' +
                    (r.ghCodeBlocks.push({ text: e, codeblock: a }) - 1) +
                    'G\n\n'
                )
              }
            )).replace(/¨0/, '')),
            r.converter._dispatch('githubCodeBlocks.after', e, n, r))
          : e
      }),
      t.subParser('hashBlock', function (e, t, n) {
        return (
          (e = (e = n.converter._dispatch('hashBlock.before', e, t, n)).replace(
            /(^\n+|\n+$)/g,
            ''
          )),
          (e = '\n\n¨K' + (n.gHtmlBlocks.push(e) - 1) + 'K\n\n'),
          (e = n.converter._dispatch('hashBlock.after', e, t, n))
        )
      }),
      t.subParser('hashCodeTags', function (e, n, r) {
        e = r.converter._dispatch('hashCodeTags.before', e, n, r)
        return (
          (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e, i, o, a) {
              var s = o + t.subParser('encodeCode')(i, n, r) + a
              return '¨C' + (r.gHtmlSpans.push(s) - 1) + 'C'
            },
            '<code\\b[^>]*>',
            '</code>',
            'gim'
          )),
          (e = r.converter._dispatch('hashCodeTags.after', e, n, r))
        )
      }),
      t.subParser('hashElement', function (e, t, n) {
        return function (e, t) {
          var r = t
          return (
            (r = (r = (r = r.replace(/\n\n/g, '\n')).replace(
              /^\n/,
              ''
            )).replace(/\n+$/g, '')),
            (r = '\n\n¨K' + (n.gHtmlBlocks.push(r) - 1) + 'K\n\n')
          )
        }
      }),
      t.subParser('hashHTMLBlocks', function (e, n, r) {
        e = r.converter._dispatch('hashHTMLBlocks.before', e, n, r)
        var i = [
            'pre',
            'div',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'blockquote',
            'table',
            'dl',
            'ol',
            'ul',
            'script',
            'noscript',
            'form',
            'fieldset',
            'iframe',
            'math',
            'style',
            'section',
            'header',
            'footer',
            'nav',
            'article',
            'aside',
            'address',
            'audio',
            'canvas',
            'figure',
            'hgroup',
            'output',
            'video',
            'p',
          ],
          o = function (e, t, n, i) {
            var o = e
            return (
              -1 !== n.search(/\bmarkdown\b/) &&
                (o = n + r.converter.makeHtml(t) + i),
              '\n\n¨K' + (r.gHtmlBlocks.push(o) - 1) + 'K\n\n'
            )
          }
        n.backslashEscapesHTMLTags &&
          (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, t) {
            return '&lt;' + t + '&gt;'
          }))
        for (var a = 0; a < i.length; ++a)
          for (
            var s,
              u = new RegExp('^ {0,3}(<' + i[a] + '\\b[^>]*>)', 'im'),
              c = '<' + i[a] + '\\b[^>]*>',
              l = '</' + i[a] + '>';
            -1 !== (s = t.helper.regexIndexOf(e, u));

          ) {
            var d = t.helper.splitAtIndex(e, s),
              h = t.helper.replaceRecursiveRegExp(d[1], o, c, l, 'im')
            if (h === d[1]) break
            e = d[0].concat(h)
          }
        return (
          (e = e.replace(
            /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
            t.subParser('hashElement')(e, n, r)
          )),
          (e = (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e) {
              return '\n\n¨K' + (r.gHtmlBlocks.push(e) - 1) + 'K\n\n'
            },
            '^ {0,3}\x3c!--',
            '--\x3e',
            'gm'
          )).replace(
            /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
            t.subParser('hashElement')(e, n, r)
          )),
          (e = r.converter._dispatch('hashHTMLBlocks.after', e, n, r))
        )
      }),
      t.subParser('hashHTMLSpans', function (e, t, n) {
        function r(e) {
          return '¨C' + (n.gHtmlSpans.push(e) - 1) + 'C'
        }
        return (
          (e = (e = (e = (e = (e = n.converter._dispatch(
            'hashHTMLSpans.before',
            e,
            t,
            n
          )).replace(/<[^>]+?\/>/gi, function (e) {
            return r(e)
          })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
            return r(e)
          })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
            return r(e)
          })).replace(/<[^>]+?>/gi, function (e) {
            return r(e)
          })),
          (e = n.converter._dispatch('hashHTMLSpans.after', e, t, n))
        )
      }),
      t.subParser('unhashHTMLSpans', function (e, t, n) {
        e = n.converter._dispatch('unhashHTMLSpans.before', e, t, n)
        for (var r = 0; r < n.gHtmlSpans.length; ++r) {
          for (var i = n.gHtmlSpans[r], o = 0; /¨C(\d+)C/.test(i); ) {
            var a = RegExp.$1
            if (((i = i.replace('¨C' + a + 'C', n.gHtmlSpans[a])), 10 === o)) {
              console.error('maximum nesting of 10 spans reached!!!')
              break
            }
            ++o
          }
          e = e.replace('¨C' + r + 'C', i)
        }
        return (e = n.converter._dispatch('unhashHTMLSpans.after', e, t, n))
      }),
      t.subParser('hashPreCodeTags', function (e, n, r) {
        e = r.converter._dispatch('hashPreCodeTags.before', e, n, r)
        return (
          (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e, i, o, a) {
              var s = o + t.subParser('encodeCode')(i, n, r) + a
              return (
                '\n\n¨G' +
                (r.ghCodeBlocks.push({ text: e, codeblock: s }) - 1) +
                'G\n\n'
              )
            },
            '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>',
            '^ {0,3}</code>\\s*</pre>',
            'gim'
          )),
          (e = r.converter._dispatch('hashPreCodeTags.after', e, n, r))
        )
      }),
      t.subParser('headers', function (e, n, r) {
        e = r.converter._dispatch('headers.before', e, n, r)
        var i = isNaN(parseInt(n.headerLevelStart))
            ? 1
            : parseInt(n.headerLevelStart),
          o = n.smoothLivePreview
            ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
          a = n.smoothLivePreview
            ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n-+[ \t]*\n+/gm
        e = (e = e.replace(o, function (e, o) {
          var a = t.subParser('spanGamut')(o, n, r),
            s = n.noHeaderId ? '' : ' id="' + u(o) + '"',
            c = '<h' + i + s + '>' + a + '</h' + i + '>'
          return t.subParser('hashBlock')(c, n, r)
        })).replace(a, function (e, o) {
          var a = t.subParser('spanGamut')(o, n, r),
            s = n.noHeaderId ? '' : ' id="' + u(o) + '"',
            c = i + 1,
            l = '<h' + c + s + '>' + a + '</h' + c + '>'
          return t.subParser('hashBlock')(l, n, r)
        })
        var s = n.requireSpaceBeforeHeadingText
          ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
          : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm
        function u(e) {
          var i, o
          if (n.customizedHeaderId) {
            var a = e.match(/\{([^{]+?)}\s*$/)
            a && a[1] && (e = a[1])
          }
          return (
            (i = e),
            (o = t.helper.isString(n.prefixHeaderId)
              ? n.prefixHeaderId
              : !0 === n.prefixHeaderId
              ? 'section-'
              : ''),
            n.rawPrefixHeaderId || (i = o + i),
            (i = n.ghCompatibleHeaderId
              ? i
                  .replace(/ /g, '-')
                  .replace(/&amp;/g, '')
                  .replace(/¨T/g, '')
                  .replace(/¨D/g, '')
                  .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
                  .toLowerCase()
              : n.rawHeaderId
              ? i
                  .replace(/ /g, '-')
                  .replace(/&amp;/g, '&')
                  .replace(/¨T/g, '¨')
                  .replace(/¨D/g, '$')
                  .replace(/["']/g, '-')
                  .toLowerCase()
              : i.replace(/[^\w]/g, '').toLowerCase()),
            n.rawPrefixHeaderId && (i = o + i),
            r.hashLinkCounts[i]
              ? (i = i + '-' + r.hashLinkCounts[i]++)
              : (r.hashLinkCounts[i] = 1),
            i
          )
        }
        return (
          (e = e.replace(s, function (e, o, a) {
            var s = a
            n.customizedHeaderId && (s = a.replace(/\s?\{([^{]+?)}\s*$/, ''))
            var c = t.subParser('spanGamut')(s, n, r),
              l = n.noHeaderId ? '' : ' id="' + u(a) + '"',
              d = i - 1 + o.length,
              h = '<h' + d + l + '>' + c + '</h' + d + '>'
            return t.subParser('hashBlock')(h, n, r)
          })),
          (e = r.converter._dispatch('headers.after', e, n, r))
        )
      }),
      t.subParser('horizontalRule', function (e, n, r) {
        e = r.converter._dispatch('horizontalRule.before', e, n, r)
        var i = t.subParser('hashBlock')('<hr />', n, r)
        return (
          (e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, i)).replace(
            /^ {0,2}( ?\*){3,}[ \t]*$/gm,
            i
          )).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, i)),
          (e = r.converter._dispatch('horizontalRule.after', e, n, r))
        )
      }),
      t.subParser('images', function (e, n, r) {
        function i(e, n, i, o, a, s, u, c) {
          var l = r.gUrls,
            d = r.gTitles,
            h = r.gDimensions
          if (
            ((i = i.toLowerCase()),
            c || (c = ''),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            o = ''
          else if ('' === o || null === o) {
            if (
              (('' !== i && null !== i) ||
                (i = n.toLowerCase().replace(/ ?\n/g, ' ')),
              (o = '#' + i),
              t.helper.isUndefined(l[i]))
            )
              return e
            ;(o = l[i]),
              t.helper.isUndefined(d[i]) || (c = d[i]),
              t.helper.isUndefined(h[i]) ||
                ((a = h[i].width), (s = h[i].height))
          }
          n = n
            .replace(/"/g, '&quot;')
            .replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )
          var p =
            '<a href="' +
            (o = o.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )) +
            '" target="_blank"><img class="shuoshuoimg gallery-group-img" src="' +
            o +
            '"style="width: 20%" '
          return (
            c &&
              t.helper.isString(c) &&
              (p +=
                ' title="' +
                (c = c
                  .replace(/"/g, '&quot;')
                  .replace(
                    t.helper.regexes.asteriskDashAndColon,
                    t.helper.escapeCharactersCallback
                  )) +
                '"'),
            a &&
              s &&
              ((p += ' width="' + (a = '*' === a ? 'auto' : a) + '"'),
              (p += ' height="' + (s = '*' === s ? 'auto' : s) + '"')),
            (p += ' /></a>')
          )
        }
        return (
          (e = (e = (e = (e = (e = (e = r.converter._dispatch(
            'images.before',
            e,
            n,
            r
          )).replace(
            /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
            i
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            function (e, t, n, r, o, a, s, u) {
              return i(e, t, n, (r = r.replace(/\s/g, '')), o, a, 0, u)
            }
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
            i
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            i
          )).replace(/!\[([^\[\]]+)]()()()()()/g, i)),
          (e = r.converter._dispatch('images.after', e, n, r))
        )
      }),
      t.subParser('italicsAndBold', function (e, t, n) {
        function r(e, t, n) {
          return t + e + n
        }
        return (
          (e = n.converter._dispatch('italicsAndBold.before', e, t, n)),
          (e = t.literalMidWordUnderscores
            ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                return r(t, '<strong><em>', '</em></strong>')
              })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                return r(t, '<strong>', '</strong>')
              })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, t) {
                return r(t, '<em>', '</em>')
              })
            : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                return /\S$/.test(t)
                  ? r(t, '<strong><em>', '</em></strong>')
                  : e
              })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                return /\S$/.test(t) ? r(t, '<strong>', '</strong>') : e
              })).replace(/_([^\s_][\s\S]*?)_/g, function (e, t) {
                return /\S$/.test(t) ? r(t, '<em>', '</em>') : e
              })),
          (e = t.literalMidWordAsterisks
            ? (e = (e = e.replace(
                /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + '<strong><em>', '</em></strong>')
                }
              )).replace(
                /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + '<strong>', '</strong>')
                }
              )).replace(
                /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + '<em>', '</em>')
                }
              )
            : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (e, t) {
                return /\S$/.test(t)
                  ? r(t, '<strong><em>', '</em></strong>')
                  : e
              })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, t) {
                return /\S$/.test(t) ? r(t, '<strong>', '</strong>') : e
              })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, t) {
                return /\S$/.test(t) ? r(t, '<em>', '</em>') : e
              })),
          (e = n.converter._dispatch('italicsAndBold.after', e, t, n))
        )
      }),
      t.subParser('lists', function (e, n, r) {
        function i(e, i) {
          r.gListLevel++, (e = e.replace(/\n{2,}$/, '\n'))
          var o =
              /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
            a = /\n[ \t]*\n(?!¨0)/.test((e += '¨0'))
          return (
            n.disableForced4SpacesIndentedSublists &&
              (o =
                /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
            (e = (e = e.replace(o, function (e, i, o, s, u, c, l) {
              l = l && '' !== l.trim()
              var d = t.subParser('outdent')(u, n, r),
                h = ''
              return (
                c &&
                  n.tasklists &&
                  ((h =
                    ' class="task-list-item" style="list-style-type: none;"'),
                  (d = d.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var e =
                      '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"'
                    return l && (e += ' checked'), (e += '>')
                  }))),
                (d = d.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (e) {
                  return '¨A' + e
                })),
                i || d.search(/\n{2,}/) > -1
                  ? ((d = t.subParser('githubCodeBlocks')(d, n, r)),
                    (d = t.subParser('blockGamut')(d, n, r)))
                  : ((d = (d = t.subParser('lists')(d, n, r)).replace(
                      /\n$/,
                      ''
                    )),
                    (d = (d = t.subParser('hashHTMLBlocks')(d, n, r)).replace(
                      /\n\n+/g,
                      '\n\n'
                    )),
                    (d = a
                      ? t.subParser('paragraphs')(d, n, r)
                      : t.subParser('spanGamut')(d, n, r))),
                (d = '<li' + h + '>' + (d = d.replace('¨A', '')) + '</li>\n')
              )
            })).replace(/¨0/g, '')),
            r.gListLevel--,
            i && (e = e.replace(/\s+$/, '')),
            e
          )
        }
        function o(e, t) {
          if ('ol' === t) {
            var n = e.match(/^ *(\d+)\./)
            if (n && '1' !== n[1]) return ' start="' + n[1] + '"'
          }
          return ''
        }
        function a(e, t, r) {
          var a = n.disableForced4SpacesIndentedSublists
              ? /^ ?\d+\.[ \t]/gm
              : /^ {0,3}\d+\.[ \t]/gm,
            s = n.disableForced4SpacesIndentedSublists
              ? /^ ?[*+-][ \t]/gm
              : /^ {0,3}[*+-][ \t]/gm,
            u = 'ul' === t ? a : s,
            c = ''
          if (-1 !== e.search(u))
            !(function n(l) {
              var d = l.search(u),
                h = o(e, t)
              ;-1 !== d
                ? ((c +=
                    '\n\n<' +
                    t +
                    h +
                    '>\n' +
                    i(l.slice(0, d), !!r) +
                    '</' +
                    t +
                    '>\n'),
                  (u = 'ul' === (t = 'ul' === t ? 'ol' : 'ul') ? a : s),
                  n(l.slice(d)))
                : (c += '\n\n<' + t + h + '>\n' + i(l, !!r) + '</' + t + '>\n')
            })(e)
          else {
            var l = o(e, t)
            c = '\n\n<' + t + l + '>\n' + i(e, !!r) + '</' + t + '>\n'
          }
          return c
        }
        return (
          (e = r.converter._dispatch('lists.before', e, n, r)),
          (e += '¨0'),
          (e = (e = r.gListLevel
            ? e.replace(
                /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, n) {
                  return a(t, n.search(/[*+-]/g) > -1 ? 'ul' : 'ol', !0)
                }
              )
            : e.replace(
                /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, n, r) {
                  return a(n, r.search(/[*+-]/g) > -1 ? 'ul' : 'ol', !1)
                }
              )).replace(/¨0/, '')),
          (e = r.converter._dispatch('lists.after', e, n, r))
        )
      }),
      t.subParser('metadata', function (e, t, n) {
        if (!t.metadata) return e
        function r(e) {
          ;(n.metadata.raw = e),
            (e = (e = e.replace(/&/g, '&amp;').replace(/"/g, '&quot;')).replace(
              /\n {4}/g,
              ' '
            )).replace(/^([\S ]+): +([\s\S]+?)$/gm, function (e, t, r) {
              return (n.metadata.parsed[t] = r), ''
            })
        }
        return (
          (e = (e = (e = (e = n.converter._dispatch(
            'metadata.before',
            e,
            t,
            n
          )).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (e, t, n) {
            return r(n), '¨M'
          })).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (e, t, i) {
            return t && (n.metadata.format = t), r(i), '¨M'
          })).replace(/¨M/g, '')),
          (e = n.converter._dispatch('metadata.after', e, t, n))
        )
      }),
      t.subParser('outdent', function (e, t, n) {
        return (
          (e = (e = (e = n.converter._dispatch(
            'outdent.before',
            e,
            t,
            n
          )).replace(/^(\t|[ ]{1,4})/gm, '¨0')).replace(/¨0/g, '')),
          (e = n.converter._dispatch('outdent.after', e, t, n))
        )
      }),
      t.subParser('paragraphs', function (e, n, r) {
        for (
          var i = (e = (e = (e = r.converter._dispatch(
              'paragraphs.before',
              e,
              n,
              r
            )).replace(/^\n+/g, '')).replace(/\n+$/g, '')).split(/\n{2,}/g),
            o = [],
            a = i.length,
            s = 0;
          s < a;
          s++
        ) {
          var u = i[s]
          u.search(/¨(K|G)(\d+)\1/g) >= 0
            ? o.push(u)
            : u.search(/\S/) >= 0 &&
              ((u = (u = t.subParser('spanGamut')(u, n, r)).replace(
                /^([ \t]*)/g,
                '<p>'
              )),
              (u += '</p>'),
              o.push(u))
        }
        for (a = o.length, s = 0; s < a; s++) {
          for (var c = '', l = o[s], d = !1; /¨(K|G)(\d+)\1/.test(l); ) {
            var h = RegExp.$1,
              p = RegExp.$2
            ;(c = (c =
              'K' === h
                ? r.gHtmlBlocks[p]
                : d
                ? t.subParser('encodeCode')(r.ghCodeBlocks[p].text, n, r)
                : r.ghCodeBlocks[p].codeblock).replace(/\$/g, '$$$$')),
              (l = l.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c)),
              /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(l) && (d = !0)
          }
          o[s] = l
        }
        return (
          (e = (e = (e = o.join('\n')).replace(/^\n+/g, '')).replace(
            /\n+$/g,
            ''
          )),
          r.converter._dispatch('paragraphs.after', e, n, r)
        )
      }),
      t.subParser('runExtension', function (e, t, n, r) {
        if (e.filter) t = e.filter(t, r.converter, n)
        else if (e.regex) {
          var i = e.regex
          i instanceof RegExp || (i = new RegExp(i, 'g')),
            (t = t.replace(i, e.replace))
        }
        return t
      }),
      t.subParser('spanGamut', function (e, n, r) {
        return (
          (e = r.converter._dispatch('spanGamut.before', e, n, r)),
          (e = t.subParser('codeSpans')(e, n, r)),
          (e = t.subParser('escapeSpecialCharsWithinTagAttributes')(e, n, r)),
          (e = t.subParser('encodeBackslashEscapes')(e, n, r)),
          (e = t.subParser('images')(e, n, r)),
          (e = t.subParser('anchors')(e, n, r)),
          (e = t.subParser('autoLinks')(e, n, r)),
          (e = t.subParser('simplifiedAutoLinks')(e, n, r)),
          (e = t.subParser('emoji')(e, n, r)),
          (e = t.subParser('underline')(e, n, r)),
          (e = t.subParser('italicsAndBold')(e, n, r)),
          (e = t.subParser('strikethrough')(e, n, r)),
          (e = t.subParser('ellipsis')(e, n, r)),
          (e = t.subParser('hashHTMLSpans')(e, n, r)),
          (e = t.subParser('encodeAmpsAndAngles')(e, n, r)),
          n.simpleLineBreaks
            ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, '<br />\n'))
            : (e = e.replace(/  +\n/g, '<br />\n')),
          (e = r.converter._dispatch('spanGamut.after', e, n, r))
        )
      }),
      t.subParser('strikethrough', function (e, n, r) {
        return (
          n.strikethrough &&
            ((e = (e = r.converter._dispatch(
              'strikethrough.before',
              e,
              n,
              r
            )).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, i) {
              return (function (e) {
                return (
                  n.simplifiedAutoLink &&
                    (e = t.subParser('simplifiedAutoLinks')(e, n, r)),
                  '<del>' + e + '</del>'
                )
              })(i)
            })),
            (e = r.converter._dispatch('strikethrough.after', e, n, r))),
          e
        )
      }),
      t.subParser('stripLinkDefinitions', function (e, n, r) {
        var i = function (e, i, o, a, s, u, c) {
          return (
            (i = i.toLowerCase()),
            o.match(/^data:.+?\/.+?;base64,/)
              ? (r.gUrls[i] = o.replace(/\s/g, ''))
              : (r.gUrls[i] = t.subParser('encodeAmpsAndAngles')(o, n, r)),
            u
              ? u + c
              : (c && (r.gTitles[i] = c.replace(/"|'/g, '&quot;')),
                n.parseImgDimensions &&
                  a &&
                  s &&
                  (r.gDimensions[i] = { width: a, height: s }),
                '')
          )
        }
        return (e = (e = (e = (e += '¨0').replace(
          /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,
          i
        )).replace(
          /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
          i
        )).replace(/¨0/, ''))
      }),
      t.subParser('tables', function (e, n, r) {
        if (!n.tables) return e
        function i(e, i) {
          return '<td' + i + '>' + t.subParser('spanGamut')(e, n, r) + '</td>\n'
        }
        function o(e) {
          var o,
            a = e.split('\n')
          for (o = 0; o < a.length; ++o)
            /^ {0,3}\|/.test(a[o]) && (a[o] = a[o].replace(/^ {0,3}\|/, '')),
              /\|[ \t]*$/.test(a[o]) && (a[o] = a[o].replace(/\|[ \t]*$/, '')),
              (a[o] = t.subParser('codeSpans')(a[o], n, r))
          var s,
            u,
            c,
            l,
            d = a[0].split('|').map(function (e) {
              return e.trim()
            }),
            h = a[1].split('|').map(function (e) {
              return e.trim()
            }),
            p = [],
            f = [],
            g = [],
            m = []
          for (a.shift(), a.shift(), o = 0; o < a.length; ++o)
            '' !== a[o].trim() &&
              p.push(
                a[o].split('|').map(function (e) {
                  return e.trim()
                })
              )
          if (d.length < h.length) return e
          for (o = 0; o < h.length; ++o)
            g.push(
              ((s = h[o]),
              /^:[ \t]*--*$/.test(s)
                ? ' style="text-align:left;"'
                : /^--*[ \t]*:[ \t]*$/.test(s)
                ? ' style="text-align:right;"'
                : /^:[ \t]*--*[ \t]*:$/.test(s)
                ? ' style="text-align:center;"'
                : '')
            )
          for (o = 0; o < d.length; ++o)
            t.helper.isUndefined(g[o]) && (g[o] = ''),
              f.push(
                ((u = d[o]),
                (c = g[o]),
                (l = void 0),
                (l = ''),
                (u = u.trim()),
                (n.tablesHeaderId || n.tableHeaderId) &&
                  (l = ' id="' + u.replace(/ /g, '_').toLowerCase() + '"'),
                '<th' +
                  l +
                  c +
                  '>' +
                  (u = t.subParser('spanGamut')(u, n, r)) +
                  '</th>\n')
              )
          for (o = 0; o < p.length; ++o) {
            for (var _ = [], v = 0; v < f.length; ++v)
              t.helper.isUndefined(p[o][v]), _.push(i(p[o][v], g[v]))
            m.push(_)
          }
          return (function (e, t) {
            for (
              var n = '<table>\n<thead>\n<tr>\n', r = e.length, i = 0;
              i < r;
              ++i
            )
              n += e[i]
            for (n += '</tr>\n</thead>\n<tbody>\n', i = 0; i < t.length; ++i) {
              n += '<tr>\n'
              for (var o = 0; o < r; ++o) n += t[i][o]
              n += '</tr>\n'
            }
            return (n += '</tbody>\n</table>\n')
          })(f, m)
        }
        return (
          (e = (e = (e = (e = r.converter._dispatch(
            'tables.before',
            e,
            n,
            r
          )).replace(/\\(\|)/g, t.helper.escapeCharactersCallback)).replace(
            /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
            o
          )).replace(
            /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,
            o
          )),
          (e = r.converter._dispatch('tables.after', e, n, r))
        )
      }),
      t.subParser('underline', function (e, n, r) {
        return n.underline
          ? ((e = r.converter._dispatch('underline.before', e, n, r)),
            (e = (e = n.literalMidWordUnderscores
              ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                  return '<u>' + t + '</u>'
                })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                  return '<u>' + t + '</u>'
                })
              : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                  return /\S$/.test(t) ? '<u>' + t + '</u>' : e
                })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                  return /\S$/.test(t) ? '<u>' + t + '</u>' : e
                })).replace(/(_)/g, t.helper.escapeCharactersCallback)),
            (e = r.converter._dispatch('underline.after', e, n, r)))
          : e
      }),
      t.subParser('unescapeSpecialChars', function (e, t, n) {
        return (
          (e = (e = n.converter._dispatch(
            'unescapeSpecialChars.before',
            e,
            t,
            n
          )).replace(/¨E(\d+)E/g, function (e, t) {
            var n = parseInt(t)
            return String.fromCharCode(n)
          })),
          (e = n.converter._dispatch('unescapeSpecialChars.after', e, t, n))
        )
      }),
      t.subParser('makeMarkdown.blockquote', function (e, n) {
        var r = ''
        if (e.hasChildNodes())
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) {
            var s = t.subParser('makeMarkdown.node')(i[a], n)
            '' !== s && (r += s)
          }
        return (r = '> ' + (r = r.trim()).split('\n').join('\n> '))
      }),
      t.subParser('makeMarkdown.codeBlock', function (e, t) {
        var n = e.getAttribute('language'),
          r = e.getAttribute('precodenum')
        return '```' + n + '\n' + t.preList[r] + '\n```'
      }),
      t.subParser('makeMarkdown.codeSpan', function (e) {
        return '`' + e.innerHTML + '`'
      }),
      t.subParser('makeMarkdown.emphasis', function (e, n) {
        var r = ''
        if (e.hasChildNodes()) {
          r += '*'
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser('makeMarkdown.node')(i[a], n)
          r += '*'
        }
        return r
      }),
      t.subParser('makeMarkdown.header', function (e, n, r) {
        var i = new Array(r + 1).join('#'),
          o = ''
        if (e.hasChildNodes()) {
          o = i + ' '
          for (var a = e.childNodes, s = a.length, u = 0; u < s; ++u)
            o += t.subParser('makeMarkdown.node')(a[u], n)
        }
        return o
      }),
      t.subParser('makeMarkdown.hr', function () {
        return '---'
      }),
      t.subParser('makeMarkdown.image', function (e) {
        var t = ''
        return (
          e.hasAttribute('src') &&
            ((t += '![' + e.getAttribute('alt') + ']('),
            (t += '<' + e.getAttribute('src') + '>'),
            e.hasAttribute('width') &&
              e.hasAttribute('height') &&
              (t +=
                ' =' +
                e.getAttribute('width') +
                'x' +
                e.getAttribute('height')),
            e.hasAttribute('title') &&
              (t += ' "' + e.getAttribute('title') + '"'),
            (t += ')')),
          t
        )
      }),
      t.subParser('makeMarkdown.links', function (e, n) {
        var r = ''
        if (e.hasChildNodes() && e.hasAttribute('href')) {
          var i = e.childNodes,
            o = i.length
          r = '['
          for (var a = 0; a < o; ++a)
            r += t.subParser('makeMarkdown.node')(i[a], n)
          ;(r += ']('),
            (r += '<' + e.getAttribute('href') + '>'),
            e.hasAttribute('title') &&
              (r += ' "' + e.getAttribute('title') + '"'),
            (r += ')')
        }
        return r
      }),
      t.subParser('makeMarkdown.list', function (e, n, r) {
        var i = ''
        if (!e.hasChildNodes()) return ''
        for (
          var o = e.childNodes,
            a = o.length,
            s = e.getAttribute('start') || 1,
            u = 0;
          u < a;
          ++u
        )
          if (void 0 !== o[u].tagName && 'li' === o[u].tagName.toLowerCase()) {
            ;(i +=
              ('ol' === r ? s.toString() + '. ' : '- ') +
              t.subParser('makeMarkdown.listItem')(o[u], n)),
              ++s
          }
        return (i += '\n\x3c!-- --\x3e\n').trim()
      }),
      t.subParser('makeMarkdown.listItem', function (e, n) {
        for (var r = '', i = e.childNodes, o = i.length, a = 0; a < o; ++a)
          r += t.subParser('makeMarkdown.node')(i[a], n)
        return (
          /\n$/.test(r)
            ? (r = r
                .split('\n')
                .join('\n    ')
                .replace(/^ {4}$/gm, '')
                .replace(/\n\n+/g, '\n\n'))
            : (r += '\n'),
          r
        )
      }),
      t.subParser('makeMarkdown.node', function (e, n, r) {
        r = r || !1
        var i = ''
        if (3 === e.nodeType) return t.subParser('makeMarkdown.txt')(e, n)
        if (8 === e.nodeType) return '\x3c!--' + e.data + '--\x3e\n\n'
        if (1 !== e.nodeType) return ''
        switch (e.tagName.toLowerCase()) {
          case 'h1':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 1) + '\n\n')
            break
          case 'h2':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 2) + '\n\n')
            break
          case 'h3':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 3) + '\n\n')
            break
          case 'h4':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 4) + '\n\n')
            break
          case 'h5':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 5) + '\n\n')
            break
          case 'h6':
            r || (i = t.subParser('makeMarkdown.header')(e, n, 6) + '\n\n')
            break
          case 'p':
            r || (i = t.subParser('makeMarkdown.paragraph')(e, n) + '\n\n')
            break
          case 'blockquote':
            r || (i = t.subParser('makeMarkdown.blockquote')(e, n) + '\n\n')
            break
          case 'hr':
            r || (i = t.subParser('makeMarkdown.hr')(e, n) + '\n\n')
            break
          case 'ol':
            r || (i = t.subParser('makeMarkdown.list')(e, n, 'ol') + '\n\n')
            break
          case 'ul':
            r || (i = t.subParser('makeMarkdown.list')(e, n, 'ul') + '\n\n')
            break
          case 'precode':
            r || (i = t.subParser('makeMarkdown.codeBlock')(e, n) + '\n\n')
            break
          case 'pre':
            r || (i = t.subParser('makeMarkdown.pre')(e, n) + '\n\n')
            break
          case 'table':
            r || (i = t.subParser('makeMarkdown.table')(e, n) + '\n\n')
            break
          case 'code':
            i = t.subParser('makeMarkdown.codeSpan')(e, n)
            break
          case 'em':
          case 'i':
            i = t.subParser('makeMarkdown.emphasis')(e, n)
            break
          case 'strong':
          case 'b':
            i = t.subParser('makeMarkdown.strong')(e, n)
            break
          case 'del':
            i = t.subParser('makeMarkdown.strikethrough')(e, n)
            break
          case 'a':
            i = t.subParser('makeMarkdown.links')(e, n)
            break
          case 'img':
            i = t.subParser('makeMarkdown.image')(e, n)
            break
          default:
            i = e.outerHTML + '\n\n'
        }
        return i
      }),
      t.subParser('makeMarkdown.paragraph', function (e, n) {
        var r = ''
        if (e.hasChildNodes())
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser('makeMarkdown.node')(i[a], n)
        return (r = r.trim())
      }),
      t.subParser('makeMarkdown.pre', function (e, t) {
        var n = e.getAttribute('prenum')
        return '<pre>' + t.preList[n] + '</pre>'
      }),
      t.subParser('makeMarkdown.strikethrough', function (e, n) {
        var r = ''
        if (e.hasChildNodes()) {
          r += '~~'
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser('makeMarkdown.node')(i[a], n)
          r += '~~'
        }
        return r
      }),
      t.subParser('makeMarkdown.strong', function (e, n) {
        var r = ''
        if (e.hasChildNodes()) {
          r += '**'
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser('makeMarkdown.node')(i[a], n)
          r += '**'
        }
        return r
      }),
      t.subParser('makeMarkdown.table', function (e, n) {
        var r,
          i,
          o = '',
          a = [[], []],
          s = e.querySelectorAll('thead>tr>th'),
          u = e.querySelectorAll('tbody>tr')
        for (r = 0; r < s.length; ++r) {
          var c = t.subParser('makeMarkdown.tableCell')(s[r], n),
            l = '---'
          if (s[r].hasAttribute('style'))
            switch (
              s[r].getAttribute('style').toLowerCase().replace(/\s/g, '')
            ) {
              case 'text-align:left;':
                l = ':---'
                break
              case 'text-align:right;':
                l = '---:'
                break
              case 'text-align:center;':
                l = ':---:'
            }
          ;(a[0][r] = c.trim()), (a[1][r] = l)
        }
        for (r = 0; r < u.length; ++r) {
          var d = a.push([]) - 1,
            h = u[r].getElementsByTagName('td')
          for (i = 0; i < s.length; ++i) {
            var p = ' '
            void 0 !== h[i] &&
              (p = t.subParser('makeMarkdown.tableCell')(h[i], n)),
              a[d].push(p)
          }
        }
        var f = 3
        for (r = 0; r < a.length; ++r)
          for (i = 0; i < a[r].length; ++i) {
            var g = a[r][i].length
            g > f && (f = g)
          }
        for (r = 0; r < a.length; ++r) {
          for (i = 0; i < a[r].length; ++i)
            1 === r
              ? ':' === a[r][i].slice(-1)
                ? (a[r][i] =
                    t.helper.padEnd(a[r][i].slice(-1), f - 1, '-') + ':')
                : (a[r][i] = t.helper.padEnd(a[r][i], f, '-'))
              : (a[r][i] = t.helper.padEnd(a[r][i], f))
          o += '| ' + a[r].join(' | ') + ' |\n'
        }
        return o.trim()
      }),
      t.subParser('makeMarkdown.tableCell', function (e, n) {
        var r = ''
        if (!e.hasChildNodes()) return ''
        for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
          r += t.subParser('makeMarkdown.node')(i[a], n, !0)
        return r.trim()
      }),
      t.subParser('makeMarkdown.txt', function (e) {
        var n = e.nodeValue
        return (
          (n = (n = n.replace(/ +/g, ' ')).replace(/¨NBSP;/g, ' ')),
          (n = (n = (n = (n = (n = (n = (n = (n = (n =
            t.helper.unescapeHTMLEntities(n)).replace(
            /([*_~|`])/g,
            '\\$1'
          )).replace(/^(\s*)>/g, '\\$1>')).replace(/^#/gm, '\\#')).replace(
            /^(\s*)([-=]{3,})(\s*)$/,
            '$1\\$2$3'
          )).replace(/^( {0,3}\d+)\./gm, '$1\\.')).replace(
            /^( {0,3})([+-])/gm,
            '$1\\$2'
          )).replace(/]([\s]*)\(/g, '\\]$1\\(')).replace(
            /^ {0,3}\[([\S \t]*?)]:/gm,
            '\\[$1]:'
          ))
        )
      })
    'function' == typeof define && define.amd
      ? define(function () {
          return t
        })
      : 'undefined' != typeof module && module.exports
      ? (module.exports = t)
      : (this.showdown = t)
  }.call(this),
  (function (e) {
    var t,
      n = {},
      r = navigator.userAgent.toLowerCase(),
      i =
        (navigator.platform,
        r.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [])
    ;/trident/i.test(i[1]) &&
      ((t = /\brv[ :]+(\d+)/g.exec(r) || []),
      (i[1] = 'IE'),
      (i[2] = t[1] || '')),
      'Chrome' === i[1] &&
        null != (t = r.match(/\b(OPR|Edge)\/(\d+)/)) &&
        ((i[1] = 'Opera'), (i[2] = t[1] || '')),
      (i = i[2]
        ? [i[1], i[2]]
        : [navigator.appName, navigator.appVersion, '-?']),
      null != (t = r.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]),
      (n.browser = i[0]),
      (n.browserVersion = i[1])
    var o,
      a,
      s = [
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
        { s: 'Windows Vista', r: /Windows NT 6.0/ },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
        {
          s: 'Windows NT 4.0',
          r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
        },
        { s: 'Windows CE', r: /Windows CE/ },
        { s: 'Windows 3.11', r: /Win16/ },
        { s: 'Android', r: /Android/ },
        { s: 'Open BSD', r: /OpenBSD/ },
        { s: 'Sun OS', r: /SunOS/ },
        { s: 'Linux', r: /(Linux|X11)/ },
        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
        { s: 'Mac OS X', r: /Mac OS X/ },
        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: 'QNX', r: /QNX/ },
        { s: 'UNIX', r: /UNIX/ },
        { s: 'BeOS', r: /BeOS/ },
        { s: 'OS/2', r: /OS\/2/ },
        {
          s: 'Search Bot',
          r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
        },
      ]
    for (var u in s) {
      var c = s[u]
      if (c.r.test(navigator.userAgent)) {
        o = c.s
        break
      }
    }
    switch (
      (/Windows/.test(o) && ((a = /Windows (.*)/.exec(o)[1]), (o = 'Windows')),
      o)
    ) {
      case 'Mac OS X':
        a = /Mac OS X (10[\.\_\d]+)/.exec(navigator.userAgent)[1]
        break
      case 'Android':
        a = /Android ([\.\_\d]+)/.exec(navigator.userAgent)[1]
        break
      case 'iOS':
        a =
          (a = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion))[1] +
          '.' +
          a[2] +
          '.' +
          (0 | a[3])
    }
    ;(n.os = o), (n.osVersion = a), (e.boInfo = n)
  })(window)
var img_limit = 5120,
  audio_limit = 10240,
  video_limit = 25600
if (void 0 === color1) var color1 = 'RGBA(255, 125, 73, 0.75)'
if (void 0 === color2) var color2 = '#9BCD9B'
if (void 0 === color3) var color3 = 'white'
var css =
    '.shuoshuo_row{width: 100%;margin-top: 10px;display: flex;}.artitalk_child{width: 100%}#shuoshuo_content {padding: 10px;/* min-height: 500px; */}/* shuo */body.theme-dark .cbp_tmtimeline::before {background: RGBA(255, 255, 255, 0.06);}ul.cbp_tmtimeline {padding: 0;}.cbp_tmtimeline {margin: 30px 0 0 0;padding: 0;list-style: none;display: inline;position: relative;}/* The line */.cbp_tmtimeline:before {content: "";position: absolute;top: 0;bottom: 0;width: 4px;background: RGBA(0, 0, 0, 0.02);left: 80px;margin-left: 10px;}/* The date/time */.cbp_tmtimeline>li .cbp_tmtime {display: block;/* width: 29%; *//* padding-right: 110px; */max-width: 70px;position: absolute;}.cbp_tmtimeline>li .cbp_tmtime span {display: block;text-align: right;}.cbp_tmtimeline>li .cbp_tmtime span:first-child {font-size: 0.9em;color: #bdd0db;}.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;color: #9BCD9B;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {color: RGBA(255, 125, 73, 0.75);}div.cbp_tmlabel>p {margin-bottom: 0;}/* Right content */div class.cdp_tmlabel>li .cbp_tmlabel {margin-bottom: 0;}.cbp_tmtimeline>li .cbp_tmlabel {margin: 0 0 45px 65px;z-index: 1;background: ' +
    color2 +
    ';color:' +
    color3 +
    ' ;padding: .8em 1.2em .4em 1.2em;/* font-size: 1.2em; */font-weight: 300;line-height: 1.4;position: relative;border-radius: 5px;transition: all 0.3s ease 0s;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);cursor: pointer;display: block;}.cbp_tmlabel:hover {/* transform:scale(1.05); */transform: translateY(-3px);z-index: 1;box-shadow: 0 15px 32px rgba(0, 0, 0, 0.15) !important}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {background: ' +
    color1 +
    ';}/* The triangle */.cbp_tmtimeline>li .cbp_tmlabel:after {right: 100%;border: solid transparent;z-index: -1;content: " ";height: 0;width: 0;position: absolute;pointer-events: none;border-right-color: ' +
    color2 +
    ';border-width: 10px;top: 4px;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {border-right-color:' +
    color1 +
    ';}p.shuoshuo_time {margin-top: 10px;border-top: 1px dashed #fff;padding-top: 5px;font-size: 12px;}/* Media */@media screen and (max-width: 65.375em) {.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;}}.shuoshuo_author_img img {border: 1px solid #ddd;padding: 2px;float: left;border-radius: 64px;transition: all 1.0s;}/* end */.artitalk_avatar {border-radius: 100% !important;-moz-border-radius: 100% !important;box-shadow: inset 0 -1px 0 3333sf;-webkit-box-shadow: inset 0 -1px 0 3333sf;-webkit-transition: 0.4s;-webkit-transition: -webkit-transform 0.4s ease-out;transition: transform 0.4s ease-out;-moz-transition: -moz-transform 0.4s ease-out;}.artitalk_avatar:hover {-webkit-transform: rotateZ(360deg);-moz-transform: rotateZ(360deg);-o-transform: rotateZ(360deg);-ms-transform: rotateZ(360deg);transform: rotateZ(360deg);}/* content */.shuoshuo_text {width: 100%;height: 130px;padding: 8px 16px;background-repeat: no-repeat;background-position: right;transition: all .35s ease-in-out 0s;outline-style: none;border: 1px solid #ccc;border-radius: 6px;resize: none;background-color: transparent;color: #999;}/* password */.shuoshuo_inputs {outline-style: none;border: 1px solid #ccc;padding: 8px 16px;width: 40%;font-size: 12px;background-color: transparent;color: #999;}.button {background-color: ' +
    color1 +
    ';/* Green */border: none;margin-left: 5px;color:' +
    color3 +
    ';padding: 8px 16px;text-align: center;text-decoration: none;height: auto;line-height: 20px;display: inline-block;font-size: 12px;border-radius: 12px;/* circle */outline: none;cursor: pointer;}.button:hover {background-color: ' +
    color2 +
    ';box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 8px 16px 0 rgba(0, 0, 0, 0.19);}/* butterfly theme adapter */#article-container ul p {margin: 0 0 1rem;}/* version */.power {text-align: right;color: #999;margin-top: 10px;font-size: .75em;padding: .5em 0;}.power a {font-size: .75em;position: relative;cursor: pointer;color: #1abc9c;text-decoration: none;display: inline-block;}/* row */.shuoshuo_row .col.col-80 {width: 80%;float: left;}.shuoshuo_row .col.col-20 {width: 20%;float: right;text-align: right;}#preview {width: 100%;float: left;margin: .5rem 0 0;padding: 7px;box-shadow: 0 0 1px #f0f0f0;}/* lazyload */#lazy {background: #ffffff;bottom: 0;left: 0;position: fixed;right: 0;top: 0;z-index: 9999;}@import "compass/css3";.preloader {position: absolute;margin-left: -55px;margin-top: -100px;height: 110px;width: 110px;left: 50%;top: 50%;}path {stroke: #9ea1a4;stroke-width: 0.25;}#cloud {position: relative;z-index: 2;}#cloud path {fill: #efefef;}#sun {margin-left: -10px;margin-top: 6px;opacity: 0;width: 60px;height: 60px;position: absolute;left: 45px;top: 15px;z-index: 1;animation-name: rotate;animation-duration: 16000ms;animation-iteration-count: infinite;animation-timing-function: linear;}#sun path {stroke-width: 0.18;fill: #9ea1a4;}@keyframes rotate {0% {transform: rotateZ(0deg);}100% {transform: rotateZ(360deg);}}/* Rain */.rain {position: absolute;width: 70px;height: 70px;margin-top: -32px;margin-left: 19px;}.drop {opacity: 1;background: #9ea1a4;display: block;float: left;width: 3px;height: 10px;margin-left: 4px;border-radius: 0px 0px 6px 6px;animation-name: drop;animation-duration: 350ms;animation-iteration-count: infinite;}.drop:nth-child(1) {animation-delay: -130ms;}.drop:nth-child(2) {animation-delay: -240ms;}.drop:nth-child(3) {animation-delay: -390ms;}.drop:nth-child(4) {animation-delay: -525ms;}.drop:nth-child(5) {animation-delay: -640ms;}.drop:nth-child(6) {animation-delay: -790ms;}.drop:nth-child(7) {animation-delay: -900ms;}.drop:nth-child(8) {animation-delay: -1050ms;}.drop:nth-child(9) {animation-delay: -1130ms;}.drop:nth-child(10) {animation-delay: -1300ms;}@keyframes drop {50% {height: 45px;opacity: 0;}51% {opacity: 0;}100% {height: 1px;opacity: 0;}}.artitalk_loading_text {font-family: Helvetica, "Helvetica Neue", sans-serif;letter-spacing: 1px;text-align: center;margin-left: -43px;font-weight: bold;margin-top: 20px;font-size: 11px;color: #a0a0a0;width: 200px;} .shuoshuoimg{cursor: pointer;transition: all 1s;z-index: 2;}.shuoshuoimg:hover{transform: scale(3.5);} .hide{display: none;}.c1{position: fixed;top:0;bottom: 0;left:0;right: 0;background: rgba(0,0,0,.5);z-index: 2;}.c2{background-color: white;position: fixed;width: 400px;height: auto;top:50%;left: 50%;z-index: 3;margin-top: -150px;margin-left: -200px;box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);opacity: 0.85;border: 0;border-radius: 10px;}.shuoshuo_input_log {outline-style: none;margin-top: 10px;border: 1px solid #ccc;border-radius: 6px;padding: 8px 16px;font-size: 12px;background-color: transparent;color: #999;}.delete_right {cursor: pointer;width: 12px;height: 12px;position: absolute;right: 12px;}svg{display: inline}.cbp_tmlabel>p,h1,h2,h3,h4,h5,h6,em {word-wrap: break-word;word-break: break-all;}.shuoshuo_emoji {border: 1px solid #ccc;border-radius: 6px 6px 0 0;height: 120px;overflow: auto;margin-top: 10px;border-bottom:none}.atemoji {max-height: 28px;width: 28px;display: inline;vertical-align: middle;}.shuoshuo_emoji>.atemoji{cursor: pointer;margin: 0 0 0 10px;display: inline;}i>.atemoji{cursor: pointer;margin: 0 0 0 10px;}.shuoshuo_emoji>a{display: inline}#preview>p>.atemoji {display: inline;}.shuoshuo_emoji>.atemoji:hover {transform:scale(1.5);}div#shuoshuo_emojiswitch {height: 40px;width: auto;border-radius: 0 0 6px 6px;border-collapse: collapse;border: 1px solid #ccc;border-top: none;}.shuoshuo_emoji_part {width: 25%;cursor: pointer;align-content: center;text-align: center;line-height: 40px;}.shuoshuo_emoji_part:hover {background-color: #CCC;color: white;}.zuiliangdezai {background-color: #CCC;color: white;}.pingjun{display: flex;}#article-container img {margin: 0 0 0 0;}.preview_now{display: none}div#loading_txt {font-size: 20px;}audio{display: block;width: 100%;outline: none;opacity: 0.8;}video{z-index: 0;}textarea#neirong:focus {background-position-y: 150px;transition: all .35s ease-in-out 0s;}img.atemoji {max-height: 28px;width: 28px;display: inline;vertical-align: middle;}span.cbp_tmlabel>p {overflow: unset;}ul#maina>li {list-style: none;}div#artitalk_main {transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);}.c2>center>p {margin-top: 10px;margin-bottom: 10px;}',
  style = document.createElement('style')
if (
  ((style.type = 'text/css'),
  (style.innerHTML = css),
  (style.id = 'add-Artitalk-Style'),
  document.getElementsByTagName('HEAD').item(0).appendChild(style),
  void 0 === placeholder1)
)
  var placeholder1 = ''
if (void 0 === per) var per = 5
if (void 0 === bgimg) var bgimg = ''
if (void 0 === lazy) var lazy = 1
if (void 0 === slanguage) var slanguage = 'zh'
if ('zh' == slanguage)
  var text0 = '由',
    text00 = '发表',
    text1 = '加载更多...',
    text2 = '预览',
    text3 = '发布',
    text4 = '已登录',
    text5 = '确定',
    text6 = '退出登录',
    text7 = '用户',
    text8 = '密码',
    text9 = '登录',
    text10 = '取消',
    text11 = '发布说说',
    text12 = '添加图片，视频，音乐',
    text14 = '(上传失败，若非网络原因，请联系Artitalk开发人员)',
    text15 = '请先登录',
    text16 = '内容不能为空',
    text17 = '登陆失败，请检查用户名及密码是否正确',
    text18 = '头像url',
    text19 = '确定删除本条说说吗？',
    text20 = '删除成功',
    text21 = '请拖拽图片到此处',
    text22 = '表情',
    text23 = '删除',
    text24 =
      '如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持',
    text25 = '上传中',
    text26 = '图片',
    text27 = '音乐',
    text28 = '视频',
    text29 = '添加',
    text30 = '上传的图片最大支持5M，请压缩后或换一个继续上传',
    text31 = '上传的音乐最大支持10M，请压缩后或换一个继续上传',
    text32 = '上传的视频最大支持30M，请压缩后或换一个继续上传',
    text33 = '图片格式错误，请不要上传其他类型的文件',
    text34 = '音频格式错误，请不要上传其他类型的文件',
    text35 = '视频格式错误，请不要上传其他类型的文件',
    textup = '上传ing',
    loadingTxT = '加载中'
else if ('en' == slanguage)
  var text0 = 'Published by',
    text00 = '',
    text1 = 'load more...',
    text2 = 'Preview',
    text3 = 'Publish',
    text4 = 'logged',
    text5 = 'Ok',
    text6 = 'Sign out',
    text7 = 'Username',
    text8 = 'Password',
    text9 = 'Log in',
    text10 = 'Cancel',
    text11 = 'Post talk',
    text12 = 'Add pictures, videos, music',
    text14 =
      '(Upload failed, if not for network reasons, please contact Artitalk developers)',
    text15 = 'Please log in first',
    text16 = 'Content can not be blank',
    text17 =
      'Login failed, please check if the username and password are correct',
    text18 = 'Avatar url',
    text19 = 'Are you sure you want to delete this article?',
    text20 = 'Successfully deleted',
    text21 = 'Please drag and drop pictures here',
    text22 = 'emoji',
    text23 = 'Delete',
    text24 =
      'If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.',
    text25 = 'uploading',
    text26 = 'image',
    text27 = 'music',
    text28 = 'video',
    text29 = 'Add',
    text30 =
      'The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading',
    text31 =
      'The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading',
    text32 =
      'The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading',
    text33 = 'Picture format error, please do not upload other types of files',
    text34 =
      'The audio format is wrong, please do not upload other types of files',
    text35 = 'Video format error, please do not upload other types of files',
    textup = 'Uploading',
    loadingTxT = 'Loading'
else if ('es' == slanguage)
  var text0 = 'Publicado por',
    text00 = '',
    text1 = 'Carga más...',
    text2 = 'Avance',
    text3 = 'Lanzamiento',
    text4 = 'Registrado',
    text5 = 'Determinar',
    text6 = 'Desconectar',
    text7 = 'Usuario',
    text8 = 'Contraseña',
    text9 = 'Iniciar sesión',
    text10 = 'Cancelar',
    text11 = 'Publicar charla',
    text12 = 'Agrega fotos, videos, música',
    text14 =
      '(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)',
    text15 = 'Por favor ingresa primero',
    text16 = 'El contenido no puede estar en blanco',
    text17 =
      'Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos',
    text18 = 'URL del avatar',
    text19 = '¿Estás seguro de que deseas eliminar este artículo?',
    text20 = 'Eliminado con éxito',
    text21 = 'Arrastra y suelta fotos aquí',
    text22 = 'expresión',
    text23 = 'Eliminar',
    text24 =
      'Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.',
    text25 = 'cargando',
    text26 = 'imagen',
    text27 = 'música',
    text28 = 'vídeo',
    text29 = 'Añadir',
    text30 =
      'La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando',
    text31 =
      'La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando',
    text32 =
      'El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo',
    text33 = 'Error de formato de imagen, no suba otros tipos de archivos',
    text34 =
      'El formato de audio es incorrecto, no suba otros tipos de archivos',
    text35 = 'Error de formato de video, no suba otros tipos de archivos',
    textup = 'Cargando',
    loadingTxT = 'Cargando'
if (void 0 === placeholder2) var placeholder2 = text18
var artitalk_emoji = '',
  artitalk_emoji_bb = '',
  artitalk_emoji_tb = '',
  artitalk_emoji_qq = ''
if (void 0 === atemoji_array) var atemoji_array = {}
var atemoji_array_qq = {
    qq_aini: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aini.gif',
    qq_aixin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aixin.gif',
    qq_aoman: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aoman.gif',
    qq_baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.gif',
    qq_bangbangtang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bangbangtang.gif',
    qq_baojin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baojin.gif',
    qq_baoquan:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baoquan.gif',
    qq_bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.gif',
    qq_bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.gif',
    qq_cahan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/cahan.gif',
    qq_caidao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/caidao.gif',
    qq_chi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chi.gif',
    qq_ciya: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ciya.gif',
    qq_dabing: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dabing.gif',
    qq_daku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.gif',
    qq_dan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dan.gif',
    qq_deyi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/deyi.gif',
    qq_doge: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.gif',
    qq_fadai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.gif',
    qq_fanu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.gif',
    qq_fendou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fendou.gif',
    qq_ganga: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.gif',
    qq_gouyin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/gouyin.gif',
    qq_guzhang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.gif',
    qq_haixiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.gif',
    qq_hanxiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hanxiao.gif',
    qq_haobang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haobang.gif',
    qq_haqian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haqian.gif',
    qq_hecai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hecai.gif',
    qq_hexie: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hexie.gif',
    qq_huaixiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.gif',
    qq_jie: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jie.gif',
    qq_jingkong:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingkong.gif',
    qq_jingxi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxi.gif',
    qq_jingya: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingya.gif',
    qq_juhua: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/juhua.gif',
    qq_keai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.gif',
    qq_kelian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kelian.gif',
    qq_koubi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.gif',
    qq_ku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ku.gif',
    qq_kuaikule:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kuaikule.gif',
    qq_kulou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kulou.gif',
    qq_kun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun.gif',
    qq_lanqiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lanqiu.gif',
    qq_leiben: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/leiben.gif',
    qq_lenghan:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lenghan.gif',
    qq_liuhan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.gif',
    qq_liulei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.gif',
    qq_nanguo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.gif',
    qq_OK: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.gif',
    qq_penxue: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/penxue.gif',
    qq_piezui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/piezui.gif',
    qq_pijiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/pijiu.gif',
    qq_qiang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiang.gif',
    qq_qiaoda: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiaoda.gif',
    qq_qinqin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.gif',
    qq_qiudale:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiudale.gif',
    qq_quantou:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/quantou.gif',
    qq_saorao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/saorao.gif',
    qq_se: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.gif',
    qq_shengli:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengli.gif',
    qq_shouqiang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shouqiang.gif',
    qq_shuai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuai.gif',
    qq_shui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shui.gif',
    qq_tiaopi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.gif',
    qq_touxiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.gif',
    qq_tu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tu.gif',
    qq_tuosai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuosai.gif',
    qq_weiqu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.gif',
    qq_weixiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weixiao.gif',
    qq_woshou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/woshou.gif',
    qq_wozuimei:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wozuimei.gif',
    qq_wunai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.gif',
    qq_xia: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xia.gif',
    qq_xiaojiujie:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaojiujie.gif',
    qq_xiaoku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.gif',
    qq_xiaoyanger:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoyanger.gif',
    qq_xieyanxiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.gif',
    qq_xigua: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xigua.gif',
    qq_xu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xu.gif',
    qq_yangtuo:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yangtuo.gif',
    qq_yinxian:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yinxian.gif',
    qq_yiwen: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.gif',
    qq_youhengheng:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youhengheng.gif',
    qq_youling:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youling.gif',
    qq_yun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.gif',
    qq_zaijian:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.gif',
    qq_zhayanjian:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhayanjian.gif',
    qq_zhemo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhemo.gif',
    qq_zhouma: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhouma.gif',
    qq_zhuakuang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.gif',
    qq_zuohengheng:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zuohengheng.gif',
  },
  atemoji_array_tb = {
    OK: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.png',
    what: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/what.png',
    不高兴: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/不高兴.png',
    乖: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/乖.png',
    你懂的: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/你懂的.png',
    便便: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/便便.png',
    勉强: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/勉强.png',
    吐: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐.png',
    吐舌: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐舌.png',
    呀咩爹: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呀咩爹.png',
    呵呵: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呵呵.png',
    哈哈: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/哈哈.png',
    啊: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/啊.png',
    喷: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/喷.png',
    大拇指: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/大拇指.png',
    太开心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太开心.png',
    太阳: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太阳.png',
    委屈: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/委屈.png',
    小乖: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小乖.png',
    小红脸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小红脸.png',
    彩虹: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/彩虹.png',
    心碎: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/心碎.png',
    怒: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/怒.png',
    惊哭: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊哭.png',
    惊讶: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊讶.png',
    懒得理: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/懒得理.png',
    手纸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/手纸.png',
    挖鼻: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/挖鼻.png',
    捂嘴笑: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/捂嘴笑.png',
    星星月亮:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/星星月亮.png',
    汗: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/汗.png',
    沙发: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/沙发.png',
    泪: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/泪.png',
    滑稽: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/滑稽.png',
    灯泡: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/灯泡.png',
    爱心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/爱心.png',
    犀利: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/犀利.png',
    狂汗: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/狂汗.png',
    玫瑰: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/玫瑰.png',
    疑问: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/疑问.png',
    真棒: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/真棒.png',
    睡觉: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/睡觉.png',
    礼物: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/礼物.png',
    笑尿: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑尿.png',
    笑眼: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑眼.png',
    红领巾: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/红领巾.png',
    胜利: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/胜利.png',
    花心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/花心.png',
    茶杯: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/茶杯.png',
    药丸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/药丸.png',
    蛋糕: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蛋糕.png',
    蜡烛: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蜡烛.png',
    鄙视: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/鄙视.png',
    酷: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酷.png',
    酸爽: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酸爽.png',
    钱币: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/钱币.png',
    阴险: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/阴险.png',
    音乐: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/音乐.png',
    香蕉: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/香蕉.png',
    黑线: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/黑线.png',
  },
  atemoji_array_bb = {
    baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
    bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
    bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
    chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png',
    daku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png',
    dalao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png',
    dalian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png',
    dianzan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png',
    doge: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png',
    facai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png',
    fadai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png',
    fanu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png',
    ganga: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png',
    guilian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png',
    guzhang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png',
    haixiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png',
    heirenwenhao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png',
    huaixiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png',
    jingxia: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png',
    keai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png',
    koubi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png',
    kun2: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png',
    lengmo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png',
    liubixue:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png',
    liuhan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png',
    liulei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png',
    mudengkoudai:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png',
    nanguo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png',
    outu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png',
    qinqin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png',
    se: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png',
    shengbing:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png',
    shengqi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png',
    shuizhao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png',
    sikao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png',
    tiaokan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png',
    tiaopi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png',
    touxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png',
    tuxue: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png',
    weiqu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png',
    wunai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png',
    xiaoku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png',
    xieyanxiao:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png',
    yiwen: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png',
    yun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png',
    zaijian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png',
    zhoumei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png',
    zhuakuang:
      'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png',
  }
for (var key in atemoji_array)
  artitalk_emoji =
    artitalk_emoji +
    "<img alt='[" +
    key +
    "]' title='" +
    key +
    "' onclick='insert_atemoji(\"[" +
    key +
    "]\")' class='atemoji gallery-group-img' src='" +
    atemoji_array[key] +
    "'/>"
for (var key in atemoji_array_bb)
  artitalk_emoji_bb =
    artitalk_emoji_bb +
    "<img alt='[" +
    key +
    "]' title='" +
    key +
    "' onclick='insert_atemoji(\"[" +
    key +
    "]\")' class='atemoji gallery-group-img' src='" +
    atemoji_array_bb[key] +
    "'/>"
for (var key in atemoji_array_tb)
  artitalk_emoji_tb =
    artitalk_emoji_tb +
    "<img alt='[" +
    key +
    "]' title='" +
    key +
    "' onclick='insert_atemoji(\"[" +
    key +
    "]\")' class='atemoji gallery-group-img' src='" +
    atemoji_array_tb[key] +
    "'/>"
for (var key in atemoji_array_qq)
  artitalk_emoji_qq =
    artitalk_emoji_qq +
    "<img alt='[" +
    key +
    "]' title='" +
    key +
    "' onclick='insert_atemoji(\"[" +
    key +
    "]\")' class='atemoji gallery-group-img' src='" +
    atemoji_array_qq[key] +
    "'/>"
function insert_atemoji(e) {
  var t = document.getElementById('neirong'),
    n = t.value.length
  t.focus(),
    void 0 !== document.selection
      ? (document.selection.createRange().text = e)
      : (t.value =
          t.value.substr(0, t.selectionStart) +
          e +
          t.value.substring(t.selectionStart, n)),
    preview()
}
function shuoshuo_emoji_QQ() {
  document.getElementById('switch_1').classList.remove('zuiliangdezai'),
    document.getElementById('switch_2').classList.remove('zuiliangdezai'),
    document.getElementById('switch_3').classList.add('zuiliangdezai'),
    document.getElementById('switch_4').classList.remove('zuiliangdezai'),
    $('#shuoshuo_emoji_QQ').hasClass('hide') &&
      ($('#shuoshuo_emoji_BiliBili').hasClass('hide') ||
        document
          .getElementById('shuoshuo_emoji_BiliBili')
          .classList.add('hide'),
      $('#shuoshuo_emoji_custom').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide'),
      $('#shuoshuo_emoji_Tieba').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide'),
      document.getElementById('shuoshuo_emoji_QQ').classList.remove('hide'))
}
function shuoshuo_emoji_BiliBili() {
  document.getElementById('switch_1').classList.remove('zuiliangdezai'),
    document.getElementById('switch_2').classList.add('zuiliangdezai'),
    document.getElementById('switch_3').classList.remove('zuiliangdezai'),
    document.getElementById('switch_4').classList.remove('zuiliangdezai'),
    $('#shuoshuo_emoji_BiliBili').hasClass('hide') &&
      ($('#shuoshuo_emoji_QQ').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide'),
      $('#shuoshuo_emoji_custom').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide'),
      $('#shuoshuo_emoji_Tieba').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide'),
      document
        .getElementById('shuoshuo_emoji_BiliBili')
        .classList.remove('hide'))
}
function shuoshuo_emoji_Custom() {
  document.getElementById('switch_1').classList.remove('zuiliangdezai'),
    document.getElementById('switch_2').classList.remove('zuiliangdezai'),
    document.getElementById('switch_3').classList.remove('zuiliangdezai'),
    document.getElementById('switch_4').classList.add('zuiliangdezai'),
    $('#shuoshuo_emoji_custom').hasClass('hide') &&
      ($('#shuoshuo_emoji_QQ').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide'),
      $('#shuoshuo_emoji_BiliBili').hasClass('hide') ||
        document
          .getElementById('shuoshuo_emoji_BiliBili')
          .classList.add('hide'),
      $('#shuoshuo_emoji_Tieba').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide'),
      document.getElementById('shuoshuo_emoji_custom').classList.remove('hide'))
}
function shuoshuo_emoji_Tieba() {
  document.getElementById('switch_1').classList.add('zuiliangdezai'),
    document.getElementById('switch_2').classList.remove('zuiliangdezai'),
    document.getElementById('switch_3').classList.remove('zuiliangdezai'),
    document.getElementById('switch_4').classList.remove('zuiliangdezai'),
    $('#shuoshuo_emoji_Tieba').hasClass('hide') &&
      ($('#shuoshuo_emoji_QQ').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide'),
      $('#shuoshuo_emoji_BiliBili').hasClass('hide') ||
        document
          .getElementById('shuoshuo_emoji_BiliBili')
          .classList.add('hide'),
      $('#shuoshuo_emoji_custom').hasClass('hide') ||
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide'),
      document.getElementById('shuoshuo_emoji_Tieba').classList.remove('hide'))
}
var sting =
    '<div id=\'artitalk_part1\'><div id="main" class="site-main" role="main"><div id="shuoshuo_content"><div id="ccontent"></div><center><button id="readmore" class="button" onclick="shuoshuo_readmore()" style="margin-bottom: 15px;display: none">' +
    text1 +
    '</button></center></div><div id="shuoshuo_input" class="shuoshuo_active" style="display: none;"><div id="shuoshuo_edit"><textarea class="shuoshuo_text" oninput="preview()" id="neirong" placeholder="' +
    placeholder1 +
    '"style="background-image: url(' +
    bgimg +
    ');z-index: 0"></textarea><span id="drag_area" class="z-index: -1;"></span></div><div id="shuoshuo_parttwo" class="shuoshuo_parttwo"><div id="shuoshuo_emoji_Tieba" class="shuoshuo_emoji hide"></div><div id="shuoshuo_emoji_BiliBili" class="shuoshuo_emoji hide"></div><div id="shuoshuo_emoji_QQ" class="shuoshuo_emoji hide"></div><div id="shuoshuo_emoji_custom" class="shuoshuo_emoji hide"></div><div id="shuoshuo_emojiswitch" class="shuoshuo_emojiswitch hide"><div id="switch_1" class="shuoshuo_emoji_part zuiliangdezai" onclick="shuoshuo_emoji_Tieba()">Tieba</div><div id="switch_2" class="shuoshuo_emoji_part" onclick="shuoshuo_emoji_BiliBili()">BiliBili</div><div id="switch_3" class="shuoshuo_emoji_part" onclick="shuoshuo_emoji_QQ()">QQ</div><div id="switch_4" class="shuoshuo_emoji_part" onclick="shuoshuo_emoji_Custom()">Custom</div></div><div id="preview" class="preview_now"></div></div><div class="shuoshuo_submit"><div class="shuoshuo_row"><input class="artitalk_child shuoshuo_inputs" id="touxiang" value="" placeholder="' +
    text18 +
    '"><div class="artitalk_child"><button class="button" onclick="savecontent()" style="float: right;">' +
    text3 +
    '</button><button class="button" onclick="preview_ohuo();" style="float: right;">' +
    text2 +
    '</button><button class="button" onclick="upload_in()" style="float: right;">' +
    text29 +
    '</button><button class="button" onclick="shuoshuo_emoji_lovefancybox()" style="float: right;">' +
    text22 +
    '</button></div></div></div></div></div><div class="power"><div style="font-size: 25px;display: inline; cursor: pointer" onclick="artitalk(); "title="' +
    text11 +
    '"><svg t="1591347684072"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30"  style="display: inline"><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" onclick="swtichuser()" title="' +
    text9 +
    '"><svg t="1591347848063"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12288" width="30" height="30"  style="display: inline"><path d="M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z" p-id="12289" fill="#707070"></path></svg></div><br>Powered By <a href="https://artitalk.js.org" target="_blank">Artitalk</a><br>' +
    version +
    '</div></div>',
  lazys =
    '<div id=\'lazy\'><div class="preloader" style="opacity: 1; "><svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"style="opacity: 1; margin-left: 0px; margin-top: 0px;"><g><path fill="none"d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path><path fill="none"d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path><path fill="none"d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path><path fill="none"d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path><path fill="none"d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path><path fill="none"d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path><path fill="none"d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path><path fill="none"d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path><path fill="none"d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path><path fill="none"d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path><path fill="none"d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path><path fill="none"d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path><path fill="none"d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"</path></g></svg><svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="110px" height="110px" viewBox="0 0 10 10" enable-background="new 0 0 10 10"xml:space="preserve"><path fill="none"d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path></svg><div class="rain"><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span></div><div class="artitalk_loading_text" id="loading_txt">' +
    loadingTxT +
    '</div></div></div>',
  operare_artitalk_content =
    '<input type="file" id="myimg" onchange="imgChange(this)" style="display: none" accept="image/*"/><input type="file" id="myaudio" onchange="audioChange(this)" style="display: none" accept="audio/*"><input type="file" id="myvideo" onchange="videoChange(this)" style="display: none" accept="video/*"><div id="shade" class="c1 hide"></div><div id="shuoshuo-modal" class="c2 hide"><center><p>' +
    text7 +
    '：<input type="text" class="shuoshuo_input_log" id="username"/></p><p>' +
    text8 +
    '：<input type="password" class="shuoshuo_input_log"  id="pwd"/></p><p><input type="button" value="' +
    text9 +
    '" class="button" onclick="Login();">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="' +
    text10 +
    '"  class="button" onclick="Hide();"></p></center><center><div id="logw"></div></center></div><div id="userinfo" class="c2 hide"><center><p><div id="status"></div></p><p><input type="button" class="button" value="' +
    text5 +
    '" onclick="hideuser();">&nbsp;&nbsp;&nbsp;&nbsp;<input id="tui" type="button" value="' +
    text6 +
    '" class="button" style="display: none;" onclick="Louout();"></p></center></div><div id="shanchu" class="c2 hide"><center><p>' +
    text20 +
    '</p><p><input type="button" class="button" value="' +
    text5 +
    '" onclick="hide3();"></p><center></div><div id="shanchur" class="c2 hide"><center><p>' +
    text19 +
    '</p><p><div id="delete1"></div></p><center></div><div id="upload_parttwo" class="c2 hide"><center><p></p><div id="status">' +
    text29 +
    '</div><p><input type="button" class="button" value="' +
    text26 +
    '" onclick="myimg.click();"><input type="button" class="button" value="' +
    text27 +
    '" onclick="myaudio.click();"><input type="button" class="button" value="' +
    text28 +
    '" onclick="myvideo.click();"><input type="button" class="button" value="' +
    text10 +
    '" onclick="upload_out();"></p></center></div>',
  operare_artitalk = document.createElement('div')
;(operare_artitalk.id = 'operare_artitalk'),
  document.body.append(operare_artitalk),
  (document.getElementById('operare_artitalk').innerHTML =
    operare_artitalk_content),
  0 == lazy
    ? ($('#lazy').remove(),
      (sting += '<div id="loading_txt" style="display: none">'))
    : (sting = lazys + sting),
  (document.getElementById('artitalk_main').innerHTML = sting)
var pos = '',
  oss = ''
function preview_ohuo() {
  $('#preview').hasClass('preview_now')
    ? document.getElementById('preview').classList.remove('preview_now')
    : document.getElementById('preview').classList.add('preview_now')
}
function preview() {
  var e = document.getElementById('neirong').value
  for (var t in atemoji_array)
    for (
      var n = '[' + t + ']',
        r =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array[t] +
          "'/>";
      -1 != e.indexOf(n);

    )
      e = e.replace(n, r)
  for (var t in atemoji_array_bb)
    for (
      n = '[' + t + ']',
        r =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_bb[t] +
          "'/>";
      -1 != e.indexOf(n);

    )
      e = e.replace(n, r)
  for (var t in atemoji_array_qq)
    for (
      n = '[' + t + ']',
        r =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_qq[t] +
          "'/>";
      -1 != e.indexOf(n);

    )
      e = e.replace(n, r)
  for (var t in atemoji_array_tb)
    for (
      n = '[' + t + ']',
        r =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_tb[t] +
          "'/>";
      -1 != e.indexOf(n);

    )
      e = e.replace(n, r)
  var i = new showdown.Converter().makeHtml(e)
  document.getElementById('preview').innerHTML = i
}
;($.ajaxSettings.async = !1),
  $(document).ready(function () {
    $.getJSON('https://api.ip.sb/geoip?callback=?', function (e) {
      pos += e.city + ' ' + e.region + ' ' + e.country
    })
  }),
  (oss = boInfo.os),
  document.all
    ? window.attachEvent('onload', seecontent(0))
    : window.addEventListener('load', seecontent(0), !1)
var shuopage = 0
function shuoshuo_readmore() {
  $('#readmore').fadeOut(), $('#lazy').fadeIn(), seecontent((shuopage += 1))
}
function savecontent() {
  var e
  if (!(s = AV.User.current()))
    return (
      (document.getElementById('logw').innerHTML =
        '<center><pre><code>' + text15 + '</code></pre></center>'),
      void artitalk()
    )
  e = s.attributes.img
  var t = document.getElementById('neirong').value
  for (var n in atemoji_array)
    for (
      var r = '[' + n + ']',
        i =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array[n] +
          "'/>";
      -1 != t.indexOf(r);

    )
      t = t.replace(r, i)
  for (var n in atemoji_array_bb)
    for (
      r = '[' + n + ']',
        i =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_bb[n] +
          "'/>";
      -1 != t.indexOf(r);

    )
      t = t.replace(r, i)
  for (var n in atemoji_array_qq)
    for (
      r = '[' + n + ']',
        i =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_qq[n] +
          "'/>";
      -1 != t.indexOf(r);

    )
      t = t.replace(r, i)
  for (var n in atemoji_array_tb)
    for (
      r = '[' + n + ']',
        i =
          "<img class='atemoji gallery-group-img' src='" +
          atemoji_array_tb[n] +
          "'/>";
      -1 != t.indexOf(r);

    )
      t = t.replace(r, i)
  var o = document.getElementById('touxiang').value
  '' != o && (e = o)
  var a = new showdown.Converter().makeHtml(t),
    s = AV.User.current()
  if ('' == t)
    return (
      document.getElementById('preview').classList.remove('preview_now'),
      void (document.getElementById('preview').innerHTML =
        '<center><pre><code>' + text16 + '</code></pre></center>')
    )
  var u = new (AV.Object.extend('shuoshuo'))()
  u.set('content', a),
    u.set('postion', pos),
    u.set('os', oss),
    u.set('imgurl', e),
    u.set('star_init', '1'),
    $('#lazy').fadeIn(),
    u.save().then(function (e) {
      var t = new (AV.Object.extend('star'))(),
        n = e.id
      t.set('perid', n),
        t.set('star', 0),
        t.save().then(function () {
          location.reload()
        })
    })
}
var mid = ''
function artitalk_star(e) {
  var t = new AV.Query('star')
  t.equalTo('perid', e),
    t.find().then((t) => {
      t.forEach(function (t) {
        var n = t.attributes.star + 1,
          r = t.id
        let i = AV.Object.createWithoutData('star', r)
        i.set('star', n),
          i.save().then(function () {
            var t = 'artitalk_star_svg_' + e
            ;(document.getElementById(e).innerText = n),
              (document.getElementById(t).innerHTML = stared_svg)
          })
      })
    })
}
var stared_svg =
  '<svg t="1593770313039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="16" height="16" fill="' +
  color3 +
  '"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" fill="" p-id="2092"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" fill="" p-id="2093"></path></svg>'
function seecontent(e) {
  var t = ''
  0 == e &&
    ('undefined' == typeof severurl
      ? AV.init({ appId: appID, appKey: appKEY })
      : AV.init({ appId: appID, appKey: appKEY, serverURL: severurl }))
  var n = AV.User.current()
  n && $('#key').fadeOut()
  var r = new AV.Query('shuoshuo'),
    i = 0
  r.descending('createdAt'),
    r.limit(per),
    r.skip(per * e),
    r.find().then(function (r) {
      ;(mid = ''),
        r.forEach(function (e) {
          i += 1
          var t = e.id,
            r = new AV.Query('star')
          r.equalTo('perid', t)
          var o = e.attributes.content
          if (void 0 === e.attributes.star_init) {
            var a = new (AV.Object.extend('star'))()
            a.set('perid', t),
              a.set('star', 0),
              a.save().then(function () {
                let e = AV.Object.createWithoutData('shuoshuo', t)
                e.set('star_init', '1'), e.save()
              })
          }
          r.find().then(function (e) {
            e.forEach(function (e) {
              var n = e.attributes.star
              document.getElementById(t).innerText = n
            })
          })
          var s,
            u = e.attributes.os,
            c = e.createdAt,
            l = ''
          ;(l =
            'Windows' == u
              ? '<svg t="1591348521231"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16474" width="10" height="10"  style="display: inline"><path d="M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z" p-id="16475" fill="' +
                color3 +
                '"></path></svg> '
              : 'Android' == u
              ? '<svg t="1591349177001"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17355" width="10" height="10"  style="display: inline"><path d="M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z" fill="' +
                color3 +
                '" p-id="17356"></path></svg> '
              : 'Linux' == u
              ? '<svg t="1591349455279"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896" width="10" height="10"  style="display: inline"><path d="M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z" fill="' +
                color3 +
                '" p-id="17897"></path></svg> '
              : 'iOS' == u
              ? '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' +
                color3 +
                '"></path></svg> '
              : 'Mac' == u
              ? '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' +
                color3 +
                '"></path></svg> '
              : '<svg t="1591349738696"  viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20407" width="10" height="10"  style="display: inline"><path d="M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z" p-id="20408" fill="' +
                color3 +
                '"></path></svg> '),
            void 0 === (s = e.attributes.imgurl) &&
              (s = 'https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png')
          var d = new Date(c),
            h = 'style="display: none"'
          function p(e) {
            return e < 10 ? '0' + e : e
          }
          n && (h = '')
          const f =
              d.getFullYear() +
              '-' +
              p(d.getMonth() + 1) +
              '-' +
              p(d.getDate()),
            g =
              p(d.getHours()) +
              ':' +
              p(d.getMinutes()) +
              ':' +
              p(d.getSeconds())
          var m,
            _ = d.getHours()
          _ >= 0 && _ < 5
            ? (m =
                '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' +
                color3 +
                '" p-id="24684"></path></svg> ')
            : _ >= 5 && _ < 6
            ? (m =
                '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' +
                color3 +
                '" p-id="24974"></path></svg> ')
            : _ >= 6 && _ < 8
            ? (m =
                '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' +
                color3 +
                '" p-id="25218"></path></svg> ')
            : _ >= 8 && _ < 11
            ? (m =
                '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' +
                color3 +
                '"></path></svg> ')
            : _ >= 11 && _ < 13
            ? (m =
                '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' +
                color3 +
                '"></path></svg> ')
            : _ >= 13 && _ < 17
            ? (m =
                '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' +
                color3 +
                '"></path></svg> ')
            : _ >= 17 && _ < 18
            ? (m =
                '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' +
                color3 +
                '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' +
                color3 +
                '"></path></svg> ')
            : _ >= 18 &&
              _ < 24 &&
              (m =
                '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' +
                color3 +
                '"></path></svg> ')
          var v =
            '<svg xmlns="http://www.w3.org/2000/svg"  onclick=\'artitalk_star("' +
            t +
            '")\' viewBox="0 0 24 24" cursor="pointer" width="16" height="16"  fill=\'' +
            color3 +
            '\'><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/></svg>'
          document.createElement('li')
          mid +=
            '<li><span class="shuoshuo_author_img"><img src="' +
            s +
            '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" ><div ' +
            h +
            ' class="delete_right" title="' +
            text23 +
            '" onclick="shuoshuo_delete(\'' +
            t +
            '\')"><svg t="1591347978744"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline" ><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460" fill="' +
            color3 +
            '"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461" fill="' +
            color3 +
            '"></path></svg></div>' +
            o +
            '<p class="shuoshuo_time"><span style="">  ' +
            l +
            u +
            '</span><span>&nbsp&nbsp' +
            m +
            f +
            ' ' +
            g +
            "</span><span style='float: right'><span style='vertical-align:top;' id='artitalk_star_svg_" +
            t +
            "'>" +
            v +
            "</span>&nbsp<span style='vertical-align:top;' id='" +
            t +
            "'>loading</span></span></p></span></li>"
        }),
        '' == (t = document.getElementById('ccontent').innerHTML) &&
          (t = '<ul class="cbp_tmtimeline" id="maina">'),
        (t = t.replace('</ul>', '')),
        (t += mid + '</ul>'),
        0 === i &&
          0 === e &&
          (t =
            '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>' +
            text24 +
            '</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>'),
        (document.getElementById('ccontent').innerHTML = t),
        $('#lazy').fadeOut(),
        i == per && $('#readmore').fadeIn()
    })
}
var upload = textup,
  imgurl = '![](' + upload + ')',
  personal_url_img
if (void 0 === token_pt)
  var token_pt = 'ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg=='
if (void 0 === repo_pt_img) var repo_pt_img = '/Artitalk/Artitalk-img2/'
function get_token() {
  var e = AV.User.current().attributes.gh_token
  return (
    void 0 === e &&
      (e = window.atob(
        'ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg=='
      )),
    e
  )
}
function uploadimg(e) {
  var t = 'Bearer ' + get_token()
  ;(document.getElementById('neirong').value += imgurl),
    (document.getElementById('loading_txt').innerHTML = text25),
    $('#lazy').fadeIn()
  var n = sha1(e) + '.png',
    r = n.slice(0, 2),
    i = n.slice(2, 4),
    o = 'https://cdn.jsdelivr.net/gh' + repo_pt_img + r + '/' + i + '/' + n,
    a = {
      url:
        'https://api.github.com/repos' +
        repo_pt_img +
        'contents/' +
        r +
        '/' +
        i +
        '/' +
        n,
      method: 'PUT',
      timeout: 0,
      async: !0,
      headers: { Authorization: t, 'Content-Type': 'text/plain' },
      data:
        '{\r\n  "message": "' +
        window.location.host +
        '",\r\n  "content": "' +
        e +
        '"\r\n}',
      error: function (e) {
        if ('Unprocessable Entity' == e.statusText) {
          $('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT)
          var t = document.getElementById('neirong').value
          ;(imgurl = '![](' + o + ')'),
            (document.getElementById('neirong').value = t.replace(
              '![](' + upload + ')',
              imgurl
            )),
            (imgurl = '![](' + upload + ')'),
            preview()
        } else {
          $('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT)
          t = document.getElementById('neirong').value
          document.getElementById('neirong').value = t.replace(
            '![](' + upload + ')',
            text14
          )
        }
      },
    }
  $.ajax(a).done(function (e) {
    $('#lazy').fadeOut(),
      (document.getElementById('loading_txt').innerHTML = loadingTxT)
    var t = document.getElementById('neirong').value
    ;(imgurl = '![](' + o + ')'),
      (document.getElementById('neirong').value = t.replace(
        '![](' + upload + ')',
        imgurl
      )),
      (imgurl = '![](' + upload + ')'),
      preview()
  })
}
function writeurl() {
  var e = document.getElementById('neirong').value
  ;(imgurl = '![](' + upload + ')'),
    (document.getElementById('neirong').value = e.replace(
      '![](' + upload + ')',
      imgurl
    )),
    (imgurl = '![](' + (upload = textup) + ')')
}
function checkImgType(e) {
  return !!/\.(jpg|tiff|pip|pipeg|jfif|webp|tif|bmp|png|jpeg|svgz|svg|xbm|dib|jpeg|png|GIF|JPG|PNG|ico)$/.test(
    e.name
  )
}
function imgChange(e) {
  upload_out()
  const t = new FileReader()
  ;(t.onload = function (t) {
    var n = t.target.result.replace(/(.*)?,/, ''),
      r = (e.files[0].size / 1024).toFixed(0)
    if (!checkImgType(e.files[0]))
      return (
        $('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        void (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text33 + '</code></pre></center>')
      )
    r > img_limit
      ? ($('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text30 + '</code></pre></center>'))
      : uploadimg(n)
  }),
    t.readAsDataURL(e.files[0])
}
function shuoshuo_emoji_lovefancybox() {
  document.getElementById('switch_1').classList.add('zuiliangdezai'),
    document.getElementById('switch_2').classList.remove('zuiliangdezai'),
    document.getElementById('switch_3').classList.remove('zuiliangdezai'),
    document.getElementById('switch_4').classList.remove('zuiliangdezai'),
    $('#shuoshuo_emojiswitch').hasClass('hide')
      ? (document
          .getElementById('shuoshuo_emoji_Tieba')
          .classList.remove('hide'),
        (document.getElementById('shuoshuo_emoji_BiliBili').innerHTML =
          artitalk_emoji_bb),
        (document.getElementById('shuoshuo_emoji_Tieba').innerHTML =
          artitalk_emoji_tb),
        (document.getElementById('shuoshuo_emoji_QQ').innerHTML =
          artitalk_emoji_qq),
        (document.getElementById('shuoshuo_emoji_custom').innerHTML =
          artitalk_emoji),
        document
          .getElementById('shuoshuo_emojiswitch')
          .classList.remove('hide'),
        document
          .getElementById('shuoshuo_emojiswitch')
          .classList.add('pingjun'))
      : (document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide'),
        document
          .getElementById('shuoshuo_emoji_BiliBili')
          .classList.add('hide'),
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide'),
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide'),
        document
          .getElementById('shuoshuo_emojiswitch')
          .classList.remove('pingjun'),
        document.getElementById('shuoshuo_emojiswitch').classList.add('hide'))
}
function artitalk() {
  AV.User.current()
    ? ($('.shuoshuo_active').fadeIn(), pic_drag())
    : ((document.getElementById('logw').innerHTML =
        '<center><pre><code>' + text15 + '</code></pre></center>'),
      Show())
}
function Show() {
  document.getElementById('shade').classList.remove('hide'),
    document.getElementById('shuoshuo-modal').classList.remove('hide')
}
function Hide() {
  document.getElementById('shade').classList.add('hide'),
    document.getElementById('shuoshuo-modal').classList.add('hide')
}
function Login() {
  var e = document.getElementById('pwd').value,
    t = document.getElementById('username').value
  AV.User.logIn(t, e).then(
    function (e) {
      location.reload()
    },
    function (e) {
      document.getElementById('logw').innerHTML =
        '<center><pre><code>' + text17 + '</code></pre></center>'
    }
  )
}
function hideuser() {
  document.getElementById('shade').classList.add('hide'),
    document.getElementById('userinfo').classList.add('hide')
}
function Louout() {
  AV.User.logOut(), location.reload()
}
function swtichuser() {
  ;(document.getElementById('logw').innerHTML = ''),
    document.getElementById('shade').classList.remove('hide')
  var e = AV.User.current()
  e
    ? (document.getElementById('userinfo').classList.remove('hide'),
      (document.getElementById('status').innerHTML =
        text4 + ':\t' + e.attributes.username),
      $('#tui').show())
    : (document.getElementById('shuoshuo-modal').classList.remove('hide'),
      Show())
}
function hide3() {
  location.reload()
}
function hide4() {
  document.getElementById('shade').classList.add('hide'),
    document.getElementById('shanchur').classList.add('hide')
}
function shuoshuo_delete(e) {
  if (!AV.User.current())
    return (
      (document.getElementById('logw').innerHTML =
        '<center><pre><code>' + text15 + '</code></pre></center>'),
      void Show()
    )
  document.getElementById('shade').classList.remove('hide'),
    document.getElementById('shanchur').classList.remove('hide'),
    (document.getElementById('delete1').innerHTML =
      '<input type="button" class="button" value="' +
      text5 +
      '" onclick="really_shanchu(\'' +
      e +
      '\')"><input type="button" class="button" value="' +
      text10 +
      '" onclick="hide4()">')
}
function really_shanchu(e) {
  hide4(),
    AV.Object.createWithoutData('shuoshuo', e)
      .destroy()
      .then(
        function (e) {
          document.getElementById('shade').classList.remove('hide'),
            document.getElementById('shanchu').classList.remove('hide')
        },
        function (e) {
          alert(e.rawMessage)
        }
      )
}
function pic_drag() {
  function e(e) {
    if (e.type.match(/image*/)) {
      console.log('YES')
      var t = new FileReader()
      t.readAsDataURL(e),
        (t.onload = function () {
          uploadimg(t.result.replace(/(.*)?,/, ''))
        })
    } else console.log('此' + e.name + '不是图片文件！')
  }
  var t = document.getElementById('shuoshuo_edit'),
    n = document.getElementById('drag_area'),
    r = document.getElementById('neirong')
  function i() {
    'visible' == n.style.visibility && (n.style.visibility = 'hidden'),
      (r.style.opacity = 1)
  }
  document.addEventListener(
    'dragenter',
    function (e) {
      if (
        ((e.dataTransfer.dropEffect = 'copy'),
        e.preventDefault(),
        e.stopPropagation(),
        'hidden' == n.style.visibility)
      )
        n.style.visibility = 'visible'
      else {
        var i = t.clientWidth,
          o = t.clientHeight
        ;(r.style.position = 'relative'),
          (n.style.border = '1px solid rgb(204, 204, 204)'),
          (n.style.fontSize = '24px'),
          (n.style.background = 'rgba(255,255,255,.7)'),
          (n.innerText = '请拖拽图片到此处'),
          (t.style.position = 'relative'),
          (n.style.cssText +=
            'text-align: center;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);'),
          (n.style.width = i),
          (n.style.lineHeight = o + 'px'),
          (n.style.borderRadius = '6px'),
          (n.style.visibility = 'visible'),
          (r.style.opacity = 0.3)
      }
    },
    !1
  ),
    document.addEventListener(
      'mouseover',
      function (e) {
        e.preventDefault(), e.stopPropagation(), i()
      },
      !1
    ),
    t.addEventListener(
      'drop',
      function (t) {
        t.preventDefault(), t.stopPropagation()
        var n = t.dataTransfer,
          o = [],
          a = 0,
          s = n.files.length
        function u() {
          if (a === s - 1) for (var t = 0; t < s; t++) e(o[t])
          a++
        }
        if ((i(), void 0 !== n.items))
          for (var c = 0; c < n.items.length; c++) {
            var l = n.items[c]
            if ('file' === l.kind && l.webkitGetAsEntry().isFile) {
              var d = l.getAsFile()
              o.push(d)
              var h = new FileReader()
              ;(h.onload = function (t) {
                e(d)
              }),
                h.readAsDataURL(d)
            } else
              l.type.match(/plain*/) &&
                l.getAsString(function (e) {
                  console.log(e), (r.value += e)
                })
          }
        else
          for (c = 0; c < s; c++) {
            var p = n.files[c]
            if (p.type) o.push(p), u()
            else
              try {
                var f = new FileReader()
                f.readAsDataURL(p.slice(0, 3)),
                  f.addEventListener(
                    'load',
                    function (e) {
                      console.log(e, 'load'), o.push(p), u()
                    },
                    !1
                  ),
                  f.addEventListener(
                    'error',
                    function (e) {
                      console.log(e, 'error，不可以上传文件夹'), u()
                    },
                    !1
                  )
              } catch (t) {
                console.log(t, 'catch error，不可以上传文件夹'), u()
              }
          }
      },
      !1
    )
}
function upload_in() {
  document.getElementById('shade').classList.remove('hide'),
    document.getElementById('upload_parttwo').classList.remove('hide')
}
function upload_out() {
  document.getElementById('shade').classList.add('hide'),
    document.getElementById('upload_parttwo').classList.add('hide')
}
function checkaudioType(e) {
  return !!/\.(opus|flac|webm|weba|wav|ogg|m4a|mp3|oga|mid|amr|aiff|wma|au|aac)$/.test(
    e.name
  )
}
function audioChange(e) {
  upload_out()
  const t = new FileReader()
  ;(t.onload = function (t) {
    if (!checkaudioType(e.files[0]))
      return (
        $('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        void (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text34 + '</code></pre></center>')
      )
    var n = t.target.result.replace(/(.*)?,/, '')
    ;(e.files[0].size / 1024).toFixed(0) > audio_limit
      ? ($('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text31 + '</code></pre></center>'))
      : uploadaudio(n, e.files[0].name)
  }),
    t.readAsDataURL(e.files[0])
}
if (
  (document.addEventListener('paste', function (e) {
    var t = e.clipboardData && e.clipboardData.items,
      n = null
    if (t && t.length)
      for (var r = 0; r < t.length; r++)
        if (-1 !== t[r].type.indexOf('image')) {
          n = t[r].getAsFile()
          var i = new FileReader()
          i.readAsDataURL(n),
            (i.onload = function () {
              uploadimg(i.result.replace(/(.*)?,/, ''))
            })
          break
        }
  }),
  void 0 === repo_pt_mp3)
)
  var repo_pt_mp3 = '/Artitalk/Artitalk-mp3/'
function uploadaudio(e, t) {
  var n = 'Bearer ' + get_token()
  ;(document.getElementById('loading_txt').innerHTML = text25),
    $('#lazy').fadeIn()
  var r = sha1(e) + '.mp3',
    i = r.slice(0, 2),
    o = r.slice(2, 4),
    a = 'https://cdn.jsdelivr.net/gh' + repo_pt_mp3 + i + '/' + o + '/' + t,
    s = {
      url:
        'https://api.github.com/repos' +
        repo_pt_mp3 +
        'contents/' +
        i +
        '/' +
        o +
        '/' +
        t,
      method: 'PUT',
      timeout: 0,
      async: !0,
      headers: { Authorization: n, 'Content-Type': 'text/plain' },
      data:
        '{\r\n  "message": "' +
        window.location.host +
        '",\r\n  "content": "' +
        e +
        '"\r\n}',
      error: function (e) {
        'Unprocessable Entity' == e.statusText
          ? ($('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT),
            insert_atemoji("<audio controls><source src='" + a + "'></audio>"))
          : ($('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT),
            document.getElementById('preview').classList.remove('preview_now'),
            (document.getElementById('preview').innerHTML =
              '<center><pre><code>' + text14 + '</code></pre></center>'))
      },
    }
  $.ajax(s).done(function (e) {
    $('#lazy').fadeOut(),
      (document.getElementById('loading_txt').innerHTML = loadingTxT),
      insert_atemoji("<audio controls><source src='" + a + "'></audio>")
  })
}
function checkvideoType(e) {
  return !!/\.(ogm|wmv|mpg|webm|ogv|mov|asx|mpeg|mp4|m4v|avi)$/.test(e.name)
}
function videoChange(e) {
  upload_out()
  const t = new FileReader()
  ;(t.onload = function (t) {
    if (!checkvideoType(e.files[0]))
      return (
        $('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        void (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text35 + '</code></pre></center>')
      )
    var n = t.target.result.replace(/(.*)?,/, '')
    ;(e.files[0].size / 1024).toFixed(0) > video_limit
      ? ($('#lazy').fadeOut(),
        (document.getElementById('loading_txt').innerHTML = loadingTxT),
        document.getElementById('preview').classList.remove('preview_now'),
        (document.getElementById('preview').innerHTML =
          '<center><pre><code>' + text32 + '</code></pre></center>'))
      : uploadvideo(n)
  }),
    t.readAsDataURL(e.files[0])
}
if (void 0 === repo_pt_mp4) var repo_pt_mp4 = '/Artitalk/Artitalk-mp4/'
function uploadvideo(e) {
  var t = 'Bearer ' + get_token()
  ;(document.getElementById('loading_txt').innerHTML = text25),
    $('#lazy').fadeIn()
  var n = sha1(e) + '.mp4',
    r = n.slice(0, 2),
    i = n.slice(2, 4),
    o = 'https://cdn.jsdelivr.net/gh' + repo_pt_mp4 + r + '/' + i + '/' + n,
    a = {
      url:
        'https://api.github.com/repos' +
        repo_pt_mp4 +
        'contents/' +
        r +
        '/' +
        i +
        '/' +
        n,
      method: 'PUT',
      timeout: 0,
      async: !0,
      headers: { Authorization: t, 'Content-Type': 'text/plain' },
      data:
        '{\r\n  "message": "' +
        window.location.host +
        '",\r\n  "content": "' +
        e +
        '"\r\n}',
      error: function (e) {
        'Unprocessable Entity' == e.statusText
          ? ($('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT),
            insert_atemoji(
              '<video controls width="100%" height="auto"><source src="' +
                o +
                '"></video>'
            ))
          : ($('#lazy').fadeOut(),
            (document.getElementById('loading_txt').innerHTML = loadingTxT),
            document.getElementById('preview').classList.remove('preview_now'),
            (document.getElementById('preview').innerHTML =
              '<center><pre><code>' + text14 + '</code></pre></center>'))
      },
    }
  $.ajax(a).done(function (e) {
    $('#lazy').fadeOut(),
      (document.getElementById('loading_txt').innerHTML = loadingTxT),
      insert_atemoji(
        '<video controls width="100%" max-height="200px" height="auto"><source src="' +
          o +
          '"></video>'
      )
  })
}
//# sourceMappingURL=/sm/9b459e8c0fdb7a5e80c6f70ebfa91f89e0bb0a30383649c1b716b403058c5aa8.map
