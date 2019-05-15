/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t)
{
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      f = d.toString,
      p = f.call(Object),
      h = {};

  function v(e, t) {
    var n = (t = t || r).createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }
  var g = "3.2.1",
      m = function(e, t) {
        return new m.fn.init(e, t)
      },
      y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      x = /^-ms-/,
      b = /-([a-z])/g,
      w = function(e, t) {
        return t.toUpperCase()
      };

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = m.type(e);
    return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  m.fn = m.prototype = {
    jquery: g,
    constructor: m,
    length: 0,
    toArray: function() {
      return o.call(this)
    },
    get: function(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = m.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return m.each(this, e)
    },
    map: function(e) {
      return this.pushStack(m.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(o.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }, m.extend = m.fn.extend = function() {
    var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || m.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (m.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && m.isPlainObject(n) ? n : {}, s[t] = m.extend(c, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, m.extend({
    expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === m.type(e)
    },
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      var t = m.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && (n = d.call(t, "constructor") && t.constructor, "function" != typeof n || f.call(n) !== p))
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      v(e)
    },
    camelCase: function(e) {
      return e.replace(x, "ms-").replace(b, w)
    },
    each: function(e, t) {
      var n, r = 0;
      if (C(e))
        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
      else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(y, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : l.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
      return r
    },
    map: function(e, t, n) {
      var r, i, o = 0,
          a = [];
      if (C(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return s.apply([], a)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), m.isFunction(e)) return r = o.call(arguments, 2), (i = function() {
        return e.apply(t || this, r.concat(o.call(arguments)))
      }).guid = e.guid = e.guid || m.guid++, i
    },
    now: Date.now,
    support: h
  }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    c["[object " + t + "]"] = t.toLowerCase()
  });
  var T = function(e) {
    var t, n, r, i, o, s, a, l, c, u, d, f, p, h, v, g, m, y, x, b = "sizzle" + 1 * new Date,
        w = e.document,
        C = 0,
        T = 0,
        k = se(),
        j = se(),
        S = se(),
        q = function(e, t) {
          return e === t && (d = !0), 0
        },
        D = {}.hasOwnProperty,
        N = [],
        E = N.pop,
        _ = N.push,
        A = N.push,
        $ = N.slice,
        L = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + P + "*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + P + "*\\]",
        I = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        M = new RegExp(P + "+", "g"),
        R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        W = new RegExp("^" + P + "*," + P + "*"),
        B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        G = new RegExp(I),
        U = new RegExp("^" + O + "$"),
        X = {
          ID: new RegExp("^#(" + O + ")"),
          CLASS: new RegExp("^\\.(" + O + ")"),
          TAG: new RegExp("^(" + O + "|[*])"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + I),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        V = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        ee = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function(e, t) {
          return t ? "\0" === e ? "пїЅ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        re = function() {
          f()
        },
        ie = ye(function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
    try {
      A.apply(N = $.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
    } catch (e) {
      A = {
        apply: N.length ? function(e, t) {
          _.apply(e, $.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }

    function oe(e, t, r, i) {
      var o, a, c, u, d, h, m, y = t && t.ownerDocument,
          C = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
      if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, v)) {
        if (11 !== C && (d = Y.exec(e)))
          if (o = d[1]) {
            if (9 === C) {
              if (!(c = t.getElementById(o))) return r;
              if (c.id === o) return r.push(c), r
            } else if (y && (c = y.getElementById(o)) && x(t, c) && c.id === o) return r.push(c), r
          } else {
            if (d[2]) return A.apply(r, t.getElementsByTagName(e)), r;
            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return A.apply(r, t.getElementsByClassName(o)), r
          } if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
          if (1 !== C) y = t, m = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = b), a = (h = s(e)).length; a--;) h[a] = "#" + u + " " + me(h[a]);
            m = h.join(","), y = J.test(e) && ve(t.parentNode) || t
          }
          if (m) try {
            return A.apply(r, y.querySelectorAll(m)), r
          } catch (e) {} finally {
            u === b && t.removeAttribute("id")
          }
        }
      }
      return l(e.replace(R, "$1"), t, r, i)
    }

    function se() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
      }
    }

    function ae(e) {
      return e[b] = !0, e
    }

    function le(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ce(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
    }

    function ue(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function fe(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function pe(e) {
      return function(t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function he(e) {
      return ae(function(t) {
        return t = +t, ae(function(n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (t in n = oe.support = {}, o = oe.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, f = oe.setDocument = function(e) {
      var t, i, s = e ? e.ownerDocument || e : w;
      return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, v = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), n.getElementsByTagName = le(function(e) {
        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
      }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = le(function(e) {
        return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
      }), n.getById ? (r.filter.ID = function(e) {
        var t = e.replace(Z, ee);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }, r.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && v) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (r.filter.ID = function(e) {
        var t = e.replace(Z, ee);
        return function(e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, r.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && v) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
      } : function(e, t) {
        var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
        if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
      }, m = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (le(function(e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
      }), le(function(e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = p.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
      })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", I)
      }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, q = t ? function(e, t) {
        if (e === t) return d = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & r ? -1 : 1)
      } : function(e, t) {
        if (e === t) return d = !0, 0;
        var n, r = 0,
            i = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];
        if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
        if (i === o) return ue(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) a.unshift(n);
        for (; s[r] === a[r];) r++;
        return r ? ue(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
      }, p) : p
    }, oe.matches = function(e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function(e, t) {
      if ((e.ownerDocument || e) !== p && f(e), t = t.replace(z, "='$1']"), n.matchesSelector && v && !S[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
        var r = y.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return oe(t, p, null, [e]).length > 0
    }, oe.contains = function(e, t) {
      return (e.ownerDocument || e) !== p && f(e), x(e, t)
    }, oe.attr = function(e, t) {
      (e.ownerDocument || e) !== p && f(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
      return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
    }, oe.escape = function(e) {
      return (e + "").replace(te, ne)
    }, oe.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function(e) {
      var t, r = [],
          i = 0,
          o = 0;
      if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(q), d) {
        for (; t = e[o++];) t === e[o] && (i = r.push(o));
        for (; i--;) e.splice(r[i], 1)
      }
      return u = null, e
    }, i = oe.getText = function(e) {
      var t, n = "",
          r = 0,
          o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else
        for (; t = e[r++];) n += i(t);
      return n
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = k[e + " "];
          return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, l) {
            var c, u, d, f, p, h, v = o !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                m = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                x = !1;
            if (g) {
              if (o) {
                for (; v;) {
                  for (f = t; f = f[v];)
                    if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                  h = v = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? g.firstChild : g.lastChild], s && y) {
                for (x = (p = (c = (u = (d = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], f = p && g.childNodes[p]; f = ++p && f && f[v] || (x = p = 0) || h.pop();)
                  if (1 === f.nodeType && ++x && f === t) {
                    u[e] = [C, p, x];
                    break
                  }
              } else if (y && (x = p = (c = (u = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === x)
                for (;
                    (f = ++p && f && f[v] || (x = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++x || (y && ((u = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, x]), f !== t)););
              return (x -= i) === r || x % r == 0 && x / r >= 0
            }
          }
        },
        PSEUDO: function(e, t) {
          var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
            for (var r, o = i(e, t), s = o.length; s--;) e[r = L(e, o[s])] = !(n[r] = o[s])
          }) : function(e) {
            return i(e, 0, n)
          }) : i
        }
      },
      pseudos: {
        not: ae(function(e) {
          var t = [],
              n = [],
              r = a(e.replace(R, "$1"));
          return r[b] ? ae(function(e, t, n, i) {
            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
          }) : function(e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: ae(function(e) {
          return function(t) {
            return oe(e, t).length > 0
          }
        }),
        contains: ae(function(e) {
          return e = e.replace(Z, ee),
              function(t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
              }
        }),
        lang: ae(function(e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === h
        },
        focus: function(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: pe(!1),
        disabled: pe(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !r.pseudos.empty(e)
        },
        header: function(e) {
          return K.test(e.nodeName)
        },
        input: function(e) {
          return V.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: he(function() {
          return [0]
        }),
        last: he(function(e, t) {
          return [t - 1]
        }),
        eq: he(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: he(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: he(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: he(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: he(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = r.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) r.pseudos[t] = de(t);
    for (t in {
      submit: !0,
      reset: !0
    }) r.pseudos[t] = fe(t);

    function ge() {}

    function me(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function ye(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = T++;
      return t.first ? function(t, n, i) {
        for (; t = t[r];)
          if (1 === t.nodeType || s) return e(t, n, i);
        return !1
      } : function(t, n, l) {
        var c, u, d, f = [C, a];
        if (l) {
          for (; t = t[r];)
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || s)
              if (u = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
              else {
                if ((c = u[o]) && c[0] === C && c[1] === a) return f[2] = c[2];
                if (u[o] = f, f[2] = e(t, n, l)) return !0
              } return !1
      }
    }

    function xe(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function be(e, t, n, r, i) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
      return s
    }

    function we(e, t, n, r, i, o) {
      return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), ae(function(o, s, a, l) {
        var c, u, d, f = [],
            p = [],
            h = s.length,
            v = o || function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
              return n
            }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !o && t ? v : be(v, f, e, a, l),
            m = n ? i || (o ? e : h || r) ? [] : s : g;
        if (n && n(g, m, a, l), r)
          for (c = be(m, p), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (m[p[u]] = !(g[p[u]] = d));
        if (o) {
          if (i || e) {
            if (i) {
              for (c = [], u = m.length; u--;)(d = m[u]) && c.push(g[u] = d);
              i(null, m = [], c, l)
            }
            for (u = m.length; u--;)(d = m[u]) && (c = i ? L(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d))
          }
        } else m = be(m === s ? m.splice(h, m.length) : m), i ? i(null, s, m, l) : A.apply(s, m)
      })
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
        return e === t
      }, a, !0), d = ye(function(e) {
        return L(t, e) > -1
      }, a, !0), f = [function(e, n, r) {
        var i = !s && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
        return t = null, i
      }]; l < o; l++)
        if (n = r.relative[e[l].type]) f = [ye(xe(f), n)];
        else {
          if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (i = ++l; i < o && !r.relative[e[i].type]; i++);
            return we(l > 1 && xe(f), l > 1 && me(e.slice(0, l - 1).concat({
              value: " " === e[l - 2].type ? "*" : ""
            })).replace(R, "$1"), n, l < i && Ce(e.slice(l, i)), i < o && Ce(e = e.slice(i)), i < o && me(e))
          }
          f.push(n)
        } return xe(f)
    }

    function Te(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function(o, s, a, l, u) {
            var d, h, g, m = 0,
                y = "0",
                x = o && [],
                b = [],
                w = c,
                T = o || i && r.find.TAG("*", u),
                k = C += null == w ? 1 : Math.random() || .1,
                j = T.length;
            for (u && (c = s === p || s || u); y !== j && null != (d = T[y]); y++) {
              if (i && d) {
                for (h = 0, s || d.ownerDocument === p || (f(d), a = !v); g = e[h++];)
                  if (g(d, s || p, a)) {
                    l.push(d);
                    break
                  } u && (C = k)
              }
              n && ((d = !g && d) && m--, o && x.push(d))
            }
            if (m += y, n && y !== m) {
              for (h = 0; g = t[h++];) g(x, b, s, a);
              if (o) {
                if (m > 0)
                  for (; y--;) x[y] || b[y] || (b[y] = E.call(l));
                b = be(b)
              }
              A.apply(l, b), u && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(l)
            }
            return u && (C = k, c = w), x
          };
      return n ? ae(o) : o
    }
    return ge.prototype = r.filters = r.pseudos, r.setFilters = new ge, s = oe.tokenize = function(e, t) {
      var n, i, o, s, a, l, c, u = j[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (a = e, l = [], c = r.preFilter; a;) {
        for (s in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = B.exec(a)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(R, " ")
        }), a = a.slice(n.length)), r.filter) !(i = X[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
          value: n,
          type: s,
          matches: i
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? oe.error(e) : j(e, l).slice(0)
    }, a = oe.compile = function(e, t) {
      var n, r = [],
          i = [],
          o = S[e + " "];
      if (!o) {
        for (t || (t = s(e)), n = t.length; n--;)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        (o = S(e, Te(i, r))).selector = e
      }
      return o
    }, l = oe.select = function(e, t, n, i) {
      var o, l, c, u, d, f = "function" == typeof e && e,
          p = !i && s(e = f.selector || e);
      if (n = n || [], 1 === p.length) {
        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && v && r.relative[l[1].type]) {
          if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
          f && (t = t.parentNode), e = e.slice(l.shift().value.length)
        }
        for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
          if ((d = r.find[u]) && (i = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && ve(t.parentNode) || t))) {
            if (l.splice(o, 1), !(e = i.length && me(l))) return A.apply(n, i), n;
            break
          }
      }
      return (f || a(e, p))(i, t, !v, n, !t || J.test(e) && ve(t.parentNode) || t), n
    }, n.sortStable = b.split("").sort(q).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = le(function(e) {
      return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
    }), le(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), n.attributes && le(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), le(function(e) {
      return null == e.getAttribute("disabled")
    }) || ce(H, function(e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), oe
  }(e);
  m.find = T, m.expr = T.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = T.uniqueSort, m.text = T.getText, m.isXMLDoc = T.isXML, m.contains = T.contains, m.escapeSelector = T.escape;
  var k = function(e, t, n) {
        for (var r = [], i = void 0 !== n;
             (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && m(e).is(n)) break;
            r.push(e)
          } return r
      },
      j = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      S = m.expr.match.needsContext;

  function q(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      N = /^.[^:#\[\.,]*$/;

  function E(e, t, n) {
    return m.isFunction(t) ? m.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    }) : t.nodeType ? m.grep(e, function(e) {
      return e === t !== n
    }) : "string" != typeof t ? m.grep(e, function(e) {
      return l.call(t, e) > -1 !== n
    }) : N.test(t) ? m.filter(t, e, n) : (t = m.filter(t, e), m.grep(e, function(e) {
      return l.call(t, e) > -1 !== n && 1 === e.nodeType
    }))
  }
  m.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, m.fn.extend({
    find: function(e) {
      var t, n, r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(m(e).filter(function() {
        for (t = 0; t < r; t++)
          if (m.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) m.find(e, i[t], n);
      return r > 1 ? m.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(E(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(E(this, e || [], !0))
    },
    is: function(e) {
      return !!E(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
    }
  });
  var _, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (m.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || _, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && m.isPlainObject(t))
          for (i in t) m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this)
  }).prototype = m.fn, _ = m(r);
  var $ = /^(?:parents|prev(?:Until|All))/,
      L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

  function H(e, t) {
    for (;
        (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  m.fn.extend({
    has: function(e) {
      var t = m(e, this),
          n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (m.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      var n, r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof e && m(e);
      if (!S.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? l.call(m(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), m.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return k(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return k(e, "parentNode", n)
    },
    next: function(e) {
      return H(e, "nextSibling")
    },
    prev: function(e) {
      return H(e, "previousSibling")
    },
    nextAll: function(e) {
      return k(e, "nextSibling")
    },
    prevAll: function(e) {
      return k(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return k(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return k(e, "previousSibling", n)
    },
    siblings: function(e) {
      return j((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return j(e.firstChild)
    },
    contents: function(e) {
      return q(e, "iframe") ? e.contentDocument : (q(e, "template") && (e = e.content || e), m.merge([], e.childNodes))
    }
  }, function(e, t) {
    m.fn[e] = function(n, r) {
      var i = m.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (L[e] || m.uniqueSort(i), $.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function O(e) {
    return e
  }

  function F(e) {
    throw e
  }

  function I(e, t, n, r) {
    var i;
    try {
      e && m.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && m.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  m.Callbacks = function(e) {
    e = "string" == typeof e ? function(e) {
      var t = {};
      return m.each(e.match(P) || [], function(e, n) {
        t[n] = !0
      }), t
    }(e) : m.extend({}, e);
    var t, n, r, i, o = [],
        s = [],
        a = -1,
        l = function() {
          for (i = i || e.once, r = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        },
        c = {
          add: function() {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              m.each(n, function(n, r) {
                m.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return m.each(arguments, function(e, t) {
              for (var n;
                   (n = m.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
            }), this
          },
          has: function(e) {
            return e ? m.inArray(e, o) > -1 : o.length > 0
          },
          empty: function() {
            return o && (o = []), this
          },
          disable: function() {
            return i = s = [], o = n = "", this
          },
          disabled: function() {
            return !o
          },
          lock: function() {
            return i = s = [], n || t || (o = n = ""), this
          },
          locked: function() {
            return !!i
          },
          fireWith: function(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
          },
          fire: function() {
            return c.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
    return c
  }, m.extend({
    Deferred: function(t) {
      var n = [
            ["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2],
            ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function() {
              return r
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return i.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return m.Deferred(function(t) {
                m.each(n, function(n, r) {
                  var i = m.isFunction(e[r[4]]) && e[r[4]];
                  o[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(t, r, i) {
              var o = 0;

              function s(t, n, r, i) {
                return function() {
                  var a = this,
                      l = arguments,
                      c = function() {
                        var e, c;
                        if (!(t < o)) {
                          if ((e = r.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                          c = e && ("object" == typeof e || "function" == typeof e) && e.then, m.isFunction(c) ? i ? c.call(e, s(o, n, O, i), s(o, n, F, i)) : (o++, c.call(e, s(o, n, O, i), s(o, n, F, i), s(o, n, O, n.notifyWith))) : (r !== O && (a = void 0, l = [e]), (i || n.resolveWith)(a, l))
                        }
                      },
                      u = i ? c : function() {
                        try {
                          c()
                        } catch (e) {
                          m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (r !== F && (a = void 0, l = [e]), n.rejectWith(a, l))
                        }
                      };
                  t ? u() : (m.Deferred.getStackHook && (u.stackTrace = m.Deferred.getStackHook()), e.setTimeout(u))
                }
              }
              return m.Deferred(function(e) {
                n[0][3].add(s(0, e, m.isFunction(i) ? i : O, e.notifyWith)), n[1][3].add(s(0, e, m.isFunction(t) ? t : O)), n[2][3].add(s(0, e, m.isFunction(r) ? r : F))
              }).promise()
            },
            promise: function(e) {
              return null != e ? m.extend(e, i) : i
            }
          },
          o = {};
      return m.each(n, function(e, t) {
        var s = t[2],
            a = t[5];
        i[t[1]] = s.add, a && s.add(function() {
          r = a
        }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = s.fireWith
      }), i.promise(o), t && t.call(o, o), o
    },
    when: function(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          s = m.Deferred(),
          a = function(e) {
            return function(n) {
              r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(r, i)
            }
          };
      if (t <= 1 && (I(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m.isFunction(i[n] && i[n].then))) return s.then();
      for (; n--;) I(i[n], a(n), s.reject);
      return s.promise()
    }
  });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  m.Deferred.exceptionHook = function(t, n) {
    e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, m.readyException = function(t) {
    e.setTimeout(function() {
      throw t
    })
  };
  var R = m.Deferred();

  function W() {
    r.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), m.ready()
  }
  m.fn.ready = function(e) {
    return R.then(e).catch(function(e) {
      m.readyException(e)
    }), this
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
      (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || R.resolveWith(r, [m]))
    }
  }), m.ready.then = R.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(m.ready) : (r.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
  var B = function(e, t, n, r, i, o, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === m.type(n))
          for (a in i = !0, n) B(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, m.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
          return c.call(m(e), n)
        })), t))
          for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
      },
      z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

  function G() {
    this.expando = m.expando + G.uid++
  }
  G.uid = 1, G.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[m.camelCase(t)] = n;
      else
        for (r in t) i[m.camelCase(r)] = t[r];
      return i
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(m.camelCase) : t = (t = m.camelCase(t)) in r ? [t] : t.match(P) || [], n = t.length;
          for (; n--;) delete r[t[n]]
        }(void 0 === t || m.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !m.isEmptyObject(t)
    }
  };
  var U = new G,
      X = new G,
      V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Q(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
        try {
          n = function(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : V.test(e) ? JSON.parse(e) : e)
          }(n)
        } catch (e) {}
        X.set(e, t, n)
      } else n = void 0;
    return n
  }
  m.extend({
    hasData: function(e) {
      return X.hasData(e) || U.hasData(e)
    },
    data: function(e, t, n) {
      return X.access(e, t, n)
    },
    removeData: function(e, t) {
      X.remove(e, t)
    },
    _data: function(e, t, n) {
      return U.access(e, t, n)
    },
    _removeData: function(e, t) {
      U.remove(e, t)
    }
  }), m.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
          s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = X.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && (0 === (r = s[n].name).indexOf("data-") && (r = m.camelCase(r.slice(5)), Q(o, r, i[r])));
          U.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        X.set(this, e)
      }) : B(this, function(t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = X.get(o, e))) return n;
          if (void 0 !== (n = Q(o, e))) return n
        } else this.each(function() {
          X.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        X.remove(this, e)
      })
    }
  }), m.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = U.get(e, t), n && (!r || Array.isArray(n) ? r = U.access(e, t, m.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = m.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = m._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
        m.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return U.get(e, n) || U.access(e, n, {
        empty: m.Callbacks("once memory").add(function() {
          U.remove(e, [t + "queue", n])
        })
      })
    }
  }), m.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = m.queue(this, e, t);
        m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        m.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
          i = m.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --r || i.resolveWith(o, [o])
          };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = U.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var Y = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      J = new RegExp("^(?:([+-])=|)(" + Y + ")([a-z%]*)$", "i"),
      Z = ["Top", "Right", "Bottom", "Left"],
      ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display")
      },
      te = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
      };

  function ne(e, t, n, r) {
    var i, o = 1,
        s = 20,
        a = r ? function() {
          return r.cur()
        } : function() {
          return m.css(e, t, "")
        },
        l = a(),
        c = n && n[3] || (m.cssNumber[t] ? "" : "px"),
        u = (m.cssNumber[t] || "px" !== c && +l) && J.exec(m.css(e, t));
    if (u && u[3] !== c) {
      c = c || u[3], n = n || [], u = +l || 1;
      do {
        u /= o = o || ".5", m.style(e, t, u + c)
      } while (o !== (o = a() / l) && 1 !== o && --s)
    }
    return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
  }
  var re = {};

  function ie(e) {
    var t, n = e.ownerDocument,
        r = e.nodeName,
        i = re[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = m.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), re[r] = i, i)
  }

  function oe(e, t) {
    for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = U.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ee(r) && (i[o] = ie(r))) : "none" !== n && (i[o] = "none", U.set(r, "display", n)));
    for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
    return e
  }
  m.fn.extend({
    show: function() {
      return oe(this, !0)
    },
    hide: function() {
      return oe(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        ee(this) ? m(this).show() : m(this).hide()
      })
    }
  });
  var se = /^(?:checkbox|radio)$/i,
      ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      le = /^$|\/(?:java|ecma)script/i,
      ce = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

  function ue(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && q(e, t) ? m.merge([e], n) : n
  }

  function de(e, t) {
    for (var n = 0, r = e.length; n < r; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
  }
  ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td;
  var fe = /<|&#?\w+;/;

  function pe(e, t, n, r, i) {
    for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
      if ((o = e[p]) || 0 === o)
        if ("object" === m.type(o)) m.merge(f, o.nodeType ? [o] : o);
        else if (fe.test(o)) {
          for (s = s || d.appendChild(t.createElement("div")), a = (ae.exec(o) || ["", ""])[1].toLowerCase(), l = ce[a] || ce._default, s.innerHTML = l[1] + m.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
          m.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
    for (d.textContent = "", p = 0; o = f[p++];)
      if (r && m.inArray(o, r) > -1) i && i.push(o);
      else if (c = m.contains(o.ownerDocument, o), s = ue(d.appendChild(o), "script"), c && de(s), n)
        for (u = 0; o = s[u++];) le.test(o.type || "") && n.push(o);
    return d
  }! function() {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var he = r.documentElement,
      ve = /^key/,
      ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      me = /^([^.]*)(?:\.(.+)|)/;

  function ye() {
    return !0
  }

  function xe() {
    return !1
  }

  function be() {
    try {
      return r.activeElement
    } catch (e) {}
  }

  function we(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in "string" != typeof n && (r = r || n, n = void 0), t) we(e, a, n, r, t[a], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = xe;
    else if (!i) return e;
    return 1 === o && (s = i, (i = function(e) {
      return m().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = m.guid++)), e.each(function() {
      m.event.add(this, t, i, r, n)
    })
  }
  m.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, s, a, l, c, u, d, f, p, h, v, g = U.get(e);
      if (g)
        for (n.handler && (n = (o = n).handler, i = o.selector), i && m.find.matchesSelector(he, i), n.guid || (n.guid = m.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
          return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
        }), c = (t = (t || "").match(P) || [""]).length; c--;) p = v = (a = me.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = m.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = m.event.special[p] || {}, u = m.extend({
          type: p,
          origType: v,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && m.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), m.event.global[p] = !0)
    },
    remove: function(e, t, n, r, i) {
      var o, s, a, l, c, u, d, f, p, h, v, g = U.hasData(e) && U.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--;)
          if (p = v = (a = me.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
            for (d = m.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !i && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
            s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || m.removeEvent(e, p, g.handle), delete l[p])
          } else
            for (p in l) m.event.remove(e, p + t[c], n, r, !0);
        m.isEmptyObject(l) && U.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t, n, r, i, o, s, a = m.event.fix(e),
          l = new Array(arguments.length),
          c = (U.get(this, "events") || {})[a.type] || [],
          u = m.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = m.event.handlers.call(this, a, c), t = 0;
             (i = s[t++]) && !a.isPropagationStopped();)
          for (a.currentTarget = i.elem, n = 0;
               (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, s, a = [],
          l = t.delegateCount,
          c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? m(i, this).index(c) > -1 : m.find(i, this, null, [c]).length), s[i] && o.push(r);
            o.length && a.push({
              elem: c,
              handlers: o
            })
          } return c = this, l < t.length && a.push({
        elem: c,
        handlers: t.slice(l)
      }), a
    },
    addProp: function(e, t) {
      Object.defineProperty(m.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m.isFunction(t) ? function() {
          if (this.originalEvent) return t(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(e) {
      return e[m.expando] ? e : new m.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== be() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === be() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && q(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return q(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, m.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, m.Event = function(e, t) {
    return this instanceof m.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(e, t)
  }, m.Event.prototype = {
    constructor: m.Event,
    isDefaultPrevented: xe,
    isPropagationStopped: xe,
    isImmediatePropagationStopped: xe,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, m.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(e) {
      var t = e.button;
      return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, m.event.addProp), m.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    m.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = e.relatedTarget,
            i = e.handleObj;
        return r && (r === this || m.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), m.fn.extend({
    on: function(e, t, n, r) {
      return we(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
      return we(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
        m.event.remove(this, e, n, t)
      })
    }
  });
  var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Te = /<script|<style|<link/i,
      ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^true\/(.*)/,
      Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return q(e, "table") && q(11 !== t.nodeType ? t : t.firstChild, "tr") && m(">tbody", e)[0] || e
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Ne(e) {
    var t = je.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function Ee(e, t) {
    var n, r, i, o, s, a, l, c;
    if (1 === t.nodeType) {
      if (U.hasData(e) && (o = U.access(e), s = U.set(t, o), c = o.events))
        for (i in delete s.handle, s.events = {}, c)
          for (n = 0, r = c[i].length; n < r; n++) m.event.add(t, i, c[i][n]);
      X.hasData(e) && (a = X.access(e), l = m.extend({}, a), X.set(t, l))
    }
  }

  function _e(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Ae(e, t, n, r) {
    t = s.apply([], t);
    var i, o, a, l, c, u, d = 0,
        f = e.length,
        p = f - 1,
        g = t[0],
        y = m.isFunction(g);
    if (y || f > 1 && "string" == typeof g && !h.checkClone && ke.test(g)) return e.each(function(i) {
      var o = e.eq(i);
      y && (t[0] = g.call(this, i, o.html())), Ae(o, t, n, r)
    });
    if (f && (o = (i = pe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (l = (a = m.map(ue(i, "script"), De)).length; d < f; d++) c = i, d !== p && (c = m.clone(c, !0, !0), l && m.merge(a, ue(c, "script"))), n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, m.map(a, Ne), d = 0; d < l; d++) c = a[d], le.test(c.type || "") && !U.access(c, "globalEval") && m.contains(u, c) && (c.src ? m._evalUrl && m._evalUrl(c.src) : v(c.textContent.replace(Se, ""), u))
    }
    return e
  }

  function $e(e, t, n) {
    for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || m.cleanData(ue(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && de(ue(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  m.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ce, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0),
          l = m.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
        for (s = ue(a), r = 0, i = (o = ue(e)).length; r < i; r++) _e(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || ue(e), s = s || ue(a), r = 0, i = o.length; r < i; r++) Ee(o[r], s[r]);
        else Ee(e, a);
      return (s = ue(a, "script")).length > 0 && de(s, !l && ue(e, "script")), a
    },
    cleanData: function(e) {
      for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (z(n)) {
          if (t = n[U.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
            n[U.expando] = void 0
          }
          n[X.expando] && (n[X.expando] = void 0)
        }
    }
  }), m.fn.extend({
    detach: function(e) {
      return $e(this, e, !0)
    },
    remove: function(e) {
      return $e(this, e)
    },
    text: function(e) {
      return B(this, function(e) {
        return void 0 === e ? m.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return Ae(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return Ae(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return Ae(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return Ae(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(ue(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return m.clone(this, e, t)
      })
    },
    html: function(e) {
      return B(this, function(e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Te.test(e) && !ce[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = m.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (m.cleanData(ue(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return Ae(this, arguments, function(t) {
        var n = this.parentNode;
        m.inArray(this, e) < 0 && (m.cleanData(ue(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), m.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    m.fn[e] = function(e) {
      for (var n, r = [], i = m(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), m(i[s])[t](n), a.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Le = /^margin/,
      He = new RegExp("^(" + Y + ")(?!px)[a-z%]+$", "i"),
      Pe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
      };

  function Oe(e, t, n) {
    var r, i, o, s, a = e.style;
    return (n = n || Pe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || m.contains(e.ownerDocument, e) || (s = m.style(e, t)), !h.pixelMarginRight() && He.test(s) && Le.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function Fe(e, t) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }! function() {
    function t() {
      if (l) {
        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", he.appendChild(a);
        var t = e.getComputedStyle(l);
        n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, he.removeChild(a), l = null
      }
    }
    var n, i, o, s, a = r.createElement("div"),
        l = r.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), m.extend(h, {
      pixelPosition: function() {
        return t(), n
      },
      boxSizingReliable: function() {
        return t(), i
      },
      pixelMarginRight: function() {
        return t(), o
      },
      reliableMarginLeft: function() {
        return t(), s
      }
    }))
  }();
  var Ie = /^(none|table(?!-c[ea]).+)/,
      Me = /^--/,
      Re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      We = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Be = ["Webkit", "Moz", "ms"],
      ze = r.createElement("div").style;

  function Ge(e) {
    var t = m.cssProps[e];
    return t || (t = m.cssProps[e] = function(e) {
      if (e in ze) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
        if ((e = Be[n] + t) in ze) return e
    }(e) || e), t
  }

  function Ue(e, t, n) {
    var r = J.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Xe(e, t, n, r, i) {
    var o, s = 0;
    for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += m.css(e, n + Z[o], !0, i)), r ? ("content" === n && (s -= m.css(e, "padding" + Z[o], !0, i)), "margin" !== n && (s -= m.css(e, "border" + Z[o] + "Width", !0, i))) : (s += m.css(e, "padding" + Z[o], !0, i), "padding" !== n && (s += m.css(e, "border" + Z[o] + "Width", !0, i)));
    return s
  }

  function Ve(e, t, n) {
    var r, i = Pe(e),
        o = Oe(e, t, i),
        s = "border-box" === m.css(e, "boxSizing", !1, i);
    return He.test(o) ? o : (r = s && (h.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Xe(e, t, n || (s ? "border" : "content"), r, i) + "px")
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i)
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Oe(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = m.camelCase(t),
            l = Me.test(t),
            c = e.style;
        return l || (t = Ge(a)), s = m.cssHooks[t] || m.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t] : ("string" === (o = typeof n) && (i = J.exec(n)) && i[1] && (n = ne(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (m.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))))
      }
    },
    css: function(e, t, n, r) {
      var i, o, s, a = m.camelCase(t);
      return Me.test(t) || (t = Ge(a)), (s = m.cssHooks[t] || m.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Oe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), m.each(["height", "width"], function(e, t) {
    m.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return !Ie.test(m.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, r) : te(e, Re, function() {
          return Ve(e, t, r)
        })
      },
      set: function(e, n, r) {
        var i, o = r && Pe(e),
            s = r && Xe(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o);
        return s && (i = J.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = m.css(e, t)), Ue(0, n, s)
      }
    }
  }), m.cssHooks.marginLeft = Fe(h.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), m.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    m.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Z[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Le.test(e) || (m.cssHooks[e + t].set = Ue)
  }), m.fn.extend({
    css: function(e, t) {
      return B(this, function(e, t, n) {
        var r, i, o = {},
            s = 0;
        if (Array.isArray(t)) {
          for (r = Pe(e), i = t.length; s < i; s++) o[t[s]] = m.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), m.Tween = Ke, Ke.prototype = {
    constructor: Ke,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
    }
  }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(e) {
        m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, m.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, m.fx = Ke.prototype.init, m.fx.step = {};
  var Qe, Ye, Je = /^(?:toggle|show|hide)$/,
      Ze = /queueHooks$/;

  function et() {
    Ye && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(et) : e.setTimeout(et, m.fx.interval), m.fx.tick())
  }

  function tt() {
    return e.setTimeout(function() {
      Qe = void 0
    }), Qe = m.now()
  }

  function nt(e, t) {
    var n, r = 0,
        i = {
          height: e
        };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Z[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function rt(e, t, n) {
    for (var r, i = (it.tweeners[t] || []).concat(it.tweeners["*"]), o = 0, s = i.length; o < s; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function it(e, t, n) {
    var r, i, o = 0,
        s = it.prefilters.length,
        a = m.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (i) return !1;
          for (var t = Qe || tt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
          return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: m.extend({}, t),
          opts: m.extend(!0, {
            specialEasing: {},
            easing: m.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Qe || tt(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var r = m.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(r), r
          },
          stop: function(t) {
            var n = 0,
                r = t ? c.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
    for (function(e, t) {
      var n, r, i, o, s;
      for (n in e)
        if (i = t[r = m.camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = m.cssHooks[r]) && "expand" in s)
          for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
        else t[r] = i
    }(u, c.opts.specialEasing); o < s; o++)
      if (r = it.prefilters[o].call(c, e, u, c.opts)) return m.isFunction(r.stop) && (m._queueHooks(c.elem, c.opts.queue).stop = m.proxy(r.stop, r)), r;
    return m.map(u, rt, c), m.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), m.fx.timer(m.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c
  }
  m.Animation = m.extend(it, {
    tweeners: {
      "*": [function(e, t) {
        var n = this.createTween(e, t);
        return ne(n.elem, e, J.exec(t), n), n
      }]
    },
    tweener: function(e, t) {
      m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], it.tweeners[n] = it.tweeners[n] || [], it.tweeners[n].unshift(t)
    },
    prefilters: [function(e, t, n) {
      var r, i, o, s, a, l, c, u, d = "width" in t || "height" in t,
          f = this,
          p = {},
          h = e.style,
          v = e.nodeType && ee(e),
          g = U.get(e, "fxshow");
      for (r in n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
        s.unqueued || a()
      }), s.unqueued++, f.always(function() {
        f.always(function() {
          s.unqueued--, m.queue(e, "fx").length || s.empty.fire()
        })
      })), t)
        if (i = t[r], Je.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
            if ("show" !== i || !g || void 0 === g[r]) continue;
            v = !0
          }
          p[r] = g && g[r] || m.style(e, r)
        } if ((l = !m.isEmptyObject(t)) || !m.isEmptyObject(p))
        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = U.get(e, "display")), "none" === (u = m.css(e, "display")) && (c ? u = c : (oe([e], !0), c = e.style.display || c, u = m.css(e, "display"), oe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === m.css(e, "float") && (l || (f.done(function() {
          h.display = c
        }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        })), l = !1, p) l || (g ? "hidden" in g && (v = g.hidden) : g = U.access(e, "fxshow", {
          display: c
        }), o && (g.hidden = !v), v && oe([e], !0), f.done(function() {
          for (r in v || oe([e]), U.remove(e, "fxshow"), p) m.style(e, r, p[r])
        })), l = rt(v ? g[r] : 0, r, f), r in g || (g[r] = l.start, v && (l.end = l.start, l.start = 0))
    }],
    prefilter: function(e, t) {
      t ? it.prefilters.unshift(e) : it.prefilters.push(e)
    }
  }), m.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? m.extend({}, e) : {
      complete: n || !n && t || m.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !m.isFunction(t) && t
    };
    return m.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in m.fx.speeds ? r.duration = m.fx.speeds[r.duration] : r.duration = m.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      m.isFunction(r.old) && r.old.call(this), r.queue && m.dequeue(this, r.queue)
    }, r
  }, m.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = m.isEmptyObject(e),
          o = m.speed(t, n, r),
          s = function() {
            var t = it(this, m.extend({}, e), o);
            (i || U.get(this, "finish")) && t.stop(!0)
          };
      return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
    },
    stop: function(e, t, n) {
      var r = function(e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = m.timers,
            s = U.get(this);
        if (i) s[i] && s[i].stop && r(s[i]);
        else
          for (i in s) s[i] && s[i].stop && Ze.test(i) && r(s[i]);
        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || m.dequeue(this, e)
      })
    },
    finish: function(e) {
      return !1 !== e && (e = e || "fx"), this.each(function() {
        var t, n = U.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = m.timers,
            s = r ? r.length : 0;
        for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), m.each(["toggle", "show", "hide"], function(e, t) {
    var n = m.fn[t];
    m.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(nt(t, !0), e, r, i)
    }
  }), m.each({
    slideDown: nt("show"),
    slideUp: nt("hide"),
    slideToggle: nt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    m.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), m.timers = [], m.fx.tick = function() {
    var e, t = 0,
        n = m.timers;
    for (Qe = m.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || m.fx.stop(), Qe = void 0
  }, m.fx.timer = function(e) {
    m.timers.push(e), m.fx.start()
  }, m.fx.interval = 13, m.fx.start = function() {
    Ye || (Ye = !0, et())
  }, m.fx.stop = function() {
    Ye = null
  }, m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, m.fn.delay = function(t, n) {
    return t = m.fx && m.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function() {
        e.clearTimeout(i)
      }
    })
  },
      function() {
        var e = r.createElement("input"),
            t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
      }();
  var ot, st = m.expr.attrHandle;
  m.fn.extend({
    attr: function(e, t) {
      return B(this, m.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        m.removeAttr(this, e)
      })
    }
  }), m.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (i = m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? ot : void 0)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!h.radioValue && "radio" === t && q(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType)
        for (; n = i[r++];) e.removeAttribute(n)
    }
  }), ot = {
    set: function(e, t, n) {
      return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = st[t] || m.find.attr;
    st[t] = function(e, t, r) {
      var i, o, s = t.toLowerCase();
      return r || (o = st[s], st[s] = i, i = null != n(e, t, r) ? s : null, st[s] = o), i
    }
  });
  var at = /^(?:input|select|textarea|button)$/i,
      lt = /^(?:a|area)$/i;

  function ct(e) {
    return (e.match(P) || []).join(" ")
  }

  function ut(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }
  m.fn.extend({
    prop: function(e, t) {
      return B(this, m.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[m.propFix[e] || e]
      })
    }
  }), m.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = m.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), h.optSelected || (m.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    m.propFix[this.toLowerCase()] = this
  }), m.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, s, a, l = 0;
      if (m.isFunction(e)) return this.each(function(t) {
        m(this).addClass(e.call(this, t, ut(this)))
      });
      if ("string" == typeof e && e)
        for (t = e.match(P) || []; n = this[l++];)
          if (i = ut(n), r = 1 === n.nodeType && " " + ct(i) + " ") {
            for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (a = ct(r)) && n.setAttribute("class", a)
          } return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, s, a, l = 0;
      if (m.isFunction(e)) return this.each(function(t) {
        m(this).removeClass(e.call(this, t, ut(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(P) || []; n = this[l++];)
          if (i = ut(n), r = 1 === n.nodeType && " " + ct(i) + " ") {
            for (s = 0; o = t[s++];)
              for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
            i !== (a = ct(r)) && n.setAttribute("class", a)
          } return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
        m(this).toggleClass(e.call(this, n, ut(this), t), t)
      }) : this.each(function() {
        var t, r, i, o;
        if ("string" === n)
          for (r = 0, i = m(this), o = e.match(P) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else void 0 !== e && "boolean" !== n || ((t = ut(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++];)
        if (1 === n.nodeType && (" " + ct(ut(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var dt = /\r/g;
  m.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = m.isFunction(e), this.each(function(n) {
        var i;
        1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = m.map(i, function(e) {
          return null == e ? "" : e + ""
        })), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(dt, "") : null == n ? "" : n : void 0
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = m.find.attr(e, "value");
          return null != t ? t : ct(m.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, r, i = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : i.length;
          for (r = o < 0 ? l : s ? o : 0; r < l; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !q(n.parentNode, "optgroup"))) {
              if (t = m(n).val(), s) return t;
              a.push(t)
            } return a
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = m.makeArray(t), s = i.length; s--;)((r = i[s]).selected = m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), m.each(["radio", "checkbox"], function() {
    m.valHooks[this] = {
      set: function(e, t) {
        if (Array.isArray(t)) return e.checked = m.inArray(m(e).val(), t) > -1
      }
    }, h.checkOn || (m.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var ft = /^(?:focusinfocus|focusoutblur)$/;
  m.extend(m.event, {
    trigger: function(t, n, i, o) {
      var s, a, l, c, u, f, p, h = [i || r],
          v = d.call(t, "type") ? t.type : t,
          g = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (a = l = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !ft.test(v + m.event.triggered) && (v.indexOf(".") > -1 && (v = (g = v.split(".")).shift(), g.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[m.expando] ? t : new m.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : m.makeArray(n, [t]), p = m.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
        if (!o && !p.noBubble && !m.isWindow(i)) {
          for (c = p.delegateType || v, ft.test(c + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), l = a;
          l === (i.ownerDocument || r) && h.push(l.defaultView || l.parentWindow || e)
        }
        for (s = 0;
             (a = h[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : p.bindType || v, (f = (U.get(a, "events") || {})[t.type] && U.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && z(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
        return t.type = v, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !z(i) || u && m.isFunction(i[v]) && !m.isWindow(i) && ((l = i[u]) && (i[u] = null), m.event.triggered = v, i[v](), m.event.triggered = void 0, l && (i[u] = l)), t.result
      }
    },
    simulate: function(e, t, n) {
      var r = m.extend(new m.Event, n, {
        type: e,
        isSimulated: !0
      });
      m.event.trigger(r, null, t)
    }
  }), m.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        m.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return m.event.trigger(e, t, n, !0)
    }
  }), m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
    m.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), m.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), h.focusin = "onfocusin" in e, h.focusin || m.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      m.event.simulate(t, e.target, m.event.fix(e))
    };
    m.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
            i = U.access(r, t);
        i || r.addEventListener(e, n, !0), U.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
            i = U.access(r, t) - 1;
        i ? U.access(r, t, i) : (r.removeEventListener(e, n, !0), U.remove(r, t))
      }
    }
  });
  var pt = e.location,
      ht = m.now(),
      vt = /\?/;
  m.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + t), n
  };
  var gt = /\[\]$/,
      mt = /\r?\n/g,
      yt = /^(?:submit|button|image|reset|file)$/i,
      xt = /^(?:input|select|textarea|keygen)/i;

  function bt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) m.each(t, function(t, i) {
      n || gt.test(e) ? r(e, i) : bt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== m.type(t)) r(e, t);
    else
      for (i in t) bt(e + "[" + i + "]", t[i], n, r)
  }
  m.param = function(e, t) {
    var n, r = [],
        i = function(e, t) {
          var n = m.isFunction(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
    if (Array.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) bt(n, e[n], t, i);
    return r.join("&")
  }, m.fn.extend({
    serialize: function() {
      return m.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = m.prop(this, "elements");
        return e ? m.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !m(this).is(":disabled") && xt.test(this.nodeName) && !yt.test(e) && (this.checked || !se.test(e))
      }).map(function(e, t) {
        var n = m(this).val();
        return null == n ? null : Array.isArray(n) ? m.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(mt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(mt, "\r\n")
        }
      }).get()
    }
  });
  var wt = /%20/g,
      Ct = /#.*$/,
      Tt = /([?&])_=[^&]*/,
      kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      jt = /^(?:GET|HEAD)$/,
      St = /^\/\//,
      qt = {},
      Dt = {},
      Nt = "*/".concat("*"),
      Et = r.createElement("a");

  function _t(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
          o = t.toLowerCase().match(P) || [];
      if (m.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function At(e, t, n, r) {
    var i = {},
        o = e === Dt;

    function s(a) {
      var l;
      return i[a] = !0, m.each(e[a] || [], function(e, a) {
        var c = a(t, n, r);
        return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
      }), l
    }
    return s(t.dataTypes[0]) || !i["*"] && s("*")
  }

  function $t(e, t) {
    var n, r, i = m.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && m.extend(!0, e, r), e
  }
  Et.href = pt.href, m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Nt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? $t($t(e, m.ajaxSettings), t) : $t(m.ajaxSettings, e)
    },
    ajaxPrefilter: _t(qt),
    ajaxTransport: _t(Dt),
    ajax: function(t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, s, a, l, c, u, d, f, p, h = m.ajaxSetup({}, n),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? m(v) : m.event,
          y = m.Deferred(),
          x = m.Callbacks("once memory"),
          b = h.statusCode || {},
          w = {},
          C = {},
          T = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; t = kt.exec(s);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return u ? s : null
            },
            setRequestHeader: function(e, t) {
              return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == u && (h.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (u) k.always(e[k.status]);
                else
                  for (t in e) b[t] = [b[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || T;
              return i && i.abort(t), j(0, t), this
            }
          };
      if (y.promise(k), h.url = ((t || h.url || pt.href) + "").replace(St, pt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
        c = r.createElement("a");
        try {
          c.href = h.url, c.href = c.href, h.crossDomain = Et.protocol + "//" + Et.host != c.protocol + "//" + c.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = m.param(h.data, h.traditional)), At(qt, h, n, k), u) return k;
      for (f in (d = m.event && h.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), o = h.url.replace(Ct, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(wt, "+")) : (p = h.url.slice(o.length), h.data && (o += (vt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Tt, "$1"), p = (vt.test(o) ? "&" : "?") + "_=" + ht++ + p), h.url = o + p), h.ifModified && (m.lastModified[o] && k.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && k.setRequestHeader("If-None-Match", m.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(f, h.headers[f]);
      if (h.beforeSend && (!1 === h.beforeSend.call(v, k, h) || u)) return k.abort();
      if (T = "abort", x.add(h.complete), k.done(h.success), k.fail(h.error), i = At(Dt, h, n, k)) {
        if (k.readyState = 1, d && g.trigger("ajaxSend", [k, h]), u) return k;
        h.async && h.timeout > 0 && (l = e.setTimeout(function() {
          k.abort("timeout")
        }, h.timeout));
        try {
          u = !1, i.send(w, j)
        } catch (e) {
          if (u) throw e;
          j(-1, e)
        }
      } else j(-1, "No Transport");

      function j(t, n, r, a) {
        var c, f, p, w, C, T = n;
        u || (u = !0, l && e.clearTimeout(l), i = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (w = function(e, t, n) {
          for (var r, i, o, s, a = e.contents, l = e.dataTypes;
               "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in a)
              if (a[i] && a[i].test(r)) {
                l.unshift(i);
                break
              } if (l[0] in n) o = l[0];
          else {
            for (i in n) {
              if (!l[0] || e.converters[i + " " + l[0]]) {
                o = i;
                break
              }
              s || (s = i)
            }
            o = o || s
          }
          if (o) return o !== l[0] && l.unshift(o), n[o]
        }(h, k, r)), w = function(e, t, n, r) {
          var i, o, s, a, l, c = {},
              u = e.dataTypes.slice();
          if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
          for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
              if ("*" === o) o = l;
              else if ("*" !== l && l !== o) {
                if (!(s = c[l + " " + o] || c["* " + o]))
                  for (i in c)
                    if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                      !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], u.unshift(a[1]));
                      break
                    } if (!0 !== s)
                  if (s && e.throws) t = s(t);
                  else try {
                    t = s(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: s ? e : "No conversion from " + l + " to " + o
                    }
                  }
              }
          return {
            state: "success",
            data: t
          }
        }(h, w, k, c), c ? (h.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (m.lastModified[o] = C), (C = k.getResponseHeader("etag")) && (m.etag[o] = C)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, f = w.data, c = !(p = w.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? y.resolveWith(v, [f, T, k]) : y.rejectWith(v, [k, T, p]), k.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? f : p]), x.fireWith(v, [k, T]), d && (g.trigger("ajaxComplete", [k, h]), --m.active || m.event.trigger("ajaxStop")))
      }
      return k
    },
    getJSON: function(e, t, n) {
      return m.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return m.get(e, void 0, t, "script")
    }
  }), m.each(["get", "post"], function(e, t) {
    m[t] = function(e, n, r, i) {
      return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax(m.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, m.isPlainObject(e) && e))
    }
  }), m._evalUrl = function(e) {
    return m.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, m.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (m.isFunction(e) && (e = e.call(this[0])), t = m(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function(e) {
      return m.isFunction(e) ? this.each(function(t) {
        m(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = m(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = m.isFunction(e);
      return this.each(function(n) {
        m(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each(function() {
        m(this).replaceWith(this.childNodes)
      }), this
    }
  }), m.expr.pseudos.hidden = function(e) {
    return !m.expr.pseudos.visible(e)
  }, m.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, m.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var Lt = {
        0: 200,
        1223: 204
      },
      Ht = m.ajaxSettings.xhr();
  h.cors = !!Ht && "withCredentials" in Ht, h.ajax = Ht = !!Ht, m.ajaxTransport(function(t) {
    var n, r;
    if (h.cors || Ht && !t.crossDomain) return {
      send: function(i, o) {
        var s, a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (s in t.xhrFields) a[s] = t.xhrFields[s];
        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
        n = function(e) {
          return function() {
            n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
          4 === a.readyState && e.setTimeout(function() {
            n && r()
          })
        }, n = n("abort");
        try {
          a.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function() {
        n && n()
      }
    }
  }), m.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
  }), m.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return m.globalEval(e), e
      }
    }
  }), m.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), m.ajaxTransport("script", function(e) {
    var t, n;
    if (e.crossDomain) return {
      send: function(i, o) {
        t = m("<script>").prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function(e) {
          t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
        }), r.head.appendChild(t[0])
      },
      abort: function() {
        n && n()
      }
    }
  });
  var Pt = [],
      Ot = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Pt.pop() || m.expando + "_" + ht++;
      return this[e] = !0, e
    }
  }), m.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return s || m.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      s = arguments
    }, r.always(function() {
      void 0 === o ? m(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Pt.push(i)), s && m.isFunction(o) && o(s[0]), s = o = void 0
    }), "script"
  }), h.createHTMLDocument = function() {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), m.parseHTML = function(e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), s = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = pe([e], t, s), s && s.length && m(s).remove(), m.merge([], o.childNodes)));
    var i, o, s
  }, m.fn.load = function(e, t, n) {
    var r, i, o, s = this,
        a = e.indexOf(" ");
    return a > -1 && (r = ct(e.slice(a)), e = e.slice(0, a)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && m.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, s.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
      s.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    m.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), m.expr.pseudos.animated = function(e) {
    return m.grep(m.timers, function(t) {
      return e === t.elem
    }).length
  }, m.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, s, a, l, c = m.css(e, "position"),
          u = m(e),
          d = {};
      "static" === c && (e.style.position = "relative"), a = u.offset(), o = m.css(e, "top"), l = m.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, m.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        m.offset.setOffset(this, e, t)
      });
      var t, n, r, i, o = this[0];
      return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), n = (t = o.ownerDocument).documentElement, i = t.defaultView, {
        top: r.top + i.pageYOffset - n.clientTop,
        left: r.left + i.pageXOffset - n.clientLeft
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0],
            r = {
              top: 0,
              left: 0
            };
        return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), q(e[0], "html") || (r = e.offset()), r = {
          top: r.top + m.css(e[0], "borderTopWidth", !0),
          left: r.left + m.css(e[0], "borderLeftWidth", !0)
        }), {
          top: t.top - r.top - m.css(n, "marginTop", !0),
          left: t.left - r.left - m.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === m.css(e, "position");) e = e.offsetParent;
        return e || he
      })
    }
  }), m.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    m.fn[e] = function(r) {
      return B(this, function(e, r, i) {
        var o;
        return m.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
      }, e, r, arguments.length)
    }
  }), m.each(["top", "left"], function(e, t) {
    m.cssHooks[t] = Fe(h.pixelPosition, function(e, n) {
      if (n) return n = Oe(e, t), He.test(n) ? m(e).position()[t] + "px" : n
    })
  }), m.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    m.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      m.fn[r] = function(i, o) {
        var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === o ? "margin" : "border");
        return B(this, function(t, n, i) {
          var o;
          return m.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? m.css(t, n, a) : m.style(t, n, i, a)
        }, t, s ? i : void 0, s)
      }
    })
  }), m.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), m.holdReady = function(e) {
    e ? m.readyWait++ : m.ready(!0)
  }, m.isArray = Array.isArray, m.parseJSON = JSON.parse, m.nodeName = q, "function" == typeof define && define.amd && define("jquery", [], function() {
    return m
  });
  var Ft = e.jQuery,
      It = e.$;
  return m.noConflict = function(t) {
    return e.$ === m && (e.$ = It), t && e.jQuery === m && (e.jQuery = Ft), m
  }, t || (e.jQuery = e.$ = m), m
}),
    function(e) {
      "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
    }(function(e) {
      "use strict";
      var t = "styler",
          n = {
            idSuffix: "-styler",
            filePlaceholder: "Р¤Р°Р№Р» РЅРµ РІС‹Р±СЂР°РЅ",
            fileBrowse: "РћР±Р·РѕСЂ...",
            fileNumber: "Р’С‹Р±СЂР°РЅРѕ С„Р°Р№Р»РѕРІ: %s",
            selectPlaceholder: "Р’С‹Р±РµСЂРёС‚Рµ...",
            selectSearch: !1,
            selectSearchLimit: 10,
            selectSearchNotFound: "РЎРѕРІРїР°РґРµРЅРёР№ РЅРµ РЅР°Р№РґРµРЅРѕ",
            selectSearchPlaceholder: "РџРѕРёСЃРє...",
            selectVisibleOptions: 0,
            selectSmartPositioning: !0,
            locale: "ru",
            locales: {
              en: {
                filePlaceholder: "No file selected",
                fileBrowse: "Browse...",
                fileNumber: "Selected files: %s",
                selectPlaceholder: "Select...",
                selectSearchNotFound: "No matches found",
                selectSearchPlaceholder: "Search..."
              }
            },
            onSelectOpened: function() {},
            onSelectClosed: function() {},
            onFormStyled: function() {}
          };

      function r(t, r) {
        this.element = t, this.options = e.extend({}, n, r);
        var i = this.options.locale;
        void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
      }

      function i(n) {
        if (!e(n.target).parents().hasClass("jq-selectbox") && "OPTION" != n.target.nodeName && e("div.jq-selectbox.opened").length) {
          var r = e("div.jq-selectbox.opened"),
              i = e("div.jq-selectbox__search input", r),
              o = e("div.jq-selectbox__dropdown", r);
          r.find("select").data("_" + t).options.onSelectClosed.call(r), i.length && i.val("").keyup(), o.hide().find("li.sel").addClass("selected"), r.removeClass("focused opened dropup dropdown")
        }
      }
      r.prototype = {
        init: function() {
          var t = e(this.element),
              n = this.options,
              r = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
              o = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));

          function s() {
            void 0 !== t.attr("id") && "" !== t.attr("id") && (this.id = t.attr("id") + n.idSuffix), this.title = t.attr("title"), this.classes = t.attr("class"), this.data = t.data()
          }
          if (t.is(":checkbox")) {
            var a = function() {
              var n = new s,
                  r = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                    id: n.id,
                    title: n.title
                  }).addClass(n.classes).data(n.data);
              t.after(r).prependTo(r), t.is(":checked") && r.addClass("checked"), t.is(":disabled") && r.addClass("disabled"), r.click(function(e) {
                e.preventDefault(), t.triggerHandler("click"), r.is(".disabled") || (t.is(":checked") ? (t.prop("checked", !1), r.removeClass("checked")) : (t.prop("checked", !0), r.addClass("checked")), t.focus().change())
              }), t.closest("label").add('label[for="' + t.attr("id") + '"]').on("click.styler", function(t) {
                e(t.target).is("a") || e(t.target).closest(r).length || (r.triggerHandler("click"), t.preventDefault())
              }), t.on("change.styler", function() {
                t.is(":checked") ? r.addClass("checked") : r.removeClass("checked")
              }).on("keydown.styler", function(e) {
                32 == e.which && r.click()
              }).on("focus.styler", function() {
                r.is(".disabled") || r.addClass("focused")
              }).on("blur.styler", function() {
                r.removeClass("focused")
              })
            };
            a(), t.on("refresh", function() {
              t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler"), t.off(".styler").parent().before(t).remove(), a()
            })
          } else if (t.is(":radio")) {
            var l = function() {
              var n = new s,
                  r = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                    id: n.id,
                    title: n.title
                  }).addClass(n.classes).data(n.data);
              t.after(r).prependTo(r), t.is(":checked") && r.addClass("checked"), t.is(":disabled") && r.addClass("disabled"), e.fn.commonParents = function() {
                var t = this;
                return t.first().parents().filter(function() {
                  return e(this).find(t).length === t.length
                })
              }, e.fn.commonParent = function() {
                return e(this).commonParents().first()
              }, r.click(function(n) {
                if (n.preventDefault(), t.triggerHandler("click"), !r.is(".disabled")) {
                  var i = e('input[name="' + t.attr("name") + '"]');
                  i.commonParent().find(i).prop("checked", !1).parent().removeClass("checked"), t.prop("checked", !0).parent().addClass("checked"), t.focus().change()
                }
              }), t.closest("label").add('label[for="' + t.attr("id") + '"]').on("click.styler", function(t) {
                e(t.target).is("a") || e(t.target).closest(r).length || (r.triggerHandler("click"), t.preventDefault())
              }), t.on("change.styler", function() {
                t.parent().addClass("checked")
              }).on("focus.styler", function() {
                r.is(".disabled") || r.addClass("focused")
              }).on("blur.styler", function() {
                r.removeClass("focused")
              })
            };
            l(), t.on("refresh", function() {
              t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler"), t.off(".styler").parent().before(t).remove(), l()
            })
          } else if (t.is(":file")) {
            var c = function() {
              var r = new s,
                  i = t.data("placeholder");
              void 0 === i && (i = n.filePlaceholder);
              var o = t.data("browse");
              void 0 !== o && "" !== o || (o = n.fileBrowse);
              var a = e('<div class="jq-file"><div class="jq-file__name">' + i + '</div><div class="jq-file__browse">' + o + "</div></div>").attr({
                id: r.id,
                title: r.title
              }).addClass(r.classes).data(r.data);
              t.after(a).appendTo(a), t.is(":disabled") && a.addClass("disabled");
              var l = t.val(),
                  c = e("div.jq-file__name", a);
              l && c.text(l.replace(/.+[\\\/]/, "")), t.on("change.styler", function() {
                var e = t.val();
                if (t.is("[multiple]")) {
                  e = "";
                  var r = t[0].files.length;
                  if (r > 0) {
                    var o = t.data("number");
                    void 0 === o && (o = n.fileNumber), e = o = o.replace("%s", r)
                  }
                }
                c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(i), a.removeClass("changed")) : a.addClass("changed")
              }).on("focus.styler", function() {
                a.addClass("focused")
              }).on("blur.styler", function() {
                a.removeClass("focused")
              }).on("click.styler", function() {
                a.removeClass("focused")
              })
            };
            c(), t.on("refresh", function() {
              t.off(".styler").parent().before(t).remove(), c()
            })
          } else if (t.is('input[type="number"]')) {
            var u = function() {
              var n = new s,
                  r = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                    id: n.id,
                    title: n.title
                  }).addClass(n.classes).data(n.data);
              t.after(r).prependTo(r).wrap('<div class="jq-number__field"></div>'), t.is(":disabled") && r.addClass("disabled");
              var i, o, a, l = null,
                  c = null;
              void 0 !== t.attr("min") && (i = t.attr("min")), void 0 !== t.attr("max") && (o = t.attr("max")), a = void 0 !== t.attr("step") && e.isNumeric(t.attr("step")) ? Number(t.attr("step")) : Number(1);
              var u = function(n) {
                var r, s = t.val();
                e.isNumeric(s) || (s = 0, t.val("0")), n.is(".minus") ? r = Number(s) - a : n.is(".plus") && (r = Number(s) + a);
                var l = (a.toString().split(".")[1] || []).length;
                if (l > 0) {
                  for (var c = "1"; c.length <= l;) c += "0";
                  r = Math.round(r * c) / c
                }
                e.isNumeric(i) && e.isNumeric(o) ? r >= i && r <= o && t.val(r) : e.isNumeric(i) && !e.isNumeric(o) ? r >= i && t.val(r) : !e.isNumeric(i) && e.isNumeric(o) ? r <= o && t.val(r) : t.val(r)
              };
              r.is(".disabled") || (r.on("mousedown", "div.jq-number__spin", function() {
                var t = e(this);
                u(t), l = setTimeout(function() {
                  c = setInterval(function() {
                    u(t)
                  }, 40)
                }, 350)
              }).on("mouseup mouseout", "div.jq-number__spin", function() {
                clearTimeout(l), clearInterval(c)
              }).on("mouseup", "div.jq-number__spin", function() {
                t.change().trigger("input")
              }), t.on("focus.styler", function() {
                r.addClass("focused")
              }).on("blur.styler", function() {
                r.removeClass("focused")
              }))
            };
            u(), t.on("refresh", function() {
              t.off(".styler").closest(".jq-number").before(t).remove(), u()
            })
          } else if (t.is("select")) {
            var d = function() {
              function a(e) {
                var t = e.prop("scrollHeight") - e.outerHeight(),
                    n = null,
                    r = null;
                e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(i) {
                  n = i.originalEvent.detail < 0 || i.originalEvent.wheelDelta > 0 ? 1 : -1, ((r = e.scrollTop()) >= t && n < 0 || r <= 0 && n > 0) && (i.stopPropagation(), i.preventDefault())
                })
              }
              var l = e("option", t),
                  c = "";

              function u() {
                for (var e = 0; e < l.length; e++) {
                  var t = l.eq(e),
                      r = "",
                      i = "",
                      o = "",
                      s = "",
                      a = "",
                      u = "",
                      d = "",
                      f = "",
                      p = "";
                  t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (s = ' id="' + t.attr("id") + n.idSuffix + '"'), void 0 !== t.attr("title") && "" !== l.attr("title") && (a = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (d = " " + t.attr("class"), p = ' data-jqfs-class="' + t.attr("class") + '"');
                  var h = t.data();
                  for (var v in h) "" !== h[v] && (u += " data-" + v + '="' + h[v] + '"');
                  i + d !== "" && (o = ' class="' + i + d + '"'), r = "<li" + p + u + o + a + s + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (f = " " + t.parent().attr("class")), r = "<li" + p + u + ' class="' + i + d + " option" + f + '"' + a + s + ">" + t.html() + "</li>", t.is(":first-child") && (r = '<li class="optgroup' + f + '">' + t.parent().attr("label") + "</li>" + r)), c += r
                }
              }
              if (t.is("[multiple]")) {
                if (o || r) return;
                ! function() {
                  var n = new s,
                      r = e('<div class="jq-select-multiple jqselect"></div>').attr({
                        id: n.id,
                        title: n.title
                      }).addClass(n.classes).data(n.data);
                  t.after(r), u(), r.append("<ul>" + c + "</ul>");
                  var i = e("ul", r),
                      o = e("li", r),
                      d = t.attr("size"),
                      f = i.outerHeight(),
                      p = o.outerHeight();
                  void 0 !== d && d > 0 ? i.css({
                    height: p * d
                  }) : i.css({
                    height: 4 * p
                  }), f > r.height() && (i.css("overflowY", "scroll"), a(i), o.filter(".selected").length && i.scrollTop(i.scrollTop() + o.filter(".selected").position().top)), t.prependTo(r), t.is(":disabled") ? (r.addClass("disabled"), l.each(function() {
                    e(this).is(":selected") && o.eq(e(this).index()).addClass("selected")
                  })) : (o.filter(":not(.disabled):not(.optgroup)").click(function(n) {
                    t.focus();
                    var r = e(this);
                    if (n.ctrlKey || n.metaKey || r.addClass("selected"), n.shiftKey || r.addClass("first"), n.ctrlKey || n.metaKey || n.shiftKey || r.siblings().removeClass("selected first"), (n.ctrlKey || n.metaKey) && (r.is(".selected") ? r.removeClass("selected first") : r.addClass("selected first"), r.siblings().removeClass("first")), n.shiftKey) {
                      var i = !1,
                          s = !1;
                      r.siblings().removeClass("selected").siblings(".first").addClass("selected"), r.prevAll().each(function() {
                        e(this).is(".first") && (i = !0)
                      }), r.nextAll().each(function() {
                        e(this).is(".first") && (s = !0)
                      }), i && r.prevAll().each(function() {
                        if (e(this).is(".selected")) return !1;
                        e(this).not(".disabled, .optgroup").addClass("selected")
                      }), s && r.nextAll().each(function() {
                        if (e(this).is(".selected")) return !1;
                        e(this).not(".disabled, .optgroup").addClass("selected")
                      }), 1 == o.filter(".selected").length && r.addClass("first")
                    }
                    l.prop("selected", !1), o.filter(".selected").each(function() {
                      var t = e(this),
                          n = t.index();
                      t.is(".option") && (n -= t.prevAll(".optgroup").length), l.eq(n).prop("selected", !0)
                    }), t.change()
                  }), l.each(function(t) {
                    e(this).data("optionIndex", t)
                  }), t.on("change.styler", function() {
                    o.removeClass("selected");
                    var t = [];
                    l.filter(":selected").each(function() {
                      t.push(e(this).data("optionIndex"))
                    }), o.not(".optgroup").filter(function(n) {
                      return e.inArray(n, t) > -1
                    }).addClass("selected")
                  }).on("focus.styler", function() {
                    r.addClass("focused")
                  }).on("blur.styler", function() {
                    r.removeClass("focused")
                  }), f > r.height() && t.on("keydown.styler", function(e) {
                    38 != e.which && 37 != e.which && 33 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected").position().top - p), 40 != e.which && 39 != e.which && 34 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected:last").position().top - i.innerHeight() + 2 * p)
                  }))
                }()
              } else ! function() {
                var o = new s,
                    d = "",
                    f = t.data("placeholder"),
                    p = t.data("search"),
                    h = t.data("search-limit"),
                    v = t.data("search-not-found"),
                    g = t.data("search-placeholder"),
                    m = t.data("smart-positioning");
                void 0 === f && (f = n.selectPlaceholder), void 0 !== p && "" !== p || (p = n.selectSearch), void 0 !== h && "" !== h || (h = n.selectSearchLimit), void 0 !== v && "" !== v || (v = n.selectSearchNotFound), void 0 === g && (g = n.selectSearchPlaceholder), void 0 !== m && "" !== m || (m = n.selectSmartPositioning);
                var y = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
                  id: o.id,
                  title: o.title
                }).addClass(o.classes).data(o.data);
                t.after(y).prependTo(y);
                var x = y.css("z-index");
                x = x > 0 ? x : 1;
                var b = e("div.jq-selectbox__select", y),
                    w = e("div.jq-selectbox__select-text", y),
                    C = l.filter(":selected");
                u(), p && (d = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + g + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                var T = e('<div class="jq-selectbox__dropdown">' + d + "<ul>" + c + "</ul></div>");
                y.append(T);
                var k = e("ul", T),
                    j = e("li", T),
                    S = e("input", T),
                    q = e("div.jq-selectbox__not-found", T).hide();
                j.length < h && S.parent().hide(), "" === l.first().text() && l.first().is(":selected") && !1 !== f ? w.text(f).addClass("placeholder") : w.text(C.text());
                var D = 0,
                    N = 0;
                if (j.css({
                  display: "inline-block"
                }), j.each(function() {
                  var t = e(this);
                  t.innerWidth() > D && (D = t.innerWidth(), N = t.width())
                }), j.css({
                  display: ""
                }), w.is(".placeholder") && w.width() > D) w.width(w.width());
                else {
                  var E = y.clone().appendTo("body").width("auto"),
                      _ = E.outerWidth();
                  E.remove(), _ == y.outerWidth() && w.width(N)
                }
                D > y.width() && T.width(D), "" === l.first().text() && "" !== t.data("placeholder") && j.first().hide();
                var A = y.outerHeight(!0),
                    $ = S.parent().outerHeight(!0) || 0,
                    L = k.css("max-height"),
                    H = j.filter(".selected");
                if (H.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
                  var P = j.outerHeight();
                  !1 !== f && (P = j.eq(1).outerHeight()), j.data("li-height", P)
                }
                var O = T.css("top");
                if ("auto" == T.css("left") && T.css({
                  left: 0
                }), "auto" == T.css("top") && (T.css({
                  top: A
                }), O = A), T.hide(), H.length && (l.first().text() != C.text() && y.addClass("changed"), y.data("jqfs-class", H.data("jqfs-class")), y.addClass(H.data("jqfs-class"))), t.is(":disabled")) return y.addClass("disabled"), !1;
                b.click(function() {
                  if (e("div.jq-selectbox").filter(".opened").length && n.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), t.focus(), !r) {
                    var i = e(window),
                        o = j.data("li-height"),
                        s = y.offset().top,
                        c = i.height() - A - (s - i.scrollTop()),
                        u = t.data("visible-options");
                    void 0 !== u && "" !== u || (u = n.selectVisibleOptions);
                    var d = 5 * o,
                        f = o * u;
                    u > 0 && u < 6 && (d = f), 0 === u && (f = "auto");
                    var p = function() {
                      T.height("auto").css({
                        bottom: "auto",
                        top: O
                      });
                      var e = function() {
                        k.css("max-height", Math.floor((c - 20 - $) / o) * o)
                      };
                      e(), k.css("max-height", f), "none" != L && k.css("max-height", L), c < T.outerHeight() + 20 && e()
                    };
                    !0 === m || 1 === m ? c > d + $ + 20 ? (p(), y.removeClass("dropup").addClass("dropdown")) : (function() {
                      T.height("auto").css({
                        top: "auto",
                        bottom: O
                      });
                      var e = function() {
                        k.css("max-height", Math.floor((s - i.scrollTop() - 20 - $) / o) * o)
                      };
                      e(), k.css("max-height", f), "none" != L && k.css("max-height", L), s - i.scrollTop() - 20 < T.outerHeight() + 20 && e()
                    }(), y.removeClass("dropdown").addClass("dropup")) : !1 === m || 0 === m ? c > d + $ + 20 && (p(), y.removeClass("dropup").addClass("dropdown")) : (T.height("auto").css({
                      bottom: "auto",
                      top: O
                    }), k.css("max-height", f), "none" != L && k.css("max-height", L)), y.offset().left + T.outerWidth() > i.width() && T.css({
                      left: "auto",
                      right: 0
                    }), e("div.jqselect").css({
                      zIndex: x - 1
                    }).removeClass("opened"), y.css({
                      zIndex: x
                    }), T.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), T.show(), y.addClass("opened focused"), n.onSelectOpened.call(y)) : (T.hide(), y.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && n.onSelectClosed.call(y)), S.length && (S.val("").keyup(), q.hide(), S.keyup(function() {
                      var n = e(this).val();
                      j.each(function() {
                        e(this).html().match(new RegExp(".*?" + n + ".*?", "i")) ? e(this).show() : e(this).hide()
                      }), "" === l.first().text() && "" !== t.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? q.show() : q.hide()
                    })), j.filter(".selected").length && ("" === t.val() ? k.scrollTop(0) : (k.innerHeight() / o % 2 != 0 && (o /= 2), k.scrollTop(k.scrollTop() + j.filter(".selected").position().top - k.innerHeight() / 2 + o))), a(k)
                  }
                }), j.hover(function() {
                  e(this).siblings().removeClass("selected")
                }), j.filter(".selected").text(), j.filter(":not(.disabled):not(.optgroup)").click(function() {
                  t.focus();
                  var r = e(this),
                      i = r.text();
                  if (!r.is(".selected")) {
                    var o = r.index();
                    o -= r.prevAll(".optgroup").length, r.addClass("selected sel").siblings().removeClass("selected sel"), l.prop("selected", !1).eq(o).prop("selected", !0), w.text(i), y.data("jqfs-class") && y.removeClass(y.data("jqfs-class")), y.data("jqfs-class", r.data("jqfs-class")), y.addClass(r.data("jqfs-class")), t.change()
                  }
                  T.hide(), y.removeClass("opened dropup dropdown"), n.onSelectClosed.call(y)
                }), T.mouseout(function() {
                  e("li.sel", T).addClass("selected")
                }), t.on("change.styler", function() {
                  w.text(l.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(t[0].selectedIndex).addClass("selected sel"), l.first().text() != j.filter(".selected").text() ? y.addClass("changed") : y.removeClass("changed")
                }).on("focus.styler", function() {
                  y.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                }).on("blur.styler", function() {
                  y.removeClass("focused")
                }).on("keydown.styler keyup.styler", function(e) {
                  var r = j.data("li-height");
                  "" === t.val() ? w.text(f).addClass("placeholder") : w.text(l.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(t[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === t.val() ? k.scrollTop(0) : k.scrollTop(k.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || k.scrollTop(k.scrollTop() + j.filter(".selected").position().top - k.innerHeight() + r), 13 == e.which && (e.preventDefault(), T.hide(), y.removeClass("opened dropup dropdown"), n.onSelectClosed.call(y))
                }).on("keydown.styler", function(e) {
                  32 == e.which && (e.preventDefault(), b.click())
                }), i.registered || (e(document).on("click", i), i.registered = !0)
              }()
            };
            d(), t.on("refresh", function() {
              t.off(".styler").parent().before(t).remove(), d()
            })
          } else t.is(":reset") && t.on("click", function() {
            setTimeout(function() {
              t.closest("form").find("input, select").trigger("refresh")
            }, 1)
          })
        },
        destroy: function() {
          var n = e(this.element);
          n.is(":checkbox") || n.is(":radio") ? (n.removeData("_" + t).off(".styler refresh").removeAttr("style").parent().before(n).remove(), n.closest("label").add('label[for="' + n.attr("id") + '"]').off(".styler")) : n.is('input[type="number"]') ? n.removeData("_" + t).off(".styler refresh").closest(".jq-number").before(n).remove() : (n.is(":file") || n.is("select")) && n.removeData("_" + t).off(".styler refresh").removeAttr("style").parent().before(n).remove()
        }
      }, e.fn[t] = function(n) {
        var i, o = arguments;
        return void 0 === n || "object" == typeof n ? (this.each(function() {
          e.data(this, "_" + t) || e.data(this, "_" + t, new r(this, n))
        }).promise().done(function() {
          var n = e(this[0]).data("_" + t);
          n && n.options.onFormStyled.call()
        }), this) : "string" == typeof n && "_" !== n[0] && "init" !== n ? (this.each(function() {
          var s = e.data(this, "_" + t);
          s instanceof r && "function" == typeof s[n] && (i = s[n].apply(s, Array.prototype.slice.call(o, 1)))
        }), void 0 !== i ? i : this) : void 0
      }, i.registered = !1
    }),
    function(e) {
      "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(e) {
      function t(t, n) {
        var i = this,
            o = e(this);
        if (i.value === o.attr(s ? "placeholder-x" : "placeholder") && o.hasClass(f.customClass))
          if (i.value = "", o.removeClass(f.customClass), o.data("placeholder-password")) {
            if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), !0 === t) return o[0].value = n, n;
            o.focus()
          } else i == r() && i.select()
      }

      function n(n) {
        var r, i = this,
            o = e(this),
            a = i.id;
        if (!n || "blur" !== n.type || !o.hasClass(f.customClass))
          if ("" === i.value) {
            if ("password" === i.type) {
              if (!o.data("placeholder-textinput")) {
                try {
                  r = o.clone().prop({
                    type: "text"
                  })
                } catch (t) {
                  r = e("<input>").attr(e.extend(function(t) {
                    var n = {},
                        r = /^jQuery\d+$/;
                    return e.each(t.attributes, function(e, t) {
                      t.specified && !r.test(t.name) && (n[t.name] = t.value)
                    }), n
                  }(this), {
                    type: "text"
                  }))
                }
                r.removeAttr("name").data({
                  "placeholder-enabled": !0,
                  "placeholder-password": o,
                  "placeholder-id": a
                }).bind("focus.placeholder", t), o.data({
                  "placeholder-textinput": r,
                  "placeholder-id": a
                }).before(r)
              }
              i.value = "", o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", o.data("placeholder-id")).show()
            } else {
              var l = o.data("placeholder-password");
              l && (l[0].value = "", o.attr("id", o.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            o.addClass(f.customClass), o[0].value = o.attr(s ? "placeholder-x" : "placeholder")
          } else o.removeClass(f.customClass)
      }

      function r() {
        try {
          return document.activeElement
        } catch (e) {}
      }
      var i, o, s = !1,
          a = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
          l = "placeholder" in document.createElement("input") && !a && !s,
          c = "placeholder" in document.createElement("textarea") && !a && !s,
          u = e.valHooks,
          d = e.propHooks,
          f = {};
      l && c ? ((o = e.fn.placeholder = function() {
        return this
      }).input = !0, o.textarea = !0) : ((o = e.fn.placeholder = function(r) {
        return f = e.extend({}, {
          customClass: "placeholder"
        }, r), this.filter((l ? "textarea" : ":input") + "[" + (s ? "placeholder-x" : "placeholder") + "]").not("." + f.customClass).not(":radio, :checkbox, [type=hidden]").bind({
          "focus.placeholder": t,
          "blur.placeholder": n
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
      }).input = l, o.textarea = c, i = {
        get: function(t) {
          var n = e(t),
              r = n.data("placeholder-password");
          return r ? r[0].value : n.data("placeholder-enabled") && n.hasClass(f.customClass) ? "" : t.value
        },
        set: function(i, o) {
          var s, a, l = e(i);
          return "" !== o && (s = l.data("placeholder-textinput"), a = l.data("placeholder-password"), s ? (t.call(s[0], !0, o) || (i.value = o), s[0].value = o) : a && (t.call(i, !0, o) || (a[0].value = o), i.value = o)), l.data("placeholder-enabled") ? ("" === o ? (i.value = o, i != r() && n.call(i)) : (l.hasClass(f.customClass) && t.call(i), i.value = o), l) : (i.value = o, l)
        }
      }, l || (u.input = i, d.value = i), c || (u.textarea = i, d.value = i), e(function() {
        e(document).delegate("form", "submit.placeholder", function() {
          var r = e("." + f.customClass, this).each(function() {
            t.call(this, !0, "")
          });
          setTimeout(function() {
            r.each(n)
          }, 10)
        })
      }), e(window).bind("beforeunload.placeholder", function() {
        var t = !0;
        try {
          "javascript:void(0)" === document.activeElement.toString() && (t = !1)
        } catch (e) {}
        t && e("." + f.customClass).each(function() {
          this.value = ""
        })
      }))
    }), $(document).ready(function() {
  $("input, textarea").placeholder()
}), $(document).ready(function() {
  var e, t, n;
  setTimeout(function() {
    $("select").styler()
  }, 100), $(".BtnAll").on("click", function() {
    return $(".ClinicsHidden").addClass("active"), !1
  }), $("#clouse_panel").on("click", function() {
    $(".main_info").addClass("active");
    new Date((new Date).getTime() + 6e5);
    return document.cookie = "cookie_info=yes", !1
  }), "yes" === (t = "cookie_info", !!(n = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) && decodeURIComponent(n[1])) && ($(".main_info").removeClass("active"), $(".main_info").css("display", "none")), $(".open_menu").on("click", function() {
    return $(this).toggleClass("active"), $("#header nav").toggleClass("active"), !1
  }), $(".question a").on("click", function() {
    return $(this).closest(".faq").toggleClass("active"), !1
  }), $(".map_link").on("click", function(e) {
    if ($("#map").length) {
      e.preventDefault();
      var t = $(this).attr("href");
      t = t.replace("/", "");
      var n = $(t).offset().top;
      $("body,html").animate({
        scrollTop: n
      }, 1500)
    }
  }), $(".step_nav a").on("click", function(e) {
    e.preventDefault(), $(this).closest(".step_nav").find("a").removeClass("active"), $(this).addClass("active"), tab = $(this).data("scheme"), $(".tab_elem").css("display", "none"), "tab_day" == tab ? ($(".tab_day_only").css("display", "block"), $(".tab_evening_only").css("display", "none")) : ($(".tab_day_only").css("display", "none"), $(".tab_evening_only").css("display", "block")), $("." + tab).fadeIn(1500)
  }), $(".timing_nav a").on("click", function(e) {
    e.preventDefault(), $(this).closest(".timing_nav").find("a").addClass("btn_color"), $(this).removeClass("btn_color"), tab = $(this).data("scheme"), $(".tab_elem").css("display", "none"), "timing_diagnostic" == tab ? ($(".timing_diagnostic_only").css("display", "block"), $(".timing_surgery_only").css("display", "none")) : ($(".timing_diagnostic_only").css("display", "none"), $(".timing_surgery_only").css("display", "block")), $("." + tab).fadeIn(1500)
  }),
      setTimeout(function() {
        $("#map").length ? DG.then(function() {
          return DG.plugin("https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js")
        }).then(function() {
          e = DG.map("map", {
            center: [55.76, 37.64],
            zoom: 9,
            fullscreenControl: !1,
            zoomControl: !1
          }), myIcon = DG.icon({
            iconUrl: "./img/map_icon.png",
            iconSize: [32, 35]
          });
          var t = DG.markerClusterGroup({
            showCoverageOnHover: !1
          });
          $.ajax({
            url: "/excel",
            success: function(n) {
              array = JSON.parse(n);
              for (var r = 0; r < array.features.length; r++) {
                var i = DG.marker([array.features[r].geometry.coordinates[0], array.features[r].geometry.coordinates[1]], {
                  icon: myIcon
                }).bindPopup(array.features[r].properties.balloonContent);
                t.addLayer(i)
              }
              e.addLayer(t)
            }
          }), e.locate({
            setView: !0,
            watch: !0
          }).on("locationfound", function(t) {
            DG.marker([t.latitude, t.longitude]).addTo(e).bindPopup("Р’Р°С€Рµ РјРµСЃС‚РѕРїРѕР»РѕР¶РµРЅРёРµ!")
          })
        }) : DG.then(function() {
          return DG.plugin("https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js")
        }).then(function() {
          e = DG.map("map2gis", {
            center: [65.76, 95.64],
            zoom: 3,
            fullscreenControl: !1,
            zoomControl: !1
          }), myIcon = DG.icon({
            iconUrl: "./img/clinic_map_icon.png",
            iconSize: [34, 41]
          });
          var t = DG.markerClusterGroup({
            showCoverageOnHover: !1
          });
          $.ajax({
            url: "/excel-pharm",
            success: function(n) {
              array = JSON.parse(n);
              for (var r = 0; r < array.features.length; r++) {
                var i = DG.marker([array.features[r].geometry.coordinates[0], array.features[r].geometry.coordinates[1]], {
                  icon: myIcon
                }).bindPopup(array.features[r].properties.balloonContent);
                t.addLayer(i)
              }
              e.addLayer(t)
            }
          }), e.locate({
            setView: !0,
            watch: !0
          }).on("locationfound", function(t) {
            DG.marker([t.latitude, t.longitude]).addTo(e).bindPopup("Р’Р°С€Рµ РјРµСЃС‚РѕРїРѕР»РѕР¶РµРЅРёРµ!")
          })
        })
      }, 3000),
      $(".clinics").on("click", ".clinics_pages .clinics_pages_num", function() {
        offset = 10 * (Number($(this).html()) - 1), $(".clinics_pages .clinics_pages_num").removeClass("current_page"), $(this).addClass("current_page"), region = $(".content_box .form_separate select").val(), "- Р’С‹Р±РµСЂРёС‚Рµ СЂРµРіРёРѕРЅ -" == region && (region = ""), $.ajax({
          url: "/clinics",
          type: "POST",
          data: {
            offset: offset,
            region: region
          },
          success: function(e) {
            console.log(region, e), $(".clinics_list").html($(e).find(".clinics_list").html()), ancor = $(".form_separate").offset().top, $("html, body").animate({
              scrollTop: ancor
            }, 1e3)
          }
        })
      }), $(".content_box .form_separate select").change(function() {
    that = $(this).find("option:selected");
    var t = $(".content_box .form_separate select").val();
    "list-item" == $(".jq-selectbox__dropdown ul li:nth-child(1)").css("display") && $(".jq-selectbox__dropdown ul li:nth-child(1)").css("display", "none"), $.ajax({
      url: "/clinics",
      type: "POST",
      data: {
        offset: 0,
        region: t
      },
      success: function(n) {
        console.log(t, n), $(".clinics_list").html($(n).find(".clinics_list").html()), $(".clinics_pages").html($(n).find(".clinics_pages").html());
        var r = $(that).data("region_x"),
            i = $(that).data("region_y"),
            o = DG.latLng(r, i);
        e.setView(o, 7)
      }
    })
  }), $(window).scroll(function() {
    $(window).scrollTop() > 10 ? $("#header").css("box-shadow", "0 0 10px rgba(0,0,0,0.5)") : $("#header").css("box-shadow", "none")
  }), $(".contacts .more_info").click(function() {
    $(".header_info_popup").css("display", "block")
  }), $(".contacts .header_info_popup .close_popup").click(function() {
    $(".header_info_popup").css("display", "none")
  })
});