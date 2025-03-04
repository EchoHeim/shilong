!(function () {
  var d = {},
    l = {
      EXPIRE_KEY: 'docsify.search.expires',
      INDEX_KEY: 'docsify.search.index',
    }
  function h(e) {
    var n = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    }
    return String(e).replace(/[&<>"'/]/g, function (e) {
      return n[e]
    })
  }
  function c(e) {
    var o = [],
      i = []
    Object.keys(d).forEach(function (n) {
      i = i.concat(
        Object.keys(d[n]).map(function (e) {
          return d[n][e]
        })
      )
    })
    var r = (e = e.trim()).split(/[\s\-，\\/]+/)
    1 !== r.length && (r = [].concat(e, r))
    function n(e) {
      var n = i[e],
        s = 0,
        c = '',
        d = n.title && n.title.trim(),
        l = n.body && n.body.trim(),
        t = n.slug || ''
      if (
        d &&
        (r.forEach(function (e) {
          var n,
            t = new RegExp(e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'), 'gi'),
            a = -1
          if (
            ((n = d ? d.search(t) : -1),
            (a = l ? l.search(t) : -1),
            0 <= n || 0 <= a)
          ) {
            ;(s += 0 <= n ? 3 : 0 <= a ? 2 : 0), a < 0 && (a = 0)
            var o,
              i = 0
            ;(i = 0 == (o = a < 11 ? 0 : a - 10) ? 70 : a + e.length + 60),
              l && i > l.length && (i = l.length)
            var r =
              '...' +
              h(l)
                .substring(o, i)
                .replace(t, '<em class="search-keyword">' + e + '</em>') +
              '...'
            c += r
          }
        }),
        0 < s)
      ) {
        var a = { title: h(d), content: l ? c : '', url: t, score: s }
        o.push(a)
      }
    }
    for (var t = 0; t < i.length; t++) n(t)
    return o.sort(function (e, n) {
      return n.score - e.score
    })
  }
  function i(t, a) {
    var e = 'auto' === t.paths,
      o = (function (e) {
        return e ? l.EXPIRE_KEY + '/' + e : l.EXPIRE_KEY
      })(t.namespace),
      i = (function (e) {
        return e ? l.INDEX_KEY + '/' + e : l.INDEX_KEY
      })(t.namespace),
      n = localStorage.getItem(o) < Date.now()
    if (((d = JSON.parse(localStorage.getItem(i))), n)) d = {}
    else if (!e) return
    var r = e
        ? (function (o) {
            var i = []
            return (
              Docsify.dom
                .findAll(
                  '.sidebar-nav a:not(.section-link):not([data-nosearch])'
                )
                .forEach(function (e) {
                  var n = e.href,
                    t = e.getAttribute('href'),
                    a = o.parse(n).path
                  a &&
                    -1 === i.indexOf(a) &&
                    !Docsify.util.isAbsolutePath(t) &&
                    i.push(a)
                }),
              i
            )
          })(a.router)
        : t.paths,
      s = r.length,
      c = 0
    r.forEach(function (n) {
      if (d[n]) return c++
      Docsify.get(a.router.getFile(n), !1, a.config.requestHeaders).then(
        function (e) {
          ;(d[n] = (function (n, e, t, a) {
            void 0 === e && (e = '')
            var o,
              i = window.marked.lexer(e),
              r = window.Docsify.slugify,
              s = {}
            return (
              i.forEach(function (e) {
                if ('heading' === e.type && e.depth <= a)
                  (o = t.toURL(n, { id: r(e.text) })),
                    (s[o] = { slug: o, title: e.text, body: '' })
                else {
                  if (!o) return
                  s[o]
                    ? s[o].body
                      ? (s[o].body += '\n' + (e.text || ''))
                      : (e.text ||
                          ('table' === e.type &&
                            (e.text = e.cells
                              .map(function (e) {
                                return e.join(' | ')
                              })
                              .join(' |\n '))),
                        (s[o].body = s[o].body ? s[o].body + e.text : e.text))
                    : (s[o] = { slug: o, title: '', body: '' })
                }
              }),
              r.clear(),
              s
            )
          })(n, e, a.router, t.depth)),
            s === ++c &&
              (function (e, n, t) {
                localStorage.setItem(n, Date.now() + e),
                  localStorage.setItem(t, JSON.stringify(d))
              })(t.maxAge, o, i)
        }
      )
    })
  }
  var p,
    f = ''
  function o(e) {
    var n = Docsify.dom.find('div.search'),
      t = Docsify.dom.find(n, '.results-panel'),
      a = Docsify.dom.find(n, '.clear-button'),
      o = Docsify.dom.find('.sidebar-nav'),
      i = Docsify.dom.find('.app-name')
    if (!e)
      return (
        t.classList.remove('show'),
        a.classList.remove('show'),
        (t.innerHTML = ''),
        void (
          p.hideOtherSidebarContent &&
          (o.classList.remove('hide'), i.classList.remove('hide'))
        )
      )
    var r = c(e),
      s = ''
    r.forEach(function (e) {
      s +=
        '<div class="matching-post">\n<a href="' +
        e.url +
        '">\n<h2>' +
        e.title +
        '</h2>\n<p>' +
        e.content +
        '</p>\n</a>\n</div>'
    }),
      t.classList.add('show'),
      a.classList.add('show'),
      (t.innerHTML = s || '<p class="empty">' + f + '</p>'),
      p.hideOtherSidebarContent &&
        (o.classList.add('hide'), i.classList.add('hide'))
  }
  function a(e) {
    p = e
  }
  function r(e, n) {
    var t = n.router.parse().query.s
    a(e),
      Docsify.dom.style(
        '\n.sidebar {\n  padding-top: 0;\n}\n\n.search {\n  margin-bottom: 20px;\n  padding: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.search .input-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.search .results-panel {\n  display: none;\n}\n\n.search .results-panel.show {\n  display: block;\n}\n\n.search input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0 7px;\n  line-height: 36px;\n  font-size: 14px;\n  border: 1px solid transparent;\n}\n\n.search input:focus {\n  box-shadow: 0 0 5px var(--theme-color, #42b983);\n  border: 1px solid var(--theme-color, #42b983);\n}\n\n.search input::-webkit-search-decoration,\n.search input::-webkit-search-cancel-button,\n.search input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search .clear-button {\n  width: 36px;\n  text-align: right;\n  display: none;\n}\n\n.search .clear-button.show {\n  display: block;\n}\n\n.search .clear-button svg {\n  transform: scale(.5);\n}\n\n.search h2 {\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.search a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.search .matching-post {\n  border-bottom: 1px solid #eee;\n}\n\n.search .matching-post:last-child {\n  border-bottom: 0;\n}\n\n.search p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.search p.empty {\n  text-align: center;\n}\n\n.app-name.hide, .sidebar-nav.hide {\n  display: none;\n}'
      ),
      (function (e) {
        void 0 === e && (e = '')
        var n =
            '<div class="input-wrap">\n      <input type="search" value="' +
            e +
            '" aria-label="Search text" />\n      <div class="clear-button">\n        <svg width="26" height="24">\n          <circle cx="12" cy="12" r="11" fill="#ccc" />\n          <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />\n          <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />\n        </svg>\n      </div>\n    </div>\n    <div class="results-panel"></div>\n    </div>',
          t = Docsify.dom.create('div', n),
          a = Docsify.dom.find('aside')
        Docsify.dom.toggleClass(t, 'search'), Docsify.dom.before(a, t)
      })(t),
      (function () {
        var e,
          n = Docsify.dom.find('div.search'),
          t = Docsify.dom.find(n, 'input'),
          a = Docsify.dom.find(n, '.input-wrap')
        Docsify.dom.on(n, 'click', function (e) {
          return 'A' !== e.target.tagName && e.stopPropagation()
        }),
          Docsify.dom.on(t, 'input', function (n) {
            clearTimeout(e),
              (e = setTimeout(function (e) {
                return o(n.target.value.trim())
              }, 100))
          }),
          Docsify.dom.on(a, 'click', function (e) {
            'INPUT' !== e.target.tagName && ((t.value = ''), o())
          })
      })(),
      t &&
        setTimeout(function (e) {
          return o(t)
        }, 500)
  }
  function s(e, n) {
    a(e),
      (function (e, n) {
        var t = Docsify.dom.getNode('.search input[type="search"]')
        if (t)
          if ('string' == typeof e) t.placeholder = e
          else {
            var a = Object.keys(e).filter(function (e) {
              return -1 < n.indexOf(e)
            })[0]
            t.placeholder = e[a]
          }
      })(e.placeholder, n.route.path),
      (function (e, n) {
        if ('string' == typeof e) f = e
        else {
          var t = Object.keys(e).filter(function (e) {
            return -1 < n.indexOf(e)
          })[0]
          f = e[t]
        }
      })(e.noData, n.route.path)
  }
  var u = {
    placeholder: '🔍  搜索',
    noData: '😒 找不到结果!',
    paths: 'auto',
    depth: 2,
    maxAge: 864e5,
    hideOtherSidebarContent: !1,
    namespace: void 0,
  }
  $docsify.plugins = [].concat(function (e, n) {
    var t = Docsify.util,
      a = n.config.search || u
    Array.isArray(a)
      ? (u.paths = a)
      : 'object' == typeof a &&
        ((u.paths = Array.isArray(a.paths) ? a.paths : 'auto'),
        (u.maxAge = t.isPrimitive(a.maxAge) ? a.maxAge : u.maxAge),
        (u.placeholder = a.placeholder || u.placeholder),
        (u.noData = a.noData || u.noData),
        (u.depth = a.depth || u.depth),
        (u.hideOtherSidebarContent =
          a.hideOtherSidebarContent || u.hideOtherSidebarContent),
        (u.namespace = a.namespace || u.namespace))
    var o = 'auto' === u.paths
    e.mounted(function (e) {
      r(u, n), o || i(u, n)
    }),
      e.doneEach(function (e) {
        s(u, n), o && i(u, n)
      })
  }, $docsify.plugins)
})()
