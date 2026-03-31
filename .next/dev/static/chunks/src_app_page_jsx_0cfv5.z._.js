(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/useAR.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}
function getCenter(el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
        cx: r.left + r.width / 2,
        cy: r.top + r.height / 2
    };
}
const SECTIONS = [
    {
        key: "pardeep",
        name: "Pardeep",
        route: "/pardeep",
        video: "/mars_pardeep.mp4",
        subtitle: "Full Stack • AI • Automation",
        align: "right"
    }
];
function App() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // bubble refs
    const pRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // section refs
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bubbleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[bubbleRefs]": ()=>({
                pardeep: pRef
            })
    }["App.useMemo[bubbleRefs]"], []);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[routes]": ()=>({
                pardeep: "/pardeep"
            })
    }["App.useMemo[routes]"], []);
    const { latestRef, pinch, confidence, status, enabled, setEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // mirror provider state for toggle UI
    const [arEnabled, setArEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!enabled);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pardeep");
    const isNavigatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setEnabled?.(arEnabled);
        }
    }["App.useEffect"], [
        arEnabled,
        setEnabled
    ]);
    // Floating animation for all bubbles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const anims = [];
            const floatify = {
                "App.useEffect.floatify": (el, cfg)=>{
                    if (!el) return;
                    const a1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        y: cfg.y,
                        x: cfg.x,
                        rotation: cfg.r,
                        duration: cfg.d1,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1
                    });
                    const a2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        boxShadow: "0 22px 86px rgba(124,58,237,.26), inset 0 1px 0 rgba(255,255,255,.36)",
                        duration: cfg.d2,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1
                    });
                    anims.push(a1, a2);
                }
            }["App.useEffect.floatify"];
            floatify(pRef.current, {
                y: -12,
                x: -7,
                r: -2.2,
                d1: 3.1,
                d2: 2.7
            });
            return ({
                "App.useEffect": ()=>anims.forEach({
                        "App.useEffect": (a)=>a?.kill?.()
                    }["App.useEffect"])
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    const popAndGo = (el, route)=>{
        if (!el || !route || isNavigatingRef.current) return;
        isNavigatingRef.current = true;
        document.querySelectorAll("button[data-bubble]").forEach((b)=>{
            b.disabled = true;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>router.push(route)
        }).to(el, {
            scale: 1.08,
            duration: 0.12,
            ease: "power2.out"
        }).to(el, {
            scale: 1.55,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.32,
            ease: "power3.in"
        }, "<");
    };
    // Stable active section tracking (better than scroll midpoint math)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const els = sectionRefs.current.filter(Boolean);
            if (!els.length) return;
            const obs = new IntersectionObserver({
                "App.useEffect": (entries)=>{
                    let winner = null;
                    for (const e of entries){
                        if (!winner || e.intersectionRatio > winner.intersectionRatio) {
                            winner = e;
                        }
                    }
                    if (winner?.isIntersecting) {
                        const key = winner.target.getAttribute("data-key");
                        if (key) setActiveSection(key);
                    }
                }
            }["App.useEffect"], {
                threshold: [
                    0.4,
                    0.6,
                    0.8
                ]
            });
            els.forEach({
                "App.useEffect": (el)=>obs.observe(el)
            }["App.useEffect"]);
            return ({
                "App.useEffect": ()=>obs.disconnect()
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    // Find nearest bubble to AR cursor among all 3
    const getNearestChoice = ()=>{
        const pkt = latestRef?.current || {};
        const x = typeof pkt.x === "number" ? pkt.x : 0.5;
        const y = typeof pkt.y === "number" ? pkt.y : 0.5;
        const px = clamp(x, 0, 1) * window.innerWidth;
        const py = clamp(y, 0, 1) * window.innerHeight;
        const entries = [
            {
                key: "pardeep",
                c: getCenter(pRef.current)
            }
        ].filter((e)=>!!e.c);
        if (!entries.length) return activeSection || "pardeep";
        let best = entries[0].key;
        let bestD = Number.POSITIVE_INFINITY;
        for (const e of entries){
            const dx = e.c.cx - px;
            const dy = e.c.cy - py;
            const d2 = dx * dx + dy * dy;
            if (d2 < bestD) {
                bestD = d2;
                best = e.key;
            }
        }
        return best;
    };
    // AR highlight nearest bubble
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const setOutline = {
                "App.useEffect.setOutline": (name, on)=>{
                    const el = bubbleRefs[name]?.current;
                    if (!el) return;
                    el.style.outline = on ? "2px solid rgba(157,220,255,0.62)" : "none";
                }
            }["App.useEffect.setOutline"];
            if (!arEnabled) {
                setOutline("pardeep", false);
                return;
            }
            let raf = 0;
            const loop = {
                "App.useEffect.loop": ()=>{
                    const choice = getNearestChoice();
                    setOutline("pardeep", choice === "pardeep");
                    raf = requestAnimationFrame(loop);
                }
            }["App.useEffect.loop"];
            raf = requestAnimationFrame(loop);
            return ({
                "App.useEffect": ()=>cancelAnimationFrame(raf)
            })["App.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["App.useEffect"], [
        arEnabled,
        bubbleRefs,
        activeSection
    ]);
    // Pinch rising-edge => navigate nearest
    const pinchPrevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!arEnabled || isNavigatingRef.current) {
                pinchPrevRef.current = pinch;
                return;
            }
            const strongHand = confidence >= 0.55;
            const rising = !pinchPrevRef.current && pinch;
            if (strongHand && rising) {
                const choice = getNearestChoice();
                const ref = bubbleRefs[choice]?.current;
                const route = routes[choice];
                if (ref && route) popAndGo(ref, route);
            }
            pinchPrevRef.current = pinch;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["App.useEffect"], [
        pinch,
        confidence,
        arEnabled,
        activeSection,
        bubbleRefs,
        routes
    ]);
    const arHint = arEnabled ? `• aim with hand + pinch to select • ${String(status || "idle").toLowerCase()}` : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hub3-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `ar-toggle ${arEnabled ? "on" : ""}`,
                onClick: ()=>setArEnabled((v)=>!v),
                title: `AR: ${String(status)} • conf: ${Number(confidence || 0).toFixed(2)}`,
                children: arEnabled ? "🖐 AR ON" : "📴 AR OFF"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: "Portfolio Hub"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hint",
                        children: [
                            "Click bubble or use AR pinch ",
                            arHint
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hub-dots",
                "aria-label": "Section navigation",
                children: SECTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${s.key}`,
                        className: "dot-link",
                        "aria-label": s.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `dot ${activeSection === s.key ? "active" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    }, s.key, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            SECTIONS.map((s, idx)=>{
                const ref = pRef;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: s.key,
                    "data-key": s.key,
                    className: "hub3-section",
                    ref: (el)=>{
                        sectionRefs.current[idx] = el;
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "hub3-video",
                            src: s.video,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            preload: "metadata"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hub3-overlay"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `hub3-content hub3-content--${s.align || "center"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hub3-subtitle",
                                    children: s.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    ref: ref,
                                    "data-bubble": true,
                                    className: "bubble bubble--transparent",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    onClick: ()=>popAndGo(ref.current, s.route),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label",
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hub3-meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: `Section 1/1`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "↓ Scroll"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.key, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_s(App, "6j9f64G7M0o6X86JoZvjI4kVNLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_jsx_0cfv5.z._.js.map