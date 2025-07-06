const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-C6QzGNBM.js",
      "assets/Button-Btgts8C2.js",
      "assets/OpenNestInAction-CbOwzNWf.js",
      "assets/Layout-DGHEHGcU.js",
      "assets/Login-0iYdjq_T.js",
      "assets/AuthLayout-1vYGDJFr.js",
      "assets/Signup-BjSJXRT0.js",
      "assets/Resources-CuQhcDta.js",
      "assets/AboutUs-BksEgD0b.js",
      "assets/GithubAuth-B6X9MgAa.js",
      "assets/index-Br0q4W-C.js",
      "assets/index-sin99dlu.js",
      "assets/MostProjects-z4moyY_Z.js",
      "assets/DashboardContentLayout-vDPM0KnT.js",
      "assets/OpenAI-DNMo7Bey.js",
    ]),
) => i.map((i) => d[i]);
function Cd(u, c) {
  for (var s = 0; s < c.length; s++) {
    const p = c[s];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const v in p)
        if (v !== "default" && !(v in u)) {
          const w = Object.getOwnPropertyDescriptor(p, v);
          w &&
            Object.defineProperty(
              u,
              v,
              w.get ? w : { enumerable: !0, get: () => p[v] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) p(v);
  new MutationObserver((v) => {
    for (const w of v)
      if (w.type === "childList")
        for (const S of w.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && p(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(v) {
    const w = {};
    return (
      v.integrity && (w.integrity = v.integrity),
      v.referrerPolicy && (w.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : v.crossOrigin === "anonymous"
          ? (w.credentials = "omit")
          : (w.credentials = "same-origin"),
      w
    );
  }
  function p(v) {
    if (v.ep) return;
    v.ep = !0;
    const w = s(v);
    fetch(v.href, w);
  }
})();
function cc(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var $i = { exports: {} },
  Nr = {},
  Wi = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ya;
function _d() {
  if (Ya) return J;
  Ya = 1;
  var u = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    L = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function D(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (N && h[N]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    K = Object.assign,
    V = {};
  function O(h, x, Y) {
    (this.props = h),
      (this.context = x),
      (this.refs = V),
      (this.updater = Y || b);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (h, x) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, h, x, "setState");
    }),
    (O.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    });
  function oe() {}
  oe.prototype = O.prototype;
  function X(h, x, Y) {
    (this.props = h),
      (this.context = x),
      (this.refs = V),
      (this.updater = Y || b);
  }
  var q = (X.prototype = new oe());
  (q.constructor = X), K(q, O.prototype), (q.isPureReactComponent = !0);
  var G = Array.isArray,
    ke = Object.prototype.hasOwnProperty,
    xe = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Oe(h, x, Y) {
    var Z,
      ne = {},
      re = null,
      se = null;
    if (x != null)
      for (Z in (x.ref !== void 0 && (se = x.ref),
      x.key !== void 0 && (re = "" + x.key),
      x))
        ke.call(x, Z) && !Le.hasOwnProperty(Z) && (ne[Z] = x[Z]);
    var ie = arguments.length - 2;
    if (ie === 1) ne.children = Y;
    else if (1 < ie) {
      for (var de = Array(ie), Xe = 0; Xe < ie; Xe++)
        de[Xe] = arguments[Xe + 2];
      ne.children = de;
    }
    if (h && h.defaultProps)
      for (Z in ((ie = h.defaultProps), ie))
        ne[Z] === void 0 && (ne[Z] = ie[Z]);
    return {
      $$typeof: u,
      type: h,
      key: re,
      ref: se,
      props: ne,
      _owner: xe.current,
    };
  }
  function mt(h, x) {
    return {
      $$typeof: u,
      type: h.type,
      key: x,
      ref: h.ref,
      props: h.props,
      _owner: h._owner,
    };
  }
  function Ke(h) {
    return typeof h == "object" && h !== null && h.$$typeof === u;
  }
  function xt(h) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (Y) {
        return x[Y];
      })
    );
  }
  var vt = /\/+/g;
  function Ye(h, x) {
    return typeof h == "object" && h !== null && h.key != null
      ? xt("" + h.key)
      : x.toString(36);
  }
  function ut(h, x, Y, Z, ne) {
    var re = typeof h;
    (re === "undefined" || re === "boolean") && (h = null);
    var se = !1;
    if (h === null) se = !0;
    else
      switch (re) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case u:
            case c:
              se = !0;
          }
      }
    if (se)
      return (
        (se = h),
        (ne = ne(se)),
        (h = Z === "" ? "." + Ye(se, 0) : Z),
        G(ne)
          ? ((Y = ""),
            h != null && (Y = h.replace(vt, "$&/") + "/"),
            ut(ne, x, Y, "", function (Xe) {
              return Xe;
            }))
          : ne != null &&
            (Ke(ne) &&
              (ne = mt(
                ne,
                Y +
                  (!ne.key || (se && se.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(vt, "$&/") + "/") +
                  h,
              )),
            x.push(ne)),
        1
      );
    if (((se = 0), (Z = Z === "" ? "." : Z + ":"), G(h)))
      for (var ie = 0; ie < h.length; ie++) {
        re = h[ie];
        var de = Z + Ye(re, ie);
        se += ut(re, x, Y, de, ne);
      }
    else if (((de = D(h)), typeof de == "function"))
      for (h = de.call(h), ie = 0; !(re = h.next()).done; )
        (re = re.value), (de = Z + Ye(re, ie++)), (se += ut(re, x, Y, de, ne));
    else if (re === "object")
      throw (
        ((x = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return se;
  }
  function yt(h, x, Y) {
    if (h == null) return h;
    var Z = [],
      ne = 0;
    return (
      ut(h, Z, "", "", function (re) {
        return x.call(Y, re, ne++);
      }),
      Z
    );
  }
  function Ae(h) {
    if (h._status === -1) {
      var x = h._result;
      (x = x()),
        x.then(
          function (Y) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = Y));
          },
          function (Y) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = Y));
          },
        ),
        h._status === -1 && ((h._status = 0), (h._result = x));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ve = { current: null },
    j = { transition: null },
    H = {
      ReactCurrentDispatcher: ve,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: xe,
    };
  function F() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (J.Children = {
      map: yt,
      forEach: function (h, x, Y) {
        yt(
          h,
          function () {
            x.apply(this, arguments);
          },
          Y,
        );
      },
      count: function (h) {
        var x = 0;
        return (
          yt(h, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (h) {
        return (
          yt(h, function (x) {
            return x;
          }) || []
        );
      },
      only: function (h) {
        if (!Ke(h))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return h;
      },
    }),
    (J.Component = O),
    (J.Fragment = s),
    (J.Profiler = v),
    (J.PureComponent = X),
    (J.StrictMode = p),
    (J.Suspense = k),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (J.act = F),
    (J.cloneElement = function (h, x, Y) {
      if (h == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            h +
            ".",
        );
      var Z = K({}, h.props),
        ne = h.key,
        re = h.ref,
        se = h._owner;
      if (x != null) {
        if (
          (x.ref !== void 0 && ((re = x.ref), (se = xe.current)),
          x.key !== void 0 && (ne = "" + x.key),
          h.type && h.type.defaultProps)
        )
          var ie = h.type.defaultProps;
        for (de in x)
          ke.call(x, de) &&
            !Le.hasOwnProperty(de) &&
            (Z[de] = x[de] === void 0 && ie !== void 0 ? ie[de] : x[de]);
      }
      var de = arguments.length - 2;
      if (de === 1) Z.children = Y;
      else if (1 < de) {
        ie = Array(de);
        for (var Xe = 0; Xe < de; Xe++) ie[Xe] = arguments[Xe + 2];
        Z.children = ie;
      }
      return {
        $$typeof: u,
        type: h.type,
        key: ne,
        ref: re,
        props: Z,
        _owner: se,
      };
    }),
    (J.createContext = function (h) {
      return (
        (h = {
          $$typeof: S,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: w, _context: h }),
        (h.Consumer = h)
      );
    }),
    (J.createElement = Oe),
    (J.createFactory = function (h) {
      var x = Oe.bind(null, h);
      return (x.type = h), x;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (h) {
      return { $$typeof: _, render: h };
    }),
    (J.isValidElement = Ke),
    (J.lazy = function (h) {
      return { $$typeof: T, _payload: { _status: -1, _result: h }, _init: Ae };
    }),
    (J.memo = function (h, x) {
      return { $$typeof: L, type: h, compare: x === void 0 ? null : x };
    }),
    (J.startTransition = function (h) {
      var x = j.transition;
      j.transition = {};
      try {
        h();
      } finally {
        j.transition = x;
      }
    }),
    (J.unstable_act = F),
    (J.useCallback = function (h, x) {
      return ve.current.useCallback(h, x);
    }),
    (J.useContext = function (h) {
      return ve.current.useContext(h);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (h) {
      return ve.current.useDeferredValue(h);
    }),
    (J.useEffect = function (h, x) {
      return ve.current.useEffect(h, x);
    }),
    (J.useId = function () {
      return ve.current.useId();
    }),
    (J.useImperativeHandle = function (h, x, Y) {
      return ve.current.useImperativeHandle(h, x, Y);
    }),
    (J.useInsertionEffect = function (h, x) {
      return ve.current.useInsertionEffect(h, x);
    }),
    (J.useLayoutEffect = function (h, x) {
      return ve.current.useLayoutEffect(h, x);
    }),
    (J.useMemo = function (h, x) {
      return ve.current.useMemo(h, x);
    }),
    (J.useReducer = function (h, x, Y) {
      return ve.current.useReducer(h, x, Y);
    }),
    (J.useRef = function (h) {
      return ve.current.useRef(h);
    }),
    (J.useState = function (h) {
      return ve.current.useState(h);
    }),
    (J.useSyncExternalStore = function (h, x, Y) {
      return ve.current.useSyncExternalStore(h, x, Y);
    }),
    (J.useTransition = function () {
      return ve.current.useTransition();
    }),
    (J.version = "18.3.1"),
    J
  );
}
var Xa;
function qi() {
  return Xa || ((Xa = 1), (Wi.exports = _d())), Wi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga;
function Pd() {
  if (Ga) return Nr;
  Ga = 1;
  var u = qi(),
    c = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    p = Object.prototype.hasOwnProperty,
    v = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, k, L) {
    var T,
      N = {},
      D = null,
      b = null;
    L !== void 0 && (D = "" + L),
      k.key !== void 0 && (D = "" + k.key),
      k.ref !== void 0 && (b = k.ref);
    for (T in k) p.call(k, T) && !w.hasOwnProperty(T) && (N[T] = k[T]);
    if (_ && _.defaultProps)
      for (T in ((k = _.defaultProps), k)) N[T] === void 0 && (N[T] = k[T]);
    return {
      $$typeof: c,
      type: _,
      key: D,
      ref: b,
      props: N,
      _owner: v.current,
    };
  }
  return (Nr.Fragment = s), (Nr.jsx = S), (Nr.jsxs = S), Nr;
}
var Ja;
function Nd() {
  return Ja || ((Ja = 1), ($i.exports = Pd())), $i.exports;
}
var ee = Nd(),
  z = qi();
const fc = cc(z),
  Rd = Cd({ __proto__: null, default: fc }, [z]);
var $l = {},
  Hi = { exports: {} },
  Qe = {},
  Qi = { exports: {} },
  Ki = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za;
function Ld() {
  return (
    Za ||
      ((Za = 1),
      (function (u) {
        function c(j, H) {
          var F = j.length;
          j.push(H);
          e: for (; 0 < F; ) {
            var h = (F - 1) >>> 1,
              x = j[h];
            if (0 < v(x, H)) (j[h] = H), (j[F] = x), (F = h);
            else break e;
          }
        }
        function s(j) {
          return j.length === 0 ? null : j[0];
        }
        function p(j) {
          if (j.length === 0) return null;
          var H = j[0],
            F = j.pop();
          if (F !== H) {
            j[0] = F;
            e: for (var h = 0, x = j.length, Y = x >>> 1; h < Y; ) {
              var Z = 2 * (h + 1) - 1,
                ne = j[Z],
                re = Z + 1,
                se = j[re];
              if (0 > v(ne, F))
                re < x && 0 > v(se, ne)
                  ? ((j[h] = se), (j[re] = F), (h = re))
                  : ((j[h] = ne), (j[Z] = F), (h = Z));
              else if (re < x && 0 > v(se, F))
                (j[h] = se), (j[re] = F), (h = re);
              else break e;
            }
          }
          return H;
        }
        function v(j, H) {
          var F = j.sortIndex - H.sortIndex;
          return F !== 0 ? F : j.id - H.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var w = performance;
          u.unstable_now = function () {
            return w.now();
          };
        } else {
          var S = Date,
            _ = S.now();
          u.unstable_now = function () {
            return S.now() - _;
          };
        }
        var k = [],
          L = [],
          T = 1,
          N = null,
          D = 3,
          b = !1,
          K = !1,
          V = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          oe = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function q(j) {
          for (var H = s(L); H !== null; ) {
            if (H.callback === null) p(L);
            else if (H.startTime <= j)
              p(L), (H.sortIndex = H.expirationTime), c(k, H);
            else break;
            H = s(L);
          }
        }
        function G(j) {
          if (((V = !1), q(j), !K))
            if (s(k) !== null) (K = !0), Ae(ke);
            else {
              var H = s(L);
              H !== null && ve(G, H.startTime - j);
            }
        }
        function ke(j, H) {
          (K = !1), V && ((V = !1), oe(Oe), (Oe = -1)), (b = !0);
          var F = D;
          try {
            for (
              q(H), N = s(k);
              N !== null && (!(N.expirationTime > H) || (j && !xt()));

            ) {
              var h = N.callback;
              if (typeof h == "function") {
                (N.callback = null), (D = N.priorityLevel);
                var x = h(N.expirationTime <= H);
                (H = u.unstable_now()),
                  typeof x == "function"
                    ? (N.callback = x)
                    : N === s(k) && p(k),
                  q(H);
              } else p(k);
              N = s(k);
            }
            if (N !== null) var Y = !0;
            else {
              var Z = s(L);
              Z !== null && ve(G, Z.startTime - H), (Y = !1);
            }
            return Y;
          } finally {
            (N = null), (D = F), (b = !1);
          }
        }
        var xe = !1,
          Le = null,
          Oe = -1,
          mt = 5,
          Ke = -1;
        function xt() {
          return !(u.unstable_now() - Ke < mt);
        }
        function vt() {
          if (Le !== null) {
            var j = u.unstable_now();
            Ke = j;
            var H = !0;
            try {
              H = Le(!0, j);
            } finally {
              H ? Ye() : ((xe = !1), (Le = null));
            }
          } else xe = !1;
        }
        var Ye;
        if (typeof X == "function")
          Ye = function () {
            X(vt);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            yt = ut.port2;
          (ut.port1.onmessage = vt),
            (Ye = function () {
              yt.postMessage(null);
            });
        } else
          Ye = function () {
            O(vt, 0);
          };
        function Ae(j) {
          (Le = j), xe || ((xe = !0), Ye());
        }
        function ve(j, H) {
          Oe = O(function () {
            j(u.unstable_now());
          }, H);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (u.unstable_continueExecution = function () {
            K || b || ((K = !0), Ae(ke));
          }),
          (u.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (mt = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (u.unstable_getFirstCallbackNode = function () {
            return s(k);
          }),
          (u.unstable_next = function (j) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = D;
            }
            var F = D;
            D = H;
            try {
              return j();
            } finally {
              D = F;
            }
          }),
          (u.unstable_pauseExecution = function () {}),
          (u.unstable_requestPaint = function () {}),
          (u.unstable_runWithPriority = function (j, H) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var F = D;
            D = j;
            try {
              return H();
            } finally {
              D = F;
            }
          }),
          (u.unstable_scheduleCallback = function (j, H, F) {
            var h = u.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? h + F : h))
                : (F = h),
              j)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = F + x),
              (j = {
                id: T++,
                callback: H,
                priorityLevel: j,
                startTime: F,
                expirationTime: x,
                sortIndex: -1,
              }),
              F > h
                ? ((j.sortIndex = F),
                  c(L, j),
                  s(k) === null &&
                    j === s(L) &&
                    (V ? (oe(Oe), (Oe = -1)) : (V = !0), ve(G, F - h)))
                : ((j.sortIndex = x), c(k, j), K || b || ((K = !0), Ae(ke))),
              j
            );
          }),
          (u.unstable_shouldYield = xt),
          (u.unstable_wrapCallback = function (j) {
            var H = D;
            return function () {
              var F = D;
              D = H;
              try {
                return j.apply(this, arguments);
              } finally {
                D = F;
              }
            };
          });
      })(Ki)),
    Ki
  );
}
var qa;
function zd() {
  return qa || ((qa = 1), (Qi.exports = Ld())), Qi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ba;
function Td() {
  if (ba) return Qe;
  ba = 1;
  var u = qi(),
    c = zd();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var p = new Set(),
    v = {};
  function w(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (v[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var _ = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    k = Object.prototype.hasOwnProperty,
    L =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    T = {},
    N = {};
  function D(e) {
    return k.call(N, e)
      ? !0
      : k.call(T, e)
        ? !1
        : L.test(e)
          ? (N[e] = !0)
          : ((T[e] = !0), !1);
  }
  function b(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function K(e, t, n, r) {
    if (t === null || typeof t > "u" || b(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function V(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        O[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new V(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var oe = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(oe, X);
      O[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(oe, X);
        O[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(oe, X);
      O[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new V(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function q(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (K(t, n, l, r) && (n = null),
      r || l === null
        ? D(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ke = Symbol.for("react.element"),
    xe = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Oe = Symbol.for("react.strict_mode"),
    mt = Symbol.for("react.profiler"),
    Ke = Symbol.for("react.provider"),
    xt = Symbol.for("react.context"),
    vt = Symbol.for("react.forward_ref"),
    Ye = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    yt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    ve = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var F = Object.assign,
    h;
  function x(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || "";
      }
    return (
      `
` +
      h +
      e
    );
  }
  var Y = !1;
  function Z(e, t) {
    if (!e || Y) return "";
    Y = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (
          var l = g.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            a = o.length - 1;
          1 <= i && 0 <= a && l[i] !== o[a];

        )
          a--;
        for (; 1 <= i && 0 <= a; i--, a--)
          if (l[i] !== o[a]) {
            if (i !== 1 || a !== 1)
              do
                if ((i--, a--, 0 > a || l[i] !== o[a])) {
                  var f =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      f.includes("<anonymous>") &&
                      (f = f.replace("<anonymous>", e.displayName)),
                    f
                  );
                }
              while (1 <= i && 0 <= a);
            break;
          }
      }
    } finally {
      (Y = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? x(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return x(e.type);
      case 16:
        return x("Lazy");
      case 13:
        return x("Suspense");
      case 19:
        return x("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case xe:
        return "Portal";
      case mt:
        return "Profiler";
      case Oe:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xt:
          return (e.displayName || "Context") + ".Consumer";
        case Ke:
          return (e._context.displayName || "Context") + ".Provider";
        case vt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case yt:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === Oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ie(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function de(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = de(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Or(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function bi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = de(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function jr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Xl(e, t) {
    var n = t.checked;
    return F({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function eu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ie(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function tu(e, t) {
    (t = t.checked), t != null && q(e, "checked", t, !1);
  }
  function Gl(e, t) {
    tu(e, t);
    var n = ie(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Jl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Jl(e, t.type, ie(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function nu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Jl(e, t, n) {
    (t !== "number" || jr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $n = Array.isArray;
  function mn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ie(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return F({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ru(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if ($n(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ie(n) };
  }
  function lu(e, t) {
    var n = ie(t.value),
      r = ie(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function iu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? iu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ir,
    uu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ir = Ir || document.createElement("div"),
            Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ir.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Nc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hn).forEach(function (e) {
    Nc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
    });
  });
  function su(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function au(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = su(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Rc = F(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function bl(e, t) {
    if (t) {
      if (Rc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function eo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var to = null;
  function no(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ro = null,
    vn = null,
    yn = null;
  function cu(e) {
    if ((e = dr(e))) {
      if (typeof ro != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = rl(t)), ro(e.stateNode, e.type, t));
    }
  }
  function fu(e) {
    vn ? (yn ? yn.push(e) : (yn = [e])) : (vn = e);
  }
  function du() {
    if (vn) {
      var e = vn,
        t = yn;
      if (((yn = vn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
    }
  }
  function pu(e, t) {
    return e(t);
  }
  function hu() {}
  var lo = !1;
  function mu(e, t, n) {
    if (lo) return e(t, n);
    lo = !0;
    try {
      return pu(e, t, n);
    } finally {
      (lo = !1), (vn !== null || yn !== null) && (hu(), du());
    }
  }
  function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = rl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var oo = !1;
  if (_)
    try {
      var Kn = {};
      Object.defineProperty(Kn, "passive", {
        get: function () {
          oo = !0;
        },
      }),
        window.addEventListener("test", Kn, Kn),
        window.removeEventListener("test", Kn, Kn);
    } catch {
      oo = !1;
    }
  function Lc(e, t, n, r, l, o, i, a, f) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (C) {
      this.onError(C);
    }
  }
  var Yn = !1,
    Dr = null,
    Mr = !1,
    io = null,
    zc = {
      onError: function (e) {
        (Yn = !0), (Dr = e);
      },
    };
  function Tc(e, t, n, r, l, o, i, a, f) {
    (Yn = !1), (Dr = null), Lc.apply(zc, arguments);
  }
  function Oc(e, t, n, r, l, o, i, a, f) {
    if ((Tc.apply(this, arguments), Yn)) {
      if (Yn) {
        var g = Dr;
        (Yn = !1), (Dr = null);
      } else throw Error(s(198));
      Mr || ((Mr = !0), (io = g));
    }
  }
  function tn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function vu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function yu(e) {
    if (tn(e) !== e) throw Error(s(188));
  }
  function jc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = tn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return yu(l), e;
          if (o === r) return yu(l), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var i = !1, a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = o.child; a; ) {
            if (a === n) {
              (i = !0), (n = o), (r = l);
              break;
            }
            if (a === r) {
              (i = !0), (r = o), (n = l);
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function gu(e) {
    return (e = jc(e)), e !== null ? wu(e) : null;
  }
  function wu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = wu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Su = c.unstable_scheduleCallback,
    ku = c.unstable_cancelCallback,
    Ic = c.unstable_shouldYield,
    Dc = c.unstable_requestPaint,
    we = c.unstable_now,
    Mc = c.unstable_getCurrentPriorityLevel,
    uo = c.unstable_ImmediatePriority,
    Eu = c.unstable_UserBlockingPriority,
    Fr = c.unstable_NormalPriority,
    Fc = c.unstable_LowPriority,
    xu = c.unstable_IdlePriority,
    Ur = null,
    gt = null;
  function Uc(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(Ur, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : Vc,
    Ac = Math.log,
    Bc = Math.LN2;
  function Vc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ac(e) / Bc) | 0)) | 0;
  }
  var Ar = 64,
    Br = 4194304;
  function Xn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Vr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var a = i & ~l;
      a !== 0 ? (r = Xn(a)) : ((o &= i), o !== 0 && (r = Xn(o)));
    } else (i = n & ~l), i !== 0 ? (r = Xn(i)) : o !== 0 && (r = Xn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function $c(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - st(o),
        a = 1 << i,
        f = l[i];
      f === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (l[i] = $c(a, t))
        : f <= t && (e.expiredLanes |= a),
        (o &= ~a);
    }
  }
  function so(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Cu() {
    var e = Ar;
    return (Ar <<= 1), (Ar & 4194240) === 0 && (Ar = 64), e;
  }
  function ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - st(t)),
      (e[t] = n);
  }
  function Hc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function co(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ue = 0;
  function _u(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Pu,
    fo,
    Nu,
    Ru,
    Lu,
    po = !1,
    $r = [],
    Ot = null,
    jt = null,
    It = null,
    Jn = new Map(),
    Zn = new Map(),
    Dt = [],
    Qc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function zu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ot = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function qn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = dr(t)), t !== null && fo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Kc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Ot = qn(Ot, e, t, n, r, l)), !0;
      case "dragenter":
        return (jt = qn(jt, e, t, n, r, l)), !0;
      case "mouseover":
        return (It = qn(It, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return Jn.set(o, qn(Jn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Zn.set(o, qn(Zn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Tu(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = vu(n)), t !== null)) {
            (e.blockedOn = t),
              Lu(e.priority, function () {
                Nu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (to = r), n.target.dispatchEvent(r), (to = null);
      } else return (t = dr(n)), t !== null && fo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Ou(e, t, n) {
    Wr(e) && n.delete(t);
  }
  function Yc() {
    (po = !1),
      Ot !== null && Wr(Ot) && (Ot = null),
      jt !== null && Wr(jt) && (jt = null),
      It !== null && Wr(It) && (It = null),
      Jn.forEach(Ou),
      Zn.forEach(Ou);
  }
  function bn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      po ||
        ((po = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Yc)));
  }
  function er(e) {
    function t(l) {
      return bn(l, e);
    }
    if (0 < $r.length) {
      bn($r[0], e);
      for (var n = 1; n < $r.length; n++) {
        var r = $r[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ot !== null && bn(Ot, e),
        jt !== null && bn(jt, e),
        It !== null && bn(It, e),
        Jn.forEach(t),
        Zn.forEach(t),
        n = 0;
      n < Dt.length;
      n++
    )
      (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
      Tu(n), n.blockedOn === null && Dt.shift();
  }
  var gn = G.ReactCurrentBatchConfig,
    Hr = !0;
  function Xc(e, t, n, r) {
    var l = ue,
      o = gn.transition;
    gn.transition = null;
    try {
      (ue = 1), ho(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = o);
    }
  }
  function Gc(e, t, n, r) {
    var l = ue,
      o = gn.transition;
    gn.transition = null;
    try {
      (ue = 4), ho(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = o);
    }
  }
  function ho(e, t, n, r) {
    if (Hr) {
      var l = mo(e, t, n, r);
      if (l === null) Oo(e, t, r, Qr, n), zu(e, r);
      else if (Kc(l, e, t, n, r)) r.stopPropagation();
      else if ((zu(e, r), t & 4 && -1 < Qc.indexOf(e))) {
        for (; l !== null; ) {
          var o = dr(l);
          if (
            (o !== null && Pu(o),
            (o = mo(e, t, n, r)),
            o === null && Oo(e, t, r, Qr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Oo(e, t, r, null, n);
    }
  }
  var Qr = null;
  function mo(e, t, n, r) {
    if (((Qr = null), (e = no(r)), (e = nn(e)), e !== null))
      if (((t = tn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = vu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Qr = e), null;
  }
  function ju(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Mc()) {
          case uo:
            return 1;
          case Eu:
            return 4;
          case Fr:
          case Fc:
            return 16;
          case xu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    vo = null,
    Kr = null;
  function Iu() {
    if (Kr) return Kr;
    var e,
      t = vo,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Kr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Yr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xr() {
    return !0;
  }
  function Du() {
    return !1;
  }
  function Ge(e) {
    function t(n, r, l, o, i) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Xr
          : Du),
        (this.isPropagationStopped = Du),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xr));
        },
        persist: function () {},
        isPersistent: Xr,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yo = Ge(wn),
    tr = F({}, wn, { view: 0, detail: 0 }),
    Jc = Ge(tr),
    go,
    wo,
    nr,
    Gr = F({}, tr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ko,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== nr &&
              (nr && e.type === "mousemove"
                ? ((go = e.screenX - nr.screenX), (wo = e.screenY - nr.screenY))
                : (wo = go = 0),
              (nr = e)),
            go);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wo;
      },
    }),
    Mu = Ge(Gr),
    Zc = F({}, Gr, { dataTransfer: 0 }),
    qc = Ge(Zc),
    bc = F({}, tr, { relatedTarget: 0 }),
    So = Ge(bc),
    ef = F({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tf = Ge(ef),
    nf = F({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    rf = Ge(nf),
    lf = F({}, wn, { data: 0 }),
    Fu = Ge(lf),
    of = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    uf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function af(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = sf[e])
        ? !!t[e]
        : !1;
  }
  function ko() {
    return af;
  }
  var cf = F({}, tr, {
      key: function (e) {
        if (e.key) {
          var t = of[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? uf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ko,
      charCode: function (e) {
        return e.type === "keypress" ? Yr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Yr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ff = Ge(cf),
    df = F({}, Gr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uu = Ge(df),
    pf = F({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ko,
    }),
    hf = Ge(pf),
    mf = F({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vf = Ge(mf),
    yf = F({}, Gr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gf = Ge(yf),
    wf = [9, 13, 27, 32],
    Eo = _ && "CompositionEvent" in window,
    rr = null;
  _ && "documentMode" in document && (rr = document.documentMode);
  var Sf = _ && "TextEvent" in window && !rr,
    Au = _ && (!Eo || (rr && 8 < rr && 11 >= rr)),
    Bu = " ",
    Vu = !1;
  function $u(e, t) {
    switch (e) {
      case "keyup":
        return wf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function kf(e, t) {
    switch (e) {
      case "compositionend":
        return Wu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vu = !0), Bu);
      case "textInput":
        return (e = t.data), e === Bu && Vu ? null : e;
      default:
        return null;
    }
  }
  function Ef(e, t) {
    if (Sn)
      return e === "compositionend" || (!Eo && $u(e, t))
        ? ((e = Iu()), (Kr = vo = Mt = null), (Sn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Au && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xf[e.type] : t === "textarea";
  }
  function Qu(e, t, n, r) {
    fu(r),
      (t = el(t, "onChange")),
      0 < t.length &&
        ((n = new yo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var lr = null,
    or = null;
  function Cf(e) {
    as(e, 0);
  }
  function Jr(e) {
    var t = _n(e);
    if (bi(t)) return e;
  }
  function _f(e, t) {
    if (e === "change") return t;
  }
  var Ku = !1;
  if (_) {
    var xo;
    if (_) {
      var Co = "oninput" in document;
      if (!Co) {
        var Yu = document.createElement("div");
        Yu.setAttribute("oninput", "return;"),
          (Co = typeof Yu.oninput == "function");
      }
      xo = Co;
    } else xo = !1;
    Ku = xo && (!document.documentMode || 9 < document.documentMode);
  }
  function Xu() {
    lr && (lr.detachEvent("onpropertychange", Gu), (or = lr = null));
  }
  function Gu(e) {
    if (e.propertyName === "value" && Jr(or)) {
      var t = [];
      Qu(t, or, e, no(e)), mu(Cf, t);
    }
  }
  function Pf(e, t, n) {
    e === "focusin"
      ? (Xu(), (lr = t), (or = n), lr.attachEvent("onpropertychange", Gu))
      : e === "focusout" && Xu();
  }
  function Nf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jr(or);
  }
  function Rf(e, t) {
    if (e === "click") return Jr(t);
  }
  function Lf(e, t) {
    if (e === "input" || e === "change") return Jr(t);
  }
  function zf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : zf;
  function ir(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zu(e, t) {
    var n = Ju(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ju(n);
    }
  }
  function qu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? qu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function bu() {
    for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = jr(e.document);
    }
    return t;
  }
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Tf(e) {
    var t = bu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      qu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && _o(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Zu(n, o));
          var i = Zu(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Of = _ && "documentMode" in document && 11 >= document.documentMode,
    kn = null,
    Po = null,
    ur = null,
    No = !1;
  function es(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    No ||
      kn == null ||
      kn !== jr(r) ||
      ((r = kn),
      "selectionStart" in r && _o(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ur && ir(ur, r)) ||
        ((ur = r),
        (r = el(Po, "onSelect")),
        0 < r.length &&
          ((t = new yo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = kn))));
  }
  function Zr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: Zr("Animation", "AnimationEnd"),
      animationiteration: Zr("Animation", "AnimationIteration"),
      animationstart: Zr("Animation", "AnimationStart"),
      transitionend: Zr("Transition", "TransitionEnd"),
    },
    Ro = {},
    ts = {};
  _ &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function qr(e) {
    if (Ro[e]) return Ro[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ts) return (Ro[e] = t[n]);
    return e;
  }
  var ns = qr("animationend"),
    rs = qr("animationiteration"),
    ls = qr("animationstart"),
    os = qr("transitionend"),
    is = new Map(),
    us =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ft(e, t) {
    is.set(e, t), w(t, [e]);
  }
  for (var Lo = 0; Lo < us.length; Lo++) {
    var zo = us[Lo],
      jf = zo.toLowerCase(),
      If = zo[0].toUpperCase() + zo.slice(1);
    Ft(jf, "on" + If);
  }
  Ft(ns, "onAnimationEnd"),
    Ft(rs, "onAnimationIteration"),
    Ft(ls, "onAnimationStart"),
    Ft("dblclick", "onDoubleClick"),
    Ft("focusin", "onFocus"),
    Ft("focusout", "onBlur"),
    Ft(os, "onTransitionEnd"),
    S("onMouseEnter", ["mouseout", "mouseover"]),
    S("onMouseLeave", ["mouseout", "mouseover"]),
    S("onPointerEnter", ["pointerout", "pointerover"]),
    S("onPointerLeave", ["pointerout", "pointerover"]),
    w(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    w(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    w(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var sr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Df = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(sr),
    );
  function ss(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Oc(r, t, void 0, e), (e.currentTarget = null);
  }
  function as(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var a = r[i],
              f = a.instance,
              g = a.currentTarget;
            if (((a = a.listener), f !== o && l.isPropagationStopped()))
              break e;
            ss(l, a, g), (o = f);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((a = r[i]),
              (f = a.instance),
              (g = a.currentTarget),
              (a = a.listener),
              f !== o && l.isPropagationStopped())
            )
              break e;
            ss(l, a, g), (o = f);
          }
      }
    }
    if (Mr) throw ((e = io), (Mr = !1), (io = null), e);
  }
  function ce(e, t) {
    var n = t[Uo];
    n === void 0 && (n = t[Uo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (cs(t, e, 2, !1), n.add(r));
  }
  function To(e, t, n) {
    var r = 0;
    t && (r |= 4), cs(n, e, r, t);
  }
  var br = "_reactListening" + Math.random().toString(36).slice(2);
  function ar(e) {
    if (!e[br]) {
      (e[br] = !0),
        p.forEach(function (n) {
          n !== "selectionchange" && (Df.has(n) || To(n, !1, e), To(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || ((t[br] = !0), To("selectionchange", !1, t));
    }
  }
  function cs(e, t, n, r) {
    switch (ju(t)) {
      case 1:
        var l = Xc;
        break;
      case 4:
        l = Gc;
        break;
      default:
        l = ho;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !oo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function Oo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var a = r.stateNode.containerInfo;
          if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var f = i.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = i.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; a !== null; ) {
            if (((i = nn(a)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6)) {
              r = o = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    mu(function () {
      var g = o,
        C = no(n),
        P = [];
      e: {
        var E = is.get(e);
        if (E !== void 0) {
          var I = yo,
            U = e;
          switch (e) {
            case "keypress":
              if (Yr(n) === 0) break e;
            case "keydown":
            case "keyup":
              I = ff;
              break;
            case "focusin":
              (U = "focus"), (I = So);
              break;
            case "focusout":
              (U = "blur"), (I = So);
              break;
            case "beforeblur":
            case "afterblur":
              I = So;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              I = Mu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = qc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = hf;
              break;
            case ns:
            case rs:
            case ls:
              I = tf;
              break;
            case os:
              I = vf;
              break;
            case "scroll":
              I = Jc;
              break;
            case "wheel":
              I = gf;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = Uu;
          }
          var A = (t & 4) !== 0,
            Se = !A && e === "scroll",
            m = A ? (E !== null ? E + "Capture" : null) : E;
          A = [];
          for (var d = g, y; d !== null; ) {
            y = d;
            var R = y.stateNode;
            if (
              (y.tag === 5 &&
                R !== null &&
                ((y = R),
                m !== null &&
                  ((R = Qn(d, m)), R != null && A.push(cr(d, R, y)))),
              Se)
            )
              break;
            d = d.return;
          }
          0 < A.length &&
            ((E = new I(E, U, null, n, C)), P.push({ event: E, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((E = e === "mouseover" || e === "pointerover"),
            (I = e === "mouseout" || e === "pointerout"),
            E &&
              n !== to &&
              (U = n.relatedTarget || n.fromElement) &&
              (nn(U) || U[Ct]))
          )
            break e;
          if (
            (I || E) &&
            ((E =
              C.window === C
                ? C
                : (E = C.ownerDocument)
                  ? E.defaultView || E.parentWindow
                  : window),
            I
              ? ((U = n.relatedTarget || n.toElement),
                (I = g),
                (U = U ? nn(U) : null),
                U !== null &&
                  ((Se = tn(U)), U !== Se || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : ((I = null), (U = g)),
            I !== U)
          ) {
            if (
              ((A = Mu),
              (R = "onMouseLeave"),
              (m = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((A = Uu),
                (R = "onPointerLeave"),
                (m = "onPointerEnter"),
                (d = "pointer")),
              (Se = I == null ? E : _n(I)),
              (y = U == null ? E : _n(U)),
              (E = new A(R, d + "leave", I, n, C)),
              (E.target = Se),
              (E.relatedTarget = y),
              (R = null),
              nn(C) === g &&
                ((A = new A(m, d + "enter", U, n, C)),
                (A.target = y),
                (A.relatedTarget = Se),
                (R = A)),
              (Se = R),
              I && U)
            )
              t: {
                for (A = I, m = U, d = 0, y = A; y; y = xn(y)) d++;
                for (y = 0, R = m; R; R = xn(R)) y++;
                for (; 0 < d - y; ) (A = xn(A)), d--;
                for (; 0 < y - d; ) (m = xn(m)), y--;
                for (; d--; ) {
                  if (A === m || (m !== null && A === m.alternate)) break t;
                  (A = xn(A)), (m = xn(m));
                }
                A = null;
              }
            else A = null;
            I !== null && fs(P, E, I, A, !1),
              U !== null && Se !== null && fs(P, Se, U, A, !0);
          }
        }
        e: {
          if (
            ((E = g ? _n(g) : window),
            (I = E.nodeName && E.nodeName.toLowerCase()),
            I === "select" || (I === "input" && E.type === "file"))
          )
            var B = _f;
          else if (Hu(E))
            if (Ku) B = Lf;
            else {
              B = Nf;
              var $ = Pf;
            }
          else
            (I = E.nodeName) &&
              I.toLowerCase() === "input" &&
              (E.type === "checkbox" || E.type === "radio") &&
              (B = Rf);
          if (B && (B = B(e, g))) {
            Qu(P, B, n, C);
            break e;
          }
          $ && $(e, E, g),
            e === "focusout" &&
              ($ = E._wrapperState) &&
              $.controlled &&
              E.type === "number" &&
              Jl(E, "number", E.value);
        }
        switch ((($ = g ? _n(g) : window), e)) {
          case "focusin":
            (Hu($) || $.contentEditable === "true") &&
              ((kn = $), (Po = g), (ur = null));
            break;
          case "focusout":
            ur = Po = kn = null;
            break;
          case "mousedown":
            No = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (No = !1), es(P, n, C);
            break;
          case "selectionchange":
            if (Of) break;
          case "keydown":
          case "keyup":
            es(P, n, C);
        }
        var W;
        if (Eo)
          e: {
            switch (e) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break e;
              case "compositionend":
                Q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break e;
            }
            Q = void 0;
          }
        else
          Sn
            ? $u(e, n) && (Q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (Au &&
            n.locale !== "ko" &&
            (Sn || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && Sn && (W = Iu())
              : ((Mt = C),
                (vo = "value" in Mt ? Mt.value : Mt.textContent),
                (Sn = !0))),
          ($ = el(g, Q)),
          0 < $.length &&
            ((Q = new Fu(Q, e, null, n, C)),
            P.push({ event: Q, listeners: $ }),
            W ? (Q.data = W) : ((W = Wu(n)), W !== null && (Q.data = W)))),
          (W = Sf ? kf(e, n) : Ef(e, n)) &&
            ((g = el(g, "onBeforeInput")),
            0 < g.length &&
              ((C = new Fu("onBeforeInput", "beforeinput", null, n, C)),
              P.push({ event: C, listeners: g }),
              (C.data = W)));
      }
      as(P, t);
    });
  }
  function cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function el(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Qn(e, n)),
        o != null && r.unshift(cr(e, o, l)),
        (o = Qn(e, t)),
        o != null && r.push(cr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n,
        f = a.alternate,
        g = a.stateNode;
      if (f !== null && f === r) break;
      a.tag === 5 &&
        g !== null &&
        ((a = g),
        l
          ? ((f = Qn(n, o)), f != null && i.unshift(cr(n, f, a)))
          : l || ((f = Qn(n, o)), f != null && i.push(cr(n, f, a)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Mf = /\r\n?/g,
    Ff = /\u0000|\uFFFD/g;
  function ds(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Mf,
        `
`,
      )
      .replace(Ff, "");
  }
  function tl(e, t, n) {
    if (((t = ds(t)), ds(e) !== t && n)) throw Error(s(425));
  }
  function nl() {}
  var jo = null,
    Io = null;
  function Do(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0,
    Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ps = typeof Promise == "function" ? Promise : void 0,
    Af =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ps < "u"
          ? function (e) {
              return ps.resolve(null).then(e).catch(Bf);
            }
          : Mo;
  function Bf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Fo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), er(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    er(t);
  }
  function Ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function hs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + Cn,
    fr = "__reactProps$" + Cn,
    Ct = "__reactContainer$" + Cn,
    Uo = "__reactEvents$" + Cn,
    Vf = "__reactListeners$" + Cn,
    $f = "__reactHandles$" + Cn;
  function nn(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[wt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = hs(e); e !== null; ) {
            if ((n = e[wt])) return n;
            e = hs(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function dr(e) {
    return (
      (e = e[wt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function _n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function rl(e) {
    return e[fr] || null;
  }
  var Ao = [],
    Pn = -1;
  function At(e) {
    return { current: e };
  }
  function fe(e) {
    0 > Pn || ((e.current = Ao[Pn]), (Ao[Pn] = null), Pn--);
  }
  function ae(e, t) {
    Pn++, (Ao[Pn] = e.current), (e.current = t);
  }
  var Bt = {},
    je = At(Bt),
    Be = At(!1),
    rn = Bt;
  function Nn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ll() {
    fe(Be), fe(je);
  }
  function ms(e, t, n) {
    if (je.current !== Bt) throw Error(s(168));
    ae(je, t), ae(Be, n);
  }
  function vs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, se(e) || "Unknown", l));
    return F({}, n, r);
  }
  function ol(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Bt),
      (rn = je.current),
      ae(je, e),
      ae(Be, Be.current),
      !0
    );
  }
  function ys(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = vs(e, t, rn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        fe(Be),
        fe(je),
        ae(je, e))
      : fe(Be),
      ae(Be, n);
  }
  var _t = null,
    il = !1,
    Bo = !1;
  function gs(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  function Wf(e) {
    (il = !0), gs(e);
  }
  function Vt() {
    if (!Bo && _t !== null) {
      Bo = !0;
      var e = 0,
        t = ue;
      try {
        var n = _t;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (_t = null), (il = !1);
      } catch (l) {
        throw (_t !== null && (_t = _t.slice(e + 1)), Su(uo, Vt), l);
      } finally {
        (ue = t), (Bo = !1);
      }
    }
    return null;
  }
  var Rn = [],
    Ln = 0,
    ul = null,
    sl = 0,
    et = [],
    tt = 0,
    ln = null,
    Pt = 1,
    Nt = "";
  function on(e, t) {
    (Rn[Ln++] = sl), (Rn[Ln++] = ul), (ul = e), (sl = t);
  }
  function ws(e, t, n) {
    (et[tt++] = Pt), (et[tt++] = Nt), (et[tt++] = ln), (ln = e);
    var r = Pt;
    e = Nt;
    var l = 32 - st(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - st(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Pt = (1 << (32 - st(t) + l)) | (n << l) | r),
        (Nt = o + e);
    } else (Pt = (1 << o) | (n << l) | r), (Nt = e);
  }
  function Vo(e) {
    e.return !== null && (on(e, 1), ws(e, 1, 0));
  }
  function $o(e) {
    for (; e === ul; )
      (ul = Rn[--Ln]), (Rn[Ln] = null), (sl = Rn[--Ln]), (Rn[Ln] = null);
    for (; e === ln; )
      (ln = et[--tt]),
        (et[tt] = null),
        (Nt = et[--tt]),
        (et[tt] = null),
        (Pt = et[--tt]),
        (et[tt] = null);
  }
  var Je = null,
    Ze = null,
    pe = !1,
    ct = null;
  function Ss(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ks(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Je = e), (Ze = Ut(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Je = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = ln !== null ? { id: Pt, overflow: Nt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Je = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Wo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ho(e) {
    if (pe) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!ks(e, t)) {
          if (Wo(e)) throw Error(s(418));
          t = Ut(n.nextSibling);
          var r = Je;
          t && ks(e, t)
            ? Ss(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (Je = e));
        }
      } else {
        if (Wo(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (pe = !1), (Je = e);
      }
    }
  }
  function Es(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Je = e;
  }
  function al(e) {
    if (e !== Je) return !1;
    if (!pe) return Es(e), (pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if (Wo(e)) throw (xs(), Error(s(418)));
      for (; t; ) Ss(e, t), (t = Ut(t.nextSibling));
    }
    if ((Es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Je ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xs() {
    for (var e = Ze; e; ) e = Ut(e.nextSibling);
  }
  function zn() {
    (Ze = Je = null), (pe = !1);
  }
  function Qo(e) {
    ct === null ? (ct = [e]) : ct.push(e);
  }
  var Hf = G.ReactCurrentBatchConfig;
  function pr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var a = l.refs;
              i === null ? delete a[o] : (a[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function cl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Cs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _s(e) {
    function t(m, d) {
      if (e) {
        var y = m.deletions;
        y === null ? ((m.deletions = [d]), (m.flags |= 16)) : y.push(d);
      }
    }
    function n(m, d) {
      if (!e) return null;
      for (; d !== null; ) t(m, d), (d = d.sibling);
      return null;
    }
    function r(m, d) {
      for (m = new Map(); d !== null; )
        d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
      return m;
    }
    function l(m, d) {
      return (m = Gt(m, d)), (m.index = 0), (m.sibling = null), m;
    }
    function o(m, d, y) {
      return (
        (m.index = y),
        e
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < d ? ((m.flags |= 2), d) : y)
              : ((m.flags |= 2), d))
          : ((m.flags |= 1048576), d)
      );
    }
    function i(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, d, y, R) {
      return d === null || d.tag !== 6
        ? ((d = Mi(y, m.mode, R)), (d.return = m), d)
        : ((d = l(d, y)), (d.return = m), d);
    }
    function f(m, d, y, R) {
      var B = y.type;
      return B === Le
        ? C(m, d, y.props.children, R, y.key)
        : d !== null &&
            (d.elementType === B ||
              (typeof B == "object" &&
                B !== null &&
                B.$$typeof === Ae &&
                Cs(B) === d.type))
          ? ((R = l(d, y.props)), (R.ref = pr(m, d, y)), (R.return = m), R)
          : ((R = Il(y.type, y.key, y.props, null, m.mode, R)),
            (R.ref = pr(m, d, y)),
            (R.return = m),
            R);
    }
    function g(m, d, y, R) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== y.containerInfo ||
        d.stateNode.implementation !== y.implementation
        ? ((d = Fi(y, m.mode, R)), (d.return = m), d)
        : ((d = l(d, y.children || [])), (d.return = m), d);
    }
    function C(m, d, y, R, B) {
      return d === null || d.tag !== 7
        ? ((d = hn(y, m.mode, R, B)), (d.return = m), d)
        : ((d = l(d, y)), (d.return = m), d);
    }
    function P(m, d, y) {
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return (d = Mi("" + d, m.mode, y)), (d.return = m), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ke:
            return (
              (y = Il(d.type, d.key, d.props, null, m.mode, y)),
              (y.ref = pr(m, null, d)),
              (y.return = m),
              y
            );
          case xe:
            return (d = Fi(d, m.mode, y)), (d.return = m), d;
          case Ae:
            var R = d._init;
            return P(m, R(d._payload), y);
        }
        if ($n(d) || H(d))
          return (d = hn(d, m.mode, y, null)), (d.return = m), d;
        cl(m, d);
      }
      return null;
    }
    function E(m, d, y, R) {
      var B = d !== null ? d.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return B !== null ? null : a(m, d, "" + y, R);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ke:
            return y.key === B ? f(m, d, y, R) : null;
          case xe:
            return y.key === B ? g(m, d, y, R) : null;
          case Ae:
            return (B = y._init), E(m, d, B(y._payload), R);
        }
        if ($n(y) || H(y)) return B !== null ? null : C(m, d, y, R, null);
        cl(m, y);
      }
      return null;
    }
    function I(m, d, y, R, B) {
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return (m = m.get(y) || null), a(d, m, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ke:
            return (
              (m = m.get(R.key === null ? y : R.key) || null), f(d, m, R, B)
            );
          case xe:
            return (
              (m = m.get(R.key === null ? y : R.key) || null), g(d, m, R, B)
            );
          case Ae:
            var $ = R._init;
            return I(m, d, y, $(R._payload), B);
        }
        if ($n(R) || H(R)) return (m = m.get(y) || null), C(d, m, R, B, null);
        cl(d, R);
      }
      return null;
    }
    function U(m, d, y, R) {
      for (
        var B = null, $ = null, W = d, Q = (d = 0), Re = null;
        W !== null && Q < y.length;
        Q++
      ) {
        W.index > Q ? ((Re = W), (W = null)) : (Re = W.sibling);
        var le = E(m, W, y[Q], R);
        if (le === null) {
          W === null && (W = Re);
          break;
        }
        e && W && le.alternate === null && t(m, W),
          (d = o(le, d, Q)),
          $ === null ? (B = le) : ($.sibling = le),
          ($ = le),
          (W = Re);
      }
      if (Q === y.length) return n(m, W), pe && on(m, Q), B;
      if (W === null) {
        for (; Q < y.length; Q++)
          (W = P(m, y[Q], R)),
            W !== null &&
              ((d = o(W, d, Q)),
              $ === null ? (B = W) : ($.sibling = W),
              ($ = W));
        return pe && on(m, Q), B;
      }
      for (W = r(m, W); Q < y.length; Q++)
        (Re = I(W, m, Q, y[Q], R)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              W.delete(Re.key === null ? Q : Re.key),
            (d = o(Re, d, Q)),
            $ === null ? (B = Re) : ($.sibling = Re),
            ($ = Re));
      return (
        e &&
          W.forEach(function (Jt) {
            return t(m, Jt);
          }),
        pe && on(m, Q),
        B
      );
    }
    function A(m, d, y, R) {
      var B = H(y);
      if (typeof B != "function") throw Error(s(150));
      if (((y = B.call(y)), y == null)) throw Error(s(151));
      for (
        var $ = (B = null), W = d, Q = (d = 0), Re = null, le = y.next();
        W !== null && !le.done;
        Q++, le = y.next()
      ) {
        W.index > Q ? ((Re = W), (W = null)) : (Re = W.sibling);
        var Jt = E(m, W, le.value, R);
        if (Jt === null) {
          W === null && (W = Re);
          break;
        }
        e && W && Jt.alternate === null && t(m, W),
          (d = o(Jt, d, Q)),
          $ === null ? (B = Jt) : ($.sibling = Jt),
          ($ = Jt),
          (W = Re);
      }
      if (le.done) return n(m, W), pe && on(m, Q), B;
      if (W === null) {
        for (; !le.done; Q++, le = y.next())
          (le = P(m, le.value, R)),
            le !== null &&
              ((d = o(le, d, Q)),
              $ === null ? (B = le) : ($.sibling = le),
              ($ = le));
        return pe && on(m, Q), B;
      }
      for (W = r(m, W); !le.done; Q++, le = y.next())
        (le = I(W, m, Q, le.value, R)),
          le !== null &&
            (e &&
              le.alternate !== null &&
              W.delete(le.key === null ? Q : le.key),
            (d = o(le, d, Q)),
            $ === null ? (B = le) : ($.sibling = le),
            ($ = le));
      return (
        e &&
          W.forEach(function (xd) {
            return t(m, xd);
          }),
        pe && on(m, Q),
        B
      );
    }
    function Se(m, d, y, R) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Le &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case ke:
            e: {
              for (var B = y.key, $ = d; $ !== null; ) {
                if ($.key === B) {
                  if (((B = y.type), B === Le)) {
                    if ($.tag === 7) {
                      n(m, $.sibling),
                        (d = l($, y.props.children)),
                        (d.return = m),
                        (m = d);
                      break e;
                    }
                  } else if (
                    $.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Ae &&
                      Cs(B) === $.type)
                  ) {
                    n(m, $.sibling),
                      (d = l($, y.props)),
                      (d.ref = pr(m, $, y)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                  n(m, $);
                  break;
                } else t(m, $);
                $ = $.sibling;
              }
              y.type === Le
                ? ((d = hn(y.props.children, m.mode, R, y.key)),
                  (d.return = m),
                  (m = d))
                : ((R = Il(y.type, y.key, y.props, null, m.mode, R)),
                  (R.ref = pr(m, d, y)),
                  (R.return = m),
                  (m = R));
            }
            return i(m);
          case xe:
            e: {
              for ($ = y.key; d !== null; ) {
                if (d.key === $)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === y.containerInfo &&
                    d.stateNode.implementation === y.implementation
                  ) {
                    n(m, d.sibling),
                      (d = l(d, y.children || [])),
                      (d.return = m),
                      (m = d);
                    break e;
                  } else {
                    n(m, d);
                    break;
                  }
                else t(m, d);
                d = d.sibling;
              }
              (d = Fi(y, m.mode, R)), (d.return = m), (m = d);
            }
            return i(m);
          case Ae:
            return ($ = y._init), Se(m, d, $(y._payload), R);
        }
        if ($n(y)) return U(m, d, y, R);
        if (H(y)) return A(m, d, y, R);
        cl(m, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          d !== null && d.tag === 6
            ? (n(m, d.sibling), (d = l(d, y)), (d.return = m), (m = d))
            : (n(m, d), (d = Mi(y, m.mode, R)), (d.return = m), (m = d)),
          i(m))
        : n(m, d);
    }
    return Se;
  }
  var Tn = _s(!0),
    Ps = _s(!1),
    fl = At(null),
    dl = null,
    On = null,
    Ko = null;
  function Yo() {
    Ko = On = dl = null;
  }
  function Xo(e) {
    var t = fl.current;
    fe(fl), (e._currentValue = t);
  }
  function Go(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function jn(e, t) {
    (dl = e),
      (Ko = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && ($e = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (Ko !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (dl === null) throw Error(s(308));
        (On = e), (dl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var un = null;
  function Jo(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Ns(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Jo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var $t = !1;
  function Zo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Rs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (te & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Jo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function pl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n);
    }
  }
  function Ls(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function hl(e, t, n, r) {
    var l = e.updateQueue;
    $t = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var f = a,
        g = f.next;
      (f.next = null), i === null ? (o = g) : (i.next = g), (i = f);
      var C = e.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (a = C.lastBaseUpdate),
        a !== i &&
          (a === null ? (C.firstBaseUpdate = g) : (a.next = g),
          (C.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var P = l.baseState;
      (i = 0), (C = g = f = null), (a = o);
      do {
        var E = a.lane,
          I = a.eventTime;
        if ((r & E) === E) {
          C !== null &&
            (C = C.next =
              {
                eventTime: I,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var U = e,
              A = a;
            switch (((E = t), (I = n), A.tag)) {
              case 1:
                if (((U = A.payload), typeof U == "function")) {
                  P = U.call(I, P, E);
                  break e;
                }
                P = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = A.payload),
                  (E = typeof U == "function" ? U.call(I, P, E) : U),
                  E == null)
                )
                  break e;
                P = F({}, P, E);
                break e;
              case 2:
                $t = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (E = l.effects),
            E === null ? (l.effects = [a]) : E.push(a));
        } else
          (I = {
            eventTime: I,
            lane: E,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            C === null ? ((g = C = I), (f = P)) : (C = C.next = I),
            (i |= E);
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break;
          (E = a),
            (a = E.next),
            (E.next = null),
            (l.lastBaseUpdate = E),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (C === null && (f = P),
        (l.baseState = f),
        (l.firstBaseUpdate = g),
        (l.lastBaseUpdate = C),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (cn |= i), (e.lanes = i), (e.memoizedState = P);
    }
  }
  function zs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var hr = {},
    St = At(hr),
    mr = At(hr),
    vr = At(hr);
  function sn(e) {
    if (e === hr) throw Error(s(174));
    return e;
  }
  function qo(e, t) {
    switch ((ae(vr, t), ae(mr, e), ae(St, hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ql(t, e));
    }
    fe(St), ae(St, t);
  }
  function In() {
    fe(St), fe(mr), fe(vr);
  }
  function Ts(e) {
    sn(vr.current);
    var t = sn(St.current),
      n = ql(t, e.type);
    t !== n && (ae(mr, e), ae(St, n));
  }
  function bo(e) {
    mr.current === e && (fe(St), fe(mr));
  }
  var he = At(0);
  function ml(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ei = [];
  function ti() {
    for (var e = 0; e < ei.length; e++)
      ei[e]._workInProgressVersionPrimary = null;
    ei.length = 0;
  }
  var vl = G.ReactCurrentDispatcher,
    ni = G.ReactCurrentBatchConfig,
    an = 0,
    me = null,
    Ce = null,
    Pe = null,
    yl = !1,
    yr = !1,
    gr = 0,
    Qf = 0;
  function Ie() {
    throw Error(s(321));
  }
  function ri(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function li(e, t, n, r, l, o) {
    if (
      ((an = o),
      (me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (vl.current = e === null || e.memoizedState === null ? Gf : Jf),
      (e = n(r, l)),
      yr)
    ) {
      o = 0;
      do {
        if (((yr = !1), (gr = 0), 25 <= o)) throw Error(s(301));
        (o += 1),
          (Pe = Ce = null),
          (t.updateQueue = null),
          (vl.current = Zf),
          (e = n(r, l));
      } while (yr);
    }
    if (
      ((vl.current = Sl),
      (t = Ce !== null && Ce.next !== null),
      (an = 0),
      (Pe = Ce = me = null),
      (yl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function oi() {
    var e = gr !== 0;
    return (gr = 0), e;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
  }
  function rt() {
    if (Ce === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Pe === null ? me.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (Ce = e);
    else {
      if (e === null) throw Error(s(310));
      (Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
  }
  function wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ii(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ce,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = o.next), (o.next = i);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var a = (i = null),
        f = null,
        g = o;
      do {
        var C = g.lane;
        if ((an & C) === C)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action));
        else {
          var P = {
            lane: C,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          f === null ? ((a = f = P), (i = r)) : (f = f.next = P),
            (me.lanes |= C),
            (cn |= C);
        }
        g = g.next;
      } while (g !== null && g !== o);
      f === null ? (i = r) : (f.next = a),
        at(r, t.memoizedState) || ($e = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = f),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (me.lanes |= o), (cn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ui(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      at(o, t.memoizedState) || ($e = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Os() {}
  function js(e, t) {
    var n = me,
      r = rt(),
      l = t(),
      o = !at(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), ($e = !0)),
      (r = r.queue),
      si(Ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Sr(9, Ds.bind(null, n, r, l, t), void 0, null),
        Ne === null)
      )
        throw Error(s(349));
      (an & 30) !== 0 || Is(n, t, l);
    }
    return l;
  }
  function Is(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (me.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ds(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Fs(t) && Us(e);
  }
  function Ms(e, t, n) {
    return n(function () {
      Fs(t) && Us(e);
    });
  }
  function Fs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function Us(e) {
    var t = Rt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function As(e) {
    var t = kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Xf.bind(null, me, e)),
      [t.memoizedState, e]
    );
  }
  function Sr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Bs() {
    return rt().memoizedState;
  }
  function gl(e, t, n, r) {
    var l = kt();
    (me.flags |= e),
      (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function wl(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
      var i = Ce.memoizedState;
      if (((o = i.destroy), r !== null && ri(r, i.deps))) {
        l.memoizedState = Sr(t, n, o, r);
        return;
      }
    }
    (me.flags |= e), (l.memoizedState = Sr(1 | t, n, o, r));
  }
  function Vs(e, t) {
    return gl(8390656, 8, e, t);
  }
  function si(e, t) {
    return wl(2048, 8, e, t);
  }
  function $s(e, t) {
    return wl(4, 2, e, t);
  }
  function Ws(e, t) {
    return wl(4, 4, e, t);
  }
  function Hs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Qs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), wl(4, 4, Hs.bind(null, t, e), n)
    );
  }
  function ai() {}
  function Ks(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ri(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ys(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ri(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Xs(e, t, n) {
    return (an & 21) === 0
      ? (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n))
      : (at(n, t) ||
          ((n = Cu()), (me.lanes |= n), (cn |= n), (e.baseState = !0)),
        t);
  }
  function Kf(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ni.transition;
    ni.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (ni.transition = r);
    }
  }
  function Gs() {
    return rt().memoizedState;
  }
  function Yf(e, t, n) {
    var r = Yt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Js(e))
    )
      Zs(t, n);
    else if (((n = Ns(e, t, n, r)), n !== null)) {
      var l = Ue();
      ht(n, e, r, l), qs(n, t, r);
    }
  }
  function Xf(e, t, n) {
    var r = Yt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Js(e)) Zs(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            a = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = a), at(a, i))) {
            var f = t.interleaved;
            f === null
              ? ((l.next = l), Jo(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ns(e, t, l, r)),
        n !== null && ((l = Ue()), ht(n, e, r, l), qs(n, t, r));
    }
  }
  function Js(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
  }
  function Zs(e, t) {
    yr = yl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function qs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), co(e, n);
    }
  }
  var Sl = {
      readContext: nt,
      useCallback: Ie,
      useContext: Ie,
      useEffect: Ie,
      useImperativeHandle: Ie,
      useInsertionEffect: Ie,
      useLayoutEffect: Ie,
      useMemo: Ie,
      useReducer: Ie,
      useRef: Ie,
      useState: Ie,
      useDebugValue: Ie,
      useDeferredValue: Ie,
      useTransition: Ie,
      useMutableSource: Ie,
      useSyncExternalStore: Ie,
      useId: Ie,
      unstable_isNewReconciler: !1,
    },
    Gf = {
      readContext: nt,
      useCallback: function (e, t) {
        return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: Vs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          gl(4194308, 4, Hs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return gl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return gl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Yf.bind(null, me, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = kt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: As,
      useDebugValue: ai,
      useDeferredValue: function (e) {
        return (kt().memoizedState = e);
      },
      useTransition: function () {
        var e = As(!1),
          t = e[0];
        return (e = Kf.bind(null, e[1])), (kt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = me,
          l = kt();
        if (pe) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ne === null)) throw Error(s(349));
          (an & 30) !== 0 || Is(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Vs(Ms.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Sr(9, Ds.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = kt(),
          t = Ne.identifierPrefix;
        if (pe) {
          var n = Nt,
            r = Pt;
          (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = gr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Qf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Jf = {
      readContext: nt,
      useCallback: Ks,
      useContext: nt,
      useEffect: si,
      useImperativeHandle: Qs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ys,
      useReducer: ii,
      useRef: Bs,
      useState: function () {
        return ii(wr);
      },
      useDebugValue: ai,
      useDeferredValue: function (e) {
        var t = rt();
        return Xs(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = ii(wr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: js,
      useId: Gs,
      unstable_isNewReconciler: !1,
    },
    Zf = {
      readContext: nt,
      useCallback: Ks,
      useContext: nt,
      useEffect: si,
      useImperativeHandle: Qs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ys,
      useReducer: ui,
      useRef: Bs,
      useState: function () {
        return ui(wr);
      },
      useDebugValue: ai,
      useDeferredValue: function (e) {
        var t = rt();
        return Ce === null ? (t.memoizedState = e) : Xs(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = ui(wr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Os,
      useSyncExternalStore: js,
      useId: Gs,
      unstable_isNewReconciler: !1,
    };
  function ft(e, t) {
    if (e && e.defaultProps) {
      (t = F({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ci(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : F({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var kl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = Yt(e),
        o = Lt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Wt(e, o, l)),
        t !== null && (ht(t, e, l, r), pl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ue(),
        l = Yt(e),
        o = Lt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Wt(e, o, l)),
        t !== null && (ht(t, e, l, r), pl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ue(),
        r = Yt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Wt(e, l, r)),
        t !== null && (ht(t, e, r, n), pl(t, e, r));
    },
  };
  function bs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ir(n, r) || !ir(l, o)
          : !0
    );
  }
  function ea(e, t, n) {
    var r = !1,
      l = Bt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nt(o))
        : ((l = Ve(t) ? rn : je.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Nn(e, l) : Bt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = kl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ta(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && kl.enqueueReplaceState(t, t.state, null);
  }
  function fi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Zo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = nt(o))
      : ((o = Ve(t) ? rn : je.current), (l.context = Nn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (ci(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && kl.enqueueReplaceState(l, l.state, null),
        hl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ne(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function di(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function pi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var qf = typeof WeakMap == "function" ? WeakMap : Map;
  function na(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Rl || ((Rl = !0), (Ri = r)), pi(e, t);
      }),
      n
    );
  }
  function ra(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          pi(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          pi(e, t),
            typeof r != "function" &&
              (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function la(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new qf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = dd.bind(null, e, t, n)), t.then(e, e));
  }
  function oa(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ia(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var bf = G.ReactCurrentOwner,
    $e = !1;
  function Fe(e, t, n, r) {
    t.child = e === null ? Ps(t, null, n, r) : Tn(t, e.child, n, r);
  }
  function ua(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      jn(t, l),
      (r = li(e, t, n, r, o, l)),
      (n = oi()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && n && Vo(t), (t.flags |= 1), Fe(e, t, r, l), t.child)
    );
  }
  function sa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Di(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), aa(e, t, o, r, l))
        : ((e = Il(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ir), n(i, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Gt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function aa(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ir(o, r) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return hi(e, t, n, r, l);
  }
  function ca(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ae(Fn, qe),
          (qe |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ae(Fn, qe),
            (qe |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ae(Fn, qe),
          (qe |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ae(Fn, qe),
        (qe |= r);
    return Fe(e, t, l, n), t.child;
  }
  function fa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function hi(e, t, n, r, l) {
    var o = Ve(n) ? rn : je.current;
    return (
      (o = Nn(t, o)),
      jn(t, l),
      (n = li(e, t, n, r, o, l)),
      (r = oi()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && r && Vo(t), (t.flags |= 1), Fe(e, t, n, l), t.child)
    );
  }
  function da(e, t, n, r, l) {
    if (Ve(n)) {
      var o = !0;
      ol(t);
    } else o = !1;
    if ((jn(t, l), t.stateNode === null))
      xl(e, t), ea(t, n, r), fi(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        a = t.memoizedProps;
      i.props = a;
      var f = i.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = nt(g))
        : ((g = Ve(n) ? rn : je.current), (g = Nn(t, g)));
      var C = n.getDerivedStateFromProps,
        P =
          typeof C == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      P ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== r || f !== g) && ta(t, i, r, g)),
        ($t = !1);
      var E = t.memoizedState;
      (i.state = E),
        hl(t, r, i, l),
        (f = t.memoizedState),
        a !== r || E !== f || Be.current || $t
          ? (typeof C == "function" && (ci(t, n, C, r), (f = t.memoizedState)),
            (a = $t || bs(t, n, a, r, E, f, g))
              ? (P ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (i.props = r),
            (i.state = f),
            (i.context = g),
            (r = a))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (i = t.stateNode),
        Rs(e, t),
        (a = t.memoizedProps),
        (g = t.type === t.elementType ? a : ft(t.type, a)),
        (i.props = g),
        (P = t.pendingProps),
        (E = i.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = nt(f))
          : ((f = Ve(n) ? rn : je.current), (f = Nn(t, f)));
      var I = n.getDerivedStateFromProps;
      (C =
        typeof I == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== P || E !== f) && ta(t, i, r, f)),
        ($t = !1),
        (E = t.memoizedState),
        (i.state = E),
        hl(t, r, i, l);
      var U = t.memoizedState;
      a !== P || E !== U || Be.current || $t
        ? (typeof I == "function" && (ci(t, n, I, r), (U = t.memoizedState)),
          (g = $t || bs(t, n, g, r, E, U, f) || !1)
            ? (C ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, U, f),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, U, f)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (a === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = U)),
          (i.props = r),
          (i.state = U),
          (i.context = f),
          (r = g))
        : (typeof i.componentDidUpdate != "function" ||
            (a === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return mi(e, t, n, r, o, l);
  }
  function mi(e, t, n, r, l, o) {
    fa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ys(t, n, !1), zt(e, t, o);
    (r = t.stateNode), (bf.current = t);
    var a =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Tn(t, e.child, null, o)), (t.child = Tn(t, null, a, o)))
        : Fe(e, t, a, o),
      (t.memoizedState = r.state),
      l && ys(t, n, !0),
      t.child
    );
  }
  function pa(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ms(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ms(e, t.context, !1),
      qo(e, t.containerInfo);
  }
  function ha(e, t, n, r, l) {
    return zn(), Qo(l), (t.flags |= 256), Fe(e, t, n, r), t.child;
  }
  var vi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function yi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ma(e, t, n) {
    var r = t.pendingProps,
      l = he.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      a;
    if (
      ((a = i) ||
        (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ae(he, l & 1),
      e === null)
    )
      return (
        Ho(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = Dl(i, r, 0, null)),
                (e = hn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = yi(n)),
                (t.memoizedState = vi),
                e)
              : gi(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return ed(e, t, i, r, a, l, n);
    if (o) {
      (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
      var f = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = Gt(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        a !== null ? (o = Gt(a, o)) : ((o = hn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? yi(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = vi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Gt(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function gi(e, t) {
    return (
      (t = Dl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function El(e, t, n, r) {
    return (
      r !== null && Qo(r),
      Tn(t, e.child, null, n),
      (e = gi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ed(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = di(Error(s(422)))), El(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Dl({ mode: "visible", children: r.children }, l, 0, null)),
            (o = hn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Tn(t, e.child, null, i),
            (t.child.memoizedState = yi(i)),
            (t.memoizedState = vi),
            o);
    if ((t.mode & 1) === 0) return El(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (o = Error(s(419))), (r = di(o, r, void 0)), El(e, t, i, r)
      );
    }
    if (((a = (i & e.childLanes) !== 0), $e || a)) {
      if (((r = Ne), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Rt(e, l), ht(r, e, l, -1));
      }
      return Ii(), (r = di(Error(s(421)))), El(e, t, i, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = pd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Ze = Ut(l.nextSibling)),
        (Je = t),
        (pe = !0),
        (ct = null),
        e !== null &&
          ((et[tt++] = Pt),
          (et[tt++] = Nt),
          (et[tt++] = ln),
          (Pt = e.id),
          (Nt = e.overflow),
          (ln = t)),
        (t = gi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function va(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Go(e.return, t, n);
  }
  function wi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function ya(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Fe(e, t, r.children, n), (r = he.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && va(e, n, t);
          else if (e.tag === 19) va(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ae(he, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && ml(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            wi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ml(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          wi(t, !0, n, null, o);
          break;
        case "together":
          wi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (cn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function td(e, t, n) {
    switch (t.tag) {
      case 3:
        pa(t), zn();
        break;
      case 5:
        Ts(t);
        break;
      case 1:
        Ve(t.type) && ol(t);
        break;
      case 4:
        qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ae(fl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ae(he, he.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ma(e, t, n)
              : (ae(he, he.current & 1),
                (e = zt(e, t, n)),
                e !== null ? e.sibling : null);
        ae(he, he.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ya(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ae(he, he.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ca(e, t, n);
    }
    return zt(e, t, n);
  }
  var ga, Si, wa, Sa;
  (ga = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Si = function () {}),
    (wa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), sn(St.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Xl(e, l)), (r = Xl(e, r)), (o = []);
            break;
          case "select":
            (l = F({}, l, { value: void 0 })),
              (r = F({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = Zl(e, l)), (r = Zl(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = nl);
        }
        bl(n, r);
        var i;
        n = null;
        for (g in l)
          if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
            if (g === "style") {
              var a = l[g];
              for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (v.hasOwnProperty(g)
                  ? o || (o = [])
                  : (o = o || []).push(g, null));
        for (g in r) {
          var f = r[g];
          if (
            ((a = l != null ? l[g] : void 0),
            r.hasOwnProperty(g) && f !== a && (f != null || a != null))
          )
            if (g === "style")
              if (a) {
                for (i in a)
                  !a.hasOwnProperty(i) ||
                    (f && f.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in f)
                  f.hasOwnProperty(i) &&
                    a[i] !== f[i] &&
                    (n || (n = {}), (n[i] = f[i]));
              } else n || (o || (o = []), o.push(g, n)), (n = f);
            else
              g === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (a = a ? a.__html : void 0),
                  f != null && a !== f && (o = o || []).push(g, f))
                : g === "children"
                  ? (typeof f != "string" && typeof f != "number") ||
                    (o = o || []).push(g, "" + f)
                  : g !== "suppressContentEditableWarning" &&
                    g !== "suppressHydrationWarning" &&
                    (v.hasOwnProperty(g)
                      ? (f != null && g === "onScroll" && ce("scroll", e),
                        o || a === f || (o = []))
                      : (o = o || []).push(g, f));
        }
        n && (o = o || []).push("style", n);
        var g = o;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (Sa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function kr(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function nd(e, t, n) {
    var r = t.pendingProps;
    switch (($o(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return De(t), null;
      case 1:
        return Ve(t.type) && ll(), De(t), null;
      case 3:
        return (
          (r = t.stateNode),
          In(),
          fe(Be),
          fe(je),
          ti(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (al(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ct !== null && (Ti(ct), (ct = null)))),
          Si(e, t),
          De(t),
          null
        );
      case 5:
        bo(t);
        var l = sn(vr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          wa(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return De(t), null;
          }
          if (((e = sn(St.current)), al(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[wt] = t), (r[fr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ce("cancel", r), ce("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < sr.length; l++) ce(sr[l], r);
                break;
              case "source":
                ce("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", r), ce("load", r);
                break;
              case "details":
                ce("toggle", r);
                break;
              case "input":
                eu(r, o), ce("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ce("invalid", r);
                break;
              case "textarea":
                ru(r, o), ce("invalid", r);
            }
            bl(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (o.suppressHydrationWarning !== !0 &&
                        tl(r.textContent, a, e),
                      (l = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (o.suppressHydrationWarning !== !0 &&
                        tl(r.textContent, a, e),
                      (l = ["children", "" + a]))
                  : v.hasOwnProperty(i) &&
                    a != null &&
                    i === "onScroll" &&
                    ce("scroll", r);
              }
            switch (n) {
              case "input":
                Or(r), nu(r, o, !0);
                break;
              case "textarea":
                Or(r), ou(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = nl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = iu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[wt] = t),
              (e[fr] = r),
              ga(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = eo(n, r)), n)) {
                case "dialog":
                  ce("cancel", e), ce("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ce("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < sr.length; l++) ce(sr[l], e);
                  l = r;
                  break;
                case "source":
                  ce("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ce("error", e), ce("load", e), (l = r);
                  break;
                case "details":
                  ce("toggle", e), (l = r);
                  break;
                case "input":
                  eu(e, r), (l = Xl(e, r)), ce("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = F({}, r, { value: void 0 })),
                    ce("invalid", e);
                  break;
                case "textarea":
                  ru(e, r), (l = Zl(e, r)), ce("invalid", e);
                  break;
                default:
                  l = r;
              }
              bl(n, l), (a = l);
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var f = a[o];
                  o === "style"
                    ? au(e, f)
                    : o === "dangerouslySetInnerHTML"
                      ? ((f = f ? f.__html : void 0), f != null && uu(e, f))
                      : o === "children"
                        ? typeof f == "string"
                          ? (n !== "textarea" || f !== "") && Wn(e, f)
                          : typeof f == "number" && Wn(e, "" + f)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (v.hasOwnProperty(o)
                            ? f != null && o === "onScroll" && ce("scroll", e)
                            : f != null && q(e, o, f, i));
                }
              switch (n) {
                case "input":
                  Or(e), nu(e, r, !1);
                  break;
                case "textarea":
                  Or(e), ou(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ie(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? mn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        mn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = nl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return De(t), null;
      case 6:
        if (e && t.stateNode != null) Sa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = sn(vr.current)), sn(St.current), al(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[wt] = t),
              (o = r.nodeValue !== n) && ((e = Je), e !== null))
            )
              switch (e.tag) {
                case 3:
                  tl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    tl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[wt] = t),
              (t.stateNode = r);
        }
        return De(t), null;
      case 13:
        if (
          (fe(he),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (pe && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            xs(), zn(), (t.flags |= 98560), (o = !1);
          else if (((o = al(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[wt] = t;
            } else
              zn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            De(t), (o = !1);
          } else ct !== null && (Ti(ct), (ct = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (he.current & 1) !== 0
                  ? _e === 0 && (_e = 3)
                  : Ii())),
            t.updateQueue !== null && (t.flags |= 4),
            De(t),
            null);
      case 4:
        return (
          In(),
          Si(e, t),
          e === null && ar(t.stateNode.containerInfo),
          De(t),
          null
        );
      case 10:
        return Xo(t.type._context), De(t), null;
      case 17:
        return Ve(t.type) && ll(), De(t), null;
      case 19:
        if ((fe(he), (o = t.memoizedState), o === null)) return De(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) kr(o, !1);
          else {
            if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ml(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      kr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ae(he, (he.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              we() > Un &&
              ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ml(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !pe)
              )
                return De(t), null;
            } else
              2 * we() - o.renderingStartTime > Un &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = we()),
            (t.sibling = null),
            (n = he.current),
            ae(he, r ? (n & 1) | 2 : n & 1),
            t)
          : (De(t), null);
      case 22:
      case 23:
        return (
          ji(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (qe & 1073741824) !== 0 &&
              (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : De(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function rd(e, t) {
    switch (($o(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && ll(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          In(),
          fe(Be),
          fe(je),
          ti(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return bo(t), null;
      case 13:
        if (
          (fe(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          zn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return fe(he), null;
      case 4:
        return In(), null;
      case 10:
        return Xo(t.type._context), null;
      case 22:
      case 23:
        return ji(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Cl = !1,
    Me = !1,
    ld = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ye(e, t, r);
        }
      else n.current = null;
  }
  function ki(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var ka = !1;
  function od(e, t) {
    if (((jo = Hr), (e = bu()), _o(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              a = -1,
              f = -1,
              g = 0,
              C = 0,
              P = e,
              E = null;
            t: for (;;) {
              for (
                var I;
                P !== n || (l !== 0 && P.nodeType !== 3) || (a = i + l),
                  P !== o || (r !== 0 && P.nodeType !== 3) || (f = i + r),
                  P.nodeType === 3 && (i += P.nodeValue.length),
                  (I = P.firstChild) !== null;

              )
                (E = P), (P = I);
              for (;;) {
                if (P === e) break t;
                if (
                  (E === n && ++g === l && (a = i),
                  E === o && ++C === r && (f = i),
                  (I = P.nextSibling) !== null)
                )
                  break;
                (P = E), (E = P.parentNode);
              }
              P = I;
            }
            n = a === -1 || f === -1 ? null : { start: a, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Io = { focusedElem: e, selectionRange: n }, Hr = !1, M = t;
      M !== null;

    )
      if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (M = e);
      else
        for (; M !== null; ) {
          t = M;
          try {
            var U = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var A = U.memoizedProps,
                      Se = U.memoizedState,
                      m = t.stateNode,
                      d = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? A : ft(t.type, A),
                        Se,
                      );
                    m.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (R) {
            ye(t, t.return, R);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (M = e);
            break;
          }
          M = t.return;
        }
    return (U = ka), (ka = !1), U;
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && ki(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function _l(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ei(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ea(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ea(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[wt],
          delete t[fr],
          delete t[Uo],
          delete t[Vf],
          delete t[$f])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function xa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ca(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || xa(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = nl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (xi(e, t, n), e = e.sibling; e !== null; )
        xi(e, t, n), (e = e.sibling);
  }
  function Ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ci(e, t, n), e = e.sibling; e !== null; )
        Ci(e, t, n), (e = e.sibling);
  }
  var ze = null,
    dt = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null; ) _a(e, t, n), (n = n.sibling);
  }
  function _a(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Ur, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Me || Mn(n, t);
      case 6:
        var r = ze,
          l = dt;
        (ze = null),
          Ht(e, t, n),
          (ze = r),
          (dt = l),
          ze !== null &&
            (dt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (dt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? Fo(e.parentNode, n)
                : e.nodeType === 1 && Fo(e, n),
              er(e))
            : Fo(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = dt),
          (ze = n.stateNode.containerInfo),
          (dt = !0),
          Ht(e, t, n),
          (ze = r),
          (dt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ki(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (
          !Me &&
          (Mn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            ye(n, t, a);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Me = (r = Me) || n.memoizedState !== null), Ht(e, t, n), (Me = r))
          : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function Pa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ld()),
        t.forEach(function (r) {
          var l = hd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            a = i;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (ze = a.stateNode), (dt = !1);
                break e;
              case 3:
                (ze = a.stateNode.containerInfo), (dt = !0);
                break e;
              case 4:
                (ze = a.stateNode.containerInfo), (dt = !0);
                break e;
            }
            a = a.return;
          }
          if (ze === null) throw Error(s(160));
          _a(o, i, l), (ze = null), (dt = !1);
          var f = l.alternate;
          f !== null && (f.return = null), (l.return = null);
        } catch (g) {
          ye(l, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Na(t, e), (t = t.sibling);
  }
  function Na(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((pt(t, e), Et(e), r & 4)) {
          try {
            Er(3, e, e.return), _l(3, e);
          } catch (A) {
            ye(e, e.return, A);
          }
          try {
            Er(5, e, e.return);
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        break;
      case 1:
        pt(t, e), Et(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (
          (pt(t, e),
          Et(e),
          r & 512 && n !== null && Mn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Wn(l, "");
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            a = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              a === "input" && o.type === "radio" && o.name != null && tu(l, o),
                eo(a, i);
              var g = eo(a, o);
              for (i = 0; i < f.length; i += 2) {
                var C = f[i],
                  P = f[i + 1];
                C === "style"
                  ? au(l, P)
                  : C === "dangerouslySetInnerHTML"
                    ? uu(l, P)
                    : C === "children"
                      ? Wn(l, P)
                      : q(l, C, P, g);
              }
              switch (a) {
                case "input":
                  Gl(l, o);
                  break;
                case "textarea":
                  lu(l, o);
                  break;
                case "select":
                  var E = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var I = o.value;
                  I != null
                    ? mn(l, !!o.multiple, I, !1)
                    : E !== !!o.multiple &&
                      (o.defaultValue != null
                        ? mn(l, !!o.multiple, o.defaultValue, !0)
                        : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[fr] = o;
            } catch (A) {
              ye(e, e.return, A);
            }
        }
        break;
      case 6:
        if ((pt(t, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (A) {
            ye(e, e.return, A);
          }
        }
        break;
      case 3:
        if (
          (pt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            er(t.containerInfo);
          } catch (A) {
            ye(e, e.return, A);
          }
        break;
      case 4:
        pt(t, e), Et(e);
        break;
      case 13:
        pt(t, e),
          Et(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ni = we())),
          r & 4 && Pa(e);
        break;
      case 22:
        if (
          ((C = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Me = (g = Me) || C), pt(t, e), (Me = g)) : pt(t, e),
          Et(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !C && (e.mode & 1) !== 0)
          )
            for (M = e, C = e.child; C !== null; ) {
              for (P = M = C; M !== null; ) {
                switch (((E = M), (I = E.child), E.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, E, E.return);
                    break;
                  case 1:
                    Mn(E, E.return);
                    var U = E.stateNode;
                    if (typeof U.componentWillUnmount == "function") {
                      (r = E), (n = E.return);
                      try {
                        (t = r),
                          (U.props = t.memoizedProps),
                          (U.state = t.memoizedState),
                          U.componentWillUnmount();
                      } catch (A) {
                        ye(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    Mn(E, E.return);
                    break;
                  case 22:
                    if (E.memoizedState !== null) {
                      za(P);
                      continue;
                    }
                }
                I !== null ? ((I.return = E), (M = I)) : za(P);
              }
              C = C.sibling;
            }
          e: for (C = null, P = e; ; ) {
            if (P.tag === 5) {
              if (C === null) {
                C = P;
                try {
                  (l = P.stateNode),
                    g
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((a = P.stateNode),
                        (f = P.memoizedProps.style),
                        (i =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (a.style.display = su("display", i)));
                } catch (A) {
                  ye(e, e.return, A);
                }
              }
            } else if (P.tag === 6) {
              if (C === null)
                try {
                  P.stateNode.nodeValue = g ? "" : P.memoizedProps;
                } catch (A) {
                  ye(e, e.return, A);
                }
            } else if (
              ((P.tag !== 22 && P.tag !== 23) ||
                P.memoizedState === null ||
                P === e) &&
              P.child !== null
            ) {
              (P.child.return = P), (P = P.child);
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === e) break e;
              C === P && (C = null), (P = P.return);
            }
            C === P && (C = null),
              (P.sibling.return = P.return),
              (P = P.sibling);
          }
        }
        break;
      case 19:
        pt(t, e), Et(e), r & 4 && Pa(e);
        break;
      case 21:
        break;
      default:
        pt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (xa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
            var o = Ca(e);
            Ci(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              a = Ca(e);
            xi(e, a, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        ye(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function id(e, t, n) {
    (M = e), Ra(e);
  }
  function Ra(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var l = M,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Cl;
        if (!i) {
          var a = l.alternate,
            f = (a !== null && a.memoizedState !== null) || Me;
          a = Cl;
          var g = Me;
          if (((Cl = i), (Me = f) && !g))
            for (M = l; M !== null; )
              (i = M),
                (f = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ta(l)
                  : f !== null
                    ? ((f.return = i), (M = f))
                    : Ta(l);
          for (; o !== null; ) (M = o), Ra(o), (o = o.sibling);
          (M = l), (Cl = a), (Me = g);
        }
        La(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (M = o))
          : La(e);
    }
  }
  function La(e) {
    for (; M !== null; ) {
      var t = M;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || _l(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ft(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && zs(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  zs(t, i, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var g = t.alternate;
                  if (g !== null) {
                    var C = g.memoizedState;
                    if (C !== null) {
                      var P = C.dehydrated;
                      P !== null && er(P);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Me || (t.flags & 512 && Ei(t));
        } catch (E) {
          ye(t, t.return, E);
        }
      }
      if (t === e) {
        M = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function za(e) {
    for (; M !== null; ) {
      var t = M;
      if (t === e) {
        M = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function Ta(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              _l(4, t);
            } catch (f) {
              ye(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                ye(t, l, f);
              }
            }
            var o = t.return;
            try {
              Ei(t);
            } catch (f) {
              ye(t, o, f);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ei(t);
            } catch (f) {
              ye(t, i, f);
            }
        }
      } catch (f) {
        ye(t, t.return, f);
      }
      if (t === e) {
        M = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (M = a);
        break;
      }
      M = t.return;
    }
  }
  var ud = Math.ceil,
    Pl = G.ReactCurrentDispatcher,
    _i = G.ReactCurrentOwner,
    lt = G.ReactCurrentBatchConfig,
    te = 0,
    Ne = null,
    Ee = null,
    Te = 0,
    qe = 0,
    Fn = At(0),
    _e = 0,
    xr = null,
    cn = 0,
    Nl = 0,
    Pi = 0,
    Cr = null,
    We = null,
    Ni = 0,
    Un = 1 / 0,
    Tt = null,
    Rl = !1,
    Ri = null,
    Qt = null,
    Ll = !1,
    Kt = null,
    zl = 0,
    _r = 0,
    Li = null,
    Tl = -1,
    Ol = 0;
  function Ue() {
    return (te & 6) !== 0 ? we() : Tl !== -1 ? Tl : (Tl = we());
  }
  function Yt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (te & 2) !== 0 && Te !== 0
        ? Te & -Te
        : Hf.transition !== null
          ? (Ol === 0 && (Ol = Cu()), Ol)
          : ((e = ue),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ju(e.type))),
            e);
  }
  function ht(e, t, n, r) {
    if (50 < _r) throw ((_r = 0), (Li = null), Error(s(185)));
    Gn(e, n, r),
      ((te & 2) === 0 || e !== Ne) &&
        (e === Ne && ((te & 2) === 0 && (Nl |= n), _e === 4 && Xt(e, Te)),
        He(e, r),
        n === 1 &&
          te === 0 &&
          (t.mode & 1) === 0 &&
          ((Un = we() + 500), il && Vt()));
  }
  function He(e, t) {
    var n = e.callbackNode;
    Wc(e, t);
    var r = Vr(e, e === Ne ? Te : 0);
    if (r === 0)
      n !== null && ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ku(n), t === 1))
        e.tag === 0 ? Wf(ja.bind(null, e)) : gs(ja.bind(null, e)),
          Af(function () {
            (te & 6) === 0 && Vt();
          }),
          (n = null);
      else {
        switch (_u(r)) {
          case 1:
            n = uo;
            break;
          case 4:
            n = Eu;
            break;
          case 16:
            n = Fr;
            break;
          case 536870912:
            n = xu;
            break;
          default:
            n = Fr;
        }
        n = Va(n, Oa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Oa(e, t) {
    if (((Tl = -1), (Ol = 0), (te & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (An() && e.callbackNode !== n) return null;
    var r = Vr(e, e === Ne ? Te : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = jl(e, r);
    else {
      t = r;
      var l = te;
      te |= 2;
      var o = Da();
      (Ne !== e || Te !== t) && ((Tt = null), (Un = we() + 500), dn(e, t));
      do
        try {
          cd();
          break;
        } catch (a) {
          Ia(e, a);
        }
      while (!0);
      Yo(),
        (Pl.current = o),
        (te = l),
        Ee !== null ? (t = 0) : ((Ne = null), (Te = 0), (t = _e));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = so(e)), l !== 0 && ((r = l), (t = zi(e, l)))),
        t === 1)
      )
        throw ((n = xr), dn(e, 0), Xt(e, r), He(e, we()), n);
      if (t === 6) Xt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !sd(l) &&
            ((t = jl(e, r)),
            t === 2 && ((o = so(e)), o !== 0 && ((r = o), (t = zi(e, o)))),
            t === 1))
        )
          throw ((n = xr), dn(e, 0), Xt(e, r), He(e, we()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            pn(e, We, Tt);
            break;
          case 3:
            if (
              (Xt(e, r),
              (r & 130023424) === r && ((t = Ni + 500 - we()), 10 < t))
            ) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ue(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Mo(pn.bind(null, e, We, Tt), t);
              break;
            }
            pn(e, We, Tt);
            break;
          case 4:
            if ((Xt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - st(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = we() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * ud(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Mo(pn.bind(null, e, We, Tt), r);
              break;
            }
            pn(e, We, Tt);
            break;
          case 5:
            pn(e, We, Tt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return He(e, we()), e.callbackNode === n ? Oa.bind(null, e) : null;
  }
  function zi(e, t) {
    var n = Cr;
    return (
      e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
      (e = jl(e, t)),
      e !== 2 && ((t = We), (We = n), t !== null && Ti(t)),
      e
    );
  }
  function Ti(e) {
    We === null ? (We = e) : We.push.apply(We, e);
  }
  function sd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!at(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Xt(e, t) {
    for (
      t &= ~Pi,
        t &= ~Nl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - st(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ja(e) {
    if ((te & 6) !== 0) throw Error(s(327));
    An();
    var t = Vr(e, 0);
    if ((t & 1) === 0) return He(e, we()), null;
    var n = jl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = so(e);
      r !== 0 && ((t = r), (n = zi(e, r)));
    }
    if (n === 1) throw ((n = xr), dn(e, 0), Xt(e, t), He(e, we()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pn(e, We, Tt),
      He(e, we()),
      null
    );
  }
  function Oi(e, t) {
    var n = te;
    te |= 1;
    try {
      return e(t);
    } finally {
      (te = n), te === 0 && ((Un = we() + 500), il && Vt());
    }
  }
  function fn(e) {
    Kt !== null && Kt.tag === 0 && (te & 6) === 0 && An();
    var t = te;
    te |= 1;
    var n = lt.transition,
      r = ue;
    try {
      if (((lt.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (lt.transition = n), (te = t), (te & 6) === 0 && Vt();
    }
  }
  function ji() {
    (qe = Fn.current), fe(Fn);
  }
  function dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), Ee !== null))
      for (n = Ee.return; n !== null; ) {
        var r = n;
        switch (($o(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ll();
            break;
          case 3:
            In(), fe(Be), fe(je), ti();
            break;
          case 5:
            bo(r);
            break;
          case 4:
            In();
            break;
          case 13:
            fe(he);
            break;
          case 19:
            fe(he);
            break;
          case 10:
            Xo(r.type._context);
            break;
          case 22:
          case 23:
            ji();
        }
        n = n.return;
      }
    if (
      ((Ne = e),
      (Ee = e = Gt(e.current, null)),
      (Te = qe = t),
      (_e = 0),
      (xr = null),
      (Pi = Nl = cn = 0),
      (We = Cr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = l), (r.next = i);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Ia(e, t) {
    do {
      var n = Ee;
      try {
        if ((Yo(), (vl.current = Sl), yl)) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          yl = !1;
        }
        if (
          ((an = 0),
          (Pe = Ce = me = null),
          (yr = !1),
          (gr = 0),
          (_i.current = null),
          n === null || n.return === null)
        ) {
          (_e = 1), (xr = t), (Ee = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            a = n,
            f = t;
          if (
            ((t = Te),
            (a.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var g = f,
              C = a,
              P = C.tag;
            if ((C.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var E = C.alternate;
              E
                ? ((C.updateQueue = E.updateQueue),
                  (C.memoizedState = E.memoizedState),
                  (C.lanes = E.lanes))
                : ((C.updateQueue = null), (C.memoizedState = null));
            }
            var I = oa(i);
            if (I !== null) {
              (I.flags &= -257),
                ia(I, i, a, o, t),
                I.mode & 1 && la(o, g, t),
                (t = I),
                (f = g);
              var U = t.updateQueue;
              if (U === null) {
                var A = new Set();
                A.add(f), (t.updateQueue = A);
              } else U.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                la(o, g, t), Ii();
                break e;
              }
              f = Error(s(426));
            }
          } else if (pe && a.mode & 1) {
            var Se = oa(i);
            if (Se !== null) {
              (Se.flags & 65536) === 0 && (Se.flags |= 256),
                ia(Se, i, a, o, t),
                Qo(Dn(f, a));
              break e;
            }
          }
          (o = f = Dn(f, a)),
            _e !== 4 && (_e = 2),
            Cr === null ? (Cr = [o]) : Cr.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = na(o, f, t);
                Ls(o, m);
                break e;
              case 1:
                a = f;
                var d = o.type,
                  y = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof d.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (Qt === null || !Qt.has(y))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var R = ra(o, a, t);
                  Ls(o, R);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Fa(n);
      } catch (B) {
        (t = B), Ee === n && n !== null && (Ee = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Da() {
    var e = Pl.current;
    return (Pl.current = Sl), e === null ? Sl : e;
  }
  function Ii() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
      Ne === null ||
        ((cn & 268435455) === 0 && (Nl & 268435455) === 0) ||
        Xt(Ne, Te);
  }
  function jl(e, t) {
    var n = te;
    te |= 2;
    var r = Da();
    (Ne !== e || Te !== t) && ((Tt = null), dn(e, t));
    do
      try {
        ad();
        break;
      } catch (l) {
        Ia(e, l);
      }
    while (!0);
    if ((Yo(), (te = n), (Pl.current = r), Ee !== null)) throw Error(s(261));
    return (Ne = null), (Te = 0), _e;
  }
  function ad() {
    for (; Ee !== null; ) Ma(Ee);
  }
  function cd() {
    for (; Ee !== null && !Ic(); ) Ma(Ee);
  }
  function Ma(e) {
    var t = Ba(e.alternate, e, qe);
    (e.memoizedProps = e.pendingProps),
      t === null ? Fa(e) : (Ee = t),
      (_i.current = null);
  }
  function Fa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = nd(n, t, qe)), n !== null)) {
          Ee = n;
          return;
        }
      } else {
        if (((n = rd(n, t)), n !== null)) {
          (n.flags &= 32767), (Ee = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (_e = 6), (Ee = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function pn(e, t, n) {
    var r = ue,
      l = lt.transition;
    try {
      (lt.transition = null), (ue = 1), fd(e, t, n, r);
    } finally {
      (lt.transition = l), (ue = r);
    }
    return null;
  }
  function fd(e, t, n, r) {
    do An();
    while (Kt !== null);
    if ((te & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Hc(e, o),
      e === Ne && ((Ee = Ne = null), (Te = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ll ||
        ((Ll = !0),
        Va(Fr, function () {
          return An(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = lt.transition), (lt.transition = null);
      var i = ue;
      ue = 1;
      var a = te;
      (te |= 4),
        (_i.current = null),
        od(e, n),
        Na(n, e),
        Tf(Io),
        (Hr = !!jo),
        (Io = jo = null),
        (e.current = n),
        id(n),
        Dc(),
        (te = a),
        (ue = i),
        (lt.transition = o);
    } else e.current = n;
    if (
      (Ll && ((Ll = !1), (Kt = e), (zl = l)),
      (o = e.pendingLanes),
      o === 0 && (Qt = null),
      Uc(n.stateNode),
      He(e, we()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Rl) throw ((Rl = !1), (e = Ri), (Ri = null), e);
    return (
      (zl & 1) !== 0 && e.tag !== 0 && An(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Li ? _r++ : ((_r = 0), (Li = e))) : (_r = 0),
      Vt(),
      null
    );
  }
  function An() {
    if (Kt !== null) {
      var e = _u(zl),
        t = lt.transition,
        n = ue;
      try {
        if (((lt.transition = null), (ue = 16 > e ? 16 : e), Kt === null))
          var r = !1;
        else {
          if (((e = Kt), (Kt = null), (zl = 0), (te & 6) !== 0))
            throw Error(s(331));
          var l = te;
          for (te |= 4, M = e.current; M !== null; ) {
            var o = M,
              i = o.child;
            if ((M.flags & 16) !== 0) {
              var a = o.deletions;
              if (a !== null) {
                for (var f = 0; f < a.length; f++) {
                  var g = a[f];
                  for (M = g; M !== null; ) {
                    var C = M;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, C, o);
                    }
                    var P = C.child;
                    if (P !== null) (P.return = C), (M = P);
                    else
                      for (; M !== null; ) {
                        C = M;
                        var E = C.sibling,
                          I = C.return;
                        if ((Ea(C), C === g)) {
                          M = null;
                          break;
                        }
                        if (E !== null) {
                          (E.return = I), (M = E);
                          break;
                        }
                        M = I;
                      }
                  }
                }
                var U = o.alternate;
                if (U !== null) {
                  var A = U.child;
                  if (A !== null) {
                    U.child = null;
                    do {
                      var Se = A.sibling;
                      (A.sibling = null), (A = Se);
                    } while (A !== null);
                  }
                }
                M = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null)
              (i.return = o), (M = i);
            else
              e: for (; M !== null; ) {
                if (((o = M), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  (m.return = o.return), (M = m);
                  break e;
                }
                M = o.return;
              }
          }
          var d = e.current;
          for (M = d; M !== null; ) {
            i = M;
            var y = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && y !== null)
              (y.return = i), (M = y);
            else
              e: for (i = d; M !== null; ) {
                if (((a = M), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _l(9, a);
                    }
                  } catch (B) {
                    ye(a, a.return, B);
                  }
                if (a === i) {
                  M = null;
                  break e;
                }
                var R = a.sibling;
                if (R !== null) {
                  (R.return = a.return), (M = R);
                  break e;
                }
                M = a.return;
              }
          }
          if (
            ((te = l),
            Vt(),
            gt && typeof gt.onPostCommitFiberRoot == "function")
          )
            try {
              gt.onPostCommitFiberRoot(Ur, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Ua(e, t, n) {
    (t = Dn(n, t)),
      (t = na(e, t, 1)),
      (e = Wt(e, t, 1)),
      (t = Ue()),
      e !== null && (Gn(e, 1, t), He(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) Ua(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ua(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Qt === null || !Qt.has(r)))
          ) {
            (e = Dn(n, e)),
              (e = ra(t, e, 1)),
              (t = Wt(t, e, 1)),
              (e = Ue()),
              t !== null && (Gn(t, 1, e), He(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function dd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ue()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ne === e &&
        (Te & n) === n &&
        (_e === 4 || (_e === 3 && (Te & 130023424) === Te && 500 > we() - Ni)
          ? dn(e, 0)
          : (Pi |= n)),
      He(e, t);
  }
  function Aa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Br), (Br <<= 1), (Br & 130023424) === 0 && (Br = 4194304)));
    var n = Ue();
    (e = Rt(e, t)), e !== null && (Gn(e, t, n), He(e, n));
  }
  function pd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Aa(e, n);
  }
  function hd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Aa(e, n);
  }
  var Ba;
  Ba = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ($e = !1), td(e, t, n);
        $e = (e.flags & 131072) !== 0;
      }
    else ($e = !1), pe && (t.flags & 1048576) !== 0 && ws(t, sl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        xl(e, t), (e = t.pendingProps);
        var l = Nn(t, je.current);
        jn(t, n), (l = li(null, t, r, e, l, n));
        var o = oi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((o = !0), ol(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Zo(t),
              (l.updater = kl),
              (t.stateNode = l),
              (l._reactInternals = t),
              fi(t, r, e, n),
              (t = mi(null, t, r, !0, o, n)))
            : ((t.tag = 0), pe && o && Vo(t), Fe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (xl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = vd(r)),
            (e = ft(r, e)),
            l)
          ) {
            case 0:
              t = hi(null, t, r, e, n);
              break e;
            case 1:
              t = da(null, t, r, e, n);
              break e;
            case 11:
              t = ua(null, t, r, e, n);
              break e;
            case 14:
              t = sa(null, t, r, ft(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          hi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          da(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((pa(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Rs(e, t),
            hl(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Dn(Error(s(423)), t)), (t = ha(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Dn(Error(s(424)), t)), (t = ha(e, t, r, n, l));
              break e;
            } else
              for (
                Ze = Ut(t.stateNode.containerInfo.firstChild),
                  Je = t,
                  pe = !0,
                  ct = null,
                  n = Ps(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zn(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            Fe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ts(t),
          e === null && Ho(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Do(r, l) ? (i = null) : o !== null && Do(r, o) && (t.flags |= 32),
          fa(e, t),
          Fe(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Ho(t), null;
      case 13:
        return ma(e, t, n);
      case 4:
        return (
          qo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Tn(t, null, r, n)) : Fe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          ua(e, t, r, l, n)
        );
      case 7:
        return Fe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ae(fl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (at(o.value, i)) {
              if (o.children === l.children && !Be.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  i = o.child;
                  for (var f = a.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (o.tag === 1) {
                        (f = Lt(-1, n & -n)), (f.tag = 2);
                        var g = o.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var C = g.pending;
                          C === null
                            ? (f.next = f)
                            : ((f.next = C.next), (C.next = f)),
                            (g.pending = f);
                        }
                      }
                      (o.lanes |= n),
                        (f = o.alternate),
                        f !== null && (f.lanes |= n),
                        Go(o.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(s(341));
                  (i.lanes |= n),
                    (a = i.alternate),
                    a !== null && (a.lanes |= n),
                    Go(i, n, t),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          Fe(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          jn(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Fe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ft(r, t.pendingProps)),
          (l = ft(r.type, l)),
          sa(e, t, r, l, n)
        );
      case 15:
        return aa(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          xl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), ol(t)) : (e = !1),
          jn(t, n),
          ea(t, r, l),
          fi(t, r, l, n),
          mi(null, t, r, !0, e, n)
        );
      case 19:
        return ya(e, t, n);
      case 22:
        return ca(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Va(e, t) {
    return Su(e, t);
  }
  function md(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new md(e, t, n, r);
  }
  function Di(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function vd(e) {
    if (typeof e == "function") return Di(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === vt)) return 11;
      if (e === yt) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Il(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Di(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Le:
          return hn(n.children, l, o, t);
        case Oe:
          (i = 8), (l |= 8);
          break;
        case mt:
          return (
            (e = ot(12, n, t, l | 2)), (e.elementType = mt), (e.lanes = o), e
          );
        case Ye:
          return (e = ot(13, n, t, l)), (e.elementType = Ye), (e.lanes = o), e;
        case ut:
          return (e = ot(19, n, t, l)), (e.elementType = ut), (e.lanes = o), e;
        case ve:
          return Dl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ke:
                i = 10;
                break e;
              case xt:
                i = 9;
                break e;
              case vt:
                i = 11;
                break e;
              case yt:
                i = 14;
                break e;
              case Ae:
                (i = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function hn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function Dl(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = ve),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Mi(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Fi(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function yd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ao(0)),
      (this.expirationTimes = ao(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ao(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ui(e, t, n, r, l, o, i, a, f) {
    return (
      (e = new yd(e, t, n, a, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Zo(o),
      e
    );
  }
  function gd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: xe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function $a(e) {
    if (!e) return Bt;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return vs(e, n, t);
    }
    return t;
  }
  function Wa(e, t, n, r, l, o, i, a, f) {
    return (
      (e = Ui(n, r, !0, e, l, o, i, a, f)),
      (e.context = $a(null)),
      (n = e.current),
      (r = Ue()),
      (l = Yt(n)),
      (o = Lt(r, l)),
      (o.callback = t ?? null),
      Wt(n, o, l),
      (e.current.lanes = l),
      Gn(e, l, r),
      He(e, r),
      e
    );
  }
  function Ml(e, t, n, r) {
    var l = t.current,
      o = Ue(),
      i = Yt(l);
    return (
      (n = $a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Wt(l, t, i)),
      e !== null && (ht(e, l, i, o), pl(e, l, i)),
      i
    );
  }
  function Fl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ha(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ai(e, t) {
    Ha(e, t), (e = e.alternate) && Ha(e, t);
  }
  function wd() {
    return null;
  }
  var Qa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Bi(e) {
    this._internalRoot = e;
  }
  (Ul.prototype.render = Bi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ml(e, t, null, null);
    }),
    (Ul.prototype.unmount = Bi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fn(function () {
            Ml(null, e, null, null);
          }),
            (t[Ct] = null);
        }
      });
  function Ul(e) {
    this._internalRoot = e;
  }
  Ul.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
      Dt.splice(n, 0, e), n === 0 && Tu(e);
    }
  };
  function Vi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Al(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ka() {}
  function Sd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var g = Fl(i);
          o.call(g);
        };
      }
      var i = Wa(t, r, e, 0, null, !1, !1, "", Ka);
      return (
        (e._reactRootContainer = i),
        (e[Ct] = i.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var g = Fl(f);
        a.call(g);
      };
    }
    var f = Ui(e, 0, !1, null, null, !1, !1, "", Ka);
    return (
      (e._reactRootContainer = f),
      (e[Ct] = f.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Ml(t, f, n, r);
      }),
      f
    );
  }
  function Bl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var f = Fl(i);
          a.call(f);
        };
      }
      Ml(t, i, e, l);
    } else i = Sd(n, t, e, l, r);
    return Fl(i);
  }
  (Pu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 &&
            (co(t, n | 1),
            He(t, we()),
            (te & 6) === 0 && ((Un = we() + 500), Vt()));
        }
        break;
      case 13:
        fn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = Ue();
            ht(r, e, 1, l);
          }
        }),
          Ai(e, 1);
    }
  }),
    (fo = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Ue();
          ht(t, e, 134217728, n);
        }
        Ai(e, 134217728);
      }
    }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = Yt(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = Ue();
          ht(n, e, t, r);
        }
        Ai(e, t);
      }
    }),
    (Ru = function () {
      return ue;
    }),
    (Lu = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (ro = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Gl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = rl(r);
                if (!l) throw Error(s(90));
                bi(r), Gl(r, l);
              }
            }
          }
          break;
        case "textarea":
          lu(e, n);
          break;
        case "select":
          (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
      }
    }),
    (pu = Oi),
    (hu = fn);
  var kd = { usingClientEntryPoint: !1, Events: [dr, _n, rl, fu, du, Oi] },
    Pr = {
      findFiberByHostInstance: nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ed = {
      bundleType: Pr.bundleType,
      version: Pr.version,
      rendererPackageName: Pr.rendererPackageName,
      rendererConfig: Pr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: G.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = gu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Pr.findFiberByHostInstance || wd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber)
      try {
        (Ur = Vl.inject(Ed)), (gt = Vl);
      } catch {}
  }
  return (
    (Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd),
    (Qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vi(t)) throw Error(s(200));
      return gd(e, t, null, n);
    }),
    (Qe.createRoot = function (e, t) {
      if (!Vi(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = Qa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ui(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        new Bi(t)
      );
    }),
    (Qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = gu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Qe.flushSync = function (e) {
      return fn(e);
    }),
    (Qe.hydrate = function (e, t, n) {
      if (!Al(t)) throw Error(s(200));
      return Bl(null, e, t, !0, n);
    }),
    (Qe.hydrateRoot = function (e, t, n) {
      if (!Vi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Qa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Wa(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Ct] = t.current),
        ar(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ul(t);
    }),
    (Qe.render = function (e, t, n) {
      if (!Al(t)) throw Error(s(200));
      return Bl(null, e, t, !1, n);
    }),
    (Qe.unmountComponentAtNode = function (e) {
      if (!Al(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (fn(function () {
            Bl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ct] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Qe.unstable_batchedUpdates = Oi),
    (Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Al(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Bl(e, t, n, !1, r);
    }),
    (Qe.version = "18.3.1-next-f1338f8080-20240426"),
    Qe
  );
}
var ec;
function dc() {
  if (ec) return Hi.exports;
  ec = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), (Hi.exports = Td()), Hi.exports;
}
var tc;
function Od() {
  if (tc) return $l;
  tc = 1;
  var u = dc();
  return ($l.createRoot = u.createRoot), ($l.hydrateRoot = u.hydrateRoot), $l;
}
var jd = Od();
const Id = cc(jd),
  Dd = "modulepreload",
  Md = function (u) {
    return "/" + u;
  },
  nc = {},
  it = function (c, s, p) {
    let v = Promise.resolve();
    if (s && s.length > 0) {
      let S = function (L) {
        return Promise.all(
          L.map((T) =>
            Promise.resolve(T).then(
              (N) => ({ status: "fulfilled", value: N }),
              (N) => ({ status: "rejected", reason: N }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const _ = document.querySelector("meta[property=csp-nonce]"),
        k =
          (_ == null ? void 0 : _.nonce) ||
          (_ == null ? void 0 : _.getAttribute("nonce"));
      v = S(
        s.map((L) => {
          if (((L = Md(L)), L in nc)) return;
          nc[L] = !0;
          const T = L.endsWith(".css"),
            N = T ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${L}"]${N}`)) return;
          const D = document.createElement("link");
          if (
            ((D.rel = T ? "stylesheet" : Dd),
            T || (D.as = "script"),
            (D.crossOrigin = ""),
            (D.href = L),
            k && D.setAttribute("nonce", k),
            document.head.appendChild(D),
            T)
          )
            return new Promise((b, K) => {
              D.addEventListener("load", b),
                D.addEventListener("error", () =>
                  K(new Error(`Unable to preload CSS for ${L}`)),
                );
            });
        }),
      );
    }
    function w(S) {
      const _ = new Event("vite:preloadError", { cancelable: !0 });
      if (((_.payload = S), window.dispatchEvent(_), !_.defaultPrevented))
        throw S;
    }
    return v.then((S) => {
      for (const _ of S || []) _.status === "rejected" && w(_.reason);
      return c().catch(w);
    });
  };
dc();
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rr() {
  return (
    (Rr = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var c = 1; c < arguments.length; c++) {
            var s = arguments[c];
            for (var p in s)
              Object.prototype.hasOwnProperty.call(s, p) && (u[p] = s[p]);
          }
          return u;
        }),
    Rr.apply(this, arguments)
  );
}
var Zt;
(function (u) {
  (u.Pop = "POP"), (u.Push = "PUSH"), (u.Replace = "REPLACE");
})(Zt || (Zt = {}));
const rc = "popstate";
function Fd(u) {
  u === void 0 && (u = {});
  function c(p, v) {
    let { pathname: w, search: S, hash: _ } = p.location;
    return Xi(
      "",
      { pathname: w, search: S, hash: _ },
      (v.state && v.state.usr) || null,
      (v.state && v.state.key) || "default",
    );
  }
  function s(p, v) {
    return typeof v == "string" ? v : Wl(v);
  }
  return Ad(c, s, null, u);
}
function ge(u, c) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(c);
}
function pc(u, c) {
  if (!u) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Ud() {
  return Math.random().toString(36).substr(2, 8);
}
function lc(u, c) {
  return { usr: u.state, key: u.key, idx: c };
}
function Xi(u, c, s, p) {
  return (
    s === void 0 && (s = null),
    Rr(
      { pathname: typeof u == "string" ? u : u.pathname, search: "", hash: "" },
      typeof c == "string" ? Vn(c) : c,
      { state: s, key: (c && c.key) || p || Ud() },
    )
  );
}
function Wl(u) {
  let { pathname: c = "/", search: s = "", hash: p = "" } = u;
  return (
    s && s !== "?" && (c += s.charAt(0) === "?" ? s : "?" + s),
    p && p !== "#" && (c += p.charAt(0) === "#" ? p : "#" + p),
    c
  );
}
function Vn(u) {
  let c = {};
  if (u) {
    let s = u.indexOf("#");
    s >= 0 && ((c.hash = u.substr(s)), (u = u.substr(0, s)));
    let p = u.indexOf("?");
    p >= 0 && ((c.search = u.substr(p)), (u = u.substr(0, p))),
      u && (c.pathname = u);
  }
  return c;
}
function Ad(u, c, s, p) {
  p === void 0 && (p = {});
  let { window: v = document.defaultView, v5Compat: w = !1 } = p,
    S = v.history,
    _ = Zt.Pop,
    k = null,
    L = T();
  L == null && ((L = 0), S.replaceState(Rr({}, S.state, { idx: L }), ""));
  function T() {
    return (S.state || { idx: null }).idx;
  }
  function N() {
    _ = Zt.Pop;
    let O = T(),
      oe = O == null ? null : O - L;
    (L = O), k && k({ action: _, location: V.location, delta: oe });
  }
  function D(O, oe) {
    _ = Zt.Push;
    let X = Xi(V.location, O, oe);
    L = T() + 1;
    let q = lc(X, L),
      G = V.createHref(X);
    try {
      S.pushState(q, "", G);
    } catch (ke) {
      if (ke instanceof DOMException && ke.name === "DataCloneError") throw ke;
      v.location.assign(G);
    }
    w && k && k({ action: _, location: V.location, delta: 1 });
  }
  function b(O, oe) {
    _ = Zt.Replace;
    let X = Xi(V.location, O, oe);
    L = T();
    let q = lc(X, L),
      G = V.createHref(X);
    S.replaceState(q, "", G),
      w && k && k({ action: _, location: V.location, delta: 0 });
  }
  function K(O) {
    let oe = v.location.origin !== "null" ? v.location.origin : v.location.href,
      X = typeof O == "string" ? O : Wl(O);
    return (
      (X = X.replace(/ $/, "%20")),
      ge(
        oe,
        "No window.location.(origin|href) available to create URL for href: " +
          X,
      ),
      new URL(X, oe)
    );
  }
  let V = {
    get action() {
      return _;
    },
    get location() {
      return u(v, S);
    },
    listen(O) {
      if (k) throw new Error("A history only accepts one active listener");
      return (
        v.addEventListener(rc, N),
        (k = O),
        () => {
          v.removeEventListener(rc, N), (k = null);
        }
      );
    },
    createHref(O) {
      return c(v, O);
    },
    createURL: K,
    encodeLocation(O) {
      let oe = K(O);
      return { pathname: oe.pathname, search: oe.search, hash: oe.hash };
    },
    push: D,
    replace: b,
    go(O) {
      return S.go(O);
    },
  };
  return V;
}
var oc;
(function (u) {
  (u.data = "data"),
    (u.deferred = "deferred"),
    (u.redirect = "redirect"),
    (u.error = "error");
})(oc || (oc = {}));
function Bd(u, c, s) {
  return s === void 0 && (s = "/"), Vd(u, c, s);
}
function Vd(u, c, s, p) {
  let v = typeof c == "string" ? Vn(c) : c,
    w = Bn(v.pathname || "/", s);
  if (w == null) return null;
  let S = hc(u);
  $d(S);
  let _ = null;
  for (let k = 0; _ == null && k < S.length; ++k) {
    let L = bd(w);
    _ = Zd(S[k], L);
  }
  return _;
}
function hc(u, c, s, p) {
  c === void 0 && (c = []), s === void 0 && (s = []), p === void 0 && (p = "");
  let v = (w, S, _) => {
    let k = {
      relativePath: _ === void 0 ? w.path || "" : _,
      caseSensitive: w.caseSensitive === !0,
      childrenIndex: S,
      route: w,
    };
    k.relativePath.startsWith("/") &&
      (ge(
        k.relativePath.startsWith(p),
        'Absolute route path "' +
          k.relativePath +
          '" nested under path ' +
          ('"' + p + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (k.relativePath = k.relativePath.slice(p.length)));
    let L = qt([p, k.relativePath]),
      T = s.concat(k);
    w.children &&
      w.children.length > 0 &&
      (ge(
        w.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + L + '".'),
      ),
      hc(w.children, c, T, L)),
      !(w.path == null && !w.index) &&
        c.push({ path: L, score: Gd(L, w.index), routesMeta: T });
  };
  return (
    u.forEach((w, S) => {
      var _;
      if (w.path === "" || !((_ = w.path) != null && _.includes("?"))) v(w, S);
      else for (let k of mc(w.path)) v(w, S, k);
    }),
    c
  );
}
function mc(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [s, ...p] = c,
    v = s.endsWith("?"),
    w = s.replace(/\?$/, "");
  if (p.length === 0) return v ? [w, ""] : [w];
  let S = mc(p.join("/")),
    _ = [];
  return (
    _.push(...S.map((k) => (k === "" ? w : [w, k].join("/")))),
    v && _.push(...S),
    _.map((k) => (u.startsWith("/") && k === "" ? "/" : k))
  );
}
function $d(u) {
  u.sort((c, s) =>
    c.score !== s.score
      ? s.score - c.score
      : Jd(
          c.routesMeta.map((p) => p.childrenIndex),
          s.routesMeta.map((p) => p.childrenIndex),
        ),
  );
}
const Wd = /^:[\w-]+$/,
  Hd = 3,
  Qd = 2,
  Kd = 1,
  Yd = 10,
  Xd = -2,
  ic = (u) => u === "*";
function Gd(u, c) {
  let s = u.split("/"),
    p = s.length;
  return (
    s.some(ic) && (p += Xd),
    c && (p += Qd),
    s
      .filter((v) => !ic(v))
      .reduce((v, w) => v + (Wd.test(w) ? Hd : w === "" ? Kd : Yd), p)
  );
}
function Jd(u, c) {
  return u.length === c.length && u.slice(0, -1).every((p, v) => p === c[v])
    ? u[u.length - 1] - c[c.length - 1]
    : 0;
}
function Zd(u, c, s) {
  let { routesMeta: p } = u,
    v = {},
    w = "/",
    S = [];
  for (let _ = 0; _ < p.length; ++_) {
    let k = p[_],
      L = _ === p.length - 1,
      T = w === "/" ? c : c.slice(w.length) || "/",
      N = Gi(
        { path: k.relativePath, caseSensitive: k.caseSensitive, end: L },
        T,
      ),
      D = k.route;
    if (!N) return null;
    Object.assign(v, N.params),
      S.push({
        params: v,
        pathname: qt([w, N.pathname]),
        pathnameBase: rp(qt([w, N.pathnameBase])),
        route: D,
      }),
      N.pathnameBase !== "/" && (w = qt([w, N.pathnameBase]));
  }
  return S;
}
function Gi(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [s, p] = qd(u.path, u.caseSensitive, u.end),
    v = c.match(s);
  if (!v) return null;
  let w = v[0],
    S = w.replace(/(.)\/+$/, "$1"),
    _ = v.slice(1);
  return {
    params: p.reduce((L, T, N) => {
      let { paramName: D, isOptional: b } = T;
      if (D === "*") {
        let V = _[N] || "";
        S = w.slice(0, w.length - V.length).replace(/(.)\/+$/, "$1");
      }
      const K = _[N];
      return (
        b && !K ? (L[D] = void 0) : (L[D] = (K || "").replace(/%2F/g, "/")), L
      );
    }, {}),
    pathname: w,
    pathnameBase: S,
    pattern: u,
  };
}
function qd(u, c, s) {
  c === void 0 && (c = !1),
    s === void 0 && (s = !0),
    pc(
      u === "*" || !u.endsWith("*") || u.endsWith("/*"),
      'Route path "' +
        u +
        '" will be treated as if it were ' +
        ('"' + u.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + u.replace(/\*$/, "/*") + '".'),
    );
  let p = [],
    v =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, _, k) => (
            p.push({ paramName: _, isOptional: k != null }),
            k ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    u.endsWith("*")
      ? (p.push({ paramName: "*" }),
        (v += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (v += "\\/*$")
        : u !== "" && u !== "/" && (v += "(?:(?=\\/|$))"),
    [new RegExp(v, c ? void 0 : "i"), p]
  );
}
function bd(u) {
  try {
    return u
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      pc(
        !1,
        'The URL path "' +
          u +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + c + ")."),
      ),
      u
    );
  }
}
function Bn(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase())) return null;
  let s = c.endsWith("/") ? c.length - 1 : c.length,
    p = u.charAt(s);
  return p && p !== "/" ? null : u.slice(s) || "/";
}
function ep(u, c) {
  c === void 0 && (c = "/");
  let {
    pathname: s,
    search: p = "",
    hash: v = "",
  } = typeof u == "string" ? Vn(u) : u;
  return {
    pathname: s ? (s.startsWith("/") ? s : tp(s, c)) : c,
    search: lp(p),
    hash: op(v),
  };
}
function tp(u, c) {
  let s = c.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((v) => {
      v === ".." ? s.length > 1 && s.pop() : v !== "." && s.push(v);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Yi(u, c, s, p) {
  return (
    "Cannot include a '" +
    u +
    "' character in a manually specified " +
    ("`to." +
      c +
      "` field [" +
      JSON.stringify(p) +
      "].  Please separate it out to the ") +
    ("`to." + s + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function np(u) {
  return u.filter(
    (c, s) => s === 0 || (c.route.path && c.route.path.length > 0),
  );
}
function vc(u, c) {
  let s = np(u);
  return c
    ? s.map((p, v) => (v === s.length - 1 ? p.pathname : p.pathnameBase))
    : s.map((p) => p.pathnameBase);
}
function yc(u, c, s, p) {
  p === void 0 && (p = !1);
  let v;
  typeof u == "string"
    ? (v = Vn(u))
    : ((v = Rr({}, u)),
      ge(
        !v.pathname || !v.pathname.includes("?"),
        Yi("?", "pathname", "search", v),
      ),
      ge(
        !v.pathname || !v.pathname.includes("#"),
        Yi("#", "pathname", "hash", v),
      ),
      ge(!v.search || !v.search.includes("#"), Yi("#", "search", "hash", v)));
  let w = u === "" || v.pathname === "",
    S = w ? "/" : v.pathname,
    _;
  if (S == null) _ = s;
  else {
    let N = c.length - 1;
    if (!p && S.startsWith("..")) {
      let D = S.split("/");
      for (; D[0] === ".."; ) D.shift(), (N -= 1);
      v.pathname = D.join("/");
    }
    _ = N >= 0 ? c[N] : "/";
  }
  let k = ep(v, _),
    L = S && S !== "/" && S.endsWith("/"),
    T = (w || S === ".") && s.endsWith("/");
  return !k.pathname.endsWith("/") && (L || T) && (k.pathname += "/"), k;
}
const qt = (u) => u.join("/").replace(/\/\/+/g, "/"),
  rp = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  lp = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  op = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function ip(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
const gc = ["post", "put", "patch", "delete"];
new Set(gc);
const up = ["get", ...gc];
new Set(up);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Lr() {
  return (
    (Lr = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var c = 1; c < arguments.length; c++) {
            var s = arguments[c];
            for (var p in s)
              Object.prototype.hasOwnProperty.call(s, p) && (u[p] = s[p]);
          }
          return u;
        }),
    Lr.apply(this, arguments)
  );
}
const Ql = z.createContext(null),
  wc = z.createContext(null),
  bt = z.createContext(null),
  Kl = z.createContext(null),
  en = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Sc = z.createContext(null);
function sp(u, c) {
  let { relative: s } = c === void 0 ? {} : c;
  zr() || ge(!1);
  let { basename: p, navigator: v } = z.useContext(bt),
    { hash: w, pathname: S, search: _ } = Yl(u, { relative: s }),
    k = S;
  return (
    p !== "/" && (k = S === "/" ? p : qt([p, S])),
    v.createHref({ pathname: k, search: _, hash: w })
  );
}
function zr() {
  return z.useContext(Kl) != null;
}
function Tr() {
  return zr() || ge(!1), z.useContext(Kl).location;
}
function kc(u) {
  z.useContext(bt).static || z.useLayoutEffect(u);
}
function ap() {
  let { isDataRoute: u } = z.useContext(en);
  return u ? xp() : cp();
}
function cp() {
  zr() || ge(!1);
  let u = z.useContext(Ql),
    { basename: c, future: s, navigator: p } = z.useContext(bt),
    { matches: v } = z.useContext(en),
    { pathname: w } = Tr(),
    S = JSON.stringify(vc(v, s.v7_relativeSplatPath)),
    _ = z.useRef(!1);
  return (
    kc(() => {
      _.current = !0;
    }),
    z.useCallback(
      function (L, T) {
        if ((T === void 0 && (T = {}), !_.current)) return;
        if (typeof L == "number") {
          p.go(L);
          return;
        }
        let N = yc(L, JSON.parse(S), w, T.relative === "path");
        u == null &&
          c !== "/" &&
          (N.pathname = N.pathname === "/" ? c : qt([c, N.pathname])),
          (T.replace ? p.replace : p.push)(N, T.state, T);
      },
      [c, p, S, w, u],
    )
  );
}
const Ec = z.createContext(null);
function Hp() {
  return z.useContext(Ec);
}
function fp(u) {
  let c = z.useContext(en).outlet;
  return c && z.createElement(Ec.Provider, { value: u }, c);
}
function Yl(u, c) {
  let { relative: s } = c === void 0 ? {} : c,
    { future: p } = z.useContext(bt),
    { matches: v } = z.useContext(en),
    { pathname: w } = Tr(),
    S = JSON.stringify(vc(v, p.v7_relativeSplatPath));
  return z.useMemo(() => yc(u, JSON.parse(S), w, s === "path"), [u, S, w, s]);
}
function dp(u, c) {
  return pp(u, c);
}
function pp(u, c, s, p) {
  zr() || ge(!1);
  let { navigator: v } = z.useContext(bt),
    { matches: w } = z.useContext(en),
    S = w[w.length - 1],
    _ = S ? S.params : {};
  S && S.pathname;
  let k = S ? S.pathnameBase : "/";
  S && S.route;
  let L = Tr(),
    T;
  if (c) {
    var N;
    let O = typeof c == "string" ? Vn(c) : c;
    k === "/" || ((N = O.pathname) != null && N.startsWith(k)) || ge(!1),
      (T = O);
  } else T = L;
  let D = T.pathname || "/",
    b = D;
  if (k !== "/") {
    let O = k.replace(/^\//, "").split("/");
    b = "/" + D.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let K = Bd(u, { pathname: b }),
    V = gp(
      K &&
        K.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, _, O.params),
            pathname: qt([
              k,
              v.encodeLocation
                ? v.encodeLocation(O.pathname).pathname
                : O.pathname,
            ]),
            pathnameBase:
              O.pathnameBase === "/"
                ? k
                : qt([
                    k,
                    v.encodeLocation
                      ? v.encodeLocation(O.pathnameBase).pathname
                      : O.pathnameBase,
                  ]),
          }),
        ),
      w,
      s,
      p,
    );
  return c && V
    ? z.createElement(
        Kl.Provider,
        {
          value: {
            location: Lr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              T,
            ),
            navigationType: Zt.Pop,
          },
        },
        V,
      )
    : V;
}
function hp() {
  let u = Ep(),
    c = ip(u)
      ? u.status + " " + u.statusText
      : u instanceof Error
        ? u.message
        : JSON.stringify(u),
    s = u instanceof Error ? u.stack : null,
    v = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return z.createElement(
    z.Fragment,
    null,
    z.createElement("h2", null, "Unexpected Application Error!"),
    z.createElement("h3", { style: { fontStyle: "italic" } }, c),
    s ? z.createElement("pre", { style: v }, s) : null,
    null,
  );
}
const mp = z.createElement(hp, null);
class vp extends z.Component {
  constructor(c) {
    super(c),
      (this.state = {
        location: c.location,
        revalidation: c.revalidation,
        error: c.error,
      });
  }
  static getDerivedStateFromError(c) {
    return { error: c };
  }
  static getDerivedStateFromProps(c, s) {
    return s.location !== c.location ||
      (s.revalidation !== "idle" && c.revalidation === "idle")
      ? { error: c.error, location: c.location, revalidation: c.revalidation }
      : {
          error: c.error !== void 0 ? c.error : s.error,
          location: s.location,
          revalidation: c.revalidation || s.revalidation,
        };
  }
  componentDidCatch(c, s) {
    console.error(
      "React Router caught the following error during render",
      c,
      s,
    );
  }
  render() {
    return this.state.error !== void 0
      ? z.createElement(
          en.Provider,
          { value: this.props.routeContext },
          z.createElement(Sc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function yp(u) {
  let { routeContext: c, match: s, children: p } = u,
    v = z.useContext(Ql);
  return (
    v &&
      v.static &&
      v.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (v.staticContext._deepestRenderedBoundaryId = s.route.id),
    z.createElement(en.Provider, { value: c }, p)
  );
}
function gp(u, c, s, p) {
  var v;
  if (
    (c === void 0 && (c = []),
    s === void 0 && (s = null),
    p === void 0 && (p = null),
    u == null)
  ) {
    var w;
    if (!s) return null;
    if (s.errors) u = s.matches;
    else if (
      (w = p) != null &&
      w.v7_partialHydration &&
      c.length === 0 &&
      !s.initialized &&
      s.matches.length > 0
    )
      u = s.matches;
    else return null;
  }
  let S = u,
    _ = (v = s) == null ? void 0 : v.errors;
  if (_ != null) {
    let T = S.findIndex(
      (N) => N.route.id && (_ == null ? void 0 : _[N.route.id]) !== void 0,
    );
    T >= 0 || ge(!1), (S = S.slice(0, Math.min(S.length, T + 1)));
  }
  let k = !1,
    L = -1;
  if (s && p && p.v7_partialHydration)
    for (let T = 0; T < S.length; T++) {
      let N = S[T];
      if (
        ((N.route.HydrateFallback || N.route.hydrateFallbackElement) && (L = T),
        N.route.id)
      ) {
        let { loaderData: D, errors: b } = s,
          K =
            N.route.loader &&
            D[N.route.id] === void 0 &&
            (!b || b[N.route.id] === void 0);
        if (N.route.lazy || K) {
          (k = !0), L >= 0 ? (S = S.slice(0, L + 1)) : (S = [S[0]]);
          break;
        }
      }
    }
  return S.reduceRight((T, N, D) => {
    let b,
      K = !1,
      V = null,
      O = null;
    s &&
      ((b = _ && N.route.id ? _[N.route.id] : void 0),
      (V = N.route.errorElement || mp),
      k &&
        (L < 0 && D === 0
          ? (Cp("route-fallback"), (K = !0), (O = null))
          : L === D &&
            ((K = !0), (O = N.route.hydrateFallbackElement || null))));
    let oe = c.concat(S.slice(0, D + 1)),
      X = () => {
        let q;
        return (
          b
            ? (q = V)
            : K
              ? (q = O)
              : N.route.Component
                ? (q = z.createElement(N.route.Component, null))
                : N.route.element
                  ? (q = N.route.element)
                  : (q = T),
          z.createElement(yp, {
            match: N,
            routeContext: { outlet: T, matches: oe, isDataRoute: s != null },
            children: q,
          })
        );
      };
    return s && (N.route.ErrorBoundary || N.route.errorElement || D === 0)
      ? z.createElement(vp, {
          location: s.location,
          revalidation: s.revalidation,
          component: V,
          error: b,
          children: X(),
          routeContext: { outlet: null, matches: oe, isDataRoute: !0 },
        })
      : X();
  }, null);
}
var xc = (function (u) {
    return (
      (u.UseBlocker = "useBlocker"),
      (u.UseRevalidator = "useRevalidator"),
      (u.UseNavigateStable = "useNavigate"),
      u
    );
  })(xc || {}),
  Cc = (function (u) {
    return (
      (u.UseBlocker = "useBlocker"),
      (u.UseLoaderData = "useLoaderData"),
      (u.UseActionData = "useActionData"),
      (u.UseRouteError = "useRouteError"),
      (u.UseNavigation = "useNavigation"),
      (u.UseRouteLoaderData = "useRouteLoaderData"),
      (u.UseMatches = "useMatches"),
      (u.UseRevalidator = "useRevalidator"),
      (u.UseNavigateStable = "useNavigate"),
      (u.UseRouteId = "useRouteId"),
      u
    );
  })(Cc || {});
function wp(u) {
  let c = z.useContext(Ql);
  return c || ge(!1), c;
}
function Sp(u) {
  let c = z.useContext(wc);
  return c || ge(!1), c;
}
function kp(u) {
  let c = z.useContext(en);
  return c || ge(!1), c;
}
function _c(u) {
  let c = kp(),
    s = c.matches[c.matches.length - 1];
  return s.route.id || ge(!1), s.route.id;
}
function Ep() {
  var u;
  let c = z.useContext(Sc),
    s = Sp(),
    p = _c();
  return c !== void 0 ? c : (u = s.errors) == null ? void 0 : u[p];
}
function xp() {
  let { router: u } = wp(xc.UseNavigateStable),
    c = _c(Cc.UseNavigateStable),
    s = z.useRef(!1);
  return (
    kc(() => {
      s.current = !0;
    }),
    z.useCallback(
      function (v, w) {
        w === void 0 && (w = {}),
          s.current &&
            (typeof v == "number"
              ? u.navigate(v)
              : u.navigate(v, Lr({ fromRouteId: c }, w)));
      },
      [u, c],
    )
  );
}
const uc = {};
function Cp(u, c, s) {
  uc[u] || (uc[u] = !0);
}
function Qp(u) {
  return fp(u.context);
}
function be(u) {
  ge(!1);
}
function _p(u) {
  let {
    basename: c = "/",
    children: s = null,
    location: p,
    navigationType: v = Zt.Pop,
    navigator: w,
    static: S = !1,
    future: _,
  } = u;
  zr() && ge(!1);
  let k = c.replace(/^\/*/, "/"),
    L = z.useMemo(
      () => ({
        basename: k,
        navigator: w,
        static: S,
        future: Lr({ v7_relativeSplatPath: !1 }, _),
      }),
      [k, _, w, S],
    );
  typeof p == "string" && (p = Vn(p));
  let {
      pathname: T = "/",
      search: N = "",
      hash: D = "",
      state: b = null,
      key: K = "default",
    } = p,
    V = z.useMemo(() => {
      let O = Bn(T, k);
      return O == null
        ? null
        : {
            location: { pathname: O, search: N, hash: D, state: b, key: K },
            navigationType: v,
          };
    }, [k, T, N, D, b, K, v]);
  return V == null
    ? null
    : z.createElement(
        bt.Provider,
        { value: L },
        z.createElement(Kl.Provider, { children: s, value: V }),
      );
}
function Pp(u) {
  let { children: c, location: s } = u;
  return dp(Ji(c), s);
}
new Promise(() => {});
function Ji(u, c) {
  c === void 0 && (c = []);
  let s = [];
  return (
    z.Children.forEach(u, (p, v) => {
      if (!z.isValidElement(p)) return;
      let w = [...c, v];
      if (p.type === z.Fragment) {
        s.push.apply(s, Ji(p.props.children, w));
        return;
      }
      p.type !== be && ge(!1), !p.props.index || !p.props.children || ge(!1);
      let S = {
        id: p.props.id || w.join("-"),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary:
          p.props.ErrorBoundary != null || p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (S.children = Ji(p.props.children, w)), s.push(S);
    }),
    s
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hl() {
  return (
    (Hl = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var c = 1; c < arguments.length; c++) {
            var s = arguments[c];
            for (var p in s)
              Object.prototype.hasOwnProperty.call(s, p) && (u[p] = s[p]);
          }
          return u;
        }),
    Hl.apply(this, arguments)
  );
}
function Pc(u, c) {
  if (u == null) return {};
  var s = {},
    p = Object.keys(u),
    v,
    w;
  for (w = 0; w < p.length; w++)
    (v = p[w]), !(c.indexOf(v) >= 0) && (s[v] = u[v]);
  return s;
}
function Np(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Rp(u, c) {
  return u.button === 0 && (!c || c === "_self") && !Np(u);
}
const Lp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  zp = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Tp = "6";
try {
  window.__reactRouterVersion = Tp;
} catch {}
const Op = z.createContext({ isTransitioning: !1 }),
  jp = "startTransition",
  sc = Rd[jp];
function Ip(u) {
  let { basename: c, children: s, future: p, window: v } = u,
    w = z.useRef();
  w.current == null && (w.current = Fd({ window: v, v5Compat: !0 }));
  let S = w.current,
    [_, k] = z.useState({ action: S.action, location: S.location }),
    { v7_startTransition: L } = p || {},
    T = z.useCallback(
      (N) => {
        L && sc ? sc(() => k(N)) : k(N);
      },
      [k, L],
    );
  return (
    z.useLayoutEffect(() => S.listen(T), [S, T]),
    z.createElement(_p, {
      basename: c,
      children: s,
      location: _.location,
      navigationType: _.action,
      navigator: S,
      future: p,
    })
  );
}
const Dp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Mp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fp = z.forwardRef(function (c, s) {
    let {
        onClick: p,
        relative: v,
        reloadDocument: w,
        replace: S,
        state: _,
        target: k,
        to: L,
        preventScrollReset: T,
        viewTransition: N,
      } = c,
      D = Pc(c, Lp),
      { basename: b } = z.useContext(bt),
      K,
      V = !1;
    if (typeof L == "string" && Mp.test(L) && ((K = L), Dp))
      try {
        let q = new URL(window.location.href),
          G = L.startsWith("//") ? new URL(q.protocol + L) : new URL(L),
          ke = Bn(G.pathname, b);
        G.origin === q.origin && ke != null
          ? (L = ke + G.search + G.hash)
          : (V = !0);
      } catch {}
    let O = sp(L, { relative: v }),
      oe = Ap(L, {
        replace: S,
        state: _,
        target: k,
        preventScrollReset: T,
        relative: v,
        viewTransition: N,
      });
    function X(q) {
      p && p(q), q.defaultPrevented || oe(q);
    }
    return z.createElement(
      "a",
      Hl({}, D, { href: K || O, onClick: V || w ? p : X, ref: s, target: k }),
    );
  }),
  Kp = z.forwardRef(function (c, s) {
    let {
        "aria-current": p = "page",
        caseSensitive: v = !1,
        className: w = "",
        end: S = !1,
        style: _,
        to: k,
        viewTransition: L,
        children: T,
      } = c,
      N = Pc(c, zp),
      D = Yl(k, { relative: N.relative }),
      b = Tr(),
      K = z.useContext(wc),
      { navigator: V, basename: O } = z.useContext(bt),
      oe = K != null && Bp(D) && L === !0,
      X = V.encodeLocation ? V.encodeLocation(D).pathname : D.pathname,
      q = b.pathname,
      G =
        K && K.navigation && K.navigation.location
          ? K.navigation.location.pathname
          : null;
    v ||
      ((q = q.toLowerCase()),
      (G = G ? G.toLowerCase() : null),
      (X = X.toLowerCase())),
      G && O && (G = Bn(G, O) || G);
    const ke = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
    let xe = q === X || (!S && q.startsWith(X) && q.charAt(ke) === "/"),
      Le =
        G != null &&
        (G === X || (!S && G.startsWith(X) && G.charAt(X.length) === "/")),
      Oe = { isActive: xe, isPending: Le, isTransitioning: oe },
      mt = xe ? p : void 0,
      Ke;
    typeof w == "function"
      ? (Ke = w(Oe))
      : (Ke = [
          w,
          xe ? "active" : null,
          Le ? "pending" : null,
          oe ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let xt = typeof _ == "function" ? _(Oe) : _;
    return z.createElement(
      Fp,
      Hl({}, N, {
        "aria-current": mt,
        className: Ke,
        ref: s,
        style: xt,
        to: k,
        viewTransition: L,
      }),
      typeof T == "function" ? T(Oe) : T,
    );
  });
var Zi;
(function (u) {
  (u.UseScrollRestoration = "useScrollRestoration"),
    (u.UseSubmit = "useSubmit"),
    (u.UseSubmitFetcher = "useSubmitFetcher"),
    (u.UseFetcher = "useFetcher"),
    (u.useViewTransitionState = "useViewTransitionState");
})(Zi || (Zi = {}));
var ac;
(function (u) {
  (u.UseFetcher = "useFetcher"),
    (u.UseFetchers = "useFetchers"),
    (u.UseScrollRestoration = "useScrollRestoration");
})(ac || (ac = {}));
function Up(u) {
  let c = z.useContext(Ql);
  return c || ge(!1), c;
}
function Ap(u, c) {
  let {
      target: s,
      replace: p,
      state: v,
      preventScrollReset: w,
      relative: S,
      viewTransition: _,
    } = c === void 0 ? {} : c,
    k = ap(),
    L = Tr(),
    T = Yl(u, { relative: S });
  return z.useCallback(
    (N) => {
      if (Rp(N, s)) {
        N.preventDefault();
        let D = p !== void 0 ? p : Wl(L) === Wl(T);
        k(u, {
          replace: D,
          state: v,
          preventScrollReset: w,
          relative: S,
          viewTransition: _,
        });
      }
    },
    [L, k, T, p, v, s, u, w, S, _],
  );
}
function Bp(u, c) {
  c === void 0 && (c = {});
  let s = z.useContext(Op);
  s == null && ge(!1);
  let { basename: p } = Up(Zi.useViewTransitionState),
    v = Yl(u, { relative: c.relative });
  if (!s.isTransitioning) return !1;
  let w = Bn(s.currentLocation.pathname, p) || s.currentLocation.pathname,
    S = Bn(s.nextLocation.pathname, p) || s.nextLocation.pathname;
  return Gi(v.pathname, S) != null || Gi(v.pathname, w) != null;
}
const Vp = ({ text: u = "Loading... Please wait." }) =>
  ee.jsx("div", {
    className: "flex items-center justify-center min-h-screen bg-gray-100",
    children: ee.jsxs("div", {
      className: "flex flex-col gap-4 items-center",
      children: [
        ee.jsx("div", {
          className:
            "loader ease-linear rounded-full border-8 border-t-8 border-[#0C9EDD] h-32 w-32 mb-4",
        }),
        ee.jsx("p", { className: "text-[#0C9EDD] text-xl", children: u }),
      ],
    }),
  });
function $p() {
  const u = z.lazy(() =>
      it(() => import("./Home-C6QzGNBM.js"), __vite__mapDeps([0, 1, 2, 3])),
    ),
    c = z.lazy(() =>
      it(() => import("./Login-0iYdjq_T.js"), __vite__mapDeps([4, 5, 2, 1])),
    ),
    s = z.lazy(() =>
      it(() => import("./Signup-BjSJXRT0.js"), __vite__mapDeps([6, 5, 2, 1])),
    ),
    p = z.lazy(() =>
      it(() => import("./Resources-CuQhcDta.js"), __vite__mapDeps([7, 3, 1])),
    ),
    v = z.lazy(() =>
      it(() => import("./AboutUs-BksEgD0b.js"), __vite__mapDeps([8, 3, 1])),
    ),
    w = z.lazy(() =>
      it(() => import("./GithubAuth-B6X9MgAa.js"), __vite__mapDeps([9, 10])),
    ),
    S = z.lazy(() =>
      it(() => import("./index-sin99dlu.js"), __vite__mapDeps([11, 10])),
    ),
    _ = z.lazy(() =>
      it(
        () => import("./MostProjects-z4moyY_Z.js"),
        __vite__mapDeps([12, 13, 1]),
      ),
    ),
    k = z.lazy(() => it(() => import("./Sopohome-BQqIw7ks.js"), [])),
    L = z.lazy(() => it(() => import("./Gitlab-DBmIOUhz.js"), [])),
    T = z.lazy(() => it(() => import("./MeshAI-CZ-dIFwG.js"), [])),
    N = z.lazy(() =>
      it(() => import("./OpenAI-DNMo7Bey.js"), __vite__mapDeps([14, 13, 1])),
    );
  return ee.jsx(Ip, {
    children: ee.jsx(z.Suspense, {
      fallback: ee.jsx(Vp, {}),
      children: ee.jsxs(Pp, {
        children: [
          ee.jsx(be, { path: "/", element: ee.jsx(u, {}) }),
          ee.jsx(be, { path: "/login", element: ee.jsx(c, {}) }),
          ee.jsx(be, { path: "/signup", element: ee.jsx(s, {}) }),
          ee.jsx(be, { path: "/resources", element: ee.jsx(p, {}) }),
          ee.jsx(be, { path: "/auth/github", element: ee.jsx(w, {}) }),
          ee.jsx(be, { path: "/about-us", element: ee.jsx(v, {}) }),
          ee.jsxs(be, {
            element: ee.jsx(S, {}),
            path: "/dashboard",
            children: [
              ee.jsx(be, { index: !0, element: ee.jsx(_, {}) }),
              ee.jsx(be, { path: "sopohome", element: ee.jsx(k, {}) }),
              ee.jsx(be, { path: "gitlab", element: ee.jsx(L, {}) }),
              ee.jsx(be, { path: "meshai", element: ee.jsx(T, {}) }),
              ee.jsx(be, { path: "openai", element: ee.jsx(N, {}) }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Wp = Id.createRoot(document.getElementById("root"));
Wp.render(ee.jsx(fc.StrictMode, { children: ee.jsx($p, {}) }));
export {
  Fp as L,
  Kp as N,
  Qp as O,
  Vp as P,
  Hp as a,
  ee as j,
  z as r,
  ap as u,
};
