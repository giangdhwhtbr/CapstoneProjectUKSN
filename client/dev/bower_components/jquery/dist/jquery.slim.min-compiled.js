"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery v3.0.0-beta1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector,-deprecated | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {};function m(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var n = "3.0.0-beta1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector,-deprecated",
      o = function o(a, b) {
    return new o.fn.init(a, b);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      q = /^-ms-/,
      r = /-([a-z])/g,
      s = function s(a, b) {
    return b.toUpperCase();
  };o.fn = o.prototype = { jquery: n, constructor: o, length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = o.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return o.each(this, a);
    }, map: function map(a) {
      return this.pushStack(o.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, o.extend = o.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, o.extend({ expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === o.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = o.type(a);return ("number" === b || "string" === b) && a - parseFloat(a) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      return "object" !== o.type(a) || a.nodeType || o.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      m(a);
    }, camelCase: function camelCase(a) {
      return a.replace(q, "ms-").replace(r, s);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (t(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(p, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (t(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (t(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || o.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (o.fn[Symbol.iterator] = c[Symbol.iterator]), o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function t(a) {
    var b = !!a && "length" in a && a.length,
        c = o.type(a);return "function" === c || o.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var u = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0;
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);o.find = u, o.expr = u.selectors, o.expr[":"] = o.expr.pseudos, o.uniqueSort = o.unique = u.uniqueSort, o.text = u.getText, o.isXMLDoc = u.isXML, o.contains = u.contains;var v = function v(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && o(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      w = function w(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      x = o.expr.match.needsContext,
      y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      z = /^.[^:#\[\.,]*$/;function A(a, b, c) {
    if (o.isFunction(b)) return o.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return o.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (z.test(b)) return o.filter(b, a, c);b = o.filter(b, a);
    }return o.grep(a, function (a) {
      return h.call(b, a) > -1 !== c && 1 === a.nodeType;
    });
  }o.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, o.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(o(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (o.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        o.find(a, e[b], d);
      }return this.pushStack(c > 1 ? o.uniqueSort(d) : d);
    }, filter: function filter(a) {
      return this.pushStack(A(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(A(this, a || [], !0));
    }, is: function is(a) {
      return !!A(this, "string" == typeof a && x.test(a) ? o(a) : a || [], !1).length;
    } });var B,
      C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      D = o.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || B, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : C.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), y.test(e[1]) && o.isPlainObject(b)) for (e in b) {
          o.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : o.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(o) : o.makeArray(a, this);
  };D.prototype = o.fn, B = o(d);var E = /^(?:parents|prev(?:Until|All))/,
      F = { children: !0, contents: !0, next: !0, prev: !0 };o.fn.extend({ has: function has(a) {
      var b = o(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (o.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && o(a);if (!x.test(a)) for (; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? o.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(o(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(o.uniqueSort(o.merge(this.get(), o(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function G(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }o.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return v(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return v(a, "parentNode", c);
    }, next: function next(a) {
      return G(a, "nextSibling");
    }, prev: function prev(a) {
      return G(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return v(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return v(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return v(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return v(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return w((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return w(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || o.merge([], a.childNodes);
    } }, function (a, b) {
    o.fn[a] = function (c, d) {
      var e = o.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (F[a] || o.uniqueSort(e), E.test(a) && e.reverse()), this.pushStack(e);
    };
  });var H = /\S+/g;function I(a) {
    var b = {};return o.each(a.match(H) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }o.Callbacks = function (a) {
    a = "string" == typeof a ? I(a) : o.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          o.each(b, function (b, c) {
            o.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== o.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return o.each(arguments, function (a, b) {
          var c;while ((c = o.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? o.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function J(a) {
    return a;
  }function K(a) {
    throw a;
  }o.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", o.Callbacks("memory"), o.Callbacks("memory"), 2], ["resolve", "done", o.Callbacks("once memory"), o.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", o.Callbacks("once memory"), o.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return o.Deferred(function (b) {
            o.each(c, function (c, d) {
              var g = o.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = g && g.apply(this, arguments);a && o.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this === e ? b.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, f) {
          var g = 0;function h(b, c, d, f) {
            return function () {
              var i = this === e ? void 0 : this,
                  j = arguments,
                  k = function k() {
                var a, e;if (!(g > b)) {
                  if (a = d.apply(i, j), a === c.promise()) throw new TypeError("Thenable self-resolution");e = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, o.isFunction(e) ? f ? e.call(a, h(g, c, J, f), h(g, c, K, f)) : (g++, e.call(a, h(g, c, J, f), h(g, c, K, f), h(g, c, J, c.notify))) : (d !== J && (i = void 0, j = [a]), (f || c.resolveWith)(i || c.promise(), j));
                }
              },
                  l = f ? k : function () {
                try {
                  k();
                } catch (a) {
                  o.Deferred.exceptionHook && o.Deferred.exceptionHook(a, l.stackTrace), b + 1 >= g && (d !== K && (i = void 0, j = [a]), c.rejectWith(i || c.promise(), j));
                }
              };b ? l() : (o.Deferred.getStackHook && (l.stackTrace = o.Deferred.getStackHook()), a.setTimeout(l));
            };
          }return o.Deferred(function (a) {
            c[0][3].add(h(0, a, o.isFunction(f) ? f : J, a.notifyWith)), c[1][3].add(h(0, a, o.isFunction(b) ? b : J)), c[2][3].add(h(0, a, o.isFunction(d) ? d : K));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? o.extend(a, e) : e;
        } },
          f = {};return o.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? e : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when() {
      var a,
          b,
          c = 0,
          d = e.call(arguments),
          f = d.length,
          g = f,
          h = o.Deferred(),
          i = function i(a) {
        return function (c) {
          b[a] = this, d[a] = arguments.length > 1 ? e.call(arguments) : c, --g || h.resolveWith(1 === b.length ? b[0] : b, d);
        };
      };if (f > 0) for (b = new Array(f); f > c; c++) {
        d[c] && o.isFunction(a = d[c].promise) ? a.call(d[c]).done(i(c)).fail(h.reject) : d[c] && o.isFunction(a = d[c].then) ? a.call(d[c], i(c), h.reject) : i(c)(d[c]);
      } else h.resolveWith();return h.promise();
    } });var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;o.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && L.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, c);
  };var M;o.fn.ready = function (a) {
    return o.ready.promise().done(a), this;
  }, o.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? o.readyWait++ : o.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || M.resolveWith(d, [o]));
    } });function N() {
    d.removeEventListener("DOMContentLoaded", N), a.removeEventListener("load", N), o.ready();
  }o.ready.promise = function (b) {
    return M || (M = o.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(o.ready) : (d.addEventListener("DOMContentLoaded", N), a.addEventListener("load", N))), M.promise(b);
  }, o.ready.promise();var O = function O(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === o.type(c)) {
      e = !0;for (h in c) {
        O(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(o(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      P = function P(a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function Q() {
    this.expando = o.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, P(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[o.camelCase(b)] = c;else for (d in b) {
        e[o.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][o.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          o.isArray(b) ? b = b.map(o.camelCase) : (b = o.camelCase(b), b = b in d ? [b] : b.match(H) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || o.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !o.isEmptyObject(b);
    } };var R = new Q(),
      S = new Q(),
      T = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      U = /[A-Z]/g;function V(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(U, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : T.test(c) ? o.parseJSON(c) : c;
      } catch (e) {}S.set(a, b, c);
    } else c = void 0;return c;
  }o.extend({ hasData: function hasData(a) {
      return S.hasData(a) || R.hasData(a);
    }, data: function data(a, b, c) {
      return S.access(a, b, c);
    }, removeData: function removeData(a, b) {
      S.remove(a, b);
    }, _data: function _data(a, b, c) {
      return R.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      R.remove(a, b);
    } }), o.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = S.get(f), 1 === f.nodeType && !R.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), V(f, d, e[d])));
          }R.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        S.set(this, a);
      }) : O(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = S.get(f, a), void 0 !== c) return c;if (c = V(f, a), void 0 !== c) return c;
        } else this.each(function () {
          S.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        S.remove(this, a);
      });
    } }), o.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = R.get(a, b), c && (!d || o.isArray(c) ? d = R.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = o.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = o._queueHooks(a, b),
          g = function g() {
        o.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return R.get(a, c) || R.access(a, c, { empty: o.Callbacks("once memory").add(function () {
          R.remove(a, [b + "queue", c]);
        }) });
    } }), o.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = o.queue(this, a, b);o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        o.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = o.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = R.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      X = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
      Y = ["Top", "Right", "Bottom", "Left"],
      Z = function Z(a, b) {
    return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a);
  },
      $ = function $(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function _(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return o.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (o.cssNumber[b] ? "" : "px"),
        k = (o.cssNumber[b] || "px" !== j && +i) && X.exec(o.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, o.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var aa = {};function ba(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = aa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = o.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), aa[d] = e, e);
  }function ca(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = R.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && "none" === o.css(d, "display") && o.contains(d.ownerDocument, d) && (e[f] = ba(d))) : "none" !== c && (e[f] = "none", R.set(d, "display", c)));
    }for (f = 0; g > f; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }o.fn.extend({ show: function show() {
      return ca(this, !0);
    }, hide: function hide() {
      return ca(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        Z(this) ? o(this).show() : o(this).hide();
      });
    } });var da = /^(?:checkbox|radio)$/i,
      ea = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ga.optgroup = ga.option, ga.tbody = ga.tfoot = ga.colgroup = ga.caption = ga.thead, ga.th = ga.td;function ha(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c;
  }function ia(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      R.set(a[c], "globalEval", !b || R.get(b[c], "globalEval"));
    }
  }var ja = /<|&#?\w+;/;function ka(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, p = a.length; p > n; n++) {
      if (f = a[n], f || 0 === f) if ("object" === o.type(f)) o.merge(m, f.nodeType ? [f] : f);else if (ja.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ea.exec(f) || ["", ""])[1].toLowerCase(), i = ga[h] || ga._default, g.innerHTML = i[1] + o.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }o.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && o.inArray(f, d) > -1) e && e.push(f);else if (j = o.contains(f.ownerDocument, f), g = ha(l.appendChild(f), "script"), j && ia(g), c) {
        k = 0;while (f = g[k++]) {
          fa.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^([^.]*)(?:\.(.+)|)/;function oa() {
    return !0;
  }function pa() {
    return !1;
  }function qa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ra(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ra(a, h, c, d, b[h], f);
      }return a;
    }return null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1 && (e = pa), 1 === f && (g = e, e = function e(a) {
      return o().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = o.guid++)), a.each(function () {
      o.event.add(this, b, e, d, c);
    });
  }o.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          q,
          r = R.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof o && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(H) || [""], j = b.length;while (j--) {
          h = na.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({ type: n, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && o.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          q,
          r = R.hasData(a) && R.get(a);if (r && (i = r.events)) {
        b = (b || "").match(H) || [""], j = b.length;while (j--) {
          if (h = na.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
            l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n]);
          } else for (n in i) {
            o.event.remove(a, n + b[j], c, d, !0);
          }
        }o.isEmptyObject(i) && R.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = o.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (R.get(this, "events") || {})[a.type] || [],
          k = o.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = o.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) > -1 : o.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[o.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = ma.test(e) ? this.mouseHooks : la.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== qa() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === qa() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return o.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, o.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, o.Event = function (a, b) {
    return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? oa : pa) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void (this[o.expando] = !0)) : new o.Event(a, b);
  }, o.Event.prototype = { constructor: o.Event, isDefaultPrevented: pa, isPropagationStopped: pa, isImmediatePropagationStopped: pa, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = oa, a && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = oa, a && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, o.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    o.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), o.fn.extend({ on: function on(a, b, c, d) {
      return ra(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ra(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = pa), this.each(function () {
        o.event.remove(this, a, c, b);
      });
    } });var sa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ta = /<script|<style|<link/i,
      ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
      va = /^true\/(.*)/,
      wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function xa(a, b) {
    return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function ya(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function za(a) {
    var b = va.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Aa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (R.hasData(a) && (f = R.access(a), g = R.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            o.event.add(b, e, j[e][c]);
          }
        }
      }S.hasData(a) && (h = S.access(a), i = o.extend({}, h), S.set(b, i));
    }
  }function Ba(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && da.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }function Ca(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        n = 0,
        p = a.length,
        q = p - 1,
        r = b[0],
        s = o.isFunction(r);if (s || p > 1 && "string" == typeof r && !l.checkClone && ua.test(r)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = r.call(this, e, f.html())), Ca(f, b, c, d);
    });if (p && (e = ka(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = o.map(ha(e, "script"), ya), i = h.length; p > n; n++) {
        j = e, n !== q && (j = o.clone(j, !0, !0), i && o.merge(h, ha(j, "script"))), c.call(a[n], j, n);
      }if (i) for (k = h[h.length - 1].ownerDocument, o.map(h, za), n = 0; i > n; n++) {
        j = h[n], fa.test(j.type || "") && !R.access(j, "globalEval") && o.contains(k, j) && (j.src ? o._evalUrl && o._evalUrl(j.src) : m(j.textContent.replace(wa, ""), k));
      }
    }return a;
  }function Da(a, b, c) {
    for (var d, e = b ? o.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || o.cleanData(ha(d)), d.parentNode && (c && o.contains(d.ownerDocument, d) && ia(ha(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }o.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(sa, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = o.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a))) for (g = ha(h), f = ha(a), d = 0, e = f.length; e > d; d++) {
        Ba(f[d], g[d]);
      }if (b) if (c) for (f = f || ha(a), g = g || ha(h), d = 0, e = f.length; e > d; d++) {
        Aa(f[d], g[d]);
      } else Aa(a, h);return g = ha(h, "script"), g.length > 0 && ia(g, !i && ha(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = o.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (P(c)) {
          if (b = c[R.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? o.event.remove(c, d) : o.removeEvent(c, d, b.handle);
            }c[R.expando] = void 0;
          }c[S.expando] && (c[S.expando] = void 0);
        }
      }
    } }), o.fn.extend({ detach: function detach(a) {
      return Da(this, a, !0);
    }, remove: function remove(a) {
      return Da(this, a);
    }, text: function text(a) {
      return O(this, function (a) {
        return void 0 === a ? o.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ca(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ca(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ca(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ca(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (o.cleanData(ha(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return o.clone(this, a, b);
      });
    }, html: function html(a) {
      return O(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ta.test(a) && !ga[(ea.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = o.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ha(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ca(this, arguments, function (b) {
        var c = this.parentNode;o.inArray(this, a) < 0 && (o.cleanData(ha(this)), c && c.replaceChild(b, this));
      }, a);
    } }), o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    o.fn[a] = function (a) {
      for (var c, d = [], e = o(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), o(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var Ea = /^margin/,
      Fa = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
      Ga = function Ga(b) {
    var c = b.ownerDocument.defaultView;return c.opener || (c = a), c.getComputedStyle(b);
  },
      Ha = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ha.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ha.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);o.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          } });
      })();
    }
  }();function Ia(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ga(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), !l.pixelMarginRight() && Fa.test(g) && Ea.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Ja(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ka = /^(none|table(?!-c[ea]).+)/,
      La = { position: "absolute", visibility: "hidden", display: "block" },
      Ma = { letterSpacing: "0", fontWeight: "400" },
      Na = ["Webkit", "Moz", "ms"],
      Oa = d.createElement("div").style;function Pa(a) {
    if (a in Oa) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Na.length;while (c--) {
      if (a = Na[c] + b, a in Oa) return a;
    }
  }function Qa(a, b, c) {
    var d = X.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Ra(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += o.css(a, c + Y[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + Y[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + Y[f] + "Width", !0, e))) : (g += o.css(a, "padding" + Y[f], !0, e), "padding" !== c && (g += o.css(a, "border" + Y[f] + "Width", !0, e)));
    }return g;
  }function Sa(b, c, e) {
    var f,
        g = !0,
        h = Ga(b),
        i = "border-box" === o.css(b, "boxSizing", !1, h);if (b.getClientRects().length && (f = b.getBoundingClientRect()[c]), d.msFullscreenElement && a.top !== a && (f *= 100), 0 >= f || null == f) {
      if (f = Ia(b, c, h), (0 > f || null == f) && (f = b.style[c]), Fa.test(f)) return f;g = i && (l.boxSizingReliable() || f === b.style[c]), f = parseFloat(f) || 0;
    }return f + Ra(b, c, e || (i ? "border" : "content"), g, h) + "px";
  }o.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Ia(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = o.camelCase(b),
            i = a.style;return b = o.cssProps[h] || (o.cssProps[h] = Pa(h) || h), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = X.exec(c)) && e[1] && (c = _(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (o.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = o.camelCase(b);return b = o.cssProps[h] || (o.cssProps[h] = Pa(h) || h), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ia(a, b, d)), "normal" === e && b in Ma && (e = Ma[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), o.each(["height", "width"], function (a, b) {
    o.cssHooks[b] = { get: function get(a, c, d) {
        return c ? !Ka.test(o.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Sa(a, b, d) : $(a, La, function () {
          return Sa(a, b, d);
        }) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ga(a),
            g = d && Ra(a, b, d, "border-box" === o.css(a, "boxSizing", !1, f), f);return g && (e = X.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = o.css(a, b)), Qa(a, c, g);
      } };
  }), o.cssHooks.marginLeft = Ja(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Ia(a, "marginLeft")) || a.getBoundingClientRect().left - $(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), o.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    o.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + Y[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ea.test(a) || (o.cssHooks[a + b].set = Qa);
  }), o.fn.extend({ css: function css(a, b) {
      return O(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (o.isArray(b)) {
          for (d = Ga(a), e = b.length; e > g; g++) {
            f[b[g]] = o.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? o.style(a, b, c) : o.css(a, b);
      }, a, b, arguments.length > 1);
    } }), o.fn.delay = function (b, c) {
    return b = o.fx ? o.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var Ta,
      Ua = o.expr.attrHandle,
      Va = /[A-Z]+/g,
      Wa = function Wa(a) {
    return a.toLowerCase();
  };o.fn.extend({ attr: function attr(a, b) {
      return O(this, o.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        o.removeAttr(this, a);
      });
    } }), o.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.replace(Va, Wa), e = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Ta : void 0)), void 0 !== c ? null === c ? void o.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = o.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(H);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), Ta = { set: function set(a, b, c) {
      return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, o.each(o.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = Ua[b] || o.find.attr;Ua[b] = function (a, b, d) {
      var e, f;return d || (f = Ua[b], Ua[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Ua[b] = f), e;
    };
  });var Xa = /^(?:input|select|textarea|button)$/i,
      Ya = /^(?:a|area)$/i;o.fn.extend({ prop: function prop(a, b) {
      return O(this, o.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[o.propFix[a] || a];
      });
    } }), o.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && o.isXMLDoc(a) || (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = o.find.attr(a, "tabindex");return b ? parseInt(b, 10) : Xa.test(a.nodeName) || Ya.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (o.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    o.propFix[this.toLowerCase()] = this;
  });var Za = /[\t\r\n\f]/g;function $a(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }o.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (o.isFunction(a)) return this.each(function (b) {
        o(this).addClass(a.call(this, b, $a(this)));
      });if ("string" == typeof a && a) {
        b = a.match(H) || [];while (c = this[i++]) {
          if (e = $a(c), d = 1 === c.nodeType && (" " + e + " ").replace(Za, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = o.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (o.isFunction(a)) return this.each(function (b) {
        o(this).removeClass(a.call(this, b, $a(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(H) || [];while (c = this[i++]) {
          if (e = $a(c), d = 1 === c.nodeType && (" " + e + " ").replace(Za, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = o.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : o.isFunction(a) ? this.each(function (c) {
        o(this).toggleClass(a.call(this, c, $a(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = o(this), f = a.match(H) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (void 0 === a || "boolean" === c) && (b = $a(this), b && R.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : R.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + $a(c) + " ").replace(Za, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var _a = /\r/g;o.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = o.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(_a, "") : null == c ? "" : c);
      }
    } }), o.extend({ valHooks: { option: { get: function get(a) {
          return o.trim(a.value);
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !o.nodeName(c.parentNode, "optgroup"))) {
              if (b = o(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = o.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = o.inArray(o.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), o.each(["radio", "checkbox"], function () {
    o.valHooks[this] = { set: function set(a, b) {
        return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (o.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ab = /^(?:focusinfocus|focusoutblur)$/;o.extend(o.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          n,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ab.test(q + o.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !o.isWindow(e)) {
          for (j = n.delegateType || q, ab.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || q, m = (R.get(h, "events") || {})[b.type] && R.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && P(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !P(e) || l && o.isFunction(e[q]) && !o.isWindow(e) && (i = e[l], i && (e[l] = null), o.event.triggered = q, e[q](), o.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = o.extend(new o.Event(), c, { type: a, isSimulated: !0 });o.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), o.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        o.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? o.event.trigger(a, b, c, !0) : void 0;
    } }), o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    o.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), o.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || o.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      o.event.simulate(b, a.target, o.event.fix(a));
    };o.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = R.access(d, b);e || d.addEventListener(a, c, !0), R.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = R.access(d, b) - 1;e ? R.access(d, b, e) : (d.removeEventListener(a, c, !0), R.remove(d, b));
      } };
  }), o.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (o.isFunction(a) && (a = a.call(this[0])), b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return o.isFunction(a) ? this.each(function (b) {
        o(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = o(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = o.isFunction(a);return this.each(function (c) {
        o(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        o(this).replaceWith(this.childNodes);
      }), this;
    } }), o.expr.filters.hidden = function (a) {
    return !o.expr.filters.visible(a);
  }, o.expr.filters.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  };var bb = /\[\]$/,
      cb = /\r?\n/g,
      db = /^(?:submit|button|image|reset|file)$/i,
      eb = /^(?:input|select|textarea|keygen)/i;function fb(a, b, c, d) {
    var e;if (o.isArray(b)) o.each(b, function (b, e) {
      c || bb.test(a) ? d(a, e) : fb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== o.type(b)) d(a, b);else for (e in b) {
      fb(a + "[" + e + "]", b[e], c, d);
    }
  }o.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) o.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      fb(c, a[c], b, e);
    }return d.join("&");
  }, o.fn.extend({ serialize: function serialize() {
      return o.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = o.prop(this, "elements");return a ? o.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !o(this).is(":disabled") && eb.test(this.nodeName) && !db.test(a) && (this.checked || !da.test(a));
      }).map(function (a, b) {
        var c = o(this).val();return null == c ? null : o.isArray(c) ? o.map(c, function (a) {
          return { name: b.name, value: a.replace(cb, "\r\n") };
        }) : { name: b.name, value: c.replace(cb, "\r\n") };
      }).get();
    } }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), o.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);var e = y.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ka([a], b, f), f && f.length && o(f).remove(), o.merge([], e.childNodes));
  };function gb(a) {
    return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }o.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = o.css(a, "position"),
          l = o(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, o.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, o.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        o.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = gb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += o.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), { top: b.top - d.top - o.css(c, "marginTop", !0), left: b.left - d.left - o.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === o.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ha;
      });
    } }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;o.fn[a] = function (d) {
      return O(this, function (a, d, e) {
        var f = gb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), o.each(["top", "left"], function (a, b) {
    o.cssHooks[b] = Ja(l.pixelPosition, function (a, c) {
      return c ? (c = Ia(a, b), Fa.test(c) ? o(a).position()[b] + "px" : c) : void 0;
    });
  }), o.each({ Height: "height", Width: "width" }, function (a, b) {
    o.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      o.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return O(this, function (b, c, e) {
          var f;return o.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? o.css(b, c, h) : o.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), "function" == typeof define && define.amd && define("jquery", [], function () {
    return o;
  });var hb = a.jQuery,
      ib = a.$;return o.noConflict = function (b) {
    return a.$ === o && (a.$ = ib), b && a.jQuery === o && (a.jQuery = hb), o;
  }, b || (a.jQuery = a.$ = o), o;
});

//# sourceMappingURL=jquery.slim.min-compiled.js.map