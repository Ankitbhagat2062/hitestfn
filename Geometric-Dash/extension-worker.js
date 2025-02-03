!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t, n) {
    function r() {}
    n(11).mixin(r),
    r.prototype.write = function(e, t, n) {
        this.emit("item", e, t, n)
    }
    ,
    r.prototype.end = function() {
        this.emit("end"),
        this.removeAllListeners()
    }
    ,
    r.prototype.pipe = function(e) {
        var t = this;
        function n() {
            e.write.apply(e, Array.prototype.slice.call(arguments))
        }
        function r() {
            !e._isStdio && e.end()
        }
        return t.emit("unpipe", e),
        e.emit("pipe", t),
        t.on("item", n),
        t.on("end", r),
        t.when("unpipe", function(o) {
            var i = o === e || void 0 === o;
            return i && (t.removeListener("item", n),
            t.removeListener("end", r),
            e.emit("unpipe")),
            i
        }),
        e
    }
    ,
    r.prototype.unpipe = function(e) {
        return this.emit("unpipe", e),
        this
    }
    ,
    r.prototype.format = function(e) {
        throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:", "var Minilog = require('minilog');", "Minilog", "  .pipe(Minilog.backends.console.formatClean)", "  .pipe(Minilog.backends.console);"].join("\n"))
    }
    ,
    r.mixin = function(e) {
        var t, n = r.prototype;
        for (t in n)
            n.hasOwnProperty(t) && (e.prototype[t] = n[t])
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    var r = n(9);
    r.enable(),
    e.exports = r("vm")
}
, function(e, t) {
    var n = {
        black: "#000",
        red: "#c23621",
        green: "#25bc26",
        yellow: "#bbbb00",
        blue: "#492ee1",
        magenta: "#d338d3",
        cyan: "#33bbc8",
        gray: "#808080",
        purple: "#708"
    };
    e.exports = function(e, t) {
        return t ? "color: #fff; background: " + n[e] + ";" : "color: " + n[e] + ";"
    }
}
, function(e, t, n) {
    (function(e) {
        function t(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return r(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        var i = n(5)
          , a = n(6)
          , c = n(7)
          , s = n(19)
          , u = function() {
            function e() {
                var n = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.nextExtensionId = 0,
                this.initialRegistrations = [],
                c.waitForConnection.then(function() {
                    c.call("extensions", "allocateWorker").then(function(e) {
                        var r = t(e, 2)
                          , o = r[0]
                          , i = r[1];
                        n.workerId = o,
                        n.extensionURL = i;
                        try {
                            importScripts(i);
                            var a = n.initialRegistrations;
                            n.initialRegistrations = null,
                            Promise.all(a).then(function() {
                                return c.call("extensions", "onWorkerInit", o)
                            })
                        } catch (e) {
                            c.call("extensions", "onWorkerInit", o, e)
                        }
                    })
                }),
                this.extensions = []
            }
            return function(e, t, n) {
                t && o(e.prototype, t),
                n && o(e, n)
            }(e, [{
                key: "register",
                value: function(e) {
                    var t = this
                      , n = this.nextExtensionId++;
                    this.extensions.push(e);
                    var r = "extension.".concat(this.workerId, ".").concat(n)
                      , o = c.setService(r, e).then(function() {
                        return c.call("extensions", "registerExtensionService", r, t.extensionURL)
                    });
                    return this.initialRegistrations && this.initialRegistrations.push(o),
                    o
                }
            }]),
            e
        }();
        e.Scratch = e.Scratch || {},
        e.Scratch.ArgumentType = i,
        e.Scratch.BlockType = a,
        e.Scratch.TargetType = s;
        var l = new u;
        e.Scratch.extensions = {
            register: l.register.bind(l)
        }
    }
    ).call(this, n(4))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    e.exports = {
        ANGLE: "angle",
        BOOLEAN: "Boolean",
        COLOR: "color",
        NUMBER: "number",
        STRING: "string",
        MATRIX: "matrix",
        NOTE: "note",
        IMAGE: "image"
    }
}
, function(e, t) {
    e.exports = {
        BOOLEAN: "Boolean",
        BUTTON: "button",
        COMMAND: "command",
        CONDITIONAL: "conditional",
        EVENT: "event",
        HAT: "hat",
        LOOP: "loop",
        REPORTER: "reporter"
    }
}
, function(e, t, n) {
    function r(e) {
        "@babel/helpers - typeof";
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function i(e, t) {
        return (i = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function a(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, o = s(e);
            if (t) {
                var i = s(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else
                n = o.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" === r(t) || "function" == typeof t))
                    return t;
                return c(e)
            }(this, n)
        }
    }
    function c(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    var u = n(8)
      , l = n(1)
      , f = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && i(e, t)
        }(n, u);
        var t = a(n);
        function n() {
            var e;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            (e = t.call(this))._connectionPromise = new Promise(function(t) {
                e._onConnect = t
            }
            ),
            e.services = {},
            e._onMessage = e._onMessage.bind(c(e), self),
            "undefined" != typeof self && (self.onmessage = e._onMessage),
            e
        }
        return function(e, t, n) {
            t && o(e.prototype, t),
            n && o(e, n)
        }(n, [{
            key: "waitForConnection",
            get: function() {
                return this._connectionPromise
            }
        }, {
            key: "setService",
            value: function(e, t) {
                var n = this;
                return this.services.hasOwnProperty(e) && l.warn("Worker dispatch replacing existing service provider for ".concat(e)),
                this.services[e] = t,
                this.waitForConnection.then(function() {
                    return n._remoteCall(self, "dispatch", "setService", e)
                })
            }
        }, {
            key: "_getServiceProvider",
            value: function(e) {
                var t = this.services[e];
                return {
                    provider: t || self,
                    isRemote: !t
                }
            }
        }, {
            key: "_onDispatchMessage",
            value: function(e, t) {
                var n;
                switch (t.method) {
                case "handshake":
                    n = this._onConnect();
                    break;
                case "terminate":
                    setTimeout(function() {
                        return self.close()
                    }, 0),
                    n = Promise.resolve();
                    break;
                default:
                    l.error("Worker dispatch received message for unknown method: ".concat(t.method))
                }
                return n
            }
        }]),
        n
    }();
    e.exports = new f
}
, function(e, t, n) {
    function r(e) {
        return function(e) {
            if (Array.isArray(e))
                return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || i(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function o(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }(e, t) || i(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function i(e, t) {
        if (e) {
            if ("string" == typeof e)
                return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
        }
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var s = n(1)
      , u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.callbacks = [],
            this.nextResponseId = 0
        }
        return function(e, t, n) {
            t && c(e.prototype, t),
            n && c(e, n)
        }(e, [{
            key: "call",
            value: function(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                    r[o - 2] = arguments[o];
                return this.transferCall.apply(this, [e, t, null].concat(r))
            }
        }, {
            key: "transferCall",
            value: function(e, t, n) {
                try {
                    var r = this._getServiceProvider(e)
                      , o = r.provider
                      , i = r.isRemote;
                    if (o) {
                        for (var a = arguments.length, c = new Array(a > 3 ? a - 3 : 0), s = 3; s < a; s++)
                            c[s - 3] = arguments[s];
                        if (i)
                            return this._remoteTransferCall.apply(this, [o, e, t, n].concat(c));
                        var u = o[t].apply(o, c);
                        return Promise.resolve(u)
                    }
                    return Promise.reject(new Error("Service not found: ".concat(e)))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        }, {
            key: "_isRemoteService",
            value: function(e) {
                return this._getServiceProvider(e).isRemote
            }
        }, {
            key: "_remoteCall",
            value: function(e, t, n) {
                for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
                    o[i - 3] = arguments[i];
                return this._remoteTransferCall.apply(this, [e, t, n, null].concat(o))
            }
        }, {
            key: "_remoteTransferCall",
            value: function(e, t, n, r) {
                for (var o = this, i = arguments.length, a = new Array(i > 4 ? i - 4 : 0), c = 4; c < i; c++)
                    a[c - 4] = arguments[c];
                return new Promise(function(i, c) {
                    var s = o._storeCallbacks(i, c);
                    a.length > 0 && "function" == typeof a[a.length - 1].yield && a.pop(),
                    r ? e.postMessage({
                        service: t,
                        method: n,
                        responseId: s,
                        args: a
                    }, r) : e.postMessage({
                        service: t,
                        method: n,
                        responseId: s,
                        args: a
                    })
                }
                )
            }
        }, {
            key: "_storeCallbacks",
            value: function(e, t) {
                var n = this.nextResponseId++;
                return this.callbacks[n] = [e, t],
                n
            }
        }, {
            key: "_deliverResponse",
            value: function(e, t) {
                try {
                    var n = o(this.callbacks[e], 2)
                      , r = n[0]
                      , i = n[1];
                    delete this.callbacks[e],
                    t.error ? i(t.error) : r(t.result)
                } catch (e) {
                    s.error("Dispatch callback failed: ".concat(JSON.stringify(e)))
                }
            }
        }, {
            key: "_onMessage",
            value: function(e, t) {
                var n, o = t.data;
                o.args = o.args || [],
                o.service ? n = "dispatch" === o.service ? this._onDispatchMessage(e, o) : this.call.apply(this, [o.service, o.method].concat(r(o.args))) : void 0 === o.responseId ? s.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(t))) : this._deliverResponse(o.responseId, o),
                n && (void 0 === o.responseId ? s.error("Dispatch message missing required response ID: ".concat(JSON.stringify(t))) : n.then(function(t) {
                    return e.postMessage({
                        responseId: o.responseId,
                        result: t
                    })
                }, function(t) {
                    return e.postMessage({
                        responseId: o.responseId,
                        error: t
                    })
                }))
            }
        }, {
            key: "_getServiceProvider",
            value: function(e) {
                throw new Error("Could not get provider for ".concat(e, ": _getServiceProvider not implemented"))
            }
        }, {
            key: "_onDispatchMessage",
            value: function(e, t) {
                throw new Error("Unimplemented dispatch message handler cannot handle ".concat(t.method, " method"))
            }
        }]),
        e
    }();
    e.exports = u
}
, function(e, t, n) {
    var r = n(10)
      , o = r.enable
      , i = r.disable
      , a = "undefined" != typeof navigator && /chrome/i.test(navigator.userAgent)
      , c = n(13);
    if (r.defaultBackend = a ? c.minilog : c,
    "undefined" != typeof window) {
        try {
            r.enable(JSON.parse(window.localStorage.minilogSettings))
        } catch (e) {}
        if (window.location && window.location.search) {
            var s = RegExp("[?&]minilog=([^&]*)").exec(window.location.search);
            s && r.enable(decodeURIComponent(s[1]))
        }
    }
    r.enable = function() {
        o.call(r, !0);
        try {
            window.localStorage.minilogSettings = JSON.stringify(!0)
        } catch (e) {}
        return this
    }
    ,
    r.disable = function() {
        i.call(r);
        try {
            delete window.localStorage.minilogSettings
        } catch (e) {}
        return this
    }
    ,
    (e.exports = r).backends = {
        array: n(16),
        browser: r.defaultBackend,
        localStorage: n(17),
        jQuery: n(18)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(12)
      , i = new r
      , a = Array.prototype.slice;
    (t = e.exports = function(e) {
        var n = function() {
            return i.write(e, void 0, a.call(arguments)),
            n
        };
        return n.debug = function() {
            return i.write(e, "debug", a.call(arguments)),
            n
        }
        ,
        n.info = function() {
            return i.write(e, "info", a.call(arguments)),
            n
        }
        ,
        n.warn = function() {
            return i.write(e, "warn", a.call(arguments)),
            n
        }
        ,
        n.error = function() {
            return i.write(e, "error", a.call(arguments)),
            n
        }
        ,
        n.log = n.debug,
        n.suggest = t.suggest,
        n.format = i.format,
        n
    }
    ).defaultBackend = t.defaultFormatter = null,
    t.pipe = function(e) {
        return i.pipe(e)
    }
    ,
    t.end = t.unpipe = t.disable = function(e) {
        return i.unpipe(e)
    }
    ,
    t.Transform = r,
    t.Filter = o,
    t.suggest = new o,
    t.enable = function() {
        return t.defaultFormatter ? i.pipe(t.suggest).pipe(t.defaultFormatter).pipe(t.defaultBackend) : i.pipe(t.suggest).pipe(t.defaultBackend)
    }
}
, function(e, t) {
    function n() {
        this._events = {}
    }
    n.prototype = {
        on: function(e, t) {
            this._events || (this._events = {});
            var n = this._events;
            return (n[e] || (n[e] = [])).push(t),
            this
        },
        removeListener: function(e, t) {
            var n, r = this._events[e] || [];
            for (n = r.length - 1; n >= 0 && r[n]; n--)
                r[n] !== t && r[n].cb !== t || r.splice(n, 1)
        },
        removeAllListeners: function(e) {
            e ? this._events[e] && (this._events[e] = []) : this._events = {}
        },
        listeners: function(e) {
            return this._events && this._events[e] || []
        },
        emit: function(e) {
            this._events || (this._events = {});
            var t, n = Array.prototype.slice.call(arguments, 1), r = this._events[e] || [];
            for (t = r.length - 1; t >= 0 && r[t]; t--)
                r[t].apply(this, n);
            return this
        },
        when: function(e, t) {
            return this.once(e, t, !0)
        },
        once: function(e, t, n) {
            if (!t)
                return this;
            function r() {
                n || this.removeListener(e, r),
                t.apply(this, arguments) && n && this.removeListener(e, r)
            }
            return r.cb = t,
            this.on(e, r),
            this
        }
    },
    n.mixin = function(e) {
        var t, r = n.prototype;
        for (t in r)
            r.hasOwnProperty(t) && (e.prototype[t] = r[t])
    }
    ,
    e.exports = n
}
, function(e, t, n) {
    var r = {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    function o() {
        this.enabled = !0,
        this.defaultResult = !0,
        this.clear()
    }
    function i(e, t) {
        return e.n.test ? e.n.test(t) : e.n == t
    }
    n(0).mixin(o),
    o.prototype.allow = function(e, t) {
        return this._white.push({
            n: e,
            l: r[t]
        }),
        this
    }
    ,
    o.prototype.deny = function(e, t) {
        return this._black.push({
            n: e,
            l: r[t]
        }),
        this
    }
    ,
    o.prototype.clear = function() {
        return this._white = [],
        this._black = [],
        this
    }
    ,
    o.prototype.test = function(e, t) {
        var n, o = Math.max(this._white.length, this._black.length);
        for (n = 0; n < o; n++) {
            if (this._white[n] && i(this._white[n], e) && r[t] >= this._white[n].l)
                return !0;
            if (this._black[n] && i(this._black[n], e) && r[t] <= this._black[n].l)
                return !1
        }
        return this.defaultResult
    }
    ,
    o.prototype.write = function(e, t, n) {
        if (!this.enabled || this.test(e, t))
            return this.emit("item", e, t, n)
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    var r = /\n+$/
      , o = new (n(0));
    o.write = function(e, t, n) {
        var o = n.length - 1;
        if ("undefined" != typeof console && console.log) {
            if (console.log.apply)
                return console.log.apply(console, [e, t].concat(n));
            if (JSON && JSON.stringify) {
                n[o] && "string" == typeof n[o] && (n[o] = n[o].replace(r, ""));
                try {
                    for (o = 0; o < n.length; o++)
                        n[o] = JSON.stringify(n[o])
                } catch (e) {}
                console.log(n.join(" "))
            }
        }
    }
    ,
    o.formatters = ["color", "minilog"],
    o.color = n(14),
    o.minilog = n(15),
    e.exports = o
}
, function(e, t, n) {
    var r = n(0)
      , o = n(2)
      , i = {
        debug: ["cyan"],
        info: ["purple"],
        warn: ["yellow", !0],
        error: ["red", !0]
    }
      , a = new r;
    a.write = function(e, t, n) {
        console.log;
        console[t] && console[t].apply && console[t].apply(console, ["%c" + e + " %c" + t, o("gray"), o.apply(o, i[t])].concat(n))
    }
    ,
    a.pipe = function() {}
    ,
    e.exports = a
}
, function(e, t, n) {
    var r = n(0)
      , o = n(2)
      , i = {
        debug: ["gray"],
        info: ["purple"],
        warn: ["yellow", !0],
        error: ["red", !0]
    }
      , a = new r;
    a.write = function(e, t, n) {
        var r = console.log;
        "debug" != t && console[t] && (r = console[t]);
        var a = 0;
        if ("info" != t) {
            for (; a < n.length && "string" == typeof n[a]; a++)
                ;
            r.apply(console, ["%c" + e + " " + n.slice(0, a).join(" "), o.apply(o, i[t])].concat(n.slice(a)))
        } else
            r.apply(console, ["%c" + e, o.apply(o, i[t])].concat(n))
    }
    ,
    a.pipe = function() {}
    ,
    e.exports = a
}
, function(e, t, n) {
    var r = []
      , o = new (n(0));
    o.write = function(e, t, n) {
        r.push([e, t, n])
    }
    ,
    o.get = function() {
        return r
    }
    ,
    o.empty = function() {
        r = []
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    var r = !1
      , o = new (n(0));
    o.write = function(e, t, n) {
        if ("undefined" != typeof window && "undefined" != typeof JSON && JSON.stringify && JSON.parse)
            try {
                r || (r = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : []),
                r.push([(new Date).toString(), e, t, n]),
                window.localStorage.minilog = JSON.stringify(r)
            } catch (e) {}
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    var r = n(0)
      , o = (new Date).valueOf().toString(36);
    function i(e) {
        this.url = e.url || "",
        this.cache = [],
        this.timer = null,
        this.interval = e.interval || 3e4,
        this.enabled = !0,
        this.jQuery = window.jQuery,
        this.extras = {}
    }
    r.mixin(i),
    i.prototype.write = function(e, t, n) {
        this.timer || this.init(),
        this.cache.push([e, t].concat(n))
    }
    ,
    i.prototype.init = function() {
        if (this.enabled && this.jQuery) {
            var e = this;
            this.timer = setTimeout(function() {
                var t, n, r = [], i = e.url;
                if (0 == e.cache.length)
                    return e.init();
                for (t = 0; t < e.cache.length; t++)
                    try {
                        JSON.stringify(e.cache[t]),
                        r.push(e.cache[t])
                    } catch (e) {}
                e.jQuery.isEmptyObject(e.extras) ? (n = JSON.stringify({
                    logs: r
                }),
                i = e.url + "?client_id=" + o) : n = JSON.stringify(e.jQuery.extend({
                    logs: r
                }, e.extras)),
                e.jQuery.ajax(i, {
                    type: "POST",
                    cache: !1,
                    processData: !1,
                    data: n,
                    contentType: "application/json",
                    timeout: 1e4
                }).success(function(t, n, r) {
                    t.interval && (e.interval = Math.max(1e3, t.interval))
                }).error(function() {
                    e.interval = 3e4
                }).always(function() {
                    e.init()
                }),
                e.cache = []
            }, this.interval)
        }
    }
    ,
    i.prototype.end = function() {}
    ,
    i.jQueryWait = function(e) {
        if ("undefined" != typeof window && (window.jQuery || window.$))
            return e(window.jQuery || window.$);
        "undefined" != typeof window && setTimeout(function() {
            i.jQueryWait(e)
        }, 200)
    }
    ,
    e.exports = i
}
, function(e, t) {
    e.exports = {
        SPRITE: "sprite",
        STAGE: "stage"
    }
}
]);
