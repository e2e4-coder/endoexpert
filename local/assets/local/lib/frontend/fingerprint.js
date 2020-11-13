var FingerprintJS = function (e) {
  "use strict";

  function t(e, t) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
  }

  function n(e, t) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
  }

  function r(e, t) {
    return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]);
  }

  function o(e, t) {
    return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0];
  }

  function i(e, t) {
    return [e[0] ^ t[0], e[1] ^ t[1]];
  }

  function a(e) {
    return e = i(e, [0, e[0] >>> 1]), e = i(e = n(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = i(e = n(e, [3301882366, 444984403]), [0, e[0] >>> 1]);
  }

  function c(e, c) {
    c = c || 0;
    var u,
        s = (e = e || "").length % 16,
        l = e.length - s,
        f = [0, c],
        d = [0, c],
        h = [0, 0],
        v = [0, 0],
        g = [2277735313, 289559509],
        p = [1291169091, 658871167];

    for (u = 0; u < l; u += 16) h = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24], v = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24], h = r(h = n(h, g), 31), f = t(f = r(f = i(f, h = n(h, p)), 27), d), f = t(n(f, [0, 5]), [0, 1390208809]), v = r(v = n(v, p), 33), d = t(d = r(d = i(d, v = n(v, g)), 31), f), d = t(n(d, [0, 5]), [0, 944331445]);

    switch (h = [0, 0], v = [0, 0], s) {
      case 15:
        v = i(v, o([0, e.charCodeAt(u + 14)], 48));

      case 14:
        v = i(v, o([0, e.charCodeAt(u + 13)], 40));

      case 13:
        v = i(v, o([0, e.charCodeAt(u + 12)], 32));

      case 12:
        v = i(v, o([0, e.charCodeAt(u + 11)], 24));

      case 11:
        v = i(v, o([0, e.charCodeAt(u + 10)], 16));

      case 10:
        v = i(v, o([0, e.charCodeAt(u + 9)], 8));

      case 9:
        v = n(v = i(v, [0, e.charCodeAt(u + 8)]), p), d = i(d, v = n(v = r(v, 33), g));

      case 8:
        h = i(h, o([0, e.charCodeAt(u + 7)], 56));

      case 7:
        h = i(h, o([0, e.charCodeAt(u + 6)], 48));

      case 6:
        h = i(h, o([0, e.charCodeAt(u + 5)], 40));

      case 5:
        h = i(h, o([0, e.charCodeAt(u + 4)], 32));

      case 4:
        h = i(h, o([0, e.charCodeAt(u + 3)], 24));

      case 3:
        h = i(h, o([0, e.charCodeAt(u + 2)], 16));

      case 2:
        h = i(h, o([0, e.charCodeAt(u + 1)], 8));

      case 1:
        h = n(h = i(h, [0, e.charCodeAt(u)]), g), f = i(f, h = n(h = r(h, 31), p));
    }

    return f = t(f = i(f, [0, e.length]), d = i(d, [0, e.length])), d = t(d, f), f = t(f = a(f), d = a(d)), d = t(d, f), ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8);
  }

  var _u = function u() {
    return (_u = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);

      return e;
    }).apply(this, arguments);
  };

  function s(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          u(r.next(e));
        } catch (t) {
          i(t);
        }
      }

      function c(e) {
        try {
          u(r.throw(e));
        } catch (t) {
          i(t);
        }
      }

      function u(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, c);
      }

      u((r = r.apply(e, t || [])).next());
    });
  }

  function l(e, t) {
    var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
    return i = {
      next: c(0),
      throw: c(1),
      return: c(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function c(i) {
      return function (c) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) try {
            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;

              case 4:
                return a.label++, {
                  value: i[1],
                  done: !1
                };

              case 5:
                a.label++, r = i[1], i = [0];
                continue;

              case 7:
                i = a.ops.pop(), a.trys.pop();
                continue;

              default:
                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                  a = 0;
                  continue;
                }

                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                  a.label = i[1];
                  break;
                }

                if (6 === i[0] && a.label < o[1]) {
                  a.label = o[1], o = i;
                  break;
                }

                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(i);
                  break;
                }

                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }

            i = t.call(e, a);
          } catch (c) {
            i = [6, c], r = 0;
          } finally {
            n = o = 0;
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, c]);
      };
    }
  }

  function f(e) {
    return "number" == typeof e ? 0 | e : parseInt(e);
  }

  function d(e) {
    return "number" == typeof e ? e : parseFloat(e);
  }

  function h(e) {
    return e.reduce(function (e, t) {
      return e + (t ? 1 : 0);
    }, 0);
  }

  var v = window,
      g = navigator,
      p = document;

  function m() {
    return h(["MSCSSMatrix" in v, "msSetImmediate" in v, "msIndexedDB" in v, "msMaxTouchPoints" in g, "msPointerEnabled" in g]) >= 4;
  }

  function y() {
    return h(["msWriteProfilerMark" in v, "MSStream" in v, "msLaunchUri" in g, "msSaveBlob" in g]) >= 3 && !m();
  }

  function w() {
    return h(["webkitPersistentStorage" in g, "webkitTemporaryStorage" in g, 0 === g.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in v, "BatteryManager" in v, "webkitMediaStream" in v, "webkitSpeechGrammar" in v]) >= 5;
  }

  function b() {
    return h(["ApplePayError" in v, "CSSPrimitiveValue" in v, "Counter" in v, 0 === g.vendor.indexOf("Apple"), "getStorageUpdates" in g, "WebKitMediaKeys" in v]) >= 4;
  }

  function S() {
    return h(["safari" in v, !("DeviceMotionEvent" in v), !("ongestureend" in v), !("standalone" in g)]) >= 3;
  }

  var C = window,
      A = document;

  function M(e, t, n) {
    (function (e) {
      return e && "function" == typeof e.setValueAtTime;
    })(t) && t.setValueAtTime(n, e.currentTime);
  }

  function T(e) {
    return new Promise(function (t, n) {
      e.oncomplete = function (e) {
        return t(e.renderedBuffer);
      };

      var r = 3,
          o = function o() {
            switch (e.startRendering(), e.state) {
              case "running":
                setTimeout(function () {
                  return n(x("timeout"));
                }, 1e3);
                break;

              case "suspended":
                A.hidden || r--, r > 0 ? setTimeout(o, 500) : n(x("suspended"));
            }
          };

      o();
    });
  }

  function k(e) {
    for (var t = 0, n = 4500; n < 5e3; ++n) t += Math.abs(e[n]);

    return t;
  }

  function x(e) {
    var t = new Error(e);
    return t.name = e, t;
  }

  var P = document,
      I = ["monospace", "sans-serif", "serif"],
      O = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"],
      E = {
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: "normal",
        lineBreak: "auto",
        lineHeight: "normal",
        textTransform: "none",
        textAlign: "left",
        textDecoration: "none",
        textShadow: "none",
        whiteSpace: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        position: "absolute",
        left: "-9999px",
        fontSize: "48px"
      };

  function D(e) {
    return e.toDataURL();
  }

  var R = navigator,
      B = window;
  var L = navigator;
  var F = window;
  var G = window;
  var H = window;
  var U = document;
  var W = {
    osCpu: function () {
      return navigator.oscpu;
    },
    languages: function () {
      var e = [],
          t = L.language || L.userLanguage || L.browserLanguage || L.systemLanguage;
      if (void 0 !== t && e.push([t]), Array.isArray(L.languages)) w() && h([!("MediaSettingsRange" in v), "RTCEncodedAudioFrame" in v, "" + v.Intl == "[object Intl]", "" + v.Reflect == "[object Reflect]"]) >= 3 || e.push(L.languages);else if ("string" == typeof L.languages) {
        var n = L.languages;
        n && e.push(n.split(","));
      }
      return e;
    },
    colorDepth: function () {
      return window.screen.colorDepth;
    },
    deviceMemory: function () {
      return navigator.deviceMemory;
    },
    screenResolution: function () {
      var e = [f(F.screen.width), f(F.screen.height)];
      return e.sort().reverse(), e;
    },
    availableScreenResolution: function () {
      if (G.screen.availWidth && G.screen.availHeight) {
        var e = [f(G.screen.availWidth), f(G.screen.availHeight)];
        return e.sort().reverse(), e;
      }
    },
    hardwareConcurrency: function () {
      try {
        var e = f(navigator.hardwareConcurrency);
        return isNaN(e) ? 1 : e;
      } catch (t) {
        return 1;
      }
    },
    timezoneOffset: function () {
      var e = new Date().getFullYear();
      return Math.max(d(new Date(e, 0, 1).getTimezoneOffset()), d(new Date(e, 6, 1).getTimezoneOffset()));
    },
    timezone: function () {
      var e;
      if (null === (e = H.Intl) || void 0 === e ? void 0 : e.DateTimeFormat) return new H.Intl.DateTimeFormat().resolvedOptions().timeZone;
    },
    sessionStorage: function () {
      try {
        return !!window.sessionStorage;
      } catch (e) {
        return !0;
      }
    },
    localStorage: function () {
      try {
        return !!window.localStorage;
      } catch (e) {
        return !0;
      }
    },
    indexedDB: function () {
      if (!m() && !y()) try {
        return !!window.indexedDB;
      } catch (e) {
        return !0;
      }
    },
    openDatabase: function () {
      return !!window.openDatabase;
    },
    cpuClass: function () {
      return navigator.cpuClass;
    },
    platform: function () {
      return navigator.platform;
    },
    plugins: function () {
      if (m()) return [];

      if (navigator.plugins) {
        for (var e = [], t = 0; t < navigator.plugins.length; ++t) {
          var n = navigator.plugins[t];

          if (n) {
            for (var r = [], o = 0; o < n.length; ++o) {
              var i = n[o];
              r.push({
                type: i.type,
                suffixes: i.suffixes
              });
            }

            e.push({
              name: n.name,
              description: n.description,
              mimeTypes: r
            });
          }
        }

        return e;
      }
    },
    canvas: function () {
      var e = function () {
            var e = document.createElement("canvas");
            return e.width = 240, e.height = 140, e.style.display = "inline", [e, e.getContext("2d")];
          }(),
          t = e[0],
          n = e[1];

      if (!function (e, t) {
        return !(!t || !e.toDataURL);
      }(t, n)) return {
        winding: !1,
        data: ""
      };
      n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6);
      var r = !n.isPointInPath(5, 5, "evenodd");
      n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123";
      var o = "Cwm fjordbank 😃 gly";
      return n.fillText(o, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(o, 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), {
        winding: r,
        data: D(t)
      };
    },
    touchSupport: function () {
      var e,
          t = 0;
      void 0 !== R.maxTouchPoints ? t = f(R.maxTouchPoints) : void 0 !== R.msMaxTouchPoints && (t = R.msMaxTouchPoints);

      try {
        document.createEvent("TouchEvent"), e = !0;
      } catch (n) {
        e = !1;
      }

      return {
        maxTouchPoints: t,
        touchEvent: e,
        touchStart: "ontouchstart" in B
      };
    },
    fonts: function () {
      var e = P.body,
          t = P.createElement("div"),
          n = P.createElement("div"),
          r = {},
          o = {},
          i = function i() {
            var e = P.createElement("span");
            e.textContent = "mmMwWLliI0O&1";

            for (var t = 0, n = Object.keys(E); t < n.length; t++) {
              var r = n[t];
              e.style[r] = E[r];
            }

            return e;
          },
          a = function a(e) {
            return I.some(function (t, n) {
              return e[n].offsetWidth !== r[t] || e[n].offsetHeight !== o[t];
            });
          },
          c = I.map(function (e) {
            var n = i();
            return n.style.fontFamily = e, t.appendChild(n), n;
          });

      e.appendChild(t);

      for (var u = 0, s = I.length; u < s; u++) r[I[u]] = c[u].offsetWidth, o[I[u]] = c[u].offsetHeight;

      var l = function () {
        for (var e = {}, t = function t(t) {
          e[t] = I.map(function (e) {
            var r = function (e, t) {
              var n = i();
              return n.style.fontFamily = "'" + e + "'," + t, n;
            }(t, e);

            return n.appendChild(r), r;
          });
        }, r = 0, o = O; r < o.length; r++) {
          t(o[r]);
        }

        return e;
      }();

      e.appendChild(n);

      for (var f = [], d = 0, h = O.length; d < h; d++) a(l[O[d]]) && f.push(O[d]);

      return e.removeChild(n), e.removeChild(t), f;
    },
    audio: function () {
      return s(this, void 0, void 0, function () {
        var e, t, n, r, o, i;
        return l(this, function (a) {
          switch (a.label) {
            case 0:
              if (b() && !S() && !(h(["DOMRectList" in v, "RTCPeerConnectionIceEvent" in v, "SVGGeometryElement" in v, "ontransitioncancel" in v]) >= 3)) return [2, -1];
              if (!(e = C.OfflineAudioContext || C.webkitOfflineAudioContext)) return [2, -2];
              t = new e(1, 44100, 44100), (n = t.createOscillator()).type = "triangle", M(t, n.frequency, 1e4), r = t.createDynamicsCompressor(), M(t, r.threshold, -50), M(t, r.knee, 40), M(t, r.ratio, 12), M(t, r.reduction, -20), M(t, r.attack, 0), M(t, r.release, .25), n.connect(r), r.connect(t.destination), n.start(0), a.label = 1;

            case 1:
              return a.trys.push([1, 3, 4, 5]), [4, T(t)];

            case 2:
              return o = a.sent(), [3, 5];

            case 3:
              if ("timeout" === (i = a.sent()).name || "suspended" === i.name) return [2, -3];
              throw i;

            case 4:
              return n.disconnect(), r.disconnect(), [7];

            case 5:
              return [2, k(o.getChannelData(0))];
          }
        });
      });
    },
    pluginsSupport: function () {
      return void 0 !== navigator.plugins;
    },
    productSub: function () {
      return navigator.productSub;
    },
    emptyEvalLength: function () {
      return eval.toString().length;
    },
    errorFF: function () {
      try {
        throw "a";
      } catch (e) {
        try {
          return e.toSource(), !0;
        } catch (t) {
          return !1;
        }
      }
    },
    vendor: function () {
      return navigator.vendor;
    },
    chrome: function () {
      return void 0 !== window.chrome;
    },
    cookiesEnabled: function () {
      try {
        U.cookie = "cookietest=1";
        var e = -1 !== U.cookie.indexOf("cookietest=");
        return U.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e;
      } catch (t) {
        return !1;
      }
    }
  };

  function j(e, t, n) {
    return s(this, void 0, void 0, function () {
      var r, o, i, a, c, s, f, d, h;
      return l(this, function (l) {
        switch (l.label) {
          case 0:
            r = Date.now(), o = {}, i = 0, a = Object.keys(e), l.label = 1;

          case 1:
            if (!(i < a.length)) return [3, 7];
            if (c = a[i], function (e, t) {
              for (var n = 0, r = e.length; n < r; ++n) if (e[n] === t) return !0;

              return !1;
            }(n, c)) return [3, 6];
            s = void 0, l.label = 2;

          case 2:
            return l.trys.push([2, 4,, 5]), h = {}, [4, e[c](t)];

          case 3:
            return h.value = l.sent(), s = h, [3, 5];

          case 4:
            return f = l.sent(), s = f && "object" == typeof f && "message" in f ? {
              error: f
            } : {
              error: {
                message: f
              }
            }, [3, 5];

          case 5:
            d = Date.now(), o[c] = _u(_u({}, s), {
              duration: d - r
            }), r = d, l.label = 6;

          case 6:
            return i++, [3, 1];

          case 7:
            return [2, o];
        }
      });
    });
  }

  function N(e) {
    return JSON.stringify(e, function (e, t) {
      var n;
      return t instanceof Error ? _u(_u({}, t), {
        message: t.message,
        stack: null === (n = t.stack) || void 0 === n ? void 0 : n.split("\n")
      }) : t;
    }, 2);
  }

  function z(e) {
    return c(function (e) {
      for (var t = "", n = 0, r = Object.keys(e); n < r.length; n++) {
        var o = r[n],
            i = e[o],
            a = i.error ? "error" : JSON.stringify(i.value);
        t += (t ? "|" : "") + o.replace(/([:|\\])/g, "\\$1") + ":" + a;
      }

      return t;
    }(e));
  }

  var V = function () {
    function e() {}

    return e.prototype.get = function (e) {
      return void 0 === e && (e = {}), s(this, void 0, void 0, function () {
        var t, n;
        return l(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, j(W, void 0, [])];

            case 1:
              return t = r.sent(), n = function (e) {
                var t;
                return {
                  components: e,

                  get visitorId() {
                    return void 0 === t && (t = z(this.components)), t;
                  },

                  set visitorId(e) {
                    t = e;
                  }

                };
              }(t), e.debug && console.log("Copy the text below to get the debug data:\n\n```\nversion: 3.0.3\nuserAgent: " + navigator.userAgent + "\ngetOptions: " + JSON.stringify(e, void 0, 2) + "\nvisitorId: " + n.visitorId + "\ncomponents: " + N(t) + "\n```"), [2, n];
          }
        });
      });
    }, e;
  }();

  function J(e) {
    var t = (void 0 === e ? {} : e).delayFallback,
        n = void 0 === t ? 50 : t;
    return s(this, void 0, void 0, function () {
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, (t = n, new Promise(function (e) {
              window.requestIdleCallback ? window.requestIdleCallback(function () {
                return e();
              }) : setTimeout(e, t);
            }))];

          case 1:
            return e.sent(), [2, new V()];
        }

        var t;
      });
    });
  }

  var q = {
        load: J,
        hashComponents: z,
        componentsToDebugString: N
      },
      K = c;
  return e.componentsToDebugString = N, e.default = q, e.getComponents = j, e.hashComponents = z, e.isChromium = w, e.isDesktopSafari = S, e.isEdgeHTML = y, e.isGecko = function () {
    var e;
    return h(["buildID" in g, (null === (e = p.documentElement) || void 0 === e ? void 0 : e.style) && "MozAppearance" in p.documentElement.style, "MediaRecorderErrorEvent" in v, "mozInnerScreenX" in v, "CSSMozDocumentRule" in v, "CanvasCaptureMediaStream" in v]) >= 4;
  }, e.isTrident = m, e.isWebKit = b, e.load = J, e.murmurX64Hash128 = K, e;
}({});