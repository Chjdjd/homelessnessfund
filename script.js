function fS(e, n) {
    for (var i = 0; i < n.length; i++) {
        const s = n[i];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const a in s)
                if (a !== "default" && !(a in e)) {
                    const u = Object.getOwnPropertyDescriptor(s, a);
                    u && Object.defineProperty(e, a, u.get ? u : {
                        enumerable: !0,
                        get: () => s[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        s(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && s(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity),
        a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function s(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const u = i(a);
        fetch(a.href, u)
    }
}
)();
var ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ou = {
    exports: {}
}
  , Wi = {}
  , Mu = {
    exports: {}
}
  , Se = {};
var Lp;
function dS() {
    if (Lp)
        return Se;
    Lp = 1;
    var e = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function v(M) {
        return M === null || typeof M != "object" ? null : (M = y && M[y] || M["@@iterator"],
        typeof M == "function" ? M : null)
    }
    var x = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , S = Object.assign
      , E = {};
    function P(M, W, le) {
        this.props = M,
        this.context = W,
        this.refs = E,
        this.updater = le || x
    }
    P.prototype.isReactComponent = {},
    P.prototype.setState = function(M, W) {
        if (typeof M != "object" && typeof M != "function" && M != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, M, W, "setState")
    }
    ,
    P.prototype.forceUpdate = function(M) {
        this.updater.enqueueForceUpdate(this, M, "forceUpdate")
    }
    ;
    function T() {}
    T.prototype = P.prototype;
    function R(M, W, le) {
        this.props = M,
        this.context = W,
        this.refs = E,
        this.updater = le || x
    }
    var A = R.prototype = new T;
    A.constructor = R,
    S(A, P.prototype),
    A.isPureReactComponent = !0;
    var N = Array.isArray
      , D = Object.prototype.hasOwnProperty
      , V = {
        current: null
    }
      , F = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function H(M, W, le) {
        var pe, we = {}, ve = null, ge = null;
        if (W != null)
            for (pe in W.ref !== void 0 && (ge = W.ref),
            W.key !== void 0 && (ve = "" + W.key),
            W)
                D.call(W, pe) && !F.hasOwnProperty(pe) && (we[pe] = W[pe]);
        var ue = arguments.length - 2;
        if (ue === 1)
            we.children = le;
        else if (1 < ue) {
            for (var xe = Array(ue), Ne = 0; Ne < ue; Ne++)
                xe[Ne] = arguments[Ne + 2];
            we.children = xe
        }
        if (M && M.defaultProps)
            for (pe in ue = M.defaultProps,
            ue)
                we[pe] === void 0 && (we[pe] = ue[pe]);
        return {
            $$typeof: e,
            type: M,
            key: ve,
            ref: ge,
            props: we,
            _owner: V.current
        }
    }
    function Y(M, W) {
        return {
            $$typeof: e,
            type: M.type,
            key: W,
            ref: M.ref,
            props: M.props,
            _owner: M._owner
        }
    }
    function K(M) {
        return typeof M == "object" && M !== null && M.$$typeof === e
    }
    function $(M) {
        var W = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + M.replace(/[=:]/g, function(le) {
            return W[le]
        })
    }
    var L = /\/+/g;
    function X(M, W) {
        return typeof M == "object" && M !== null && M.key != null ? $("" + M.key) : W.toString(36)
    }
    function B(M, W, le, pe, we) {
        var ve = typeof M;
        (ve === "undefined" || ve === "boolean") && (M = null);
        var ge = !1;
        if (M === null)
            ge = !0;
        else
            switch (ve) {
            case "string":
            case "number":
                ge = !0;
                break;
            case "object":
                switch (M.$$typeof) {
                case e:
                case n:
                    ge = !0
                }
            }
        if (ge)
            return ge = M,
            we = we(ge),
            M = pe === "" ? "." + X(ge, 0) : pe,
            N(we) ? (le = "",
            M != null && (le = M.replace(L, "$&/") + "/"),
            B(we, W, le, "", function(Ne) {
                return Ne
            })) : we != null && (K(we) && (we = Y(we, le + (!we.key || ge && ge.key === we.key ? "" : ("" + we.key).replace(L, "$&/") + "/") + M)),
            W.push(we)),
            1;
        if (ge = 0,
        pe = pe === "" ? "." : pe + ":",
        N(M))
            for (var ue = 0; ue < M.length; ue++) {
                ve = M[ue];
                var xe = pe + X(ve, ue);
                ge += B(ve, W, le, xe, we)
            }
        else if (xe = v(M),
        typeof xe == "function")
            for (M = xe.call(M),
            ue = 0; !(ve = M.next()).done; )
                ve = ve.value,
                xe = pe + X(ve, ue++),
                ge += B(ve, W, le, xe, we);
        else if (ve === "object")
            throw W = String(M),
            Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
        return ge
    }
    function ce(M, W, le) {
        if (M == null)
            return M;
        var pe = []
          , we = 0;
        return B(M, pe, "", "", function(ve) {
            return W.call(le, ve, we++)
        }),
        pe
    }
    function oe(M) {
        if (M._status === -1) {
            var W = M._result;
            W = W(),
            W.then(function(le) {
                (M._status === 0 || M._status === -1) && (M._status = 1,
                M._result = le)
            }, function(le) {
                (M._status === 0 || M._status === -1) && (M._status = 2,
                M._result = le)
            }),
            M._status === -1 && (M._status = 0,
            M._result = W)
        }
        if (M._status === 1)
            return M._result.default;
        throw M._result
    }
    var te = {
        current: null
    }
      , U = {
        transition: null
    }
      , ee = {
        ReactCurrentDispatcher: te,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: V
    };
    function Z() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: ce,
        forEach: function(M, W, le) {
            ce(M, function() {
                W.apply(this, arguments)
            }, le)
        },
        count: function(M) {
            var W = 0;
            return ce(M, function() {
                W++
            }),
            W
        },
        toArray: function(M) {
            return ce(M, function(W) {
                return W
            }) || []
        },
        only: function(M) {
            if (!K(M))
                throw Error("React.Children.only expected to receive a single React element child.");
            return M
        }
    },
    Se.Component = P,
    Se.Fragment = i,
    Se.Profiler = a,
    Se.PureComponent = R,
    Se.StrictMode = s,
    Se.Suspense = h,
    Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee,
    Se.act = Z,
    Se.cloneElement = function(M, W, le) {
        if (M == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
        var pe = S({}, M.props)
          , we = M.key
          , ve = M.ref
          , ge = M._owner;
        if (W != null) {
            if (W.ref !== void 0 && (ve = W.ref,
            ge = V.current),
            W.key !== void 0 && (we = "" + W.key),
            M.type && M.type.defaultProps)
                var ue = M.type.defaultProps;
            for (xe in W)
                D.call(W, xe) && !F.hasOwnProperty(xe) && (pe[xe] = W[xe] === void 0 && ue !== void 0 ? ue[xe] : W[xe])
        }
        var xe = arguments.length - 2;
        if (xe === 1)
            pe.children = le;
        else if (1 < xe) {
            ue = Array(xe);
            for (var Ne = 0; Ne < xe; Ne++)
                ue[Ne] = arguments[Ne + 2];
            pe.children = ue
        }
        return {
            $$typeof: e,
            type: M.type,
            key: we,
            ref: ve,
            props: pe,
            _owner: ge
        }
    }
    ,
    Se.createContext = function(M) {
        return M = {
            $$typeof: c,
            _currentValue: M,
            _currentValue2: M,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        M.Provider = {
            $$typeof: u,
            _context: M
        },
        M.Consumer = M
    }
    ,
    Se.createElement = H,
    Se.createFactory = function(M) {
        var W = H.bind(null, M);
        return W.type = M,
        W
    }
    ,
    Se.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Se.forwardRef = function(M) {
        return {
            $$typeof: d,
            render: M
        }
    }
    ,
    Se.isValidElement = K,
    Se.lazy = function(M) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: M
            },
            _init: oe
        }
    }
    ,
    Se.memo = function(M, W) {
        return {
            $$typeof: p,
            type: M,
            compare: W === void 0 ? null : W
        }
    }
    ,
    Se.startTransition = function(M) {
        var W = U.transition;
        U.transition = {};
        try {
            M()
        } finally {
            U.transition = W
        }
    }
    ,
    Se.unstable_act = Z,
    Se.useCallback = function(M, W) {
        return te.current.useCallback(M, W)
    }
    ,
    Se.useContext = function(M) {
        return te.current.useContext(M)
    }
    ,
    Se.useDebugValue = function() {}
    ,
    Se.useDeferredValue = function(M) {
        return te.current.useDeferredValue(M)
    }
    ,
    Se.useEffect = function(M, W) {
        return te.current.useEffect(M, W)
    }
    ,
    Se.useId = function() {
        return te.current.useId()
    }
    ,
    Se.useImperativeHandle = function(M, W, le) {
        return te.current.useImperativeHandle(M, W, le)
    }
    ,
    Se.useInsertionEffect = function(M, W) {
        return te.current.useInsertionEffect(M, W)
    }
    ,
    Se.useLayoutEffect = function(M, W) {
        return te.current.useLayoutEffect(M, W)
    }
    ,
    Se.useMemo = function(M, W) {
        return te.current.useMemo(M, W)
    }
    ,
    Se.useReducer = function(M, W, le) {
        return te.current.useReducer(M, W, le)
    }
    ,
    Se.useRef = function(M) {
        return te.current.useRef(M)
    }
    ,
    Se.useState = function(M) {
        return te.current.useState(M)
    }
    ,
    Se.useSyncExternalStore = function(M, W, le) {
        return te.current.useSyncExternalStore(M, W, le)
    }
    ,
    Se.useTransition = function() {
        return te.current.useTransition()
    }
    ,
    Se.version = "18.3.1",
    Se
}
var jp;
function Jt() {
    return jp || (jp = 1,
    Mu.exports = dS()),
    Mu.exports
}
var Ip;
function hS() {
    if (Ip)
        return Wi;
    Ip = 1;
    var e = Jt()
      , n = Symbol.for("react.element")
      , i = Symbol.for("react.fragment")
      , s = Object.prototype.hasOwnProperty
      , a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(d, h, p) {
        var g, y = {}, v = null, x = null;
        p !== void 0 && (v = "" + p),
        h.key !== void 0 && (v = "" + h.key),
        h.ref !== void 0 && (x = h.ref);
        for (g in h)
            s.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: n,
            type: d,
            key: v,
            ref: x,
            props: y,
            _owner: a.current
        }
    }
    return Wi.Fragment = i,
    Wi.jsx = c,
    Wi.jsxs = c,
    Wi
}
var Fp;
function pS() {
    return Fp || (Fp = 1,
    Ou.exports = hS()),
    Ou.exports
}
var b = pS()
  , Rs = {}
  , Nu = {
    exports: {}
}
  , dt = {}
  , Du = {
    exports: {}
}
  , Lu = {};
var Vp;
function mS() {
    return Vp || (Vp = 1,
    (function(e) {
        function n(U, ee) {
            var Z = U.length;
            U.push(ee);
            e: for (; 0 < Z; ) {
                var M = Z - 1 >>> 1
                  , W = U[M];
                if (0 < a(W, ee))
                    U[M] = ee,
                    U[Z] = W,
                    Z = M;
                else
                    break e
            }
        }
        function i(U) {
            return U.length === 0 ? null : U[0]
        }
        function s(U) {
            if (U.length === 0)
                return null;
            var ee = U[0]
              , Z = U.pop();
            if (Z !== ee) {
                U[0] = Z;
                e: for (var M = 0, W = U.length, le = W >>> 1; M < le; ) {
                    var pe = 2 * (M + 1) - 1
                      , we = U[pe]
                      , ve = pe + 1
                      , ge = U[ve];
                    if (0 > a(we, Z))
                        ve < W && 0 > a(ge, we) ? (U[M] = ge,
                        U[ve] = Z,
                        M = ve) : (U[M] = we,
                        U[pe] = Z,
                        M = pe);
                    else if (ve < W && 0 > a(ge, Z))
                        U[M] = ge,
                        U[ve] = Z,
                        M = ve;
                    else
                        break e
                }
            }
            return ee
        }
        function a(U, ee) {
            var Z = U.sortIndex - ee.sortIndex;
            return Z !== 0 ? Z : U.id - ee.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            e.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date
              , d = c.now();
            e.unstable_now = function() {
                return c.now() - d
            }
        }
        var h = []
          , p = []
          , g = 1
          , y = null
          , v = 3
          , x = !1
          , S = !1
          , E = !1
          , P = typeof setTimeout == "function" ? setTimeout : null
          , T = typeof clearTimeout == "function" ? clearTimeout : null
          , R = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A(U) {
            for (var ee = i(p); ee !== null; ) {
                if (ee.callback === null)
                    s(p);
                else if (ee.startTime <= U)
                    s(p),
                    ee.sortIndex = ee.expirationTime,
                    n(h, ee);
                else
                    break;
                ee = i(p)
            }
        }
        function N(U) {
            if (E = !1,
            A(U),
            !S)
                if (i(h) !== null)
                    S = !0,
                    oe(D);
                else {
                    var ee = i(p);
                    ee !== null && te(N, ee.startTime - U)
                }
        }
        function D(U, ee) {
            S = !1,
            E && (E = !1,
            T(H),
            H = -1),
            x = !0;
            var Z = v;
            try {
                for (A(ee),
                y = i(h); y !== null && (!(y.expirationTime > ee) || U && !$()); ) {
                    var M = y.callback;
                    if (typeof M == "function") {
                        y.callback = null,
                        v = y.priorityLevel;
                        var W = M(y.expirationTime <= ee);
                        ee = e.unstable_now(),
                        typeof W == "function" ? y.callback = W : y === i(h) && s(h),
                        A(ee)
                    } else
                        s(h);
                    y = i(h)
                }
                if (y !== null)
                    var le = !0;
                else {
                    var pe = i(p);
                    pe !== null && te(N, pe.startTime - ee),
                    le = !1
                }
                return le
            } finally {
                y = null,
                v = Z,
                x = !1
            }
        }
        var V = !1
          , F = null
          , H = -1
          , Y = 5
          , K = -1;
        function $() {
            return !(e.unstable_now() - K < Y)
        }
        function L() {
            if (F !== null) {
                var U = e.unstable_now();
                K = U;
                var ee = !0;
                try {
                    ee = F(!0, U)
                } finally {
                    ee ? X() : (V = !1,
                    F = null)
                }
            } else
                V = !1
        }
        var X;
        if (typeof R == "function")
            X = function() {
                R(L)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var B = new MessageChannel
              , ce = B.port2;
            B.port1.onmessage = L,
            X = function() {
                ce.postMessage(null)
            }
        } else
            X = function() {
                P(L, 0)
            }
            ;
        function oe(U) {
            F = U,
            V || (V = !0,
            X())
        }
        function te(U, ee) {
            H = P(function() {
                U(e.unstable_now())
            }, ee)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            S || x || (S = !0,
            oe(D))
        }
        ,
        e.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return v
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return i(h)
        }
        ,
        e.unstable_next = function(U) {
            switch (v) {
            case 1:
            case 2:
            case 3:
                var ee = 3;
                break;
            default:
                ee = v
            }
            var Z = v;
            v = ee;
            try {
                return U()
            } finally {
                v = Z
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = function() {}
        ,
        e.unstable_runWithPriority = function(U, ee) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var Z = v;
            v = U;
            try {
                return ee()
            } finally {
                v = Z
            }
        }
        ,
        e.unstable_scheduleCallback = function(U, ee, Z) {
            var M = e.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? M + Z : M) : Z = M,
            U) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
            }
            return W = Z + W,
            U = {
                id: g++,
                callback: ee,
                priorityLevel: U,
                startTime: Z,
                expirationTime: W,
                sortIndex: -1
            },
            Z > M ? (U.sortIndex = Z,
            n(p, U),
            i(h) === null && U === i(p) && (E ? (T(H),
            H = -1) : E = !0,
            te(N, Z - M))) : (U.sortIndex = W,
            n(h, U),
            S || x || (S = !0,
            oe(D))),
            U
        }
        ,
        e.unstable_shouldYield = $,
        e.unstable_wrapCallback = function(U) {
            var ee = v;
            return function() {
                var Z = v;
                v = ee;
                try {
                    return U.apply(this, arguments)
                } finally {
                    v = Z
                }
            }
        }
    }
    )(Lu)),
    Lu
}
var zp;
function gS() {
    return zp || (zp = 1,
    Du.exports = mS()),
    Du.exports
}
var Bp;
function yS() {
    if (Bp)
        return dt;
    Bp = 1;
    var e = Jt()
      , n = gS();
    function i(t) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++)
            r += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var s = new Set
      , a = {};
    function u(t, r) {
        c(t, r),
        c(t + "Capture", r)
    }
    function c(t, r) {
        for (a[t] = r,
        t = 0; t < r.length; t++)
            s.add(r[t])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function v(t) {
        return h.call(y, t) ? !0 : h.call(g, t) ? !1 : p.test(t) ? y[t] = !0 : (g[t] = !0,
        !1)
    }
    function x(t, r, o, l) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof r) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : o !== null ? !o.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
            t !== "data-" && t !== "aria-");
        default:
            return !1
        }
    }
    function S(t, r, o, l) {
        if (r === null || typeof r > "u" || x(t, r, o, l))
            return !0;
        if (l)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
            }
        return !1
    }
    function E(t, r, o, l, f, m, w) {
        this.acceptsBooleans = r === 2 || r === 3 || r === 4,
        this.attributeName = l,
        this.attributeNamespace = f,
        this.mustUseProperty = o,
        this.propertyName = t,
        this.type = r,
        this.sanitizeURL = m,
        this.removeEmptyString = w
    }
    var P = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        P[t] = new E(t,0,!1,t,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
        var r = t[0];
        P[r] = new E(r,1,!1,t[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        P[t] = new E(t,2,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        P[t] = new E(t,2,!1,t,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        P[t] = new E(t,3,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        P[t] = new E(t,3,!0,t,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(t) {
        P[t] = new E(t,4,!1,t,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(t) {
        P[t] = new E(t,6,!1,t,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(t) {
        P[t] = new E(t,5,!1,t.toLowerCase(),null,!1,!1)
    });
    var T = /[\-:]([a-z])/g;
    function R(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var r = t.replace(T, R);
        P[r] = new E(r,1,!1,t,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var r = t.replace(T, R);
        P[r] = new E(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var r = t.replace(T, R);
        P[r] = new E(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(t) {
        P[t] = new E(t,1,!1,t.toLowerCase(),null,!1,!1)
    }),
    P.xlinkHref = new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(t) {
        P[t] = new E(t,1,!1,t.toLowerCase(),null,!0,!0)
    });
    function A(t, r, o, l) {
        var f = P.hasOwnProperty(r) ? P[r] : null;
        (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (S(r, o, f, l) && (o = null),
        l || f === null ? v(r) && (o === null ? t.removeAttribute(r) : t.setAttribute(r, "" + o)) : f.mustUseProperty ? t[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName,
        l = f.attributeNamespace,
        o === null ? t.removeAttribute(r) : (f = f.type,
        o = f === 3 || f === 4 && o === !0 ? "" : "" + o,
        l ? t.setAttributeNS(l, r, o) : t.setAttribute(r, o))))
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , D = Symbol.for("react.element")
      , V = Symbol.for("react.portal")
      , F = Symbol.for("react.fragment")
      , H = Symbol.for("react.strict_mode")
      , Y = Symbol.for("react.profiler")
      , K = Symbol.for("react.provider")
      , $ = Symbol.for("react.context")
      , L = Symbol.for("react.forward_ref")
      , X = Symbol.for("react.suspense")
      , B = Symbol.for("react.suspense_list")
      , ce = Symbol.for("react.memo")
      , oe = Symbol.for("react.lazy")
      , te = Symbol.for("react.offscreen")
      , U = Symbol.iterator;
    function ee(t) {
        return t === null || typeof t != "object" ? null : (t = U && t[U] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Z = Object.assign, M;
    function W(t) {
        if (M === void 0)
            try {
                throw Error()
            } catch (o) {
                var r = o.stack.trim().match(/\n( *(at )?)/);
                M = r && r[1] || ""
            }
        return `
` + M + t
    }
    var le = !1;
    function pe(t, r) {
        if (!t || le)
            return "";
        le = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(r.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(r, [])
                    } catch (z) {
                        var l = z
                    }
                    Reflect.construct(t, [], r)
                } else {
                    try {
                        r.call()
                    } catch (z) {
                        l = z
                    }
                    t.call(r.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (z) {
                    l = z
                }
                t()
            }
        } catch (z) {
            if (z && l && typeof z.stack == "string") {
                for (var f = z.stack.split(`
`), m = l.stack.split(`
`), w = f.length - 1, C = m.length - 1; 1 <= w && 0 <= C && f[w] !== m[C]; )
                    C--;
                for (; 1 <= w && 0 <= C; w--,
                C--)
                    if (f[w] !== m[C]) {
                        if (w !== 1 || C !== 1)
                            do
                                if (w--,
                                C--,
                                0 > C || f[w] !== m[C]) {
                                    var _ = `
` + f[w].replace(" at new ", " at ");
                                    return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)),
                                    _
                                }
                            while (1 <= w && 0 <= C);
                        break
                    }
            }
        } finally {
            le = !1,
            Error.prepareStackTrace = o
        }
        return (t = t ? t.displayName || t.name : "") ? W(t) : ""
    }
    function we(t) {
        switch (t.tag) {
        case 5:
            return W(t.type);
        case 16:
            return W("Lazy");
        case 13:
            return W("Suspense");
        case 19:
            return W("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = pe(t.type, !1),
            t;
        case 11:
            return t = pe(t.type.render, !1),
            t;
        case 1:
            return t = pe(t.type, !0),
            t;
        default:
            return ""
        }
    }
    function ve(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case F:
            return "Fragment";
        case V:
            return "Portal";
        case Y:
            return "Profiler";
        case H:
            return "StrictMode";
        case X:
            return "Suspense";
        case B:
            return "SuspenseList"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case $:
                return (t.displayName || "Context") + ".Consumer";
            case K:
                return (t._context.displayName || "Context") + ".Provider";
            case L:
                var r = t.render;
                return t = t.displayName,
                t || (t = r.displayName || r.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case ce:
                return r = t.displayName || null,
                r !== null ? r : ve(t.type) || "Memo";
            case oe:
                r = t._payload,
                t = t._init;
                try {
                    return ve(t(r))
                } catch {}
            }
        return null
    }
    function ge(t) {
        var r = t.type;
        switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (r.displayName || "Context") + ".Consumer";
        case 10:
            return (r._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = r.render,
            t = t.displayName || t.name || "",
            r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return r;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ve(r);
        case 8:
            return r === H ? "StrictMode" : "Mode";
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
            if (typeof r == "function")
                return r.displayName || r.name || null;
            if (typeof r == "string")
                return r
        }
        return null
    }
    function ue(t) {
        switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function xe(t) {
        var r = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
    }
    function Ne(t) {
        var r = xe(t) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(t.constructor.prototype, r)
          , l = "" + t[r];
        if (!t.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var f = o.get
              , m = o.set;
            return Object.defineProperty(t, r, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(w) {
                    l = "" + w,
                    m.call(this, w)
                }
            }),
            Object.defineProperty(t, r, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(w) {
                    l = "" + w
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[r]
                }
            }
        }
    }
    function Et(t) {
        t._valueTracker || (t._valueTracker = Ne(t))
    }
    function mr(t) {
        if (!t)
            return !1;
        var r = t._valueTracker;
        if (!r)
            return !0;
        var o = r.getValue()
          , l = "";
        return t && (l = xe(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== o ? (r.setValue(t),
        !0) : !1
    }
    function tn(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    function Fa(t, r) {
        var o = r.checked;
        return Z({}, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? t._wrapperState.initialChecked
        })
    }
    function Uf(t, r) {
        var o = r.defaultValue == null ? "" : r.defaultValue
          , l = r.checked != null ? r.checked : r.defaultChecked;
        o = ue(r.value != null ? r.value : o),
        t._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
        }
    }
    function Hf(t, r) {
        r = r.checked,
        r != null && A(t, "checked", r, !1)
    }
    function Va(t, r) {
        Hf(t, r);
        var o = ue(r.value)
          , l = r.type;
        if (o != null)
            l === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
        else if (l === "submit" || l === "reset") {
            t.removeAttribute("value");
            return
        }
        r.hasOwnProperty("value") ? za(t, r.type, o) : r.hasOwnProperty("defaultValue") && za(t, r.type, ue(r.defaultValue)),
        r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked)
    }
    function Wf(t, r, o) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var l = r.type;
            if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null))
                return;
            r = "" + t._wrapperState.initialValue,
            o || r === t.value || (t.value = r),
            t.defaultValue = r
        }
        o = t.name,
        o !== "" && (t.name = ""),
        t.defaultChecked = !!t._wrapperState.initialChecked,
        o !== "" && (t.name = o)
    }
    function za(t, r, o) {
        (r !== "number" || tn(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o))
    }
    var oi = Array.isArray;
    function gr(t, r, o, l) {
        if (t = t.options,
        r) {
            r = {};
            for (var f = 0; f < o.length; f++)
                r["$" + o[f]] = !0;
            for (o = 0; o < t.length; o++)
                f = r.hasOwnProperty("$" + t[o].value),
                t[o].selected !== f && (t[o].selected = f),
                f && l && (t[o].defaultSelected = !0)
        } else {
            for (o = "" + ue(o),
            r = null,
            f = 0; f < t.length; f++) {
                if (t[f].value === o) {
                    t[f].selected = !0,
                    l && (t[f].defaultSelected = !0);
                    return
                }
                r !== null || t[f].disabled || (r = t[f])
            }
            r !== null && (r.selected = !0)
        }
    }
    function Ba(t, r) {
        if (r.dangerouslySetInnerHTML != null)
            throw Error(i(91));
        return Z({}, r, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }
    function $f(t, r) {
        var o = r.value;
        if (o == null) {
            if (o = r.children,
            r = r.defaultValue,
            o != null) {
                if (r != null)
                    throw Error(i(92));
                if (oi(o)) {
                    if (1 < o.length)
                        throw Error(i(93));
                    o = o[0]
                }
                r = o
            }
            r == null && (r = ""),
            o = r
        }
        t._wrapperState = {
            initialValue: ue(o)
        }
    }
    function Kf(t, r) {
        var o = ue(r.value)
          , l = ue(r.defaultValue);
        o != null && (o = "" + o,
        o !== t.value && (t.value = o),
        r.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)),
        l != null && (t.defaultValue = "" + l)
    }
    function qf(t) {
        var r = t.textContent;
        r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r)
    }
    function Qf(t) {
        switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Ua(t, r) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? Qf(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var wo, Gf = (function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, l, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(r, o, l, f)
            })
        }
        : t
    }
    )(function(t, r) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
            t.innerHTML = r;
        else {
            for (wo = wo || document.createElement("div"),
            wo.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = wo.firstChild; t.firstChild; )
                t.removeChild(t.firstChild);
            for (; r.firstChild; )
                t.appendChild(r.firstChild)
        }
    });
    function si(t, r) {
        if (r) {
            var o = t.firstChild;
            if (o && o === t.lastChild && o.nodeType === 3) {
                o.nodeValue = r;
                return
            }
        }
        t.textContent = r
    }
    var ai = {
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
        strokeWidth: !0
    }
      , mw = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ai).forEach(function(t) {
        mw.forEach(function(r) {
            r = r + t.charAt(0).toUpperCase() + t.substring(1),
            ai[r] = ai[t]
        })
    });
    function Yf(t, r, o) {
        return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ai.hasOwnProperty(t) && ai[t] ? ("" + r).trim() : r + "px"
    }
    function Xf(t, r) {
        t = t.style;
        for (var o in r)
            if (r.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0
                  , f = Yf(o, r[o], l);
                o === "float" && (o = "cssFloat"),
                l ? t.setProperty(o, f) : t[o] = f
            }
    }
    var gw = Z({
        menuitem: !0
    }, {
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
        wbr: !0
    });
    function Ha(t, r) {
        if (r) {
            if (gw[t] && (r.children != null || r.dangerouslySetInnerHTML != null))
                throw Error(i(137, t));
            if (r.dangerouslySetInnerHTML != null) {
                if (r.children != null)
                    throw Error(i(60));
                if (typeof r.dangerouslySetInnerHTML != "object" || !("__html"in r.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (r.style != null && typeof r.style != "object")
                throw Error(i(62))
        }
    }
    function Wa(t, r) {
        if (t.indexOf("-") === -1)
            return typeof r.is == "string";
        switch (t) {
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
            return !0
        }
    }
    var $a = null;
    function Ka(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var qa = null
      , yr = null
      , vr = null;
    function Zf(t) {
        if (t = Ai(t)) {
            if (typeof qa != "function")
                throw Error(i(280));
            var r = t.stateNode;
            r && (r = Uo(r),
            qa(t.stateNode, t.type, r))
        }
    }
    function Jf(t) {
        yr ? vr ? vr.push(t) : vr = [t] : yr = t
    }
    function ed() {
        if (yr) {
            var t = yr
              , r = vr;
            if (vr = yr = null,
            Zf(t),
            r)
                for (t = 0; t < r.length; t++)
                    Zf(r[t])
        }
    }
    function td(t, r) {
        return t(r)
    }
    function nd() {}
    var Qa = !1;
    function rd(t, r, o) {
        if (Qa)
            return t(r, o);
        Qa = !0;
        try {
            return td(t, r, o)
        } finally {
            Qa = !1,
            (yr !== null || vr !== null) && (nd(),
            ed())
        }
    }
    function li(t, r) {
        var o = t.stateNode;
        if (o === null)
            return null;
        var l = Uo(o);
        if (l === null)
            return null;
        o = l[r];
        e: switch (r) {
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break e;
        default:
            t = !1
        }
        if (t)
            return null;
        if (o && typeof o != "function")
            throw Error(i(231, r, typeof o));
        return o
    }
    var Ga = !1;
    if (d)
        try {
            var ui = {};
            Object.defineProperty(ui, "passive", {
                get: function() {
                    Ga = !0
                }
            }),
            window.addEventListener("test", ui, ui),
            window.removeEventListener("test", ui, ui)
        } catch {
            Ga = !1
        }
    function yw(t, r, o, l, f, m, w, C, _) {
        var z = Array.prototype.slice.call(arguments, 3);
        try {
            r.apply(o, z)
        } catch (Q) {
            this.onError(Q)
        }
    }
    var ci = !1
      , xo = null
      , So = !1
      , Ya = null
      , vw = {
        onError: function(t) {
            ci = !0,
            xo = t
        }
    };
    function ww(t, r, o, l, f, m, w, C, _) {
        ci = !1,
        xo = null,
        yw.apply(vw, arguments)
    }
    function xw(t, r, o, l, f, m, w, C, _) {
        if (ww.apply(this, arguments),
        ci) {
            if (ci) {
                var z = xo;
                ci = !1,
                xo = null
            } else
                throw Error(i(198));
            So || (So = !0,
            Ya = z)
        }
    }
    function qn(t) {
        var r = t
          , o = t;
        if (t.alternate)
            for (; r.return; )
                r = r.return;
        else {
            t = r;
            do
                r = t,
                (r.flags & 4098) !== 0 && (o = r.return),
                t = r.return;
            while (t)
        }
        return r.tag === 3 ? o : null
    }
    function id(t) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r === null && (t = t.alternate,
            t !== null && (r = t.memoizedState)),
            r !== null)
                return r.dehydrated
        }
        return null
    }
    function od(t) {
        if (qn(t) !== t)
            throw Error(i(188))
    }
    function Sw(t) {
        var r = t.alternate;
        if (!r) {
            if (r = qn(t),
            r === null)
                throw Error(i(188));
            return r !== t ? null : t
        }
        for (var o = t, l = r; ; ) {
            var f = o.return;
            if (f === null)
                break;
            var m = f.alternate;
            if (m === null) {
                if (l = f.return,
                l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (f.child === m.child) {
                for (m = f.child; m; ) {
                    if (m === o)
                        return od(f),
                        t;
                    if (m === l)
                        return od(f),
                        r;
                    m = m.sibling
                }
                throw Error(i(188))
            }
            if (o.return !== l.return)
                o = f,
                l = m;
            else {
                for (var w = !1, C = f.child; C; ) {
                    if (C === o) {
                        w = !0,
                        o = f,
                        l = m;
                        break
                    }
                    if (C === l) {
                        w = !0,
                        l = f,
                        o = m;
                        break
                    }
                    C = C.sibling
                }
                if (!w) {
                    for (C = m.child; C; ) {
                        if (C === o) {
                            w = !0,
                            o = m,
                            l = f;
                            break
                        }
                        if (C === l) {
                            w = !0,
                            l = m,
                            o = f;
                            break
                        }
                        C = C.sibling
                    }
                    if (!w)
                        throw Error(i(189))
                }
            }
            if (o.alternate !== l)
                throw Error(i(190))
        }
        if (o.tag !== 3)
            throw Error(i(188));
        return o.stateNode.current === o ? t : r
    }
    function sd(t) {
        return t = Sw(t),
        t !== null ? ad(t) : null
    }
    function ad(t) {
        if (t.tag === 5 || t.tag === 6)
            return t;
        for (t = t.child; t !== null; ) {
            var r = ad(t);
            if (r !== null)
                return r;
            t = t.sibling
        }
        return null
    }
    var ld = n.unstable_scheduleCallback
      , ud = n.unstable_cancelCallback
      , Ew = n.unstable_shouldYield
      , Pw = n.unstable_requestPaint
      , Ve = n.unstable_now
      , Tw = n.unstable_getCurrentPriorityLevel
      , Xa = n.unstable_ImmediatePriority
      , cd = n.unstable_UserBlockingPriority
      , Eo = n.unstable_NormalPriority
      , Cw = n.unstable_LowPriority
      , fd = n.unstable_IdlePriority
      , Po = null
      , Ht = null;
    function bw(t) {
        if (Ht && typeof Ht.onCommitFiberRoot == "function")
            try {
                Ht.onCommitFiberRoot(Po, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
    }
    var Ot = Math.clz32 ? Math.clz32 : Aw
      , kw = Math.log
      , Rw = Math.LN2;
    function Aw(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (kw(t) / Rw | 0) | 0
    }
    var To = 64
      , Co = 4194304;
    function fi(t) {
        switch (t & -t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
        }
    }
    function bo(t, r) {
        var o = t.pendingLanes;
        if (o === 0)
            return 0;
        var l = 0
          , f = t.suspendedLanes
          , m = t.pingedLanes
          , w = o & 268435455;
        if (w !== 0) {
            var C = w & ~f;
            C !== 0 ? l = fi(C) : (m &= w,
            m !== 0 && (l = fi(m)))
        } else
            w = o & ~f,
            w !== 0 ? l = fi(w) : m !== 0 && (l = fi(m));
        if (l === 0)
            return 0;
        if (r !== 0 && r !== l && (r & f) === 0 && (f = l & -l,
        m = r & -r,
        f >= m || f === 16 && (m & 4194240) !== 0))
            return r;
        if ((l & 4) !== 0 && (l |= o & 16),
        r = t.entangledLanes,
        r !== 0)
            for (t = t.entanglements,
            r &= l; 0 < r; )
                o = 31 - Ot(r),
                f = 1 << o,
                l |= t[o],
                r &= ~f;
        return l
    }
    function _w(t, r) {
        switch (t) {
        case 1:
        case 2:
        case 4:
            return r + 250;
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
            return r + 5e3;
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
            return -1
        }
    }
    function Ow(t, r) {
        for (var o = t.suspendedLanes, l = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
            var w = 31 - Ot(m)
              , C = 1 << w
              , _ = f[w];
            _ === -1 ? ((C & o) === 0 || (C & l) !== 0) && (f[w] = _w(C, r)) : _ <= r && (t.expiredLanes |= C),
            m &= ~C
        }
    }
    function Za(t) {
        return t = t.pendingLanes & -1073741825,
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }
    function dd() {
        var t = To;
        return To <<= 1,
        (To & 4194240) === 0 && (To = 64),
        t
    }
    function Ja(t) {
        for (var r = [], o = 0; 31 > o; o++)
            r.push(t);
        return r
    }
    function di(t, r, o) {
        t.pendingLanes |= r,
        r !== 536870912 && (t.suspendedLanes = 0,
        t.pingedLanes = 0),
        t = t.eventTimes,
        r = 31 - Ot(r),
        t[r] = o
    }
    function Mw(t, r) {
        var o = t.pendingLanes & ~r;
        t.pendingLanes = r,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.expiredLanes &= r,
        t.mutableReadLanes &= r,
        t.entangledLanes &= r,
        r = t.entanglements;
        var l = t.eventTimes;
        for (t = t.expirationTimes; 0 < o; ) {
            var f = 31 - Ot(o)
              , m = 1 << f;
            r[f] = 0,
            l[f] = -1,
            t[f] = -1,
            o &= ~m
        }
    }
    function el(t, r) {
        var o = t.entangledLanes |= r;
        for (t = t.entanglements; o; ) {
            var l = 31 - Ot(o)
              , f = 1 << l;
            f & r | t[l] & r && (t[l] |= r),
            o &= ~f
        }
    }
    var Te = 0;
    function hd(t) {
        return t &= -t,
        1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var pd, tl, md, gd, yd, nl = !1, ko = [], vn = null, wn = null, xn = null, hi = new Map, pi = new Map, Sn = [], Nw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function vd(t, r) {
        switch (t) {
        case "focusin":
        case "focusout":
            vn = null;
            break;
        case "dragenter":
        case "dragleave":
            wn = null;
            break;
        case "mouseover":
        case "mouseout":
            xn = null;
            break;
        case "pointerover":
        case "pointerout":
            hi.delete(r.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            pi.delete(r.pointerId)
        }
    }
    function mi(t, r, o, l, f, m) {
        return t === null || t.nativeEvent !== m ? (t = {
            blockedOn: r,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: m,
            targetContainers: [f]
        },
        r !== null && (r = Ai(r),
        r !== null && tl(r)),
        t) : (t.eventSystemFlags |= l,
        r = t.targetContainers,
        f !== null && r.indexOf(f) === -1 && r.push(f),
        t)
    }
    function Dw(t, r, o, l, f) {
        switch (r) {
        case "focusin":
            return vn = mi(vn, t, r, o, l, f),
            !0;
        case "dragenter":
            return wn = mi(wn, t, r, o, l, f),
            !0;
        case "mouseover":
            return xn = mi(xn, t, r, o, l, f),
            !0;
        case "pointerover":
            var m = f.pointerId;
            return hi.set(m, mi(hi.get(m) || null, t, r, o, l, f)),
            !0;
        case "gotpointercapture":
            return m = f.pointerId,
            pi.set(m, mi(pi.get(m) || null, t, r, o, l, f)),
            !0
        }
        return !1
    }
    function wd(t) {
        var r = Qn(t.target);
        if (r !== null) {
            var o = qn(r);
            if (o !== null) {
                if (r = o.tag,
                r === 13) {
                    if (r = id(o),
                    r !== null) {
                        t.blockedOn = r,
                        yd(t.priority, function() {
                            md(o)
                        });
                        return
                    }
                } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Ro(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var r = t.targetContainers; 0 < r.length; ) {
            var o = il(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
            if (o === null) {
                o = t.nativeEvent;
                var l = new o.constructor(o.type,o);
                $a = l,
                o.target.dispatchEvent(l),
                $a = null
            } else
                return r = Ai(o),
                r !== null && tl(r),
                t.blockedOn = o,
                !1;
            r.shift()
        }
        return !0
    }
    function xd(t, r, o) {
        Ro(t) && o.delete(r)
    }
    function Lw() {
        nl = !1,
        vn !== null && Ro(vn) && (vn = null),
        wn !== null && Ro(wn) && (wn = null),
        xn !== null && Ro(xn) && (xn = null),
        hi.forEach(xd),
        pi.forEach(xd)
    }
    function gi(t, r) {
        t.blockedOn === r && (t.blockedOn = null,
        nl || (nl = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Lw)))
    }
    function yi(t) {
        function r(f) {
            return gi(f, t)
        }
        if (0 < ko.length) {
            gi(ko[0], t);
            for (var o = 1; o < ko.length; o++) {
                var l = ko[o];
                l.blockedOn === t && (l.blockedOn = null)
            }
        }
        for (vn !== null && gi(vn, t),
        wn !== null && gi(wn, t),
        xn !== null && gi(xn, t),
        hi.forEach(r),
        pi.forEach(r),
        o = 0; o < Sn.length; o++)
            l = Sn[o],
            l.blockedOn === t && (l.blockedOn = null);
        for (; 0 < Sn.length && (o = Sn[0],
        o.blockedOn === null); )
            wd(o),
            o.blockedOn === null && Sn.shift()
    }
    var wr = N.ReactCurrentBatchConfig
      , Ao = !0;
    function jw(t, r, o, l) {
        var f = Te
          , m = wr.transition;
        wr.transition = null;
        try {
            Te = 1,
            rl(t, r, o, l)
        } finally {
            Te = f,
            wr.transition = m
        }
    }
    function Iw(t, r, o, l) {
        var f = Te
          , m = wr.transition;
        wr.transition = null;
        try {
            Te = 4,
            rl(t, r, o, l)
        } finally {
            Te = f,
            wr.transition = m
        }
    }
    function rl(t, r, o, l) {
        if (Ao) {
            var f = il(t, r, o, l);
            if (f === null)
                Sl(t, r, l, _o, o),
                vd(t, l);
            else if (Dw(f, t, r, o, l))
                l.stopPropagation();
            else if (vd(t, l),
            r & 4 && -1 < Nw.indexOf(t)) {
                for (; f !== null; ) {
                    var m = Ai(f);
                    if (m !== null && pd(m),
                    m = il(t, r, o, l),
                    m === null && Sl(t, r, l, _o, o),
                    m === f)
                        break;
                    f = m
                }
                f !== null && l.stopPropagation()
            } else
                Sl(t, r, l, null, o)
        }
    }
    var _o = null;
    function il(t, r, o, l) {
        if (_o = null,
        t = Ka(l),
        t = Qn(t),
        t !== null)
            if (r = qn(t),
            r === null)
                t = null;
            else if (o = r.tag,
            o === 13) {
                if (t = id(r),
                t !== null)
                    return t;
                t = null
            } else if (o === 3) {
                if (r.stateNode.current.memoizedState.isDehydrated)
                    return r.tag === 3 ? r.stateNode.containerInfo : null;
                t = null
            } else
                r !== t && (t = null);
        return _o = t,
        null
    }
    function Sd(t) {
        switch (t) {
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
            switch (Tw()) {
            case Xa:
                return 1;
            case cd:
                return 4;
            case Eo:
            case Cw:
                return 16;
            case fd:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var En = null
      , ol = null
      , Oo = null;
    function Ed() {
        if (Oo)
            return Oo;
        var t, r = ol, o = r.length, l, f = "value"in En ? En.value : En.textContent, m = f.length;
        for (t = 0; t < o && r[t] === f[t]; t++)
            ;
        var w = o - t;
        for (l = 1; l <= w && r[o - l] === f[m - l]; l++)
            ;
        return Oo = f.slice(t, 1 < l ? 1 - l : void 0)
    }
    function Mo(t) {
        var r = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && r === 13 && (t = 13)) : t = r,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function No() {
        return !0
    }
    function Pd() {
        return !1
    }
    function pt(t) {
        function r(o, l, f, m, w) {
            this._reactName = o,
            this._targetInst = f,
            this.type = l,
            this.nativeEvent = m,
            this.target = w,
            this.currentTarget = null;
            for (var C in t)
                t.hasOwnProperty(C) && (o = t[C],
                this[C] = o ? o(m) : m[C]);
            return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? No : Pd,
            this.isPropagationStopped = Pd,
            this
        }
        return Z(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = No)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = No)
            },
            persist: function() {},
            isPersistent: No
        }),
        r
    }
    var xr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, sl = pt(xr), vi = Z({}, xr, {
        view: 0,
        detail: 0
    }), Fw = pt(vi), al, ll, wi, Do = Z({}, vi, {
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
        getModifierState: cl,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== wi && (wi && t.type === "mousemove" ? (al = t.screenX - wi.screenX,
            ll = t.screenY - wi.screenY) : ll = al = 0,
            wi = t),
            al)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : ll
        }
    }), Td = pt(Do), Vw = Z({}, Do, {
        dataTransfer: 0
    }), zw = pt(Vw), Bw = Z({}, vi, {
        relatedTarget: 0
    }), ul = pt(Bw), Uw = Z({}, xr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Hw = pt(Uw), Ww = Z({}, xr, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), $w = pt(Ww), Kw = Z({}, xr, {
        data: 0
    }), Cd = pt(Kw), qw = {
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
        MozPrintableKey: "Unidentified"
    }, Qw = {
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
        224: "Meta"
    }, Gw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Yw(t) {
        var r = this.nativeEvent;
        return r.getModifierState ? r.getModifierState(t) : (t = Gw[t]) ? !!r[t] : !1
    }
    function cl() {
        return Yw
    }
    var Xw = Z({}, vi, {
        key: function(t) {
            if (t.key) {
                var r = qw[t.key] || t.key;
                if (r !== "Unidentified")
                    return r
            }
            return t.type === "keypress" ? (t = Mo(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Qw[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cl,
        charCode: function(t) {
            return t.type === "keypress" ? Mo(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Mo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Zw = pt(Xw)
      , Jw = Z({}, Do, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , bd = pt(Jw)
      , ex = Z({}, vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cl
    })
      , tx = pt(ex)
      , nx = Z({}, xr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , rx = pt(nx)
      , ix = Z({}, Do, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ox = pt(ix)
      , sx = [9, 13, 27, 32]
      , fl = d && "CompositionEvent"in window
      , xi = null;
    d && "documentMode"in document && (xi = document.documentMode);
    var ax = d && "TextEvent"in window && !xi
      , kd = d && (!fl || xi && 8 < xi && 11 >= xi)
      , Rd = " "
      , Ad = !1;
    function _d(t, r) {
        switch (t) {
        case "keyup":
            return sx.indexOf(r.keyCode) !== -1;
        case "keydown":
            return r.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Od(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Sr = !1;
    function lx(t, r) {
        switch (t) {
        case "compositionend":
            return Od(r);
        case "keypress":
            return r.which !== 32 ? null : (Ad = !0,
            Rd);
        case "textInput":
            return t = r.data,
            t === Rd && Ad ? null : t;
        default:
            return null
        }
    }
    function ux(t, r) {
        if (Sr)
            return t === "compositionend" || !fl && _d(t, r) ? (t = Ed(),
            Oo = ol = En = null,
            Sr = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
                if (r.char && 1 < r.char.length)
                    return r.char;
                if (r.which)
                    return String.fromCharCode(r.which)
            }
            return null;
        case "compositionend":
            return kd && r.locale !== "ko" ? null : r.data;
        default:
            return null
        }
    }
    var cx = {
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
        week: !0
    };
    function Md(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r === "input" ? !!cx[t.type] : r === "textarea"
    }
    function Nd(t, r, o, l) {
        Jf(l),
        r = Vo(r, "onChange"),
        0 < r.length && (o = new sl("onChange","change",null,o,l),
        t.push({
            event: o,
            listeners: r
        }))
    }
    var Si = null
      , Ei = null;
    function fx(t) {
        Xd(t, 0)
    }
    function Lo(t) {
        var r = br(t);
        if (mr(r))
            return t
    }
    function dx(t, r) {
        if (t === "change")
            return r
    }
    var Dd = !1;
    if (d) {
        var dl;
        if (d) {
            var hl = "oninput"in document;
            if (!hl) {
                var Ld = document.createElement("div");
                Ld.setAttribute("oninput", "return;"),
                hl = typeof Ld.oninput == "function"
            }
            dl = hl
        } else
            dl = !1;
        Dd = dl && (!document.documentMode || 9 < document.documentMode)
    }
    function jd() {
        Si && (Si.detachEvent("onpropertychange", Id),
        Ei = Si = null)
    }
    function Id(t) {
        if (t.propertyName === "value" && Lo(Ei)) {
            var r = [];
            Nd(r, Ei, t, Ka(t)),
            rd(fx, r)
        }
    }
    function hx(t, r, o) {
        t === "focusin" ? (jd(),
        Si = r,
        Ei = o,
        Si.attachEvent("onpropertychange", Id)) : t === "focusout" && jd()
    }
    function px(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Lo(Ei)
    }
    function mx(t, r) {
        if (t === "click")
            return Lo(r)
    }
    function gx(t, r) {
        if (t === "input" || t === "change")
            return Lo(r)
    }
    function yx(t, r) {
        return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r
    }
    var Mt = typeof Object.is == "function" ? Object.is : yx;
    function Pi(t, r) {
        if (Mt(t, r))
            return !0;
        if (typeof t != "object" || t === null || typeof r != "object" || r === null)
            return !1;
        var o = Object.keys(t)
          , l = Object.keys(r);
        if (o.length !== l.length)
            return !1;
        for (l = 0; l < o.length; l++) {
            var f = o[l];
            if (!h.call(r, f) || !Mt(t[f], r[f]))
                return !1
        }
        return !0
    }
    function Fd(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Vd(t, r) {
        var o = Fd(t);
        t = 0;
        for (var l; o; ) {
            if (o.nodeType === 3) {
                if (l = t + o.textContent.length,
                t <= r && l >= r)
                    return {
                        node: o,
                        offset: r - t
                    };
                t = l
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = Fd(o)
        }
    }
    function zd(t, r) {
        return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? zd(t, r.parentNode) : "contains"in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1
    }
    function Bd() {
        for (var t = window, r = tn(); r instanceof t.HTMLIFrameElement; ) {
            try {
                var o = typeof r.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                t = r.contentWindow;
            else
                break;
            r = tn(t.document)
        }
        return r
    }
    function pl(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true")
    }
    function vx(t) {
        var r = Bd()
          , o = t.focusedElem
          , l = t.selectionRange;
        if (r !== o && o && o.ownerDocument && zd(o.ownerDocument.documentElement, o)) {
            if (l !== null && pl(o)) {
                if (r = l.start,
                t = l.end,
                t === void 0 && (t = r),
                "selectionStart"in o)
                    o.selectionStart = r,
                    o.selectionEnd = Math.min(t, o.value.length);
                else if (t = (r = o.ownerDocument || document) && r.defaultView || window,
                t.getSelection) {
                    t = t.getSelection();
                    var f = o.textContent.length
                      , m = Math.min(l.start, f);
                    l = l.end === void 0 ? m : Math.min(l.end, f),
                    !t.extend && m > l && (f = l,
                    l = m,
                    m = f),
                    f = Vd(o, m);
                    var w = Vd(o, l);
                    f && w && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (r = r.createRange(),
                    r.setStart(f.node, f.offset),
                    t.removeAllRanges(),
                    m > l ? (t.addRange(r),
                    t.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset),
                    t.addRange(r)))
                }
            }
            for (r = [],
            t = o; t = t.parentNode; )
                t.nodeType === 1 && r.push({
                    element: t,
                    left: t.scrollLeft,
                    top: t.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < r.length; o++)
                t = r[o],
                t.element.scrollLeft = t.left,
                t.element.scrollTop = t.top
        }
    }
    var wx = d && "documentMode"in document && 11 >= document.documentMode
      , Er = null
      , ml = null
      , Ti = null
      , gl = !1;
    function Ud(t, r, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        gl || Er == null || Er !== tn(l) || (l = Er,
        "selectionStart"in l && pl(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Ti && Pi(Ti, l) || (Ti = l,
        l = Vo(ml, "onSelect"),
        0 < l.length && (r = new sl("onSelect","select",null,r,o),
        t.push({
            event: r,
            listeners: l
        }),
        r.target = Er)))
    }
    function jo(t, r) {
        var o = {};
        return o[t.toLowerCase()] = r.toLowerCase(),
        o["Webkit" + t] = "webkit" + r,
        o["Moz" + t] = "moz" + r,
        o
    }
    var Pr = {
        animationend: jo("Animation", "AnimationEnd"),
        animationiteration: jo("Animation", "AnimationIteration"),
        animationstart: jo("Animation", "AnimationStart"),
        transitionend: jo("Transition", "TransitionEnd")
    }
      , yl = {}
      , Hd = {};
    d && (Hd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Pr.animationend.animation,
    delete Pr.animationiteration.animation,
    delete Pr.animationstart.animation),
    "TransitionEvent"in window || delete Pr.transitionend.transition);
    function Io(t) {
        if (yl[t])
            return yl[t];
        if (!Pr[t])
            return t;
        var r = Pr[t], o;
        for (o in r)
            if (r.hasOwnProperty(o) && o in Hd)
                return yl[t] = r[o];
        return t
    }
    var Wd = Io("animationend")
      , $d = Io("animationiteration")
      , Kd = Io("animationstart")
      , qd = Io("transitionend")
      , Qd = new Map
      , Gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Pn(t, r) {
        Qd.set(t, r),
        u(r, [t])
    }
    for (var vl = 0; vl < Gd.length; vl++) {
        var wl = Gd[vl]
          , xx = wl.toLowerCase()
          , Sx = wl[0].toUpperCase() + wl.slice(1);
        Pn(xx, "on" + Sx)
    }
    Pn(Wd, "onAnimationEnd"),
    Pn($d, "onAnimationIteration"),
    Pn(Kd, "onAnimationStart"),
    Pn("dblclick", "onDoubleClick"),
    Pn("focusin", "onFocus"),
    Pn("focusout", "onBlur"),
    Pn(qd, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Ex = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
    function Yd(t, r, o) {
        var l = t.type || "unknown-event";
        t.currentTarget = o,
        xw(l, r, void 0, t),
        t.currentTarget = null
    }
    function Xd(t, r) {
        r = (r & 4) !== 0;
        for (var o = 0; o < t.length; o++) {
            var l = t[o]
              , f = l.event;
            l = l.listeners;
            e: {
                var m = void 0;
                if (r)
                    for (var w = l.length - 1; 0 <= w; w--) {
                        var C = l[w]
                          , _ = C.instance
                          , z = C.currentTarget;
                        if (C = C.listener,
                        _ !== m && f.isPropagationStopped())
                            break e;
                        Yd(f, C, z),
                        m = _
                    }
                else
                    for (w = 0; w < l.length; w++) {
                        if (C = l[w],
                        _ = C.instance,
                        z = C.currentTarget,
                        C = C.listener,
                        _ !== m && f.isPropagationStopped())
                            break e;
                        Yd(f, C, z),
                        m = _
                    }
            }
        }
        if (So)
            throw t = Ya,
            So = !1,
            Ya = null,
            t
    }
    function be(t, r) {
        var o = r[kl];
        o === void 0 && (o = r[kl] = new Set);
        var l = t + "__bubble";
        o.has(l) || (Zd(r, t, 2, !1),
        o.add(l))
    }
    function xl(t, r, o) {
        var l = 0;
        r && (l |= 4),
        Zd(o, t, l, r)
    }
    var Fo = "_reactListening" + Math.random().toString(36).slice(2);
    function bi(t) {
        if (!t[Fo]) {
            t[Fo] = !0,
            s.forEach(function(o) {
                o !== "selectionchange" && (Ex.has(o) || xl(o, !1, t),
                xl(o, !0, t))
            });
            var r = t.nodeType === 9 ? t : t.ownerDocument;
            r === null || r[Fo] || (r[Fo] = !0,
            xl("selectionchange", !1, r))
        }
    }
    function Zd(t, r, o, l) {
        switch (Sd(r)) {
        case 1:
            var f = jw;
            break;
        case 4:
            f = Iw;
            break;
        default:
            f = rl
        }
        o = f.bind(null, r, o, t),
        f = void 0,
        !Ga || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0),
        l ? f !== void 0 ? t.addEventListener(r, o, {
            capture: !0,
            passive: f
        }) : t.addEventListener(r, o, !0) : f !== void 0 ? t.addEventListener(r, o, {
            passive: f
        }) : t.addEventListener(r, o, !1)
    }
    function Sl(t, r, o, l, f) {
        var m = l;
        if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var w = l.tag;
                if (w === 3 || w === 4) {
                    var C = l.stateNode.containerInfo;
                    if (C === f || C.nodeType === 8 && C.parentNode === f)
                        break;
                    if (w === 4)
                        for (w = l.return; w !== null; ) {
                            var _ = w.tag;
                            if ((_ === 3 || _ === 4) && (_ = w.stateNode.containerInfo,
                            _ === f || _.nodeType === 8 && _.parentNode === f))
                                return;
                            w = w.return
                        }
                    for (; C !== null; ) {
                        if (w = Qn(C),
                        w === null)
                            return;
                        if (_ = w.tag,
                        _ === 5 || _ === 6) {
                            l = m = w;
                            continue e
                        }
                        C = C.parentNode
                    }
                }
                l = l.return
            }
        rd(function() {
            var z = m
              , Q = Ka(o)
              , G = [];
            e: {
                var q = Qd.get(t);
                if (q !== void 0) {
                    var ne = sl
                      , ie = t;
                    switch (t) {
                    case "keypress":
                        if (Mo(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        ne = Zw;
                        break;
                    case "focusin":
                        ie = "focus",
                        ne = ul;
                        break;
                    case "focusout":
                        ie = "blur",
                        ne = ul;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        ne = ul;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        ne = Td;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        ne = zw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        ne = tx;
                        break;
                    case Wd:
                    case $d:
                    case Kd:
                        ne = Hw;
                        break;
                    case qd:
                        ne = rx;
                        break;
                    case "scroll":
                        ne = Fw;
                        break;
                    case "wheel":
                        ne = ox;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        ne = $w;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        ne = bd
                    }
                    var se = (r & 4) !== 0
                      , ze = !se && t === "scroll"
                      , j = se ? q !== null ? q + "Capture" : null : q;
                    se = [];
                    for (var O = z, I; O !== null; ) {
                        I = O;
                        var J = I.stateNode;
                        if (I.tag === 5 && J !== null && (I = J,
                        j !== null && (J = li(O, j),
                        J != null && se.push(ki(O, J, I)))),
                        ze)
                            break;
                        O = O.return
                    }
                    0 < se.length && (q = new ne(q,ie,null,o,Q),
                    G.push({
                        event: q,
                        listeners: se
                    }))
                }
            }
            if ((r & 7) === 0) {
                e: {
                    if (q = t === "mouseover" || t === "pointerover",
                    ne = t === "mouseout" || t === "pointerout",
                    q && o !== $a && (ie = o.relatedTarget || o.fromElement) && (Qn(ie) || ie[nn]))
                        break e;
                    if ((ne || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window,
                    ne ? (ie = o.relatedTarget || o.toElement,
                    ne = z,
                    ie = ie ? Qn(ie) : null,
                    ie !== null && (ze = qn(ie),
                    ie !== ze || ie.tag !== 5 && ie.tag !== 6) && (ie = null)) : (ne = null,
                    ie = z),
                    ne !== ie)) {
                        if (se = Td,
                        J = "onMouseLeave",
                        j = "onMouseEnter",
                        O = "mouse",
                        (t === "pointerout" || t === "pointerover") && (se = bd,
                        J = "onPointerLeave",
                        j = "onPointerEnter",
                        O = "pointer"),
                        ze = ne == null ? q : br(ne),
                        I = ie == null ? q : br(ie),
                        q = new se(J,O + "leave",ne,o,Q),
                        q.target = ze,
                        q.relatedTarget = I,
                        J = null,
                        Qn(Q) === z && (se = new se(j,O + "enter",ie,o,Q),
                        se.target = I,
                        se.relatedTarget = ze,
                        J = se),
                        ze = J,
                        ne && ie)
                            t: {
                                for (se = ne,
                                j = ie,
                                O = 0,
                                I = se; I; I = Tr(I))
                                    O++;
                                for (I = 0,
                                J = j; J; J = Tr(J))
                                    I++;
                                for (; 0 < O - I; )
                                    se = Tr(se),
                                    O--;
                                for (; 0 < I - O; )
                                    j = Tr(j),
                                    I--;
                                for (; O--; ) {
                                    if (se === j || j !== null && se === j.alternate)
                                        break t;
                                    se = Tr(se),
                                    j = Tr(j)
                                }
                                se = null
                            }
                        else
                            se = null;
                        ne !== null && Jd(G, q, ne, se, !1),
                        ie !== null && ze !== null && Jd(G, ze, ie, se, !0)
                    }
                }
                e: {
                    if (q = z ? br(z) : window,
                    ne = q.nodeName && q.nodeName.toLowerCase(),
                    ne === "select" || ne === "input" && q.type === "file")
                        var ae = dx;
                    else if (Md(q))
                        if (Dd)
                            ae = gx;
                        else {
                            ae = px;
                            var fe = hx
                        }
                    else
                        (ne = q.nodeName) && ne.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (ae = mx);
                    if (ae && (ae = ae(t, z))) {
                        Nd(G, ae, o, Q);
                        break e
                    }
                    fe && fe(t, q, z),
                    t === "focusout" && (fe = q._wrapperState) && fe.controlled && q.type === "number" && za(q, "number", q.value)
                }
                switch (fe = z ? br(z) : window,
                t) {
                case "focusin":
                    (Md(fe) || fe.contentEditable === "true") && (Er = fe,
                    ml = z,
                    Ti = null);
                    break;
                case "focusout":
                    Ti = ml = Er = null;
                    break;
                case "mousedown":
                    gl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    gl = !1,
                    Ud(G, o, Q);
                    break;
                case "selectionchange":
                    if (wx)
                        break;
                case "keydown":
                case "keyup":
                    Ud(G, o, Q)
                }
                var de;
                if (fl)
                    e: {
                        switch (t) {
                        case "compositionstart":
                            var me = "onCompositionStart";
                            break e;
                        case "compositionend":
                            me = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            me = "onCompositionUpdate";
                            break e
                        }
                        me = void 0
                    }
                else
                    Sr ? _d(t, o) && (me = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (me = "onCompositionStart");
                me && (kd && o.locale !== "ko" && (Sr || me !== "onCompositionStart" ? me === "onCompositionEnd" && Sr && (de = Ed()) : (En = Q,
                ol = "value"in En ? En.value : En.textContent,
                Sr = !0)),
                fe = Vo(z, me),
                0 < fe.length && (me = new Cd(me,t,null,o,Q),
                G.push({
                    event: me,
                    listeners: fe
                }),
                de ? me.data = de : (de = Od(o),
                de !== null && (me.data = de)))),
                (de = ax ? lx(t, o) : ux(t, o)) && (z = Vo(z, "onBeforeInput"),
                0 < z.length && (Q = new Cd("onBeforeInput","beforeinput",null,o,Q),
                G.push({
                    event: Q,
                    listeners: z
                }),
                Q.data = de))
            }
            Xd(G, r)
        })
    }
    function ki(t, r, o) {
        return {
            instance: t,
            listener: r,
            currentTarget: o
        }
    }
    function Vo(t, r) {
        for (var o = r + "Capture", l = []; t !== null; ) {
            var f = t
              , m = f.stateNode;
            f.tag === 5 && m !== null && (f = m,
            m = li(t, o),
            m != null && l.unshift(ki(t, m, f)),
            m = li(t, r),
            m != null && l.push(ki(t, m, f))),
            t = t.return
        }
        return l
    }
    function Tr(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5);
        return t || null
    }
    function Jd(t, r, o, l, f) {
        for (var m = r._reactName, w = []; o !== null && o !== l; ) {
            var C = o
              , _ = C.alternate
              , z = C.stateNode;
            if (_ !== null && _ === l)
                break;
            C.tag === 5 && z !== null && (C = z,
            f ? (_ = li(o, m),
            _ != null && w.unshift(ki(o, _, C))) : f || (_ = li(o, m),
            _ != null && w.push(ki(o, _, C)))),
            o = o.return
        }
        w.length !== 0 && t.push({
            event: r,
            listeners: w
        })
    }
    var Px = /\r\n?/g
      , Tx = /\u0000|\uFFFD/g;
    function eh(t) {
        return (typeof t == "string" ? t : "" + t).replace(Px, `
`).replace(Tx, "")
    }
    function zo(t, r, o) {
        if (r = eh(r),
        eh(t) !== r && o)
            throw Error(i(425))
    }
    function Bo() {}
    var El = null
      , Pl = null;
    function Tl(t, r) {
        return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
    }
    var Cl = typeof setTimeout == "function" ? setTimeout : void 0
      , Cx = typeof clearTimeout == "function" ? clearTimeout : void 0
      , th = typeof Promise == "function" ? Promise : void 0
      , bx = typeof queueMicrotask == "function" ? queueMicrotask : typeof th < "u" ? function(t) {
        return th.resolve(null).then(t).catch(kx)
    }
    : Cl;
    function kx(t) {
        setTimeout(function() {
            throw t
        })
    }
    function bl(t, r) {
        var o = r
          , l = 0;
        do {
            var f = o.nextSibling;
            if (t.removeChild(o),
            f && f.nodeType === 8)
                if (o = f.data,
                o === "/$") {
                    if (l === 0) {
                        t.removeChild(f),
                        yi(r);
                        return
                    }
                    l--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = f
        } while (o);
        yi(r)
    }
    function Tn(t) {
        for (; t != null; t = t.nextSibling) {
            var r = t.nodeType;
            if (r === 1 || r === 3)
                break;
            if (r === 8) {
                if (r = t.data,
                r === "$" || r === "$!" || r === "$?")
                    break;
                if (r === "/$")
                    return null
            }
        }
        return t
    }
    function nh(t) {
        t = t.previousSibling;
        for (var r = 0; t; ) {
            if (t.nodeType === 8) {
                var o = t.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (r === 0)
                        return t;
                    r--
                } else
                    o === "/$" && r++
            }
            t = t.previousSibling
        }
        return null
    }
    var Cr = Math.random().toString(36).slice(2)
      , Wt = "__reactFiber$" + Cr
      , Ri = "__reactProps$" + Cr
      , nn = "__reactContainer$" + Cr
      , kl = "__reactEvents$" + Cr
      , Rx = "__reactListeners$" + Cr
      , Ax = "__reactHandles$" + Cr;
    function Qn(t) {
        var r = t[Wt];
        if (r)
            return r;
        for (var o = t.parentNode; o; ) {
            if (r = o[nn] || o[Wt]) {
                if (o = r.alternate,
                r.child !== null || o !== null && o.child !== null)
                    for (t = nh(t); t !== null; ) {
                        if (o = t[Wt])
                            return o;
                        t = nh(t)
                    }
                return r
            }
            t = o,
            o = t.parentNode
        }
        return null
    }
    function Ai(t) {
        return t = t[Wt] || t[nn],
        !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }
    function br(t) {
        if (t.tag === 5 || t.tag === 6)
            return t.stateNode;
        throw Error(i(33))
    }
    function Uo(t) {
        return t[Ri] || null
    }
    var Rl = []
      , kr = -1;
    function Cn(t) {
        return {
            current: t
        }
    }
    function ke(t) {
        0 > kr || (t.current = Rl[kr],
        Rl[kr] = null,
        kr--)
    }
    function Ce(t, r) {
        kr++,
        Rl[kr] = t.current,
        t.current = r
    }
    var bn = {}
      , Ze = Cn(bn)
      , at = Cn(!1)
      , Gn = bn;
    function Rr(t, r) {
        var o = t.type.contextTypes;
        if (!o)
            return bn;
        var l = t.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
            return l.__reactInternalMemoizedMaskedChildContext;
        var f = {}, m;
        for (m in o)
            f[m] = r[m];
        return l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = r,
        t.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function lt(t) {
        return t = t.childContextTypes,
        t != null
    }
    function Ho() {
        ke(at),
        ke(Ze)
    }
    function rh(t, r, o) {
        if (Ze.current !== bn)
            throw Error(i(168));
        Ce(Ze, r),
        Ce(at, o)
    }
    function ih(t, r, o) {
        var l = t.stateNode;
        if (r = r.childContextTypes,
        typeof l.getChildContext != "function")
            return o;
        l = l.getChildContext();
        for (var f in l)
            if (!(f in r))
                throw Error(i(108, ge(t) || "Unknown", f));
        return Z({}, o, l)
    }
    function Wo(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || bn,
        Gn = Ze.current,
        Ce(Ze, t),
        Ce(at, at.current),
        !0
    }
    function oh(t, r, o) {
        var l = t.stateNode;
        if (!l)
            throw Error(i(169));
        o ? (t = ih(t, r, Gn),
        l.__reactInternalMemoizedMergedChildContext = t,
        ke(at),
        ke(Ze),
        Ce(Ze, t)) : ke(at),
        Ce(at, o)
    }
    var rn = null
      , $o = !1
      , Al = !1;
    function sh(t) {
        rn === null ? rn = [t] : rn.push(t)
    }
    function _x(t) {
        $o = !0,
        sh(t)
    }
    function kn() {
        if (!Al && rn !== null) {
            Al = !0;
            var t = 0
              , r = Te;
            try {
                var o = rn;
                for (Te = 1; t < o.length; t++) {
                    var l = o[t];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                rn = null,
                $o = !1
            } catch (f) {
                throw rn !== null && (rn = rn.slice(t + 1)),
                ld(Xa, kn),
                f
            } finally {
                Te = r,
                Al = !1
            }
        }
        return null
    }
    var Ar = []
      , _r = 0
      , Ko = null
      , qo = 0
      , Pt = []
      , Tt = 0
      , Yn = null
      , on = 1
      , sn = "";
    function Xn(t, r) {
        Ar[_r++] = qo,
        Ar[_r++] = Ko,
        Ko = t,
        qo = r
    }
    function ah(t, r, o) {
        Pt[Tt++] = on,
        Pt[Tt++] = sn,
        Pt[Tt++] = Yn,
        Yn = t;
        var l = on;
        t = sn;
        var f = 32 - Ot(l) - 1;
        l &= ~(1 << f),
        o += 1;
        var m = 32 - Ot(r) + f;
        if (30 < m) {
            var w = f - f % 5;
            m = (l & (1 << w) - 1).toString(32),
            l >>= w,
            f -= w,
            on = 1 << 32 - Ot(r) + f | o << f | l,
            sn = m + t
        } else
            on = 1 << m | o << f | l,
            sn = t
    }
    function _l(t) {
        t.return !== null && (Xn(t, 1),
        ah(t, 1, 0))
    }
    function Ol(t) {
        for (; t === Ko; )
            Ko = Ar[--_r],
            Ar[_r] = null,
            qo = Ar[--_r],
            Ar[_r] = null;
        for (; t === Yn; )
            Yn = Pt[--Tt],
            Pt[Tt] = null,
            sn = Pt[--Tt],
            Pt[Tt] = null,
            on = Pt[--Tt],
            Pt[Tt] = null
    }
    var mt = null
      , gt = null
      , _e = !1
      , Nt = null;
    function lh(t, r) {
        var o = Rt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = r,
        o.return = t,
        r = t.deletions,
        r === null ? (t.deletions = [o],
        t.flags |= 16) : r.push(o)
    }
    function uh(t, r) {
        switch (t.tag) {
        case 5:
            var o = t.type;
            return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r,
            r !== null ? (t.stateNode = r,
            mt = t,
            gt = Tn(r.firstChild),
            !0) : !1;
        case 6:
            return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r,
            r !== null ? (t.stateNode = r,
            mt = t,
            gt = null,
            !0) : !1;
        case 13:
            return r = r.nodeType !== 8 ? null : r,
            r !== null ? (o = Yn !== null ? {
                id: on,
                overflow: sn
            } : null,
            t.memoizedState = {
                dehydrated: r,
                treeContext: o,
                retryLane: 1073741824
            },
            o = Rt(18, null, null, 0),
            o.stateNode = r,
            o.return = t,
            t.child = o,
            mt = t,
            gt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Ml(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }
    function Nl(t) {
        if (_e) {
            var r = gt;
            if (r) {
                var o = r;
                if (!uh(t, r)) {
                    if (Ml(t))
                        throw Error(i(418));
                    r = Tn(o.nextSibling);
                    var l = mt;
                    r && uh(t, r) ? lh(l, o) : (t.flags = t.flags & -4097 | 2,
                    _e = !1,
                    mt = t)
                }
            } else {
                if (Ml(t))
                    throw Error(i(418));
                t.flags = t.flags & -4097 | 2,
                _e = !1,
                mt = t
            }
        }
    }
    function ch(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
            t = t.return;
        mt = t
    }
    function Qo(t) {
        if (t !== mt)
            return !1;
        if (!_e)
            return ch(t),
            _e = !0,
            !1;
        var r;
        if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type,
        r = r !== "head" && r !== "body" && !Tl(t.type, t.memoizedProps)),
        r && (r = gt)) {
            if (Ml(t))
                throw fh(),
                Error(i(418));
            for (; r; )
                lh(t, r),
                r = Tn(r.nextSibling)
        }
        if (ch(t),
        t.tag === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(i(317));
            e: {
                for (t = t.nextSibling,
                r = 0; t; ) {
                    if (t.nodeType === 8) {
                        var o = t.data;
                        if (o === "/$") {
                            if (r === 0) {
                                gt = Tn(t.nextSibling);
                                break e
                            }
                            r--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || r++
                    }
                    t = t.nextSibling
                }
                gt = null
            }
        } else
            gt = mt ? Tn(t.stateNode.nextSibling) : null;
        return !0
    }
    function fh() {
        for (var t = gt; t; )
            t = Tn(t.nextSibling)
    }
    function Or() {
        gt = mt = null,
        _e = !1
    }
    function Dl(t) {
        Nt === null ? Nt = [t] : Nt.push(t)
    }
    var Ox = N.ReactCurrentBatchConfig;
    function _i(t, r, o) {
        if (t = o.ref,
        t !== null && typeof t != "function" && typeof t != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(i(309));
                    var l = o.stateNode
                }
                if (!l)
                    throw Error(i(147, t));
                var f = l
                  , m = "" + t;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(w) {
                    var C = f.refs;
                    w === null ? delete C[m] : C[m] = w
                }
                ,
                r._stringRef = m,
                r)
            }
            if (typeof t != "string")
                throw Error(i(284));
            if (!o._owner)
                throw Error(i(290, t))
        }
        return t
    }
    function Go(t, r) {
        throw t = Object.prototype.toString.call(r),
        Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t))
    }
    function dh(t) {
        var r = t._init;
        return r(t._payload)
    }
    function hh(t) {
        function r(j, O) {
            if (t) {
                var I = j.deletions;
                I === null ? (j.deletions = [O],
                j.flags |= 16) : I.push(O)
            }
        }
        function o(j, O) {
            if (!t)
                return null;
            for (; O !== null; )
                r(j, O),
                O = O.sibling;
            return null
        }
        function l(j, O) {
            for (j = new Map; O !== null; )
                O.key !== null ? j.set(O.key, O) : j.set(O.index, O),
                O = O.sibling;
            return j
        }
        function f(j, O) {
            return j = Ln(j, O),
            j.index = 0,
            j.sibling = null,
            j
        }
        function m(j, O, I) {
            return j.index = I,
            t ? (I = j.alternate,
            I !== null ? (I = I.index,
            I < O ? (j.flags |= 2,
            O) : I) : (j.flags |= 2,
            O)) : (j.flags |= 1048576,
            O)
        }
        function w(j) {
            return t && j.alternate === null && (j.flags |= 2),
            j
        }
        function C(j, O, I, J) {
            return O === null || O.tag !== 6 ? (O = Cu(I, j.mode, J),
            O.return = j,
            O) : (O = f(O, I),
            O.return = j,
            O)
        }
        function _(j, O, I, J) {
            var ae = I.type;
            return ae === F ? Q(j, O, I.props.children, J, I.key) : O !== null && (O.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === oe && dh(ae) === O.type) ? (J = f(O, I.props),
            J.ref = _i(j, O, I),
            J.return = j,
            J) : (J = ws(I.type, I.key, I.props, null, j.mode, J),
            J.ref = _i(j, O, I),
            J.return = j,
            J)
        }
        function z(j, O, I, J) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== I.containerInfo || O.stateNode.implementation !== I.implementation ? (O = bu(I, j.mode, J),
            O.return = j,
            O) : (O = f(O, I.children || []),
            O.return = j,
            O)
        }
        function Q(j, O, I, J, ae) {
            return O === null || O.tag !== 7 ? (O = or(I, j.mode, J, ae),
            O.return = j,
            O) : (O = f(O, I),
            O.return = j,
            O)
        }
        function G(j, O, I) {
            if (typeof O == "string" && O !== "" || typeof O == "number")
                return O = Cu("" + O, j.mode, I),
                O.return = j,
                O;
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case D:
                    return I = ws(O.type, O.key, O.props, null, j.mode, I),
                    I.ref = _i(j, null, O),
                    I.return = j,
                    I;
                case V:
                    return O = bu(O, j.mode, I),
                    O.return = j,
                    O;
                case oe:
                    var J = O._init;
                    return G(j, J(O._payload), I)
                }
                if (oi(O) || ee(O))
                    return O = or(O, j.mode, I, null),
                    O.return = j,
                    O;
                Go(j, O)
            }
            return null
        }
        function q(j, O, I, J) {
            var ae = O !== null ? O.key : null;
            if (typeof I == "string" && I !== "" || typeof I == "number")
                return ae !== null ? null : C(j, O, "" + I, J);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case D:
                    return I.key === ae ? _(j, O, I, J) : null;
                case V:
                    return I.key === ae ? z(j, O, I, J) : null;
                case oe:
                    return ae = I._init,
                    q(j, O, ae(I._payload), J)
                }
                if (oi(I) || ee(I))
                    return ae !== null ? null : Q(j, O, I, J, null);
                Go(j, I)
            }
            return null
        }
        function ne(j, O, I, J, ae) {
            if (typeof J == "string" && J !== "" || typeof J == "number")
                return j = j.get(I) || null,
                C(O, j, "" + J, ae);
            if (typeof J == "object" && J !== null) {
                switch (J.$$typeof) {
                case D:
                    return j = j.get(J.key === null ? I : J.key) || null,
                    _(O, j, J, ae);
                case V:
                    return j = j.get(J.key === null ? I : J.key) || null,
                    z(O, j, J, ae);
                case oe:
                    var fe = J._init;
                    return ne(j, O, I, fe(J._payload), ae)
                }
                if (oi(J) || ee(J))
                    return j = j.get(I) || null,
                    Q(O, j, J, ae, null);
                Go(O, J)
            }
            return null
        }
        function ie(j, O, I, J) {
            for (var ae = null, fe = null, de = O, me = O = 0, Qe = null; de !== null && me < I.length; me++) {
                de.index > me ? (Qe = de,
                de = null) : Qe = de.sibling;
                var Pe = q(j, de, I[me], J);
                if (Pe === null) {
                    de === null && (de = Qe);
                    break
                }
                t && de && Pe.alternate === null && r(j, de),
                O = m(Pe, O, me),
                fe === null ? ae = Pe : fe.sibling = Pe,
                fe = Pe,
                de = Qe
            }
            if (me === I.length)
                return o(j, de),
                _e && Xn(j, me),
                ae;
            if (de === null) {
                for (; me < I.length; me++)
                    de = G(j, I[me], J),
                    de !== null && (O = m(de, O, me),
                    fe === null ? ae = de : fe.sibling = de,
                    fe = de);
                return _e && Xn(j, me),
                ae
            }
            for (de = l(j, de); me < I.length; me++)
                Qe = ne(de, j, me, I[me], J),
                Qe !== null && (t && Qe.alternate !== null && de.delete(Qe.key === null ? me : Qe.key),
                O = m(Qe, O, me),
                fe === null ? ae = Qe : fe.sibling = Qe,
                fe = Qe);
            return t && de.forEach(function(jn) {
                return r(j, jn)
            }),
            _e && Xn(j, me),
            ae
        }
        function se(j, O, I, J) {
            var ae = ee(I);
            if (typeof ae != "function")
                throw Error(i(150));
            if (I = ae.call(I),
            I == null)
                throw Error(i(151));
            for (var fe = ae = null, de = O, me = O = 0, Qe = null, Pe = I.next(); de !== null && !Pe.done; me++,
            Pe = I.next()) {
                de.index > me ? (Qe = de,
                de = null) : Qe = de.sibling;
                var jn = q(j, de, Pe.value, J);
                if (jn === null) {
                    de === null && (de = Qe);
                    break
                }
                t && de && jn.alternate === null && r(j, de),
                O = m(jn, O, me),
                fe === null ? ae = jn : fe.sibling = jn,
                fe = jn,
                de = Qe
            }
            if (Pe.done)
                return o(j, de),
                _e && Xn(j, me),
                ae;
            if (de === null) {
                for (; !Pe.done; me++,
                Pe = I.next())
                    Pe = G(j, Pe.value, J),
                    Pe !== null && (O = m(Pe, O, me),
                    fe === null ? ae = Pe : fe.sibling = Pe,
                    fe = Pe);
                return _e && Xn(j, me),
                ae
            }
            for (de = l(j, de); !Pe.done; me++,
            Pe = I.next())
                Pe = ne(de, j, me, Pe.value, J),
                Pe !== null && (t && Pe.alternate !== null && de.delete(Pe.key === null ? me : Pe.key),
                O = m(Pe, O, me),
                fe === null ? ae = Pe : fe.sibling = Pe,
                fe = Pe);
            return t && de.forEach(function(cS) {
                return r(j, cS)
            }),
            _e && Xn(j, me),
            ae
        }
        function ze(j, O, I, J) {
            if (typeof I == "object" && I !== null && I.type === F && I.key === null && (I = I.props.children),
            typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case D:
                    e: {
                        for (var ae = I.key, fe = O; fe !== null; ) {
                            if (fe.key === ae) {
                                if (ae = I.type,
                                ae === F) {
                                    if (fe.tag === 7) {
                                        o(j, fe.sibling),
                                        O = f(fe, I.props.children),
                                        O.return = j,
                                        j = O;
                                        break e
                                    }
                                } else if (fe.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === oe && dh(ae) === fe.type) {
                                    o(j, fe.sibling),
                                    O = f(fe, I.props),
                                    O.ref = _i(j, fe, I),
                                    O.return = j,
                                    j = O;
                                    break e
                                }
                                o(j, fe);
                                break
                            } else
                                r(j, fe);
                            fe = fe.sibling
                        }
                        I.type === F ? (O = or(I.props.children, j.mode, J, I.key),
                        O.return = j,
                        j = O) : (J = ws(I.type, I.key, I.props, null, j.mode, J),
                        J.ref = _i(j, O, I),
                        J.return = j,
                        j = J)
                    }
                    return w(j);
                case V:
                    e: {
                        for (fe = I.key; O !== null; ) {
                            if (O.key === fe)
                                if (O.tag === 4 && O.stateNode.containerInfo === I.containerInfo && O.stateNode.implementation === I.implementation) {
                                    o(j, O.sibling),
                                    O = f(O, I.children || []),
                                    O.return = j,
                                    j = O;
                                    break e
                                } else {
                                    o(j, O);
                                    break
                                }
                            else
                                r(j, O);
                            O = O.sibling
                        }
                        O = bu(I, j.mode, J),
                        O.return = j,
                        j = O
                    }
                    return w(j);
                case oe:
                    return fe = I._init,
                    ze(j, O, fe(I._payload), J)
                }
                if (oi(I))
                    return ie(j, O, I, J);
                if (ee(I))
                    return se(j, O, I, J);
                Go(j, I)
            }
            return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I,
            O !== null && O.tag === 6 ? (o(j, O.sibling),
            O = f(O, I),
            O.return = j,
            j = O) : (o(j, O),
            O = Cu(I, j.mode, J),
            O.return = j,
            j = O),
            w(j)) : o(j, O)
        }
        return ze
    }
    var Mr = hh(!0)
      , ph = hh(!1)
      , Yo = Cn(null)
      , Xo = null
      , Nr = null
      , Ll = null;
    function jl() {
        Ll = Nr = Xo = null
    }
    function Il(t) {
        var r = Yo.current;
        ke(Yo),
        t._currentValue = r
    }
    function Fl(t, r, o) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & r) !== r ? (t.childLanes |= r,
            l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
            t === o)
                break;
            t = t.return
        }
    }
    function Dr(t, r) {
        Xo = t,
        Ll = Nr = null,
        t = t.dependencies,
        t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (ut = !0),
        t.firstContext = null)
    }
    function Ct(t) {
        var r = t._currentValue;
        if (Ll !== t)
            if (t = {
                context: t,
                memoizedValue: r,
                next: null
            },
            Nr === null) {
                if (Xo === null)
                    throw Error(i(308));
                Nr = t,
                Xo.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else
                Nr = Nr.next = t;
        return r
    }
    var Zn = null;
    function Vl(t) {
        Zn === null ? Zn = [t] : Zn.push(t)
    }
    function mh(t, r, o, l) {
        var f = r.interleaved;
        return f === null ? (o.next = o,
        Vl(r)) : (o.next = f.next,
        f.next = o),
        r.interleaved = o,
        an(t, l)
    }
    function an(t, r) {
        t.lanes |= r;
        var o = t.alternate;
        for (o !== null && (o.lanes |= r),
        o = t,
        t = t.return; t !== null; )
            t.childLanes |= r,
            o = t.alternate,
            o !== null && (o.childLanes |= r),
            o = t,
            t = t.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var Rn = !1;
    function zl(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function gh(t, r) {
        t = t.updateQueue,
        r.updateQueue === t && (r.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }
    function ln(t, r) {
        return {
            eventTime: t,
            lane: r,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function An(t, r, o) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ee & 2) !== 0) {
            var f = l.pending;
            return f === null ? r.next = r : (r.next = f.next,
            f.next = r),
            l.pending = r,
            an(t, o)
        }
        return f = l.interleaved,
        f === null ? (r.next = r,
        Vl(l)) : (r.next = f.next,
        f.next = r),
        l.interleaved = r,
        an(t, o)
    }
    function Zo(t, r, o) {
        if (r = r.updateQueue,
        r !== null && (r = r.shared,
        (o & 4194240) !== 0)) {
            var l = r.lanes;
            l &= t.pendingLanes,
            o |= l,
            r.lanes = o,
            el(t, o)
        }
    }
    function yh(t, r) {
        var o = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        o === l)) {
            var f = null
              , m = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var w = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    m === null ? f = m = w : m = m.next = w,
                    o = o.next
                } while (o !== null);
                m === null ? f = m = r : m = m.next = r
            } else
                f = m = r;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: m,
                shared: l.shared,
                effects: l.effects
            },
            t.updateQueue = o;
            return
        }
        t = o.lastBaseUpdate,
        t === null ? o.firstBaseUpdate = r : t.next = r,
        o.lastBaseUpdate = r
    }
    function Jo(t, r, o, l) {
        var f = t.updateQueue;
        Rn = !1;
        var m = f.firstBaseUpdate
          , w = f.lastBaseUpdate
          , C = f.shared.pending;
        if (C !== null) {
            f.shared.pending = null;
            var _ = C
              , z = _.next;
            _.next = null,
            w === null ? m = z : w.next = z,
            w = _;
            var Q = t.alternate;
            Q !== null && (Q = Q.updateQueue,
            C = Q.lastBaseUpdate,
            C !== w && (C === null ? Q.firstBaseUpdate = z : C.next = z,
            Q.lastBaseUpdate = _))
        }
        if (m !== null) {
            var G = f.baseState;
            w = 0,
            Q = z = _ = null,
            C = m;
            do {
                var q = C.lane
                  , ne = C.eventTime;
                if ((l & q) === q) {
                    Q !== null && (Q = Q.next = {
                        eventTime: ne,
                        lane: 0,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    });
                    e: {
                        var ie = t
                          , se = C;
                        switch (q = r,
                        ne = o,
                        se.tag) {
                        case 1:
                            if (ie = se.payload,
                            typeof ie == "function") {
                                G = ie.call(ne, G, q);
                                break e
                            }
                            G = ie;
                            break e;
                        case 3:
                            ie.flags = ie.flags & -65537 | 128;
                        case 0:
                            if (ie = se.payload,
                            q = typeof ie == "function" ? ie.call(ne, G, q) : ie,
                            q == null)
                                break e;
                            G = Z({}, G, q);
                            break e;
                        case 2:
                            Rn = !0
                        }
                    }
                    C.callback !== null && C.lane !== 0 && (t.flags |= 64,
                    q = f.effects,
                    q === null ? f.effects = [C] : q.push(C))
                } else
                    ne = {
                        eventTime: ne,
                        lane: q,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    },
                    Q === null ? (z = Q = ne,
                    _ = G) : Q = Q.next = ne,
                    w |= q;
                if (C = C.next,
                C === null) {
                    if (C = f.shared.pending,
                    C === null)
                        break;
                    q = C,
                    C = q.next,
                    q.next = null,
                    f.lastBaseUpdate = q,
                    f.shared.pending = null
                }
            } while (!0);
            if (Q === null && (_ = G),
            f.baseState = _,
            f.firstBaseUpdate = z,
            f.lastBaseUpdate = Q,
            r = f.shared.interleaved,
            r !== null) {
                f = r;
                do
                    w |= f.lane,
                    f = f.next;
                while (f !== r)
            } else
                m === null && (f.shared.lanes = 0);
            tr |= w,
            t.lanes = w,
            t.memoizedState = G
        }
    }
    function vh(t, r, o) {
        if (t = r.effects,
        r.effects = null,
        t !== null)
            for (r = 0; r < t.length; r++) {
                var l = t[r]
                  , f = l.callback;
                if (f !== null) {
                    if (l.callback = null,
                    l = o,
                    typeof f != "function")
                        throw Error(i(191, f));
                    f.call(l)
                }
            }
    }
    var Oi = {}
      , $t = Cn(Oi)
      , Mi = Cn(Oi)
      , Ni = Cn(Oi);
    function Jn(t) {
        if (t === Oi)
            throw Error(i(174));
        return t
    }
    function Bl(t, r) {
        switch (Ce(Ni, r),
        Ce(Mi, t),
        Ce($t, Oi),
        t = r.nodeType,
        t) {
        case 9:
        case 11:
            r = (r = r.documentElement) ? r.namespaceURI : Ua(null, "");
            break;
        default:
            t = t === 8 ? r.parentNode : r,
            r = t.namespaceURI || null,
            t = t.tagName,
            r = Ua(r, t)
        }
        ke($t),
        Ce($t, r)
    }
    function Lr() {
        ke($t),
        ke(Mi),
        ke(Ni)
    }
    function wh(t) {
        Jn(Ni.current);
        var r = Jn($t.current)
          , o = Ua(r, t.type);
        r !== o && (Ce(Mi, t),
        Ce($t, o))
    }
    function Ul(t) {
        Mi.current === t && (ke($t),
        ke(Mi))
    }
    var De = Cn(0);
    function es(t) {
        for (var r = t; r !== null; ) {
            if (r.tag === 13) {
                var o = r.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return r
            } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
                if ((r.flags & 128) !== 0)
                    return r
            } else if (r.child !== null) {
                r.child.return = r,
                r = r.child;
                continue
            }
            if (r === t)
                break;
            for (; r.sibling === null; ) {
                if (r.return === null || r.return === t)
                    return null;
                r = r.return
            }
            r.sibling.return = r.return,
            r = r.sibling
        }
        return null
    }
    var Hl = [];
    function Wl() {
        for (var t = 0; t < Hl.length; t++)
            Hl[t]._workInProgressVersionPrimary = null;
        Hl.length = 0
    }
    var ts = N.ReactCurrentDispatcher
      , $l = N.ReactCurrentBatchConfig
      , er = 0
      , Le = null
      , He = null
      , Ke = null
      , ns = !1
      , Di = !1
      , Li = 0
      , Mx = 0;
    function Je() {
        throw Error(i(321))
    }
    function Kl(t, r) {
        if (r === null)
            return !1;
        for (var o = 0; o < r.length && o < t.length; o++)
            if (!Mt(t[o], r[o]))
                return !1;
        return !0
    }
    function ql(t, r, o, l, f, m) {
        if (er = m,
        Le = r,
        r.memoizedState = null,
        r.updateQueue = null,
        r.lanes = 0,
        ts.current = t === null || t.memoizedState === null ? jx : Ix,
        t = o(l, f),
        Di) {
            m = 0;
            do {
                if (Di = !1,
                Li = 0,
                25 <= m)
                    throw Error(i(301));
                m += 1,
                Ke = He = null,
                r.updateQueue = null,
                ts.current = Fx,
                t = o(l, f)
            } while (Di)
        }
        if (ts.current = os,
        r = He !== null && He.next !== null,
        er = 0,
        Ke = He = Le = null,
        ns = !1,
        r)
            throw Error(i(300));
        return t
    }
    function Ql() {
        var t = Li !== 0;
        return Li = 0,
        t
    }
    function Kt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ke === null ? Le.memoizedState = Ke = t : Ke = Ke.next = t,
        Ke
    }
    function bt() {
        if (He === null) {
            var t = Le.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = He.next;
        var r = Ke === null ? Le.memoizedState : Ke.next;
        if (r !== null)
            Ke = r,
            He = t;
        else {
            if (t === null)
                throw Error(i(310));
            He = t,
            t = {
                memoizedState: He.memoizedState,
                baseState: He.baseState,
                baseQueue: He.baseQueue,
                queue: He.queue,
                next: null
            },
            Ke === null ? Le.memoizedState = Ke = t : Ke = Ke.next = t
        }
        return Ke
    }
    function ji(t, r) {
        return typeof r == "function" ? r(t) : r
    }
    function Gl(t) {
        var r = bt()
          , o = r.queue;
        if (o === null)
            throw Error(i(311));
        o.lastRenderedReducer = t;
        var l = He
          , f = l.baseQueue
          , m = o.pending;
        if (m !== null) {
            if (f !== null) {
                var w = f.next;
                f.next = m.next,
                m.next = w
            }
            l.baseQueue = f = m,
            o.pending = null
        }
        if (f !== null) {
            m = f.next,
            l = l.baseState;
            var C = w = null
              , _ = null
              , z = m;
            do {
                var Q = z.lane;
                if ((er & Q) === Q)
                    _ !== null && (_ = _.next = {
                        lane: 0,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }),
                    l = z.hasEagerState ? z.eagerState : t(l, z.action);
                else {
                    var G = {
                        lane: Q,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    };
                    _ === null ? (C = _ = G,
                    w = l) : _ = _.next = G,
                    Le.lanes |= Q,
                    tr |= Q
                }
                z = z.next
            } while (z !== null && z !== m);
            _ === null ? w = l : _.next = C,
            Mt(l, r.memoizedState) || (ut = !0),
            r.memoizedState = l,
            r.baseState = w,
            r.baseQueue = _,
            o.lastRenderedState = l
        }
        if (t = o.interleaved,
        t !== null) {
            f = t;
            do
                m = f.lane,
                Le.lanes |= m,
                tr |= m,
                f = f.next;
            while (f !== t)
        } else
            f === null && (o.lanes = 0);
        return [r.memoizedState, o.dispatch]
    }
    function Yl(t) {
        var r = bt()
          , o = r.queue;
        if (o === null)
            throw Error(i(311));
        o.lastRenderedReducer = t;
        var l = o.dispatch
          , f = o.pending
          , m = r.memoizedState;
        if (f !== null) {
            o.pending = null;
            var w = f = f.next;
            do
                m = t(m, w.action),
                w = w.next;
            while (w !== f);
            Mt(m, r.memoizedState) || (ut = !0),
            r.memoizedState = m,
            r.baseQueue === null && (r.baseState = m),
            o.lastRenderedState = m
        }
        return [m, l]
    }
    function xh() {}
    function Sh(t, r) {
        var o = Le
          , l = bt()
          , f = r()
          , m = !Mt(l.memoizedState, f);
        if (m && (l.memoizedState = f,
        ut = !0),
        l = l.queue,
        Xl(Th.bind(null, o, l, t), [t]),
        l.getSnapshot !== r || m || Ke !== null && Ke.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            Ii(9, Ph.bind(null, o, l, f, r), void 0, null),
            qe === null)
                throw Error(i(349));
            (er & 30) !== 0 || Eh(o, r, f)
        }
        return f
    }
    function Eh(t, r, o) {
        t.flags |= 16384,
        t = {
            getSnapshot: r,
            value: o
        },
        r = Le.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        Le.updateQueue = r,
        r.stores = [t]) : (o = r.stores,
        o === null ? r.stores = [t] : o.push(t))
    }
    function Ph(t, r, o, l) {
        r.value = o,
        r.getSnapshot = l,
        Ch(r) && bh(t)
    }
    function Th(t, r, o) {
        return o(function() {
            Ch(r) && bh(t)
        })
    }
    function Ch(t) {
        var r = t.getSnapshot;
        t = t.value;
        try {
            var o = r();
            return !Mt(t, o)
        } catch {
            return !0
        }
    }
    function bh(t) {
        var r = an(t, 1);
        r !== null && It(r, t, 1, -1)
    }
    function kh(t) {
        var r = Kt();
        return typeof t == "function" && (t = t()),
        r.memoizedState = r.baseState = t,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ji,
            lastRenderedState: t
        },
        r.queue = t,
        t = t.dispatch = Lx.bind(null, Le, t),
        [r.memoizedState, t]
    }
    function Ii(t, r, o, l) {
        return t = {
            tag: t,
            create: r,
            destroy: o,
            deps: l,
            next: null
        },
        r = Le.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        Le.updateQueue = r,
        r.lastEffect = t.next = t) : (o = r.lastEffect,
        o === null ? r.lastEffect = t.next = t : (l = o.next,
        o.next = t,
        t.next = l,
        r.lastEffect = t)),
        t
    }
    function Rh() {
        return bt().memoizedState
    }
    function rs(t, r, o, l) {
        var f = Kt();
        Le.flags |= t,
        f.memoizedState = Ii(1 | r, o, void 0, l === void 0 ? null : l)
    }
    function is(t, r, o, l) {
        var f = bt();
        l = l === void 0 ? null : l;
        var m = void 0;
        if (He !== null) {
            var w = He.memoizedState;
            if (m = w.destroy,
            l !== null && Kl(l, w.deps)) {
                f.memoizedState = Ii(r, o, m, l);
                return
            }
        }
        Le.flags |= t,
        f.memoizedState = Ii(1 | r, o, m, l)
    }
    function Ah(t, r) {
        return rs(8390656, 8, t, r)
    }
    function Xl(t, r) {
        return is(2048, 8, t, r)
    }
    function _h(t, r) {
        return is(4, 2, t, r)
    }
    function Oh(t, r) {
        return is(4, 4, t, r)
    }
    function Mh(t, r) {
        if (typeof r == "function")
            return t = t(),
            r(t),
            function() {
                r(null)
            }
            ;
        if (r != null)
            return t = t(),
            r.current = t,
            function() {
                r.current = null
            }
    }
    function Nh(t, r, o) {
        return o = o != null ? o.concat([t]) : null,
        is(4, 4, Mh.bind(null, r, t), o)
    }
    function Zl() {}
    function Dh(t, r) {
        var o = bt();
        r = r === void 0 ? null : r;
        var l = o.memoizedState;
        return l !== null && r !== null && Kl(r, l[1]) ? l[0] : (o.memoizedState = [t, r],
        t)
    }
    function Lh(t, r) {
        var o = bt();
        r = r === void 0 ? null : r;
        var l = o.memoizedState;
        return l !== null && r !== null && Kl(r, l[1]) ? l[0] : (t = t(),
        o.memoizedState = [t, r],
        t)
    }
    function jh(t, r, o) {
        return (er & 21) === 0 ? (t.baseState && (t.baseState = !1,
        ut = !0),
        t.memoizedState = o) : (Mt(o, r) || (o = dd(),
        Le.lanes |= o,
        tr |= o,
        t.baseState = !0),
        r)
    }
    function Nx(t, r) {
        var o = Te;
        Te = o !== 0 && 4 > o ? o : 4,
        t(!0);
        var l = $l.transition;
        $l.transition = {};
        try {
            t(!1),
            r()
        } finally {
            Te = o,
            $l.transition = l
        }
    }
    function Ih() {
        return bt().memoizedState
    }
    function Dx(t, r, o) {
        var l = Nn(t);
        if (o = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Fh(t))
            Vh(r, o);
        else if (o = mh(t, r, o, l),
        o !== null) {
            var f = ot();
            It(o, t, l, f),
            zh(o, r, l)
        }
    }
    function Lx(t, r, o) {
        var l = Nn(t)
          , f = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Fh(t))
            Vh(r, f);
        else {
            var m = t.alternate;
            if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer,
            m !== null))
                try {
                    var w = r.lastRenderedState
                      , C = m(w, o);
                    if (f.hasEagerState = !0,
                    f.eagerState = C,
                    Mt(C, w)) {
                        var _ = r.interleaved;
                        _ === null ? (f.next = f,
                        Vl(r)) : (f.next = _.next,
                        _.next = f),
                        r.interleaved = f;
                        return
                    }
                } catch {}
            o = mh(t, r, f, l),
            o !== null && (f = ot(),
            It(o, t, l, f),
            zh(o, r, l))
        }
    }
    function Fh(t) {
        var r = t.alternate;
        return t === Le || r !== null && r === Le
    }
    function Vh(t, r) {
        Di = ns = !0;
        var o = t.pending;
        o === null ? r.next = r : (r.next = o.next,
        o.next = r),
        t.pending = r
    }
    function zh(t, r, o) {
        if ((o & 4194240) !== 0) {
            var l = r.lanes;
            l &= t.pendingLanes,
            o |= l,
            r.lanes = o,
            el(t, o)
        }
    }
    var os = {
        readContext: Ct,
        useCallback: Je,
        useContext: Je,
        useEffect: Je,
        useImperativeHandle: Je,
        useInsertionEffect: Je,
        useLayoutEffect: Je,
        useMemo: Je,
        useReducer: Je,
        useRef: Je,
        useState: Je,
        useDebugValue: Je,
        useDeferredValue: Je,
        useTransition: Je,
        useMutableSource: Je,
        useSyncExternalStore: Je,
        useId: Je,
        unstable_isNewReconciler: !1
    }
      , jx = {
        readContext: Ct,
        useCallback: function(t, r) {
            return Kt().memoizedState = [t, r === void 0 ? null : r],
            t
        },
        useContext: Ct,
        useEffect: Ah,
        useImperativeHandle: function(t, r, o) {
            return o = o != null ? o.concat([t]) : null,
            rs(4194308, 4, Mh.bind(null, r, t), o)
        },
        useLayoutEffect: function(t, r) {
            return rs(4194308, 4, t, r)
        },
        useInsertionEffect: function(t, r) {
            return rs(4, 2, t, r)
        },
        useMemo: function(t, r) {
            var o = Kt();
            return r = r === void 0 ? null : r,
            t = t(),
            o.memoizedState = [t, r],
            t
        },
        useReducer: function(t, r, o) {
            var l = Kt();
            return r = o !== void 0 ? o(r) : r,
            l.memoizedState = l.baseState = r,
            t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: r
            },
            l.queue = t,
            t = t.dispatch = Dx.bind(null, Le, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var r = Kt();
            return t = {
                current: t
            },
            r.memoizedState = t
        },
        useState: kh,
        useDebugValue: Zl,
        useDeferredValue: function(t) {
            return Kt().memoizedState = t
        },
        useTransition: function() {
            var t = kh(!1)
              , r = t[0];
            return t = Nx.bind(null, t[1]),
            Kt().memoizedState = t,
            [r, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, r, o) {
            var l = Le
              , f = Kt();
            if (_e) {
                if (o === void 0)
                    throw Error(i(407));
                o = o()
            } else {
                if (o = r(),
                qe === null)
                    throw Error(i(349));
                (er & 30) !== 0 || Eh(l, r, o)
            }
            f.memoizedState = o;
            var m = {
                value: o,
                getSnapshot: r
            };
            return f.queue = m,
            Ah(Th.bind(null, l, m, t), [t]),
            l.flags |= 2048,
            Ii(9, Ph.bind(null, l, m, o, r), void 0, null),
            o
        },
        useId: function() {
            var t = Kt()
              , r = qe.identifierPrefix;
            if (_e) {
                var o = sn
                  , l = on;
                o = (l & ~(1 << 32 - Ot(l) - 1)).toString(32) + o,
                r = ":" + r + "R" + o,
                o = Li++,
                0 < o && (r += "H" + o.toString(32)),
                r += ":"
            } else
                o = Mx++,
                r = ":" + r + "r" + o.toString(32) + ":";
            return t.memoizedState = r
        },
        unstable_isNewReconciler: !1
    }
      , Ix = {
        readContext: Ct,
        useCallback: Dh,
        useContext: Ct,
        useEffect: Xl,
        useImperativeHandle: Nh,
        useInsertionEffect: _h,
        useLayoutEffect: Oh,
        useMemo: Lh,
        useReducer: Gl,
        useRef: Rh,
        useState: function() {
            return Gl(ji)
        },
        useDebugValue: Zl,
        useDeferredValue: function(t) {
            var r = bt();
            return jh(r, He.memoizedState, t)
        },
        useTransition: function() {
            var t = Gl(ji)[0]
              , r = bt().memoizedState;
            return [t, r]
        },
        useMutableSource: xh,
        useSyncExternalStore: Sh,
        useId: Ih,
        unstable_isNewReconciler: !1
    }
      , Fx = {
        readContext: Ct,
        useCallback: Dh,
        useContext: Ct,
        useEffect: Xl,
        useImperativeHandle: Nh,
        useInsertionEffect: _h,
        useLayoutEffect: Oh,
        useMemo: Lh,
        useReducer: Yl,
        useRef: Rh,
        useState: function() {
            return Yl(ji)
        },
        useDebugValue: Zl,
        useDeferredValue: function(t) {
            var r = bt();
            return He === null ? r.memoizedState = t : jh(r, He.memoizedState, t)
        },
        useTransition: function() {
            var t = Yl(ji)[0]
              , r = bt().memoizedState;
            return [t, r]
        },
        useMutableSource: xh,
        useSyncExternalStore: Sh,
        useId: Ih,
        unstable_isNewReconciler: !1
    };
    function Dt(t, r) {
        if (t && t.defaultProps) {
            r = Z({}, r),
            t = t.defaultProps;
            for (var o in t)
                r[o] === void 0 && (r[o] = t[o]);
            return r
        }
        return r
    }
    function Jl(t, r, o, l) {
        r = t.memoizedState,
        o = o(l, r),
        o = o == null ? r : Z({}, r, o),
        t.memoizedState = o,
        t.lanes === 0 && (t.updateQueue.baseState = o)
    }
    var ss = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? qn(t) === t : !1
        },
        enqueueSetState: function(t, r, o) {
            t = t._reactInternals;
            var l = ot()
              , f = Nn(t)
              , m = ln(l, f);
            m.payload = r,
            o != null && (m.callback = o),
            r = An(t, m, f),
            r !== null && (It(r, t, f, l),
            Zo(r, t, f))
        },
        enqueueReplaceState: function(t, r, o) {
            t = t._reactInternals;
            var l = ot()
              , f = Nn(t)
              , m = ln(l, f);
            m.tag = 1,
            m.payload = r,
            o != null && (m.callback = o),
            r = An(t, m, f),
            r !== null && (It(r, t, f, l),
            Zo(r, t, f))
        },
        enqueueForceUpdate: function(t, r) {
            t = t._reactInternals;
            var o = ot()
              , l = Nn(t)
              , f = ln(o, l);
            f.tag = 2,
            r != null && (f.callback = r),
            r = An(t, f, l),
            r !== null && (It(r, t, l, o),
            Zo(r, t, l))
        }
    };
    function Bh(t, r, o, l, f, m, w) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, m, w) : r.prototype && r.prototype.isPureReactComponent ? !Pi(o, l) || !Pi(f, m) : !0
    }
    function Uh(t, r, o) {
        var l = !1
          , f = bn
          , m = r.contextType;
        return typeof m == "object" && m !== null ? m = Ct(m) : (f = lt(r) ? Gn : Ze.current,
        l = r.contextTypes,
        m = (l = l != null) ? Rr(t, f) : bn),
        r = new r(o,m),
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        r.updater = ss,
        t.stateNode = r,
        r._reactInternals = t,
        l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = f,
        t.__reactInternalMemoizedMaskedChildContext = m),
        r
    }
    function Hh(t, r, o, l) {
        t = r.state,
        typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, l),
        typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, l),
        r.state !== t && ss.enqueueReplaceState(r, r.state, null)
    }
    function eu(t, r, o, l) {
        var f = t.stateNode;
        f.props = o,
        f.state = t.memoizedState,
        f.refs = {},
        zl(t);
        var m = r.contextType;
        typeof m == "object" && m !== null ? f.context = Ct(m) : (m = lt(r) ? Gn : Ze.current,
        f.context = Rr(t, m)),
        f.state = t.memoizedState,
        m = r.getDerivedStateFromProps,
        typeof m == "function" && (Jl(t, r, m, o),
        f.state = t.memoizedState),
        typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        r !== f.state && ss.enqueueReplaceState(f, f.state, null),
        Jo(t, o, f, l),
        f.state = t.memoizedState),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308)
    }
    function jr(t, r) {
        try {
            var o = ""
              , l = r;
            do
                o += we(l),
                l = l.return;
            while (l);
            var f = o
        } catch (m) {
            f = `
Error generating stack: ` + m.message + `
` + m.stack
        }
        return {
            value: t,
            source: r,
            stack: f,
            digest: null
        }
    }
    function tu(t, r, o) {
        return {
            value: t,
            source: null,
            stack: o ?? null,
            digest: r ?? null
        }
    }
    function nu(t, r) {
        try {
            console.error(r.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var Vx = typeof WeakMap == "function" ? WeakMap : Map;
    function Wh(t, r, o) {
        o = ln(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var l = r.value;
        return o.callback = function() {
            hs || (hs = !0,
            yu = l),
            nu(t, r)
        }
        ,
        o
    }
    function $h(t, r, o) {
        o = ln(-1, o),
        o.tag = 3;
        var l = t.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var f = r.value;
            o.payload = function() {
                return l(f)
            }
            ,
            o.callback = function() {
                nu(t, r)
            }
        }
        var m = t.stateNode;
        return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
            nu(t, r),
            typeof l != "function" && (On === null ? On = new Set([this]) : On.add(this));
            var w = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: w !== null ? w : ""
            })
        }
        ),
        o
    }
    function Kh(t, r, o) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Vx;
            var f = new Set;
            l.set(r, f)
        } else
            f = l.get(r),
            f === void 0 && (f = new Set,
            l.set(r, f));
        f.has(o) || (f.add(o),
        t = Jx.bind(null, t, r, o),
        r.then(t, t))
    }
    function qh(t) {
        do {
            var r;
            if ((r = t.tag === 13) && (r = t.memoizedState,
            r = r !== null ? r.dehydrated !== null : !0),
            r)
                return t;
            t = t.return
        } while (t !== null);
        return null
    }
    function Qh(t, r, o, l, f) {
        return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = ln(-1, 1),
        r.tag = 2,
        An(o, r, 1))),
        o.lanes |= 1),
        t) : (t.flags |= 65536,
        t.lanes = f,
        t)
    }
    var zx = N.ReactCurrentOwner
      , ut = !1;
    function it(t, r, o, l) {
        r.child = t === null ? ph(r, null, o, l) : Mr(r, t.child, o, l)
    }
    function Gh(t, r, o, l, f) {
        o = o.render;
        var m = r.ref;
        return Dr(r, f),
        l = ql(t, r, o, l, m, f),
        o = Ql(),
        t !== null && !ut ? (r.updateQueue = t.updateQueue,
        r.flags &= -2053,
        t.lanes &= ~f,
        un(t, r, f)) : (_e && o && _l(r),
        r.flags |= 1,
        it(t, r, l, f),
        r.child)
    }
    function Yh(t, r, o, l, f) {
        if (t === null) {
            var m = o.type;
            return typeof m == "function" && !Tu(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15,
            r.type = m,
            Xh(t, r, m, l, f)) : (t = ws(o.type, null, l, r, r.mode, f),
            t.ref = r.ref,
            t.return = r,
            r.child = t)
        }
        if (m = t.child,
        (t.lanes & f) === 0) {
            var w = m.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : Pi,
            o(w, l) && t.ref === r.ref)
                return un(t, r, f)
        }
        return r.flags |= 1,
        t = Ln(m, l),
        t.ref = r.ref,
        t.return = r,
        r.child = t
    }
    function Xh(t, r, o, l, f) {
        if (t !== null) {
            var m = t.memoizedProps;
            if (Pi(m, l) && t.ref === r.ref)
                if (ut = !1,
                r.pendingProps = l = m,
                (t.lanes & f) !== 0)
                    (t.flags & 131072) !== 0 && (ut = !0);
                else
                    return r.lanes = t.lanes,
                    un(t, r, f)
        }
        return ru(t, r, o, l, f)
    }
    function Zh(t, r, o) {
        var l = r.pendingProps
          , f = l.children
          , m = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden")
            if ((r.mode & 1) === 0)
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ce(Fr, yt),
                yt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return t = m !== null ? m.baseLanes | o : o,
                    r.lanes = r.childLanes = 1073741824,
                    r.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null
                    },
                    r.updateQueue = null,
                    Ce(Fr, yt),
                    yt |= t,
                    null;
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = m !== null ? m.baseLanes : o,
                Ce(Fr, yt),
                yt |= l
            }
        else
            m !== null ? (l = m.baseLanes | o,
            r.memoizedState = null) : l = o,
            Ce(Fr, yt),
            yt |= l;
        return it(t, r, f, o),
        r.child
    }
    function Jh(t, r) {
        var o = r.ref;
        (t === null && o !== null || t !== null && t.ref !== o) && (r.flags |= 512,
        r.flags |= 2097152)
    }
    function ru(t, r, o, l, f) {
        var m = lt(o) ? Gn : Ze.current;
        return m = Rr(r, m),
        Dr(r, f),
        o = ql(t, r, o, l, m, f),
        l = Ql(),
        t !== null && !ut ? (r.updateQueue = t.updateQueue,
        r.flags &= -2053,
        t.lanes &= ~f,
        un(t, r, f)) : (_e && l && _l(r),
        r.flags |= 1,
        it(t, r, o, f),
        r.child)
    }
    function ep(t, r, o, l, f) {
        if (lt(o)) {
            var m = !0;
            Wo(r)
        } else
            m = !1;
        if (Dr(r, f),
        r.stateNode === null)
            ls(t, r),
            Uh(r, o, l),
            eu(r, o, l, f),
            l = !0;
        else if (t === null) {
            var w = r.stateNode
              , C = r.memoizedProps;
            w.props = C;
            var _ = w.context
              , z = o.contextType;
            typeof z == "object" && z !== null ? z = Ct(z) : (z = lt(o) ? Gn : Ze.current,
            z = Rr(r, z));
            var Q = o.getDerivedStateFromProps
              , G = typeof Q == "function" || typeof w.getSnapshotBeforeUpdate == "function";
            G || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (C !== l || _ !== z) && Hh(r, w, l, z),
            Rn = !1;
            var q = r.memoizedState;
            w.state = q,
            Jo(r, l, w, f),
            _ = r.memoizedState,
            C !== l || q !== _ || at.current || Rn ? (typeof Q == "function" && (Jl(r, o, Q, l),
            _ = r.memoizedState),
            (C = Rn || Bh(r, o, C, l, q, _, z)) ? (G || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(),
            typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()),
            typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308),
            r.memoizedProps = l,
            r.memoizedState = _),
            w.props = l,
            w.state = _,
            w.context = z,
            l = C) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308),
            l = !1)
        } else {
            w = r.stateNode,
            gh(t, r),
            C = r.memoizedProps,
            z = r.type === r.elementType ? C : Dt(r.type, C),
            w.props = z,
            G = r.pendingProps,
            q = w.context,
            _ = o.contextType,
            typeof _ == "object" && _ !== null ? _ = Ct(_) : (_ = lt(o) ? Gn : Ze.current,
            _ = Rr(r, _));
            var ne = o.getDerivedStateFromProps;
            (Q = typeof ne == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (C !== G || q !== _) && Hh(r, w, l, _),
            Rn = !1,
            q = r.memoizedState,
            w.state = q,
            Jo(r, l, w, f);
            var ie = r.memoizedState;
            C !== G || q !== ie || at.current || Rn ? (typeof ne == "function" && (Jl(r, o, ne, l),
            ie = r.memoizedState),
            (z = Rn || Bh(r, o, z, l, q, ie, _) || !1) ? (Q || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(l, ie, _),
            typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(l, ie, _)),
            typeof w.componentDidUpdate == "function" && (r.flags |= 4),
            typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || C === t.memoizedProps && q === t.memoizedState || (r.flags |= 4),
            typeof w.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && q === t.memoizedState || (r.flags |= 1024),
            r.memoizedProps = l,
            r.memoizedState = ie),
            w.props = l,
            w.state = ie,
            w.context = _,
            l = z) : (typeof w.componentDidUpdate != "function" || C === t.memoizedProps && q === t.memoizedState || (r.flags |= 4),
            typeof w.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && q === t.memoizedState || (r.flags |= 1024),
            l = !1)
        }
        return iu(t, r, o, l, m, f)
    }
    function iu(t, r, o, l, f, m) {
        Jh(t, r);
        var w = (r.flags & 128) !== 0;
        if (!l && !w)
            return f && oh(r, o, !1),
            un(t, r, m);
        l = r.stateNode,
        zx.current = r;
        var C = w && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return r.flags |= 1,
        t !== null && w ? (r.child = Mr(r, t.child, null, m),
        r.child = Mr(r, null, C, m)) : it(t, r, C, m),
        r.memoizedState = l.state,
        f && oh(r, o, !0),
        r.child
    }
    function tp(t) {
        var r = t.stateNode;
        r.pendingContext ? rh(t, r.pendingContext, r.pendingContext !== r.context) : r.context && rh(t, r.context, !1),
        Bl(t, r.containerInfo)
    }
    function np(t, r, o, l, f) {
        return Or(),
        Dl(f),
        r.flags |= 256,
        it(t, r, o, l),
        r.child
    }
    var ou = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function su(t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }
    function rp(t, r, o) {
        var l = r.pendingProps, f = De.current, m = !1, w = (r.flags & 128) !== 0, C;
        if ((C = w) || (C = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0),
        C ? (m = !0,
        r.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1),
        Ce(De, f & 1),
        t === null)
            return Nl(r),
            t = r.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824,
            null) : (w = l.children,
            t = l.fallback,
            m ? (l = r.mode,
            m = r.child,
            w = {
                mode: "hidden",
                children: w
            },
            (l & 1) === 0 && m !== null ? (m.childLanes = 0,
            m.pendingProps = w) : m = xs(w, l, 0, null),
            t = or(t, l, o, null),
            m.return = r,
            t.return = r,
            m.sibling = t,
            r.child = m,
            r.child.memoizedState = su(o),
            r.memoizedState = ou,
            t) : au(r, w));
        if (f = t.memoizedState,
        f !== null && (C = f.dehydrated,
        C !== null))
            return Bx(t, r, w, l, C, f, o);
        if (m) {
            m = l.fallback,
            w = r.mode,
            f = t.child,
            C = f.sibling;
            var _ = {
                mode: "hidden",
                children: l.children
            };
            return (w & 1) === 0 && r.child !== f ? (l = r.child,
            l.childLanes = 0,
            l.pendingProps = _,
            r.deletions = null) : (l = Ln(f, _),
            l.subtreeFlags = f.subtreeFlags & 14680064),
            C !== null ? m = Ln(C, m) : (m = or(m, w, o, null),
            m.flags |= 2),
            m.return = r,
            l.return = r,
            l.sibling = m,
            r.child = l,
            l = m,
            m = r.child,
            w = t.child.memoizedState,
            w = w === null ? su(o) : {
                baseLanes: w.baseLanes | o,
                cachePool: null,
                transitions: w.transitions
            },
            m.memoizedState = w,
            m.childLanes = t.childLanes & ~o,
            r.memoizedState = ou,
            l
        }
        return m = t.child,
        t = m.sibling,
        l = Ln(m, {
            mode: "visible",
            children: l.children
        }),
        (r.mode & 1) === 0 && (l.lanes = o),
        l.return = r,
        l.sibling = null,
        t !== null && (o = r.deletions,
        o === null ? (r.deletions = [t],
        r.flags |= 16) : o.push(t)),
        r.child = l,
        r.memoizedState = null,
        l
    }
    function au(t, r) {
        return r = xs({
            mode: "visible",
            children: r
        }, t.mode, 0, null),
        r.return = t,
        t.child = r
    }
    function as(t, r, o, l) {
        return l !== null && Dl(l),
        Mr(r, t.child, null, o),
        t = au(r, r.pendingProps.children),
        t.flags |= 2,
        r.memoizedState = null,
        t
    }
    function Bx(t, r, o, l, f, m, w) {
        if (o)
            return r.flags & 256 ? (r.flags &= -257,
            l = tu(Error(i(422))),
            as(t, r, w, l)) : r.memoizedState !== null ? (r.child = t.child,
            r.flags |= 128,
            null) : (m = l.fallback,
            f = r.mode,
            l = xs({
                mode: "visible",
                children: l.children
            }, f, 0, null),
            m = or(m, f, w, null),
            m.flags |= 2,
            l.return = r,
            m.return = r,
            l.sibling = m,
            r.child = l,
            (r.mode & 1) !== 0 && Mr(r, t.child, null, w),
            r.child.memoizedState = su(w),
            r.memoizedState = ou,
            m);
        if ((r.mode & 1) === 0)
            return as(t, r, w, null);
        if (f.data === "$!") {
            if (l = f.nextSibling && f.nextSibling.dataset,
            l)
                var C = l.dgst;
            return l = C,
            m = Error(i(419)),
            l = tu(m, l, void 0),
            as(t, r, w, l)
        }
        if (C = (w & t.childLanes) !== 0,
        ut || C) {
            if (l = qe,
            l !== null) {
                switch (w & -w) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
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
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (l.suspendedLanes | w)) !== 0 ? 0 : f,
                f !== 0 && f !== m.retryLane && (m.retryLane = f,
                an(t, f),
                It(l, t, f, -1))
            }
            return Pu(),
            l = tu(Error(i(421))),
            as(t, r, w, l)
        }
        return f.data === "$?" ? (r.flags |= 128,
        r.child = t.child,
        r = eS.bind(null, t),
        f._reactRetry = r,
        null) : (t = m.treeContext,
        gt = Tn(f.nextSibling),
        mt = r,
        _e = !0,
        Nt = null,
        t !== null && (Pt[Tt++] = on,
        Pt[Tt++] = sn,
        Pt[Tt++] = Yn,
        on = t.id,
        sn = t.overflow,
        Yn = r),
        r = au(r, l.children),
        r.flags |= 4096,
        r)
    }
    function ip(t, r, o) {
        t.lanes |= r;
        var l = t.alternate;
        l !== null && (l.lanes |= r),
        Fl(t.return, r, o)
    }
    function lu(t, r, o, l, f) {
        var m = t.memoizedState;
        m === null ? t.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: f
        } : (m.isBackwards = r,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = l,
        m.tail = o,
        m.tailMode = f)
    }
    function op(t, r, o) {
        var l = r.pendingProps
          , f = l.revealOrder
          , m = l.tail;
        if (it(t, r, l.children, o),
        l = De.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            r.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                e: for (t = r.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && ip(t, o, r);
                    else if (t.tag === 19)
                        ip(t, o, r);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === r)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === r)
                            break e;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l &= 1
        }
        if (Ce(De, l),
        (r.mode & 1) === 0)
            r.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (o = r.child,
                f = null; o !== null; )
                    t = o.alternate,
                    t !== null && es(t) === null && (f = o),
                    o = o.sibling;
                o = f,
                o === null ? (f = r.child,
                r.child = null) : (f = o.sibling,
                o.sibling = null),
                lu(r, !1, f, o, m);
                break;
            case "backwards":
                for (o = null,
                f = r.child,
                r.child = null; f !== null; ) {
                    if (t = f.alternate,
                    t !== null && es(t) === null) {
                        r.child = f;
                        break
                    }
                    t = f.sibling,
                    f.sibling = o,
                    o = f,
                    f = t
                }
                lu(r, !0, o, null, m);
                break;
            case "together":
                lu(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
            }
        return r.child
    }
    function ls(t, r) {
        (r.mode & 1) === 0 && t !== null && (t.alternate = null,
        r.alternate = null,
        r.flags |= 2)
    }
    function un(t, r, o) {
        if (t !== null && (r.dependencies = t.dependencies),
        tr |= r.lanes,
        (o & r.childLanes) === 0)
            return null;
        if (t !== null && r.child !== t.child)
            throw Error(i(153));
        if (r.child !== null) {
            for (t = r.child,
            o = Ln(t, t.pendingProps),
            r.child = o,
            o.return = r; t.sibling !== null; )
                t = t.sibling,
                o = o.sibling = Ln(t, t.pendingProps),
                o.return = r;
            o.sibling = null
        }
        return r.child
    }
    function Ux(t, r, o) {
        switch (r.tag) {
        case 3:
            tp(r),
            Or();
            break;
        case 5:
            wh(r);
            break;
        case 1:
            lt(r.type) && Wo(r);
            break;
        case 4:
            Bl(r, r.stateNode.containerInfo);
            break;
        case 10:
            var l = r.type._context
              , f = r.memoizedProps.value;
            Ce(Yo, l._currentValue),
            l._currentValue = f;
            break;
        case 13:
            if (l = r.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Ce(De, De.current & 1),
                r.flags |= 128,
                null) : (o & r.child.childLanes) !== 0 ? rp(t, r, o) : (Ce(De, De.current & 1),
                t = un(t, r, o),
                t !== null ? t.sibling : null);
            Ce(De, De.current & 1);
            break;
        case 19:
            if (l = (o & r.childLanes) !== 0,
            (t.flags & 128) !== 0) {
                if (l)
                    return op(t, r, o);
                r.flags |= 128
            }
            if (f = r.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Ce(De, De.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return r.lanes = 0,
            Zh(t, r, o)
        }
        return un(t, r, o)
    }
    var sp, uu, ap, lp;
    sp = function(t, r) {
        for (var o = r.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                t.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === r)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === r)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    uu = function() {}
    ,
    ap = function(t, r, o, l) {
        var f = t.memoizedProps;
        if (f !== l) {
            t = r.stateNode,
            Jn($t.current);
            var m = null;
            switch (o) {
            case "input":
                f = Fa(t, f),
                l = Fa(t, l),
                m = [];
                break;
            case "select":
                f = Z({}, f, {
                    value: void 0
                }),
                l = Z({}, l, {
                    value: void 0
                }),
                m = [];
                break;
            case "textarea":
                f = Ba(t, f),
                l = Ba(t, l),
                m = [];
                break;
            default:
                typeof f.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Bo)
            }
            Ha(o, l);
            var w;
            o = null;
            for (z in f)
                if (!l.hasOwnProperty(z) && f.hasOwnProperty(z) && f[z] != null)
                    if (z === "style") {
                        var C = f[z];
                        for (w in C)
                            C.hasOwnProperty(w) && (o || (o = {}),
                            o[w] = "")
                    } else
                        z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (a.hasOwnProperty(z) ? m || (m = []) : (m = m || []).push(z, null));
            for (z in l) {
                var _ = l[z];
                if (C = f?.[z],
                l.hasOwnProperty(z) && _ !== C && (_ != null || C != null))
                    if (z === "style")
                        if (C) {
                            for (w in C)
                                !C.hasOwnProperty(w) || _ && _.hasOwnProperty(w) || (o || (o = {}),
                                o[w] = "");
                            for (w in _)
                                _.hasOwnProperty(w) && C[w] !== _[w] && (o || (o = {}),
                                o[w] = _[w])
                        } else
                            o || (m || (m = []),
                            m.push(z, o)),
                            o = _;
                    else
                        z === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                        C = C ? C.__html : void 0,
                        _ != null && C !== _ && (m = m || []).push(z, _)) : z === "children" ? typeof _ != "string" && typeof _ != "number" || (m = m || []).push(z, "" + _) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (a.hasOwnProperty(z) ? (_ != null && z === "onScroll" && be("scroll", t),
                        m || C === _ || (m = [])) : (m = m || []).push(z, _))
            }
            o && (m = m || []).push("style", o);
            var z = m;
            (r.updateQueue = z) && (r.flags |= 4)
        }
    }
    ,
    lp = function(t, r, o, l) {
        o !== l && (r.flags |= 4)
    }
    ;
    function Fi(t, r) {
        if (!_e)
            switch (t.tailMode) {
            case "hidden":
                r = t.tail;
                for (var o = null; r !== null; )
                    r.alternate !== null && (o = r),
                    r = r.sibling;
                o === null ? t.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = t.tail;
                for (var l = null; o !== null; )
                    o.alternate !== null && (l = o),
                    o = o.sibling;
                l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function et(t) {
        var r = t.alternate !== null && t.alternate.child === t.child
          , o = 0
          , l = 0;
        if (r)
            for (var f = t.child; f !== null; )
                o |= f.lanes | f.childLanes,
                l |= f.subtreeFlags & 14680064,
                l |= f.flags & 14680064,
                f.return = t,
                f = f.sibling;
        else
            for (f = t.child; f !== null; )
                o |= f.lanes | f.childLanes,
                l |= f.subtreeFlags,
                l |= f.flags,
                f.return = t,
                f = f.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = o,
        r
    }
    function Hx(t, r, o) {
        var l = r.pendingProps;
        switch (Ol(r),
        r.tag) {
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
            return et(r),
            null;
        case 1:
            return lt(r.type) && Ho(),
            et(r),
            null;
        case 3:
            return l = r.stateNode,
            Lr(),
            ke(at),
            ke(Ze),
            Wl(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (Qo(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024,
            Nt !== null && (xu(Nt),
            Nt = null))),
            uu(t, r),
            et(r),
            null;
        case 5:
            Ul(r);
            var f = Jn(Ni.current);
            if (o = r.type,
            t !== null && r.stateNode != null)
                ap(t, r, o, l, f),
                t.ref !== r.ref && (r.flags |= 512,
                r.flags |= 2097152);
            else {
                if (!l) {
                    if (r.stateNode === null)
                        throw Error(i(166));
                    return et(r),
                    null
                }
                if (t = Jn($t.current),
                Qo(r)) {
                    l = r.stateNode,
                    o = r.type;
                    var m = r.memoizedProps;
                    switch (l[Wt] = r,
                    l[Ri] = m,
                    t = (r.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        be("cancel", l),
                        be("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        be("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < Ci.length; f++)
                            be(Ci[f], l);
                        break;
                    case "source":
                        be("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        be("error", l),
                        be("load", l);
                        break;
                    case "details":
                        be("toggle", l);
                        break;
                    case "input":
                        Uf(l, m),
                        be("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!m.multiple
                        },
                        be("invalid", l);
                        break;
                    case "textarea":
                        $f(l, m),
                        be("invalid", l)
                    }
                    Ha(o, m),
                    f = null;
                    for (var w in m)
                        if (m.hasOwnProperty(w)) {
                            var C = m[w];
                            w === "children" ? typeof C == "string" ? l.textContent !== C && (m.suppressHydrationWarning !== !0 && zo(l.textContent, C, t),
                            f = ["children", C]) : typeof C == "number" && l.textContent !== "" + C && (m.suppressHydrationWarning !== !0 && zo(l.textContent, C, t),
                            f = ["children", "" + C]) : a.hasOwnProperty(w) && C != null && w === "onScroll" && be("scroll", l)
                        }
                    switch (o) {
                    case "input":
                        Et(l),
                        Wf(l, m, !0);
                        break;
                    case "textarea":
                        Et(l),
                        qf(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof m.onClick == "function" && (l.onclick = Bo)
                    }
                    l = f,
                    r.updateQueue = l,
                    l !== null && (r.flags |= 4)
                } else {
                    w = f.nodeType === 9 ? f : f.ownerDocument,
                    t === "http://www.w3.org/1999/xhtml" && (t = Qf(o)),
                    t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = w.createElement("div"),
                    t.innerHTML = "<script><\/script>",
                    t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = w.createElement(o, {
                        is: l.is
                    }) : (t = w.createElement(o),
                    o === "select" && (w = t,
                    l.multiple ? w.multiple = !0 : l.size && (w.size = l.size))) : t = w.createElementNS(t, o),
                    t[Wt] = r,
                    t[Ri] = l,
                    sp(t, r, !1, !1),
                    r.stateNode = t;
                    e: {
                        switch (w = Wa(o, l),
                        o) {
                        case "dialog":
                            be("cancel", t),
                            be("close", t),
                            f = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            be("load", t),
                            f = l;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < Ci.length; f++)
                                be(Ci[f], t);
                            f = l;
                            break;
                        case "source":
                            be("error", t),
                            f = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            be("error", t),
                            be("load", t),
                            f = l;
                            break;
                        case "details":
                            be("toggle", t),
                            f = l;
                            break;
                        case "input":
                            Uf(t, l),
                            f = Fa(t, l),
                            be("invalid", t);
                            break;
                        case "option":
                            f = l;
                            break;
                        case "select":
                            t._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            f = Z({}, l, {
                                value: void 0
                            }),
                            be("invalid", t);
                            break;
                        case "textarea":
                            $f(t, l),
                            f = Ba(t, l),
                            be("invalid", t);
                            break;
                        default:
                            f = l
                        }
                        Ha(o, f),
                        C = f;
                        for (m in C)
                            if (C.hasOwnProperty(m)) {
                                var _ = C[m];
                                m === "style" ? Xf(t, _) : m === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                                _ != null && Gf(t, _)) : m === "children" ? typeof _ == "string" ? (o !== "textarea" || _ !== "") && si(t, _) : typeof _ == "number" && si(t, "" + _) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? _ != null && m === "onScroll" && be("scroll", t) : _ != null && A(t, m, _, w))
                            }
                        switch (o) {
                        case "input":
                            Et(t),
                            Wf(t, l, !1);
                            break;
                        case "textarea":
                            Et(t),
                            qf(t);
                            break;
                        case "option":
                            l.value != null && t.setAttribute("value", "" + ue(l.value));
                            break;
                        case "select":
                            t.multiple = !!l.multiple,
                            m = l.value,
                            m != null ? gr(t, !!l.multiple, m, !1) : l.defaultValue != null && gr(t, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (t.onclick = Bo)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (r.flags |= 4)
                }
                r.ref !== null && (r.flags |= 512,
                r.flags |= 2097152)
            }
            return et(r),
            null;
        case 6:
            if (t && r.stateNode != null)
                lp(t, r, t.memoizedProps, l);
            else {
                if (typeof l != "string" && r.stateNode === null)
                    throw Error(i(166));
                if (o = Jn(Ni.current),
                Jn($t.current),
                Qo(r)) {
                    if (l = r.stateNode,
                    o = r.memoizedProps,
                    l[Wt] = r,
                    (m = l.nodeValue !== o) && (t = mt,
                    t !== null))
                        switch (t.tag) {
                        case 3:
                            zo(l.nodeValue, o, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && zo(l.nodeValue, o, (t.mode & 1) !== 0)
                        }
                    m && (r.flags |= 4)
                } else
                    l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l),
                    l[Wt] = r,
                    r.stateNode = l
            }
            return et(r),
            null;
        case 13:
            if (ke(De),
            l = r.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (_e && gt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
                    fh(),
                    Or(),
                    r.flags |= 98560,
                    m = !1;
                else if (m = Qo(r),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!m)
                            throw Error(i(318));
                        if (m = r.memoizedState,
                        m = m !== null ? m.dehydrated : null,
                        !m)
                            throw Error(i(317));
                        m[Wt] = r
                    } else
                        Or(),
                        (r.flags & 128) === 0 && (r.memoizedState = null),
                        r.flags |= 4;
                    et(r),
                    m = !1
                } else
                    Nt !== null && (xu(Nt),
                    Nt = null),
                    m = !0;
                if (!m)
                    return r.flags & 65536 ? r : null
            }
            return (r.flags & 128) !== 0 ? (r.lanes = o,
            r) : (l = l !== null,
            l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192,
            (r.mode & 1) !== 0 && (t === null || (De.current & 1) !== 0 ? We === 0 && (We = 3) : Pu())),
            r.updateQueue !== null && (r.flags |= 4),
            et(r),
            null);
        case 4:
            return Lr(),
            uu(t, r),
            t === null && bi(r.stateNode.containerInfo),
            et(r),
            null;
        case 10:
            return Il(r.type._context),
            et(r),
            null;
        case 17:
            return lt(r.type) && Ho(),
            et(r),
            null;
        case 19:
            if (ke(De),
            m = r.memoizedState,
            m === null)
                return et(r),
                null;
            if (l = (r.flags & 128) !== 0,
            w = m.rendering,
            w === null)
                if (l)
                    Fi(m, !1);
                else {
                    if (We !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = r.child; t !== null; ) {
                            if (w = es(t),
                            w !== null) {
                                for (r.flags |= 128,
                                Fi(m, !1),
                                l = w.updateQueue,
                                l !== null && (r.updateQueue = l,
                                r.flags |= 4),
                                r.subtreeFlags = 0,
                                l = o,
                                o = r.child; o !== null; )
                                    m = o,
                                    t = l,
                                    m.flags &= 14680066,
                                    w = m.alternate,
                                    w === null ? (m.childLanes = 0,
                                    m.lanes = t,
                                    m.child = null,
                                    m.subtreeFlags = 0,
                                    m.memoizedProps = null,
                                    m.memoizedState = null,
                                    m.updateQueue = null,
                                    m.dependencies = null,
                                    m.stateNode = null) : (m.childLanes = w.childLanes,
                                    m.lanes = w.lanes,
                                    m.child = w.child,
                                    m.subtreeFlags = 0,
                                    m.deletions = null,
                                    m.memoizedProps = w.memoizedProps,
                                    m.memoizedState = w.memoizedState,
                                    m.updateQueue = w.updateQueue,
                                    m.type = w.type,
                                    t = w.dependencies,
                                    m.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }),
                                    o = o.sibling;
                                return Ce(De, De.current & 1 | 2),
                                r.child
                            }
                            t = t.sibling
                        }
                    m.tail !== null && Ve() > Vr && (r.flags |= 128,
                    l = !0,
                    Fi(m, !1),
                    r.lanes = 4194304)
                }
            else {
                if (!l)
                    if (t = es(w),
                    t !== null) {
                        if (r.flags |= 128,
                        l = !0,
                        o = t.updateQueue,
                        o !== null && (r.updateQueue = o,
                        r.flags |= 4),
                        Fi(m, !0),
                        m.tail === null && m.tailMode === "hidden" && !w.alternate && !_e)
                            return et(r),
                            null
                    } else
                        2 * Ve() - m.renderingStartTime > Vr && o !== 1073741824 && (r.flags |= 128,
                        l = !0,
                        Fi(m, !1),
                        r.lanes = 4194304);
                m.isBackwards ? (w.sibling = r.child,
                r.child = w) : (o = m.last,
                o !== null ? o.sibling = w : r.child = w,
                m.last = w)
            }
            return m.tail !== null ? (r = m.tail,
            m.rendering = r,
            m.tail = r.sibling,
            m.renderingStartTime = Ve(),
            r.sibling = null,
            o = De.current,
            Ce(De, l ? o & 1 | 2 : o & 1),
            r) : (et(r),
            null);
        case 22:
        case 23:
            return Eu(),
            l = r.memoizedState !== null,
            t !== null && t.memoizedState !== null !== l && (r.flags |= 8192),
            l && (r.mode & 1) !== 0 ? (yt & 1073741824) !== 0 && (et(r),
            r.subtreeFlags & 6 && (r.flags |= 8192)) : et(r),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(i(156, r.tag))
    }
    function Wx(t, r) {
        switch (Ol(r),
        r.tag) {
        case 1:
            return lt(r.type) && Ho(),
            t = r.flags,
            t & 65536 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 3:
            return Lr(),
            ke(at),
            ke(Ze),
            Wl(),
            t = r.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 5:
            return Ul(r),
            null;
        case 13:
            if (ke(De),
            t = r.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (r.alternate === null)
                    throw Error(i(340));
                Or()
            }
            return t = r.flags,
            t & 65536 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 19:
            return ke(De),
            null;
        case 4:
            return Lr(),
            null;
        case 10:
            return Il(r.type._context),
            null;
        case 22:
        case 23:
            return Eu(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var us = !1
      , tt = !1
      , $x = typeof WeakSet == "function" ? WeakSet : Set
      , re = null;
    function Ir(t, r) {
        var o = t.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (l) {
                    Ie(t, r, l)
                }
            else
                o.current = null
    }
    function cu(t, r, o) {
        try {
            o()
        } catch (l) {
            Ie(t, r, l)
        }
    }
    var up = !1;
    function Kx(t, r) {
        if (El = Ao,
        t = Bd(),
        pl(t)) {
            if ("selectionStart"in t)
                var o = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                e: {
                    o = (o = t.ownerDocument) && o.defaultView || window;
                    var l = o.getSelection && o.getSelection();
                    if (l && l.rangeCount !== 0) {
                        o = l.anchorNode;
                        var f = l.anchorOffset
                          , m = l.focusNode;
                        l = l.focusOffset;
                        try {
                            o.nodeType,
                            m.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var w = 0
                          , C = -1
                          , _ = -1
                          , z = 0
                          , Q = 0
                          , G = t
                          , q = null;
                        t: for (; ; ) {
                            for (var ne; G !== o || f !== 0 && G.nodeType !== 3 || (C = w + f),
                            G !== m || l !== 0 && G.nodeType !== 3 || (_ = w + l),
                            G.nodeType === 3 && (w += G.nodeValue.length),
                            (ne = G.firstChild) !== null; )
                                q = G,
                                G = ne;
                            for (; ; ) {
                                if (G === t)
                                    break t;
                                if (q === o && ++z === f && (C = w),
                                q === m && ++Q === l && (_ = w),
                                (ne = G.nextSibling) !== null)
                                    break;
                                G = q,
                                q = G.parentNode
                            }
                            G = ne
                        }
                        o = C === -1 || _ === -1 ? null : {
                            start: C,
                            end: _
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Pl = {
            focusedElem: t,
            selectionRange: o
        },
        Ao = !1,
        re = r; re !== null; )
            if (r = re,
            t = r.child,
            (r.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = r,
                re = t;
            else
                for (; re !== null; ) {
                    r = re;
                    try {
                        var ie = r.alternate;
                        if ((r.flags & 1024) !== 0)
                            switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ie !== null) {
                                    var se = ie.memoizedProps
                                      , ze = ie.memoizedState
                                      , j = r.stateNode
                                      , O = j.getSnapshotBeforeUpdate(r.elementType === r.type ? se : Dt(r.type, se), ze);
                                    j.__reactInternalSnapshotBeforeUpdate = O
                                }
                                break;
                            case 3:
                                var I = r.stateNode.containerInfo;
                                I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                            }
                    } catch (J) {
                        Ie(r, r.return, J)
                    }
                    if (t = r.sibling,
                    t !== null) {
                        t.return = r.return,
                        re = t;
                        break
                    }
                    re = r.return
                }
        return ie = up,
        up = !1,
        ie
    }
    function Vi(t, r, o) {
        var l = r.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var f = l = l.next;
            do {
                if ((f.tag & t) === t) {
                    var m = f.destroy;
                    f.destroy = void 0,
                    m !== void 0 && cu(r, o, m)
                }
                f = f.next
            } while (f !== l)
        }
    }
    function cs(t, r) {
        if (r = r.updateQueue,
        r = r !== null ? r.lastEffect : null,
        r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & t) === t) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== r)
        }
    }
    function fu(t) {
        var r = t.ref;
        if (r !== null) {
            var o = t.stateNode;
            t.tag,
            t = o,
            typeof r == "function" ? r(t) : r.current = t
        }
    }
    function cp(t) {
        var r = t.alternate;
        r !== null && (t.alternate = null,
        cp(r)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (r = t.stateNode,
        r !== null && (delete r[Wt],
        delete r[Ri],
        delete r[kl],
        delete r[Rx],
        delete r[Ax])),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    function fp(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }
    function dp(t) {
        e: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || fp(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.flags & 2 || t.child === null || t.tag === 4)
                    continue e;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function du(t, r, o) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            r ? o.nodeType === 8 ? o.parentNode.insertBefore(t, r) : o.insertBefore(t, r) : (o.nodeType === 8 ? (r = o.parentNode,
            r.insertBefore(t, o)) : (r = o,
            r.appendChild(t)),
            o = o._reactRootContainer,
            o != null || r.onclick !== null || (r.onclick = Bo));
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (du(t, r, o),
            t = t.sibling; t !== null; )
                du(t, r, o),
                t = t.sibling
    }
    function hu(t, r, o) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            r ? o.insertBefore(t, r) : o.appendChild(t);
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (hu(t, r, o),
            t = t.sibling; t !== null; )
                hu(t, r, o),
                t = t.sibling
    }
    var Ge = null
      , Lt = !1;
    function _n(t, r, o) {
        for (o = o.child; o !== null; )
            hp(t, r, o),
            o = o.sibling
    }
    function hp(t, r, o) {
        if (Ht && typeof Ht.onCommitFiberUnmount == "function")
            try {
                Ht.onCommitFiberUnmount(Po, o)
            } catch {}
        switch (o.tag) {
        case 5:
            tt || Ir(o, r);
        case 6:
            var l = Ge
              , f = Lt;
            Ge = null,
            _n(t, r, o),
            Ge = l,
            Lt = f,
            Ge !== null && (Lt ? (t = Ge,
            o = o.stateNode,
            t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : Ge.removeChild(o.stateNode));
            break;
        case 18:
            Ge !== null && (Lt ? (t = Ge,
            o = o.stateNode,
            t.nodeType === 8 ? bl(t.parentNode, o) : t.nodeType === 1 && bl(t, o),
            yi(t)) : bl(Ge, o.stateNode));
            break;
        case 4:
            l = Ge,
            f = Lt,
            Ge = o.stateNode.containerInfo,
            Lt = !0,
            _n(t, r, o),
            Ge = l,
            Lt = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!tt && (l = o.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                f = l = l.next;
                do {
                    var m = f
                      , w = m.destroy;
                    m = m.tag,
                    w !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && cu(o, r, w),
                    f = f.next
                } while (f !== l)
            }
            _n(t, r, o);
            break;
        case 1:
            if (!tt && (Ir(o, r),
            l = o.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = o.memoizedProps,
                    l.state = o.memoizedState,
                    l.componentWillUnmount()
                } catch (C) {
                    Ie(o, r, C)
                }
            _n(t, r, o);
            break;
        case 21:
            _n(t, r, o);
            break;
        case 22:
            o.mode & 1 ? (tt = (l = tt) || o.memoizedState !== null,
            _n(t, r, o),
            tt = l) : _n(t, r, o);
            break;
        default:
            _n(t, r, o)
        }
    }
    function pp(t) {
        var r = t.updateQueue;
        if (r !== null) {
            t.updateQueue = null;
            var o = t.stateNode;
            o === null && (o = t.stateNode = new $x),
            r.forEach(function(l) {
                var f = tS.bind(null, t, l);
                o.has(l) || (o.add(l),
                l.then(f, f))
            })
        }
    }
    function jt(t, r) {
        var o = r.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var f = o[l];
                try {
                    var m = t
                      , w = r
                      , C = w;
                    e: for (; C !== null; ) {
                        switch (C.tag) {
                        case 5:
                            Ge = C.stateNode,
                            Lt = !1;
                            break e;
                        case 3:
                            Ge = C.stateNode.containerInfo,
                            Lt = !0;
                            break e;
                        case 4:
                            Ge = C.stateNode.containerInfo,
                            Lt = !0;
                            break e
                        }
                        C = C.return
                    }
                    if (Ge === null)
                        throw Error(i(160));
                    hp(m, w, f),
                    Ge = null,
                    Lt = !1;
                    var _ = f.alternate;
                    _ !== null && (_.return = null),
                    f.return = null
                } catch (z) {
                    Ie(f, r, z)
                }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null; )
                mp(r, t),
                r = r.sibling
    }
    function mp(t, r) {
        var o = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (jt(r, t),
            qt(t),
            l & 4) {
                try {
                    Vi(3, t, t.return),
                    cs(3, t)
                } catch (se) {
                    Ie(t, t.return, se)
                }
                try {
                    Vi(5, t, t.return)
                } catch (se) {
                    Ie(t, t.return, se)
                }
            }
            break;
        case 1:
            jt(r, t),
            qt(t),
            l & 512 && o !== null && Ir(o, o.return);
            break;
        case 5:
            if (jt(r, t),
            qt(t),
            l & 512 && o !== null && Ir(o, o.return),
            t.flags & 32) {
                var f = t.stateNode;
                try {
                    si(f, "")
                } catch (se) {
                    Ie(t, t.return, se)
                }
            }
            if (l & 4 && (f = t.stateNode,
            f != null)) {
                var m = t.memoizedProps
                  , w = o !== null ? o.memoizedProps : m
                  , C = t.type
                  , _ = t.updateQueue;
                if (t.updateQueue = null,
                _ !== null)
                    try {
                        C === "input" && m.type === "radio" && m.name != null && Hf(f, m),
                        Wa(C, w);
                        var z = Wa(C, m);
                        for (w = 0; w < _.length; w += 2) {
                            var Q = _[w]
                              , G = _[w + 1];
                            Q === "style" ? Xf(f, G) : Q === "dangerouslySetInnerHTML" ? Gf(f, G) : Q === "children" ? si(f, G) : A(f, Q, G, z)
                        }
                        switch (C) {
                        case "input":
                            Va(f, m);
                            break;
                        case "textarea":
                            Kf(f, m);
                            break;
                        case "select":
                            var q = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!m.multiple;
                            var ne = m.value;
                            ne != null ? gr(f, !!m.multiple, ne, !1) : q !== !!m.multiple && (m.defaultValue != null ? gr(f, !!m.multiple, m.defaultValue, !0) : gr(f, !!m.multiple, m.multiple ? [] : "", !1))
                        }
                        f[Ri] = m
                    } catch (se) {
                        Ie(t, t.return, se)
                    }
            }
            break;
        case 6:
            if (jt(r, t),
            qt(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(i(162));
                f = t.stateNode,
                m = t.memoizedProps;
                try {
                    f.nodeValue = m
                } catch (se) {
                    Ie(t, t.return, se)
                }
            }
            break;
        case 3:
            if (jt(r, t),
            qt(t),
            l & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    yi(r.containerInfo)
                } catch (se) {
                    Ie(t, t.return, se)
                }
            break;
        case 4:
            jt(r, t),
            qt(t);
            break;
        case 13:
            jt(r, t),
            qt(t),
            f = t.child,
            f.flags & 8192 && (m = f.memoizedState !== null,
            f.stateNode.isHidden = m,
            !m || f.alternate !== null && f.alternate.memoizedState !== null || (gu = Ve())),
            l & 4 && pp(t);
            break;
        case 22:
            if (Q = o !== null && o.memoizedState !== null,
            t.mode & 1 ? (tt = (z = tt) || Q,
            jt(r, t),
            tt = z) : jt(r, t),
            qt(t),
            l & 8192) {
                if (z = t.memoizedState !== null,
                (t.stateNode.isHidden = z) && !Q && (t.mode & 1) !== 0)
                    for (re = t,
                    Q = t.child; Q !== null; ) {
                        for (G = re = Q; re !== null; ) {
                            switch (q = re,
                            ne = q.child,
                            q.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Vi(4, q, q.return);
                                break;
                            case 1:
                                Ir(q, q.return);
                                var ie = q.stateNode;
                                if (typeof ie.componentWillUnmount == "function") {
                                    l = q,
                                    o = q.return;
                                    try {
                                        r = l,
                                        ie.props = r.memoizedProps,
                                        ie.state = r.memoizedState,
                                        ie.componentWillUnmount()
                                    } catch (se) {
                                        Ie(l, o, se)
                                    }
                                }
                                break;
                            case 5:
                                Ir(q, q.return);
                                break;
                            case 22:
                                if (q.memoizedState !== null) {
                                    vp(G);
                                    continue
                                }
                            }
                            ne !== null ? (ne.return = q,
                            re = ne) : vp(G)
                        }
                        Q = Q.sibling
                    }
                e: for (Q = null,
                G = t; ; ) {
                    if (G.tag === 5) {
                        if (Q === null) {
                            Q = G;
                            try {
                                f = G.stateNode,
                                z ? (m = f.style,
                                typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (C = G.stateNode,
                                _ = G.memoizedProps.style,
                                w = _ != null && _.hasOwnProperty("display") ? _.display : null,
                                C.style.display = Yf("display", w))
                            } catch (se) {
                                Ie(t, t.return, se)
                            }
                        }
                    } else if (G.tag === 6) {
                        if (Q === null)
                            try {
                                G.stateNode.nodeValue = z ? "" : G.memoizedProps
                            } catch (se) {
                                Ie(t, t.return, se)
                            }
                    } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === t) && G.child !== null) {
                        G.child.return = G,
                        G = G.child;
                        continue
                    }
                    if (G === t)
                        break e;
                    for (; G.sibling === null; ) {
                        if (G.return === null || G.return === t)
                            break e;
                        Q === G && (Q = null),
                        G = G.return
                    }
                    Q === G && (Q = null),
                    G.sibling.return = G.return,
                    G = G.sibling
                }
            }
            break;
        case 19:
            jt(r, t),
            qt(t),
            l & 4 && pp(t);
            break;
        case 21:
            break;
        default:
            jt(r, t),
            qt(t)
        }
    }
    function qt(t) {
        var r = t.flags;
        if (r & 2) {
            try {
                e: {
                    for (var o = t.return; o !== null; ) {
                        if (fp(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(i(160))
                }
                switch (l.tag) {
                case 5:
                    var f = l.stateNode;
                    l.flags & 32 && (si(f, ""),
                    l.flags &= -33);
                    var m = dp(t);
                    hu(t, m, f);
                    break;
                case 3:
                case 4:
                    var w = l.stateNode.containerInfo
                      , C = dp(t);
                    du(t, C, w);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (_) {
                Ie(t, t.return, _)
            }
            t.flags &= -3
        }
        r & 4096 && (t.flags &= -4097)
    }
    function qx(t, r, o) {
        re = t,
        gp(t)
    }
    function gp(t, r, o) {
        for (var l = (t.mode & 1) !== 0; re !== null; ) {
            var f = re
              , m = f.child;
            if (f.tag === 22 && l) {
                var w = f.memoizedState !== null || us;
                if (!w) {
                    var C = f.alternate
                      , _ = C !== null && C.memoizedState !== null || tt;
                    C = us;
                    var z = tt;
                    if (us = w,
                    (tt = _) && !z)
                        for (re = f; re !== null; )
                            w = re,
                            _ = w.child,
                            w.tag === 22 && w.memoizedState !== null ? wp(f) : _ !== null ? (_.return = w,
                            re = _) : wp(f);
                    for (; m !== null; )
                        re = m,
                        gp(m),
                        m = m.sibling;
                    re = f,
                    us = C,
                    tt = z
                }
                yp(t)
            } else
                (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f,
                re = m) : yp(t)
        }
    }
    function yp(t) {
        for (; re !== null; ) {
            var r = re;
            if ((r.flags & 8772) !== 0) {
                var o = r.alternate;
                try {
                    if ((r.flags & 8772) !== 0)
                        switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            tt || cs(5, r);
                            break;
                        case 1:
                            var l = r.stateNode;
                            if (r.flags & 4 && !tt)
                                if (o === null)
                                    l.componentDidMount();
                                else {
                                    var f = r.elementType === r.type ? o.memoizedProps : Dt(r.type, o.memoizedProps);
                                    l.componentDidUpdate(f, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var m = r.updateQueue;
                            m !== null && vh(r, m, l);
                            break;
                        case 3:
                            var w = r.updateQueue;
                            if (w !== null) {
                                if (o = null,
                                r.child !== null)
                                    switch (r.child.tag) {
                                    case 5:
                                        o = r.child.stateNode;
                                        break;
                                    case 1:
                                        o = r.child.stateNode
                                    }
                                vh(r, w, o)
                            }
                            break;
                        case 5:
                            var C = r.stateNode;
                            if (o === null && r.flags & 4) {
                                o = C;
                                var _ = r.memoizedProps;
                                switch (r.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    _.autoFocus && o.focus();
                                    break;
                                case "img":
                                    _.src && (o.src = _.src)
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
                            if (r.memoizedState === null) {
                                var z = r.alternate;
                                if (z !== null) {
                                    var Q = z.memoizedState;
                                    if (Q !== null) {
                                        var G = Q.dehydrated;
                                        G !== null && yi(G)
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
                            throw Error(i(163))
                        }
                    tt || r.flags & 512 && fu(r)
                } catch (q) {
                    Ie(r, r.return, q)
                }
            }
            if (r === t) {
                re = null;
                break
            }
            if (o = r.sibling,
            o !== null) {
                o.return = r.return,
                re = o;
                break
            }
            re = r.return
        }
    }
    function vp(t) {
        for (; re !== null; ) {
            var r = re;
            if (r === t) {
                re = null;
                break
            }
            var o = r.sibling;
            if (o !== null) {
                o.return = r.return,
                re = o;
                break
            }
            re = r.return
        }
    }
    function wp(t) {
        for (; re !== null; ) {
            var r = re;
            try {
                switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    var o = r.return;
                    try {
                        cs(4, r)
                    } catch (_) {
                        Ie(r, o, _)
                    }
                    break;
                case 1:
                    var l = r.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var f = r.return;
                        try {
                            l.componentDidMount()
                        } catch (_) {
                            Ie(r, f, _)
                        }
                    }
                    var m = r.return;
                    try {
                        fu(r)
                    } catch (_) {
                        Ie(r, m, _)
                    }
                    break;
                case 5:
                    var w = r.return;
                    try {
                        fu(r)
                    } catch (_) {
                        Ie(r, w, _)
                    }
                }
            } catch (_) {
                Ie(r, r.return, _)
            }
            if (r === t) {
                re = null;
                break
            }
            var C = r.sibling;
            if (C !== null) {
                C.return = r.return,
                re = C;
                break
            }
            re = r.return
        }
    }
    var Qx = Math.ceil
      , fs = N.ReactCurrentDispatcher
      , pu = N.ReactCurrentOwner
      , kt = N.ReactCurrentBatchConfig
      , Ee = 0
      , qe = null
      , Ue = null
      , Ye = 0
      , yt = 0
      , Fr = Cn(0)
      , We = 0
      , zi = null
      , tr = 0
      , ds = 0
      , mu = 0
      , Bi = null
      , ct = null
      , gu = 0
      , Vr = 1 / 0
      , cn = null
      , hs = !1
      , yu = null
      , On = null
      , ps = !1
      , Mn = null
      , ms = 0
      , Ui = 0
      , vu = null
      , gs = -1
      , ys = 0;
    function ot() {
        return (Ee & 6) !== 0 ? Ve() : gs !== -1 ? gs : gs = Ve()
    }
    function Nn(t) {
        return (t.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && Ye !== 0 ? Ye & -Ye : Ox.transition !== null ? (ys === 0 && (ys = dd()),
        ys) : (t = Te,
        t !== 0 || (t = window.event,
        t = t === void 0 ? 16 : Sd(t.type)),
        t)
    }
    function It(t, r, o, l) {
        if (50 < Ui)
            throw Ui = 0,
            vu = null,
            Error(i(185));
        di(t, o, l),
        ((Ee & 2) === 0 || t !== qe) && (t === qe && ((Ee & 2) === 0 && (ds |= o),
        We === 4 && Dn(t, Ye)),
        ft(t, l),
        o === 1 && Ee === 0 && (r.mode & 1) === 0 && (Vr = Ve() + 500,
        $o && kn()))
    }
    function ft(t, r) {
        var o = t.callbackNode;
        Ow(t, r);
        var l = bo(t, t === qe ? Ye : 0);
        if (l === 0)
            o !== null && ud(o),
            t.callbackNode = null,
            t.callbackPriority = 0;
        else if (r = l & -l,
        t.callbackPriority !== r) {
            if (o != null && ud(o),
            r === 1)
                t.tag === 0 ? _x(Sp.bind(null, t)) : sh(Sp.bind(null, t)),
                bx(function() {
                    (Ee & 6) === 0 && kn()
                }),
                o = null;
            else {
                switch (hd(l)) {
                case 1:
                    o = Xa;
                    break;
                case 4:
                    o = cd;
                    break;
                case 16:
                    o = Eo;
                    break;
                case 536870912:
                    o = fd;
                    break;
                default:
                    o = Eo
                }
                o = Ap(o, xp.bind(null, t))
            }
            t.callbackPriority = r,
            t.callbackNode = o
        }
    }
    function xp(t, r) {
        if (gs = -1,
        ys = 0,
        (Ee & 6) !== 0)
            throw Error(i(327));
        var o = t.callbackNode;
        if (zr() && t.callbackNode !== o)
            return null;
        var l = bo(t, t === qe ? Ye : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r)
            r = vs(t, l);
        else {
            r = l;
            var f = Ee;
            Ee |= 2;
            var m = Pp();
            (qe !== t || Ye !== r) && (cn = null,
            Vr = Ve() + 500,
            rr(t, r));
            do
                try {
                    Xx();
                    break
                } catch (C) {
                    Ep(t, C)
                }
            while (!0);
            jl(),
            fs.current = m,
            Ee = f,
            Ue !== null ? r = 0 : (qe = null,
            Ye = 0,
            r = We)
        }
        if (r !== 0) {
            if (r === 2 && (f = Za(t),
            f !== 0 && (l = f,
            r = wu(t, f))),
            r === 1)
                throw o = zi,
                rr(t, 0),
                Dn(t, l),
                ft(t, Ve()),
                o;
            if (r === 6)
                Dn(t, l);
            else {
                if (f = t.current.alternate,
                (l & 30) === 0 && !Gx(f) && (r = vs(t, l),
                r === 2 && (m = Za(t),
                m !== 0 && (l = m,
                r = wu(t, m))),
                r === 1))
                    throw o = zi,
                    rr(t, 0),
                    Dn(t, l),
                    ft(t, Ve()),
                    o;
                switch (t.finishedWork = f,
                t.finishedLanes = l,
                r) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 2:
                    ir(t, ct, cn);
                    break;
                case 3:
                    if (Dn(t, l),
                    (l & 130023424) === l && (r = gu + 500 - Ve(),
                    10 < r)) {
                        if (bo(t, 0) !== 0)
                            break;
                        if (f = t.suspendedLanes,
                        (f & l) !== l) {
                            ot(),
                            t.pingedLanes |= t.suspendedLanes & f;
                            break
                        }
                        t.timeoutHandle = Cl(ir.bind(null, t, ct, cn), r);
                        break
                    }
                    ir(t, ct, cn);
                    break;
                case 4:
                    if (Dn(t, l),
                    (l & 4194240) === l)
                        break;
                    for (r = t.eventTimes,
                    f = -1; 0 < l; ) {
                        var w = 31 - Ot(l);
                        m = 1 << w,
                        w = r[w],
                        w > f && (f = w),
                        l &= ~m
                    }
                    if (l = f,
                    l = Ve() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Qx(l / 1960)) - l,
                    10 < l) {
                        t.timeoutHandle = Cl(ir.bind(null, t, ct, cn), l);
                        break
                    }
                    ir(t, ct, cn);
                    break;
                case 5:
                    ir(t, ct, cn);
                    break;
                default:
                    throw Error(i(329))
                }
            }
        }
        return ft(t, Ve()),
        t.callbackNode === o ? xp.bind(null, t) : null
    }
    function wu(t, r) {
        var o = Bi;
        return t.current.memoizedState.isDehydrated && (rr(t, r).flags |= 256),
        t = vs(t, r),
        t !== 2 && (r = ct,
        ct = o,
        r !== null && xu(r)),
        t
    }
    function xu(t) {
        ct === null ? ct = t : ct.push.apply(ct, t)
    }
    function Gx(t) {
        for (var r = t; ; ) {
            if (r.flags & 16384) {
                var o = r.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var f = o[l]
                          , m = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!Mt(m(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = r.child,
            r.subtreeFlags & 16384 && o !== null)
                o.return = r,
                r = o;
            else {
                if (r === t)
                    break;
                for (; r.sibling === null; ) {
                    if (r.return === null || r.return === t)
                        return !0;
                    r = r.return
                }
                r.sibling.return = r.return,
                r = r.sibling
            }
        }
        return !0
    }
    function Dn(t, r) {
        for (r &= ~mu,
        r &= ~ds,
        t.suspendedLanes |= r,
        t.pingedLanes &= ~r,
        t = t.expirationTimes; 0 < r; ) {
            var o = 31 - Ot(r)
              , l = 1 << o;
            t[o] = -1,
            r &= ~l
        }
    }
    function Sp(t) {
        if ((Ee & 6) !== 0)
            throw Error(i(327));
        zr();
        var r = bo(t, 0);
        if ((r & 1) === 0)
            return ft(t, Ve()),
            null;
        var o = vs(t, r);
        if (t.tag !== 0 && o === 2) {
            var l = Za(t);
            l !== 0 && (r = l,
            o = wu(t, l))
        }
        if (o === 1)
            throw o = zi,
            rr(t, 0),
            Dn(t, r),
            ft(t, Ve()),
            o;
        if (o === 6)
            throw Error(i(345));
        return t.finishedWork = t.current.alternate,
        t.finishedLanes = r,
        ir(t, ct, cn),
        ft(t, Ve()),
        null
    }
    function Su(t, r) {
        var o = Ee;
        Ee |= 1;
        try {
            return t(r)
        } finally {
            Ee = o,
            Ee === 0 && (Vr = Ve() + 500,
            $o && kn())
        }
    }
    function nr(t) {
        Mn !== null && Mn.tag === 0 && (Ee & 6) === 0 && zr();
        var r = Ee;
        Ee |= 1;
        var o = kt.transition
          , l = Te;
        try {
            if (kt.transition = null,
            Te = 1,
            t)
                return t()
        } finally {
            Te = l,
            kt.transition = o,
            Ee = r,
            (Ee & 6) === 0 && kn()
        }
    }
    function Eu() {
        yt = Fr.current,
        ke(Fr)
    }
    function rr(t, r) {
        t.finishedWork = null,
        t.finishedLanes = 0;
        var o = t.timeoutHandle;
        if (o !== -1 && (t.timeoutHandle = -1,
        Cx(o)),
        Ue !== null)
            for (o = Ue.return; o !== null; ) {
                var l = o;
                switch (Ol(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && Ho();
                    break;
                case 3:
                    Lr(),
                    ke(at),
                    ke(Ze),
                    Wl();
                    break;
                case 5:
                    Ul(l);
                    break;
                case 4:
                    Lr();
                    break;
                case 13:
                    ke(De);
                    break;
                case 19:
                    ke(De);
                    break;
                case 10:
                    Il(l.type._context);
                    break;
                case 22:
                case 23:
                    Eu()
                }
                o = o.return
            }
        if (qe = t,
        Ue = t = Ln(t.current, null),
        Ye = yt = r,
        We = 0,
        zi = null,
        mu = ds = tr = 0,
        ct = Bi = null,
        Zn !== null) {
            for (r = 0; r < Zn.length; r++)
                if (o = Zn[r],
                l = o.interleaved,
                l !== null) {
                    o.interleaved = null;
                    var f = l.next
                      , m = o.pending;
                    if (m !== null) {
                        var w = m.next;
                        m.next = f,
                        l.next = w
                    }
                    o.pending = l
                }
            Zn = null
        }
        return t
    }
    function Ep(t, r) {
        do {
            var o = Ue;
            try {
                if (jl(),
                ts.current = os,
                ns) {
                    for (var l = Le.memoizedState; l !== null; ) {
                        var f = l.queue;
                        f !== null && (f.pending = null),
                        l = l.next
                    }
                    ns = !1
                }
                if (er = 0,
                Ke = He = Le = null,
                Di = !1,
                Li = 0,
                pu.current = null,
                o === null || o.return === null) {
                    We = 1,
                    zi = r,
                    Ue = null;
                    break
                }
                e: {
                    var m = t
                      , w = o.return
                      , C = o
                      , _ = r;
                    if (r = Ye,
                    C.flags |= 32768,
                    _ !== null && typeof _ == "object" && typeof _.then == "function") {
                        var z = _
                          , Q = C
                          , G = Q.tag;
                        if ((Q.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
                            var q = Q.alternate;
                            q ? (Q.updateQueue = q.updateQueue,
                            Q.memoizedState = q.memoizedState,
                            Q.lanes = q.lanes) : (Q.updateQueue = null,
                            Q.memoizedState = null)
                        }
                        var ne = qh(w);
                        if (ne !== null) {
                            ne.flags &= -257,
                            Qh(ne, w, C, m, r),
                            ne.mode & 1 && Kh(m, z, r),
                            r = ne,
                            _ = z;
                            var ie = r.updateQueue;
                            if (ie === null) {
                                var se = new Set;
                                se.add(_),
                                r.updateQueue = se
                            } else
                                ie.add(_);
                            break e
                        } else {
                            if ((r & 1) === 0) {
                                Kh(m, z, r),
                                Pu();
                                break e
                            }
                            _ = Error(i(426))
                        }
                    } else if (_e && C.mode & 1) {
                        var ze = qh(w);
                        if (ze !== null) {
                            (ze.flags & 65536) === 0 && (ze.flags |= 256),
                            Qh(ze, w, C, m, r),
                            Dl(jr(_, C));
                            break e
                        }
                    }
                    m = _ = jr(_, C),
                    We !== 4 && (We = 2),
                    Bi === null ? Bi = [m] : Bi.push(m),
                    m = w;
                    do {
                        switch (m.tag) {
                        case 3:
                            m.flags |= 65536,
                            r &= -r,
                            m.lanes |= r;
                            var j = Wh(m, _, r);
                            yh(m, j);
                            break e;
                        case 1:
                            C = _;
                            var O = m.type
                              , I = m.stateNode;
                            if ((m.flags & 128) === 0 && (typeof O.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (On === null || !On.has(I)))) {
                                m.flags |= 65536,
                                r &= -r,
                                m.lanes |= r;
                                var J = $h(m, C, r);
                                yh(m, J);
                                break e
                            }
                        }
                        m = m.return
                    } while (m !== null)
                }
                Cp(o)
            } catch (ae) {
                r = ae,
                Ue === o && o !== null && (Ue = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function Pp() {
        var t = fs.current;
        return fs.current = os,
        t === null ? os : t
    }
    function Pu() {
        (We === 0 || We === 3 || We === 2) && (We = 4),
        qe === null || (tr & 268435455) === 0 && (ds & 268435455) === 0 || Dn(qe, Ye)
    }
    function vs(t, r) {
        var o = Ee;
        Ee |= 2;
        var l = Pp();
        (qe !== t || Ye !== r) && (cn = null,
        rr(t, r));
        do
            try {
                Yx();
                break
            } catch (f) {
                Ep(t, f)
            }
        while (!0);
        if (jl(),
        Ee = o,
        fs.current = l,
        Ue !== null)
            throw Error(i(261));
        return qe = null,
        Ye = 0,
        We
    }
    function Yx() {
        for (; Ue !== null; )
            Tp(Ue)
    }
    function Xx() {
        for (; Ue !== null && !Ew(); )
            Tp(Ue)
    }
    function Tp(t) {
        var r = Rp(t.alternate, t, yt);
        t.memoizedProps = t.pendingProps,
        r === null ? Cp(t) : Ue = r,
        pu.current = null
    }
    function Cp(t) {
        var r = t;
        do {
            var o = r.alternate;
            if (t = r.return,
            (r.flags & 32768) === 0) {
                if (o = Hx(o, r, yt),
                o !== null) {
                    Ue = o;
                    return
                }
            } else {
                if (o = Wx(o, r),
                o !== null) {
                    o.flags &= 32767,
                    Ue = o;
                    return
                }
                if (t !== null)
                    t.flags |= 32768,
                    t.subtreeFlags = 0,
                    t.deletions = null;
                else {
                    We = 6,
                    Ue = null;
                    return
                }
            }
            if (r = r.sibling,
            r !== null) {
                Ue = r;
                return
            }
            Ue = r = t
        } while (r !== null);
        We === 0 && (We = 5)
    }
    function ir(t, r, o) {
        var l = Te
          , f = kt.transition;
        try {
            kt.transition = null,
            Te = 1,
            Zx(t, r, o, l)
        } finally {
            kt.transition = f,
            Te = l
        }
        return null
    }
    function Zx(t, r, o, l) {
        do
            zr();
        while (Mn !== null);
        if ((Ee & 6) !== 0)
            throw Error(i(327));
        o = t.finishedWork;
        var f = t.finishedLanes;
        if (o === null)
            return null;
        if (t.finishedWork = null,
        t.finishedLanes = 0,
        o === t.current)
            throw Error(i(177));
        t.callbackNode = null,
        t.callbackPriority = 0;
        var m = o.lanes | o.childLanes;
        if (Mw(t, m),
        t === qe && (Ue = qe = null,
        Ye = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || ps || (ps = !0,
        Ap(Eo, function() {
            return zr(),
            null
        })),
        m = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || m) {
            m = kt.transition,
            kt.transition = null;
            var w = Te;
            Te = 1;
            var C = Ee;
            Ee |= 4,
            pu.current = null,
            Kx(t, o),
            mp(o, t),
            vx(Pl),
            Ao = !!El,
            Pl = El = null,
            t.current = o,
            qx(o),
            Pw(),
            Ee = C,
            Te = w,
            kt.transition = m
        } else
            t.current = o;
        if (ps && (ps = !1,
        Mn = t,
        ms = f),
        m = t.pendingLanes,
        m === 0 && (On = null),
        bw(o.stateNode),
        ft(t, Ve()),
        r !== null)
            for (l = t.onRecoverableError,
            o = 0; o < r.length; o++)
                f = r[o],
                l(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (hs)
            throw hs = !1,
            t = yu,
            yu = null,
            t;
        return (ms & 1) !== 0 && t.tag !== 0 && zr(),
        m = t.pendingLanes,
        (m & 1) !== 0 ? t === vu ? Ui++ : (Ui = 0,
        vu = t) : Ui = 0,
        kn(),
        null
    }
    function zr() {
        if (Mn !== null) {
            var t = hd(ms)
              , r = kt.transition
              , o = Te;
            try {
                if (kt.transition = null,
                Te = 16 > t ? 16 : t,
                Mn === null)
                    var l = !1;
                else {
                    if (t = Mn,
                    Mn = null,
                    ms = 0,
                    (Ee & 6) !== 0)
                        throw Error(i(331));
                    var f = Ee;
                    for (Ee |= 4,
                    re = t.current; re !== null; ) {
                        var m = re
                          , w = m.child;
                        if ((re.flags & 16) !== 0) {
                            var C = m.deletions;
                            if (C !== null) {
                                for (var _ = 0; _ < C.length; _++) {
                                    var z = C[_];
                                    for (re = z; re !== null; ) {
                                        var Q = re;
                                        switch (Q.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vi(8, Q, m)
                                        }
                                        var G = Q.child;
                                        if (G !== null)
                                            G.return = Q,
                                            re = G;
                                        else
                                            for (; re !== null; ) {
                                                Q = re;
                                                var q = Q.sibling
                                                  , ne = Q.return;
                                                if (cp(Q),
                                                Q === z) {
                                                    re = null;
                                                    break
                                                }
                                                if (q !== null) {
                                                    q.return = ne,
                                                    re = q;
                                                    break
                                                }
                                                re = ne
                                            }
                                    }
                                }
                                var ie = m.alternate;
                                if (ie !== null) {
                                    var se = ie.child;
                                    if (se !== null) {
                                        ie.child = null;
                                        do {
                                            var ze = se.sibling;
                                            se.sibling = null,
                                            se = ze
                                        } while (se !== null)
                                    }
                                }
                                re = m
                            }
                        }
                        if ((m.subtreeFlags & 2064) !== 0 && w !== null)
                            w.return = m,
                            re = w;
                        else
                            e: for (; re !== null; ) {
                                if (m = re,
                                (m.flags & 2048) !== 0)
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vi(9, m, m.return)
                                    }
                                var j = m.sibling;
                                if (j !== null) {
                                    j.return = m.return,
                                    re = j;
                                    break e
                                }
                                re = m.return
                            }
                    }
                    var O = t.current;
                    for (re = O; re !== null; ) {
                        w = re;
                        var I = w.child;
                        if ((w.subtreeFlags & 2064) !== 0 && I !== null)
                            I.return = w,
                            re = I;
                        else
                            e: for (w = O; re !== null; ) {
                                if (C = re,
                                (C.flags & 2048) !== 0)
                                    try {
                                        switch (C.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cs(9, C)
                                        }
                                    } catch (ae) {
                                        Ie(C, C.return, ae)
                                    }
                                if (C === w) {
                                    re = null;
                                    break e
                                }
                                var J = C.sibling;
                                if (J !== null) {
                                    J.return = C.return,
                                    re = J;
                                    break e
                                }
                                re = C.return
                            }
                    }
                    if (Ee = f,
                    kn(),
                    Ht && typeof Ht.onPostCommitFiberRoot == "function")
                        try {
                            Ht.onPostCommitFiberRoot(Po, t)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                Te = o,
                kt.transition = r
            }
        }
        return !1
    }
    function bp(t, r, o) {
        r = jr(o, r),
        r = Wh(t, r, 1),
        t = An(t, r, 1),
        r = ot(),
        t !== null && (di(t, 1, r),
        ft(t, r))
    }
    function Ie(t, r, o) {
        if (t.tag === 3)
            bp(t, t, o);
        else
            for (; r !== null; ) {
                if (r.tag === 3) {
                    bp(r, t, o);
                    break
                } else if (r.tag === 1) {
                    var l = r.stateNode;
                    if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (On === null || !On.has(l))) {
                        t = jr(o, t),
                        t = $h(r, t, 1),
                        r = An(r, t, 1),
                        t = ot(),
                        r !== null && (di(r, 1, t),
                        ft(r, t));
                        break
                    }
                }
                r = r.return
            }
    }
    function Jx(t, r, o) {
        var l = t.pingCache;
        l !== null && l.delete(r),
        r = ot(),
        t.pingedLanes |= t.suspendedLanes & o,
        qe === t && (Ye & o) === o && (We === 4 || We === 3 && (Ye & 130023424) === Ye && 500 > Ve() - gu ? rr(t, 0) : mu |= o),
        ft(t, r)
    }
    function kp(t, r) {
        r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = Co,
        Co <<= 1,
        (Co & 130023424) === 0 && (Co = 4194304)));
        var o = ot();
        t = an(t, r),
        t !== null && (di(t, r, o),
        ft(t, o))
    }
    function eS(t) {
        var r = t.memoizedState
          , o = 0;
        r !== null && (o = r.retryLane),
        kp(t, o)
    }
    function tS(t, r) {
        var o = 0;
        switch (t.tag) {
        case 13:
            var l = t.stateNode
              , f = t.memoizedState;
            f !== null && (o = f.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        default:
            throw Error(i(314))
        }
        l !== null && l.delete(r),
        kp(t, o)
    }
    var Rp;
    Rp = function(t, r, o) {
        if (t !== null)
            if (t.memoizedProps !== r.pendingProps || at.current)
                ut = !0;
            else {
                if ((t.lanes & o) === 0 && (r.flags & 128) === 0)
                    return ut = !1,
                    Ux(t, r, o);
                ut = (t.flags & 131072) !== 0
            }
        else
            ut = !1,
            _e && (r.flags & 1048576) !== 0 && ah(r, qo, r.index);
        switch (r.lanes = 0,
        r.tag) {
        case 2:
            var l = r.type;
            ls(t, r),
            t = r.pendingProps;
            var f = Rr(r, Ze.current);
            Dr(r, o),
            f = ql(null, r, l, t, f, o);
            var m = Ql();
            return r.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1,
            r.memoizedState = null,
            r.updateQueue = null,
            lt(l) ? (m = !0,
            Wo(r)) : m = !1,
            r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            zl(r),
            f.updater = ss,
            r.stateNode = f,
            f._reactInternals = r,
            eu(r, l, t, o),
            r = iu(null, r, l, !0, m, o)) : (r.tag = 0,
            _e && m && _l(r),
            it(null, r, f, o),
            r = r.child),
            r;
        case 16:
            l = r.elementType;
            e: {
                switch (ls(t, r),
                t = r.pendingProps,
                f = l._init,
                l = f(l._payload),
                r.type = l,
                f = r.tag = rS(l),
                t = Dt(l, t),
                f) {
                case 0:
                    r = ru(null, r, l, t, o);
                    break e;
                case 1:
                    r = ep(null, r, l, t, o);
                    break e;
                case 11:
                    r = Gh(null, r, l, t, o);
                    break e;
                case 14:
                    r = Yh(null, r, l, Dt(l.type, t), o);
                    break e
                }
                throw Error(i(306, l, ""))
            }
            return r;
        case 0:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : Dt(l, f),
            ru(t, r, l, f, o);
        case 1:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : Dt(l, f),
            ep(t, r, l, f, o);
        case 3:
            e: {
                if (tp(r),
                t === null)
                    throw Error(i(387));
                l = r.pendingProps,
                m = r.memoizedState,
                f = m.element,
                gh(t, r),
                Jo(r, l, null, o);
                var w = r.memoizedState;
                if (l = w.element,
                m.isDehydrated)
                    if (m = {
                        element: l,
                        isDehydrated: !1,
                        cache: w.cache,
                        pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
                        transitions: w.transitions
                    },
                    r.updateQueue.baseState = m,
                    r.memoizedState = m,
                    r.flags & 256) {
                        f = jr(Error(i(423)), r),
                        r = np(t, r, l, o, f);
                        break e
                    } else if (l !== f) {
                        f = jr(Error(i(424)), r),
                        r = np(t, r, l, o, f);
                        break e
                    } else
                        for (gt = Tn(r.stateNode.containerInfo.firstChild),
                        mt = r,
                        _e = !0,
                        Nt = null,
                        o = ph(r, null, l, o),
                        r.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Or(),
                    l === f) {
                        r = un(t, r, o);
                        break e
                    }
                    it(t, r, l, o)
                }
                r = r.child
            }
            return r;
        case 5:
            return wh(r),
            t === null && Nl(r),
            l = r.type,
            f = r.pendingProps,
            m = t !== null ? t.memoizedProps : null,
            w = f.children,
            Tl(l, f) ? w = null : m !== null && Tl(l, m) && (r.flags |= 32),
            Jh(t, r),
            it(t, r, w, o),
            r.child;
        case 6:
            return t === null && Nl(r),
            null;
        case 13:
            return rp(t, r, o);
        case 4:
            return Bl(r, r.stateNode.containerInfo),
            l = r.pendingProps,
            t === null ? r.child = Mr(r, null, l, o) : it(t, r, l, o),
            r.child;
        case 11:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : Dt(l, f),
            Gh(t, r, l, f, o);
        case 7:
            return it(t, r, r.pendingProps, o),
            r.child;
        case 8:
            return it(t, r, r.pendingProps.children, o),
            r.child;
        case 12:
            return it(t, r, r.pendingProps.children, o),
            r.child;
        case 10:
            e: {
                if (l = r.type._context,
                f = r.pendingProps,
                m = r.memoizedProps,
                w = f.value,
                Ce(Yo, l._currentValue),
                l._currentValue = w,
                m !== null)
                    if (Mt(m.value, w)) {
                        if (m.children === f.children && !at.current) {
                            r = un(t, r, o);
                            break e
                        }
                    } else
                        for (m = r.child,
                        m !== null && (m.return = r); m !== null; ) {
                            var C = m.dependencies;
                            if (C !== null) {
                                w = m.child;
                                for (var _ = C.firstContext; _ !== null; ) {
                                    if (_.context === l) {
                                        if (m.tag === 1) {
                                            _ = ln(-1, o & -o),
                                            _.tag = 2;
                                            var z = m.updateQueue;
                                            if (z !== null) {
                                                z = z.shared;
                                                var Q = z.pending;
                                                Q === null ? _.next = _ : (_.next = Q.next,
                                                Q.next = _),
                                                z.pending = _
                                            }
                                        }
                                        m.lanes |= o,
                                        _ = m.alternate,
                                        _ !== null && (_.lanes |= o),
                                        Fl(m.return, o, r),
                                        C.lanes |= o;
                                        break
                                    }
                                    _ = _.next
                                }
                            } else if (m.tag === 10)
                                w = m.type === r.type ? null : m.child;
                            else if (m.tag === 18) {
                                if (w = m.return,
                                w === null)
                                    throw Error(i(341));
                                w.lanes |= o,
                                C = w.alternate,
                                C !== null && (C.lanes |= o),
                                Fl(w, o, r),
                                w = m.sibling
                            } else
                                w = m.child;
                            if (w !== null)
                                w.return = m;
                            else
                                for (w = m; w !== null; ) {
                                    if (w === r) {
                                        w = null;
                                        break
                                    }
                                    if (m = w.sibling,
                                    m !== null) {
                                        m.return = w.return,
                                        w = m;
                                        break
                                    }
                                    w = w.return
                                }
                            m = w
                        }
                it(t, r, f.children, o),
                r = r.child
            }
            return r;
        case 9:
            return f = r.type,
            l = r.pendingProps.children,
            Dr(r, o),
            f = Ct(f),
            l = l(f),
            r.flags |= 1,
            it(t, r, l, o),
            r.child;
        case 14:
            return l = r.type,
            f = Dt(l, r.pendingProps),
            f = Dt(l.type, f),
            Yh(t, r, l, f, o);
        case 15:
            return Xh(t, r, r.type, r.pendingProps, o);
        case 17:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : Dt(l, f),
            ls(t, r),
            r.tag = 1,
            lt(l) ? (t = !0,
            Wo(r)) : t = !1,
            Dr(r, o),
            Uh(r, l, f),
            eu(r, l, f, o),
            iu(null, r, l, !0, t, o);
        case 19:
            return op(t, r, o);
        case 22:
            return Zh(t, r, o)
        }
        throw Error(i(156, r.tag))
    }
    ;
    function Ap(t, r) {
        return ld(t, r)
    }
    function nS(t, r, o, l) {
        this.tag = t,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = r,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Rt(t, r, o, l) {
        return new nS(t,r,o,l)
    }
    function Tu(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function rS(t) {
        if (typeof t == "function")
            return Tu(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof,
            t === L)
                return 11;
            if (t === ce)
                return 14
        }
        return 2
    }
    function Ln(t, r) {
        var o = t.alternate;
        return o === null ? (o = Rt(t.tag, r, t.key, t.mode),
        o.elementType = t.elementType,
        o.type = t.type,
        o.stateNode = t.stateNode,
        o.alternate = t,
        t.alternate = o) : (o.pendingProps = r,
        o.type = t.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = t.flags & 14680064,
        o.childLanes = t.childLanes,
        o.lanes = t.lanes,
        o.child = t.child,
        o.memoizedProps = t.memoizedProps,
        o.memoizedState = t.memoizedState,
        o.updateQueue = t.updateQueue,
        r = t.dependencies,
        o.dependencies = r === null ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        },
        o.sibling = t.sibling,
        o.index = t.index,
        o.ref = t.ref,
        o
    }
    function ws(t, r, o, l, f, m) {
        var w = 2;
        if (l = t,
        typeof t == "function")
            Tu(t) && (w = 1);
        else if (typeof t == "string")
            w = 5;
        else
            e: switch (t) {
            case F:
                return or(o.children, f, m, r);
            case H:
                w = 8,
                f |= 8;
                break;
            case Y:
                return t = Rt(12, o, r, f | 2),
                t.elementType = Y,
                t.lanes = m,
                t;
            case X:
                return t = Rt(13, o, r, f),
                t.elementType = X,
                t.lanes = m,
                t;
            case B:
                return t = Rt(19, o, r, f),
                t.elementType = B,
                t.lanes = m,
                t;
            case te:
                return xs(o, f, m, r);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case K:
                        w = 10;
                        break e;
                    case $:
                        w = 9;
                        break e;
                    case L:
                        w = 11;
                        break e;
                    case ce:
                        w = 14;
                        break e;
                    case oe:
                        w = 16,
                        l = null;
                        break e
                    }
                throw Error(i(130, t == null ? t : typeof t, ""))
            }
        return r = Rt(w, o, r, f),
        r.elementType = t,
        r.type = l,
        r.lanes = m,
        r
    }
    function or(t, r, o, l) {
        return t = Rt(7, t, l, r),
        t.lanes = o,
        t
    }
    function xs(t, r, o, l) {
        return t = Rt(22, t, l, r),
        t.elementType = te,
        t.lanes = o,
        t.stateNode = {
            isHidden: !1
        },
        t
    }
    function Cu(t, r, o) {
        return t = Rt(6, t, null, r),
        t.lanes = o,
        t
    }
    function bu(t, r, o) {
        return r = Rt(4, t.children !== null ? t.children : [], t.key, r),
        r.lanes = o,
        r.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        r
    }
    function iS(t, r, o, l, f) {
        this.tag = r,
        this.containerInfo = t,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Ja(0),
        this.expirationTimes = Ja(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ja(0),
        this.identifierPrefix = l,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function ku(t, r, o, l, f, m, w, C, _) {
        return t = new iS(t,r,o,C,_),
        r === 1 ? (r = 1,
        m === !0 && (r |= 8)) : r = 0,
        m = Rt(3, null, null, r),
        t.current = m,
        m.stateNode = t,
        m.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        zl(m),
        t
    }
    function oS(t, r, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: V,
            key: l == null ? null : "" + l,
            children: t,
            containerInfo: r,
            implementation: o
        }
    }
    function _p(t) {
        if (!t)
            return bn;
        t = t._reactInternals;
        e: {
            if (qn(t) !== t || t.tag !== 1)
                throw Error(i(170));
            var r = t;
            do {
                switch (r.tag) {
                case 3:
                    r = r.stateNode.context;
                    break e;
                case 1:
                    if (lt(r.type)) {
                        r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                r = r.return
            } while (r !== null);
            throw Error(i(171))
        }
        if (t.tag === 1) {
            var o = t.type;
            if (lt(o))
                return ih(t, o, r)
        }
        return r
    }
    function Op(t, r, o, l, f, m, w, C, _) {
        return t = ku(o, l, !0, t, f, m, w, C, _),
        t.context = _p(null),
        o = t.current,
        l = ot(),
        f = Nn(o),
        m = ln(l, f),
        m.callback = r ?? null,
        An(o, m, f),
        t.current.lanes = f,
        di(t, f, l),
        ft(t, l),
        t
    }
    function Ss(t, r, o, l) {
        var f = r.current
          , m = ot()
          , w = Nn(f);
        return o = _p(o),
        r.context === null ? r.context = o : r.pendingContext = o,
        r = ln(m, w),
        r.payload = {
            element: t
        },
        l = l === void 0 ? null : l,
        l !== null && (r.callback = l),
        t = An(f, r, w),
        t !== null && (It(t, f, w, m),
        Zo(t, f, w)),
        w
    }
    function Es(t) {
        return t = t.current,
        t.child ? (t.child.tag === 5,
        t.child.stateNode) : null
    }
    function Mp(t, r) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var o = t.retryLane;
            t.retryLane = o !== 0 && o < r ? o : r
        }
    }
    function Ru(t, r) {
        Mp(t, r),
        (t = t.alternate) && Mp(t, r)
    }
    function sS() {
        return null
    }
    var Np = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    }
    ;
    function Au(t) {
        this._internalRoot = t
    }
    Ps.prototype.render = Au.prototype.render = function(t) {
        var r = this._internalRoot;
        if (r === null)
            throw Error(i(409));
        Ss(t, r, null, null)
    }
    ,
    Ps.prototype.unmount = Au.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var r = t.containerInfo;
            nr(function() {
                Ss(null, t, null, null)
            }),
            r[nn] = null
        }
    }
    ;
    function Ps(t) {
        this._internalRoot = t
    }
    Ps.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var r = gd();
            t = {
                blockedOn: null,
                target: t,
                priority: r
            };
            for (var o = 0; o < Sn.length && r !== 0 && r < Sn[o].priority; o++)
                ;
            Sn.splice(o, 0, t),
            o === 0 && wd(t)
        }
    }
    ;
    function _u(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function Ts(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }
    function Dp() {}
    function aS(t, r, o, l, f) {
        if (f) {
            if (typeof l == "function") {
                var m = l;
                l = function() {
                    var z = Es(w);
                    m.call(z)
                }
            }
            var w = Op(r, l, t, 0, null, !1, !1, "", Dp);
            return t._reactRootContainer = w,
            t[nn] = w.current,
            bi(t.nodeType === 8 ? t.parentNode : t),
            nr(),
            w
        }
        for (; f = t.lastChild; )
            t.removeChild(f);
        if (typeof l == "function") {
            var C = l;
            l = function() {
                var z = Es(_);
                C.call(z)
            }
        }
        var _ = ku(t, 0, !1, null, null, !1, !1, "", Dp);
        return t._reactRootContainer = _,
        t[nn] = _.current,
        bi(t.nodeType === 8 ? t.parentNode : t),
        nr(function() {
            Ss(r, _, o, l)
        }),
        _
    }
    function Cs(t, r, o, l, f) {
        var m = o._reactRootContainer;
        if (m) {
            var w = m;
            if (typeof f == "function") {
                var C = f;
                f = function() {
                    var _ = Es(w);
                    C.call(_)
                }
            }
            Ss(r, w, t, f)
        } else
            w = aS(o, r, t, f, l);
        return Es(w)
    }
    pd = function(t) {
        switch (t.tag) {
        case 3:
            var r = t.stateNode;
            if (r.current.memoizedState.isDehydrated) {
                var o = fi(r.pendingLanes);
                o !== 0 && (el(r, o | 1),
                ft(r, Ve()),
                (Ee & 6) === 0 && (Vr = Ve() + 500,
                kn()))
            }
            break;
        case 13:
            nr(function() {
                var l = an(t, 1);
                if (l !== null) {
                    var f = ot();
                    It(l, t, 1, f)
                }
            }),
            Ru(t, 1)
        }
    }
    ,
    tl = function(t) {
        if (t.tag === 13) {
            var r = an(t, 134217728);
            if (r !== null) {
                var o = ot();
                It(r, t, 134217728, o)
            }
            Ru(t, 134217728)
        }
    }
    ,
    md = function(t) {
        if (t.tag === 13) {
            var r = Nn(t)
              , o = an(t, r);
            if (o !== null) {
                var l = ot();
                It(o, t, r, l)
            }
            Ru(t, r)
        }
    }
    ,
    gd = function() {
        return Te
    }
    ,
    yd = function(t, r) {
        var o = Te;
        try {
            return Te = t,
            r()
        } finally {
            Te = o
        }
    }
    ,
    qa = function(t, r, o) {
        switch (r) {
        case "input":
            if (Va(t, o),
            r = o.name,
            o.type === "radio" && r != null) {
                for (o = t; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'),
                r = 0; r < o.length; r++) {
                    var l = o[r];
                    if (l !== t && l.form === t.form) {
                        var f = Uo(l);
                        if (!f)
                            throw Error(i(90));
                        mr(l),
                        Va(l, f)
                    }
                }
            }
            break;
        case "textarea":
            Kf(t, o);
            break;
        case "select":
            r = o.value,
            r != null && gr(t, !!o.multiple, r, !1)
        }
    }
    ,
    td = Su,
    nd = nr;
    var lS = {
        usingClientEntryPoint: !1,
        Events: [Ai, br, Uo, Jf, ed, Su]
    }
      , Hi = {
        findFiberByHostInstance: Qn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , uS = {
        bundleType: Hi.bundleType,
        version: Hi.version,
        rendererPackageName: Hi.rendererPackageName,
        rendererConfig: Hi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: N.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = sd(t),
            t === null ? null : t.stateNode
        },
        findFiberByHostInstance: Hi.findFiberByHostInstance || sS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!bs.isDisabled && bs.supportsFiber)
            try {
                Po = bs.inject(uS),
                Ht = bs
            } catch {}
    }
    return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lS,
    dt.createPortal = function(t, r) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!_u(r))
            throw Error(i(200));
        return oS(t, r, null, o)
    }
    ,
    dt.createRoot = function(t, r) {
        if (!_u(t))
            throw Error(i(299));
        var o = !1
          , l = ""
          , f = Np;
        return r != null && (r.unstable_strictMode === !0 && (o = !0),
        r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (f = r.onRecoverableError)),
        r = ku(t, 1, !1, null, null, o, !1, l, f),
        t[nn] = r.current,
        bi(t.nodeType === 8 ? t.parentNode : t),
        new Au(r)
    }
    ,
    dt.findDOMNode = function(t) {
        if (t == null)
            return null;
        if (t.nodeType === 1)
            return t;
        var r = t._reactInternals;
        if (r === void 0)
            throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","),
            Error(i(268, t)));
        return t = sd(r),
        t = t === null ? null : t.stateNode,
        t
    }
    ,
    dt.flushSync = function(t) {
        return nr(t)
    }
    ,
    dt.hydrate = function(t, r, o) {
        if (!Ts(r))
            throw Error(i(200));
        return Cs(null, t, r, !0, o)
    }
    ,
    dt.hydrateRoot = function(t, r, o) {
        if (!_u(t))
            throw Error(i(405));
        var l = o != null && o.hydratedSources || null
          , f = !1
          , m = ""
          , w = Np;
        if (o != null && (o.unstable_strictMode === !0 && (f = !0),
        o.identifierPrefix !== void 0 && (m = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (w = o.onRecoverableError)),
        r = Op(r, null, t, 1, o ?? null, f, !1, m, w),
        t[nn] = r.current,
        bi(t),
        l)
            for (t = 0; t < l.length; t++)
                o = l[t],
                f = o._getVersion,
                f = f(o._source),
                r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(o, f);
        return new Ps(r)
    }
    ,
    dt.render = function(t, r, o) {
        if (!Ts(r))
            throw Error(i(200));
        return Cs(null, t, r, !1, o)
    }
    ,
    dt.unmountComponentAtNode = function(t) {
        if (!Ts(t))
            throw Error(i(40));
        return t._reactRootContainer ? (nr(function() {
            Cs(null, null, t, !1, function() {
                t._reactRootContainer = null,
                t[nn] = null
            })
        }),
        !0) : !1
    }
    ,
    dt.unstable_batchedUpdates = Su,
    dt.unstable_renderSubtreeIntoContainer = function(t, r, o, l) {
        if (!Ts(o))
            throw Error(i(200));
        if (t == null || t._reactInternals === void 0)
            throw Error(i(38));
        return Cs(t, r, o, !1, l)
    }
    ,
    dt.version = "18.3.1-next-f1338f8080-20240426",
    dt
}
var Up;
function ga() {
    if (Up)
        return Nu.exports;
    Up = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (n) {
                console.error(n)
            }
    }
    return e(),
    Nu.exports = yS(),
    Nu.exports
}
var Hp;
function vS() {
    if (Hp)
        return Rs;
    Hp = 1;
    var e = ga();
    return Rs.createRoot = e.createRoot,
    Rs.hydrateRoot = e.hydrateRoot,
    Rs
}
var wS = vS();
function xS(e, n) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var i, s, a, u, c = [], d = "", h = e.split("/");
    for (h[0] || h.shift(); a = h.shift(); )
        i = a[0],
        i === "*" ? (c.push(i),
        d += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : i === ":" ? (s = a.indexOf("?", 1),
        u = a.indexOf(".", 1),
        c.push(a.substring(1, ~s ? s : ~u ? u : a.length)),
        d += ~s && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~u && (d += (~s ? "?" : "") + "\\" + a.substring(u))) : d += "/" + a;
    return {
        keys: c,
        pattern: new RegExp("^" + d + (n ? "(?=$|/)" : "/?$"),"i")
    }
}
var k = Jt();
const Vn = iy(k)
  , SS = fS({
    __proto__: null,
    default: Vn
}, [k]);
var ju = {
    exports: {}
}
  , Iu = {};
var Wp;
function ES() {
    if (Wp)
        return Iu;
    Wp = 1;
    var e = Jt();
    function n(y, v) {
        return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v
    }
    var i = typeof Object.is == "function" ? Object.is : n
      , s = e.useState
      , a = e.useEffect
      , u = e.useLayoutEffect
      , c = e.useDebugValue;
    function d(y, v) {
        var x = v()
          , S = s({
            inst: {
                value: x,
                getSnapshot: v
            }
        })
          , E = S[0].inst
          , P = S[1];
        return u(function() {
            E.value = x,
            E.getSnapshot = v,
            h(E) && P({
                inst: E
            })
        }, [y, x, v]),
        a(function() {
            return h(E) && P({
                inst: E
            }),
            y(function() {
                h(E) && P({
                    inst: E
                })
            })
        }, [y]),
        c(x),
        x
    }
    function h(y) {
        var v = y.getSnapshot;
        y = y.value;
        try {
            var x = v();
            return !i(y, x)
        } catch {
            return !0
        }
    }
    function p(y, v) {
        return v()
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : d;
    return Iu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g,
    Iu
}
var $p;
function PS() {
    return $p || ($p = 1,
    ju.exports = ES()),
    ju.exports
}
var TS = PS();
const CS = SS.useInsertionEffect
  , bS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , kS = bS ? k.useLayoutEffect : k.useEffect
  , RS = CS || kS
  , oy = e => {
    const n = k.useRef([e, (...i) => n[0](...i)]).current;
    return RS( () => {
        n[0] = e
    }
    ),
    n[1]
}
  , AS = "popstate"
  , Ic = "pushState"
  , Fc = "replaceState"
  , _S = "hashchange"
  , Kp = [AS, Ic, Fc, _S]
  , OS = e => {
    for (const n of Kp)
        addEventListener(n, e);
    return () => {
        for (const n of Kp)
            removeEventListener(n, e)
    }
}
  , sy = (e, n) => TS.useSyncExternalStore(OS, e, n)
  , MS = () => location.search
  , NS = ({ssrSearch: e=""}={}) => sy(MS, () => e)
  , qp = () => location.pathname
  , DS = ({ssrPath: e}={}) => sy(qp, e ? () => e : qp)
  , LS = (e, {replace: n=!1, state: i=null}={}) => history[n ? Fc : Ic](i, "", e)
  , jS = (e={}) => [DS(e), LS]
  , Qp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Qp] > "u") {
    for (const e of [Ic, Fc]) {
        const n = history[e];
        history[e] = function() {
            const i = n.apply(this, arguments)
              , s = new Event(e);
            return s.arguments = arguments,
            dispatchEvent(s),
            i
        }
    }
    Object.defineProperty(window, Qp, {
        value: !0
    })
}
const IS = (e, n) => n.toLowerCase().indexOf(e.toLowerCase()) ? "~" + n : n.slice(e.length) || "/"
  , ay = (e="") => e === "/" ? "" : e
  , FS = (e, n) => e[0] === "~" ? e.slice(1) : ay(n) + e
  , VS = (e="", n) => IS(Gp(ay(e)), Gp(n))
  , Gp = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , ly = {
    hook: jS,
    searchHook: NS,
    parser: xS,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
}
  , uy = k.createContext(ly)
  , ya = () => k.useContext(uy)
  , cy = {}
  , fy = k.createContext(cy)
  , zS = () => k.useContext(fy)
  , Vc = e => {
    const [n,i] = e.hook(e);
    return [VS(e.base, n), oy( (s, a) => i(FS(s, e.base), a))]
}
  , dy = (e, n, i, s) => {
    const {pattern: a, keys: u} = n instanceof RegExp ? {
        keys: !1,
        pattern: n
    } : e(n || "*", s)
      , c = a.exec(i) || []
      , [d,...h] = c;
    return d !== void 0 ? [!0, ( () => {
        const p = u !== !1 ? Object.fromEntries(u.map( (y, v) => [y, h[v]])) : c.groups;
        let g = {
            ...h
        };
        return p && Object.assign(g, p),
        g
    }
    )(), ...s ? [d] : []] : [!1, null]
}
  , BS = ({children: e, ...n}) => {
    const i = ya()
      , s = n.hook ? ly : i;
    let a = s;
    const [u,c] = n.ssrPath?.split("?") ?? [];
    c && (n.ssrSearch = c,
    n.ssrPath = u),
    n.hrefs = n.hrefs ?? n.hook?.hrefs;
    let d = k.useRef({})
      , h = d.current
      , p = h;
    for (let g in s) {
        const y = g === "base" ? s[g] + (n[g] || "") : n[g] || s[g];
        h === p && y !== p[g] && (d.current = p = {
            ...p
        }),
        p[g] = y,
        y !== s[g] && (a = p)
    }
    return k.createElement(uy.Provider, {
        value: a,
        children: e
    })
}
  , Yp = ({children: e, component: n}, i) => n ? k.createElement(n, {
    params: i
}) : typeof e == "function" ? e(i) : e
  , US = e => {
    let n = k.useRef(cy)
      , i = n.current;
    for (const s in e)
        e[s] !== i[s] && (i = e);
    return Object.keys(e).length === 0 && (i = e),
    n.current = i
}
  , Xp = ({path: e, nest: n, match: i, ...s}) => {
    const a = ya()
      , [u] = Vc(a)
      , [c,d,h] = i ?? dy(a.parser, e, u, n)
      , p = US({
        ...zS(),
        ...d
    });
    if (!c)
        return null;
    const g = h ? k.createElement(BS, {
        base: h
    }, Yp(s, p)) : Yp(s, p);
    return k.createElement(fy.Provider, {
        value: p,
        children: g
    })
}
;
k.forwardRef( (e, n) => {
    const i = ya()
      , [s,a] = Vc(i)
      , {to: u="", href: c=u, onClick: d, asChild: h, children: p, className: g, replace: y, state: v, ...x} = e
      , S = oy(P => {
        P.ctrlKey || P.metaKey || P.altKey || P.shiftKey || P.button !== 0 || (d?.(P),
        P.defaultPrevented || (P.preventDefault(),
        a(c, e)))
    }
    )
      , E = i.hrefs(c[0] === "~" ? c.slice(1) : i.base + c, i);
    return h && k.isValidElement(p) ? k.cloneElement(p, {
        onClick: S,
        href: E
    }) : k.createElement("a", {
        ...x,
        onClick: S,
        href: E,
        className: g?.call ? g(s === c) : g,
        children: p,
        ref: n
    })
}
);
const hy = e => Array.isArray(e) ? e.flatMap(n => hy(n && n.type === k.Fragment ? n.props.children : n)) : [e]
  , HS = ({children: e, location: n}) => {
    const i = ya()
      , [s] = Vc(i);
    for (const a of hy(e)) {
        let u = 0;
        if (k.isValidElement(a) && (u = dy(i.parser, a.props.path, n || s, a.props.nest))[0])
            return k.cloneElement(a, {
                match: u
            })
    }
    return null
}
;
var va = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , wa = typeof window > "u" || "Deno"in globalThis;
function Vt() {}
function WS(e, n) {
    return typeof e == "function" ? e(n) : e
}
function $S(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function KS(e, n) {
    return Math.max(e + (n || 0) - Date.now(), 0)
}
function Zp(e, n) {
    return typeof e == "function" ? e(n) : e
}
function qS(e, n) {
    return typeof e == "function" ? e(n) : e
}
function Jp(e, n) {
    const {type: i="all", exact: s, fetchStatus: a, predicate: u, queryKey: c, stale: d} = e;
    if (c) {
        if (s) {
            if (n.queryHash !== zc(c, n.options))
                return !1
        } else if (!io(n.queryKey, c))
            return !1
    }
    if (i !== "all") {
        const h = n.isActive();
        if (i === "active" && !h || i === "inactive" && h)
            return !1
    }
    return !(typeof d == "boolean" && n.isStale() !== d || a && a !== n.state.fetchStatus || u && !u(n))
}
function em(e, n) {
    const {exact: i, status: s, predicate: a, mutationKey: u} = e;
    if (u) {
        if (!n.options.mutationKey)
            return !1;
        if (i) {
            if (ro(n.options.mutationKey) !== ro(u))
                return !1
        } else if (!io(n.options.mutationKey, u))
            return !1
    }
    return !(s && n.state.status !== s || a && !a(n))
}
function zc(e, n) {
    return (n?.queryKeyHashFn || ro)(e)
}
function ro(e) {
    return JSON.stringify(e, (n, i) => fc(i) ? Object.keys(i).sort().reduce( (s, a) => (s[a] = i[a],
    s), {}) : i)
}
function io(e, n) {
    return e === n ? !0 : typeof e != typeof n ? !1 : e && n && typeof e == "object" && typeof n == "object" ? !Object.keys(n).some(i => !io(e[i], n[i])) : !1
}
function py(e, n) {
    if (e === n)
        return e;
    const i = tm(e) && tm(n);
    if (i || fc(e) && fc(n)) {
        const s = i ? e : Object.keys(e)
          , a = s.length
          , u = i ? n : Object.keys(n)
          , c = u.length
          , d = i ? [] : {};
        let h = 0;
        for (let p = 0; p < c; p++) {
            const g = i ? p : u[p];
            (!i && s.includes(g) || i) && e[g] === void 0 && n[g] === void 0 ? (d[g] = void 0,
            h++) : (d[g] = py(e[g], n[g]),
            d[g] === e[g] && e[g] !== void 0 && h++)
        }
        return a === c && h === a ? e : d
    }
    return n
}
function tm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function fc(e) {
    if (!nm(e))
        return !1;
    const n = e.constructor;
    if (n === void 0)
        return !0;
    const i = n.prototype;
    return !(!nm(i) || !i.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function nm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function QS(e) {
    return new Promise(n => {
        setTimeout(n, e)
    }
    )
}
function GS(e, n, i) {
    return typeof i.structuralSharing == "function" ? i.structuralSharing(e, n) : i.structuralSharing !== !1 ? py(e, n) : n
}
function YS(e, n, i=0) {
    const s = [...e, n];
    return i && s.length > i ? s.slice(1) : s
}
function XS(e, n, i=0) {
    const s = [n, ...e];
    return i && s.length > i ? s.slice(0, -1) : s
}
var Bc = Symbol();
function my(e, n) {
    return !e.queryFn && n?.initialPromise ? () => n.initialPromise : !e.queryFn || e.queryFn === Bc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var ZS = class extends va {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (!wa && window.addEventListener) {
                const n = () => e();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e,
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(n => {
            n(e)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , gy = new ZS
  , JS = class extends va {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (!wa && window.addEventListener) {
                const n = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e,
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , na = new JS;
function e1() {
    let e, n;
    const i = new Promise( (a, u) => {
        e = a,
        n = u
    }
    );
    i.status = "pending",
    i.catch( () => {}
    );
    function s(a) {
        Object.assign(i, a),
        delete i.resolve,
        delete i.reject
    }
    return i.resolve = a => {
        s({
            status: "fulfilled",
            value: a
        }),
        e(a)
    }
    ,
    i.reject = a => {
        s({
            status: "rejected",
            reason: a
        }),
        n(a)
    }
    ,
    i
}
function t1(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function yy(e) {
    return (e ?? "online") === "online" ? na.isOnline() : !0
}
var vy = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function Fu(e) {
    return e instanceof vy
}
function wy(e) {
    let n = !1, i = 0, s = !1, a;
    const u = e1()
      , c = E => {
        s || (v(new vy(E)),
        e.abort?.())
    }
      , d = () => {
        n = !0
    }
      , h = () => {
        n = !1
    }
      , p = () => gy.isFocused() && (e.networkMode === "always" || na.isOnline()) && e.canRun()
      , g = () => yy(e.networkMode) && e.canRun()
      , y = E => {
        s || (s = !0,
        e.onSuccess?.(E),
        a?.(),
        u.resolve(E))
    }
      , v = E => {
        s || (s = !0,
        e.onError?.(E),
        a?.(),
        u.reject(E))
    }
      , x = () => new Promise(E => {
        a = P => {
            (s || p()) && E(P)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        a = void 0,
        s || e.onContinue?.()
    }
    )
      , S = () => {
        if (s)
            return;
        let E;
        const P = i === 0 ? e.initialPromise : void 0;
        try {
            E = P ?? e.fn()
        } catch (T) {
            E = Promise.reject(T)
        }
        Promise.resolve(E).then(y).catch(T => {
            if (s)
                return;
            const R = e.retry ?? (wa ? 0 : 3)
              , A = e.retryDelay ?? t1
              , N = typeof A == "function" ? A(i, T) : A
              , D = R === !0 || typeof R == "number" && i < R || typeof R == "function" && R(i, T);
            if (n || !D) {
                v(T);
                return
            }
            i++,
            e.onFail?.(i, T),
            QS(N).then( () => p() ? void 0 : x()).then( () => {
                n ? v(T) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: u,
        cancel: c,
        continue: () => (a?.(),
        u),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? S() : x().then(S),
        u)
    }
}
function n1() {
    let e = []
      , n = 0
      , i = d => {
        d()
    }
      , s = d => {
        d()
    }
      , a = d => setTimeout(d, 0);
    const u = d => {
        n ? e.push(d) : a( () => {
            i(d)
        }
        )
    }
      , c = () => {
        const d = e;
        e = [],
        d.length && a( () => {
            s( () => {
                d.forEach(h => {
                    i(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let h;
            n++;
            try {
                h = d()
            } finally {
                n--,
                n || c()
            }
            return h
        }
        ,
        batchCalls: d => (...h) => {
            u( () => {
                d(...h)
            }
            )
        }
        ,
        schedule: u,
        setNotifyFunction: d => {
            i = d
        }
        ,
        setBatchNotifyFunction: d => {
            s = d
        }
        ,
        setScheduler: d => {
            a = d
        }
    }
}
var st = n1()
  , xy = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        $S(this.gcTime) && (this.#e = setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (wa ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , r1 = class extends xy {
    #e;
    #t;
    #n;
    #r;
    #s;
    #o;
    constructor(e) {
        super(),
        this.#o = !1,
        this.#s = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#n = e.cache,
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#e = o1(this.options),
        this.state = e.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#r?.promise
    }
    setOptions(e) {
        this.options = {
            ...this.#s,
            ...e
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(e, n) {
        const i = GS(this.state.data, e, this.options);
        return this.#i({
            data: i,
            type: "success",
            dataUpdatedAt: n?.updatedAt,
            manual: n?.manual
        }),
        i
    }
    setState(e, n) {
        this.#i({
            type: "setState",
            state: e,
            setStateOptions: n
        })
    }
    cancel(e) {
        const n = this.#r?.promise;
        return this.#r?.cancel(e),
        n ? n.then(Vt).catch(Vt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(e => qS(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(e=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !KS(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(n => n.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    onOnline() {
        this.observers.find(n => n.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e),
        this.observers.length || (this.#r && (this.#o ? this.#r.cancel({
            revert: !0
        }) : this.#r.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#i({
            type: "invalidate"
        })
    }
    fetch(e, n) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#r)
                return this.#r.continueRetry(),
                this.#r.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const d = this.observers.find(h => h.options.queryFn);
            d && this.setOptions(d.options)
        }
        const i = new AbortController
          , s = d => {
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (this.#o = !0,
                i.signal)
            })
        }
          , a = () => {
            const d = my(this.options, n)
              , h = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return s(h),
            this.#o = !1,
            this.options.persister ? this.options.persister(d, h, this) : d(h)
        }
          , u = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a
        };
        s(u),
        this.options.behavior?.onFetch(u, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== u.fetchOptions?.meta) && this.#i({
            type: "fetch",
            meta: u.fetchOptions?.meta
        });
        const c = d => {
            Fu(d) && d.silent || this.#i({
                type: "error",
                error: d
            }),
            Fu(d) || (this.#n.config.onError?.(d, this),
            this.#n.config.onSettled?.(this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return this.#r = wy({
            initialPromise: n?.initialPromise,
            fn: u.fetchFn,
            abort: i.abort.bind(i),
            onSuccess: d => {
                if (d === void 0) {
                    c(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (h) {
                    c(h);
                    return
                }
                this.#n.config.onSuccess?.(d, this),
                this.#n.config.onSettled?.(d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: c,
            onFail: (d, h) => {
                this.#i({
                    type: "failed",
                    failureCount: d,
                    error: h
                })
            }
            ,
            onPause: () => {
                this.#i({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#i({
                    type: "continue"
                })
            }
            ,
            retry: u.options.retry,
            retryDelay: u.options.retryDelay,
            networkMode: u.options.networkMode,
            canRun: () => !0
        }),
        this.#r.start()
    }
    #i(e) {
        const n = i => {
            switch (e.type) {
            case "failed":
                return {
                    ...i,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case "pause":
                return {
                    ...i,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...i,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...i,
                    ...i1(i.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case "success":
                return {
                    ...i,
                    data: e.data,
                    dataUpdateCount: i.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!e.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const s = e.error;
                return Fu(s) && s.revert && this.#t ? {
                    ...this.#t,
                    fetchStatus: "idle"
                } : {
                    ...i,
                    error: s,
                    errorUpdateCount: i.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: i.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...i,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...i,
                    ...e.state
                }
            }
        }
        ;
        this.state = n(this.state),
        st.batch( () => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function i1(e, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: yy(n.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function o1(e) {
    const n = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , i = n !== void 0
      , s = i ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: i ? s ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: i ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var s1 = class extends va {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map
    }
    #e;
    build(e, n, i) {
        const s = n.queryKey
          , a = n.queryHash ?? zc(s, n);
        let u = this.get(a);
        return u || (u = new r1({
            cache: this,
            queryKey: s,
            queryHash: a,
            options: e.defaultQueryOptions(n),
            state: i,
            defaultOptions: e.getQueryDefaults(s)
        }),
        this.add(u)),
        u
    }
    add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const n = this.#e.get(e.queryHash);
        n && (e.destroy(),
        n === e && this.#e.delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        st.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.#e.get(e)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Jp(n, i))
    }
    findAll(e={}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter(i => Jp(e, i)) : n
    }
    notify(e) {
        st.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    onFocus() {
        st.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        st.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
  , a1 = class extends xy {
    #e;
    #t;
    #n;
    constructor(e) {
        super(),
        this.mutationId = e.mutationId,
        this.#t = e.mutationCache,
        this.#e = [],
        this.state = e.state || l1(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#e.includes(e) || (this.#e.push(e),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#e = this.#e.filter(n => n !== e),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#n?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        this.#n = wy({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (s, a) => {
                this.#r({
                    type: "failed",
                    failureCount: s,
                    error: a
                })
            }
            ,
            onPause: () => {
                this.#r({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#r({
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const n = this.state.status === "pending"
          , i = !this.#n.canStart();
        try {
            if (!n) {
                this.#r({
                    type: "pending",
                    variables: e,
                    isPaused: i
                }),
                await this.#t.config.onMutate?.(e, this);
                const a = await this.options.onMutate?.(e);
                a !== this.state.context && this.#r({
                    type: "pending",
                    context: a,
                    variables: e,
                    isPaused: i
                })
            }
            const s = await this.#n.start();
            return await this.#t.config.onSuccess?.(s, e, this.state.context, this),
            await this.options.onSuccess?.(s, e, this.state.context),
            await this.#t.config.onSettled?.(s, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(s, null, e, this.state.context),
            this.#r({
                type: "success",
                data: s
            }),
            s
        } catch (s) {
            try {
                throw await this.#t.config.onError?.(s, e, this.state.context, this),
                await this.options.onError?.(s, e, this.state.context),
                await this.#t.config.onSettled?.(void 0, s, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, s, e, this.state.context),
                s
            } finally {
                this.#r({
                    type: "error",
                    error: s
                })
            }
        } finally {
            this.#t.runNext(this)
        }
    }
    #r(e) {
        const n = i => {
            switch (e.type) {
            case "failed":
                return {
                    ...i,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return {
                    ...i,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...i,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...i,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...i,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...i,
                    data: void 0,
                    error: e.error,
                    failureCount: i.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = n(this.state),
        st.batch( () => {
            this.#e.forEach(i => {
                i.onMutationUpdate(e)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function l1() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var u1 = class extends va {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map,
        this.#t = Date.now()
    }
    #e;
    #t;
    build(e, n, i) {
        const s = new a1({
            mutationCache: this,
            mutationId: ++this.#t,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(s),
        s
    }
    add(e) {
        const n = As(e)
          , i = this.#e.get(n) ?? [];
        i.push(e),
        this.#e.set(n, i),
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        const n = As(e);
        if (this.#e.has(n)) {
            const i = this.#e.get(n)?.filter(s => s !== e);
            i && (i.length === 0 ? this.#e.delete(n) : this.#e.set(n, i))
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = this.#e.get(As(e))?.find(i => i.state.status === "pending");
        return !n || n === e
    }
    runNext(e) {
        return this.#e.get(As(e))?.find(i => i !== e && i.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        st.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => em(n, i))
    }
    findAll(e={}) {
        return this.getAll().filter(n => em(e, n))
    }
    notify(e) {
        st.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return st.batch( () => Promise.all(e.map(n => n.continue().catch(Vt))))
    }
}
;
function As(e) {
    return e.options.scope?.id ?? String(e.mutationId)
}
function rm(e) {
    return {
        onFetch: (n, i) => {
            const s = n.options
              , a = n.fetchOptions?.meta?.fetchMore?.direction
              , u = n.state.data?.pages || []
              , c = n.state.data?.pageParams || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const p = async () => {
                let g = !1;
                const y = S => {
                    Object.defineProperty(S, "signal", {
                        enumerable: !0,
                        get: () => (n.signal.aborted ? g = !0 : n.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        n.signal)
                    })
                }
                  , v = my(n.options, n.fetchOptions)
                  , x = async (S, E, P) => {
                    if (g)
                        return Promise.reject();
                    if (E == null && S.pages.length)
                        return Promise.resolve(S);
                    const T = {
                        queryKey: n.queryKey,
                        pageParam: E,
                        direction: P ? "backward" : "forward",
                        meta: n.options.meta
                    };
                    y(T);
                    const R = await v(T)
                      , {maxPages: A} = n.options
                      , N = P ? XS : YS;
                    return {
                        pages: N(S.pages, R, A),
                        pageParams: N(S.pageParams, E, A)
                    }
                }
                ;
                if (a && u.length) {
                    const S = a === "backward"
                      , E = S ? c1 : im
                      , P = {
                        pages: u,
                        pageParams: c
                    }
                      , T = E(s, P);
                    d = await x(P, T, S)
                } else {
                    const S = e ?? u.length;
                    do {
                        const E = h === 0 ? c[0] ?? s.initialPageParam : im(s, d);
                        if (h > 0 && E == null)
                            break;
                        d = await x(d, E),
                        h++
                    } while (h < S)
                }
                return d
            }
            ;
            n.options.persister ? n.fetchFn = () => n.options.persister?.(p, {
                queryKey: n.queryKey,
                meta: n.options.meta,
                signal: n.signal
            }, i) : n.fetchFn = p
        }
    }
}
function im(e, {pages: n, pageParams: i}) {
    const s = n.length - 1;
    return n.length > 0 ? e.getNextPageParam(n[s], n, i[s], i) : void 0
}
function c1(e, {pages: n, pageParams: i}) {
    return n.length > 0 ? e.getPreviousPageParam?.(n[0], n, i[0], i) : void 0
}
var f1 = class {
    #e;
    #t;
    #n;
    #r;
    #s;
    #o;
    #i;
    #a;
    constructor(e={}) {
        this.#e = e.queryCache || new s1,
        this.#t = e.mutationCache || new u1,
        this.#n = e.defaultOptions || {},
        this.#r = new Map,
        this.#s = new Map,
        this.#o = 0
    }
    mount() {
        this.#o++,
        this.#o === 1 && (this.#i = gy.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#a = na.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#o--,
        this.#o === 0 && (this.#i?.(),
        this.#i = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(e) {
        return this.#e.findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return this.#t.findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        const n = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(n.queryHash)?.state.data
    }
    ensureQueryData(e) {
        const n = this.getQueryData(e.queryKey);
        if (n === void 0)
            return this.fetchQuery(e);
        {
            const i = this.defaultQueryOptions(e)
              , s = this.#e.build(this, i);
            return e.revalidateIfStale && s.isStaleByTime(Zp(i.staleTime, s)) && this.prefetchQuery(i),
            Promise.resolve(n)
        }
    }
    getQueriesData(e) {
        return this.#e.findAll(e).map( ({queryKey: n, state: i}) => {
            const s = i.data;
            return [n, s]
        }
        )
    }
    setQueryData(e, n, i) {
        const s = this.defaultQueryOptions({
            queryKey: e
        })
          , u = this.#e.get(s.queryHash)?.state.data
          , c = WS(n, u);
        if (c !== void 0)
            return this.#e.build(this, s).setData(c, {
                ...i,
                manual: !0
            })
    }
    setQueriesData(e, n, i) {
        return st.batch( () => this.#e.findAll(e).map( ({queryKey: s}) => [s, this.setQueryData(s, n, i)]))
    }
    getQueryState(e) {
        const n = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(n.queryHash)?.state
    }
    removeQueries(e) {
        const n = this.#e;
        st.batch( () => {
            n.findAll(e).forEach(i => {
                n.remove(i)
            }
            )
        }
        )
    }
    resetQueries(e, n) {
        const i = this.#e
          , s = {
            type: "active",
            ...e
        };
        return st.batch( () => (i.findAll(e).forEach(a => {
            a.reset()
        }
        ),
        this.refetchQueries(s, n)))
    }
    cancelQueries(e={}, n={}) {
        const i = {
            revert: !0,
            ...n
        }
          , s = st.batch( () => this.#e.findAll(e).map(a => a.cancel(i)));
        return Promise.all(s).then(Vt).catch(Vt)
    }
    invalidateQueries(e={}, n={}) {
        return st.batch( () => {
            if (this.#e.findAll(e).forEach(s => {
                s.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const i = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(i, n)
        }
        )
    }
    refetchQueries(e={}, n) {
        const i = {
            ...n,
            cancelRefetch: n?.cancelRefetch ?? !0
        }
          , s = st.batch( () => this.#e.findAll(e).filter(a => !a.isDisabled()).map(a => {
            let u = a.fetch(void 0, i);
            return i.throwOnError || (u = u.catch(Vt)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : u
        }
        ));
        return Promise.all(s).then(Vt)
    }
    fetchQuery(e) {
        const n = this.defaultQueryOptions(e);
        n.retry === void 0 && (n.retry = !1);
        const i = this.#e.build(this, n);
        return i.isStaleByTime(Zp(n.staleTime, i)) ? i.fetch(n) : Promise.resolve(i.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Vt).catch(Vt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = rm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Vt).catch(Vt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = rm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return na.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(e) {
        this.#n = e
    }
    setQueryDefaults(e, n) {
        this.#r.set(ro(e), {
            queryKey: e,
            defaultOptions: n
        })
    }
    getQueryDefaults(e) {
        const n = [...this.#r.values()];
        let i = {};
        return n.forEach(s => {
            io(e, s.queryKey) && (i = {
                ...i,
                ...s.defaultOptions
            })
        }
        ),
        i
    }
    setMutationDefaults(e, n) {
        this.#s.set(ro(e), {
            mutationKey: e,
            defaultOptions: n
        })
    }
    getMutationDefaults(e) {
        const n = [...this.#s.values()];
        let i = {};
        return n.forEach(s => {
            io(e, s.mutationKey) && (i = {
                ...i,
                ...s.defaultOptions
            })
        }
        ),
        i
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const n = {
            ...this.#n.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return n.queryHash || (n.queryHash = zc(n.queryKey, n)),
        n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"),
        n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
        !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
        n.enabled !== !0 && n.queryFn === Bc && (n.enabled = !1),
        n
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#n.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , d1 = k.createContext(void 0)
  , h1 = ({client: e, children: n}) => (k.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
b.jsx(d1.Provider, {
    value: e,
    children: n
}));
async function p1(e) {
    if (!e.ok) {
        const n = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${n}`)
    }
}
const m1 = ({on401: e}) => async ({queryKey: n}) => {
    const i = await fetch(n.join("/"), {
        credentials: "include"
    });
    return await p1(i),
    await i.json()
}
  , g1 = new f1({
    defaultOptions: {
        queries: {
            queryFn: m1({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , y1 = 1
  , v1 = 1e6;
let Vu = 0;
function w1() {
    return Vu = (Vu + 1) % Number.MAX_SAFE_INTEGER,
    Vu.toString()
}
const zu = new Map
  , om = e => {
    if (zu.has(e))
        return;
    const n = setTimeout( () => {
        zu.delete(e),
        Zi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , v1);
    zu.set(e, n)
}
  , x1 = (e, n) => {
    switch (n.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [n.toast, ...e.toasts].slice(0, y1)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(i => i.id === n.toast.id ? {
                ...i,
                ...n.toast
            } : i)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: i} = n;
            return i ? om(i) : e.toasts.forEach(s => {
                om(s.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(s => s.id === i || i === void 0 ? {
                    ...s,
                    open: !1
                } : s)
            }
        }
    case "REMOVE_TOAST":
        return n.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(i => i.id !== n.toastId)
        }
    }
}
  , Ys = [];
let Xs = {
    toasts: []
};
function Zi(e) {
    Xs = x1(Xs, e),
    Ys.forEach(n => {
        n(Xs)
    }
    )
}
function S1({...e}) {
    const n = w1()
      , i = a => Zi({
        type: "UPDATE_TOAST",
        toast: {
            ...a,
            id: n
        }
    })
      , s = () => Zi({
        type: "DISMISS_TOAST",
        toastId: n
    });
    return Zi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: n,
            open: !0,
            onOpenChange: a => {
                a || s()
            }
        }
    }),
    {
        id: n,
        dismiss: s,
        update: i
    }
}
function E1() {
    const [e,n] = k.useState(Xs);
    return k.useEffect( () => (Ys.push(n),
    () => {
        const i = Ys.indexOf(n);
        i > -1 && Ys.splice(i, 1)
    }
    ), [e]),
    {
        ...e,
        toast: S1,
        dismiss: i => Zi({
            type: "DISMISS_TOAST",
            toastId: i
        })
    }
}
var xa = ga();
const P1 = iy(xa);
function $e(e, n, {checkForDefaultPrevented: i=!0}={}) {
    return function(a) {
        if (e?.(a),
        i === !1 || !a.defaultPrevented)
            return n?.(a)
    }
}
function sm(e, n) {
    if (typeof e == "function")
        return e(n);
    e != null && (e.current = n)
}
function Sy(...e) {
    return n => {
        let i = !1;
        const s = e.map(a => {
            const u = sm(a, n);
            return !i && typeof u == "function" && (i = !0),
            u
        }
        );
        if (i)
            return () => {
                for (let a = 0; a < s.length; a++) {
                    const u = s[a];
                    typeof u == "function" ? u() : sm(e[a], null)
                }
            }
    }
}
function zt(...e) {
    return k.useCallback(Sy(...e), e)
}
function Sa(e, n=[]) {
    let i = [];
    function s(u, c) {
        const d = k.createContext(c)
          , h = i.length;
        i = [...i, c];
        const p = y => {
            const {scope: v, children: x, ...S} = y
              , E = v?.[e]?.[h] || d
              , P = k.useMemo( () => S, Object.values(S));
            return b.jsx(E.Provider, {
                value: P,
                children: x
            })
        }
        ;
        p.displayName = u + "Provider";
        function g(y, v) {
            const x = v?.[e]?.[h] || d
              , S = k.useContext(x);
            if (S)
                return S;
            if (c !== void 0)
                return c;
            throw new Error(`\`${y}\` must be used within \`${u}\``)
        }
        return [p, g]
    }
    const a = () => {
        const u = i.map(c => k.createContext(c));
        return function(d) {
            const h = d?.[e] || u;
            return k.useMemo( () => ({
                [`__scope${e}`]: {
                    ...d,
                    [e]: h
                }
            }), [d, h])
        }
    }
    ;
    return a.scopeName = e,
    [s, T1(a, ...n)]
}
function T1(...e) {
    const n = e[0];
    if (e.length === 1)
        return n;
    const i = () => {
        const s = e.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(u) {
            const c = s.reduce( (d, {useScope: h, scopeName: p}) => {
                const y = h(u)[`__scope${p}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return k.useMemo( () => ({
                [`__scope${n.scopeName}`]: c
            }), [c])
        }
    }
    ;
    return i.scopeName = n.scopeName,
    i
}
function ra(e) {
    const n = b1(e)
      , i = k.forwardRef( (s, a) => {
        const {children: u, ...c} = s
          , d = k.Children.toArray(u)
          , h = d.find(R1);
        if (h) {
            const p = h.props.children
              , g = d.map(y => y === h ? k.Children.count(p) > 1 ? k.Children.only(null) : k.isValidElement(p) ? p.props.children : null : y);
            return b.jsx(n, {
                ...c,
                ref: a,
                children: k.isValidElement(p) ? k.cloneElement(p, void 0, g) : null
            })
        }
        return b.jsx(n, {
            ...c,
            ref: a,
            children: u
        })
    }
    );
    return i.displayName = `${e}.Slot`,
    i
}
var C1 = ra("Slot");
function b1(e) {
    const n = k.forwardRef( (i, s) => {
        const {children: a, ...u} = i;
        if (k.isValidElement(a)) {
            const c = _1(a)
              , d = A1(u, a.props);
            return a.type !== k.Fragment && (d.ref = s ? Sy(s, c) : c),
            k.cloneElement(a, d)
        }
        return k.Children.count(a) > 1 ? k.Children.only(null) : null
    }
    );
    return n.displayName = `${e}.SlotClone`,
    n
}
var Ey = Symbol("radix.slottable");
function k1(e) {
    const n = ({children: i}) => b.jsx(b.Fragment, {
        children: i
    });
    return n.displayName = `${e}.Slottable`,
    n.__radixId = Ey,
    n
}
function R1(e) {
    return k.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Ey
}
function A1(e, n) {
    const i = {
        ...n
    };
    for (const s in n) {
        const a = e[s]
          , u = n[s];
        /^on[A-Z]/.test(s) ? a && u ? i[s] = (...d) => {
            u(...d),
            a(...d)
        }
        : a && (i[s] = a) : s === "style" ? i[s] = {
            ...a,
            ...u
        } : s === "className" && (i[s] = [a, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...i
    }
}
function _1(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , i = n && "isReactWarning"in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    i = n && "isReactWarning"in n && n.isReactWarning,
    i ? e.props.ref : e.props.ref || e.ref)
}
function O1(e) {
    const n = e + "CollectionProvider"
      , [i,s] = Sa(n)
      , [a,u] = i(n, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , c = E => {
        const {scope: P, children: T} = E
          , R = Vn.useRef(null)
          , A = Vn.useRef(new Map).current;
        return b.jsx(a, {
            scope: P,
            itemMap: A,
            collectionRef: R,
            children: T
        })
    }
    ;
    c.displayName = n;
    const d = e + "CollectionSlot"
      , h = ra(d)
      , p = Vn.forwardRef( (E, P) => {
        const {scope: T, children: R} = E
          , A = u(d, T)
          , N = zt(P, A.collectionRef);
        return b.jsx(h, {
            ref: N,
            children: R
        })
    }
    );
    p.displayName = d;
    const g = e + "CollectionItemSlot"
      , y = "data-radix-collection-item"
      , v = ra(g)
      , x = Vn.forwardRef( (E, P) => {
        const {scope: T, children: R, ...A} = E
          , N = Vn.useRef(null)
          , D = zt(P, N)
          , V = u(g, T);
        return Vn.useEffect( () => (V.itemMap.set(N, {
            ref: N,
            ...A
        }),
        () => {
            V.itemMap.delete(N)
        }
        )),
        b.jsx(v, {
            [y]: "",
            ref: D,
            children: R
        })
    }
    );
    x.displayName = g;
    function S(E) {
        const P = u(e + "CollectionConsumer", E);
        return Vn.useCallback( () => {
            const R = P.collectionRef.current;
            if (!R)
                return [];
            const A = Array.from(R.querySelectorAll(`[${y}]`));
            return Array.from(P.itemMap.values()).sort( (V, F) => A.indexOf(V.ref.current) - A.indexOf(F.ref.current))
        }
        , [P.collectionRef, P.itemMap])
    }
    return [{
        Provider: c,
        Slot: p,
        ItemSlot: x
    }, S, s]
}
var M1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ht = M1.reduce( (e, n) => {
    const i = ra(`Primitive.${n}`)
      , s = k.forwardRef( (a, u) => {
        const {asChild: c, ...d} = a
          , h = c ? i : n;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        b.jsx(h, {
            ...d,
            ref: u
        })
    }
    );
    return s.displayName = `Primitive.${n}`,
    {
        ...e,
        [n]: s
    }
}
, {});
function Py(e, n) {
    e && xa.flushSync( () => e.dispatchEvent(n))
}
function Xt(e) {
    const n = k.useRef(e);
    return k.useEffect( () => {
        n.current = e
    }
    ),
    k.useMemo( () => (...i) => n.current?.(...i), [])
}
function N1(e, n=globalThis?.document) {
    const i = Xt(e);
    k.useEffect( () => {
        const s = a => {
            a.key === "Escape" && i(a)
        }
        ;
        return n.addEventListener("keydown", s, {
            capture: !0
        }),
        () => n.removeEventListener("keydown", s, {
            capture: !0
        })
    }
    , [i, n])
}
var D1 = "DismissableLayer", dc = "dismissableLayer.update", L1 = "dismissableLayer.pointerDownOutside", j1 = "dismissableLayer.focusOutside", am, Ty = k.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Uc = k.forwardRef( (e, n) => {
    const {disableOutsidePointerEvents: i=!1, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, onDismiss: d, ...h} = e
      , p = k.useContext(Ty)
      , [g,y] = k.useState(null)
      , v = g?.ownerDocument ?? globalThis?.document
      , [,x] = k.useState({})
      , S = zt(n, F => y(F))
      , E = Array.from(p.layers)
      , [P] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
      , T = E.indexOf(P)
      , R = g ? E.indexOf(g) : -1
      , A = p.layersWithOutsidePointerEventsDisabled.size > 0
      , N = R >= T
      , D = F1(F => {
        const H = F.target
          , Y = [...p.branches].some(K => K.contains(H));
        !N || Y || (a?.(F),
        c?.(F),
        F.defaultPrevented || d?.())
    }
    , v)
      , V = V1(F => {
        const H = F.target;
        [...p.branches].some(K => K.contains(H)) || (u?.(F),
        c?.(F),
        F.defaultPrevented || d?.())
    }
    , v);
    return N1(F => {
        R === p.layers.size - 1 && (s?.(F),
        !F.defaultPrevented && d && (F.preventDefault(),
        d()))
    }
    , v),
    k.useEffect( () => {
        if (g)
            return i && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (am = v.body.style.pointerEvents,
            v.body.style.pointerEvents = "none"),
            p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            lm(),
            () => {
                i && p.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = am)
            }
    }
    , [g, v, i, p]),
    k.useEffect( () => () => {
        g && (p.layers.delete(g),
        p.layersWithOutsidePointerEventsDisabled.delete(g),
        lm())
    }
    , [g, p]),
    k.useEffect( () => {
        const F = () => x({});
        return document.addEventListener(dc, F),
        () => document.removeEventListener(dc, F)
    }
    , []),
    b.jsx(ht.div, {
        ...h,
        ref: S,
        style: {
            pointerEvents: A ? N ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: $e(e.onFocusCapture, V.onFocusCapture),
        onBlurCapture: $e(e.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: $e(e.onPointerDownCapture, D.onPointerDownCapture)
    })
}
);
Uc.displayName = D1;
var I1 = "DismissableLayerBranch"
  , Cy = k.forwardRef( (e, n) => {
    const i = k.useContext(Ty)
      , s = k.useRef(null)
      , a = zt(n, s);
    return k.useEffect( () => {
        const u = s.current;
        if (u)
            return i.branches.add(u),
            () => {
                i.branches.delete(u)
            }
    }
    , [i.branches]),
    b.jsx(ht.div, {
        ...e,
        ref: a
    })
}
);
Cy.displayName = I1;
function F1(e, n=globalThis?.document) {
    const i = Xt(e)
      , s = k.useRef(!1)
      , a = k.useRef( () => {}
    );
    return k.useEffect( () => {
        const u = d => {
            if (d.target && !s.current) {
                let h = function() {
                    by(L1, i, p, {
                        discrete: !0
                    })
                };
                const p = {
                    originalEvent: d
                };
                d.pointerType === "touch" ? (n.removeEventListener("click", a.current),
                a.current = h,
                n.addEventListener("click", a.current, {
                    once: !0
                })) : h()
            } else
                n.removeEventListener("click", a.current);
            s.current = !1
        }
          , c = window.setTimeout( () => {
            n.addEventListener("pointerdown", u)
        }
        , 0);
        return () => {
            window.clearTimeout(c),
            n.removeEventListener("pointerdown", u),
            n.removeEventListener("click", a.current)
        }
    }
    , [n, i]),
    {
        onPointerDownCapture: () => s.current = !0
    }
}
function V1(e, n=globalThis?.document) {
    const i = Xt(e)
      , s = k.useRef(!1);
    return k.useEffect( () => {
        const a = u => {
            u.target && !s.current && by(j1, i, {
                originalEvent: u
            }, {
                discrete: !1
            })
        }
        ;
        return n.addEventListener("focusin", a),
        () => n.removeEventListener("focusin", a)
    }
    , [n, i]),
    {
        onFocusCapture: () => s.current = !0,
        onBlurCapture: () => s.current = !1
    }
}
function lm() {
    const e = new CustomEvent(dc);
    document.dispatchEvent(e)
}
function by(e, n, i, {discrete: s}) {
    const a = i.originalEvent.target
      , u = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: i
    });
    n && a.addEventListener(e, n, {
        once: !0
    }),
    s ? Py(a, u) : a.dispatchEvent(u)
}
var z1 = Uc
  , B1 = Cy
  , dr = globalThis?.document ? k.useLayoutEffect : () => {}
  , U1 = "Portal"
  , ky = k.forwardRef( (e, n) => {
    const {container: i, ...s} = e
      , [a,u] = k.useState(!1);
    dr( () => u(!0), []);
    const c = i || a && globalThis?.document?.body;
    return c ? P1.createPortal(b.jsx(ht.div, {
        ...s,
        ref: n
    }), c) : null
}
);
ky.displayName = U1;
function H1(e, n) {
    return k.useReducer( (i, s) => n[i][s] ?? i, e)
}
var Hc = e => {
    const {present: n, children: i} = e
      , s = W1(n)
      , a = typeof i == "function" ? i({
        present: s.isPresent
    }) : k.Children.only(i)
      , u = zt(s.ref, $1(a));
    return typeof i == "function" || s.isPresent ? k.cloneElement(a, {
        ref: u
    }) : null
}
;
Hc.displayName = "Presence";
function W1(e) {
    const [n,i] = k.useState()
      , s = k.useRef({})
      , a = k.useRef(e)
      , u = k.useRef("none")
      , c = e ? "mounted" : "unmounted"
      , [d,h] = H1(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return k.useEffect( () => {
        const p = _s(s.current);
        u.current = d === "mounted" ? p : "none"
    }
    , [d]),
    dr( () => {
        const p = s.current
          , g = a.current;
        if (g !== e) {
            const v = u.current
              , x = _s(p);
            e ? h("MOUNT") : x === "none" || p?.display === "none" ? h("UNMOUNT") : h(g && v !== x ? "ANIMATION_OUT" : "UNMOUNT"),
            a.current = e
        }
    }
    , [e, h]),
    dr( () => {
        if (n) {
            let p;
            const g = n.ownerDocument.defaultView ?? window
              , y = x => {
                const E = _s(s.current).includes(x.animationName);
                if (x.target === n && E && (h("ANIMATION_END"),
                !a.current)) {
                    const P = n.style.animationFillMode;
                    n.style.animationFillMode = "forwards",
                    p = g.setTimeout( () => {
                        n.style.animationFillMode === "forwards" && (n.style.animationFillMode = P)
                    }
                    )
                }
            }
              , v = x => {
                x.target === n && (u.current = _s(s.current))
            }
            ;
            return n.addEventListener("animationstart", v),
            n.addEventListener("animationcancel", y),
            n.addEventListener("animationend", y),
            () => {
                g.clearTimeout(p),
                n.removeEventListener("animationstart", v),
                n.removeEventListener("animationcancel", y),
                n.removeEventListener("animationend", y)
            }
        } else
            h("ANIMATION_END")
    }
    , [n, h]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: k.useCallback(p => {
            p && (s.current = getComputedStyle(p)),
            i(p)
        }
        , [])
    }
}
function _s(e) {
    return e?.animationName || "none"
}
function $1(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , i = n && "isReactWarning"in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    i = n && "isReactWarning"in n && n.isReactWarning,
    i ? e.props.ref : e.props.ref || e.ref)
}
function K1({prop: e, defaultProp: n, onChange: i= () => {}
}) {
    const [s,a] = q1({
        defaultProp: n,
        onChange: i
    })
      , u = e !== void 0
      , c = u ? e : s
      , d = Xt(i)
      , h = k.useCallback(p => {
        if (u) {
            const y = typeof p == "function" ? p(e) : p;
            y !== e && d(y)
        } else
            a(p)
    }
    , [u, e, a, d]);
    return [c, h]
}
function q1({defaultProp: e, onChange: n}) {
    const i = k.useState(e)
      , [s] = i
      , a = k.useRef(s)
      , u = Xt(n);
    return k.useEffect( () => {
        a.current !== s && (u(s),
        a.current = s)
    }
    , [s, a, u]),
    i
}
var Q1 = "VisuallyHidden"
  , Ea = k.forwardRef( (e, n) => b.jsx(ht.span, {
    ...e,
    ref: n,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Ea.displayName = Q1;
var G1 = Ea
  , Wc = "ToastProvider"
  , [$c,Y1,X1] = O1("Toast")
  , [Ry] = Sa("Toast", [X1])
  , [Z1,Pa] = Ry(Wc)
  , Ay = e => {
    const {__scopeToast: n, label: i="Notification", duration: s=5e3, swipeDirection: a="right", swipeThreshold: u=50, children: c} = e
      , [d,h] = k.useState(null)
      , [p,g] = k.useState(0)
      , y = k.useRef(!1)
      , v = k.useRef(!1);
    return i.trim() || console.error(`Invalid prop \`label\` supplied to \`${Wc}\`. Expected non-empty \`string\`.`),
    b.jsx($c.Provider, {
        scope: n,
        children: b.jsx(Z1, {
            scope: n,
            label: i,
            duration: s,
            swipeDirection: a,
            swipeThreshold: u,
            toastCount: p,
            viewport: d,
            onViewportChange: h,
            onToastAdd: k.useCallback( () => g(x => x + 1), []),
            onToastRemove: k.useCallback( () => g(x => x - 1), []),
            isFocusedToastEscapeKeyDownRef: y,
            isClosePausedRef: v,
            children: c
        })
    })
}
;
Ay.displayName = Wc;
var _y = "ToastViewport"
  , J1 = ["F8"]
  , hc = "toast.viewportPause"
  , pc = "toast.viewportResume"
  , Oy = k.forwardRef( (e, n) => {
    const {__scopeToast: i, hotkey: s=J1, label: a="Notifications ({hotkey})", ...u} = e
      , c = Pa(_y, i)
      , d = Y1(i)
      , h = k.useRef(null)
      , p = k.useRef(null)
      , g = k.useRef(null)
      , y = k.useRef(null)
      , v = zt(n, y, c.onViewportChange)
      , x = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = c.toastCount > 0;
    k.useEffect( () => {
        const P = T => {
            s.length !== 0 && s.every(A => T[A] || T.code === A) && y.current?.focus()
        }
        ;
        return document.addEventListener("keydown", P),
        () => document.removeEventListener("keydown", P)
    }
    , [s]),
    k.useEffect( () => {
        const P = h.current
          , T = y.current;
        if (S && P && T) {
            const R = () => {
                if (!c.isClosePausedRef.current) {
                    const V = new CustomEvent(hc);
                    T.dispatchEvent(V),
                    c.isClosePausedRef.current = !0
                }
            }
              , A = () => {
                if (c.isClosePausedRef.current) {
                    const V = new CustomEvent(pc);
                    T.dispatchEvent(V),
                    c.isClosePausedRef.current = !1
                }
            }
              , N = V => {
                !P.contains(V.relatedTarget) && A()
            }
              , D = () => {
                P.contains(document.activeElement) || A()
            }
            ;
            return P.addEventListener("focusin", R),
            P.addEventListener("focusout", N),
            P.addEventListener("pointermove", R),
            P.addEventListener("pointerleave", D),
            window.addEventListener("blur", R),
            window.addEventListener("focus", A),
            () => {
                P.removeEventListener("focusin", R),
                P.removeEventListener("focusout", N),
                P.removeEventListener("pointermove", R),
                P.removeEventListener("pointerleave", D),
                window.removeEventListener("blur", R),
                window.removeEventListener("focus", A)
            }
        }
    }
    , [S, c.isClosePausedRef]);
    const E = k.useCallback( ({tabbingDirection: P}) => {
        const R = d().map(A => {
            const N = A.ref.current
              , D = [N, ...dE(N)];
            return P === "forwards" ? D : D.reverse()
        }
        );
        return (P === "forwards" ? R.reverse() : R).flat()
    }
    , [d]);
    return k.useEffect( () => {
        const P = y.current;
        if (P) {
            const T = R => {
                const A = R.altKey || R.ctrlKey || R.metaKey;
                if (R.key === "Tab" && !A) {
                    const D = document.activeElement
                      , V = R.shiftKey;
                    if (R.target === P && V) {
                        p.current?.focus();
                        return
                    }
                    const Y = E({
                        tabbingDirection: V ? "backwards" : "forwards"
                    })
                      , K = Y.findIndex($ => $ === D);
                    Bu(Y.slice(K + 1)) ? R.preventDefault() : V ? p.current?.focus() : g.current?.focus()
                }
            }
            ;
            return P.addEventListener("keydown", T),
            () => P.removeEventListener("keydown", T)
        }
    }
    , [d, E]),
    b.jsxs(B1, {
        ref: h,
        role: "region",
        "aria-label": a.replace("{hotkey}", x),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && b.jsx(mc, {
            ref: p,
            onFocusFromOutsideViewport: () => {
                const P = E({
                    tabbingDirection: "forwards"
                });
                Bu(P)
            }
        }), b.jsx($c.Slot, {
            scope: i,
            children: b.jsx(ht.ol, {
                tabIndex: -1,
                ...u,
                ref: v
            })
        }), S && b.jsx(mc, {
            ref: g,
            onFocusFromOutsideViewport: () => {
                const P = E({
                    tabbingDirection: "backwards"
                });
                Bu(P)
            }
        })]
    })
}
);
Oy.displayName = _y;
var My = "ToastFocusProxy"
  , mc = k.forwardRef( (e, n) => {
    const {__scopeToast: i, onFocusFromOutsideViewport: s, ...a} = e
      , u = Pa(My, i);
    return b.jsx(Ea, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...a,
        ref: n,
        style: {
            position: "fixed"
        },
        onFocus: c => {
            const d = c.relatedTarget;
            !u.viewport?.contains(d) && s()
        }
    })
}
);
mc.displayName = My;
var Ta = "Toast"
  , eE = "toast.swipeStart"
  , tE = "toast.swipeMove"
  , nE = "toast.swipeCancel"
  , rE = "toast.swipeEnd"
  , Ny = k.forwardRef( (e, n) => {
    const {forceMount: i, open: s, defaultOpen: a, onOpenChange: u, ...c} = e
      , [d=!0,h] = K1({
        prop: s,
        defaultProp: a,
        onChange: u
    });
    return b.jsx(Hc, {
        present: i || d,
        children: b.jsx(sE, {
            open: d,
            ...c,
            ref: n,
            onClose: () => h(!1),
            onPause: Xt(e.onPause),
            onResume: Xt(e.onResume),
            onSwipeStart: $e(e.onSwipeStart, p => {
                p.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: $e(e.onSwipeMove, p => {
                const {x: g, y} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "move"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`)
            }
            ),
            onSwipeCancel: $e(e.onSwipeCancel, p => {
                p.currentTarget.setAttribute("data-swipe", "cancel"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: $e(e.onSwipeEnd, p => {
                const {x: g, y} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "end"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`),
                h(!1)
            }
            )
        })
    })
}
);
Ny.displayName = Ta;
var [iE,oE] = Ry(Ta, {
    onClose() {}
})
  , sE = k.forwardRef( (e, n) => {
    const {__scopeToast: i, type: s="foreground", duration: a, open: u, onClose: c, onEscapeKeyDown: d, onPause: h, onResume: p, onSwipeStart: g, onSwipeMove: y, onSwipeCancel: v, onSwipeEnd: x, ...S} = e
      , E = Pa(Ta, i)
      , [P,T] = k.useState(null)
      , R = zt(n, B => T(B))
      , A = k.useRef(null)
      , N = k.useRef(null)
      , D = a || E.duration
      , V = k.useRef(0)
      , F = k.useRef(D)
      , H = k.useRef(0)
      , {onToastAdd: Y, onToastRemove: K} = E
      , $ = Xt( () => {
        P?.contains(document.activeElement) && E.viewport?.focus(),
        c()
    }
    )
      , L = k.useCallback(B => {
        !B || B === 1 / 0 || (window.clearTimeout(H.current),
        V.current = new Date().getTime(),
        H.current = window.setTimeout($, B))
    }
    , [$]);
    k.useEffect( () => {
        const B = E.viewport;
        if (B) {
            const ce = () => {
                L(F.current),
                p?.()
            }
              , oe = () => {
                const te = new Date().getTime() - V.current;
                F.current = F.current - te,
                window.clearTimeout(H.current),
                h?.()
            }
            ;
            return B.addEventListener(hc, oe),
            B.addEventListener(pc, ce),
            () => {
                B.removeEventListener(hc, oe),
                B.removeEventListener(pc, ce)
            }
        }
    }
    , [E.viewport, D, h, p, L]),
    k.useEffect( () => {
        u && !E.isClosePausedRef.current && L(D)
    }
    , [u, D, E.isClosePausedRef, L]),
    k.useEffect( () => (Y(),
    () => K()), [Y, K]);
    const X = k.useMemo( () => P ? zy(P) : null, [P]);
    return E.viewport ? b.jsxs(b.Fragment, {
        children: [X && b.jsx(aE, {
            __scopeToast: i,
            role: "status",
            "aria-live": s === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: X
        }), b.jsx(iE, {
            scope: i,
            onClose: $,
            children: xa.createPortal(b.jsx($c.ItemSlot, {
                scope: i,
                children: b.jsx(z1, {
                    asChild: !0,
                    onEscapeKeyDown: $e(d, () => {
                        E.isFocusedToastEscapeKeyDownRef.current || $(),
                        E.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: b.jsx(ht.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": u ? "open" : "closed",
                        "data-swipe-direction": E.swipeDirection,
                        ...S,
                        ref: R,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: $e(e.onKeyDown, B => {
                            B.key === "Escape" && (d?.(B.nativeEvent),
                            B.nativeEvent.defaultPrevented || (E.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: $e(e.onPointerDown, B => {
                            B.button === 0 && (A.current = {
                                x: B.clientX,
                                y: B.clientY
                            })
                        }
                        ),
                        onPointerMove: $e(e.onPointerMove, B => {
                            if (!A.current)
                                return;
                            const ce = B.clientX - A.current.x
                              , oe = B.clientY - A.current.y
                              , te = !!N.current
                              , U = ["left", "right"].includes(E.swipeDirection)
                              , ee = ["left", "up"].includes(E.swipeDirection) ? Math.min : Math.max
                              , Z = U ? ee(0, ce) : 0
                              , M = U ? 0 : ee(0, oe)
                              , W = B.pointerType === "touch" ? 10 : 2
                              , le = {
                                x: Z,
                                y: M
                            }
                              , pe = {
                                originalEvent: B,
                                delta: le
                            };
                            te ? (N.current = le,
                            Os(tE, y, pe, {
                                discrete: !1
                            })) : um(le, E.swipeDirection, W) ? (N.current = le,
                            Os(eE, g, pe, {
                                discrete: !1
                            }),
                            B.target.setPointerCapture(B.pointerId)) : (Math.abs(ce) > W || Math.abs(oe) > W) && (A.current = null)
                        }
                        ),
                        onPointerUp: $e(e.onPointerUp, B => {
                            const ce = N.current
                              , oe = B.target;
                            if (oe.hasPointerCapture(B.pointerId) && oe.releasePointerCapture(B.pointerId),
                            N.current = null,
                            A.current = null,
                            ce) {
                                const te = B.currentTarget
                                  , U = {
                                    originalEvent: B,
                                    delta: ce
                                };
                                um(ce, E.swipeDirection, E.swipeThreshold) ? Os(rE, x, U, {
                                    discrete: !0
                                }) : Os(nE, v, U, {
                                    discrete: !0
                                }),
                                te.addEventListener("click", ee => ee.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), E.viewport)
        })]
    }) : null
}
)
  , aE = e => {
    const {__scopeToast: n, children: i, ...s} = e
      , a = Pa(Ta, n)
      , [u,c] = k.useState(!1)
      , [d,h] = k.useState(!1);
    return cE( () => c(!0)),
    k.useEffect( () => {
        const p = window.setTimeout( () => h(!0), 1e3);
        return () => window.clearTimeout(p)
    }
    , []),
    d ? null : b.jsx(ky, {
        asChild: !0,
        children: b.jsx(Ea, {
            ...s,
            children: u && b.jsxs(b.Fragment, {
                children: [a.label, " ", i]
            })
        })
    })
}
  , lE = "ToastTitle"
  , Dy = k.forwardRef( (e, n) => {
    const {__scopeToast: i, ...s} = e;
    return b.jsx(ht.div, {
        ...s,
        ref: n
    })
}
);
Dy.displayName = lE;
var uE = "ToastDescription"
  , Ly = k.forwardRef( (e, n) => {
    const {__scopeToast: i, ...s} = e;
    return b.jsx(ht.div, {
        ...s,
        ref: n
    })
}
);
Ly.displayName = uE;
var jy = "ToastAction"
  , Iy = k.forwardRef( (e, n) => {
    const {altText: i, ...s} = e;
    return i.trim() ? b.jsx(Vy, {
        altText: i,
        asChild: !0,
        children: b.jsx(Kc, {
            ...s,
            ref: n
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${jy}\`. Expected non-empty \`string\`.`),
    null)
}
);
Iy.displayName = jy;
var Fy = "ToastClose"
  , Kc = k.forwardRef( (e, n) => {
    const {__scopeToast: i, ...s} = e
      , a = oE(Fy, i);
    return b.jsx(Vy, {
        asChild: !0,
        children: b.jsx(ht.button, {
            type: "button",
            ...s,
            ref: n,
            onClick: $e(e.onClick, a.onClose)
        })
    })
}
);
Kc.displayName = Fy;
var Vy = k.forwardRef( (e, n) => {
    const {__scopeToast: i, altText: s, ...a} = e;
    return b.jsx(ht.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": s || void 0,
        ...a,
        ref: n
    })
}
);
function zy(e) {
    const n = [];
    return Array.from(e.childNodes).forEach(s => {
        if (s.nodeType === s.TEXT_NODE && s.textContent && n.push(s.textContent),
        fE(s)) {
            const a = s.ariaHidden || s.hidden || s.style.display === "none"
              , u = s.dataset.radixToastAnnounceExclude === "";
            if (!a)
                if (u) {
                    const c = s.dataset.radixToastAnnounceAlt;
                    c && n.push(c)
                } else
                    n.push(...zy(s))
        }
    }
    ),
    n
}
function Os(e, n, i, {discrete: s}) {
    const a = i.originalEvent.currentTarget
      , u = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: i
    });
    n && a.addEventListener(e, n, {
        once: !0
    }),
    s ? Py(a, u) : a.dispatchEvent(u)
}
var um = (e, n, i=0) => {
    const s = Math.abs(e.x)
      , a = Math.abs(e.y)
      , u = s > a;
    return n === "left" || n === "right" ? u && s > i : !u && a > i
}
;
function cE(e= () => {}
) {
    const n = Xt(e);
    dr( () => {
        let i = 0
          , s = 0;
        return i = window.requestAnimationFrame( () => s = window.requestAnimationFrame(n)),
        () => {
            window.cancelAnimationFrame(i),
            window.cancelAnimationFrame(s)
        }
    }
    , [n])
}
function fE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function dE(e) {
    const n = []
      , i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: s => {
            const a = s.tagName === "INPUT" && s.type === "hidden";
            return s.disabled || s.hidden || a ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; i.nextNode(); )
        n.push(i.currentNode);
    return n
}
function Bu(e) {
    const n = document.activeElement;
    return e.some(i => i === n ? !0 : (i.focus(),
    document.activeElement !== n))
}
var hE = Ay
  , By = Oy
  , Uy = Ny
  , Hy = Dy
  , Wy = Ly
  , $y = Iy
  , Ky = Kc;
function qy(e) {
    var n, i, s = "";
    if (typeof e == "string" || typeof e == "number")
        s += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++)
                e[n] && (i = qy(e[n])) && (s && (s += " "),
                s += i)
        } else
            for (i in e)
                e[i] && (s && (s += " "),
                s += i);
    return s
}
function Qy() {
    for (var e, n, i = 0, s = "", a = arguments.length; i < a; i++)
        (e = arguments[i]) && (n = qy(e)) && (s && (s += " "),
        s += n);
    return s
}
const cm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , fm = Qy
  , Gy = (e, n) => i => {
    var s;
    if (n?.variants == null)
        return fm(e, i?.class, i?.className);
    const {variants: a, defaultVariants: u} = n
      , c = Object.keys(a).map(p => {
        const g = i?.[p]
          , y = u?.[p];
        if (g === null)
            return null;
        const v = cm(g) || cm(y);
        return a[p][v]
    }
    )
      , d = i && Object.entries(i).reduce( (p, g) => {
        let[y,v] = g;
        return v === void 0 || (p[y] = v),
        p
    }
    , {})
      , h = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce( (p, g) => {
        let {class: y, className: v, ...x} = g;
        return Object.entries(x).every(S => {
            let[E,P] = S;
            return Array.isArray(P) ? P.includes({
                ...u,
                ...d
            }[E]) : {
                ...u,
                ...d
            }[E] === P
        }
        ) ? [...p, y, v] : p
    }
    , []);
    return fm(e, c, h, i?.class, i?.className)
}
;
const pE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Yy = (...e) => e.filter( (n, i, s) => !!n && s.indexOf(n) === i).join(" ");
var mE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const gE = k.forwardRef( ({color: e="currentColor", size: n=24, strokeWidth: i=2, absoluteStrokeWidth: s, className: a="", children: u, iconNode: c, ...d}, h) => k.createElement("svg", {
    ref: h,
    ...mE,
    width: n,
    height: n,
    stroke: e,
    strokeWidth: s ? Number(i) * 24 / Number(n) : i,
    className: Yy("lucide", a),
    ...d
}, [...c.map( ([p,g]) => k.createElement(p, g)), ...Array.isArray(u) ? u : [u]]));
const yn = (e, n) => {
    const i = k.forwardRef( ({className: s, ...a}, u) => k.createElement(gE, {
        ref: u,
        iconNode: n,
        className: Yy(`lucide-${pE(e)}`, s),
        ...a
    }));
    return i.displayName = `${e}`,
    i
}
;
const dm = yn("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
const yE = yn("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
const Uu = yn("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
const ia = yn("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
const vE = yn("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
const wE = yn("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
const xE = yn("ShieldAlert", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "M12 8v4",
    key: "1got3b"
}], ["path", {
    d: "M12 16h.01",
    key: "1drbdi"
}]]);
const SE = yn("Utensils", [["path", {
    d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
    key: "cjf0a3"
}], ["path", {
    d: "M7 2v20",
    key: "1473qp"
}], ["path", {
    d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
    key: "j28e5"
}]]);
const Xy = yn("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , qc = "-"
  , EE = e => {
    const n = TE(e)
      , {conflictingClassGroups: i, conflictingClassGroupModifiers: s} = e;
    return {
        getClassGroupId: c => {
            const d = c.split(qc);
            return d[0] === "" && d.length !== 1 && d.shift(),
            Zy(d, n) || PE(c)
        }
        ,
        getConflictingClassGroupIds: (c, d) => {
            const h = i[c] || [];
            return d && s[c] ? [...h, ...s[c]] : h
        }
    }
}
  , Zy = (e, n) => {
    if (e.length === 0)
        return n.classGroupId;
    const i = e[0]
      , s = n.nextPart.get(i)
      , a = s ? Zy(e.slice(1), s) : void 0;
    if (a)
        return a;
    if (n.validators.length === 0)
        return;
    const u = e.join(qc);
    return n.validators.find( ({validator: c}) => c(u))?.classGroupId
}
  , hm = /^\[(.+)\]$/
  , PE = e => {
    if (hm.test(e)) {
        const n = hm.exec(e)[1]
          , i = n?.substring(0, n.indexOf(":"));
        if (i)
            return "arbitrary.." + i
    }
}
  , TE = e => {
    const {theme: n, prefix: i} = e
      , s = {
        nextPart: new Map,
        validators: []
    };
    return bE(Object.entries(e.classGroups), i).forEach( ([u,c]) => {
        gc(c, s, u, n)
    }
    ),
    s
}
  , gc = (e, n, i, s) => {
    e.forEach(a => {
        if (typeof a == "string") {
            const u = a === "" ? n : pm(n, a);
            u.classGroupId = i;
            return
        }
        if (typeof a == "function") {
            if (CE(a)) {
                gc(a(s), n, i, s);
                return
            }
            n.validators.push({
                validator: a,
                classGroupId: i
            });
            return
        }
        Object.entries(a).forEach( ([u,c]) => {
            gc(c, pm(n, u), i, s)
        }
        )
    }
    )
}
  , pm = (e, n) => {
    let i = e;
    return n.split(qc).forEach(s => {
        i.nextPart.has(s) || i.nextPart.set(s, {
            nextPart: new Map,
            validators: []
        }),
        i = i.nextPart.get(s)
    }
    ),
    i
}
  , CE = e => e.isThemeGetter
  , bE = (e, n) => n ? e.map( ([i,s]) => {
    const a = s.map(u => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map( ([c,d]) => [n + c, d])) : u);
    return [i, a]
}
) : e
  , kE = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let n = 0
      , i = new Map
      , s = new Map;
    const a = (u, c) => {
        i.set(u, c),
        n++,
        n > e && (n = 0,
        s = i,
        i = new Map)
    }
    ;
    return {
        get(u) {
            let c = i.get(u);
            if (c !== void 0)
                return c;
            if ((c = s.get(u)) !== void 0)
                return a(u, c),
                c
        },
        set(u, c) {
            i.has(u) ? i.set(u, c) : a(u, c)
        }
    }
}
  , Jy = "!"
  , RE = e => {
    const {separator: n, experimentalParseClassName: i} = e
      , s = n.length === 1
      , a = n[0]
      , u = n.length
      , c = d => {
        const h = [];
        let p = 0, g = 0, y;
        for (let P = 0; P < d.length; P++) {
            let T = d[P];
            if (p === 0) {
                if (T === a && (s || d.slice(P, P + u) === n)) {
                    h.push(d.slice(g, P)),
                    g = P + u;
                    continue
                }
                if (T === "/") {
                    y = P;
                    continue
                }
            }
            T === "[" ? p++ : T === "]" && p--
        }
        const v = h.length === 0 ? d : d.substring(g)
          , x = v.startsWith(Jy)
          , S = x ? v.substring(1) : v
          , E = y && y > g ? y - g : void 0;
        return {
            modifiers: h,
            hasImportantModifier: x,
            baseClassName: S,
            maybePostfixModifierPosition: E
        }
    }
    ;
    return i ? d => i({
        className: d,
        parseClassName: c
    }) : c
}
  , AE = e => {
    if (e.length <= 1)
        return e;
    const n = [];
    let i = [];
    return e.forEach(s => {
        s[0] === "[" ? (n.push(...i.sort(), s),
        i = []) : i.push(s)
    }
    ),
    n.push(...i.sort()),
    n
}
  , _E = e => ({
    cache: kE(e.cacheSize),
    parseClassName: RE(e),
    ...EE(e)
})
  , OE = /\s+/
  , ME = (e, n) => {
    const {parseClassName: i, getClassGroupId: s, getConflictingClassGroupIds: a} = n
      , u = []
      , c = e.trim().split(OE);
    let d = "";
    for (let h = c.length - 1; h >= 0; h -= 1) {
        const p = c[h]
          , {modifiers: g, hasImportantModifier: y, baseClassName: v, maybePostfixModifierPosition: x} = i(p);
        let S = !!x
          , E = s(S ? v.substring(0, x) : v);
        if (!E) {
            if (!S) {
                d = p + (d.length > 0 ? " " + d : d);
                continue
            }
            if (E = s(v),
            !E) {
                d = p + (d.length > 0 ? " " + d : d);
                continue
            }
            S = !1
        }
        const P = AE(g).join(":")
          , T = y ? P + Jy : P
          , R = T + E;
        if (u.includes(R))
            continue;
        u.push(R);
        const A = a(E, S);
        for (let N = 0; N < A.length; ++N) {
            const D = A[N];
            u.push(T + D)
        }
        d = p + (d.length > 0 ? " " + d : d)
    }
    return d
}
;
function NE() {
    let e = 0, n, i, s = "";
    for (; e < arguments.length; )
        (n = arguments[e++]) && (i = ev(n)) && (s && (s += " "),
        s += i);
    return s
}
const ev = e => {
    if (typeof e == "string")
        return e;
    let n, i = "";
    for (let s = 0; s < e.length; s++)
        e[s] && (n = ev(e[s])) && (i && (i += " "),
        i += n);
    return i
}
;
function DE(e, ...n) {
    let i, s, a, u = c;
    function c(h) {
        const p = n.reduce( (g, y) => y(g), e());
        return i = _E(p),
        s = i.cache.get,
        a = i.cache.set,
        u = d,
        d(h)
    }
    function d(h) {
        const p = s(h);
        if (p)
            return p;
        const g = ME(h, i);
        return a(h, g),
        g
    }
    return function() {
        return u(NE.apply(null, arguments))
    }
}
const Re = e => {
    const n = i => i[e] || [];
    return n.isThemeGetter = !0,
    n
}
  , tv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , LE = /^\d+\/\d+$/
  , jE = new Set(["px", "full", "screen"])
  , IE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , FE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , VE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , zE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , BE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , fn = e => qr(e) || jE.has(e) || LE.test(e)
  , In = e => ei(e, "length", GE)
  , qr = e => !!e && !Number.isNaN(Number(e))
  , Hu = e => ei(e, "number", qr)
  , $i = e => !!e && Number.isInteger(Number(e))
  , UE = e => e.endsWith("%") && qr(e.slice(0, -1))
  , ye = e => tv.test(e)
  , Fn = e => IE.test(e)
  , HE = new Set(["length", "size", "percentage"])
  , WE = e => ei(e, HE, nv)
  , $E = e => ei(e, "position", nv)
  , KE = new Set(["image", "url"])
  , qE = e => ei(e, KE, XE)
  , QE = e => ei(e, "", YE)
  , Ki = () => !0
  , ei = (e, n, i) => {
    const s = tv.exec(e);
    return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : i(s[2]) : !1
}
  , GE = e => FE.test(e) && !VE.test(e)
  , nv = () => !1
  , YE = e => zE.test(e)
  , XE = e => BE.test(e)
  , ZE = () => {
    const e = Re("colors")
      , n = Re("spacing")
      , i = Re("blur")
      , s = Re("brightness")
      , a = Re("borderColor")
      , u = Re("borderRadius")
      , c = Re("borderSpacing")
      , d = Re("borderWidth")
      , h = Re("contrast")
      , p = Re("grayscale")
      , g = Re("hueRotate")
      , y = Re("invert")
      , v = Re("gap")
      , x = Re("gradientColorStops")
      , S = Re("gradientColorStopPositions")
      , E = Re("inset")
      , P = Re("margin")
      , T = Re("opacity")
      , R = Re("padding")
      , A = Re("saturate")
      , N = Re("scale")
      , D = Re("sepia")
      , V = Re("skew")
      , F = Re("space")
      , H = Re("translate")
      , Y = () => ["auto", "contain", "none"]
      , K = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", ye, n]
      , L = () => [ye, n]
      , X = () => ["", fn, In]
      , B = () => ["auto", qr, ye]
      , ce = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , oe = () => ["solid", "dashed", "dotted", "double", "none"]
      , te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , ee = () => ["", "0", ye]
      , Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , M = () => [qr, ye];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ki],
            spacing: [fn, In],
            blur: ["none", "", Fn, ye],
            brightness: M(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Fn, ye],
            borderSpacing: L(),
            borderWidth: X(),
            contrast: M(),
            grayscale: ee(),
            hueRotate: M(),
            invert: ee(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [UE, In],
            inset: $(),
            margin: $(),
            opacity: M(),
            padding: L(),
            saturate: M(),
            scale: M(),
            sepia: ee(),
            skew: M(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", ye]
            }],
            container: ["container"],
            columns: [{
                columns: [Fn]
            }],
            "break-after": [{
                "break-after": Z()
            }],
            "break-before": [{
                "break-before": Z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...ce(), ye]
            }],
            overflow: [{
                overflow: K()
            }],
            "overflow-x": [{
                "overflow-x": K()
            }],
            "overflow-y": [{
                "overflow-y": K()
            }],
            overscroll: [{
                overscroll: Y()
            }],
            "overscroll-x": [{
                "overscroll-x": Y()
            }],
            "overscroll-y": [{
                "overscroll-y": Y()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [E]
            }],
            "inset-x": [{
                "inset-x": [E]
            }],
            "inset-y": [{
                "inset-y": [E]
            }],
            start: [{
                start: [E]
            }],
            end: [{
                end: [E]
            }],
            top: [{
                top: [E]
            }],
            right: [{
                right: [E]
            }],
            bottom: [{
                bottom: [E]
            }],
            left: [{
                left: [E]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", $i, ye]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", ye]
            }],
            grow: [{
                grow: ee()
            }],
            shrink: [{
                shrink: ee()
            }],
            order: [{
                order: ["first", "last", "none", $i, ye]
            }],
            "grid-cols": [{
                "grid-cols": [Ki]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", $i, ye]
                }, ye]
            }],
            "col-start": [{
                "col-start": B()
            }],
            "col-end": [{
                "col-end": B()
            }],
            "grid-rows": [{
                "grid-rows": [Ki]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [$i, ye]
                }, ye]
            }],
            "row-start": [{
                "row-start": B()
            }],
            "row-end": [{
                "row-end": B()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", ye]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", ye]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal", ...U()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...U(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...U(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [R]
            }],
            px: [{
                px: [R]
            }],
            py: [{
                py: [R]
            }],
            ps: [{
                ps: [R]
            }],
            pe: [{
                pe: [R]
            }],
            pt: [{
                pt: [R]
            }],
            pr: [{
                pr: [R]
            }],
            pb: [{
                pb: [R]
            }],
            pl: [{
                pl: [R]
            }],
            m: [{
                m: [P]
            }],
            mx: [{
                mx: [P]
            }],
            my: [{
                my: [P]
            }],
            ms: [{
                ms: [P]
            }],
            me: [{
                me: [P]
            }],
            mt: [{
                mt: [P]
            }],
            mr: [{
                mr: [P]
            }],
            mb: [{
                mb: [P]
            }],
            ml: [{
                ml: [P]
            }],
            "space-x": [{
                "space-x": [F]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [F]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, n]
            }],
            "min-w": [{
                "min-w": [ye, n, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [ye, n, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Fn]
                }, Fn]
            }],
            h: [{
                h: [ye, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [ye, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [ye, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [ye, n, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Fn, In]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Hu]
            }],
            "font-family": [{
                font: [Ki]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ye]
            }],
            "line-clamp": [{
                "line-clamp": ["none", qr, Hu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", fn, ye]
            }],
            "list-image": [{
                "list-image": ["none", ye]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", ye]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [T]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [T]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...oe(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", fn, In]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", fn, ye]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ye]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ye]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [T]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...ce(), $E]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", WE]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, qE]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [x]
            }],
            "gradient-via": [{
                via: [x]
            }],
            "gradient-to": [{
                to: [x]
            }],
            rounded: [{
                rounded: [u]
            }],
            "rounded-s": [{
                "rounded-s": [u]
            }],
            "rounded-e": [{
                "rounded-e": [u]
            }],
            "rounded-t": [{
                "rounded-t": [u]
            }],
            "rounded-r": [{
                "rounded-r": [u]
            }],
            "rounded-b": [{
                "rounded-b": [u]
            }],
            "rounded-l": [{
                "rounded-l": [u]
            }],
            "rounded-ss": [{
                "rounded-ss": [u]
            }],
            "rounded-se": [{
                "rounded-se": [u]
            }],
            "rounded-ee": [{
                "rounded-ee": [u]
            }],
            "rounded-es": [{
                "rounded-es": [u]
            }],
            "rounded-tl": [{
                "rounded-tl": [u]
            }],
            "rounded-tr": [{
                "rounded-tr": [u]
            }],
            "rounded-br": [{
                "rounded-br": [u]
            }],
            "rounded-bl": [{
                "rounded-bl": [u]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [T]
            }],
            "border-style": [{
                border: [...oe(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [T]
            }],
            "divide-style": [{
                divide: oe()
            }],
            "border-color": [{
                border: [a]
            }],
            "border-color-x": [{
                "border-x": [a]
            }],
            "border-color-y": [{
                "border-y": [a]
            }],
            "border-color-s": [{
                "border-s": [a]
            }],
            "border-color-e": [{
                "border-e": [a]
            }],
            "border-color-t": [{
                "border-t": [a]
            }],
            "border-color-r": [{
                "border-r": [a]
            }],
            "border-color-b": [{
                "border-b": [a]
            }],
            "border-color-l": [{
                "border-l": [a]
            }],
            "divide-color": [{
                divide: [a]
            }],
            "outline-style": [{
                outline: ["", ...oe()]
            }],
            "outline-offset": [{
                "outline-offset": [fn, ye]
            }],
            "outline-w": [{
                outline: [fn, In]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: X()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [T]
            }],
            "ring-offset-w": [{
                "ring-offset": [fn, In]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Fn, QE]
            }],
            "shadow-color": [{
                shadow: [Ki]
            }],
            opacity: [{
                opacity: [T]
            }],
            "mix-blend": [{
                "mix-blend": [...te(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": te()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [i]
            }],
            brightness: [{
                brightness: [s]
            }],
            contrast: [{
                contrast: [h]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Fn, ye]
            }],
            grayscale: [{
                grayscale: [p]
            }],
            "hue-rotate": [{
                "hue-rotate": [g]
            }],
            invert: [{
                invert: [y]
            }],
            saturate: [{
                saturate: [A]
            }],
            sepia: [{
                sepia: [D]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [i]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [s]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [h]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [p]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [g]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [T]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [A]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [D]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [c]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [c]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [c]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ye]
            }],
            duration: [{
                duration: M()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", ye]
            }],
            delay: [{
                delay: M()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", ye]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [N]
            }],
            "scale-x": [{
                "scale-x": [N]
            }],
            "scale-y": [{
                "scale-y": [N]
            }],
            rotate: [{
                rotate: [$i, ye]
            }],
            "translate-x": [{
                "translate-x": [H]
            }],
            "translate-y": [{
                "translate-y": [H]
            }],
            "skew-x": [{
                "skew-x": [V]
            }],
            "skew-y": [{
                "skew-y": [V]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ye]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ye]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ye]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [fn, In, Hu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , JE = DE(ZE);
function Me(...e) {
    return JE(Qy(e))
}
const eP = hE
  , rv = k.forwardRef( ({className: e, ...n}, i) => b.jsx(By, {
    ref: i,
    className: Me("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...n
}));
rv.displayName = By.displayName;
const tP = Gy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , iv = k.forwardRef( ({className: e, variant: n, ...i}, s) => b.jsx(Uy, {
    ref: s,
    className: Me(tP({
        variant: n
    }), e),
    ...i
}));
iv.displayName = Uy.displayName;
const nP = k.forwardRef( ({className: e, ...n}, i) => b.jsx($y, {
    ref: i,
    className: Me("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...n
}));
nP.displayName = $y.displayName;
const ov = k.forwardRef( ({className: e, ...n}, i) => b.jsx(Ky, {
    ref: i,
    className: Me("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...n,
    children: b.jsx(Xy, {
        className: "h-4 w-4"
    })
}));
ov.displayName = Ky.displayName;
const sv = k.forwardRef( ({className: e, ...n}, i) => b.jsx(Hy, {
    ref: i,
    className: Me("text-sm font-semibold", e),
    ...n
}));
sv.displayName = Hy.displayName;
const av = k.forwardRef( ({className: e, ...n}, i) => b.jsx(Wy, {
    ref: i,
    className: Me("text-sm opacity-90", e),
    ...n
}));
av.displayName = Wy.displayName;
function rP() {
    const {toasts: e} = E1();
    return b.jsxs(eP, {
        children: [e.map(function({id: n, title: i, description: s, action: a, ...u}) {
            return b.jsxs(iv, {
                ...u,
                children: [b.jsxs("div", {
                    className: "grid gap-1",
                    children: [i && b.jsx(sv, {
                        children: i
                    }), s && b.jsx(av, {
                        children: s
                    })]
                }), a, b.jsx(ov, {})]
            }, n)
        }), b.jsx(rv, {})]
    })
}
const iP = ["top", "right", "bottom", "left"]
  , Bn = Math.min
  , vt = Math.max
  , oa = Math.round
  , Ms = Math.floor
  , Qt = e => ({
    x: e,
    y: e
})
  , oP = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , sP = {
    start: "end",
    end: "start"
};
function yc(e, n, i) {
    return vt(e, Bn(n, i))
}
function pn(e, n) {
    return typeof e == "function" ? e(n) : e
}
function mn(e) {
    return e.split("-")[0]
}
function ti(e) {
    return e.split("-")[1]
}
function Qc(e) {
    return e === "x" ? "y" : "x"
}
function Gc(e) {
    return e === "y" ? "height" : "width"
}
function Un(e) {
    return ["top", "bottom"].includes(mn(e)) ? "y" : "x"
}
function Yc(e) {
    return Qc(Un(e))
}
function aP(e, n, i) {
    i === void 0 && (i = !1);
    const s = ti(e)
      , a = Yc(e)
      , u = Gc(a);
    let c = a === "x" ? s === (i ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return n.reference[u] > n.floating[u] && (c = sa(c)),
    [c, sa(c)]
}
function lP(e) {
    const n = sa(e);
    return [vc(e), n, vc(n)]
}
function vc(e) {
    return e.replace(/start|end/g, n => sP[n])
}
function uP(e, n, i) {
    const s = ["left", "right"]
      , a = ["right", "left"]
      , u = ["top", "bottom"]
      , c = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return i ? n ? a : s : n ? s : a;
    case "left":
    case "right":
        return n ? u : c;
    default:
        return []
    }
}
function cP(e, n, i, s) {
    const a = ti(e);
    let u = uP(mn(e), i === "start", s);
    return a && (u = u.map(c => c + "-" + a),
    n && (u = u.concat(u.map(vc)))),
    u
}
function sa(e) {
    return e.replace(/left|right|bottom|top/g, n => oP[n])
}
function fP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function lv(e) {
    return typeof e != "number" ? fP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function aa(e) {
    const {x: n, y: i, width: s, height: a} = e;
    return {
        width: s,
        height: a,
        top: i,
        left: n,
        right: n + s,
        bottom: i + a,
        x: n,
        y: i
    }
}
function mm(e, n, i) {
    let {reference: s, floating: a} = e;
    const u = Un(n)
      , c = Yc(n)
      , d = Gc(c)
      , h = mn(n)
      , p = u === "y"
      , g = s.x + s.width / 2 - a.width / 2
      , y = s.y + s.height / 2 - a.height / 2
      , v = s[d] / 2 - a[d] / 2;
    let x;
    switch (h) {
    case "top":
        x = {
            x: g,
            y: s.y - a.height
        };
        break;
    case "bottom":
        x = {
            x: g,
            y: s.y + s.height
        };
        break;
    case "right":
        x = {
            x: s.x + s.width,
            y
        };
        break;
    case "left":
        x = {
            x: s.x - a.width,
            y
        };
        break;
    default:
        x = {
            x: s.x,
            y: s.y
        }
    }
    switch (ti(n)) {
    case "start":
        x[c] -= v * (i && p ? -1 : 1);
        break;
    case "end":
        x[c] += v * (i && p ? -1 : 1);
        break
    }
    return x
}
const dP = async (e, n, i) => {
    const {placement: s="bottom", strategy: a="absolute", middleware: u=[], platform: c} = i
      , d = u.filter(Boolean)
      , h = await (c.isRTL == null ? void 0 : c.isRTL(n));
    let p = await c.getElementRects({
        reference: e,
        floating: n,
        strategy: a
    })
      , {x: g, y} = mm(p, s, h)
      , v = s
      , x = {}
      , S = 0;
    for (let E = 0; E < d.length; E++) {
        const {name: P, fn: T} = d[E]
          , {x: R, y: A, data: N, reset: D} = await T({
            x: g,
            y,
            initialPlacement: s,
            placement: v,
            strategy: a,
            middlewareData: x,
            rects: p,
            platform: c,
            elements: {
                reference: e,
                floating: n
            }
        });
        g = R ?? g,
        y = A ?? y,
        x = {
            ...x,
            [P]: {
                ...x[P],
                ...N
            }
        },
        D && S <= 50 && (S++,
        typeof D == "object" && (D.placement && (v = D.placement),
        D.rects && (p = D.rects === !0 ? await c.getElementRects({
            reference: e,
            floating: n,
            strategy: a
        }) : D.rects),
        {x: g, y} = mm(p, v, h)),
        E = -1)
    }
    return {
        x: g,
        y,
        placement: v,
        strategy: a,
        middlewareData: x
    }
}
;
async function oo(e, n) {
    var i;
    n === void 0 && (n = {});
    const {x: s, y: a, platform: u, rects: c, elements: d, strategy: h} = e
      , {boundary: p="clippingAncestors", rootBoundary: g="viewport", elementContext: y="floating", altBoundary: v=!1, padding: x=0} = pn(n, e)
      , S = lv(x)
      , P = d[v ? y === "floating" ? "reference" : "floating" : y]
      , T = aa(await u.getClippingRect({
        element: (i = await (u.isElement == null ? void 0 : u.isElement(P))) == null || i ? P : P.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating)),
        boundary: p,
        rootBoundary: g,
        strategy: h
    }))
      , R = y === "floating" ? {
        x: s,
        y: a,
        width: c.floating.width,
        height: c.floating.height
    } : c.reference
      , A = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating))
      , N = await (u.isElement == null ? void 0 : u.isElement(A)) ? await (u.getScale == null ? void 0 : u.getScale(A)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , D = aa(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: R,
        offsetParent: A,
        strategy: h
    }) : R);
    return {
        top: (T.top - D.top + S.top) / N.y,
        bottom: (D.bottom - T.bottom + S.bottom) / N.y,
        left: (T.left - D.left + S.left) / N.x,
        right: (D.right - T.right + S.right) / N.x
    }
}
const hP = e => ({
    name: "arrow",
    options: e,
    async fn(n) {
        const {x: i, y: s, placement: a, rects: u, platform: c, elements: d, middlewareData: h} = n
          , {element: p, padding: g=0} = pn(e, n) || {};
        if (p == null)
            return {};
        const y = lv(g)
          , v = {
            x: i,
            y: s
        }
          , x = Yc(a)
          , S = Gc(x)
          , E = await c.getDimensions(p)
          , P = x === "y"
          , T = P ? "top" : "left"
          , R = P ? "bottom" : "right"
          , A = P ? "clientHeight" : "clientWidth"
          , N = u.reference[S] + u.reference[x] - v[x] - u.floating[S]
          , D = v[x] - u.reference[x]
          , V = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(p));
        let F = V ? V[A] : 0;
        (!F || !await (c.isElement == null ? void 0 : c.isElement(V))) && (F = d.floating[A] || u.floating[S]);
        const H = N / 2 - D / 2
          , Y = F / 2 - E[S] / 2 - 1
          , K = Bn(y[T], Y)
          , $ = Bn(y[R], Y)
          , L = K
          , X = F - E[S] - $
          , B = F / 2 - E[S] / 2 + H
          , ce = yc(L, B, X)
          , oe = !h.arrow && ti(a) != null && B !== ce && u.reference[S] / 2 - (B < L ? K : $) - E[S] / 2 < 0
          , te = oe ? B < L ? B - L : B - X : 0;
        return {
            [x]: v[x] + te,
            data: {
                [x]: ce,
                centerOffset: B - ce - te,
                ...oe && {
                    alignmentOffset: te
                }
            },
            reset: oe
        }
    }
})
  , pP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(n) {
            var i, s;
            const {placement: a, middlewareData: u, rects: c, initialPlacement: d, platform: h, elements: p} = n
              , {mainAxis: g=!0, crossAxis: y=!0, fallbackPlacements: v, fallbackStrategy: x="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: E=!0, ...P} = pn(e, n);
            if ((i = u.arrow) != null && i.alignmentOffset)
                return {};
            const T = mn(a)
              , R = Un(d)
              , A = mn(d) === d
              , N = await (h.isRTL == null ? void 0 : h.isRTL(p.floating))
              , D = v || (A || !E ? [sa(d)] : lP(d))
              , V = S !== "none";
            !v && V && D.push(...cP(d, E, S, N));
            const F = [d, ...D]
              , H = await oo(n, P)
              , Y = [];
            let K = ((s = u.flip) == null ? void 0 : s.overflows) || [];
            if (g && Y.push(H[T]),
            y) {
                const B = aP(a, c, N);
                Y.push(H[B[0]], H[B[1]])
            }
            if (K = [...K, {
                placement: a,
                overflows: Y
            }],
            !Y.every(B => B <= 0)) {
                var $, L;
                const B = ((($ = u.flip) == null ? void 0 : $.index) || 0) + 1
                  , ce = F[B];
                if (ce)
                    return {
                        data: {
                            index: B,
                            overflows: K
                        },
                        reset: {
                            placement: ce
                        }
                    };
                let oe = (L = K.filter(te => te.overflows[0] <= 0).sort( (te, U) => te.overflows[1] - U.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!oe)
                    switch (x) {
                    case "bestFit":
                        {
                            var X;
                            const te = (X = K.filter(U => {
                                if (V) {
                                    const ee = Un(U.placement);
                                    return ee === R || ee === "y"
                                }
                                return !0
                            }
                            ).map(U => [U.placement, U.overflows.filter(ee => ee > 0).reduce( (ee, Z) => ee + Z, 0)]).sort( (U, ee) => U[1] - ee[1])[0]) == null ? void 0 : X[0];
                            te && (oe = te);
                            break
                        }
                    case "initialPlacement":
                        oe = d;
                        break
                    }
                if (a !== oe)
                    return {
                        reset: {
                            placement: oe
                        }
                    }
            }
            return {}
        }
    }
};
function gm(e, n) {
    return {
        top: e.top - n.height,
        right: e.right - n.width,
        bottom: e.bottom - n.height,
        left: e.left - n.width
    }
}
function ym(e) {
    return iP.some(n => e[n] >= 0)
}
const mP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(n) {
            const {rects: i} = n
              , {strategy: s="referenceHidden", ...a} = pn(e, n);
            switch (s) {
            case "referenceHidden":
                {
                    const u = await oo(n, {
                        ...a,
                        elementContext: "reference"
                    })
                      , c = gm(u, i.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: ym(c)
                        }
                    }
                }
            case "escaped":
                {
                    const u = await oo(n, {
                        ...a,
                        altBoundary: !0
                    })
                      , c = gm(u, i.floating);
                    return {
                        data: {
                            escapedOffsets: c,
                            escaped: ym(c)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function gP(e, n) {
    const {placement: i, platform: s, elements: a} = e
      , u = await (s.isRTL == null ? void 0 : s.isRTL(a.floating))
      , c = mn(i)
      , d = ti(i)
      , h = Un(i) === "y"
      , p = ["left", "top"].includes(c) ? -1 : 1
      , g = u && h ? -1 : 1
      , y = pn(n, e);
    let {mainAxis: v, crossAxis: x, alignmentAxis: S} = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return d && typeof S == "number" && (x = d === "end" ? S * -1 : S),
    h ? {
        x: x * g,
        y: v * p
    } : {
        x: v * p,
        y: x * g
    }
}
const yP = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(n) {
            var i, s;
            const {x: a, y: u, placement: c, middlewareData: d} = n
              , h = await gP(n, e);
            return c === ((i = d.offset) == null ? void 0 : i.placement) && (s = d.arrow) != null && s.alignmentOffset ? {} : {
                x: a + h.x,
                y: u + h.y,
                data: {
                    ...h,
                    placement: c
                }
            }
        }
    }
}
  , vP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(n) {
            const {x: i, y: s, placement: a} = n
              , {mainAxis: u=!0, crossAxis: c=!1, limiter: d={
                fn: P => {
                    let {x: T, y: R} = P;
                    return {
                        x: T,
                        y: R
                    }
                }
            }, ...h} = pn(e, n)
              , p = {
                x: i,
                y: s
            }
              , g = await oo(n, h)
              , y = Un(mn(a))
              , v = Qc(y);
            let x = p[v]
              , S = p[y];
            if (u) {
                const P = v === "y" ? "top" : "left"
                  , T = v === "y" ? "bottom" : "right"
                  , R = x + g[P]
                  , A = x - g[T];
                x = yc(R, x, A)
            }
            if (c) {
                const P = y === "y" ? "top" : "left"
                  , T = y === "y" ? "bottom" : "right"
                  , R = S + g[P]
                  , A = S - g[T];
                S = yc(R, S, A)
            }
            const E = d.fn({
                ...n,
                [v]: x,
                [y]: S
            });
            return {
                ...E,
                data: {
                    x: E.x - i,
                    y: E.y - s,
                    enabled: {
                        [v]: u,
                        [y]: c
                    }
                }
            }
        }
    }
}
  , wP = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(n) {
            const {x: i, y: s, placement: a, rects: u, middlewareData: c} = n
              , {offset: d=0, mainAxis: h=!0, crossAxis: p=!0} = pn(e, n)
              , g = {
                x: i,
                y: s
            }
              , y = Un(a)
              , v = Qc(y);
            let x = g[v]
              , S = g[y];
            const E = pn(d, n)
              , P = typeof E == "number" ? {
                mainAxis: E,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...E
            };
            if (h) {
                const A = v === "y" ? "height" : "width"
                  , N = u.reference[v] - u.floating[A] + P.mainAxis
                  , D = u.reference[v] + u.reference[A] - P.mainAxis;
                x < N ? x = N : x > D && (x = D)
            }
            if (p) {
                var T, R;
                const A = v === "y" ? "width" : "height"
                  , N = ["top", "left"].includes(mn(a))
                  , D = u.reference[y] - u.floating[A] + (N && ((T = c.offset) == null ? void 0 : T[y]) || 0) + (N ? 0 : P.crossAxis)
                  , V = u.reference[y] + u.reference[A] + (N ? 0 : ((R = c.offset) == null ? void 0 : R[y]) || 0) - (N ? P.crossAxis : 0);
                S < D ? S = D : S > V && (S = V)
            }
            return {
                [v]: x,
                [y]: S
            }
        }
    }
}
  , xP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(n) {
            var i, s;
            const {placement: a, rects: u, platform: c, elements: d} = n
              , {apply: h= () => {}
            , ...p} = pn(e, n)
              , g = await oo(n, p)
              , y = mn(a)
              , v = ti(a)
              , x = Un(a) === "y"
              , {width: S, height: E} = u.floating;
            let P, T;
            y === "top" || y === "bottom" ? (P = y,
            T = v === (await (c.isRTL == null ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (T = y,
            P = v === "end" ? "top" : "bottom");
            const R = E - g.top - g.bottom
              , A = S - g.left - g.right
              , N = Bn(E - g[P], R)
              , D = Bn(S - g[T], A)
              , V = !n.middlewareData.shift;
            let F = N
              , H = D;
            if ((i = n.middlewareData.shift) != null && i.enabled.x && (H = A),
            (s = n.middlewareData.shift) != null && s.enabled.y && (F = R),
            V && !v) {
                const K = vt(g.left, 0)
                  , $ = vt(g.right, 0)
                  , L = vt(g.top, 0)
                  , X = vt(g.bottom, 0);
                x ? H = S - 2 * (K !== 0 || $ !== 0 ? K + $ : vt(g.left, g.right)) : F = E - 2 * (L !== 0 || X !== 0 ? L + X : vt(g.top, g.bottom))
            }
            await h({
                ...n,
                availableWidth: H,
                availableHeight: F
            });
            const Y = await c.getDimensions(d.floating);
            return S !== Y.width || E !== Y.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ca() {
    return typeof window < "u"
}
function ni(e) {
    return uv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function wt(e) {
    var n;
    return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window
}
function en(e) {
    var n;
    return (n = (uv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement
}
function uv(e) {
    return Ca() ? e instanceof Node || e instanceof wt(e).Node : !1
}
function Bt(e) {
    return Ca() ? e instanceof Element || e instanceof wt(e).Element : !1
}
function Zt(e) {
    return Ca() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1
}
function vm(e) {
    return !Ca() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot
}
function po(e) {
    const {overflow: n, overflowX: i, overflowY: s, display: a} = Ut(e);
    return /auto|scroll|overlay|hidden|clip/.test(n + s + i) && !["inline", "contents"].includes(a)
}
function SP(e) {
    return ["table", "td", "th"].includes(ni(e))
}
function ba(e) {
    return [":popover-open", ":modal"].some(n => {
        try {
            return e.matches(n)
        } catch {
            return !1
        }
    }
    )
}
function Xc(e) {
    const n = Zc()
      , i = Bt(e) ? Ut(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(s => i[s] ? i[s] !== "none" : !1) || (i.containerType ? i.containerType !== "normal" : !1) || !n && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !n && (i.filter ? i.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(s => (i.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some(s => (i.contain || "").includes(s))
}
function EP(e) {
    let n = Hn(e);
    for (; Zt(n) && !Gr(n); ) {
        if (Xc(n))
            return n;
        if (ba(n))
            return null;
        n = Hn(n)
    }
    return null
}
function Zc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Gr(e) {
    return ["html", "body", "#document"].includes(ni(e))
}
function Ut(e) {
    return wt(e).getComputedStyle(e)
}
function ka(e) {
    return Bt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Hn(e) {
    if (ni(e) === "html")
        return e;
    const n = e.assignedSlot || e.parentNode || vm(e) && e.host || en(e);
    return vm(n) ? n.host : n
}
function cv(e) {
    const n = Hn(e);
    return Gr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Zt(n) && po(n) ? n : cv(n)
}
function so(e, n, i) {
    var s;
    n === void 0 && (n = []),
    i === void 0 && (i = !0);
    const a = cv(e)
      , u = a === ((s = e.ownerDocument) == null ? void 0 : s.body)
      , c = wt(a);
    if (u) {
        const d = wc(c);
        return n.concat(c, c.visualViewport || [], po(a) ? a : [], d && i ? so(d) : [])
    }
    return n.concat(a, so(a, [], i))
}
function wc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function fv(e) {
    const n = Ut(e);
    let i = parseFloat(n.width) || 0
      , s = parseFloat(n.height) || 0;
    const a = Zt(e)
      , u = a ? e.offsetWidth : i
      , c = a ? e.offsetHeight : s
      , d = oa(i) !== u || oa(s) !== c;
    return d && (i = u,
    s = c),
    {
        width: i,
        height: s,
        $: d
    }
}
function Jc(e) {
    return Bt(e) ? e : e.contextElement
}
function Qr(e) {
    const n = Jc(e);
    if (!Zt(n))
        return Qt(1);
    const i = n.getBoundingClientRect()
      , {width: s, height: a, $: u} = fv(n);
    let c = (u ? oa(i.width) : i.width) / s
      , d = (u ? oa(i.height) : i.height) / a;
    return (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    {
        x: c,
        y: d
    }
}
const PP = Qt(0);
function dv(e) {
    const n = wt(e);
    return !Zc() || !n.visualViewport ? PP : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}
function TP(e, n, i) {
    return n === void 0 && (n = !1),
    !i || n && i !== wt(e) ? !1 : n
}
function hr(e, n, i, s) {
    n === void 0 && (n = !1),
    i === void 0 && (i = !1);
    const a = e.getBoundingClientRect()
      , u = Jc(e);
    let c = Qt(1);
    n && (s ? Bt(s) && (c = Qr(s)) : c = Qr(e));
    const d = TP(u, i, s) ? dv(u) : Qt(0);
    let h = (a.left + d.x) / c.x
      , p = (a.top + d.y) / c.y
      , g = a.width / c.x
      , y = a.height / c.y;
    if (u) {
        const v = wt(u)
          , x = s && Bt(s) ? wt(s) : s;
        let S = v
          , E = wc(S);
        for (; E && s && x !== S; ) {
            const P = Qr(E)
              , T = E.getBoundingClientRect()
              , R = Ut(E)
              , A = T.left + (E.clientLeft + parseFloat(R.paddingLeft)) * P.x
              , N = T.top + (E.clientTop + parseFloat(R.paddingTop)) * P.y;
            h *= P.x,
            p *= P.y,
            g *= P.x,
            y *= P.y,
            h += A,
            p += N,
            S = wt(E),
            E = wc(S)
        }
    }
    return aa({
        width: g,
        height: y,
        x: h,
        y: p
    })
}
function ef(e, n) {
    const i = ka(e).scrollLeft;
    return n ? n.left + i : hr(en(e)).left + i
}
function hv(e, n, i) {
    i === void 0 && (i = !1);
    const s = e.getBoundingClientRect()
      , a = s.left + n.scrollLeft - (i ? 0 : ef(e, s))
      , u = s.top + n.scrollTop;
    return {
        x: a,
        y: u
    }
}
function CP(e) {
    let {elements: n, rect: i, offsetParent: s, strategy: a} = e;
    const u = a === "fixed"
      , c = en(s)
      , d = n ? ba(n.floating) : !1;
    if (s === c || d && u)
        return i;
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , p = Qt(1);
    const g = Qt(0)
      , y = Zt(s);
    if ((y || !y && !u) && ((ni(s) !== "body" || po(c)) && (h = ka(s)),
    Zt(s))) {
        const x = hr(s);
        p = Qr(s),
        g.x = x.x + s.clientLeft,
        g.y = x.y + s.clientTop
    }
    const v = c && !y && !u ? hv(c, h, !0) : Qt(0);
    return {
        width: i.width * p.x,
        height: i.height * p.y,
        x: i.x * p.x - h.scrollLeft * p.x + g.x + v.x,
        y: i.y * p.y - h.scrollTop * p.y + g.y + v.y
    }
}
function bP(e) {
    return Array.from(e.getClientRects())
}
function kP(e) {
    const n = en(e)
      , i = ka(e)
      , s = e.ownerDocument.body
      , a = vt(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth)
      , u = vt(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let c = -i.scrollLeft + ef(e);
    const d = -i.scrollTop;
    return Ut(s).direction === "rtl" && (c += vt(n.clientWidth, s.clientWidth) - a),
    {
        width: a,
        height: u,
        x: c,
        y: d
    }
}
function RP(e, n) {
    const i = wt(e)
      , s = en(e)
      , a = i.visualViewport;
    let u = s.clientWidth
      , c = s.clientHeight
      , d = 0
      , h = 0;
    if (a) {
        u = a.width,
        c = a.height;
        const p = Zc();
        (!p || p && n === "fixed") && (d = a.offsetLeft,
        h = a.offsetTop)
    }
    return {
        width: u,
        height: c,
        x: d,
        y: h
    }
}
function AP(e, n) {
    const i = hr(e, !0, n === "fixed")
      , s = i.top + e.clientTop
      , a = i.left + e.clientLeft
      , u = Zt(e) ? Qr(e) : Qt(1)
      , c = e.clientWidth * u.x
      , d = e.clientHeight * u.y
      , h = a * u.x
      , p = s * u.y;
    return {
        width: c,
        height: d,
        x: h,
        y: p
    }
}
function wm(e, n, i) {
    let s;
    if (n === "viewport")
        s = RP(e, i);
    else if (n === "document")
        s = kP(en(e));
    else if (Bt(n))
        s = AP(n, i);
    else {
        const a = dv(e);
        s = {
            x: n.x - a.x,
            y: n.y - a.y,
            width: n.width,
            height: n.height
        }
    }
    return aa(s)
}
function pv(e, n) {
    const i = Hn(e);
    return i === n || !Bt(i) || Gr(i) ? !1 : Ut(i).position === "fixed" || pv(i, n)
}
function _P(e, n) {
    const i = n.get(e);
    if (i)
        return i;
    let s = so(e, [], !1).filter(d => Bt(d) && ni(d) !== "body")
      , a = null;
    const u = Ut(e).position === "fixed";
    let c = u ? Hn(e) : e;
    for (; Bt(c) && !Gr(c); ) {
        const d = Ut(c)
          , h = Xc(c);
        !h && d.position === "fixed" && (a = null),
        (u ? !h && !a : !h && d.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || po(c) && !h && pv(e, c)) ? s = s.filter(g => g !== c) : a = d,
        c = Hn(c)
    }
    return n.set(e, s),
    s
}
function OP(e) {
    let {element: n, boundary: i, rootBoundary: s, strategy: a} = e;
    const c = [...i === "clippingAncestors" ? ba(n) ? [] : _P(n, this._c) : [].concat(i), s]
      , d = c[0]
      , h = c.reduce( (p, g) => {
        const y = wm(n, g, a);
        return p.top = vt(y.top, p.top),
        p.right = Bn(y.right, p.right),
        p.bottom = Bn(y.bottom, p.bottom),
        p.left = vt(y.left, p.left),
        p
    }
    , wm(n, d, a));
    return {
        width: h.right - h.left,
        height: h.bottom - h.top,
        x: h.left,
        y: h.top
    }
}
function MP(e) {
    const {width: n, height: i} = fv(e);
    return {
        width: n,
        height: i
    }
}
function NP(e, n, i) {
    const s = Zt(n)
      , a = en(n)
      , u = i === "fixed"
      , c = hr(e, !0, u, n);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const h = Qt(0);
    if (s || !s && !u)
        if ((ni(n) !== "body" || po(a)) && (d = ka(n)),
        s) {
            const v = hr(n, !0, u, n);
            h.x = v.x + n.clientLeft,
            h.y = v.y + n.clientTop
        } else
            a && (h.x = ef(a));
    const p = a && !s && !u ? hv(a, d) : Qt(0)
      , g = c.left + d.scrollLeft - h.x - p.x
      , y = c.top + d.scrollTop - h.y - p.y;
    return {
        x: g,
        y,
        width: c.width,
        height: c.height
    }
}
function Wu(e) {
    return Ut(e).position === "static"
}
function xm(e, n) {
    if (!Zt(e) || Ut(e).position === "fixed")
        return null;
    if (n)
        return n(e);
    let i = e.offsetParent;
    return en(e) === i && (i = i.ownerDocument.body),
    i
}
function mv(e, n) {
    const i = wt(e);
    if (ba(e))
        return i;
    if (!Zt(e)) {
        let a = Hn(e);
        for (; a && !Gr(a); ) {
            if (Bt(a) && !Wu(a))
                return a;
            a = Hn(a)
        }
        return i
    }
    let s = xm(e, n);
    for (; s && SP(s) && Wu(s); )
        s = xm(s, n);
    return s && Gr(s) && Wu(s) && !Xc(s) ? i : s || EP(e) || i
}
const DP = async function(e) {
    const n = this.getOffsetParent || mv
      , i = this.getDimensions
      , s = await i(e.floating);
    return {
        reference: NP(e.reference, await n(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    }
};
function LP(e) {
    return Ut(e).direction === "rtl"
}
const jP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: CP,
    getDocumentElement: en,
    getClippingRect: OP,
    getOffsetParent: mv,
    getElementRects: DP,
    getClientRects: bP,
    getDimensions: MP,
    getScale: Qr,
    isElement: Bt,
    isRTL: LP
};
function gv(e, n) {
    return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
}
function IP(e, n) {
    let i = null, s;
    const a = en(e);
    function u() {
        var d;
        clearTimeout(s),
        (d = i) == null || d.disconnect(),
        i = null
    }
    function c(d, h) {
        d === void 0 && (d = !1),
        h === void 0 && (h = 1),
        u();
        const p = e.getBoundingClientRect()
          , {left: g, top: y, width: v, height: x} = p;
        if (d || n(),
        !v || !x)
            return;
        const S = Ms(y)
          , E = Ms(a.clientWidth - (g + v))
          , P = Ms(a.clientHeight - (y + x))
          , T = Ms(g)
          , A = {
            rootMargin: -S + "px " + -E + "px " + -P + "px " + -T + "px",
            threshold: vt(0, Bn(1, h)) || 1
        };
        let N = !0;
        function D(V) {
            const F = V[0].intersectionRatio;
            if (F !== h) {
                if (!N)
                    return c();
                F ? c(!1, F) : s = setTimeout( () => {
                    c(!1, 1e-7)
                }
                , 1e3)
            }
            F === 1 && !gv(p, e.getBoundingClientRect()) && c(),
            N = !1
        }
        try {
            i = new IntersectionObserver(D,{
                ...A,
                root: a.ownerDocument
            })
        } catch {
            i = new IntersectionObserver(D,A)
        }
        i.observe(e)
    }
    return c(!0),
    u
}
function FP(e, n, i, s) {
    s === void 0 && (s = {});
    const {ancestorScroll: a=!0, ancestorResize: u=!0, elementResize: c=typeof ResizeObserver == "function", layoutShift: d=typeof IntersectionObserver == "function", animationFrame: h=!1} = s
      , p = Jc(e)
      , g = a || u ? [...p ? so(p) : [], ...so(n)] : [];
    g.forEach(T => {
        a && T.addEventListener("scroll", i, {
            passive: !0
        }),
        u && T.addEventListener("resize", i)
    }
    );
    const y = p && d ? IP(p, i) : null;
    let v = -1
      , x = null;
    c && (x = new ResizeObserver(T => {
        let[R] = T;
        R && R.target === p && x && (x.unobserve(n),
        cancelAnimationFrame(v),
        v = requestAnimationFrame( () => {
            var A;
            (A = x) == null || A.observe(n)
        }
        )),
        i()
    }
    ),
    p && !h && x.observe(p),
    x.observe(n));
    let S, E = h ? hr(e) : null;
    h && P();
    function P() {
        const T = hr(e);
        E && !gv(E, T) && i(),
        E = T,
        S = requestAnimationFrame(P)
    }
    return i(),
    () => {
        var T;
        g.forEach(R => {
            a && R.removeEventListener("scroll", i),
            u && R.removeEventListener("resize", i)
        }
        ),
        y?.(),
        (T = x) == null || T.disconnect(),
        x = null,
        h && cancelAnimationFrame(S)
    }
}
const VP = yP
  , zP = vP
  , BP = pP
  , UP = xP
  , HP = mP
  , Sm = hP
  , WP = wP
  , $P = (e, n, i) => {
    const s = new Map
      , a = {
        platform: jP,
        ...i
    }
      , u = {
        ...a.platform,
        _c: s
    };
    return dP(e, n, {
        ...a,
        platform: u
    })
}
;
var Zs = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function la(e, n) {
    if (e === n)
        return !0;
    if (typeof e != typeof n)
        return !1;
    if (typeof e == "function" && e.toString() === n.toString())
        return !0;
    let i, s, a;
    if (e && n && typeof e == "object") {
        if (Array.isArray(e)) {
            if (i = e.length,
            i !== n.length)
                return !1;
            for (s = i; s-- !== 0; )
                if (!la(e[s], n[s]))
                    return !1;
            return !0
        }
        if (a = Object.keys(e),
        i = a.length,
        i !== Object.keys(n).length)
            return !1;
        for (s = i; s-- !== 0; )
            if (!{}.hasOwnProperty.call(n, a[s]))
                return !1;
        for (s = i; s-- !== 0; ) {
            const u = a[s];
            if (!(u === "_owner" && e.$$typeof) && !la(e[u], n[u]))
                return !1
        }
        return !0
    }
    return e !== e && n !== n
}
function yv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Em(e, n) {
    const i = yv(e);
    return Math.round(n * i) / i
}
function $u(e) {
    const n = k.useRef(e);
    return Zs( () => {
        n.current = e
    }
    ),
    n
}
function KP(e) {
    e === void 0 && (e = {});
    const {placement: n="bottom", strategy: i="absolute", middleware: s=[], platform: a, elements: {reference: u, floating: c}={}, transform: d=!0, whileElementsMounted: h, open: p} = e
      , [g,y] = k.useState({
        x: 0,
        y: 0,
        strategy: i,
        placement: n,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,x] = k.useState(s);
    la(v, s) || x(s);
    const [S,E] = k.useState(null)
      , [P,T] = k.useState(null)
      , R = k.useCallback(U => {
        U !== V.current && (V.current = U,
        E(U))
    }
    , [])
      , A = k.useCallback(U => {
        U !== F.current && (F.current = U,
        T(U))
    }
    , [])
      , N = u || S
      , D = c || P
      , V = k.useRef(null)
      , F = k.useRef(null)
      , H = k.useRef(g)
      , Y = h != null
      , K = $u(h)
      , $ = $u(a)
      , L = $u(p)
      , X = k.useCallback( () => {
        if (!V.current || !F.current)
            return;
        const U = {
            placement: n,
            strategy: i,
            middleware: v
        };
        $.current && (U.platform = $.current),
        $P(V.current, F.current, U).then(ee => {
            const Z = {
                ...ee,
                isPositioned: L.current !== !1
            };
            B.current && !la(H.current, Z) && (H.current = Z,
            xa.flushSync( () => {
                y(Z)
            }
            ))
        }
        )
    }
    , [v, n, i, $, L]);
    Zs( () => {
        p === !1 && H.current.isPositioned && (H.current.isPositioned = !1,
        y(U => ({
            ...U,
            isPositioned: !1
        })))
    }
    , [p]);
    const B = k.useRef(!1);
    Zs( () => (B.current = !0,
    () => {
        B.current = !1
    }
    ), []),
    Zs( () => {
        if (N && (V.current = N),
        D && (F.current = D),
        N && D) {
            if (K.current)
                return K.current(N, D, X);
            X()
        }
    }
    , [N, D, X, K, Y]);
    const ce = k.useMemo( () => ({
        reference: V,
        floating: F,
        setReference: R,
        setFloating: A
    }), [R, A])
      , oe = k.useMemo( () => ({
        reference: N,
        floating: D
    }), [N, D])
      , te = k.useMemo( () => {
        const U = {
            position: i,
            left: 0,
            top: 0
        };
        if (!oe.floating)
            return U;
        const ee = Em(oe.floating, g.x)
          , Z = Em(oe.floating, g.y);
        return d ? {
            ...U,
            transform: "translate(" + ee + "px, " + Z + "px)",
            ...yv(oe.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: i,
            left: ee,
            top: Z
        }
    }
    , [i, d, oe.floating, g.x, g.y]);
    return k.useMemo( () => ({
        ...g,
        update: X,
        refs: ce,
        elements: oe,
        floatingStyles: te
    }), [g, X, ce, oe, te])
}
const qP = e => {
    function n(i) {
        return {}.hasOwnProperty.call(i, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(i) {
            const {element: s, padding: a} = typeof e == "function" ? e(i) : e;
            return s && n(s) ? s.current != null ? Sm({
                element: s.current,
                padding: a
            }).fn(i) : {} : s ? Sm({
                element: s,
                padding: a
            }).fn(i) : {}
        }
    }
}
  , QP = (e, n) => ({
    ...VP(e),
    options: [e, n]
})
  , GP = (e, n) => ({
    ...zP(e),
    options: [e, n]
})
  , YP = (e, n) => ({
    ...WP(e),
    options: [e, n]
})
  , XP = (e, n) => ({
    ...BP(e),
    options: [e, n]
})
  , ZP = (e, n) => ({
    ...UP(e),
    options: [e, n]
})
  , JP = (e, n) => ({
    ...HP(e),
    options: [e, n]
})
  , eT = (e, n) => ({
    ...qP(e),
    options: [e, n]
});
var tT = "Arrow"
  , vv = k.forwardRef( (e, n) => {
    const {children: i, width: s=10, height: a=5, ...u} = e;
    return b.jsx(ht.svg, {
        ...u,
        ref: n,
        width: s,
        height: a,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? i : b.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
vv.displayName = tT;
var nT = vv;
function rT(e) {
    const [n,i] = k.useState(void 0);
    return dr( () => {
        if (e) {
            i({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const s = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length)
                    return;
                const u = a[0];
                let c, d;
                if ("borderBoxSize"in u) {
                    const h = u.borderBoxSize
                      , p = Array.isArray(h) ? h[0] : h;
                    c = p.inlineSize,
                    d = p.blockSize
                } else
                    c = e.offsetWidth,
                    d = e.offsetHeight;
                i({
                    width: c,
                    height: d
                })
            }
            );
            return s.observe(e, {
                box: "border-box"
            }),
            () => s.unobserve(e)
        } else
            i(void 0)
    }
    , [e]),
    n
}
var wv = "Popper"
  , [xv,Sv] = Sa(wv)
  , [TA,Ev] = xv(wv)
  , Pv = "PopperAnchor"
  , Tv = k.forwardRef( (e, n) => {
    const {__scopePopper: i, virtualRef: s, ...a} = e
      , u = Ev(Pv, i)
      , c = k.useRef(null)
      , d = zt(n, c);
    return k.useEffect( () => {
        u.onAnchorChange(s?.current || c.current)
    }
    ),
    s ? null : b.jsx(ht.div, {
        ...a,
        ref: d
    })
}
);
Tv.displayName = Pv;
var tf = "PopperContent"
  , [iT,oT] = xv(tf)
  , Cv = k.forwardRef( (e, n) => {
    const {__scopePopper: i, side: s="bottom", sideOffset: a=0, align: u="center", alignOffset: c=0, arrowPadding: d=0, avoidCollisions: h=!0, collisionBoundary: p=[], collisionPadding: g=0, sticky: y="partial", hideWhenDetached: v=!1, updatePositionStrategy: x="optimized", onPlaced: S, ...E} = e
      , P = Ev(tf, i)
      , [T,R] = k.useState(null)
      , A = zt(n, ge => R(ge))
      , [N,D] = k.useState(null)
      , V = rT(N)
      , F = V?.width ?? 0
      , H = V?.height ?? 0
      , Y = s + (u !== "center" ? "-" + u : "")
      , K = typeof g == "number" ? g : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...g
    }
      , $ = Array.isArray(p) ? p : [p]
      , L = $.length > 0
      , X = {
        padding: K,
        boundary: $.filter(aT),
        altBoundary: L
    }
      , {refs: B, floatingStyles: ce, placement: oe, isPositioned: te, middlewareData: U} = KP({
        strategy: "fixed",
        placement: Y,
        whileElementsMounted: (...ge) => FP(...ge, {
            animationFrame: x === "always"
        }),
        elements: {
            reference: P.anchor
        },
        middleware: [QP({
            mainAxis: a + H,
            alignmentAxis: c
        }), h && GP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: y === "partial" ? YP() : void 0,
            ...X
        }), h && XP({
            ...X
        }), ZP({
            ...X,
            apply: ({elements: ge, rects: ue, availableWidth: xe, availableHeight: Ne}) => {
                const {width: Et, height: mr} = ue.reference
                  , tn = ge.floating.style;
                tn.setProperty("--radix-popper-available-width", `${xe}px`),
                tn.setProperty("--radix-popper-available-height", `${Ne}px`),
                tn.setProperty("--radix-popper-anchor-width", `${Et}px`),
                tn.setProperty("--radix-popper-anchor-height", `${mr}px`)
            }
        }), N && eT({
            element: N,
            padding: d
        }), lT({
            arrowWidth: F,
            arrowHeight: H
        }), v && JP({
            strategy: "referenceHidden",
            ...X
        })]
    })
      , [ee,Z] = Rv(oe)
      , M = Xt(S);
    dr( () => {
        te && M?.()
    }
    , [te, M]);
    const W = U.arrow?.x
      , le = U.arrow?.y
      , pe = U.arrow?.centerOffset !== 0
      , [we,ve] = k.useState();
    return dr( () => {
        T && ve(window.getComputedStyle(T).zIndex)
    }
    , [T]),
    b.jsx("div", {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...ce,
            transform: te ? ce.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [U.transformOrigin?.x, U.transformOrigin?.y].join(" "),
            ...U.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: b.jsx(iT, {
            scope: i,
            placedSide: ee,
            onArrowChange: D,
            arrowX: W,
            arrowY: le,
            shouldHideArrow: pe,
            children: b.jsx(ht.div, {
                "data-side": ee,
                "data-align": Z,
                ...E,
                ref: A,
                style: {
                    ...E.style,
                    animation: te ? void 0 : "none"
                }
            })
        })
    })
}
);
Cv.displayName = tf;
var bv = "PopperArrow"
  , sT = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , kv = k.forwardRef(function(n, i) {
    const {__scopePopper: s, ...a} = n
      , u = oT(bv, s)
      , c = sT[u.placedSide];
    return b.jsx("span", {
        ref: u.onArrowChange,
        style: {
            position: "absolute",
            left: u.arrowX,
            top: u.arrowY,
            [c]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[u.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[u.placedSide],
            visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: b.jsx(nT, {
            ...a,
            ref: i,
            style: {
                ...a.style,
                display: "block"
            }
        })
    })
});
kv.displayName = bv;
function aT(e) {
    return e !== null
}
var lT = e => ({
    name: "transformOrigin",
    options: e,
    fn(n) {
        const {placement: i, rects: s, middlewareData: a} = n
          , c = a.arrow?.centerOffset !== 0
          , d = c ? 0 : e.arrowWidth
          , h = c ? 0 : e.arrowHeight
          , [p,g] = Rv(i)
          , y = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[g]
          , v = (a.arrow?.x ?? 0) + d / 2
          , x = (a.arrow?.y ?? 0) + h / 2;
        let S = ""
          , E = "";
        return p === "bottom" ? (S = c ? y : `${v}px`,
        E = `${-h}px`) : p === "top" ? (S = c ? y : `${v}px`,
        E = `${s.floating.height + h}px`) : p === "right" ? (S = `${-h}px`,
        E = c ? y : `${x}px`) : p === "left" && (S = `${s.floating.width + h}px`,
        E = c ? y : `${x}px`),
        {
            data: {
                x: S,
                y: E
            }
        }
    }
});
function Rv(e) {
    const [n,i="center"] = e.split("-");
    return [n, i]
}
var uT = Tv
  , cT = Cv
  , fT = kv
  , [Ra] = Sa("Tooltip", [Sv])
  , nf = Sv()
  , Av = "TooltipProvider"
  , dT = 700
  , Pm = "tooltip.open"
  , [hT,_v] = Ra(Av)
  , Ov = e => {
    const {__scopeTooltip: n, delayDuration: i=dT, skipDelayDuration: s=300, disableHoverableContent: a=!1, children: u} = e
      , c = k.useRef(!0)
      , d = k.useRef(!1)
      , h = k.useRef(0);
    return k.useEffect( () => {
        const p = h.current;
        return () => window.clearTimeout(p)
    }
    , []),
    b.jsx(hT, {
        scope: n,
        isOpenDelayedRef: c,
        delayDuration: i,
        onOpen: k.useCallback( () => {
            window.clearTimeout(h.current),
            c.current = !1
        }
        , []),
        onClose: k.useCallback( () => {
            window.clearTimeout(h.current),
            h.current = window.setTimeout( () => c.current = !0, s)
        }
        , [s]),
        isPointerInTransitRef: d,
        onPointerInTransitChange: k.useCallback(p => {
            d.current = p
        }
        , []),
        disableHoverableContent: a,
        children: u
    })
}
;
Ov.displayName = Av;
var Mv = "Tooltip"
  , [CA,Aa] = Ra(Mv)
  , xc = "TooltipTrigger"
  , pT = k.forwardRef( (e, n) => {
    const {__scopeTooltip: i, ...s} = e
      , a = Aa(xc, i)
      , u = _v(xc, i)
      , c = nf(i)
      , d = k.useRef(null)
      , h = zt(n, d, a.onTriggerChange)
      , p = k.useRef(!1)
      , g = k.useRef(!1)
      , y = k.useCallback( () => p.current = !1, []);
    return k.useEffect( () => () => document.removeEventListener("pointerup", y), [y]),
    b.jsx(uT, {
        asChild: !0,
        ...c,
        children: b.jsx(ht.button, {
            "aria-describedby": a.open ? a.contentId : void 0,
            "data-state": a.stateAttribute,
            ...s,
            ref: h,
            onPointerMove: $e(e.onPointerMove, v => {
                v.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (a.onTriggerEnter(),
                g.current = !0)
            }
            ),
            onPointerLeave: $e(e.onPointerLeave, () => {
                a.onTriggerLeave(),
                g.current = !1
            }
            ),
            onPointerDown: $e(e.onPointerDown, () => {
                a.open && a.onClose(),
                p.current = !0,
                document.addEventListener("pointerup", y, {
                    once: !0
                })
            }
            ),
            onFocus: $e(e.onFocus, () => {
                p.current || a.onOpen()
            }
            ),
            onBlur: $e(e.onBlur, a.onClose),
            onClick: $e(e.onClick, a.onClose)
        })
    })
}
);
pT.displayName = xc;
var mT = "TooltipPortal"
  , [bA,gT] = Ra(mT, {
    forceMount: void 0
})
  , Yr = "TooltipContent"
  , Nv = k.forwardRef( (e, n) => {
    const i = gT(Yr, e.__scopeTooltip)
      , {forceMount: s=i.forceMount, side: a="top", ...u} = e
      , c = Aa(Yr, e.__scopeTooltip);
    return b.jsx(Hc, {
        present: s || c.open,
        children: c.disableHoverableContent ? b.jsx(Dv, {
            side: a,
            ...u,
            ref: n
        }) : b.jsx(yT, {
            side: a,
            ...u,
            ref: n
        })
    })
}
)
  , yT = k.forwardRef( (e, n) => {
    const i = Aa(Yr, e.__scopeTooltip)
      , s = _v(Yr, e.__scopeTooltip)
      , a = k.useRef(null)
      , u = zt(n, a)
      , [c,d] = k.useState(null)
      , {trigger: h, onClose: p} = i
      , g = a.current
      , {onPointerInTransitChange: y} = s
      , v = k.useCallback( () => {
        d(null),
        y(!1)
    }
    , [y])
      , x = k.useCallback( (S, E) => {
        const P = S.currentTarget
          , T = {
            x: S.clientX,
            y: S.clientY
        }
          , R = ET(T, P.getBoundingClientRect())
          , A = PT(T, R)
          , N = TT(E.getBoundingClientRect())
          , D = bT([...A, ...N]);
        d(D),
        y(!0)
    }
    , [y]);
    return k.useEffect( () => () => v(), [v]),
    k.useEffect( () => {
        if (h && g) {
            const S = P => x(P, g)
              , E = P => x(P, h);
            return h.addEventListener("pointerleave", S),
            g.addEventListener("pointerleave", E),
            () => {
                h.removeEventListener("pointerleave", S),
                g.removeEventListener("pointerleave", E)
            }
        }
    }
    , [h, g, x, v]),
    k.useEffect( () => {
        if (c) {
            const S = E => {
                const P = E.target
                  , T = {
                    x: E.clientX,
                    y: E.clientY
                }
                  , R = h?.contains(P) || g?.contains(P)
                  , A = !CT(T, c);
                R ? v() : A && (v(),
                p())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [h, g, c, p, v]),
    b.jsx(Dv, {
        ...e,
        ref: u
    })
}
)
  , [vT,wT] = Ra(Mv, {
    isInside: !1
})
  , xT = k1("TooltipContent")
  , Dv = k.forwardRef( (e, n) => {
    const {__scopeTooltip: i, children: s, "aria-label": a, onEscapeKeyDown: u, onPointerDownOutside: c, ...d} = e
      , h = Aa(Yr, i)
      , p = nf(i)
      , {onClose: g} = h;
    return k.useEffect( () => (document.addEventListener(Pm, g),
    () => document.removeEventListener(Pm, g)), [g]),
    k.useEffect( () => {
        if (h.trigger) {
            const y = v => {
                v.target?.contains(h.trigger) && g()
            }
            ;
            return window.addEventListener("scroll", y, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", y, {
                capture: !0
            })
        }
    }
    , [h.trigger, g]),
    b.jsx(Uc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: y => y.preventDefault(),
        onDismiss: g,
        children: b.jsxs(cT, {
            "data-state": h.stateAttribute,
            ...p,
            ...d,
            ref: n,
            style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [b.jsx(xT, {
                children: s
            }), b.jsx(vT, {
                scope: i,
                isInside: !0,
                children: b.jsx(G1, {
                    id: h.contentId,
                    role: "tooltip",
                    children: a || s
                })
            })]
        })
    })
}
);
Nv.displayName = Yr;
var Lv = "TooltipArrow"
  , ST = k.forwardRef( (e, n) => {
    const {__scopeTooltip: i, ...s} = e
      , a = nf(i);
    return wT(Lv, i).isInside ? null : b.jsx(fT, {
        ...a,
        ...s,
        ref: n
    })
}
);
ST.displayName = Lv;
function ET(e, n) {
    const i = Math.abs(n.top - e.y)
      , s = Math.abs(n.bottom - e.y)
      , a = Math.abs(n.right - e.x)
      , u = Math.abs(n.left - e.x);
    switch (Math.min(i, s, a, u)) {
    case u:
        return "left";
    case a:
        return "right";
    case i:
        return "top";
    case s:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function PT(e, n, i=5) {
    const s = [];
    switch (n) {
    case "top":
        s.push({
            x: e.x - i,
            y: e.y + i
        }, {
            x: e.x + i,
            y: e.y + i
        });
        break;
    case "bottom":
        s.push({
            x: e.x - i,
            y: e.y - i
        }, {
            x: e.x + i,
            y: e.y - i
        });
        break;
    case "left":
        s.push({
            x: e.x + i,
            y: e.y - i
        }, {
            x: e.x + i,
            y: e.y + i
        });
        break;
    case "right":
        s.push({
            x: e.x - i,
            y: e.y - i
        }, {
            x: e.x - i,
            y: e.y + i
        });
        break
    }
    return s
}
function TT(e) {
    const {top: n, right: i, bottom: s, left: a} = e;
    return [{
        x: a,
        y: n
    }, {
        x: i,
        y: n
    }, {
        x: i,
        y: s
    }, {
        x: a,
        y: s
    }]
}
function CT(e, n) {
    const {x: i, y: s} = e;
    let a = !1;
    for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
        const d = n[u].x
          , h = n[u].y
          , p = n[c].x
          , g = n[c].y;
        h > s != g > s && i < (p - d) * (s - h) / (g - h) + d && (a = !a)
    }
    return a
}
function bT(e) {
    const n = e.slice();
    return n.sort( (i, s) => i.x < s.x ? -1 : i.x > s.x ? 1 : i.y < s.y ? -1 : i.y > s.y ? 1 : 0),
    kT(n)
}
function kT(e) {
    if (e.length <= 1)
        return e.slice();
    const n = [];
    for (let s = 0; s < e.length; s++) {
        const a = e[s];
        for (; n.length >= 2; ) {
            const u = n[n.length - 1]
              , c = n[n.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x))
                n.pop();
            else
                break
        }
        n.push(a)
    }
    n.pop();
    const i = [];
    for (let s = e.length - 1; s >= 0; s--) {
        const a = e[s];
        for (; i.length >= 2; ) {
            const u = i[i.length - 1]
              , c = i[i.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x))
                i.pop();
            else
                break
        }
        i.push(a)
    }
    return i.pop(),
    n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i)
}
var RT = Ov
  , jv = Nv;
const AT = RT
  , _T = k.forwardRef( ({className: e, sideOffset: n=4, ...i}, s) => b.jsx(jv, {
    ref: s,
    sideOffset: n,
    className: Me("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
    ...i
}));
_T.displayName = jv.displayName;
const Iv = k.createContext({});
function OT(e) {
    const n = k.useRef(null);
    return n.current === null && (n.current = e()),
    n.current
}
const rf = k.createContext(null)
  , Fv = k.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function MT(e=!0) {
    const n = k.useContext(rf);
    if (n === null)
        return [!0, null];
    const {isPresent: i, onExitComplete: s, register: a} = n
      , u = k.useId();
    k.useEffect( () => {
        e && a(u)
    }
    , [e]);
    const c = k.useCallback( () => e && s && s(u), [u, s, e]);
    return !i && s ? [!1, c] : [!0]
}
const of = typeof window < "u"
  , NT = of ? k.useLayoutEffect : k.useEffect
  , xt = e => e;
let Vv = xt;
function sf(e) {
    let n;
    return () => (n === void 0 && (n = e()),
    n)
}
const Xr = (e, n, i) => {
    const s = n - e;
    return s === 0 ? 1 : (i - e) / s
}
  , dn = e => e * 1e3
  , hn = e => e / 1e3
  , DT = {
    useManualTiming: !1
};
function LT(e) {
    let n = new Set
      , i = new Set
      , s = !1
      , a = !1;
    const u = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(p) {
        u.has(p) && (h.schedule(p),
        e()),
        p(c)
    }
    const h = {
        schedule: (p, g=!1, y=!1) => {
            const x = y && s ? n : i;
            return g && u.add(p),
            x.has(p) || x.add(p),
            p
        }
        ,
        cancel: p => {
            i.delete(p),
            u.delete(p)
        }
        ,
        process: p => {
            if (c = p,
            s) {
                a = !0;
                return
            }
            s = !0,
            [n,i] = [i, n],
            n.forEach(d),
            n.clear(),
            s = !1,
            a && (a = !1,
            h.process(p))
        }
    };
    return h
}
const Ns = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , jT = 40;
function zv(e, n) {
    let i = !1
      , s = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => i = !0
      , c = Ns.reduce( (T, R) => (T[R] = LT(u),
    T), {})
      , {read: d, resolveKeyframes: h, update: p, preRender: g, render: y, postRender: v} = c
      , x = () => {
        const T = performance.now();
        i = !1,
        a.delta = s ? 1e3 / 60 : Math.max(Math.min(T - a.timestamp, jT), 1),
        a.timestamp = T,
        a.isProcessing = !0,
        d.process(a),
        h.process(a),
        p.process(a),
        g.process(a),
        y.process(a),
        v.process(a),
        a.isProcessing = !1,
        i && n && (s = !1,
        e(x))
    }
      , S = () => {
        i = !0,
        s = !0,
        a.isProcessing || e(x)
    }
    ;
    return {
        schedule: Ns.reduce( (T, R) => {
            const A = c[R];
            return T[R] = (N, D=!1, V=!1) => (i || S(),
            A.schedule(N, D, V)),
            T
        }
        , {}),
        cancel: T => {
            for (let R = 0; R < Ns.length; R++)
                c[Ns[R]].cancel(T)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Ae, cancel: Wn, state: Xe, steps: Ku} = zv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xt, !0)
  , Bv = k.createContext({
    strict: !1
})
  , Tm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Zr = {};
for (const e in Tm)
    Zr[e] = {
        isEnabled: n => Tm[e].some(i => !!n[i])
    };
function IT(e) {
    for (const n in e)
        Zr[n] = {
            ...Zr[n],
            ...e[n]
        }
}
const FT = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ua(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || FT.has(e)
}
let Uv = e => !ua(e);
function VT(e) {
    e && (Uv = n => n.startsWith("on") ? !ua(n) : e(n))
}
try {
    VT(require("@emotion/is-prop-valid").default)
} catch {}
function zT(e, n, i) {
    const s = {};
    for (const a in e)
        a === "values" && typeof e.values == "object" || (Uv(a) || i === !0 && ua(a) || !n && !ua(a) || e.draggable && a.startsWith("onDrag")) && (s[a] = e[a]);
    return s
}
function BT(e) {
    if (typeof Proxy > "u")
        return e;
    const n = new Map
      , i = (...s) => e(...s);
    return new Proxy(i,{
        get: (s, a) => a === "create" ? e : (n.has(a) || n.set(a, e(a)),
        n.get(a))
    })
}
const _a = k.createContext({});
function ao(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Oa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const af = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , lf = ["initial", ...af];
function Ma(e) {
    return Oa(e.animate) || lf.some(n => ao(e[n]))
}
function Hv(e) {
    return !!(Ma(e) || e.variants)
}
function UT(e, n) {
    if (Ma(e)) {
        const {initial: i, animate: s} = e;
        return {
            initial: i === !1 || ao(i) ? i : void 0,
            animate: ao(s) ? s : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}
function HT(e) {
    const {initial: n, animate: i} = UT(e, k.useContext(_a));
    return k.useMemo( () => ({
        initial: n,
        animate: i
    }), [Cm(n), Cm(i)])
}
function Cm(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const WT = Symbol.for("motionComponentSymbol");
function Ur(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function $T(e, n, i) {
    return k.useCallback(s => {
        s && e.onMount && e.onMount(s),
        n && (s ? n.mount(s) : n.unmount()),
        i && (typeof i == "function" ? i(s) : Ur(i) && (i.current = s))
    }
    , [n])
}
const uf = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , KT = "framerAppearId"
  , Wv = "data-" + uf(KT)
  , {schedule: cf} = zv(queueMicrotask, !1)
  , $v = k.createContext({});
function qT(e, n, i, s, a) {
    var u, c;
    const {visualElement: d} = k.useContext(_a)
      , h = k.useContext(Bv)
      , p = k.useContext(rf)
      , g = k.useContext(Fv).reducedMotion
      , y = k.useRef(null);
    s = s || h.renderer,
    !y.current && s && (y.current = s(e, {
        visualState: n,
        parent: d,
        props: i,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const v = y.current
      , x = k.useContext($v);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && QT(y.current, i, a, x);
    const S = k.useRef(!1);
    k.useInsertionEffect( () => {
        v && S.current && v.update(i, p)
    }
    );
    const E = i[Wv]
      , P = k.useRef(!!E && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, E)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, E)));
    return NT( () => {
        v && (S.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        cf.render(v.render),
        P.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    k.useEffect( () => {
        v && (!P.current && v.animationState && v.animationState.animateChanges(),
        P.current && (queueMicrotask( () => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) === null || T === void 0 || T.call(window, E)
        }
        ),
        P.current = !1))
    }
    ),
    v
}
function QT(e, n, i, s) {
    const {layoutId: a, layout: u, drag: c, dragConstraints: d, layoutScroll: h, layoutRoot: p} = n;
    e.projection = new i(e.latestValues,n["data-framer-portal-id"] ? void 0 : Kv(e.parent)),
    e.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ur(d),
        visualElement: e,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
        layoutRoot: p
    })
}
function Kv(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Kv(e.parent)
}
function GT({preloadedFeatures: e, createVisualElement: n, useRender: i, useVisualState: s, Component: a}) {
    var u, c;
    e && IT(e);
    function d(p, g) {
        let y;
        const v = {
            ...k.useContext(Fv),
            ...p,
            layoutId: YT(p)
        }
          , {isStatic: x} = v
          , S = HT(p)
          , E = s(p, x);
        if (!x && of) {
            XT();
            const P = ZT(v);
            y = P.MeasureLayout,
            S.visualElement = qT(a, E, v, n, P.ProjectionNode)
        }
        return b.jsxs(_a.Provider, {
            value: S,
            children: [y && S.visualElement ? b.jsx(y, {
                visualElement: S.visualElement,
                ...v
            }) : null, i(a, p, $T(E, S.visualElement, g), E, x, S.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a == "string" ? a : `create(${(c = (u = a.displayName) !== null && u !== void 0 ? u : a.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = k.forwardRef(d);
    return h[WT] = a,
    h
}
function YT({layoutId: e}) {
    const n = k.useContext(Iv).id;
    return n && e !== void 0 ? n + "-" + e : e
}
function XT(e, n) {
    k.useContext(Bv).strict
}
function ZT(e) {
    const {drag: n, layout: i} = Zr;
    if (!n && !i)
        return {};
    const s = {
        ...n,
        ...i
    };
    return {
        MeasureLayout: n?.isEnabled(e) || i?.isEnabled(e) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
const JT = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ff(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(JT.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function bm(e) {
    const n = [{}, {}];
    return e?.values.forEach( (i, s) => {
        n[0][s] = i.get(),
        n[1][s] = i.getVelocity()
    }
    ),
    n
}
function df(e, n, i, s) {
    if (typeof n == "function") {
        const [a,u] = bm(s);
        n = n(i !== void 0 ? i : e.custom, a, u)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]),
    typeof n == "function") {
        const [a,u] = bm(s);
        n = n(i !== void 0 ? i : e.custom, a, u)
    }
    return n
}
const Sc = e => Array.isArray(e)
  , eC = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , tC = e => Sc(e) ? e[e.length - 1] || 0 : e
  , rt = e => !!(e && e.getVelocity);
function Js(e) {
    const n = rt(e) ? e.get() : e;
    return eC(n) ? n.toValue() : n
}
function nC({scrapeMotionValuesFromProps: e, createRenderState: n, onUpdate: i}, s, a, u) {
    const c = {
        latestValues: rC(s, a, u, e),
        renderState: n()
    };
    return i && (c.onMount = d => i({
        props: s,
        current: d,
        ...c
    }),
    c.onUpdate = d => i(d)),
    c
}
const qv = e => (n, i) => {
    const s = k.useContext(_a)
      , a = k.useContext(rf)
      , u = () => nC(e, n, s, a);
    return i ? u() : OT(u)
}
;
function rC(e, n, i, s) {
    const a = {}
      , u = s(e, {});
    for (const v in u)
        a[v] = Js(u[v]);
    let {initial: c, animate: d} = e;
    const h = Ma(e)
      , p = Hv(e);
    n && p && !h && e.inherit !== !1 && (c === void 0 && (c = n.initial),
    d === void 0 && (d = n.animate));
    let g = i ? i.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? d : c;
    if (y && typeof y != "boolean" && !Oa(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let x = 0; x < v.length; x++) {
            const S = df(e, v[x]);
            if (S) {
                const {transitionEnd: E, transition: P, ...T} = S;
                for (const R in T) {
                    let A = T[R];
                    if (Array.isArray(A)) {
                        const N = g ? A.length - 1 : 0;
                        A = A[N]
                    }
                    A !== null && (a[R] = A)
                }
                for (const R in E)
                    a[R] = E[R]
            }
        }
    }
    return a
}
const ri = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , pr = new Set(ri)
  , Qv = e => n => typeof n == "string" && n.startsWith(e)
  , Gv = Qv("--")
  , iC = Qv("var(--")
  , hf = e => iC(e) ? oC.test(e.split("/*")[0].trim()) : !1
  , oC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Yv = (e, n) => n && typeof e == "number" ? n.transform(e) : e
  , gn = (e, n, i) => i > n ? n : i < e ? e : i
  , ii = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , lo = {
    ...ii,
    transform: e => gn(0, 1, e)
}
  , Ds = {
    ...ii,
    default: 1
}
  , mo = e => ({
    test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: n => `${n}${e}`
})
  , zn = mo("deg")
  , Gt = mo("%")
  , he = mo("px")
  , sC = mo("vh")
  , aC = mo("vw")
  , km = {
    ...Gt,
    parse: e => Gt.parse(e) / 100,
    transform: e => Gt.transform(e * 100)
}
  , lC = {
    borderWidth: he,
    borderTopWidth: he,
    borderRightWidth: he,
    borderBottomWidth: he,
    borderLeftWidth: he,
    borderRadius: he,
    radius: he,
    borderTopLeftRadius: he,
    borderTopRightRadius: he,
    borderBottomRightRadius: he,
    borderBottomLeftRadius: he,
    width: he,
    maxWidth: he,
    height: he,
    maxHeight: he,
    top: he,
    right: he,
    bottom: he,
    left: he,
    padding: he,
    paddingTop: he,
    paddingRight: he,
    paddingBottom: he,
    paddingLeft: he,
    margin: he,
    marginTop: he,
    marginRight: he,
    marginBottom: he,
    marginLeft: he,
    backgroundPositionX: he,
    backgroundPositionY: he
}
  , uC = {
    rotate: zn,
    rotateX: zn,
    rotateY: zn,
    rotateZ: zn,
    scale: Ds,
    scaleX: Ds,
    scaleY: Ds,
    scaleZ: Ds,
    skew: zn,
    skewX: zn,
    skewY: zn,
    distance: he,
    translateX: he,
    translateY: he,
    translateZ: he,
    x: he,
    y: he,
    z: he,
    perspective: he,
    transformPerspective: he,
    opacity: lo,
    originX: km,
    originY: km,
    originZ: he
}
  , Rm = {
    ...ii,
    transform: Math.round
}
  , pf = {
    ...lC,
    ...uC,
    zIndex: Rm,
    size: he,
    fillOpacity: lo,
    strokeOpacity: lo,
    numOctaves: Rm
}
  , cC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , fC = ri.length;
function dC(e, n, i) {
    let s = ""
      , a = !0;
    for (let u = 0; u < fC; u++) {
        const c = ri[u]
          , d = e[c];
        if (d === void 0)
            continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0,
        !h || i) {
            const p = Yv(d, pf[c]);
            if (!h) {
                a = !1;
                const g = cC[c] || c;
                s += `${g}(${p}) `
            }
            i && (n[c] = p)
        }
    }
    return s = s.trim(),
    i ? s = i(n, a ? "" : s) : a && (s = "none"),
    s
}
function mf(e, n, i) {
    const {style: s, vars: a, transformOrigin: u} = e;
    let c = !1
      , d = !1;
    for (const h in n) {
        const p = n[h];
        if (pr.has(h)) {
            c = !0;
            continue
        } else if (Gv(h)) {
            a[h] = p;
            continue
        } else {
            const g = Yv(p, pf[h]);
            h.startsWith("origin") ? (d = !0,
            u[h] = g) : s[h] = g
        }
    }
    if (n.transform || (c || i ? s.transform = dC(n, e.transform, i) : s.transform && (s.transform = "none")),
    d) {
        const {originX: h="50%", originY: p="50%", originZ: g=0} = u;
        s.transformOrigin = `${h} ${p} ${g}`
    }
}
const hC = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , pC = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function mC(e, n, i=1, s=0, a=!0) {
    e.pathLength = 1;
    const u = a ? hC : pC;
    e[u.offset] = he.transform(-s);
    const c = he.transform(n)
      , d = he.transform(i);
    e[u.array] = `${c} ${d}`
}
function Am(e, n, i) {
    return typeof e == "string" ? e : he.transform(n + i * e)
}
function gC(e, n, i) {
    const s = Am(n, e.x, e.width)
      , a = Am(i, e.y, e.height);
    return `${s} ${a}`
}
function gf(e, {attrX: n, attrY: i, attrScale: s, originX: a, originY: u, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...p}, g, y) {
    if (mf(e, p, y),
    g) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: v, style: x, dimensions: S} = e;
    v.transform && (S && (x.transform = v.transform),
    delete v.transform),
    S && (a !== void 0 || u !== void 0 || x.transform) && (x.transformOrigin = gC(S, a !== void 0 ? a : .5, u !== void 0 ? u : .5)),
    n !== void 0 && (v.x = n),
    i !== void 0 && (v.y = i),
    s !== void 0 && (v.scale = s),
    c !== void 0 && mC(v, c, d, h, !1)
}
const yf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Xv = () => ({
    ...yf(),
    attrs: {}
})
  , vf = e => typeof e == "string" && e.toLowerCase() === "svg";
function Zv(e, {style: n, vars: i}, s, a) {
    Object.assign(e.style, n, a && a.getProjectionStyles(s));
    for (const u in i)
        e.style.setProperty(u, i[u])
}
const Jv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function e0(e, n, i, s) {
    Zv(e, n, void 0, s);
    for (const a in n.attrs)
        e.setAttribute(Jv.has(a) ? a : uf(a), n.attrs[a])
}
const ca = {};
function yC(e) {
    Object.assign(ca, e)
}
function t0(e, {layout: n, layoutId: i}) {
    return pr.has(e) || e.startsWith("origin") || (n || i !== void 0) && (!!ca[e] || e === "opacity")
}
function wf(e, n, i) {
    var s;
    const {style: a} = e
      , u = {};
    for (const c in a)
        (rt(a[c]) || n.style && rt(n.style[c]) || t0(c, e) || ((s = i?.getValue(c)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (u[c] = a[c]);
    return u
}
function n0(e, n, i) {
    const s = wf(e, n, i);
    for (const a in e)
        if (rt(e[a]) || rt(n[a])) {
            const u = ri.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            s[u] = e[a]
        }
    return s
}
function vC(e, n) {
    try {
        n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const _m = ["x", "y", "width", "height", "cx", "cy", "r"]
  , wC = {
    useVisualState: qv({
        scrapeMotionValuesFromProps: n0,
        createRenderState: Xv,
        onUpdate: ({props: e, prevProps: n, current: i, renderState: s, latestValues: a}) => {
            if (!i)
                return;
            let u = !!e.drag;
            if (!u) {
                for (const d in a)
                    if (pr.has(d)) {
                        u = !0;
                        break
                    }
            }
            if (!u)
                return;
            let c = !n;
            if (n)
                for (let d = 0; d < _m.length; d++) {
                    const h = _m[d];
                    e[h] !== n[h] && (c = !0)
                }
            c && Ae.read( () => {
                vC(i, s),
                Ae.render( () => {
                    gf(s, a, vf(i.tagName), e.transformTemplate),
                    e0(i, s)
                }
                )
            }
            )
        }
    })
}
  , xC = {
    useVisualState: qv({
        scrapeMotionValuesFromProps: wf,
        createRenderState: yf
    })
};
function r0(e, n, i) {
    for (const s in n)
        !rt(n[s]) && !t0(s, i) && (e[s] = n[s])
}
function SC({transformTemplate: e}, n) {
    return k.useMemo( () => {
        const i = yf();
        return mf(i, n, e),
        Object.assign({}, i.vars, i.style)
    }
    , [n])
}
function EC(e, n) {
    const i = e.style || {}
      , s = {};
    return r0(s, i, e),
    Object.assign(s, SC(e, n)),
    s
}
function PC(e, n) {
    const i = {}
      , s = EC(e, n);
    return e.drag && e.dragListener !== !1 && (i.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0),
    i.style = s,
    i
}
function TC(e, n, i, s) {
    const a = k.useMemo( () => {
        const u = Xv();
        return gf(u, n, vf(s), e.transformTemplate),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [n]);
    if (e.style) {
        const u = {};
        r0(u, e.style, e),
        a.style = {
            ...u,
            ...a.style
        }
    }
    return a
}
function CC(e=!1) {
    return (i, s, a, {latestValues: u}, c) => {
        const h = (ff(i) ? TC : PC)(s, u, c, i)
          , p = zT(s, typeof i == "string", e)
          , g = i !== k.Fragment ? {
            ...p,
            ...h,
            ref: a
        } : {}
          , {children: y} = s
          , v = k.useMemo( () => rt(y) ? y.get() : y, [y]);
        return k.createElement(i, {
            ...g,
            children: v
        })
    }
}
function bC(e, n) {
    return function(s, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...ff(s) ? wC : xC,
            preloadedFeatures: e,
            useRender: CC(a),
            createVisualElement: n,
            Component: s
        };
        return GT(c)
    }
}
function i0(e, n) {
    if (!Array.isArray(n))
        return !1;
    const i = n.length;
    if (i !== e.length)
        return !1;
    for (let s = 0; s < i; s++)
        if (n[s] !== e[s])
            return !1;
    return !0
}
function Na(e, n, i) {
    const s = e.getProps();
    return df(s, n, i !== void 0 ? i : s.custom, e)
}
const kC = sf( () => window.ScrollTimeline !== void 0);
class RC {
    constructor(n) {
        this.stop = () => this.runAll("stop"),
        this.animations = n.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(n => "finished"in n ? n.finished : n))
    }
    getAll(n) {
        return this.animations[0][n]
    }
    setAll(n, i) {
        for (let s = 0; s < this.animations.length; s++)
            this.animations[s][n] = i
    }
    attachTimeline(n, i) {
        const s = this.animations.map(a => {
            if (kC() && a.attachTimeline)
                return a.attachTimeline(n);
            if (typeof i == "function")
                return i(a)
        }
        );
        return () => {
            s.forEach( (a, u) => {
                a && a(),
                this.animations[u].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(n) {
        this.setAll("time", n)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(n) {
        this.setAll("speed", n)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let n = 0;
        for (let i = 0; i < this.animations.length; i++)
            n = Math.max(n, this.animations[i].duration);
        return n
    }
    runAll(n) {
        this.animations.forEach(i => i[n]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class AC extends RC {
    then(n, i) {
        return Promise.all(this.animations).then(n).catch(i)
    }
}
function xf(e, n) {
    return e ? e[n] || e.default || e : void 0
}
const Ec = 2e4;
function o0(e) {
    let n = 0;
    const i = 50;
    let s = e.next(n);
    for (; !s.done && n < Ec; )
        n += i,
        s = e.next(n);
    return n >= Ec ? 1 / 0 : n
}
function Sf(e) {
    return typeof e == "function"
}
function Om(e, n) {
    e.timeline = n,
    e.onfinish = null
}
const Ef = e => Array.isArray(e) && typeof e[0] == "number"
  , _C = {
    linearEasing: void 0
};
function OC(e, n) {
    const i = sf(e);
    return () => {
        var s;
        return (s = _C[n]) !== null && s !== void 0 ? s : i()
    }
}
const fa = OC( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , s0 = (e, n, i=10) => {
    let s = "";
    const a = Math.max(Math.round(n / i), 2);
    for (let u = 0; u < a; u++)
        s += e(Xr(0, a - 1, u)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`
}
;
function a0(e) {
    return !!(typeof e == "function" && fa() || !e || typeof e == "string" && (e in Pc || fa()) || Ef(e) || Array.isArray(e) && e.every(a0))
}
const Gi = ([e,n,i,s]) => `cubic-bezier(${e}, ${n}, ${i}, ${s})`
  , Pc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Gi([0, .65, .55, 1]),
    circOut: Gi([.55, 0, 1, .45]),
    backIn: Gi([.31, .01, .66, -.59]),
    backOut: Gi([.33, 1.53, .69, .99])
};
function l0(e, n) {
    if (e)
        return typeof e == "function" && fa() ? s0(e, n) : Ef(e) ? Gi(e) : Array.isArray(e) ? e.map(i => l0(i, n) || Pc.easeOut) : Pc[e]
}
const Ft = {
    x: !1,
    y: !1
};
function u0() {
    return Ft.x || Ft.y
}
function MC(e, n, i) {
    var s;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let a = document;
        const u = (s = void 0) !== null && s !== void 0 ? s : a.querySelectorAll(e);
        return u ? Array.from(u) : []
    }
    return Array.from(e)
}
function c0(e, n) {
    const i = MC(e)
      , s = new AbortController
      , a = {
        passive: !0,
        ...n,
        signal: s.signal
    };
    return [i, a, () => s.abort()]
}
function Mm(e) {
    return n => {
        n.pointerType === "touch" || u0() || e(n)
    }
}
function NC(e, n, i={}) {
    const [s,a,u] = c0(e, i)
      , c = Mm(d => {
        const {target: h} = d
          , p = n(d);
        if (typeof p != "function" || !h)
            return;
        const g = Mm(y => {
            p(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return s.forEach(d => {
        d.addEventListener("pointerenter", c, a)
    }
    ),
    u
}
const f0 = (e, n) => n ? e === n ? !0 : f0(e, n.parentElement) : !1
  , Pf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , DC = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function LC(e) {
    return DC.has(e.tagName) || e.tabIndex !== -1
}
const Yi = new WeakSet;
function Nm(e) {
    return n => {
        n.key === "Enter" && e(n)
    }
}
function qu(e, n) {
    e.dispatchEvent(new PointerEvent("pointer" + n,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const jC = (e, n) => {
    const i = e.currentTarget;
    if (!i)
        return;
    const s = Nm( () => {
        if (Yi.has(i))
            return;
        qu(i, "down");
        const a = Nm( () => {
            qu(i, "up")
        }
        )
          , u = () => qu(i, "cancel");
        i.addEventListener("keyup", a, n),
        i.addEventListener("blur", u, n)
    }
    );
    i.addEventListener("keydown", s, n),
    i.addEventListener("blur", () => i.removeEventListener("keydown", s), n)
}
;
function Dm(e) {
    return Pf(e) && !u0()
}
function IC(e, n, i={}) {
    const [s,a,u] = c0(e, i)
      , c = d => {
        const h = d.currentTarget;
        if (!Dm(d) || Yi.has(h))
            return;
        Yi.add(h);
        const p = n(d)
          , g = (x, S) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", v),
            !(!Dm(x) || !Yi.has(h)) && (Yi.delete(h),
            typeof p == "function" && p(x, {
                success: S
            }))
        }
          , y = x => {
            g(x, i.useGlobalTarget || f0(h, x.target))
        }
          , v = x => {
            g(x, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", v, a)
    }
    ;
    return s.forEach(d => {
        !LC(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (i.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a),
        d.addEventListener("focus", p => jC(p, a), a)
    }
    ),
    u
}
function FC(e) {
    return e === "x" || e === "y" ? Ft[e] ? null : (Ft[e] = !0,
    () => {
        Ft[e] = !1
    }
    ) : Ft.x || Ft.y ? null : (Ft.x = Ft.y = !0,
    () => {
        Ft.x = Ft.y = !1
    }
    )
}
const d0 = new Set(["width", "height", "top", "left", "right", "bottom", ...ri]);
let ea;
function VC() {
    ea = void 0
}
const Yt = {
    now: () => (ea === void 0 && Yt.set(Xe.isProcessing || DT.useManualTiming ? Xe.timestamp : performance.now()),
    ea),
    set: e => {
        ea = e,
        queueMicrotask(VC)
    }
};
function Tf(e, n) {
    e.indexOf(n) === -1 && e.push(n)
}
function Cf(e, n) {
    const i = e.indexOf(n);
    i > -1 && e.splice(i, 1)
}
class bf {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return Tf(this.subscriptions, n),
        () => Cf(this.subscriptions, n)
    }
    notify(n, i, s) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](n, i, s);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(n, i, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function h0(e, n) {
    return n ? e * (1e3 / n) : 0
}
const Lm = 30
  , zC = e => !isNaN(parseFloat(e));
class BC {
    constructor(n, i={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (s, a=!0) => {
            const u = Yt.now();
            this.updatedAt !== u && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(n),
        this.owner = i.owner
    }
    setCurrent(n) {
        this.current = n,
        this.updatedAt = Yt.now(),
        this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = zC(this.current))
    }
    setPrevFrameValue(n=this.current) {
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, i) {
        this.events[n] || (this.events[n] = new bf);
        const s = this.events[n].add(i);
        return n === "change" ? () => {
            s(),
            Ae.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const n in this.events)
            this.events[n].clear()
    }
    attach(n, i) {
        this.passiveEffect = n,
        this.stopPassiveEffect = i
    }
    set(n, i=!0) {
        !i || !this.passiveEffect ? this.updateAndNotify(n, i) : this.passiveEffect(n, this.updateAndNotify)
    }
    setWithVelocity(n, i, s) {
        this.set(i),
        this.prev = void 0,
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(n, i=!0) {
        this.updateAndNotify(n),
        this.prev = n,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        i && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = Yt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > Lm)
            return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, Lm);
        return h0(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(n) {
        return this.stop(),
        new Promise(i => {
            this.hasAnimated = !0,
            this.animation = n(i),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function uo(e, n) {
    return new BC(e,n)
}
function UC(e, n, i) {
    e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, uo(i))
}
function HC(e, n) {
    const i = Na(e, n);
    let {transitionEnd: s={}, transition: a={}, ...u} = i || {};
    u = {
        ...u,
        ...s
    };
    for (const c in u) {
        const d = tC(u[c]);
        UC(e, c, d)
    }
}
function WC(e) {
    return !!(rt(e) && e.add)
}
function Tc(e, n) {
    const i = e.getValue("willChange");
    if (WC(i))
        return i.add(n)
}
function p0(e) {
    return e.props[Wv]
}
const m0 = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e
  , $C = 1e-7
  , KC = 12;
function qC(e, n, i, s, a) {
    let u, c, d = 0;
    do
        c = n + (i - n) / 2,
        u = m0(c, s, a) - e,
        u > 0 ? i = c : n = c;
    while (Math.abs(u) > $C && ++d < KC);
    return c
}
function go(e, n, i, s) {
    if (e === n && i === s)
        return xt;
    const a = u => qC(u, 0, 1, e, i);
    return u => u === 0 || u === 1 ? u : m0(a(u), n, s)
}
const g0 = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2
  , y0 = e => n => 1 - e(1 - n)
  , v0 = go(.33, 1.53, .69, .99)
  , kf = y0(v0)
  , w0 = g0(kf)
  , x0 = e => (e *= 2) < 1 ? .5 * kf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Rf = e => 1 - Math.sin(Math.acos(e))
  , S0 = y0(Rf)
  , E0 = g0(Rf)
  , P0 = e => /^0[^.\s]+$/u.test(e);
function QC(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || P0(e) : !0
}
const Ji = e => Math.round(e * 1e5) / 1e5
  , Af = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function GC(e) {
    return e == null
}
const YC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , _f = (e, n) => i => !!(typeof i == "string" && YC.test(i) && i.startsWith(e) || n && !GC(i) && Object.prototype.hasOwnProperty.call(i, n))
  , T0 = (e, n, i) => s => {
    if (typeof s != "string")
        return s;
    const [a,u,c,d] = s.match(Af);
    return {
        [e]: parseFloat(a),
        [n]: parseFloat(u),
        [i]: parseFloat(c),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , XC = e => gn(0, 255, e)
  , Qu = {
    ...ii,
    transform: e => Math.round(XC(e))
}
  , cr = {
    test: _f("rgb", "red"),
    parse: T0("red", "green", "blue"),
    transform: ({red: e, green: n, blue: i, alpha: s=1}) => "rgba(" + Qu.transform(e) + ", " + Qu.transform(n) + ", " + Qu.transform(i) + ", " + Ji(lo.transform(s)) + ")"
};
function ZC(e) {
    let n = ""
      , i = ""
      , s = ""
      , a = "";
    return e.length > 5 ? (n = e.substring(1, 3),
    i = e.substring(3, 5),
    s = e.substring(5, 7),
    a = e.substring(7, 9)) : (n = e.substring(1, 2),
    i = e.substring(2, 3),
    s = e.substring(3, 4),
    a = e.substring(4, 5),
    n += n,
    i += i,
    s += s,
    a += a),
    {
        red: parseInt(n, 16),
        green: parseInt(i, 16),
        blue: parseInt(s, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Cc = {
    test: _f("#"),
    parse: ZC,
    transform: cr.transform
}
  , Hr = {
    test: _f("hsl", "hue"),
    parse: T0("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: n, lightness: i, alpha: s=1}) => "hsla(" + Math.round(e) + ", " + Gt.transform(Ji(n)) + ", " + Gt.transform(Ji(i)) + ", " + Ji(lo.transform(s)) + ")"
}
  , nt = {
    test: e => cr.test(e) || Cc.test(e) || Hr.test(e),
    parse: e => cr.test(e) ? cr.parse(e) : Hr.test(e) ? Hr.parse(e) : Cc.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? cr.transform(e) : Hr.transform(e)
}
  , JC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function eb(e) {
    var n, i;
    return isNaN(e) && typeof e == "string" && (((n = e.match(Af)) === null || n === void 0 ? void 0 : n.length) || 0) + (((i = e.match(JC)) === null || i === void 0 ? void 0 : i.length) || 0) > 0
}
const C0 = "number"
  , b0 = "color"
  , tb = "var"
  , nb = "var("
  , jm = "${}"
  , rb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function co(e) {
    const n = e.toString()
      , i = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let u = 0;
    const d = n.replace(rb, h => (nt.test(h) ? (s.color.push(u),
    a.push(b0),
    i.push(nt.parse(h))) : h.startsWith(nb) ? (s.var.push(u),
    a.push(tb),
    i.push(h)) : (s.number.push(u),
    a.push(C0),
    i.push(parseFloat(h))),
    ++u,
    jm)).split(jm);
    return {
        values: i,
        split: d,
        indexes: s,
        types: a
    }
}
function k0(e) {
    return co(e).values
}
function R0(e) {
    const {split: n, types: i} = co(e)
      , s = n.length;
    return a => {
        let u = "";
        for (let c = 0; c < s; c++)
            if (u += n[c],
            a[c] !== void 0) {
                const d = i[c];
                d === C0 ? u += Ji(a[c]) : d === b0 ? u += nt.transform(a[c]) : u += a[c]
            }
        return u
    }
}
const ib = e => typeof e == "number" ? 0 : e;
function ob(e) {
    const n = k0(e);
    return R0(e)(n.map(ib))
}
const $n = {
    test: eb,
    parse: k0,
    createTransformer: R0,
    getAnimatableNone: ob
}
  , sb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ab(e) {
    const [n,i] = e.slice(0, -1).split("(");
    if (n === "drop-shadow")
        return e;
    const [s] = i.match(Af) || [];
    if (!s)
        return e;
    const a = i.replace(s, "");
    let u = sb.has(n) ? 1 : 0;
    return s !== i && (u *= 100),
    n + "(" + u + a + ")"
}
const lb = /\b([a-z-]*)\(.*?\)/gu
  , bc = {
    ...$n,
    getAnimatableNone: e => {
        const n = e.match(lb);
        return n ? n.map(ab).join(" ") : e
    }
}
  , ub = {
    ...pf,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: bc,
    WebkitFilter: bc
}
  , Of = e => ub[e];
function A0(e, n) {
    let i = Of(e);
    return i !== bc && (i = $n),
    i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
}
const cb = new Set(["auto", "none", "0"]);
function fb(e, n, i) {
    let s = 0, a;
    for (; s < e.length && !a; ) {
        const u = e[s];
        typeof u == "string" && !cb.has(u) && co(u).values.length && (a = e[s]),
        s++
    }
    if (a && i)
        for (const u of n)
            e[u] = A0(i, a)
}
const Im = e => e === ii || e === he
  , Fm = (e, n) => parseFloat(e.split(", ")[n])
  , Vm = (e, n) => (i, {transform: s}) => {
    if (s === "none" || !s)
        return 0;
    const a = s.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return Fm(a[1], n);
    {
        const u = s.match(/^matrix\((.+)\)$/u);
        return u ? Fm(u[1], e) : 0
    }
}
  , db = new Set(["x", "y", "z"])
  , hb = ri.filter(e => !db.has(e));
function pb(e) {
    const n = [];
    return hb.forEach(i => {
        const s = e.getValue(i);
        s !== void 0 && (n.push([i, s.get()]),
        s.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    n
}
const Jr = {
    width: ({x: e}, {paddingLeft: n="0", paddingRight: i="0"}) => e.max - e.min - parseFloat(n) - parseFloat(i),
    height: ({y: e}, {paddingTop: n="0", paddingBottom: i="0"}) => e.max - e.min - parseFloat(n) - parseFloat(i),
    top: (e, {top: n}) => parseFloat(n),
    left: (e, {left: n}) => parseFloat(n),
    bottom: ({y: e}, {top: n}) => parseFloat(n) + (e.max - e.min),
    right: ({x: e}, {left: n}) => parseFloat(n) + (e.max - e.min),
    x: Vm(4, 13),
    y: Vm(5, 14)
};
Jr.translateX = Jr.x;
Jr.translateY = Jr.y;
const fr = new Set;
let kc = !1
  , Rc = !1;
function _0() {
    if (Rc) {
        const e = Array.from(fr).filter(s => s.needsMeasurement)
          , n = new Set(e.map(s => s.element))
          , i = new Map;
        n.forEach(s => {
            const a = pb(s);
            a.length && (i.set(s, a),
            s.render())
        }
        ),
        e.forEach(s => s.measureInitialState()),
        n.forEach(s => {
            s.render();
            const a = i.get(s);
            a && a.forEach( ([u,c]) => {
                var d;
                (d = s.getValue(u)) === null || d === void 0 || d.set(c)
            }
            )
        }
        ),
        e.forEach(s => s.measureEndState()),
        e.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    Rc = !1,
    kc = !1,
    fr.forEach(e => e.complete()),
    fr.clear()
}
function O0() {
    fr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Rc = !0)
    }
    )
}
function mb() {
    O0(),
    _0()
}
class Mf {
    constructor(n, i, s, a, u, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...n],
        this.onComplete = i,
        this.name = s,
        this.motionValue = a,
        this.element = u,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (fr.add(this),
        kc || (kc = !0,
        Ae.read(O0),
        Ae.resolveKeyframes(_0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, name: i, element: s, motionValue: a} = this;
        for (let u = 0; u < n.length; u++)
            if (n[u] === null)
                if (u === 0) {
                    const c = a?.get()
                      , d = n[n.length - 1];
                    if (c !== void 0)
                        n[0] = c;
                    else if (s && i) {
                        const h = s.readValue(i, d);
                        h != null && (n[0] = h)
                    }
                    n[0] === void 0 && (n[0] = d),
                    a && c === void 0 && a.set(n[0])
                } else
                    n[u] = n[u - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        fr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        fr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const M0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , gb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function yb(e) {
    const n = gb.exec(e);
    if (!n)
        return [, ];
    const [,i,s,a] = n;
    return [`--${i ?? s}`, a]
}
function N0(e, n, i=1) {
    const [s,a] = yb(e);
    if (!s)
        return;
    const u = window.getComputedStyle(n).getPropertyValue(s);
    if (u) {
        const c = u.trim();
        return M0(c) ? parseFloat(c) : c
    }
    return hf(a) ? N0(a, n, i + 1) : a
}
const D0 = e => n => n.test(e)
  , vb = {
    test: e => e === "auto",
    parse: e => e
}
  , L0 = [ii, he, Gt, zn, aC, sC, vb]
  , zm = e => L0.find(D0(e));
class j0 extends Mf {
    constructor(n, i, s, a, u) {
        super(n, i, s, a, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, element: i, name: s} = this;
        if (!i || !i.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < n.length; h++) {
            let p = n[h];
            if (typeof p == "string" && (p = p.trim(),
            hf(p))) {
                const g = N0(p, i.current);
                g !== void 0 && (n[h] = g),
                h === n.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !d0.has(s) || n.length !== 2)
            return;
        const [a,u] = n
          , c = zm(a)
          , d = zm(u);
        if (c !== d)
            if (Im(c) && Im(d))
                for (let h = 0; h < n.length; h++) {
                    const p = n[h];
                    typeof p == "string" && (n[h] = parseFloat(p))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: n, name: i} = this
          , s = [];
        for (let a = 0; a < n.length; a++)
            QC(n[a]) && s.push(a);
        s.length && fb(n, s, i)
    }
    measureInitialState() {
        const {element: n, unresolvedKeyframes: i, name: s} = this;
        if (!n || !n.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Jr[s](n.measureViewportBox(), window.getComputedStyle(n.current)),
        i[0] = this.measuredOrigin;
        const a = i[i.length - 1];
        a !== void 0 && n.getValue(s, a).jump(a, !1)
    }
    measureEndState() {
        var n;
        const {element: i, name: s, unresolvedKeyframes: a} = this;
        if (!i || !i.current)
            return;
        const u = i.getValue(s);
        u && u.jump(this.measuredOrigin, !1);
        const c = a.length - 1
          , d = a[c];
        a[c] = Jr[s](i.measureViewportBox(), window.getComputedStyle(i.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((n = this.removedTransforms) === null || n === void 0) && n.length && this.removedTransforms.forEach( ([h,p]) => {
            i.getValue(h).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Bm = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && ($n.test(e) || e === "0") && !e.startsWith("url("));
function wb(e) {
    const n = e[0];
    if (e.length === 1)
        return !0;
    for (let i = 0; i < e.length; i++)
        if (e[i] !== n)
            return !0
}
function xb(e, n, i, s) {
    const a = e[0];
    if (a === null)
        return !1;
    if (n === "display" || n === "visibility")
        return !0;
    const u = e[e.length - 1]
      , c = Bm(a, n)
      , d = Bm(u, n);
    return !c || !d ? !1 : wb(e) || (i === "spring" || Sf(i)) && s
}
const Sb = e => e !== null;
function Da(e, {repeat: n, repeatType: i="loop"}, s) {
    const a = e.filter(Sb)
      , u = n && i !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
    return !u || s === void 0 ? a[u] : s
}
const Eb = 40;
class I0 {
    constructor({autoplay: n=!0, delay: i=0, type: s="keyframes", repeat: a=0, repeatDelay: u=0, repeatType: c="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Yt.now(),
        this.options = {
            autoplay: n,
            delay: i,
            type: s,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Eb ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && mb(),
        this._resolved
    }
    onKeyframesResolved(n, i) {
        this.resolvedAt = Yt.now(),
        this.hasAttemptedResolve = !0;
        const {name: s, type: a, velocity: u, delay: c, onComplete: d, onUpdate: h, isGenerator: p} = this.options;
        if (!p && !xb(n, s, a, u))
            if (c)
                this.options.duration = 0;
            else {
                h && h(Da(n, this.options, i)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(n, i);
        g !== !1 && (this._resolved = {
            keyframes: n,
            finalKeyframe: i,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(n, i) {
        return this.currentFinishedPromise.then(n, i)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(n => {
            this.resolveFinishedPromise = n
        }
        )
    }
}
const je = (e, n, i) => e + (n - e) * i;
function Gu(e, n, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
}
function Pb({hue: e, saturation: n, lightness: i, alpha: s}) {
    e /= 360,
    n /= 100,
    i /= 100;
    let a = 0
      , u = 0
      , c = 0;
    if (!n)
        a = u = c = i;
    else {
        const d = i < .5 ? i * (1 + n) : i + n - i * n
          , h = 2 * i - d;
        a = Gu(h, d, e + 1 / 3),
        u = Gu(h, d, e),
        c = Gu(h, d, e - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: s
    }
}
function da(e, n) {
    return i => i > 0 ? n : e
}
const Yu = (e, n, i) => {
    const s = e * e
      , a = i * (n * n - s) + s;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , Tb = [Cc, cr, Hr]
  , Cb = e => Tb.find(n => n.test(e));
function Um(e) {
    const n = Cb(e);
    if (!n)
        return !1;
    let i = n.parse(e);
    return n === Hr && (i = Pb(i)),
    i
}
const Hm = (e, n) => {
    const i = Um(e)
      , s = Um(n);
    if (!i || !s)
        return da(e, n);
    const a = {
        ...i
    };
    return u => (a.red = Yu(i.red, s.red, u),
    a.green = Yu(i.green, s.green, u),
    a.blue = Yu(i.blue, s.blue, u),
    a.alpha = je(i.alpha, s.alpha, u),
    cr.transform(a))
}
  , bb = (e, n) => i => n(e(i))
  , yo = (...e) => e.reduce(bb)
  , Ac = new Set(["none", "hidden"]);
function kb(e, n) {
    return Ac.has(e) ? i => i <= 0 ? e : n : i => i >= 1 ? n : e
}
function Rb(e, n) {
    return i => je(e, n, i)
}
function Nf(e) {
    return typeof e == "number" ? Rb : typeof e == "string" ? hf(e) ? da : nt.test(e) ? Hm : Ob : Array.isArray(e) ? F0 : typeof e == "object" ? nt.test(e) ? Hm : Ab : da
}
function F0(e, n) {
    const i = [...e]
      , s = i.length
      , a = e.map( (u, c) => Nf(u)(u, n[c]));
    return u => {
        for (let c = 0; c < s; c++)
            i[c] = a[c](u);
        return i
    }
}
function Ab(e, n) {
    const i = {
        ...e,
        ...n
    }
      , s = {};
    for (const a in i)
        e[a] !== void 0 && n[a] !== void 0 && (s[a] = Nf(e[a])(e[a], n[a]));
    return a => {
        for (const u in s)
            i[u] = s[u](a);
        return i
    }
}
function _b(e, n) {
    var i;
    const s = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let u = 0; u < n.values.length; u++) {
        const c = n.types[u]
          , d = e.indexes[c][a[c]]
          , h = (i = e.values[d]) !== null && i !== void 0 ? i : 0;
        s[u] = h,
        a[c]++
    }
    return s
}
const Ob = (e, n) => {
    const i = $n.createTransformer(n)
      , s = co(e)
      , a = co(n);
    return s.indexes.var.length === a.indexes.var.length && s.indexes.color.length === a.indexes.color.length && s.indexes.number.length >= a.indexes.number.length ? Ac.has(e) && !a.values.length || Ac.has(n) && !s.values.length ? kb(e, n) : yo(F0(_b(s, a), a.values), i) : da(e, n)
}
;
function V0(e, n, i) {
    return typeof e == "number" && typeof n == "number" && typeof i == "number" ? je(e, n, i) : Nf(e)(e, n)
}
const Mb = 5;
function z0(e, n, i) {
    const s = Math.max(n - Mb, 0);
    return h0(i - e(s), n - s)
}
const Fe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Xu = .001;
function Nb({duration: e=Fe.duration, bounce: n=Fe.bounce, velocity: i=Fe.velocity, mass: s=Fe.mass}) {
    let a, u, c = 1 - n;
    c = gn(Fe.minDamping, Fe.maxDamping, c),
    e = gn(Fe.minDuration, Fe.maxDuration, hn(e)),
    c < 1 ? (a = p => {
        const g = p * c
          , y = g * e
          , v = g - i
          , x = _c(p, c)
          , S = Math.exp(-y);
        return Xu - v / x * S
    }
    ,
    u = p => {
        const y = p * c * e
          , v = y * i + i
          , x = Math.pow(c, 2) * Math.pow(p, 2) * e
          , S = Math.exp(-y)
          , E = _c(Math.pow(p, 2), c);
        return (-a(p) + Xu > 0 ? -1 : 1) * ((v - x) * S) / E
    }
    ) : (a = p => {
        const g = Math.exp(-p * e)
          , y = (p - i) * e + 1;
        return -Xu + g * y
    }
    ,
    u = p => {
        const g = Math.exp(-p * e)
          , y = (i - p) * (e * e);
        return g * y
    }
    );
    const d = 5 / e
      , h = Lb(a, u, d);
    if (e = dn(e),
    isNaN(h))
        return {
            stiffness: Fe.stiffness,
            damping: Fe.damping,
            duration: e
        };
    {
        const p = Math.pow(h, 2) * s;
        return {
            stiffness: p,
            damping: c * 2 * Math.sqrt(s * p),
            duration: e
        }
    }
}
const Db = 12;
function Lb(e, n, i) {
    let s = i;
    for (let a = 1; a < Db; a++)
        s = s - e(s) / n(s);
    return s
}
function _c(e, n) {
    return e * Math.sqrt(1 - n * n)
}
const jb = ["duration", "bounce"]
  , Ib = ["stiffness", "damping", "mass"];
function Wm(e, n) {
    return n.some(i => e[i] !== void 0)
}
function Fb(e) {
    let n = {
        velocity: Fe.velocity,
        stiffness: Fe.stiffness,
        damping: Fe.damping,
        mass: Fe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Wm(e, Ib) && Wm(e, jb))
        if (e.visualDuration) {
            const i = e.visualDuration
              , s = 2 * Math.PI / (i * 1.2)
              , a = s * s
              , u = 2 * gn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
            n = {
                ...n,
                mass: Fe.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const i = Nb(e);
            n = {
                ...n,
                ...i,
                mass: Fe.mass
            },
            n.isResolvedFromDuration = !0
        }
    return n
}
function B0(e=Fe.visualDuration, n=Fe.bounce) {
    const i = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
    } : e;
    let {restSpeed: s, restDelta: a} = i;
    const u = i.keyframes[0]
      , c = i.keyframes[i.keyframes.length - 1]
      , d = {
        done: !1,
        value: u
    }
      , {stiffness: h, damping: p, mass: g, duration: y, velocity: v, isResolvedFromDuration: x} = Fb({
        ...i,
        velocity: -hn(i.velocity || 0)
    })
      , S = v || 0
      , E = p / (2 * Math.sqrt(h * g))
      , P = c - u
      , T = hn(Math.sqrt(h / g))
      , R = Math.abs(P) < 5;
    s || (s = R ? Fe.restSpeed.granular : Fe.restSpeed.default),
    a || (a = R ? Fe.restDelta.granular : Fe.restDelta.default);
    let A;
    if (E < 1) {
        const D = _c(T, E);
        A = V => {
            const F = Math.exp(-E * T * V);
            return c - F * ((S + E * T * P) / D * Math.sin(D * V) + P * Math.cos(D * V))
        }
    } else if (E === 1)
        A = D => c - Math.exp(-T * D) * (P + (S + T * P) * D);
    else {
        const D = T * Math.sqrt(E * E - 1);
        A = V => {
            const F = Math.exp(-E * T * V)
              , H = Math.min(D * V, 300);
            return c - F * ((S + E * T * P) * Math.sinh(H) + D * P * Math.cosh(H)) / D
        }
    }
    const N = {
        calculatedDuration: x && y || null,
        next: D => {
            const V = A(D);
            if (x)
                d.done = D >= y;
            else {
                let F = 0;
                E < 1 && (F = D === 0 ? dn(S) : z0(A, D, V));
                const H = Math.abs(F) <= s
                  , Y = Math.abs(c - V) <= a;
                d.done = H && Y
            }
            return d.value = d.done ? c : V,
            d
        }
        ,
        toString: () => {
            const D = Math.min(o0(N), Ec)
              , V = s0(F => N.next(D * F).value, D, 30);
            return D + "ms " + V
        }
    };
    return N
}
function $m({keyframes: e, velocity: n=0, power: i=.8, timeConstant: s=325, bounceDamping: a=10, bounceStiffness: u=500, modifyTarget: c, min: d, max: h, restDelta: p=.5, restSpeed: g}) {
    const y = e[0]
      , v = {
        done: !1,
        value: y
    }
      , x = H => d !== void 0 && H < d || h !== void 0 && H > h
      , S = H => d === void 0 ? h : h === void 0 || Math.abs(d - H) < Math.abs(h - H) ? d : h;
    let E = i * n;
    const P = y + E
      , T = c === void 0 ? P : c(P);
    T !== P && (E = T - y);
    const R = H => -E * Math.exp(-H / s)
      , A = H => T + R(H)
      , N = H => {
        const Y = R(H)
          , K = A(H);
        v.done = Math.abs(Y) <= p,
        v.value = v.done ? T : K
    }
    ;
    let D, V;
    const F = H => {
        x(v.value) && (D = H,
        V = B0({
            keyframes: [v.value, S(v.value)],
            velocity: z0(A, H, v.value),
            damping: a,
            stiffness: u,
            restDelta: p,
            restSpeed: g
        }))
    }
    ;
    return F(0),
    {
        calculatedDuration: null,
        next: H => {
            let Y = !1;
            return !V && D === void 0 && (Y = !0,
            N(H),
            F(H)),
            D !== void 0 && H >= D ? V.next(H - D) : (!Y && N(H),
            v)
        }
    }
}
const Vb = go(.42, 0, 1, 1)
  , zb = go(0, 0, .58, 1)
  , U0 = go(.42, 0, .58, 1)
  , Bb = e => Array.isArray(e) && typeof e[0] != "number"
  , Ub = {
    linear: xt,
    easeIn: Vb,
    easeInOut: U0,
    easeOut: zb,
    circIn: Rf,
    circInOut: E0,
    circOut: S0,
    backIn: kf,
    backInOut: w0,
    backOut: v0,
    anticipate: x0
}
  , Km = e => {
    if (Ef(e)) {
        Vv(e.length === 4);
        const [n,i,s,a] = e;
        return go(n, i, s, a)
    } else if (typeof e == "string")
        return Ub[e];
    return e
}
;
function Hb(e, n, i) {
    const s = []
      , a = i || V0
      , u = e.length - 1;
    for (let c = 0; c < u; c++) {
        let d = a(e[c], e[c + 1]);
        if (n) {
            const h = Array.isArray(n) ? n[c] || xt : n;
            d = yo(h, d)
        }
        s.push(d)
    }
    return s
}
function Wb(e, n, {clamp: i=!0, ease: s, mixer: a}={}) {
    const u = e.length;
    if (Vv(u === n.length),
    u === 1)
        return () => n[0];
    if (u === 2 && n[0] === n[1])
        return () => n[1];
    const c = e[0] === e[1];
    e[0] > e[u - 1] && (e = [...e].reverse(),
    n = [...n].reverse());
    const d = Hb(n, s, a)
      , h = d.length
      , p = g => {
        if (c && g < e[0])
            return n[0];
        let y = 0;
        if (h > 1)
            for (; y < e.length - 2 && !(g < e[y + 1]); y++)
                ;
        const v = Xr(e[y], e[y + 1], g);
        return d[y](v)
    }
    ;
    return i ? g => p(gn(e[0], e[u - 1], g)) : p
}
function $b(e, n) {
    const i = e[e.length - 1];
    for (let s = 1; s <= n; s++) {
        const a = Xr(0, n, s);
        e.push(je(i, 1, a))
    }
}
function Kb(e) {
    const n = [0];
    return $b(n, e.length - 1),
    n
}
function qb(e, n) {
    return e.map(i => i * n)
}
function Qb(e, n) {
    return e.map( () => n || U0).splice(0, e.length - 1)
}
function ha({duration: e=300, keyframes: n, times: i, ease: s="easeInOut"}) {
    const a = Bb(s) ? s.map(Km) : Km(s)
      , u = {
        done: !1,
        value: n[0]
    }
      , c = qb(i && i.length === n.length ? i : Kb(n), e)
      , d = Wb(c, n, {
        ease: Array.isArray(a) ? a : Qb(n, a)
    });
    return {
        calculatedDuration: e,
        next: h => (u.value = d(h),
        u.done = h >= e,
        u)
    }
}
const Gb = e => {
    const n = ({timestamp: i}) => e(i);
    return {
        start: () => Ae.update(n, !0),
        stop: () => Wn(n),
        now: () => Xe.isProcessing ? Xe.timestamp : Yt.now()
    }
}
  , Yb = {
    decay: $m,
    inertia: $m,
    tween: ha,
    keyframes: ha,
    spring: B0
}
  , Xb = e => e / 100;
class Df extends I0 {
    constructor(n) {
        super(n),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: i, motionValue: s, element: a, keyframes: u} = this.options
          , c = a?.KeyframeResolver || Mf
          , d = (h, p) => this.onKeyframesResolved(h, p);
        this.resolver = new c(u,d,i,s,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(n) {
        const {type: i="keyframes", repeat: s=0, repeatDelay: a=0, repeatType: u, velocity: c=0} = this.options
          , d = Sf(i) ? i : Yb[i] || ha;
        let h, p;
        d !== ha && typeof n[0] != "number" && (h = yo(Xb, V0(n[0], n[1])),
        n = [0, 100]);
        const g = d({
            ...this.options,
            keyframes: n
        });
        u === "mirror" && (p = d({
            ...this.options,
            keyframes: [...n].reverse(),
            velocity: -c
        })),
        g.calculatedDuration === null && (g.calculatedDuration = o0(g));
        const {calculatedDuration: y} = g
          , v = y + a
          , x = v * (s + 1) - a;
        return {
            generator: g,
            mirroredGenerator: p,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: v,
            totalDuration: x
        }
    }
    onPostResolved() {
        const {autoplay: n=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !n ? this.pause() : this.state = this.pendingPlayState
    }
    tick(n, i=!1) {
        const {resolved: s} = this;
        if (!s) {
            const {keyframes: H} = this.options;
            return {
                done: !0,
                value: H[H.length - 1]
            }
        }
        const {finalKeyframe: a, generator: u, mirroredGenerator: c, mapPercentToKeyframes: d, keyframes: h, calculatedDuration: p, totalDuration: g, resolvedDuration: y} = s;
        if (this.startTime === null)
            return u.next(0);
        const {delay: v, repeat: x, repeatType: S, repeatDelay: E, onUpdate: P} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - g / this.speed, this.startTime)),
        i ? this.currentTime = n : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(n - this.startTime) * this.speed;
        const T = this.currentTime - v * (this.speed >= 0 ? 1 : -1)
          , R = this.speed >= 0 ? T < 0 : T > g;
        this.currentTime = Math.max(T, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let A = this.currentTime
          , N = u;
        if (x) {
            const H = Math.min(this.currentTime, g) / y;
            let Y = Math.floor(H)
              , K = H % 1;
            !K && H >= 1 && (K = 1),
            K === 1 && Y--,
            Y = Math.min(Y, x + 1),
            Y % 2 && (S === "reverse" ? (K = 1 - K,
            E && (K -= E / y)) : S === "mirror" && (N = c)),
            A = gn(0, 1, K) * y
        }
        const D = R ? {
            done: !1,
            value: h[0]
        } : N.next(A);
        d && (D.value = d(D.value));
        let {done: V} = D;
        !R && p !== null && (V = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
        return F && a !== void 0 && (D.value = Da(h, this.options, a)),
        P && P(D.value),
        F && this.finish(),
        D
    }
    get duration() {
        const {resolved: n} = this;
        return n ? hn(n.calculatedDuration) : 0
    }
    get time() {
        return hn(this.currentTime)
    }
    set time(n) {
        n = dn(n),
        this.currentTime = n,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        const i = this.playbackSpeed !== n;
        this.playbackSpeed = n,
        i && (this.time = hn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: n=Gb, onPlay: i, startTime: s} = this.options;
        this.driver || (this.driver = n(u => this.tick(u))),
        i && i();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = s ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var n;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (n = this.currentTime) !== null && n !== void 0 ? n : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: n} = this.options;
        n && n()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0,
        this.tick(n, !0)
    }
}
const Zb = new Set(["opacity", "clipPath", "filter", "transform"]);
function Jb(e, n, i, {delay: s=0, duration: a=300, repeat: u=0, repeatType: c="loop", ease: d="easeInOut", times: h}={}) {
    const p = {
        [n]: i
    };
    h && (p.offset = h);
    const g = l0(d, a);
    return Array.isArray(g) && (p.easing = g),
    e.animate(p, {
        delay: s,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const ek = sf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , pa = 10
  , tk = 2e4;
function nk(e) {
    return Sf(e.type) || e.type === "spring" || !a0(e.ease)
}
function rk(e, n) {
    const i = new Df({
        ...n,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: e[0]
    };
    const a = [];
    let u = 0;
    for (; !s.done && u < tk; )
        s = i.sample(u),
        a.push(s.value),
        u += pa;
    return {
        times: void 0,
        keyframes: a,
        duration: u - pa,
        ease: "linear"
    }
}
const H0 = {
    anticipate: x0,
    backInOut: w0,
    circInOut: E0
};
function ik(e) {
    return e in H0
}
class qm extends I0 {
    constructor(n) {
        super(n);
        const {name: i, motionValue: s, element: a, keyframes: u} = this.options;
        this.resolver = new j0(u, (c, d) => this.onKeyframesResolved(c, d),i,s,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(n, i) {
        let {duration: s=300, times: a, ease: u, type: c, motionValue: d, name: h, startTime: p} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof u == "string" && fa() && ik(u) && (u = H0[u]),
        nk(this.options)) {
            const {onComplete: y, onUpdate: v, motionValue: x, element: S, ...E} = this.options
              , P = rk(n, E);
            n = P.keyframes,
            n.length === 1 && (n[1] = n[0]),
            s = P.duration,
            a = P.times,
            u = P.ease,
            c = "keyframes"
        }
        const g = Jb(d.owner.current, h, n, {
            ...this.options,
            duration: s,
            times: a,
            ease: u
        });
        return g.startTime = p ?? this.calcStartTime(),
        this.pendingTimeline ? (Om(g, this.pendingTimeline),
        this.pendingTimeline = void 0) : g.onfinish = () => {
            const {onComplete: y} = this.options;
            d.set(Da(n, this.options, i)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: g,
            duration: s,
            times: a,
            type: c,
            ease: u,
            keyframes: n
        }
    }
    get duration() {
        const {resolved: n} = this;
        if (!n)
            return 0;
        const {duration: i} = n;
        return hn(i)
    }
    get time() {
        const {resolved: n} = this;
        if (!n)
            return 0;
        const {animation: i} = n;
        return hn(i.currentTime || 0)
    }
    set time(n) {
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: s} = i;
        s.currentTime = dn(n)
    }
    get speed() {
        const {resolved: n} = this;
        if (!n)
            return 1;
        const {animation: i} = n;
        return i.playbackRate
    }
    set speed(n) {
        const {resolved: i} = this;
        if (!i)
            return;
        const {animation: s} = i;
        s.playbackRate = n
    }
    get state() {
        const {resolved: n} = this;
        if (!n)
            return "idle";
        const {animation: i} = n;
        return i.playState
    }
    get startTime() {
        const {resolved: n} = this;
        if (!n)
            return null;
        const {animation: i} = n;
        return i.startTime
    }
    attachTimeline(n) {
        if (!this._resolved)
            this.pendingTimeline = n;
        else {
            const {resolved: i} = this;
            if (!i)
                return xt;
            const {animation: s} = i;
            Om(s, n)
        }
        return xt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.playState === "finished" && this.updateFinishedPromise(),
        i.play()
    }
    pause() {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i, keyframes: s, duration: a, type: u, ease: c, times: d} = n;
        if (i.playState === "idle" || i.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: p, onUpdate: g, onComplete: y, element: v, ...x} = this.options
              , S = new Df({
                ...x,
                keyframes: s,
                duration: a,
                type: u,
                ease: c,
                times: d,
                isGenerator: !0
            })
              , E = dn(this.time);
            p.setWithVelocity(S.sample(E - pa).value, S.sample(E).value, pa)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: n} = this;
        n && n.animation.finish()
    }
    cancel() {
        const {resolved: n} = this;
        n && n.animation.cancel()
    }
    static supports(n) {
        const {motionValue: i, name: s, repeatDelay: a, repeatType: u, damping: c, type: d} = n;
        if (!i || !i.owner || !(i.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: p} = i.owner.getProps();
        return ek() && s && Zb.has(s) && !h && !p && !a && u !== "mirror" && c !== 0 && d !== "inertia"
    }
}
const ok = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , sk = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , ak = {
    type: "keyframes",
    duration: .8
}
  , lk = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , uk = (e, {keyframes: n}) => n.length > 2 ? ak : pr.has(e) ? e.startsWith("scale") ? sk(n[1]) : ok : lk;
function ck({when: e, delay: n, delayChildren: i, staggerChildren: s, staggerDirection: a, repeat: u, repeatType: c, repeatDelay: d, from: h, elapsed: p, ...g}) {
    return !!Object.keys(g).length
}
const Lf = (e, n, i, s={}, a, u) => c => {
    const d = xf(s, e) || {}
      , h = d.delay || s.delay || 0;
    let {elapsed: p=0} = s;
    p = p - dn(h);
    let g = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: n.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: v => {
            n.set(v),
            d.onUpdate && d.onUpdate(v)
        }
        ,
        onComplete: () => {
            c(),
            d.onComplete && d.onComplete()
        }
        ,
        name: e,
        motionValue: n,
        element: u ? void 0 : a
    };
    ck(d) || (g = {
        ...g,
        ...uk(e, g)
    }),
    g.duration && (g.duration = dn(g.duration)),
    g.repeatDelay && (g.repeatDelay = dn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !u && n.get() !== void 0) {
        const v = Da(g.keyframes, d);
        if (v !== void 0)
            return Ae.update( () => {
                g.onUpdate(v),
                g.onComplete()
            }
            ),
            new AC([])
    }
    return !u && qm.supports(g) ? new qm(g) : new Df(g)
}
;
function fk({protectedKeys: e, needsAnimating: n}, i) {
    const s = e.hasOwnProperty(i) && n[i] !== !0;
    return n[i] = !1,
    s
}
function W0(e, n, {delay: i=0, transitionOverride: s, type: a}={}) {
    var u;
    let {transition: c=e.getDefaultTransition(), transitionEnd: d, ...h} = n;
    s && (c = s);
    const p = []
      , g = a && e.animationState && e.animationState.getState()[a];
    for (const y in h) {
        const v = e.getValue(y, (u = e.latestValues[y]) !== null && u !== void 0 ? u : null)
          , x = h[y];
        if (x === void 0 || g && fk(g, y))
            continue;
        const S = {
            delay: i,
            ...xf(c || {}, y)
        };
        let E = !1;
        if (window.MotionHandoffAnimation) {
            const T = p0(e);
            if (T) {
                const R = window.MotionHandoffAnimation(T, y, Ae);
                R !== null && (S.startTime = R,
                E = !0)
            }
        }
        Tc(e, y),
        v.start(Lf(y, v, x, e.shouldReduceMotion && d0.has(y) ? {
            type: !1
        } : S, e, E));
        const P = v.animation;
        P && p.push(P)
    }
    return d && Promise.all(p).then( () => {
        Ae.update( () => {
            d && HC(e, d)
        }
        )
    }
    ),
    p
}
function Oc(e, n, i={}) {
    var s;
    const a = Na(e, n, i.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {transition: u=e.getDefaultTransition() || {}} = a || {};
    i.transitionOverride && (u = i.transitionOverride);
    const c = a ? () => Promise.all(W0(e, a, i)) : () => Promise.resolve()
      , d = e.variantChildren && e.variantChildren.size ? (p=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: v} = u;
        return dk(e, n, g + p, y, v, i)
    }
    : () => Promise.resolve()
      , {when: h} = u;
    if (h) {
        const [p,g] = h === "beforeChildren" ? [c, d] : [d, c];
        return p().then( () => g())
    } else
        return Promise.all([c(), d(i.delay)])
}
function dk(e, n, i=0, s=0, a=1, u) {
    const c = []
      , d = (e.variantChildren.size - 1) * s
      , h = a === 1 ? (p=0) => p * s : (p=0) => d - p * s;
    return Array.from(e.variantChildren).sort(hk).forEach( (p, g) => {
        p.notify("AnimationStart", n),
        c.push(Oc(p, n, {
            ...u,
            delay: i + h(g)
        }).then( () => p.notify("AnimationComplete", n)))
    }
    ),
    Promise.all(c)
}
function hk(e, n) {
    return e.sortNodePosition(n)
}
function pk(e, n, i={}) {
    e.notify("AnimationStart", n);
    let s;
    if (Array.isArray(n)) {
        const a = n.map(u => Oc(e, u, i));
        s = Promise.all(a)
    } else if (typeof n == "string")
        s = Oc(e, n, i);
    else {
        const a = typeof n == "function" ? Na(e, n, i.custom) : n;
        s = Promise.all(W0(e, a, i))
    }
    return s.then( () => {
        e.notify("AnimationComplete", n)
    }
    )
}
const mk = lf.length;
function $0(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const i = e.parent ? $0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (i.initial = e.props.initial),
        i
    }
    const n = {};
    for (let i = 0; i < mk; i++) {
        const s = lf[i]
          , a = e.props[s];
        (ao(a) || a === !1) && (n[s] = a)
    }
    return n
}
const gk = [...af].reverse()
  , yk = af.length;
function vk(e) {
    return n => Promise.all(n.map( ({animation: i, options: s}) => pk(e, i, s)))
}
function wk(e) {
    let n = vk(e)
      , i = Qm()
      , s = !0;
    const a = h => (p, g) => {
        var y;
        const v = Na(e, g, h === "exit" ? (y = e.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (v) {
            const {transition: x, transitionEnd: S, ...E} = v;
            p = {
                ...p,
                ...E,
                ...S
            }
        }
        return p
    }
    ;
    function u(h) {
        n = h(e)
    }
    function c(h) {
        const {props: p} = e
          , g = $0(e.parent) || {}
          , y = []
          , v = new Set;
        let x = {}
          , S = 1 / 0;
        for (let P = 0; P < yk; P++) {
            const T = gk[P]
              , R = i[T]
              , A = p[T] !== void 0 ? p[T] : g[T]
              , N = ao(A)
              , D = T === h ? R.isActive : null;
            D === !1 && (S = P);
            let V = A === g[T] && A !== p[T] && N;
            if (V && s && e.manuallyAnimateOnMount && (V = !1),
            R.protectedKeys = {
                ...x
            },
            !R.isActive && D === null || !A && !R.prevProp || Oa(A) || typeof A == "boolean")
                continue;
            const F = xk(R.prevProp, A);
            let H = F || T === h && R.isActive && !V && N || P > S && N
              , Y = !1;
            const K = Array.isArray(A) ? A : [A];
            let $ = K.reduce(a(T), {});
            D === !1 && ($ = {});
            const {prevResolvedValues: L={}} = R
              , X = {
                ...L,
                ...$
            }
              , B = te => {
                H = !0,
                v.has(te) && (Y = !0,
                v.delete(te)),
                R.needsAnimating[te] = !0;
                const U = e.getValue(te);
                U && (U.liveStyle = !1)
            }
            ;
            for (const te in X) {
                const U = $[te]
                  , ee = L[te];
                if (x.hasOwnProperty(te))
                    continue;
                let Z = !1;
                Sc(U) && Sc(ee) ? Z = !i0(U, ee) : Z = U !== ee,
                Z ? U != null ? B(te) : v.add(te) : U !== void 0 && v.has(te) ? B(te) : R.protectedKeys[te] = !0
            }
            R.prevProp = A,
            R.prevResolvedValues = $,
            R.isActive && (x = {
                ...x,
                ...$
            }),
            s && e.blockInitialAnimation && (H = !1),
            H && (!(V && F) || Y) && y.push(...K.map(te => ({
                animation: te,
                options: {
                    type: T
                }
            })))
        }
        if (v.size) {
            const P = {};
            v.forEach(T => {
                const R = e.getBaseTarget(T)
                  , A = e.getValue(T);
                A && (A.liveStyle = !0),
                P[T] = R ?? null
            }
            ),
            y.push({
                animation: P
            })
        }
        let E = !!y.length;
        return s && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (E = !1),
        s = !1,
        E ? n(y) : Promise.resolve()
    }
    function d(h, p) {
        var g;
        if (i[h].isActive === p)
            return Promise.resolve();
        (g = e.variantChildren) === null || g === void 0 || g.forEach(v => {
            var x;
            return (x = v.animationState) === null || x === void 0 ? void 0 : x.setActive(h, p)
        }
        ),
        i[h].isActive = p;
        const y = c(h);
        for (const v in i)
            i[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: d,
        setAnimateFunction: u,
        getState: () => i,
        reset: () => {
            i = Qm(),
            s = !0
        }
    }
}
function xk(e, n) {
    return typeof n == "string" ? n !== e : Array.isArray(n) ? !i0(n, e) : !1
}
function sr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Qm() {
    return {
        animate: sr(!0),
        whileInView: sr(),
        whileHover: sr(),
        whileTap: sr(),
        whileDrag: sr(),
        whileFocus: sr(),
        exit: sr()
    }
}
class Kn {
    constructor(n) {
        this.isMounted = !1,
        this.node = n
    }
    update() {}
}
class Sk extends Kn {
    constructor(n) {
        super(n),
        n.animationState || (n.animationState = wk(n))
    }
    updateAnimationControlsSubscription() {
        const {animate: n} = this.node.getProps();
        Oa(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: n} = this.node.getProps()
          , {animate: i} = this.node.prevProps || {};
        n !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var n;
        this.node.animationState.reset(),
        (n = this.unmountControls) === null || n === void 0 || n.call(this)
    }
}
let Ek = 0;
class Pk extends Kn {
    constructor() {
        super(...arguments),
        this.id = Ek++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: n, onExitComplete: i} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === s)
            return;
        const a = this.node.animationState.setActive("exit", !n);
        i && !n && a.then( () => i(this.id))
    }
    mount() {
        const {register: n} = this.node.presenceContext || {};
        n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const Tk = {
    animation: {
        Feature: Sk
    },
    exit: {
        Feature: Pk
    }
};
function fo(e, n, i, s={
    passive: !0
}) {
    return e.addEventListener(n, i, s),
    () => e.removeEventListener(n, i)
}
function vo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Ck = e => n => Pf(n) && e(n, vo(n));
function eo(e, n, i, s) {
    return fo(e, n, Ck(i), s)
}
const Gm = (e, n) => Math.abs(e - n);
function bk(e, n) {
    const i = Gm(e.x, n.x)
      , s = Gm(e.y, n.y);
    return Math.sqrt(i ** 2 + s ** 2)
}
class K0 {
    constructor(n, i, {transformPagePoint: s, contextWindow: a, dragSnapToOrigin: u=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = Ju(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , x = bk(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!v && !x)
                return;
            const {point: S} = y
              , {timestamp: E} = Xe;
            this.history.push({
                ...S,
                timestamp: E
            });
            const {onStart: P, onMove: T} = this.handlers;
            v || (P && P(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            T && T(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, v) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Zu(v, this.transformPagePoint),
            Ae.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, v) => {
            this.end();
            const {onEnd: x, onSessionEnd: S, resumeAnimation: E} = this.handlers;
            if (this.dragSnapToOrigin && E && E(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const P = Ju(y.type === "pointercancel" ? this.lastMoveEventInfo : Zu(v, this.transformPagePoint), this.history);
            this.startEvent && x && x(y, P),
            S && S(y, P)
        }
        ,
        !Pf(n))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = i,
        this.transformPagePoint = s,
        this.contextWindow = a || window;
        const c = vo(n)
          , d = Zu(c, this.transformPagePoint)
          , {point: h} = d
          , {timestamp: p} = Xe;
        this.history = [{
            ...h,
            timestamp: p
        }];
        const {onSessionStart: g} = i;
        g && g(n, Ju(d, this.history)),
        this.removeListeners = yo(eo(this.contextWindow, "pointermove", this.handlePointerMove), eo(this.contextWindow, "pointerup", this.handlePointerUp), eo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Wn(this.updatePoint)
    }
}
function Zu(e, n) {
    return n ? {
        point: n(e.point)
    } : e
}
function Ym(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}
function Ju({point: e}, n) {
    return {
        point: e,
        delta: Ym(e, q0(n)),
        offset: Ym(e, kk(n)),
        velocity: Rk(n, .1)
    }
}
function kk(e) {
    return e[0]
}
function q0(e) {
    return e[e.length - 1]
}
function Rk(e, n) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = e.length - 1
      , s = null;
    const a = q0(e);
    for (; i >= 0 && (s = e[i],
    !(a.timestamp - s.timestamp > dn(n))); )
        i--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const u = hn(a.timestamp - s.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - s.x) / u,
        y: (a.y - s.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const Q0 = 1e-4
  , Ak = 1 - Q0
  , _k = 1 + Q0
  , G0 = .01
  , Ok = 0 - G0
  , Mk = 0 + G0;
function St(e) {
    return e.max - e.min
}
function Nk(e, n, i) {
    return Math.abs(e - n) <= i
}
function Xm(e, n, i, s=.5) {
    e.origin = s,
    e.originPoint = je(n.min, n.max, e.origin),
    e.scale = St(i) / St(n),
    e.translate = je(i.min, i.max, e.origin) - e.originPoint,
    (e.scale >= Ak && e.scale <= _k || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= Ok && e.translate <= Mk || isNaN(e.translate)) && (e.translate = 0)
}
function to(e, n, i, s) {
    Xm(e.x, n.x, i.x, s ? s.originX : void 0),
    Xm(e.y, n.y, i.y, s ? s.originY : void 0)
}
function Zm(e, n, i) {
    e.min = i.min + n.min,
    e.max = e.min + St(n)
}
function Dk(e, n, i) {
    Zm(e.x, n.x, i.x),
    Zm(e.y, n.y, i.y)
}
function Jm(e, n, i) {
    e.min = n.min - i.min,
    e.max = e.min + St(n)
}
function no(e, n, i) {
    Jm(e.x, n.x, i.x),
    Jm(e.y, n.y, i.y)
}
function Lk(e, {min: n, max: i}, s) {
    return n !== void 0 && e < n ? e = s ? je(n, e, s.min) : Math.max(e, n) : i !== void 0 && e > i && (e = s ? je(i, e, s.max) : Math.min(e, i)),
    e
}
function eg(e, n, i) {
    return {
        min: n !== void 0 ? e.min + n : void 0,
        max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
    }
}
function jk(e, {top: n, left: i, bottom: s, right: a}) {
    return {
        x: eg(e.x, i, a),
        y: eg(e.y, n, s)
    }
}
function tg(e, n) {
    let i = n.min - e.min
      , s = n.max - e.max;
    return n.max - n.min < e.max - e.min && ([i,s] = [s, i]),
    {
        min: i,
        max: s
    }
}
function Ik(e, n) {
    return {
        x: tg(e.x, n.x),
        y: tg(e.y, n.y)
    }
}
function Fk(e, n) {
    let i = .5;
    const s = St(e)
      , a = St(n);
    return a > s ? i = Xr(n.min, n.max - s, e.min) : s > a && (i = Xr(e.min, e.max - a, n.min)),
    gn(0, 1, i)
}
function Vk(e, n) {
    const i = {};
    return n.min !== void 0 && (i.min = n.min - e.min),
    n.max !== void 0 && (i.max = n.max - e.min),
    i
}
const Mc = .35;
function zk(e=Mc) {
    return e === !1 ? e = 0 : e === !0 && (e = Mc),
    {
        x: ng(e, "left", "right"),
        y: ng(e, "top", "bottom")
    }
}
function ng(e, n, i) {
    return {
        min: rg(e, n),
        max: rg(e, i)
    }
}
function rg(e, n) {
    return typeof e == "number" ? e : e[n] || 0
}
const ig = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Wr = () => ({
    x: ig(),
    y: ig()
})
  , og = () => ({
    min: 0,
    max: 0
})
  , Be = () => ({
    x: og(),
    y: og()
});
function _t(e) {
    return [e("x"), e("y")]
}
function Y0({top: e, left: n, right: i, bottom: s}) {
    return {
        x: {
            min: n,
            max: i
        },
        y: {
            min: e,
            max: s
        }
    }
}
function Bk({x: e, y: n}) {
    return {
        top: n.min,
        right: e.max,
        bottom: n.max,
        left: e.min
    }
}
function Uk(e, n) {
    if (!n)
        return e;
    const i = n({
        x: e.left,
        y: e.top
    })
      , s = n({
        x: e.right,
        y: e.bottom
    });
    return {
        top: i.y,
        left: i.x,
        bottom: s.y,
        right: s.x
    }
}
function ec(e) {
    return e === void 0 || e === 1
}
function Nc({scale: e, scaleX: n, scaleY: i}) {
    return !ec(e) || !ec(n) || !ec(i)
}
function ar(e) {
    return Nc(e) || X0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function X0(e) {
    return sg(e.x) || sg(e.y)
}
function sg(e) {
    return e && e !== "0%"
}
function ma(e, n, i) {
    const s = e - i
      , a = n * s;
    return i + a
}
function ag(e, n, i, s, a) {
    return a !== void 0 && (e = ma(e, a, s)),
    ma(e, i, s) + n
}
function Dc(e, n=0, i=1, s, a) {
    e.min = ag(e.min, n, i, s, a),
    e.max = ag(e.max, n, i, s, a)
}
function Z0(e, {x: n, y: i}) {
    Dc(e.x, n.translate, n.scale, n.originPoint),
    Dc(e.y, i.translate, i.scale, i.originPoint)
}
const lg = .999999999999
  , ug = 1.0000000000001;
function Hk(e, n, i, s=!1) {
    const a = i.length;
    if (!a)
        return;
    n.x = n.y = 1;
    let u, c;
    for (let d = 0; d < a; d++) {
        u = i[d],
        c = u.projectionDelta;
        const {visualElement: h} = u.options;
        h && h.props.style && h.props.style.display === "contents" || (s && u.options.layoutScroll && u.scroll && u !== u.root && Kr(e, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }),
        c && (n.x *= c.x.scale,
        n.y *= c.y.scale,
        Z0(e, c)),
        s && ar(u.latestValues) && Kr(e, u.latestValues))
    }
    n.x < ug && n.x > lg && (n.x = 1),
    n.y < ug && n.y > lg && (n.y = 1)
}
function $r(e, n) {
    e.min = e.min + n,
    e.max = e.max + n
}
function cg(e, n, i, s, a=.5) {
    const u = je(e.min, e.max, a);
    Dc(e, n, i, u, s)
}
function Kr(e, n) {
    cg(e.x, n.x, n.scaleX, n.scale, n.originX),
    cg(e.y, n.y, n.scaleY, n.scale, n.originY)
}
function J0(e, n) {
    return Y0(Uk(e.getBoundingClientRect(), n))
}
function Wk(e, n, i) {
    const s = J0(e, i)
      , {scroll: a} = n;
    return a && ($r(s.x, a.offset.x),
    $r(s.y, a.offset.y)),
    s
}
const ew = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , $k = new WeakMap;
class Kk {
    constructor(n) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Be(),
        this.visualElement = n
    }
    start(n, {snapToCursor: i=!1}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(vo(g).point)
        }
          , u = (g, y) => {
            const {drag: v, dragPropagation: x, onDragStart: S} = this.getProps();
            if (v && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = FC(v),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            _t(P => {
                let T = this.getAxisMotionValue(P).get() || 0;
                if (Gt.test(T)) {
                    const {projection: R} = this.visualElement;
                    if (R && R.layout) {
                        const A = R.layout.layoutBox[P];
                        A && (T = St(A) * (parseFloat(T) / 100))
                    }
                }
                this.originPoint[P] = T
            }
            ),
            S && Ae.postRender( () => S(g, y)),
            Tc(this.visualElement, "transform");
            const {animationState: E} = this.visualElement;
            E && E.setActive("whileDrag", !0)
        }
          , c = (g, y) => {
            const {dragPropagation: v, dragDirectionLock: x, onDirectionLock: S, onDrag: E} = this.getProps();
            if (!v && !this.openDragLock)
                return;
            const {offset: P} = y;
            if (x && this.currentDirection === null) {
                this.currentDirection = qk(P),
                this.currentDirection !== null && S && S(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, P),
            this.updateAxis("y", y.point, P),
            this.visualElement.render(),
            E && E(g, y)
        }
          , d = (g, y) => this.stop(g, y)
          , h = () => _t(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new K0(n,{
            onSessionStart: a,
            onStart: u,
            onMove: c,
            onSessionEnd: d,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: ew(this.visualElement)
        })
    }
    stop(n, i) {
        const s = this.isDragging;
        if (this.cancel(),
        !s)
            return;
        const {velocity: a} = i;
        this.startAnimation(a);
        const {onDragEnd: u} = this.getProps();
        u && Ae.postRender( () => u(n, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: n, animationState: i} = this.visualElement;
        n && (n.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        i && i.setActive("whileDrag", !1)
    }
    updateAxis(n, i, s) {
        const {drag: a} = this.getProps();
        if (!s || !Ls(n, a, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(n);
        let c = this.originPoint[n] + s[n];
        this.constraints && this.constraints[n] && (c = Lk(c, this.constraints[n], this.elastic[n])),
        u.set(c)
    }
    resolveConstraints() {
        var n;
        const {dragConstraints: i, dragElastic: s} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout
          , u = this.constraints;
        i && Ur(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = jk(a.layoutBox, i) : this.constraints = !1,
        this.elastic = zk(s),
        u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && _t(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = Vk(a.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: n, onMeasureDragConstraints: i} = this.getProps();
        if (!n || !Ur(n))
            return !1;
        const s = n.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const u = Wk(s, a.root, this.visualElement.getTransformPagePoint());
        let c = Ik(a.layout.layoutBox, u);
        if (i) {
            const d = i(Bk(c));
            this.hasMutatedConstraints = !!d,
            d && (c = Y0(d))
        }
        return c
    }
    startAnimation(n) {
        const {drag: i, dragMomentum: s, dragElastic: a, dragTransition: u, dragSnapToOrigin: c, onDragTransitionEnd: d} = this.getProps()
          , h = this.constraints || {}
          , p = _t(g => {
            if (!Ls(g, i, this.currentDirection))
                return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const v = a ? 200 : 1e6
              , x = a ? 40 : 1e7
              , S = {
                type: "inertia",
                velocity: s ? n[g] : 0,
                bounceStiffness: v,
                bounceDamping: x,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...y
            };
            return this.startAxisValueAnimation(g, S)
        }
        );
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(n, i) {
        const s = this.getAxisMotionValue(n);
        return Tc(this.visualElement, n),
        s.start(Lf(n, s, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        _t(n => this.getAxisMotionValue(n).stop())
    }
    pauseAnimation() {
        _t(n => {
            var i;
            return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.pause()
        }
        )
    }
    getAnimationState(n) {
        var i;
        return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.state
    }
    getAxisMotionValue(n) {
        const i = `_drag${n.toUpperCase()}`
          , s = this.visualElement.getProps()
          , a = s[i];
        return a || this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        _t(i => {
            const {drag: s} = this.getProps();
            if (!Ls(i, s, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , u = this.getAxisMotionValue(i);
            if (a && a.layout) {
                const {min: c, max: d} = a.layout.layoutBox[i];
                u.set(n[i] - je(c, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: n, dragConstraints: i} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!Ur(i) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        _t(c => {
            const d = this.getAxisMotionValue(c);
            if (d && this.constraints !== !1) {
                const h = d.get();
                a[c] = Fk({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        _t(c => {
            if (!Ls(c, n, null))
                return;
            const d = this.getAxisMotionValue(c)
              , {min: h, max: p} = this.constraints[c];
            d.set(je(h, p, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        $k.set(this.visualElement, this);
        const n = this.visualElement.current
          , i = eo(n, "pointerdown", h => {
            const {drag: p, dragListener: g=!0} = this.getProps();
            p && g && this.start(h)
        }
        )
          , s = () => {
            const {dragConstraints: h} = this.getProps();
            Ur(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , u = a.addEventListener("measure", s);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Ae.read(s);
        const c = fo(window, "resize", () => this.scalePositionWithinConstraints())
          , d = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: p}) => {
            this.isDragging && p && (_t(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            c(),
            i(),
            u(),
            d && d()
        }
    }
    getProps() {
        const n = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: s=!1, dragPropagation: a=!1, dragConstraints: u=!1, dragElastic: c=Mc, dragMomentum: d=!0} = n;
        return {
            ...n,
            drag: i,
            dragDirectionLock: s,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: d
        }
    }
}
function Ls(e, n, i) {
    return (n === !0 || n === e) && (i === null || i === e)
}
function qk(e, n=10) {
    let i = null;
    return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"),
    i
}
class Qk extends Kn {
    constructor(n) {
        super(n),
        this.removeGroupControls = xt,
        this.removeListeners = xt,
        this.controls = new Kk(n)
    }
    mount() {
        const {dragControls: n} = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || xt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const fg = e => (n, i) => {
    e && Ae.postRender( () => e(n, i))
}
;
class Gk extends Kn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = xt
    }
    onPointerDown(n) {
        this.session = new K0(n,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ew(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: n, onPanStart: i, onPan: s, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: fg(n),
            onStart: fg(i),
            onMove: s,
            onEnd: (u, c) => {
                delete this.session,
                a && Ae.postRender( () => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = eo(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ta = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function dg(e, n) {
    return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const qi = {
    correct: (e, n) => {
        if (!n.target)
            return e;
        if (typeof e == "string")
            if (he.test(e))
                e = parseFloat(e);
            else
                return e;
        const i = dg(e, n.target.x)
          , s = dg(e, n.target.y);
        return `${i}% ${s}%`
    }
}
  , Yk = {
    correct: (e, {treeScale: n, projectionDelta: i}) => {
        const s = e
          , a = $n.parse(e);
        if (a.length > 5)
            return s;
        const u = $n.createTransformer(e)
          , c = typeof a[0] != "number" ? 1 : 0
          , d = i.x.scale * n.x
          , h = i.y.scale * n.y;
        a[0 + c] /= d,
        a[1 + c] /= h;
        const p = je(d, h, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= p),
        typeof a[3 + c] == "number" && (a[3 + c] /= p),
        u(a)
    }
};
class Xk extends k.Component {
    componentDidMount() {
        const {visualElement: n, layoutGroup: i, switchLayoutGroup: s, layoutId: a} = this.props
          , {projection: u} = n;
        yC(Zk),
        u && (i.group && i.group.add(u),
        s && s.register && a && s.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ta.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {layoutDependency: i, visualElement: s, drag: a, isPresent: u} = this.props
          , c = s.projection;
        return c && (c.isPresent = u,
        a || n.layoutDependency !== i || i === void 0 ? c.willUpdate() : this.safeToRemove(),
        n.isPresent !== u && (u ? c.promote() : c.relegate() || Ae.postRender( () => {
            const d = c.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: n} = this.props.visualElement;
        n && (n.root.didUpdate(),
        cf.postRender( () => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: n, layoutGroup: i, switchLayoutGroup: s} = this.props
          , {projection: a} = n;
        a && (a.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(a),
        s && s.deregister && s.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: n} = this.props;
        n && n()
    }
    render() {
        return null
    }
}
function tw(e) {
    const [n,i] = MT()
      , s = k.useContext(Iv);
    return b.jsx(Xk, {
        ...e,
        layoutGroup: s,
        switchLayoutGroup: k.useContext($v),
        isPresent: n,
        safeToRemove: i
    })
}
const Zk = {
    borderRadius: {
        ...qi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: qi,
    borderTopRightRadius: qi,
    borderBottomLeftRadius: qi,
    borderBottomRightRadius: qi,
    boxShadow: Yk
};
function Jk(e, n, i) {
    const s = rt(e) ? e : uo(e);
    return s.start(Lf("", s, n, i)),
    s.animation
}
function eR(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const tR = (e, n) => e.depth - n.depth;
class nR {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(n) {
        Tf(this.children, n),
        this.isDirty = !0
    }
    remove(n) {
        Cf(this.children, n),
        this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(tR),
        this.isDirty = !1,
        this.children.forEach(n)
    }
}
function rR(e, n) {
    const i = Yt.now()
      , s = ({timestamp: a}) => {
        const u = a - i;
        u >= n && (Wn(s),
        e(u - n))
    }
    ;
    return Ae.read(s, !0),
    () => Wn(s)
}
const nw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , iR = nw.length
  , hg = e => typeof e == "string" ? parseFloat(e) : e
  , pg = e => typeof e == "number" || he.test(e);
function oR(e, n, i, s, a, u) {
    a ? (e.opacity = je(0, i.opacity !== void 0 ? i.opacity : 1, sR(s)),
    e.opacityExit = je(n.opacity !== void 0 ? n.opacity : 1, 0, aR(s))) : u && (e.opacity = je(n.opacity !== void 0 ? n.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, s));
    for (let c = 0; c < iR; c++) {
        const d = `border${nw[c]}Radius`;
        let h = mg(n, d)
          , p = mg(i, d);
        if (h === void 0 && p === void 0)
            continue;
        h || (h = 0),
        p || (p = 0),
        h === 0 || p === 0 || pg(h) === pg(p) ? (e[d] = Math.max(je(hg(h), hg(p), s), 0),
        (Gt.test(p) || Gt.test(h)) && (e[d] += "%")) : e[d] = p
    }
    (n.rotate || i.rotate) && (e.rotate = je(n.rotate || 0, i.rotate || 0, s))
}
function mg(e, n) {
    return e[n] !== void 0 ? e[n] : e.borderRadius
}
const sR = rw(0, .5, S0)
  , aR = rw(.5, .95, xt);
function rw(e, n, i) {
    return s => s < e ? 0 : s > n ? 1 : i(Xr(e, n, s))
}
function gg(e, n) {
    e.min = n.min,
    e.max = n.max
}
function At(e, n) {
    gg(e.x, n.x),
    gg(e.y, n.y)
}
function yg(e, n) {
    e.translate = n.translate,
    e.scale = n.scale,
    e.originPoint = n.originPoint,
    e.origin = n.origin
}
function vg(e, n, i, s, a) {
    return e -= n,
    e = ma(e, 1 / i, s),
    a !== void 0 && (e = ma(e, 1 / a, s)),
    e
}
function lR(e, n=0, i=1, s=.5, a, u=e, c=e) {
    if (Gt.test(n) && (n = parseFloat(n),
    n = je(c.min, c.max, n / 100) - c.min),
    typeof n != "number")
        return;
    let d = je(u.min, u.max, s);
    e === u && (d -= n),
    e.min = vg(e.min, n, i, d, a),
    e.max = vg(e.max, n, i, d, a)
}
function wg(e, n, [i,s,a], u, c) {
    lR(e, n[i], n[s], n[a], n.scale, u, c)
}
const uR = ["x", "scaleX", "originX"]
  , cR = ["y", "scaleY", "originY"];
function xg(e, n, i, s) {
    wg(e.x, n, uR, i ? i.x : void 0, s ? s.x : void 0),
    wg(e.y, n, cR, i ? i.y : void 0, s ? s.y : void 0)
}
function Sg(e) {
    return e.translate === 0 && e.scale === 1
}
function iw(e) {
    return Sg(e.x) && Sg(e.y)
}
function Eg(e, n) {
    return e.min === n.min && e.max === n.max
}
function fR(e, n) {
    return Eg(e.x, n.x) && Eg(e.y, n.y)
}
function Pg(e, n) {
    return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}
function ow(e, n) {
    return Pg(e.x, n.x) && Pg(e.y, n.y)
}
function Tg(e) {
    return St(e.x) / St(e.y)
}
function Cg(e, n) {
    return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}
class dR {
    constructor() {
        this.members = []
    }
    add(n) {
        Tf(this.members, n),
        n.scheduleRender()
    }
    remove(n) {
        if (Cf(this.members, n),
        n === this.prevLead && (this.prevLead = void 0),
        n === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(n) {
        const i = this.members.findIndex(a => n === a);
        if (i === 0)
            return !1;
        let s;
        for (let a = i; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                s = u;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(n, i) {
        const s = this.lead;
        if (n !== s && (this.prevLead = s,
        this.lead = n,
        n.show(),
        s)) {
            s.instance && s.scheduleRender(),
            n.scheduleRender(),
            n.resumeFrom = s,
            i && (n.resumeFrom.preserveOpacity = !0),
            s.snapshot && (n.snapshot = s.snapshot,
            n.snapshot.latestValues = s.animationValues || s.latestValues),
            n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
            const {crossfade: a} = n.options;
            a === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            const {options: i, resumingFrom: s} = n;
            i.onExitComplete && i.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(n => {
            n.instance && n.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function hR(e, n, i) {
    let s = "";
    const a = e.x.translate / n.x
      , u = e.y.translate / n.y
      , c = i?.z || 0;
    if ((a || u || c) && (s = `translate3d(${a}px, ${u}px, ${c}px) `),
    (n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `),
    i) {
        const {transformPerspective: p, rotate: g, rotateX: y, rotateY: v, skewX: x, skewY: S} = i;
        p && (s = `perspective(${p}px) ${s}`),
        g && (s += `rotate(${g}deg) `),
        y && (s += `rotateX(${y}deg) `),
        v && (s += `rotateY(${v}deg) `),
        x && (s += `skewX(${x}deg) `),
        S && (s += `skewY(${S}deg) `)
    }
    const d = e.x.scale * n.x
      , h = e.y.scale * n.y;
    return (d !== 1 || h !== 1) && (s += `scale(${d}, ${h})`),
    s || "none"
}
const lr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Xi = typeof window < "u" && window.MotionDebug !== void 0
  , tc = ["", "X", "Y", "Z"]
  , pR = {
    visibility: "hidden"
}
  , bg = 1e3;
let mR = 0;
function nc(e, n, i, s) {
    const {latestValues: a} = n;
    a[e] && (i[e] = a[e],
    n.setStaticValue(e, 0),
    s && (s[e] = 0))
}
function sw(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: n} = e.options;
    if (!n)
        return;
    const i = p0(n);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {layout: a, layoutId: u} = e.options;
        window.MotionCancelOptimisedAnimation(i, "transform", Ae, !(a || u))
    }
    const {parent: s} = e;
    s && !s.hasCheckedOptimisedAppear && sw(s)
}
function aw({attachResizeListener: e, defaultParent: n, measureScroll: i, checkIsScrollRoot: s, resetTransform: a}) {
    return class {
        constructor(c={}, d=n?.()) {
            this.id = mR++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Xi && (lr.totalNodes = lr.resolvedTargetDeltas = lr.recalculatedProjection = 0),
                this.nodes.forEach(vR),
                this.nodes.forEach(PR),
                this.nodes.forEach(TR),
                this.nodes.forEach(wR),
                Xi && window.MotionDebug.record(lr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nR)
        }
        addEventListener(c, d) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new bf),
            this.eventHandlers.get(c).add(d)
        }
        notifyListeners(c, ...d) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...d)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = eR(c),
            this.instance = c;
            const {layoutId: h, layout: p, visualElement: g} = this.options;
            if (g && !g.current && g.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (p || h) && (this.isLayoutDirty = !0),
            e) {
                let y;
                const v = () => this.root.updateBlockedByResize = !1;
                e(c, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = rR(v, 250),
                    ta.hasAnimatedSinceResize && (ta.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Rg))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: v, hasRelativeTargetChanged: x, layout: S}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || g.getDefaultTransition() || AR
                  , {onLayoutAnimationStart: P, onLayoutAnimationComplete: T} = g.getProps()
                  , R = !this.targetLayout || !ow(this.targetLayout, S) || x
                  , A = !v && x;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || A || v && (R || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, A);
                    const N = {
                        ...xf(E, "layout"),
                        onPlay: P,
                        onComplete: T
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0,
                    N.type = !1),
                    this.startAnimation(N)
                } else
                    v || Rg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = S
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Wn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(CR),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sw(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: h} = this.options;
            if (d === void 0 && !h)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(kg);
                return
            }
            this.isUpdating || this.nodes.forEach(SR),
            this.isUpdating = !1,
            this.nodes.forEach(ER),
            this.nodes.forEach(gR),
            this.nodes.forEach(yR),
            this.clearAllSnapshots();
            const d = Yt.now();
            Xe.delta = gn(0, 1e3 / 60, d - Xe.timestamp),
            Xe.timestamp = d,
            Xe.isProcessing = !0,
            Ku.update.process(Xe),
            Ku.preRender.process(Xe),
            Ku.render.process(Xe),
            Xe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            cf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(xR),
            this.sharedNodes.forEach(bR)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ae.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ae.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Be(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1),
            d) {
                const h = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !iw(this.projectionDelta)
              , h = this.getTransformTemplate()
              , p = h ? h(this.latestValues, "") : void 0
              , g = p !== this.prevTransformTemplateValue;
            c && (d || ar(this.latestValues) || g) && (a(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return c && (h = this.removeTransform(h)),
            _R(h),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: d} = this.options;
            if (!d)
                return Be();
            const h = d.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(OR))) {
                const {scroll: g} = this.root;
                g && ($r(h.x, g.offset.x),
                $r(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var d;
            const h = Be();
            if (At(h, c),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return h;
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p]
                  , {scroll: y, options: v} = g;
                g !== this.root && y && v.layoutScroll && (y.wasRoot && At(h, c),
                $r(h.x, y.offset.x),
                $r(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, d=!1) {
            const h = Be();
            At(h, c);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Kr(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                ar(g.latestValues) && Kr(h, g.latestValues)
            }
            return ar(this.latestValues) && Kr(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const d = Be();
            At(d, c);
            for (let h = 0; h < this.path.length; h++) {
                const p = this.path[h];
                if (!p.instance || !ar(p.latestValues))
                    continue;
                Nc(p.latestValues) && p.updateSnapshot();
                const g = Be()
                  , y = p.measurePageBox();
                At(g, y),
                xg(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g)
            }
            return ar(this.latestValues) && xg(d, this.latestValues),
            d
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(c || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: v} = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = Xe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const x = this.getClosestProjectingParent();
                    x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Be(),
                    this.relativeTargetOrigin = Be(),
                    no(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox),
                    At(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Be(),
                    this.targetWithTransforms = Be()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    Dk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : At(this.target, this.layout.layoutBox),
                    Z0(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const x = this.getClosestProjectingParent();
                        x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Be(),
                        this.relativeTargetOrigin = Be(),
                        no(this.relativeTargetOrigin, this.target, x.target),
                        At(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Xi && lr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Nc(this.parent.latestValues) || X0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (p = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === Xe.timestamp && (p = !1),
            p)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            At(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , x = this.treeScale.y;
            Hk(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Be());
            const {target: S} = d;
            if (!S) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (yg(this.prevProjectionDelta.x, this.projectionDelta.x),
            yg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            to(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== x || !Cg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", S)),
            Xi && lr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Wr(),
            this.projectionDelta = Wr(),
            this.projectionDeltaWithTransform = Wr()
        }
        setAnimationOrigin(c, d=!1) {
            const h = this.snapshot
              , p = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Wr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const v = Be()
              , x = h ? h.source : void 0
              , S = this.layout ? this.layout.source : void 0
              , E = x !== S
              , P = this.getStack()
              , T = !P || P.members.length <= 1
              , R = !!(E && !T && this.options.crossfade === !0 && !this.path.some(RR));
            this.animationProgress = 0;
            let A;
            this.mixTargetDelta = N => {
                const D = N / 1e3;
                Ag(y.x, c.x, D),
                Ag(y.y, c.y, D),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (no(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                kR(this.relativeTarget, this.relativeTargetOrigin, v, D),
                A && fR(this.relativeTarget, A) && (this.isProjectionDirty = !1),
                A || (A = Be()),
                At(A, this.relativeTarget)),
                E && (this.animationValues = g,
                oR(g, p, this.latestValues, D, R, T)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = D
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Wn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ae.update( () => {
                ta.hasAnimatedSinceResize = !0,
                this.currentAnimation = Jk(0, bg, {
                    ...c,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        c.onUpdate && c.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bg),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: d, target: h, layout: p, latestValues: g} = c;
            if (!(!d || !h || !p)) {
                if (this !== c && this.layout && p && lw(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    h = this.target || Be();
                    const y = St(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const v = St(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + v
                }
                At(d, h),
                Kr(d, g),
                to(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(c, d) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new dR),
            this.sharedNodes.get(c).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: d, preserveFollowOpacity: h}={}) {
            const p = this.getStack();
            p && p.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let d = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0),
            !d)
                return;
            const p = {};
            h.z && nc("z", c, p, this.animationValues);
            for (let g = 0; g < tc.length; g++)
                nc(`rotate${tc[g]}`, c, p, this.animationValues),
                nc(`skew${tc[g]}`, c, p, this.animationValues);
            c.render();
            for (const g in p)
                c.setStaticValue(g, p[g]),
                this.animationValues && (this.animationValues[g] = p[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var d, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return pR;
            const p = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = Js(c?.pointerEvents) || "",
                p.transform = g ? g(this.latestValues, "") : "none",
                p;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const E = {};
                return this.options.layoutId && (E.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                E.pointerEvents = Js(c?.pointerEvents) || ""),
                this.hasProjected && !ar(this.latestValues) && (E.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                E
            }
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            p.transform = hR(this.projectionDeltaWithTransform, this.treeScale, v),
            g && (p.transform = g(v, p.transform));
            const {x, y: S} = this.projectionDelta;
            p.transformOrigin = `${x.origin * 100}% ${S.origin * 100}% 0`,
            y.animationValues ? p.opacity = y === this ? (h = (d = v.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : p.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const E in ca) {
                if (v[E] === void 0)
                    continue;
                const {correct: P, applyTo: T} = ca[E]
                  , R = p.transform === "none" ? v[E] : P(v[E], y);
                if (T) {
                    const A = T.length;
                    for (let N = 0; N < A; N++)
                        p[T[N]] = R
                } else
                    p[E] = R
            }
            return this.options.layoutId && (p.pointerEvents = y === this ? Js(c?.pointerEvents) || "" : "none"),
            p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var d;
                return (d = c.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(kg),
            this.root.sharedNodes.clear()
        }
    }
}
function gR(e) {
    e.updateLayout()
}
function yR(e) {
    var n;
    const i = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: a} = e.layout
          , {animationType: u} = e.options
          , c = i.source !== e.layout.source;
        u === "size" ? _t(y => {
            const v = c ? i.measuredBox[y] : i.layoutBox[y]
              , x = St(v);
            v.min = s[y].min,
            v.max = v.min + x
        }
        ) : lw(u, i.layoutBox, s) && _t(y => {
            const v = c ? i.measuredBox[y] : i.layoutBox[y]
              , x = St(s[y]);
            v.max = v.min + x,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[y].max = e.relativeTarget[y].min + x)
        }
        );
        const d = Wr();
        to(d, s, i.layoutBox);
        const h = Wr();
        c ? to(h, e.applyTransform(a, !0), i.measuredBox) : to(h, s, i.layoutBox);
        const p = !iw(d);
        let g = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: v, layout: x} = y;
                if (v && x) {
                    const S = Be();
                    no(S, i.layoutBox, v.layoutBox);
                    const E = Be();
                    no(E, s, x.layoutBox),
                    ow(S, E) || (g = !0),
                    y.options.layoutRoot && (e.relativeTarget = E,
                    e.relativeTargetOrigin = S,
                    e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: g
        })
    } else if (e.isLead()) {
        const {onExitComplete: s} = e.options;
        s && s()
    }
    e.options.transition = void 0
}
function vR(e) {
    Xi && lr.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function wR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function xR(e) {
    e.clearSnapshot()
}
function kg(e) {
    e.clearMeasurements()
}
function SR(e) {
    e.isLayoutDirty = !1
}
function ER(e) {
    const {visualElement: n} = e.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Rg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function PR(e) {
    e.resolveTargetDelta()
}
function TR(e) {
    e.calcProjection()
}
function CR(e) {
    e.resetSkewAndRotation()
}
function bR(e) {
    e.removeLeadSnapshot()
}
function Ag(e, n, i) {
    e.translate = je(n.translate, 0, i),
    e.scale = je(n.scale, 1, i),
    e.origin = n.origin,
    e.originPoint = n.originPoint
}
function _g(e, n, i, s) {
    e.min = je(n.min, i.min, s),
    e.max = je(n.max, i.max, s)
}
function kR(e, n, i, s) {
    _g(e.x, n.x, i.x, s),
    _g(e.y, n.y, i.y, s)
}
function RR(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const AR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Og = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Mg = Og("applewebkit/") && !Og("chrome/") ? Math.round : xt;
function Ng(e) {
    e.min = Mg(e.min),
    e.max = Mg(e.max)
}
function _R(e) {
    Ng(e.x),
    Ng(e.y)
}
function lw(e, n, i) {
    return e === "position" || e === "preserve-aspect" && !Nk(Tg(n), Tg(i), .2)
}
function OR(e) {
    var n;
    return e !== e.root && ((n = e.scroll) === null || n === void 0 ? void 0 : n.wasRoot)
}
const MR = aw({
    attachResizeListener: (e, n) => fo(e, "resize", n),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , rc = {
    current: void 0
}
  , uw = aw({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!rc.current) {
            const e = new MR({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            rc.current = e
        }
        return rc.current
    }
    ,
    resetTransform: (e, n) => {
        e.style.transform = n !== void 0 ? n : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , NR = {
    pan: {
        Feature: Gk
    },
    drag: {
        Feature: Qk,
        ProjectionNode: uw,
        MeasureLayout: tw
    }
};
function Dg(e, n, i) {
    const {props: s} = e;
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", i === "Start");
    const a = "onHover" + i
      , u = s[a];
    u && Ae.postRender( () => u(n, vo(n)))
}
class DR extends Kn {
    mount() {
        const {current: n} = this.node;
        n && (this.unmount = NC(n, i => (Dg(this.node, i, "Start"),
        s => Dg(this.node, s, "End"))))
    }
    unmount() {}
}
class LR extends Kn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }
        !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = yo(fo(this.node.current, "focus", () => this.onFocus()), fo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Lg(e, n, i) {
    const {props: s} = e;
    e.animationState && s.whileTap && e.animationState.setActive("whileTap", i === "Start");
    const a = "onTap" + (i === "End" ? "" : i)
      , u = s[a];
    u && Ae.postRender( () => u(n, vo(n)))
}
class jR extends Kn {
    mount() {
        const {current: n} = this.node;
        n && (this.unmount = IC(n, i => (Lg(this.node, i, "Start"),
        (s, {success: a}) => Lg(this.node, s, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Lc = new WeakMap
  , ic = new WeakMap
  , IR = e => {
    const n = Lc.get(e.target);
    n && n(e)
}
  , FR = e => {
    e.forEach(IR)
}
;
function VR({root: e, ...n}) {
    const i = e || document;
    ic.has(i) || ic.set(i, {});
    const s = ic.get(i)
      , a = JSON.stringify(n);
    return s[a] || (s[a] = new IntersectionObserver(FR,{
        root: e,
        ...n
    })),
    s[a]
}
function zR(e, n, i) {
    const s = VR(n);
    return Lc.set(e, i),
    s.observe(e),
    () => {
        Lc.delete(e),
        s.unobserve(e)
    }
}
const BR = {
    some: 0,
    all: 1
};
class UR extends Kn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: n={}} = this.node.getProps()
          , {root: i, margin: s, amount: a="some", once: u} = n
          , c = {
            root: i ? i.current : void 0,
            rootMargin: s,
            threshold: typeof a == "number" ? a : BR[a]
        }
          , d = h => {
            const {isIntersecting: p} = h;
            if (this.isInView === p || (this.isInView = p,
            u && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , v = p ? g : y;
            v && v(h)
        }
        ;
        return zR(this.node.current, c, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: n, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(HR(n, i)) && this.startObserver()
    }
    unmount() {}
}
function HR({viewport: e={}}, {viewport: n={}}={}) {
    return i => e[i] !== n[i]
}
const WR = {
    inView: {
        Feature: UR
    },
    tap: {
        Feature: jR
    },
    focus: {
        Feature: LR
    },
    hover: {
        Feature: DR
    }
}
  , $R = {
    layout: {
        ProjectionNode: uw,
        MeasureLayout: tw
    }
}
  , jc = {
    current: null
}
  , cw = {
    current: !1
};
function KR() {
    if (cw.current = !0,
    !!of)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , n = () => jc.current = e.matches;
            e.addListener(n),
            n()
        } else
            jc.current = !1
}
const qR = [...L0, nt, $n]
  , QR = e => qR.find(D0(e))
  , jg = new WeakMap;
function GR(e, n, i) {
    for (const s in n) {
        const a = n[s]
          , u = i[s];
        if (rt(a))
            e.addValue(s, a);
        else if (rt(u))
            e.addValue(s, uo(a, {
                owner: e
            }));
        else if (u !== a)
            if (e.hasValue(s)) {
                const c = e.getValue(s);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = e.getStaticValue(s);
                e.addValue(s, uo(c !== void 0 ? c : a, {
                    owner: e
                }))
            }
    }
    for (const s in i)
        n[s] === void 0 && e.removeValue(s);
    return n
}
const Ig = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class YR {
    scrapeMotionValuesFromProps(n, i, s) {
        return {}
    }
    constructor({parent: n, props: i, presenceContext: s, reducedMotionConfig: a, blockInitialAnimation: u, visualState: c}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Mf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const x = Yt.now();
            this.renderScheduledAt < x && (this.renderScheduledAt = x,
            Ae.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: p, onUpdate: g} = c;
        this.onUpdate = g,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = i.initial ? {
            ...h
        } : {},
        this.renderState = p,
        this.parent = n,
        this.props = i,
        this.presenceContext = s,
        this.depth = n ? n.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = d,
        this.blockInitialAnimation = !!u,
        this.isControllingVariants = Ma(i),
        this.isVariantNode = Hv(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(n && n.current);
        const {willChange: y, ...v} = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const x in v) {
            const S = v[x];
            h[x] !== void 0 && rt(S) && S.set(h[x], !1)
        }
    }
    mount(n) {
        this.current = n,
        jg.set(n, this),
        this.projection && !this.projection.instance && this.projection.mount(n),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        cw.current || KR(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jc.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        jg.delete(this.current),
        this.projection && this.projection.unmount(),
        Wn(this.notifyUpdate),
        Wn(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const i = this.features[n];
            i && (i.unmount(),
            i.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(n, i) {
        this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
        const s = pr.has(n)
          , a = i.on("change", d => {
            this.latestValues[n] = d,
            this.props.onUpdate && Ae.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , u = i.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, i)),
        this.valueSubscriptions.set(n, () => {
            a(),
            u(),
            c && c(),
            i.owner && i.stop()
        }
        )
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in Zr) {
            const i = Zr[n];
            if (!i)
                continue;
            const {isEnabled: s, Feature: a} = i;
            if (!this.features[n] && a && s(this.props) && (this.features[n] = new a(this)),
            this.features[n]) {
                const u = this.features[n];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Be()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, i) {
        this.latestValues[n] = i
    }
    update(n, i) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = n,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = i;
        for (let s = 0; s < Ig.length; s++) {
            const a = Ig[s];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const u = "on" + a
              , c = n[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = GR(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const i = this.getClosestVariantNode();
        if (i)
            return i.variantChildren && i.variantChildren.add(n),
            () => i.variantChildren.delete(n)
    }
    addValue(n, i) {
        const s = this.values.get(n);
        i !== s && (s && this.removeValue(n),
        this.bindToMotionValue(n, i),
        this.values.set(n, i),
        this.latestValues[n] = i.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const i = this.valueSubscriptions.get(n);
        i && (i(),
        this.valueSubscriptions.delete(n)),
        delete this.latestValues[n],
        this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, i) {
        if (this.props.values && this.props.values[n])
            return this.props.values[n];
        let s = this.values.get(n);
        return s === void 0 && i !== void 0 && (s = uo(i === null ? void 0 : i, {
            owner: this
        }),
        this.addValue(n, s)),
        s
    }
    readValue(n, i) {
        var s;
        let a = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (s = this.getBaseTargetFromProps(this.props, n)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, n, this.options);
        return a != null && (typeof a == "string" && (M0(a) || P0(a)) ? a = parseFloat(a) : !QR(a) && $n.test(i) && (a = A0(n, i)),
        this.setBaseTarget(n, rt(a) ? a.get() : a)),
        rt(a) ? a.get() : a
    }
    setBaseTarget(n, i) {
        this.baseTarget[n] = i
    }
    getBaseTarget(n) {
        var i;
        const {initial: s} = this.props;
        let a;
        if (typeof s == "string" || typeof s == "object") {
            const c = df(this.props, s, (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom);
            c && (a = c[n])
        }
        if (s && a !== void 0)
            return a;
        const u = this.getBaseTargetFromProps(this.props, n);
        return u !== void 0 && !rt(u) ? u : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, i) {
        return this.events[n] || (this.events[n] = new bf),
        this.events[n].add(i)
    }
    notify(n, ...i) {
        this.events[n] && this.events[n].notify(...i)
    }
}
class fw extends YR {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = j0
    }
    sortInstanceNodePosition(n, i) {
        return n.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, i) {
        return n.style ? n.style[i] : void 0
    }
    removeValueFromRenderState(n, {vars: i, style: s}) {
        delete i[n],
        delete s[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: n} = this.props;
        rt(n) && (this.childSubscription = n.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
}
function XR(e) {
    return window.getComputedStyle(e)
}
class ZR extends fw {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Zv
    }
    readValueFromInstance(n, i) {
        if (pr.has(i)) {
            const s = Of(i);
            return s && s.default || 0
        } else {
            const s = XR(n)
              , a = (Gv(i) ? s.getPropertyValue(i) : s[i]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(n, {transformPagePoint: i}) {
        return J0(n, i)
    }
    build(n, i, s) {
        mf(n, i, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, i, s) {
        return wf(n, i, s)
    }
}
class JR extends fw {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Be
    }
    getBaseTargetFromProps(n, i) {
        return n[i]
    }
    readValueFromInstance(n, i) {
        if (pr.has(i)) {
            const s = Of(i);
            return s && s.default || 0
        }
        return i = Jv.has(i) ? i : uf(i),
        n.getAttribute(i)
    }
    scrapeMotionValuesFromProps(n, i, s) {
        return n0(n, i, s)
    }
    build(n, i, s) {
        gf(n, i, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(n, i, s, a) {
        e0(n, i, s, a)
    }
    mount(n) {
        this.isSVGTag = vf(n.tagName),
        super.mount(n)
    }
}
const eA = (e, n) => ff(e) ? new JR(n) : new ZR(n,{
    allowProjection: e !== k.Fragment
})
  , tA = bC({
    ...Tk,
    ...WR,
    ...NR,
    ...$R
}, eA)
  , Br = BT(tA);
var Oe = {}, js = {}, Is = {}, Fs = {}, oc, Fg;
function nA() {
    if (Fg)
        return oc;
    Fg = 1;
    var e = "Expected a function"
      , n = NaN
      , i = "[object Symbol]"
      , s = /^\s+|\s+$/g
      , a = /^[-+]0x[0-9a-f]+$/i
      , u = /^0b[01]+$/i
      , c = /^0o[0-7]+$/i
      , d = parseInt
      , h = typeof ks == "object" && ks && ks.Object === Object && ks
      , p = typeof self == "object" && self && self.Object === Object && self
      , g = h || p || Function("return this")()
      , y = Object.prototype
      , v = y.toString
      , x = Math.max
      , S = Math.min
      , E = function() {
        return g.Date.now()
    };
    function P(V, F, H) {
        var Y, K, $, L, X, B, ce = 0, oe = !1, te = !1, U = !0;
        if (typeof V != "function")
            throw new TypeError(e);
        F = D(F) || 0,
        R(H) && (oe = !!H.leading,
        te = "maxWait"in H,
        $ = te ? x(D(H.maxWait) || 0, F) : $,
        U = "trailing"in H ? !!H.trailing : U);
        function ee(ue) {
            var xe = Y
              , Ne = K;
            return Y = K = void 0,
            ce = ue,
            L = V.apply(Ne, xe),
            L
        }
        function Z(ue) {
            return ce = ue,
            X = setTimeout(le, F),
            oe ? ee(ue) : L
        }
        function M(ue) {
            var xe = ue - B
              , Ne = ue - ce
              , Et = F - xe;
            return te ? S(Et, $ - Ne) : Et
        }
        function W(ue) {
            var xe = ue - B
              , Ne = ue - ce;
            return B === void 0 || xe >= F || xe < 0 || te && Ne >= $
        }
        function le() {
            var ue = E();
            if (W(ue))
                return pe(ue);
            X = setTimeout(le, M(ue))
        }
        function pe(ue) {
            return X = void 0,
            U && Y ? ee(ue) : (Y = K = void 0,
            L)
        }
        function we() {
            X !== void 0 && clearTimeout(X),
            ce = 0,
            Y = B = K = X = void 0
        }
        function ve() {
            return X === void 0 ? L : pe(E())
        }
        function ge() {
            var ue = E()
              , xe = W(ue);
            if (Y = arguments,
            K = this,
            B = ue,
            xe) {
                if (X === void 0)
                    return Z(B);
                if (te)
                    return X = setTimeout(le, F),
                    ee(B)
            }
            return X === void 0 && (X = setTimeout(le, F)),
            L
        }
        return ge.cancel = we,
        ge.flush = ve,
        ge
    }
    function T(V, F, H) {
        var Y = !0
          , K = !0;
        if (typeof V != "function")
            throw new TypeError(e);
        return R(H) && (Y = "leading"in H ? !!H.leading : Y,
        K = "trailing"in H ? !!H.trailing : K),
        P(V, F, {
            leading: Y,
            maxWait: F,
            trailing: K
        })
    }
    function R(V) {
        var F = typeof V;
        return !!V && (F == "object" || F == "function")
    }
    function A(V) {
        return !!V && typeof V == "object"
    }
    function N(V) {
        return typeof V == "symbol" || A(V) && v.call(V) == i
    }
    function D(V) {
        if (typeof V == "number")
            return V;
        if (N(V))
            return n;
        if (R(V)) {
            var F = typeof V.valueOf == "function" ? V.valueOf() : V;
            V = R(F) ? F + "" : F
        }
        if (typeof V != "string")
            return V === 0 ? V : +V;
        V = V.replace(s, "");
        var H = u.test(V);
        return H || c.test(V) ? d(V.slice(2), H ? 2 : 8) : a.test(V) ? n : +V
    }
    return oc = T,
    oc
}
var Qi = {}, Vg;
function jf() {
    if (Vg)
        return Qi;
    Vg = 1,
    Object.defineProperty(Qi, "__esModule", {
        value: !0
    }),
    Qi.addPassiveEventListener = function(i, s, a) {
        var u = a.name;
        u || (u = s,
        console.warn("Listener must be a named function.")),
        e.has(s) || e.set(s, new Set);
        var c = e.get(s);
        if (!c.has(u)) {
            var d = (function() {
                var h = !1;
                try {
                    var p = Object.defineProperty({}, "passive", {
                        get: function() {
                            h = !0
                        }
                    });
                    window.addEventListener("test", null, p)
                } catch {}
                return h
            }
            )();
            i.addEventListener(s, a, d ? {
                passive: !0
            } : !1),
            c.add(u)
        }
    }
    ,
    Qi.removePassiveEventListener = function(i, s, a) {
        i.removeEventListener(s, a),
        e.get(s).delete(a.name || s)
    }
    ;
    var e = new Map;
    return Qi
}
var zg;
function If() {
    if (zg)
        return Fs;
    zg = 1,
    Object.defineProperty(Fs, "__esModule", {
        value: !0
    });
    var e = nA()
      , n = s(e)
      , i = jf();
    function s(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var a = function(d) {
        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0,
        n.default)(d, h)
    }
      , u = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(d, h) {
            if (d) {
                var p = a(function(g) {
                    u.scrollHandler(d)
                }, h);
                return u.scrollSpyContainers.push(d),
                (0,
                i.addPassiveEventListener)(d, "scroll", p),
                function() {
                    (0,
                    i.removePassiveEventListener)(d, "scroll", p),
                    u.scrollSpyContainers.splice(u.scrollSpyContainers.indexOf(d), 1)
                }
            }
            return function() {}
        },
        isMounted: function(d) {
            return u.scrollSpyContainers.indexOf(d) !== -1
        },
        currentPositionX: function(d) {
            if (d === document) {
                var h = window.scrollY !== void 0
                  , p = (document.compatMode || "") === "CSS1Compat";
                return h ? window.scrollX : p ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else
                return d.scrollLeft
        },
        currentPositionY: function(d) {
            if (d === document) {
                var h = window.scrollX !== void 0
                  , p = (document.compatMode || "") === "CSS1Compat";
                return h ? window.scrollY : p ? document.documentElement.scrollTop : document.body.scrollTop
            } else
                return d.scrollTop
        },
        scrollHandler: function(d) {
            var h = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(d)].spyCallbacks || [];
            h.forEach(function(p) {
                return p(u.currentPositionX(d), u.currentPositionY(d))
            })
        },
        addStateHandler: function(d) {
            u.spySetState.push(d)
        },
        addSpyHandler: function(d, h) {
            var p = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(h)];
            p.spyCallbacks || (p.spyCallbacks = []),
            p.spyCallbacks.push(d)
        },
        updateStates: function() {
            u.spySetState.forEach(function(d) {
                return d()
            })
        },
        unmount: function(d, h) {
            u.scrollSpyContainers.forEach(function(p) {
                return p.spyCallbacks && p.spyCallbacks.length && p.spyCallbacks.indexOf(h) > -1 && p.spyCallbacks.splice(p.spyCallbacks.indexOf(h), 1)
            }),
            u.spySetState && u.spySetState.length && u.spySetState.indexOf(d) > -1 && u.spySetState.splice(u.spySetState.indexOf(d), 1),
            document.removeEventListener("scroll", u.scrollHandler)
        },
        update: function() {
            return u.scrollSpyContainers.forEach(function(d) {
                return u.scrollHandler(d)
            })
        }
    };
    return Fs.default = u,
    Fs
}
var Vs = {}, zs = {}, Bg;
function La() {
    if (Bg)
        return zs;
    Bg = 1,
    Object.defineProperty(zs, "__esModule", {
        value: !0
    });
    var e = function(d, h) {
        var p = d.indexOf("#") === 0 ? d.substring(1) : d
          , g = p ? "#" + p : ""
          , y = window && window.location
          , v = g ? y.pathname + y.search + g : y.pathname + y.search;
        h ? history.pushState(history.state, "", v) : history.replaceState(history.state, "", v)
    }
      , n = function() {
        return window.location.hash.replace(/^#/, "")
    }
      , i = function(d) {
        return function(h) {
            return d.contains ? d != h && d.contains(h) : !!(d.compareDocumentPosition(h) & 16)
        }
    }
      , s = function(d) {
        return getComputedStyle(d).position !== "static"
    }
      , a = function(d, h) {
        for (var p = d.offsetTop, g = d.offsetParent; g && !h(g); )
            p += g.offsetTop,
            g = g.offsetParent;
        return {
            offsetTop: p,
            offsetParent: g
        }
    }
      , u = function(d, h, p) {
        if (p)
            return d === document ? h.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(d).position !== "static" ? h.offsetLeft : h.offsetLeft - d.offsetLeft;
        if (d === document)
            return h.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (s(d)) {
            if (h.offsetParent !== d) {
                var g = function(P) {
                    return P === d || P === document
                }
                  , y = a(h, g)
                  , v = y.offsetTop
                  , x = y.offsetParent;
                if (x !== d)
                    throw new Error("Seems containerElement is not an ancestor of the Element");
                return v
            }
            return h.offsetTop
        }
        if (h.offsetParent === d.offsetParent)
            return h.offsetTop - d.offsetTop;
        var S = function(P) {
            return P === document
        };
        return a(h, S).offsetTop - a(d, S).offsetTop
    };
    return zs.default = {
        updateHash: e,
        getHash: n,
        filterElementInContainer: i,
        scrollOffset: u
    },
    zs
}
var Bs = {}, Us = {}, Ug;
function rA() {
    return Ug || (Ug = 1,
    Object.defineProperty(Us, "__esModule", {
        value: !0
    }),
    Us.default = {
        defaultEasing: function(n) {
            return n < .5 ? Math.pow(n * 2, 2) / 2 : 1 - Math.pow((1 - n) * 2, 2) / 2
        },
        linear: function(n) {
            return n
        },
        easeInQuad: function(n) {
            return n * n
        },
        easeOutQuad: function(n) {
            return n * (2 - n)
        },
        easeInOutQuad: function(n) {
            return n < .5 ? 2 * n * n : -1 + (4 - 2 * n) * n
        },
        easeInCubic: function(n) {
            return n * n * n
        },
        easeOutCubic: function(n) {
            return --n * n * n + 1
        },
        easeInOutCubic: function(n) {
            return n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1
        },
        easeInQuart: function(n) {
            return n * n * n * n
        },
        easeOutQuart: function(n) {
            return 1 - --n * n * n * n
        },
        easeInOutQuart: function(n) {
            return n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n
        },
        easeInQuint: function(n) {
            return n * n * n * n * n
        },
        easeOutQuint: function(n) {
            return 1 + --n * n * n * n * n
        },
        easeInOutQuint: function(n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n
        }
    }),
    Us
}
var Hs = {}, Hg;
function iA() {
    if (Hg)
        return Hs;
    Hg = 1,
    Object.defineProperty(Hs, "__esModule", {
        value: !0
    });
    var e = jf()
      , n = ["mousedown", "wheel", "touchmove", "keydown"];
    return Hs.default = {
        subscribe: function(s) {
            return typeof document < "u" && n.forEach(function(a) {
                return (0,
                e.addPassiveEventListener)(document, a, s)
            })
        }
    },
    Hs
}
var Ws = {}, Wg;
function Ff() {
    if (Wg)
        return Ws;
    Wg = 1,
    Object.defineProperty(Ws, "__esModule", {
        value: !0
    });
    var e = {
        registered: {},
        scrollEvent: {
            register: function(i, s) {
                e.registered[i] = s
            },
            remove: function(i) {
                e.registered[i] = null
            }
        }
    };
    return Ws.default = e,
    Ws
}
var $g;
function dw() {
    if ($g)
        return Bs;
    $g = 1,
    Object.defineProperty(Bs, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(K) {
        for (var $ = 1; $ < arguments.length; $++) {
            var L = arguments[$];
            for (var X in L)
                Object.prototype.hasOwnProperty.call(L, X) && (K[X] = L[X])
        }
        return K
    }
      , n = La();
    h(n);
    var i = rA()
      , s = h(i)
      , a = iA()
      , u = h(a)
      , c = Ff()
      , d = h(c);
    function h(K) {
        return K && K.__esModule ? K : {
            default: K
        }
    }
    var p = function($) {
        return s.default[$.smooth] || s.default.defaultEasing
    }
      , g = function($) {
        return typeof $ == "function" ? $ : function() {
            return $
        }
    }
      , y = function() {
        if (typeof window < "u")
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    }
      , v = (function() {
        return y() || function(K, $, L) {
            window.setTimeout(K, L || 1e3 / 60, new Date().getTime())
        }
    }
    )()
      , x = function() {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    }
      , S = function($) {
        var L = $.data.containerElement;
        if (L && L !== document && L !== document.body)
            return L.scrollLeft;
        var X = window.pageXOffset !== void 0
          , B = (document.compatMode || "") === "CSS1Compat";
        return X ? window.pageXOffset : B ? document.documentElement.scrollLeft : document.body.scrollLeft
    }
      , E = function($) {
        var L = $.data.containerElement;
        if (L && L !== document && L !== document.body)
            return L.scrollTop;
        var X = window.pageXOffset !== void 0
          , B = (document.compatMode || "") === "CSS1Compat";
        return X ? window.pageYOffset : B ? document.documentElement.scrollTop : document.body.scrollTop
    }
      , P = function($) {
        var L = $.data.containerElement;
        if (L && L !== document && L !== document.body)
            return L.scrollWidth - L.offsetWidth;
        var X = document.body
          , B = document.documentElement;
        return Math.max(X.scrollWidth, X.offsetWidth, B.clientWidth, B.scrollWidth, B.offsetWidth)
    }
      , T = function($) {
        var L = $.data.containerElement;
        if (L && L !== document && L !== document.body)
            return L.scrollHeight - L.offsetHeight;
        var X = document.body
          , B = document.documentElement;
        return Math.max(X.scrollHeight, X.offsetHeight, B.clientHeight, B.scrollHeight, B.offsetHeight)
    }
      , R = function K($, L, X) {
        var B = L.data;
        if (!L.ignoreCancelEvents && B.cancel) {
            d.default.registered.end && d.default.registered.end(B.to, B.target, B.currentPositionY);
            return
        }
        if (B.delta = Math.round(B.targetPosition - B.startPosition),
        B.start === null && (B.start = X),
        B.progress = X - B.start,
        B.percent = B.progress >= B.duration ? 1 : $(B.progress / B.duration),
        B.currentPosition = B.startPosition + Math.ceil(B.delta * B.percent),
        B.containerElement && B.containerElement !== document && B.containerElement !== document.body ? L.horizontal ? B.containerElement.scrollLeft = B.currentPosition : B.containerElement.scrollTop = B.currentPosition : L.horizontal ? window.scrollTo(B.currentPosition, 0) : window.scrollTo(0, B.currentPosition),
        B.percent < 1) {
            var ce = K.bind(null, $, L);
            v.call(window, ce);
            return
        }
        d.default.registered.end && d.default.registered.end(B.to, B.target, B.currentPosition)
    }
      , A = function($) {
        $.data.containerElement = $ ? $.containerId ? document.getElementById($.containerId) : $.container && $.container.nodeType ? $.container : document : null
    }
      , N = function($, L, X, B) {
        L.data = L.data || x(),
        window.clearTimeout(L.data.delayTimeout);
        var ce = function() {
            L.data.cancel = !0
        };
        if (u.default.subscribe(ce),
        A(L),
        L.data.start = null,
        L.data.cancel = !1,
        L.data.startPosition = L.horizontal ? S(L) : E(L),
        L.data.targetPosition = L.absolute ? $ : $ + L.data.startPosition,
        L.data.startPosition === L.data.targetPosition) {
            d.default.registered.end && d.default.registered.end(L.data.to, L.data.target, L.data.currentPosition);
            return
        }
        L.data.delta = Math.round(L.data.targetPosition - L.data.startPosition),
        L.data.duration = g(L.duration)(L.data.delta),
        L.data.duration = isNaN(parseFloat(L.data.duration)) ? 1e3 : parseFloat(L.data.duration),
        L.data.to = X,
        L.data.target = B;
        var oe = p(L)
          , te = R.bind(null, oe, L);
        if (L && L.delay > 0) {
            L.data.delayTimeout = window.setTimeout(function() {
                d.default.registered.begin && d.default.registered.begin(L.data.to, L.data.target),
                v.call(window, te)
            }, L.delay);
            return
        }
        d.default.registered.begin && d.default.registered.begin(L.data.to, L.data.target),
        v.call(window, te)
    }
      , D = function($) {
        return $ = e({}, $),
        $.data = $.data || x(),
        $.absolute = !0,
        $
    }
      , V = function($) {
        N(0, D($))
    }
      , F = function($, L) {
        N($, D(L))
    }
      , H = function($) {
        $ = D($),
        A($),
        N($.horizontal ? P($) : T($), $)
    }
      , Y = function($, L) {
        L = D(L),
        A(L);
        var X = L.horizontal ? S(L) : E(L);
        N($ + X, L)
    };
    return Bs.default = {
        animateTopScroll: N,
        getAnimationType: p,
        scrollToTop: V,
        scrollToBottom: H,
        scrollTo: F,
        scrollMore: Y
    },
    Bs
}
var Kg;
function ja() {
    if (Kg)
        return Vs;
    Kg = 1,
    Object.defineProperty(Vs, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(g) {
        for (var y = 1; y < arguments.length; y++) {
            var v = arguments[y];
            for (var x in v)
                Object.prototype.hasOwnProperty.call(v, x) && (g[x] = v[x])
        }
        return g
    }
      , n = La()
      , i = d(n)
      , s = dw()
      , a = d(s)
      , u = Ff()
      , c = d(u);
    function d(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }
    var h = {}
      , p = void 0;
    return Vs.default = {
        unmount: function() {
            h = {}
        },
        register: function(y, v) {
            h[y] = v
        },
        unregister: function(y) {
            delete h[y]
        },
        get: function(y) {
            return h[y] || document.getElementById(y) || document.getElementsByName(y)[0] || document.getElementsByClassName(y)[0]
        },
        setActiveLink: function(y) {
            return p = y
        },
        getActiveLink: function() {
            return p
        },
        scrollTo: function(y, v) {
            var x = this.get(y);
            if (!x) {
                console.warn("target Element not found");
                return
            }
            v = e({}, v, {
                absolute: !1
            });
            var S = v.containerId
              , E = v.container
              , P = void 0;
            S ? P = document.getElementById(S) : E && E.nodeType ? P = E : P = document,
            v.absolute = !0;
            var T = v.horizontal
              , R = i.default.scrollOffset(P, x, T) + (v.offset || 0);
            if (!v.smooth) {
                c.default.registered.begin && c.default.registered.begin(y, x),
                P === document ? v.horizontal ? window.scrollTo(R, 0) : window.scrollTo(0, R) : P.scrollTop = R,
                c.default.registered.end && c.default.registered.end(y, x);
                return
            }
            a.default.animateTopScroll(R, v, y, x)
        }
    },
    Vs
}
var sc = {
    exports: {}
}, ac, qg;
function oA() {
    if (qg)
        return ac;
    qg = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return ac = e,
    ac
}
var lc, Qg;
function sA() {
    if (Qg)
        return lc;
    Qg = 1;
    var e = oA();
    function n() {}
    function i() {}
    return i.resetWarningCache = n,
    lc = function() {
        function s(c, d, h, p, g, y) {
            if (y !== e) {
                var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw v.name = "Invariant Violation",
                v
            }
        }
        s.isRequired = s;
        function a() {
            return s
        }
        var u = {
            array: s,
            bigint: s,
            bool: s,
            func: s,
            number: s,
            object: s,
            string: s,
            symbol: s,
            any: s,
            arrayOf: a,
            element: s,
            elementType: s,
            instanceOf: a,
            node: s,
            objectOf: a,
            oneOf: a,
            oneOfType: a,
            shape: a,
            exact: a,
            checkPropTypes: i,
            resetWarningCache: n
        };
        return u.PropTypes = u,
        u
    }
    ,
    lc
}
var Gg;
function Ia() {
    return Gg || (Gg = 1,
    sc.exports = sA()()),
    sc.exports
}
var $s = {}, Yg;
function hw() {
    if (Yg)
        return $s;
    Yg = 1,
    Object.defineProperty($s, "__esModule", {
        value: !0
    }),
    jf();
    var e = La()
      , n = i(e);
    function i(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var s = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function(u) {
            this.scroller = u,
            this.handleHashChange = this.handleHashChange.bind(this),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            this.mountFlag = !0
        },
        mapContainer: function(u, c) {
            this.containers[u] = c
        },
        isMounted: function() {
            return this.mountFlag
        },
        isInitialized: function() {
            return this.initialized
        },
        initStateFromHash: function() {
            var u = this
              , c = this.getHash();
            c ? window.setTimeout(function() {
                u.scrollTo(c, !0),
                u.initialized = !0
            }, 10) : this.initialized = !0
        },
        scrollTo: function(u, c) {
            var d = this.scroller
              , h = d.get(u);
            if (h && (c || u !== d.getActiveLink())) {
                var p = this.containers[u] || document;
                d.scrollTo(u, {
                    container: p
                })
            }
        },
        getHash: function() {
            return n.default.getHash()
        },
        changeHash: function(u, c) {
            this.isInitialized() && n.default.getHash() !== u && n.default.updateHash(u, c)
        },
        handleHashChange: function() {
            this.scrollTo(this.getHash())
        },
        unmount: function() {
            this.scroller = null,
            this.containers = null,
            window.removeEventListener("hashchange", this.handleHashChange)
        }
    };
    return $s.default = s,
    $s
}
var Xg;
function Vf() {
    if (Xg)
        return Is;
    Xg = 1,
    Object.defineProperty(Is, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(T) {
        for (var R = 1; R < arguments.length; R++) {
            var A = arguments[R];
            for (var N in A)
                Object.prototype.hasOwnProperty.call(A, N) && (T[N] = A[N])
        }
        return T
    }
      , n = (function() {
        function T(R, A) {
            for (var N = 0; N < A.length; N++) {
                var D = A[N];
                D.enumerable = D.enumerable || !1,
                D.configurable = !0,
                "value"in D && (D.writable = !0),
                Object.defineProperty(R, D.key, D)
            }
        }
        return function(R, A, N) {
            return A && T(R.prototype, A),
            N && T(R, N),
            R
        }
    }
    )()
      , i = Jt()
      , s = v(i)
      , a = If()
      , u = v(a)
      , c = ja()
      , d = v(c)
      , h = Ia()
      , p = v(h)
      , g = hw()
      , y = v(g);
    function v(T) {
        return T && T.__esModule ? T : {
            default: T
        }
    }
    function x(T, R) {
        if (!(T instanceof R))
            throw new TypeError("Cannot call a class as a function")
    }
    function S(T, R) {
        if (!T)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return R && (typeof R == "object" || typeof R == "function") ? R : T
    }
    function E(T, R) {
        if (typeof R != "function" && R !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof R);
        T.prototype = Object.create(R && R.prototype, {
            constructor: {
                value: T,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        R && (Object.setPrototypeOf ? Object.setPrototypeOf(T, R) : T.__proto__ = R)
    }
    var P = {
        to: p.default.string.isRequired,
        containerId: p.default.string,
        container: p.default.object,
        activeClass: p.default.string,
        activeStyle: p.default.object,
        spy: p.default.bool,
        horizontal: p.default.bool,
        smooth: p.default.oneOfType([p.default.bool, p.default.string]),
        offset: p.default.number,
        delay: p.default.number,
        isDynamic: p.default.bool,
        onClick: p.default.func,
        duration: p.default.oneOfType([p.default.number, p.default.func]),
        absolute: p.default.bool,
        onSetActive: p.default.func,
        onSetInactive: p.default.func,
        ignoreCancelEvents: p.default.bool,
        hashSpy: p.default.bool,
        saveHashHistory: p.default.bool,
        spyThrottle: p.default.number
    };
    return Is.default = function(T, R) {
        var A = R || d.default
          , N = (function(V) {
            E(F, V);
            function F(H) {
                x(this, F);
                var Y = S(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, H));
                return D.call(Y),
                Y.state = {
                    active: !1
                },
                Y.beforeUnmountCallbacks = [],
                Y
            }
            return n(F, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var Y = this.props.containerId
                      , K = this.props.container;
                    return Y && !K ? document.getElementById(Y) : K && K.nodeType ? K : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var Y = this.getScrollSpyContainer();
                        if (!u.default.isMounted(Y)) {
                            var K = u.default.mount(Y, this.props.spyThrottle);
                            this.beforeUnmountCallbacks.push(K)
                        }
                        this.props.hashSpy && (y.default.isMounted() || y.default.mount(A),
                        y.default.mapContainer(this.props.to, Y)),
                        u.default.addSpyHandler(this.spyHandler, Y),
                        this.setState({
                            container: Y
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    u.default.unmount(this.stateHandler, this.spyHandler),
                    this.beforeUnmountCallbacks.forEach(function(Y) {
                        return Y()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var Y = "";
                    this.state && this.state.active ? Y = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : Y = this.props.className;
                    var K = {};
                    this.state && this.state.active ? K = e({}, this.props.style, this.props.activeStyle) : K = e({}, this.props.style);
                    var $ = e({}, this.props);
                    for (var L in P)
                        $.hasOwnProperty(L) && delete $[L];
                    return $.className = Y,
                    $.style = K,
                    $.onClick = this.handleClick,
                    s.default.createElement(T, $)
                }
            }]),
            F
        }
        )(s.default.PureComponent)
          , D = function() {
            var F = this;
            this.scrollTo = function(H, Y) {
                A.scrollTo(H, e({}, F.state, Y))
            }
            ,
            this.handleClick = function(H) {
                F.props.onClick && F.props.onClick(H),
                H.stopPropagation && H.stopPropagation(),
                H.preventDefault && H.preventDefault(),
                F.scrollTo(F.props.to, F.props)
            }
            ,
            this.spyHandler = function(H, Y) {
                var K = F.getScrollSpyContainer();
                if (!(y.default.isMounted() && !y.default.isInitialized())) {
                    var $ = F.props.horizontal
                      , L = F.props.to
                      , X = null
                      , B = void 0
                      , ce = void 0;
                    if ($) {
                        var oe = 0
                          , te = 0
                          , U = 0;
                        if (K.getBoundingClientRect) {
                            var ee = K.getBoundingClientRect();
                            U = ee.left
                        }
                        if (!X || F.props.isDynamic) {
                            if (X = A.get(L),
                            !X)
                                return;
                            var Z = X.getBoundingClientRect();
                            oe = Z.left - U + H,
                            te = oe + Z.width
                        }
                        var M = H - F.props.offset;
                        B = M >= Math.floor(oe) && M < Math.floor(te),
                        ce = M < Math.floor(oe) || M >= Math.floor(te)
                    } else {
                        var W = 0
                          , le = 0
                          , pe = 0;
                        if (K.getBoundingClientRect) {
                            var we = K.getBoundingClientRect();
                            pe = we.top
                        }
                        if (!X || F.props.isDynamic) {
                            if (X = A.get(L),
                            !X)
                                return;
                            var ve = X.getBoundingClientRect();
                            W = ve.top - pe + Y,
                            le = W + ve.height
                        }
                        var ge = Y - F.props.offset;
                        B = ge >= Math.floor(W) && ge < Math.floor(le),
                        ce = ge < Math.floor(W) || ge >= Math.floor(le)
                    }
                    var ue = A.getActiveLink();
                    if (ce) {
                        if (L === ue && A.setActiveLink(void 0),
                        F.props.hashSpy && y.default.getHash() === L) {
                            var xe = F.props.saveHashHistory
                              , Ne = xe === void 0 ? !1 : xe;
                            y.default.changeHash("", Ne)
                        }
                        F.props.spy && F.state.active && (F.setState({
                            active: !1
                        }),
                        F.props.onSetInactive && F.props.onSetInactive(L, X))
                    }
                    if (B && (ue !== L || F.state.active === !1)) {
                        A.setActiveLink(L);
                        var Et = F.props.saveHashHistory
                          , mr = Et === void 0 ? !1 : Et;
                        F.props.hashSpy && y.default.changeHash(L, mr),
                        F.props.spy && (F.setState({
                            active: !0
                        }),
                        F.props.onSetActive && F.props.onSetActive(L, X))
                    }
                }
            }
        };
        return N.propTypes = P,
        N.defaultProps = {
            offset: 0
        },
        N
    }
    ,
    Is
}
var Zg;
function aA() {
    if (Zg)
        return js;
    Zg = 1,
    Object.defineProperty(js, "__esModule", {
        value: !0
    });
    var e = Jt()
      , n = a(e)
      , i = Vf()
      , s = a(i);
    function a(p) {
        return p && p.__esModule ? p : {
            default: p
        }
    }
    function u(p, g) {
        if (!(p instanceof g))
            throw new TypeError("Cannot call a class as a function")
    }
    function c(p, g) {
        if (!p)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return g && (typeof g == "object" || typeof g == "function") ? g : p
    }
    function d(p, g) {
        if (typeof g != "function" && g !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof g);
        p.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: p,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g)
    }
    var h = (function(p) {
        d(g, p);
        function g() {
            var y, v, x, S;
            u(this, g);
            for (var E = arguments.length, P = Array(E), T = 0; T < E; T++)
                P[T] = arguments[T];
            return S = (v = (x = c(this, (y = g.__proto__ || Object.getPrototypeOf(g)).call.apply(y, [this].concat(P))),
            x),
            x.render = function() {
                return n.default.createElement("a", x.props, x.props.children)
            }
            ,
            v),
            c(x, S)
        }
        return g
    }
    )(n.default.Component);
    return js.default = (0,
    s.default)(h),
    js
}
var Ks = {}, Jg;
function lA() {
    if (Jg)
        return Ks;
    Jg = 1,
    Object.defineProperty(Ks, "__esModule", {
        value: !0
    });
    var e = (function() {
        function g(y, v) {
            for (var x = 0; x < v.length; x++) {
                var S = v[x];
                S.enumerable = S.enumerable || !1,
                S.configurable = !0,
                "value"in S && (S.writable = !0),
                Object.defineProperty(y, S.key, S)
            }
        }
        return function(y, v, x) {
            return v && g(y.prototype, v),
            x && g(y, x),
            y
        }
    }
    )()
      , n = Jt()
      , i = u(n)
      , s = Vf()
      , a = u(s);
    function u(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }
    function c(g, y) {
        if (!(g instanceof y))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(g, y) {
        if (!g)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y && (typeof y == "object" || typeof y == "function") ? y : g
    }
    function h(g, y) {
        if (typeof y != "function" && y !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof y);
        g.prototype = Object.create(y && y.prototype, {
            constructor: {
                value: g,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        y && (Object.setPrototypeOf ? Object.setPrototypeOf(g, y) : g.__proto__ = y)
    }
    var p = (function(g) {
        h(y, g);
        function y() {
            return c(this, y),
            d(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments))
        }
        return e(y, [{
            key: "render",
            value: function() {
                return i.default.createElement("button", this.props, this.props.children)
            }
        }]),
        y
    }
    )(i.default.Component);
    return Ks.default = (0,
    a.default)(p),
    Ks
}
var qs = {}, Qs = {}, ey;
function pw() {
    if (ey)
        return Qs;
    ey = 1,
    Object.defineProperty(Qs, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(x) {
        for (var S = 1; S < arguments.length; S++) {
            var E = arguments[S];
            for (var P in E)
                Object.prototype.hasOwnProperty.call(E, P) && (x[P] = E[P])
        }
        return x
    }
      , n = (function() {
        function x(S, E) {
            for (var P = 0; P < E.length; P++) {
                var T = E[P];
                T.enumerable = T.enumerable || !1,
                T.configurable = !0,
                "value"in T && (T.writable = !0),
                Object.defineProperty(S, T.key, T)
            }
        }
        return function(S, E, P) {
            return E && x(S.prototype, E),
            P && x(S, P),
            S
        }
    }
    )()
      , i = Jt()
      , s = p(i)
      , a = ga();
    p(a);
    var u = ja()
      , c = p(u)
      , d = Ia()
      , h = p(d);
    function p(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }
    function g(x, S) {
        if (!(x instanceof S))
            throw new TypeError("Cannot call a class as a function")
    }
    function y(x, S) {
        if (!x)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return S && (typeof S == "object" || typeof S == "function") ? S : x
    }
    function v(x, S) {
        if (typeof S != "function" && S !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof S);
        x.prototype = Object.create(S && S.prototype, {
            constructor: {
                value: x,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        S && (Object.setPrototypeOf ? Object.setPrototypeOf(x, S) : x.__proto__ = S)
    }
    return Qs.default = function(x) {
        var S = (function(E) {
            v(P, E);
            function P(T) {
                g(this, P);
                var R = y(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, T));
                return R.childBindings = {
                    domNode: null
                },
                R
            }
            return n(P, [{
                key: "componentDidMount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function(R) {
                    this.props.name !== R.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    c.default.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function(R) {
                    c.default.register(R, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(x, e({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]),
            P
        }
        )(s.default.Component);
        return S.propTypes = {
            name: h.default.string,
            id: h.default.string
        },
        S
    }
    ,
    Qs
}
var ty;
function uA() {
    if (ty)
        return qs;
    ty = 1,
    Object.defineProperty(qs, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(x) {
        for (var S = 1; S < arguments.length; S++) {
            var E = arguments[S];
            for (var P in E)
                Object.prototype.hasOwnProperty.call(E, P) && (x[P] = E[P])
        }
        return x
    }
      , n = (function() {
        function x(S, E) {
            for (var P = 0; P < E.length; P++) {
                var T = E[P];
                T.enumerable = T.enumerable || !1,
                T.configurable = !0,
                "value"in T && (T.writable = !0),
                Object.defineProperty(S, T.key, T)
            }
        }
        return function(S, E, P) {
            return E && x(S.prototype, E),
            P && x(S, P),
            S
        }
    }
    )()
      , i = Jt()
      , s = h(i)
      , a = pw()
      , u = h(a)
      , c = Ia()
      , d = h(c);
    function h(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }
    function p(x, S) {
        if (!(x instanceof S))
            throw new TypeError("Cannot call a class as a function")
    }
    function g(x, S) {
        if (!x)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return S && (typeof S == "object" || typeof S == "function") ? S : x
    }
    function y(x, S) {
        if (typeof S != "function" && S !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof S);
        x.prototype = Object.create(S && S.prototype, {
            constructor: {
                value: x,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        S && (Object.setPrototypeOf ? Object.setPrototypeOf(x, S) : x.__proto__ = S)
    }
    var v = (function(x) {
        y(S, x);
        function S() {
            return p(this, S),
            g(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments))
        }
        return n(S, [{
            key: "render",
            value: function() {
                var P = this
                  , T = e({}, this.props);
                return delete T.name,
                T.parentBindings && delete T.parentBindings,
                s.default.createElement("div", e({}, T, {
                    ref: function(A) {
                        P.props.parentBindings.domNode = A
                    }
                }), this.props.children)
            }
        }]),
        S
    }
    )(s.default.Component);
    return v.propTypes = {
        name: d.default.string,
        id: d.default.string
    },
    qs.default = (0,
    u.default)(v),
    qs
}
var uc, ny;
function cA() {
    if (ny)
        return uc;
    ny = 1;
    var e = Object.assign || function(v) {
        for (var x = 1; x < arguments.length; x++) {
            var S = arguments[x];
            for (var E in S)
                Object.prototype.hasOwnProperty.call(S, E) && (v[E] = S[E])
        }
        return v
    }
      , n = (function() {
        function v(x, S) {
            for (var E = 0; E < S.length; E++) {
                var P = S[E];
                P.enumerable = P.enumerable || !1,
                P.configurable = !0,
                "value"in P && (P.writable = !0),
                Object.defineProperty(x, P.key, P)
            }
        }
        return function(x, S, E) {
            return S && v(x.prototype, S),
            E && v(x, E),
            x
        }
    }
    )();
    function i(v, x) {
        if (!(v instanceof x))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(v, x) {
        if (!v)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x && (typeof x == "object" || typeof x == "function") ? x : v
    }
    function a(v, x) {
        if (typeof x != "function" && x !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof x);
        v.prototype = Object.create(x && x.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        x && (Object.setPrototypeOf ? Object.setPrototypeOf(v, x) : v.__proto__ = x)
    }
    var u = Jt();
    ga(),
    La();
    var c = If()
      , d = ja()
      , h = Ia()
      , p = hw()
      , g = {
        to: h.string.isRequired,
        containerId: h.string,
        container: h.object,
        activeClass: h.string,
        spy: h.bool,
        smooth: h.oneOfType([h.bool, h.string]),
        offset: h.number,
        delay: h.number,
        isDynamic: h.bool,
        onClick: h.func,
        duration: h.oneOfType([h.number, h.func]),
        absolute: h.bool,
        onSetActive: h.func,
        onSetInactive: h.func,
        ignoreCancelEvents: h.bool,
        hashSpy: h.bool,
        spyThrottle: h.number
    }
      , y = {
        Scroll: function(x, S) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var E = S || d
              , P = (function(R) {
                a(A, R);
                function A(N) {
                    i(this, A);
                    var D = s(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, N));
                    return T.call(D),
                    D.state = {
                        active: !1
                    },
                    D
                }
                return n(A, [{
                    key: "getScrollSpyContainer",
                    value: function() {
                        var D = this.props.containerId
                          , V = this.props.container;
                        return D ? document.getElementById(D) : V && V.nodeType ? V : document
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        if (this.props.spy || this.props.hashSpy) {
                            var D = this.getScrollSpyContainer();
                            c.isMounted(D) || c.mount(D, this.props.spyThrottle),
                            this.props.hashSpy && (p.isMounted() || p.mount(E),
                            p.mapContainer(this.props.to, D)),
                            this.props.spy && c.addStateHandler(this.stateHandler),
                            c.addSpyHandler(this.spyHandler, D),
                            this.setState({
                                container: D
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        c.unmount(this.stateHandler, this.spyHandler)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var D = "";
                        this.state && this.state.active ? D = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : D = this.props.className;
                        var V = e({}, this.props);
                        for (var F in g)
                            V.hasOwnProperty(F) && delete V[F];
                        return V.className = D,
                        V.onClick = this.handleClick,
                        u.createElement(x, V)
                    }
                }]),
                A
            }
            )(u.Component)
              , T = function() {
                var A = this;
                this.scrollTo = function(N, D) {
                    E.scrollTo(N, e({}, A.state, D))
                }
                ,
                this.handleClick = function(N) {
                    A.props.onClick && A.props.onClick(N),
                    N.stopPropagation && N.stopPropagation(),
                    N.preventDefault && N.preventDefault(),
                    A.scrollTo(A.props.to, A.props)
                }
                ,
                this.stateHandler = function() {
                    E.getActiveLink() !== A.props.to && (A.state !== null && A.state.active && A.props.onSetInactive && A.props.onSetInactive(),
                    A.setState({
                        active: !1
                    }))
                }
                ,
                this.spyHandler = function(N) {
                    var D = A.getScrollSpyContainer();
                    if (!(p.isMounted() && !p.isInitialized())) {
                        var V = A.props.to
                          , F = null
                          , H = 0
                          , Y = 0
                          , K = 0;
                        if (D.getBoundingClientRect) {
                            var $ = D.getBoundingClientRect();
                            K = $.top
                        }
                        if (!F || A.props.isDynamic) {
                            if (F = E.get(V),
                            !F)
                                return;
                            var L = F.getBoundingClientRect();
                            H = L.top - K + N,
                            Y = H + L.height
                        }
                        var X = N - A.props.offset
                          , B = X >= Math.floor(H) && X < Math.floor(Y)
                          , ce = X < Math.floor(H) || X >= Math.floor(Y)
                          , oe = E.getActiveLink();
                        if (ce)
                            return V === oe && E.setActiveLink(void 0),
                            A.props.hashSpy && p.getHash() === V && p.changeHash(),
                            A.props.spy && A.state.active && (A.setState({
                                active: !1
                            }),
                            A.props.onSetInactive && A.props.onSetInactive()),
                            c.updateStates();
                        if (B && oe !== V)
                            return E.setActiveLink(V),
                            A.props.hashSpy && p.changeHash(V),
                            A.props.spy && (A.setState({
                                active: !0
                            }),
                            A.props.onSetActive && A.props.onSetActive(V)),
                            c.updateStates()
                    }
                }
            };
            return P.propTypes = g,
            P.defaultProps = {
                offset: 0
            },
            P
        },
        Element: function(x) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var S = (function(E) {
                a(P, E);
                function P(T) {
                    i(this, P);
                    var R = s(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, T));
                    return R.childBindings = {
                        domNode: null
                    },
                    R
                }
                return n(P, [{
                    key: "componentDidMount",
                    value: function() {
                        if (typeof window > "u")
                            return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(R) {
                        this.props.name !== R.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (typeof window > "u")
                            return !1;
                        d.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function(R) {
                        d.register(R, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.createElement(x, e({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]),
                P
            }
            )(u.Component);
            return S.propTypes = {
                name: h.string,
                id: h.string
            },
            S
        }
    };
    return uc = y,
    uc
}
var ry;
function fA() {
    if (ry)
        return Oe;
    ry = 1,
    Object.defineProperty(Oe, "__esModule", {
        value: !0
    }),
    Oe.Helpers = Oe.ScrollElement = Oe.ScrollLink = Oe.animateScroll = Oe.scrollSpy = Oe.Events = Oe.scroller = Oe.Element = Oe.Button = Oe.Link = void 0;
    var e = aA()
      , n = N(e)
      , i = lA()
      , s = N(i)
      , a = uA()
      , u = N(a)
      , c = ja()
      , d = N(c)
      , h = Ff()
      , p = N(h)
      , g = If()
      , y = N(g)
      , v = dw()
      , x = N(v)
      , S = Vf()
      , E = N(S)
      , P = pw()
      , T = N(P)
      , R = cA()
      , A = N(R);
    function N(D) {
        return D && D.__esModule ? D : {
            default: D
        }
    }
    return Oe.Link = n.default,
    Oe.Button = s.default,
    Oe.Element = u.default,
    Oe.scroller = d.default,
    Oe.Events = p.default,
    Oe.scrollSpy = y.default,
    Oe.animateScroll = x.default,
    Oe.ScrollLink = E.default,
    Oe.ScrollElement = T.default,
    Oe.Helpers = A.default,
    Oe.default = {
        Link: n.default,
        Button: s.default,
        Element: u.default,
        scroller: d.default,
        Events: p.default,
        scrollSpy: y.default,
        animateScroll: x.default,
        ScrollLink: E.default,
        ScrollElement: T.default,
        Helpers: A.default
    },
    Oe
}
var ur = fA();
const dA = Gy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ho = k.forwardRef( ({className: e, variant: n, size: i, asChild: s=!1, ...a}, u) => {
    const c = s ? C1 : "button";
    return b.jsx(c, {
        className: Me(dA({
            variant: n,
            size: i,
            className: e
        })),
        ref: u,
        ...a
    })
}
);
ho.displayName = "Button";
function hA() {
    const [e,n] = k.useState(!1)
      , [i,s] = k.useState(!1);
    k.useEffect( () => {
        const u = () => {
            n(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
    }
    , []);
    const a = [{
        name: "Home",
        to: "home"
    }, {
        name: "About",
        to: "about"
    }, {
        name: "Impact",
        to: "impact"
    }];
    return b.jsxs("nav", {
        className: Me("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent", e ? "bg-white/90 backdrop-blur-md shadow-sm border-border/50 py-3" : "bg-transparent py-6"),
        children: [b.jsxs("div", {
            className: "container mx-auto px-4 md:px-6 flex items-center justify-between",
            children: [b.jsxs(ur.Link, {
                to: "home",
                smooth: !0,
                duration: 500,
                className: "flex items-center gap-2 cursor-pointer group",
                children: [b.jsx("div", {
                    className: "bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-110 transition-transform duration-300",
                    children: b.jsx(ia, {
                        className: "w-5 h-5 fill-current"
                    })
                }), b.jsx("span", {
                    className: Me("font-display font-bold text-xl tracking-tight transition-colors", e ? "text-foreground" : "text-white"),
                    children: "Homeless Support"
                })]
            }), b.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [a.map(u => b.jsx(ur.Link, {
                    to: u.to,
                    smooth: !0,
                    duration: 500,
                    offset: -80,
                    className: Me("text-sm font-medium cursor-pointer hover:text-accent transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full", e ? "text-foreground/80" : "text-white/90"),
                    children: u.name
                }, u.name)), b.jsx(ur.Link, {
                    to: "donate",
                    smooth: !0,
                    duration: 500,
                    offset: -80,
                    children: b.jsx(ho, {
                        className: Me("rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5", e ? "" : "bg-white text-primary hover:bg-white/90"),
                        children: "Donate Now"
                    })
                })]
            }), b.jsx("button", {
                className: "md:hidden p-2 text-foreground",
                onClick: () => s(!i),
                children: i ? b.jsx(Xy, {
                    className: Me("w-6 h-6", e ? "text-foreground" : "text-white")
                }) : b.jsx(wE, {
                    className: Me("w-6 h-6", e ? "text-foreground" : "text-white")
                })
            })]
        }), i && b.jsxs("div", {
            className: "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5",
            children: [a.map(u => b.jsx(ur.Link, {
                to: u.to,
                smooth: !0,
                duration: 500,
                offset: -80,
                onClick: () => s(!1),
                className: "text-lg font-medium text-foreground/80 hover:text-primary py-2 px-4 rounded-md hover:bg-muted/50",
                children: u.name
            }, u.name)), b.jsx(ur.Link, {
                to: "donate",
                smooth: !0,
                duration: 500,
                offset: -80,
                onClick: () => s(!1),
                className: "w-full",
                children: b.jsx(ho, {
                    className: "w-full rounded-full",
                    children: "Donate Now"
                })
            })]
        })]
    })
}
function pA() {
    return b.jsx("footer", {
        className: "bg-foreground text-white py-12 border-t border-white/10",
        children: b.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [b.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6",
                children: [b.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [b.jsx("div", {
                        className: "bg-primary p-2 rounded-lg",
                        children: b.jsx(ia, {
                            className: "w-5 h-5 fill-current text-white"
                        })
                    }), b.jsxs("div", {
                        children: [b.jsx("h3", {
                            className: "font-display font-bold text-lg",
                            children: "Homeless Support Initiative"
                        }), b.jsx("p", {
                            className: "text-white/60 text-sm",
                            children: "School Project 2025"
                        })]
                    })]
                }), b.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-8 text-sm text-white/60",
                    children: [b.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Privacy Policy"
                    }), b.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Terms of Service"
                    }), b.jsx("span", {
                        className: "hover:text-white transition-colors cursor-default",
                        children: "Contact: student@school.edu"
                    })]
                })]
            }), b.jsx("div", {
                className: "mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40",
                children: b.jsx("p", {
                    children: "© 2025 Homeless Support Initiative. Built for educational purposes."
                })
            })]
        })
    })
}
function cc({title: e, subtitle: n, centered: i=!1, className: s, dark: a=!1}) {
    return b.jsxs("div", {
        className: Me("mb-12", i && "text-center mx-auto max-w-3xl", s),
        children: [b.jsx("h2", {
            className: Me("text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 tracking-tight", a ? "text-white" : "text-foreground"),
            children: e
        }), n && b.jsx("p", {
            className: Me("text-lg md:text-xl leading-relaxed", a ? "text-white/80" : "text-muted-foreground"),
            children: n
        }), b.jsx("div", {
            className: Me("h-1.5 w-20 bg-accent mt-6 rounded-full", i && "mx-auto")
        })]
    })
}
const zf = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", e),
    ...n
}));
zf.displayName = "Card";
const mA = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("flex flex-col space-y-1.5 p-6", e),
    ...n
}));
mA.displayName = "CardHeader";
const gA = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("text-2xl font-semibold leading-none tracking-tight", e),
    ...n
}));
gA.displayName = "CardTitle";
const yA = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("text-sm text-muted-foreground", e),
    ...n
}));
yA.displayName = "CardDescription";
const Bf = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("p-6 pt-0", e),
    ...n
}));
Bf.displayName = "CardContent";
const vA = k.forwardRef( ({className: e, ...n}, i) => b.jsx("div", {
    ref: i,
    className: Me("flex items-center p-6 pt-0", e),
    ...n
}));
vA.displayName = "CardFooter";
function Gs({icon: e, title: n, description: i, delay: s=0}) {
    return b.jsx(Br.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        transition: {
            duration: .5,
            delay: s,
            ease: "easeOut"
        },
        children: b.jsx(zf, {
            className: "h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden group",
            children: b.jsxs(Bf, {
                className: "p-8 flex flex-col items-center text-center",
                children: [b.jsx("div", {
                    className: "mb-6 p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors",
                    children: b.jsx(e, {
                        className: "w-8 h-8 text-primary"
                    })
                }), b.jsx("h3", {
                    className: "text-xl font-bold mb-3 font-display text-foreground",
                    children: n
                }), b.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children: i
                })]
            })
        })
    })
}
const wA = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop";
function xA() {
    return b.jsxs("div", {
        className: "min-h-screen bg-background font-sans",
        children: [b.jsx(hA, {}), b.jsxs("section", {
            id: "home",
            className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
            children: [b.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [b.jsx("img", {
                    src: wA,
                    alt: "Community support background",
                    className: "w-full h-full object-cover"
                }), b.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply"
                }), b.jsx("div", {
                    className: "absolute inset-0 bg-black/20"
                })]
            }), b.jsx("div", {
                className: "container relative z-10 px-4 md:px-6 pt-20",
                children: b.jsxs(Br.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    },
                    className: "max-w-3xl mx-auto text-center text-white",
                    children: [b.jsxs("div", {
                        className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/20",
                        children: [b.jsx("span", {
                            className: "w-2 h-2 rounded-full bg-accent animate-pulse"
                        }), "School Initiative Project 2025"]
                    }), b.jsxs("h1", {
                        className: "text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-balance",
                        children: ["Help Us Support the ", b.jsx("br", {}), b.jsx("span", {
                            className: "text-accent italic",
                            children: "Homeless Community"
                        })]
                    }), b.jsx("p", {
                        className: "text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed",
                        children: "Together, we can provide warmth, safety, and hope to those who need it most in our city."
                    }), b.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [b.jsx(ur.Link, {
                            to: "donate",
                            smooth: !0,
                            duration: 800,
                            offset: -80,
                            children: b.jsxs(ho, {
                                size: "lg",
                                className: "w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-white border-0 shadow-lg hover:shadow-accent/25 hover:-translate-y-1 transition-all",
                                children: ["Donate Now ", b.jsx(ia, {
                                    className: "ml-2 h-5 w-5 fill-current"
                                })]
                            })
                        }), b.jsx(ur.Link, {
                            to: "about",
                            smooth: !0,
                            duration: 800,
                            offset: -80,
                            children: b.jsxs(ho, {
                                variant: "outline",
                                size: "lg",
                                className: "w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-transparent text-white border-white hover:bg-white/10 hover:text-white backdrop-blur-sm",
                                children: ["Learn More ", b.jsx(dm, {
                                    className: "ml-2 h-5 w-5"
                                })]
                            })
                        })]
                    })]
                })
            }), b.jsx(Br.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1,
                    duration: 1
                },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce",
                children: b.jsx(dm, {
                    className: "h-6 w-6 rotate-90"
                })
            })]
        }), b.jsx("section", {
            id: "about",
            className: "py-24 bg-white relative",
            children: b.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: b.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [b.jsxs(Br.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .6
                        },
                        children: [b.jsx(cc, {
                            title: "Restoring Dignity, One Person at a Time",
                            subtitle: "Homelessness is more than not having a roof. It's about the loss of safety, stability, and community."
                        }), b.jsxs("div", {
                            className: "space-y-6 text-muted-foreground text-lg leading-relaxed",
                            children: [b.jsx("p", {
                                children: "Every night, thousands of individuals in our community face the uncertainty of where they will sleep. They endure harsh weather, hunger, and isolation."
                            }), b.jsx("p", {
                                children: "This initiative aims to bridge the gap between empathy and action. By pooling small contributions, we can provide immediate, tangible relief to our neighbors in crisis. We believe that everyone deserves the basic human right to shelter, food, and dignity."
                            }), b.jsx("p", {
                                className: "font-medium text-primary border-l-4 border-accent pl-4 py-1 italic",
                                children: '"The true measure of any society can be found in how it treats its most vulnerable members."'
                            })]
                        })]
                    }), b.jsxs(Br.div, {
                        initial: {
                            opacity: 0,
                            scale: .95
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        className: "relative",
                        children: [b.jsx("div", {
                            className: "absolute -inset-4 bg-secondary rounded-3xl -z-10 transform rotate-3"
                        }), b.jsx("img", {
                            src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
                            alt: "Volunteers helping",
                            className: "rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        })]
                    })]
                })
            })
        }), b.jsx("section", {
            id: "impact",
            className: "py-24 bg-secondary/30",
            children: b.jsxs("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [b.jsx(cc, {
                    title: "Why Your Help Matters",
                    subtitle: "Your contribution goes directly toward essential lifelines that many of us take for granted.",
                    centered: !0
                }), b.jsxs("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [b.jsx(Gs, {
                        icon: SE,
                        title: "Nutritious Food",
                        description: "Providing hot, healthy meals to ensure no one has to sleep on an empty stomach.",
                        delay: .1
                    }), b.jsx(Gs, {
                        icon: vE,
                        title: "Emergency Shelter",
                        description: "Funding temporary safe havens to protect individuals from harsh weather and danger.",
                        delay: .2
                    }), b.jsx(Gs, {
                        icon: ia,
                        title: "Basic Hygiene",
                        description: "Distributing kits with soap, toothpaste, and sanitary products to restore dignity.",
                        delay: .3
                    }), b.jsx(Gs, {
                        icon: xE,
                        title: "Crisis Support",
                        description: "Offering immediate aid for medical emergencies and critical winter supplies.",
                        delay: .4
                    })]
                })]
            })
        }), b.jsxs("section", {
            className: "py-24 bg-primary text-white overflow-hidden relative",
            children: [b.jsx("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            }), b.jsx("div", {
                className: "absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            }), b.jsx("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10",
                children: b.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [b.jsx(cc, {
                        title: "See Your Impact",
                        subtitle: "Transparency is key. Here's exactly what your donation can achieve.",
                        centered: !0,
                        dark: !0
                    }), b.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6 mt-12",
                        children: [{
                            amount: "$3",
                            label: "One Hot Meal",
                            desc: "A nutritious dinner"
                        }, {
                            amount: "$10",
                            label: "Hygiene Kit",
                            desc: "Essentials for a week"
                        }, {
                            amount: "$25",
                            label: "Shelter Support",
                            desc: "Safe sleep for a night"
                        }].map( (e, n) => b.jsxs(Br.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: n * .1
                            },
                            className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors",
                            children: [b.jsx("div", {
                                className: "text-4xl md:text-5xl font-bold font-display text-accent mb-2",
                                children: e.amount
                            }), b.jsx("div", {
                                className: "text-xl font-bold mb-2",
                                children: e.label
                            }), b.jsx("div", {
                                className: "text-white/70",
                                children: e.desc
                            })]
                        }, n))
                    })]
                })
            })]
        }), b.jsx("section", {
            id: "donate",
            className: "py-24 bg-background",
            children: b.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: b.jsx("div", {
                    className: "max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-border",
                    children: b.jsxs("div", {
                        className: "grid md:grid-cols-2",
                        children: [b.jsxs("div", {
                            className: "p-10 md:p-14 flex flex-col justify-center",
                            children: [b.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold font-display mb-6 text-foreground",
                                children: "Ready to Make a Difference?"
                            }), b.jsx("p", {
                                className: "text-lg text-muted-foreground mb-8",
                                children: "Your contribution is secure and goes directly to the initiative. Scan the QR code to donate via your preferred e-wallet app."
                            }), b.jsxs("div", {
                                className: "space-y-4",
                                children: [b.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [b.jsx("div", {
                                        className: "bg-green-100 p-2 rounded-full text-green-600",
                                        children: b.jsx(Uu, {
                                            className: "w-5 h-5"
                                        })
                                    }), b.jsx("span", {
                                        className: "font-medium",
                                        children: "100% Secure Transaction"
                                    })]
                                }), b.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [b.jsx("div", {
                                        className: "bg-blue-100 p-2 rounded-full text-blue-600",
                                        children: b.jsx(Uu, {
                                            className: "w-5 h-5"
                                        })
                                    }), b.jsx("span", {
                                        className: "font-medium",
                                        children: "Direct Aid Distribution"
                                    })]
                                }), b.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [b.jsx("div", {
                                        className: "bg-purple-100 p-2 rounded-full text-purple-600",
                                        children: b.jsx(Uu, {
                                            className: "w-5 h-5"
                                        })
                                    }), b.jsx("span", {
                                        className: "font-medium",
                                        children: "Tax Deductible Receipt"
                                    })]
                                })]
                            })]
                        }), b.jsxs("div", {
                            className: "bg-muted/30 p-10 md:p-14 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-border",
                            children: [b.jsxs("div", {
                                className: "bg-white p-6 rounded-2xl shadow-lg mb-6 border border-border/50 max-w-xs w-full",
                                children: [b.jsxs("div", {
                                    className: "aspect-square bg-neutral-100 rounded-xl mb-4 overflow-hidden relative group",
                                    children: [b.jsx("img", {
                                        src: "/images/qrcode.jpg",
                                        alt: "Scan to donate via e-wallet",
                                        className: "w-full h-full object-cover mix-blend-multiply",
                                        onError: e => {
                                            e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                        }
                                    }), b.jsx("div", {
                                        className: "absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                        children: b.jsx("span", {
                                            className: "bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm",
                                            children: "Scan Me"
                                        })
                                    })]
                                }), b.jsxs("div", {
                                    className: "text-center",
                                    children: [b.jsx("p", {
                                        className: "text-sm font-bold text-foreground",
                                        children: "Scan with Camera app"
                                    }), b.jsx("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: "Accepts all major e-wallets"
                                    })]
                                })]
                            }), b.jsx("div", {
                                className: "text-center max-w-xs",
                                children: b.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: ["Having trouble? Contact us at ", b.jsx("span", {
                                        className: "text-primary font-medium",
                                        children: "support@homelessinitiative.org"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        }), b.jsx("section", {
            className: "py-16 bg-white border-t border-border",
            children: b.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: b.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [b.jsx("h3", {
                        className: "text-2xl font-bold font-display mb-4",
                        children: "Our Commitment to Honesty"
                    }), b.jsx("p", {
                        className: "text-muted-foreground mb-6",
                        children: "All funds raised are strictly allocated to purchasing food, hygiene supplies, and shelter vouchers. This is a non-profit school project aimed at raising awareness and providing direct aid."
                    }), b.jsx("div", {
                        className: "inline-block bg-secondary/50 px-6 py-3 rounded-lg border border-secondary text-sm font-medium text-secondary-foreground",
                        children: "Disclaimer: This is a student-led initiative for the 2025 school year."
                    })]
                })
            })
        }), b.jsx(pA, {})]
    })
}
function SA() {
    return b.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: b.jsx(zf, {
            className: "w-full max-w-md mx-4",
            children: b.jsxs(Bf, {
                className: "pt-6",
                children: [b.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [b.jsx(yE, {
                        className: "h-8 w-8 text-red-500"
                    }), b.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), b.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function EA() {
    return b.jsxs(HS, {
        children: [b.jsx(Xp, {
            path: "/",
            component: xA
        }), b.jsx(Xp, {
            component: SA
        })]
    })
}
function PA() {
    return b.jsx(h1, {
        client: g1,
        children: b.jsxs(AT, {
            children: [b.jsx(rP, {}), b.jsx(EA, {})]
        })
    })
}
wS.createRoot(document.getElementById("root")).render(b.jsx(PA, {}));

