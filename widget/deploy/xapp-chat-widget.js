(function (exports) {
    "use strict";
    !function () {
        const e = {
            GENERATE_SOURCEMAP: "false",
            INLINE_RUNTIME_CHUNK: "false",
            CTA_MESSAGE: "Talk to me",
            CTA_TIMEOUT: "",
            "SERVER-URL": "https://h08ztw0nnh.execute-api.us-east-1.amazonaws.com/test",
            DIRECT: "true",
            "ACCOUNT-KEY": "bogus",
            THEME_PRIMARY_COLOR: "#2f375a",
            THEME_HEADER_TEXT_COLOR: "#a3a6b4",
            THEME_MESSAGES_MINE_BUBBLE_COLOR: "#02bbf6",
            HEADER_STATUS_ONLINE: "Your Friendly Neighborhood Assistant",
            "MENU_ITEMS-LIST": "Hi,Cats,Help"
        };
        try {
            if (process) return process.env = Object.assign({}, process.env), void Object.assign(process.env, e);
        } catch (e) {
        }
        globalThis.process = { env: e };
    }();
    var __assign = function () {
        return __assign = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[ n ]) Object.prototype.hasOwnProperty.call(t, o) && (e[ o ] = t[ o ]);
            return e;
        }, __assign.apply(this, arguments);
    };

    function __awaiter(e, t, n, r) {
        return new (n || (n = Promise))((function (o, a) {
            function i(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    a(e);
                }
            }

            function s(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    a(e);
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                    e(t);
                }))).then(i, s);
            }

            l((r = r.apply(e, t || [])).next());
        }));
    }

    function __generator(e, t) {
        var n, r, o, a, i = {
            label: 0, sent: function () {
                if (1 & o[ 0 ]) throw o[ 1 ];
                return o[ 1 ];
            }, trys: [], ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[ Symbol.iterator ] = function () {
            return this;
        }), a;

        function s(a) {
            return function (s) {
                return function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, r && (o = 2 & a[ 0 ] ? r.return : a[ 0 ] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[ 1 ])).done) return o;
                        switch (r = 0, o && (a = [2 & a[ 0 ], o.value]), a[ 0 ]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, { value: a[ 1 ], done: !1 };
                            case 5:
                                i.label++, r = a[ 1 ], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = i.trys, (o = o.length > 0 && o[ o.length - 1 ]) || 6 !== a[ 0 ] && 2 !== a[ 0 ])) {
                                    i = 0;
                                    continue;
                                }
                                if (3 === a[ 0 ] && (!o || a[ 1 ] > o[ 0 ] && a[ 1 ] < o[ 3 ])) {
                                    i.label = a[ 1 ];
                                    break;
                                }
                                if (6 === a[ 0 ] && i.label < o[ 1 ]) {
                                    i.label = o[ 1 ], o = a;
                                    break;
                                }
                                if (o && i.label < o[ 2 ]) {
                                    i.label = o[ 2 ], i.ops.push(a);
                                    break;
                                }
                                o[ 2 ] && i.ops.pop(), i.trys.pop();
                                continue;
                        }
                        a = t.call(e, i);
                    } catch (e) {
                        a = [6, e], r = 0;
                    } finally {
                        n = o = 0;
                    }
                    if (5 & a[ 0 ]) throw a[ 1 ];
                    return { value: a[ 0 ] ? a[ 1 ] : void 0, done: !0 };
                }([a, s]);
            };
        }
    }

    function __spreadArray(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[ o ] = t[ o ]);
        return e.concat(r || Array.prototype.slice.call(t));
    }

    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function getDefaultExportFromCjs(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }

    var react = { exports: {} }, react_production_min = {}, getOwnPropertySymbols$1 = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e);
    }

    function shouldUseNative() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[ 5 ] = "de", "5" === Object.getOwnPropertyNames(e)[ 0 ]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t[ "_" + String.fromCharCode(n) ] = n;
            var r = Object.getOwnPropertyNames(t).map((function (e) {
                return t[ e ];
            }));
            if ("0123456789" !== r.join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                o[ e ] = e;
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("");
        } catch (e) {
            return !1;
        }
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (e, t) {
            for (var n, r, o = toObject(e), a = 1; a < arguments.length; a++) {
                for (var i in n = Object(arguments[ a ])) hasOwnProperty.call(n, i) && (o[ i ] = n[ i ]);
                if (getOwnPropertySymbols$1) {
                    r = getOwnPropertySymbols$1(n);
                    for (var s = 0; s < r.length; s++) propIsEnumerable.call(n, r[ s ]) && (o[ r[ s ] ] = n[ r[ s ] ]);
                }
            }
            return o;
        }, l$1 = objectAssign, n$2 = "function" == typeof Symbol && Symbol.for,
        p$1 = n$2 ? Symbol.for("react.element") : 60103, q$1 = n$2 ? Symbol.for("react.portal") : 60106,
        r$2 = n$2 ? Symbol.for("react.fragment") : 60107, t$1 = n$2 ? Symbol.for("react.strict_mode") : 60108,
        u$1 = n$2 ? Symbol.for("react.profiler") : 60114, v$2 = n$2 ? Symbol.for("react.provider") : 60109,
        w$2 = n$2 ? Symbol.for("react.context") : 60110, x$1 = n$2 ? Symbol.for("react.forward_ref") : 60112,
        y$2 = n$2 ? Symbol.for("react.suspense") : 60113, z$1 = n$2 ? Symbol.for("react.memo") : 60115,
        A$1 = n$2 ? Symbol.for("react.lazy") : 60116, B = "function" == typeof Symbol && Symbol.iterator;

    function C$1(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[ n ]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    var D = {
        isMounted: function () {
            return !1;
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, E$1 = {};

    function F$1(e, t, n) {
        this.props = e, this.context = t, this.refs = E$1, this.updater = n || D;
    }

    function G$1() {
    }

    function H$1(e, t, n) {
        this.props = e, this.context = t, this.refs = E$1, this.updater = n || D;
    }

    F$1.prototype.isReactComponent = {}, F$1.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(C$1(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    }, F$1.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, G$1.prototype = F$1.prototype;
    var I$1 = H$1.prototype = new G$1;
    I$1.constructor = H$1, l$1(I$1, F$1.prototype), I$1.isPureReactComponent = !0;
    var J$1 = { current: null }, K$1 = Object.prototype.hasOwnProperty,
        L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };

    function M$1(e, t, n) {
        var r, o = {}, a = null, i = null;
        if (null != t) for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t) K$1.call(t, r) && !L$1.hasOwnProperty(r) && (o[ r ] = t[ r ]);
        var s = arguments.length - 2;
        if (1 === s) o.children = n; else if (1 < s) {
            for (var l = Array(s), u = 0; u < s; u++) l[ u ] = arguments[ u + 2 ];
            o.children = l;
        }
        if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === o[ r ] && (o[ r ] = s[ r ]);
        return { $$typeof: p$1, type: e, key: a, ref: i, props: o, _owner: J$1.current };
    }

    function N$1(e, t) {
        return { $$typeof: p$1, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
    }

    function O$1(e) {
        return "object" == typeof e && null !== e && e.$$typeof === p$1;
    }

    function escape$1(e) {
        var t = { "=": "=0", ":": "=2" };
        return "$" + ("" + e).replace(/[=:]/g, (function (e) {
            return t[ e ];
        }));
    }

    var P$1 = /\/+/g, Q$1 = [];

    function R$1(e, t, n, r) {
        if (Q$1.length) {
            var o = Q$1.pop();
            return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }

    function S$1(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > Q$1.length && Q$1.push(e);
    }

    function T$1(e, t, n, r) {
        var o = typeof e;
        "undefined" !== o && "boolean" !== o || (e = null);
        var a = !1;
        if (null === e) a = !0; else switch (o) {
            case"string":
            case"number":
                a = !0;
                break;
            case"object":
                switch (e.$$typeof) {
                    case p$1:
                    case q$1:
                        a = !0;
                }
        }
        if (a) return n(r, e, "" === t ? "." + U$1(e, 0) : t), 1;
        if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e)) for (var i = 0; i < e.length; i++) {
            var s = t + U$1(o = e[ i ], i);
            a += T$1(o, s, n, r);
        } else if (null === e || "object" != typeof e ? s = null : s = "function" == typeof (s = B && e[ B ] || e[ "@@iterator" ]) ? s : null, "function" == typeof s) for (e = s.call(e), i = 0; !(o = e.next()).done;) a += T$1(o = o.value, s = t + U$1(o, i++), n, r); else if ("object" === o) throw n = "" + e, Error(C$1(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
        return a;
    }

    function V$1(e, t, n) {
        return null == e ? 0 : T$1(e, "", t, n);
    }

    function U$1(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? escape$1(e.key) : t.toString(36);
    }

    function W$1(e, t) {
        e.func.call(e.context, t, e.count++);
    }

    function aa$1(e, t, n) {
        var r = e.result, o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? X$1(e, r, n, (function (e) {
            return e;
        })) : null != e && (O$1(e) && (e = N$1(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P$1, "$&/") + "/") + n)), r.push(e));
    }

    function X$1(e, t, n, r, o) {
        var a = "";
        null != n && (a = ("" + n).replace(P$1, "$&/") + "/"), V$1(e, aa$1, t = R$1(t, a, r, o)), S$1(t);
    }

    var Y$1 = { current: null };

    function Z$1() {
        var e = Y$1.current;
        if (null === e) throw Error(C$1(321));
        return e;
    }

    var ba$1 = {
        ReactCurrentDispatcher: Y$1,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: J$1,
        IsSomeRendererActing: { current: !1 },
        assign: l$1
    };
    react_production_min.Children = {
        map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return X$1(e, r, null, t, n), r;
        }, forEach: function (e, t, n) {
            if (null == e) return e;
            V$1(e, W$1, t = R$1(null, null, t, n)), S$1(t);
        }, count: function (e) {
            return V$1(e, (function () {
                return null;
            }), null);
        }, toArray: function (e) {
            var t = [];
            return X$1(e, t, null, (function (e) {
                return e;
            })), t;
        }, only: function (e) {
            if (!O$1(e)) throw Error(C$1(143));
            return e;
        }
    }, react_production_min.Component = F$1, react_production_min.Fragment = r$2, react_production_min.Profiler = u$1, react_production_min.PureComponent = H$1, react_production_min.StrictMode = t$1, react_production_min.Suspense = y$2, react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba$1, react_production_min.cloneElement = function (e, t, n) {
        if (null == e) throw Error(C$1(267, e));
        var r = l$1({}, e.props), o = e.key, a = e.ref, i = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (a = t.ref, i = J$1.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for (l in t) K$1.call(t, l) && !L$1.hasOwnProperty(l) && (r[ l ] = void 0 === t[ l ] && void 0 !== s ? s[ l ] : t[ l ]);
        }
        var l = arguments.length - 2;
        if (1 === l) r.children = n; else if (1 < l) {
            s = Array(l);
            for (var u = 0; u < l; u++) s[ u ] = arguments[ u + 2 ];
            r.children = s;
        }
        return { $$typeof: p$1, type: e.type, key: o, ref: a, props: r, _owner: i };
    }, react_production_min.createContext = function (e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: w$2,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = { $$typeof: v$2, _context: e }, e.Consumer = e;
    }, react_production_min.createElement = M$1, react_production_min.createFactory = function (e) {
        var t = M$1.bind(null, e);
        return t.type = e, t;
    }, react_production_min.createRef = function () {
        return { current: null };
    }, react_production_min.forwardRef = function (e) {
        return { $$typeof: x$1, render: e };
    }, react_production_min.isValidElement = O$1, react_production_min.lazy = function (e) {
        return { $$typeof: A$1, _ctor: e, _status: -1, _result: null };
    }, react_production_min.memo = function (e, t) {
        return { $$typeof: z$1, type: e, compare: void 0 === t ? null : t };
    }, react_production_min.useCallback = function (e, t) {
        return Z$1().useCallback(e, t);
    }, react_production_min.useContext = function (e, t) {
        return Z$1().useContext(e, t);
    }, react_production_min.useDebugValue = function () {
    }, react_production_min.useEffect = function (e, t) {
        return Z$1().useEffect(e, t);
    }, react_production_min.useImperativeHandle = function (e, t, n) {
        return Z$1().useImperativeHandle(e, t, n);
    }, react_production_min.useLayoutEffect = function (e, t) {
        return Z$1().useLayoutEffect(e, t);
    }, react_production_min.useMemo = function (e, t) {
        return Z$1().useMemo(e, t);
    }, react_production_min.useReducer = function (e, t, n) {
        return Z$1().useReducer(e, t, n);
    }, react_production_min.useRef = function (e) {
        return Z$1().useRef(e);
    }, react_production_min.useState = function (e) {
        return Z$1().useState(e);
    }, react_production_min.version = "16.14.0";
    var react_development = {}, ReactPropTypesSecret$3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
        ReactPropTypesSecret_1 = ReactPropTypesSecret$3, printWarning$1 = function () {
        };
    if ("production" !== process.env.NODE_ENV) {
        var ReactPropTypesSecret$2 = ReactPropTypesSecret_1, loggedTypeFailures = {},
            has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning$1 = function (e) {
            var t = "Warning: " + e;
            "undefined" != typeof console && console.error(t);
            try {
                throw new Error(t);
            } catch (e) {
            }
        };
    }

    function checkPropTypes$1(e, t, n, r, o) {
        if ("production" !== process.env.NODE_ENV) for (var a in e) if (has$1(e, a)) {
            var i;
            try {
                if ("function" != typeof e[ a ]) {
                    var s = Error((r || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[ a ] + "`.");
                    throw s.name = "Invariant Violation", s;
                }
                i = e[ a ](t, a, r, n, null, ReactPropTypesSecret$2);
            } catch (e) {
                i = e;
            }
            if (!i || i instanceof Error || printWarning$1((r || "React class") + ": type specification of " + n + " `" + a + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof i + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), i instanceof Error && !(i.message in loggedTypeFailures)) {
                loggedTypeFailures[ i.message ] = !0;
                var l = o ? o() : "";
                printWarning$1("Failed " + n + " type: " + i.message + (null != l ? l : ""));
            }
        }
    }

    checkPropTypes$1.resetWarningCache = function () {
        "production" !== process.env.NODE_ENV && (loggedTypeFailures = {});
    };
    var checkPropTypes_1 = checkPropTypes$1;
    "production" !== process.env.NODE_ENV && function () {
        var e = objectAssign, t = checkPropTypes_1, n = "function" == typeof Symbol && Symbol.for,
            r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106,
            a = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108,
            s = n ? Symbol.for("react.profiler") : 60114, l = n ? Symbol.for("react.provider") : 60109,
            u = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.concurrent_mode") : 60111,
            f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113,
            p = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115,
            m = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121,
            v = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118,
            b = n ? Symbol.for("react.scope") : 60119, w = "function" == typeof Symbol && Symbol.iterator;

        function k(e) {
            if (null === e || "object" != typeof e) return null;
            var t = w && e[ w ] || e[ "@@iterator" ];
            return "function" == typeof t ? t : null;
        }

        var E = { current: null }, x = { current: null }, S = /^(.*)[\\\/]/;

        function _(e) {
            if (null == e) return null;
            if ("number" == typeof e.tag && O("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), "function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case a:
                    return "Fragment";
                case o:
                    return "Portal";
                case s:
                    return "Profiler";
                case i:
                    return "StrictMode";
                case d:
                    return "Suspense";
                case p:
                    return "SuspenseList";
            }
            if ("object" == typeof e) switch (e.$$typeof) {
                case u:
                    return "Context.Consumer";
                case l:
                    return "Context.Provider";
                case f:
                    return r = e, c = e.render, v = "ForwardRef", y = c.displayName || c.name || "", r.displayName || ("" !== y ? v + "(" + y + ")" : v);
                case h:
                    return _(e.type);
                case g:
                    return _(e.render);
                case m:
                    var t = 1 === (n = e)._status ? n._result : null;
                    if (t) return _(t);
            }
            var n, r, c, v, y;
            return null;
        }

        var T = {}, C = null;

        function R(e) {
            C = e;
        }

        T.getCurrentStack = null, T.getStackAddendum = function () {
            var e = "";
            if (C) {
                var t = _(C.type), n = C._owner;
                e += function (e, t, n) {
                    var r = "";
                    if (t) {
                        var o = t.fileName, a = o.replace(S, "");
                        if (/^index\./.test(a)) {
                            var i = o.match(S);
                            if (i) {
                                var s = i[ 1 ];
                                s && (a = s.replace(S, "") + "/" + a);
                            }
                        }
                        r = " (at " + a + ":" + t.lineNumber + ")";
                    } else n && (r = " (created by " + n + ")");
                    return "\n    in " + (e || "Unknown") + r;
                }(t, C._source, n && _(n.type));
            }
            var r = T.getCurrentStack;
            return r && (e += r() || ""), e;
        };
        var P = {
            ReactCurrentDispatcher: E,
            ReactCurrentBatchConfig: { suspense: null },
            ReactCurrentOwner: x,
            IsSomeRendererActing: { current: !1 },
            assign: e
        };

        function N(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[ r - 1 ] = arguments[ r ];
            I("warn", e, n);
        }

        function O(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[ r - 1 ] = arguments[ r ];
            I("error", e, n);
        }

        function I(e, t, n) {
            if (!(n.length > 0 && "string" == typeof n[ n.length - 1 ] && 0 === n[ n.length - 1 ].indexOf("\n    in"))) {
                var r = P.ReactDebugCurrentFrame.getStackAddendum();
                "" !== r && (t += "%s", n = n.concat([r]));
            }
            var o = n.map((function (e) {
                return "" + e;
            }));
            o.unshift("Warning: " + t), Function.prototype.apply.call(console[ e ], console, o);
            try {
                var a = 0, i = "Warning: " + t.replace(/%s/g, (function () {
                    return n[ a++ ];
                }));
                throw new Error(i);
            } catch (e) {
            }
        }

        e(P, { ReactDebugCurrentFrame: T, ReactComponentTreeHook: {} });
        var $ = {};

        function D(e, t) {
            var n = e.constructor, r = n && (n.displayName || n.name) || "ReactClass", o = r + "." + t;
            $[ o ] || (O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, r), $[ o ] = !0);
        }

        var M = {
            isMounted: function (e) {
                return !1;
            }, enqueueForceUpdate: function (e, t, n) {
                D(e, "forceUpdate");
            }, enqueueReplaceState: function (e, t, n, r) {
                D(e, "replaceState");
            }, enqueueSetState: function (e, t, n, r) {
                D(e, "setState");
            }
        }, A = {};

        function j(e, t, n) {
            this.props = e, this.context = t, this.refs = A, this.updater = n || M;
        }

        Object.freeze(A), j.prototype.isReactComponent = {}, j.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState");
        }, j.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        };
        var F = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, L = function (e, t) {
            Object.defineProperty(j.prototype, e, {
                get: function () {
                    N("%s(...) is deprecated in plain JavaScript React classes. %s", t[ 0 ], t[ 1 ]);
                }
            });
        };
        for (var z in F) F.hasOwnProperty(z) && L(z, F[ z ]);

        function U() {
        }

        function B(e, t, n) {
            this.props = e, this.context = t, this.refs = A, this.updater = n || M;
        }

        U.prototype = j.prototype;
        var W = B.prototype = new U;
        W.constructor = B, e(W, j.prototype), W.isPureReactComponent = !0;
        var V, H, q, Y = Object.prototype.hasOwnProperty, Q = { key: !0, ref: !0, __self: !0, __source: !0 };

        function K(e) {
            if (Y.call(e, "ref")) {
                var t = Object.getOwnPropertyDescriptor(e, "ref").get;
                if (t && t.isReactWarning) return !1;
            }
            return void 0 !== e.ref;
        }

        function X(e) {
            if (Y.call(e, "key")) {
                var t = Object.getOwnPropertyDescriptor(e, "key").get;
                if (t && t.isReactWarning) return !1;
            }
            return void 0 !== e.key;
        }

        function J(e, t) {
            var n = function () {
                V || (V = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t));
            };
            n.isReactWarning = !0, Object.defineProperty(e, "key", { get: n, configurable: !0 });
        }

        function G(e, t) {
            var n = function () {
                H || (H = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t));
            };
            n.isReactWarning = !0, Object.defineProperty(e, "ref", { get: n, configurable: !0 });
        }

        function Z(e) {
            if ("string" == typeof e.ref && x.current && e.__self && x.current.stateNode !== e.__self) {
                var t = _(x.current.type);
                q[ t ] || (O("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref", _(x.current.type), e.ref), q[ t ] = !0);
            }
        }

        q = {};
        var ee = function (e, t, n, o, a, i, s) {
            var l = { $$typeof: r, type: e, key: t, ref: n, props: s, _owner: i, _store: {} };
            return Object.defineProperty(l._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1
            }), Object.defineProperty(l, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: o
            }), Object.defineProperty(l, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: a
            }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
        };

        function te(e, t, n) {
            var r, o = {}, a = null, i = null, s = null, l = null;
            if (null != t) for (r in K(t) && (i = t.ref, Z(t)), X(t) && (a = "" + t.key), s = void 0 === t.__self ? null : t.__self, l = void 0 === t.__source ? null : t.__source, t) Y.call(t, r) && !Q.hasOwnProperty(r) && (o[ r ] = t[ r ]);
            var u = arguments.length - 2;
            if (1 === u) o.children = n; else if (u > 1) {
                for (var c = Array(u), f = 0; f < u; f++) c[ f ] = arguments[ f + 2 ];
                Object.freeze && Object.freeze(c), o.children = c;
            }
            if (e && e.defaultProps) {
                var d = e.defaultProps;
                for (r in d) void 0 === o[ r ] && (o[ r ] = d[ r ]);
            }
            if (a || i) {
                var p = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
                a && J(o, p), i && G(o, p);
            }
            return ee(e, a, i, s, l, x.current, o);
        }

        function ne(t, n, r) {
            if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
            var o, a, i = e({}, t.props), s = t.key, l = t.ref, u = t._self, c = t._source, f = t._owner;
            if (null != n) for (o in K(n) && (l = n.ref, f = x.current), X(n) && (s = "" + n.key), t.type && t.type.defaultProps && (a = t.type.defaultProps), n) Y.call(n, o) && !Q.hasOwnProperty(o) && (void 0 === n[ o ] && void 0 !== a ? i[ o ] = a[ o ] : i[ o ] = n[ o ]);
            var d = arguments.length - 2;
            if (1 === d) i.children = r; else if (d > 1) {
                for (var p = Array(d), h = 0; h < d; h++) p[ h ] = arguments[ h + 2 ];
                i.children = p;
            }
            return ee(t.type, s, l, u, c, f, i);
        }

        function re(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
        }

        var oe = !1, ae = /\/+/g;

        function ie(e) {
            return ("" + e).replace(ae, "$&/");
        }

        var se, le = [];

        function ue(e, t, n, r) {
            if (le.length) {
                var o = le.pop();
                return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }

        function ce(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, le.length < 10 && le.push(e);
        }

        function fe(e, t, n, a) {
            var i = typeof e;
            "undefined" !== i && "boolean" !== i || (e = null);
            var s, l = !1;
            if (null === e) l = !0; else switch (i) {
                case"string":
                case"number":
                    l = !0;
                    break;
                case"object":
                    switch (e.$$typeof) {
                        case r:
                        case o:
                            l = !0;
                    }
            }
            if (l) return n(a, e, "" === t ? "." + pe(e, 0) : t), 1;
            var u = 0, c = "" === t ? "." : t + ":";
            if (Array.isArray(e)) for (var f = 0; f < e.length; f++) u += fe(s = e[ f ], c + pe(s, f), n, a); else {
                var d = k(e);
                if ("function" == typeof d) {
                    d === e.entries && (oe || N("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."), oe = !0);
                    for (var p, h = d.call(e), m = 0; !(p = h.next()).done;) u += fe(s = p.value, c + pe(s, m++), n, a);
                } else if ("object" === i) {
                    var g;
                    g = " If you meant to render a collection of children, use an array instead." + T.getStackAddendum();
                    var v = "" + e;
                    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === v ? "object with keys {" + Object.keys(e).join(", ") + "}" : v) + ")." + g);
                }
            }
            return u;
        }

        function de(e, t, n) {
            return null == e ? 0 : fe(e, "", t, n);
        }

        function pe(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? (n = e.key, r = {
                "=": "=0",
                ":": "=2"
            }, "$" + ("" + n).replace(/[=:]/g, (function (e) {
                return r[ e ];
            }))) : t.toString(36);
            var n, r;
        }

        function he(e, t, n) {
            var r = e.func, o = e.context;
            r.call(o, t, e.count++);
        }

        function me(e, t, n) {
            var r, o, a = e.result, i = e.keyPrefix, s = e.func, l = e.context, u = s.call(l, t, e.count++);
            Array.isArray(u) ? ge(u, a, n, (function (e) {
                return e;
            })) : null != u && (re(u) && (r = u, o = i + (!u.key || t && t.key === u.key ? "" : ie(u.key) + "/") + n, u = ee(r.type, o, r.ref, r._self, r._source, r._owner, r.props)), a.push(u));
        }

        function ge(e, t, n, r, o) {
            var a = "";
            null != n && (a = ie(n) + "/");
            var i = ue(t, a, r, o);
            de(e, me, i), ce(i);
        }

        function ve(e) {
            return "string" == typeof e || "function" == typeof e || e === a || e === c || e === s || e === i || e === d || e === p || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === v || e.$$typeof === y || e.$$typeof === b || e.$$typeof === g);
        }

        function ye() {
            var e = E.current;
            if (null === e) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            return e;
        }

        function be() {
            if (x.current) {
                var e = _(x.current.type);
                if (e) return "\n\nCheck the render method of `" + e + "`.";
            }
            return "";
        }

        function we(e) {
            return null != e && void 0 !== (t = e.__source) ? "\n\nCheck your code at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + "." : "";
            var t;
        }

        se = !1;
        var ke = {};

        function Ee(e, t) {
            if (e._store && !e._store.validated && null == e.key) {
                e._store.validated = !0;
                var n = function (e) {
                    var t = be();
                    if (!t) {
                        var n = "string" == typeof e ? e : e.displayName || e.name;
                        n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
                    }
                    return t;
                }(t);
                if (!ke[ n ]) {
                    ke[ n ] = !0;
                    var r = "";
                    e && e._owner && e._owner !== x.current && (r = " It was passed a child from " + _(e._owner.type) + "."), R(e), O("Each child in a list should have a unique \"key\" prop.%s%s See https://fb.me/react-warning-keys for more information.", n, r), R(null);
                }
            }
        }

        function xe(e, t) {
            if ("object" == typeof e) if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
                var r = e[ n ];
                re(r) && Ee(r, t);
            } else if (re(e)) e._store && (e._store.validated = !0); else if (e) {
                var o = k(e);
                if ("function" == typeof o && o !== e.entries) for (var a, i = o.call(e); !(a = i.next()).done;) re(a.value) && Ee(a.value, t);
            }
        }

        function Se(e) {
            var n = e.type;
            if (null != n && "string" != typeof n) {
                var r, o = _(n);
                if ("function" == typeof n) r = n.propTypes; else {
                    if ("object" != typeof n || n.$$typeof !== f && n.$$typeof !== h) return;
                    r = n.propTypes;
                }
                r ? (R(e), t(r, e.props, "prop", o, T.getStackAddendum), R(null)) : void 0 === n.PropTypes || se || (se = !0, O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown")), "function" != typeof n.getDefaultProps || n.getDefaultProps.isReactClassApproved || O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
        }

        function _e(e) {
            R(e);
            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
                var r = t[ n ];
                if ("children" !== r && "key" !== r) {
                    O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r);
                    break;
                }
            }
            null !== e.ref && O("Invalid attribute `ref` supplied to `React.Fragment`."), R(null);
        }

        function Te(e, t, n) {
            var o = ve(e);
            if (!o) {
                var i = "";
                (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var s, l = we(t);
                i += l || be(), null === e ? s = "null" : Array.isArray(e) ? s = "array" : void 0 !== e && e.$$typeof === r ? (s = "<" + (_(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, i);
            }
            var u = te.apply(this, arguments);
            if (null == u) return u;
            if (o) for (var c = 2; c < arguments.length; c++) xe(arguments[ c ], e);
            return e === a ? _e(u) : Se(u), u;
        }

        var Ce = !1;
        try {
            var Re = Object.freeze({}), Pe = new Map([[Re, null]]), Ne = new Set([Re]);
            Pe.set(0, 0), Ne.add(0);
        } catch (e) {
        }
        var Oe = Te, Ie = function (e, t, n) {
            for (var r = ne.apply(this, arguments), o = 2; o < arguments.length; o++) xe(arguments[ o ], r.type);
            return Se(r), r;
        }, $e = function (e) {
            var t = Te.bind(null, e);
            return t.type = e, Ce || (Ce = !0, N("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
                enumerable: !1,
                get: function () {
                    return N("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: e }), e;
                }
            }), t;
        }, De = {
            map: function (e, t, n) {
                if (null == e) return e;
                var r = [];
                return ge(e, r, null, t, n), r;
            }, forEach: function (e, t, n) {
                if (null == e) return e;
                var r = ue(null, null, t, n);
                de(e, he, r), ce(r);
            }, count: function (e) {
                return de(e, (function () {
                    return null;
                }), null);
            }, toArray: function (e) {
                var t = [];
                return ge(e, t, null, (function (e) {
                    return e;
                })), t;
            }, only: function (e) {
                if (!re(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e;
            }
        };
        react_development.Children = De, react_development.Component = j, react_development.Fragment = a, react_development.Profiler = s, react_development.PureComponent = B, react_development.StrictMode = i, react_development.Suspense = d, react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, react_development.cloneElement = Ie, react_development.createContext = function (e, t) {
            void 0 === t ? t = null : null !== t && "function" != typeof t && O("createContext: Expected the optional second argument to be a function. Instead received: %s", t);
            var n = {
                $$typeof: u,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            };
            n.Provider = { $$typeof: l, _context: n };
            var r = !1, o = !1, a = { $$typeof: u, _context: n, _calculateChangedBits: n._calculateChangedBits };
            return Object.defineProperties(a, {
                Provider: {
                    get: function () {
                        return o || (o = !0, O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), n.Provider;
                    }, set: function (e) {
                        n.Provider = e;
                    }
                }, _currentValue: {
                    get: function () {
                        return n._currentValue;
                    }, set: function (e) {
                        n._currentValue = e;
                    }
                }, _currentValue2: {
                    get: function () {
                        return n._currentValue2;
                    }, set: function (e) {
                        n._currentValue2 = e;
                    }
                }, _threadCount: {
                    get: function () {
                        return n._threadCount;
                    }, set: function (e) {
                        n._threadCount = e;
                    }
                }, Consumer: {
                    get: function () {
                        return r || (r = !0, O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), n.Consumer;
                    }
                }
            }), n.Consumer = a, n._currentRenderer = null, n._currentRenderer2 = null, n;
        }, react_development.createElement = Oe, react_development.createFactory = $e, react_development.createRef = function () {
            var e = { current: null };
            return Object.seal(e), e;
        }, react_development.forwardRef = function (e) {
            return null != e && e.$$typeof === h ? O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof e ? O("forwardRef requires a render function but was given %s.", null === e ? "null" : typeof e) : 0 !== e.length && 2 !== e.length && O("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === e.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), null != e && (null == e.defaultProps && null == e.propTypes || O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")), {
                $$typeof: f,
                render: e
            };
        }, react_development.isValidElement = re, react_development.lazy = function (e) {
            var t, n, r = { $$typeof: m, _ctor: e, _status: -1, _result: null };
            return Object.defineProperties(r, {
                defaultProps: {
                    configurable: !0, get: function () {
                        return t;
                    }, set: function (e) {
                        O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), t = e, Object.defineProperty(r, "defaultProps", { enumerable: !0 });
                    }
                }, propTypes: {
                    configurable: !0, get: function () {
                        return n;
                    }, set: function (e) {
                        O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), n = e, Object.defineProperty(r, "propTypes", { enumerable: !0 });
                    }
                }
            }), r;
        }, react_development.memo = function (e, t) {
            return ve(e) || O("memo: The first argument must be a component. Instead received: %s", null === e ? "null" : typeof e), {
                $$typeof: h,
                type: e,
                compare: void 0 === t ? null : t
            };
        }, react_development.useCallback = function (e, t) {
            return ye().useCallback(e, t);
        }, react_development.useContext = function (e, t) {
            var n = ye();
            if (void 0 !== t && O("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", t, "number" == typeof t && Array.isArray(arguments[ 2 ]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : ""), void 0 !== e._context) {
                var r = e._context;
                r.Consumer === e ? O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : r.Provider === e && O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
            }
            return n.useContext(e, t);
        }, react_development.useDebugValue = function (e, t) {
            return ye().useDebugValue(e, t);
        }, react_development.useEffect = function (e, t) {
            return ye().useEffect(e, t);
        }, react_development.useImperativeHandle = function (e, t, n) {
            return ye().useImperativeHandle(e, t, n);
        }, react_development.useLayoutEffect = function (e, t) {
            return ye().useLayoutEffect(e, t);
        }, react_development.useMemo = function (e, t) {
            return ye().useMemo(e, t);
        }, react_development.useReducer = function (e, t, n) {
            return ye().useReducer(e, t, n);
        }, react_development.useRef = function (e) {
            return ye().useRef(e);
        }, react_development.useState = function (e) {
            return ye().useState(e);
        }, react_development.version = "16.14.0";
    }(), "production" === process.env.NODE_ENV ? react.exports = react_production_min : react.exports = react_development;
    var React = react.exports, reactDom = { exports: {} }, reactDom_production_min = {}, scheduler = { exports: {} },
        scheduler_production_min = {};
    !function (e) {
        var t, n, r, o, a;
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var i = null, s = null, l = function () {
                if (null !== i) try {
                    var t = e.unstable_now();
                    i(!0, t), i = null;
                } catch (e) {
                    throw setTimeout(l, 0), e;
                }
            }, u = Date.now();
            e.unstable_now = function () {
                return Date.now() - u;
            }, t = function (e) {
                null !== i ? setTimeout(t, 0, e) : (i = e, setTimeout(l, 0));
            }, n = function (e, t) {
                s = setTimeout(e, t);
            }, r = function () {
                clearTimeout(s);
            }, o = function () {
                return !1;
            }, a = e.unstable_forceFrameRate = function () {
            };
        } else {
            var c = window.performance, f = window.Date, d = window.setTimeout, p = window.clearTimeout;
            if ("undefined" != typeof console) {
                var h = window.cancelAnimationFrame;
                "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            }
            if ("object" == typeof c && "function" == typeof c.now) e.unstable_now = function () {
                return c.now();
            }; else {
                var m = f.now();
                e.unstable_now = function () {
                    return f.now() - m;
                };
            }
            var g = !1, v = null, y = -1, b = 5, w = 0;
            o = function () {
                return e.unstable_now() >= w;
            }, a = function () {
            }, e.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : b = 0 < e ? Math.floor(1e3 / e) : 5;
            };
            var k = new MessageChannel, E = k.port2;
            k.port1.onmessage = function () {
                if (null !== v) {
                    var t = e.unstable_now();
                    w = t + b;
                    try {
                        v(!0, t) ? E.postMessage(null) : (g = !1, v = null);
                    } catch (e) {
                        throw E.postMessage(null), e;
                    }
                } else g = !1;
            }, t = function (e) {
                v = e, g || (g = !0, E.postMessage(null));
            }, n = function (t, n) {
                y = d((function () {
                    t(e.unstable_now());
                }), n);
            }, r = function () {
                p(y), y = -1;
            };
        }

        function x(e, t) {
            var n = e.length;
            e.push(t);
            e:for (; ;) {
                var r = n - 1 >>> 1, o = e[ r ];
                if (!(void 0 !== o && 0 < T(o, t))) break e;
                e[ r ] = t, e[ n ] = o, n = r;
            }
        }

        function S(e) {
            return void 0 === (e = e[ 0 ]) ? null : e;
        }

        function _(e) {
            var t = e[ 0 ];
            if (void 0 !== t) {
                var n = e.pop();
                if (n !== t) {
                    e[ 0 ] = n;
                    e:for (var r = 0, o = e.length; r < o;) {
                        var a = 2 * (r + 1) - 1, i = e[ a ], s = a + 1, l = e[ s ];
                        if (void 0 !== i && 0 > T(i, n)) void 0 !== l && 0 > T(l, i) ? (e[ r ] = l, e[ s ] = n, r = s) : (e[ r ] = i, e[ a ] = n, r = a); else {
                            if (!(void 0 !== l && 0 > T(l, n))) break e;
                            e[ r ] = l, e[ s ] = n, r = s;
                        }
                    }
                }
                return t;
            }
            return null;
        }

        function T(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id;
        }

        var C = [], R = [], P = 1, N = null, O = 3, I = !1, $ = !1, D = !1;

        function M(e) {
            for (var t = S(R); null !== t;) {
                if (null === t.callback) _(R); else {
                    if (!(t.startTime <= e)) break;
                    _(R), t.sortIndex = t.expirationTime, x(C, t);
                }
                t = S(R);
            }
        }

        function A(e) {
            if (D = !1, M(e), !$) if (null !== S(C)) $ = !0, t(j); else {
                var r = S(R);
                null !== r && n(A, r.startTime - e);
            }
        }

        function j(t, a) {
            $ = !1, D && (D = !1, r()), I = !0;
            var i = O;
            try {
                for (M(a), N = S(C); null !== N && (!(N.expirationTime > a) || t && !o());) {
                    var s = N.callback;
                    if (null !== s) {
                        N.callback = null, O = N.priorityLevel;
                        var l = s(N.expirationTime <= a);
                        a = e.unstable_now(), "function" == typeof l ? N.callback = l : N === S(C) && _(C), M(a);
                    } else _(C);
                    N = S(C);
                }
                if (null !== N) var u = !0; else {
                    var c = S(R);
                    null !== c && n(A, c.startTime - a), u = !1;
                }
                return u;
            } finally {
                N = null, O = i, I = !1;
            }
        }

        function F(e) {
            switch (e) {
                case 1:
                    return -1;
                case 2:
                    return 250;
                case 5:
                    return 1073741823;
                case 4:
                    return 1e4;
                default:
                    return 5e3;
            }
        }

        var L = a;
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (e) {
            e.callback = null;
        }, e.unstable_continueExecution = function () {
            $ || I || ($ = !0, t(j));
        }, e.unstable_getCurrentPriorityLevel = function () {
            return O;
        }, e.unstable_getFirstCallbackNode = function () {
            return S(C);
        }, e.unstable_next = function (e) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = O;
            }
            var n = O;
            O = t;
            try {
                return e();
            } finally {
                O = n;
            }
        }, e.unstable_pauseExecution = function () {
        }, e.unstable_requestPaint = L, e.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var n = O;
            O = e;
            try {
                return t();
            } finally {
                O = n;
            }
        }, e.unstable_scheduleCallback = function (o, a, i) {
            var s = e.unstable_now();
            if ("object" == typeof i && null !== i) {
                var l = i.delay;
                l = "number" == typeof l && 0 < l ? s + l : s, i = "number" == typeof i.timeout ? i.timeout : F(o);
            } else i = F(o), l = s;
            return o = {
                id: P++,
                callback: a,
                priorityLevel: o,
                startTime: l,
                expirationTime: i = l + i,
                sortIndex: -1
            }, l > s ? (o.sortIndex = l, x(R, o), null === S(C) && o === S(R) && (D ? r() : D = !0, n(A, l - s))) : (o.sortIndex = i, x(C, o), $ || I || ($ = !0, t(j))), o;
        }, e.unstable_shouldYield = function () {
            var t = e.unstable_now();
            M(t);
            var n = S(C);
            return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < N.expirationTime || o();
        }, e.unstable_wrapCallback = function (e) {
            var t = O;
            return function () {
                var n = O;
                O = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    O = n;
                }
            };
        };
    }(scheduler_production_min);
    var scheduler_development = {};
    !function (e) {
        "production" !== process.env.NODE_ENV && function () {
            var t, n, r, o, a;
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var i = null, s = null, l = function () {
                    if (null !== i) try {
                        var t = e.unstable_now();
                        i(!0, t), i = null;
                    } catch (e) {
                        throw setTimeout(l, 0), e;
                    }
                }, u = Date.now();
                e.unstable_now = function () {
                    return Date.now() - u;
                }, t = function (e) {
                    null !== i ? setTimeout(t, 0, e) : (i = e, setTimeout(l, 0));
                }, n = function (e, t) {
                    s = setTimeout(e, t);
                }, r = function () {
                    clearTimeout(s);
                }, o = function () {
                    return !1;
                }, a = e.unstable_forceFrameRate = function () {
                };
            } else {
                var c = window.performance, f = window.Date, d = window.setTimeout, p = window.clearTimeout;
                if ("undefined" != typeof console) {
                    var h = window.requestAnimationFrame, m = window.cancelAnimationFrame;
                    "function" != typeof h && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
                }
                if ("object" == typeof c && "function" == typeof c.now) e.unstable_now = function () {
                    return c.now();
                }; else {
                    var g = f.now();
                    e.unstable_now = function () {
                        return f.now() - g;
                    };
                }
                var v = !1, y = null, b = -1, w = 5, k = 0;
                o = function () {
                    return e.unstable_now() >= k;
                }, a = function () {
                }, e.unstable_forceFrameRate = function (e) {
                    e < 0 || e > 125 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : w = e > 0 ? Math.floor(1e3 / e) : 5;
                };
                var E = new MessageChannel, x = E.port2;
                E.port1.onmessage = function () {
                    if (null !== y) {
                        var t = e.unstable_now();
                        k = t + w;
                        try {
                            y(!0, t) ? x.postMessage(null) : (v = !1, y = null);
                        } catch (e) {
                            throw x.postMessage(null), e;
                        }
                    } else v = !1;
                }, t = function (e) {
                    y = e, v || (v = !0, x.postMessage(null));
                }, n = function (t, n) {
                    b = d((function () {
                        t(e.unstable_now());
                    }), n);
                }, r = function () {
                    p(b), b = -1;
                };
            }

            function S(e, t) {
                var n = e.length;
                e.push(t), function (e, t, n) {
                    var r = n;
                    for (; ;) {
                        var o = r - 1 >>> 1, a = e[ o ];
                        if (!(void 0 !== a && C(a, t) > 0)) return;
                        e[ o ] = t, e[ r ] = a, r = o;
                    }
                }(e, t, n);
            }

            function _(e) {
                var t = e[ 0 ];
                return void 0 === t ? null : t;
            }

            function T(e) {
                var t = e[ 0 ];
                if (void 0 !== t) {
                    var n = e.pop();
                    return n !== t && (e[ 0 ] = n, function (e, t, n) {
                        var r = n, o = e.length;
                        for (; r < o;) {
                            var a = 2 * (r + 1) - 1, i = e[ a ], s = a + 1, l = e[ s ];
                            if (void 0 !== i && C(i, t) < 0) void 0 !== l && C(l, i) < 0 ? (e[ r ] = l, e[ s ] = t, r = s) : (e[ r ] = i, e[ a ] = t, r = a); else {
                                if (!(void 0 !== l && C(l, t) < 0)) return;
                                e[ r ] = l, e[ s ] = t, r = s;
                            }
                        }
                    }(e, n, 0)), t;
                }
                return null;
            }

            function C(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }

            var R = 0, P = 0,
                N = "function" == typeof SharedArrayBuffer ? new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT) : "function" == typeof ArrayBuffer ? new ArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT) : null,
                O = null !== N ? new Int32Array(N) : [];
            O[ 0 ] = 0, O[ 3 ] = 0, O[ 1 ] = 0;
            var I = 0, $ = null, D = null, M = 0;

            function A(e) {
                if (null !== D) {
                    var t = M;
                    if ((M += e.length) + 1 > I) {
                        if ((I *= 2) > 524288) return console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."), void j();
                        var n = new Int32Array(4 * I);
                        n.set(D), $ = n.buffer, D = n;
                    }
                    D.set(e, t);
                }
            }

            function j() {
                var e = $;
                return I = 0, $ = null, D = null, M = 0, e;
            }

            function F(e, t) {
                O[ 3 ]++, null !== D && A([1, 1e3 * t, e.id, e.priorityLevel]);
            }

            function L(e, t) {
                O[ 0 ] = 0, O[ 1 ] = 0, O[ 3 ]--, null !== D && A([2, 1e3 * t, e.id]);
            }

            function z(e, t) {
                R++, O[ 0 ] = e.priorityLevel, O[ 1 ] = e.id, O[ 2 ] = R, null !== D && A([5, 1e3 * t, e.id, R]);
            }

            function U(e, t) {
                O[ 0 ] = 0, O[ 1 ] = 0, O[ 2 ] = 0, null !== D && A([6, 1e3 * t, e.id, R]);
            }

            var B = [], W = [], V = 1, H = null, q = 3, Y = !1, Q = !1, K = !1;

            function X(e) {
                for (var t = _(W); null !== t;) {
                    if (null === t.callback) T(W); else {
                        if (!(t.startTime <= e)) return;
                        T(W), t.sortIndex = t.expirationTime, S(B, t), F(t, e), t.isQueued = !0;
                    }
                    t = _(W);
                }
            }

            function J(e) {
                if (K = !1, X(e), !Q) if (null !== _(B)) Q = !0, t(G); else {
                    var r = _(W);
                    null !== r && n(J, r.startTime - e);
                }
            }

            function G(t, a) {
                !function (e) {
                    null !== D && A([8, 1e3 * e, P]);
                }(a), Q = !1, K && (K = !1, r()), Y = !0;
                var i = q;
                try {
                    try {
                        return function (t, r) {
                            var a = r;
                            X(a), H = _(B);
                            for (; null !== H && (!(H.expirationTime > a) || t && !o());) {
                                var i = H.callback;
                                if (null !== i) {
                                    H.callback = null, q = H.priorityLevel;
                                    var s = H.expirationTime <= a;
                                    z(H, a);
                                    var l = i(s);
                                    a = e.unstable_now(), "function" == typeof l ? (H.callback = l, U(H, a)) : (L(H, a), H.isQueued = !1, H === _(B) && T(B)), X(a);
                                } else T(B);
                                H = _(B);
                            }
                            if (null !== H) return !0;
                            var u = _(W);
                            return null !== u && n(J, u.startTime - a), !1;
                        }(t, a);
                    } catch (t) {
                        if (null !== H) {
                            var s = e.unstable_now();
                            !function (e, t) {
                                O[ 0 ] = 0, O[ 1 ] = 0, O[ 3 ]--, null !== D && A([3, 1e3 * t, e.id]);
                            }(H, s), H.isQueued = !1;
                        }
                        throw t;
                    }
                } finally {
                    H = null, q = i, Y = !1, function (e) {
                        P++, null !== D && A([7, 1e3 * e, P]);
                    }(e.unstable_now());
                }
            }

            function Z(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3;
                }
            }

            var ee = a, te = {
                startLoggingProfilingEvents: function () {
                    I = 131072, $ = new ArrayBuffer(4 * I), D = new Int32Array($), M = 0;
                }, stopLoggingProfilingEvents: j, sharedProfilingBuffer: N
            };
            e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = te, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (t) {
                t.isQueued && (!function (e, t) {
                    O[ 3 ]--, null !== D && A([4, 1e3 * t, e.id]);
                }(t, e.unstable_now()), t.isQueued = !1), t.callback = null;
            }, e.unstable_continueExecution = function () {
                Q || Y || (Q = !0, t(G));
            }, e.unstable_getCurrentPriorityLevel = function () {
                return q;
            }, e.unstable_getFirstCallbackNode = function () {
                return _(B);
            }, e.unstable_next = function (e) {
                var t;
                switch (q) {
                    case 1:
                    case 2:
                    case 3:
                        t = 3;
                        break;
                    default:
                        t = q;
                }
                var n = q;
                q = t;
                try {
                    return e();
                } finally {
                    q = n;
                }
            }, e.unstable_pauseExecution = function () {
            }, e.unstable_requestPaint = ee, e.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3;
                }
                var n = q;
                q = e;
                try {
                    return t();
                } finally {
                    q = n;
                }
            }, e.unstable_scheduleCallback = function (o, a, i) {
                var s, l, u = e.unstable_now();
                if ("object" == typeof i && null !== i) {
                    var c = i.delay;
                    s = "number" == typeof c && c > 0 ? u + c : u, l = "number" == typeof i.timeout ? i.timeout : Z(o);
                } else l = Z(o), s = u;
                var f = s + l, d = {
                    id: V++,
                    callback: a,
                    priorityLevel: o,
                    startTime: s,
                    expirationTime: f,
                    sortIndex: -1,
                    isQueued: !1
                };
                return s > u ? (d.sortIndex = s, S(W, d), null === _(B) && d === _(W) && (K ? r() : K = !0, n(J, s - u))) : (d.sortIndex = f, S(B, d), F(d, u), d.isQueued = !0, Q || Y || (Q = !0, t(G))), d;
            }, e.unstable_shouldYield = function () {
                var t = e.unstable_now();
                X(t);
                var n = _(B);
                return n !== H && null !== H && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < H.expirationTime || o();
            }, e.unstable_wrapCallback = function (e) {
                var t = q;
                return function () {
                    var n = q;
                    q = t;
                    try {
                        return e.apply(this, arguments);
                    } finally {
                        q = n;
                    }
                };
            };
        }();
    }(scheduler_development), "production" === process.env.NODE_ENV ? scheduler.exports = scheduler_production_min : scheduler.exports = scheduler_development;
    var aa = react.exports, n$1 = objectAssign, r$1 = scheduler.exports;

    function u(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[ n ]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    if (!aa) throw Error(u(227));

    function ba(e, t, n, r, o, a, i, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (e) {
            this.onError(e);
        }
    }

    var da = !1, ea = null, fa = !1, ha = null, ia = {
        onError: function (e) {
            da = !0, ea = e;
        }
    };

    function ja(e, t, n, r, o, a, i, s, l) {
        da = !1, ea = null, ba.apply(ia, arguments);
    }

    function ka(e, t, n, r, o, a, i, s, l) {
        if (ja.apply(this, arguments), da) {
            if (!da) throw Error(u(198));
            var c = ea;
            da = !1, ea = null, fa || (fa = !0, ha = c);
        }
    }

    var la = null, ma = null, na = null;

    function oa(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = na(n), ka(r, t, void 0, e), e.currentTarget = null;
    }

    var pa = null, qa = {};

    function ra() {
        if (pa) for (var e in qa) {
            var t = qa[ e ], n = pa.indexOf(e);
            if (!(-1 < n)) throw Error(u(96, e));
            if (!sa[ n ]) {
                if (!t.extractEvents) throw Error(u(97, e));
                for (var r in sa[ n ] = t, n = t.eventTypes) {
                    var o = void 0, a = n[ r ], i = t, s = r;
                    if (ta.hasOwnProperty(s)) throw Error(u(99, s));
                    ta[ s ] = a;
                    var l = a.phasedRegistrationNames;
                    if (l) {
                        for (o in l) l.hasOwnProperty(o) && ua(l[ o ], i, s);
                        o = !0;
                    } else a.registrationName ? (ua(a.registrationName, i, s), o = !0) : o = !1;
                    if (!o) throw Error(u(98, r, e));
                }
            }
        }
    }

    function ua(e, t, n) {
        if (va[ e ]) throw Error(u(100, e));
        va[ e ] = t, wa[ e ] = t.eventTypes[ n ].dependencies;
    }

    var sa = [], ta = {}, va = {}, wa = {};

    function xa(e) {
        var t, n = !1;
        for (t in e) if (e.hasOwnProperty(t)) {
            var r = e[ t ];
            if (!qa.hasOwnProperty(t) || qa[ t ] !== r) {
                if (qa[ t ]) throw Error(u(102, t));
                qa[ t ] = r, n = !0;
            }
        }
        n && ra();
    }

    var ya = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        za = null, Aa = null, Ba = null;

    function Ca(e) {
        if (e = ma(e)) {
            if ("function" != typeof za) throw Error(u(280));
            var t = e.stateNode;
            t && (t = la(t), za(e.stateNode, e.type, t));
        }
    }

    function Da(e) {
        Aa ? Ba ? Ba.push(e) : Ba = [e] : Aa = e;
    }

    function Ea() {
        if (Aa) {
            var e = Aa, t = Ba;
            if (Ba = Aa = null, Ca(e), t) for (e = 0; e < t.length; e++) Ca(t[ e ]);
        }
    }

    function Fa(e, t) {
        return e(t);
    }

    function Ga(e, t, n, r, o) {
        return e(t, n, r, o);
    }

    function Ha() {
    }

    var Ia = Fa, Ja = !1, Ka = !1;

    function La() {
        null === Aa && null === Ba || (Ha(), Ea());
    }

    function Ma(e, t, n) {
        if (Ka) return e(t, n);
        Ka = !0;
        try {
            return Ia(e, t, n);
        } finally {
            Ka = !1, La();
        }
    }

    var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Oa = Object.prototype.hasOwnProperty, Pa = {}, Qa = {};

    function Ra(e) {
        return !!Oa.call(Qa, e) || !Oa.call(Pa, e) && (Na.test(e) ? Qa[ e ] = !0 : (Pa[ e ] = !0, !1));
    }

    function Sa(e, t, n, r) {
        if (null !== n && 0 === n.type) return !1;
        switch (typeof t) {
            case"function":
            case"symbol":
                return !0;
            case"boolean":
                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default:
                return !1;
        }
    }

    function Ta(e, t, n, r) {
        if (null == t || Sa(e, t, n, r)) return !0;
        if (r) return !1;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
        return !1;
    }

    function v$1(e, t, n, r, o, a) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a;
    }

    var C = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        C[ e ] = new v$1(e, 0, !1, e, null, !1);
    })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
        var t = e[ 0 ];
        C[ t ] = new v$1(t, 1, !1, e[ 1 ], null, !1);
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        C[ e ] = new v$1(e, 2, !1, e.toLowerCase(), null, !1);
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        C[ e ] = new v$1(e, 2, !1, e, null, !1);
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        C[ e ] = new v$1(e, 3, !1, e.toLowerCase(), null, !1);
    })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        C[ e ] = new v$1(e, 3, !0, e, null, !1);
    })), ["capture", "download"].forEach((function (e) {
        C[ e ] = new v$1(e, 4, !1, e, null, !1);
    })), ["cols", "rows", "size", "span"].forEach((function (e) {
        C[ e ] = new v$1(e, 6, !1, e, null, !1);
    })), ["rowSpan", "start"].forEach((function (e) {
        C[ e ] = new v$1(e, 5, !1, e.toLowerCase(), null, !1);
    }));
    var Ua = /[\-:]([a-z])/g;

    function Va(e) {
        return e[ 1 ].toUpperCase();
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(Ua, Va);
        C[ t ] = new v$1(t, 1, !1, e, null, !1);
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(Ua, Va);
        C[ t ] = new v$1(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(Ua, Va);
        C[ t ] = new v$1(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
    })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        C[ e ] = new v$1(e, 1, !1, e.toLowerCase(), null, !1);
    })), C.xlinkHref = new v$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
        C[ e ] = new v$1(e, 1, !1, e.toLowerCase(), null, !0);
    }));
    var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function Xa(e, t, n, r) {
        var o = C.hasOwnProperty(t) ? C[ t ] : null;
        (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[ 0 ] || "O" === t[ 0 ]) && ("n" === t[ 1 ] || "N" === t[ 1 ]))) || (Ta(t, n, o, r) && (n = null), r || null === o ? Ra(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[ o.propertyName ] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }

    Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null }), Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
    var Ya = /^(.*)[\\\/]/, E = "function" == typeof Symbol && Symbol.for, Za = E ? Symbol.for("react.element") : 60103,
        $a = E ? Symbol.for("react.portal") : 60106, ab = E ? Symbol.for("react.fragment") : 60107,
        bb = E ? Symbol.for("react.strict_mode") : 60108, cb = E ? Symbol.for("react.profiler") : 60114,
        db = E ? Symbol.for("react.provider") : 60109, eb = E ? Symbol.for("react.context") : 60110,
        fb = E ? Symbol.for("react.concurrent_mode") : 60111, gb = E ? Symbol.for("react.forward_ref") : 60112,
        hb = E ? Symbol.for("react.suspense") : 60113, ib = E ? Symbol.for("react.suspense_list") : 60120,
        jb = E ? Symbol.for("react.memo") : 60115, kb = E ? Symbol.for("react.lazy") : 60116,
        lb = E ? Symbol.for("react.block") : 60121, mb = "function" == typeof Symbol && Symbol.iterator;

    function nb(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = mb && e[ mb ] || e[ "@@iterator" ]) ? e : null;
    }

    function ob(e) {
        if (-1 === e._status) {
            e._status = 0;
            var t = e._ctor;
            t = t(), e._result = t, t.then((function (t) {
                0 === e._status && (t = t.default, e._status = 1, e._result = t);
            }), (function (t) {
                0 === e._status && (e._status = 2, e._result = t);
            }));
        }
    }

    function pb(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case ab:
                return "Fragment";
            case $a:
                return "Portal";
            case cb:
                return "Profiler";
            case bb:
                return "StrictMode";
            case hb:
                return "Suspense";
            case ib:
                return "SuspenseList";
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case eb:
                return "Context.Consumer";
            case db:
                return "Context.Provider";
            case gb:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case jb:
                return pb(e.type);
            case lb:
                return pb(e.render);
            case kb:
                if (e = 1 === e._status ? e._result : null) return pb(e);
        }
        return null;
    }

    function qb(e) {
        var t = "";
        do {
            e:switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner, o = e._debugSource, a = pb(e.type);
                    n = null, r && (n = pb(r.type)), r = a, a = "", o ? a = " (at " + o.fileName.replace(Ya, "") + ":" + o.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a;
            }
            t += n, e = e.return;
        } while (e);
        return t;
    }

    function rb(e) {
        switch (typeof e) {
            case"boolean":
            case"number":
            case"object":
            case"string":
            case"undefined":
                return e;
            default:
                return "";
        }
    }

    function sb(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }

    function tb(e) {
        var t = sb(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[ t ];
        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get, a = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0, get: function () {
                    return o.call(this);
                }, set: function (e) {
                    r = "" + e, a.call(this, e);
                }
            }), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
                getValue: function () {
                    return r;
                }, setValue: function (e) {
                    r = "" + e;
                }, stopTracking: function () {
                    e._valueTracker = null, delete e[ t ];
                }
            };
        }
    }

    function xb(e) {
        e._valueTracker || (e._valueTracker = tb(e));
    }

    function yb(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = sb(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
    }

    function zb(e, t) {
        var n = t.checked;
        return n$1({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        });
    }

    function Ab(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
        n = rb(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        };
    }

    function Bb(e, t) {
        null != (t = t.checked) && Xa(e, "checked", t, !1);
    }

    function Cb(e, t) {
        Bb(e, t);
        var n = rb(t.value), r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Db(e, t.type, n) : t.hasOwnProperty("defaultValue") && Db(e, t.type, rb(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
    }

    function Eb(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n);
    }

    function Db(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }

    function Fb(e) {
        var t = "";
        return aa.Children.forEach(e, (function (e) {
            null != e && (t += e);
        })), t;
    }

    function Gb(e, t) {
        return e = n$1({ children: void 0 }, t), (t = Fb(t.children)) && (e.children = t), e;
    }

    function Hb(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var o = 0; o < n.length; o++) t[ "$" + n[ o ] ] = !0;
            for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[ n ].value), e[ n ].selected !== o && (e[ n ].selected = o), o && r && (e[ n ].defaultSelected = !0);
        } else {
            for (n = "" + rb(n), t = null, o = 0; o < e.length; o++) {
                if (e[ o ].value === n) return e[ o ].selected = !0, void (r && (e[ o ].defaultSelected = !0));
                null !== t || e[ o ].disabled || (t = e[ o ]);
            }
            null !== t && (t.selected = !0);
        }
    }

    function Ib(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(u(91));
        return n$1({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }

    function Jb(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t) throw Error(u(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length)) throw Error(u(93));
                    n = n[ 0 ];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        }
        e._wrapperState = { initialValue: rb(n) };
    }

    function Kb(e, t) {
        var n = rb(t.value), r = rb(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
    }

    function Lb(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
    }

    var Mb = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Nb(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }

    function Ob(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Nb(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
    }

    var Pb, Qb = (a = function (e, t) {
        if (e.namespaceURI !== Mb.svg || "innerHTML" in e) e.innerHTML = t; else {
            for ((Pb = Pb || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pb.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild);
        }
    }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function () {
            return a(e, t);
        }));
    } : a), a;

    function Rb(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
    }

    function Sb(e, t) {
        var n = {};
        return n[ e.toLowerCase() ] = t.toLowerCase(), n[ "Webkit" + e ] = "webkit" + t, n[ "Moz" + e ] = "moz" + t, n;
    }

    var Tb = {
        animationend: Sb("Animation", "AnimationEnd"),
        animationiteration: Sb("Animation", "AnimationIteration"),
        animationstart: Sb("Animation", "AnimationStart"),
        transitionend: Sb("Transition", "TransitionEnd")
    }, Ub = {}, Vb = {};

    function Wb(e) {
        if (Ub[ e ]) return Ub[ e ];
        if (!Tb[ e ]) return e;
        var t, n = Tb[ e ];
        for (t in n) if (n.hasOwnProperty(t) && t in Vb) return Ub[ e ] = n[ t ];
        return e;
    }

    ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
    var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"),
        ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        bc = new ("function" == typeof WeakMap ? WeakMap : Map);

    function cc(e) {
        var t = bc.get(e);
        return void 0 === t && (t = new Map, bc.set(e, t)), t;
    }

    function dc(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return;
            } while (e);
        }
        return 3 === t.tag ? n : null;
    }

    function ec(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated;
        }
        return null;
    }

    function fc(e) {
        if (dc(e) !== e) throw Error(u(188));
    }

    function gc(e) {
        var t = e.alternate;
        if (!t) {
            if (null === (t = dc(e))) throw Error(u(188));
            return t !== e ? null : e;
        }
        for (var n = e, r = t; ;) {
            var o = n.return;
            if (null === o) break;
            var a = o.alternate;
            if (null === a) {
                if (null !== (r = o.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (o.child === a.child) {
                for (a = o.child; a;) {
                    if (a === n) return fc(o), e;
                    if (a === r) return fc(o), t;
                    a = a.sibling;
                }
                throw Error(u(188));
            }
            if (n.return !== r.return) n = o, r = a; else {
                for (var i = !1, s = o.child; s;) {
                    if (s === n) {
                        i = !0, n = o, r = a;
                        break;
                    }
                    if (s === r) {
                        i = !0, r = o, n = a;
                        break;
                    }
                    s = s.sibling;
                }
                if (!i) {
                    for (s = a.child; s;) {
                        if (s === n) {
                            i = !0, n = a, r = o;
                            break;
                        }
                        if (s === r) {
                            i = !0, r = a, n = o;
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!i) throw Error(u(189));
                }
            }
            if (n.alternate !== r) throw Error(u(190));
        }
        if (3 !== n.tag) throw Error(u(188));
        return n.stateNode.current === n ? e : t;
    }

    function hc(e) {
        if (!(e = gc(e))) return null;
        for (var t = e; ;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child; else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        return null;
    }

    function ic(e, t) {
        if (null == t) throw Error(u(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
    }

    function jc(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }

    var kc = null;

    function lc(e) {
        if (e) {
            var t = e._dispatchListeners, n = e._dispatchInstances;
            if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) oa(e, t[ r ], n[ r ]); else t && oa(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e);
        }
    }

    function mc(e) {
        if (null !== e && (kc = ic(kc, e)), e = kc, kc = null, e) {
            if (jc(e, lc), kc) throw Error(u(95));
            if (fa) throw e = ha, fa = !1, ha = null, e;
        }
    }

    function nc(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
    }

    function oc(e) {
        if (!ya) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[ e ]), t;
    }

    var pc = [];

    function qc(e) {
        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > pc.length && pc.push(e);
    }

    function rc(e, t, n, r) {
        if (pc.length) {
            var o = pc.pop();
            return o.topLevelType = e, o.eventSystemFlags = r, o.nativeEvent = t, o.targetInst = n, o;
        }
        return { topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: [] };
    }

    function sc(e) {
        var t = e.targetInst, n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break;
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo; else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo;
            }
            if (!r) break;
            5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = tc(r);
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[ n ];
            var o = nc(e.nativeEvent);
            r = e.topLevelType;
            var a = e.nativeEvent, i = e.eventSystemFlags;
            0 === n && (i |= 64);
            for (var s = null, l = 0; l < sa.length; l++) {
                var u = sa[ l ];
                u && (u = u.extractEvents(r, t, a, o, i)) && (s = ic(s, u));
            }
            mc(s);
        }
    }

    function uc(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case"scroll":
                    vc(t, "scroll", !0);
                    break;
                case"focus":
                case"blur":
                    vc(t, "focus", !0), vc(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                    break;
                case"cancel":
                case"close":
                    oc(e) && vc(t, e, !0);
                    break;
                case"invalid":
                case"submit":
                case"reset":
                    break;
                default:
                    -1 === ac.indexOf(e) && F(e, t);
            }
            n.set(e, null);
        }
    }

    var wc, xc, yc, zc = !1, Ac = [], Bc = null, Cc = null, Dc = null, Ec = new Map, Fc = new Map, Gc = [],
        Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function Jc(e, t) {
        var n = cc(t);
        Hc.forEach((function (e) {
            uc(e, t, n);
        })), Ic.forEach((function (e) {
            uc(e, t, n);
        }));
    }

    function Kc(e, t, n, r, o) {
        return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: o, container: r };
    }

    function Lc(e, t) {
        switch (e) {
            case"focus":
            case"blur":
                Bc = null;
                break;
            case"dragenter":
            case"dragleave":
                Cc = null;
                break;
            case"mouseover":
            case"mouseout":
                Dc = null;
                break;
            case"pointerover":
            case"pointerout":
                Ec.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                Fc.delete(t.pointerId);
        }
    }

    function Mc(e, t, n, r, o, a) {
        return null === e || e.nativeEvent !== a ? (e = Kc(t, n, r, o, a), null !== t && (null !== (t = Nc(t)) && xc(t)), e) : (e.eventSystemFlags |= r, e);
    }

    function Oc(e, t, n, r, o) {
        switch (t) {
            case"focus":
                return Bc = Mc(Bc, e, t, n, r, o), !0;
            case"dragenter":
                return Cc = Mc(Cc, e, t, n, r, o), !0;
            case"mouseover":
                return Dc = Mc(Dc, e, t, n, r, o), !0;
            case"pointerover":
                var a = o.pointerId;
                return Ec.set(a, Mc(Ec.get(a) || null, e, t, n, r, o)), !0;
            case"gotpointercapture":
                return a = o.pointerId, Fc.set(a, Mc(Fc.get(a) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }

    function Pc(e) {
        var t = tc(e.target);
        if (null !== t) {
            var n = dc(t);
            if (null !== n) if (13 === (t = n.tag)) {
                if (null !== (t = ec(n))) return e.blockedOn = t, void r$1.unstable_runWithPriority(e.priority, (function () {
                    yc(n);
                }));
            } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
    }

    function Qc(e) {
        if (null !== e.blockedOn) return !1;
        var t = Rc(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        if (null !== t) {
            var n = Nc(t);
            return null !== n && xc(n), e.blockedOn = t, !1;
        }
        return !0;
    }

    function Sc(e, t, n) {
        Qc(e) && n.delete(t);
    }

    function Tc() {
        for (zc = !1; 0 < Ac.length;) {
            var e = Ac[ 0 ];
            if (null !== e.blockedOn) {
                null !== (e = Nc(e.blockedOn)) && wc(e);
                break;
            }
            var t = Rc(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? e.blockedOn = t : Ac.shift();
        }
        null !== Bc && Qc(Bc) && (Bc = null), null !== Cc && Qc(Cc) && (Cc = null), null !== Dc && Qc(Dc) && (Dc = null), Ec.forEach(Sc), Fc.forEach(Sc);
    }

    function Uc(e, t) {
        e.blockedOn === t && (e.blockedOn = null, zc || (zc = !0, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Tc)));
    }

    function Vc(e) {
        function t(t) {
            return Uc(t, e);
        }

        if (0 < Ac.length) {
            Uc(Ac[ 0 ], e);
            for (var n = 1; n < Ac.length; n++) {
                var r = Ac[ n ];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for (null !== Bc && Uc(Bc, e), null !== Cc && Uc(Cc, e), null !== Dc && Uc(Dc, e), Ec.forEach(t), Fc.forEach(t), n = 0; n < Gc.length; n++) (r = Gc[ n ]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Gc.length && null === (n = Gc[ 0 ]).blockedOn;) Pc(n), null === n.blockedOn && Gc.shift();
    }

    var Wc = {}, Yc = new Map, Zc = new Map,
        $c = ["abort", "abort", Xb, "animationEnd", Yb, "animationIteration", Zb, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $b, "transitionEnd", "waiting", "waiting"];

    function ad(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[ n ], o = e[ n + 1 ], a = "on" + (o[ 0 ].toUpperCase() + o.slice(1));
            a = {
                phasedRegistrationNames: { bubbled: a, captured: a + "Capture" },
                dependencies: [r],
                eventPriority: t
            }, Zc.set(r, t), Yc.set(r, a), Wc[ o ] = a;
        }
    }

    ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), ad($c, 2);
    for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++) Zc.set(bd[ cd ], 0);
    var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = !0;

    function F(e, t) {
        vc(t, e, !1);
    }

    function vc(e, t, n) {
        var r = Zc.get(t);
        switch (void 0 === r ? 2 : r) {
            case 0:
                r = gd.bind(null, t, 1, e);
                break;
            case 1:
                r = hd.bind(null, t, 1, e);
                break;
            default:
                r = id.bind(null, t, 1, e);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }

    function gd(e, t, n, r) {
        Ja || Ha();
        var o = id, a = Ja;
        Ja = !0;
        try {
            Ga(o, e, t, n, r);
        } finally {
            (Ja = a) || La();
        }
    }

    function hd(e, t, n, r) {
        ed(dd, id.bind(null, e, t, n, r));
    }

    function id(e, t, n, r) {
        if (fd) if (0 < Ac.length && -1 < Hc.indexOf(e)) e = Kc(null, e, t, n, r), Ac.push(e); else {
            var o = Rc(e, t, n, r);
            if (null === o) Lc(e, r); else if (-1 < Hc.indexOf(e)) e = Kc(o, e, t, n, r), Ac.push(e); else if (!Oc(o, e, t, n, r)) {
                Lc(e, r), e = rc(e, r, null, t);
                try {
                    Ma(sc, e);
                } finally {
                    qc(e);
                }
            }
        }
    }

    function Rc(e, t, n, r) {
        if (null !== (n = tc(n = nc(r)))) {
            var o = dc(n);
            if (null === o) n = null; else {
                var a = o.tag;
                if (13 === a) {
                    if (null !== (n = ec(o))) return n;
                    n = null;
                } else if (3 === a) {
                    if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                    n = null;
                } else o !== n && (n = null);
            }
        }
        e = rc(e, r, n, t);
        try {
            Ma(sc, e);
        } finally {
            qc(e);
        }
        return null;
    }

    var jd = {
        animationIterationCount: !0,
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
    }, kd = ["Webkit", "ms", "Moz", "O"];

    function ld(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || jd.hasOwnProperty(e) && jd[ e ] ? ("" + t).trim() : t + "px";
    }

    function md(e, t) {
        for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"), o = ld(n, t[ n ], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[ n ] = o;
        }
    }

    Object.keys(jd).forEach((function (e) {
        kd.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), jd[ t ] = jd[ e ];
        }));
    }));
    var nd = n$1({ menuitem: !0 }, {
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

    function od(e, t) {
        if (t) {
            if (nd[ e ] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(u(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(u(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
            }
            if (null != t.style && "object" != typeof t.style) throw Error(u(62, ""));
        }
    }

    function pd(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0;
        }
    }

    var qd = Mb.html;

    function rd(e, t) {
        var n = cc(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = wa[ t ];
        for (var r = 0; r < t.length; r++) uc(t[ r ], e, n);
    }

    function sd() {
    }

    function td(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body;
        } catch (t) {
            return e.body;
        }
    }

    function ud(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e;
    }

    function vd(e, t) {
        var n, r = ud(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
                e = n;
            }
            e:{
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = ud(r);
        }
    }

    function wd(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? wd(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
    }

    function xd() {
        for (var e = window, t = td(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
                n = !1;
            }
            if (!n) break;
            t = td((e = t.contentWindow).document);
        }
        return t;
    }

    function yd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
    }

    var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null;

    function Fd(e, t) {
        switch (e) {
            case"button":
            case"input":
            case"select":
            case"textarea":
                return !!t.autoFocus;
        }
        return !1;
    }

    function Gd(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
    }

    var Hd = "function" == typeof setTimeout ? setTimeout : void 0,
        Id = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function Jd(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
        }
        return e;
    }

    function Kd(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if (n === zd || n === Cd || n === Bd) {
                    if (0 === t) return e;
                    t--;
                } else n === Ad && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }

    var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld,
        Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;

    function tc(e) {
        var t = e[ Md ];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[ Od ] || n[ Md ]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = Kd(e); null !== e;) {
                    if (n = e[ Md ]) return n;
                    e = Kd(e);
                }
                return t;
            }
            n = (e = n).parentNode;
        }
        return null;
    }

    function Nc(e) {
        return !(e = e[ Md ] || e[ Od ]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e;
    }

    function Pd(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(u(33));
    }

    function Qd(e) {
        return e[ Nd ] || null;
    }

    function Rd(e) {
        do {
            e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
    }

    function Sd(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = la(n);
        if (!r) return null;
        n = r[ t ];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(u(231, t, typeof n));
        return n;
    }

    function Td(e, t, n) {
        (t = Sd(e, n.dispatchConfig.phasedRegistrationNames[ t ])) && (n._dispatchListeners = ic(n._dispatchListeners, t), n._dispatchInstances = ic(n._dispatchInstances, e));
    }

    function Ud(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = Rd(t);
            for (t = n.length; 0 < t--;) Td(n[ t ], "captured", e);
            for (t = 0; t < n.length; t++) Td(n[ t ], "bubbled", e);
        }
    }

    function Vd(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = Sd(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = ic(n._dispatchListeners, t), n._dispatchInstances = ic(n._dispatchInstances, e));
    }

    function Wd(e) {
        e && e.dispatchConfig.registrationName && Vd(e._targetInst, null, e);
    }

    function Xd(e) {
        jc(e, Ud);
    }

    var Yd = null, Zd = null, $d = null;

    function ae() {
        if ($d) return $d;
        var e, t, n = Zd, r = n.length, o = "value" in Yd ? Yd.value : Yd.textContent, a = o.length;
        for (e = 0; e < r && n[ e ] === o[ e ]; e++) ;
        var i = r - e;
        for (t = 1; t <= i && n[ r - t ] === o[ a - t ]; t++) ;
        return $d = o.slice(e, 1 < t ? 1 - t : void 0);
    }

    function be() {
        return !0;
    }

    function ce() {
        return !1;
    }

    function G(e, t, n, r) {
        for (var o in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(o) && ((t = e[ o ]) ? this[ o ] = t(n) : "target" === o ? this.target = r : this[ o ] = n[ o ]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? be : ce, this.isPropagationStopped = ce, this;
    }

    function ee(e, t, n, r) {
        if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, r), o;
        }
        return new this(e, t, n, r);
    }

    function fe(e) {
        if (!(e instanceof this)) throw Error(u(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }

    function de(e) {
        e.eventPool = [], e.getPooled = ee, e.release = fe;
    }

    n$1(G.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = be);
        }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = be);
        }, persist: function () {
            this.isPersistent = be;
        }, isPersistent: ce, destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[ e ] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = ce, this._dispatchInstances = this._dispatchListeners = null;
        }
    }), G.Interface = {
        type: null, target: null, currentTarget: function () {
            return null;
        }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
            return e.timeStamp || Date.now();
        }, defaultPrevented: null, isTrusted: null
    }, G.extend = function (e) {
        function t() {
        }

        function n() {
            return r.apply(this, arguments);
        }

        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return n$1(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = n$1({}, r.Interface, e), n.extend = r.extend, de(n), n;
    }, de(G);
    var ge = G.extend({ data: null }), he = G.extend({ data: null }), ie = [9, 13, 27, 32],
        je = ya && "CompositionEvent" in window, ke = null;
    ya && "documentMode" in document && (ke = document.documentMode);
    var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke),
        ne = String.fromCharCode(32), oe = {
            beforeInput: {
                phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        }, pe = !1;

    function qe(e, t) {
        switch (e) {
            case"keyup":
                return -1 !== ie.indexOf(t.keyCode);
            case"keydown":
                return 229 !== t.keyCode;
            case"keypress":
            case"mousedown":
            case"blur":
                return !0;
            default:
                return !1;
        }
    }

    function re$1(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }

    var se = !1;

    function te(e, t) {
        switch (e) {
            case"compositionend":
                return re$1(t);
            case"keypress":
                return 32 !== t.which ? null : (pe = !0, ne);
            case"textInput":
                return (e = t.data) === ne && pe ? null : e;
            default:
                return null;
        }
    }

    function ue(e, t) {
        if (se) return "compositionend" === e || !je && qe(e, t) ? (e = ae(), $d = Zd = Yd = null, se = !1, e) : null;
        switch (e) {
            default:
                return null;
            case"keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case"compositionend":
                return me && "ko" !== t.locale ? null : t.data;
        }
    }

    var ve = {
        eventTypes: oe, extractEvents: function (e, t, n, r) {
            var o;
            if (je) e:{
                switch (e) {
                    case"compositionstart":
                        var a = oe.compositionStart;
                        break e;
                    case"compositionend":
                        a = oe.compositionEnd;
                        break e;
                    case"compositionupdate":
                        a = oe.compositionUpdate;
                        break e;
                }
                a = void 0;
            } else se ? qe(e, n) && (a = oe.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = oe.compositionStart);
            return a ? (me && "ko" !== n.locale && (se || a !== oe.compositionStart ? a === oe.compositionEnd && se && (o = ae()) : (Zd = "value" in (Yd = r) ? Yd.value : Yd.textContent, se = !0)), a = ge.getPooled(a, t, n, r), o ? a.data = o : null !== (o = re$1(n)) && (a.data = o), Xd(a), o = a) : o = null, (e = le ? te(e, n) : ue(e, n)) ? ((t = he.getPooled(oe.beforeInput, t, n, r)).data = e, Xd(t)) : t = null, null === o ? t : null === t ? o : [o, t];
        }
    }, we = {
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

    function xe(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!we[ e.type ] : "textarea" === t;
    }

    var ye = {
        change: {
            phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function ze(e, t, n) {
        return (e = G.getPooled(ye.change, e, t, n)).type = "change", Da(n), Xd(e), e;
    }

    var Ae = null, Be = null;

    function Ce(e) {
        mc(e);
    }

    function De(e) {
        if (yb(Pd(e))) return e;
    }

    function Ee(e, t) {
        if ("change" === e) return t;
    }

    var Fe = !1;

    function Ge() {
        Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
    }

    function He(e) {
        if ("value" === e.propertyName && De(Be)) if (e = ze(Be, e, nc(e)), Ja) mc(e); else {
            Ja = !0;
            try {
                Fa(Ce, e);
            } finally {
                Ja = !1, La();
            }
        }
    }

    function Ie(e, t, n) {
        "focus" === e ? (Ge(), Be = n, (Ae = t).attachEvent("onpropertychange", He)) : "blur" === e && Ge();
    }

    function Je(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return De(Be);
    }

    function Ke(e, t) {
        if ("click" === e) return De(t);
    }

    function Le(e, t) {
        if ("input" === e || "change" === e) return De(t);
    }

    ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
    var Me = {
            eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function (e, t, n, r) {
                var o = t ? Pd(t) : window, a = o.nodeName && o.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === o.type) var i = Ee; else if (xe(o)) if (Fe) i = Le; else {
                    i = Je;
                    var s = Ie;
                } else (a = o.nodeName) && "input" === a.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (i = Ke);
                if (i && (i = i(e, t))) return ze(i, n, r);
                s && s(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && Db(o, "number", o.value);
            }
        }, Ne = G.extend({ view: null, detail: null }),
        Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

    function Pe(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Oe[ e ]) && !!t[ e ];
    }

    function Qe() {
        return Pe;
    }

    var Re = 0, Se = 0, Te = !1, Ue = !1, Ve = Ne.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Qe,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
        },
        movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = Re;
            return Re = e.screenX, Te ? "mousemove" === e.type ? e.screenX - t : 0 : (Te = !0, 0);
        },
        movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Se;
            return Se = e.screenY, Ue ? "mousemove" === e.type ? e.screenY - t : 0 : (Ue = !0, 0);
        }
    }), We = Ve.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
    }), Xe = {
        mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
        mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
        pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
        pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] }
    }, Ye = {
        eventTypes: Xe, extractEvents: function (e, t, n, r, o) {
            var a = "mouseover" === e || "pointerover" === e, i = "mouseout" === e || "pointerout" === e;
            if (a && 0 == (32 & o) && (n.relatedTarget || n.fromElement) || !i && !a) return null;
            (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, i) ? (i = t, null !== (t = (t = n.relatedTarget || n.toElement) ? tc(t) : null) && (t !== dc(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : i = null;
            if (i === t) return null;
            if ("mouseout" === e || "mouseover" === e) var s = Ve, l = Xe.mouseLeave, u = Xe.mouseEnter,
                c = "mouse"; else "pointerout" !== e && "pointerover" !== e || (s = We, l = Xe.pointerLeave, u = Xe.pointerEnter, c = "pointer");
            if (e = null == i ? a : Pd(i), a = null == t ? a : Pd(t), (l = s.getPooled(l, i, n, r)).type = c + "leave", l.target = e, l.relatedTarget = a, (n = s.getPooled(u, t, n, r)).type = c + "enter", n.target = a, n.relatedTarget = e, c = t, (r = i) && c) e:{
                for (u = c, i = 0, e = s = r; e; e = Rd(e)) i++;
                for (e = 0, t = u; t; t = Rd(t)) e++;
                for (; 0 < i - e;) s = Rd(s), i--;
                for (; 0 < e - i;) u = Rd(u), e--;
                for (; i--;) {
                    if (s === u || s === u.alternate) break e;
                    s = Rd(s), u = Rd(u);
                }
                s = null;
            } else s = null;
            for (u = s, s = []; r && r !== u && (null === (i = r.alternate) || i !== u);) s.push(r), r = Rd(r);
            for (r = []; c && c !== u && (null === (i = c.alternate) || i !== u);) r.push(c), c = Rd(c);
            for (c = 0; c < s.length; c++) Vd(s[ c ], "bubbled", l);
            for (c = r.length; 0 < c--;) Vd(r[ c ], "captured", n);
            return 0 == (64 & o) ? [l] : [l, n];
        }
    };

    function Ze(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
    }

    var $e = "function" == typeof Object.is ? Object.is : Ze, af = Object.prototype.hasOwnProperty;

    function bf(e, t) {
        if ($e(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!af.call(t, n[ r ]) || !$e(e[ n[ r ] ], t[ n[ r ] ])) return !1;
        return !0;
    }

    var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = {
        select: {
            phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" },
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
    }, ef = null, ff = null, gf = null, hf = !1;

    function jf(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return hf || null == ef || ef !== td(n) ? null : ("selectionStart" in (n = ef) && yd(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, gf && bf(gf, n) ? null : (gf = n, (e = G.getPooled(df.select, ff, e, t)).type = "select", e.target = ef, Xd(e), e));
    }

    var kf = {
        eventTypes: df, extractEvents: function (e, t, n, r, o, a) {
            if (!(a = !(o = a || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                e:{
                    o = cc(o), a = wa.onSelect;
                    for (var i = 0; i < a.length; i++) if (!o.has(a[ i ])) {
                        o = !1;
                        break e;
                    }
                    o = !0;
                }
                a = !o;
            }
            if (a) return null;
            switch (o = t ? Pd(t) : window, e) {
                case"focus":
                    (xe(o) || "true" === o.contentEditable) && (ef = o, ff = t, gf = null);
                    break;
                case"blur":
                    gf = ff = ef = null;
                    break;
                case"mousedown":
                    hf = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    return hf = !1, jf(n, r);
                case"selectionchange":
                    if (cf) break;
                case"keydown":
                case"keyup":
                    return jf(n, r);
            }
            return null;
        }
    }, lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), mf = G.extend({
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), nf = Ne.extend({ relatedTarget: null });

    function of(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }

    var pf = {
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
    }, qf = {
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
    }, rf = Ne.extend({
        key: function (e) {
            if (e.key) {
                var t = pf[ e.key ] || e.key;
                if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type ? 13 === (e = of(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? qf[ e.keyCode ] || "Unidentified" : "";
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Qe,
        charCode: function (e) {
            return "keypress" === e.type ? of(e) : 0;
        },
        keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return "keypress" === e.type ? of(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        }
    }), sf = Ve.extend({ dataTransfer: null }), tf = Ne.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Qe
    }), uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), vf = Ve.extend({
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        }, deltaZ: null, deltaMode: null
    }), wf = {
        eventTypes: Wc, extractEvents: function (e, t, n, r) {
            var o = Yc.get(e);
            if (!o) return null;
            switch (e) {
                case"keypress":
                    if (0 === of(n)) return null;
                case"keydown":
                case"keyup":
                    e = rf;
                    break;
                case"blur":
                case"focus":
                    e = nf;
                    break;
                case"click":
                    if (2 === n.button) return null;
                case"auxclick":
                case"dblclick":
                case"mousedown":
                case"mousemove":
                case"mouseup":
                case"mouseout":
                case"mouseover":
                case"contextmenu":
                    e = Ve;
                    break;
                case"drag":
                case"dragend":
                case"dragenter":
                case"dragexit":
                case"dragleave":
                case"dragover":
                case"dragstart":
                case"drop":
                    e = sf;
                    break;
                case"touchcancel":
                case"touchend":
                case"touchmove":
                case"touchstart":
                    e = tf;
                    break;
                case Xb:
                case Yb:
                case Zb:
                    e = lf;
                    break;
                case $b:
                    e = uf;
                    break;
                case"scroll":
                    e = Ne;
                    break;
                case"wheel":
                    e = vf;
                    break;
                case"copy":
                case"cut":
                case"paste":
                    e = mf;
                    break;
                case"gotpointercapture":
                case"lostpointercapture":
                case"pointercancel":
                case"pointerdown":
                case"pointermove":
                case"pointerout":
                case"pointerover":
                case"pointerup":
                    e = We;
                    break;
                default:
                    e = G;
            }
            return Xd(t = e.getPooled(o, t, n, r)), t;
        }
    };
    if (pa) throw Error(u(101));
    pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), ra();
    var xf = Nc;
    la = Qd, ma = xf, na = Pd, xa({
        SimpleEventPlugin: wf,
        EnterLeaveEventPlugin: Ye,
        ChangeEventPlugin: Me,
        SelectEventPlugin: kf,
        BeforeInputEventPlugin: ve
    });
    var yf = [], zf = -1;

    function H(e) {
        0 > zf || (e.current = yf[ zf ], yf[ zf ] = null, zf--);
    }

    function I(e, t) {
        zf++, yf[ zf ] = e.current, e.current = t;
    }

    var Af = {}, J = { current: Af }, K = { current: !1 }, Bf = Af;

    function Cf(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Af;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o, a = {};
        for (o in n) a[ o ] = t[ o ];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
    }

    function L(e) {
        return null != (e = e.childContextTypes);
    }

    function Df() {
        H(K), H(J);
    }

    function Ef(e, t, n) {
        if (J.current !== Af) throw Error(u(168));
        I(J, t), I(K, n);
    }

    function Ff(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext()) if (!(o in e)) throw Error(u(108, pb(t) || "Unknown", o));
        return n$1({}, n, {}, r);
    }

    function Gf(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Af, Bf = J.current, I(J, e), I(K, K.current), !0;
    }

    function Hf(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(u(169));
        n ? (e = Ff(e, t, Bf), r.__reactInternalMemoizedMergedChildContext = e, H(K), H(J), I(J, e)) : H(K), I(K, n);
    }

    var If = r$1.unstable_runWithPriority, Jf = r$1.unstable_scheduleCallback, Kf = r$1.unstable_cancelCallback,
        Lf = r$1.unstable_requestPaint, Mf = r$1.unstable_now, Nf = r$1.unstable_getCurrentPriorityLevel,
        Of = r$1.unstable_ImmediatePriority, Pf = r$1.unstable_UserBlockingPriority, Qf = r$1.unstable_NormalPriority,
        Rf = r$1.unstable_LowPriority, Sf = r$1.unstable_IdlePriority, Tf = {}, Uf = r$1.unstable_shouldYield,
        Vf = void 0 !== Lf ? Lf : function () {
        }, Wf = null, Xf = null, Yf = !1, Zf = Mf(), $f = 1e4 > Zf ? Mf : function () {
            return Mf() - Zf;
        };

    function ag() {
        switch (Nf()) {
            case Of:
                return 99;
            case Pf:
                return 98;
            case Qf:
                return 97;
            case Rf:
                return 96;
            case Sf:
                return 95;
            default:
                throw Error(u(332));
        }
    }

    function bg(e) {
        switch (e) {
            case 99:
                return Of;
            case 98:
                return Pf;
            case 97:
                return Qf;
            case 96:
                return Rf;
            case 95:
                return Sf;
            default:
                throw Error(u(332));
        }
    }

    function cg(e, t) {
        return e = bg(e), If(e, t);
    }

    function dg(e, t, n) {
        return e = bg(e), Jf(e, t, n);
    }

    function eg(e) {
        return null === Wf ? (Wf = [e], Xf = Jf(Of, fg)) : Wf.push(e), Tf;
    }

    function gg() {
        if (null !== Xf) {
            var e = Xf;
            Xf = null, Kf(e);
        }
        fg();
    }

    function fg() {
        if (!Yf && null !== Wf) {
            Yf = !0;
            var e = 0;
            try {
                var t = Wf;
                cg(99, (function () {
                    for (; e < t.length; e++) {
                        var n = t[ e ];
                        do {
                            n = n(!0);
                        } while (null !== n);
                    }
                })), Wf = null;
            } catch (t) {
                throw null !== Wf && (Wf = Wf.slice(e + 1)), Jf(Of, gg), t;
            } finally {
                Yf = !1;
            }
        }
    }

    function hg(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n;
    }

    function ig(e, t) {
        if (e && e.defaultProps) for (var n in t = n$1({}, t), e = e.defaultProps) void 0 === t[ n ] && (t[ n ] = e[ n ]);
        return t;
    }

    var jg = { current: null }, kg = null, lg = null, mg = null;

    function ng() {
        mg = lg = kg = null;
    }

    function og(e) {
        var t = jg.current;
        H(jg), e.type._context._currentValue = t;
    }

    function pg(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t); else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t;
            }
            e = e.return;
        }
    }

    function qg(e, t) {
        kg = e, mg = lg = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (rg = !0), e.firstContext = null);
    }

    function sg(e, t) {
        if (mg !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || (mg = e, t = 1073741823), t = {
            context: e,
            observedBits: t,
            next: null
        }, null === lg) {
            if (null === kg) throw Error(u(308));
            lg = t, kg.dependencies = { expirationTime: 0, firstContext: t, responders: null };
        } else lg = lg.next = t;
        return e._currentValue;
    }

    var tg = !1;

    function ug(e) {
        e.updateQueue = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
    }

    function vg(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
        });
    }

    function wg(e, t) {
        return (e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }).next = e;
    }

    function xg(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        }
    }

    function yg(e, t) {
        var n = e.alternate;
        null !== n && vg(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t);
    }

    function zg(e, t, n, r) {
        var o = e.updateQueue;
        tg = !1;
        var a = o.baseQueue, i = o.shared.pending;
        if (null !== i) {
            if (null !== a) {
                var s = a.next;
                a.next = i.next, i.next = s;
            }
            a = i, o.shared.pending = null, null !== (s = e.alternate) && (null !== (s = s.updateQueue) && (s.baseQueue = i));
        }
        if (null !== a) {
            s = a.next;
            var l = o.baseState, u = 0, c = null, f = null, d = null;
            if (null !== s) for (var p = s; ;) {
                if ((i = p.expirationTime) < r) {
                    var h = {
                        expirationTime: p.expirationTime,
                        suspenseConfig: p.suspenseConfig,
                        tag: p.tag,
                        payload: p.payload,
                        callback: p.callback,
                        next: null
                    };
                    null === d ? (f = d = h, c = l) : d = d.next = h, i > u && (u = i);
                } else {
                    null !== d && (d = d.next = {
                        expirationTime: 1073741823,
                        suspenseConfig: p.suspenseConfig,
                        tag: p.tag,
                        payload: p.payload,
                        callback: p.callback,
                        next: null
                    }), Ag(i, p.suspenseConfig);
                    e:{
                        var m = e, g = p;
                        switch (i = t, h = n, g.tag) {
                            case 1:
                                if ("function" == typeof (m = g.payload)) {
                                    l = m.call(h, l, i);
                                    break e;
                                }
                                l = m;
                                break e;
                            case 3:
                                m.effectTag = -4097 & m.effectTag | 64;
                            case 0:
                                if (null == (i = "function" == typeof (m = g.payload) ? m.call(h, l, i) : m)) break e;
                                l = n$1({}, l, i);
                                break e;
                            case 2:
                                tg = !0;
                        }
                    }
                    null !== p.callback && (e.effectTag |= 32, null === (i = o.effects) ? o.effects = [p] : i.push(p));
                }
                if (null === (p = p.next) || p === s) {
                    if (null === (i = o.shared.pending)) break;
                    p = a.next = i.next, i.next = s, o.baseQueue = a = i, o.shared.pending = null;
                }
            }
            null === d ? c = l : d.next = f, o.baseState = c, o.baseQueue = d, Bg(u), e.expirationTime = u, e.memoizedState = l;
        }
    }

    function Cg(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
            var r = e[ t ], o = r.callback;
            if (null !== o) {
                if (r.callback = null, r = o, o = n, "function" != typeof r) throw Error(u(191, r));
                r.call(o);
            }
        }
    }

    var Dg = Wa.ReactCurrentBatchConfig, Eg = (new aa.Component).refs;

    function Fg(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : n$1({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n);
    }

    var Jg = {
        isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && dc(e) === e;
        }, enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gg(), o = Dg.suspense;
            (o = wg(r = Hg(r, e, o), o)).payload = t, null != n && (o.callback = n), xg(e, o), Ig(e, r);
        }, enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gg(), o = Dg.suspense;
            (o = wg(r = Hg(r, e, o), o)).tag = 1, o.payload = t, null != n && (o.callback = n), xg(e, o), Ig(e, r);
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = Gg(), r = Dg.suspense;
            (r = wg(n = Hg(n, e, r), r)).tag = 2, null != t && (r.callback = t), xg(e, r), Ig(e, n);
        }
    };

    function Kg(e, t, n, r, o, a, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!bf(n, r) || !bf(o, a));
    }

    function Lg(e, t, n) {
        var r = !1, o = Af, a = t.contextType;
        return "object" == typeof a && null !== a ? a = sg(a) : (o = L(t) ? Bf : J.current, a = (r = null != (r = t.contextTypes)) ? Cf(e, o) : Af), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Jg, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t;
    }

    function Mg(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Jg.enqueueReplaceState(t, t.state, null);
    }

    function Ng(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = Eg, ug(e);
        var a = t.contextType;
        "object" == typeof a && null !== a ? o.context = sg(a) : (a = L(t) ? Bf : J.current, o.context = Cf(e, a)), zg(e, n, o, r), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (Fg(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Jg.enqueueReplaceState(o, o.state, null), zg(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.effectTag |= 4);
    }

    var Og = Array.isArray;

    function Pg(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(u(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(u(147, e));
                var o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) {
                    var t = r.refs;
                    t === Eg && (t = r.refs = {}), null === e ? delete t[ o ] : t[ o ] = e;
                }, t._stringRef = o, t);
            }
            if ("string" != typeof e) throw Error(u(284));
            if (!n._owner) throw Error(u(290, e));
        }
        return e;
    }

    function Qg(e, t) {
        if ("textarea" !== e.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
    }

    function Rg(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8;
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null;
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e;
        }

        function o(e, t) {
            return (e = Sg(e, t)).index = 0, e.sibling = null, e;
        }

        function a(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n;
        }

        function i(t) {
            return e && null === t.alternate && (t.effectTag = 2), t;
        }

        function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Tg(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t);
        }

        function l(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = Pg(e, t, n), r.return = e, r) : ((r = Ug(n.type, n.key, n.props, null, e.mode, r)).ref = Pg(e, t, n), r.return = e, r);
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vg(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t);
        }

        function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = Wg(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t);
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Tg("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case Za:
                        return (n = Ug(t.type, t.key, t.props, null, e.mode, n)).ref = Pg(e, null, t), n.return = e, n;
                    case $a:
                        return (t = Vg(t, e.mode, n)).return = e, t;
                }
                if (Og(t) || nb(t)) return (t = Wg(t, e.mode, n, null)).return = e, t;
                Qg(e, t);
            }
            return null;
        }

        function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Za:
                        return n.key === o ? n.type === ab ? f(e, t, n.props.children, r, o) : l(e, t, n, r) : null;
                    case $a:
                        return n.key === o ? c(e, t, n, r) : null;
                }
                if (Og(n) || nb(n)) return null !== o ? null : f(e, t, n, r, null);
                Qg(e, n);
            }
            return null;
        }

        function h(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, o);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case Za:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === ab ? f(t, e, r.props.children, o, r.key) : l(t, e, r, o);
                    case $a:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                }
                if (Og(r) || nb(r)) return f(t, e = e.get(n) || null, r, o, null);
                Qg(t, r);
            }
            return null;
        }

        function m(o, i, s, l) {
            for (var u = null, c = null, f = i, m = i = 0, g = null; null !== f && m < s.length; m++) {
                f.index > m ? (g = f, f = null) : g = f.sibling;
                var v = p(o, f, s[ m ], l);
                if (null === v) {
                    null === f && (f = g);
                    break;
                }
                e && f && null === v.alternate && t(o, f), i = a(v, i, m), null === c ? u = v : c.sibling = v, c = v, f = g;
            }
            if (m === s.length) return n(o, f), u;
            if (null === f) {
                for (; m < s.length; m++) null !== (f = d(o, s[ m ], l)) && (i = a(f, i, m), null === c ? u = f : c.sibling = f, c = f);
                return u;
            }
            for (f = r(o, f); m < s.length; m++) null !== (g = h(f, o, m, s[ m ], l)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), i = a(g, i, m), null === c ? u = g : c.sibling = g, c = g);
            return e && f.forEach((function (e) {
                return t(o, e);
            })), u;
        }

        function g(o, i, s, l) {
            var c = nb(s);
            if ("function" != typeof c) throw Error(u(150));
            if (null == (s = c.call(s))) throw Error(u(151));
            for (var f = c = null, m = i, g = i = 0, v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
                m.index > g ? (v = m, m = null) : v = m.sibling;
                var b = p(o, m, y.value, l);
                if (null === b) {
                    null === m && (m = v);
                    break;
                }
                e && m && null === b.alternate && t(o, m), i = a(b, i, g), null === f ? c = b : f.sibling = b, f = b, m = v;
            }
            if (y.done) return n(o, m), c;
            if (null === m) {
                for (; !y.done; g++, y = s.next()) null !== (y = d(o, y.value, l)) && (i = a(y, i, g), null === f ? c = y : f.sibling = y, f = y);
                return c;
            }
            for (m = r(o, m); !y.done; g++, y = s.next()) null !== (y = h(m, o, g, y.value, l)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), i = a(y, i, g), null === f ? c = y : f.sibling = y, f = y);
            return e && m.forEach((function (e) {
                return t(o, e);
            })), c;
        }

        return function (e, r, a, s) {
            var l = "object" == typeof a && null !== a && a.type === ab && null === a.key;
            l && (a = a.props.children);
            var c = "object" == typeof a && null !== a;
            if (c) switch (a.$$typeof) {
                case Za:
                    e:{
                        for (c = a.key, l = r; null !== l;) {
                            if (l.key === c) {
                                if (7 === l.tag) {
                                    if (a.type === ab) {
                                        n(e, l.sibling), (r = o(l, a.props.children)).return = e, e = r;
                                        break e;
                                    }
                                } else if (l.elementType === a.type) {
                                    n(e, l.sibling), (r = o(l, a.props)).ref = Pg(e, l, a), r.return = e, e = r;
                                    break e;
                                }
                                n(e, l);
                                break;
                            }
                            t(e, l), l = l.sibling;
                        }
                        a.type === ab ? ((r = Wg(a.props.children, e.mode, s, a.key)).return = e, e = r) : ((s = Ug(a.type, a.key, a.props, null, e.mode, s)).ref = Pg(e, r, a), s.return = e, e = s);
                    }
                    return i(e);
                case $a:
                    e:{
                        for (l = a.key; null !== r;) {
                            if (r.key === l) {
                                if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                    n(e, r.sibling), (r = o(r, a.children || [])).return = e, e = r;
                                    break e;
                                }
                                n(e, r);
                                break;
                            }
                            t(e, r), r = r.sibling;
                        }
                        (r = Vg(a, e.mode, s)).return = e, e = r;
                    }
                    return i(e);
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, a)).return = e, e = r) : (n(e, r), (r = Tg(a, e.mode, s)).return = e, e = r), i(e);
            if (Og(a)) return m(e, r, a, s);
            if (nb(a)) return g(e, r, a, s);
            if (c && Qg(e, a), void 0 === a && !l) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(u(152, e.displayName || e.name || "Component"));
            }
            return n(e, r);
        };
    }

    var Xg = Rg(!0), Yg = Rg(!1), Zg = {}, $g = { current: Zg }, ah = { current: Zg }, bh = { current: Zg };

    function ch(e) {
        if (e === Zg) throw Error(u(174));
        return e;
    }

    function dh(e, t) {
        switch (I(bh, t), I(ah, e), I($g, Zg), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ob(null, "");
                break;
            default:
                t = Ob(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        }
        H($g), I($g, t);
    }

    function eh() {
        H($g), H(ah), H(bh);
    }

    function fh(e) {
        ch(bh.current);
        var t = ch($g.current), n = Ob(t, e.type);
        t !== n && (I(ah, e), I($g, n));
    }

    function gh(e) {
        ah.current === e && (H($g), H(ah));
    }

    var M = { current: 0 };

    function hh(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || n.data === Bd || n.data === Cd)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t;
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
        return null;
    }

    function ih(e, t) {
        return { responder: e, props: t };
    }

    var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N = null, O = null, P = null, mh = !1;

    function Q() {
        throw Error(u(321));
    }

    function nh(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!$e(e[ n ], t[ n ])) return !1;
        return !0;
    }

    function oh(e, t, n, r, o, a) {
        if (lh = a, N = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, jh.current = null === e || null === e.memoizedState ? ph : qh, e = n(r, o), t.expirationTime === lh) {
            a = 0;
            do {
                if (t.expirationTime = 0, !(25 > a)) throw Error(u(301));
                a += 1, P = O = null, t.updateQueue = null, jh.current = rh, e = n(r, o);
            } while (t.expirationTime === lh);
        }
        if (jh.current = sh, t = null !== O && null !== O.next, lh = 0, P = O = N = null, mh = !1, t) throw Error(u(300));
        return e;
    }

    function th() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === P ? N.memoizedState = P = e : P = P.next = e, P;
    }

    function uh() {
        if (null === O) {
            var e = N.alternate;
            e = null !== e ? e.memoizedState : null;
        } else e = O.next;
        var t = null === P ? N.memoizedState : P.next;
        if (null !== t) P = t, O = e; else {
            if (null === e) throw Error(u(310));
            e = {
                memoizedState: (O = e).memoizedState,
                baseState: O.baseState,
                baseQueue: O.baseQueue,
                queue: O.queue,
                next: null
            }, null === P ? N.memoizedState = P = e : P = P.next = e;
        }
        return P;
    }

    function vh(e, t) {
        return "function" == typeof t ? t(e) : t;
    }

    function wh(e) {
        var t = uh(), n = t.queue;
        if (null === n) throw Error(u(311));
        n.lastRenderedReducer = e;
        var r = O, o = r.baseQueue, a = n.pending;
        if (null !== a) {
            if (null !== o) {
                var i = o.next;
                o.next = a.next, a.next = i;
            }
            r.baseQueue = o = a, n.pending = null;
        }
        if (null !== o) {
            o = o.next, r = r.baseState;
            var s = i = a = null, l = o;
            do {
                var c = l.expirationTime;
                if (c < lh) {
                    var f = {
                        expirationTime: l.expirationTime,
                        suspenseConfig: l.suspenseConfig,
                        action: l.action,
                        eagerReducer: l.eagerReducer,
                        eagerState: l.eagerState,
                        next: null
                    };
                    null === s ? (i = s = f, a = r) : s = s.next = f, c > N.expirationTime && (N.expirationTime = c, Bg(c));
                } else null !== s && (s = s.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: l.suspenseConfig,
                    action: l.action,
                    eagerReducer: l.eagerReducer,
                    eagerState: l.eagerState,
                    next: null
                }), Ag(c, l.suspenseConfig), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
                l = l.next;
            } while (null !== l && l !== o);
            null === s ? a = r : s.next = i, $e(r, t.memoizedState) || (rg = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
        }
        return [t.memoizedState, n.dispatch];
    }

    function xh(e) {
        var t = uh(), n = t.queue;
        if (null === n) throw Error(u(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, a = t.memoizedState;
        if (null !== o) {
            n.pending = null;
            var i = o = o.next;
            do {
                a = e(a, i.action), i = i.next;
            } while (i !== o);
            $e(a, t.memoizedState) || (rg = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a;
        }
        return [a, r];
    }

    function yh(e) {
        var t = th();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: vh,
            lastRenderedState: e
        }).dispatch = zh.bind(null, N, e), [t.memoizedState, e];
    }

    function Ah(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === (t = N.updateQueue) ? (t = { lastEffect: null }, N.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
    }

    function Bh() {
        return uh().memoizedState;
    }

    function Ch(e, t, n, r) {
        var o = th();
        N.effectTag |= e, o.memoizedState = Ah(1 | t, n, void 0, void 0 === r ? null : r);
    }

    function Dh(e, t, n, r) {
        var o = uh();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== O) {
            var i = O.memoizedState;
            if (a = i.destroy, null !== r && nh(r, i.deps)) return void Ah(t, n, a, r);
        }
        N.effectTag |= e, o.memoizedState = Ah(1 | t, n, a, r);
    }

    function Eh(e, t) {
        return Ch(516, 4, e, t);
    }

    function Fh(e, t) {
        return Dh(516, 4, e, t);
    }

    function Gh(e, t) {
        return Dh(4, 2, e, t);
    }

    function Hh(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
            t(null);
        }) : null != t ? (e = e(), t.current = e, function () {
            t.current = null;
        }) : void 0;
    }

    function Ih(e, t, n) {
        return n = null != n ? n.concat([e]) : null, Dh(4, 2, Hh.bind(null, t, e), n);
    }

    function Jh() {
    }

    function Kh(e, t) {
        return th().memoizedState = [e, void 0 === t ? null : t], e;
    }

    function Lh(e, t) {
        var n = uh();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && nh(t, r[ 1 ]) ? r[ 0 ] : (n.memoizedState = [e, t], e);
    }

    function Mh(e, t) {
        var n = uh();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && nh(t, r[ 1 ]) ? r[ 0 ] : (e = e(), n.memoizedState = [e, t], e);
    }

    function Nh(e, t, n) {
        var r = ag();
        cg(98 > r ? 98 : r, (function () {
            e(!0);
        })), cg(97 < r ? 97 : r, (function () {
            var r = kh.suspense;
            kh.suspense = void 0 === t ? null : t;
            try {
                e(!1), n();
            } finally {
                kh.suspense = r;
            }
        }));
    }

    function zh(e, t, n) {
        var r = Gg(), o = Dg.suspense;
        o = {
            expirationTime: r = Hg(r, e, o),
            suspenseConfig: o,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var a = t.pending;
        if (null === a ? o.next = o : (o.next = a.next, a.next = o), t.pending = o, a = e.alternate, e === N || null !== a && a === N) mh = !0, o.expirationTime = lh, N.expirationTime = lh; else {
            if (0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
                var i = t.lastRenderedState, s = a(i, n);
                if (o.eagerReducer = a, o.eagerState = s, $e(s, i)) return;
            } catch (e) {
            }
            Ig(e, r);
        }
    }

    var sh = {
        readContext: sg,
        useCallback: Q,
        useContext: Q,
        useEffect: Q,
        useImperativeHandle: Q,
        useLayoutEffect: Q,
        useMemo: Q,
        useReducer: Q,
        useRef: Q,
        useState: Q,
        useDebugValue: Q,
        useResponder: Q,
        useDeferredValue: Q,
        useTransition: Q
    }, ph = {
        readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, Ch(4, 2, Hh.bind(null, t, e), n);
        }, useLayoutEffect: function (e, t) {
            return Ch(4, 2, e, t);
        }, useMemo: function (e, t) {
            var n = th();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e;
        }, useReducer: function (e, t, n) {
            var r = th();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }).dispatch = zh.bind(null, N, e), [r.memoizedState, e];
        }, useRef: function (e) {
            return e = { current: e }, th().memoizedState = e;
        }, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function (e, t) {
            var n = yh(e), r = n[ 0 ], o = n[ 1 ];
            return Eh((function () {
                var n = kh.suspense;
                kh.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    kh.suspense = n;
                }
            }), [e, t]), r;
        }, useTransition: function (e) {
            var t = yh(!1), n = t[ 0 ];
            return t = t[ 1 ], [Kh(Nh.bind(null, t, e), [t, e]), n];
        }
    }, qh = {
        readContext: sg,
        useCallback: Lh,
        useContext: sg,
        useEffect: Fh,
        useImperativeHandle: Ih,
        useLayoutEffect: Gh,
        useMemo: Mh,
        useReducer: wh,
        useRef: Bh,
        useState: function () {
            return wh(vh);
        },
        useDebugValue: Jh,
        useResponder: ih,
        useDeferredValue: function (e, t) {
            var n = wh(vh), r = n[ 0 ], o = n[ 1 ];
            return Fh((function () {
                var n = kh.suspense;
                kh.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    kh.suspense = n;
                }
            }), [e, t]), r;
        },
        useTransition: function (e) {
            var t = wh(vh), n = t[ 0 ];
            return t = t[ 1 ], [Lh(Nh.bind(null, t, e), [t, e]), n];
        }
    }, rh = {
        readContext: sg,
        useCallback: Lh,
        useContext: sg,
        useEffect: Fh,
        useImperativeHandle: Ih,
        useLayoutEffect: Gh,
        useMemo: Mh,
        useReducer: xh,
        useRef: Bh,
        useState: function () {
            return xh(vh);
        },
        useDebugValue: Jh,
        useResponder: ih,
        useDeferredValue: function (e, t) {
            var n = xh(vh), r = n[ 0 ], o = n[ 1 ];
            return Fh((function () {
                var n = kh.suspense;
                kh.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    kh.suspense = n;
                }
            }), [e, t]), r;
        },
        useTransition: function (e) {
            var t = xh(vh), n = t[ 0 ];
            return t = t[ 1 ], [Lh(Nh.bind(null, t, e), [t, e]), n];
        }
    }, Oh = null, Ph = null, Qh = !1;

    function Rh(e, t) {
        var n = Sh(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
    }

    function Th(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            default:
                return !1;
        }
    }

    function Uh(e) {
        if (Qh) {
            var t = Ph;
            if (t) {
                var n = t;
                if (!Th(e, t)) {
                    if (!(t = Jd(n.nextSibling)) || !Th(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Qh = !1, void (Oh = e);
                    Rh(Oh, n);
                }
                Oh = e, Ph = Jd(t.firstChild);
            } else e.effectTag = -1025 & e.effectTag | 2, Qh = !1, Oh = e;
        }
    }

    function Vh(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        Oh = e;
    }

    function Wh(e) {
        if (e !== Oh) return !1;
        if (!Qh) return Vh(e), Qh = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !Gd(t, e.memoizedProps)) for (t = Ph; t;) Rh(e, t), t = Jd(t.nextSibling);
        if (Vh(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(u(317));
            e:{
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if (n === Ad) {
                            if (0 === t) {
                                Ph = Jd(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== zd && n !== Cd && n !== Bd || t++;
                    }
                    e = e.nextSibling;
                }
                Ph = null;
            }
        } else Ph = Oh ? Jd(e.stateNode.nextSibling) : null;
        return !0;
    }

    function Xh() {
        Ph = Oh = null, Qh = !1;
    }

    var Yh = Wa.ReactCurrentOwner, rg = !1;

    function R(e, t, n, r) {
        t.child = null === e ? Yg(t, null, n, r) : Xg(t, e.child, n, r);
    }

    function Zh(e, t, n, r, o) {
        n = n.render;
        var a = t.ref;
        return qg(t, o), r = oh(e, t, n, r, a, o), null === e || rg ? (t.effectTag |= 1, R(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), $h(e, t, o));
    }

    function ai(e, t, n, r, o, a) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || bi(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ug(n.type, null, r, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, ci(e, t, i, r, o, a));
        }
        return i = e.child, o < a && (o = i.memoizedProps, (n = null !== (n = n.compare) ? n : bf)(o, r) && e.ref === t.ref) ? $h(e, t, a) : (t.effectTag |= 1, (e = Sg(i, r)).ref = t.ref, e.return = t, t.child = e);
    }

    function ci(e, t, n, r, o, a) {
        return null !== e && bf(e.memoizedProps, r) && e.ref === t.ref && (rg = !1, o < a) ? (t.expirationTime = e.expirationTime, $h(e, t, a)) : di(e, t, n, r, a);
    }

    function ei(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128);
    }

    function di(e, t, n, r, o) {
        var a = L(n) ? Bf : J.current;
        return a = Cf(t, a), qg(t, o), n = oh(e, t, n, r, a, o), null === e || rg ? (t.effectTag |= 1, R(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), $h(e, t, o));
    }

    function fi(e, t, n, r, o) {
        if (L(n)) {
            var a = !0;
            Gf(t);
        } else a = !1;
        if (qg(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Lg(t, n, r), Ng(t, n, r, o), r = !0; else if (null === e) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var l = i.context, u = n.contextType;
            "object" == typeof u && null !== u ? u = sg(u) : u = Cf(t, u = L(n) ? Bf : J.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
            f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || l !== u) && Mg(t, i, r, u), tg = !1;
            var d = t.memoizedState;
            i.state = d, zg(t, r, i, o), l = t.memoizedState, s !== r || d !== l || K.current || tg ? ("function" == typeof c && (Fg(t, n, c, r), l = t.memoizedState), (s = tg || Kg(t, n, s, r, d, l, u)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = s) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), r = !1);
        } else i = t.stateNode, vg(e, t), s = t.memoizedProps, i.props = t.type === t.elementType ? s : ig(t.type, s), l = i.context, "object" == typeof (u = n.contextType) && null !== u ? u = sg(u) : u = Cf(t, u = L(n) ? Bf : J.current), (f = "function" == typeof (c = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || l !== u) && Mg(t, i, r, u), tg = !1, l = t.memoizedState, i.state = l, zg(t, r, i, o), d = t.memoizedState, s !== r || l !== d || K.current || tg ? ("function" == typeof c && (Fg(t, n, c, r), d = t.memoizedState), (c = tg || Kg(t, n, s, r, l, d, u)) ? (f || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, u), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, u)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = u, r = c) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
        return gi(e, t, n, r, a, o);
    }

    function gi(e, t, n, r, o, a) {
        ei(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!r && !i) return o && Hf(t, n, !1), $h(e, t, a);
        r = t.stateNode, Yh.current = t;
        var s = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && i ? (t.child = Xg(t, e.child, null, a), t.child = Xg(t, null, s, a)) : R(e, t, s, a), t.memoizedState = r.state, o && Hf(t, n, !0), t.child;
    }

    function hi(e) {
        var t = e.stateNode;
        t.pendingContext ? Ef(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ef(e, t.context, !1), dh(e, t.containerInfo);
    }

    var ii = { dehydrated: null, retryTime: 0 }, ni, oi, pi, qi;

    function ji(e, t, n) {
        var r, o = t.mode, a = t.pendingProps, i = M.current, s = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)), r ? (s = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (i |= 1), I(M, 1 & i), null === e) {
            if (void 0 !== a.fallback && Uh(t), s) {
                if (s = a.fallback, (a = Wg(null, o, 0, null)).return = t, 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                return (n = Wg(s, o, n, null)).return = t, a.sibling = n, t.memoizedState = ii, t.child = a, n;
            }
            return o = a.children, t.memoizedState = null, t.child = Yg(t, null, o, n);
        }
        if (null !== e.memoizedState) {
            if (o = (e = e.child).sibling, s) {
                if (a = a.fallback, (n = Sg(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== e.child) for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                return (o = Sg(o, a)).return = t, n.sibling = o, n.childExpirationTime = 0, t.memoizedState = ii, t.child = n, o;
            }
            return n = Xg(t, e.child, a.children, n), t.memoizedState = null, t.child = n;
        }
        if (e = e.child, s) {
            if (s = a.fallback, (a = Wg(null, o, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
            return (n = Wg(s, o, n, null)).return = t, a.sibling = n, n.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = ii, t.child = a, n;
        }
        return t.memoizedState = null, t.child = Xg(t, e, a.children, n);
    }

    function ki(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), pg(e.return, t);
    }

    function li(e, t, n, r, o, a) {
        var i = e.memoizedState;
        null === i ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: o,
            lastEffect: a
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailExpiration = 0, i.tailMode = o, i.lastEffect = a);
    }

    function mi(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, a = r.tail;
        if (R(e, t, r.children, n), 0 != (2 & (r = M.current))) r = 1 & r | 2, t.effectTag |= 64; else {
            if (null !== e && 0 != (64 & e.effectTag)) e:for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && ki(e, n); else if (19 === e.tag) ki(e, n); else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (I(M, r), 0 == (2 & t.mode)) t.memoizedState = null; else switch (o) {
            case"forwards":
                for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === hh(e) && (o = n), n = n.sibling;
                null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), li(t, !1, o, n, a, t.lastEffect);
                break;
            case"backwards":
                for (n = null, o = t.child, t.child = null; null !== o;) {
                    if (null !== (e = o.alternate) && null === hh(e)) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                li(t, !0, n, null, a, t.lastEffect);
                break;
            case"together":
                li(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }

    function $h(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && Bg(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw Error(u(153));
        if (null !== t.child) {
            for (n = Sg(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Sg(e, e.pendingProps)).return = t;
            n.sibling = null;
        }
        return t.child;
    }

    function ri(e, t) {
        switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case"collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }

    function si(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
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
                return null;
            case 1:
            case 17:
                return L(t.type) && Df(), null;
            case 3:
                return eh(), H(K), H(J), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !Wh(t) || (t.effectTag |= 4), oi(t), null;
            case 5:
                gh(t), n = ch(bh.current);
                var o = t.type;
                if (null !== e && null != t.stateNode) pi(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128); else {
                    if (!r) {
                        if (null === t.stateNode) throw Error(u(166));
                        return null;
                    }
                    if (e = ch($g.current), Wh(t)) {
                        r = t.stateNode, o = t.type;
                        var a = t.memoizedProps;
                        switch (r[ Md ] = t, r[ Nd ] = a, o) {
                            case"iframe":
                            case"object":
                            case"embed":
                                F("load", r);
                                break;
                            case"video":
                            case"audio":
                                for (e = 0; e < ac.length; e++) F(ac[ e ], r);
                                break;
                            case"source":
                                F("error", r);
                                break;
                            case"img":
                            case"image":
                            case"link":
                                F("error", r), F("load", r);
                                break;
                            case"form":
                                F("reset", r), F("submit", r);
                                break;
                            case"details":
                                F("toggle", r);
                                break;
                            case"input":
                                Ab(r, a), F("invalid", r), rd(n, "onChange");
                                break;
                            case"select":
                                r._wrapperState = { wasMultiple: !!a.multiple }, F("invalid", r), rd(n, "onChange");
                                break;
                            case"textarea":
                                Jb(r, a), F("invalid", r), rd(n, "onChange");
                        }
                        for (var i in od(o, a), e = null, a) if (a.hasOwnProperty(i)) {
                            var s = a[ i ];
                            "children" === i ? "string" == typeof s ? r.textContent !== s && (e = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (e = ["children", "" + s]) : va.hasOwnProperty(i) && null != s && rd(n, i);
                        }
                        switch (o) {
                            case"input":
                                xb(r), Eb(r, a, !0);
                                break;
                            case"textarea":
                                xb(r), Lb(r);
                                break;
                            case"select":
                            case"option":
                                break;
                            default:
                                "function" == typeof a.onClick && (r.onclick = sd);
                        }
                        n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4);
                    } else {
                        switch (i = 9 === n.nodeType ? n : n.ownerDocument, e === qd && (e = Nb(o)), e === qd ? "script" === o ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = i.createElement(o, { is: r.is }) : (e = i.createElement(o), "select" === o && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, o), e[ Md ] = t, e[ Nd ] = r, ni(e, t, !1, !1), t.stateNode = e, i = pd(o, r), o) {
                            case"iframe":
                            case"object":
                            case"embed":
                                F("load", e), s = r;
                                break;
                            case"video":
                            case"audio":
                                for (s = 0; s < ac.length; s++) F(ac[ s ], e);
                                s = r;
                                break;
                            case"source":
                                F("error", e), s = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                F("error", e), F("load", e), s = r;
                                break;
                            case"form":
                                F("reset", e), F("submit", e), s = r;
                                break;
                            case"details":
                                F("toggle", e), s = r;
                                break;
                            case"input":
                                Ab(e, r), s = zb(e, r), F("invalid", e), rd(n, "onChange");
                                break;
                            case"option":
                                s = Gb(e, r);
                                break;
                            case"select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, s = n$1({}, r, { value: void 0 }), F("invalid", e), rd(n, "onChange");
                                break;
                            case"textarea":
                                Jb(e, r), s = Ib(e, r), F("invalid", e), rd(n, "onChange");
                                break;
                            default:
                                s = r;
                        }
                        od(o, s);
                        var l = s;
                        for (a in l) if (l.hasOwnProperty(a)) {
                            var c = l[ a ];
                            "style" === a ? md(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && Qb(e, c) : "children" === a ? "string" == typeof c ? ("textarea" !== o || "" !== c) && Rb(e, c) : "number" == typeof c && Rb(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (va.hasOwnProperty(a) ? null != c && rd(n, a) : null != c && Xa(e, a, c, i));
                        }
                        switch (o) {
                            case"input":
                                xb(e), Eb(e, r, !1);
                                break;
                            case"textarea":
                                xb(e), Lb(e);
                                break;
                            case"option":
                                null != r.value && e.setAttribute("value", "" + rb(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, null != (n = r.value) ? Hb(e, !!r.multiple, n, !1) : null != r.defaultValue && Hb(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof s.onClick && (e.onclick = sd);
                        }
                        Fd(o, r) && (t.effectTag |= 4);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                }
                return null;
            case 6:
                if (e && null != t.stateNode) qi(e, t, e.memoizedProps, r); else {
                    if ("string" != typeof r && null === t.stateNode) throw Error(u(166));
                    n = ch(bh.current), ch($g.current), Wh(t) ? (n = t.stateNode, r = t.memoizedProps, n[ Md ] = t, n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ Md ] = t, t.stateNode = n);
                }
                return null;
            case 13:
                return H(M), r = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== r, r = !1, null === e ? void 0 !== t.memoizedProps.fallback && Wh(t) : (r = null !== (o = e.memoizedState), n || null === o || null !== (o = e.child.sibling) && (null !== (a = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = a) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & M.current) ? S === ti && (S = ui) : (S !== ti && S !== ui || (S = vi), 0 !== wi && null !== T && (xi(T, U), yi(T, wi)))), (n || r) && (t.effectTag |= 4), null);
            case 4:
                return eh(), oi(t), null;
            case 10:
                return og(t), null;
            case 19:
                if (H(M), null === (r = t.memoizedState)) return null;
                if (o = 0 != (64 & t.effectTag), null === (a = r.rendering)) {
                    if (o) ri(r, !1); else if (S !== ti || null !== e && 0 != (64 & e.effectTag)) for (a = t.child; null !== a;) {
                        if (null !== (e = hh(a))) {
                            for (t.effectTag |= 64, ri(r, !1), null !== (o = e.updateQueue) && (t.updateQueue = o, t.effectTag |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child; null !== r;) a = n, (o = r).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (e = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = a, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime, o.expirationTime = e.expirationTime, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, a = e.dependencies, o.dependencies = null === a ? null : {
                                expirationTime: a.expirationTime,
                                firstContext: a.firstContext,
                                responders: a.responders
                            }), r = r.sibling;
                            return I(M, 1 & M.current | 2), t.child;
                        }
                        a = a.sibling;
                    }
                } else {
                    if (!o) if (null !== (e = hh(a))) {
                        if (t.effectTag |= 64, o = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), ri(r, !0), null === r.tail && "hidden" === r.tailMode && !a.alternate) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                    } else 2 * $f() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64, o = !0, ri(r, !1), t.expirationTime = t.childExpirationTime = n - 1);
                    r.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (n = r.last) ? n.sibling = a : t.child = a, r.last = a);
                }
                return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = $f() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = $f(), n.sibling = null, t = M.current, I(M, o ? 1 & t | 2 : 1 & t), n) : null;
        }
        throw Error(u(156, t.tag));
    }

    function zi(e) {
        switch (e.tag) {
            case 1:
                L(e.type) && Df();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (eh(), H(K), H(J), 0 != (64 & (t = e.effectTag))) throw Error(u(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return gh(e), null;
            case 13:
                return H(M), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return H(M), null;
            case 4:
                return eh(), null;
            case 10:
                return og(e), null;
            default:
                return null;
        }
    }

    function Ai(e, t) {
        return { value: e, source: t, stack: qb(t) };
    }

    ni = function (e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
    }, oi = function () {
    }, pi = function (e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
            var i, s, l = t.stateNode;
            switch (ch($g.current), e = null, n) {
                case"input":
                    a = zb(l, a), r = zb(l, r), e = [];
                    break;
                case"option":
                    a = Gb(l, a), r = Gb(l, r), e = [];
                    break;
                case"select":
                    a = n$1({}, a, { value: void 0 }), r = n$1({}, r, { value: void 0 }), e = [];
                    break;
                case"textarea":
                    a = Ib(l, a), r = Ib(l, r), e = [];
                    break;
                default:
                    "function" != typeof a.onClick && "function" == typeof r.onClick && (l.onclick = sd);
            }
            for (i in od(n, r), n = null, a) if (!r.hasOwnProperty(i) && a.hasOwnProperty(i) && null != a[ i ]) if ("style" === i) for (s in l = a[ i ]) l.hasOwnProperty(s) && (n || (n = {}), n[ s ] = ""); else "dangerouslySetInnerHTML" !== i && "children" !== i && "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (va.hasOwnProperty(i) ? e || (e = []) : (e = e || []).push(i, null));
            for (i in r) {
                var u = r[ i ];
                if (l = null != a ? a[ i ] : void 0, r.hasOwnProperty(i) && u !== l && (null != u || null != l)) if ("style" === i) if (l) {
                    for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[ s ] = "");
                    for (s in u) u.hasOwnProperty(s) && l[ s ] !== u[ s ] && (n || (n = {}), n[ s ] = u[ s ]);
                } else n || (e || (e = []), e.push(i, n)), n = u; else "dangerouslySetInnerHTML" === i ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (e = e || []).push(i, u)) : "children" === i ? l === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(i, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && (va.hasOwnProperty(i) ? (null != u && rd(o, i), e || l === u || (e = [])) : (e = e || []).push(i, u));
            }
            n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && (t.effectTag |= 4);
        }
    }, qi = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4);
    };
    var Bi = "function" == typeof WeakSet ? WeakSet : Set;

    function Ci(e, t) {
        var n = t.source, r = t.stack;
        null === r && null !== n && (r = qb(n)), null !== n && pb(n.type), t = t.value, null !== e && 1 === e.tag && pb(e.type);
        try {
            console.error(t);
        } catch (e) {
            setTimeout((function () {
                throw e;
            }));
        }
    }

    function Di(e, t) {
        try {
            t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
        } catch (t) {
            Ei(e, t);
        }
    }

    function Fi(e) {
        var t = e.ref;
        if (null !== t) if ("function" == typeof t) try {
            t(null);
        } catch (t) {
            Ei(e, t);
        } else t.current = null;
    }

    function Gi(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps, r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ig(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
                }
                return;
        }
        throw Error(u(163));
    }

    function Hi(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.destroy;
                    n.destroy = void 0, void 0 !== r && r();
                }
                n = n.next;
            } while (n !== t);
        }
    }

    function Ii(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        }
    }

    function Ji(e, t, n) {
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return void Ii(3, n);
            case 1:
                if (e = n.stateNode, 4 & n.effectTag) if (null === t) e.componentDidMount(); else {
                    var r = n.elementType === n.type ? t.memoizedProps : ig(n.type, t.memoizedProps);
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
                }
                return void (null !== (t = n.updateQueue) && Cg(n, t, e));
            case 3:
                if (null !== (t = n.updateQueue)) {
                    if (e = null, null !== n.child) switch (n.child.tag) {
                        case 5:
                        case 1:
                            e = n.child.stateNode;
                    }
                    Cg(n, t, e);
                }
                return;
            case 5:
                return e = n.stateNode, void (null === t && 4 & n.effectTag && Fd(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
                return;
            case 13:
                return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Vc(n)))));
        }
        throw Error(u(163));
    }

    function Ki(e, t, n) {
        switch ("function" == typeof Li && Li(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    cg(97 < n ? 97 : n, (function () {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var o = t;
                                try {
                                    n();
                                } catch (e) {
                                    Ei(o, e);
                                }
                            }
                            e = e.next;
                        } while (e !== r);
                    }));
                }
                break;
            case 1:
                Fi(t), "function" == typeof (n = t.stateNode).componentWillUnmount && Di(t, n);
                break;
            case 5:
                Fi(t);
                break;
            case 4:
                Mi(e, t, n);
        }
    }

    function Ni(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && Ni(t);
    }

    function Oi(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }

    function Pi(e) {
        e:{
            for (var t = e.return; null !== t;) {
                if (Oi(t)) {
                    var n = t;
                    break e;
                }
                t = t.return;
            }
            throw Error(u(160));
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw Error(u(161));
        }
        16 & n.effectTag && (Rb(t, ""), n.effectTag &= -17);
        e:t:for (n = e; ;) {
            for (; null === n.sibling;) {
                if (null === n.return || Oi(n.return)) {
                    n = null;
                    break e;
                }
                n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child;
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e;
            }
        }
        r ? Qi(e, n, t) : Ri(e, n, t);
    }

    function Qi(e, t, n) {
        var r = e.tag, o = 5 === r || 6 === r;
        if (o) e = o ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = sd)); else if (4 !== r && null !== (e = e.child)) for (Qi(e, t, n), e = e.sibling; null !== e;) Qi(e, t, n), e = e.sibling;
    }

    function Ri(e, t, n) {
        var r = e.tag, o = 5 === r || 6 === r;
        if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (Ri(e, t, n), e = e.sibling; null !== e;) Ri(e, t, n), e = e.sibling;
    }

    function Mi(e, t, n) {
        for (var r, o, a = t, i = !1; ;) {
            if (!i) {
                i = a.return;
                e:for (; ;) {
                    if (null === i) throw Error(u(160));
                    switch (r = i.stateNode, i.tag) {
                        case 5:
                            o = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, o = !0;
                            break e;
                    }
                    i = i.return;
                }
                i = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
                e:for (var s = e, l = a, c = n, f = l; ;) if (Ki(s, f, c), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child; else {
                    if (f === l) break e;
                    for (; null === f.sibling;) {
                        if (null === f.return || f.return === l) break e;
                        f = f.return;
                    }
                    f.sibling.return = f.return, f = f.sibling;
                }
                o ? (s = r, l = a.stateNode, 8 === s.nodeType ? s.parentNode.removeChild(l) : s.removeChild(l)) : r.removeChild(a.stateNode);
            } else if (4 === a.tag) {
                if (null !== a.child) {
                    r = a.stateNode.containerInfo, o = !0, a.child.return = a, a = a.child;
                    continue;
                }
            } else if (Ki(e, a, n), null !== a.child) {
                a.child.return = a, a = a.child;
                continue;
            }
            if (a === t) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === t) return;
                4 === (a = a.return).tag && (i = !1);
            }
            a.sibling.return = a.return, a = a.sibling;
        }
    }

    function Si(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                return void Hi(3, t);
            case 1:
            case 12:
            case 17:
                return;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps, o = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var a = t.updateQueue;
                    if (t.updateQueue = null, null !== a) {
                        for (n[ Nd ] = r, "input" === e && "radio" === r.type && null != r.name && Bb(n, r), pd(e, o), t = pd(e, r), o = 0; o < a.length; o += 2) {
                            var i = a[ o ], s = a[ o + 1 ];
                            "style" === i ? md(n, s) : "dangerouslySetInnerHTML" === i ? Qb(n, s) : "children" === i ? Rb(n, s) : Xa(n, i, s, t);
                        }
                        switch (e) {
                            case"input":
                                Cb(n, r);
                                break;
                            case"textarea":
                                Kb(n, r);
                                break;
                            case"select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Hb(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Hb(n, !!r.multiple, r.defaultValue, !0) : Hb(n, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode) throw Error(u(162));
                return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void ((t = t.stateNode).hydrate && (t.hydrate = !1, Vc(t.containerInfo)));
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, Ti = $f()), null !== n) e:for (e = n; ;) {
                    if (5 === e.tag) a = e.stateNode, r ? "function" == typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, o = null != (o = e.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null, a.style.display = ld("display", o)); else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps; else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (a = e.child.sibling).return = e, e = a;
                            continue;
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue;
                        }
                    }
                    if (e === n) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
                return void Ui(t);
            case 19:
                return void Ui(t);
        }
        throw Error(u(163));
    }

    function Ui(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Bi), t.forEach((function (t) {
                var r = Vi.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
        }
    }

    var Wi = "function" == typeof WeakMap ? WeakMap : Map;

    function Xi(e, t, n) {
        (n = wg(n, null)).tag = 3, n.payload = { element: null };
        var r = t.value;
        return n.callback = function () {
            Yi || (Yi = !0, Zi = r), Ci(e, t);
        }, n;
    }

    function $i(e, t, n) {
        (n = wg(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var o = t.value;
            n.payload = function () {
                return Ci(e, t), r(o);
            };
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
            "function" != typeof r && (null === aj ? aj = new Set([this]) : aj.add(this), Ci(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
        }), n;
    }

    var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V = 0, ej = 8, fj = 16, gj = 32,
        ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W = V, T = null, X = null, U = 0, S = ti, kj = null,
        lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = !1, Ti = 0, pj = 500, Y = null, Yi = !1, Zi = null,
        aj = null, qj = !1, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0, Rj;

    function Gg() {
        return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
    }

    function Hg(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = ag();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((W & fj) !== V) return U;
        if (null !== n) e = hg(e, 0 | n.timeoutMs || 5e3, 250); else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = hg(e, 150, 100);
                break;
            case 97:
            case 96:
                e = hg(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(u(326));
        }
        return null !== T && e === U && --e, e;
    }

    function Ig(e, t) {
        if (50 < uj) throw uj = 0, vj = null, Error(u(185));
        if (null !== (e = xj(e, t))) {
            var n = ag();
            1073741823 === t ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(e) : (Z(e), W === V && gg()) : Z(e), (4 & W) === V || 98 !== n && 99 !== n || (null === tj ? tj = new Map([[e, t]]) : (void 0 === (n = tj.get(e)) || n > t) && tj.set(e, t));
        }
    }

    function xj(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return, o = null;
        if (null === r && 3 === e.tag) o = e.stateNode; else for (; null !== r;) {
            if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                o = r.stateNode;
                break;
            }
            r = r.return;
        }
        return null !== o && (T === o && (Bg(t), S === vi && xi(o, U)), yi(o, t)), o;
    }

    function zj(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Aj(e, t = e.firstPendingTime)) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
    }

    function Z(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = eg(yj.bind(null, e)); else {
            var t = zj(e), n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90); else {
                var r = Gg();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var o = e.callbackPriority;
                    if (e.callbackExpirationTime === t && o >= r) return;
                    n !== Tf && Kf(n);
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? eg(yj.bind(null, e)) : dg(r, Bj.bind(null, e), { timeout: 10 * (1073741821 - t) - $f() }), e.callbackNode = t;
            }
        }
    }

    function Bj(e, t) {
        if (wj = 0, t) return Cj(e, t = Gg()), Z(e), null;
        var n = zj(e);
        if (0 !== n) {
            if (t = e.callbackNode, (W & (fj | gj)) !== V) throw Error(u(327));
            if (Dj(), e === T && n === U || Ej(e, n), null !== X) {
                var r = W;
                W |= fj;
                for (var o = Fj(); ;) try {
                    Gj();
                    break;
                } catch (t) {
                    Hj(e, t);
                }
                if (ng(), W = r, cj.current = o, S === hj) throw t = kj, Ej(e, n), xi(e, n), Z(e), t;
                if (null === X) switch (o = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = S, T = null, r) {
                    case ti:
                    case hj:
                        throw Error(u(345));
                    case ij:
                        Cj(e, 2 < n ? 2 : n);
                        break;
                    case ui:
                        if (xi(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ij(o)), 1073741823 === lj && 10 < (o = Ti + pj - $f())) {
                            if (oj) {
                                var a = e.lastPingedTime;
                                if (0 === a || a >= n) {
                                    e.lastPingedTime = n, Ej(e, n);
                                    break;
                                }
                            }
                            if (0 !== (a = zj(e)) && a !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break;
                            }
                            e.timeoutHandle = Hd(Jj.bind(null, e), o);
                            break;
                        }
                        Jj(e);
                        break;
                    case vi:
                        if (xi(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ij(o)), oj && (0 === (o = e.lastPingedTime) || o >= n)) {
                            e.lastPingedTime = n, Ej(e, n);
                            break;
                        }
                        if (0 !== (o = zj(e)) && o !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break;
                        }
                        if (1073741823 !== mj ? r = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? r = 0 : (r = 10 * (1073741821 - lj) - 5e3, 0 > (r = (o = $f()) - r) && (r = 0), (n = 10 * (1073741821 - n) - o) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bj(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = Hd(Jj.bind(null, e), r);
                            break;
                        }
                        Jj(e);
                        break;
                    case jj:
                        if (1073741823 !== lj && null !== nj) {
                            a = lj;
                            var i = nj;
                            if (0 >= (r = 0 | i.busyMinDurationMs) ? r = 0 : (o = 0 | i.busyDelayMs, r = (a = $f() - (10 * (1073741821 - a) - (0 | i.timeoutMs || 5e3))) <= o ? 0 : o + r - a), 10 < r) {
                                xi(e, n), e.timeoutHandle = Hd(Jj.bind(null, e), r);
                                break;
                            }
                        }
                        Jj(e);
                        break;
                    default:
                        throw Error(u(329));
                }
                if (Z(e), e.callbackNode === t) return Bj.bind(null, e);
            }
        }
        return null;
    }

    function yj(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, (W & (fj | gj)) !== V) throw Error(u(327));
        if (Dj(), e === T && t === U || Ej(e, t), null !== X) {
            var n = W;
            W |= fj;
            for (var r = Fj(); ;) try {
                Kj();
                break;
            } catch (t) {
                Hj(e, t);
            }
            if (ng(), W = n, cj.current = r, S === hj) throw n = kj, Ej(e, t), xi(e, t), Z(e), n;
            if (null !== X) throw Error(u(261));
            e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, T = null, Jj(e), Z(e);
        }
        return null;
    }

    function Lj() {
        if (null !== tj) {
            var e = tj;
            tj = null, e.forEach((function (e, t) {
                Cj(t, e), Z(t);
            })), gg();
        }
    }

    function Mj(e, t) {
        var n = W;
        W |= 1;
        try {
            return e(t);
        } finally {
            (W = n) === V && gg();
        }
    }

    function Nj(e, t) {
        var n = W;
        W &= -2, W |= ej;
        try {
            return e(t);
        } finally {
            (W = n) === V && gg();
        }
    }

    function Ej(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, Id(n)), null !== X) for (n = X.return; null !== n;) {
            var r = n;
            switch (r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && Df();
                    break;
                case 3:
                    eh(), H(K), H(J);
                    break;
                case 5:
                    gh(r);
                    break;
                case 4:
                    eh();
                    break;
                case 13:
                case 19:
                    H(M);
                    break;
                case 10:
                    og(r);
            }
            n = n.return;
        }
        T = e, X = Sg(e.current, null), U = t, S = ti, kj = null, mj = lj = 1073741823, nj = null, wi = 0, oj = !1;
    }

    function Hj(e, t) {
        for (; ;) {
            try {
                if (ng(), jh.current = sh, mh) for (var n = N.memoizedState; null !== n;) {
                    var r = n.queue;
                    null !== r && (r.pending = null), n = n.next;
                }
                if (lh = 0, P = O = N = null, mh = !1, null === X || null === X.return) return S = hj, kj = t, X = null;
                e:{
                    var o = e, a = X.return, i = X, s = t;
                    if (t = U, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var l = s;
                        if (0 == (2 & i.mode)) {
                            var u = i.alternate;
                            u ? (i.updateQueue = u.updateQueue, i.memoizedState = u.memoizedState, i.expirationTime = u.expirationTime) : (i.updateQueue = null, i.memoizedState = null);
                        }
                        var c = 0 != (1 & M.current), f = a;
                        do {
                            var d;
                            if (d = 13 === f.tag) {
                                var p = f.memoizedState;
                                if (null !== p) d = null !== p.dehydrated; else {
                                    var h = f.memoizedProps;
                                    d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c);
                                }
                            }
                            if (d) {
                                var m = f.updateQueue;
                                if (null === m) {
                                    var g = new Set;
                                    g.add(l), f.updateQueue = g;
                                } else m.add(l);
                                if (0 == (2 & f.mode)) {
                                    if (f.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag) if (null === i.alternate) i.tag = 17; else {
                                        var v = wg(1073741823, null);
                                        v.tag = 2, xg(i, v);
                                    }
                                    i.expirationTime = 1073741823;
                                    break e;
                                }
                                s = void 0, i = t;
                                var y = o.pingCache;
                                if (null === y ? (y = o.pingCache = new Wi, s = new Set, y.set(l, s)) : void 0 === (s = y.get(l)) && (s = new Set, y.set(l, s)), !s.has(i)) {
                                    s.add(i);
                                    var b = Oj.bind(null, o, l, i);
                                    l.then(b, b);
                                }
                                f.effectTag |= 4096, f.expirationTime = t;
                                break e;
                            }
                            f = f.return;
                        } while (null !== f);
                        s = Error((pb(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(i));
                    }
                    S !== jj && (S = ij), s = Ai(s, i), f = a;
                    do {
                        switch (f.tag) {
                            case 3:
                                l = s, f.effectTag |= 4096, f.expirationTime = t, yg(f, Xi(f, l, t));
                                break e;
                            case 1:
                                l = s;
                                var w = f.type, k = f.stateNode;
                                if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== k && "function" == typeof k.componentDidCatch && (null === aj || !aj.has(k)))) {
                                    f.effectTag |= 4096, f.expirationTime = t, yg(f, $i(f, l, t));
                                    break e;
                                }
                        }
                        f = f.return;
                    } while (null !== f);
                }
                X = Pj(X);
            } catch (e) {
                t = e;
                continue;
            }
            break;
        }
    }

    function Fj() {
        var e = cj.current;
        return cj.current = sh, null === e ? sh : e;
    }

    function Ag(e, t) {
        e < lj && 2 < e && (lj = e), null !== t && e < mj && 2 < e && (mj = e, nj = t);
    }

    function Bg(e) {
        e > wi && (wi = e);
    }

    function Kj() {
        for (; null !== X;) X = Qj(X);
    }

    function Gj() {
        for (; null !== X && !Uf();) X = Qj(X);
    }

    function Qj(e) {
        var t = Rj(e.alternate, e, U);
        return e.memoizedProps = e.pendingProps, null === t && (t = Pj(e)), dj.current = null, t;
    }

    function Pj(e) {
        X = e;
        do {
            var t = X.alternate;
            if (e = X.return, 0 == (2048 & X.effectTag)) {
                if (t = si(t, X, U), 1 === U || 1 !== X.childExpirationTime) {
                    for (var n = 0, r = X.child; null !== r;) {
                        var o = r.expirationTime, a = r.childExpirationTime;
                        o > n && (n = o), a > n && (n = a), r = r.sibling;
                    }
                    X.childExpirationTime = n;
                }
                if (null !== t) return t;
                null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = X.firstEffect), e.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = X : e.firstEffect = X, e.lastEffect = X));
            } else {
                if (null !== (t = zi(X))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048);
            }
            if (null !== (t = X.sibling)) return t;
            X = e;
        } while (null !== X);
        return S === ti && (S = jj), null;
    }

    function Ij(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
    }

    function Jj(e) {
        var t = ag();
        return cg(99, Sj.bind(null, e, t)), null;
    }

    function Sj(e, t) {
        do {
            Dj();
        } while (null !== rj);
        if ((W & (fj | gj)) !== V) throw Error(u(327));
        var n = e.finishedWork, r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(u(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var o = Ij(n);
        if (e.firstPendingTime = o, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === T && (X = T = null, U = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, o = n.firstEffect) : o = n : o = n.firstEffect, null !== o) {
            var a = W;
            W |= gj, dj.current = null, Dd = fd;
            var i = xd();
            if (yd(i)) {
                if ("selectionStart" in i) var s = { start: i.selectionStart, end: i.selectionEnd }; else e:{
                    var l = (s = (s = i.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
                    if (l && 0 !== l.rangeCount) {
                        s = l.anchorNode;
                        var c = l.anchorOffset, f = l.focusNode;
                        l = l.focusOffset;
                        try {
                            s.nodeType, f.nodeType;
                        } catch (e) {
                            s = null;
                            break e;
                        }
                        var d = 0, p = -1, h = -1, m = 0, g = 0, v = i, y = null;
                        t:for (; ;) {
                            for (var b; v !== s || 0 !== c && 3 !== v.nodeType || (p = d + c), v !== f || 0 !== l && 3 !== v.nodeType || (h = d + l), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);) y = v, v = b;
                            for (; ;) {
                                if (v === i) break t;
                                if (y === s && ++m === c && (p = d), y === f && ++g === l && (h = d), null !== (b = v.nextSibling)) break;
                                y = (v = y).parentNode;
                            }
                            v = b;
                        }
                        s = -1 === p || -1 === h ? null : { start: p, end: h };
                    } else s = null;
                }
                s = s || { start: 0, end: 0 };
            } else s = null;
            Ed = { activeElementDetached: null, focusedElem: i, selectionRange: s }, fd = !1, Y = o;
            do {
                try {
                    Tj();
                } catch (e) {
                    if (null === Y) throw Error(u(330));
                    Ei(Y, e), Y = Y.nextEffect;
                }
            } while (null !== Y);
            Y = o;
            do {
                try {
                    for (i = e, s = t; null !== Y;) {
                        var w = Y.effectTag;
                        if (16 & w && Rb(Y.stateNode, ""), 128 & w) {
                            var k = Y.alternate;
                            if (null !== k) {
                                var E = k.ref;
                                null !== E && ("function" == typeof E ? E(null) : E.current = null);
                            }
                        }
                        switch (1038 & w) {
                            case 2:
                                Pi(Y), Y.effectTag &= -3;
                                break;
                            case 6:
                                Pi(Y), Y.effectTag &= -3, Si(Y.alternate, Y);
                                break;
                            case 1024:
                                Y.effectTag &= -1025;
                                break;
                            case 1028:
                                Y.effectTag &= -1025, Si(Y.alternate, Y);
                                break;
                            case 4:
                                Si(Y.alternate, Y);
                                break;
                            case 8:
                                Mi(i, c = Y, s), Ni(c);
                        }
                        Y = Y.nextEffect;
                    }
                } catch (e) {
                    if (null === Y) throw Error(u(330));
                    Ei(Y, e), Y = Y.nextEffect;
                }
            } while (null !== Y);
            if (E = Ed, k = xd(), w = E.focusedElem, s = E.selectionRange, k !== w && w && w.ownerDocument && wd(w.ownerDocument.documentElement, w)) {
                null !== s && yd(w) && (k = s.start, void 0 === (E = s.end) && (E = k), "selectionStart" in w ? (w.selectionStart = k, w.selectionEnd = Math.min(E, w.value.length)) : (E = (k = w.ownerDocument || document) && k.defaultView || window).getSelection && (E = E.getSelection(), c = w.textContent.length, i = Math.min(s.start, c), s = void 0 === s.end ? i : Math.min(s.end, c), !E.extend && i > s && (c = s, s = i, i = c), c = vd(w, i), f = vd(w, s), c && f && (1 !== E.rangeCount || E.anchorNode !== c.node || E.anchorOffset !== c.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((k = k.createRange()).setStart(c.node, c.offset), E.removeAllRanges(), i > s ? (E.addRange(k), E.extend(f.node, f.offset)) : (k.setEnd(f.node, f.offset), E.addRange(k))))), k = [];
                for (E = w; E = E.parentNode;) 1 === E.nodeType && k.push({
                    element: E,
                    left: E.scrollLeft,
                    top: E.scrollTop
                });
                for ("function" == typeof w.focus && w.focus(), w = 0; w < k.length; w++) (E = k[ w ]).element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
            fd = !!Dd, Ed = Dd = null, e.current = n, Y = o;
            do {
                try {
                    for (w = e; null !== Y;) {
                        var x = Y.effectTag;
                        if (36 & x && Ji(w, Y.alternate, Y), 128 & x) {
                            k = void 0;
                            var S = Y.ref;
                            if (null !== S) {
                                var _ = Y.stateNode;
                                Y.tag, k = _, "function" == typeof S ? S(k) : S.current = k;
                            }
                        }
                        Y = Y.nextEffect;
                    }
                } catch (e) {
                    if (null === Y) throw Error(u(330));
                    Ei(Y, e), Y = Y.nextEffect;
                }
            } while (null !== Y);
            Y = null, Vf(), W = a;
        } else e.current = n;
        if (qj) qj = !1, rj = e, sj = t; else for (Y = o; null !== Y;) t = Y.nextEffect, Y.nextEffect = null, Y = t;
        if (0 === (t = e.firstPendingTime) && (aj = null), 1073741823 === t ? e === vj ? uj++ : (uj = 0, vj = e) : uj = 0, "function" == typeof Uj && Uj(n.stateNode, r), Z(e), Yi) throw Yi = !1, e = Zi, Zi = null, e;
        return (W & ej) !== V || gg(), null;
    }

    function Tj() {
        for (; null !== Y;) {
            var e = Y.effectTag;
            0 != (256 & e) && Gi(Y.alternate, Y), 0 == (512 & e) || qj || (qj = !0, dg(97, (function () {
                return Dj(), null;
            }))), Y = Y.nextEffect;
        }
    }

    function Dj() {
        if (90 !== sj) {
            var e = 97 < sj ? 97 : sj;
            return sj = 90, cg(e, Vj);
        }
    }

    function Vj() {
        if (null === rj) return !1;
        var e = rj;
        if (rj = null, (W & (fj | gj)) !== V) throw Error(u(331));
        var t = W;
        for (W |= gj, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        Hi(5, n), Ii(5, n);
                }
            } catch (t) {
                if (null === e) throw Error(u(330));
                Ei(e, t);
            }
            n = e.nextEffect, e.nextEffect = null, e = n;
        }
        return W = t, gg(), !0;
    }

    function Wj(e, t, n) {
        xg(e, t = Xi(e, t = Ai(n, t), 1073741823)), null !== (e = xj(e, 1073741823)) && Z(e);
    }

    function Ei(e, t) {
        if (3 === e.tag) Wj(e, e, t); else for (var n = e.return; null !== n;) {
            if (3 === n.tag) {
                Wj(n, e, t);
                break;
            }
            if (1 === n.tag) {
                var r = n.stateNode;
                if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === aj || !aj.has(r))) {
                    xg(n, e = $i(n, e = Ai(t, e), 1073741823)), null !== (n = xj(n, 1073741823)) && Z(n);
                    break;
                }
            }
            n = n.return;
        }
    }

    function Oj(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), T === e && U === n ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(e, U) : oj = !0 : Aj(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Z(e)));
    }

    function Vi(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = Hg(t = Gg(), e, null)), null !== (e = xj(e, t)) && Z(e);
    }

    Rj = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var o = t.pendingProps;
            if (e.memoizedProps !== o || K.current) rg = !0; else {
                if (r < n) {
                    switch (rg = !1, t.tag) {
                        case 3:
                            hi(t), Xh();
                            break;
                        case 5:
                            if (fh(t), 4 & t.mode && 1 !== n && o.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            L(t.type) && Gf(t);
                            break;
                        case 4:
                            dh(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            r = t.memoizedProps.value, o = t.type._context, I(jg, o._currentValue), o._currentValue = r;
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? ji(e, t, n) : (I(M, 1 & M.current), null !== (t = $h(e, t, n)) ? t.sibling : null);
                            I(M, 1 & M.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (r) return mi(e, t, n);
                                t.effectTag |= 64;
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null), I(M, M.current), !r) return null;
                    }
                    return $h(e, t, n);
                }
                rg = !1;
            }
        } else rg = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, o = Cf(t, J.current), qg(t, n), o = oh(null, t, r, e, o, n), t.effectTag |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, L(r)) {
                        var a = !0;
                        Gf(t);
                    } else a = !1;
                    t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, ug(t);
                    var i = r.getDerivedStateFromProps;
                    "function" == typeof i && Fg(t, r, i, e), o.updater = Jg, t.stateNode = o, o._reactInternalFiber = t, Ng(t, r, e, n), t = gi(null, t, r, !0, a, n);
                } else t.tag = 0, R(null, t, o, n), t = t.child;
                return t;
            case 16:
                e:{
                    if (o = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, ob(o), 1 !== o._status) throw o._result;
                    switch (o = o._result, t.type = o, a = t.tag = Xj(o), e = ig(o, e), a) {
                        case 0:
                            t = di(null, t, o, e, n);
                            break e;
                        case 1:
                            t = fi(null, t, o, e, n);
                            break e;
                        case 11:
                            t = Zh(null, t, o, e, n);
                            break e;
                        case 14:
                            t = ai(null, t, o, ig(o.type, e), r, n);
                            break e;
                    }
                    throw Error(u(306, o, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, di(e, t, r, o = t.elementType === r ? o : ig(r, o), n);
            case 1:
                return r = t.type, o = t.pendingProps, fi(e, t, r, o = t.elementType === r ? o : ig(r, o), n);
            case 3:
                if (hi(t), r = t.updateQueue, null === e || null === r) throw Error(u(282));
                if (r = t.pendingProps, o = null !== (o = t.memoizedState) ? o.element : null, vg(e, t), zg(t, r, null, n), (r = t.memoizedState.element) === o) Xh(), t = $h(e, t, n); else {
                    if ((o = t.stateNode.hydrate) && (Ph = Jd(t.stateNode.containerInfo.firstChild), Oh = t, o = Qh = !0), o) for (n = Yg(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling; else R(e, t, r, n), Xh();
                    t = t.child;
                }
                return t;
            case 5:
                return fh(t), null === e && Uh(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, i = o.children, Gd(r, o) ? i = null : null !== a && Gd(r, a) && (t.effectTag |= 16), ei(e, t), 4 & t.mode && 1 !== n && o.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (R(e, t, i, n), t = t.child), t;
            case 6:
                return null === e && Uh(t), null;
            case 13:
                return ji(e, t, n);
            case 4:
                return dh(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xg(t, null, r, n) : R(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, Zh(e, t, r, o = t.elementType === r ? o : ig(r, o), n);
            case 7:
                return R(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return R(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e:{
                    r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value;
                    var s = t.type._context;
                    if (I(jg, s._currentValue), s._currentValue = a, null !== i) if (s = i.value, 0 === (a = $e(s, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, a) : 1073741823))) {
                        if (i.children === o.children && !K.current) {
                            t = $h(e, t, n);
                            break e;
                        }
                    } else for (null !== (s = t.child) && (s.return = t); null !== s;) {
                        var l = s.dependencies;
                        if (null !== l) {
                            i = s.child;
                            for (var c = l.firstContext; null !== c;) {
                                if (c.context === r && 0 != (c.observedBits & a)) {
                                    1 === s.tag && ((c = wg(n, null)).tag = 2, xg(s, c)), s.expirationTime < n && (s.expirationTime = n), null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n), pg(s.return, n), l.expirationTime < n && (l.expirationTime = n);
                                    break;
                                }
                                c = c.next;
                            }
                        } else i = 10 === s.tag && s.type === t.type ? null : s.child;
                        if (null !== i) i.return = s; else for (i = s; null !== i;) {
                            if (i === t) {
                                i = null;
                                break;
                            }
                            if (null !== (s = i.sibling)) {
                                s.return = i.return, i = s;
                                break;
                            }
                            i = i.return;
                        }
                        s = i;
                    }
                    R(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = (a = t.pendingProps).children, qg(t, n), r = r(o = sg(o, a.unstable_observedBits)), t.effectTag |= 1, R(e, t, r, n), t.child;
            case 14:
                return a = ig(o = t.type, t.pendingProps), ai(e, t, o, a = ig(o.type, a), r, n);
            case 15:
                return ci(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ig(r, o), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, L(r) ? (e = !0, Gf(t)) : e = !1, qg(t, n), Lg(t, r, o), Ng(t, r, o, n), gi(null, t, r, !0, e, n);
            case 19:
                return mi(e, t, n);
        }
        throw Error(u(156, t.tag));
    };
    var Uj = null, Li = null;

    function Yj(e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
            var n = t.inject(e);
            Uj = function (e) {
                try {
                    t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag));
                } catch (e) {
                }
            }, Li = function (e) {
                try {
                    t.onCommitFiberUnmount(n, e);
                } catch (e) {
                }
            };
        } catch (e) {
        }
        return !0;
    }

    function Zj(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
    }

    function Sh(e, t, n, r) {
        return new Zj(e, t, n, r);
    }

    function bi(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
    }

    function Xj(e) {
        if ("function" == typeof e) return bi(e) ? 1 : 0;
        if (null != e) {
            if ((e = e.$$typeof) === gb) return 11;
            if (e === jb) return 14;
        }
        return 2;
    }

    function Sg(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Sh(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }

    function Ug(e, t, n, r, o, a) {
        var i = 2;
        if (r = e, "function" == typeof e) bi(e) && (i = 1); else if ("string" == typeof e) i = 5; else e:switch (e) {
            case ab:
                return Wg(n.children, o, a, t);
            case fb:
                i = 8, o |= 7;
                break;
            case bb:
                i = 8, o |= 1;
                break;
            case cb:
                return (e = Sh(12, n, t, 8 | o)).elementType = cb, e.type = cb, e.expirationTime = a, e;
            case hb:
                return (e = Sh(13, n, t, o)).type = hb, e.elementType = hb, e.expirationTime = a, e;
            case ib:
                return (e = Sh(19, n, t, o)).elementType = ib, e.expirationTime = a, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case db:
                        i = 10;
                        break e;
                    case eb:
                        i = 9;
                        break e;
                    case gb:
                        i = 11;
                        break e;
                    case jb:
                        i = 14;
                        break e;
                    case kb:
                        i = 16, r = null;
                        break e;
                    case lb:
                        i = 22;
                        break e;
                }
                throw Error(u(130, null == e ? e : typeof e, ""));
        }
        return (t = Sh(i, n, t, o)).elementType = e, t.type = r, t.expirationTime = a, t;
    }

    function Wg(e, t, n, r) {
        return (e = Sh(7, e, r, t)).expirationTime = n, e;
    }

    function Tg(e, t, n) {
        return (e = Sh(6, e, null, t)).expirationTime = n, e;
    }

    function Vg(e, t, n) {
        return (t = Sh(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }

    function ak(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
    }

    function Aj(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t;
    }

    function xi(e, t) {
        var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }

    function yi(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }

    function Cj(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
    }

    function bk(e, t, n, r) {
        var o = t.current, a = Gg(), i = Dg.suspense;
        a = Hg(a, o, i);
        e:if (n) {
            t:{
                if (dc(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(u(170));
                var s = n;
                do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1:
                            if (L(s.type)) {
                                s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t;
                            }
                    }
                    s = s.return;
                } while (null !== s);
                throw Error(u(171));
            }
            if (1 === n.tag) {
                var l = n.type;
                if (L(l)) {
                    n = Ff(n, l, s);
                    break e;
                }
            }
            n = s;
        } else n = Af;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = wg(a, i)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), xg(o, t), Ig(o, a), a;
    }

    function ck(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }

    function dk(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
    }

    function ek(e, t) {
        dk(e, t), (e = e.alternate) && dk(e, t);
    }

    function fk(e, t, n) {
        var r = new ak(e, t, n = null != n && !0 === n.hydrate), o = Sh(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = o, o.stateNode = r, ug(o), e[ Od ] = r.current, n && 0 !== t && Jc(e, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r;
    }

    function gk(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
    }

    function hk(e, t) {
        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
        return new fk(e, 0, t ? { hydrate: !0 } : void 0);
    }

    function ik(e, t, n, r, o) {
        var a = n._reactRootContainer;
        if (a) {
            var i = a._internalRoot;
            if ("function" == typeof o) {
                var s = o;
                o = function () {
                    var e = ck(i);
                    s.call(e);
                };
            }
            bk(t, i, e, o);
        } else {
            if (a = n._reactRootContainer = hk(n, r), i = a._internalRoot, "function" == typeof o) {
                var l = o;
                o = function () {
                    var e = ck(i);
                    l.call(e);
                };
            }
            Nj((function () {
                bk(t, i, e, o);
            }));
        }
        return ck(i);
    }

    function jk(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : null;
        return { $$typeof: $a, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
    }

    function kk(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : null;
        if (!gk(t)) throw Error(u(200));
        return jk(e, t, null, n);
    }

    fk.prototype.render = function (e) {
        bk(e, this._internalRoot, null, null);
    }, fk.prototype.unmount = function () {
        var e = this._internalRoot, t = e.containerInfo;
        bk(null, e, null, (function () {
            t[ Od ] = null;
        }));
    }, wc = function (e) {
        if (13 === e.tag) {
            var t = hg(Gg(), 150, 100);
            Ig(e, t), ek(e, t);
        }
    }, xc = function (e) {
        13 === e.tag && (Ig(e, 3), ek(e, 3));
    }, yc = function (e) {
        if (13 === e.tag) {
            var t = Gg();
            Ig(e, t = Hg(t, e, null)), ek(e, t);
        }
    }, za = function (e, t, n) {
        switch (t) {
            case"input":
                if (Cb(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
                        var r = n[ t ];
                        if (r !== e && r.form === e.form) {
                            var o = Qd(r);
                            if (!o) throw Error(u(90));
                            yb(r), Cb(r, o);
                        }
                    }
                }
                break;
            case"textarea":
                Kb(e, n);
                break;
            case"select":
                null != (t = n.value) && Hb(e, !!n.multiple, t, !1);
        }
    }, Fa = Mj, Ga = function (e, t, n, r, o) {
        var a = W;
        W |= 4;
        try {
            return cg(98, e.bind(null, t, n, r, o));
        } finally {
            (W = a) === V && gg();
        }
    }, Ha = function () {
        (W & (1 | fj | gj)) === V && (Lj(), Dj());
    }, Ia = function (e, t) {
        var n = W;
        W |= 2;
        try {
            return e(t);
        } finally {
            (W = n) === V && gg();
        }
    };
    var lk = {
        Events: [Nc, Pd, Qd, xa, ta, Xd, function (e) {
            jc(e, Wd);
        }, Da, Ea, id, mc, Dj, { current: !1 }]
    };
    !function (e) {
        var t = e.findFiberByHostInstance;
        Yj(n$1({}, e, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: Wa.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return null === (e = hc(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    }({
        findFiberByHostInstance: tc,
        bundleType: 0,
        version: "16.14.0",
        rendererPackageName: "react-dom"
    }), reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk, reactDom_production_min.createPortal = kk, reactDom_production_min.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(u(188));
            throw Error(u(268, Object.keys(e)));
        }
        return e = null === (e = hc(t)) ? null : e.stateNode;
    }, reactDom_production_min.flushSync = function (e, t) {
        if ((W & (fj | gj)) !== V) throw Error(u(187));
        var n = W;
        W |= 1;
        try {
            return cg(99, e.bind(null, t));
        } finally {
            W = n, gg();
        }
    }, reactDom_production_min.hydrate = function (e, t, n) {
        if (!gk(t)) throw Error(u(200));
        return ik(null, e, t, !0, n);
    }, reactDom_production_min.render = function (e, t, n) {
        if (!gk(t)) throw Error(u(200));
        return ik(null, e, t, !1, n);
    }, reactDom_production_min.unmountComponentAtNode = function (e) {
        if (!gk(e)) throw Error(u(40));
        return !!e._reactRootContainer && (Nj((function () {
            ik(null, null, e, !1, (function () {
                e._reactRootContainer = null, e[ Od ] = null;
            }));
        })), !0);
    }, reactDom_production_min.unstable_batchedUpdates = Mj, reactDom_production_min.unstable_createPortal = function (e, t) {
        return kk(e, t, 2 < arguments.length && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : null);
    }, reactDom_production_min.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!gk(n)) throw Error(u(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(u(38));
        return ik(e, t, n, !1, r);
    }, reactDom_production_min.version = "16.14.0";
    var reactDom_development = {}, tracing = { exports: {} }, schedulerTracing_production_min = {}, b$1 = 0;
    schedulerTracing_production_min.__interactionsRef = null, schedulerTracing_production_min.__subscriberRef = null, schedulerTracing_production_min.unstable_clear = function (e) {
        return e();
    }, schedulerTracing_production_min.unstable_getCurrent = function () {
        return null;
    }, schedulerTracing_production_min.unstable_getThreadID = function () {
        return ++b$1;
    }, schedulerTracing_production_min.unstable_subscribe = function () {
    }, schedulerTracing_production_min.unstable_trace = function (e, t, n) {
        return n();
    }, schedulerTracing_production_min.unstable_unsubscribe = function () {
    }, schedulerTracing_production_min.unstable_wrap = function (e) {
        return e;
    };
    var schedulerTracing_development = {};

    function checkDCE() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            if ("production" !== process.env.NODE_ENV) throw new Error("^_^");
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
            } catch (e) {
                console.error(e);
            }
        }
    }

    !function (e) {
        "production" !== process.env.NODE_ENV && function () {
            var t = 0, n = 0;
            e.__interactionsRef = null, e.__subscriberRef = null, e.__interactionsRef = { current: new Set }, e.__subscriberRef = { current: null };
            var r = null;

            function o(e) {
                var t = !1, n = null;
                if (r.forEach((function (r) {
                    try {
                        r.onInteractionTraced(e);
                    } catch (e) {
                        t || (t = !0, n = e);
                    }
                })), t) throw n;
            }

            function a(e) {
                var t = !1, n = null;
                if (r.forEach((function (r) {
                    try {
                        r.onInteractionScheduledWorkCompleted(e);
                    } catch (e) {
                        t || (t = !0, n = e);
                    }
                })), t) throw n;
            }

            function i(e, t) {
                var n = !1, o = null;
                if (r.forEach((function (r) {
                    try {
                        r.onWorkScheduled(e, t);
                    } catch (e) {
                        n || (n = !0, o = e);
                    }
                })), n) throw o;
            }

            function s(e, t) {
                var n = !1, o = null;
                if (r.forEach((function (r) {
                    try {
                        r.onWorkStarted(e, t);
                    } catch (e) {
                        n || (n = !0, o = e);
                    }
                })), n) throw o;
            }

            function l(e, t) {
                var n = !1, o = null;
                if (r.forEach((function (r) {
                    try {
                        r.onWorkStopped(e, t);
                    } catch (e) {
                        n || (n = !0, o = e);
                    }
                })), n) throw o;
            }

            function u(e, t) {
                var n = !1, o = null;
                if (r.forEach((function (r) {
                    try {
                        r.onWorkCanceled(e, t);
                    } catch (e) {
                        n || (n = !0, o = e);
                    }
                })), n) throw o;
            }

            r = new Set, e.unstable_clear = function (t) {
                var n = e.__interactionsRef.current;
                e.__interactionsRef.current = new Set;
                try {
                    return t();
                } finally {
                    e.__interactionsRef.current = n;
                }
            }, e.unstable_getCurrent = function () {
                return e.__interactionsRef.current;
            }, e.unstable_getThreadID = function () {
                return ++n;
            }, e.unstable_subscribe = function (t) {
                r.add(t), 1 === r.size && (e.__subscriberRef.current = {
                    onInteractionScheduledWorkCompleted: a,
                    onInteractionTraced: o,
                    onWorkCanceled: u,
                    onWorkScheduled: i,
                    onWorkStarted: s,
                    onWorkStopped: l
                });
            }, e.unstable_trace = function (n, r, o) {
                var a = arguments.length > 3 && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : 0,
                    i = { __count: 1, id: t++, name: n, timestamp: r }, s = e.__interactionsRef.current, l = new Set(s);
                l.add(i), e.__interactionsRef.current = l;
                var u, c = e.__subscriberRef.current;
                try {
                    null !== c && c.onInteractionTraced(i);
                } finally {
                    try {
                        null !== c && c.onWorkStarted(l, a);
                    } finally {
                        try {
                            u = o();
                        } finally {
                            e.__interactionsRef.current = s;
                            try {
                                null !== c && c.onWorkStopped(l, a);
                            } finally {
                                i.__count--, null !== c && 0 === i.__count && c.onInteractionScheduledWorkCompleted(i);
                            }
                        }
                    }
                }
                return u;
            }, e.unstable_unsubscribe = function (t) {
                r.delete(t), 0 === r.size && (e.__subscriberRef.current = null);
            }, e.unstable_wrap = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : 0,
                    r = e.__interactionsRef.current, o = e.__subscriberRef.current;
                null !== o && o.onWorkScheduled(r, n), r.forEach((function (e) {
                    e.__count++;
                }));
                var a = !1;

                function i() {
                    var i = e.__interactionsRef.current;
                    e.__interactionsRef.current = r, o = e.__subscriberRef.current;
                    try {
                        var s;
                        try {
                            null !== o && o.onWorkStarted(r, n);
                        } finally {
                            try {
                                s = t.apply(void 0, arguments);
                            } finally {
                                e.__interactionsRef.current = i, null !== o && o.onWorkStopped(r, n);
                            }
                        }
                        return s;
                    } finally {
                        a || (a = !0, r.forEach((function (e) {
                            e.__count--, null !== o && 0 === e.__count && o.onInteractionScheduledWorkCompleted(e);
                        })));
                    }
                }

                return i.cancel = function () {
                    o = e.__subscriberRef.current;
                    try {
                        null !== o && o.onWorkCanceled(r, n);
                    } finally {
                        r.forEach((function (e) {
                            e.__count--, o && 0 === e.__count && o.onInteractionScheduledWorkCompleted(e);
                        }));
                    }
                }, i;
            };
        }();
    }(schedulerTracing_development), "production" === process.env.NODE_ENV ? tracing.exports = schedulerTracing_production_min : tracing.exports = schedulerTracing_development, "production" !== process.env.NODE_ENV && function () {
        var e = react.exports, t = objectAssign, n = scheduler.exports, r = checkPropTypes_1, o = tracing.exports,
            a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

        function i(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[ r - 1 ] = arguments[ r ];
            l("warn", e, n);
        }

        function s(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[ r - 1 ] = arguments[ r ];
            l("error", e, n);
        }

        function l(e, t, n) {
            if (!(n.length > 0 && "string" == typeof n[ n.length - 1 ] && 0 === n[ n.length - 1 ].indexOf("\n    in"))) {
                var r = a.ReactDebugCurrentFrame.getStackAddendum();
                "" !== r && (t += "%s", n = n.concat([r]));
            }
            var o = n.map((function (e) {
                return "" + e;
            }));
            o.unshift("Warning: " + t), Function.prototype.apply.call(console[ e ], console, o);
            try {
                var i = 0, s = "Warning: " + t.replace(/%s/g, (function () {
                    return n[ i++ ];
                }));
                throw new Error(s);
            } catch (e) {
            }
        }

        if (a.hasOwnProperty("ReactCurrentDispatcher") || (a.ReactCurrentDispatcher = { current: null }), a.hasOwnProperty("ReactCurrentBatchConfig") || (a.ReactCurrentBatchConfig = { suspense: null }), !e) throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
        var u = function (e, t, n, r, o, a, i, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, u);
            } catch (e) {
                this.onError(e);
            }
        };
        if ("undefined" != typeof window && "function" == typeof window.dispatchEvent && "undefined" != typeof document && "function" == typeof document.createEvent) {
            var c = document.createElement("react");
            u = function (e, t, n, r, o, a, i, s, l) {
                if ("undefined" == typeof document) throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
                var u, f = document.createEvent("Event"), d = !0, p = window.event,
                    h = Object.getOwnPropertyDescriptor(window, "event"), m = Array.prototype.slice.call(arguments, 3);

                function g() {
                    c.removeEventListener(w, g, !1), void 0 !== window.event && window.hasOwnProperty("event") && (window.event = p), t.apply(n, m), d = !1;
                }

                var v = !1, y = !1;

                function b(e) {
                    if (u = e.error, v = !0, null === u && 0 === e.colno && 0 === e.lineno && (y = !0), e.defaultPrevented && null != u && "object" == typeof u) try {
                        u._suppressLogging = !0;
                    } catch (e) {
                    }
                }

                var w = "react-" + (e || "invokeguardedcallback");
                window.addEventListener("error", b), c.addEventListener(w, g, !1), f.initEvent(w, !1, !1), c.dispatchEvent(f), h && Object.defineProperty(window, "event", h), d && (v ? y && (u = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")) : u = new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."), this.onError(u)), window.removeEventListener("error", b);
            };
        }
        var f = u, d = !1, p = null, h = !1, m = null, g = {
            onError: function (e) {
                d = !0, p = e;
            }
        };

        function v(e, t, n, r, o, a, i, s, l) {
            d = !1, p = null, f.apply(g, arguments);
        }

        function y() {
            return d;
        }

        function b() {
            if (d) {
                var e = p;
                return d = !1, p = null, e;
            }
            throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
        }

        var w, k = null, E = null, x = null;

        function S(e, t, n) {
            var r = e.type || "unknown-event";
            e.currentTarget = x(n), function (e, t, n, r, o, a, i, s, l) {
                if (v.apply(this, arguments), d) {
                    var u = b();
                    h || (h = !0, m = u);
                }
            }(r, t, void 0, e), e.currentTarget = null;
        }

        w = function (e) {
            var t = e._dispatchListeners, n = e._dispatchInstances, r = Array.isArray(t), o = r ? t.length : t ? 1 : 0,
                a = Array.isArray(n), i = a ? n.length : n ? 1 : 0;
            a === r && i === o || s("EventPluginUtils: Invalid `event`.");
        };
        var _ = 10, T = 11, C = 12, R = 13, P = 14, N = 15, O = 17, I = 19, $ = 22, D = null, M = {};

        function A() {
            if (D) for (var e in M) {
                var t = M[ e ], n = D.indexOf(e);
                if (!(n > -1)) throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + e + "`.");
                if (!L[ n ]) {
                    if (!t.extractEvents) throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + e + "` does not.");
                    L[ n ] = t;
                    var r = t.eventTypes;
                    for (var o in r) if (!j(r[ o ], t, o)) throw Error("EventPluginRegistry: Failed to publish event `" + o + "` for plugin `" + e + "`.");
                }
            }
        }

        function j(e, t, n) {
            if (z.hasOwnProperty(n)) throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + n + "`.");
            z[ n ] = e;
            var r = e.phasedRegistrationNames;
            if (r) {
                for (var o in r) {
                    if (r.hasOwnProperty(o)) F(r[ o ], t, n);
                }
                return !0;
            }
            return !!e.registrationName && (F(e.registrationName, t, n), !0);
        }

        function F(e, t, n) {
            if (U[ e ]) throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + e + "`.");
            U[ e ] = t, B[ e ] = t.eventTypes[ n ].dependencies;
            var r = e.toLowerCase();
            W[ r ] = e, "onDoubleClick" === e && (W.ondblclick = e);
        }

        var L = [], z = {}, U = {}, B = {}, W = {};

        function V(e) {
            var t = !1;
            for (var n in e) if (e.hasOwnProperty(n)) {
                var r = e[ n ];
                if (!M.hasOwnProperty(n) || M[ n ] !== r) {
                    if (M[ n ]) throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + n + "`.");
                    M[ n ] = r, t = !0;
                }
            }
            t && A();
        }

        var H = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
            q = null, Y = null, Q = null;

        function K(e) {
            var t = E(e);
            if (t) {
                if ("function" != typeof q) throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
                var n = t.stateNode;
                if (n) {
                    var r = k(n);
                    q(t.stateNode, t.type, r);
                }
            }
        }

        function X(e) {
            Y ? Q ? Q.push(e) : Q = [e] : Y = e;
        }

        function J() {
            if (Y) {
                var e = Y, t = Q;
                if (Y = null, Q = null, K(e), t) for (var n = 0; n < t.length; n++) K(t[ n ]);
            }
        }

        var G = function (e, t) {
            return e(t);
        }, Z = function (e, t, n, r, o) {
            return e(t, n, r, o);
        }, ee = function () {
        }, te = G, ne = !1, re = !1;

        function oe() {
            (null !== Y || null !== Q) && (ee(), J());
        }

        var ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            ie = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", se = "data-reactroot",
            le = new RegExp("^[" + ae + "][" + ie + "]*$"), ue = Object.prototype.hasOwnProperty, ce = {}, fe = {};

        function de(e) {
            return !!ue.call(fe, e) || !ue.call(ce, e) && (le.test(e) ? (fe[ e ] = !0, !0) : (ce[ e ] = !0, s("Invalid attribute name: `%s`", e), !1));
        }

        function pe(e, t, n) {
            return null !== t ? 0 === t.type : !n && (e.length > 2 && ("o" === e[ 0 ] || "O" === e[ 0 ]) && ("n" === e[ 1 ] || "N" === e[ 1 ]));
        }

        function he(e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
                case"function":
                case"symbol":
                    return !0;
                case"boolean":
                    if (r) return !1;
                    if (null !== n) return !n.acceptsBooleans;
                    var o = e.toLowerCase().slice(0, 5);
                    return "data-" !== o && "aria-" !== o;
                default:
                    return !1;
            }
        }

        function me(e, t, n, r) {
            if (null == t) return !0;
            if (he(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || t < 1;
            }
            return !1;
        }

        function ge(e) {
            return ye.hasOwnProperty(e) ? ye[ e ] : null;
        }

        function ve(e, t, n, r, o, a) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a;
        }

        var ye = {};
        ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((function (e) {
            ye[ e ] = new ve(e, 0, !1, e, null, !1);
        })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
            var t = e[ 0 ], n = e[ 1 ];
            ye[ t ] = new ve(t, 1, !1, n, null, !1);
        })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
            ye[ e ] = new ve(e, 2, !1, e.toLowerCase(), null, !1);
        })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
            ye[ e ] = new ve(e, 2, !1, e, null, !1);
        })), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((function (e) {
            ye[ e ] = new ve(e, 3, !1, e.toLowerCase(), null, !1);
        })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
            ye[ e ] = new ve(e, 3, !0, e, null, !1);
        })), ["capture", "download"].forEach((function (e) {
            ye[ e ] = new ve(e, 4, !1, e, null, !1);
        })), ["cols", "rows", "size", "span"].forEach((function (e) {
            ye[ e ] = new ve(e, 6, !1, e, null, !1);
        })), ["rowSpan", "start"].forEach((function (e) {
            ye[ e ] = new ve(e, 5, !1, e.toLowerCase(), null, !1);
        }));
        var be = /[\-\:]([a-z])/g, we = function (e) {
            return e[ 1 ].toUpperCase();
        };
        ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((function (e) {
            var t = e.replace(be, we);
            ye[ t ] = new ve(t, 1, !1, e, null, !1);
        })), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((function (e) {
            var t = e.replace(be, we);
            ye[ t ] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
            var t = e.replace(be, we);
            ye[ t ] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
        })), ["tabIndex", "crossOrigin"].forEach((function (e) {
            ye[ e ] = new ve(e, 1, !1, e.toLowerCase(), null, !1);
        }));
        ye.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
            ye[ e ] = new ve(e, 1, !1, e.toLowerCase(), null, !0);
        }));
        var ke = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
            Ee = !1;

        function xe(e) {
            !Ee && ke.test(e) && (Ee = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
        }

        function Se(e, t, n, r) {
            if (r.mustUseProperty) return e[ r.propertyName ];
            r.sanitizeURL && xe("" + n);
            var o = r.attributeName, a = null;
            if (4 === r.type) {
                if (e.hasAttribute(o)) {
                    var i = e.getAttribute(o);
                    return "" === i || (me(t, n, r, !1) ? i : i === "" + n ? n : i);
                }
            } else if (e.hasAttribute(o)) {
                if (me(t, n, r, !1)) return e.getAttribute(o);
                if (3 === r.type) return n;
                a = e.getAttribute(o);
            }
            return me(t, n, r, !1) ? null === a ? n : a : a === "" + n ? n : a;
        }

        function _e(e, t, n) {
            if (de(t)) {
                if (!e.hasAttribute(t)) return void 0 === n ? void 0 : null;
                var r = e.getAttribute(t);
                return r === "" + n ? n : r;
            }
        }

        function Te(e, t, n, r) {
            var o = ge(t);
            if (!pe(t, o, r)) if (me(t, n, o, r) && (n = null), r || null === o) {
                if (de(t)) {
                    var a = t;
                    null === n ? e.removeAttribute(a) : e.setAttribute(a, "" + n);
                }
            } else if (o.mustUseProperty) {
                var i = o.propertyName;
                if (null === n) {
                    var s = o.type;
                    e[ i ] = 3 !== s && "";
                } else e[ i ] = n;
            } else {
                var l = o.attributeName, u = o.attributeNamespace;
                if (null === n) e.removeAttribute(l); else {
                    var c, f = o.type;
                    3 === f || 4 === f && !0 === n ? c = "" : (c = "" + n, o.sanitizeURL && xe(c.toString())), u ? e.setAttributeNS(u, l, c) : e.setAttribute(l, c);
                }
            }
        }

        var Ce = /^(.*)[\\\/]/;
        var Re = "function" == typeof Symbol && Symbol.for, Pe = Re ? Symbol.for("react.element") : 60103,
            Ne = Re ? Symbol.for("react.portal") : 60106, Oe = Re ? Symbol.for("react.fragment") : 60107,
            Ie = Re ? Symbol.for("react.strict_mode") : 60108, $e = Re ? Symbol.for("react.profiler") : 60114,
            De = Re ? Symbol.for("react.provider") : 60109, Me = Re ? Symbol.for("react.context") : 60110,
            Ae = Re ? Symbol.for("react.concurrent_mode") : 60111, je = Re ? Symbol.for("react.forward_ref") : 60112,
            Fe = Re ? Symbol.for("react.suspense") : 60113, Le = Re ? Symbol.for("react.suspense_list") : 60120,
            ze = Re ? Symbol.for("react.memo") : 60115, Ue = Re ? Symbol.for("react.lazy") : 60116,
            Be = Re ? Symbol.for("react.block") : 60121, We = "function" == typeof Symbol && Symbol.iterator;

        function Ve(e) {
            if (null === e || "object" != typeof e) return null;
            var t = We && e[ We ] || e[ "@@iterator" ];
            return "function" == typeof t ? t : null;
        }

        function He(e) {
            return 1 === e._status ? e._result : null;
        }

        function qe(e) {
            if (null == e) return null;
            if ("number" == typeof e.tag && s("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), "function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case Oe:
                    return "Fragment";
                case Ne:
                    return "Portal";
                case $e:
                    return "Profiler";
                case Ie:
                    return "StrictMode";
                case Fe:
                    return "Suspense";
                case Le:
                    return "SuspenseList";
            }
            if ("object" == typeof e) switch (e.$$typeof) {
                case Me:
                    return "Context.Consumer";
                case De:
                    return "Context.Provider";
                case je:
                    return n = e, r = e.render, o = "ForwardRef", a = r.displayName || r.name || "", n.displayName || ("" !== a ? o + "(" + a + ")" : o);
                case ze:
                    return qe(e.type);
                case Be:
                    return qe(e.render);
                case Ue:
                    var t = He(e);
                    if (t) return qe(t);
            }
            var n, r, o, a;
            return null;
        }

        var Ye = a.ReactDebugCurrentFrame;

        function Qe(e) {
            switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case _:
                case 9:
                    return "";
                default:
                    var t = e._debugOwner, n = e._debugSource, r = qe(e.type), o = null;
                    return t && (o = qe(t.type)), function (e, t, n) {
                        var r = "";
                        if (t) {
                            var o = t.fileName, a = o.replace(Ce, "");
                            if (/^index\./.test(a)) {
                                var i = o.match(Ce);
                                if (i) {
                                    var s = i[ 1 ];
                                    s && (a = s.replace(Ce, "") + "/" + a);
                                }
                            }
                            r = " (at " + a + ":" + t.lineNumber + ")";
                        } else n && (r = " (created by " + n + ")");
                        return "\n    in " + (e || "Unknown") + r;
                    }(r, n, o);
            }
        }

        function Ke(e) {
            var t = "", n = e;
            do {
                t += Qe(n), n = n.return;
            } while (n);
            return t;
        }

        var Xe = null, Je = !1;

        function Ge() {
            if (null === Xe) return null;
            var e = Xe._debugOwner;
            return null != e ? qe(e.type) : null;
        }

        function Ze() {
            return null === Xe ? "" : Ke(Xe);
        }

        function et() {
            Ye.getCurrentStack = null, Xe = null, Je = !1;
        }

        function tt(e) {
            Ye.getCurrentStack = Ze, Xe = e, Je = !1;
        }

        function nt(e) {
            Je = e;
        }

        function rt(e) {
            return "" + e;
        }

        function ot(e) {
            switch (typeof e) {
                case"boolean":
                case"number":
                case"object":
                case"string":
                case"undefined":
                    return e;
                default:
                    return "";
            }
        }

        var at, it = { checkPropTypes: null };
        at = a.ReactDebugCurrentFrame;
        var st = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 }, lt = {
            value: function (e, t, n) {
                return st[ e.type ] || e.onChange || e.readOnly || e.disabled || null == e[ t ] ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }, checked: function (e, t, n) {
                return e.onChange || e.readOnly || e.disabled || null == e[ t ] ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
        };

        function ut(e) {
            var t = e.type, n = e.nodeName;
            return n && "input" === n.toLowerCase() && ("checkbox" === t || "radio" === t);
        }

        function ct(e) {
            return e._valueTracker;
        }

        function ft(e) {
            ct(e) || (e._valueTracker = function (e) {
                var t = ut(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    r = "" + e[ t ];
                if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                    var o = n.get, a = n.set;
                    Object.defineProperty(e, t, {
                        configurable: !0, get: function () {
                            return o.call(this);
                        }, set: function (e) {
                            r = "" + e, a.call(this, e);
                        }
                    }), Object.defineProperty(e, t, { enumerable: n.enumerable });
                    var i = {
                        getValue: function () {
                            return r;
                        }, setValue: function (e) {
                            r = "" + e;
                        }, stopTracking: function () {
                            !function (e) {
                                e._valueTracker = null;
                            }(e), delete e[ t ];
                        }
                    };
                    return i;
                }
            }(e));
        }

        function dt(e) {
            if (!e) return !1;
            var t = ct(e);
            if (!t) return !0;
            var n = t.getValue(), r = function (e) {
                var t = "";
                return e ? t = ut(e) ? e.checked ? "true" : "false" : e.value : t;
            }(e);
            return r !== n && (t.setValue(r), !0);
        }

        it.checkPropTypes = function (e, t) {
            r(lt, t, "prop", e, at.getStackAddendum);
        };
        var pt = !1, ht = !1, mt = !1, gt = !1;

        function vt(e) {
            return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value;
        }

        function yt(e, n) {
            var r = e, o = n.checked;
            return t({}, n, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != o ? o : r._wrapperState.initialChecked
            });
        }

        function bt(e, t) {
            it.checkPropTypes("input", t), void 0 === t.checked || void 0 === t.defaultChecked || ht || (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", Ge() || "A component", t.type), ht = !0), void 0 === t.value || void 0 === t.defaultValue || pt || (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", Ge() || "A component", t.type), pt = !0);
            var n = e, r = null == t.defaultValue ? "" : t.defaultValue;
            n._wrapperState = {
                initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                initialValue: ot(null != t.value ? t.value : r),
                controlled: vt(t)
            };
        }

        function wt(e, t) {
            var n = e, r = t.checked;
            null != r && Te(n, "checked", r, !1);
        }

        function kt(e, t) {
            var n = e, r = vt(t);
            n._wrapperState.controlled || !r || gt || (s("A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), gt = !0), !n._wrapperState.controlled || r || mt || (s("A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), mt = !0), wt(e, t);
            var o = ot(t.value), a = t.type;
            if (null != o) "number" === a ? (0 === o && "" === n.value || n.value != o) && (n.value = rt(o)) : n.value !== rt(o) && (n.value = rt(o)); else if ("submit" === a || "reset" === a) return void n.removeAttribute("value");
            t.hasOwnProperty("value") ? St(n, t.type, o) : t.hasOwnProperty("defaultValue") && St(n, t.type, ot(t.defaultValue)), null == t.checked && null != t.defaultChecked && (n.defaultChecked = !!t.defaultChecked);
        }

        function Et(e, t, n) {
            var r = e;
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var o = t.type;
                if (("submit" === o || "reset" === o) && (void 0 === t.value || null === t.value)) return;
                var a = rt(r._wrapperState.initialValue);
                n || a !== r.value && (r.value = a), r.defaultValue = a;
            }
            var i = r.name;
            "" !== i && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !!r._wrapperState.initialChecked, "" !== i && (r.name = i);
        }

        function xt(e, t) {
            var n = e;
            kt(n, t), function (e, t) {
                var n = t.name;
                if ("radio" === t.type && null != n) {
                    for (var r = e; r.parentNode;) r = r.parentNode;
                    for (var o = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + "][type=\"radio\"]"), a = 0; a < o.length; a++) {
                        var i = o[ a ];
                        if (i !== e && i.form === e.form) {
                            var s = ms(i);
                            if (!s) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                            dt(i), kt(i, s);
                        }
                    }
                }
            }(n, t);
        }

        function St(e, t, n) {
            "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = rt(e._wrapperState.initialValue) : e.defaultValue !== rt(n) && (e.defaultValue = rt(n)));
        }

        var _t, Tt = !1, Ct = !1;

        function Rt(t, n) {
            "object" == typeof n.children && null !== n.children && e.Children.forEach(n.children, (function (e) {
                null != e && "string" != typeof e && "number" != typeof e && "string" == typeof e.type && (Ct || (Ct = !0, s("Only strings and numbers are supported as <option> children.")));
            })), null == n.selected || Tt || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tt = !0);
        }

        function Pt(n, r) {
            var o = t({ children: void 0 }, r), a = function (t) {
                var n = "";
                return e.Children.forEach(t, (function (e) {
                    null != e && (n += e);
                })), n;
            }(r.children);
            return a && (o.children = a), o;
        }

        function Nt() {
            var e = Ge();
            return e ? "\n\nCheck the render method of `" + e + "`." : "";
        }

        _t = !1;
        var Ot = ["value", "defaultValue"];

        function It(e, t, n, r) {
            var o = e.options;
            if (t) {
                for (var a = n, i = {}, s = 0; s < a.length; s++) i[ "$" + a[ s ] ] = !0;
                for (var l = 0; l < o.length; l++) {
                    var u = i.hasOwnProperty("$" + o[ l ].value);
                    o[ l ].selected !== u && (o[ l ].selected = u), u && r && (o[ l ].defaultSelected = !0);
                }
            } else {
                for (var c = rt(ot(n)), f = null, d = 0; d < o.length; d++) {
                    if (o[ d ].value === c) return o[ d ].selected = !0, void (r && (o[ d ].defaultSelected = !0));
                    null !== f || o[ d ].disabled || (f = o[ d ]);
                }
                null !== f && (f.selected = !0);
            }
        }

        function $t(e, n) {
            return t({}, n, { value: void 0 });
        }

        function Dt(e, t) {
            var n = e;
            !function (e) {
                it.checkPropTypes("select", e);
                for (var t = 0; t < Ot.length; t++) {
                    var n = Ot[ t ];
                    if (null != e[ n ]) {
                        var r = Array.isArray(e[ n ]);
                        e.multiple && !r ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Nt()) : !e.multiple && r && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Nt());
                    }
                }
            }(t), n._wrapperState = { wasMultiple: !!t.multiple }, void 0 === t.value || void 0 === t.defaultValue || _t || (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"), _t = !0);
        }

        var Mt = !1;

        function At(e, n) {
            var r = e;
            if (null != n.dangerouslySetInnerHTML) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            return t({}, n, { value: void 0, defaultValue: void 0, children: rt(r._wrapperState.initialValue) });
        }

        function jt(e, t) {
            var n = e;
            it.checkPropTypes("textarea", t), void 0 === t.value || void 0 === t.defaultValue || Mt || (s("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components", Ge() || "A component"), Mt = !0);
            var r = t.value;
            if (null == r) {
                var o = t.children, a = t.defaultValue;
                if (null != o) {
                    if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), null != a) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    if (Array.isArray(o)) {
                        if (!(o.length <= 1)) throw Error("<textarea> can only have at most one child.");
                        o = o[ 0 ];
                    }
                    a = o;
                }
                null == a && (a = ""), r = a;
            }
            n._wrapperState = { initialValue: ot(r) };
        }

        function Ft(e, t) {
            var n = e, r = ot(t.value), o = ot(t.defaultValue);
            if (null != r) {
                var a = rt(r);
                a !== n.value && (n.value = a), null == t.defaultValue && n.defaultValue !== a && (n.defaultValue = a);
            }
            null != o && (n.defaultValue = rt(o));
        }

        function Lt(e, t) {
            var n = e, r = n.textContent;
            r === n._wrapperState.initialValue && "" !== r && null !== r && (n.value = r);
        }

        var zt = "http://www.w3.org/1999/xhtml", Ut = "http://www.w3.org/1998/Math/MathML",
            Bt = "http://www.w3.org/2000/svg", Wt = zt, Vt = Bt;

        function Ht(e) {
            switch (e) {
                case"svg":
                    return Bt;
                case"math":
                    return Ut;
                default:
                    return zt;
            }
        }

        function qt(e, t) {
            return null == e || e === zt ? Ht(t) : e === Bt && "foreignObject" === t ? zt : e;
        }

        var Yt, Qt, Kt = (Qt = function (e, t) {
            if (e.namespaceURI !== Vt || "innerHTML" in e) e.innerHTML = t; else {
                (Yt = Yt || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
                for (var n = Yt.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; n.firstChild;) e.appendChild(n.firstChild);
            }
        }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction((function () {
                return Qt(e, t, n, r);
            }));
        } : Qt), Xt = function (e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
            }
            e.textContent = t;
        };

        function Jt(e, t) {
            var n = {};
            return n[ e.toLowerCase() ] = t.toLowerCase(), n[ "Webkit" + e ] = "webkit" + t, n[ "Moz" + e ] = "moz" + t, n;
        }

        var Gt = {
            animationend: Jt("Animation", "AnimationEnd"),
            animationiteration: Jt("Animation", "AnimationIteration"),
            animationstart: Jt("Animation", "AnimationStart"),
            transitionend: Jt("Transition", "TransitionEnd")
        }, Zt = {}, en = {};

        function tn(e) {
            if (Zt[ e ]) return Zt[ e ];
            if (!Gt[ e ]) return e;
            var t = Gt[ e ];
            for (var n in t) if (t.hasOwnProperty(n) && n in en) return Zt[ e ] = t[ n ];
            return e;
        }

        H && (en = document.createElement("div").style, "AnimationEvent" in window || (delete Gt.animationend.animation, delete Gt.animationiteration.animation, delete Gt.animationstart.animation), "TransitionEvent" in window || delete Gt.transitionend.transition);
        var nn = "abort", rn = tn("animationend"), on = tn("animationiteration"), an = tn("animationstart"),
            sn = "blur", ln = "canplay", un = "canplaythrough", cn = "cancel", fn = "change", dn = "click",
            pn = "close", hn = "compositionend", mn = "compositionstart", gn = "compositionupdate", vn = "contextmenu",
            yn = "copy", bn = "cut", wn = "dblclick", kn = "auxclick", En = "drag", xn = "dragend", Sn = "dragenter",
            _n = "dragexit", Tn = "dragleave", Cn = "dragover", Rn = "dragstart", Pn = "drop", Nn = "durationchange",
            On = "emptied", In = "encrypted", $n = "ended", Dn = "error", Mn = "focus", An = "gotpointercapture",
            jn = "input", Fn = "invalid", Ln = "keydown", zn = "keypress", Un = "keyup", Bn = "load", Wn = "loadstart",
            Vn = "loadeddata", Hn = "loadedmetadata", qn = "lostpointercapture", Yn = "mousedown", Qn = "mousemove",
            Kn = "mouseout", Xn = "mouseover", Jn = "mouseup", Gn = "paste", Zn = "pause", er = "play", tr = "playing",
            nr = "pointercancel", rr = "pointerdown", or = "pointermove", ar = "pointerout", ir = "pointerover",
            sr = "pointerup", lr = "progress", ur = "ratechange", cr = "reset", fr = "scroll", dr = "seeked",
            pr = "seeking", hr = "selectionchange", mr = "stalled", gr = "submit", vr = "suspend", yr = "textInput",
            br = "timeupdate", wr = "toggle", kr = "touchcancel", Er = "touchend", xr = "touchmove", Sr = "touchstart",
            _r = tn("transitionend"), Tr = "volumechange", Cr = "waiting", Rr = "wheel",
            Pr = [nn, ln, un, Nn, On, In, $n, Dn, Vn, Hn, Wn, Zn, er, tr, lr, ur, dr, pr, mr, vr, br, Tr, Cr];
        var Nr = new ("function" == typeof WeakMap ? WeakMap : Map);

        function Or(e) {
            var t = Nr.get(e);
            return void 0 === t && (t = new Map, Nr.set(e, t)), t;
        }

        function Ir(e) {
            return e._reactInternalFiber;
        }

        var $r = 64, Dr = 128, Mr = 256, Ar = 512, jr = 1024, Fr = 2048, Lr = 4096, zr = a.ReactCurrentOwner;

        function Ur(e) {
            var t = e, n = e;
            if (e.alternate) for (; t.return;) t = t.return; else {
                var r = t;
                do {
                    0 != (1026 & (t = r).effectTag) && (n = t.return), r = t.return;
                } while (r);
            }
            return 3 === t.tag ? n : null;
        }

        function Br(e) {
            if (e.tag === R) {
                var t = e.memoizedState;
                if (null === t) {
                    var n = e.alternate;
                    null !== n && (t = n.memoizedState);
                }
                if (null !== t) return t.dehydrated;
            }
            return null;
        }

        function Wr(e) {
            return 3 === e.tag ? e.stateNode.containerInfo : null;
        }

        function Vr(e) {
            if (Ur(e) !== e) throw Error("Unable to find node on an unmounted component.");
        }

        function Hr(e) {
            var t = e.alternate;
            if (!t) {
                var n = Ur(e);
                if (null === n) throw Error("Unable to find node on an unmounted component.");
                return n !== e ? null : e;
            }
            for (var r = e, o = t; ;) {
                var a = r.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                    var s = a.return;
                    if (null !== s) {
                        r = o = s;
                        continue;
                    }
                    break;
                }
                if (a.child === i.child) {
                    for (var l = a.child; l;) {
                        if (l === r) return Vr(a), e;
                        if (l === o) return Vr(a), t;
                        l = l.sibling;
                    }
                    throw Error("Unable to find node on an unmounted component.");
                }
                if (r.return !== o.return) r = a, o = i; else {
                    for (var u = !1, c = a.child; c;) {
                        if (c === r) {
                            u = !0, r = a, o = i;
                            break;
                        }
                        if (c === o) {
                            u = !0, o = a, r = i;
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!u) {
                        for (c = i.child; c;) {
                            if (c === r) {
                                u = !0, r = i, o = a;
                                break;
                            }
                            if (c === o) {
                                u = !0, o = i, r = a;
                                break;
                            }
                            c = c.sibling;
                        }
                        if (!u) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                    }
                }
                if (r.alternate !== o) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
            }
            if (3 !== r.tag) throw Error("Unable to find node on an unmounted component.");
            return r.stateNode.current === r ? e : t;
        }

        function qr(e) {
            var t = Hr(e);
            if (!t) return null;
            for (var n = t; ;) {
                if (5 === n.tag || 6 === n.tag) return n;
                if (n.child) n.child.return = n, n = n.child; else {
                    if (n === t) return null;
                    for (; !n.sibling;) {
                        if (!n.return || n.return === t) return null;
                        n = n.return;
                    }
                    n.sibling.return = n.return, n = n.sibling;
                }
            }
            return null;
        }

        function Yr(e, t) {
            if (null == t) throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");
            return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }

        function Qr(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }

        var Kr = null, Xr = function (e) {
            e && (!function (e) {
                var t = e._dispatchListeners, n = e._dispatchInstances;
                if (w(e), Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) S(e, t[ r ], n[ r ]); else t && S(e, t, n);
                e._dispatchListeners = null, e._dispatchInstances = null;
            }(e), e.isPersistent() || e.constructor.release(e));
        }, Jr = function (e) {
            return Xr(e);
        };

        function Gr(e) {
            null !== e && (Kr = Yr(Kr, e));
            var t = Kr;
            if (Kr = null, t) {
                if (Qr(t, Jr), Kr) throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
                !function () {
                    if (h) {
                        var e = m;
                        throw h = !1, m = null, e;
                    }
                }();
            }
        }

        function Zr(e) {
            var t = e.target || e.srcElement || window;
            return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t;
        }

        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */function eo(e) {
            if (!H) return !1;
            var t = "on" + e, n = t in document;
            if (!n) {
                var r = document.createElement("div");
                r.setAttribute(t, "return;"), n = "function" == typeof r[ t ];
            }
            return n;
        }

        var to, no, ro, oo = [];

        function ao(e) {
            if (3 === e.tag) return e.stateNode.containerInfo;
            for (; e.return;) e = e.return;
            return 3 !== e.tag ? null : e.stateNode.containerInfo;
        }

        function io(e, t, n, r, o) {
            var a = function (e, t, n, r, o) {
                for (var a = null, i = 0; i < L.length; i++) {
                    var s = L[ i ];
                    if (s) {
                        var l = s.extractEvents(e, t, n, r, o);
                        l && (a = Yr(a, l));
                    }
                }
                return a;
            }(e, t, n, r, o);
            Gr(a);
        }

        function so(e) {
            var t = e.targetInst, n = t;
            do {
                if (!n) {
                    e.ancestors.push(n);
                    break;
                }
                var r = ao(n);
                if (!r) break;
                var o = n.tag;
                5 !== o && 6 !== o || e.ancestors.push(n), n = ds(r);
            } while (n);
            for (var a = 0; a < e.ancestors.length; a++) {
                t = e.ancestors[ a ];
                var i = Zr(e.nativeEvent), s = e.topLevelType, l = e.nativeEvent, u = e.eventSystemFlags;
                0 === a && (u |= 64), io(s, t, l, i, u);
            }
        }

        function lo(e, t, n, r) {
            var o, a = function (e, t, n, r) {
                if (oo.length) {
                    var o = oo.pop();
                    return o.topLevelType = e, o.eventSystemFlags = r, o.nativeEvent = t, o.targetInst = n, o;
                }
                return { topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: [] };
            }(e, n, r, t);
            try {
                !function (e, t, n) {
                    if (re) return e(t, n);
                    re = !0;
                    try {
                        te(e, t, n);
                    } finally {
                        re = !1, oe();
                    }
                }(so, a);
            } finally {
                (o = a).topLevelType = null, o.nativeEvent = null, o.targetInst = null, o.ancestors.length = 0, oo.length < 10 && oo.push(o);
            }
        }

        function uo(e, t, n) {
            if (!n.has(e)) {
                switch (e) {
                    case fr:
                        Ho(fr, t);
                        break;
                    case Mn:
                    case sn:
                        Ho(Mn, t), Ho(sn, t), n.set(sn, null), n.set(Mn, null);
                        break;
                    case cn:
                    case pn:
                        eo(e) && Ho(e, t);
                        break;
                    case Fn:
                    case gr:
                    case cr:
                        break;
                    default:
                        -1 !== Pr.indexOf(e) || Vo(e, t);
                }
                n.set(e, null);
            }
        }

        var co = !1, fo = [], po = null, ho = null, mo = null, go = new Map, vo = new Map, yo = [];
        var bo = [Yn, Jn, kr, Er, Sr, kn, wn, nr, rr, sr, xn, Rn, Pn, hn, mn, Ln, zn, Un, jn, yr, pn, cn, yn, bn, Gn, dn, fn, vn, cr, gr],
            wo = [Mn, sn, Sn, Tn, Xn, Kn, ir, ar, An, qn];

        function ko(e) {
            return bo.indexOf(e) > -1;
        }

        function Eo(e, t, n) {
            uo(e, t, n);
        }

        function xo(e, t, n, r, o) {
            return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: o, container: r };
        }

        function So(e, t, n, r, o) {
            var a = xo(e, t, n, r, o);
            fo.push(a);
        }

        function _o(e, t) {
            switch (e) {
                case Mn:
                case sn:
                    po = null;
                    break;
                case Sn:
                case Tn:
                    ho = null;
                    break;
                case Xn:
                case Kn:
                    mo = null;
                    break;
                case ir:
                case ar:
                    var n = t.pointerId;
                    go.delete(n);
                    break;
                case An:
                case qn:
                    var r = t.pointerId;
                    vo.delete(r);
            }
        }

        function To(e, t, n, r, o, a) {
            if (null === e || e.nativeEvent !== a) {
                var i = xo(t, n, r, o, a);
                if (null !== t) {
                    var s = ps(t);
                    null !== s && no(s);
                }
                return i;
            }
            return e.eventSystemFlags |= r, e;
        }

        function Co(e) {
            var t = ds(e.target);
            if (null !== t) {
                var r = Ur(t);
                if (null !== r) {
                    var o = r.tag;
                    if (o === R) {
                        var a = Br(r);
                        if (null !== a) return e.blockedOn = a, void n.unstable_runWithPriority(e.priority, (function () {
                            ro(r);
                        }));
                    } else if (3 === o) {
                        if (r.stateNode.hydrate) return void (e.blockedOn = Wr(r));
                    }
                }
            }
            e.blockedOn = null;
        }

        function Ro(e) {
            if (null !== e.blockedOn) return !1;
            var t = Xo(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            if (null !== t) {
                var n = ps(t);
                return null !== n && no(n), e.blockedOn = t, !1;
            }
            return !0;
        }

        function Po(e, t, n) {
            Ro(e) && n.delete(t);
        }

        function No() {
            for (co = !1; fo.length > 0;) {
                var e = fo[ 0 ];
                if (null !== e.blockedOn) {
                    var t = ps(e.blockedOn);
                    null !== t && to(t);
                    break;
                }
                var n = Xo(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                null !== n ? e.blockedOn = n : fo.shift();
            }
            null !== po && Ro(po) && (po = null), null !== ho && Ro(ho) && (ho = null), null !== mo && Ro(mo) && (mo = null), go.forEach(Po), vo.forEach(Po);
        }

        function Oo(e, t) {
            e.blockedOn === t && (e.blockedOn = null, co || (co = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, No)));
        }

        function Io(e) {
            if (fo.length > 0) {
                Oo(fo[ 0 ], e);
                for (var t = 1; t < fo.length; t++) {
                    var n = fo[ t ];
                    n.blockedOn === e && (n.blockedOn = null);
                }
            }
            null !== po && Oo(po, e), null !== ho && Oo(ho, e), null !== mo && Oo(mo, e);
            var r = function (t) {
                return Oo(t, e);
            };
            go.forEach(r), vo.forEach(r);
            for (var o = 0; o < yo.length; o++) {
                var a = yo[ o ];
                a.blockedOn === e && (a.blockedOn = null);
            }
            for (; yo.length > 0;) {
                var i = yo[ 0 ];
                if (null !== i.blockedOn) break;
                Co(i), null === i.blockedOn && yo.shift();
            }
        }

        var $o = {}, Do = new Map, Mo = new Map, Ao = [fn, hr, yr, mn, hn, gn],
            jo = [En, "drag", Sn, "dragEnter", _n, "dragExit", Tn, "dragLeave", Cn, "dragOver", Qn, "mouseMove", Kn, "mouseOut", Xn, "mouseOver", or, "pointerMove", ar, "pointerOut", ir, "pointerOver", fr, "scroll", wr, "toggle", xr, "touchMove", Rr, "wheel"],
            Fo = [nn, "abort", rn, "animationEnd", on, "animationIteration", an, "animationStart", ln, "canPlay", un, "canPlayThrough", Nn, "durationChange", On, "emptied", In, "encrypted", $n, "ended", Dn, "error", An, "gotPointerCapture", Bn, "load", Vn, "loadedData", Hn, "loadedMetadata", Wn, "loadStart", qn, "lostPointerCapture", tr, "playing", lr, "progress", pr, "seeking", mr, "stalled", vr, "suspend", br, "timeUpdate", _r, "transitionEnd", Cr, "waiting"];

        function Lo(e, t) {
            for (var n = 0; n < e.length; n += 2) {
                var r = e[ n ], o = e[ n + 1 ], a = "on" + (o[ 0 ].toUpperCase() + o.slice(1)), i = {
                    phasedRegistrationNames: { bubbled: a, captured: a + "Capture" },
                    dependencies: [r],
                    eventPriority: t
                };
                Mo.set(r, t), Do.set(r, i), $o[ o ] = i;
            }
        }

        Lo([sn, "blur", cn, "cancel", dn, "click", pn, "close", vn, "contextMenu", yn, "copy", bn, "cut", kn, "auxClick", wn, "doubleClick", xn, "dragEnd", Rn, "dragStart", Pn, "drop", Mn, "focus", jn, "input", Fn, "invalid", Ln, "keyDown", zn, "keyPress", Un, "keyUp", Yn, "mouseDown", Jn, "mouseUp", Gn, "paste", Zn, "pause", er, "play", nr, "pointerCancel", rr, "pointerDown", sr, "pointerUp", ur, "rateChange", cr, "reset", dr, "seeked", gr, "submit", kr, "touchCancel", Er, "touchEnd", Sr, "touchStart", Tr, "volumeChange"], 0), Lo(jo, 1), Lo(Fo, 2), function (e, t) {
            for (var n = 0; n < e.length; n++) Mo.set(e[ n ], t);
        }(Ao, 0);
        var zo = n.unstable_UserBlockingPriority, Uo = n.unstable_runWithPriority, Bo = !0;

        function Wo(e) {
            Bo = !!e;
        }

        function Vo(e, t) {
            qo(t, e, !1);
        }

        function Ho(e, t) {
            qo(t, e, !0);
        }

        function qo(e, t, n) {
            var r;
            switch (function (e) {
                var t = Mo.get(e);
                return void 0 === t ? 2 : t;
            }(t)) {
                case 0:
                    r = Yo.bind(null, t, 1, e);
                    break;
                case 1:
                    r = Qo.bind(null, t, 1, e);
                    break;
                default:
                    r = Ko.bind(null, t, 1, e);
            }
            var o = t;
            n ? function (e, t, n) {
                e.addEventListener(t, n, !0);
            }(e, o, r) : function (e, t, n) {
                e.addEventListener(t, n, !1);
            }(e, o, r);
        }

        function Yo(e, t, n, r) {
            r.timeStamp, ne || ee(), function (e, t, n, r, o) {
                var a = ne;
                ne = !0;
                try {
                    Z(e, t, n, r, o);
                } finally {
                    (ne = a) || oe();
                }
            }(Ko, e, t, n, r);
        }

        function Qo(e, t, n, r) {
            Uo(zo, Ko.bind(null, e, t, n, r));
        }

        function Ko(e, t, n, r) {
            if (Bo) if (fo.length > 0 && ko(e)) So(null, e, t, n, r); else {
                var o = Xo(e, t, n, r);
                null !== o ? ko(e) ? So(o, e, t, n, r) : function (e, t, n, r, o) {
                    switch (t) {
                        case Mn:
                            return po = To(po, e, t, n, r, o), !0;
                        case Sn:
                            return ho = To(ho, e, t, n, r, o), !0;
                        case Xn:
                            return mo = To(mo, e, t, n, r, o), !0;
                        case ir:
                            var a = o, i = a.pointerId;
                            return go.set(i, To(go.get(i) || null, e, t, n, r, a)), !0;
                        case An:
                            var s = o, l = s.pointerId;
                            return vo.set(l, To(vo.get(l) || null, e, t, n, r, s)), !0;
                    }
                    return !1;
                }(o, e, t, n, r) || (_o(e, r), lo(e, t, r, null)) : _o(e, r);
            }
        }

        function Xo(e, t, n, r) {
            var o = ds(Zr(r));
            if (null !== o) {
                var a = Ur(o);
                if (null === a) o = null; else {
                    var i = a.tag;
                    if (i === R) {
                        var s = Br(a);
                        if (null !== s) return s;
                        o = null;
                    } else if (3 === i) {
                        if (a.stateNode.hydrate) return Wr(a);
                        o = null;
                    } else a !== o && (o = null);
                }
            }
            return lo(e, t, r, o), null;
        }

        var Jo = {
            animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
            background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
            backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
            border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
            borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
            borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
            borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
            borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
            borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
            borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
            borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
            borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
            borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
            borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
            borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
            borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
            borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
            columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
            columns: ["columnCount", "columnWidth"],
            flex: ["flexBasis", "flexGrow", "flexShrink"],
            flexFlow: ["flexDirection", "flexWrap"],
            font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
            fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
            gap: ["columnGap", "rowGap"],
            grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
            gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
            gridColumn: ["gridColumnEnd", "gridColumnStart"],
            gridColumnGap: ["columnGap"],
            gridGap: ["columnGap", "rowGap"],
            gridRow: ["gridRowEnd", "gridRowStart"],
            gridRowGap: ["rowGap"],
            gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
            listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
            margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
            marker: ["markerEnd", "markerMid", "markerStart"],
            mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
            maskPosition: ["maskPositionX", "maskPositionY"],
            outline: ["outlineColor", "outlineStyle", "outlineWidth"],
            overflow: ["overflowX", "overflowY"],
            padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
            placeContent: ["alignContent", "justifyContent"],
            placeItems: ["alignItems", "justifyItems"],
            placeSelf: ["alignSelf", "justifySelf"],
            textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
            textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
            transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
            wordWrap: ["overflowWrap"]
        }, Go = {
            animationIterationCount: !0,
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
        };
        var Zo = ["Webkit", "ms", "Moz", "O"];

        function ea(e, t, n) {
            return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Go.hasOwnProperty(e) && Go[ e ] ? ("" + t).trim() : t + "px";
        }

        Object.keys(Go).forEach((function (e) {
            Zo.forEach((function (t) {
                Go[ function (e, t) {
                    return e + t.charAt(0).toUpperCase() + t.substring(1);
                }(t, e) ] = Go[ e ];
            }));
        }));
        var ta = /([A-Z])/g, na = /^ms-/;
        var ra = /^(?:webkit|moz|o)[A-Z]/, oa = /^-ms-/, aa = /-(.)/g, ia = /;\s*$/, sa = {}, la = {}, ua = !1, ca = !1,
            fa = function (e) {
                sa.hasOwnProperty(e) && sa[ e ] || (sa[ e ] = !0, s("Unsupported style property %s. Did you mean %s?", e, e.replace(oa, "ms-").replace(aa, (function (e, t) {
                    return t.toUpperCase();
                }))));
            }, da = function (e, t) {
                e.indexOf("-") > -1 ? fa(e) : ra.test(e) ? function (e) {
                    sa.hasOwnProperty(e) && sa[ e ] || (sa[ e ] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
                }(e) : ia.test(t) && function (e, t) {
                    la.hasOwnProperty(t) && la[ t ] || (la[ t ] = !0, s("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", e, t.replace(ia, "")));
                }(e, t), "number" == typeof t && (isNaN(t) ? function (e, t) {
                    ua || (ua = !0, s("`NaN` is an invalid value for the `%s` css style property.", e));
                }(e) : isFinite(t) || function (e, t) {
                    ca || (ca = !0, s("`Infinity` is an invalid value for the `%s` css style property.", e));
                }(e));
            };

        function pa(e) {
            var t = "", n = "";
            for (var r in e) if (e.hasOwnProperty(r)) {
                var o = e[ r ];
                if (null != o) {
                    var a = 0 === r.indexOf("--");
                    t += n + (a ? r : r.replace(ta, "-$1").toLowerCase().replace(na, "-ms-")) + ":", t += ea(r, o, a), n = ";";
                }
            }
            return t || null;
        }

        function ha(e, t) {
            var n = e.style;
            for (var r in t) if (t.hasOwnProperty(r)) {
                var o = 0 === r.indexOf("--");
                o || da(r, t[ r ]);
                var a = ea(r, t[ r ], o);
                "float" === r && (r = "cssFloat"), o ? n.setProperty(r, a) : n[ r ] = a;
            }
        }

        function ma(e) {
            var t = {};
            for (var n in e) for (var r = Jo[ n ] || [n], o = 0; o < r.length; o++) t[ r[ o ] ] = n;
            return t;
        }

        var ga = t({ menuitem: !0 }, {
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
        }), va = null;

        function ya(e, t) {
            if (t) {
                if (ga[ e ] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + va.getStackAddendum());
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                    if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
                }
                if (!t.suppressContentEditableWarning && t.contentEditable && null != t.children && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), null != t.style && "object" != typeof t.style) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + va.getStackAddendum());
            }
        }

        function ba(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case"annotation-xml":
                case"color-profile":
                case"font-face":
                case"font-face-src":
                case"font-face-uri":
                case"font-face-format":
                case"font-face-name":
                case"missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }

        va = a.ReactDebugCurrentFrame;
        var wa = {
                accept: "accept",
                acceptcharset: "acceptCharset",
                "accept-charset": "acceptCharset",
                accesskey: "accessKey",
                action: "action",
                allowfullscreen: "allowFullScreen",
                alt: "alt",
                as: "as",
                async: "async",
                autocapitalize: "autoCapitalize",
                autocomplete: "autoComplete",
                autocorrect: "autoCorrect",
                autofocus: "autoFocus",
                autoplay: "autoPlay",
                autosave: "autoSave",
                capture: "capture",
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing",
                challenge: "challenge",
                charset: "charSet",
                checked: "checked",
                children: "children",
                cite: "cite",
                class: "className",
                classid: "classID",
                classname: "className",
                cols: "cols",
                colspan: "colSpan",
                content: "content",
                contenteditable: "contentEditable",
                contextmenu: "contextMenu",
                controls: "controls",
                controlslist: "controlsList",
                coords: "coords",
                crossorigin: "crossOrigin",
                dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
                data: "data",
                datetime: "dateTime",
                default: "default",
                defaultchecked: "defaultChecked",
                defaultvalue: "defaultValue",
                defer: "defer",
                dir: "dir",
                disabled: "disabled",
                disablepictureinpicture: "disablePictureInPicture",
                download: "download",
                draggable: "draggable",
                enctype: "encType",
                for: "htmlFor",
                form: "form",
                formmethod: "formMethod",
                formaction: "formAction",
                formenctype: "formEncType",
                formnovalidate: "formNoValidate",
                formtarget: "formTarget",
                frameborder: "frameBorder",
                headers: "headers",
                height: "height",
                hidden: "hidden",
                high: "high",
                href: "href",
                hreflang: "hrefLang",
                htmlfor: "htmlFor",
                httpequiv: "httpEquiv",
                "http-equiv": "httpEquiv",
                icon: "icon",
                id: "id",
                innerhtml: "innerHTML",
                inputmode: "inputMode",
                integrity: "integrity",
                is: "is",
                itemid: "itemID",
                itemprop: "itemProp",
                itemref: "itemRef",
                itemscope: "itemScope",
                itemtype: "itemType",
                keyparams: "keyParams",
                keytype: "keyType",
                kind: "kind",
                label: "label",
                lang: "lang",
                list: "list",
                loop: "loop",
                low: "low",
                manifest: "manifest",
                marginwidth: "marginWidth",
                marginheight: "marginHeight",
                max: "max",
                maxlength: "maxLength",
                media: "media",
                mediagroup: "mediaGroup",
                method: "method",
                min: "min",
                minlength: "minLength",
                multiple: "multiple",
                muted: "muted",
                name: "name",
                nomodule: "noModule",
                nonce: "nonce",
                novalidate: "noValidate",
                open: "open",
                optimum: "optimum",
                pattern: "pattern",
                placeholder: "placeholder",
                playsinline: "playsInline",
                poster: "poster",
                preload: "preload",
                profile: "profile",
                radiogroup: "radioGroup",
                readonly: "readOnly",
                referrerpolicy: "referrerPolicy",
                rel: "rel",
                required: "required",
                reversed: "reversed",
                role: "role",
                rows: "rows",
                rowspan: "rowSpan",
                sandbox: "sandbox",
                scope: "scope",
                scoped: "scoped",
                scrolling: "scrolling",
                seamless: "seamless",
                selected: "selected",
                shape: "shape",
                size: "size",
                sizes: "sizes",
                span: "span",
                spellcheck: "spellCheck",
                src: "src",
                srcdoc: "srcDoc",
                srclang: "srcLang",
                srcset: "srcSet",
                start: "start",
                step: "step",
                style: "style",
                summary: "summary",
                tabindex: "tabIndex",
                target: "target",
                title: "title",
                type: "type",
                usemap: "useMap",
                value: "value",
                width: "width",
                wmode: "wmode",
                wrap: "wrap",
                about: "about",
                accentheight: "accentHeight",
                "accent-height": "accentHeight",
                accumulate: "accumulate",
                additive: "additive",
                alignmentbaseline: "alignmentBaseline",
                "alignment-baseline": "alignmentBaseline",
                allowreorder: "allowReorder",
                alphabetic: "alphabetic",
                amplitude: "amplitude",
                arabicform: "arabicForm",
                "arabic-form": "arabicForm",
                ascent: "ascent",
                attributename: "attributeName",
                attributetype: "attributeType",
                autoreverse: "autoReverse",
                azimuth: "azimuth",
                basefrequency: "baseFrequency",
                baselineshift: "baselineShift",
                "baseline-shift": "baselineShift",
                baseprofile: "baseProfile",
                bbox: "bbox",
                begin: "begin",
                bias: "bias",
                by: "by",
                calcmode: "calcMode",
                capheight: "capHeight",
                "cap-height": "capHeight",
                clip: "clip",
                clippath: "clipPath",
                "clip-path": "clipPath",
                clippathunits: "clipPathUnits",
                cliprule: "clipRule",
                "clip-rule": "clipRule",
                color: "color",
                colorinterpolation: "colorInterpolation",
                "color-interpolation": "colorInterpolation",
                colorinterpolationfilters: "colorInterpolationFilters",
                "color-interpolation-filters": "colorInterpolationFilters",
                colorprofile: "colorProfile",
                "color-profile": "colorProfile",
                colorrendering: "colorRendering",
                "color-rendering": "colorRendering",
                contentscripttype: "contentScriptType",
                contentstyletype: "contentStyleType",
                cursor: "cursor",
                cx: "cx",
                cy: "cy",
                d: "d",
                datatype: "datatype",
                decelerate: "decelerate",
                descent: "descent",
                diffuseconstant: "diffuseConstant",
                direction: "direction",
                display: "display",
                divisor: "divisor",
                dominantbaseline: "dominantBaseline",
                "dominant-baseline": "dominantBaseline",
                dur: "dur",
                dx: "dx",
                dy: "dy",
                edgemode: "edgeMode",
                elevation: "elevation",
                enablebackground: "enableBackground",
                "enable-background": "enableBackground",
                end: "end",
                exponent: "exponent",
                externalresourcesrequired: "externalResourcesRequired",
                fill: "fill",
                fillopacity: "fillOpacity",
                "fill-opacity": "fillOpacity",
                fillrule: "fillRule",
                "fill-rule": "fillRule",
                filter: "filter",
                filterres: "filterRes",
                filterunits: "filterUnits",
                floodopacity: "floodOpacity",
                "flood-opacity": "floodOpacity",
                floodcolor: "floodColor",
                "flood-color": "floodColor",
                focusable: "focusable",
                fontfamily: "fontFamily",
                "font-family": "fontFamily",
                fontsize: "fontSize",
                "font-size": "fontSize",
                fontsizeadjust: "fontSizeAdjust",
                "font-size-adjust": "fontSizeAdjust",
                fontstretch: "fontStretch",
                "font-stretch": "fontStretch",
                fontstyle: "fontStyle",
                "font-style": "fontStyle",
                fontvariant: "fontVariant",
                "font-variant": "fontVariant",
                fontweight: "fontWeight",
                "font-weight": "fontWeight",
                format: "format",
                from: "from",
                fx: "fx",
                fy: "fy",
                g1: "g1",
                g2: "g2",
                glyphname: "glyphName",
                "glyph-name": "glyphName",
                glyphorientationhorizontal: "glyphOrientationHorizontal",
                "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                glyphorientationvertical: "glyphOrientationVertical",
                "glyph-orientation-vertical": "glyphOrientationVertical",
                glyphref: "glyphRef",
                gradienttransform: "gradientTransform",
                gradientunits: "gradientUnits",
                hanging: "hanging",
                horizadvx: "horizAdvX",
                "horiz-adv-x": "horizAdvX",
                horizoriginx: "horizOriginX",
                "horiz-origin-x": "horizOriginX",
                ideographic: "ideographic",
                imagerendering: "imageRendering",
                "image-rendering": "imageRendering",
                in2: "in2",
                in: "in",
                inlist: "inlist",
                intercept: "intercept",
                k1: "k1",
                k2: "k2",
                k3: "k3",
                k4: "k4",
                k: "k",
                kernelmatrix: "kernelMatrix",
                kernelunitlength: "kernelUnitLength",
                kerning: "kerning",
                keypoints: "keyPoints",
                keysplines: "keySplines",
                keytimes: "keyTimes",
                lengthadjust: "lengthAdjust",
                letterspacing: "letterSpacing",
                "letter-spacing": "letterSpacing",
                lightingcolor: "lightingColor",
                "lighting-color": "lightingColor",
                limitingconeangle: "limitingConeAngle",
                local: "local",
                markerend: "markerEnd",
                "marker-end": "markerEnd",
                markerheight: "markerHeight",
                markermid: "markerMid",
                "marker-mid": "markerMid",
                markerstart: "markerStart",
                "marker-start": "markerStart",
                markerunits: "markerUnits",
                markerwidth: "markerWidth",
                mask: "mask",
                maskcontentunits: "maskContentUnits",
                maskunits: "maskUnits",
                mathematical: "mathematical",
                mode: "mode",
                numoctaves: "numOctaves",
                offset: "offset",
                opacity: "opacity",
                operator: "operator",
                order: "order",
                orient: "orient",
                orientation: "orientation",
                origin: "origin",
                overflow: "overflow",
                overlineposition: "overlinePosition",
                "overline-position": "overlinePosition",
                overlinethickness: "overlineThickness",
                "overline-thickness": "overlineThickness",
                paintorder: "paintOrder",
                "paint-order": "paintOrder",
                panose1: "panose1",
                "panose-1": "panose1",
                pathlength: "pathLength",
                patterncontentunits: "patternContentUnits",
                patterntransform: "patternTransform",
                patternunits: "patternUnits",
                pointerevents: "pointerEvents",
                "pointer-events": "pointerEvents",
                points: "points",
                pointsatx: "pointsAtX",
                pointsaty: "pointsAtY",
                pointsatz: "pointsAtZ",
                prefix: "prefix",
                preservealpha: "preserveAlpha",
                preserveaspectratio: "preserveAspectRatio",
                primitiveunits: "primitiveUnits",
                property: "property",
                r: "r",
                radius: "radius",
                refx: "refX",
                refy: "refY",
                renderingintent: "renderingIntent",
                "rendering-intent": "renderingIntent",
                repeatcount: "repeatCount",
                repeatdur: "repeatDur",
                requiredextensions: "requiredExtensions",
                requiredfeatures: "requiredFeatures",
                resource: "resource",
                restart: "restart",
                result: "result",
                results: "results",
                rotate: "rotate",
                rx: "rx",
                ry: "ry",
                scale: "scale",
                security: "security",
                seed: "seed",
                shaperendering: "shapeRendering",
                "shape-rendering": "shapeRendering",
                slope: "slope",
                spacing: "spacing",
                specularconstant: "specularConstant",
                specularexponent: "specularExponent",
                speed: "speed",
                spreadmethod: "spreadMethod",
                startoffset: "startOffset",
                stddeviation: "stdDeviation",
                stemh: "stemh",
                stemv: "stemv",
                stitchtiles: "stitchTiles",
                stopcolor: "stopColor",
                "stop-color": "stopColor",
                stopopacity: "stopOpacity",
                "stop-opacity": "stopOpacity",
                strikethroughposition: "strikethroughPosition",
                "strikethrough-position": "strikethroughPosition",
                strikethroughthickness: "strikethroughThickness",
                "strikethrough-thickness": "strikethroughThickness",
                string: "string",
                stroke: "stroke",
                strokedasharray: "strokeDasharray",
                "stroke-dasharray": "strokeDasharray",
                strokedashoffset: "strokeDashoffset",
                "stroke-dashoffset": "strokeDashoffset",
                strokelinecap: "strokeLinecap",
                "stroke-linecap": "strokeLinecap",
                strokelinejoin: "strokeLinejoin",
                "stroke-linejoin": "strokeLinejoin",
                strokemiterlimit: "strokeMiterlimit",
                "stroke-miterlimit": "strokeMiterlimit",
                strokewidth: "strokeWidth",
                "stroke-width": "strokeWidth",
                strokeopacity: "strokeOpacity",
                "stroke-opacity": "strokeOpacity",
                suppresscontenteditablewarning: "suppressContentEditableWarning",
                suppresshydrationwarning: "suppressHydrationWarning",
                surfacescale: "surfaceScale",
                systemlanguage: "systemLanguage",
                tablevalues: "tableValues",
                targetx: "targetX",
                targety: "targetY",
                textanchor: "textAnchor",
                "text-anchor": "textAnchor",
                textdecoration: "textDecoration",
                "text-decoration": "textDecoration",
                textlength: "textLength",
                textrendering: "textRendering",
                "text-rendering": "textRendering",
                to: "to",
                transform: "transform",
                typeof: "typeof",
                u1: "u1",
                u2: "u2",
                underlineposition: "underlinePosition",
                "underline-position": "underlinePosition",
                underlinethickness: "underlineThickness",
                "underline-thickness": "underlineThickness",
                unicode: "unicode",
                unicodebidi: "unicodeBidi",
                "unicode-bidi": "unicodeBidi",
                unicoderange: "unicodeRange",
                "unicode-range": "unicodeRange",
                unitsperem: "unitsPerEm",
                "units-per-em": "unitsPerEm",
                unselectable: "unselectable",
                valphabetic: "vAlphabetic",
                "v-alphabetic": "vAlphabetic",
                values: "values",
                vectoreffect: "vectorEffect",
                "vector-effect": "vectorEffect",
                version: "version",
                vertadvy: "vertAdvY",
                "vert-adv-y": "vertAdvY",
                vertoriginx: "vertOriginX",
                "vert-origin-x": "vertOriginX",
                vertoriginy: "vertOriginY",
                "vert-origin-y": "vertOriginY",
                vhanging: "vHanging",
                "v-hanging": "vHanging",
                videographic: "vIdeographic",
                "v-ideographic": "vIdeographic",
                viewbox: "viewBox",
                viewtarget: "viewTarget",
                visibility: "visibility",
                vmathematical: "vMathematical",
                "v-mathematical": "vMathematical",
                vocab: "vocab",
                widths: "widths",
                wordspacing: "wordSpacing",
                "word-spacing": "wordSpacing",
                writingmode: "writingMode",
                "writing-mode": "writingMode",
                x1: "x1",
                x2: "x2",
                x: "x",
                xchannelselector: "xChannelSelector",
                xheight: "xHeight",
                "x-height": "xHeight",
                xlinkactuate: "xlinkActuate",
                "xlink:actuate": "xlinkActuate",
                xlinkarcrole: "xlinkArcrole",
                "xlink:arcrole": "xlinkArcrole",
                xlinkhref: "xlinkHref",
                "xlink:href": "xlinkHref",
                xlinkrole: "xlinkRole",
                "xlink:role": "xlinkRole",
                xlinkshow: "xlinkShow",
                "xlink:show": "xlinkShow",
                xlinktitle: "xlinkTitle",
                "xlink:title": "xlinkTitle",
                xlinktype: "xlinkType",
                "xlink:type": "xlinkType",
                xmlbase: "xmlBase",
                "xml:base": "xmlBase",
                xmllang: "xmlLang",
                "xml:lang": "xmlLang",
                xmlns: "xmlns",
                "xml:space": "xmlSpace",
                xmlnsxlink: "xmlnsXlink",
                "xmlns:xlink": "xmlnsXlink",
                xmlspace: "xmlSpace",
                y1: "y1",
                y2: "y2",
                y: "y",
                ychannelselector: "yChannelSelector",
                z: "z",
                zoomandpan: "zoomAndPan"
            }, ka = {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0
            }, Ea = {}, xa = new RegExp("^(aria)-[" + ie + "]*$"), Sa = new RegExp("^(aria)[A-Z][" + ie + "]*$"),
            _a = Object.prototype.hasOwnProperty;

        function Ta(e, t) {
            if (_a.call(Ea, t) && Ea[ t ]) return !0;
            if (Sa.test(t)) {
                var n = "aria-" + t.slice(4).toLowerCase(), r = ka.hasOwnProperty(n) ? n : null;
                if (null == r) return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ea[ t ] = !0, !0;
                if (t !== r) return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r), Ea[ t ] = !0, !0;
            }
            if (xa.test(t)) {
                var o = t.toLowerCase(), a = ka.hasOwnProperty(o) ? o : null;
                if (null == a) return Ea[ t ] = !0, !1;
                if (t !== a) return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, a), Ea[ t ] = !0, !0;
            }
            return !0;
        }

        function Ca(e, t) {
            ba(e, t) || function (e, t) {
                var n = [];
                for (var r in t) Ta(0, r) || n.push(r);
                var o = n.map((function (e) {
                    return "`" + e + "`";
                })).join(", ");
                1 === n.length ? s("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", o, e) : n.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", o, e);
            }(e, t);
        }

        var Ra = !1;
        var Pa, Na = {}, Oa = Object.prototype.hasOwnProperty, Ia = /^on./, $a = /^on[^A-Z]/,
            Da = new RegExp("^(aria)-[" + ie + "]*$"), Ma = new RegExp("^(aria)[A-Z][" + ie + "]*$");
        Pa = function (e, t, n, r) {
            if (Oa.call(Na, t) && Na[ t ]) return !0;
            var o = t.toLowerCase();
            if ("onfocusin" === o || "onfocusout" === o) return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Na[ t ] = !0, !0;
            if (r) {
                if (U.hasOwnProperty(t)) return !0;
                var a = W.hasOwnProperty(o) ? W[ o ] : null;
                if (null != a) return s("Invalid event handler property `%s`. Did you mean `%s`?", t, a), Na[ t ] = !0, !0;
                if (Ia.test(t)) return s("Unknown event handler property `%s`. It will be ignored.", t), Na[ t ] = !0, !0;
            } else if (Ia.test(t)) return $a.test(t) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Na[ t ] = !0, !0;
            if (Da.test(t) || Ma.test(t)) return !0;
            if ("innerhtml" === o) return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Na[ t ] = !0, !0;
            if ("aria" === o) return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Na[ t ] = !0, !0;
            if ("is" === o && null != n && "string" != typeof n) return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Na[ t ] = !0, !0;
            if ("number" == typeof n && isNaN(n)) return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Na[ t ] = !0, !0;
            var i = ge(t), l = null !== i && 0 === i.type;
            if (wa.hasOwnProperty(o)) {
                var u = wa[ o ];
                if (u !== t) return s("Invalid DOM property `%s`. Did you mean `%s`?", t, u), Na[ t ] = !0, !0;
            } else if (!l && t !== o) return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Na[ t ] = !0, !0;
            return "boolean" == typeof n && he(t, n, i, !1) ? (n ? s("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : s("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Na[ t ] = !0, !0) : !!l || (he(t, n, i, !1) ? (Na[ t ] = !0, !1) : ("false" !== n && "true" !== n || null === i || 3 !== i.type || (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, "false" === n ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Na[ t ] = !0), !0));
        };

        function Aa(e, t, n) {
            ba(e, t) || function (e, t, n) {
                var r = [];
                for (var o in t) Pa(0, o, t[ o ], n) || r.push(o);
                var a = r.map((function (e) {
                    return "`" + e + "`";
                })).join(", ");
                1 === r.length ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", a, e) : r.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", a, e);
            }(e, t, n);
        }

        var ja, Fa, La, za, Ua, Ba, Wa, Va, Ha, qa, Ya = !1, Qa = "dangerouslySetInnerHTML",
            Ka = "suppressContentEditableWarning", Xa = "suppressHydrationWarning", Ja = "autoFocus", Ga = "children",
            Za = "style", ei = Wt;
        ja = { time: !0, dialog: !0, webview: !0 }, La = function (e, t) {
            Ca(e, t), function (e, t) {
                "input" !== e && "textarea" !== e && "select" !== e || null == t || null !== t.value || Ra || (Ra = !0, "select" === e && t.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
            }(e, t), Aa(e, t, !0);
        }, Va = H && !document.documentMode;
        var ti = /\r\n?/g, ni = /\u0000|\uFFFD/g;

        function ri(e, t) {
            !function (e, t) {
                for (var n = Or(t), r = B[ e ], o = 0; o < r.length; o++) uo(r[ o ], t, n);
            }(t, 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        }

        function oi(e) {
            return 9 === e.nodeType ? e : e.ownerDocument;
        }

        function ai() {
        }

        function ii(e) {
            e.onclick = ai;
        }

        function si(e, t, n, r) {
            var o, a = ba(t, n);
            switch (La(t, n), t) {
                case"iframe":
                case"object":
                case"embed":
                    Vo(Bn, e), o = n;
                    break;
                case"video":
                case"audio":
                    for (var i = 0; i < Pr.length; i++) Vo(Pr[ i ], e);
                    o = n;
                    break;
                case"source":
                    Vo(Dn, e), o = n;
                    break;
                case"img":
                case"image":
                case"link":
                    Vo(Dn, e), Vo(Bn, e), o = n;
                    break;
                case"form":
                    Vo(cr, e), Vo(gr, e), o = n;
                    break;
                case"details":
                    Vo(wr, e), o = n;
                    break;
                case"input":
                    bt(e, n), o = yt(e, n), Vo(Fn, e), ri(r, "onChange");
                    break;
                case"option":
                    Rt(0, n), o = Pt(0, n);
                    break;
                case"select":
                    Dt(e, n), o = $t(0, n), Vo(Fn, e), ri(r, "onChange");
                    break;
                case"textarea":
                    jt(e, n), o = At(e, n), Vo(Fn, e), ri(r, "onChange");
                    break;
                default:
                    o = n;
            }
            switch (ya(t, o), function (e, t, n, r, o) {
                for (var a in r) if (r.hasOwnProperty(a)) {
                    var i = r[ a ];
                    if (a === Za) i && Object.freeze(i), ha(t, i); else if (a === Qa) {
                        var s = i ? i.__html : void 0;
                        null != s && Kt(t, s);
                    } else a === Ga ? "string" == typeof i ? ("textarea" !== e || "" !== i) && Xt(t, i) : "number" == typeof i && Xt(t, "" + i) : a === Ka || a === Xa || a === Ja || (U.hasOwnProperty(a) ? null != i && ("function" != typeof i && Wa(a, i), ri(n, a)) : null != i && Te(t, a, i, o));
                }
            }(t, e, r, o, a), t) {
                case"input":
                    ft(e), Et(e, n, !1);
                    break;
                case"textarea":
                    ft(e), Lt(e);
                    break;
                case"option":
                    !function (e, t) {
                        null != t.value && e.setAttribute("value", rt(ot(t.value)));
                    }(e, n);
                    break;
                case"select":
                    !function (e, t) {
                        var n = e;
                        n.multiple = !!t.multiple;
                        var r = t.value;
                        null != r ? It(n, !!t.multiple, r, !1) : null != t.defaultValue && It(n, !!t.multiple, t.defaultValue, !0);
                    }(e, n);
                    break;
                default:
                    "function" == typeof o.onClick && ii(e);
            }
        }

        function li(e, t, n, r, o) {
            La(t, r);
            var a, i, l, u, c = null;
            switch (t) {
                case"input":
                    a = yt(e, n), i = yt(e, r), c = [];
                    break;
                case"option":
                    a = Pt(0, n), i = Pt(0, r), c = [];
                    break;
                case"select":
                    a = $t(0, n), i = $t(0, r), c = [];
                    break;
                case"textarea":
                    a = At(e, n), i = At(e, r), c = [];
                    break;
                default:
                    i = r, "function" != typeof (a = n).onClick && "function" == typeof i.onClick && ii(e);
            }
            ya(t, i);
            var f = null;
            for (l in a) if (!i.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[ l ]) if (l === Za) {
                var d = a[ l ];
                for (u in d) d.hasOwnProperty(u) && (f || (f = {}), f[ u ] = "");
            } else l === Qa || l === Ga || l === Ka || l === Xa || l === Ja || (U.hasOwnProperty(l) ? c || (c = []) : (c = c || []).push(l, null));
            for (l in i) {
                var p = i[ l ], h = null != a ? a[ l ] : void 0;
                if (i.hasOwnProperty(l) && p !== h && (null != p || null != h)) if (l === Za) if (p && Object.freeze(p), h) {
                    for (u in h) !h.hasOwnProperty(u) || p && p.hasOwnProperty(u) || (f || (f = {}), f[ u ] = "");
                    for (u in p) p.hasOwnProperty(u) && h[ u ] !== p[ u ] && (f || (f = {}), f[ u ] = p[ u ]);
                } else f || (c || (c = []), c.push(l, f)), f = p; else if (l === Qa) {
                    var m = p ? p.__html : void 0, g = h ? h.__html : void 0;
                    null != m && g !== m && (c = c || []).push(l, m);
                } else l === Ga ? h === p || "string" != typeof p && "number" != typeof p || (c = c || []).push(l, "" + p) : l === Ka || l === Xa || (U.hasOwnProperty(l) ? (null != p && ("function" != typeof p && Wa(l, p), ri(o, l)), c || h === p || (c = [])) : (c = c || []).push(l, p));
            }
            return f && (!function (e, t) {
                if (t) {
                    var n, r = ma(e), o = ma(t), a = {};
                    for (var i in r) {
                        var l = r[ i ], u = o[ i ];
                        if (u && l !== u) {
                            var c = l + "," + u;
                            if (a[ c ]) continue;
                            a[ c ] = !0, s("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", null == (n = e[ l ]) || "boolean" == typeof n || "" === n ? "Removing" : "Updating", l, u);
                        }
                    }
                }
            }(f, i.style), (c = c || []).push(Za, f)), c;
        }

        function ui(e, t, n, r, o) {
            "input" === n && "radio" === o.type && null != o.name && wt(e, o);
            ba(n, r);
            switch (function (e, t, n, r) {
                for (var o = 0; o < t.length; o += 2) {
                    var a = t[ o ], i = t[ o + 1 ];
                    a === Za ? ha(e, i) : a === Qa ? Kt(e, i) : a === Ga ? Xt(e, i) : Te(e, a, i, r);
                }
            }(e, t, 0, ba(n, o)), n) {
                case"input":
                    kt(e, o);
                    break;
                case"textarea":
                    Ft(e, o);
                    break;
                case"select":
                    !function (e, t) {
                        var n = e, r = n._wrapperState.wasMultiple;
                        n._wrapperState.wasMultiple = !!t.multiple;
                        var o = t.value;
                        null != o ? It(n, !!t.multiple, o, !1) : r !== !!t.multiple && (null != t.defaultValue ? It(n, !!t.multiple, t.defaultValue, !0) : It(n, !!t.multiple, t.multiple ? [] : "", !1));
                    }(e, o);
            }
        }

        function ci(e, t) {
            za(e.nodeValue, t);
        }

        function fi(e, t) {
            Ya || (Ya = !0, s("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase()));
        }

        function di(e, t) {
            Ya || (Ya = !0, s("Did not expect server HTML to contain the text node \"%s\" in <%s>.", t.nodeValue, e.nodeName.toLowerCase()));
        }

        function pi(e, t, n) {
            Ya || (Ya = !0, s("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase()));
        }

        function hi(e, t) {
            "" !== t && (Ya || (Ya = !0, s("Expected server HTML to contain a matching text node for \"%s\" in <%s>.", t, e.nodeName.toLowerCase())));
        }

        function mi(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }

        function gi(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e;
        }

        function vi(e) {
            for (; e;) {
                if (e.nextSibling) return e.nextSibling;
                e = e.parentNode;
            }
        }

        function yi(e, t) {
            for (var n = gi(e), r = 0, o = 0; n;) {
                if (3 === n.nodeType) {
                    if (o = r + n.textContent.length, r <= t && o >= t) return { node: n, offset: t - r };
                    r = o;
                }
                n = gi(vi(n));
            }
        }

        function bi(e) {
            var t = e.ownerDocument, n = t && t.defaultView || window, r = n.getSelection && n.getSelection();
            if (!r || 0 === r.rangeCount) return null;
            var o = r.anchorNode, a = r.anchorOffset, i = r.focusNode, s = r.focusOffset;
            try {
                o.nodeType, i.nodeType;
            } catch (e) {
                return null;
            }
            return function (e, t, n, r, o) {
                var a = 0, i = -1, s = -1, l = 0, u = 0, c = e, f = null;
                e:for (; ;) {
                    for (var d = null; c !== t || 0 !== n && 3 !== c.nodeType || (i = a + n), c !== r || 0 !== o && 3 !== c.nodeType || (s = a + o), 3 === c.nodeType && (a += c.nodeValue.length), null !== (d = c.firstChild);) f = c, c = d;
                    for (; ;) {
                        if (c === e) break e;
                        if (f === t && ++l === n && (i = a), f === r && ++u === o && (s = a), null !== (d = c.nextSibling)) break;
                        f = (c = f).parentNode;
                    }
                    c = d;
                }
                if (-1 === i || -1 === s) return null;
                return { start: i, end: s };
            }(e, o, a, i, s);
        }

        function wi(e) {
            return e && 3 === e.nodeType;
        }

        function ki(e, t) {
            return !(!e || !t) && (e === t || !wi(e) && (wi(t) ? ki(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
        }

        function Ei(e) {
            return e && e.ownerDocument && ki(e.ownerDocument.documentElement, e);
        }

        function xi(e) {
            try {
                return "string" == typeof e.contentWindow.location.href;
            } catch (e) {
                return !1;
            }
        }

        function Si() {
            for (var e = window, t = mi(); t instanceof e.HTMLIFrameElement;) {
                if (!xi(t)) return t;
                t = mi((e = t.contentWindow).document);
            }
            return t;
        }

        function _i(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
        }

        function Ti(e) {
            var t = Si(), n = e.focusedElem, r = e.selectionRange;
            if (t !== n && Ei(n)) {
                null !== r && _i(n) && function (e, t) {
                    var n = t.start, r = t.end;
                    void 0 === r && (r = n);
                    "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : function (e, t) {
                        var n = e.ownerDocument || document, r = n && n.defaultView || window;
                        if (r.getSelection) {
                            var o = r.getSelection(), a = e.textContent.length, i = Math.min(t.start, a),
                                s = void 0 === t.end ? i : Math.min(t.end, a);
                            if (!o.extend && i > s) {
                                var l = s;
                                s = i, i = l;
                            }
                            var u = yi(e, i), c = yi(e, s);
                            if (u && c) {
                                if (1 === o.rangeCount && o.anchorNode === u.node && o.anchorOffset === u.offset && o.focusNode === c.node && o.focusOffset === c.offset) return;
                                var f = n.createRange();
                                f.setStart(u.node, u.offset), o.removeAllRanges(), i > s ? (o.addRange(f), o.extend(c.node, c.offset)) : (f.setEnd(c.node, c.offset), o.addRange(f));
                            }
                        }
                    }(e, t);
                }(n, r);
                for (var o = [], a = n; a = a.parentNode;) 1 === a.nodeType && o.push({
                    element: a,
                    left: a.scrollLeft,
                    top: a.scrollTop
                });
                "function" == typeof n.focus && n.focus();
                for (var i = 0; i < o.length; i++) {
                    var s = o[ i ];
                    s.element.scrollLeft = s.left, s.element.scrollTop = s.top;
                }
            }
        }

        function Ci(e) {
            return ("selectionStart" in e ? { start: e.selectionStart, end: e.selectionEnd } : bi(e)) || {
                start: 0,
                end: 0
            };
        }

        Ha = function (e) {
            return ("string" == typeof e ? e : "" + e).replace(ti, "\n").replace(ni, "");
        }, za = function (e, t) {
            if (!Ya) {
                var n = Ha(t), r = Ha(e);
                r !== n && (Ya = !0, s("Text content did not match. Server: \"%s\" Client: \"%s\"", r, n));
            }
        }, Ua = function (e, t, n) {
            if (!Ya) {
                var r = Ha(n), o = Ha(t);
                o !== r && (Ya = !0, s("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(r)));
            }
        }, Ba = function (e) {
            if (!Ya) {
                Ya = !0;
                var t = [];
                e.forEach((function (e) {
                    t.push(e);
                })), s("Extra attributes from the server: %s", t);
            }
        }, Wa = function (e, t) {
            !1 === t ? s("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : s("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
        }, qa = function (e, t) {
            var n = e.namespaceURI === ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
            return n.innerHTML = t, n.innerHTML;
        };
        var Ri, Pi,
            Ni = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"],
            Oi = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"],
            Ii = Oi.concat(["button"]), $i = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Di = {
                current: null,
                formTag: null,
                aTagInScope: null,
                buttonTagInScope: null,
                nobrTagInScope: null,
                pTagInButtonScope: null,
                listItemTagAutoclosing: null,
                dlItemTagAutoclosing: null
            };
        Pi = function (e, n) {
            var r = t({}, e || Di), o = { tag: n };
            return -1 !== Oi.indexOf(n) && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), -1 !== Ii.indexOf(n) && (r.pTagInButtonScope = null), -1 !== Ni.indexOf(n) && "address" !== n && "div" !== n && "p" !== n && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = o, "form" === n && (r.formTag = o), "a" === n && (r.aTagInScope = o), "button" === n && (r.buttonTagInScope = o), "nobr" === n && (r.nobrTagInScope = o), "p" === n && (r.pTagInButtonScope = o), "li" === n && (r.listItemTagAutoclosing = o), "dd" !== n && "dt" !== n || (r.dlItemTagAutoclosing = o), r;
        };
        var Mi = {};
        Ri = function (e, t, n) {
            var r = (n = n || Di).current, o = r && r.tag;
            null != t && (null != e && s("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
            var a = function (e, t) {
                switch (t) {
                    case"select":
                        return "option" === e || "optgroup" === e || "#text" === e;
                    case"optgroup":
                        return "option" === e || "#text" === e;
                    case"option":
                        return "#text" === e;
                    case"tr":
                        return "th" === e || "td" === e || "style" === e || "script" === e || "template" === e;
                    case"tbody":
                    case"thead":
                    case"tfoot":
                        return "tr" === e || "style" === e || "script" === e || "template" === e;
                    case"colgroup":
                        return "col" === e || "template" === e;
                    case"table":
                        return "caption" === e || "colgroup" === e || "tbody" === e || "tfoot" === e || "thead" === e || "style" === e || "script" === e || "template" === e;
                    case"head":
                        return "base" === e || "basefont" === e || "bgsound" === e || "link" === e || "meta" === e || "title" === e || "noscript" === e || "noframes" === e || "style" === e || "script" === e || "template" === e;
                    case"html":
                        return "head" === e || "body" === e || "frameset" === e;
                    case"frameset":
                        return "frame" === e;
                    case"#document":
                        return "html" === e;
                }
                switch (e) {
                    case"h1":
                    case"h2":
                    case"h3":
                    case"h4":
                    case"h5":
                    case"h6":
                        return "h1" !== t && "h2" !== t && "h3" !== t && "h4" !== t && "h5" !== t && "h6" !== t;
                    case"rp":
                    case"rt":
                        return -1 === $i.indexOf(t);
                    case"body":
                    case"caption":
                    case"col":
                    case"colgroup":
                    case"frameset":
                    case"frame":
                    case"head":
                    case"html":
                    case"tbody":
                    case"td":
                    case"tfoot":
                    case"th":
                    case"thead":
                    case"tr":
                        return null == t;
                }
                return !0;
            }(e, o) ? null : r, i = a ? null : function (e, t) {
                switch (e) {
                    case"address":
                    case"article":
                    case"aside":
                    case"blockquote":
                    case"center":
                    case"details":
                    case"dialog":
                    case"dir":
                    case"div":
                    case"dl":
                    case"fieldset":
                    case"figcaption":
                    case"figure":
                    case"footer":
                    case"header":
                    case"hgroup":
                    case"main":
                    case"menu":
                    case"nav":
                    case"ol":
                    case"p":
                    case"section":
                    case"summary":
                    case"ul":
                    case"pre":
                    case"listing":
                    case"table":
                    case"hr":
                    case"xmp":
                    case"h1":
                    case"h2":
                    case"h3":
                    case"h4":
                    case"h5":
                    case"h6":
                        return t.pTagInButtonScope;
                    case"form":
                        return t.formTag || t.pTagInButtonScope;
                    case"li":
                        return t.listItemTagAutoclosing;
                    case"dd":
                    case"dt":
                        return t.dlItemTagAutoclosing;
                    case"button":
                        return t.buttonTagInScope;
                    case"a":
                        return t.aTagInScope;
                    case"nobr":
                        return t.nobrTagInScope;
                }
                return null;
            }(e, n), l = a || i;
            if (l) {
                var u = l.tag, c = !!a + "|" + e + "|" + u + "|" + Ze();
                if (!Mi[ c ]) {
                    Mi[ c ] = !0;
                    var f = e, d = "";
                    if ("#text" === e ? /\S/.test(t) ? f = "Text nodes" : (f = "Whitespace text nodes", d = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : f = "<" + e + ">", a) {
                        var p = "";
                        "table" === u && "tr" === e && (p += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), s("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", f, u, d, p);
                    } else s("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", f, u);
                }
            }
        };
        var Ai = "$?", ji = "$!", Fi = null, Li = null;

        function zi(e, t) {
            switch (e) {
                case"button":
                case"input":
                case"select":
                case"textarea":
                    return !!t.autoFocus;
            }
            return !1;
        }

        function Ui(e) {
            var t;
            Fi = Bo, t = Si(), Li = {
                activeElementDetached: null,
                focusedElem: t,
                selectionRange: _i(t) ? Ci(t) : null
            }, Wo(!1);
        }

        function Bi(e, t, n, r, o) {
            var a = r;
            if (Ri(e, null, a.ancestorInfo), "string" == typeof t.children || "number" == typeof t.children) {
                var i = "" + t.children, l = Pi(a.ancestorInfo, e);
                Ri(null, i, l);
            }
            var u = function (e, t, n, r) {
                var o, a, i = oi(n), l = r;
                if (l === ei && (l = Ht(e)), l === ei) {
                    if ((o = ba(e, t)) || e === e.toLowerCase() || s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), "script" === e) {
                        var u = i.createElement("div");
                        u.innerHTML = "<script><\/script>";
                        var c = u.firstChild;
                        a = u.removeChild(c);
                    } else if ("string" == typeof t.is) a = i.createElement(e, { is: t.is }); else if (a = i.createElement(e), "select" === e) {
                        var f = a;
                        t.multiple ? f.multiple = !0 : t.size && (f.size = t.size);
                    }
                } else a = i.createElementNS(l, e);
                return l === ei && (o || "[object HTMLUnknownElement]" !== Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(ja, e) || (ja[ e ] = !0, s("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e))), a;
            }(e, t, n, a.namespace);
            return us(o, u), gs(u, t), u;
        }

        function Wi(e, t) {
            return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
        }

        function Vi(e, t) {
            return !!t.hidden;
        }

        function Hi(e, t, n, r) {
            Ri(null, e, n.ancestorInfo);
            var o = function (e, t) {
                return oi(t).createTextNode(e);
            }(e, t);
            return us(r, o), o;
        }

        var qi = "function" == typeof setTimeout ? setTimeout : void 0,
            Yi = "function" == typeof clearTimeout ? clearTimeout : void 0;

        function Qi(e) {
            Xt(e, "");
        }

        function Ki(e, t) {
            e.removeChild(t);
        }

        function Xi(e) {
            var t = (e = e).style;
            "function" == typeof t.setProperty ? t.setProperty("display", "none", "important") : t.display = "none";
        }

        function Ji(e, t) {
            e = e;
            var n = t.style, r = null != n && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = ea("display", r);
        }

        function Gi(e, t) {
            e.nodeValue = t;
        }

        function Zi(e) {
            return e.data === ji;
        }

        function es(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break;
            }
            return e;
        }

        function ts(e) {
            return es(e.nextSibling);
        }

        function ns(e) {
            return es(e.firstChild);
        }

        function rs(e, t, n, r, o, a) {
            return us(a, e), gs(e, n), function (e, t, n, r, o) {
                var a, i;
                switch (Fa = !0 === n.suppressHydrationWarning, a = ba(t, n), La(t, n), t) {
                    case"iframe":
                    case"object":
                    case"embed":
                        Vo(Bn, e);
                        break;
                    case"video":
                    case"audio":
                        for (var s = 0; s < Pr.length; s++) Vo(Pr[ s ], e);
                        break;
                    case"source":
                        Vo(Dn, e);
                        break;
                    case"img":
                    case"image":
                    case"link":
                        Vo(Dn, e), Vo(Bn, e);
                        break;
                    case"form":
                        Vo(cr, e), Vo(gr, e);
                        break;
                    case"details":
                        Vo(wr, e);
                        break;
                    case"input":
                        bt(e, n), Vo(Fn, e), ri(o, "onChange");
                        break;
                    case"option":
                        Rt(0, n);
                        break;
                    case"select":
                        Dt(e, n), Vo(Fn, e), ri(o, "onChange");
                        break;
                    case"textarea":
                        jt(e, n), Vo(Fn, e), ri(o, "onChange");
                }
                ya(t, n), i = new Set;
                for (var l = e.attributes, u = 0; u < l.length; u++) switch (l[ u ].name.toLowerCase()) {
                    case"data-reactroot":
                    case"value":
                    case"checked":
                    case"selected":
                        break;
                    default:
                        i.add(l[ u ].name);
                }
                var c, f = null;
                for (var d in n) if (n.hasOwnProperty(d)) {
                    var p = n[ d ];
                    if (d === Ga) "string" == typeof p ? e.textContent !== p && (Fa || za(e.textContent, p), f = [Ga, p]) : "number" == typeof p && e.textContent !== "" + p && (Fa || za(e.textContent, p), f = [Ga, "" + p]); else if (U.hasOwnProperty(d)) null != p && ("function" != typeof p && Wa(d, p), ri(o, d)); else if ("boolean" == typeof a) {
                        var h = void 0, m = ge(d);
                        if (Fa) ; else if (d === Ka || d === Xa || "value" === d || "checked" === d || "selected" === d) ; else if (d === Qa) {
                            var g = e.innerHTML, v = p ? p.__html : void 0, y = qa(e, null != v ? v : "");
                            y !== g && Ua(d, g, y);
                        } else if (d === Za) {
                            if (i.delete(d), Va) {
                                var b = pa(p);
                                b !== (h = e.getAttribute("style")) && Ua(d, h, b);
                            }
                        } else if (a) i.delete(d.toLowerCase()), p !== (h = _e(e, d, p)) && Ua(d, h, p); else if (!pe(d, m, a) && !me(d, p, m, a)) {
                            var w = !1;
                            if (null !== m) i.delete(m.attributeName), h = Se(e, d, p, m); else {
                                var k = r;
                                if (k === ei && (k = Ht(t)), k === ei) i.delete(d.toLowerCase()); else {
                                    var E = (c = void 0, c = d.toLowerCase(), wa.hasOwnProperty(c) && wa[ c ] || null);
                                    null !== E && E !== d && (w = !0, i.delete(E)), i.delete(d);
                                }
                                h = _e(e, d, p);
                            }
                            p === h || w || Ua(d, h, p);
                        }
                    }
                }
                switch (i.size > 0 && !Fa && Ba(i), t) {
                    case"input":
                        ft(e), Et(e, n, !0);
                        break;
                    case"textarea":
                        ft(e), Lt(e);
                        break;
                    case"select":
                    case"option":
                        break;
                    default:
                        "function" == typeof n.onClick && ii(e);
                }
                return f;
            }(e, t, n, o.namespace, r);
        }

        function os(e) {
            for (var t = e.previousSibling, n = 0; t;) {
                if (8 === t.nodeType) {
                    var r = t.data;
                    if ("$" === r || r === ji || r === Ai) {
                        if (0 === n) return t;
                        n--;
                    } else "/$" === r && n++;
                }
                t = t.previousSibling;
            }
            return null;
        }

        var as = Math.random().toString(36).slice(2), is = "__reactInternalInstance$" + as,
            ss = "__reactEventHandlers$" + as, ls = "__reactContainere$" + as;

        function us(e, t) {
            t[ is ] = e;
        }

        function cs(e) {
            e[ ls ] = null;
        }

        function fs(e) {
            return !!e[ ls ];
        }

        function ds(e) {
            var t = e[ is ];
            if (t) return t;
            for (var n = e.parentNode; n;) {
                if (t = n[ ls ] || n[ is ]) {
                    var r = t.alternate;
                    if (null !== t.child || null !== r && null !== r.child) for (var o = os(e); null !== o;) {
                        var a = o[ is ];
                        if (a) return a;
                        o = os(o);
                    }
                    return t;
                }
                n = (e = n).parentNode;
            }
            return null;
        }

        function ps(e) {
            var t = e[ is ] || e[ ls ];
            return t && (5 === t.tag || 6 === t.tag || t.tag === R || 3 === t.tag) ? t : null;
        }

        function hs(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error("getNodeFromInstance: Invalid argument.");
        }

        function ms(e) {
            return e[ ss ] || null;
        }

        function gs(e, t) {
            e[ ss ] = t;
        }

        function vs(e) {
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }

        function ys(e, t, n, r, o) {
            for (var a = e && t ? function (e, t) {
                for (var n = 0, r = e; r; r = vs(r)) n++;
                for (var o = 0, a = t; a; a = vs(a)) o++;
                for (; n - o > 0;) e = vs(e), n--;
                for (; o - n > 0;) t = vs(t), o--;
                for (var i = n; i--;) {
                    if (e === t || e === t.alternate) return e;
                    e = vs(e), t = vs(t);
                }
                return null;
            }(e, t) : null, i = []; e && e !== a;) {
                var s = e.alternate;
                if (null !== s && s === a) break;
                i.push(e), e = vs(e);
            }
            for (var l = []; t && t !== a;) {
                var u = t.alternate;
                if (null !== u && u === a) break;
                l.push(t), t = vs(t);
            }
            for (var c = 0; c < i.length; c++) n(i[ c ], "bubbled", r);
            for (var f = l.length; f-- > 0;) n(l[ f ], "captured", o);
        }

        function bs(e, t) {
            var n, r = e.stateNode;
            if (!r) return null;
            var o = k(r);
            if (!o) return null;
            if (n = o[ t ], function (e, t, n) {
                switch (e) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        return !(!n.disabled || (r = t, "button" !== r && "input" !== r && "select" !== r && "textarea" !== r));
                    default:
                        return !1;
                }
                var r;
            }(t, e.type, o)) return null;
            if (n && "function" != typeof n) throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
            return n;
        }

        function ws(e, t, n) {
            e || s("Dispatching inst must not be null");
            var r = function (e, t, n) {
                return bs(e, t.dispatchConfig.phasedRegistrationNames[ n ]);
            }(e, n, t);
            r && (n._dispatchListeners = Yr(n._dispatchListeners, r), n._dispatchInstances = Yr(n._dispatchInstances, e));
        }

        function ks(e) {
            e && e.dispatchConfig.phasedRegistrationNames && function (e, t, n) {
                for (var r, o = []; e;) o.push(e), e = vs(e);
                for (r = o.length; r-- > 0;) t(o[ r ], "captured", n);
                for (r = 0; r < o.length; r++) t(o[ r ], "bubbled", n);
            }(e._targetInst, ws, e);
        }

        function Es(e, t, n) {
            if (e && n && n.dispatchConfig.registrationName) {
                var r = bs(e, n.dispatchConfig.registrationName);
                r && (n._dispatchListeners = Yr(n._dispatchListeners, r), n._dispatchInstances = Yr(n._dispatchInstances, e));
            }
        }

        function xs(e) {
            e && e.dispatchConfig.registrationName && Es(e._targetInst, 0, e);
        }

        function Ss(e) {
            Qr(e, ks);
        }

        var _s = null, Ts = null, Cs = null;

        function Rs() {
            if (Cs) return Cs;
            var e, t, n = Ts, r = n.length, o = Ps(), a = o.length;
            for (e = 0; e < r && n[ e ] === o[ e ]; e++) ;
            var i = r - e;
            for (t = 1; t <= i && n[ r - t ] === o[ a - t ]; t++) ;
            var s = t > 1 ? 1 - t : void 0;
            return Cs = o.slice(e, s);
        }

        function Ps() {
            return "value" in _s ? _s.value : _s.textContent;
        }

        var Ns = {
            type: null, target: null, currentTarget: function () {
                return null;
            }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
                return e.timeStamp || Date.now();
            }, defaultPrevented: null, isTrusted: null
        };

        function Os() {
            return !0;
        }

        function Is() {
            return !1;
        }

        function $s(e, t, n, r) {
            delete this.nativeEvent, delete this.preventDefault, delete this.stopPropagation, delete this.isDefaultPrevented, delete this.isPropagationStopped, this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
            var o = this.constructor.Interface;
            for (var a in o) if (o.hasOwnProperty(a)) {
                delete this[ a ];
                var i = o[ a ];
                i ? this[ a ] = i(n) : "target" === a ? this.target = r : this[ a ] = n[ a ];
            }
            var s = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
            return this.isDefaultPrevented = s ? Os : Is, this.isPropagationStopped = Is, this;
        }

        function Ds(e, t) {
            var n = "function" == typeof t;
            return {
                configurable: !0, set: function (e) {
                    return r(n ? "setting the method" : "setting the property", "This is effectively a no-op"), e;
                }, get: function () {
                    return r(n ? "accessing the method" : "accessing the property", n ? "This is a no-op function" : "This is set to null"), t;
                }
            };

            function r(t, n) {
                s("This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", t, e, n);
            }
        }

        function Ms(e, t, n, r) {
            var o = this;
            if (o.eventPool.length) {
                var a = o.eventPool.pop();
                return o.call(a, e, t, n, r), a;
            }
            return new o(e, t, n, r);
        }

        function As(e) {
            var t = this;
            if (!(e instanceof t)) throw Error("Trying to release an event instance into a pool of a different type.");
            e.destructor(), t.eventPool.length < 10 && t.eventPool.push(e);
        }

        function js(e) {
            e.eventPool = [], e.getPooled = Ms, e.release = As;
        }

        t($s.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Os);
            }, stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Os);
            }, persist: function () {
                this.isPersistent = Os;
            }, isPersistent: Is, destructor: function () {
                var e = this.constructor.Interface;
                for (var t in e) Object.defineProperty(this, t, Ds(t, e[ t ]));
                this.dispatchConfig = null, this._targetInst = null, this.nativeEvent = null, this.isDefaultPrevented = Is, this.isPropagationStopped = Is, this._dispatchListeners = null, this._dispatchInstances = null, Object.defineProperty(this, "nativeEvent", Ds("nativeEvent", null)), Object.defineProperty(this, "isDefaultPrevented", Ds("isDefaultPrevented", Is)), Object.defineProperty(this, "isPropagationStopped", Ds("isPropagationStopped", Is)), Object.defineProperty(this, "preventDefault", Ds("preventDefault", (function () {
                }))), Object.defineProperty(this, "stopPropagation", Ds("stopPropagation", (function () {
                })));
            }
        }), $s.Interface = Ns, $s.extend = function (e) {
            var n = this, r = function () {
            };
            r.prototype = n.prototype;
            var o = new r;

            function a() {
                return n.apply(this, arguments);
            }

            return t(o, a.prototype), a.prototype = o, a.prototype.constructor = a, a.Interface = t({}, n.Interface, e), a.extend = n.extend, js(a), a;
        }, js($s);
        var Fs = $s.extend({ data: null }), Ls = $s.extend({ data: null }), zs = [9, 13, 27, 32],
            Us = H && "CompositionEvent" in window, Bs = null;
        H && "documentMode" in document && (Bs = document.documentMode);
        var Ws = H && "TextEvent" in window && !Bs, Vs = H && (!Us || Bs && Bs > 8 && Bs <= 11),
            Hs = String.fromCharCode(32), qs = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    }, dependencies: [hn, zn, yr, Gn]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    }, dependencies: [sn, hn, Ln, zn, Un, Yn]
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    }, dependencies: [sn, mn, Ln, zn, Un, Yn]
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    }, dependencies: [sn, gn, Ln, zn, Un, Yn]
                }
            }, Ys = !1;

        function Qs(e, t) {
            switch (e) {
                case Un:
                    return -1 !== zs.indexOf(t.keyCode);
                case Ln:
                    return 229 !== t.keyCode;
                case zn:
                case Yn:
                case sn:
                    return !0;
                default:
                    return !1;
            }
        }

        function Ks(e) {
            var t = e.detail;
            return "object" == typeof t && "data" in t ? t.data : null;
        }

        function Xs(e) {
            return "ko" === e.locale;
        }

        var Js = !1;

        function Gs(e, t, n, r) {
            var o, a;
            if (Us ? o = function (e) {
                switch (e) {
                    case mn:
                        return qs.compositionStart;
                    case hn:
                        return qs.compositionEnd;
                    case gn:
                        return qs.compositionUpdate;
                }
            }(e) : Js ? Qs(e, n) && (o = qs.compositionEnd) : function (e, t) {
                return e === Ln && 229 === t.keyCode;
            }(e, n) && (o = qs.compositionStart), !o) return null;
            Vs && !Xs(n) && (Js || o !== qs.compositionStart ? o === qs.compositionEnd && Js && (a = Rs()) : Js = function (e) {
                return _s = e, Ts = Ps(), !0;
            }(r));
            var i = Fs.getPooled(o, t, n, r);
            if (a) i.data = a; else {
                var s = Ks(n);
                null !== s && (i.data = s);
            }
            return Ss(i), i;
        }

        function Zs(e, t) {
            if (Js) {
                if (e === hn || !Us && Qs(e, t)) {
                    var n = Rs();
                    return _s = null, Ts = null, Cs = null, Js = !1, n;
                }
                return null;
            }
            switch (e) {
                default:
                    return null;
                case zn:
                    if (!function (e) {
                        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
                    }(t)) {
                        if (t.char && t.char.length > 1) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case hn:
                    return Vs && !Xs(t) ? null : t.data;
            }
        }

        function el(e, t, n, r) {
            var o;
            if (!(o = Ws ? function (e, t) {
                switch (e) {
                    case hn:
                        return Ks(t);
                    case zn:
                        return 32 !== t.which ? null : (Ys = !0, Hs);
                    case yr:
                        var n = t.data;
                        return n === Hs && Ys ? null : n;
                    default:
                        return null;
                }
            }(e, n) : Zs(e, n))) return null;
            var a = Ls.getPooled(qs.beforeInput, t, n, r);
            return a.data = o, Ss(a), a;
        }

        var tl = {
            eventTypes: qs, extractEvents: function (e, t, n, r, o) {
                var a = Gs(e, t, n, r), i = el(e, t, n, r);
                return null === a ? i : null === i ? a : [a, i];
            }
        }, nl = {
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

        function rl(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!nl[ e.type ] : "textarea" === t;
        }

        var ol = {
            change: {
                phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" },
                dependencies: [sn, fn, dn, Mn, jn, Ln, Un, hr]
            }
        };

        function al(e, t, n) {
            var r = $s.getPooled(ol.change, e, t, n);
            return r.type = "change", X(n), Ss(r), r;
        }

        var il = null, sl = null;

        function ll(e) {
            !function (e, t) {
                if (ne) return e(t);
                ne = !0;
                try {
                    G(e, t);
                } finally {
                    ne = !1, oe();
                }
            }(ul, al(sl, e, Zr(e)));
        }

        function ul(e) {
            Gr(e);
        }

        function cl(e) {
            if (dt(hs(e))) return e;
        }

        function fl(e, t) {
            if (e === fn) return t;
        }

        var dl = !1;

        function pl() {
            il && (il.detachEvent("onpropertychange", hl), il = null, sl = null);
        }

        function hl(e) {
            "value" === e.propertyName && cl(sl) && ll(e);
        }

        function ml(e, t, n) {
            e === Mn ? (pl(), function (e, t) {
                sl = t, (il = e).attachEvent("onpropertychange", hl);
            }(t, n)) : e === sn && pl();
        }

        function gl(e, t) {
            if (e === hr || e === Un || e === Ln) return cl(sl);
        }

        function vl(e, t) {
            if (e === dn) return cl(t);
        }

        function yl(e, t) {
            if (e === jn || e === fn) return cl(t);
        }

        H && (dl = eo("input") && (!document.documentMode || document.documentMode > 9));
        var bl = {
                eventTypes: ol, _isInputEventSupported: dl, extractEvents: function (e, t, n, r, o) {
                    var a, i, s, l, u, c, f = t ? hs(t) : window;
                    if ("select" === (l = (s = f).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type ? a = fl : rl(f) ? dl ? a = yl : (a = gl, i = ml) : function (e) {
                        var t = e.nodeName;
                        return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type);
                    }(f) && (a = vl), a) {
                        var d = a(e, t);
                        if (d) return al(d, n, r);
                    }
                    i && i(e, f, t), e === sn && (c = (u = f)._wrapperState) && c.controlled && "number" === u.type && St(u, "number", u.value);
                }
            }, wl = $s.extend({ view: null, detail: null }),
            kl = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

        function El(e) {
            var t = this.nativeEvent;
            if (t.getModifierState) return t.getModifierState(e);
            var n = kl[ e ];
            return !!n && !!t[ n ];
        }

        function xl(e) {
            return El;
        }

        var Sl = 0, _l = 0, Tl = !1, Cl = !1, Rl = wl.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: xl,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
            },
            movementX: function (e) {
                if ("movementX" in e) return e.movementX;
                var t = Sl;
                return Sl = e.screenX, Tl ? "mousemove" === e.type ? e.screenX - t : 0 : (Tl = !0, 0);
            },
            movementY: function (e) {
                if ("movementY" in e) return e.movementY;
                var t = _l;
                return _l = e.screenY, Cl ? "mousemove" === e.type ? e.screenY - t : 0 : (Cl = !0, 0);
            }
        }), Pl = Rl.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }), Nl = {
            mouseEnter: { registrationName: "onMouseEnter", dependencies: [Kn, Xn] },
            mouseLeave: { registrationName: "onMouseLeave", dependencies: [Kn, Xn] },
            pointerEnter: { registrationName: "onPointerEnter", dependencies: [ar, ir] },
            pointerLeave: { registrationName: "onPointerLeave", dependencies: [ar, ir] }
        }, Ol = {
            eventTypes: Nl, extractEvents: function (e, t, n, r, o) {
                var a, i, s, l, u, c, f, d = e === Xn || e === ir, p = e === Kn || e === ar;
                if (d && 0 == (32 & o) && (n.relatedTarget || n.fromElement)) return null;
                if (!p && !d) return null;
                if (r.window === r) a = r; else {
                    var h = r.ownerDocument;
                    a = h ? h.defaultView || h.parentWindow : window;
                }
                if (p) {
                    i = t;
                    var m = n.relatedTarget || n.toElement;
                    if (null !== (s = m ? ds(m) : null)) (s !== Ur(s) || 5 !== s.tag && 6 !== s.tag) && (s = null);
                } else i = null, s = t;
                if (i === s) return null;
                e === Kn || e === Xn ? (l = Rl, u = Nl.mouseLeave, c = Nl.mouseEnter, f = "mouse") : e !== ar && e !== ir || (l = Pl, u = Nl.pointerLeave, c = Nl.pointerEnter, f = "pointer");
                var g = null == i ? a : hs(i), v = null == s ? a : hs(s), y = l.getPooled(u, i, n, r);
                y.type = f + "leave", y.target = g, y.relatedTarget = v;
                var b = l.getPooled(c, s, n, r);
                return b.type = f + "enter", b.target = v, b.relatedTarget = g, function (e, t, n, r) {
                    ys(n, r, Es, e, t);
                }(y, b, i, s), 0 == (64 & o) ? [y] : [y, b];
            }
        };
        var Il = "function" == typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
        }, $l = Object.prototype.hasOwnProperty;

        function Dl(e, t) {
            if (Il(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var n = Object.keys(e), r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var o = 0; o < n.length; o++) if (!$l.call(t, n[ o ]) || !Il(e[ n[ o ] ], t[ n[ o ] ])) return !1;
            return !0;
        }

        var Ml = H && "documentMode" in document && document.documentMode <= 11, Al = {
            select: {
                phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" },
                dependencies: [sn, vn, xn, Mn, Ln, Un, Yn, Jn, hr]
            }
        }, jl = null, Fl = null, Ll = null, zl = !1;

        function Ul(e) {
            return e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
        }

        function Bl(e, t) {
            var n = Ul(t);
            if (zl || null == jl || jl !== mi(n)) return null;
            var r = function (e) {
                if ("selectionStart" in e && _i(e)) return { start: e.selectionStart, end: e.selectionEnd };
                var t = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection();
                return {
                    anchorNode: t.anchorNode,
                    anchorOffset: t.anchorOffset,
                    focusNode: t.focusNode,
                    focusOffset: t.focusOffset
                };
            }(jl);
            if (!Ll || !Dl(Ll, r)) {
                Ll = r;
                var o = $s.getPooled(Al.select, Fl, e, t);
                return o.type = "select", o.target = jl, Ss(o), o;
            }
            return null;
        }

        var Wl = {
            eventTypes: Al, extractEvents: function (e, t, n, r, o, a) {
                var i = a || Ul(r);
                if (!i || !function (e, t) {
                    for (var n = Or(t), r = B[ e ], o = 0; o < r.length; o++) {
                        var a = r[ o ];
                        if (!n.has(a)) return !1;
                    }
                    return !0;
                }("onSelect", i)) return null;
                var s = t ? hs(t) : window;
                switch (e) {
                    case Mn:
                        (rl(s) || "true" === s.contentEditable) && (jl = s, Fl = t, Ll = null);
                        break;
                    case sn:
                        jl = null, Fl = null, Ll = null;
                        break;
                    case Yn:
                        zl = !0;
                        break;
                    case vn:
                    case Jn:
                    case xn:
                        return zl = !1, Bl(n, r);
                    case hr:
                        if (Ml) break;
                    case Ln:
                    case Un:
                        return Bl(n, r);
                }
                return null;
            }
        }, Vl = $s.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), Hl = $s.extend({
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), ql = wl.extend({ relatedTarget: null });

        function Yl(e) {
            var t, n = e.keyCode;
            return "charCode" in e ? 0 === (t = e.charCode) && 13 === n && (t = 13) : t = n, 10 === t && (t = 13), t >= 32 || 13 === t ? t : 0;
        }

        var Ql = {
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
        }, Kl = {
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
        };
        var Xl = wl.extend({
                key: function (e) {
                    if (e.key) {
                        var t = Ql[ e.key ] || e.key;
                        if ("Unidentified" !== t) return t;
                    }
                    if ("keypress" === e.type) {
                        var n = Yl(e);
                        return 13 === n ? "Enter" : String.fromCharCode(n);
                    }
                    return "keydown" === e.type || "keyup" === e.type ? Kl[ e.keyCode ] || "Unidentified" : "";
                },
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: xl,
                charCode: function (e) {
                    return "keypress" === e.type ? Yl(e) : 0;
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
                which: function (e) {
                    return "keypress" === e.type ? Yl(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                }
            }), Jl = Rl.extend({ dataTransfer: null }), Gl = wl.extend({
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: xl
            }), Zl = $s.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), eu = Rl.extend({
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                }, deltaZ: null, deltaMode: null
            }),
            tu = [nn, cn, ln, un, pn, Nn, On, In, $n, Dn, jn, Fn, Bn, Vn, Hn, Wn, Zn, er, tr, lr, ur, cr, dr, pr, mr, gr, vr, br, wr, Tr, Cr],
            nu = {
                eventTypes: $o, extractEvents: function (e, t, n, r, o) {
                    var a, i = Do.get(e);
                    if (!i) return null;
                    switch (e) {
                        case zn:
                            if (0 === Yl(n)) return null;
                        case Ln:
                        case Un:
                            a = Xl;
                            break;
                        case sn:
                        case Mn:
                            a = ql;
                            break;
                        case dn:
                            if (2 === n.button) return null;
                        case kn:
                        case wn:
                        case Yn:
                        case Qn:
                        case Jn:
                        case Kn:
                        case Xn:
                        case vn:
                            a = Rl;
                            break;
                        case En:
                        case xn:
                        case Sn:
                        case _n:
                        case Tn:
                        case Cn:
                        case Rn:
                        case Pn:
                            a = Jl;
                            break;
                        case kr:
                        case Er:
                        case xr:
                        case Sr:
                            a = Gl;
                            break;
                        case rn:
                        case on:
                        case an:
                            a = Vl;
                            break;
                        case _r:
                            a = Zl;
                            break;
                        case fr:
                            a = wl;
                            break;
                        case Rr:
                            a = eu;
                            break;
                        case yn:
                        case bn:
                        case Gn:
                            a = Hl;
                            break;
                        case An:
                        case qn:
                        case nr:
                        case rr:
                        case or:
                        case ar:
                        case ir:
                        case sr:
                            a = Pl;
                            break;
                        default:
                            -1 === tu.indexOf(e) && s("SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.", e), a = $s;
                    }
                    var l = a.getPooled(i, t, n, r);
                    return Ss(l), l;
                }
            };
        !function (e) {
            if (D) throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");
            D = Array.prototype.slice.call(e), A();
        }(["ResponderEventPlugin", "SimpleEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"]), k = ms, E = ps, (x = hs) && E || s("EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode."), V({
            SimpleEventPlugin: nu,
            EnterLeaveEventPlugin: Ol,
            ChangeEventPlugin: bl,
            SelectEventPlugin: Wl,
            BeforeInputEventPlugin: tl
        });
        var ru = "undefined" != typeof performance && "function" == typeof performance.mark && "function" == typeof performance.clearMarks && "function" == typeof performance.measure && "function" == typeof performance.clearMeasures,
            ou = null, au = null, iu = null, su = !1, lu = !1, uu = !1, cu = 0, fu = 0, du = new Set,
            pu = function (e) {
                return "⚛ " + e;
            }, hu = function (e) {
                performance.mark(pu(e));
            }, mu = function (e, t, n) {
                var r = pu(t), o = function (e, t) {
                    return (t ? "⛔ " : "⚛ ") + e + (t ? " Warning: " + t : "");
                }(e, n);
                try {
                    performance.measure(o, r);
                } catch (e) {
                }
                performance.clearMarks(r), performance.clearMeasures(o);
            }, gu = function (e, t) {
                return e + " (#" + t + ")";
            }, vu = function (e, t, n) {
                return null === n ? e + " [" + (t ? "update" : "mount") + "]" : e + "." + n;
            }, yu = function (e, t) {
                var n = qe(e.type) || "Unknown", r = e._debugID, o = null !== e.alternate, a = vu(n, o, t);
                if (su && du.has(a)) return !1;
                du.add(a);
                var i = gu(a, r);
                return hu(i), !0;
            }, bu = function (e, t) {
                var n = qe(e.type) || "Unknown", r = e._debugID, o = null !== e.alternate, a = vu(n, o, t);
                !function (e) {
                    performance.clearMarks(pu(e));
                }(gu(a, r));
            }, wu = function (e, t, n) {
                var r = qe(e.type) || "Unknown", o = e._debugID, a = null !== e.alternate, i = vu(r, a, t), s = gu(i, o);
                mu(i, s, n);
            }, ku = function (e) {
                switch (e.tag) {
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 7:
                    case _:
                    case 9:
                    case 8:
                        return !0;
                    default:
                        return !1;
                }
            }, Eu = function (e) {
                null !== e.return && Eu(e.return), e._debugIsCurrentlyTiming && yu(e, null);
            };

        function xu() {
            fu++;
        }

        function Su(e) {
            ru && !ku(e) && (ou = e, yu(e, null) && (e._debugIsCurrentlyTiming = !0));
        }

        function _u(e) {
            ru && !ku(e) && (e._debugIsCurrentlyTiming = !1, bu(e, null));
        }

        function Tu(e) {
            ru && !ku(e) && (ou = e.return, e._debugIsCurrentlyTiming && (e._debugIsCurrentlyTiming = !1, wu(e, null, null)));
        }

        function Cu(e) {
            if (ru && !ku(e) && (ou = e.return, e._debugIsCurrentlyTiming)) {
                e._debugIsCurrentlyTiming = !1;
                var t = e.tag === R ? "Rendering was suspended" : "An error was thrown inside this error boundary";
                wu(e, null, t);
            }
        }

        function Ru(e, t) {
            ru && (null !== au && null !== iu && bu(iu, au), iu = null, au = null, uu = !1, yu(e, t) && (iu = e, au = t));
        }

        function Pu() {
            ru && (null !== au && null !== iu && wu(iu, au, uu ? "Scheduled a cascading update" : null), au = null, iu = null);
        }

        function Nu(e) {
            ou = e, ru && (cu = 0, hu("(React Tree Reconciliation)"), null !== ou && Eu(ou));
        }

        function Ou(e, t) {
            if (ru) {
                var n = null;
                null !== e ? n = 3 === e.tag ? "A top-level update interrupted the previous render" : "An update to " + (qe(e.type) || "Unknown") + " interrupted the previous render" : cu > 1 && (n = "There were cascading updates"), cu = 0;
                var r = t ? "(React Tree Reconciliation: Completed Root)" : "(React Tree Reconciliation: Yielded)";
                !function () {
                    for (var e = ou; e;) e._debugIsCurrentlyTiming && wu(e, null, null), e = e.return;
                }(), mu(r, "(React Tree Reconciliation)", n);
            }
        }

        function Iu() {
            ru && (fu = 0, hu("(Committing Snapshot Effects)"));
        }

        function $u() {
            if (ru) {
                var e = fu;
                fu = 0, mu("(Committing Snapshot Effects: " + e + " Total)", "(Committing Snapshot Effects)", null);
            }
        }

        function Du() {
            ru && (fu = 0, hu("(Committing Host Effects)"));
        }

        function Mu() {
            if (ru) {
                var e = fu;
                fu = 0, mu("(Committing Host Effects: " + e + " Total)", "(Committing Host Effects)", null);
            }
        }

        function Au() {
            ru && (fu = 0, hu("(Calling Lifecycle Methods)"));
        }

        function ju() {
            if (ru) {
                var e = fu;
                fu = 0, mu("(Calling Lifecycle Methods: " + e + " Total)", "(Calling Lifecycle Methods)", null);
            }
        }

        var Fu, Lu = [];
        Fu = [];
        var zu, Uu = -1;

        function Bu(e) {
            return { current: e };
        }

        function Wu(e, t) {
            Uu < 0 ? s("Unexpected pop.") : (t !== Fu[ Uu ] && s("Unexpected Fiber popped."), e.current = Lu[ Uu ], Lu[ Uu ] = null, Fu[ Uu ] = null, Uu--);
        }

        function Vu(e, t, n) {
            Uu++, Lu[ Uu ] = e.current, Fu[ Uu ] = n, e.current = t;
        }

        zu = {};
        var Hu = {};
        Object.freeze(Hu);
        var qu = Bu(Hu), Yu = Bu(!1), Qu = Hu;

        function Ku(e, t, n) {
            return n && Zu(t) ? Qu : qu.current;
        }

        function Xu(e, t, n) {
            var r = e.stateNode;
            r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n;
        }

        function Ju(e, t) {
            var n = e.type, o = n.contextTypes;
            if (!o) return Hu;
            var a = e.stateNode;
            if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
            var i = {};
            for (var s in o) i[ s ] = t[ s ];
            var l = qe(n) || "Unknown";
            return r(o, i, "context", l, Ze), a && Xu(e, t, i), i;
        }

        function Gu() {
            return Yu.current;
        }

        function Zu(e) {
            var t = e.childContextTypes;
            return null != t;
        }

        function ec(e) {
            Wu(Yu, e), Wu(qu, e);
        }

        function tc(e) {
            Wu(Yu, e), Wu(qu, e);
        }

        function nc(e, t, n) {
            if (qu.current !== Hu) throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
            Vu(qu, t, e), Vu(Yu, n, e);
        }

        function rc(e, n, o) {
            var a, i = e.stateNode, l = n.childContextTypes;
            if ("function" != typeof i.getChildContext) {
                var u = qe(n) || "Unknown";
                return zu[ u ] || (zu[ u ] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u)), o;
            }
            for (var c in Ru(e, "getChildContext"), a = i.getChildContext(), Pu(), a) if (!(c in l)) throw Error((qe(n) || "Unknown") + ".getChildContext(): key \"" + c + "\" is not defined in childContextTypes.");
            var f = qe(n) || "Unknown";
            return r(l, a, "child context", f, Ze), t({}, o, {}, a);
        }

        function oc(e) {
            var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Hu;
            return Qu = qu.current, Vu(qu, n, e), Vu(Yu, Yu.current, e), !0;
        }

        function ac(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
            if (n) {
                var o = rc(e, t, Qu);
                r.__reactInternalMemoizedMergedChildContext = o, Wu(Yu, e), Wu(qu, e), Vu(qu, o, e), Vu(Yu, n, e);
            } else Wu(Yu, e), Vu(Yu, n, e);
        }

        function ic(e) {
            if (!function (e) {
                return Ur(e) === e;
            }(e) || 1 !== e.tag) throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        return t.stateNode.context;
                    case 1:
                        if (Zu(t.type)) return t.stateNode.__reactInternalMemoizedMergedChildContext;
                }
                t = t.return;
            } while (null !== t);
            throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
        }

        var sc = n.unstable_runWithPriority, lc = n.unstable_scheduleCallback, uc = n.unstable_cancelCallback,
            cc = n.unstable_shouldYield, fc = n.unstable_requestPaint, dc = n.unstable_now,
            pc = n.unstable_getCurrentPriorityLevel, hc = n.unstable_ImmediatePriority,
            mc = n.unstable_UserBlockingPriority, gc = n.unstable_NormalPriority, vc = n.unstable_LowPriority,
            yc = n.unstable_IdlePriority;
        if (null == o.__interactionsRef || null == o.__interactionsRef.current) throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");
        var bc = {}, wc = 99, kc = 98, Ec = 97, xc = 90, Sc = cc, _c = void 0 !== fc ? fc : function () {
        }, Tc = null, Cc = null, Rc = !1, Pc = dc(), Nc = Pc < 1e4 ? dc : function () {
            return dc() - Pc;
        };

        function Oc() {
            switch (pc()) {
                case hc:
                    return wc;
                case mc:
                    return kc;
                case gc:
                    return Ec;
                case vc:
                    return 96;
                case yc:
                    return 95;
                default:
                    throw Error("Unknown priority level.");
            }
        }

        function Ic(e) {
            switch (e) {
                case wc:
                    return hc;
                case kc:
                    return mc;
                case Ec:
                    return gc;
                case 96:
                    return vc;
                case 95:
                    return yc;
                default:
                    throw Error("Unknown priority level.");
            }
        }

        function $c(e, t) {
            var n = Ic(e);
            return sc(n, t);
        }

        function Dc(e, t, n) {
            var r = Ic(e);
            return lc(r, t, n);
        }

        function Mc(e) {
            return null === Tc ? (Tc = [e], Cc = lc(hc, jc)) : Tc.push(e), bc;
        }

        function Ac() {
            if (null !== Cc) {
                var e = Cc;
                Cc = null, uc(e);
            }
            jc();
        }

        function jc() {
            if (!Rc && null !== Tc) {
                Rc = !0;
                var e = 0;
                try {
                    var t = Tc;
                    $c(wc, (function () {
                        for (; e < t.length; e++) {
                            var n = t[ e ];
                            do {
                                n = n(true);
                            } while (null !== n);
                        }
                    })), Tc = null;
                } catch (t) {
                    throw null !== Tc && (Tc = Tc.slice(e + 1)), lc(hc, Ac), t;
                } finally {
                    Rc = !1;
                }
            }
        }

        var Fc = 1073741823, Lc = Fc, zc = Lc - 1, Uc = zc - 1;

        function Bc(e) {
            return Uc - (e / 10 | 0);
        }

        function Wc(e) {
            return 10 * (Uc - e);
        }

        function Vc(e, t, n) {
            return Uc - (1 + ((Uc - e + t / 10) / (r = n / 10) | 0)) * r;
            var r;
        }

        var Hc = 5e3;

        function qc(e) {
            return Vc(e, 500, 100);
        }

        function Yc(e, t) {
            if (t === Lc) return wc;
            if (1 === t || 2 === t) return 95;
            var n = Wc(t) - Wc(e);
            return n <= 0 ? wc : n <= 600 ? kc : n <= 5250 ? Ec : 95;
        }

        var Qc = {
            recordUnsafeLifecycleWarnings: function (e, t) {
            }, flushPendingUnsafeLifecycleWarnings: function () {
            }, recordLegacyContextWarning: function (e, t) {
            }, flushLegacyContextWarning: function () {
            }, discardPendingWarnings: function () {
            }
        }, Kc = function (e) {
            var t = [];
            return e.forEach((function (e) {
                t.push(e);
            })), t.sort().join(", ");
        }, Xc = [], Jc = [], Gc = [], Zc = [], ef = [], tf = [], nf = new Set;
        Qc.recordUnsafeLifecycleWarnings = function (e, t) {
            nf.has(e.type) || ("function" == typeof t.componentWillMount && !0 !== t.componentWillMount.__suppressDeprecationWarning && Xc.push(e), 1 & e.mode && "function" == typeof t.UNSAFE_componentWillMount && Jc.push(e), "function" == typeof t.componentWillReceiveProps && !0 !== t.componentWillReceiveProps.__suppressDeprecationWarning && Gc.push(e), 1 & e.mode && "function" == typeof t.UNSAFE_componentWillReceiveProps && Zc.push(e), "function" == typeof t.componentWillUpdate && !0 !== t.componentWillUpdate.__suppressDeprecationWarning && ef.push(e), 1 & e.mode && "function" == typeof t.UNSAFE_componentWillUpdate && tf.push(e));
        }, Qc.flushPendingUnsafeLifecycleWarnings = function () {
            var e = new Set;
            Xc.length > 0 && (Xc.forEach((function (t) {
                e.add(qe(t.type) || "Component"), nf.add(t.type);
            })), Xc = []);
            var t = new Set;
            Jc.length > 0 && (Jc.forEach((function (e) {
                t.add(qe(e.type) || "Component"), nf.add(e.type);
            })), Jc = []);
            var n = new Set;
            Gc.length > 0 && (Gc.forEach((function (e) {
                n.add(qe(e.type) || "Component"), nf.add(e.type);
            })), Gc = []);
            var r = new Set;
            Zc.length > 0 && (Zc.forEach((function (e) {
                r.add(qe(e.type) || "Component"), nf.add(e.type);
            })), Zc = []);
            var o = new Set;
            ef.length > 0 && (ef.forEach((function (e) {
                o.add(qe(e.type) || "Component"), nf.add(e.type);
            })), ef = []);
            var a = new Set;
            (tf.length > 0 && (tf.forEach((function (e) {
                a.add(qe(e.type) || "Component"), nf.add(e.type);
            })), tf = []), t.size > 0) && s("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", Kc(t));
            r.size > 0 && s("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n\nPlease update the following components: %s", Kc(r));
            a.size > 0 && s("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", Kc(a));
            e.size > 0 && i("componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", Kc(e));
            n.size > 0 && i("componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", Kc(n));
            o.size > 0 && i("componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", Kc(o));
        };
        var rf = new Map, of = new Set;
        Qc.recordLegacyContextWarning = function (e, t) {
            var n = function (e) {
                for (var t = null, n = e; null !== n;) 1 & n.mode && (t = n), n = n.return;
                return t;
            }(e);
            if (null !== n) {
                if (!of.has(e.type)) {
                    var r = rf.get(n);
                    (null != e.type.contextTypes || null != e.type.childContextTypes || null !== t && "function" == typeof t.getChildContext) && (void 0 === r && (r = [], rf.set(n, r)), r.push(e));
                }
            } else s("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        }, Qc.flushLegacyContextWarning = function () {
            rf.forEach((function (e, t) {
                if (0 !== e.length) {
                    var n = e[ 0 ], r = new Set;
                    e.forEach((function (e) {
                        r.add(qe(e.type) || "Component"), of.add(e.type);
                    })), s("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://fb.me/react-legacy-context%s", Kc(r), Ke(n));
                }
            }));
        }, Qc.discardPendingWarnings = function () {
            Xc = [], Jc = [], Gc = [], Zc = [], ef = [], tf = [], rf = new Map;
        };
        var af = null, sf = null, lf = function (e) {
            af = e;
        };

        function uf(e) {
            if (null === af) return e;
            var t = af(e);
            return void 0 === t ? e : t.current;
        }

        function cf(e) {
            return uf(e);
        }

        function ff(e) {
            if (null === af) return e;
            var t = af(e);
            if (void 0 === t) {
                if (null != e && "function" == typeof e.render) {
                    var n = uf(e.render);
                    if (e.render !== n) {
                        var r = { $$typeof: je, render: n };
                        return void 0 !== e.displayName && (r.displayName = e.displayName), r;
                    }
                }
                return e;
            }
            return t.current;
        }

        function df(e, t) {
            if (null === af) return !1;
            var n = e.elementType, r = t.type, o = !1, a = "object" == typeof r && null !== r ? r.$$typeof : null;
            switch (e.tag) {
                case 1:
                    "function" == typeof r && (o = !0);
                    break;
                case 0:
                    ("function" == typeof r || a === Ue) && (o = !0);
                    break;
                case T:
                    (a === je || a === Ue) && (o = !0);
                    break;
                case P:
                case N:
                    (a === ze || a === Ue) && (o = !0);
                    break;
                default:
                    return !1;
            }
            if (o) {
                var i = af(n);
                if (void 0 !== i && i === af(r)) return !0;
            }
            return !1;
        }

        function pf(e) {
            null !== af && "function" == typeof WeakSet && (null === sf && (sf = new WeakSet), sf.add(e));
        }

        var hf = function (e, t) {
            if (null !== af) {
                var n = t.staleFamilies, r = t.updatedFamilies;
                rv(), jg((function () {
                    gf(e.current, r, n);
                }));
            }
        }, mf = function (e, t) {
            e.context === Hu && (rv(), function (e, t, n, r) {
                $c(wc, e.bind(null, t, n, r));
            }((function () {
                oy(t, e, null, null);
            })));
        };

        function gf(e, t, n) {
            var r = e.alternate, o = e.child, a = e.sibling, i = e.tag, s = e.type, l = null;
            switch (i) {
                case 0:
                case N:
                case 1:
                    l = s;
                    break;
                case T:
                    l = s.render;
            }
            if (null === af) throw new Error("Expected resolveFamily to be set during hot reload.");
            var u = !1, c = !1;
            if (null !== l) {
                var f = af(l);
                void 0 !== f && (n.has(f) ? c = !0 : t.has(f) && (1 === i ? c = !0 : u = !0));
            }
            null !== sf && (sf.has(e) || null !== r && sf.has(r)) && (c = !0), c && (e._debugNeedsRemount = !0), (c || u) && Pg(e, Lc), null === o || c || gf(o, t, n), null !== a && gf(a, t, n);
        }

        var vf = function (e, t) {
            var n = new Set, r = new Set(t.map((function (e) {
                return e.current;
            })));
            return yf(e.current, r, n), n;
        };

        function yf(e, t, n) {
            var r = e.child, o = e.sibling, a = e.tag, i = e.type, s = null;
            switch (a) {
                case 0:
                case N:
                case 1:
                    s = i;
                    break;
                case T:
                    s = i.render;
            }
            var l = !1;
            null !== s && t.has(s) && (l = !0), l ? function (e, t) {
                if (function (e, t) {
                    var n = e, r = !1;
                    for (; ;) {
                        if (5 === n.tag) r = !0, t.add(n.stateNode); else if (null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue;
                        }
                        if (n === e) return r;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return r;
                            n = n.return;
                        }
                        n.sibling.return = n.return, n = n.sibling;
                    }
                    return !1;
                }(e, t)) return;
                var n = e;
                for (; ;) {
                    switch (n.tag) {
                        case 5:
                            return void t.add(n.stateNode);
                        case 4:
                        case 3:
                            return void t.add(n.stateNode.containerInfo);
                    }
                    if (null === n.return) throw new Error("Expected to reach root first.");
                    n = n.return;
                }
            }(e, n) : null !== r && yf(r, t, n), null !== o && yf(o, t, n);
        }

        function bf(e, n) {
            if (e && e.defaultProps) {
                var r = t({}, n), o = e.defaultProps;
                for (var a in o) void 0 === r[ a ] && (r[ a ] = o[ a ]);
                return r;
            }
            return n;
        }

        function wf(e) {
            if (function (e) {
                if (-1 === e._status) {
                    e._status = 0;
                    var t = (0, e._ctor)();
                    e._result = t, t.then((function (t) {
                        if (0 === e._status) {
                            var n = t.default;
                            void 0 === n && s("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t), e._status = 1, e._result = n;
                        }
                    }), (function (t) {
                        0 === e._status && (e._status = 2, e._result = t);
                    }));
                }
            }(e), 1 !== e._status) throw e._result;
            return e._result;
        }

        var kf, Ef = Bu(null);
        kf = {};
        var xf = null, Sf = null, _f = null, Tf = !1;

        function Cf() {
            xf = null, Sf = null, _f = null, Tf = !1;
        }

        function Rf() {
            Tf = !0;
        }

        function Pf() {
            Tf = !1;
        }

        function Nf(e, t) {
            var n = e.type._context;
            Vu(Ef, n._currentValue, e), n._currentValue = t, void 0 !== n._currentRenderer && null !== n._currentRenderer && n._currentRenderer !== kf && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = kf;
        }

        function Of(e) {
            var t = Ef.current;
            Wu(Ef, e), e.type._context._currentValue = t;
        }

        function If(e, t) {
            for (var n = e; null !== n;) {
                var r = n.alternate;
                if (n.childExpirationTime < t) n.childExpirationTime = t, null !== r && r.childExpirationTime < t && (r.childExpirationTime = t); else {
                    if (!(null !== r && r.childExpirationTime < t)) break;
                    r.childExpirationTime = t;
                }
                n = n.return;
            }
        }

        function $f(e, t) {
            xf = e, Sf = null, _f = null;
            var n = e.dependencies;
            null !== n && (null !== n.firstContext && (n.expirationTime >= t && lm(), n.firstContext = null));
        }

        function Df(e, t) {
            if (Tf && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), _f === e) ; else if (!1 === t || 0 === t) ; else {
                var n;
                "number" != typeof t || t === Fc ? (_f = e, n = Fc) : n = t;
                var r = { context: e, observedBits: n, next: null };
                if (null === Sf) {
                    if (null === xf) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                    Sf = r, xf.dependencies = { expirationTime: 0, firstContext: r, responders: null };
                } else Sf = Sf.next = r;
            }
            return e._currentValue;
        }

        var Mf, Af, jf = 2, Ff = !1;

        function Lf(e) {
            var t = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
            e.updateQueue = t;
        }

        function zf(e, t) {
            var n = t.updateQueue, r = e.updateQueue;
            if (n === r) {
                var o = { baseState: r.baseState, baseQueue: r.baseQueue, shared: r.shared, effects: r.effects };
                t.updateQueue = o;
            }
        }

        function Uf(e, t) {
            var n = { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null };
            return n.next = n, n.priority = Oc(), n;
        }

        function Bf(e, t) {
            var n = e.updateQueue;
            if (null !== n) {
                var r = n.shared, o = r.pending;
                null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Af !== r || Mf || (s("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Mf = !0);
            }
        }

        function Wf(e, t) {
            var n = e.alternate;
            null !== n && zf(n, e);
            var r = e.updateQueue, o = r.baseQueue;
            null === o ? (r.baseQueue = t.next = t, t.next = t) : (t.next = o.next, o.next = t);
        }

        function Vf(e, n, r, o, a, i) {
            switch (r.tag) {
                case 1:
                    var s = r.payload;
                    if ("function" == typeof s) {
                        Rf(), 1 & e.mode && s.call(i, o, a);
                        var l = s.call(i, o, a);
                        return Pf(), l;
                    }
                    return s;
                case 3:
                    e.effectTag = -4097 & e.effectTag | $r;
                case 0:
                    var u, c = r.payload;
                    return "function" == typeof c ? (Rf(), 1 & e.mode && c.call(i, o, a), u = c.call(i, o, a), Pf()) : u = c, null == u ? o : t({}, o, u);
                case jf:
                    return Ff = !0, o;
            }
            return o;
        }

        function Hf(e, t, n, r) {
            var o = e.updateQueue;
            Ff = !1, Af = o.shared;
            var a = o.baseQueue, i = o.shared.pending;
            if (null !== i) {
                if (null !== a) {
                    var s = a.next, l = i.next;
                    a.next = l, i.next = s;
                }
                a = i, o.shared.pending = null;
                var u = e.alternate;
                if (null !== u) {
                    var c = u.updateQueue;
                    null !== c && (c.baseQueue = i);
                }
            }
            if (null !== a) {
                var f = a.next, d = o.baseState, p = 0, h = null, m = null, g = null;
                if (null !== f) for (var v = f; ;) {
                    var y = v.expirationTime;
                    if (y < r) {
                        var b = {
                            expirationTime: v.expirationTime,
                            suspenseConfig: v.suspenseConfig,
                            tag: v.tag,
                            payload: v.payload,
                            callback: v.callback,
                            next: null
                        };
                        null === g ? (m = g = b, h = d) : g = g.next = b, y > p && (p = y);
                    } else {
                        if (null !== g) {
                            var w = {
                                expirationTime: Lc,
                                suspenseConfig: v.suspenseConfig,
                                tag: v.tag,
                                payload: v.payload,
                                callback: v.callback,
                                next: null
                            };
                            g = g.next = w;
                        }
                        if (Vg(y, v.suspenseConfig), d = Vf(e, 0, v, d, t, n), null !== v.callback) {
                            e.effectTag |= 32;
                            var k = o.effects;
                            null === k ? o.effects = [v] : k.push(v);
                        }
                    }
                    if (null === (v = v.next) || v === f) {
                        if (null === (i = o.shared.pending)) break;
                        v = a.next = i.next, i.next = f, o.baseQueue = a = i, o.shared.pending = null;
                    }
                }
                null === g ? h = d : g.next = m, o.baseState = h, o.baseQueue = g, Hg(p), e.expirationTime = p, e.memoizedState = d;
            }
            Af = null;
        }

        function qf(e, t) {
            if ("function" != typeof e) throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
            e.call(t);
        }

        function Yf() {
            Ff = !1;
        }

        function Qf() {
            return Ff;
        }

        function Kf(e, t, n) {
            var r = t.effects;
            if (t.effects = null, null !== r) for (var o = 0; o < r.length; o++) {
                var a = r[ o ], i = a.callback;
                null !== i && (a.callback = null, qf(i, n));
            }
        }

        Mf = !1, Af = null;
        var Xf = a.ReactCurrentBatchConfig;

        function Jf() {
            return Xf.suspense;
        }

        var Gf, Zf, ed, td, nd, rd, od, ad, id, sd, ld = {}, ud = Array.isArray, cd = (new e.Component).refs;
        Gf = new Set, Zf = new Set, ed = new Set, td = new Set, ad = new Set, nd = new Set, id = new Set, sd = new Set;
        var fd = new Set;

        function dd(e, n, r, o) {
            var a = e.memoizedState;
            1 & e.mode && r(o, a);
            var i = r(o, a);
            rd(n, i);
            var s = null == i ? a : t({}, a, i);
            (e.memoizedState = s, 0 === e.expirationTime) && (e.updateQueue.baseState = s);
        }

        od = function (e, t) {
            if (null !== e && "function" != typeof e) {
                var n = t + "_" + e;
                fd.has(n) || (fd.add(n), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
            }
        }, rd = function (e, t) {
            if (void 0 === t) {
                var n = qe(e) || "Component";
                nd.has(n) || (nd.add(n), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
            }
        }, Object.defineProperty(ld, "_processChildContext", {
            enumerable: !1, value: function () {
                throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
            }
        }), Object.freeze(ld);
        var pd, hd, md, gd, vd, yd = {
            isMounted: function (e) {
                var t = zr.current;
                if (null !== t && 1 === t.tag) {
                    var n = t, r = n.stateNode;
                    r._warnedAboutRefsInRender || s("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(n.type) || "A component"), r._warnedAboutRefsInRender = !0;
                }
                var o = Ir(e);
                return !!o && Ur(o) === o;
            }, enqueueSetState: function (e, t, n) {
                var r = Ir(e), o = Cg(), a = Jf(), i = Rg(o, r, a), s = Uf(i, a);
                s.payload = t, null != n && (od(n, "setState"), s.callback = n), Bf(r, s), Pg(r, i);
            }, enqueueReplaceState: function (e, t, n) {
                var r = Ir(e), o = Cg(), a = Jf(), i = Rg(o, r, a), s = Uf(i, a);
                s.tag = 1, s.payload = t, null != n && (od(n, "replaceState"), s.callback = n), Bf(r, s), Pg(r, i);
            }, enqueueForceUpdate: function (e, t) {
                var n = Ir(e), r = Cg(), o = Jf(), a = Rg(r, n, o), i = Uf(a, o);
                i.tag = jf, null != t && (od(t, "forceUpdate"), i.callback = t), Bf(n, i), Pg(n, a);
            }
        };

        function bd(e, t, n, r, o, a, i) {
            var l = e.stateNode;
            if ("function" == typeof l.shouldComponentUpdate) {
                1 & e.mode && l.shouldComponentUpdate(r, a, i), Ru(e, "shouldComponentUpdate");
                var u = l.shouldComponentUpdate(r, a, i);
                return Pu(), void 0 === u && s("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", qe(t) || "Component"), u;
            }
            return !t.prototype || !t.prototype.isPureReactComponent || (!Dl(n, r) || !Dl(o, a));
        }

        function wd(e, t) {
            var n;
            t.updater = yd, e.stateNode = t, n = e, t._reactInternalFiber = n, t._reactInternalInstance = ld;
        }

        function kd(e, t, n) {
            var r = !1, o = Hu, a = Hu, i = t.contextType;
            if ("contextType" in t && (!(null === i || void 0 !== i && i.$$typeof === Me && void 0 === i._context) && !sd.has(t))) {
                sd.add(t);
                var l = "";
                l = void 0 === i ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" != typeof i ? " However, it is set to a " + typeof i + "." : i.$$typeof === De ? " Did you accidentally pass the Context.Provider instead?" : void 0 !== i._context ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(i).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(t) || "Component", l);
            }
            if ("object" == typeof i && null !== i) a = Df(i); else {
                o = Ku(0, t, !0);
                var u = t.contextTypes;
                a = (r = null != u) ? Ju(e, o) : Hu;
            }
            1 & e.mode && new t(n, a);
            var c = new t(n, a), f = e.memoizedState = null !== c.state && void 0 !== c.state ? c.state : null;
            if (wd(e, c), "function" == typeof t.getDerivedStateFromProps && null === f) {
                var d = qe(t) || "Component";
                Zf.has(d) || (Zf.add(d), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", d, null === c.state ? "null" : "undefined", d));
            }
            if ("function" == typeof t.getDerivedStateFromProps || "function" == typeof c.getSnapshotBeforeUpdate) {
                var p = null, h = null, m = null;
                if ("function" == typeof c.componentWillMount && !0 !== c.componentWillMount.__suppressDeprecationWarning ? p = "componentWillMount" : "function" == typeof c.UNSAFE_componentWillMount && (p = "UNSAFE_componentWillMount"), "function" == typeof c.componentWillReceiveProps && !0 !== c.componentWillReceiveProps.__suppressDeprecationWarning ? h = "componentWillReceiveProps" : "function" == typeof c.UNSAFE_componentWillReceiveProps && (h = "UNSAFE_componentWillReceiveProps"), "function" == typeof c.componentWillUpdate && !0 !== c.componentWillUpdate.__suppressDeprecationWarning ? m = "componentWillUpdate" : "function" == typeof c.UNSAFE_componentWillUpdate && (m = "UNSAFE_componentWillUpdate"), null !== p || null !== h || null !== m) {
                    var g = qe(t) || "Component",
                        v = "function" == typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    td.has(g) || (td.add(g), s("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-unsafe-component-lifecycles", g, v, null !== p ? "\n  " + p : "", null !== h ? "\n  " + h : "", null !== m ? "\n  " + m : ""));
                }
            }
            return r && Xu(e, o, a), c;
        }

        function Ed(e, t, n, r) {
            var o = t.state;
            if (Ru(e, "componentWillReceiveProps"), "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), Pu(), t.state !== o) {
                var a = qe(e.type) || "Component";
                Gf.has(a) || (Gf.add(a), s("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", a)), yd.enqueueReplaceState(t, t.state, null);
            }
        }

        function xd(e, t, n, r) {
            !function (e, t, n) {
                var r = e.stateNode, o = qe(t) || "Component";
                r.render || (t.prototype && "function" == typeof t.prototype.render ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), !r.getInitialState || r.getInitialState.isReactClassApproved || r.state || s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), r.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), r.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), r.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !id.has(t) && (id.add(t), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), "function" == typeof r.componentShouldUpdate && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && void 0 !== r.shouldComponentUpdate && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(t) || "A pure component"), "function" == typeof r.componentDidUnmount && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), "function" == typeof r.componentDidReceiveProps && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), "function" == typeof r.componentWillRecieveProps && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), "function" == typeof r.UNSAFE_componentWillRecieveProps && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
                var a = r.props !== n;
                void 0 !== r.props && a && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), r.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), "function" != typeof r.getSnapshotBeforeUpdate || "function" == typeof r.componentDidUpdate || ed.has(t) || (ed.add(t), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(t))), "function" == typeof r.getDerivedStateFromProps && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), "function" == typeof r.getDerivedStateFromError && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), "function" == typeof t.getSnapshotBeforeUpdate && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
                var i = r.state;
                i && ("object" != typeof i || ud(i)) && s("%s.state: must be set to an object or null", o), "function" == typeof r.getChildContext && "object" != typeof t.childContextTypes && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
            }(e, t, n);
            var o = e.stateNode;
            o.props = n, o.state = e.memoizedState, o.refs = cd, Lf(e);
            var a = t.contextType;
            if ("object" == typeof a && null !== a) o.context = Df(a); else {
                var i = Ku(0, t, !0);
                o.context = Ju(e, i);
            }
            if (o.state === n) {
                var l = qe(t) || "Component";
                ad.has(l) || (ad.add(l), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", l));
            }
            1 & e.mode && Qc.recordLegacyContextWarning(e, o), Qc.recordUnsafeLifecycleWarnings(e, o), Hf(e, n, o, r), o.state = e.memoizedState;
            var u = t.getDerivedStateFromProps;
            "function" == typeof u && (dd(e, t, u, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (!function (e, t) {
                Ru(e, "componentWillMount");
                var n = t.state;
                "function" == typeof t.componentWillMount && t.componentWillMount(), "function" == typeof t.UNSAFE_componentWillMount && t.UNSAFE_componentWillMount(), Pu(), n !== t.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e.type) || "Component"), yd.enqueueReplaceState(t, t.state, null));
            }(e, o), Hf(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.effectTag |= 4);
        }

        var Sd;
        pd = !1, hd = !1, md = {}, gd = {}, vd = {}, Sd = function (e) {
            if (null !== e && "object" == typeof e && e._store && !e._store.validated && null == e.key) {
                if ("object" != typeof e._store) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                e._store.validated = !0;
                var t = "Each child in a list should have a unique \"key\" prop. See https://fb.me/react-warning-keys for more information." + Ze();
                gd[ t ] || (gd[ t ] = !0, s("Each child in a list should have a unique \"key\" prop. See https://fb.me/react-warning-keys for more information."));
            }
        };
        var _d = Array.isArray;

        function Td(e, t, n) {
            var r = n.ref;
            if (null !== r && "function" != typeof r && "object" != typeof r) {
                if (1 & e.mode && (!n._owner || !n._self || n._owner.stateNode === n._self)) {
                    var o = qe(e.type) || "Component";
                    md[ o ] || (s("A string ref, \"%s\", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s", r, Ke(e)), md[ o ] = !0);
                }
                if (n._owner) {
                    var a, i = n._owner;
                    if (i) {
                        var l = i;
                        if (1 !== l.tag) throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref");
                        a = l.stateNode;
                    }
                    if (!a) throw Error("Missing owner for string ref " + r + ". This error is likely caused by a bug in React. Please file an issue.");
                    var u = "" + r;
                    if (null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === u) return t.ref;
                    var c = function (e) {
                        var t = a.refs;
                        t === cd && (t = a.refs = {}), null === e ? delete t[ u ] : t[ u ] = e;
                    };
                    return c._stringRef = u, c;
                }
                if ("string" != typeof r) throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                if (!n._owner) throw Error("Element ref was specified as a string (" + r + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.");
            }
            return r;
        }

        function Cd(e, t) {
            if ("textarea" !== e.type) {
                var n;
                throw n = " If you meant to render a collection of children, use an array instead." + Ze(), Error("Objects are not valid as a React child (found: " + ("[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + ")." + n);
            }
        }

        function Rd() {
            var e = "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." + Ze();
            vd[ e ] || (vd[ e ] = !0, s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."));
        }

        function Pd(e) {
            function t(t, n) {
                if (e) {
                    var r = t.lastEffect;
                    null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8;
                }
            }

            function n(n, r) {
                if (!e) return null;
                for (var o = r; null !== o;) t(n, o), o = o.sibling;
                return null;
            }

            function r(e, t) {
                for (var n = new Map, r = t; null !== r;) null !== r.key ? n.set(r.key, r) : n.set(r.index, r), r = r.sibling;
                return n;
            }

            function o(e, t) {
                var n = Vv(e, t);
                return n.index = 0, n.sibling = null, n;
            }

            function a(t, n, r) {
                if (t.index = r, !e) return n;
                var o = t.alternate;
                if (null !== o) {
                    var a = o.index;
                    return a < n ? (t.effectTag = 2, n) : a;
                }
                return t.effectTag = 2, n;
            }

            function i(t) {
                return e && null === t.alternate && (t.effectTag = 2), t;
            }

            function l(e, t, n, r) {
                if (null === t || 6 !== t.tag) {
                    var a = Kv(n, e.mode, r);
                    return a.return = e, a;
                }
                var i = o(t, n);
                return i.return = e, i;
            }

            function u(e, t, n, r) {
                if (null !== t && (t.elementType === n.type || df(t, n))) {
                    var a = o(t, n.props);
                    return a.ref = Td(e, t, n), a.return = e, a._debugSource = n._source, a._debugOwner = n._owner, a;
                }
                var i = Yv(n, e.mode, r);
                return i.ref = Td(e, t, n), i.return = e, i;
            }

            function c(e, t, n, r) {
                if (null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation) {
                    var a = Xv(n, e.mode, r);
                    return a.return = e, a;
                }
                var i = o(t, n.children || []);
                return i.return = e, i;
            }

            function f(e, t, n, r, a) {
                if (null === t || 7 !== t.tag) {
                    var i = Qv(n, e.mode, r, a);
                    return i.return = e, i;
                }
                var s = o(t, n);
                return s.return = e, s;
            }

            function d(e, t, n) {
                if ("string" == typeof t || "number" == typeof t) {
                    var r = Kv("" + t, e.mode, n);
                    return r.return = e, r;
                }
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case Pe:
                            var o = Yv(t, e.mode, n);
                            return o.ref = Td(e, null, t), o.return = e, o;
                        case Ne:
                            var a = Xv(t, e.mode, n);
                            return a.return = e, a;
                    }
                    if (_d(t) || Ve(t)) {
                        var i = Qv(t, e.mode, n, null);
                        return i.return = e, i;
                    }
                    Cd(e, t);
                }
                return "function" == typeof t && Rd(), null;
            }

            function p(e, t, n, r) {
                var o = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== o ? null : l(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case Pe:
                            return n.key === o ? n.type === Oe ? f(e, t, n.props.children, r, o) : u(e, t, n, r) : null;
                        case Ne:
                            return n.key === o ? c(e, t, n, r) : null;
                    }
                    if (_d(n) || Ve(n)) return null !== o ? null : f(e, t, n, r, null);
                    Cd(e, n);
                }
                return "function" == typeof n && Rd(), null;
            }

            function h(e, t, n, r, o) {
                if ("string" == typeof r || "number" == typeof r) return l(t, e.get(n) || null, "" + r, o);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case Pe:
                            var a = e.get(null === r.key ? n : r.key) || null;
                            return r.type === Oe ? f(t, a, r.props.children, o, r.key) : u(t, a, r, o);
                        case Ne:
                            return c(t, e.get(null === r.key ? n : r.key) || null, r, o);
                    }
                    if (_d(r) || Ve(r)) return f(t, e.get(n) || null, r, o, null);
                    Cd(t, r);
                }
                return "function" == typeof r && Rd(), null;
            }

            function m(e, t) {
                if ("object" != typeof e || null === e) return t;
                switch (e.$$typeof) {
                    case Pe:
                    case Ne:
                        Sd(e);
                        var n = e.key;
                        if ("string" != typeof n) break;
                        if (null === t) {
                            (t = new Set).add(n);
                            break;
                        }
                        if (!t.has(n)) {
                            t.add(n);
                            break;
                        }
                        s("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", n);
                }
                return t;
            }

            return function (l, u, c, f) {
                var g = "object" == typeof c && null !== c && c.type === Oe && null === c.key;
                g && (c = c.props.children);
                var v = "object" == typeof c && null !== c;
                if (v) switch (c.$$typeof) {
                    case Pe:
                        return i(function (e, r, a, i) {
                            for (var s = a.key, l = r; null !== l;) {
                                if (l.key === s) {
                                    if (7 === l.tag) {
                                        if (a.type === Oe) {
                                            n(e, l.sibling);
                                            var u = o(l, a.props.children);
                                            return u.return = e, u._debugSource = a._source, u._debugOwner = a._owner, u;
                                        }
                                    } else if (l.elementType === a.type || df(l, a)) {
                                        n(e, l.sibling);
                                        var c = o(l, a.props);
                                        return c.ref = Td(e, l, a), c.return = e, c._debugSource = a._source, c._debugOwner = a._owner, c;
                                    }
                                    n(e, l);
                                    break;
                                }
                                t(e, l), l = l.sibling;
                            }
                            if (a.type === Oe) {
                                var f = Qv(a.props.children, e.mode, i, a.key);
                                return f.return = e, f;
                            }
                            var d = Yv(a, e.mode, i);
                            return d.ref = Td(e, r, a), d.return = e, d;
                        }(l, u, c, f));
                    case Ne:
                        return i(function (e, r, a, i) {
                            for (var s = a.key, l = r; null !== l;) {
                                if (l.key === s) {
                                    if (4 === l.tag && l.stateNode.containerInfo === a.containerInfo && l.stateNode.implementation === a.implementation) {
                                        n(e, l.sibling);
                                        var u = o(l, a.children || []);
                                        return u.return = e, u;
                                    }
                                    n(e, l);
                                    break;
                                }
                                t(e, l), l = l.sibling;
                            }
                            var c = Xv(a, e.mode, i);
                            return c.return = e, c;
                        }(l, u, c, f));
                }
                if ("string" == typeof c || "number" == typeof c) return i(function (e, t, r, a) {
                    if (null !== t && 6 === t.tag) {
                        n(e, t.sibling);
                        var i = o(t, r);
                        return i.return = e, i;
                    }
                    n(e, t);
                    var s = Kv(r, e.mode, a);
                    return s.return = e, s;
                }(l, u, "" + c, f));
                if (_d(c)) return function (o, i, s, l) {
                    for (var u = null, c = 0; c < s.length; c++) u = m(s[ c ], u);
                    for (var f = null, g = null, v = i, y = 0, b = 0, w = null; null !== v && b < s.length; b++) {
                        v.index > b ? (w = v, v = null) : w = v.sibling;
                        var k = p(o, v, s[ b ], l);
                        if (null === k) {
                            null === v && (v = w);
                            break;
                        }
                        e && v && null === k.alternate && t(o, v), y = a(k, y, b), null === g ? f = k : g.sibling = k, g = k, v = w;
                    }
                    if (b === s.length) return n(o, v), f;
                    if (null === v) {
                        for (; b < s.length; b++) {
                            var E = d(o, s[ b ], l);
                            null !== E && (y = a(E, y, b), null === g ? f = E : g.sibling = E, g = E);
                        }
                        return f;
                    }
                    for (var x = r(0, v); b < s.length; b++) {
                        var S = h(x, o, b, s[ b ], l);
                        null !== S && (e && null !== S.alternate && x.delete(null === S.key ? b : S.key), y = a(S, y, b), null === g ? f = S : g.sibling = S, g = S);
                    }
                    return e && x.forEach((function (e) {
                        return t(o, e);
                    })), f;
                }(l, u, c, f);
                if (Ve(c)) return function (o, i, l, u) {
                    var c = Ve(l);
                    if ("function" != typeof c) throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                    "function" == typeof Symbol && "Generator" === l[ Symbol.toStringTag ] && (hd || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hd = !0), l.entries === c && (pd || s("Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."), pd = !0);
                    var f = c.call(l);
                    if (f) for (var g = null, v = f.next(); !v.done; v = f.next()) g = m(v.value, g);
                    var y = c.call(l);
                    if (null == y) throw Error("An iterable object provided no iterator.");
                    for (var b = null, w = null, k = i, E = 0, x = 0, S = null, _ = y.next(); null !== k && !_.done; x++, _ = y.next()) {
                        k.index > x ? (S = k, k = null) : S = k.sibling;
                        var T = p(o, k, _.value, u);
                        if (null === T) {
                            null === k && (k = S);
                            break;
                        }
                        e && k && null === T.alternate && t(o, k), E = a(T, E, x), null === w ? b = T : w.sibling = T, w = T, k = S;
                    }
                    if (_.done) return n(o, k), b;
                    if (null === k) {
                        for (; !_.done; x++, _ = y.next()) {
                            var C = d(o, _.value, u);
                            null !== C && (E = a(C, E, x), null === w ? b = C : w.sibling = C, w = C);
                        }
                        return b;
                    }
                    for (var R = r(0, k); !_.done; x++, _ = y.next()) {
                        var P = h(R, o, x, _.value, u);
                        null !== P && (e && null !== P.alternate && R.delete(null === P.key ? x : P.key), E = a(P, E, x), null === w ? b = P : w.sibling = P, w = P);
                    }
                    return e && R.forEach((function (e) {
                        return t(o, e);
                    })), b;
                }(l, u, c, f);
                if (v && Cd(l, c), "function" == typeof c && Rd(), void 0 === c && !g) switch (l.tag) {
                    case 1:
                        if (l.stateNode.render._isMockFunction) break;
                    case 0:
                        var y = l.type;
                        throw Error((y.displayName || y.name || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
                }
                return n(l, u);
            };
        }

        var Nd = Pd(!0), Od = Pd(!1);

        function Id(e, t) {
            for (var n = e.child; null !== n;) Hv(n, t), n = n.sibling;
        }

        var $d = {}, Dd = Bu($d), Md = Bu($d), Ad = Bu($d);

        function jd(e) {
            if (e === $d) throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
            return e;
        }

        function Fd() {
            return jd(Ad.current);
        }

        function Ld(e, t) {
            Vu(Ad, t, e), Vu(Md, e, e), Vu(Dd, $d, e);
            var n = function (e) {
                var t, n, r = e.nodeType;
                switch (r) {
                    case 9:
                    case 11:
                        t = 9 === r ? "#document" : "#fragment";
                        var o = e.documentElement;
                        n = o ? o.namespaceURI : qt(null, "");
                        break;
                    default:
                        var a = 8 === r ? e.parentNode : e;
                        n = qt(a.namespaceURI || null, t = a.tagName);
                }
                var i = t.toLowerCase();
                return { namespace: n, ancestorInfo: Pi(null, i) };
            }(t);
            Wu(Dd, e), Vu(Dd, n, e);
        }

        function zd(e) {
            Wu(Dd, e), Wu(Md, e), Wu(Ad, e);
        }

        function Ud() {
            return jd(Dd.current);
        }

        function Bd(e) {
            jd(Ad.current);
            var t, n, r, o = jd(Dd.current),
                a = (t = o, n = e.type, { namespace: qt((r = t).namespace, n), ancestorInfo: Pi(r.ancestorInfo, n) });
            o !== a && (Vu(Md, e, e), Vu(Dd, a, e));
        }

        function Wd(e) {
            Md.current === e && (Wu(Dd, e), Wu(Md, e));
        }

        var Vd = Bu(0);

        function Hd(e, t) {
            return 0 != (e & t);
        }

        function qd(e) {
            return 1 & e;
        }

        function Yd(e, t) {
            return 1 & e | t;
        }

        function Qd(e, t) {
            Vu(Vd, t, e);
        }

        function Kd(e) {
            Wu(Vd, e);
        }

        function Xd(e, t) {
            var n = e.memoizedState;
            if (null !== n) return null !== n.dehydrated;
            var r = e.memoizedProps;
            return void 0 !== r.fallback && (!0 !== r.unstable_avoidThisFallback || !t);
        }

        function Jd(e) {
            for (var t = e; null !== t;) {
                if (t.tag === R) {
                    var n = t.memoizedState;
                    if (null !== n) {
                        var r = n.dehydrated;
                        if (null === r || r.data === Ai || Zi(r)) return t;
                    }
                } else if (t.tag === I && void 0 !== t.memoizedProps.revealOrder) {
                    if (0 != (t.effectTag & $r)) return t;
                } else if (null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e) return null;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }

        function Gd(e, t) {
            var n = { responder: e, props: t };
            return Object.freeze(n), n;
        }

        var Zd, ep = a.ReactCurrentDispatcher, tp = a.ReactCurrentBatchConfig;
        Zd = new Set;
        var np = 0, rp = null, op = null, ap = null, ip = !1, sp = null, lp = null, up = -1, cp = !1;

        function fp() {
            var e = sp;
            null === lp ? lp = [e] : lp.push(e);
        }

        function dp() {
            var e = sp;
            null !== lp && (up++, lp[ up ] !== e && function (e) {
                var t = qe(rp.type);
                if (!Zd.has(t) && (Zd.add(t), null !== lp)) {
                    for (var n = "", r = 30, o = 0; o <= up; o++) {
                        for (var a = lp[ o ], i = o === up ? e : a, l = o + 1 + ". " + a; l.length < r;) l += " ";
                        n += l += i + "\n";
                    }
                    s("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", t, n);
                }
            }(e));
        }

        function pp(e) {
            null == e || Array.isArray(e) || s("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", sp, typeof e);
        }

        function hp() {
            throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
        }

        function mp(e, t) {
            if (cp) return !1;
            if (null === t) return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", sp), !1;
            e.length !== t.length && s("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", sp, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
            for (var n = 0; n < t.length && n < e.length; n++) if (!Il(e[ n ], t[ n ])) return !1;
            return !0;
        }

        function gp(e, t, n, r, o, a) {
            np = a, rp = t, lp = null !== e ? e._debugHookTypes : null, up = -1, cp = null !== e && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, null !== e && null !== e.memoizedState ? ep.current = rh : ep.current = null !== lp ? nh : th;
            var i = n(r, o);
            if (t.expirationTime === np) {
                var s = 0;
                do {
                    if (t.expirationTime = 0, !(s < 25)) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                    s += 1, cp = !1, op = null, ap = null, t.updateQueue = null, up = -1, ep.current = oh, i = n(r, o);
                } while (t.expirationTime === np);
            }
            ep.current = eh, t._debugHookTypes = lp;
            var l = null !== op && null !== op.next;
            if (np = 0, rp = null, op = null, ap = null, sp = null, lp = null, up = -1, ip = !1, l) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
            return i;
        }

        function vp(e, t, n) {
            t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= n && (e.expirationTime = 0);
        }

        function yp() {
            if (ep.current = eh, ip) for (var e = rp.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next;
            }
            np = 0, rp = null, op = null, ap = null, lp = null, up = -1, sp = null, ip = !1;
        }

        function bp() {
            var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
            return null === ap ? rp.memoizedState = ap = e : ap = ap.next = e, ap;
        }

        function wp() {
            var e, t;
            if (null === op) {
                var n = rp.alternate;
                e = null !== n ? n.memoizedState : null;
            } else e = op.next;
            if (null !== (t = null === ap ? rp.memoizedState : ap.next)) t = (ap = t).next, op = e; else {
                if (null === e) throw Error("Rendered more hooks than during the previous render.");
                var r = {
                    memoizedState: (op = e).memoizedState,
                    baseState: op.baseState,
                    baseQueue: op.baseQueue,
                    queue: op.queue,
                    next: null
                };
                null === ap ? rp.memoizedState = ap = r : ap = ap.next = r;
            }
            return ap;
        }

        function kp(e, t) {
            return "function" == typeof t ? t(e) : t;
        }

        function Ep(e, t, n) {
            var r, o = bp();
            r = void 0 !== n ? n(t) : t, o.memoizedState = o.baseState = r;
            var a = o.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: r },
                i = a.dispatch = Zp.bind(null, rp, a);
            return [o.memoizedState, i];
        }

        function xp(e, t, n) {
            var r = wp(), o = r.queue;
            if (null === o) throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            o.lastRenderedReducer = e;
            var a = op, i = a.baseQueue, s = o.pending;
            if (null !== s) {
                if (null !== i) {
                    var l = i.next, u = s.next;
                    i.next = u, s.next = l;
                }
                a.baseQueue = i = s, o.pending = null;
            }
            if (null !== i) {
                var c = i.next, f = a.baseState, d = null, p = null, h = null, m = c;
                do {
                    var g = m.expirationTime;
                    if (g < np) {
                        var v = {
                            expirationTime: m.expirationTime,
                            suspenseConfig: m.suspenseConfig,
                            action: m.action,
                            eagerReducer: m.eagerReducer,
                            eagerState: m.eagerState,
                            next: null
                        };
                        null === h ? (p = h = v, d = f) : h = h.next = v, g > rp.expirationTime && (rp.expirationTime = g, Hg(g));
                    } else {
                        if (null !== h) {
                            var y = {
                                expirationTime: Lc,
                                suspenseConfig: m.suspenseConfig,
                                action: m.action,
                                eagerReducer: m.eagerReducer,
                                eagerState: m.eagerState,
                                next: null
                            };
                            h = h.next = y;
                        }
                        if (Vg(g, m.suspenseConfig), m.eagerReducer === e) f = m.eagerState; else f = e(f, m.action);
                    }
                    m = m.next;
                } while (null !== m && m !== c);
                null === h ? d = f : h.next = p, Il(f, r.memoizedState) || lm(), r.memoizedState = f, r.baseState = d, r.baseQueue = h, o.lastRenderedState = f;
            }
            var b = o.dispatch;
            return [r.memoizedState, b];
        }

        function Sp(e, t, n) {
            var r = wp(), o = r.queue;
            if (null === o) throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
            o.lastRenderedReducer = e;
            var a = o.dispatch, i = o.pending, s = r.memoizedState;
            if (null !== i) {
                o.pending = null;
                var l = i.next, u = l;
                do {
                    s = e(s, u.action), u = u.next;
                } while (u !== l);
                Il(s, r.memoizedState) || lm(), r.memoizedState = s, null === r.baseQueue && (r.baseState = s), o.lastRenderedState = s;
            }
            return [s, a];
        }

        function _p(e) {
            var t = bp();
            "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e;
            var n = t.queue = { pending: null, dispatch: null, lastRenderedReducer: kp, lastRenderedState: e },
                r = n.dispatch = Zp.bind(null, rp, n);
            return [t.memoizedState, r];
        }

        function Tp(e) {
            return xp(kp);
        }

        function Cp(e) {
            return Sp(kp);
        }

        function Rp(e, t, n, r) {
            var o = { tag: e, create: t, destroy: n, deps: r, next: null }, a = rp.updateQueue;
            if (null === a) a = { lastEffect: null }, rp.updateQueue = a, a.lastEffect = o.next = o; else {
                var i = a.lastEffect;
                if (null === i) a.lastEffect = o.next = o; else {
                    var s = i.next;
                    i.next = o, o.next = s, a.lastEffect = o;
                }
            }
            return o;
        }

        function Pp(e) {
            var t = bp(), n = { current: e };
            return Object.seal(n), t.memoizedState = n, n;
        }

        function Np(e) {
            return wp().memoizedState;
        }

        function Op(e, t, n, r) {
            var o = bp(), a = void 0 === r ? null : r;
            rp.effectTag |= e, o.memoizedState = Rp(1 | t, n, void 0, a);
        }

        function Ip(e, t, n, r) {
            var o = wp(), a = void 0 === r ? null : r, i = void 0;
            if (null !== op) {
                var s = op.memoizedState;
                if (i = s.destroy, null !== a) if (mp(a, s.deps)) return void Rp(t, n, i, a);
            }
            rp.effectTag |= e, o.memoizedState = Rp(1 | t, n, i, a);
        }

        function $p(e, t) {
            return "undefined" != typeof jest && bv(rp), Op(516, 4, e, t);
        }

        function Dp(e, t) {
            return "undefined" != typeof jest && bv(rp), Ip(516, 4, e, t);
        }

        function Mp(e, t) {
            return Op(4, 2, e, t);
        }

        function Ap(e, t) {
            return Ip(4, 2, e, t);
        }

        function jp(e, t) {
            if ("function" == typeof t) {
                var n = t, r = e();
                return n(r), function () {
                    n(null);
                };
            }
            if (null != t) {
                var o = t;
                o.hasOwnProperty("current") || s("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
                var a = e();
                return o.current = a, function () {
                    o.current = null;
                };
            }
        }

        function Fp(e, t, n) {
            "function" != typeof t && s("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== t ? typeof t : "null");
            var r = null != n ? n.concat([e]) : null;
            return Op(4, 2, jp.bind(null, t, e), r);
        }

        function Lp(e, t, n) {
            "function" != typeof t && s("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== t ? typeof t : "null");
            var r = null != n ? n.concat([e]) : null;
            return Ip(4, 2, jp.bind(null, t, e), r);
        }

        function zp(e, t) {
        }

        var Up = zp;

        function Bp(e, t) {
            var n = void 0 === t ? null : t;
            return bp().memoizedState = [e, n], e;
        }

        function Wp(e, t) {
            var n = wp(), r = void 0 === t ? null : t, o = n.memoizedState;
            if (null !== o && (null !== r && mp(r, o[ 1 ]))) return o[ 0 ];
            return n.memoizedState = [e, r], e;
        }

        function Vp(e, t) {
            var n = bp(), r = void 0 === t ? null : t, o = e();
            return n.memoizedState = [o, r], o;
        }

        function Hp(e, t) {
            var n = wp(), r = void 0 === t ? null : t, o = n.memoizedState;
            if (null !== o && (null !== r && mp(r, o[ 1 ]))) return o[ 0 ];
            var a = e();
            return n.memoizedState = [a, r], a;
        }

        function qp(e, t) {
            var n = _p(e), r = n[ 0 ], o = n[ 1 ];
            return $p((function () {
                var n = tp.suspense;
                tp.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    tp.suspense = n;
                }
            }), [e, t]), r;
        }

        function Yp(e, t) {
            var n = Tp(), r = n[ 0 ], o = n[ 1 ];
            return Dp((function () {
                var n = tp.suspense;
                tp.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    tp.suspense = n;
                }
            }), [e, t]), r;
        }

        function Qp(e, t) {
            var n = Cp(), r = n[ 0 ], o = n[ 1 ];
            return Dp((function () {
                var n = tp.suspense;
                tp.suspense = void 0 === t ? null : t;
                try {
                    o(e);
                } finally {
                    tp.suspense = n;
                }
            }), [e, t]), r;
        }

        function Kp(e, t, n) {
            var r = Oc();
            $c(r < kc ? kc : r, (function () {
                e(!0);
            })), $c(r > Ec ? Ec : r, (function () {
                var r = tp.suspense;
                tp.suspense = void 0 === t ? null : t;
                try {
                    e(!1), n();
                } finally {
                    tp.suspense = r;
                }
            }));
        }

        function Xp(e) {
            var t = _p(!1), n = t[ 0 ], r = t[ 1 ];
            return [Bp(Kp.bind(null, r, e), [r, e]), n];
        }

        function Jp(e) {
            var t = Tp(), n = t[ 0 ], r = t[ 1 ];
            return [Wp(Kp.bind(null, r, e), [r, e]), n];
        }

        function Gp(e) {
            var t = Cp(), n = t[ 0 ], r = t[ 1 ];
            return [Wp(Kp.bind(null, r, e), [r, e]), n];
        }

        function Zp(e, t, n) {
            "function" == typeof arguments[ 3 ] && s("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
            var r = Cg(), o = Jf(), a = Rg(r, e, o), i = {
                expirationTime: a,
                suspenseConfig: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            i.priority = Oc();
            var l = t.pending;
            null === l ? i.next = i : (i.next = l.next, l.next = i), t.pending = i;
            var u = e.alternate;
            if (e === rp || null !== u && u === rp) ip = !0, i.expirationTime = np, rp.expirationTime = np; else {
                if (0 === e.expirationTime && (null === u || 0 === u.expirationTime)) {
                    var c = t.lastRenderedReducer;
                    if (null !== c) {
                        var f;
                        f = ep.current, ep.current = ih;
                        try {
                            var d = t.lastRenderedState, p = c(d, n);
                            if (i.eagerReducer = c, i.eagerState = p, Il(p, d)) return;
                        } catch (e) {
                        } finally {
                            ep.current = f;
                        }
                    }
                }
                "undefined" != typeof jest && (yv(e), wv(e)), Pg(e, a);
            }
        }

        var eh = {
            readContext: Df,
            useCallback: hp,
            useContext: hp,
            useEffect: hp,
            useImperativeHandle: hp,
            useLayoutEffect: hp,
            useMemo: hp,
            useReducer: hp,
            useRef: hp,
            useState: hp,
            useDebugValue: hp,
            useResponder: hp,
            useDeferredValue: hp,
            useTransition: hp
        }, th = null, nh = null, rh = null, oh = null, ah = null, ih = null, sh = null, lh = function () {
            s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        }, uh = function () {
            s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks");
        };
        th = {
            readContext: function (e, t) {
                return Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", fp(), pp(t), Bp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", fp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", fp(), pp(t), $p(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", fp(), pp(n), Fp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", fp(), pp(t), Mp(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", fp(), pp(t);
                var n = ep.current;
                ep.current = ah;
                try {
                    return Vp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", fp();
                var r = ep.current;
                ep.current = ah;
                try {
                    return Ep(e, t, n);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", fp(), Pp(e);
            }, useState: function (e) {
                sp = "useState", fp();
                var t = ep.current;
                ep.current = ah;
                try {
                    return _p(e);
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                sp = "useDebugValue", fp();
            }, useResponder: function (e, t) {
                return sp = "useResponder", fp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", fp(), qp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", fp(), Xp(e);
            }
        }, nh = {
            readContext: function (e, t) {
                return Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", dp(), Bp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", dp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", dp(), $p(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", dp(), Fp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", dp(), Mp(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", dp();
                var n = ep.current;
                ep.current = ah;
                try {
                    return Vp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", dp();
                var r = ep.current;
                ep.current = ah;
                try {
                    return Ep(e, t, n);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", dp(), Pp(e);
            }, useState: function (e) {
                sp = "useState", dp();
                var t = ep.current;
                ep.current = ah;
                try {
                    return _p(e);
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                sp = "useDebugValue", dp();
            }, useResponder: function (e, t) {
                return sp = "useResponder", dp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", dp(), qp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", dp(), Xp(e);
            }
        }, rh = {
            readContext: function (e, t) {
                return Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", dp(), Wp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", dp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", dp(), Dp(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", dp(), Lp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", dp(), Ap(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", dp();
                var n = ep.current;
                ep.current = ih;
                try {
                    return Hp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", dp();
                var r = ep.current;
                ep.current = ih;
                try {
                    return xp(e);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", dp(), Np();
            }, useState: function (e) {
                sp = "useState", dp();
                var t = ep.current;
                ep.current = ih;
                try {
                    return Tp();
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                return sp = "useDebugValue", dp(), Up();
            }, useResponder: function (e, t) {
                return sp = "useResponder", dp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", dp(), Yp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", dp(), Jp(e);
            }
        }, oh = {
            readContext: function (e, t) {
                return Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", dp(), Wp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", dp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", dp(), Dp(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", dp(), Lp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", dp(), Ap(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", dp();
                var n = ep.current;
                ep.current = sh;
                try {
                    return Hp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", dp();
                var r = ep.current;
                ep.current = sh;
                try {
                    return Sp(e);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", dp(), Np();
            }, useState: function (e) {
                sp = "useState", dp();
                var t = ep.current;
                ep.current = sh;
                try {
                    return Cp();
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                return sp = "useDebugValue", dp(), Up();
            }, useResponder: function (e, t) {
                return sp = "useResponder", dp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", dp(), Qp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", dp(), Gp(e);
            }
        }, ah = {
            readContext: function (e, t) {
                return lh(), Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", uh(), fp(), Bp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", uh(), fp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", uh(), fp(), $p(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", uh(), fp(), Fp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", uh(), fp(), Mp(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", uh(), fp();
                var n = ep.current;
                ep.current = ah;
                try {
                    return Vp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", uh(), fp();
                var r = ep.current;
                ep.current = ah;
                try {
                    return Ep(e, t, n);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", uh(), fp(), Pp(e);
            }, useState: function (e) {
                sp = "useState", uh(), fp();
                var t = ep.current;
                ep.current = ah;
                try {
                    return _p(e);
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                sp = "useDebugValue", uh(), fp();
            }, useResponder: function (e, t) {
                return sp = "useResponder", uh(), fp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", uh(), fp(), qp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", uh(), fp(), Xp(e);
            }
        }, ih = {
            readContext: function (e, t) {
                return lh(), Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", uh(), dp(), Wp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", uh(), dp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", uh(), dp(), Dp(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", uh(), dp(), Lp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", uh(), dp(), Ap(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", uh(), dp();
                var n = ep.current;
                ep.current = ih;
                try {
                    return Hp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", uh(), dp();
                var r = ep.current;
                ep.current = ih;
                try {
                    return xp(e);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", uh(), dp(), Np();
            }, useState: function (e) {
                sp = "useState", uh(), dp();
                var t = ep.current;
                ep.current = ih;
                try {
                    return Tp();
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                return sp = "useDebugValue", uh(), dp(), Up();
            }, useResponder: function (e, t) {
                return sp = "useResponder", uh(), dp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", uh(), dp(), Yp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", uh(), dp(), Jp(e);
            }
        }, sh = {
            readContext: function (e, t) {
                return lh(), Df(e, t);
            }, useCallback: function (e, t) {
                return sp = "useCallback", uh(), dp(), Wp(e, t);
            }, useContext: function (e, t) {
                return sp = "useContext", uh(), dp(), Df(e, t);
            }, useEffect: function (e, t) {
                return sp = "useEffect", uh(), dp(), Dp(e, t);
            }, useImperativeHandle: function (e, t, n) {
                return sp = "useImperativeHandle", uh(), dp(), Lp(e, t, n);
            }, useLayoutEffect: function (e, t) {
                return sp = "useLayoutEffect", uh(), dp(), Ap(e, t);
            }, useMemo: function (e, t) {
                sp = "useMemo", uh(), dp();
                var n = ep.current;
                ep.current = ih;
                try {
                    return Hp(e, t);
                } finally {
                    ep.current = n;
                }
            }, useReducer: function (e, t, n) {
                sp = "useReducer", uh(), dp();
                var r = ep.current;
                ep.current = ih;
                try {
                    return Sp(e);
                } finally {
                    ep.current = r;
                }
            }, useRef: function (e) {
                return sp = "useRef", uh(), dp(), Np();
            }, useState: function (e) {
                sp = "useState", uh(), dp();
                var t = ep.current;
                ep.current = ih;
                try {
                    return Cp();
                } finally {
                    ep.current = t;
                }
            }, useDebugValue: function (e, t) {
                return sp = "useDebugValue", uh(), dp(), Up();
            }, useResponder: function (e, t) {
                return sp = "useResponder", uh(), dp(), Gd(e, t);
            }, useDeferredValue: function (e, t) {
                return sp = "useDeferredValue", uh(), dp(), Qp(e, t);
            }, useTransition: function (e) {
                return sp = "useTransition", uh(), dp(), Gp(e);
            }
        };
        var ch = n.unstable_now, fh = 0, dh = -1;

        function ph() {
            fh = ch();
        }

        function hh(e) {
            dh = ch(), e.actualStartTime < 0 && (e.actualStartTime = ch());
        }

        function mh(e) {
            dh = -1;
        }

        function gh(e, t) {
            if (dh >= 0) {
                var n = ch() - dh;
                e.actualDuration += n, t && (e.selfBaseDuration = n), dh = -1;
            }
        }

        var vh = null, yh = null, bh = !1;

        function wh(e, t) {
            switch (e.tag) {
                case 3:
                    !function (e, t) {
                        1 === t.nodeType ? fi(e, t) : 8 === t.nodeType || di(e, t);
                    }(e.stateNode.containerInfo, t);
                    break;
                case 5:
                    !function (e, t, n, r) {
                        !0 !== t.suppressHydrationWarning && (1 === r.nodeType ? fi(n, r) : 8 === r.nodeType || di(n, r));
                    }(e.type, e.memoizedProps, e.stateNode, t);
            }
            var n, r = ((n = Bv(5, null, null, 0)).elementType = "DELETED", n.type = "DELETED", n);
            r.stateNode = t, r.return = e, r.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r;
        }

        function kh(e, t) {
            switch (t.effectTag = -1025 & t.effectTag | 2, e.tag) {
                case 3:
                    var n = e.stateNode.containerInfo;
                    switch (t.tag) {
                        case 5:
                            var r = t.type;
                            t.pendingProps, function (e, t, n) {
                                pi(e, t);
                            }(n, r);
                            break;
                        case 6:
                            !function (e, t) {
                                hi(e, t);
                            }(n, t.pendingProps);
                    }
                    break;
                case 5:
                    e.type;
                    var o = e.memoizedProps, a = e.stateNode;
                    switch (t.tag) {
                        case 5:
                            var i = t.type;
                            t.pendingProps, function (e, t, n, r, o) {
                                !0 !== t.suppressHydrationWarning && pi(n, r);
                            }(0, o, a, i);
                            break;
                        case 6:
                            !function (e, t, n, r) {
                                !0 !== t.suppressHydrationWarning && hi(n, r);
                            }(0, o, a, t.pendingProps);
                            break;
                        case R:
                            !function (e, t, n) {
                                t.suppressHydrationWarning;
                            }(0, o);
                    }
                    break;
                default:
                    return;
            }
        }

        function Eh(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    e.pendingProps;
                    var r = function (e, t, n) {
                        return 1 !== e.nodeType || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
                    }(t, n);
                    return null !== r && (e.stateNode = r, !0);
                case 6:
                    var o = function (e, t) {
                        return "" === t || 3 !== e.nodeType ? null : e;
                    }(t, e.pendingProps);
                    return null !== o && (e.stateNode = o, !0);
                default:
                    return !1;
            }
        }

        function xh(e) {
            if (bh) {
                var t = yh;
                if (!t) return kh(vh, e), bh = !1, void (vh = e);
                var n = t;
                if (!Eh(e, t)) {
                    if (!(t = ts(n)) || !Eh(e, t)) return kh(vh, e), bh = !1, void (vh = e);
                    wh(vh, n);
                }
                vh = e, yh = ns(t);
            }
        }

        function Sh(e) {
            var t = e.stateNode, n = e.memoizedProps, r = function (e, t, n) {
                return us(n, e), function (e, t) {
                    return e.nodeValue !== t;
                }(e, t);
            }(t, n, e);
            if (r) {
                var o = vh;
                if (null !== o) switch (o.tag) {
                    case 3:
                        o.stateNode.containerInfo;
                        !function (e, t, n) {
                            ci(t, n);
                        }(0, t, n);
                        break;
                    case 5:
                        o.type;
                        var a = o.memoizedProps;
                        o.stateNode;
                        !function (e, t, n, r, o) {
                            !0 !== t.suppressHydrationWarning && ci(r, o);
                        }(0, a, 0, t, n);
                }
            }
            return r;
        }

        function _h(e) {
            var t = e.memoizedState, n = null !== t ? t.dehydrated : null;
            if (!n) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
            return function (e) {
                for (var t = e.nextSibling, n = 0; t;) {
                    if (8 === t.nodeType) {
                        var r = t.data;
                        if ("/$" === r) {
                            if (0 === n) return ts(t);
                            n--;
                        } else "$" !== r && r !== ji && r !== Ai || n++;
                    }
                    t = t.nextSibling;
                }
                return null;
            }(n);
        }

        function Th(e) {
            for (var t = e.return; null !== t && 5 !== t.tag && 3 !== t.tag && t.tag !== R;) t = t.return;
            vh = t;
        }

        function Ch(e) {
            if (e !== vh) return !1;
            if (!bh) return Th(e), bh = !0, !1;
            var t = e.type;
            if (5 !== e.tag || "head" !== t && "body" !== t && !Wi(t, e.memoizedProps)) for (var n = yh; n;) wh(e, n), n = ts(n);
            return Th(e), yh = e.tag === R ? _h(e) : vh ? ts(e.stateNode) : null, !0;
        }

        function Rh() {
            vh = null, yh = null, bh = !1;
        }

        var Ph, Nh, Oh, Ih, $h, Dh, Mh, Ah, jh = a.ReactCurrentOwner, Fh = !1;

        function Lh(e, t, n, r) {
            t.child = null === e ? Od(t, null, n, r) : Nd(t, e.child, n, r);
        }

        function zh(e, t, n, o, a) {
            if (t.type !== t.elementType) {
                var i = n.propTypes;
                i && r(i, o, "prop", qe(n), Ze);
            }
            var s, l = n.render, u = t.ref;
            return $f(t, a), jh.current = t, nt(!0), s = gp(e, t, l, o, u, a), 1 & t.mode && null !== t.memoizedState && (s = gp(e, t, l, o, u, a)), nt(!1), null === e || Fh ? (t.effectTag |= 1, Lh(e, t, s, a), t.child) : (vp(e, t, a), um(e, t, a));
        }

        function Uh(e, t, n, o, a, i) {
            if (null === e) {
                var s = n.type;
                if (function (e) {
                    return "function" == typeof e && !Wv(e) && void 0 === e.defaultProps;
                }(s) && null === n.compare && void 0 === n.defaultProps) {
                    var l;
                    return l = uf(s), t.tag = N, t.type = l, Xh(t, s), Bh(e, t, l, o, a, i);
                }
                var u = s.propTypes;
                u && r(u, o, "prop", qe(s), Ze);
                var c = qv(n.type, null, o, null, t.mode, i);
                return c.ref = t.ref, c.return = t, t.child = c, c;
            }
            var f = n.type, d = f.propTypes;
            d && r(d, o, "prop", qe(f), Ze);
            var p = e.child;
            if (a < i) {
                var h = p.memoizedProps, m = n.compare;
                if ((m = null !== m ? m : Dl)(h, o) && e.ref === t.ref) return um(e, t, i);
            }
            t.effectTag |= 1;
            var g = Vv(p, o);
            return g.ref = t.ref, g.return = t, t.child = g, g;
        }

        function Bh(e, t, n, o, a, i) {
            if (t.type !== t.elementType) {
                var s = t.elementType;
                s.$$typeof === Ue && (s = He(s));
                var l = s && s.propTypes;
                l && r(l, o, "prop", qe(s), Ze);
            }
            if (null !== e && (Dl(e.memoizedProps, o) && e.ref === t.ref && t.type === e.type && (Fh = !1, a < i))) return t.expirationTime = e.expirationTime, um(e, t, i);
            return Vh(e, t, n, o, i);
        }

        function Wh(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= Dr);
        }

        function Vh(e, t, n, o, a) {
            if (t.type !== t.elementType) {
                var i = n.propTypes;
                i && r(i, o, "prop", qe(n), Ze);
            }
            var s, l;
            return s = Ju(t, Ku(0, n, !0)), $f(t, a), jh.current = t, nt(!0), l = gp(e, t, n, o, s, a), 1 & t.mode && null !== t.memoizedState && (l = gp(e, t, n, o, s, a)), nt(!1), null === e || Fh ? (t.effectTag |= 1, Lh(e, t, l, a), t.child) : (vp(e, t, a), um(e, t, a));
        }

        function Hh(e, t, n, o, a) {
            if (t.type !== t.elementType) {
                var i = n.propTypes;
                i && r(i, o, "prop", qe(n), Ze);
            }
            var l, u;
            Zu(n) ? (l = !0, oc(t)) : l = !1, $f(t, a), null === t.stateNode ? (null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), kd(t, n, o), xd(t, n, o, a), u = !0) : u = null === e ? function (e, t, n, r) {
                var o = e.stateNode, a = e.memoizedProps;
                o.props = a;
                var i = o.context, s = t.contextType, l = Hu;
                l = "object" == typeof s && null !== s ? Df(s) : Ju(e, Ku(0, t, !0));
                var u = t.getDerivedStateFromProps,
                    c = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
                c || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || a === n && i === l || Ed(e, o, n, l), Yf();
                var f = e.memoizedState, d = o.state = f;
                if (Hf(e, n, o, r), d = e.memoizedState, a === n && f === d && !Gu() && !Qf()) return "function" == typeof o.componentDidMount && (e.effectTag |= 4), !1;
                "function" == typeof u && (dd(e, t, u, n), d = e.memoizedState);
                var p = Qf() || bd(e, t, a, n, f, d, l);
                return p ? (c || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (Ru(e, "componentWillMount"), "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), Pu()), "function" == typeof o.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (e.effectTag |= 4), e.memoizedProps = n, e.memoizedState = d), o.props = n, o.state = d, o.context = l, p;
            }(t, n, o, a) : function (e, t, n, r, o) {
                var a = t.stateNode;
                zf(e, t);
                var i = t.memoizedProps;
                a.props = t.type === t.elementType ? i : bf(t.type, i);
                var s = a.context, l = n.contextType, u = Hu;
                u = "object" == typeof l && null !== l ? Df(l) : Ju(t, Ku(0, n, !0));
                var c = n.getDerivedStateFromProps,
                    f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
                f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || i === r && s === u || Ed(t, a, r, u), Yf();
                var d = t.memoizedState, p = a.state = d;
                if (Hf(t, r, a, o), p = t.memoizedState, i === r && d === p && !Gu() && !Qf()) return "function" == typeof a.componentDidUpdate && (i === e.memoizedProps && d === e.memoizedState || (t.effectTag |= 4)), "function" == typeof a.getSnapshotBeforeUpdate && (i === e.memoizedProps && d === e.memoizedState || (t.effectTag |= Mr)), !1;
                "function" == typeof c && (dd(t, n, c, r), p = t.memoizedState);
                var h = Qf() || bd(t, n, i, r, d, p, u);
                return h ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || (Ru(t, "componentWillUpdate"), "function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u), Pu()), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= Mr)) : ("function" == typeof a.componentDidUpdate && (i === e.memoizedProps && d === e.memoizedState || (t.effectTag |= 4)), "function" == typeof a.getSnapshotBeforeUpdate && (i === e.memoizedProps && d === e.memoizedState || (t.effectTag |= Mr)), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = u, h;
            }(e, t, n, o, a);
            var c = qh(e, t, n, u, l, a);
            return t.stateNode.props !== o && (Dh || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t.type) || "a component"), Dh = !0), c;
        }

        function qh(e, t, n, r, o, a) {
            Wh(e, t);
            var i = 0 != (t.effectTag & $r);
            if (!r && !i) return o && ac(t, n, !1), um(e, t, a);
            var s, l = t.stateNode;
            return jh.current = t, i && "function" != typeof n.getDerivedStateFromError ? (s = null, mh()) : (nt(!0), s = l.render(), 1 & t.mode && l.render(), nt(!1)), t.effectTag |= 1, null !== e && i ? function (e, t, n, r) {
                t.child = Nd(t, e.child, null, r), t.child = Nd(t, null, n, r);
            }(e, t, s, a) : Lh(e, t, s, a), t.memoizedState = l.state, o && ac(t, n, !0), t.child;
        }

        function Yh(e) {
            var t = e.stateNode;
            t.pendingContext ? nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nc(e, t.context, !1), Ld(e, t.containerInfo);
        }

        function Qh(e, t, n) {
            Yh(t);
            var r = t.updateQueue;
            if (null === e || null === r) throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
            var o = t.pendingProps, a = t.memoizedState, i = null !== a ? a.element : null;
            zf(e, t), Hf(t, o, null, n);
            var s, l, u = t.memoizedState.element;
            if (u === i) return Rh(), um(e, t, n);
            if (t.stateNode.hydrate && (l = (s = t).stateNode.containerInfo, yh = ns(l), vh = s, bh = !0, 1)) {
                var c = Od(t, null, u, n);
                t.child = c;
                for (var f = c; f;) f.effectTag = -3 & f.effectTag | jr, f = f.sibling;
            } else Lh(e, t, u, n), Rh();
            return t.child;
        }

        function Kh(e, t, n, o, a) {
            null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2);
            var i = t.pendingProps;
            _u(t);
            var s = wf(n);
            t.type = s;
            var l = t.tag = function (e) {
                if ("function" == typeof e) return Wv(e) ? 1 : 0;
                if (null != e) {
                    var t = e.$$typeof;
                    if (t === je) return T;
                    if (t === ze) return P;
                }
                return 2;
            }(s);
            Su(t);
            var u = bf(s, i);
            switch (l) {
                case 0:
                    return Xh(t, s), t.type = s = uf(s), Vh(null, t, s, u, a);
                case 1:
                    return t.type = s = cf(s), Hh(null, t, s, u, a);
                case T:
                    return t.type = s = ff(s), zh(null, t, s, u, a);
                case P:
                    if (t.type !== t.elementType) {
                        var c = s.propTypes;
                        c && r(c, u, "prop", qe(s), Ze);
                    }
                    return Uh(null, t, s, bf(s.type, u), o, a);
            }
            var f = "";
            throw null !== s && "object" == typeof s && s.$$typeof === Ue && (f = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + s + ". Lazy element type must resolve to a class or function." + f);
        }

        function Xh(e, t) {
            if (t && t.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), null !== e.ref) {
                var n = "", r = Ge();
                r && (n += "\n\nCheck the render method of `" + r + "`.");
                var o = r || e._debugID || "", a = e._debugSource;
                a && (o = a.fileName + ":" + a.lineNumber), $h[ o ] || ($h[ o ] = !0, s("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
            }
            if ("function" == typeof t.getDerivedStateFromProps) {
                var i = qe(t) || "Unknown";
                Ih[ i ] || (s("%s: Function components do not support getDerivedStateFromProps.", i), Ih[ i ] = !0);
            }
            if ("object" == typeof t.contextType && null !== t.contextType) {
                var l = qe(t) || "Unknown";
                Oh[ l ] || (s("%s: Function components do not support contextType.", l), Oh[ l ] = !0);
            }
        }

        Ph = {}, Nh = {}, Oh = {}, Ih = {}, $h = {}, Dh = !1, Mh = {}, Ah = {};
        var Jh = { dehydrated: null, retryTime: 0 };

        function Gh(e, t, n) {
            var r = t.mode, o = t.pendingProps;
            uy(t) && (t.effectTag |= $r);
            var a = Vd.current, i = !1;
            if (0 != (t.effectTag & $r) || function (e, t, n) {
                return Hd(e, 2) && (null === t || null !== t.memoizedState);
            }(a, e) ? (i = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 !== o.fallback && !0 !== o.unstable_avoidThisFallback && (a = a | 1), Qd(t, a = qd(a)), null === e) {
                if (void 0 !== o.fallback && xh(t), i) {
                    var s = o.fallback, l = Qv(null, r, 0, null);
                    if (l.return = t, 0 == (2 & t.mode)) {
                        var u = null !== t.memoizedState ? t.child.child : t.child;
                        l.child = u;
                        for (var c = u; null !== c;) c.return = l, c = c.sibling;
                    }
                    var f = Qv(s, r, n, null);
                    return f.return = t, l.sibling = f, t.memoizedState = Jh, t.child = l, f;
                }
                var d = o.children;
                return t.memoizedState = null, t.child = Od(t, null, d, n);
            }
            if (null !== e.memoizedState) {
                var p = e.child, h = p.sibling;
                if (i) {
                    var m = o.fallback, g = Vv(p, p.pendingProps);
                    if (g.return = t, 0 == (2 & t.mode)) {
                        var v = null !== t.memoizedState ? t.child.child : t.child;
                        if (v !== p.child) {
                            g.child = v;
                            for (var y = v; null !== y;) y.return = g, y = y.sibling;
                        }
                    }
                    if (8 & t.mode) {
                        for (var b = 0, w = g.child; null !== w;) b += w.treeBaseDuration, w = w.sibling;
                        g.treeBaseDuration = b;
                    }
                    var k = Vv(h, m);
                    return k.return = t, g.sibling = k, g.childExpirationTime = 0, t.memoizedState = Jh, t.child = g, k;
                }
                var E = o.children, x = p.child, S = Nd(t, x, E, n);
                return t.memoizedState = null, t.child = S;
            }
            var _ = e.child;
            if (i) {
                var T = o.fallback, C = Qv(null, r, 0, null);
                if (C.return = t, C.child = _, null !== _ && (_.return = C), 0 == (2 & t.mode)) {
                    var R = null !== t.memoizedState ? t.child.child : t.child;
                    C.child = R;
                    for (var P = R; null !== P;) P.return = C, P = P.sibling;
                }
                if (8 & t.mode) {
                    for (var N = 0, O = C.child; null !== O;) N += O.treeBaseDuration, O = O.sibling;
                    C.treeBaseDuration = N;
                }
                var I = Qv(T, r, n, null);
                return I.return = t, C.sibling = I, I.effectTag |= 2, C.childExpirationTime = 0, t.memoizedState = Jh, t.child = C, I;
            }
            t.memoizedState = null;
            var $ = o.children;
            return t.child = Nd(t, _, $, n);
        }

        function Zh(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var n = e.alternate;
            null !== n && n.expirationTime < t && (n.expirationTime = t), If(e.return, t);
        }

        function em(e, t) {
            var n = Array.isArray(e), r = !n && "function" == typeof Ve(e);
            if (n || r) {
                var o = n ? "array" : "iterable";
                return s("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
            }
            return !0;
        }

        function tm(e, t, n, r, o, a) {
            var i = e.memoizedState;
            null === i ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailExpiration: 0,
                tailMode: o,
                lastEffect: a
            } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailExpiration = 0, i.tailMode = o, i.lastEffect = a);
        }

        function nm(e, t, n) {
            var r = t.pendingProps, o = r.revealOrder, a = r.tail, i = r.children;
            !function (e) {
                if (void 0 !== e && "forwards" !== e && "backwards" !== e && "together" !== e && !Mh[ e ]) if (Mh[ e ] = !0, "string" == typeof e) switch (e.toLowerCase()) {
                    case"together":
                    case"forwards":
                    case"backwards":
                        s("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.", e, e.toLowerCase());
                        break;
                    case"forward":
                    case"backward":
                        s("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.", e, e.toLowerCase());
                        break;
                    default:
                        s("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?", e);
                } else s("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?", e);
            }(o), function (e, t) {
                void 0 === e || Ah[ e ] || ("collapsed" !== e && "hidden" !== e ? (Ah[ e ] = !0, s("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"collapsed\" or \"hidden\"?", e)) : "forwards" !== t && "backwards" !== t && (Ah[ e ] = !0, s("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?", e)));
            }(a, o), function (e, t) {
                if (("forwards" === t || "backwards" === t) && null != e && !1 !== e) if (Array.isArray(e)) {
                    for (var n = 0; n < e.length; n++) if (!em(e[ n ], n)) return;
                } else {
                    var r = Ve(e);
                    if ("function" == typeof r) {
                        var o = r.call(e);
                        if (o) for (var a = o.next(), i = 0; !a.done; a = o.next()) {
                            if (!em(a.value, i)) return;
                            i++;
                        }
                    } else s("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?", t);
                }
            }(i, o), Lh(e, t, i, n);
            var l = Vd.current;
            Hd(l, 2) ? (l = Yd(l, 2), t.effectTag |= $r) : (null !== e && 0 != (e.effectTag & $r) && function (e, t, n) {
                for (var r = t; null !== r;) {
                    if (r.tag === R) null !== r.memoizedState && Zh(r, n); else if (r.tag === I) Zh(r, n); else if (null !== r.child) {
                        r.child.return = r, r = r.child;
                        continue;
                    }
                    if (r === e) return;
                    for (; null === r.sibling;) {
                        if (null === r.return || r.return === e) return;
                        r = r.return;
                    }
                    r.sibling.return = r.return, r = r.sibling;
                }
            }(t, t.child, n), l = qd(l));
            if (Qd(t, l), 0 == (2 & t.mode)) t.memoizedState = null; else switch (o) {
                case"forwards":
                    var u, c = function (e) {
                        for (var t = e, n = null; null !== t;) {
                            var r = t.alternate;
                            null !== r && null === Jd(r) && (n = t), t = t.sibling;
                        }
                        return n;
                    }(t.child);
                    null === c ? (u = t.child, t.child = null) : (u = c.sibling, c.sibling = null), tm(t, !1, u, c, a, t.lastEffect);
                    break;
                case"backwards":
                    var f = null, d = t.child;
                    for (t.child = null; null !== d;) {
                        var p = d.alternate;
                        if (null !== p && null === Jd(p)) {
                            t.child = d;
                            break;
                        }
                        var h = d.sibling;
                        d.sibling = f, f = d, d = h;
                    }
                    tm(t, !0, f, null, a, t.lastEffect);
                    break;
                case"together":
                    tm(t, !1, null, null, void 0, t.lastEffect);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }

        function rm(e, t, n) {
            var o = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, u = t.type.propTypes;
            if (u && r(u, a, "prop", "Context.Provider", Ze), Nf(t, l), null !== i) {
                var c = function (e, t, n) {
                    if (Il(n, t)) return 0;
                    var r = "function" == typeof e._calculateChangedBits ? e._calculateChangedBits(n, t) : Fc;
                    return (r & Fc) !== r && s("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", r), 0 | r;
                }(o, l, i.value);
                if (0 === c) {
                    if (i.children === a.children && !Gu()) return um(e, t, n);
                } else !function (e, t, n, r) {
                    var o = e.child;
                    for (null !== o && (o.return = e); null !== o;) {
                        var a = void 0, i = o.dependencies;
                        if (null !== i) {
                            a = o.child;
                            for (var s = i.firstContext; null !== s;) {
                                if (s.context === t && 0 != (s.observedBits & n)) {
                                    if (1 === o.tag) {
                                        var l = Uf(r, null);
                                        l.tag = jf, Bf(o, l);
                                    }
                                    o.expirationTime < r && (o.expirationTime = r);
                                    var u = o.alternate;
                                    null !== u && u.expirationTime < r && (u.expirationTime = r), If(o.return, r), i.expirationTime < r && (i.expirationTime = r);
                                    break;
                                }
                                s = s.next;
                            }
                        } else a = o.tag === _ && o.type === e.type ? null : o.child;
                        if (null !== a) a.return = o; else for (a = o; null !== a;) {
                            if (a === e) {
                                a = null;
                                break;
                            }
                            var c = a.sibling;
                            if (null !== c) {
                                c.return = a.return, a = c;
                                break;
                            }
                            a = a.return;
                        }
                        o = a;
                    }
                }(t, o, c, n);
            }
            return Lh(e, t, a.children, n), t.child;
        }

        var om, am, im, sm = !1;

        function lm() {
            Fh = !0;
        }

        function um(e, t, n) {
            _u(t), null !== e && (t.dependencies = e.dependencies), mh();
            var r = t.expirationTime;
            return 0 !== r && Hg(r), t.childExpirationTime < n ? null : (function (e, t) {
                if (null !== e && t.child !== e.child) throw Error("Resuming work not yet implemented.");
                if (null !== t.child) {
                    var n = t.child, r = Vv(n, n.pendingProps);
                    for (t.child = r, r.return = t; null !== n.sibling;) n = n.sibling, (r = r.sibling = Vv(n, n.pendingProps)).return = t;
                    r.sibling = null;
                }
            }(e, t), t.child);
        }

        function cm(e, t, n) {
            var o = t.expirationTime;
            if (t._debugNeedsRemount && null !== e) return function (e, t, n) {
                var r = t.return;
                if (null === r) throw new Error("Cannot swap the root fiber.");
                if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === r.child) r.child = n; else {
                    var o = r.child;
                    if (null === o) throw new Error("Expected parent to have a child.");
                    for (; o.sibling !== t;) if (null === (o = o.sibling)) throw new Error("Expected to find the previous sibling.");
                    o.sibling = n;
                }
                var a = r.lastEffect;
                return null !== a ? (a.nextEffect = e, r.lastEffect = e) : r.firstEffect = r.lastEffect = e, e.nextEffect = null, e.effectTag = 8, n.effectTag |= 2, n;
            }(e, t, qv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.expirationTime));
            if (null !== e) {
                var a = e.memoizedProps, i = t.pendingProps;
                if (a !== i || Gu() || t.type !== e.type) Fh = !0; else {
                    if (o < n) {
                        switch (Fh = !1, t.tag) {
                            case 3:
                                Yh(t), Rh();
                                break;
                            case 5:
                                if (Bd(t), 4 & t.mode && 1 !== n && Vi(t.type, i)) return xv(1), t.expirationTime = t.childExpirationTime = 1, null;
                                break;
                            case 1:
                                Zu(t.type) && oc(t);
                                break;
                            case 4:
                                Ld(t, t.stateNode.containerInfo);
                                break;
                            case _:
                                Nf(t, t.memoizedProps.value);
                                break;
                            case C:
                                t.childExpirationTime >= n && (t.effectTag |= 4);
                                break;
                            case R:
                                if (null !== t.memoizedState) {
                                    var l = t.child.childExpirationTime;
                                    if (0 !== l && l >= n) return Gh(e, t, n);
                                    Qd(t, qd(Vd.current));
                                    var u = um(e, t, n);
                                    return null !== u ? u.sibling : null;
                                }
                                Qd(t, qd(Vd.current));
                                break;
                            case I:
                                var c = 0 != (e.effectTag & $r), f = t.childExpirationTime >= n;
                                if (c) {
                                    if (f) return nm(e, t, n);
                                    t.effectTag |= $r;
                                }
                                var d = t.memoizedState;
                                if (null !== d && (d.rendering = null, d.tail = null), Qd(t, Vd.current), f) break;
                                return null;
                        }
                        return um(e, t, n);
                    }
                    Fh = !1;
                }
            } else Fh = !1;
            switch (t.expirationTime = 0, t.tag) {
                case 2:
                    return function (e, t, n, r) {
                        null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2);
                        var o, a, i = t.pendingProps;
                        if (o = Ju(t, Ku(0, n, !1)), $f(t, r), n.prototype && "function" == typeof n.prototype.render) {
                            var l = qe(n) || "Unknown";
                            Ph[ l ] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), Ph[ l ] = !0);
                        }
                        if (1 & t.mode && Qc.recordLegacyContextWarning(t, null), nt(!0), jh.current = t, a = gp(null, t, n, i, o, r), nt(!1), t.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                            var u = qe(n) || "Unknown";
                            Nh[ u ] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", u, u, u), Nh[ u ] = !0), t.tag = 1, t.memoizedState = null, t.updateQueue = null;
                            var c = !1;
                            Zu(n) ? (c = !0, oc(t)) : c = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Lf(t);
                            var f = n.getDerivedStateFromProps;
                            return "function" == typeof f && dd(t, n, f, i), wd(t, a), xd(t, n, i, r), qh(null, t, n, !0, c, r);
                        }
                        return t.tag = 0, 1 & t.mode && null !== t.memoizedState && (a = gp(null, t, n, i, o, r)), Lh(null, t, a, r), Xh(t, n), t.child;
                    }(e, t, t.type, n);
                case 16:
                    return Kh(e, t, t.elementType, o, n);
                case 0:
                    var p = t.type, h = t.pendingProps;
                    return Vh(e, t, p, t.elementType === p ? h : bf(p, h), n);
                case 1:
                    var m = t.type, g = t.pendingProps;
                    return Hh(e, t, m, t.elementType === m ? g : bf(m, g), n);
                case 3:
                    return Qh(e, t, n);
                case 5:
                    return function (e, t, n) {
                        Bd(t), null === e && xh(t);
                        var r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, i = o.children;
                        return Wi(r, o) ? i = null : null !== a && Wi(r, a) && (t.effectTag |= 16), Wh(e, t), 4 & t.mode && 1 !== n && Vi(0, o) ? (xv(1), t.expirationTime = t.childExpirationTime = 1, null) : (Lh(e, t, i, n), t.child);
                    }(e, t, n);
                case 6:
                    return function (e, t) {
                        return null === e && xh(t), null;
                    }(e, t);
                case R:
                    return Gh(e, t, n);
                case 4:
                    return function (e, t, n) {
                        Ld(t, t.stateNode.containerInfo);
                        var r = t.pendingProps;
                        return null === e ? t.child = Nd(t, null, r, n) : Lh(e, t, r, n), t.child;
                    }(e, t, n);
                case T:
                    var v = t.type, y = t.pendingProps;
                    return zh(e, t, v, t.elementType === v ? y : bf(v, y), n);
                case 7:
                    return function (e, t, n) {
                        return Lh(e, t, t.pendingProps, n), t.child;
                    }(e, t, n);
                case 8:
                    return function (e, t, n) {
                        return Lh(e, t, t.pendingProps.children, n), t.child;
                    }(e, t, n);
                case C:
                    return function (e, t, n) {
                        return t.effectTag |= 4, Lh(e, t, t.pendingProps.children, n), t.child;
                    }(e, t, n);
                case _:
                    return rm(e, t, n);
                case 9:
                    return function (e, t, n) {
                        var r = t.type;
                        void 0 === r._context ? r !== r.Consumer && (sm || (sm = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
                        var o = t.pendingProps, a = o.children;
                        "function" != typeof a && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), $f(t, n);
                        var i, l = Df(r, o.unstable_observedBits);
                        return jh.current = t, nt(!0), i = a(l), nt(!1), t.effectTag |= 1, Lh(e, t, i, n), t.child;
                    }(e, t, n);
                case P:
                    var b = t.type, w = bf(b, t.pendingProps);
                    if (t.type !== t.elementType) {
                        var k = b.propTypes;
                        k && r(k, w, "prop", qe(b), Ze);
                    }
                    return Uh(e, t, b, w = bf(b.type, w), o, n);
                case N:
                    return Bh(e, t, t.type, t.pendingProps, o, n);
                case O:
                    var E = t.type, x = t.pendingProps;
                    return function (e, t, n, r, o) {
                        var a;
                        return null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Zu(n) ? (a = !0, oc(t)) : a = !1, $f(t, o), kd(t, n, r), xd(t, n, r, o), qh(null, t, n, !0, a, o);
                    }(e, t, E, t.elementType === E ? x : bf(E, x), n);
                case I:
                    return nm(e, t, n);
            }
            throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
        }

        function fm(e) {
            e.effectTag |= 4;
        }

        function dm(e) {
            e.effectTag |= Dr;
        }

        function pm(e, t) {
            switch (e.tailMode) {
                case"hidden":
                    for (var n = e.tail, r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? e.tail = null : r.sibling = null;
                    break;
                case"collapsed":
                    for (var o = e.tail, a = null; null !== o;) null !== o.alternate && (a = o), o = o.sibling;
                    null === a ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : a.sibling = null;
            }
        }

        function hm(e, t, n) {
            var r = t.pendingProps;
            switch (t.tag) {
                case 2:
                case 16:
                case N:
                case 0:
                case T:
                case 7:
                case 8:
                case C:
                case 9:
                case P:
                    return null;
                case 1:
                    return Zu(t.type) && ec(t), null;
                case 3:
                    zd(t), tc(t);
                    var o = t.stateNode;
                    if (o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), null === e || null === e.child) Ch(t) && fm(t);
                    return null;
                case 5:
                    Wd(t);
                    var a = Fd(), i = t.type;
                    if (null !== e && null != t.stateNode) am(e, t, i, r, a), e.ref !== t.ref && dm(t); else {
                        if (!r) {
                            if (null === t.stateNode) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                            return null;
                        }
                        var s = Ud();
                        if (Ch(t)) (function (e, t, n) {
                            var r = rs(e.stateNode, e.type, e.memoizedProps, t, n, e);
                            return e.updateQueue = r, null !== r;
                        })(t, a, s) && fm(t); else {
                            var l = Bi(i, r, a, s, t);
                            om(l, t), t.stateNode = l, function (e, t, n, r, o) {
                                return si(e, t, n, r), zi(t, n);
                            }(l, i, r, a) && fm(t);
                        }
                        null !== t.ref && dm(t);
                    }
                    return null;
                case 6:
                    var u = r;
                    if (e && null != t.stateNode) {
                        var c = e.memoizedProps;
                        im(0, t, c, u);
                    } else {
                        if ("string" != typeof u && null === t.stateNode) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                        var f = Fd(), d = Ud();
                        Ch(t) ? Sh(t) && fm(t) : t.stateNode = Hi(u, f, d, t);
                    }
                    return null;
                case R:
                    Kd(t);
                    var p = t.memoizedState;
                    if (0 != (t.effectTag & $r)) return t.expirationTime = n, t;
                    var h = null !== p, m = !1;
                    if (null === e) void 0 !== t.memoizedProps.fallback && Ch(t); else {
                        var g = e.memoizedState;
                        if (m = null !== g, !h && null !== g) {
                            var v = e.child.sibling;
                            if (null !== v) {
                                var y = t.firstEffect;
                                null !== y ? (t.firstEffect = v, v.nextEffect = y) : (t.firstEffect = t.lastEffect = v, v.nextEffect = null), v.effectTag = 8;
                            }
                        }
                    }
                    if (h && !m) if (0 != (2 & t.mode)) null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || Hd(Vd.current, 1) ? 0 === og && (og = 3) : function () {
                        0 !== og && 3 !== og || (og = 4);
                        0 !== ug && null !== tg && (ty(tg, rg), ny(tg, ug));
                    }();
                    return (h || m) && (t.effectTag |= 4), null;
                case 4:
                    return zd(t), null;
                case _:
                    return Of(t), null;
                case O:
                    return Zu(t.type) && ec(t), null;
                case I:
                    Kd(t);
                    var b = t.memoizedState;
                    if (null === b) return null;
                    var w = 0 != (t.effectTag & $r), k = b.rendering;
                    if (null === k) {
                        if (w) pm(b, !1); else if (!(0 === og && (null === e || 0 == (e.effectTag & $r)))) for (var E = t.child; null !== E;) {
                            var x = Jd(E);
                            if (null !== x) {
                                w = !0, t.effectTag |= $r, pm(b, !1);
                                var S = x.updateQueue;
                                return null !== S && (t.updateQueue = S, t.effectTag |= 4), null === b.lastEffect && (t.firstEffect = null), t.lastEffect = b.lastEffect, Id(t, n), Qd(t, Yd(Vd.current, 2)), t.child;
                            }
                            E = E.sibling;
                        }
                    } else {
                        if (!w) {
                            var $ = Jd(k);
                            if (null !== $) {
                                t.effectTag |= $r, w = !0;
                                var D = $.updateQueue;
                                if (null !== D && (t.updateQueue = D, t.effectTag |= 4), pm(b, !0), null === b.tail && "hidden" === b.tailMode && !k.alternate) {
                                    var M = t.lastEffect = b.lastEffect;
                                    return null !== M && (M.nextEffect = null), null;
                                }
                            } else if (2 * Nc() - b.renderingStartTime > b.tailExpiration && n > 1) {
                                t.effectTag |= $r, w = !0, pm(b, !1);
                                var A = n - 1;
                                t.expirationTime = t.childExpirationTime = A, xv(A);
                            }
                        }
                        if (b.isBackwards) k.sibling = t.child, t.child = k; else {
                            var j = b.last;
                            null !== j ? j.sibling = k : t.child = k, b.last = k;
                        }
                    }
                    if (null !== b.tail) {
                        if (0 === b.tailExpiration) {
                            b.tailExpiration = Nc() + 500;
                        }
                        var F = b.tail;
                        b.rendering = F, b.tail = F.sibling, b.lastEffect = t.lastEffect, b.renderingStartTime = Nc(), F.sibling = null;
                        var L = Vd.current;
                        return Qd(t, L = w ? Yd(L, 2) : qd(L)), F;
                    }
                    return null;
            }
            throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
        }

        function mm(e, t) {
            switch (e.tag) {
                case 1:
                    Zu(e.type) && ec(e);
                    var n = e.effectTag;
                    return n & Lr ? (e.effectTag = -4097 & n | $r, e) : null;
                case 3:
                    zd(e), tc(e);
                    var r = e.effectTag;
                    if (0 != (r & $r)) throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
                    return e.effectTag = -4097 & r | $r, e;
                case 5:
                    return Wd(e), null;
                case R:
                    Kd(e);
                    var o = e.effectTag;
                    return o & Lr ? (e.effectTag = -4097 & o | $r, e) : null;
                case I:
                    return Kd(e), null;
                case 4:
                    return zd(e), null;
                case _:
                    return Of(e), null;
                default:
                    return null;
            }
        }

        function gm(e) {
            switch (e.tag) {
                case 1:
                    var t = e.type.childContextTypes;
                    null != t && ec(e);
                    break;
                case 3:
                    zd(e), tc(e);
                    break;
                case 5:
                    Wd(e);
                    break;
                case 4:
                    zd(e);
                    break;
                case R:
                case I:
                    Kd(e);
                    break;
                case _:
                    Of(e);
            }
        }

        function vm(e, t) {
            return { value: e, source: t, stack: Ke(t) };
        }

        om = function (e, t, n, r) {
            for (var o, a, i = t.child; null !== i;) {
                if (5 === i.tag || 6 === i.tag) o = e, a = i.stateNode, o.appendChild(a); else if (4 === i.tag) ; else if (null !== i.child) {
                    i.child.return = i, i = i.child;
                    continue;
                }
                if (i === t) return;
                for (; null === i.sibling;) {
                    if (null === i.return || i.return === t) return;
                    i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
            }
        }, am = function (e, t, n, r, o) {
            var a = e.memoizedProps;
            if (a !== r) {
                var i = function (e, t, n, r, o, a) {
                    var i = a;
                    if (typeof r.children != typeof n.children && ("string" == typeof r.children || "number" == typeof r.children)) {
                        var s = "" + r.children, l = Pi(i.ancestorInfo, t);
                        Ri(null, s, l);
                    }
                    return li(e, t, n, r, o);
                }(t.stateNode, n, a, r, o, Ud());
                t.updateQueue = i, i && fm(t);
            }
        }, im = function (e, t, n, r) {
            n !== r && fm(t);
        };
        var ym;
        ym = new Set;
        var bm = "function" == typeof WeakSet ? WeakSet : Set;

        function wm(e, t) {
            var n = t.source, r = t.stack;
            null === r && null !== n && (r = Ke(n));
            var o = {
                componentName: null !== n ? qe(n.type) : null,
                componentStack: null !== r ? r : "",
                error: t.value,
                errorBoundary: null,
                errorBoundaryName: null,
                errorBoundaryFound: !1,
                willRetry: !1
            };
            null !== e && 1 === e.tag && (o.errorBoundary = e.stateNode, o.errorBoundaryName = qe(e.type), o.errorBoundaryFound = !0, o.willRetry = !0);
            try {
                !function (e) {
                    var t = e.error, n = e.componentName, r = e.componentStack, o = e.errorBoundaryName,
                        a = e.errorBoundaryFound, i = e.willRetry;
                    if (null != t && t._suppressLogging) {
                        if (a && i) return;
                        console.error(t);
                    }
                    var s = (n ? "The above error occurred in the <" + n + "> component:" : "The above error occurred in one of your React components:") + r + "\n\n" + (a && o ? i ? "React will try to recreate this component tree from scratch using the error boundary you provided, " + o + "." : "This error was initially handled by the error boundary " + o + ".\nRecreating the tree from scratch failed so React will unmount the tree." : "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://fb.me/react-error-boundaries to learn more about error boundaries.");
                    console.error(s);
                }(o);
            } catch (e) {
                setTimeout((function () {
                    throw e;
                }));
            }
        }

        var km = function (e, t) {
            Ru(e, "componentWillUnmount"), t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount(), Pu();
        };

        function Em(e) {
            var t = e.ref;
            null !== t && ("function" == typeof t ? (v(null, t, null, null), y() && lv(e, b())) : t.current = null);
        }

        function xm(e, t) {
            (v(null, t, null), y()) && lv(e, b());
        }

        function Sm(e, t) {
            switch (t.tag) {
                case 0:
                case T:
                case N:
                case $:
                case 3:
                case 5:
                case 6:
                case 4:
                case O:
                    return;
                case 1:
                    if (t.effectTag & Mr && null !== e) {
                        var n = e.memoizedProps, r = e.memoizedState;
                        Ru(t, "getSnapshotBeforeUpdate");
                        var o = t.stateNode;
                        t.type !== t.elementType || Dh || (o.props !== t.memoizedProps && s("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(t.type) || "instance"), o.state !== t.memoizedState && s("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(t.type) || "instance"));
                        var a = o.getSnapshotBeforeUpdate(t.elementType === t.type ? n : bf(t.type, n), r), i = ym;
                        void 0 !== a || i.has(t.type) || (i.add(t.type), s("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(t.type))), o.__reactInternalSnapshotBeforeUpdate = a, Pu();
                    }
                    return;
            }
            throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }

        function _m(e, t) {
            var n = t.updateQueue, r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var o = r.next, a = o;
                do {
                    if ((a.tag & e) === e) {
                        var i = a.destroy;
                        a.destroy = void 0, void 0 !== i && i();
                    }
                    a = a.next;
                } while (a !== o);
            }
        }

        function Tm(e, t) {
            var n = t.updateQueue, r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var o = r.next, a = o;
                do {
                    if ((a.tag & e) === e) {
                        var i = a.create;
                        a.destroy = i();
                        var l = a.destroy;
                        if (void 0 !== l && "function" != typeof l) {
                            s("An effect function must not return anything besides a function, which is used for clean-up.%s%s", null === l ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : "function" == typeof l.then ? "\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching" : " You returned: " + l, Ke(t));
                        }
                    }
                    a = a.next;
                } while (a !== o);
            }
        }

        function Cm(e) {
            if (0 != (e.effectTag & Ar)) switch (e.tag) {
                case 0:
                case T:
                case N:
                case $:
                    _m(5, e), Tm(5, e);
            }
        }

        function Rm(e, t, n, r) {
            switch (n.tag) {
                case 0:
                case T:
                case N:
                case $:
                    return void Tm(3, n);
                case 1:
                    var o = n.stateNode;
                    if (4 & n.effectTag) if (null === t) Ru(n, "componentDidMount"), n.type !== n.elementType || Dh || (o.props !== n.memoizedProps && s("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance"), o.state !== n.memoizedState && s("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance")), o.componentDidMount(), Pu(); else {
                        var a = n.elementType === n.type ? t.memoizedProps : bf(n.type, t.memoizedProps),
                            i = t.memoizedState;
                        Ru(n, "componentDidUpdate"), n.type !== n.elementType || Dh || (o.props !== n.memoizedProps && s("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance"), o.state !== n.memoizedState && s("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance")), o.componentDidUpdate(a, i, o.__reactInternalSnapshotBeforeUpdate), Pu();
                    }
                    var l = n.updateQueue;
                    return void (null !== l && (n.type !== n.elementType || Dh || (o.props !== n.memoizedProps && s("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance"), o.state !== n.memoizedState && s("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(n.type) || "instance")), Kf(0, l, o)));
                case 3:
                    var u = n.updateQueue;
                    if (null !== u) {
                        var c = null;
                        if (null !== n.child) switch (n.child.tag) {
                            case 5:
                            case 1:
                                c = n.child.stateNode;
                        }
                        Kf(0, u, c);
                    }
                    return;
                case 5:
                    var f = n.stateNode;
                    if (null === t && 4 & n.effectTag) !function (e, t, n, r) {
                        zi(t, n) && e.focus();
                    }(f, n.type, n.memoizedProps);
                    return;
                case 6:
                case 4:
                case I:
                case O:
                case 20:
                case 21:
                    return;
                case C:
                    var d = n.memoizedProps.onRender;
                    return void ("function" == typeof d && d(n.memoizedProps.id, null === t ? "mount" : "update", n.actualDuration, n.treeBaseDuration, n.actualStartTime, fh, e.memoizedInteractions));
                case R:
                    return void function (e, t) {
                        if (null === t.memoizedState) {
                            var n = t.alternate;
                            if (null !== n) {
                                var r = n.memoizedState;
                                if (null !== r) {
                                    var o = r.dehydrated;
                                    null !== o && function (e) {
                                        Io(e);
                                    }(o);
                                }
                            }
                        }
                    }(0, n);
            }
            throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }

        function Pm(e) {
            var t = e.ref;
            if (null !== t) {
                var n, r = e.stateNode;
                e.tag, n = r, "function" == typeof t ? t(n) : (t.hasOwnProperty("current") || s("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s", qe(e.type), Ke(e)), t.current = n);
            }
        }

        function Nm(e) {
            var t = e.ref;
            null !== t && ("function" == typeof t ? t(null) : t.current = null);
        }

        function Om(e, t, n) {
            var r;
            switch (r = t, "function" == typeof Ov && Ov(r), t.tag) {
                case 0:
                case T:
                case P:
                case N:
                case $:
                    var o = t.updateQueue;
                    if (null !== o) {
                        var a = o.lastEffect;
                        if (null !== a) {
                            var i = a.next;
                            $c(n > Ec ? Ec : n, (function () {
                                var e = i;
                                do {
                                    var n = e.destroy;
                                    void 0 !== n && xm(t, n), e = e.next;
                                } while (e !== i);
                            }));
                        }
                    }
                    return;
                case 1:
                    Em(t);
                    var s = t.stateNode;
                    return void ("function" == typeof s.componentWillUnmount && function (e, t) {
                        v(null, km, null, e, t), y() && lv(e, b());
                    }(t, s));
                case 5:
                    return void Em(t);
                case 4:
                    return void Fm(e, t, n);
                case 20:
                case 18:
                case 21:
                    return;
            }
        }

        function Im(e, t, n) {
            for (var r = t; ;) if (Om(e, r, n), null === r.child || 4 === r.tag) {
                if (r === t) return;
                for (; null === r.sibling;) {
                    if (null === r.return || r.return === t) return;
                    r = r.return;
                }
                r.sibling.return = r.return, r = r.sibling;
            } else r.child.return = r, r = r.child;
        }

        function $m(e) {
            var t = e.alternate;
            e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && $m(t);
        }

        function Dm(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }

        function Mm(e) {
            var t, n, r = function (e) {
                for (var t = e.return; null !== t;) {
                    if (Dm(t)) return t;
                    t = t.return;
                }
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            }(e), o = r.stateNode;
            switch (r.tag) {
                case 5:
                    t = o, n = !1;
                    break;
                case 3:
                case 4:
                    t = o.containerInfo, n = !0;
                    break;
                default:
                    throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
            }
            16 & r.effectTag && (Qi(t), r.effectTag &= -17);
            var a = function (e) {
                var t = e;
                e:for (; ;) {
                    for (; null === t.sibling;) {
                        if (null === t.return || Dm(t.return)) return null;
                        t = t.return;
                    }
                    for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag;) {
                        if (2 & t.effectTag) continue e;
                        if (null === t.child || 4 === t.tag) continue e;
                        t.child.return = t, t = t.child;
                    }
                    if (!(2 & t.effectTag)) return t.stateNode;
                }
            }(e);
            n ? Am(e, a, t) : jm(e, a, t);
        }

        function Am(e, t, n) {
            var r = e.tag, o = 5 === r || 6 === r;
            if (o) {
                var a = o ? e.stateNode : e.stateNode.instance;
                t ? function (e, t, n) {
                    8 === e.nodeType ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
                }(n, a, t) : function (e, t) {
                    var n;
                    8 === e.nodeType ? (n = e.parentNode).insertBefore(t, e) : (n = e).appendChild(t), null == e._reactRootContainer && null === n.onclick && ii(n);
                }(n, a);
            } else if (4 === r) ; else {
                var i = e.child;
                if (null !== i) {
                    Am(i, t, n);
                    for (var s = i.sibling; null !== s;) Am(s, t, n), s = s.sibling;
                }
            }
        }

        function jm(e, t, n) {
            var r = e.tag, o = 5 === r || 6 === r;
            if (o) {
                var a = o ? e.stateNode : e.stateNode.instance;
                t ? function (e, t, n) {
                    e.insertBefore(t, n);
                }(n, a, t) : function (e, t) {
                    e.appendChild(t);
                }(n, a);
            } else if (4 === r) ; else {
                var i = e.child;
                if (null !== i) {
                    jm(i, t, n);
                    for (var s = i.sibling; null !== s;) jm(s, t, n), s = s.sibling;
                }
            }
        }

        function Fm(e, t, n) {
            for (var r, o, a, i, s = t, l = !1; ;) {
                if (!l) {
                    var u = s.return;
                    e:for (; ;) {
                        if (null === u) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
                        var c = u.stateNode;
                        switch (u.tag) {
                            case 5:
                                r = c, o = !1;
                                break e;
                            case 3:
                            case 4:
                                r = c.containerInfo, o = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    l = !0;
                }
                if (5 === s.tag || 6 === s.tag) Im(e, s, n), o ? (a = r, i = s.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(i) : a.removeChild(i)) : Ki(r, s.stateNode); else if (4 === s.tag) {
                    if (null !== s.child) {
                        r = s.stateNode.containerInfo, o = !0, s.child.return = s, s = s.child;
                        continue;
                    }
                } else if (Om(e, s, n), null !== s.child) {
                    s.child.return = s, s = s.child;
                    continue;
                }
                if (s === t) return;
                for (; null === s.sibling;) {
                    if (null === s.return || s.return === t) return;
                    4 === (s = s.return).tag && (l = !1);
                }
                s.sibling.return = s.return, s = s.sibling;
            }
        }

        function Lm(e, t, n) {
            Fm(e, t, n), $m(t);
        }

        function zm(e, t) {
            switch (t.tag) {
                case 0:
                case T:
                case P:
                case N:
                case $:
                    return void _m(3, t);
                case 1:
                case C:
                case O:
                    return;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps, o = null !== e ? e.memoizedProps : r, a = t.type, i = t.updateQueue;
                        t.updateQueue = null, null !== i && function (e, t, n, r, o, a) {
                            gs(e, o), ui(e, t, n, r, o);
                        }(n, i, a, o, r);
                    }
                    return;
                case 6:
                    if (null === t.stateNode) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                    var s = t.stateNode, l = t.memoizedProps;
                    null !== e && e.memoizedProps;
                    return void function (e, t, n) {
                        e.nodeValue = n;
                    }(s, 0, l);
                case 3:
                    var u = t.stateNode;
                    return void (u.hydrate && (u.hydrate = !1, Io(u.containerInfo)));
                case R:
                    return function (e) {
                        var t, n = e.memoizedState, r = e;
                        null === n ? t = !1 : (t = !0, r = e.child, fg = Nc());
                        null !== r && function (e, t) {
                            for (var n = e; ;) {
                                if (5 === n.tag) {
                                    var r = n.stateNode;
                                    t ? Xi(r) : Ji(n.stateNode, n.memoizedProps);
                                } else if (6 === n.tag) {
                                    var o = n.stateNode;
                                    t ? o.nodeValue = "" : Gi(o, n.memoizedProps);
                                } else {
                                    if (n.tag === R && null !== n.memoizedState && null === n.memoizedState.dehydrated) {
                                        var a = n.child.sibling;
                                        a.return = n, n = a;
                                        continue;
                                    }
                                    if (null !== n.child) {
                                        n.child.return = n, n = n.child;
                                        continue;
                                    }
                                }
                                if (n === e) return;
                                for (; null === n.sibling;) {
                                    if (null === n.return || n.return === e) return;
                                    n = n.return;
                                }
                                n.sibling.return = n.return, n = n.sibling;
                            }
                        }(r, t);
                    }(t), void Um(t);
                case I:
                    return void Um(t);
            }
            throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }

        function Um(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new bm), t.forEach((function (t) {
                    var r = cv.bind(null, e, t);
                    n.has(t) || (!0 !== t.__reactDoNotTraceInteractions && (r = o.unstable_wrap(r)), n.add(t), t.then(r, r));
                }));
            }
        }

        function Bm(e) {
            Qi(e.stateNode);
        }

        var Wm = "function" == typeof WeakMap ? WeakMap : Map;

        function Vm(e, t, n) {
            var r = Uf(n, null);
            r.tag = 3, r.payload = { element: null };
            var o = t.value;
            return r.callback = function () {
                iv(o), wm(e, t);
            }, r;
        }

        function Hm(e, t, n) {
            var r = Uf(n, null);
            r.tag = 3;
            var o = e.type.getDerivedStateFromError;
            if ("function" == typeof o) {
                var a = t.value;
                r.payload = function () {
                    return wm(e, t), o(a);
                };
            }
            var i = e.stateNode;
            return null !== i && "function" == typeof i.componentDidCatch ? r.callback = function () {
                var n;
                pf(e), "function" != typeof o && (n = this, null === mg ? mg = new Set([n]) : mg.add(n), wm(e, t));
                var r = t.value, a = t.stack;
                this.componentDidCatch(r, { componentStack: null !== a ? a : "" }), "function" != typeof o && e.expirationTime !== Lc && s("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e.type) || "Unknown");
            } : r.callback = function () {
                pf(e);
            }, r;
        }

        function qm(e, t, n) {
            var r, o = e.pingCache;
            if (null === o ? (o = e.pingCache = new Wm, r = new Set, o.set(n, r)) : void 0 === (r = o.get(n)) && (r = new Set, o.set(n, r)), !r.has(t)) {
                r.add(t);
                var a = uv.bind(null, e, n, t);
                n.then(a, a);
            }
        }

        function Ym(e, t, n, r, o) {
            if (n.effectTag |= Fr, n.firstEffect = n.lastEffect = null, null !== r && "object" == typeof r && "function" == typeof r.then) {
                var a = r;
                if (0 == (2 & n.mode)) {
                    var i = n.alternate;
                    i ? (n.updateQueue = i.updateQueue, n.memoizedState = i.memoizedState, n.expirationTime = i.expirationTime) : (n.updateQueue = null, n.memoizedState = null);
                }
                var s = Hd(Vd.current, 1), l = t;
                do {
                    if (l.tag === R && Xd(l, s)) {
                        var u = l.updateQueue;
                        if (null === u) {
                            var c = new Set;
                            c.add(a), l.updateQueue = c;
                        } else u.add(a);
                        if (0 == (2 & l.mode)) {
                            if (l.effectTag |= $r, n.effectTag &= -2981, 1 === n.tag) if (null === n.alternate) n.tag = O; else {
                                var f = Uf(Lc, null);
                                f.tag = jf, Bf(n, f);
                            }
                            return void (n.expirationTime = Lc);
                        }
                        return qm(e, o, a), l.effectTag |= Lr, void (l.expirationTime = o);
                    }
                    l = l.return;
                } while (null !== l);
                r = new Error((qe(n.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Ke(n));
            }
            5 !== og && (og = 2), r = vm(r, n);
            var d = t;
            do {
                switch (d.tag) {
                    case 3:
                        var p = r;
                        return d.effectTag |= Lr, d.expirationTime = o, void Wf(d, Vm(d, p, o));
                    case 1:
                        var h = r, m = d.type, g = d.stateNode;
                        if (0 == (d.effectTag & $r) && ("function" == typeof m.getDerivedStateFromError || null !== g && "function" == typeof g.componentDidCatch && !av(g))) return d.effectTag |= Lr, d.expirationTime = o, void Wf(d, Hm(d, h, o));
                }
                d = d.return;
            } while (null !== d);
        }

        var Qm = Math.ceil, Km = a.ReactCurrentDispatcher, Xm = a.ReactCurrentOwner, Jm = a.IsSomeRendererActing,
            Gm = 16, Zm = 32, eg = 0, tg = null, ng = null, rg = 0, og = 0, ag = null, ig = Lc, sg = Lc, lg = null,
            ug = 0, cg = !1, fg = 0, dg = null, pg = !1, hg = null, mg = null, gg = !1, vg = null, yg = xc, bg = 0,
            wg = null, kg = 0, Eg = null, xg = 0, Sg = null, _g = null, Tg = 0;

        function Cg() {
            return 0 != (48 & eg) ? Bc(Nc()) : 0 !== Tg ? Tg : Tg = Bc(Nc());
        }

        function Rg(e, t, n) {
            var r = t.mode;
            if (0 == (2 & r)) return Lc;
            var o, a = Oc();
            if (0 == (4 & r)) return a === wc ? Lc : zc;
            if (0 != (eg & Gm)) return rg;
            if (null !== n) o = function (e, t) {
                return Vc(e, t, 250);
            }(e, 0 | n.timeoutMs || Hc); else switch (a) {
                case wc:
                    o = Lc;
                    break;
                case kc:
                    o = qc(e);
                    break;
                case Ec:
                case 96:
                    o = function (e) {
                        return Vc(e, Hc, 250);
                    }(e);
                    break;
                case 95:
                    o = 2;
                    break;
                default:
                    throw Error("Expected a valid priority level");
            }
            return null !== tg && o === rg && (o -= 1), o;
        }

        var Pg = function (e, t) {
            !function () {
                if (kg > 50) throw kg = 0, Eg = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
                xg > 50 && (xg = 0, s("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
            }(), function (e) {
                if (Je && 0 != (eg & Gm)) switch (e.tag) {
                    case 0:
                    case T:
                    case N:
                        var t = ng && qe(ng.type) || "Unknown", n = t;
                        if (!mv.has(n)) mv.add(n), s("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render", qe(e.type) || "Unknown", t, t);
                        break;
                    case 1:
                        gv || (s("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), gv = !0);
                }
            }(e);
            var n = Ng(e, t);
            if (null !== n) {
                var r, o;
                r = e, o = t, null !== tg && o > rg && (Sg = r), su && (lu = !0), null !== au && "componentWillMount" !== au && "componentWillReceiveProps" !== au && (uu = !0);
                var a = Oc();
                if (t === Lc ? 0 != (8 & eg) && 0 == (48 & eg) ? (_v(n, t), Dg(n)) : (Ig(n), _v(n, t), 0 === eg && Ac()) : (Ig(n), _v(n, t)), 0 != (4 & eg) && (a === kc || a === wc)) if (null === wg) wg = new Map([[n, t]]); else {
                    var i = wg.get(n);
                    (void 0 === i || i > t) && wg.set(n, t);
                }
            } else !function (e) {
                var t = e.tag;
                if (3 !== t && 1 !== t && 0 !== t && t !== T && t !== P && t !== N && t !== $) return;
                var n = qe(e.type) || "ReactComponent";
                if (null !== hv) {
                    if (hv.has(n)) return;
                    hv.add(n);
                } else hv = new Set([n]);
                s("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s", 1 === t ? "the componentWillUnmount method" : "a useEffect cleanup function", Ke(e));
            }(e);
        };

        function Ng(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var n = e.alternate;
            null !== n && n.expirationTime < t && (n.expirationTime = t);
            var r = e.return, o = null;
            if (null === r && 3 === e.tag) o = e.stateNode; else for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t ? (r.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t)) : null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    o = r.stateNode;
                    break;
                }
                r = r.return;
            }
            return null !== o && (tg === o && (Hg(t), 4 === og && ty(o, rg)), ny(o, t)), o;
        }

        function Og(e) {
            var t = e.lastExpiredTime;
            if (0 !== t) return t;
            var n = e.firstPendingTime;
            if (!ey(e, n)) return n;
            var r = e.lastPingedTime, o = e.nextKnownPendingLevel, a = r > o ? r : o;
            return a <= 2 && n !== a ? 0 : a;
        }

        function Ig(e) {
            if (0 !== e.lastExpiredTime) return e.callbackExpirationTime = Lc, e.callbackPriority = wc, void (e.callbackNode = Mc(Dg.bind(null, e)));
            var t = Og(e), n = e.callbackNode;
            if (0 !== t) {
                var r, o = Yc(Cg(), t);
                if (null !== n) {
                    var a = e.callbackPriority;
                    if (e.callbackExpirationTime === t && a >= o) return;
                    !function (e) {
                        e !== bc && uc(e);
                    }(n);
                }
                e.callbackExpirationTime = t, e.callbackPriority = o, r = t === Lc ? Mc(Dg.bind(null, e)) : Dc(o, $g.bind(null, e), { timeout: Wc(t) - Nc() }), e.callbackNode = r;
            } else null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = xc);
        }

        function $g(e, t) {
            if (Tg = 0, t) return ry(e, Cg()), Ig(e), null;
            var n = Og(e);
            if (0 !== n) {
                var r = e.callbackNode;
                if (0 != (48 & eg)) throw Error("Should not already be working.");
                if (rv(), e === tg && n === rg || (Fg(e, n), Tv(e, n)), null !== ng) {
                    var o = eg;
                    eg |= Gm;
                    var a = zg(), i = Bg(e);
                    for (Nu(ng); ;) try {
                        Yg();
                        break;
                    } catch (t) {
                        Lg(e, t);
                    }
                    if (Cf(), eg = o, Ug(a), Wg(i), 1 === og) {
                        var s = ag;
                        throw dv(), Fg(e, n), ty(e, n), Ig(e), s;
                    }
                    if (null !== ng) dv(); else {
                        fv();
                        var l = e.finishedWork = e.current.alternate;
                        e.finishedExpirationTime = n, function (e, t, n, r) {
                            switch (tg = null, n) {
                                case 0:
                                case 1:
                                    throw Error("Root did not complete. This is a bug in React.");
                                case 2:
                                    ry(e, r > 2 ? 2 : r);
                                    break;
                                case 3:
                                    ty(e, r);
                                    var o = e.lastSuspendedTime;
                                    if (r === o && (e.nextKnownPendingLevel = Xg(t)), ig === Lc && !vv.current) {
                                        var a = fg + 500 - Nc();
                                        if (a > 10) {
                                            if (cg) {
                                                var i = e.lastPingedTime;
                                                if (0 === i || i >= r) {
                                                    e.lastPingedTime = r, Fg(e, r);
                                                    break;
                                                }
                                            }
                                            var s = Og(e);
                                            if (0 !== s && s !== r) break;
                                            if (0 !== o && o !== r) {
                                                e.lastPingedTime = o;
                                                break;
                                            }
                                            e.timeoutHandle = qi(Gg.bind(null, e), a);
                                            break;
                                        }
                                    }
                                    Gg(e);
                                    break;
                                case 4:
                                    ty(e, r);
                                    var l = e.lastSuspendedTime;
                                    if (r === l && (e.nextKnownPendingLevel = Xg(t)), !vv.current) {
                                        if (cg) {
                                            var u = e.lastPingedTime;
                                            if (0 === u || u >= r) {
                                                e.lastPingedTime = r, Fg(e, r);
                                                break;
                                            }
                                        }
                                        var c, f = Og(e);
                                        if (0 !== f && f !== r) break;
                                        if (0 !== l && l !== r) {
                                            e.lastPingedTime = l;
                                            break;
                                        }
                                        if (sg !== Lc) c = Wc(sg) - Nc(); else if (ig === Lc) c = 0; else {
                                            var d = function (e) {
                                                return Wc(e) - Hc;
                                            }(ig), p = Nc(), h = Wc(r) - p, m = p - d;
                                            m < 0 && (m = 0), h < (c = function (e) {
                                                return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : 1960 * Qm(e / 1960);
                                            }(m) - m) && (c = h);
                                        }
                                        if (c > 10) {
                                            e.timeoutHandle = qi(Gg.bind(null, e), c);
                                            break;
                                        }
                                    }
                                    Gg(e);
                                    break;
                                case 5:
                                    if (!vv.current && ig !== Lc && null !== lg) {
                                        var g = function (e, t, n) {
                                            var r = 0 | n.busyMinDurationMs;
                                            if (r <= 0) return 0;
                                            var o = 0 | n.busyDelayMs, a = Nc(), i = function (e, t) {
                                                return Wc(e) - (0 | t.timeoutMs || Hc);
                                            }(e, n), s = a - i;
                                            if (s <= o) return 0;
                                            return o + r - s;
                                        }(ig, 0, lg);
                                        if (g > 10) {
                                            ty(e, r), e.timeoutHandle = qi(Gg.bind(null, e), g);
                                            break;
                                        }
                                    }
                                    Gg(e);
                                    break;
                                default:
                                    throw Error("Unknown root exit status.");
                            }
                        }(e, l, og, n);
                    }
                    if (Ig(e), e.callbackNode === r) return $g.bind(null, e);
                }
            }
            return null;
        }

        function Dg(e) {
            var t = e.lastExpiredTime, n = 0 !== t ? t : Lc;
            if (0 != (48 & eg)) throw Error("Should not already be working.");
            if (rv(), e === tg && n === rg || (Fg(e, n), Tv(e, n)), null !== ng) {
                var r = eg;
                eg |= Gm;
                var o = zg(), a = Bg(e);
                for (Nu(ng); ;) try {
                    qg();
                    break;
                } catch (t) {
                    Lg(e, t);
                }
                if (Cf(), eg = r, Ug(o), Wg(a), 1 === og) {
                    var i = ag;
                    throw dv(), Fg(e, n), ty(e, n), Ig(e), i;
                }
                if (null !== ng) throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
                fv(), e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, function (e) {
                    tg = null, Gg(e);
                }(e), Ig(e);
            }
            return null;
        }

        function Mg(e, t) {
            var n = eg;
            eg |= 1;
            try {
                return e(t);
            } finally {
                0 === (eg = n) && Ac();
            }
        }

        function Ag(e, t) {
            var n = eg;
            eg &= -2, eg |= 8;
            try {
                return e(t);
            } finally {
                0 === (eg = n) && Ac();
            }
        }

        function jg(e, t) {
            if (0 != (48 & eg)) throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");
            var n = eg;
            eg |= 1;
            try {
                return $c(wc, e.bind(null, t));
            } finally {
                eg = n, Ac();
            }
        }

        function Fg(e, t) {
            e.finishedWork = null, e.finishedExpirationTime = 0;
            var n = e.timeoutHandle;
            if (-1 !== n && (e.timeoutHandle = -1, Yi(n)), null !== ng) for (var r = ng.return; null !== r;) gm(r), r = r.return;
            tg = e, ng = Vv(e.current, null), rg = t, og = 0, ag = null, ig = Lc, sg = Lc, lg = null, ug = 0, cg = !1, _g = null, Qc.discardPendingWarnings();
        }

        function Lg(e, t) {
            for (; ;) {
                try {
                    if (Cf(), yp(), et(), null === ng || null === ng.return) return og = 1, ag = t, ng = null, null;
                    8 & ng.mode && gh(ng, !0), Ym(e, ng.return, ng, t, rg), ng = Kg(ng);
                } catch (e) {
                    t = e;
                    continue;
                }
                return;
            }
        }

        function zg(e) {
            var t = Km.current;
            return Km.current = eh, null === t ? eh : t;
        }

        function Ug(e) {
            Km.current = e;
        }

        function Bg(e) {
            var t = o.__interactionsRef.current;
            return o.__interactionsRef.current = e.memoizedInteractions, t;
        }

        function Wg(e) {
            o.__interactionsRef.current = e;
        }

        function Vg(e, t) {
            e < ig && e > 2 && (ig = e), null !== t && e < sg && e > 2 && (sg = e, lg = t);
        }

        function Hg(e) {
            e > ug && (ug = e);
        }

        function qg() {
            for (; null !== ng;) ng = Qg(ng);
        }

        function Yg() {
            for (; null !== ng && !Sc();) ng = Qg(ng);
        }

        function Qg(e) {
            var t, n = e.alternate;
            return Su(e), tt(e), 0 != (8 & e.mode) ? (hh(e), t = pv(n, e, rg), gh(e, !0)) : t = pv(n, e, rg), et(), e.memoizedProps = e.pendingProps, null === t && (t = Kg(e)), Xm.current = null, t;
        }

        function Kg(e) {
            ng = e;
            do {
                var t = ng.alternate, n = ng.return;
                if (0 == (ng.effectTag & Fr)) {
                    tt(ng);
                    var r = void 0;
                    if (0 == (8 & ng.mode) ? r = hm(t, ng, rg) : (hh(ng), r = hm(t, ng, rg), gh(ng, !1)), Tu(ng), et(), Jg(ng), null !== r) return r;
                    if (null !== n && 0 == (n.effectTag & Fr)) null === n.firstEffect && (n.firstEffect = ng.firstEffect), null !== ng.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = ng.firstEffect), n.lastEffect = ng.lastEffect), ng.effectTag > 1 && (null !== n.lastEffect ? n.lastEffect.nextEffect = ng : n.firstEffect = ng, n.lastEffect = ng);
                } else {
                    var o = mm(ng);
                    if (0 != (8 & ng.mode)) {
                        gh(ng, !1);
                        for (var a = ng.actualDuration, i = ng.child; null !== i;) a += i.actualDuration, i = i.sibling;
                        ng.actualDuration = a;
                    }
                    if (null !== o) return Cu(ng), o.effectTag &= 2047, o;
                    Tu(ng), null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= Fr);
                }
                var s = ng.sibling;
                if (null !== s) return s;
                ng = n;
            } while (null !== ng);
            return 0 === og && (og = 5), null;
        }

        function Xg(e) {
            var t = e.expirationTime, n = e.childExpirationTime;
            return t > n ? t : n;
        }

        function Jg(e) {
            if (1 === rg || 1 !== e.childExpirationTime) {
                var t = 0;
                if (0 != (8 & e.mode)) {
                    for (var n = e.actualDuration, r = e.selfBaseDuration, o = null === e.alternate || e.child !== e.alternate.child, a = e.child; null !== a;) {
                        var i = a.expirationTime, s = a.childExpirationTime;
                        i > t && (t = i), s > t && (t = s), o && (n += a.actualDuration), r += a.treeBaseDuration, a = a.sibling;
                    }
                    e.actualDuration = n, e.treeBaseDuration = r;
                } else for (var l = e.child; null !== l;) {
                    var u = l.expirationTime, c = l.childExpirationTime;
                    u > t && (t = u), c > t && (t = c), l = l.sibling;
                }
                e.childExpirationTime = t;
            }
        }

        function Gg(e) {
            var t = Oc();
            return $c(wc, Zg.bind(null, e, t)), null;
        }

        function Zg(e, t) {
            do {
                rv();
            } while (null !== vg);
            if (Qc.flushLegacyContextWarning(), Qc.flushPendingUnsafeLifecycleWarnings(), 0 != (48 & eg)) throw Error("Should not already be working.");
            var n, r = e.finishedWork, o = e.finishedExpirationTime;
            if (null === r) return null;
            if (e.finishedWork = null, e.finishedExpirationTime = 0, r === e.current) throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
            if (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = xc, e.nextKnownPendingLevel = 0, ru && (su = !0, lu = !1, du.clear(), hu("(Committing Changes)")), function (e, t, n) {
                e.firstPendingTime = n, t <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t <= e.firstSuspendedTime && (e.firstSuspendedTime = t - 1);
                t <= e.lastPingedTime && (e.lastPingedTime = 0);
                t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
            }(e, o, Xg(r)), e === tg && (tg = null, ng = null, rg = 0), r.effectTag > 1 ? null !== r.lastEffect ? (r.lastEffect.nextEffect = r, n = r.firstEffect) : n = r : n = r.firstEffect, null !== n) {
                var a = eg;
                eg |= Zm;
                var i = Bg(e);
                Xm.current = null, Iu(), Ui(e.containerInfo), dg = n;
                do {
                    if (v(null, ev, null), y()) {
                        if (null === dg) throw Error("Should be working on an effect.");
                        var s = b();
                        lv(dg, s), dg = dg.nextEffect;
                    }
                } while (null !== dg);
                $u(), ph(), Du(), dg = n;
                do {
                    if (v(null, tv, null, e, t), y()) {
                        if (null === dg) throw Error("Should be working on an effect.");
                        var l = b();
                        lv(dg, l), dg = dg.nextEffect;
                    }
                } while (null !== dg);
                Mu(), e.containerInfo, Ti(Li), Wo(Fi), Fi = null, Li = null, e.current = r, Au(), dg = n;
                do {
                    if (v(null, nv, null, e, o), y()) {
                        if (null === dg) throw Error("Should be working on an effect.");
                        var u = b();
                        lv(dg, u), dg = dg.nextEffect;
                    }
                } while (null !== dg);
                ju(), dg = null, _c(), Wg(i), eg = a;
            } else e.current = r, Iu(), $u(), ph(), Du(), Mu(), Au(), ju();
            !function () {
                if (ru) {
                    var e = null;
                    lu ? e = "Lifecycle hook scheduled a cascading update" : cu > 0 && (e = "Caused by a cascading update in earlier commit"), lu = !1, cu++, su = !1, du.clear(), mu("(Committing Changes)", "(Committing Changes)", e);
                }
            }();
            var c = gg;
            if (gg) gg = !1, vg = e, bg = o, yg = t; else for (dg = n; null !== dg;) {
                var f = dg.nextEffect;
                dg.nextEffect = null, dg = f;
            }
            var d = e.firstPendingTime;
            if (0 !== d) {
                if (null !== _g) {
                    var p = _g;
                    _g = null;
                    for (var h = 0; h < p.length; h++) Sv(e, p[ h ], e.memoizedInteractions);
                }
                _v(e, d);
            } else mg = null;
            if (c || Cv(e, o), d === Lc ? e === Eg ? kg++ : (kg = 0, Eg = e) : kg = 0, function (e, t) {
                "function" == typeof Nv && Nv(e, t);
            }(r.stateNode, o), Ig(e), pg) {
                pg = !1;
                var m = hg;
                throw hg = null, m;
            }
            return 0 != (8 & eg) || Ac(), null;
        }

        function ev() {
            for (; null !== dg;) {
                var e = dg.effectTag;
                if (0 != (e & Mr)) tt(dg), xu(), Sm(dg.alternate, dg), et();
                0 != (e & Ar) && (gg || (gg = !0, Dc(Ec, (function () {
                    return rv(), null;
                })))), dg = dg.nextEffect;
            }
        }

        function tv(e, t) {
            for (; null !== dg;) {
                tt(dg);
                var n = dg.effectTag;
                if (16 & n && Bm(dg), n & Dr) {
                    var r = dg.alternate;
                    null !== r && Nm(r);
                }
                switch (1038 & n) {
                    case 2:
                        Mm(dg), dg.effectTag &= -3;
                        break;
                    case 6:
                        Mm(dg), dg.effectTag &= -3, zm(dg.alternate, dg);
                        break;
                    case jr:
                        dg.effectTag &= -1025;
                        break;
                    case 1028:
                        dg.effectTag &= -1025, zm(dg.alternate, dg);
                        break;
                    case 4:
                        zm(dg.alternate, dg);
                        break;
                    case 8:
                        Lm(e, dg, t);
                }
                xu(), et(), dg = dg.nextEffect;
            }
        }

        function nv(e, t) {
            for (; null !== dg;) {
                tt(dg);
                var n = dg.effectTag;
                if (36 & n) xu(), Rm(e, dg.alternate, dg);
                n & Dr && (xu(), Pm(dg)), et(), dg = dg.nextEffect;
            }
        }

        function rv() {
            if (yg !== xc) {
                var e = yg > Ec ? Ec : yg;
                return yg = xc, $c(e, ov);
            }
        }

        function ov() {
            if (null === vg) return !1;
            var e = vg, t = bg;
            if (vg = null, bg = 0, 0 != (48 & eg)) throw Error("Cannot flush passive effects while already rendering.");
            var n = eg;
            eg |= Zm;
            for (var r = Bg(e), o = e.current.firstEffect; null !== o;) {
                if (tt(o), v(null, Cm, null, o), y()) {
                    if (null === o) throw Error("Should be working on an effect.");
                    lv(o, b());
                }
                et();
                var a = o.nextEffect;
                o.nextEffect = null, o = a;
            }
            return Wg(r), Cv(e, t), eg = n, Ac(), xg = null === vg ? 0 : xg + 1, !0;
        }

        function av(e) {
            return null !== mg && mg.has(e);
        }

        var iv = function (e) {
            pg || (pg = !0, hg = e);
        };

        function sv(e, t, n) {
            Bf(e, Vm(e, vm(n, t), Lc));
            var r = Ng(e, Lc);
            null !== r && (Ig(r), _v(r, Lc));
        }

        function lv(e, t) {
            if (3 !== e.tag) for (var n = e.return; null !== n;) {
                if (3 === n.tag) return void sv(n, e, t);
                if (1 === n.tag) {
                    var r = n.type, o = n.stateNode;
                    if ("function" == typeof r.getDerivedStateFromError || "function" == typeof o.componentDidCatch && !av(o)) {
                        Bf(n, Hm(n, vm(t, e), Lc));
                        var a = Ng(n, Lc);
                        return void (null !== a && (Ig(a), _v(a, Lc)));
                    }
                }
                n = n.return;
            } else sv(e, e, t);
        }

        function uv(e, t, n) {
            var r = e.pingCache;
            if (null !== r && r.delete(t), tg !== e || rg !== n) {
                if (ey(e, n)) {
                    var o = e.lastPingedTime;
                    0 !== o && o < n || (e.lastPingedTime = n, Ig(e), _v(e, n));
                }
            } else 4 === og || 3 === og && ig === Lc && Nc() - fg < 500 ? Fg(e, rg) : cg = !0;
        }

        function cv(e, t) {
            var n;
            null !== (n = e.stateNode) && n.delete(t), function (e, t) {
                0 === t && (t = Rg(Cg(), e, null));
                var n = Ng(e, t);
                null !== n && (Ig(n), _v(n, t));
            }(e, 0);
        }

        function fv() {
            Ou(Sg, !0), Sg = null;
        }

        function dv() {
            Ou(Sg, !1), Sg = null;
        }

        var pv, hv = null;
        pv = function (e, t, n) {
            var r = Jv(null, t);
            try {
                return cm(e, t, n);
            } catch (o) {
                if (null !== o && "object" == typeof o && "function" == typeof o.then) throw o;
                if (Cf(), yp(), gm(t), Jv(t, r), 8 & t.mode && hh(t), v(null, cm, null, e, t, n), y()) throw b();
                throw o;
            }
        };
        var mv, gv = !1;
        mv = new Set;
        var vv = { current: !1 };

        function yv(e) {
            !0 === Jm.current && !0 !== vv.current && s("It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);%s", Ke(e));
        }

        function bv(e) {
            0 != (1 & e.mode) && !1 === Jm.current && !1 === vv.current && s("An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s", qe(e.type), Ke(e));
        }

        var wv = function (e) {
            0 === eg && !1 === Jm.current && !1 === vv.current && s("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s", qe(e.type), Ke(e));
        }, kv = !1;

        function Ev(e, t) {
            return 1e3 * t + e.interactionThreadID;
        }

        function xv(e) {
            null === _g ? _g = [e] : _g.push(e);
        }

        function Sv(e, t, n) {
            if (n.size > 0) {
                var r = e.pendingInteractionMap, a = r.get(t);
                null != a ? n.forEach((function (e) {
                    a.has(e) || e.__count++, a.add(e);
                })) : (r.set(t, new Set(n)), n.forEach((function (e) {
                    e.__count++;
                })));
                var i = o.__subscriberRef.current;
                if (null !== i) {
                    var s = Ev(e, t);
                    i.onWorkScheduled(n, s);
                }
            }
        }

        function _v(e, t) {
            Sv(e, t, o.__interactionsRef.current);
        }

        function Tv(e, t) {
            var n = new Set;
            if (e.pendingInteractionMap.forEach((function (e, r) {
                r >= t && e.forEach((function (e) {
                    return n.add(e);
                }));
            })), e.memoizedInteractions = n, n.size > 0) {
                var r = o.__subscriberRef.current;
                if (null !== r) {
                    var a = Ev(e, t);
                    try {
                        r.onWorkStarted(n, a);
                    } catch (e) {
                        Dc(wc, (function () {
                            throw e;
                        }));
                    }
                }
            }
        }

        function Cv(e, t) {
            var n, r = e.firstPendingTime;
            try {
                if (null !== (n = o.__subscriberRef.current) && e.memoizedInteractions.size > 0) {
                    var a = Ev(e, t);
                    n.onWorkStopped(e.memoizedInteractions, a);
                }
            } catch (e) {
                Dc(wc, (function () {
                    throw e;
                }));
            } finally {
                var i = e.pendingInteractionMap;
                i.forEach((function (e, t) {
                    t > r && (i.delete(t), e.forEach((function (e) {
                        if (e.__count--, null !== n && 0 === e.__count) try {
                            n.onInteractionScheduledWorkCompleted(e);
                        } catch (e) {
                            Dc(wc, (function () {
                                throw e;
                            }));
                        }
                    })));
                }));
            }
        }

        var Rv, Pv = null, Nv = null, Ov = null, Iv = !1, $v = "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;

        function Dv(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled) return !0;
            if (!t.supportsFiber) return s("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"), !0;
            try {
                var n = t.inject(e);
                "function" == typeof t.onScheduleFiberRoot && (Pv = function (e, r) {
                    try {
                        t.onScheduleFiberRoot(n, e, r);
                    } catch (e) {
                        Iv || (Iv = !0, s("React instrumentation encountered an error: %s", e));
                    }
                }), Nv = function (e, r) {
                    try {
                        var o = (e.current.effectTag & $r) === $r, a = Yc(Bc(Nc()), r);
                        t.onCommitFiberRoot(n, e, a, o);
                    } catch (e) {
                        Iv || (Iv = !0, s("React instrumentation encountered an error: %s", e));
                    }
                }, Ov = function (e) {
                    try {
                        t.onCommitFiberUnmount(n, e);
                    } catch (e) {
                        Iv || (Iv = !0, s("React instrumentation encountered an error: %s", e));
                    }
                };
            } catch (e) {
                s("React instrumentation encountered an error: %s.", e);
            }
            return !0;
        }

        Rv = !1;
        try {
            var Mv = Object.preventExtensions({}), Av = new Map([[Mv, null]]), jv = new Set([Mv]);
            Av.set(0, 0), jv.add(0);
        } catch (e) {
            Rv = !0;
        }
        var Fv = 1;

        function Lv(e, t, n, r) {
            this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = r, this.effectTag = 0, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.expirationTime = 0, this.childExpirationTime = 0, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = Fv++, this._debugIsCurrentlyTiming = !1, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Rv || "function" != typeof Object.preventExtensions || Object.preventExtensions(this);
        }

        var zv, Uv, Bv = function (e, t, n, r) {
            return new Lv(e, t, n, r);
        };

        function Wv(e) {
            var t = e.prototype;
            return !(!t || !t.isReactComponent);
        }

        function Vv(e, t) {
            var n = e.alternate;
            null === n ? ((n = Bv(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugID = e._debugID, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null, n.actualDuration = 0, n.actualStartTime = -1), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
            var r = e.dependencies;
            switch (n.dependencies = null === r ? null : {
                expirationTime: r.expirationTime,
                firstContext: r.firstContext,
                responders: r.responders
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
                case 2:
                case 0:
                case N:
                    n.type = uf(e.type);
                    break;
                case 1:
                    n.type = cf(e.type);
                    break;
                case T:
                    n.type = ff(e.type);
            }
            return n;
        }

        function Hv(e, t) {
            e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
            var n = e.alternate;
            if (null === n) e.childExpirationTime = 0, e.expirationTime = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0; else {
                e.childExpirationTime = n.childExpirationTime, e.expirationTime = n.expirationTime, e.child = n.child, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue;
                var r = n.dependencies;
                e.dependencies = null === r ? null : {
                    expirationTime: r.expirationTime,
                    firstContext: r.firstContext,
                    responders: r.responders
                }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
            }
            return e;
        }

        function qv(e, t, n, r, o, a) {
            var i, l = 2, u = e;
            if ("function" == typeof e) Wv(e) ? (l = 1, u = cf(u)) : u = uf(u); else if ("string" == typeof e) l = 5; else e:switch (e) {
                case Oe:
                    return Qv(n.children, o, a, t);
                case Ae:
                    l = 8, o |= 7;
                    break;
                case Ie:
                    l = 8, o |= 1;
                    break;
                case $e:
                    return function (e, t, n, r) {
                        "string" == typeof e.id && "function" == typeof e.onRender || s("Profiler must specify an \"id\" string and \"onRender\" function as props");
                        var o = Bv(C, e, r, 8 | t);
                        return o.elementType = $e, o.type = $e, o.expirationTime = n, o;
                    }(n, o, a, t);
                case Fe:
                    return function (e, t, n, r) {
                        var o = Bv(R, e, r, t);
                        return o.type = Fe, o.elementType = Fe, o.expirationTime = n, o;
                    }(n, o, a, t);
                case Le:
                    return function (e, t, n, r) {
                        var o = Bv(I, e, r, t);
                        return o.type = Le, o.elementType = Le, o.expirationTime = n, o;
                    }(n, o, a, t);
                default:
                    if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                        case De:
                            l = _;
                            break e;
                        case Me:
                            l = 9;
                            break e;
                        case je:
                            l = T, u = ff(u);
                            break e;
                        case ze:
                            l = P;
                            break e;
                        case Ue:
                            l = 16, u = null;
                            break e;
                        case Be:
                            l = $;
                            break e;
                    }
                    var c = "";
                    (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                    var f = r ? qe(r.type) : null;
                    throw f && (c += "\n\nCheck the render method of `" + f + "`."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == e ? e : typeof e) + "." + c);
            }
            return (i = Bv(l, n, t, o)).elementType = e, i.type = u, i.expirationTime = a, i;
        }

        function Yv(e, t, n) {
            var r;
            r = e._owner;
            var o = qv(e.type, e.key, e.props, r, t, n);
            return o._debugSource = e._source, o._debugOwner = e._owner, o;
        }

        function Qv(e, t, n, r) {
            var o = Bv(7, e, r, t);
            return o.expirationTime = n, o;
        }

        function Kv(e, t, n) {
            var r = Bv(6, e, null, t);
            return r.expirationTime = n, r;
        }

        function Xv(e, t, n) {
            var r = null !== e.children ? e.children : [], o = Bv(4, r, e.key, t);
            return o.expirationTime = n, o.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, o;
        }

        function Jv(e, t) {
            return null === e && (e = Bv(2, null, null, 0)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.effectTag = t.effectTag, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.expirationTime = t.expirationTime, e.childExpirationTime = t.childExpirationTime, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugIsCurrentlyTiming = t._debugIsCurrentlyTiming, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
        }

        function Gv(e, t, n) {
            this.tag = t, this.current = null, this.containerInfo = e, this.pendingChildren = null, this.pingCache = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.context = null, this.pendingContext = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = xc, this.firstPendingTime = 0, this.firstSuspendedTime = 0, this.lastSuspendedTime = 0, this.nextKnownPendingLevel = 0, this.lastPingedTime = 0, this.lastExpiredTime = 0, this.interactionThreadID = o.unstable_getThreadID(), this.memoizedInteractions = new Set, this.pendingInteractionMap = new Map;
        }

        function Zv(e, t, n, r) {
            var o = new Gv(e, t, n), a = function (e) {
                var t;
                return t = 2 === e ? 7 : 1 === e ? 3 : 0, $v && (t |= 8), Bv(3, null, null, t);
            }(t);
            return o.current = a, a.stateNode = o, Lf(a), o;
        }

        function ey(e, t) {
            var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
            return 0 !== n && n >= t && r <= t;
        }

        function ty(e, t) {
            var n = e.firstSuspendedTime, r = e.lastSuspendedTime;
            n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
        }

        function ny(e, t) {
            t > e.firstPendingTime && (e.firstPendingTime = t);
            var n = e.firstSuspendedTime;
            0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
        }

        function ry(e, t) {
            var n = e.lastExpiredTime;
            (0 === n || n > t) && (e.lastExpiredTime = t);
        }

        function oy(e, t, r, o) {
            !function (e, t) {
                "function" == typeof Pv && Pv(e, t);
            }(t, e);
            var a, i = t.current, l = Cg();
            "undefined" != typeof jest && (a = i, !1 === kv && void 0 === n.unstable_flushAllWithoutAsserting && (2 & a.mode || 4 & a.mode) && (kv = !0, s("In Concurrent or Sync modes, the \"scheduler\" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: \njest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\nFor more info, visit https://fb.me/react-mock-scheduler")), yv(i));
            var u = Jf(), c = Rg(l, i, u), f = function (e) {
                if (!e) return Hu;
                var t = Ir(e), n = ic(t);
                if (1 === t.tag) {
                    var r = t.type;
                    if (Zu(r)) return rc(t, r, n);
                }
                return n;
            }(r);
            null === t.context ? t.context = f : t.pendingContext = f, Je && null !== Xe && !zv && (zv = !0, s("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", qe(Xe.type) || "Unknown"));
            var d = Uf(c, u);
            return d.payload = { element: e }, null !== (o = void 0 === o ? null : o) && ("function" != typeof o && s("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), d.callback = o), Bf(i, d), Pg(i, c), c;
        }

        function ay(e) {
            var t = e.current;
            return t.child ? (t.child.tag, t.child.stateNode) : null;
        }

        function iy(e, t) {
            var n = e.memoizedState;
            null !== n && null !== n.dehydrated && n.retryTime < t && (n.retryTime = t);
        }

        function sy(e, t) {
            iy(e, t);
            var n = e.alternate;
            n && iy(n, t);
        }

        function ly(e) {
            var t = function (e) {
                var t = Hr(e);
                if (!t) return null;
                for (var n = t; ;) {
                    if (5 === n.tag || 6 === n.tag) return n;
                    if (n.child && 4 !== n.tag) n.child.return = n, n = n.child; else {
                        if (n === t) return null;
                        for (; !n.sibling;) {
                            if (!n.return || n.return === t) return null;
                            n = n.return;
                        }
                        n.sibling.return = n.return, n = n.sibling;
                    }
                }
                return null;
            }(e);
            return null === t ? null : 20 === t.tag ? t.stateNode.instance : t.stateNode;
        }

        zv = !1, Uv = {};
        var uy = function (e) {
            return !1;
        };
        var cy, fy, dy, py, hy = function (e, n, r, o) {
            if (r >= n.length) return o;
            var a = n[ r ], i = Array.isArray(e) ? e.slice() : t({}, e);
            return i[ a ] = hy(e[ a ], n, r + 1, o), i;
        }, my = function (e, t, n) {
            return hy(e, t, 0, n);
        };

        function gy(e, t, n) {
            this._internalRoot = function (e, t, n) {
                var r = null != n && !0 === n.hydrate;
                null != n && n.hydrationOptions;
                var o = function (e, t, n, r) {
                    return Zv(e, t, n);
                }(e, t, r);
                if (function (e, t) {
                    t[ ls ] = e;
                }(o.current, e), r && 0 !== t) {
                    !function (e, t) {
                        var n = Or(t);
                        bo.forEach((function (e) {
                            Eo(e, t, n);
                        })), wo.forEach((function (e) {
                            Eo(e, t, n);
                        }));
                    }(0, 9 === e.nodeType ? e : e.ownerDocument);
                }
                return o;
            }(e, t, n);
        }

        function vy(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
        }

        cy = function (e, n, r, o) {
            for (var a = e.memoizedState; null !== a && n > 0;) a = a.next, n--;
            if (null !== a) {
                var i = my(a.memoizedState, r, o);
                a.memoizedState = i, a.baseState = i, e.memoizedProps = t({}, e.memoizedProps), Pg(e, Lc);
            }
        }, fy = function (e, t, n) {
            e.pendingProps = my(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), Pg(e, Lc);
        }, dy = function (e) {
            Pg(e, Lc);
        }, py = function (e) {
            uy = e;
        }, a.IsSomeRendererActing, gy.prototype.render = function (e) {
            var t = this._internalRoot;
            "function" == typeof arguments[ 1 ] && s("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
            var n = t.containerInfo;
            if (8 !== n.nodeType) {
                var r = ly(t.current);
                r && r.parentNode !== n && s("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
            }
            oy(e, t, null, null);
        }, gy.prototype.unmount = function () {
            "function" == typeof arguments[ 0 ] && s("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
            var e = this._internalRoot, t = e.containerInfo;
            oy(null, e, null, (function () {
                cs(t);
            }));
        };
        var yy, by = a.ReactCurrentOwner, wy = !1;

        function ky(e) {
            return e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null;
        }

        function Ey(e, t) {
            var n = t || function (e) {
                var t = ky(e);
                return !(!t || 1 !== t.nodeType || !t.hasAttribute(se));
            }(e);
            if (!n) for (var r, o = !1; r = e.lastChild;) !o && 1 === r.nodeType && r.hasAttribute(se) && (o = !0, s("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(r);
            return !n || t || wy || (wy = !0, i("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), function (e, t) {
                return new gy(e, 0, t);
            }(e, n ? { hydrate: !0 } : void 0);
        }

        function xy(e, t, n, r, o) {
            yy(n), function (e, t) {
                null !== e && "function" != typeof e && s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
            }(void 0 === o ? null : o, "render");
            var a, i = n._reactRootContainer;
            if (i) {
                if (a = i._internalRoot, "function" == typeof o) {
                    var l = o;
                    o = function () {
                        var e = ay(a);
                        l.call(e);
                    };
                }
                oy(t, a, e, o);
            } else {
                if (i = n._reactRootContainer = Ey(n, r), a = i._internalRoot, "function" == typeof o) {
                    var u = o;
                    o = function () {
                        var e = ay(a);
                        u.call(e);
                    };
                }
                Ag((function () {
                    oy(t, a, e, o);
                }));
            }
            return ay(a);
        }

        function Sy(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : null;
            return { $$typeof: Ne, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }

        yy = function (e) {
            if (e._reactRootContainer && 8 !== e.nodeType) {
                var t = ly(e._reactRootContainer._internalRoot.current);
                t && t.parentNode !== e && s("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
            }
            var n = !!e._reactRootContainer, r = ky(e);
            !(!r || !ps(r)) && !n && s("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), 1 === e.nodeType && e.tagName && "BODY" === e.tagName.toUpperCase() && s("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
        };
        var _y = "16.14.0";
        to = function (e) {
            if (e.tag === R) {
                var t = qc(Cg());
                Pg(e, t), sy(e, t);
            }
        }, function (e) {
            no = e;
        }((function (e) {
            e.tag === R && (Pg(e, 3), sy(e, 3));
        })), function (e) {
            ro = e;
        }((function (e) {
            if (e.tag === R) {
                var t = Rg(Cg(), e, null);
                Pg(e, t), sy(e, t);
            }
        }));
        var Ty, Cy, Ry, Py = !1;

        function Ny(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : null;
            if (!vy(t)) throw Error("Target container is not a DOM element.");
            return Sy(e, t, null, n);
        }

        "function" == typeof Map && null != Map.prototype && "function" == typeof Map.prototype.forEach && "function" == typeof Set && null != Set.prototype && "function" == typeof Set.prototype.clear && "function" == typeof Set.prototype.forEach || s("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), q = function (e, t, n) {
            switch (t) {
                case"input":
                    return void xt(e, n);
                case"textarea":
                    return void function (e, t) {
                        Ft(e, t);
                    }(e, n);
                case"select":
                    return void function (e, t) {
                        var n = e, r = t.value;
                        null != r && It(n, !!t.multiple, r, !1);
                    }(e, n);
            }
        }, Ty = function (e, t, n, r, o) {
            var a = eg;
            eg |= 4;
            try {
                return $c(kc, e.bind(null, t, n, r, o));
            } finally {
                0 === (eg = a) && Ac();
            }
        }, Cy = function () {
            0 == (49 & eg) ? (function () {
                if (null !== wg) {
                    var e = wg;
                    wg = null, e.forEach((function (e, t) {
                        ry(t, e), Ig(t);
                    })), Ac();
                }
            }(), rv()) : 0 != (eg & Gm) && s("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        }, Ry = function (e, t) {
            var n = eg;
            eg |= 2;
            try {
                return e(t);
            } finally {
                0 === (eg = n) && Ac();
            }
        }, G = Mg, Z = Ty, ee = Cy, te = Ry;
        var Oy = {
            Events: [ps, hs, ms, V, z, Ss, function (e) {
                Qr(e, xs);
            }, X, J, Ko, Gr, rv, vv]
        }, Iy = function (e) {
            var n = e.findFiberByHostInstance, r = a.ReactCurrentDispatcher;
            return Dv(t({}, e, {
                overrideHookState: cy,
                overrideProps: fy,
                setSuspenseHandler: py,
                scheduleUpdate: dy,
                currentDispatcherRef: r,
                findHostInstanceByFiber: function (e) {
                    var t = qr(e);
                    return null === t ? null : t.stateNode;
                },
                findFiberByHostInstance: function (e) {
                    return n ? n(e) : null;
                },
                findHostInstancesForRefresh: vf,
                scheduleRefresh: hf,
                scheduleRoot: mf,
                setRefreshHandler: lf,
                getCurrentFiber: function () {
                    return Xe;
                }
            }));
        }({ findFiberByHostInstance: ds, bundleType: 1, version: _y, rendererPackageName: "react-dom" });
        if (!Iy && H && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && -1 === navigator.userAgent.indexOf("Edge") || navigator.userAgent.indexOf("Firefox") > -1)) {
            var $y = window.location.protocol;
            /^(https?|file):$/.test($y) && console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" + ("file:" === $y ? "\nYou might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq" : ""), "font-weight:bold");
        }
        reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy, reactDom_development.createPortal = Ny, reactDom_development.findDOMNode = function (e) {
            var t = by.current;
            return null !== t && null !== t.stateNode && (t.stateNode._warnedAboutRefsInRender || s("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0), null == e ? null : 1 === e.nodeType ? e : function (e, t) {
                var n = Ir(e);
                if (void 0 === n) throw"function" == typeof e.render ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
                var r = qr(n);
                if (null === r) return null;
                if (1 & r.mode) {
                    var o = qe(n.type) || "Component";
                    Uv[ o ] || (Uv[ o ] = !0, 1 & n.mode ? s("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, o, Ke(r)) : s("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, o, Ke(r)));
                }
                return r.stateNode;
            }(e, "findDOMNode");
        }, reactDom_development.flushSync = jg, reactDom_development.hydrate = function (e, t, n) {
            if (!vy(t)) throw Error("Target container is not a DOM element.");
            return fs(t) && void 0 === t._reactRootContainer && s("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?"), xy(null, e, t, !0, n);
        }, reactDom_development.render = function (e, t, n) {
            if (!vy(t)) throw Error("Target container is not a DOM element.");
            return fs(t) && void 0 === t._reactRootContainer && s("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?"), xy(null, e, t, !1, n);
        }, reactDom_development.unmountComponentAtNode = function (e) {
            if (!vy(e)) throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
            if (fs(e) && void 0 === e._reactRootContainer && s("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?"), e._reactRootContainer) {
                var t = ky(e);
                return t && !ps(t) && s("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."), Ag((function () {
                    xy(null, null, e, !1, (function () {
                        e._reactRootContainer = null, cs(e);
                    }));
                })), !0;
            }
            var n = ky(e), r = !(!n || !ps(n)),
                o = 1 === e.nodeType && vy(e.parentNode) && !!e.parentNode._reactRootContainer;
            return r && s("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component."), !1;
        }, reactDom_development.unstable_batchedUpdates = Mg, reactDom_development.unstable_createPortal = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : null;
            return Py || (Py = !0, i("The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the \"unstable_\" prefix.")), Ny(e, t, n);
        }, reactDom_development.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            return function (e, t, n, r) {
                if (!vy(n)) throw Error("Target container is not a DOM element.");
                if (null == e || void 0 === e._reactInternalFiber) throw Error("parentComponent must be a valid React Component");
                return xy(e, t, n, !1, r);
            }(e, t, n, r);
        }, reactDom_development.version = _y;
    }(), "production" === process.env.NODE_ENV ? (checkDCE(), reactDom.exports = reactDom_production_min) : reactDom.exports = reactDom_development;
    var ReactDOM = reactDom.exports, lib$3 = {}, exports$1 = {}, interopRequireDefault = { exports: {} }, module;
    module = interopRequireDefault, module.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
    }, module.exports.default = module.exports, module.exports.__esModule = !0;
    var Provider = {}, propTypes = { exports: {} }, reactIs$1 = { exports: {} }, reactIs_production_min = {},
        b = "function" == typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103,
        d$1 = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107,
        f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114,
        h$1 = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110,
        l = b ? Symbol.for("react.async_mode") : 60111, m$1 = b ? Symbol.for("react.concurrent_mode") : 60111,
        n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113,
        q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115,
        t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121,
        w$1 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118,
        y$1 = b ? Symbol.for("react.scope") : 60119;

    function z(o) {
        if ("object" == typeof o && null !== o) {
            var a = o.$$typeof;
            switch (a) {
                case c:
                    switch (o = o.type) {
                        case l:
                        case m$1:
                        case e:
                        case g:
                        case f:
                        case p:
                            return o;
                        default:
                            switch (o = o && o.$$typeof) {
                                case k:
                                case n:
                                case t:
                                case r:
                                case h$1:
                                    return o;
                                default:
                                    return a;
                            }
                    }
                case d$1:
                    return a;
            }
        }
    }

    function A(e) {
        return z(e) === m$1;
    }

    reactIs_production_min.AsyncMode = l, reactIs_production_min.ConcurrentMode = m$1, reactIs_production_min.ContextConsumer = k, reactIs_production_min.ContextProvider = h$1, reactIs_production_min.Element = c, reactIs_production_min.ForwardRef = n, reactIs_production_min.Fragment = e, reactIs_production_min.Lazy = t, reactIs_production_min.Memo = r, reactIs_production_min.Portal = d$1, reactIs_production_min.Profiler = g, reactIs_production_min.StrictMode = f, reactIs_production_min.Suspense = p, reactIs_production_min.isAsyncMode = function (e) {
        return A(e) || z(e) === l;
    }, reactIs_production_min.isConcurrentMode = A, reactIs_production_min.isContextConsumer = function (e) {
        return z(e) === k;
    }, reactIs_production_min.isContextProvider = function (e) {
        return z(e) === h$1;
    }, reactIs_production_min.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === c;
    }, reactIs_production_min.isForwardRef = function (e) {
        return z(e) === n;
    }, reactIs_production_min.isFragment = function (t) {
        return z(t) === e;
    }, reactIs_production_min.isLazy = function (e) {
        return z(e) === t;
    }, reactIs_production_min.isMemo = function (e) {
        return z(e) === r;
    }, reactIs_production_min.isPortal = function (e) {
        return z(e) === d$1;
    }, reactIs_production_min.isProfiler = function (e) {
        return z(e) === g;
    }, reactIs_production_min.isStrictMode = function (e) {
        return z(e) === f;
    }, reactIs_production_min.isSuspense = function (e) {
        return z(e) === p;
    }, reactIs_production_min.isValidElementType = function (o) {
        return "string" == typeof o || "function" == typeof o || o === e || o === m$1 || o === g || o === f || o === p || o === q || "object" == typeof o && null !== o && (o.$$typeof === t || o.$$typeof === r || o.$$typeof === h$1 || o.$$typeof === k || o.$$typeof === n || o.$$typeof === w$1 || o.$$typeof === x || o.$$typeof === y$1 || o.$$typeof === v);
    }, reactIs_production_min.typeOf = z;
    var reactIs_development = {};
    "production" !== process.env.NODE_ENV && function () {
        var e = "function" == typeof Symbol && Symbol.for, t = e ? Symbol.for("react.element") : 60103,
            n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107,
            o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114,
            i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110,
            l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111,
            c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113,
            d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115,
            h = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121,
            g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118,
            y = e ? Symbol.for("react.scope") : 60119;

        function b(e) {
            if ("object" == typeof e && null !== e) {
                var d = e.$$typeof;
                switch (d) {
                    case t:
                        var m = e.type;
                        switch (m) {
                            case l:
                            case u:
                            case r:
                            case a:
                            case o:
                            case f:
                                return m;
                            default:
                                var g = m && m.$$typeof;
                                switch (g) {
                                    case s:
                                    case c:
                                    case h:
                                    case p:
                                    case i:
                                        return g;
                                    default:
                                        return d;
                                }
                        }
                    case n:
                        return d;
                }
            }
        }

        var w = l, k = u, E = s, x = i, S = t, _ = c, T = r, C = h, R = p, P = n, N = a, O = o, I = f, $ = !1;

        function D(e) {
            return b(e) === u;
        }

        reactIs_development.AsyncMode = w, reactIs_development.ConcurrentMode = k, reactIs_development.ContextConsumer = E, reactIs_development.ContextProvider = x, reactIs_development.Element = S, reactIs_development.ForwardRef = _, reactIs_development.Fragment = T, reactIs_development.Lazy = C, reactIs_development.Memo = R, reactIs_development.Portal = P, reactIs_development.Profiler = N, reactIs_development.StrictMode = O, reactIs_development.Suspense = I, reactIs_development.isAsyncMode = function (e) {
            return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(e) || b(e) === l;
        }, reactIs_development.isConcurrentMode = D, reactIs_development.isContextConsumer = function (e) {
            return b(e) === s;
        }, reactIs_development.isContextProvider = function (e) {
            return b(e) === i;
        }, reactIs_development.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === t;
        }, reactIs_development.isForwardRef = function (e) {
            return b(e) === c;
        }, reactIs_development.isFragment = function (e) {
            return b(e) === r;
        }, reactIs_development.isLazy = function (e) {
            return b(e) === h;
        }, reactIs_development.isMemo = function (e) {
            return b(e) === p;
        }, reactIs_development.isPortal = function (e) {
            return b(e) === n;
        }, reactIs_development.isProfiler = function (e) {
            return b(e) === a;
        }, reactIs_development.isStrictMode = function (e) {
            return b(e) === o;
        }, reactIs_development.isSuspense = function (e) {
            return b(e) === f;
        }, reactIs_development.isValidElementType = function (e) {
            return "string" == typeof e || "function" == typeof e || e === r || e === u || e === a || e === o || e === f || e === d || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === p || e.$$typeof === i || e.$$typeof === s || e.$$typeof === c || e.$$typeof === g || e.$$typeof === v || e.$$typeof === y || e.$$typeof === m);
        }, reactIs_development.typeOf = b;
    }(), "production" === process.env.NODE_ENV ? reactIs$1.exports = reactIs_production_min : reactIs$1.exports = reactIs_development;
    var ReactIs$1 = reactIs$1.exports, assign$1 = objectAssign, ReactPropTypesSecret$1 = ReactPropTypesSecret_1,
        checkPropTypes = checkPropTypes_1, has = Function.call.bind(Object.prototype.hasOwnProperty),
        printWarning = function () {
        };

    function emptyFunctionThatReturnsNull() {
        return null;
    }

    "production" !== process.env.NODE_ENV && (printWarning = function (e) {
        var t = "Warning: " + e;
        "undefined" != typeof console && console.error(t);
        try {
            throw new Error(t);
        } catch (e) {
        }
    });
    var factoryWithTypeCheckers = function (e, t) {
        var n = "function" == typeof Symbol && Symbol.iterator;
        var r = "<<anonymous>>", o = {
            array: l("array"),
            bool: l("boolean"),
            func: l("function"),
            number: l("number"),
            object: l("object"),
            string: l("string"),
            symbol: l("symbol"),
            any: s(emptyFunctionThatReturnsNull),
            arrayOf: function (e) {
                return s((function (t, n, r, o, a) {
                    if ("function" != typeof e) return new i("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var s = t[ n ];
                    if (!Array.isArray(s)) return new i("Invalid " + o + " `" + a + "` of type `" + c(s) + "` supplied to `" + r + "`, expected an array.");
                    for (var l = 0; l < s.length; l++) {
                        var u = e(s, l, r, o, a + "[" + l + "]", ReactPropTypesSecret$1);
                        if (u instanceof Error) return u;
                    }
                    return null;
                }));
            },
            element: s((function (t, n, r, o, a) {
                var s = t[ n ];
                return e(s) ? null : new i("Invalid " + o + " `" + a + "` of type `" + c(s) + "` supplied to `" + r + "`, expected a single ReactElement.");
            })),
            elementType: s((function (e, t, n, r, o) {
                var a = e[ t ];
                return ReactIs$1.isValidElementType(a) ? null : new i("Invalid " + r + " `" + o + "` of type `" + c(a) + "` supplied to `" + n + "`, expected a single ReactElement type.");
            })),
            instanceOf: function (e) {
                return s((function (t, n, o, a, s) {
                    if (!(t[ n ] instanceof e)) {
                        var l = e.name || r;
                        return new i("Invalid " + a + " `" + s + "` of type `" + (((u = t[ n ]).constructor && u.constructor.name ? u.constructor.name : r) + "` supplied to `") + o + "`, expected instance of `" + l + "`.");
                    }
                    var u;
                    return null;
                }));
            },
            node: s((function (e, t, n, r, o) {
                return u(e[ t ]) ? null : new i("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.");
            })),
            objectOf: function (e) {
                return s((function (t, n, r, o, a) {
                    if ("function" != typeof e) return new i("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var s = t[ n ], l = c(s);
                    if ("object" !== l) return new i("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected an object.");
                    for (var u in s) if (has(s, u)) {
                        var f = e(s, u, r, o, a + "." + u, ReactPropTypesSecret$1);
                        if (f instanceof Error) return f;
                    }
                    return null;
                }));
            },
            oneOf: function (e) {
                if (!Array.isArray(e)) return "production" !== process.env.NODE_ENV && printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull;

                function t(t, n, r, o, s) {
                    for (var l = t[ n ], u = 0; u < e.length; u++) if (a(l, e[ u ])) return null;
                    var c = JSON.stringify(e, (function (e, t) {
                        return "symbol" === f(t) ? String(t) : t;
                    }));
                    return new i("Invalid " + o + " `" + s + "` of value `" + String(l) + "` supplied to `" + r + "`, expected one of " + c + ".");
                }

                return s(t);
            },
            oneOfType: function (e) {
                if (!Array.isArray(e)) return "production" !== process.env.NODE_ENV && printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;
                for (var t = 0; t < e.length; t++) {
                    var n = e[ t ];
                    if ("function" != typeof n) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + d(n) + " at index " + t + "."), emptyFunctionThatReturnsNull;
                }
                return s((function (t, n, r, o, a) {
                    for (var s = 0; s < e.length; s++) if (null == (0, e[ s ])(t, n, r, o, a, ReactPropTypesSecret$1)) return null;
                    return new i("Invalid " + o + " `" + a + "` supplied to `" + r + "`.");
                }));
            },
            shape: function (e) {
                return s((function (t, n, r, o, a) {
                    var s = t[ n ], l = c(s);
                    if ("object" !== l) return new i("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                    for (var u in e) {
                        var f = e[ u ];
                        if (f) {
                            var d = f(s, u, r, o, a + "." + u, ReactPropTypesSecret$1);
                            if (d) return d;
                        }
                    }
                    return null;
                }));
            },
            exact: function (e) {
                return s((function (t, n, r, o, a) {
                    var s = t[ n ], l = c(s);
                    if ("object" !== l) return new i("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                    var u = assign$1({}, t[ n ], e);
                    for (var f in u) {
                        var d = e[ f ];
                        if (!d) return new i("Invalid " + o + " `" + a + "` key `" + f + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[ n ], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var p = d(s, f, r, o, a + "." + f, ReactPropTypesSecret$1);
                        if (p) return p;
                    }
                    return null;
                }));
            }
        };

        function a(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }

        function i(e) {
            this.message = e, this.stack = "";
        }

        function s(e) {
            if ("production" !== process.env.NODE_ENV) var n = {}, o = 0;

            function a(a, s, l, u, c, f, d) {
                if (u = u || r, f = f || l, d !== ReactPropTypesSecret$1) {
                    if (t) {
                        var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw p.name = "Invariant Violation", p;
                    }
                    if ("production" !== process.env.NODE_ENV && "undefined" != typeof console) {
                        var h = u + ":" + l;
                        !n[ h ] && o < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + f + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[ h ] = !0, o++);
                    }
                }
                return null == s[ l ] ? a ? null === s[ l ] ? new i("The " + c + " `" + f + "` is marked as required in `" + u + "`, but its value is `null`.") : new i("The " + c + " `" + f + "` is marked as required in `" + u + "`, but its value is `undefined`.") : null : e(s, l, u, c, f);
            }

            var s = a.bind(null, !1);
            return s.isRequired = a.bind(null, !0), s;
        }

        function l(e) {
            return s((function (t, n, r, o, a, s) {
                var l = t[ n ];
                return c(l) !== e ? new i("Invalid " + o + " `" + a + "` of type `" + f(l) + "` supplied to `" + r + "`, expected `" + e + "`.") : null;
            }));
        }

        function u(t) {
            switch (typeof t) {
                case"number":
                case"string":
                case"undefined":
                    return !0;
                case"boolean":
                    return !t;
                case"object":
                    if (Array.isArray(t)) return t.every(u);
                    if (null === t || e(t)) return !0;
                    var r = function (e) {
                        var t = e && (n && e[ n ] || e[ "@@iterator" ]);
                        if ("function" == typeof t) return t;
                    }(t);
                    if (!r) return !1;
                    var o, a = r.call(t);
                    if (r !== t.entries) {
                        for (; !(o = a.next()).done;) if (!u(o.value)) return !1;
                    } else for (; !(o = a.next()).done;) {
                        var i = o.value;
                        if (i && !u(i[ 1 ])) return !1;
                    }
                    return !0;
                default:
                    return !1;
            }
        }

        function c(e) {
            var t = typeof e;
            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function (e, t) {
                return "symbol" === e || !!t && ("Symbol" === t[ "@@toStringTag" ] || "function" == typeof Symbol && t instanceof Symbol);
            }(t, e) ? "symbol" : t;
        }

        function f(e) {
            if (null == e) return "" + e;
            var t = c(e);
            if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp";
            }
            return t;
        }

        function d(e) {
            var t = f(e);
            switch (t) {
                case"array":
                case"object":
                    return "an " + t;
                case"boolean":
                case"date":
                case"regexp":
                    return "a " + t;
                default:
                    return t;
            }
        }

        return i.prototype = Error.prototype, o.checkPropTypes = checkPropTypes, o.resetWarningCache = checkPropTypes.resetWarningCache, o.PropTypes = o, o;
    }, ReactPropTypesSecret = ReactPropTypesSecret_1;

    function emptyFunction() {
    }

    function emptyFunctionWithReset() {
    }

    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    var factoryWithThrowingShims = function () {
        function e(e, t, n, r, o, a) {
            if (a !== ReactPropTypesSecret) {
                var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw i.name = "Invariant Violation", i;
            }
        }

        function t() {
            return e;
        }

        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
        };
        return n.PropTypes = n, n;
    };
    if ("production" !== process.env.NODE_ENV) {
        var ReactIs = reactIs$1.exports, throwOnDirectAccess = !0;
        propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else propTypes.exports = factoryWithThrowingShims();
    var Context = {};
    !function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.default = e.ReactReduxContext = void 0;
        var n = t(react.exports).default.createContext(null);
        e.ReactReduxContext = n, "production" !== process.env.NODE_ENV && (n.displayName = "ReactRedux");
        var r = n;
        e.default = r;
    }(Context);
    var Subscription = {}, batch$1 = {};

    function defaultNoopBatch(e) {
        e();
    }

    batch$1.__esModule = !0, batch$1.getBatch = batch$1.setBatch = void 0;
    var batch = defaultNoopBatch, setBatch = function (e) {
        return batch = e;
    };
    batch$1.setBatch = setBatch;
    var getBatch = function () {
        return batch;
    };
    batch$1.getBatch = getBatch, Subscription.__esModule = !0, Subscription.createSubscription = createSubscription;
    var _batch = batch$1;

    function createListenerCollection() {
        var e = (0, _batch.getBatch)(), t = null, n = null;
        return {
            clear: function () {
                t = null, n = null;
            }, notify: function () {
                e((function () {
                    for (var e = t; e;) e.callback(), e = e.next;
                }));
            }, get: function () {
                for (var e = [], n = t; n;) e.push(n), n = n.next;
                return e;
            }, subscribe: function (e) {
                var r = !0, o = n = { callback: e, next: null, prev: n };
                return o.prev ? o.prev.next = o : t = o, function () {
                    r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next);
                };
            }
        };
    }

    var nullListeners = {
        notify: function () {
        }, get: function () {
            return [];
        }
    };

    function createSubscription(e, t) {
        var n, r = nullListeners;

        function o() {
            i.onStateChange && i.onStateChange();
        }

        function a() {
            n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = createListenerCollection());
        }

        var i = {
            addNestedSub: function (e) {
                return a(), r.subscribe(e);
            }, notifyNestedSubs: function () {
                r.notify();
            }, handleChangeWrapper: o, isSubscribed: function () {
                return Boolean(n);
            }, trySubscribe: a, tryUnsubscribe: function () {
                n && (n(), n = void 0, r.clear(), r = nullListeners);
            }, getListeners: function () {
                return r;
            }
        };
        return i;
    }

    var useIsomorphicLayoutEffect$1 = { __esModule: !0, useIsomorphicLayoutEffect: void 0 }, _react$3 = react.exports,
        useIsomorphicLayoutEffect = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _react$3.useLayoutEffect : _react$3.useEffect;
    useIsomorphicLayoutEffect$1.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect, function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.default = void 0;
        var n = function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
            var n = s(t);
            if (n && n.has(e)) return n.get(e);
            var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[ a ] = e[ a ];
            }
            r.default = e, n && n.set(e, r);
            return r;
        }(react.exports), r = t(propTypes.exports), o = Context, a = Subscription, i = useIsomorphicLayoutEffect$1;

        function s(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap, n = new WeakMap;
            return (s = function (e) {
                return e ? n : t;
            })(e);
        }

        function l(e) {
            var t = e.store, r = e.context, s = e.children, l = (0, n.useMemo)((function () {
                var e = (0, a.createSubscription)(t);
                return e.onStateChange = e.notifyNestedSubs, { store: t, subscription: e };
            }), [t]), u = (0, n.useMemo)((function () {
                return t.getState();
            }), [t]);
            (0, i.useIsomorphicLayoutEffect)((function () {
                var e = l.subscription;
                return e.trySubscribe(), u !== t.getState() && e.notifyNestedSubs(), function () {
                    e.tryUnsubscribe(), e.onStateChange = null;
                };
            }), [l, u]);
            var c = r || o.ReactReduxContext;
            return n.default.createElement(c.Provider, { value: l }, s);
        }

        "production" !== process.env.NODE_ENV && (l.propTypes = {
            store: r.default.shape({
                subscribe: r.default.func.isRequired,
                dispatch: r.default.func.isRequired,
                getState: r.default.func.isRequired
            }), context: r.default.object, children: r.default.any
        });
        var u = l;
        e.default = u;
    }(Provider);
    var connectAdvanced = {}, _extends = { exports: {} };
    !function (e) {
        function t() {
            return e.exports = t = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[ t ];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[ r ] = n[ r ]);
                }
                return e;
            }, e.exports.default = e.exports, e.exports.__esModule = !0, t.apply(this, arguments);
        }

        e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0;
    }(_extends);
    var objectWithoutPropertiesLoose = { exports: {} };
    !function (e) {
        e.exports = function (e, t) {
            if (null == e) return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[ r ], t.indexOf(n) >= 0 || (o[ n ] = e[ n ]);
            return o;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }(objectWithoutPropertiesLoose);
    var reactIs = reactIs$1.exports, REACT_STATICS = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, KNOWN_STATICS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        FORWARD_REF_STATICS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
        MEMO_STATICS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        TYPE_STATICS = {};

    function getStatics(e) {
        return reactIs.isMemo(e) ? MEMO_STATICS : TYPE_STATICS[ e.$$typeof ] || REACT_STATICS;
    }

    TYPE_STATICS[ reactIs.ForwardRef ] = FORWARD_REF_STATICS, TYPE_STATICS[ reactIs.Memo ] = MEMO_STATICS;
    var defineProperty$1 = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames,
        getOwnPropertySymbols = Object.getOwnPropertySymbols,
        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf,
        objectPrototype = Object.prototype;

    function hoistNonReactStatics(e, t, n) {
        if ("string" != typeof t) {
            if (objectPrototype) {
                var r = getPrototypeOf(t);
                r && r !== objectPrototype && hoistNonReactStatics(e, r, n);
            }
            var o = getOwnPropertyNames(t);
            getOwnPropertySymbols && (o = o.concat(getOwnPropertySymbols(t)));
            for (var a = getStatics(e), i = getStatics(t), s = 0; s < o.length; ++s) {
                var l = o[ s ];
                if (!(KNOWN_STATICS[ l ] || n && n[ l ] || i && i[ l ] || a && a[ l ])) {
                    var u = getOwnPropertyDescriptor(t, l);
                    try {
                        defineProperty$1(e, l, u);
                    } catch (e) {
                    }
                }
            }
        }
        return e;
    }

    var hoistNonReactStatics_cjs = hoistNonReactStatics;
    !function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.default = function (e, t) {
            void 0 === t && (t = {});
            var l = t, d = l.getDisplayName, w = void 0 === d ? function (e) {
                    return "ConnectAdvanced(" + e + ")";
                } : d, k = l.methodName, E = void 0 === k ? "connectAdvanced" : k, x = l.renderCountProp,
                S = void 0 === x ? void 0 : x, _ = l.shouldHandleStateChanges, T = void 0 === _ || _, C = l.storeKey,
                R = void 0 === C ? "store" : C, P = l.withRef, N = void 0 !== P && P, O = l.forwardRef,
                I = void 0 !== O && O, $ = l.context, D = void 0 === $ ? u.ReactReduxContext : $,
                M = (0, r.default)(l, c);
            if ("production" !== process.env.NODE_ENV) {
                if (void 0 !== S) throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
                if (N) throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
                if ("store" !== R) throw new Error("storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
            }
            var A = D;
            return function (t) {
                if ("production" !== process.env.NODE_ENV && !(0, i.isValidElementType)(t)) throw new Error("You must pass a component to the function returned by " + E + ". Instead received " + function (e) {
                    try {
                        return JSON.stringify(e);
                    } catch (t) {
                        return String(e);
                    }
                }(t));
                var l = t.displayName || t.name || "Component", u = w(l), c = (0, n.default)({}, M, {
                    getDisplayName: w,
                    methodName: E,
                    renderCountProp: S,
                    shouldHandleStateChanges: T,
                    storeKey: R,
                    displayName: u,
                    wrappedComponentName: l,
                    WrappedComponent: t
                }), d = M.pure;
                var k = d ? a.useMemo : function (e) {
                    return e();
                };

                function x(o) {
                    var l = (0, a.useMemo)((function () {
                            var e = o.reactReduxForwardedRef, t = (0, r.default)(o, f);
                            return [o.context, e, t];
                        }), [o]), d = l[ 0 ], w = l[ 1 ], E = l[ 2 ], x = (0, a.useMemo)((function () {
                            return d && d.Consumer && (0, i.isContextConsumer)(a.default.createElement(d.Consumer, null)) ? d : A;
                        }), [d, A]), S = (0, a.useContext)(x),
                        _ = Boolean(o.store) && Boolean(o.store.getState) && Boolean(o.store.dispatch),
                        C = Boolean(S) && Boolean(S.store);
                    if ("production" !== process.env.NODE_ENV && !_ && !C) throw new Error("Could not find \"store\" in the context of \"" + u + "\". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to " + u + " in connect options.");
                    var R = _ ? o.store : S.store, P = (0, a.useMemo)((function () {
                        return function (t) {
                            return e(t.dispatch, c);
                        }(R);
                    }), [R]), N = (0, a.useMemo)((function () {
                        if (!T) return h;
                        var e = (0, s.createSubscription)(R, _ ? null : S.subscription), t = e.notifyNestedSubs.bind(e);
                        return [e, t];
                    }), [R, _, S]), O = N[ 0 ], I = N[ 1 ], $ = (0, a.useMemo)((function () {
                        return _ ? S : (0, n.default)({}, S, { subscription: O });
                    }), [_, S, O]), D = (0, a.useReducer)(m, p, b), M = D[ 0 ][ 0 ], j = D[ 1 ];
                    if (M && M.error) throw M.error;
                    var F = (0, a.useRef)(), L = (0, a.useRef)(E), z = (0, a.useRef)(), U = (0, a.useRef)(!1),
                        B = k((function () {
                            return z.current && E === L.current ? z.current : P(R.getState(), E);
                        }), [R, M, E]);
                    g(v, [L, F, U, E, B, z, I]), g(y, [T, R, O, P, L, F, U, z, I, j], [R, O, P]);
                    var W = (0, a.useMemo)((function () {
                        return a.default.createElement(t, (0, n.default)({}, B, { ref: w }));
                    }), [w, t, B]);
                    return (0, a.useMemo)((function () {
                        return T ? a.default.createElement(x.Provider, { value: $ }, W) : W;
                    }), [x, W, $]);
                }

                var _ = d ? a.default.memo(x) : x;
                if (_.WrappedComponent = t, _.displayName = x.displayName = u, I) {
                    var C = a.default.forwardRef((function (e, t) {
                        return a.default.createElement(_, (0, n.default)({}, e, { reactReduxForwardedRef: t }));
                    }));
                    return C.displayName = u, C.WrappedComponent = t, (0, o.default)(C, t);
                }
                return (0, o.default)(_, t);
            };
        };
        var n = t(_extends.exports), r = t(objectWithoutPropertiesLoose.exports), o = t(hoistNonReactStatics_cjs),
            a = function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[ a ] = e[ a ];
                }
                r.default = e, n && n.set(e, r);
                return r;
            }(react.exports), i = reactIs$1.exports, s = Subscription, l = useIsomorphicLayoutEffect$1, u = Context,
            c = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
            f = ["reactReduxForwardedRef"];

        function d(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap, n = new WeakMap;
            return (d = function (e) {
                return e ? n : t;
            })(e);
        }

        var p = [], h = [null, null];

        function m(e, t) {
            var n = e[ 1 ];
            return [t.payload, n + 1];
        }

        function g(e, t, n) {
            (0, l.useIsomorphicLayoutEffect)((function () {
                return e.apply(void 0, t);
            }), n);
        }

        function v(e, t, n, r, o, a, i) {
            e.current = r, t.current = o, n.current = !1, a.current && (a.current = null, i());
        }

        function y(e, t, n, r, o, a, i, s, l, u) {
            if (e) {
                var c = !1, f = null, d = function () {
                    if (!c) {
                        var e, n, d = t.getState();
                        try {
                            e = r(d, o.current);
                        } catch (e) {
                            n = e, f = e;
                        }
                        n || (f = null), e === a.current ? i.current || l() : (a.current = e, s.current = e, i.current = !0, u({
                            type: "STORE_UPDATED",
                            payload: { error: n }
                        }));
                    }
                };
                n.onStateChange = d, n.trySubscribe(), d();
                return function () {
                    if (c = !0, n.tryUnsubscribe(), n.onStateChange = null, f) throw f;
                };
            }
        }

        var b = function () {
            return [null, 0];
        };
    }(connectAdvanced);
    var connect = {}, shallowEqual = {};
    !function (e) {
        function t(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
        }

        e.__esModule = !0, e.default = function (e, n) {
            if (t(e, n)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
            var r = Object.keys(e), o = Object.keys(n);
            if (r.length !== o.length) return !1;
            for (var a = 0; a < r.length; a++) if (!Object.prototype.hasOwnProperty.call(n, r[ a ]) || !t(e[ r[ a ] ], n[ r[ a ] ])) return !1;
            return !0;
        };
    }(shallowEqual);
    var mapDispatchToProps = {}, bindActionCreators$1 = {};
    !function (e) {
        e.__esModule = !0, e.default = function (e, t) {
            var n = {}, r = function (r) {
                var o = e[ r ];
                "function" == typeof o && (n[ r ] = function () {
                    return t(o.apply(void 0, arguments));
                });
            };
            for (var o in e) r(o);
            return n;
        };
    }(bindActionCreators$1);
    var wrapMapToProps = {}, verifyPlainObject = {}, isPlainObject$1 = {};
    !function (e) {
        e.__esModule = !0, e.default = function (e) {
            if ("object" != typeof e || null === e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = t;
            for (; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
            return t === n;
        };
    }(isPlainObject$1);
    var warning$1 = {};
    !function (e) {
        e.__esModule = !0, e.default = function (e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw new Error(e);
            } catch (e) {
            }
        };
    }(warning$1), function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.default = function (e, t, o) {
            (0, n.default)(e) || (0, r.default)(o + "() in " + t + " must return a plain object. Instead received " + e + ".");
        };
        var n = t(isPlainObject$1), r = t(warning$1);
    }(verifyPlainObject);
    var _interopRequireDefault$1 = interopRequireDefault.exports;
    wrapMapToProps.__esModule = !0, wrapMapToProps.wrapMapToPropsConstant = wrapMapToPropsConstant, wrapMapToProps.getDependsOnOwnProps = getDependsOnOwnProps, wrapMapToProps.wrapMapToPropsFunc = wrapMapToPropsFunc;
    var _verifyPlainObject = _interopRequireDefault$1(verifyPlainObject);

    function wrapMapToPropsConstant(e) {
        return function (t, n) {
            var r = e(t, n);

            function o() {
                return r;
            }

            return o.dependsOnOwnProps = !1, o;
        };
    }

    function getDependsOnOwnProps(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
    }

    function wrapMapToPropsFunc(e, t) {
        return function (n, r) {
            var o = r.displayName, a = function (e, t) {
                return a.dependsOnOwnProps ? a.mapToProps(e, t) : a.mapToProps(e);
            };
            return a.dependsOnOwnProps = !0, a.mapToProps = function (n, r) {
                a.mapToProps = e, a.dependsOnOwnProps = getDependsOnOwnProps(e);
                var i = a(n, r);
                return "function" == typeof i && (a.mapToProps = i, a.dependsOnOwnProps = getDependsOnOwnProps(i), i = a(n, r)), "production" !== process.env.NODE_ENV && (0, _verifyPlainObject.default)(i, o, t), i;
            }, a;
        };
    }

    !function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.whenMapDispatchToPropsIsFunction = o, e.whenMapDispatchToPropsIsMissing = a, e.whenMapDispatchToPropsIsObject = i, e.default = void 0;
        var n = t(bindActionCreators$1), r = wrapMapToProps;

        function o(e) {
            return "function" == typeof e ? (0, r.wrapMapToPropsFunc)(e, "mapDispatchToProps") : void 0;
        }

        function a(e) {
            return e ? void 0 : (0, r.wrapMapToPropsConstant)((function (e) {
                return { dispatch: e };
            }));
        }

        function i(e) {
            return e && "object" == typeof e ? (0, r.wrapMapToPropsConstant)((function (t) {
                return (0, n.default)(e, t);
            })) : void 0;
        }

        var s = [o, a, i];
        e.default = s;
    }(mapDispatchToProps);
    var mapStateToProps = {};
    !function (e) {
        e.__esModule = !0, e.whenMapStateToPropsIsFunction = n, e.whenMapStateToPropsIsMissing = r, e.default = void 0;
        var t = wrapMapToProps;

        function n(e) {
            return "function" == typeof e ? (0, t.wrapMapToPropsFunc)(e, "mapStateToProps") : void 0;
        }

        function r(e) {
            return e ? void 0 : (0, t.wrapMapToPropsConstant)((function () {
                return {};
            }));
        }

        var o = [n, r];
        e.default = o;
    }(mapStateToProps);
    var mergeProps = {};
    !function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.defaultMergeProps = o, e.wrapMergePropsFunc = a, e.whenMergePropsIsFunction = i, e.whenMergePropsIsOmitted = s, e.default = void 0;
        var n = t(_extends.exports), r = t(verifyPlainObject);

        function o(e, t, r) {
            return (0, n.default)({}, r, e, t);
        }

        function a(e) {
            return function (t, n) {
                var o, a = n.displayName, i = n.pure, s = n.areMergedPropsEqual, l = !1;
                return function (t, n, u) {
                    var c = e(t, n, u);
                    return l ? i && s(c, o) || (o = c) : (l = !0, o = c, "production" !== process.env.NODE_ENV && (0, r.default)(o, a, "mergeProps")), o;
                };
            };
        }

        function i(e) {
            return "function" == typeof e ? a(e) : void 0;
        }

        function s(e) {
            return e ? void 0 : function () {
                return o;
            };
        }

        var l = [i, s];
        e.default = l;
    }(mergeProps);
    var selectorFactory = {}, verifySubselectors = {};
    !function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.default = function (e, t, n, o) {
            r(e, "mapStateToProps", o), r(t, "mapDispatchToProps", o), r(n, "mergeProps", o);
        };
        var n = t(warning$1);

        function r(e, t, r) {
            if (!e) throw new Error("Unexpected value for " + t + " in " + r + ".");
            "mapStateToProps" !== t && "mapDispatchToProps" !== t || Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || (0, n.default)("The selector for " + t + " of " + r + " did not specify a value for dependsOnOwnProps.");
        }
    }(verifySubselectors), function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.impureFinalPropsSelectorFactory = a, e.pureFinalPropsSelectorFactory = i, e.default = function (e, t) {
            var s = t.initMapStateToProps, l = t.initMapDispatchToProps, u = t.initMergeProps, c = (0, n.default)(t, o),
                f = s(e, c), d = l(e, c), p = u(e, c);
            "production" !== process.env.NODE_ENV && (0, r.default)(f, d, p, c.displayName);
            return (c.pure ? i : a)(f, d, p, e, c);
        };
        var n = t(objectWithoutPropertiesLoose.exports), r = t(verifySubselectors),
            o = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

        function a(e, t, n, r) {
            return function (o, a) {
                return n(e(o, a), t(r, a), a);
            };
        }

        function i(e, t, n, r, o) {
            var a, i, s, l, u, c = o.areStatesEqual, f = o.areOwnPropsEqual, d = o.areStatePropsEqual, p = !1;

            function h(o, p) {
                var h, m, g = !f(p, i), v = !c(o, a);
                return a = o, i = p, g && v ? (s = e(a, i), t.dependsOnOwnProps && (l = t(r, i)), u = n(s, l, i)) : g ? (e.dependsOnOwnProps && (s = e(a, i)), t.dependsOnOwnProps && (l = t(r, i)), u = n(s, l, i)) : v ? (h = e(a, i), m = !d(h, s), s = h, m && (u = n(s, l, i)), u) : u;
            }

            return function (o, c) {
                return p ? h(o, c) : (s = e(a = o, i = c), l = t(r, i), u = n(s, l, i), p = !0, u);
            };
        }
    }(selectorFactory), function (e) {
        var t = interopRequireDefault.exports;
        e.__esModule = !0, e.createConnect = p, e.default = void 0;
        var n = t(_extends.exports), r = t(objectWithoutPropertiesLoose.exports), o = t(connectAdvanced),
            a = t(shallowEqual), i = t(mapDispatchToProps), s = t(mapStateToProps), l = t(mergeProps),
            u = t(selectorFactory),
            c = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];

        function f(e, t, n) {
            for (var r = t.length - 1; r >= 0; r--) {
                var o = t[ r ](e);
                if (o) return o;
            }
            return function (t, r) {
                throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
            };
        }

        function d(e, t) {
            return e === t;
        }

        function p(e) {
            var t = void 0 === e ? {} : e, p = t.connectHOC, h = void 0 === p ? o.default : p,
                m = t.mapStateToPropsFactories, g = void 0 === m ? s.default : m, v = t.mapDispatchToPropsFactories,
                y = void 0 === v ? i.default : v, b = t.mergePropsFactories, w = void 0 === b ? l.default : b,
                k = t.selectorFactory, E = void 0 === k ? u.default : k;
            return function (e, t, o, i) {
                void 0 === i && (i = {});
                var s = i, l = s.pure, u = void 0 === l || l, p = s.areStatesEqual, m = void 0 === p ? d : p,
                    v = s.areOwnPropsEqual, b = void 0 === v ? a.default : v, k = s.areStatePropsEqual,
                    x = void 0 === k ? a.default : k, S = s.areMergedPropsEqual, _ = void 0 === S ? a.default : S,
                    T = (0, r.default)(s, c), C = f(e, g, "mapStateToProps"), R = f(t, y, "mapDispatchToProps"),
                    P = f(o, w, "mergeProps");
                return h(E, (0, n.default)({
                    methodName: "connect",
                    getDisplayName: function (e) {
                        return "Connect(" + e + ")";
                    },
                    shouldHandleStateChanges: Boolean(e),
                    initMapStateToProps: C,
                    initMapDispatchToProps: R,
                    initMergeProps: P,
                    pure: u,
                    areStatesEqual: m,
                    areOwnPropsEqual: b,
                    areStatePropsEqual: x,
                    areMergedPropsEqual: _
                }, T));
            };
        }

        var h = p();
        e.default = h;
    }(connect);
    var useDispatch$1 = {}, useStore$1 = {}, useReduxContext$1 = { __esModule: !0 };
    useReduxContext$1.useReduxContext = useReduxContext;
    var _react$2 = react.exports, _Context$4 = Context;

    function useReduxContext() {
        var e = (0, _react$2.useContext)(_Context$4.ReactReduxContext);
        if ("production" !== process.env.NODE_ENV && !e) throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
        return e;
    }

    useStore$1.__esModule = !0, useStore$1.createStoreHook = createStoreHook, useStore$1.useStore = void 0;
    var _react$1 = react.exports, _Context$3 = Context, _useReduxContext2$1 = useReduxContext$1;

    function createStoreHook(e) {
        void 0 === e && (e = _Context$3.ReactReduxContext);
        var t = e === _Context$3.ReactReduxContext ? _useReduxContext2$1.useReduxContext : function () {
            return (0, _react$1.useContext)(e);
        };
        return function () {
            return t().store;
        };
    }

    var useStore = createStoreHook();
    useStore$1.useStore = useStore, useDispatch$1.__esModule = !0, useDispatch$1.createDispatchHook = createDispatchHook, useDispatch$1.useDispatch = void 0;
    var _Context$2 = Context, _useStore$1 = useStore$1;

    function createDispatchHook(e) {
        void 0 === e && (e = _Context$2.ReactReduxContext);
        var t = e === _Context$2.ReactReduxContext ? _useStore$1.useStore : (0, _useStore$1.createStoreHook)(e);
        return function () {
            return t().dispatch;
        };
    }

    var useDispatch = createDispatchHook();
    useDispatch$1.useDispatch = useDispatch;
    var useSelector$1 = { __esModule: !0 };
    useSelector$1.createSelectorHook = createSelectorHook, useSelector$1.useSelector = void 0;
    var _react = react.exports, _useReduxContext2 = useReduxContext$1, _Subscription = Subscription,
        _useIsomorphicLayoutEffect = useIsomorphicLayoutEffect$1, _Context$1 = Context, refEquality = function (e, t) {
            return e === t;
        };

    function useSelectorWithStoreAndSubscription(e, t, n, r) {
        var o, a = (0, _react.useReducer)((function (e) {
                return e + 1;
            }), 0), i = a[ 1 ], s = (0, _react.useMemo)((function () {
                return (0, _Subscription.createSubscription)(n, r);
            }), [n, r]), l = (0, _react.useRef)(), u = (0, _react.useRef)(), c = (0, _react.useRef)(),
            f = (0, _react.useRef)(), d = n.getState();
        try {
            if (e !== u.current || d !== c.current || l.current) {
                var p = e(d);
                o = void 0 !== f.current && t(p, f.current) ? f.current : p;
            } else o = f.current;
        } catch (e) {
            throw l.current && (e.message += "\nThe error may be correlated with this previous error:\n" + l.current.stack + "\n\n"), e;
        }
        return (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)((function () {
            u.current = e, c.current = d, f.current = o, l.current = void 0;
        })), (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)((function () {
            function e() {
                try {
                    var e = n.getState();
                    if (e === c.current) return;
                    var r = u.current(e);
                    if (t(r, f.current)) return;
                    f.current = r, c.current = e;
                } catch (e) {
                    l.current = e;
                }
                i();
            }

            return s.onStateChange = e, s.trySubscribe(), e(), function () {
                return s.tryUnsubscribe();
            };
        }), [n, s]), o;
    }

    function createSelectorHook(e) {
        void 0 === e && (e = _Context$1.ReactReduxContext);
        var t = e === _Context$1.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
            return (0, _react.useContext)(e);
        };
        return function (e, n) {
            if (void 0 === n && (n = refEquality), "production" !== process.env.NODE_ENV) {
                if (!e) throw new Error("You must pass a selector to useSelector");
                if ("function" != typeof e) throw new Error("You must pass a function as a selector to useSelector");
                if ("function" != typeof n) throw new Error("You must pass a function as an equality function to useSelector");
            }
            var r = t(), o = useSelectorWithStoreAndSubscription(e, n, r.store, r.subscription);
            return (0, _react.useDebugValue)(o), o;
        };
    }

    var useSelector = createSelectorHook();
    useSelector$1.useSelector = useSelector;
    var _interopRequireDefault = interopRequireDefault.exports;
    exports$1.__esModule = !0;
    var _Provider = _interopRequireDefault(Provider);
    exports$1.Provider = _Provider.default;
    var _connectAdvanced = _interopRequireDefault(connectAdvanced);
    exports$1.connectAdvanced = _connectAdvanced.default;
    var _Context = Context;
    exports$1.ReactReduxContext = _Context.ReactReduxContext;
    var _connect = _interopRequireDefault(connect);
    exports$1.connect = _connect.default;
    var _useDispatch = useDispatch$1;
    exports$1.useDispatch = _useDispatch.useDispatch, exports$1.createDispatchHook = _useDispatch.createDispatchHook;
    var _useSelector = useSelector$1;
    exports$1.useSelector = _useSelector.useSelector, exports$1.createSelectorHook = _useSelector.createSelectorHook;
    var _useStore = useStore$1;
    exports$1.useStore = _useStore.useStore, exports$1.createStoreHook = _useStore.createStoreHook;
    var _shallowEqual = _interopRequireDefault(shallowEqual);
    exports$1.shallowEqual = _shallowEqual.default;
    var reactBatchedUpdates = { __esModule: !0, unstable_batchedUpdates: void 0 }, _reactDom = reactDom.exports;
    reactBatchedUpdates.unstable_batchedUpdates = _reactDom.unstable_batchedUpdates, function (e) {
        e.__esModule = !0;
        var t = { batch: !0 }, n = exports$1;
        Object.keys(n).forEach((function (r) {
            "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(t, r) || r in e && e[ r ] === n[ r ] || (e[ r ] = n[ r ]));
        }));
        var r = reactBatchedUpdates;
        e.batch = r.unstable_batchedUpdates, (0, batch$1.setBatch)(r.unstable_batchedUpdates);
    }(lib$3);
    var redux = {}, objectSpread2 = { exports: {} }, defineProperty = { exports: {} };
    !function (e) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[ t ] = n, e;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }(defineProperty), function (e) {
        var t = defineProperty.exports;

        function n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }

        e.exports = function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var o = null != arguments[ r ] ? arguments[ r ] : {};
                r % 2 ? n(Object(o), !0).forEach((function (n) {
                    t(e, n, o[ n ]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                }));
            }
            return e;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }(objectSpread2), Object.defineProperty(redux, "__esModule", { value: !0 });
    var _objectSpread = objectSpread2.exports;

    function _interopDefaultLegacy$1(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
    }

    var _objectSpread__default = _interopDefaultLegacy$1(_objectSpread);

    function formatProdErrorMessage(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
    }

    var $$observable = "function" == typeof Symbol && Symbol.observable || "@@observable", randomString = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    }, ActionTypes = {
        INIT: "@@redux/INIT" + randomString(),
        REPLACE: "@@redux/REPLACE" + randomString(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
        }
    };

    function isPlainObject(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
    }

    function miniKindOf(e) {
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        var t = typeof e;
        switch (t) {
            case"boolean":
            case"string":
            case"number":
            case"symbol":
            case"function":
                return t;
        }
        if (Array.isArray(e)) return "array";
        if (isDate(e)) return "date";
        if (isError(e)) return "error";
        var n = ctorName(e);
        switch (n) {
            case"Symbol":
            case"Promise":
            case"WeakMap":
            case"WeakSet":
            case"Map":
            case"Set":
                return n;
        }
        return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
    }

    function ctorName(e) {
        return "function" == typeof e.constructor ? e.constructor.name : null;
    }

    function isError(e) {
        return e instanceof Error || "string" == typeof e.message && e.constructor && "number" == typeof e.constructor.stackTraceLimit;
    }

    function isDate(e) {
        return e instanceof Date || "function" == typeof e.toDateString && "function" == typeof e.getDate && "function" == typeof e.setDate;
    }

    function kindOf(e) {
        var t = typeof e;
        return "production" !== process.env.NODE_ENV && (t = miniKindOf(e)), t;
    }

    function createStore$1(e, t, n) {
        var r;
        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[ 3 ]) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(n) + "'");
            return n(createStore$1)(e, t);
        }
        if ("function" != typeof e) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(e) + "'");
        var o = e, a = t, i = [], s = i, l = !1;

        function u() {
            s === i && (s = i.slice());
        }

        function c() {
            if (l) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return a;
        }

        function f(e) {
            if ("function" != typeof e) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(e) + "'");
            if (l) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
            var t = !0;
            return u(), s.push(e), function () {
                if (t) {
                    if (l) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
                    t = !1, u();
                    var n = s.indexOf(e);
                    s.splice(n, 1), i = null;
                }
            };
        }

        function d(e) {
            if (!isPlainObject(e)) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(e) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
            if (void 0 === e.type) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(8) : "Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
            if (l) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
            try {
                l = !0, a = o(a, e);
            } finally {
                l = !1;
            }
            for (var t = i = s, n = 0; n < t.length; n++) {
                (0, t[ n ])();
            }
            return e;
        }

        function p(e) {
            if ("function" != typeof e) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(e));
            o = e, d({ type: ActionTypes.REPLACE });
        }

        function h() {
            var e, t = f;
            return (e = {
                subscribe: function (e) {
                    if ("object" != typeof e || null === e) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(e) + "'");

                    function n() {
                        e.next && e.next(c());
                    }

                    return n(), { unsubscribe: t(n) };
                }
            })[ $$observable ] = function () {
                return this;
            }, e;
        }

        return d({ type: ActionTypes.INIT }), (r = {
            dispatch: d,
            subscribe: f,
            getState: c,
            replaceReducer: p
        })[ $$observable ] = h, r;
    }

    function warning(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e);
        } catch (e) {
        }
    }

    function getUnexpectedStateShapeWarningMessage(e, t, n, r) {
        var o = Object.keys(t),
            a = n && n.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
        if (0 === o.length) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
        if (!isPlainObject(e)) return "The " + a + " has unexpected type of \"" + kindOf(e) + "\". Expected argument to be an object with the following keys: \"" + o.join("\", \"") + "\"";
        var i = Object.keys(e).filter((function (e) {
            return !t.hasOwnProperty(e) && !r[ e ];
        }));
        return i.forEach((function (e) {
            r[ e ] = !0;
        })), n && n.type === ActionTypes.REPLACE ? void 0 : i.length > 0 ? "Unexpected " + (i.length > 1 ? "keys" : "key") + " \"" + i.join("\", \"") + "\" found in " + a + ". Expected to find one of the known reducer keys instead: \"" + o.join("\", \"") + "\". Unexpected keys will be ignored." : void 0;
    }

    function assertReducerShape(e) {
        Object.keys(e).forEach((function (t) {
            var n = e[ t ];
            if (void 0 === n(void 0, { type: ActionTypes.INIT })) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(12) : "The slice reducer for key \"" + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, { type: ActionTypes.PROBE_UNKNOWN_ACTION() })) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(13) : "The slice reducer for key \"" + t + "\" returned undefined when probed with a random type. Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
        }));
    }

    function combineReducers(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[ r ];
            "production" !== process.env.NODE_ENV && void 0 === e[ o ] && warning("No reducer provided for key \"" + o + "\""), "function" == typeof e[ o ] && (n[ o ] = e[ o ]);
        }
        var a, i, s = Object.keys(n);
        "production" !== process.env.NODE_ENV && (a = {});
        try {
            assertReducerShape(n);
        } catch (e) {
            i = e;
        }
        return function (e, t) {
            if (void 0 === e && (e = {}), i) throw i;
            if ("production" !== process.env.NODE_ENV) {
                var r = getUnexpectedStateShapeWarningMessage(e, n, t, a);
                r && warning(r);
            }
            for (var o = !1, l = {}, u = 0; u < s.length; u++) {
                var c = s[ u ], f = n[ c ], d = e[ c ], p = f(d, t);
                if (void 0 === p) {
                    var h = t && t.type;
                    throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(14) : "When called with an action of type " + (h ? "\"" + String(h) + "\"" : "(unknown type)") + ", the slice reducer for key \"" + c + "\" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.");
                }
                l[ c ] = p, o = o || p !== d;
            }
            return (o = o || s.length !== Object.keys(e).length) ? l : e;
        };
    }

    function bindActionCreator(e, t) {
        return function () {
            return t(e.apply(this, arguments));
        };
    }

    function bindActionCreators(e, t) {
        if ("function" == typeof e) return bindActionCreator(e, t);
        if ("object" != typeof e || null === e) throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(e) + "'. Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
        var n = {};
        for (var r in e) {
            var o = e[ r ];
            "function" == typeof o && (n[ r ] = bindActionCreator(o, t));
        }
        return n;
    }

    function compose() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[ n ] = arguments[ n ];
        return 0 === t.length ? function (e) {
            return e;
        } : 1 === t.length ? t[ 0 ] : t.reduce((function (e, t) {
            return function () {
                return e(t.apply(void 0, arguments));
            };
        }));
    }

    function applyMiddleware() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[ n ] = arguments[ n ];
        return function (e) {
            return function () {
                var n = e.apply(void 0, arguments), r = function () {
                    throw new Error("production" === process.env.NODE_ENV ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                }, o = {
                    getState: n.getState, dispatch: function () {
                        return r.apply(void 0, arguments);
                    }
                }, a = t.map((function (e) {
                    return e(o);
                }));
                return r = compose.apply(void 0, a)(n.dispatch), _objectSpread__default.default(_objectSpread__default.default({}, n), {}, { dispatch: r });
            };
        };
    }

    function isCrushed() {
    }

    "production" !== process.env.NODE_ENV && "string" == typeof isCrushed.name && "isCrushed" !== isCrushed.name && warning("You are currently using minified code outside of NODE_ENV === \"production\". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build."), redux.__DO_NOT_USE__ActionTypes = ActionTypes;
    var applyMiddleware_1 = redux.applyMiddleware = applyMiddleware;
    redux.bindActionCreators = bindActionCreators, redux.combineReducers = combineReducers;
    var compose_1 = redux.compose = compose, createStore_1 = redux.createStore = createStore$1, lib$2 = {};
    !function (e) {
        function t(e) {
            return function (t) {
                var n = t.dispatch, r = t.getState;
                return function (t) {
                    return function (o) {
                        return "function" == typeof o ? o(n, r, e) : t(o);
                    };
                };
            };
        }

        e.__esModule = !0;
        var n = t();
        n.withExtraArgument = t, e.default = n;
    }(lib$2);
    var thunk = getDefaultExportFromCjs(lib$2);

    function uuid() {
        var e = (new Date).getTime(), t = "xxxxxxxx-xxxx-65xx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16);
        }));
        return t;
    }

    function visitorFingerprint() {
        return uuid();
    }

    var DEFAULT_VISITOR = { timestamp: 0, displayName: "Visitor", typing: !1 };

    function createDefaultState() {
        return {
            connection: { connectionStatus: "offline", token: null, greetingRequested: !1 },
            accountStatus: "offline",
            departments: {},
            visitor: DEFAULT_VISITOR,
            agents: {},
            chats: [],
            lastTimestamp: 0,
            lastRatingRequestTimestamp: 0,
            hasRating: !1,
            isChatting: !1,
            queuePosition: 0,
            visitorId: visitorFingerprint(),
            chips: []
        };
    }

    var DEFAULT_STATE = createDefaultState();

    function insertSorted(e, t, n) {
        if (!e.length) return e.push(t), e;
        for (var r = 0, o = e.length - 1; o - r > 0;) {
            var a = e[ r ], i = e[ o ];
            if (n(t, a) <= 0) return e.splice(r, 0, t), e;
            if (n(t, i) >= 0) return e.splice(o + 1, 0, t), e;
            if (o - r <= 1) break;
            var s = Math.floor((r + o) / 2), l = n(e[ s ], t);
            l <= 0 ? r = s : l >= 0 && (o = s);
        }
        return e.splice(r + 1, 0, t), e;
    }

    function isAgent(e) {
        return !!e && e.startsWith("agent:");
    }

    var assign = make_assign(), create$1 = make_create(), trim$1 = make_trim(),
        Global$5 = "undefined" != typeof window ? window : commonjsGlobal, util$7 = {
            assign: assign,
            create: create$1,
            trim: trim$1,
            bind: bind$1,
            slice: slice$1,
            each: each$7,
            map: map$1,
            pluck: pluck$1,
            isList: isList$2,
            isFunction: isFunction$1,
            isObject: isObject$1,
            Global: Global$5
        };

    function make_assign() {
        return Object.assign ? Object.assign : function (e, t, n, r) {
            for (var o = 1; o < arguments.length; o++) each$7(Object(arguments[ o ]), (function (t, n) {
                e[ n ] = t;
            }));
            return e;
        };
    }

    function make_create() {
        if (Object.create) return function (e, t, n, r) {
            var o = slice$1(arguments, 1);
            return assign.apply(this, [Object.create(e)].concat(o));
        };
        {
            function e() {
            }

            return function (t, n, r, o) {
                var a = slice$1(arguments, 1);
                return e.prototype = t, assign.apply(this, [new e].concat(a));
            };
        }
    }

    function make_trim() {
        return String.prototype.trim ? function (e) {
            return String.prototype.trim.call(e);
        } : function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
    }

    function bind$1(e, t) {
        return function () {
            return t.apply(e, Array.prototype.slice.call(arguments, 0));
        };
    }

    function slice$1(e, t) {
        return Array.prototype.slice.call(e, t || 0);
    }

    function each$7(e, t) {
        pluck$1(e, (function (e, n) {
            return t(e, n), !1;
        }));
    }

    function map$1(e, t) {
        var n = isList$2(e) ? [] : {};
        return pluck$1(e, (function (e, r) {
            return n[ r ] = t(e, r), !1;
        })), n;
    }

    function pluck$1(e, t) {
        if (isList$2(e)) {
            for (var n = 0; n < e.length; n++) if (t(e[ n ], n)) return e[ n ];
        } else for (var r in e) if (e.hasOwnProperty(r) && t(e[ r ], r)) return e[ r ];
    }

    function isList$2(e) {
        return null != e && "function" != typeof e && "number" == typeof e.length;
    }

    function isFunction$1(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }

    function isObject$1(e) {
        return e && "[object Object]" === {}.toString.call(e);
    }

    var util$6 = util$7, slice = util$6.slice, pluck = util$6.pluck, each$6 = util$6.each, bind = util$6.bind,
        create = util$6.create, isList$1 = util$6.isList, isFunction = util$6.isFunction, isObject = util$6.isObject,
        storeEngine = { createStore: createStore }, storeAPI = {
            version: "2.0.12", enabled: !1, get: function (e, t) {
                var n = this.storage.read(this._namespacePrefix + e);
                return this._deserialize(n, t);
            }, set: function (e, t) {
                return void 0 === t ? this.remove(e) : (this.storage.write(this._namespacePrefix + e, this._serialize(t)), t);
            }, remove: function (e) {
                this.storage.remove(this._namespacePrefix + e);
            }, each: function (e) {
                var t = this;
                this.storage.each((function (n, r) {
                    e.call(t, t._deserialize(n), (r || "").replace(t._namespaceRegexp, ""));
                }));
            }, clearAll: function () {
                this.storage.clearAll();
            }, hasNamespace: function (e) {
                return this._namespacePrefix == "__storejs_" + e + "_";
            }, createStore: function () {
                return createStore.apply(this, arguments);
            }, addPlugin: function (e) {
                this._addPlugin(e);
            }, namespace: function (e) {
                return createStore(this.storage, this.plugins, e);
            }
        };

    function _warn() {
        var e = "undefined" == typeof console ? null : console;
        if (e) {
            var t = e.warn ? e.warn : e.log;
            t.apply(e, arguments);
        }
    }

    function createStore(e, t, n) {
        n || (n = ""), e && !isList$1(e) && (e = [e]), t && !isList$1(t) && (t = [t]);
        var r = n ? "__storejs_" + n + "_" : "", o = n ? new RegExp("^" + r) : null;
        if (!/^[a-zA-Z0-9_\-]*$/.test(n)) throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
        var a = {
            _namespacePrefix: r, _namespaceRegexp: o, _testStorage: function (e) {
                try {
                    var t = "__storejs__test__";
                    e.write(t, t);
                    var n = e.read(t) === t;
                    return e.remove(t), n;
                } catch (e) {
                    return !1;
                }
            }, _assignPluginFnProp: function (e, t) {
                var n = this[ t ];
                this[ t ] = function () {
                    var t = slice(arguments, 0), r = this;

                    function o() {
                        if (n) return each$6(arguments, (function (e, n) {
                            t[ n ] = e;
                        })), n.apply(r, t);
                    }

                    var a = [o].concat(t);
                    return e.apply(r, a);
                };
            }, _serialize: function (e) {
                return JSON.stringify(e);
            }, _deserialize: function (e, t) {
                if (!e) return t;
                var n = "";
                try {
                    n = JSON.parse(e);
                } catch (t) {
                    n = e;
                }
                return void 0 !== n ? n : t;
            }, _addStorage: function (e) {
                this.enabled || this._testStorage(e) && (this.storage = e, this.enabled = !0);
            }, _addPlugin: function (e) {
                var t = this;
                if (isList$1(e)) each$6(e, (function (e) {
                    t._addPlugin(e);
                })); else if (!pluck(this.plugins, (function (t) {
                    return e === t;
                }))) {
                    if (this.plugins.push(e), !isFunction(e)) throw new Error("Plugins must be function values that return objects");
                    var n = e.call(this);
                    if (!isObject(n)) throw new Error("Plugins must return an object of function properties");
                    each$6(n, (function (n, r) {
                        if (!isFunction(n)) throw new Error("Bad plugin property: " + r + " from plugin " + e.name + ". Plugins should only return functions.");
                        t._assignPluginFnProp(n, r);
                    }));
                }
            }, addStorage: function (e) {
                _warn("store.addStorage(storage) is deprecated. Use createStore([storages])"), this._addStorage(e);
            }
        }, i = create(a, storeAPI, { plugins: [] });
        return i.raw = {}, each$6(i, (function (e, t) {
            isFunction(e) && (i.raw[ t ] = bind(i, e));
        })), each$6(e, (function (e) {
            i._addStorage(e);
        })), each$6(t, (function (e) {
            i._addPlugin(e);
        })), i;
    }

    var util$5 = util$7, Global$4 = util$5.Global, localStorage_1 = {
        name: "localStorage",
        read: read$5,
        write: write$5,
        each: each$5,
        remove: remove$5,
        clearAll: clearAll$5
    };

    function localStorage$1() {
        return Global$4.localStorage;
    }

    function read$5(e) {
        return localStorage$1().getItem(e);
    }

    function write$5(e, t) {
        return localStorage$1().setItem(e, t);
    }

    function each$5(e) {
        for (var t = localStorage$1().length - 1; t >= 0; t--) {
            var n = localStorage$1().key(t);
            e(read$5(n), n);
        }
    }

    function remove$5(e) {
        return localStorage$1().removeItem(e);
    }

    function clearAll$5() {
        return localStorage$1().clear();
    }

    var util$4 = util$7, Global$3 = util$4.Global, oldFFGlobalStorage = {
        name: "oldFF-globalStorage",
        read: read$4,
        write: write$4,
        each: each$4,
        remove: remove$4,
        clearAll: clearAll$4
    }, globalStorage = Global$3.globalStorage;

    function read$4(e) {
        return globalStorage[ e ];
    }

    function write$4(e, t) {
        globalStorage[ e ] = t;
    }

    function each$4(e) {
        for (var t = globalStorage.length - 1; t >= 0; t--) {
            var n = globalStorage.key(t);
            e(globalStorage[ n ], n);
        }
    }

    function remove$4(e) {
        return globalStorage.removeItem(e);
    }

    function clearAll$4() {
        each$4((function (e, t) {
            delete globalStorage[ e ];
        }));
    }

    var util$3 = util$7, Global$2 = util$3.Global, oldIEUserDataStorage = {
            name: "oldIE-userDataStorage",
            write: write$3,
            read: read$3,
            each: each$3,
            remove: remove$3,
            clearAll: clearAll$3
        }, storageName = "storejs", doc$1 = Global$2.document, _withStorageEl = _makeIEStorageElFunction(),
        disable = (Global$2.navigator ? Global$2.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);

    function write$3(e, t) {
        if (!disable) {
            var n = fixKey(e);
            _withStorageEl((function (e) {
                e.setAttribute(n, t), e.save(storageName);
            }));
        }
    }

    function read$3(e) {
        if (!disable) {
            var t = fixKey(e), n = null;
            return _withStorageEl((function (e) {
                n = e.getAttribute(t);
            })), n;
        }
    }

    function each$3(e) {
        _withStorageEl((function (t) {
            for (var n = t.XMLDocument.documentElement.attributes, r = n.length - 1; r >= 0; r--) {
                var o = n[ r ];
                e(t.getAttribute(o.name), o.name);
            }
        }));
    }

    function remove$3(e) {
        var t = fixKey(e);
        _withStorageEl((function (e) {
            e.removeAttribute(t), e.save(storageName);
        }));
    }

    function clearAll$3() {
        _withStorageEl((function (e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(storageName);
            for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[ n ].name);
            e.save(storageName);
        }));
    }

    var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

    function fixKey(e) {
        return e.replace(/^\d/, "___$&").replace(forbiddenCharsRegex, "___");
    }

    function _makeIEStorageElFunction() {
        if (!doc$1 || !doc$1.documentElement || !doc$1.documentElement.addBehavior) return null;
        var e, t, n;
        try {
            (t = new ActiveXObject("htmlfile")).open(), t.write("<script>document.w=window<\/script><iframe src=\"/favicon.ico\"></iframe>"), t.close(), e = t.w.frames[ 0 ].document, n = e.createElement("div");
        } catch (t) {
            n = doc$1.createElement("div"), e = doc$1.body;
        }
        return function (t) {
            var r = [].slice.call(arguments, 0);
            r.unshift(n), e.appendChild(n), n.addBehavior("#default#userData"), n.load(storageName), t.apply(this, r), e.removeChild(n);
        };
    }

    var util$2 = util$7, Global$1 = util$2.Global, trim = util$2.trim, cookieStorage = {
        name: "cookieStorage",
        read: read$2,
        write: write$2,
        each: each$2,
        remove: remove$2,
        clearAll: clearAll$2
    }, doc = Global$1.document;

    function read$2(e) {
        if (!e || !_has(e)) return null;
        var t = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
        return unescape(doc.cookie.replace(new RegExp(t), "$1"));
    }

    function each$2(e) {
        for (var t = doc.cookie.split(/; ?/g), n = t.length - 1; n >= 0; n--) if (trim(t[ n ])) {
            var r = t[ n ].split("="), o = unescape(r[ 0 ]);
            e(unescape(r[ 1 ]), o);
        }
    }

    function write$2(e, t) {
        e && (doc.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/");
    }

    function remove$2(e) {
        e && _has(e) && (doc.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
    }

    function clearAll$2() {
        each$2((function (e, t) {
            remove$2(t);
        }));
    }

    function _has(e) {
        return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(doc.cookie);
    }

    var util$1 = util$7, Global = util$1.Global, sessionStorage_1 = {
        name: "sessionStorage",
        read: read$1,
        write: write$1,
        each: each$1,
        remove: remove$1,
        clearAll: clearAll$1
    };

    function sessionStorage$1() {
        return Global.sessionStorage;
    }

    function read$1(e) {
        return sessionStorage$1().getItem(e);
    }

    function write$1(e, t) {
        return sessionStorage$1().setItem(e, t);
    }

    function each$1(e) {
        for (var t = sessionStorage$1().length - 1; t >= 0; t--) {
            var n = sessionStorage$1().key(t);
            e(read$1(n), n);
        }
    }

    function remove$1(e) {
        return sessionStorage$1().removeItem(e);
    }

    function clearAll$1() {
        return sessionStorage$1().clear();
    }

    var memoryStorage_1 = {
        name: "memoryStorage",
        read: read,
        write: write,
        each: each,
        remove: remove,
        clearAll: clearAll
    }, memoryStorage = {};

    function read(e) {
        return memoryStorage[ e ];
    }

    function write(e, t) {
        memoryStorage[ e ] = t;
    }

    function each(e) {
        for (var t in memoryStorage) memoryStorage.hasOwnProperty(t) && e(memoryStorage[ t ], t);
    }

    function remove(e) {
        delete memoryStorage[ e ];
    }

    function clearAll(e) {
        memoryStorage = {};
    }

    var all = [localStorage_1, oldFFGlobalStorage, oldIEUserDataStorage, cookieStorage, sessionStorage_1, memoryStorage_1];
    "object" != typeof JSON && (JSON = {}), function () {
        var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta, rep;

        function f(e) {
            return e < 10 ? "0" + e : e;
        }

        function this_value() {
            return this.valueOf();
        }

        function quote(e) {
            return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? "\"" + e.replace(rx_escapable, (function (e) {
                var t = meta[ e ];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            })) + "\"" : "\"" + e + "\"";
        }

        function str(e, t) {
            var n, r, o, a, i, s = gap, l = t[ e ];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case"string":
                    return quote(l);
                case"number":
                    return isFinite(l) ? String(l) : "null";
                case"boolean":
                case"null":
                    return String(l);
                case"object":
                    if (!l) return "null";
                    if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (a = l.length, n = 0; n < a; n += 1) i[ n ] = str(n, l) || "null";
                        return o = 0 === i.length ? "[]" : gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + s + "]" : "[" + i.join(",") + "]", gap = s, o;
                    }
                    if (rep && "object" == typeof rep) for (a = rep.length, n = 0; n < a; n += 1) "string" == typeof rep[ n ] && (o = str(r = rep[ n ], l)) && i.push(quote(r) + (gap ? ": " : ":") + o); else for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (o = str(r, l)) && i.push(quote(r) + (gap ? ": " : ":") + o);
                    return o = 0 === i.length ? "{}" : gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + s + "}" : "{" + i.join(",") + "}", gap = s, o;
            }
        }

        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        }, JSON.stringify = function (e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " "; else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", { "": e });
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            var j;

            function walk(e, t) {
                var n, r, o = e[ t ];
                if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[ n ] = r : delete o[ n ]);
                return reviver.call(e, t, o);
            }

            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, (function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }))), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
            throw new SyntaxError("JSON.parse");
        });
    }();
    var json2 = json2Plugin;

    function json2Plugin() {
        return {};
    }

    var engine = storeEngine, storages = all, plugins = [json2], store_legacy = engine.createStore(storages, plugins),
        PREFIX = "xappWidget.";

    function get(e) {
        if (store_legacy.enabled) return store_legacy.get(PREFIX + e);
    }

    function set(e, t) {
        if (store_legacy.enabled) return store_legacy.set(PREFIX + e, t);
    }

    var EMAIL_REGEX = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";

    function getCurrentDateString() {
        return (new Date).toISOString() + " ::";
    }

    function log() {
        for (var e = [], t = 0; t < arguments.length; t++) e[ t ] = arguments[ t ];
        console.log.apply(console, __spreadArray([getCurrentDateString()], e, !1));
    }

    function err() {
        for (var e = [], t = 0; t < arguments.length; t++) e[ t ] = arguments[ t ];
        console.error.apply(console, __spreadArray([getCurrentDateString()], e, !1));
    }

    var logOnce = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[ n - 1 ] = arguments[ n ];
        var r = {};
        r[ e ] || (r[ e ] = !0, log(t));
    };

    function tryParseJson(e) {
        try {
            if (e) return JSON.parse(e);
        } catch (e) {
        }
    }

    function persistStateReducer(e, t) {
        var n, r = "xappchat", o = sessionStorage,
            a = null !== (n = tryParseJson(o.getItem(r))) && void 0 !== n ? n : e;
        return function (e, n) {
            void 0 === e && (e = a);
            var i = t(e, n);
            try {
                o.setItem(r, JSON.stringify(i));
            } catch (e) {
                logOnce("storage", "Unable to store redux state");
            }
            return i;
        };
    }

    function joinMessages(e, t) {
        return insertSorted(__spreadArray([], e, !0), t, (function (e, t) {
            return e.timestamp - t.timestamp;
        }));
    }

    function resetReducer(e) {
        return void 0 === e && (e = DEFAULT_STATE), __assign(__assign({}, createDefaultState()), {
            connection: __assign(__assign({}, e.connection), { nonce: uuid() }),
            visitor: e.visitor,
            visitorId: e.visitorId
        });
    }

    function connectionReducer(e, t) {
        switch (log("action", t), t.type) {
            case"connection_update":
                return __assign(__assign({}, e), { connectionStatus: t.detail.status });
            case"receiveToken":
                return __assign(__assign({}, e), { token: t.detail.token });
            case"sendGreeting":
                return __assign(__assign({}, e), { greetingRequested: !0 });
        }
        return e;
    }

    function memberJoin(e, t) {
        var n;
        if (isAgent(t.nick)) {
            var r = e.agents[ t.nick ];
            return __assign(__assign({}, e), {
                isChatting: !0,
                chats: (null == r ? void 0 : r.joined) ? e.chats : joinMessages(e.chats, t),
                agents: (n = {}, n[ t.nick ] = __assign(__assign({}, r), {
                    avatarPath: t.avatarPath,
                    displayName: t.displayName || "Agent",
                    joined: !0,
                    nick: t.nick,
                    typing: !1
                }), n)
            });
        }
        return __assign(__assign({}, e), { isChatting: !0, chats: joinMessages(e.chats, t) });
    }

    function memberLeave(e, t) {
        var n;
        if (isAgent(t.nick)) {
            var r = e.agents[ t.nick ];
            return __assign(__assign({}, e), {
                isChatting: !1,
                chats: (null == r ? void 0 : r.joined) ? joinMessages(e.chats, t) : e.chats,
                agents: (n = {}, n[ t.nick ] = __assign(__assign({}, r), { joined: !1 }), n)
            });
        }
        return __assign(__assign({}, e), { isChatting: !1, chats: joinMessages(e.chats, t) });
    }

    function appendMessageToState(e, t) {
        e.chats = joinMessages(e.chats, t);
    }

    function update(e, t) {
        var n, r, o, a;
        if (void 0 === e && (e = DEFAULT_STATE), log("action", t), "reset" === t.type) return resetReducer(e);
        var i = connectionReducer(e.connection, t);
        switch (e.connection !== i && (e = __assign(__assign({}, e), { connection: i })), t.detail && (e.lastTimestamp = t.detail.timestamp), t.type) {
            case"account_status":
                return __assign(__assign({}, e), { accountStatus: t.detail.status });
            case"department_update":
                return __assign(__assign({}, e), { departments: __assign(__assign({}, e.departments), (n = {}, n[ t.detail.id ] = __assign({}, t.detail), n)) });
            case"visitor_update":
                return __assign(__assign({}, e), { visitor: __assign(__assign({}, e.visitor), t.detail) });
            case"agent_update":
                return __assign(__assign({}, e), { agents: __assign(__assign({}, e.agents), (r = {}, r[ t.detail.nick ] = __assign(__assign({}, t.detail), { typing: (e.agents[ t.detail.nick ] || { typing: !1 }).typing }), r)) });
            case"chat":
                var s = __assign({}, e);
                switch (t.detail.type) {
                    case"chat.memberjoin":
                        return memberJoin(e, t.detail);
                    case"chat.memberleave":
                        return memberLeave(e, t.detail);
                    case"chat.queue.position":
                        return s.queuePosition = t.detail.queuePosition, s;
                    case"chat.request.rating":
                        return appendMessageToState(s, t.detail), __assign(__assign({}, s), { lastRatingRequestTimestamp: t.detail.timestamp });
                    case"chat.rating":
                        return appendMessageToState(s, t.detail), __assign(__assign({}, s), { hasRating: !!t.detail.newRating });
                    case"chat.file":
                    case"chat.msg":
                        appendMessageToState(s, t.detail);
                        var l = t.detail, u = "chat.msg" === l.type ? l.msg : null;
                        return s.chips = (null === (a = null == u ? void 0 : u.options) || void 0 === a ? void 0 : a.length) ? u.options : [], s;
                    case"chat.typing":
                        var c = e.agents[ t.detail.nick ];
                        return __assign(__assign({}, e), { agents: __assign(__assign({}, e.agents), (o = {}, o[ t.detail.nick ] = __assign(__assign({}, c), { typing: t.detail.typing }), o)) });
                    default:
                        return e;
                }
            default:
                return log("Unhandled redux action: ", t.type), e;
        }
    }

    function storeHandler(e, t) {
        var n, r;
        if (void 0 === e && (e = DEFAULT_STATE), "synthetic" === t.type) {
            log("synthetic action", t);
            var o = e.lastTimestamp + 1;
            switch (t.detail.type) {
                case"visitor.send.msg":
                    r = {
                        type: "chat",
                        detail: {
                            type: "chat.msg",
                            displayName: e.visitor.displayName,
                            nick: "visitor:",
                            timestamp: o,
                            msg: t.detail.msg
                        }
                    };
                    break;
                case"visitor.send.file":
                    r = {
                        type: "chat",
                        detail: {
                            type: "chat.file",
                            displayName: e.visitor.displayName,
                            nick: "visitor:",
                            timestamp: o,
                            attachment: t.detail.attachment
                        }
                    };
                    break;
                default:
                    throw new Error("Unknown synthetic action. Detail type: " + t.detail.type);
            }
            n = update(e, r);
        } else n = update(e, t);
        return n;
    }

    var chatReducer = persistStateReducer(DEFAULT_STATE, storeHandler), middlewares = [thunk],
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose_1,
        ChatStore = createStore_1(chatReducer, composeEnhancers(applyMiddleware_1.apply(void 0, middlewares))),
        paramsObj = {};

    function getBasePathFromWidgetSource() {
        var e = document.getElementById("xapp-js");
        return getBasePath(null == e ? void 0 : e.src);
    }

    for (var _i = 0, _a = document.scripts; _i < _a.length; _i++) {
        var script = _a[ _i ];
        if (script.src) {
            var params = script.src.split("?");
            if (!(params.length < 2)) {
                var searchParams = new URLSearchParams(params[ 1 ]);
                searchParams.forEach((function (e, t) {
                    paramsObj[ t ] = e;
                }));
            }
        }
    }
    var defaultServerUrl = process.env.SERVER_URL;

    function getBasePath(e) {
        if (!e) return { path: e };
        var t = e.lastIndexOf("/"), n = "";
        t >= 0 && (n = e.substr(0, t));
        var r = new URL(e);
        return { path: n, key: new URLSearchParams(r.search).get("key") };
    }

    process.env.ACCOUNT_KEY;
    var ChatConfigContext = react.exports.createContext(null);

    function useWidgetEnv() {
        var e = react.exports.useContext(ChatConfigContext);
        return null == e ? void 0 : e.env;
    }

    function executeAction(e, t) {
        return function (n) {
            return function (r) {
                n.sendChatMsg({ text: e, token: t }, (function (e) {
                    e && log("Error sending message", e);
                })), r({
                    type: "synthetic",
                    detail: {
                        type: "visitor.send.msg",
                        msg: { text: t ? e + " (from the list)" : e },
                        timestamp: +Date()
                    }
                });
            };
        };
    }

    function receiveToken(e) {
        return { type: "receiveToken", detail: { token: e, timestamp: +Date() } };
    }

    function sendChatRating(e) {
        return function (t) {
            return function () {
                t.sendChatRating(e);
            };
        };
    }

    function sendFile(e) {
        return function (t) {
            return function (n, r) {
                var o = r();
                if ("offline" !== o.accountStatus || o.isChatting) {
                    var a = { mimeType: e.type, name: e.name, size: e.size, url: window.URL.createObjectURL(e) };
                    t.sendFile(e, (function (e) {
                        e && log("Error sending file", e);
                    })), n({
                        type: "synthetic",
                        detail: { type: "visitor.send.file", attachment: a, nick: "", timestamp: +Date() }
                    });
                }
            };
        };
    }

    function sendGreeting(e) {
        return void 0 === e && (e = !1), function (t) {
            return function (n, r) {
                e || (r().connection.greetingRequested || (log("sending greeting"), t.sendChatMsg({ text: void 0 }, (function (e) {
                    e && log("Error sending message"), n({ type: "sendGreeting", detail: void 0 });
                }))));
            };
        };
    }

    function sendOfflineMsg(e) {
        return function (t) {
            return function () {
                t.sendOfflineMsg(e, (function (e) {
                    e && log(e);
                }));
            };
        };
    }

    function sendTyping(e) {
        return function (t) {
            return function () {
                t.sendTyping(e);
            };
        };
    }

    function sendVisitorInfo(e) {
        return function (t) {
            return function () {
                t.setVisitorInfo(e, (function (e) {
                    e && log(e);
                }));
            };
        };
    }

    function setAccountStatus(e) {
        return { type: "account_status", detail: { status: e, timestamp: +new Date } };
    }

    function setConnectionStatus(e) {
        return { type: "connection_update", detail: { status: e, timestamp: +new Date } };
    }

    function throwBadKind(e) {
        throw new Error("Unknown kind " + e);
    }

    var LogChat = function () {
        function e(e) {
            this.inner = e;
        }

        return e.prototype.init = function (e) {
            this.inner.init(e);
        }, e.prototype.sendOfflineMsg = function (e, t) {
            log("CLIENT: sendOfflineMsg: " + JSON.stringify(e)), this.inner.sendOfflineMsg(e, t);
        }, e.prototype.sendChatMsg = function (e, t) {
            log("CLIENT: sendChatMsg: " + JSON.stringify(e)), this.inner.sendChatMsg(e, t);
        }, e.prototype.sendTyping = function (e) {
            log("CLIENT: sendTyping: " + JSON.stringify(e)), this.inner.sendTyping(e);
        }, e.prototype.setVisitorInfo = function (e, t) {
            log("CLIENT: setVisitorInfo: " + JSON.stringify(e)), this.inner.setVisitorInfo(e, t);
        }, e.prototype.sendChatRating = function (e) {
            log("CLIENT: sendChatRating: " + JSON.stringify(e)), this.inner.sendChatRating(e);
        }, e.prototype.sendFile = function (e, t) {
            log("CLIENT: sendFile: " + JSON.stringify(e)), this.inner.sendFile(e, t);
        }, e.prototype.markAsRead = function () {
            log("CLIENT: markAsRead:"), this.inner.markAsRead();
        }, e.prototype.flush = function () {
            log("CLIENT: flush:"), this.inner.flush();
        }, e.prototype.dispose = function () {
            log("CLIENT: dispose:"), this.inner.dispose();
        }, e;
    }();

    function postMessageToStentor(e, t, n) {
        return __awaiter(this, void 0, void 0, (function () {
            var r, o;
            return __generator(this, (function (a) {
                switch (a.label) {
                    case 0:
                        return r = JSON.stringify(e), log("URL: " + t), log("BODY: " + r), [4, fetch(t, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + n,
                                "User-Agent": "Stentor Chat Server"
                            },
                            body: r,
                            mode: "cors"
                        })];
                    case 1:
                        if (!(o = a.sent()).ok) throw new Error("Status " + o.status + ", Text: " + o.statusText);
                        return [2, o.json()];
                }
            }));
        }));
    }

    function isCard(e) {
        return !!e && "CARD" === e.type;
    }

    function isList(e) {
        return !!e && ("LIST" === e.type || "CAROUSEL" === e.type);
    }

    function responseToMessage(e, t) {
        var n, r, o, a, i, s, l, u, c, f;
        if (void 0 === t && (t = (new Date).getTime()), !e) return a;
        if (e.outputSpeech && (c = "string" == typeof e.outputSpeech ? { displayText: e.outputSpeech } : e.outputSpeech), e.reprompt && (f = "string" == typeof e.reprompt ? { displayText: e.reprompt } : e.reprompt), c && (i = c.displayText, s = c.html), e.displays && e.displays.length > 0) {
            var d = e.displays[ 0 ];
            isCard(d) ? l = d : isList(d) && (u = d);
        }
        if ("TRANSFER_CALL" === e.system) a = {
            type: "handOff",
            timestamp: t,
            handoffMessage: i,
            handoffTarget: null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.transferPhoneNumber,
            endSession: !1
        }; else if (null === (r = e.system) || void 0 === r ? void 0 : r.startsWith("PERMISSION_")) {
            if ("PERMISSION_EMAIL" !== e.system) throw new Error("Unsupported permission: " + e.system);
            (a = {
                type: "permissionRequest",
                permissionRequestType: "EMAIL",
                timestamp: t,
                msg: {},
                endSession: !1
            }).msg = __assign(__assign({}, a.msg), { text: "" + e.data.permissionRequestTTSContext }), this.permissionRequestPending = !0, this.permissionRequestTime = (new Date).getTime(), this.permissionRequestType = "EMAIL";
        } else if (a = {
            type: "msg",
            timestamp: t,
            msg: {},
            endSession: !f || !(f.displayText || f.ssml)
        }, l && (a.msg.card = {
            content: l.content,
            imageUrl: l.smallImageUrl,
            title: l.title,
            imageActionUrl: null === (o = l) || void 0 === o ? void 0 : o.imageActionUrl
        }, l.buttons && l.buttons.length > 0 && (a.msg.card.buttons = l.buttons.map((function (e) {
            return { actionUrl: e.openUrlAction, label: e.title };
        })))), u && (a.msg.list = {
            type: u.type, title: u.title, items: u.items.map((function (e) {
                var t, n, r = {
                    title: e.title,
                    subTitle: e.description,
                    token: e.token,
                    url: e.url,
                    imageUrl: null === (t = e.image) || void 0 === t ? void 0 : t.url,
                    imageActionUrl: null === (n = e.image) || void 0 === n ? void 0 : n.imageActionUrl
                }, o = e.buttons;
                return o && o.length > 0 && (r.buttons = o.map((function (e) {
                    return { actionUrl: e.openUrlAction, label: e.title };
                }))), r;
            }))
        }), i && !s && (a.msg = __assign(__assign({}, a.msg), { text: i })), s && (a.msg = __assign(__assign({}, a.msg), { html: s })), (i || s) && (a.msg.options = [], c.suggestions && c.suggestions.length > 0)) for (var p = 0, h = c.suggestions; p < h.length; p++) {
            var m = h[ p ];
            "string" == typeof m ? a.msg.options.push(m) : a.msg.options.push({ label: m.title, actionUrl: m.url });
        }
        return a;
    }

    var PERMISSION_QUESTION_EXPIRATION_MS = 3e5, StentorDirectChat = function () {
        function e(e) {
            var t = this;
            this._userId = "", this._sessionId = "", this.widget = {
                setConnectionStatus: function (e) {
                    log("SERVER: connection_update: " + JSON.stringify(e)), t.dispatch(setConnectionStatus(e));
                }, setAccountStatus: function (e) {
                    log("SERVER: account_status: " + JSON.stringify(e)), t.dispatch(setAccountStatus(e));
                }, sendNewMessage: function (e) {
                    log("SERVER: new message: " + JSON.stringify(e)), t.dispatch({
                        type: "chat",
                        detail: {
                            type: "chat.msg",
                            displayName: e.userName,
                            nick: "agent:robot",
                            msg: e.msg,
                            timestamp: +new Date
                        }
                    });
                }, userJoined: function (e) {
                    log("SERVER: user joined: " + JSON.stringify(e)), t.visitorInfo.token = e.token, t.dispatch({
                        type: "chat",
                        detail: {
                            type: "chat.memberjoin",
                            displayName: e.username,
                            nick: "agent:robot",
                            timestamp: +new Date,
                            avatarPath: e.avatarPath
                        }
                    });
                }, userLeft: function (e) {
                    log("SERVER: user left: " + JSON.stringify(e)), t.dispatch({
                        type: "chat",
                        detail: {
                            type: "chat.memberleave",
                            displayName: e.username,
                            nick: "agent:robot",
                            timestamp: +new Date
                        }
                    });
                }, typing: function () {
                    t.dispatch({
                        type: "chat",
                        detail: { type: "chat.typing", nick: "agent:robot", typing: !0, timestamp: +new Date }
                    });
                }, stopTyping: function () {
                    t.dispatch({
                        type: "chat",
                        detail: { type: "chat.typing", nick: "agent:robot", typing: !1, timestamp: +new Date }
                    });
                }, disconnect: function () {
                    log("SERVER: disconnect"), t.dispatch(setAccountStatus("offline")), t.dispatch(setConnectionStatus("offline"));
                }, reconnect: function () {
                    log("SERVER: reconnect"), t.dispatch(setAccountStatus("online"));
                }, reconnectError: function () {
                    log("SERVER: reconnect error"), t.dispatch(setAccountStatus("offline"));
                }
            }, this.config = e, this.permissionRequestPending = !1, this.permissionRequestTime = -1, this.isNewSession = !1;
        }

        return e.prototype.getAvatarPath = function () {
            return this.avatarPath;
        }, e.prototype.init = function (e) {
            this.dispatch = e, log("got init auth: " + this.config.key), this.widget.setConnectionStatus("online"), this.widget.setAccountStatus("online");
        }, e.prototype.sendOfflineMsg = function (e, t) {
            t();
        }, e.prototype.sendChatMsg = function (e, t) {
            return __awaiter(this, void 0, void 0, (function () {
                var n, r;
                return __generator(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return n = {
                                msg: e,
                                timestamp: (new Date).getTime(),
                                agent: !1,
                                type: "msg"
                            }, [4, this.post(n)];
                        case 1:
                            return (r = o.sent()).userName || (r.userName = "Bot"), this.widget.sendNewMessage(r), t(), [2];
                    }
                }));
            }));
        }, e.prototype.sendTyping = function () {
        }, e.prototype.setVisitorInfo = function (e, t) {
            this.visitorInfo = e, this.startSession(), this.widget.userJoined({
                username: "Bot",
                avatarPath: this.getAvatarPath()
            }), t();
        }, e.prototype.sendChatRating = function () {
        }, e.prototype.sendFile = function (e, t) {
            t();
        }, e.prototype.markAsRead = function () {
        }, e.prototype.flush = function () {
        }, e.prototype.dispose = function () {
        }, e.prototype.post = function (e) {
            var t, n;
            return __awaiter(this, void 0, void 0, (function () {
                var r, o, a, i, s, l, u, c, f;
                return __generator(this, (function (d) {
                    switch (d.label) {
                        case 0:
                            return o = (new Date).getTime(), this.isNewSession && !(null === (t = null == e ? void 0 : e.msg) || void 0 === t ? void 0 : t.text) ? r = {
                                type: "LAUNCH_REQUEST",
                                rawQuery: null === (n = null == e ? void 0 : e.msg) || void 0 === n ? void 0 : n.text,
                                sessionId: this._sessionId,
                                userId: this._userId,
                                isNewSession: !0,
                                intentId: "LaunchRequest",
                                platform: "stentor-platform",
                                channel: "widget"
                            } : this.permissionRequestPending ? (a = o - this.permissionRequestTime > PERMISSION_QUESTION_EXPIRATION_MS, i = e.msg.text.toLowerCase(), s = looksLikeEmail(i), (l = !a && s) && s && (this.visitorInfo.email = i), u = {}, l && "EMAIL" === this.permissionRequestType && (u.email = this.visitorInfo.email, u.name = this.visitorInfo.displayName), r = {
                                type: "PERMISSION_GRANT",
                                rawQuery: e.msg.text,
                                sessionId: this._sessionId,
                                userId: this._userId,
                                isNewSession: !1,
                                granted: l,
                                userProfile: u,
                                intentId: "PermissionGrant",
                                platform: "stentor-platform",
                                channel: "widget"
                            }, this.permissionRequestTime = -1, this.permissionRequestPending = !1, this.permissionRequestType = void 0) : r = e.msg.token ? {
                                type: "OPTION_SELECT_REQUEST",
                                token: e.msg.token,
                                sessionId: this._sessionId,
                                userId: this._userId,
                                isNewSession: !1,
                                intentId: "OptionSelect",
                                platform: "stentor-platform",
                                channel: "widget"
                            } : {
                                type: "INTENT_REQUEST",
                                rawQuery: e.msg.text,
                                sessionId: this._sessionId,
                                userId: this._userId,
                                isNewSession: !1,
                                intentId: "NLU_RESULT_PLACEHOLDER",
                                platform: "stentor-platform",
                                channel: "widget"
                            }, log("Visitor says: " + JSON.stringify(r, void 0, 2)), this.widget.typing(), [4, postMessageToStentor(r, this.config.url, this.config.key).catch((function (e) {
                                return err("POST failed: " + e.message), { text: "Bot doesn't respond. Reason: " + e.message };
                            }))];
                        case 1:
                            return c = d.sent(), this.widget.stopTyping(), log("Bot says: " + JSON.stringify(c, void 0, 2)), this.isNewSession = !1, (f = responseToMessage(c)) || ((f = {
                                type: "userLeft",
                                timestamp: o,
                                msg: {},
                                endSession: !0
                            }).msg = { text: "Oops. The bot doesn't respond... Try later!" }), [2, f];
                    }
                }));
            }));
        }, e.prototype.startSession = function () {
            this.visitorInfo.visitorId ? this._userId = "stentor-widget-user-" + this.visitorInfo.visitorId : this.visitorInfo.email ? this._userId = "stentor-widget-user-" + this.visitorInfo.email : this._userId = "stentor-widget-user-" + uuid(), this._sessionId = "stentor-widget-session-" + uuid(), this.isNewSession = !0;
        }, Object.defineProperty(e.prototype, "userId", {
            get: function () {
                return this._userId;
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
                return this._sessionId;
            }, enumerable: !1, configurable: !0
        }), e;
    }();

    function looksLikeEmail(e) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
    }

    var StentorLocalChat = function () {
            function e() {
            }

            return e.prototype.init = function () {
            }, e.prototype.sendOfflineMsg = function () {
            }, e.prototype.sendChatMsg = function () {
            }, e.prototype.sendTyping = function () {
            }, e.prototype.setVisitorInfo = function () {
            }, e.prototype.sendChatRating = function () {
            }, e.prototype.sendFile = function () {
            }, e.prototype.markAsRead = function () {
            }, e.prototype.flush = function () {
            }, e.prototype.dispose = function () {
            }, e;
        }(), build = { exports: {} }, url$1 = {},
        re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        parseuri$2 = function (e) {
            var t = e, n = e.indexOf("["), r = e.indexOf("]");
            -1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
            for (var o = re.exec(e || ""), a = {}, i = 14; i--;) a[ parts[ i ] ] = o[ i ] || "";
            return -1 != n && -1 != r && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = pathNames(a, a.path), a.queryKey = queryKey(a, a.query), a;
        };

    function pathNames(e, t) {
        var n = t.replace(/\/{2,9}/g, "/").split("/");
        return "/" != t.substr(0, 1) && 0 !== t.length || n.splice(0, 1), "/" == t.substr(t.length - 1, 1) && n.splice(n.length - 1, 1), n;
    }

    function queryKey(e, t) {
        var n = {};
        return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (e, t, r) {
            t && (n[ t ] = r);
        })), n;
    }

    var browser = { exports: {} }, s = 1e3, m = 60 * s, h = 60 * m, d = 24 * h, w = 7 * d, y = 365.25 * d,
        ms = function (e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && e.length > 0) return parse(e);
            if ("number" === n && isFinite(e)) return t.long ? fmtLong(e) : fmtShort(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };

    function parse(e) {
        if (!((e = String(e)).length > 100)) {
            var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[ 1 ]);
                switch ((t[ 2 ] || "ms").toLowerCase()) {
                    case"years":
                    case"year":
                    case"yrs":
                    case"yr":
                    case"y":
                        return n * y;
                    case"weeks":
                    case"week":
                    case"w":
                        return n * w;
                    case"days":
                    case"day":
                    case"d":
                        return n * d;
                    case"hours":
                    case"hour":
                    case"hrs":
                    case"hr":
                    case"h":
                        return n * h;
                    case"minutes":
                    case"minute":
                    case"mins":
                    case"min":
                    case"m":
                        return n * m;
                    case"seconds":
                    case"second":
                    case"secs":
                    case"sec":
                    case"s":
                        return n * s;
                    case"milliseconds":
                    case"millisecond":
                    case"msecs":
                    case"msec":
                    case"ms":
                        return n;
                    default:
                        return;
                }
            }
        }
    }

    function fmtShort(e) {
        var t = Math.abs(e);
        return t >= d ? Math.round(e / d) + "d" : t >= h ? Math.round(e / h) + "h" : t >= m ? Math.round(e / m) + "m" : t >= s ? Math.round(e / s) + "s" : e + "ms";
    }

    function fmtLong(e) {
        var t = Math.abs(e);
        return t >= d ? plural(e, t, d, "day") : t >= h ? plural(e, t, h, "hour") : t >= m ? plural(e, t, m, "minute") : t >= s ? plural(e, t, s, "second") : e + " ms";
    }

    function plural(e, t, n, r) {
        var o = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (o ? "s" : "");
    }

    function setup(e) {
        function t(e) {
            let r, o, a, i = null;

            function s(...e) {
                if (!s.enabled) return;
                const n = s, o = Number(new Date), a = o - (r || o);
                n.diff = a, n.prev = r, n.curr = o, r = o, e[ 0 ] = t.coerce(e[ 0 ]), "string" != typeof e[ 0 ] && e.unshift("%O");
                let i = 0;
                e[ 0 ] = e[ 0 ].replace(/%([a-zA-Z%])/g, ((r, o) => {
                    if ("%%" === r) return "%";
                    i++;
                    const a = t.formatters[ o ];
                    if ("function" == typeof a) {
                        const t = e[ i ];
                        r = a.call(n, t), e.splice(i, 1), i--;
                    }
                    return r;
                })), t.formatArgs.call(n, e);
                (n.log || t.log).apply(n, e);
            }

            return s.namespace = e, s.useColors = t.useColors(), s.color = t.selectColor(e), s.extend = n, s.destroy = t.destroy, Object.defineProperty(s, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null !== i ? i : (o !== t.namespaces && (o = t.namespaces, a = t.enabled(e)), a),
                set: e => {
                    i = e;
                }
            }), "function" == typeof t.init && t.init(s), s;
        }

        function n(e, n) {
            const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return r.log = this.log, r;
        }

        function r(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
        }

        return t.debug = t, t.default = t, t.coerce = function (e) {
            if (e instanceof Error) return e.stack || e.message;
            return e;
        }, t.disable = function () {
            const e = [...t.names.map(r), ...t.skips.map(r).map((e => "-" + e))].join(",");
            return t.enable(""), e;
        }, t.enable = function (e) {
            let n;
            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
            const r = ("string" == typeof e ? e : "").split(/[\s,]+/), o = r.length;
            for (n = 0; n < o; n++) r[ n ] && ("-" === (e = r[ n ].replace(/\*/g, ".*?"))[ 0 ] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        }, t.enabled = function (e) {
            if ("*" === e[ e.length - 1 ]) return !0;
            let n, r;
            for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[ n ].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++) if (t.names[ n ].test(e)) return !0;
            return !1;
        }, t.humanize = ms, t.destroy = function () {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }, Object.keys(e).forEach((n => {
            t[ n ] = e[ n ];
        })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function (e) {
            let n = 0;
            for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
            return t.colors[ Math.abs(n) % t.colors.length ];
        }, t.enable(t.load()), t;
    }

    var common = setup;
    !function (e, t) {
        t.formatArgs = function (t) {
            if (t[ 0 ] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[ 0 ] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0, o = 0;
            t[ 0 ].replace(/%[a-zA-Z%]/g, (e => {
                "%%" !== e && (r++, "%c" === e && (o = r));
            })), t.splice(o, 0, n);
        }, t.save = function (e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {
            }
        }, t.load = function () {
            let e;
            try {
                e = t.storage.getItem("debug");
            } catch (e) {
            }
            !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG);
            return e;
        }, t.useColors = function () {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }, t.storage = function () {
            try {
                return localStorage;
            } catch (e) {
            }
        }(), t.destroy = (() => {
            let e = !1;
            return () => {
                e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
            };
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {
        }), e.exports = common(t);
        const { formatters: n } = e.exports;
        n.j = function (e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        };
    }(browser, browser.exports), Object.defineProperty(url$1, "__esModule", { value: !0 }), url$1.url = void 0;
    const parseuri$1 = parseuri$2, debug$7 = browser.exports("socket.io-client:url");

    function url(e, t = "", n) {
        let r = e;
        n = n || "undefined" != typeof location && location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (debug$7("protocol-less url %s", e), e = void 0 !== n ? n.protocol + "//" + e : "https://" + e), debug$7("parse %s", e), r = parseuri$1(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
        const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
        return r.id = r.protocol + "://" + o + ":" + r.port + t, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r;
    }

    url$1.url = url;
    var manager = {}, lib$1 = { exports: {} }, transports$1 = {}, hasCors = { exports: {} };
    try {
        hasCors.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
    } catch (err) {
        hasCors.exports = !1;
    }
    var globalThis_browser = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    const hasCORS = hasCors.exports, globalThis$4 = globalThis_browser;
    var xmlhttprequest = function (e) {
        const t = e.xdomain, n = e.xscheme, r = e.enablesXDR;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || hasCORS)) return new XMLHttpRequest;
        } catch (e) {
        }
        try {
            if ("undefined" != typeof XDomainRequest && !n && r) return new XDomainRequest;
        } catch (e) {
        }
        if (!t) try {
            return new (globalThis$4[ ["Active"].concat("Object").join("X") ])("Microsoft.XMLHTTP");
        } catch (e) {
        }
    }, pollingXhr = { exports: {} };
    const PACKET_TYPES$1 = Object.create(null);
    PACKET_TYPES$1.open = "0", PACKET_TYPES$1.close = "1", PACKET_TYPES$1.ping = "2", PACKET_TYPES$1.pong = "3", PACKET_TYPES$1.message = "4", PACKET_TYPES$1.upgrade = "5", PACKET_TYPES$1.noop = "6";
    const PACKET_TYPES_REVERSE$1 = Object.create(null);
    Object.keys(PACKET_TYPES$1).forEach((e => {
        PACKET_TYPES_REVERSE$1[ PACKET_TYPES$1[ e ] ] = e;
    }));
    const ERROR_PACKET$1 = { type: "error", data: "parser error" };
    var commons = {
        PACKET_TYPES: PACKET_TYPES$1,
        PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE$1,
        ERROR_PACKET: ERROR_PACKET$1
    };
    const { PACKET_TYPES: PACKET_TYPES } = commons,
        withNativeBlob$1 = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
        withNativeArrayBuffer$2 = "function" == typeof ArrayBuffer,
        isView$1 = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
        encodePacket$1 = ({
                              type: e,
                              data: t
                          }, n, r) => withNativeBlob$1 && t instanceof Blob ? n ? r(t) : encodeBlobAsBase64(t, r) : withNativeArrayBuffer$2 && (t instanceof ArrayBuffer || isView$1(t)) ? n ? r(t) : encodeBlobAsBase64(new Blob([t]), r) : r(PACKET_TYPES[ e ] + (t || "")),
        encodeBlobAsBase64 = (e, t) => {
            const n = new FileReader;
            return n.onload = function () {
                const e = n.result.split(",")[ 1 ];
                t("b" + e);
            }, n.readAsDataURL(e);
        };
    var encodePacket_browser = encodePacket$1, base64Arraybuffer = {}, chars;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64Arraybuffer.encode = function (e) {
        var t, n = new Uint8Array(e), r = n.length, o = "";
        for (t = 0; t < r; t += 3) o += chars[ n[ t ] >> 2 ], o += chars[ (3 & n[ t ]) << 4 | n[ t + 1 ] >> 4 ], o += chars[ (15 & n[ t + 1 ]) << 2 | n[ t + 2 ] >> 6 ], o += chars[ 63 & n[ t + 2 ] ];
        return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o;
    }, base64Arraybuffer.decode = function (e) {
        var t, n, r, o, a, i = .75 * e.length, s = e.length, l = 0;
        "=" === e[ e.length - 1 ] && (i--, "=" === e[ e.length - 2 ] && i--);
        var u = new ArrayBuffer(i), c = new Uint8Array(u);
        for (t = 0; t < s; t += 4) n = chars.indexOf(e[ t ]), r = chars.indexOf(e[ t + 1 ]), o = chars.indexOf(e[ t + 2 ]), a = chars.indexOf(e[ t + 3 ]), c[ l++ ] = n << 2 | r >> 4, c[ l++ ] = (15 & r) << 4 | o >> 2, c[ l++ ] = (3 & o) << 6 | 63 & a;
        return u;
    };
    const { PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE, ERROR_PACKET: ERROR_PACKET } = commons,
        withNativeArrayBuffer$1 = "function" == typeof ArrayBuffer;
    let base64decoder;
    withNativeArrayBuffer$1 && (base64decoder = base64Arraybuffer);
    const decodePacket$1 = (e, t) => {
        if ("string" != typeof e) return { type: "message", data: mapBinary(e, t) };
        const n = e.charAt(0);
        if ("b" === n) return { type: "message", data: decodeBase64Packet(e.substring(1), t) };
        return PACKET_TYPES_REVERSE[ n ] ? e.length > 1 ? {
            type: PACKET_TYPES_REVERSE[ n ],
            data: e.substring(1)
        } : { type: PACKET_TYPES_REVERSE[ n ] } : ERROR_PACKET;
    }, decodeBase64Packet = (e, t) => {
        if (base64decoder) {
            const n = base64decoder.decode(e);
            return mapBinary(n, t);
        }
        return { base64: !0, data: e };
    }, mapBinary = (e, t) => "blob" === t && e instanceof ArrayBuffer ? new Blob([e]) : e;
    var decodePacket_browser = decodePacket$1;
    const encodePacket = encodePacket_browser, decodePacket = decodePacket_browser, SEPARATOR = String.fromCharCode(30),
        encodePayload = (e, t) => {
            const n = e.length, r = new Array(n);
            let o = 0;
            e.forEach(((e, a) => {
                encodePacket(e, !1, (e => {
                    r[ a ] = e, ++o === n && t(r.join(SEPARATOR));
                }));
            }));
        }, decodePayload = (e, t) => {
            const n = e.split(SEPARATOR), r = [];
            for (let e = 0; e < n.length; e++) {
                const o = decodePacket(n[ e ], t);
                if (r.push(o), "error" === o.type) break;
            }
            return r;
        };
    var lib = {
        protocol: 4,
        encodePacket: encodePacket,
        encodePayload: encodePayload,
        decodePacket: decodePacket,
        decodePayload: decodePayload
    }, componentEmitter = { exports: {} };
    !function (e) {
        function t(e) {
            if (e) return function (e) {
                for (var n in t.prototype) e[ n ] = t.prototype[ n ];
                return e;
            }(e);
        }

        e.exports = t, t.prototype.on = t.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[ "$" + e ] = this._callbacks[ "$" + e ] || []).push(t), this;
        }, t.prototype.once = function (e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments);
            }

            return n.fn = t, this.on(e, n), this;
        }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n, r = this._callbacks[ "$" + e ];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks[ "$" + e ], this;
            for (var o = 0; o < r.length; o++) if ((n = r[ o ]) === t || n.fn === t) {
                r.splice(o, 1);
                break;
            }
            return 0 === r.length && delete this._callbacks[ "$" + e ], this;
        }, t.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks[ "$" + e ], r = 1; r < arguments.length; r++) t[ r - 1 ] = arguments[ r ];
            if (n) {
                r = 0;
                for (var o = (n = n.slice(0)).length; r < o; ++r) n[ r ].apply(this, t);
            }
            return this;
        }, t.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[ "$" + e ] || [];
        }, t.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length;
        };
    }(componentEmitter);
    const parser$4 = lib, Emitter$3 = componentEmitter.exports, debug$6 = browser.exports("engine.io-client:transport");

    class Transport$2 extends Emitter$3 {
        constructor(e) {
            super(), this.opts = e, this.query = e.query, this.readyState = "", this.socket = e.socket;
        }

        onError(e, t) {
            const n = new Error(e);
            return n.type = "TransportError", n.description = t, this.emit("error", n), this;
        }

        open() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
        }

        close() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
        }

        send(e) {
            "open" === this.readyState ? this.write(e) : debug$6("transport is not open, discarding packets");
        }

        onOpen() {
            this.readyState = "open", this.writable = !0, this.emit("open");
        }

        onData(e) {
            const t = parser$4.decodePacket(e, this.socket.binaryType);
            this.onPacket(t);
        }

        onPacket(e) {
            this.emit("packet", e);
        }

        onClose() {
            this.readyState = "closed", this.emit("close");
        }
    }

    var transport = Transport$2, parseqs$3 = {
            encode: function (e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[ n ]));
                return t;
            }, decode: function (e) {
                for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
                    var a = n[ r ].split("=");
                    t[ decodeURIComponent(a[ 0 ]) ] = decodeURIComponent(a[ 1 ]);
                }
                return t;
            }
        }, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {},
        seed = 0, i = 0, prev;

    function encode(e) {
        var t = "";
        do {
            t = alphabet[ e % length ] + t, e = Math.floor(e / length);
        } while (e > 0);
        return t;
    }

    function decode(e) {
        var t = 0;
        for (i = 0; i < e.length; i++) t = t * length + map[ e.charAt(i) ];
        return t;
    }

    function yeast$2() {
        var e = encode(+new Date);
        return e !== prev ? (seed = 0, prev = e) : e + "." + encode(seed++);
    }

    for (; i < length; i++) map[ alphabet[ i ] ] = i;
    yeast$2.encode = encode, yeast$2.decode = decode;
    var yeast_1 = yeast$2;
    const Transport$1 = transport, parseqs$2 = parseqs$3, parser$3 = lib, yeast$1 = yeast_1,
        debug$5 = browser.exports("engine.io-client:polling");

    class Polling$2 extends Transport$1 {
        get name() {
            return "polling";
        }

        doOpen() {
            this.poll();
        }

        pause(e) {
            this.readyState = "pausing";
            const t = () => {
                debug$5("paused"), this.readyState = "paused", e();
            };
            if (this.polling || !this.writable) {
                let e = 0;
                this.polling && (debug$5("we are currently polling - waiting to pause"), e++, this.once("pollComplete", (function () {
                    debug$5("pre-pause polling complete"), --e || t();
                }))), this.writable || (debug$5("we are currently writing - waiting to pause"), e++, this.once("drain", (function () {
                    debug$5("pre-pause writing complete"), --e || t();
                })));
            } else t();
        }

        poll() {
            debug$5("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
        }

        onData(e) {
            debug$5("polling got data %s", e);
            parser$3.decodePayload(e, this.socket.binaryType).forEach((e => {
                if ("opening" === this.readyState && "open" === e.type && this.onOpen(), "close" === e.type) return this.onClose(), !1;
                this.onPacket(e);
            })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : debug$5("ignoring poll - transport state \"%s\"", this.readyState));
        }

        doClose() {
            const e = () => {
                debug$5("writing close packet"), this.write([{ type: "close" }]);
            };
            "open" === this.readyState ? (debug$5("transport open - closing"), e()) : (debug$5("transport not open - deferring close"), this.once("open", e));
        }

        write(e) {
            this.writable = !1, parser$3.encodePayload(e, (e => {
                this.doWrite(e, (() => {
                    this.writable = !0, this.emit("drain");
                }));
            }));
        }

        uri() {
            let e = this.query || {};
            const t = this.opts.secure ? "https" : "http";
            let n = "";
            !1 !== this.opts.timestampRequests && (e[ this.opts.timestampParam ] = yeast$1()), this.supportsBinary || e.sid || (e.b64 = 1), e = parseqs$2.encode(e), this.opts.port && ("https" === t && 443 !== Number(this.opts.port) || "http" === t && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), e.length && (e = "?" + e);
            return t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + e;
        }
    }

    var polling$1 = Polling$2,
        util = { pick: (e, ...t) => t.reduce(((t, n) => (e.hasOwnProperty(n) && (t[ n ] = e[ n ]), t)), {}) };
    const XMLHttpRequest$2 = xmlhttprequest, Polling$1 = polling$1,
        Emitter$2 = componentEmitter.exports, { pick: pick$1 } = util, globalThis$3 = globalThis_browser,
        debug$4 = browser.exports("engine.io-client:polling-xhr");

    function empty$1() {
    }

    const hasXHR2 = null != new XMLHttpRequest$2({ xdomain: !1 }).responseType;

    class XHR$1 extends Polling$1 {
        constructor(e) {
            if (super(e), "undefined" != typeof location) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t;
            }
            const t = e && e.forceBase64;
            this.supportsBinary = hasXHR2 && !t;
        }

        request(e = {}) {
            return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new Request(this.uri(), e);
        }

        doWrite(e, t) {
            const n = this.request({ method: "POST", data: e });
            n.on("success", t), n.on("error", (e => {
                this.onError("xhr post error", e);
            }));
        }

        doPoll() {
            debug$4("xhr poll");
            const e = this.request();
            e.on("data", this.onData.bind(this)), e.on("error", (e => {
                this.onError("xhr poll error", e);
            })), this.pollXhr = e;
        }
    }

    class Request extends Emitter$2 {
        constructor(e, t) {
            super(), this.opts = t, this.method = t.method || "GET", this.uri = e, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.create();
        }

        create() {
            const e = pick$1(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
            const t = this.xhr = new XMLHttpRequest$2(e);
            try {
                debug$4("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                try {
                    if (this.opts.extraHeaders) {
                        t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                        for (let e in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(e) && t.setRequestHeader(e, this.opts.extraHeaders[ e ]);
                    }
                } catch (e) {
                }
                if ("POST" === this.method) try {
                    t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (e) {
                }
                try {
                    t.setRequestHeader("Accept", "*/*");
                } catch (e) {
                }
                "withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), this.hasXDR() ? (t.onload = () => {
                    this.onLoad();
                }, t.onerror = () => {
                    this.onError(t.responseText);
                }) : t.onreadystatechange = () => {
                    4 === t.readyState && (200 === t.status || 1223 === t.status ? this.onLoad() : setTimeout((() => {
                        this.onError("number" == typeof t.status ? t.status : 0);
                    }), 0));
                }, debug$4("xhr data %s", this.data), t.send(this.data);
            } catch (e) {
                return void setTimeout((() => {
                    this.onError(e);
                }), 0);
            }
            "undefined" != typeof document && (this.index = Request.requestsCount++, Request.requests[ this.index ] = this);
        }

        onSuccess() {
            this.emit("success"), this.cleanup();
        }

        onData(e) {
            this.emit("data", e), this.onSuccess();
        }

        onError(e) {
            this.emit("error", e), this.cleanup(!0);
        }

        cleanup(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = empty$1 : this.xhr.onreadystatechange = empty$1, e) try {
                    this.xhr.abort();
                } catch (e) {
                }
                "undefined" != typeof document && delete Request.requests[ this.index ], this.xhr = null;
            }
        }

        onLoad() {
            const e = this.xhr.responseText;
            null !== e && this.onData(e);
        }

        hasXDR() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }

        abort() {
            this.cleanup();
        }
    }

    if (Request.requestsCount = 0, Request.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", unloadHandler); else if ("function" == typeof addEventListener) {
        const e = "onpagehide" in globalThis$3 ? "pagehide" : "unload";
        addEventListener(e, unloadHandler, !1);
    }

    function unloadHandler() {
        for (let e in Request.requests) Request.requests.hasOwnProperty(e) && Request.requests[ e ].abort();
    }

    pollingXhr.exports = XHR$1, pollingXhr.exports.Request = Request;
    const Polling = polling$1, globalThis$2 = globalThis_browser, rNewline = /\n/g, rEscapedNewline = /\\n/g;
    let callbacks;

    class JSONPPolling extends Polling {
        constructor(e) {
            super(e), this.query = this.query || {}, callbacks || (callbacks = globalThis$2.___eio = globalThis$2.___eio || []), this.index = callbacks.length, callbacks.push(this.onData.bind(this)), this.query.j = this.index;
        }

        get supportsBinary() {
            return !1;
        }

        doClose() {
            this.script && (this.script.onerror = () => {
            }, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), super.doClose();
        }

        doPoll() {
            const e = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = e => {
                this.onError("jsonp poll error", e);
            };
            const t = document.getElementsByTagName("script")[ 0 ];
            t ? t.parentNode.insertBefore(e, t) : (document.head || document.body).appendChild(e), this.script = e;
            "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function () {
                const e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e);
            }), 100);
        }

        doWrite(e, t) {
            let n;
            if (!this.form) {
                const e = document.createElement("form"), t = document.createElement("textarea"),
                    n = this.iframeId = "eio_iframe_" + this.index;
                e.className = "socketio", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.target = n, e.method = "POST", e.setAttribute("accept-charset", "utf-8"), t.name = "d", e.appendChild(t), document.body.appendChild(e), this.form = e, this.area = t;
            }

            function r() {
                o(), t();
            }

            this.form.action = this.uri();
            const o = () => {
                if (this.iframe) try {
                    this.form.removeChild(this.iframe);
                } catch (e) {
                    this.onError("jsonp polling iframe removal error", e);
                }
                try {
                    const e = "<iframe src=\"javascript:0\" name=\"" + this.iframeId + "\">";
                    n = document.createElement(e);
                } catch (e) {
                    n = document.createElement("iframe"), n.name = this.iframeId, n.src = "javascript:0";
                }
                n.id = this.iframeId, this.form.appendChild(n), this.iframe = n;
            };
            o(), e = e.replace(rEscapedNewline, "\\\n"), this.area.value = e.replace(rNewline, "\\n");
            try {
                this.form.submit();
            } catch (e) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = () => {
                "complete" === this.iframe.readyState && r();
            } : this.iframe.onload = r;
        }
    }

    var pollingJsonp = JSONPPolling;
    const globalThis$1 = globalThis_browser,
        nextTick$1 = "function" == typeof Promise && "function" == typeof Promise.resolve ? e => Promise.resolve().then(e) : e => setTimeout(e, 0);
    var websocketConstructor_browser = {
        WebSocket: globalThis$1.WebSocket || globalThis$1.MozWebSocket,
        usingBrowserWebSocket: !0,
        defaultBinaryType: "arraybuffer",
        nextTick: nextTick$1
    };
    const Transport = transport, parser$2 = lib, parseqs$1 = parseqs$3, yeast = yeast_1, { pick: pick } = util, {
            WebSocket: WebSocket,
            usingBrowserWebSocket: usingBrowserWebSocket,
            defaultBinaryType: defaultBinaryType,
            nextTick: nextTick
        } = websocketConstructor_browser, debug$3 = browser.exports("engine.io-client:websocket"),
        isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();

    class WS extends Transport {
        constructor(e) {
            super(e), this.supportsBinary = !e.forceBase64;
        }

        get name() {
            return "websocket";
        }

        doOpen() {
            if (!this.check()) return;
            const e = this.uri(), t = this.opts.protocols,
                n = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
            try {
                this.ws = usingBrowserWebSocket && !isReactNative ? t ? new WebSocket(e, t) : new WebSocket(e) : new WebSocket(e, t, n);
            } catch (e) {
                return this.emit("error", e);
            }
            this.ws.binaryType = this.socket.binaryType || defaultBinaryType, this.addEventListeners();
        }

        addEventListeners() {
            this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
            }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e);
        }

        write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
                const n = e[ t ], r = t === e.length - 1;
                parser$2.encodePacket(n, this.supportsBinary, (e => {
                    const t = {};
                    if (!usingBrowserWebSocket && (n.options && (t.compress = n.options.compress), this.opts.perMessageDeflate)) {
                        ("string" == typeof e ? Buffer.byteLength(e) : e.length) < this.opts.perMessageDeflate.threshold && (t.compress = !1);
                    }
                    try {
                        usingBrowserWebSocket ? this.ws.send(e) : this.ws.send(e, t);
                    } catch (e) {
                        debug$3("websocket closed before onclose event");
                    }
                    r && nextTick((() => {
                        this.writable = !0, this.emit("drain");
                    }));
                }));
            }
        }

        onClose() {
            Transport.prototype.onClose.call(this);
        }

        doClose() {
            void 0 !== this.ws && (this.ws.close(), this.ws = null);
        }

        uri() {
            let e = this.query || {};
            const t = this.opts.secure ? "wss" : "ws";
            let n = "";
            this.opts.port && ("wss" === t && 443 !== Number(this.opts.port) || "ws" === t && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (e[ this.opts.timestampParam ] = yeast()), this.supportsBinary || (e.b64 = 1), e = parseqs$1.encode(e), e.length && (e = "?" + e);
            return t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + e;
        }

        check() {
            return !(!WebSocket || "__initialize" in WebSocket && this.name === WS.prototype.name);
        }
    }

    var websocket$1 = WS;
    const XMLHttpRequest$1 = xmlhttprequest, XHR = pollingXhr.exports, JSONP = pollingJsonp, websocket = websocket$1;

    function polling(e) {
        let t, n = !1, r = !1;
        const o = !1 !== e.jsonp;
        if ("undefined" != typeof location) {
            const t = "https:" === location.protocol;
            let o = location.port;
            o || (o = t ? 443 : 80), n = e.hostname !== location.hostname || o !== e.port, r = e.secure !== t;
        }
        if (e.xdomain = n, e.xscheme = r, t = new XMLHttpRequest$1(e), "open" in t && !e.forceJSONP) return new XHR(e);
        if (!o) throw new Error("JSONP disabled");
        return new JSONP(e);
    }

    transports$1.polling = polling, transports$1.websocket = websocket;
    const transports = transports$1, Emitter$1 = componentEmitter.exports,
        debug$2 = browser.exports("engine.io-client:socket"), parser$1 = lib, parseuri = parseuri$2,
        parseqs = parseqs$3;

    class Socket$2 extends Emitter$1 {
        constructor(e, t = {}) {
            super(), e && "object" == typeof e && (t = e, e = null), e ? (e = parseuri(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = parseuri(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                jsonp: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0
            }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", "string" == typeof this.opts.query && (this.opts.query = parseqs.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && addEventListener("beforeunload", (() => {
                this.transport && (this.transport.removeAllListeners(), this.transport.close());
            }), !1), "localhost" !== this.hostname && (this.offlineEventListener = () => {
                this.onClose("transport close");
            }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
        }

        createTransport(e) {
            debug$2("creating transport \"%s\"", e);
            const t = clone(this.opts.query);
            t.EIO = parser$1.protocol, t.transport = e, this.id && (t.sid = this.id);
            const n = Object.assign({}, this.opts.transportOptions[ e ], this.opts, {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            });
            return debug$2("options: %j", n), new transports[ e ](n);
        }

        open() {
            let e;
            if (this.opts.rememberUpgrade && Socket$2.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket"; else {
                if (0 === this.transports.length) return void setTimeout((() => {
                    this.emit("error", "No transports available");
                }), 0);
                e = this.transports[ 0 ];
            }
            this.readyState = "opening";
            try {
                e = this.createTransport(e);
            } catch (e) {
                return debug$2("error while creating transport: %s", e), this.transports.shift(), void this.open();
            }
            e.open(), this.setTransport(e);
        }

        setTransport(e) {
            debug$2("setting transport %s", e.name), this.transport && (debug$2("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (() => {
                this.onClose("transport close");
            }));
        }

        probe(e) {
            debug$2("probing transport \"%s\"", e);
            let t = this.createTransport(e, { probe: 1 }), n = !1;
            Socket$2.priorWebsocketSuccess = !1;
            const r = () => {
                n || (debug$2("probe transport \"%s\" opened", e), t.send([{
                    type: "ping",
                    data: "probe"
                }]), t.once("packet", (r => {
                    if (!n) if ("pong" === r.type && "probe" === r.data) {
                        if (debug$2("probe transport \"%s\" pong", e), this.upgrading = !0, this.emit("upgrading", t), !t) return;
                        Socket$2.priorWebsocketSuccess = "websocket" === t.name, debug$2("pausing current transport \"%s\"", this.transport.name), this.transport.pause((() => {
                            n || "closed" !== this.readyState && (debug$2("changing transport and sending upgrade packet"), u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emit("upgrade", t), t = null, this.upgrading = !1, this.flush());
                        }));
                    } else {
                        debug$2("probe transport \"%s\" failed", e);
                        const n = new Error("probe error");
                        n.transport = t.name, this.emit("upgradeError", n);
                    }
                })));
            };

            function o() {
                n || (n = !0, u(), t.close(), t = null);
            }

            const a = n => {
                const r = new Error("probe error: " + n);
                r.transport = t.name, o(), debug$2("probe transport \"%s\" failed because of error: %s", e, n), this.emit("upgradeError", r);
            };

            function i() {
                a("transport closed");
            }

            function s() {
                a("socket closed");
            }

            function l(e) {
                t && e.name !== t.name && (debug$2("\"%s\" works - aborting \"%s\"", e.name, t.name), o());
            }

            const u = () => {
                t.removeListener("open", r), t.removeListener("error", a), t.removeListener("close", i), this.removeListener("close", s), this.removeListener("upgrading", l);
            };
            t.once("open", r), t.once("error", a), t.once("close", i), this.once("close", s), this.once("upgrading", l), t.open();
        }

        onOpen() {
            if (debug$2("socket open"), this.readyState = "open", Socket$2.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
                debug$2("starting upgrade probes");
                let e = 0;
                const t = this.upgrades.length;
                for (; e < t; e++) this.probe(this.upgrades[ e ]);
            }
        }

        onPacket(e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (debug$2("socket receive: type \"%s\", data \"%s\"", e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                case"open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case"ping":
                    this.resetPingTimeout(), this.sendPacket("pong"), this.emit("ping"), this.emit("pong");
                    break;
                case"error":
                    const t = new Error("server error");
                    t.code = e.data, this.onError(t);
                    break;
                case"message":
                    this.emit("data", e.data), this.emit("message", e.data);
            } else debug$2("packet received with socket readyState \"%s\"", this.readyState);
        }

        onHandshake(e) {
            this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
        }

        resetPingTimeout() {
            clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout((() => {
                this.onClose("ping timeout");
            }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }

        onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }

        flush() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (debug$2("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        }

        write(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
        }

        send(e, t, n) {
            return this.sendPacket("message", e, t, n), this;
        }

        sendPacket(e, t, n, r) {
            if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" === this.readyState || "closed" === this.readyState) return;
            (n = n || {}).compress = !1 !== n.compress;
            const o = { type: e, data: t, options: n };
            this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush();
        }

        close() {
            const e = () => {
                this.onClose("forced close"), debug$2("socket closing - telling transport to close"), this.transport.close();
            }, t = () => {
                this.removeListener("upgrade", t), this.removeListener("upgradeError", t), e();
            }, n = () => {
                this.once("upgrade", t), this.once("upgradeError", t);
            };
            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (() => {
                this.upgrading ? n() : e();
            })) : this.upgrading ? n() : e()), this;
        }

        onError(e) {
            debug$2("socket error %j", e), Socket$2.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e);
        }

        onClose(e, t) {
            "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (debug$2("socket close with reason: \"%s\"", e), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0);
        }

        filterUpgrades(e) {
            const t = [];
            let n = 0;
            const r = e.length;
            for (; n < r; n++) ~this.transports.indexOf(e[ n ]) && t.push(e[ n ]);
            return t;
        }
    }

    function clone(e) {
        const t = {};
        for (let n in e) e.hasOwnProperty(n) && (t[ n ] = e[ n ]);
        return t;
    }

    Socket$2.priorWebsocketSuccess = !1, Socket$2.protocol = parser$1.protocol;
    var socket$1 = Socket$2;
    const Socket$1 = socket$1;
    lib$1.exports = (e, t) => new Socket$1(e, t), lib$1.exports.Socket = Socket$1, lib$1.exports.protocol = Socket$1.protocol, lib$1.exports.Transport = transport, lib$1.exports.transports = transports$1, lib$1.exports.parser = lib;
    var socket = {}, dist = {}, binary = {}, isBinary$1 = {};
    Object.defineProperty(isBinary$1, "__esModule", { value: !0 }), isBinary$1.hasBinary = isBinary$1.isBinary = void 0;
    const withNativeArrayBuffer = "function" == typeof ArrayBuffer,
        isView = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
        toString = Object.prototype.toString,
        withNativeBlob = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === toString.call(Blob),
        withNativeFile = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === toString.call(File);

    function isBinary(e) {
        return withNativeArrayBuffer && (e instanceof ArrayBuffer || isView(e)) || withNativeBlob && e instanceof Blob || withNativeFile && e instanceof File;
    }

    function hasBinary(e, t) {
        if (!e || "object" != typeof e) return !1;
        if (Array.isArray(e)) {
            for (let t = 0, n = e.length; t < n; t++) if (hasBinary(e[ t ])) return !0;
            return !1;
        }
        if (isBinary(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return hasBinary(e.toJSON(), !0);
        for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t) && hasBinary(e[ t ])) return !0;
        return !1;
    }

    isBinary$1.isBinary = isBinary, isBinary$1.hasBinary = hasBinary, Object.defineProperty(binary, "__esModule", { value: !0 }), binary.reconstructPacket = binary.deconstructPacket = void 0;
    const is_binary_1 = isBinary$1;

    function deconstructPacket(e) {
        const t = [], n = e.data, r = e;
        return r.data = _deconstructPacket(n, t), r.attachments = t.length, { packet: r, buffers: t };
    }

    function _deconstructPacket(e, t) {
        if (!e) return e;
        if (is_binary_1.isBinary(e)) {
            const n = { _placeholder: !0, num: t.length };
            return t.push(e), n;
        }
        if (Array.isArray(e)) {
            const n = new Array(e.length);
            for (let r = 0; r < e.length; r++) n[ r ] = _deconstructPacket(e[ r ], t);
            return n;
        }
        if ("object" == typeof e && !(e instanceof Date)) {
            const n = {};
            for (const r in e) e.hasOwnProperty(r) && (n[ r ] = _deconstructPacket(e[ r ], t));
            return n;
        }
        return e;
    }

    function reconstructPacket(e, t) {
        return e.data = _reconstructPacket(e.data, t), e.attachments = void 0, e;
    }

    function _reconstructPacket(e, t) {
        if (!e) return e;
        if (e && e._placeholder) return t[ e.num ];
        if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[ n ] = _reconstructPacket(e[ n ], t); else if ("object" == typeof e) for (const n in e) e.hasOwnProperty(n) && (e[ n ] = _reconstructPacket(e[ n ], t));
        return e;
    }

    binary.deconstructPacket = deconstructPacket, binary.reconstructPacket = reconstructPacket, function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
        const t = componentEmitter.exports, n = binary, r = isBinary$1, o = browser.exports("socket.io-parser");
        var a;
        e.protocol = 5, function (e) {
            e[ e.CONNECT = 0 ] = "CONNECT", e[ e.DISCONNECT = 1 ] = "DISCONNECT", e[ e.EVENT = 2 ] = "EVENT", e[ e.ACK = 3 ] = "ACK", e[ e.CONNECT_ERROR = 4 ] = "CONNECT_ERROR", e[ e.BINARY_EVENT = 5 ] = "BINARY_EVENT", e[ e.BINARY_ACK = 6 ] = "BINARY_ACK";
        }(a = e.PacketType || (e.PacketType = {}));
        e.Encoder = class {
            encode(e) {
                return o("encoding packet %j", e), e.type !== a.EVENT && e.type !== a.ACK || !r.hasBinary(e) ? [this.encodeAsString(e)] : (e.type = e.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK, this.encodeAsBinary(e));
            }

            encodeAsString(e) {
                let t = "" + e.type;
                return e.type !== a.BINARY_EVENT && e.type !== a.BINARY_ACK || (t += e.attachments + "-"), e.nsp && "/" !== e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data)), o("encoded %j as %s", e, t), t;
            }

            encodeAsBinary(e) {
                const t = n.deconstructPacket(e), r = this.encodeAsString(t.packet), o = t.buffers;
                return o.unshift(r), o;
            }
        };

        class i extends t {
            constructor() {
                super();
            }

            add(e) {
                let t;
                if ("string" == typeof e) t = this.decodeString(e), t.type === a.BINARY_EVENT || t.type === a.BINARY_ACK ? (this.reconstructor = new s(t), 0 === t.attachments && super.emit("decoded", t)) : super.emit("decoded", t); else {
                    if (!r.isBinary(e) && !e.base64) throw new Error("Unknown type: " + e);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emit("decoded", t));
                }
            }

            decodeString(e) {
                let t = 0;
                const n = { type: Number(e.charAt(0)) };
                if (void 0 === a[ n.type ]) throw new Error("unknown packet type " + n.type);
                if (n.type === a.BINARY_EVENT || n.type === a.BINARY_ACK) {
                    const r = t + 1;
                    for (; "-" !== e.charAt(++t) && t != e.length;) ;
                    const o = e.substring(r, t);
                    if (o != Number(o) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
                    n.attachments = Number(o);
                }
                if ("/" === e.charAt(t + 1)) {
                    const r = t + 1;
                    for (; ++t;) {
                        if ("," === e.charAt(t)) break;
                        if (t === e.length) break;
                    }
                    n.nsp = e.substring(r, t);
                } else n.nsp = "/";
                const r = e.charAt(t + 1);
                if ("" !== r && Number(r) == r) {
                    const r = t + 1;
                    for (; ++t;) {
                        const n = e.charAt(t);
                        if (null == n || Number(n) != n) {
                            --t;
                            break;
                        }
                        if (t === e.length) break;
                    }
                    n.id = Number(e.substring(r, t + 1));
                }
                if (e.charAt(++t)) {
                    const r = function (e) {
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            return !1;
                        }
                    }(e.substr(t));
                    if (!i.isPayloadValid(n.type, r)) throw new Error("invalid payload");
                    n.data = r;
                }
                return o("decoded %s as %j", e, n), n;
            }

            static isPayloadValid(e, t) {
                switch (e) {
                    case a.CONNECT:
                        return "object" == typeof t;
                    case a.DISCONNECT:
                        return void 0 === t;
                    case a.CONNECT_ERROR:
                        return "string" == typeof t || "object" == typeof t;
                    case a.EVENT:
                    case a.BINARY_EVENT:
                        return Array.isArray(t) && t.length > 0;
                    case a.ACK:
                    case a.BINARY_ACK:
                        return Array.isArray(t);
                }
            }

            destroy() {
                this.reconstructor && this.reconstructor.finishedReconstruction();
            }
        }

        e.Decoder = i;

        class s {
            constructor(e) {
                this.packet = e, this.buffers = [], this.reconPack = e;
            }

            takeBinaryData(e) {
                if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                    const e = n.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), e;
                }
                return null;
            }

            finishedReconstruction() {
                this.reconPack = null, this.buffers = [];
            }
        }
    }(dist);
    var on$1 = {};

    function on(e, t, n) {
        return e.on(t, n), function () {
            e.off(t, n);
        };
    }

    Object.defineProperty(on$1, "__esModule", { value: !0 }), on$1.on = void 0, on$1.on = on;
    var typedEvents = {};
    Object.defineProperty(typedEvents, "__esModule", { value: !0 }), typedEvents.StrictEventEmitter = void 0;
    const Emitter = componentEmitter.exports;

    class StrictEventEmitter extends Emitter {
        on(e, t) {
            return super.on(e, t), this;
        }

        once(e, t) {
            return super.once(e, t), this;
        }

        emit(e, ...t) {
            return super.emit(e, ...t), this;
        }

        emitReserved(e, ...t) {
            return super.emit(e, ...t), this;
        }

        listeners(e) {
            return super.listeners(e);
        }
    }

    typedEvents.StrictEventEmitter = StrictEventEmitter, Object.defineProperty(socket, "__esModule", { value: !0 }), socket.Socket = void 0;
    const socket_io_parser_1 = dist, on_1$1 = on$1, typed_events_1$1 = typedEvents,
        debug$1 = browser.exports("socket.io-client:socket"), RESERVED_EVENTS = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        });

    class Socket extends typed_events_1$1.StrictEventEmitter {
        constructor(e, t, n) {
            super(), this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.auth && (this.auth = n.auth), this.io._autoConnect && this.open();
        }

        subEvents() {
            if (this.subs) return;
            const e = this.io;
            this.subs = [on_1$1.on(e, "open", this.onopen.bind(this)), on_1$1.on(e, "packet", this.onpacket.bind(this)), on_1$1.on(e, "error", this.onerror.bind(this)), on_1$1.on(e, "close", this.onclose.bind(this))];
        }

        get active() {
            return !!this.subs;
        }

        connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
        }

        open() {
            return this.connect();
        }

        send(...e) {
            return e.unshift("message"), this.emit.apply(this, e), this;
        }

        emit(e, ...t) {
            if (RESERVED_EVENTS.hasOwnProperty(e)) throw new Error("\"" + e + "\" is a reserved event name");
            t.unshift(e);
            const n = { type: socket_io_parser_1.PacketType.EVENT, data: t, options: {} };
            n.options.compress = !1 !== this.flags.compress, "function" == typeof t[ t.length - 1 ] && (debug$1("emitting packet with ack id %d", this.ids), this.acks[ this.ids ] = t.pop(), n.id = this.ids++);
            const r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            return this.flags.volatile && (!r || !this.connected) ? debug$1("discard packet as the transport is not currently writable") : this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this;
        }

        packet(e) {
            e.nsp = this.nsp, this.io._packet(e);
        }

        onopen() {
            debug$1("transport is open - connecting"), "function" == typeof this.auth ? this.auth((e => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: e });
            })) : this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }

        onerror(e) {
            this.connected || this.emitReserved("connect_error", e);
        }

        onclose(e) {
            debug$1("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", e);
        }

        onpacket(e) {
            if (e.nsp === this.nsp) switch (e.type) {
                case socket_io_parser_1.PacketType.CONNECT:
                    if (e.data && e.data.sid) {
                        const t = e.data.sid;
                        this.onconnect(t);
                    } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    break;
                case socket_io_parser_1.PacketType.EVENT:
                case socket_io_parser_1.PacketType.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case socket_io_parser_1.PacketType.ACK:
                case socket_io_parser_1.PacketType.BINARY_ACK:
                    this.onack(e);
                    break;
                case socket_io_parser_1.PacketType.DISCONNECT:
                    this.ondisconnect();
                    break;
                case socket_io_parser_1.PacketType.CONNECT_ERROR:
                    const t = new Error(e.data.message);
                    t.data = e.data.data, this.emitReserved("connect_error", t);
            }
        }

        onevent(e) {
            const t = e.data || [];
            debug$1("emitting event %j", t), null != e.id && (debug$1("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
        }

        emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
                const t = this._anyListeners.slice();
                for (const n of t) n.apply(this, e);
            }
            super.emit.apply(this, e);
        }

        ack(e) {
            const t = this;
            let n = !1;
            return function (...r) {
                n || (n = !0, debug$1("sending ack %j", r), t.packet({
                    type: socket_io_parser_1.PacketType.ACK,
                    id: e,
                    data: r
                }));
            };
        }

        onack(e) {
            const t = this.acks[ e.id ];
            "function" == typeof t ? (debug$1("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[ e.id ]) : debug$1("bad ack %s", e.id);
        }

        onconnect(e) {
            debug$1("socket connected with id %s", e), this.id = e, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect");
        }

        emitBuffered() {
            this.receiveBuffer.forEach((e => this.emitEvent(e))), this.receiveBuffer = [], this.sendBuffer.forEach((e => this.packet(e))), this.sendBuffer = [];
        }

        ondisconnect() {
            debug$1("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
        }

        destroy() {
            this.subs && (this.subs.forEach((e => e())), this.subs = void 0), this.io._destroy(this);
        }

        disconnect() {
            return this.connected && (debug$1("performing disconnect (%s)", this.nsp), this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
        }

        close() {
            return this.disconnect();
        }

        compress(e) {
            return this.flags.compress = e, this;
        }

        get volatile() {
            return this.flags.volatile = !0, this;
        }

        onAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
        }

        prependAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
        }

        offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
                const t = this._anyListeners;
                for (let n = 0; n < t.length; n++) if (e === t[ n ]) return t.splice(n, 1), this;
            } else this._anyListeners = [];
            return this;
        }

        listenersAny() {
            return this._anyListeners || [];
        }
    }

    socket.Socket = Socket;
    var backo2 = Backoff$1;

    function Backoff$1(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
    }

    Backoff$1.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(), n = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
    }, Backoff$1.prototype.reset = function () {
        this.attempts = 0;
    }, Backoff$1.prototype.setMin = function (e) {
        this.ms = e;
    }, Backoff$1.prototype.setMax = function (e) {
        this.max = e;
    }, Backoff$1.prototype.setJitter = function (e) {
        this.jitter = e;
    }, Object.defineProperty(manager, "__esModule", { value: !0 }), manager.Manager = void 0;
    const eio = lib$1.exports, socket_1 = socket, parser = dist, on_1 = on$1, Backoff = backo2,
        typed_events_1 = typedEvents, debug = browser.exports("socket.io-client:manager");

    class Manager extends typed_events_1.StrictEventEmitter {
        constructor(e, t) {
            super(), this.nsps = {}, this.subs = [], e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new Backoff({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
            const n = t.parser || parser;
            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this._autoConnect = !1 !== t.autoConnect, this._autoConnect && this.open();
        }

        reconnection(e) {
            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
        }

        reconnectionAttempts(e) {
            return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
        }

        reconnectionDelay(e) {
            var t;
            return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this);
        }

        randomizationFactor(e) {
            var t;
            return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this);
        }

        reconnectionDelayMax(e) {
            var t;
            return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this);
        }

        timeout(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout;
        }

        maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
        }

        open(e) {
            if (debug("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
            debug("opening %s", this.uri), this.engine = eio(this.uri, this.opts);
            const t = this.engine, n = this;
            this._readyState = "opening", this.skipReconnect = !1;
            const r = on_1.on(t, "open", (function () {
                n.onopen(), e && e();
            })), o = on_1.on(t, "error", (t => {
                debug("error"), n.cleanup(), n._readyState = "closed", this.emitReserved("error", t), e ? e(t) : n.maybeReconnectOnOpen();
            }));
            if (!1 !== this._timeout) {
                const e = this._timeout;
                debug("connect attempt will timeout after %d", e), 0 === e && r();
                const n = setTimeout((() => {
                    debug("connect attempt timed out after %d", e), r(), t.close(), t.emit("error", new Error("timeout"));
                }), e);
                this.opts.autoUnref && n.unref(), this.subs.push((function () {
                    clearTimeout(n);
                }));
            }
            return this.subs.push(r), this.subs.push(o), this;
        }

        connect(e) {
            return this.open(e);
        }

        onopen() {
            debug("open"), this.cleanup(), this._readyState = "open", this.emitReserved("open");
            const e = this.engine;
            this.subs.push(on_1.on(e, "ping", this.onping.bind(this)), on_1.on(e, "data", this.ondata.bind(this)), on_1.on(e, "error", this.onerror.bind(this)), on_1.on(e, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }

        onping() {
            this.emitReserved("ping");
        }

        ondata(e) {
            this.decoder.add(e);
        }

        ondecoded(e) {
            this.emitReserved("packet", e);
        }

        onerror(e) {
            debug("error", e), this.emitReserved("error", e);
        }

        socket(e, t) {
            let n = this.nsps[ e ];
            return n || (n = new socket_1.Socket(this, e, t), this.nsps[ e ] = n), n;
        }

        _destroy(e) {
            const t = Object.keys(this.nsps);
            for (const e of t) {
                if (this.nsps[ e ].active) return void debug("socket %s is still active, skipping close", e);
            }
            this._close();
        }

        _packet(e) {
            debug("writing packet %j", e);
            const t = this.encoder.encode(e);
            for (let n = 0; n < t.length; n++) this.engine.write(t[ n ], e.options);
        }

        cleanup() {
            debug("cleanup"), this.subs.forEach((e => e())), this.subs.length = 0, this.decoder.destroy();
        }

        _close() {
            debug("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close();
        }

        disconnect() {
            return this._close();
        }

        onclose(e) {
            debug("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e), this._reconnection && !this.skipReconnect && this.reconnect();
        }

        reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) debug("reconnect failed"), this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1; else {
                const t = this.backoff.duration();
                debug("will wait %dms before reconnect attempt", t), this._reconnecting = !0;
                const n = setTimeout((() => {
                    e.skipReconnect || (debug("attempting reconnect"), this.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((t => {
                        t ? (debug("reconnect attempt error"), e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", t)) : (debug("reconnect success"), e.onreconnect());
                    })));
                }), t);
                this.opts.autoUnref && n.unref(), this.subs.push((function () {
                    clearTimeout(n);
                }));
            }
        }

        onreconnect() {
            const e = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
        }
    }

    manager.Manager = Manager, function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.io = t.Socket = t.Manager = t.protocol = void 0;
        const n = url$1, r = manager, o = browser.exports("socket.io-client");
        e.exports = t = i;
        const a = t.managers = {};

        function i(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            const i = n.url(e, t.path || "/socket.io"), s = i.source, l = i.id, u = i.path,
                c = a[ l ] && u in a[ l ].nsps;
            let f;
            return t.forceNew || t[ "force new connection" ] || !1 === t.multiplex || c ? (o("ignoring socket cache for %s", s), f = new r.Manager(s, t)) : (a[ l ] || (o("new io instance for %s", s), a[ l ] = new r.Manager(s, t)), f = a[ l ]), i.query && !t.query && (t.query = i.queryKey), f.socket(i.path, t);
        }

        t.io = i;
        var s = dist;
        Object.defineProperty(t, "protocol", {
            enumerable: !0, get: function () {
                return s.protocol;
            }
        }), t.connect = i;
        var l = manager;
        Object.defineProperty(t, "Manager", {
            enumerable: !0, get: function () {
                return l.Manager;
            }
        });
        var u = socket;
        Object.defineProperty(t, "Socket", {
            enumerable: !0, get: function () {
                return u.Socket;
            }
        }), t.default = i;
    }(build, build.exports);
    var io = getDefaultExportFromCjs(build.exports);
    io.Manager, io.Socket;
    var StentorServerChat = function () {
        function e(e) {
            this.config = e, this.token = e.token;
        }

        return e.prototype.init = function (e) {
            var t = this;
            this.socket = io(this.config.url, {
                transports: ["websocket"],
                reconnection: !0,
                reconnectionDelay: 1e3,
                reconnectionDelayMax: 5e3,
                reconnectionAttempts: 5
            }), this.dispatch = e, this.socket.on("account_status", (function (n) {
                log("SERVER: account_status: " + JSON.stringify(n)), t.token || (t.token = uuid(), e(receiveToken(t.token)), log("CLIENT: created token: " + t.token)), t.socket.emit("connection update", t.token), e({
                    type: "account_status",
                    detail: { status: "online", timestamp: +new Date }
                });
            })), this.socket.on("new message", (function (e) {
                log("SERVER: new message: " + JSON.stringify(e)), t.dispatch({
                    type: "chat",
                    detail: {
                        type: "chat.msg",
                        displayName: e.username,
                        nick: "agent:robot",
                        msg: e.message,
                        timestamp: +new Date
                    }
                });
            })), this.socket.on("user joined", (function (e) {
                log("SERVER: user joined: " + JSON.stringify(e)), t.visitorInfo.token = e.token, t.dispatch({
                    type: "chat",
                    detail: {
                        type: "chat.memberjoin",
                        displayName: e.username,
                        nick: "agent:robot",
                        timestamp: +new Date,
                        avatarPath: e.avatarPath
                    }
                });
            })), this.socket.on("user left", (function (e) {
                log("SERVER: user left: " + JSON.stringify(e)), t.dispatch({
                    type: "chat",
                    detail: {
                        type: "chat.memberleave",
                        displayName: e.username,
                        nick: "agent:robot",
                        timestamp: +new Date
                    }
                });
            })), this.socket.on("typing", (function (e) {
                log("SERVER: typing: " + JSON.stringify(e)), t.dispatch({
                    type: "chat",
                    detail: { type: "chat.typing", nick: "agent:robot", typing: !0, timestamp: +new Date }
                });
            })), this.socket.on("stop typing", (function (e) {
                log("SERVER: stop typing: " + JSON.stringify(e)), t.dispatch({
                    type: "chat",
                    detail: { type: "chat.typing", nick: "agent:robot", typing: !1, timestamp: +new Date }
                });
            })), this.socket.on("disconnect", (function () {
                log("SERVER: disconnect"), t.dispatch(setAccountStatus("offline")), t.dispatch(setConnectionStatus("offline"));
            })), this.socket.on("reconnect", (function () {
                log("SERVER: reconnect"), t.dispatch(setAccountStatus("online")), t.dispatch(setConnectionStatus("online"));
            })), this.socket.on("reconnect_failed", (function (e) {
                log("SERVER: reconnect_failed", e), t.dispatch(setAccountStatus("offline")), t.dispatch(setConnectionStatus("offline"));
            })), this.socket.on("reconnect_error", (function (e) {
                log("SERVER: reconnect_error", e), t.dispatch(setAccountStatus("offline"));
            })), this.dispatch(setConnectionStatus("pending"));
        }, e.prototype.sendOfflineMsg = function (e, t) {
            t();
        }, e.prototype.sendChatMsg = function (e, t) {
            this.socket.emit("new message", e), t();
        }, e.prototype.sendTyping = function (e) {
            this.socket.emit(e ? "typing" : "stop typing");
        }, e.prototype.setVisitorInfo = function (e, t) {
            this.visitorInfo = e, this.socket.emit("add user", e), t();
        }, e.prototype.sendChatRating = function () {
        }, e.prototype.sendFile = function (e, t) {
            t();
        }, e.prototype.markAsRead = function () {
        }, e.prototype.flush = function () {
        }, e.prototype.dispose = function () {
            var e;
            null === (e = this.socket) || void 0 === e || e.disconnect();
        }, e;
    }();

    function createChatServerCore(e, t) {
        switch (e.type) {
            case"direct":
                return new StentorDirectChat({ url: e.serverUrl, key: e.accountKey });
            case"websocket":
                return new StentorServerChat({ url: e.serverUrl, token: t });
            case"local":
                return new StentorLocalChat;
            default:
                throw throwBadKind(e.type);
        }
    }

    function createChatServer(e, t) {
        return new LogChat(createChatServerCore(e, t));
    }

    var ChatServerContext = react.exports.createContext(null);

    function useChatServer(e) {
        var t = react.exports.useState(), n = t[ 0 ], r = t[ 1 ], o = lib$3.useSelector((function (e) {
            return e.connection.token;
        })), a = lib$3.useDispatch();
        return react.exports.useEffect((function () {
            var t = createChatServer(e, o);
            return t.init(a), r(t), function () {
                t.dispose();
            };
        }), [o, e, a]), n;
    }

    function useChatServerDispatch() {
        var e = lib$3.useDispatch(), t = react.exports.useContext(ChatServerContext);
        return react.exports.useCallback((function (n) {
            n ? t && e(n(t)) : console.warn("react bug? Someone invokes with null");
        }), [e, t]);
    }

    function useChatServerVisitorId() {
        var e = useChatServerDispatch(), t = lib$3.useSelector((function (e) {
            return e.visitorId;
        }));
        return react.exports.useMemo((function () {
            return { dispatch: e, visitorId: t };
        }), [e, t]);
    }

    function useGreeting(e) {
        var t = useChatServerVisitorId(), n = react.exports.useRef(null);
        react.exports.useEffect((function () {
            if (e && n.current !== t && (n.current = t, t.visitorId)) {
                t.dispatch(sendVisitorInfo({ name: "Visitor", visitorId: t.visitorId }));
                var r = setTimeout((function () {
                    var e = sendGreeting();
                    t.dispatch(e);
                }), 1e3);
                return function () {
                    clearTimeout(r);
                };
            }
        }), [t, e]);
    }

    function useDimensions() {
        var e = react.exports.useRef(), t = react.exports.useState(), n = t[ 0 ], r = t[ 1 ];
        return react.exports.useLayoutEffect((function () {
            var t, n;
            r(null === (n = null === (t = e.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === n ? void 0 : n.toJSON());
        }), []), [e, n];
    }

    function add(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
    }

    function sub(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
    }

    function mul(e, t) {
        return { x: e.x * t, y: e.y * t };
    }

    function len(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }

    function resize(e, t) {
        var n = len(e);
        return n ? mul(e, t / n) : e;
    }

    function rotateZ(e, t) {
        var n = t * Math.PI / 180, r = Math.cos(n), o = Math.sin(n);
        return { x: e.x * r + e.y * o, y: e.y * r - e.x * o };
    }

    function intersectLineEllipsis(e, t) {
        var n = sub(t.start, e.center), r = n.x, o = n.y, a = t.direction.x, i = t.direction.y, s = e.radius.x,
            l = e.radius.y, u = s * s, c = l * l, f = a * a / u + i * i / c, d = 2 * a * r / u + 2 * i * o / c,
            p = d * d - 4 * f * (r * r / u + o * o / c - 1);
        if (p >= 0) {
            var h = Math.sqrt(p), m = (-d - h) / (2 * f), g = (-d + h) / (2 * f);
            if (m > 0 && g > 0) return add(t.start, mul(t.direction, Math.min(m, g)));
            if (m > 0) return add(t.start, mul(t.direction, m));
            if (g > 0) return add(t.start, mul(t.direction, g));
        }
        return t.start;
    }

    function getTailSvgPath$1(e, t) {
        var n = e.direction * Math.PI / 180, r = { x: e.width / 2, y: e.height / 2 }, o = { x: t.x / 2, y: t.y / 2 },
            a = { x: r.x * Math.cos(n), y: r.y * Math.sin(n) }, i = resize(a, len(a) + e.length), s = add(i, o),
            l = sub(a, i), u = e.angle, c = rotateZ(l, u / 2), f = rotateZ(l, -u / 2), d = { center: o, radius: r },
            p = intersectLineEllipsis(d, { start: s, direction: c }),
            h = intersectLineEllipsis(d, { start: s, direction: f });
        return "m " + s.x + " " + s.y + " L " + p.x + " " + p.y + " L " + h.x + " " + h.y + " z";
    }

    var CtaBubbleTail = function (e) {
        var t, n, r = useDimensions(), o = r[ 0 ], a = r[ 1 ], i = {
            x: null !== (t = null == a ? void 0 : a.width) && void 0 !== t ? t : 0,
            y: null !== (n = null == a ? void 0 : a.height) && void 0 !== n ? n : 0
        };
        return React.createElement("div", {
            ref: o,
            className: "cta-bubble__tail"
        }, React.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 " + i.x + " " + i.y
        }, React.createElement("path", { d: getTailSvgPath$1(e, i), fill: "currentColor" })));
    }, CtaBubble = function (e) {
        var t, n, r = useDimensions(), o = r[ 0 ], a = r[ 1 ];
        return React.createElement("div", {
            ref: o,
            className: "cta-bubble",
            onClick: e.onClick
        }, React.createElement(CtaBubbleTail, {
            width: null !== (t = null == a ? void 0 : a.width) && void 0 !== t ? t : 0,
            height: null !== (n = null == a ? void 0 : a.height) && void 0 !== n ? n : 0,
            direction: 60,
            angle: 45,
            length: 16
        }), React.createElement("div", { className: "cta-bubble__content" }, e.children));
    }, CtaBubbleContainer = function (e) {
        var t = react.exports.useMemo((function () {
                if (e.visible) return (new Date).valueOf();
            }), [e.visible]), n = react.exports.useState((new Date).valueOf()), r = n[ 0 ], o = n[ 1 ], a = e.timeout,
            i = r - t, s = t && e.timeout && i >= e.timeout;
        return react.exports.useEffect((function () {
            if (t) {
                var e = t + a - (new Date).valueOf();
                if (!(e <= 0)) {
                    var n = setTimeout((function () {
                        o((new Date).valueOf());
                    }), e);
                    return function () {
                        clearTimeout(n);
                    };
                }
            }
        }), [t, a]), React.createElement(React.Fragment, null, e.visible && !s && React.createElement(CtaBubble, { onClick: e.onClick }, e.children));
    }, ChatButton = function (e) {
        return React.createElement("div", { className: "chat-button " + e.addClass }, React.createElement("div", {
            className: "chat-button__btn",
            onClick: e.onClick
        }, React.createElement("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22"
        }, React.createElement("path", {
            d: "M13 22l-4-6H2c-1.11-.043-2-.935-2-2V2C0 .89.89 0 2 0h18c1.11 0 2 .892 2 2v12c0 1.067-.89 1.957-2 2h-3l-4 6zm3-8h4c-.005.3-.01-12 0-12-.01.004-18 .006-18 0 .005.006 0 12 0 12h8l3 5 3-5z",
            fill: "#FFF",
            fillRule: "evenodd"
        }))), e.config && e.config.message && React.createElement("div", { className: "chat-button__cta" }, React.createElement(CtaBubbleContainer, {
            timeout: e.config.timeout,
            visible: !e.visible,
            onClick: e.onClick
        }, e.config.message)));
    }, ChatMenuItem = function (e) {
        return React.createElement("button", {
            type: "button", className: "chat-menu-item", onClick: function () {
                e.onClick && e.onClick(e.label);
            }
        }, e.label);
    }, ChatMenu = function (e) {
        var t = e.items;
        return React.createElement("div", { className: "chat-menu " + (e.opened ? "chat-menu--opened" : "chat-menu--closed") }, t.map((function (t, n) {
            return React.createElement(ChatMenuItem, { key: n, onClick: e.onItemClick, label: t });
        })));
    }, DrawerBars = function (e) {
        return React.createElement("div", {
            className: "drawer-bars",
            onClick: e.onToggle
        }, React.createElement("div", { className: "drawer-bar bar1" }), React.createElement("div", { className: "drawer-bar bar2" }));
    }, SendButton = function (e) {
        return React.createElement("div", {
            className: "send-button",
            onClick: e.onClick
        }, React.createElement("svg", {
            viewBox: "80.208 98.129 313.069 282.823",
            xmlns: "http://www.w3.org/2000/svg"
        }, React.createElement("g", {
            transform: "matrix(0.024498, 0, 0, -0.038359, 79.83091, 381.182404)",
            fill: "currentColor",
            stroke: "none"
        }, React.createElement("path", { d: "M12670 7345 c-63 -18 -272 -77 -465 -130 -192 -53 -478 -132 -635 -175 -508 -141 -1091 -302 -2345 -649 -676 -187 -2038 -563 -3025 -836 -987 -273 -2072 -573 -2410 -666 -338 -94 -802 -222 -1030 -285 -1857 -514 -2579 -714 -2684 -742 -38 -10 -65 -21 -60 -24 5 -3 67 -22 139 -41 72 -20 326 -90 565 -157 239 -67 611 -170 825 -230 215 -60 586 -163 825 -230 239 -67 491 -137 560 -156 l126 -34 974 439 c1397 629 4128 1858 6050 2724 910 410 1826 822 2035 917 209 94 387 173 395 176 35 10 -66 -39 -8200 -3928 -586 -280 -1068 -512 -1071 -516 -3 -4 33 -117 82 -252 76 -213 355 -996 765 -2147 65 -183 120 -330 122 -329 1 2 114 558 250 1236 l248 1233 3455 2064 c1900 1135 3670 2193 3933 2351 264 158 491 293 505 301 62 33 -5 -12 -271 -182 -1671 -1070 -7188 -4613 -7188 -4617 0 -7 3661 -2455 3669 -2454 4 1 3713 6853 3977 7347 8 15 11 27 7 26 -5 0 -60 -15 -123 -34z" }), React.createElement("path", { d: "M5030 2232 c-15 -61 -479 -1861 -531 -2058 -21 -83 -39 -154 -39 -158 0 -3 369 330 820 740 452 411 817 750 813 754 -11 10 -1025 754 -1039 763 -8 4 -16 -10 -24 -41z" }))));
    }, Input = function (e) {
        var t = react.exports.useState(""), n = t[ 0 ], r = t[ 1 ], o = react.exports.useState(!1), a = o[ 0 ],
            i = o[ 1 ];

        function s(t) {
            t && t.preventDefault(), e.onSubmit(n), r("");
        }

        var l = ["input-container", e.addClass, a ? "drag-drop-zone" : ""].join(" ");
        return React.createElement("div", {
            className: l, onDrop: function (t) {
                i(!1), e.onFileUpload(t);
            }, onDragOver: function (e) {
                i(!0), e.preventDefault(), e.dataTransfer.dropEffect = "copy";
            }, onDragLeave: function () {
                i(!1);
            }
        }, React.createElement("form", {
            className: "input-form",
            onSubmit: s
        }, React.createElement("input", {
            className: "input",
            placeholder: "Type your question here...",
            onChange: function (t) {
                r(t.target.value), e.onChange();
            },
            value: n
        }), React.createElement(SendButton, { onClick: s })));
    }, ChatFooter = function (e) {
        var t, n, r = react.exports.useState(!1), o = r[ 0 ], a = r[ 1 ],
            i = null === (n = null === (t = useWidgetEnv()) || void 0 === t ? void 0 : t.menu) || void 0 === n ? void 0 : n.items,
            s = react.exports.useMemo((function () {
                return i ? i.map((function (e) {
                    return e.label;
                })) : [];
            }), [i]);
        return React.createElement("div", { className: "chat-footer" }, s.length ? React.createElement(React.Fragment, null, React.createElement(ChatMenu, {
            opened: o,
            onItemClick: function (t) {
                a(!1), e.onSubmit(t);
            },
            items: s
        }), React.createElement("div", { className: "chat-footer__menu-icon" }, React.createElement(DrawerBars, {
            onToggle: function () {
                var e = !o;
                a(e), set("drawer", e);
            }
        }))) : React.createElement(React.Fragment, null), React.createElement(Input, {
            addClass: "chat-footer__input " + (e.isChatting ? "visible" : ""),
            onSubmit: e.onSubmit,
            onChange: e.onChange,
            onFileUpload: e.onFileUpload
        }));
    }, ChatChip = function (e) {
        var t = e.option, n = t.actionUrl ? "chat-chip chat-chip-link" : "chat-chip";
        return React.createElement("div", {
            onClick: function () {
                return null == e ? void 0 : e.onClick(t);
            }, className: n
        }, React.createElement("span", null, t.label || t));
    }, ChatChips = function (e) {
        return React.createElement("div", { className: "chat-chips" }, e.options.map((function (t, n) {
            return React.createElement(ChatChip, { key: n, onClick: e.onOptionClick, option: t });
        })));
    };

    function isChatServerActionLink(e) {
        return e.hasOwnProperty("label");
    }

    function getChatServerActionLinkLabel(e) {
        return isChatServerActionLink(e) ? e.label : e;
    }

    function getItemUrl(e) {
        return e.url || e.imageActionUrl;
    }

    var ChatChipsContainer = function (e) {
        var t = useChatServerDispatch(), n = lib$3.useSelector((function (e) {
            return e.chips;
        }));
        return React.createElement("div", { className: "message-list-container__chips " + ((null == n ? void 0 : n.length) ? "" : "message-list-container__chips--empty") }, React.createElement(ChatChips, {
            options: n,
            onOptionClick: function (e) {
                var n = isChatServerActionLink(e) && e.actionUrl;
                n ? window.open(n, "callout-option", "toolbar=0,status=0,width=1000,height=700") : t(executeAction(getChatServerActionLinkLabel(e)));
            }
        }));
    }, OptionalLink = function (e) {
        var t = e.url, n = e.className;
        return t ? React.createElement("div", {
            onClick: function () {
                window.open(t, "callout-option", "toolbar=0,status=0,width=1000,height=700");
            }, className: n
        }, e.children) : React.createElement("div", { onClick: e.onClick, className: n }, e.children);
    }, ActionItem = function (e) {
        var t, n = e.item, r = e.onButtonClick, o = e.onExecute,
            a = 1 === (null === (t = n.buttons) || void 0 === t ? void 0 : t.length),
            i = react.exports.useCallback((function () {
                var e;
                1 === (null === (e = n.buttons) || void 0 === e ? void 0 : e.length) ? r(n.buttons[ 0 ]) : o(n.title, n.token);
            }), [n, o, r]),
            s = "xappw-chat-action-item " + (a ? "xappw-chat-action-item--action" : "") + " " + e.className;
        return React.createElement(OptionalLink, { onClick: i, className: s, url: getItemUrl(n) }, e.children);
    }, ChatImage = function (e) {
        var t = e.imageUrl.replace(/'/g, "%27"), n = React.createElement("div", {
            className: "chat-card-img__content",
            style: { backgroundImage: "url(" + t + ")" }
        });
        return e.imageActionUrl ? React.createElement("a", {
            href: e.imageActionUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "chat-card-img"
        }, n) : React.createElement("div", { className: "chat-card-img" }, n);
    }, ActionItemImage = function (e) {
        var t, n = e.item, r = 1 === (null === (t = n.buttons) || void 0 === t ? void 0 : t.length), o = getItemUrl(n);
        if (n.imageUrl) {
            var a = r ? null : n.imageActionUrl;
            return React.createElement("div", { className: e.className }, React.createElement(ChatImage, {
                imageUrl: n.imageUrl,
                imageActionUrl: !o && a
            }));
        }
        return e.emptyImageVisible ? React.createElement("div", { className: e.className }) : React.createElement(React.Fragment, null);
    }, ActionButton = function (e) {
        return React.createElement("button", {
            type: e.type,
            className: "action-button " + e.addClass,
            onClick: function (t) {
                t.stopPropagation(), e.onClick && e.onClick(e.label);
            }
        }, e.label);
    }, ChatActionButtonInner = function (e) {
        var t = e.button, n = e.onClick, r = react.exports.useCallback((function () {
            n(t);
        }), [t, n]);
        return React.createElement(ActionButton, { onClick: r, addClass: "button-card", label: t.label });
    }, ChatActionButton = React.memo(ChatActionButtonInner), ChatActionButtonsInner = function (e) {
        return React.createElement("div", { className: "buttons-container " + (e.className || "") }, e.buttons.map((function (t, n) {
            return React.createElement(ChatActionButton, { button: t, onClick: e.onClick, key: n });
        })));
    }, ChatActionButtons = React.memo(ChatActionButtonsInner), CarouselItem = function (e) {
        var t, n = e.item;
        return React.createElement(ActionItem, {
            className: "chat-list-item-container",
            item: n,
            onButtonClick: e.onButtonClick,
            onExecute: e.onExecute
        }, React.createElement("div", { className: "chat-list-item" }, React.createElement(ActionItemImage, {
            item: n,
            className: "chat-list-item__img",
            emptyImageVisible: e.emptyImageVisible
        }), n.title && React.createElement("div", { className: "chat-list-item__title" }, React.createElement("span", null, n.title)), n.subTitle && React.createElement("div", { className: "chat-list-item__subtitle" }, React.createElement("span", null, n.subTitle)), !!(null === (t = n.buttons) || void 0 === t ? void 0 : t.length) && React.createElement(ChatActionButtons, {
            className: "chat-list-item__actions",
            buttons: n.buttons,
            onClick: e.onButtonClick
        })));
    };

    function getLeftArrowSvg() {
        return React.createElement("svg", { viewBox: "-5 -18 10 36" }, React.createElement("path", {
            d: "M 2.5 -15 L -2.5 0 L 2.5 15",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "4px",
            fill: "none"
        }));
    }

    var ChevronLeft = function (e) {
        return React.createElement("div", { onClick: e.onClick, className: "chevron" }, getLeftArrowSvg());
    };

    function getRightArrowSvg() {
        return React.createElement("svg", { viewBox: "-5 -18 10 36" }, React.createElement("path", {
            d: "M -2.5 -15 L 2.5 0 L -2.5 15",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: "4px",
            fill: "none"
        }));
    }

    var ChevronRight = function (e) {
        return React.createElement("div", { onClick: e.onClick, className: "chevron" }, getRightArrowSvg());
    }, Carousel = function (e) {
        var t = react.exports.useRef(null), n = react.exports.useState(0), r = n[ 0 ], o = n[ 1 ];

        function a(e) {
            var n, a, i = t.current;
            if (i) {
                var s = i.getElementsByClassName("xappw-carousel-items__item"), l = s.length, u = r;
                1 === e ? r < l - 1 && u++ : r > 0 && u--;
                for (var c = 0, f = 0; f < s.length && f !== u; f++) c += null !== (a = null === (n = s.item(f)) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== a ? a : 0;
                i.scrollLeft = c, o(u);
            }
        }

        var i = e.list.items.some((function (e) {
            return e.imageUrl;
        })), s = e.list.items.map((function (t, n) {
            return React.createElement("div", {
                className: "xappw-carousel-items__item",
                key: "item-key-" + n
            }, React.createElement(CarouselItem, {
                item: t,
                emptyImageVisible: i,
                onExecute: e.onExecute,
                onButtonClick: e.onButtonClick
            }));
        }));
        return React.createElement("div", { className: "xappw-carousel" }, React.createElement("div", { className: "xappw-carousel__prev" }, React.createElement(ChevronLeft, {
            onClick: function () {
                return a(-1);
            }
        })), React.createElement("div", {
            ref: t,
            className: "xappw-carousel-items"
        }, s), React.createElement("div", { className: "xappw-carousel__next" }, React.createElement(ChevronRight, {
            onClick: function () {
                return a(1);
            }
        })));
    }, ChatCard = function (e) {
        var t, n, r, o, a = e.card;
        return a.imageUrl && (r = React.createElement("div", { className: "chat-card-container__img" }, React.createElement(ChatImage, {
            imageUrl: a.imageUrl,
            imageActionUrl: a.imageActionUrl
        }))), a.title && (n = React.createElement("div", { className: "chat-card-title" }, React.createElement("span", null, a.title))), a.content && (o = React.createElement("div", { className: "chat-card-sub-title" }, React.createElement("span", null, a.content))), React.createElement("div", { className: "chat-card-container" }, r, n, o, !!(null === (t = a.buttons) || void 0 === t ? void 0 : t.length) && React.createElement(ChatActionButtons, {
            buttons: a.buttons,
            onClick: e.onButtonClick
        }));
    };

    function getTailSvgPath(e) {
        return "others" === e ? "m 80 0 v 240 h -60 c 40 -40 60 -160 60 -240" : "m 0 0 v 240 h 60 c -40 -40 -60 -160 -60 -240";
    }

    function getTailSvg(e) {
        return React.createElement("svg", {
            className: "chat-text-bubble__tail",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 80 240"
        }, React.createElement("path", { d: getTailSvgPath(e), fill: "currentColor" }));
    }

    var ChatMessageBubble = function (e) {
        var t = e.owner, n = e.onClick, r = react.exports.useCallback((function () {
            n && n();
        }), [n]);
        return React.createElement("div", {
            onClick: r,
            className: "chat-text-bubble " + ("mine" === t ? "chat-text-bubble--mine" : "chat-text-bubble--others")
        }, e.hasTail && getTailSvg(t), e.children);
    }, ChatMarkdownMessage = function (e) {
        var t = isAgent(e.message.nick), n = react.exports.useRef(), r = e.message.msg.html;
        return react.exports.useEffect((function () {
            n.current && (n.current.innerHTML = r);
        }), [n, r]), React.createElement("div", { className: "chat-msg" }, React.createElement("div", { className: "chat-text-container" }, React.createElement(ChatMessageBubble, {
            owner: t ? "others" : "mine",
            hasTail: t && !e.sibling
        }, React.createElement("div", { ref: n }))));
    };

    function getVisitorSvg() {
        return React.createElement("svg", {
            width: "16",
            height: "19",
            viewBox: "0 0 16 19"
        }, React.createElement("path", {
            d: "M11.5 5c0-1.933-1.567-3.5-3.5-3.5S4.5 3.067 4.5 5 6.067 8.5 8 8.5s3.5-1.567 3.5-3.5zM3 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zM1.955 17.294c.21-.642.504-1.285.898-1.88C3.963 13.74 5.615 12.75 8 12.75c2.385 0 4.038.99 5.147 2.664.394.595.69 1.238.898 1.88.124.382.19.672.214.822.063.41.447.69.856.625.41-.063.69-.447.625-.856-.034-.225-.118-.59-.27-1.053-.247-.763-.598-1.527-1.073-2.244C13.024 12.51 10.917 11.25 8 11.25c-2.916 0-5.024 1.26-6.397 3.336-.475.717-.826 1.48-1.074 2.245-.152.463-.236.83-.27 1.054-.065.41.215.793.624.857.41.065.793-.215.857-.624.025-.15.09-.44.215-.822z",
            fill: "#FFF",
            fillRule: "evenodd"
        }));
    }

    var Avatar = function (e) {
        var t, n, r, o = {}, a = e.entity, i = null == a ? void 0 : a.avatarPath, s = a && isAgent(a.nick),
            l = react.exports.useContext(ChatConfigContext);
        s ? (i && (i.startsWith("http") ? o.backgroundImage = "url('" + i + "')" : (null == l ? void 0 : l.assetUrl) && (o.backgroundImage = "url('" + (null == l ? void 0 : l.assetUrl) + "/" + i + "')"), o.backgroundColor = "none"), null !== (t = o.backgroundImage) && void 0 !== t || (o.backgroundImage = "url('" + (null === (n = null == l ? void 0 : l.env) || void 0 === n ? void 0 : n.avatarUrl) + "')")) : r = getVisitorSvg();
        var u = !!o.backgroundImage || !!r;
        return React.createElement("div", {
            className: "avatar " + (s ? "avatar--agent" : "avatar--visitor") + " " + (u ? "" : "avatar--empty"),
            style: o,
            title: a ? a.display_name : "Agent"
        }, r);
    };

    function renderAvatar(e) {
        return React.createElement("div", { className: "xappw-chat-msg-part__avatar" }, React.createElement(Avatar, { entity: e }));
    }

    var ChatMessagePart = function (e) {
        return React.createElement("div", { className: "xappw-chat-msg-part" }, e.showAvatar && renderAvatar(e.user), e.children);
    }, ChatTextMessage = function (e) {
        var t = isAgent(e.message.nick);
        return React.createElement("div", { className: "chat-msg" }, React.createElement("div", { className: "chat-text-container" }, React.createElement(ChatMessageBubble, {
            owner: t ? "others" : "mine",
            hasTail: t && !e.sibling
        }, React.createElement("span", null, e.message.msg.text))));
    }, ListItem = function (e) {
        var t, n = e.item, r = e.layout || "normal";
        return React.createElement(ActionItem, {
            className: "xappw-vlist-item-container",
            item: n,
            onButtonClick: e.onButtonClick,
            onExecute: e.onExecute
        }, React.createElement("div", { className: "xappw-vlist-item xappw-vlist-item--" + r }, React.createElement("div", { className: "xappw-vlist-item__description" }, n.title && React.createElement("div", { className: "xappw-vlist-item__title" }, React.createElement("span", null, n.title)), n.subTitle && React.createElement("div", { className: "xappw-vlist-item__subtitle" }, React.createElement("span", null, n.subTitle)), !!(null === (t = n.buttons) || void 0 === t ? void 0 : t.length) && React.createElement(ChatActionButtons, {
            buttons: n.buttons,
            onClick: e.onButtonClick
        })), React.createElement(ActionItemImage, {
            item: n,
            className: "xappw-vlist-item__img",
            emptyImageVisible: e.emptyImageVisible
        })));
    }, List = function (e) {
        var t = e.list, n = react.exports.useRef(null), r = t.items.some((function (e) {
            return e.imageUrl;
        })), o = !t.items.some((function (e) {
            var t;
            return e.subTitle || (null === (t = e.buttons) || void 0 === t ? void 0 : t.length);
        })), a = t.items.map((function (t, n) {
            return React.createElement("div", {
                className: "xappw-vlist-container__item",
                key: "item-key-" + n
            }, React.createElement(ListItem, {
                item: t,
                layout: o ? "titles" : "normal",
                emptyImageVisible: r,
                onExecute: e.onExecute,
                onButtonClick: e.onButtonClick
            }));
        }));
        return React.createElement("div", { className: "xappw-vlist" }, React.createElement("div", {
            ref: n,
            className: "xappw-vlist-container"
        }, e.list.title && React.createElement("div", { className: "xappw-vlist__header" }, e.list.title), a));
    };

    function getClassName(e) {
        return isAgent(e.nick) ? "agent" : "visitor";
    }

    var avaKeys = ["text", "html", "card", "list"], ChatMessage = function (e) {
        var t = useChatServerDispatch(), n = react.exports.useCallback((function (e) {
            e.actionUrl ? window.open(e.actionUrl, "chat-button", "toolbar=0,status=0,width=1000,height=700") : t(executeAction(e.label));
        }), [t]);

        function r(e, n) {
            t(executeAction(e, n));
        }

        return React.createElement("div", { className: "chat-msg-container-wrapper " + (isAgent(e.message.nick) ? "agent" : "visitor") + " " + (e.sibling ? "sibling" : "") }, React.createElement("div", { className: "chat-msg-container " + getClassName(e.message) }, function () {
            var t = e.agent, o = e.message.msg;
            if ("chat.msg" === e.message.type) {
                var a = avaKeys.find((function (e) {
                    return !!o[ e ];
                }));
                return React.createElement(React.Fragment, null, o.card && React.createElement(ChatMessagePart, {
                    showAvatar: "card" === a,
                    user: t
                }, React.createElement("div", { className: "chat-msg" }, React.createElement(ChatCard, {
                    card: o.card,
                    onButtonClick: n
                }))), o.text && React.createElement(ChatMessagePart, {
                    showAvatar: "text" === a,
                    user: t
                }, React.createElement(ChatTextMessage, {
                    message: e.message,
                    sibling: e.sibling
                })), o.html && React.createElement(ChatMessagePart, {
                    showAvatar: "html" === a,
                    user: t
                }, React.createElement(ChatMarkdownMessage, {
                    message: e.message,
                    sibling: e.sibling
                })), o.list && React.createElement(ChatMessagePart, {
                    showAvatar: "list" === a,
                    user: t
                }, "CAROUSEL" === o.list.type && React.createElement("div", { className: "chat-msg chat-msg--expand chat-msg--no-ava" }, React.createElement(Carousel, {
                    list: o.list,
                    onExecute: r,
                    onButtonClick: n
                })), "LIST" === o.list.type && React.createElement("div", { className: "chat-msg chat-msg--expand" }, React.createElement(List, {
                    list: o.list,
                    onExecute: r,
                    onButtonClick: n
                }))));
            }
            return React.createElement(React.Fragment, null);
        }()));
    }, CardContainer = function (e) {
        return React.createElement("div", { className: "card-container " + e.addClass }, (t = "string" == typeof e.icon, React.createElement("div", { className: "card-container__icon" }, !t && e.icon)), React.createElement("div", { className: "card-container__content " + e.contentAddClass }, React.createElement("div", { className: "card-container__title" }, e.title), e.children));
        var t;
    }, defaultProps$2 = {
        agent: {}, hasRating: !1, shouldDisplay: !0, onRate: function () {
        }
    }, ChatRating = function (e) {
        void 0 === e && (e = defaultProps$2);
        var t = e.onRate, n = react.exports.useCallback((function () {
            t("bad");
        }), [t]), r = react.exports.useCallback((function () {
            t("good");
        }), [t]), o = react.exports.useCallback((function () {
            t(void 0);
        }), [t]);
        return e.shouldDisplay ? e.hasRating ? React.createElement(CardContainer, {
            title: "Chat Rating",
            addClass: "chat-rating-card"
        }, "You have rated the chat service.", React.createElement("div", { className: "buttons-container" }, React.createElement(ActionButton, {
            addClass: "button button-rate-again",
            label: "Rate again",
            onClick: o
        }))) : React.createElement(CardContainer, {
            title: "Chat Rating",
            addClass: "chat-rating-card"
        }, e.agent.displayName, " has requested you to rate the chat service.", React.createElement("div", { className: "buttons-container" }, React.createElement(ActionButton, {
            addClass: "button button-rate-bad",
            label: "Rate Bad",
            onClick: n
        }), React.createElement(ActionButton, {
            addClass: "button button-rate-good",
            label: "Rate Good",
            onClick: r
        }))) : null;
    }, ChatRatingContainer = function (e) {
        var t = useChatServerDispatch(), n = react.exports.useCallback((function (e) {
            t(sendChatRating(e));
        }), [t]);
        return React.createElement(ChatRating, {
            agent: e.agent,
            hasRating: e.hasRating,
            shouldDisplay: e.shouldDisplay,
            onRate: n
        });
    }, MessageSvg = function (e) {
        return React.createElement("svg", {
            className: "message-svg",
            width: "16",
            height: "12",
            viewBox: "0 0 16 12"
        }, React.createElement("path", {
            d: "M14.4 0H1.6C.72 0 .008.675.008 1.5L0 10.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9c0-.825-.72-1.5-1.6-1.5zm0 3L8 6.75 1.6 3V1.5L8 5.25l6.4-3.75V3z",
            fill: "#424242",
            fillRule: "evenodd"
        }));
    }, MessageForm = function (e) {
        var t = react.exports.useRef(null), n = react.exports.useRef(null), r = react.exports.useRef(null),
            o = react.exports.useRef(null), a = react.exports.useState(!1), i = a[ 0 ], s = a[ 1 ];

        function l() {
            var e, t, r;
            (null === (e = n.current) || void 0 === e ? void 0 : e.validity.patternMismatch) ? null === (t = n.current) || void 0 === t || t.setCustomValidity("This doesn't look like an email!") : null === (r = n.current) || void 0 === r || r.setCustomValidity("");
        }

        function u(a) {
            var i, l, u, c, f;
            a.preventDefault(), (null === (i = o.current) || void 0 === i ? void 0 : i.checkValidity()) ? (e.onSubmit({
                name: null === (u = t.current) || void 0 === u ? void 0 : u.value,
                email: null === (c = n.current) || void 0 === c ? void 0 : c.value,
                message: null === (f = r.current) || void 0 === f ? void 0 : f.value
            }), s(!0)) : null === (l = o.current) || void 0 === l || l.reportValidity();
        }

        function c() {
            s(!1);
        }

        return React.createElement(CardContainer, {
            title: e.title,
            addClass: "offline-card",
            contentAddClass: i ? "sent" : "",
            icon: React.createElement(MessageSvg, null)
        }, i ? React.createElement("div", {
            key: "sent",
            className: "message-form--sent"
        }, "Your message has been sent. We will get back to you as soon as possible.", React.createElement(ActionButton, {
            addClass: "button-resend",
            label: "Send another",
            onClick: c
        })) : React.createElement("form", {
            ref: o,
            key: "not-sent",
            className: "message-form",
            onSubmit: u
        }, React.createElement("div", { className: "content" }, React.createElement("div", { className: "section" }, React.createElement("label", { className: "label" }, "Name"), React.createElement("input", {
            ref: t,
            maxLength: 255
        })), React.createElement("div", { className: "section" }, React.createElement("label", { className: "label" }, "Email"), React.createElement("input", {
            ref: n,
            onChange: l,
            type: "email",
            required: !0,
            pattern: EMAIL_REGEX
        })), React.createElement("div", { className: "section" }, React.createElement("label", { className: "label" }, "Message"), React.createElement("textarea", {
            required: !0,
            ref: r
        }))), React.createElement("div", { className: "button-container" }, React.createElement(ActionButton, {
            type: "submit",
            addClass: "message-form__submit",
            label: "Send"
        }))));
    }, OfflineForm = function (e) {
        return React.createElement(MessageForm, { title: "Offline message card title", onSubmit: e.onSubmit });
    }, OfflineFormContainer = function (e) {
        var t = useChatServerDispatch(), n = react.exports.useCallback((function (e) {
            t(sendOfflineMsg(e));
        }), [t]);
        return React.createElement(OfflineForm, { onSubmit: n });
    }, PrechatForm = function (e) {
        var t = react.exports.useState(!1), n = t[ 0 ], r = t[ 1 ], o = e.onSubmit,
            a = react.exports.useCallback((function (e) {
                o(e), r(!0);
            }), [o]);
        return React.createElement(React.Fragment, null, !n && React.createElement(MessageForm, {
            title: "Introduce yourself!",
            onSubmit: a
        }));
    }, PrechatFormContainer = function (e) {
        var t = useChatServerDispatch(), n = react.exports.useCallback((function (e) {
            e.message && (t(sendVisitorInfo({ displayName: e.name, email: e.email })), t(executeAction(e.message)));
        }), [t]);
        return React.createElement(PrechatForm, { onSubmit: n });
    }, defaultProps$1 = { position: 0 }, QueuePosition = function (e) {
        return void 0 === e && (e = defaultProps$1), e.position <= 0 ? null : React.createElement("div", { className: "system-msg-container" }, React.createElement("span", { className: "system-msg" }, "Queue position: ", e.position));
    };

    function getMessageByType(e) {
        switch (e.type) {
            case"chat.memberjoin":
                return e.displayName + " has joined the chat";
            case"chat.memberleave":
                return e.displayName + " has left the chat";
            case"chat.rating":
                return e.newRating ? "You have rated the chat service " + convertToSentenceCase(e.newRating) : "You have removed the chat rating";
            default:
                return JSON.stringify(e);
        }
    }

    var SystemMessage = function (e) {
        return React.createElement("div", { className: "system-msg-container" }, React.createElement("span", { className: "system-msg" }, getMessageByType(e.message)));
    };

    function convertToSentenceCase(e) {
        return e[ 0 ].toUpperCase() + e.slice(1);
    }

    var TypingIndicator = function (e) {
        return React.createElement("div", { className: "typing-indicator" }, React.createElement("div", { className: "typing-indicator-part" }), React.createElement("div", { className: "typing-indicator-part" }), React.createElement("div", { className: "typing-indicator-part" }));
    }, TypingStatus = function (e) {
        var t = Object.values(e.agents).filter((function (e) {
            return e.typing;
        }));
        return React.createElement(React.Fragment, null, t.map((function (e) {
            return React.createElement("div", {
                className: "chat-msg-container-wrapper",
                key: "typing-status-" + e.nick
            }, React.createElement("div", {
                key: e.nick,
                className: "chat-msg-container agent chat-typing-progress"
            }, React.createElement(ChatMessagePart, {
                user: e,
                showAvatar: !0
            }, React.createElement("div", { className: "chat-msg" }, React.createElement(ChatMessageBubble, {
                owner: "others",
                hasTail: !0
            }, React.createElement(TypingIndicator, null))))));
        })));
    }, defaultProps = {
        visible: !0,
        messages: [],
        agents: {},
        isOffline: !0,
        isChatting: !1,
        queuePosition: 0,
        lastRatingRequestTimestamp: 0,
        hasRating: !1,
        visitorId: ""
    }, MessageList = function (e) {
        void 0 === e && (e = defaultProps);
        var t = react.exports.useRef(null);
        react.exports.useEffect((function () {
            t.current.scrollIntoView({ behavior: "smooth" });
        }), [e.messages]);
        var n = e.agents, r = e.queuePosition;
        return React.createElement("div", { className: "message-list-container" }, React.createElement("div", { className: "message-list-container__msgs" }, e.messages.map((function (t, n) {
            var r = e.messages[ n + 1 ], o = !1, a = t.nick, i = r && r.nick;
            return r && r.type === t.type && a && a === i && (o = !0), function (t, n) {
                switch (t.type) {
                    case"chat.file":
                    case"chat.msg":
                        return React.createElement(ChatMessage, {
                            key: t.type + t.timestamp,
                            message: t,
                            sibling: n,
                            agent: e.agents[ t.nick ]
                        });
                    case"chat.memberjoin":
                    case"chat.memberleave":
                    case"chat.rating":
                    case"chat.typing":
                        return React.createElement(SystemMessage, { key: t.type + t.timestamp, message: t });
                    case"chat.request.rating":
                        return React.createElement(ChatRatingContainer, {
                            key: t.type + t.timestamp,
                            agent: e.agents[ t.nick ],
                            hasRating: e.hasRating,
                            shouldDisplay: t.timestamp === e.lastRatingRequestTimestamp
                        });
                    case"chat.offline":
                        return React.createElement(OfflineFormContainer, { key: "offline-" + t.timestamp });
                    case"chat.prechat":
                        return React.createElement(PrechatFormContainer, { key: "prechat" });
                    default:
                        return React.createElement("div", { key: +new Date }, "Unhandled message: ", JSON.stringify(t));
                }
            }(t, o);
        })), React.createElement("div", {
            ref: t,
            style: { float: "left", clear: "both" }
        }), React.createElement(QueuePosition, { position: r }), React.createElement(TypingStatus, { agents: n })), React.createElement(ChatChipsContainer, null));
    }, ServerOffline = function () {
        return React.createElement("div", { className: "server-offline" }, React.createElement("h2", null, "Chat is currently unavailable"), React.createElement("h3", null, "Server is offline"));
    }, MinimizeButton = function (e) {
        return React.createElement("div", { className: "minimize-button", onClick: e.onClick });
    }, DEFAULT_STATUS_CONFIG = {
        online: "Virtual Assistant",
        offline: "Leave us a message",
        away: "We're away!",
        connecting: "Connecting..."
    };

    function getStatusText(e, t) {
        var n, r, o, a;
        switch (e) {
            case"online":
                return null !== (n = null == t ? void 0 : t.online) && void 0 !== n ? n : DEFAULT_STATUS_CONFIG.online;
            case"offline":
                return null !== (r = null == t ? void 0 : t.offline) && void 0 !== r ? r : DEFAULT_STATUS_CONFIG.offline;
            case"away":
                return null !== (o = null == t ? void 0 : t.away) && void 0 !== o ? o : DEFAULT_STATUS_CONFIG.away;
            default:
                return null !== (a = null == t ? void 0 : t.connecting) && void 0 !== a ? a : DEFAULT_STATUS_CONFIG.connecting;
        }
    }

    var StatusContainer = function (e) {
        var t;
        return React.createElement("div", { className: "status-container" }, React.createElement("div", { className: "status-container__avatar" }, React.createElement(Avatar, { entity: e.agent })), React.createElement("div", { className: "status-text" }, React.createElement("span", null, getStatusText(e.accountStatus, null === (t = e.config) || void 0 === t ? void 0 : t.status))), e.canMinimize && React.createElement(MinimizeButton, { onClick: e.minimizeOnClick }));
    };

    function buildStyleContent(e) {
        var t, n, r, o;
        return "\n:root {\n" + buildVariables(withPrefix("\t--xapp-", union(single("primary-color", null == e ? void 0 : e.primaryColor), withPrefix("widget-", union(getSize(null == e ? void 0 : e.size), getMargins(null == e ? void 0 : e.margin), getBorderStyle(null == e ? void 0 : e.border))), getChatButtonStyle(null == e ? void 0 : e.chatButton), withPrefix("header-", getHeaderStyle(null == e ? void 0 : e.header)), withPrefix("footer-", getFooterStyle(null == e ? void 0 : e.footer)), withPrefix("content-", union(getBackgroundStyle(null === (t = null == e ? void 0 : e.content) || void 0 === t ? void 0 : t.background))), withPrefix("messages-", getMessagesStyle(null == e ? void 0 : e.messages)), withPrefix("send-", getButtonStyle(null == e ? void 0 : e.sendButton)), withPrefix("menu-", getButtonStyle(null == e ? void 0 : e.menuButton)), withPrefix("menu-", getMenuStyle(null == e ? void 0 : e.menu)), withPrefix("minimize-", getButtonStyle(null == e ? void 0 : e.minimizeButton)), withPrefix("carousel-", union(withPrefix("title-", getTextStyle(null === (n = null == e ? void 0 : e.carousel) || void 0 === n ? void 0 : n.title)), withPrefix("subtitle-", getTextStyle(null === (r = null == e ? void 0 : e.carousel) || void 0 === r ? void 0 : r.subtitle)), withPrefix("action-", getButtonStyle(null === (o = null == e ? void 0 : e.carousel) || void 0 === o ? void 0 : o.button)))), withPrefix("input-", getInputStyle(null == e ? void 0 : e.input)), withPrefix("cta-", getCtaStyle(null == e ? void 0 : e.cta))))) + "\n}";
    }

    function WidgetStylesheet(e) {
        var t = buildStyleContent(e.theme);
        return React.createElement("style", null, t);
    }

    function buildVariables(e) {
        for (var t = e.next(), n = ""; !1 === t.done;) {
            var r = t.value, o = r[ 0 ], a = r[ 1 ];
            void 0 !== a && (n += o + ": " + a + ";\n\r"), t = e.next();
        }
        return n;
    }

    function withPrefix(e, t) {
        var n;
        return __generator(this, (function (r) {
            switch (r.label) {
                case 0:
                    n = t.next(), r.label = 1;
                case 1:
                    return n.done ? [3, 3] : [4, ["" + e + n.value[ 0 ], n.value[ 1 ]]];
                case 2:
                    return r.sent(), n = t.next(), [3, 1];
                case 3:
                    return [2];
            }
        }));
    }

    function union() {
        var e, t, n, r, o, a = [];
        for (e = 0; e < arguments.length; e++) a[ e ] = arguments[ e ];
        return __generator(this, (function (e) {
            switch (e.label) {
                case 0:
                    t = 0, n = a, e.label = 1;
                case 1:
                    if (!(t < n.length)) return [3, 5];
                    r = n[ t ], o = r.next(), e.label = 2;
                case 2:
                    return !1 !== o.done ? [3, 4] : [4, o.value];
                case 3:
                    return e.sent(), o = r.next(), [3, 2];
                case 4:
                    return t++, [3, 1];
                case 5:
                    return [2];
            }
        }));
    }

    function single(e, t) {
        return __generator(this, (function (n) {
            switch (n.label) {
                case 0:
                    return [4, [e, t]];
                case 1:
                    return n.sent(), [2];
            }
        }));
    }

    function empty() {
        return __generator(this, (function (e) {
            return [2];
        }));
    }

    function getChatButtonStyle(e) {
        return e ? withPrefix("chat-button-", union(getMargins(e.margin), getBackgroundStyle(e.background))) : empty();
    }

    function getMessagesStyle(e) {
        return e ? union(withPrefix("mine-", getMessageStyle(e.mine)), withPrefix("others-", getMessageStyle(e.others)), getPaddings(null == e ? void 0 : e.padding), single("max-width", null == e ? void 0 : e.maxWidth)) : empty();
    }

    function getMessageStyle(e) {
        return union(single("bubble-color", null == e ? void 0 : e.bubbleColor), getTextStyle(null == e ? void 0 : e.text));
    }

    function getSize(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return [4, ["width", null == e ? void 0 : e.width]];
                case 1:
                    return t.sent(), [4, ["height", null == e ? void 0 : e.height]];
                case 2:
                    return t.sent(), [2];
            }
        }));
    }

    function getMargins(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return e ? [4, ["margin-top", e.top]] : [3, 5];
                case 1:
                    return t.sent(), [4, ["margin-right", e.right]];
                case 2:
                    return t.sent(), [4, ["margin-bottom", e.bottom]];
                case 3:
                    return t.sent(), [4, ["margin-left", e.left]];
                case 4:
                    t.sent(), t.label = 5;
                case 5:
                    return [2];
            }
        }));
    }

    function getPaddings(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return e ? [4, ["padding-top", e.top]] : [3, 5];
                case 1:
                    return t.sent(), [4, ["padding-right", e.right]];
                case 2:
                    return t.sent(), [4, ["padding-bottom", e.bottom]];
                case 3:
                    return t.sent(), [4, ["padding-left", e.left]];
                case 4:
                    t.sent(), t.label = 5;
                case 5:
                    return [2];
            }
        }));
    }

    function getTextStyle(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return e ? [4, ["text-color", e.color]] : [3, 6];
                case 1:
                    return t.sent(), [4, ["font-size", e.fontSize]];
                case 2:
                    return t.sent(), [4, ["font-family", e.fontFamily]];
                case 3:
                    return t.sent(), [4, ["font-weight", e.fontWeight]];
                case 4:
                    return t.sent(), [4, ["font-style", e.fontStyle]];
                case 5:
                    t.sent(), t.label = 6;
                case 6:
                    return [2];
            }
        }));
    }

    function getBackgroundStyle(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return [4, ["background", e]];
                case 1:
                    return t.sent(), [2];
            }
        }));
    }

    function getButtonStyle(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return [4, ["button-color", null == e ? void 0 : e.color]];
                case 1:
                    return t.sent(), [2];
            }
        }));
    }

    function getMenuItemStyle(e) {
        return union(getTextStyle(null == e ? void 0 : e.text), getBackgroundStyle(null == e ? void 0 : e.background), single("height", null == e ? void 0 : e.height));
    }

    function getMenuStyle(e) {
        return union(withPrefix("item-", getMenuItemStyle(null == e ? void 0 : e.item)));
    }

    function getBorderStyle(e) {
        return __generator(this, (function (t) {
            switch (t.label) {
                case 0:
                    return e ? [4, ["border-color", e.color]] : [3, 4];
                case 1:
                    return t.sent(), [4, ["border-width", e.width]];
                case 2:
                    return t.sent(), [4, ["border-radius", e.radius]];
                case 3:
                    t.sent(), t.label = 4;
                case 4:
                    return [2];
            }
        }));
    }

    function getHeaderStyle(e) {
        return e ? union(getBackgroundStyle(e.background), getTextStyle(e.text), getBorderStyle(e.border)) : empty();
    }

    function getFooterStyle(e) {
        return e ? union(getBackgroundStyle(e.background), getBorderStyle(e.border)) : empty();
    }

    function getInputStyle(e) {
        return e ? union(getBackgroundStyle(e.background), getBorderStyle(e.border), getTextStyle(e.text)) : empty();
    }

    function getCtaStyle(e) {
        return e ? union(getBackgroundStyle(e.background), getTextStyle(e.text)) : empty();
    }

    function useConnectionInfo(e) {
        var t = react.exports.useMemo((function () {
            return (null == e ? void 0 : e.connection) ? e.connection : {
                serverUrl: null == e ? void 0 : e.serverUrl,
                accountKey: null == e ? void 0 : e.accountKey,
                type: (null == e ? void 0 : e.direct) ? "direct" : "websocket"
            };
        }), [e]), n = lib$3.useSelector((function (e) {
            return e.connection.nonce;
        }));
        return react.exports.useMemo((function () {
            return { accountKey: t.accountKey, serverUrl: t.serverUrl, type: t.type, nonce: n };
        }), [t.accountKey, t.serverUrl, t.type, n]);
    }

    var ChatWidgetWrapper = function (e) {
        var t = e.config, n = useConnectionInfo(t), r = react.exports.useMemo((function () {
            var e;
            return __assign(__assign({}, t), {
                connection: n,
                assetUrl: null !== (e = null == n ? void 0 : n.serverUrl) && void 0 !== e ? e : defaultServerUrl,
                env: t
            });
        }), [n, t]), o = useChatServer(n);
        return React.createElement(ChatConfigContext.Provider, { value: r }, React.createElement(ChatServerContext.Provider, { value: o }, React.createElement(ChatWidget, __assign({}, e))));
    }, ChatWidget = function (e) {
        var t, n, r, o, a = useChatServerDispatch(), i = lib$3.useSelector((function (e) {
                return e;
            })), s = null !== (t = e.mode) && void 0 !== t ? t : "normal", l = "static" === s, u = "widget-container--" + s,
            c = !("docked" === s) && !l,
            f = react.exports.useState(!c || !!get("visible)") || (null === (n = e.config) || void 0 === n ? void 0 : n.autoOpenOnWidth) && window.matchMedia("(min-width: " + (null === (r = e.config) || void 0 === r ? void 0 : r.autoOpenOnWidth) + ")").matches),
            d = f[ 0 ], p = f[ 1 ], h = react.exports.useState(!1), m = h[ 0 ], g = h[ 1 ],
            v = react.exports.useContext(ChatServerContext);

        function y(e) {
            l || (p(e), set("visible", e));
        }

        function b() {
            m && (a(sendTyping(!1)), g(!1));
        }

        function w() {
            return d ? "visible" : "";
        }

        var k = "offline" === i.accountStatus && !i.isChatting, E = i && i.chats;
        k ? (E.push({
            type: "chat.msg",
            displayName: "Chat Agent",
            nick: "agent:offline",
            timestamp: +new Date,
            msg: { text: "Sorry, we are offline at the moment. Please leave us your contact information and we will get back to you soon!" }
        }), E.push({
            type: "chat.offline",
            nick: "agent:offline",
            timestamp: +new Date
        })) : i.isChatting || (E.length = 0, e.preChatFormEnabled && E.push({
            type: "chat.prechat",
            nick: "agent:offline",
            timestamp: +new Date
        })), useGreeting(!k && !e.preChatFormEnabled && d);
        var x = e.config, S = e.onConnectionStatusChange, _ = i.connection.connectionStatus;
        return react.exports.useEffect((function () {
            S && S(_);
        }), [_, S]), React.createElement(React.Fragment, null, React.createElement("div", { className: "widget-container " + u + " " + w() }, React.createElement(WidgetStylesheet, { theme: null == x ? void 0 : x.theme }), React.createElement(StatusContainer, {
            accountStatus: i.accountStatus,
            minimizeOnClick: function () {
                y(!1);
            },
            agent: i.agents[ "agent:robot" ],
            canMinimize: c,
            config: null == x ? void 0 : x.header
        }), React.createElement(MessageList, {
            visible: d,
            queuePosition: i.queuePosition,
            isChatting: i.isChatting,
            isOffline: k,
            messages: E,
            agents: i.agents,
            lastRatingRequestTimestamp: i.lastRatingRequestTimestamp,
            hasRating: i.hasRating,
            visitorId: i.visitorId
        }), React.createElement("div", { className: "spinner-container " + (d && "pending" === _ ? "visible" : "") }, React.createElement("div", { className: "spinner" })), "offline" === _ && React.createElement(ServerOffline, null), React.createElement(ChatFooter, {
            isChatting: i.isChatting,
            onChange: function () {
                m || (a(sendTyping(!0)), g(!0)), b();
            },
            onSubmit: function (e) {
                ("offline" !== i.accountStatus || i.isChatting) && e && (b(), v.flush(), a(executeAction(e)));
            },
            onFileUpload: function (e) {
                var t;
                e.preventDefault();
                var n = null === (t = null == e ? void 0 : e.dataTransfer) || void 0 === t ? void 0 : t.files[ 0 ];
                n && a(sendFile(n));
            }
        })), React.createElement(ChatButton, {
            addClass: w(), onClick: function () {
                y(!0);
            }, config: null === (o = e.config) || void 0 === o ? void 0 : o.cta, visible: d
        }));
    }, ChatWidgetContainer = function (e) {
        var t;
        return (null === (t = e.config) || void 0 === t ? void 0 : t.disabled) ? React.createElement(React.Fragment, null) : React.createElement(lib$3.Provider, { store: ChatStore }, React.createElement(ChatWidgetWrapper, __assign({}, e)));
    };

    function camelCase(e) {
        return e.split("-").map((function (e, t) {
            return e.length ? t ? e[ 0 ].toUpperCase() + e.substring(1).toLowerCase() : e.toLowerCase() : "";
        })).join("");
    }

    function coerce(e, t) {
        return "string" === t ? e : "boolean" === t ? "TRUE" === e : "number" === t ? parseFloat(e) : e;
    }

    function parseEnv(e) {
        return Object.keys(e).reduce((function (t, n) {
            var r = n, o = "string";
            n.endsWith("-FLAG") ? (r = n.substring(0, n.length - 5), o = "boolean") : n.endsWith("-MSEC") && (r = n.substring(0, n.length - 5), o = "number");
            for (var a = r.split("_").map(camelCase), i = t; a.length > 1;) {
                var s = a.shift();
                i[ s ] || (i[ s ] = {}), i = i[ s ];
            }
            return i[ a.shift() ] = coerce(e[ n ], o), t;
        }), {});
    }

    function useFetchStylesheet() {
        var e = react.exports.useState(!1), t = e[ 0 ], n = e[ 1 ];
        return react.exports.useEffect((function () {
            if (!document.getElementById("xapp-style")) {
                var e = getBasePathFromWidgetSource(), t = document.createElement("link");
                t.id = "xapp-style", t.href = e.path + "/xapp-chat-widget.css", e.key && (t.href = e.path + "/xapp-chat-widget.css?key=" + e.key), t.rel = "stylesheet", document.head.appendChild(t), t.addEventListener("load", (function () {
                    n(!0);
                }));
            }
        }), []), [t];
    }

    function injectConfig() {
        try {
            var e = JSON.parse("{{INJECT}}");
            window.xaConfig = e;
        } catch (e) {
        }
    }

    function getConfigFromWindow() {
        return hasConfig(window) ? window.xaConfig : {};
    }

    function getConfig() {
        var e = parseEnv(process.env);
        return __assign(__assign({}, e), getConfigFromWindow());
    }

    function hasConfig(e) {
        return !!e && "object" == typeof e.xaConfig;
    }

    var App = function (e) {
        var t = e.env, n = useFetchStylesheet()[ 0 ];
        return t.disabled ? React.createElement(React.Fragment, null) : n ? React.createElement(ChatWidgetContainer, { config: t }) : React.createElement(React.Fragment, null);
    };
    window.addEventListener("load", (function () {
        var e = document.getElementById("xapp-widget");
        e || ((e = document.createElement("div")).id = "xapp-widget", document.body.appendChild(e)), injectConfig();
        var t = getConfig();
        ReactDOM.render(React.createElement(App, { env: t }), e);
    })), exports.default = App, Object.defineProperty(exports, "__esModule", { value: !0 });
})({});
//# sourceMappingURL=xapp-chat-widget.js.map
