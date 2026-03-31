module.exports = [
"[project]/src/app/pardeep/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PardeepInterstellar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/useAR.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// 🔹 UI-only AR HUD (no camera/scripts inside)
// (Use the updated ARGestureControl I gave you)
const ARHUD = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/components/ARGestureControl.jsx [app-ssr] (ecmascript, async loader)"));
function PardeepInterstellar() {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const railRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ✅ only ONE video (top-right HUD)
    const miniVidTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // ✅ Global AR data from backend WS
    const { pinch, swipe, confidence } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [arEnabled, setArEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                key: "summary",
                title: "SUMMARY",
                subtitle: "Full Stack • AI • Automation",
                body: [
                    "CSE undergraduate building production-ready full-stack apps with AI agents and automation (Django/DRF, React, WebSockets).",
                    "Shipped end-to-end prototypes—API integrations, real-time features, and deployed ML-assisted systems across healthcare and Web3 use cases."
                ]
            },
            {
                key: "education",
                title: "EDUCATION",
                subtitle: "Chandigarh University • IGNOU",
                body: [
                    "Chandigarh University — B.E. CSE (Sep 2022 – Jun 2026) • CGPA ~7.7/10",
                    "IGNOU — B.Sc (General) distance • CGPA ~6.8/10",
                    "Certifications: AI Agents (Microsoft), DL for CV (NVIDIA), Data Viz (Coursera)"
                ]
            },
            {
                key: "projects",
                title: "PROJECTS",
                subtitle: "MedGenie • Gen3 AI DeFi Agent",
                body: [
                    "MedGenie 3.0 — One Health platform (React + Django REST + JWT) with climate-aware outbreak forecasting, record uploads, Groq-powered multilingual chat.",
                    "Telemedicine flows using signaling + WebRTC consults; live dashboards.",
                    "Gen3 AI DeFi Agent — secure wallet onboarding, pre-tx simulation, real-time WebSocket dashboards, automations."
                ]
            },
            {
                key: "research",
                title: "RESEARCH",
                subtitle: "IEEE tracks & papers",
                body: [
                    "ML Approaches in DNA Analysis — IEEE ICWITE 2025",
                    "LLMs in Multilingual/Low-resource contexts — IEEE PUNECON 2025",
                    "Wavelet-based Terrain Generation — IEEE DELCON 2025",
                    "Epigenetic Modifications (MC1R/SLC24A5/FOXL2) — IEEE DELCON 2025"
                ]
            },
            {
                key: "skills",
                title: "SKILLS",
                subtitle: "Stack that ships",
                body: [
                    "Python, JavaScript, Django/DRF, React, WebSockets",
                    "DB: SQLite/Postgres/MySQL • Vector DB concepts",
                    "DevOps: Docker, AWS basics, CI ideas",
                    "Soft: ownership, execution, problem scoping"
                ]
            }
        ], []);
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const go = (nextIdx)=>{
        setIdx((prev)=>(nextIdx + slides.length) % slides.length);
    };
    const goBy = (delta)=>{
        setIdx((prev)=>(prev + delta + slides.length) % slides.length);
    };
    const strongHand = confidence >= 0.55;
    // ---- GSAP slide enter + idle float
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const card = cardRef.current;
        if (!card) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(card);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
            opacity: 0,
            x: 130,
            y: 35,
            rotateY: -38,
            rotateZ: -12,
            transformOrigin: "0% 50%"
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            rotateZ: 0,
            duration: 0.7,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
            y: -10,
            duration: 2.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
        return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(card);
    }, [
        idx
    ]);
    // ---- Mouse wheel slide
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onWheel = (e)=>{
            if (Math.abs(e.deltaY) < 20) return;
            if (e.deltaY > 0) goBy(1);
            else goBy(-1);
        };
        window.addEventListener("wheel", onWheel, {
            passive: true
        });
        return ()=>window.removeEventListener("wheel", onWheel);
    }, []);
    // ---- Keyboard slide
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.key === "ArrowRight") goBy(1);
            if (e.key === "ArrowLeft") goBy(-1);
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, []);
    // ---- Swipe slide (mouse + touch)
    const swipeLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        down: false
    });
    const onPointerDown = (e)=>swipeLocal.current = {
            x: e.clientX,
            y: e.clientY,
            down: true
        };
    const onPointerUp = (e)=>{
        if (!swipeLocal.current.down) return;
        swipeLocal.current.down = false;
        const dx = e.clientX - swipeLocal.current.x;
        const dy = e.clientY - swipeLocal.current.y;
        if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) goBy(1);
        else goBy(-1);
    };
    const onTouchStart = (e)=>{
        const t = e.touches?.[0];
        if (!t) return;
        swipeLocal.current = {
            x: t.clientX,
            y: t.clientY,
            down: true
        };
    };
    const onTouchEnd = (e)=>{
        if (!swipeLocal.current.down) return;
        swipeLocal.current.down = false;
        const t = e.changedTouches?.[0];
        if (!t) return;
        const dx = t.clientX - swipeLocal.current.x;
        const dy = t.clientY - swipeLocal.current.y;
        if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) goBy(1);
        else goBy(-1);
    };
    // ✅ HUD Parallax Roam (left rail)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const rail = railRef.current;
        if (!rail) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rail, {
            transformPerspective: 900,
            transformOrigin: "50% 50%"
        });
        const onMove = (ev)=>{
            const r = rail.getBoundingClientRect();
            const mx = ev.clientX ?? (ev.touches?.[0]?.clientX || r.left + r.width / 2);
            const my = ev.clientY ?? (ev.touches?.[0]?.clientY || r.top + r.height / 2);
            const px = (mx - (r.left + r.width / 2)) / (r.width / 2);
            const py = (my - (r.top + r.height / 2)) / (r.height / 2);
            const cx = Math.max(-1, Math.min(1, px));
            const cy = Math.max(-1, Math.min(1, py));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rail, {
                rotateY: cx * 7,
                rotateX: -cy * 6,
                x: cx * 10,
                y: cy * 8,
                duration: 0.35,
                ease: "power3.out"
            });
        };
        const reset = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rail, {
                rotateX: 0,
                rotateY: 0,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        };
        const drift = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rail, {
            y: "-=6",
            duration: 2.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
        window.addEventListener("mousemove", onMove, {
            passive: true
        });
        window.addEventListener("touchmove", onMove, {
            passive: true
        });
        rail.addEventListener("mouseleave", reset);
        return ()=>{
            drift.kill();
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onMove);
            rail.removeEventListener("mouseleave", reset);
        };
    }, []);
    // ✅ play-once then pause; hover/tap replays (ONE video only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = miniVidTopRef.current;
        if (!v) return;
        let cancelled = false;
        const tryPlay = async ()=>{
            try {
                v.muted = true;
                v.playsInline = true;
                v.currentTime = 0;
                await v.play();
            } catch  {
            // autoplay might be blocked; user hover/tap will play later
            }
        };
        const onEnded = ()=>{
            if (cancelled) return;
            v.pause();
        };
        v.addEventListener("ended", onEnded);
        tryPlay();
        return ()=>{
            cancelled = true;
            v.removeEventListener("ended", onEnded);
        };
    }, []);
    const replayVideo = (ref)=>{
        const v = ref.current;
        if (!v) return;
        v.currentTime = 0;
        v.play().catch(()=>{});
    };
    // ✅ AR: Pinch rising-edge => Next slide
    const prevPinchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!arEnabled) {
            prevPinchRef.current = pinch;
            return;
        }
        if (!strongHand) {
            prevPinchRef.current = pinch;
            return;
        }
        const prev = prevPinchRef.current;
        const rising = !prev && pinch;
        if (rising) goBy(1);
        prevPinchRef.current = pinch;
    }, [
        pinch,
        arEnabled,
        strongHand
    ]);
    // ✅ AR: Swipe event => Next / Prev (cooldown)
    const lastSwipeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!arEnabled) return;
        if (!strongHand) return;
        if (!swipe) return;
        const now = Date.now();
        if (now - lastSwipeRef.current < 420) return;
        lastSwipeRef.current = now;
        if (swipe === "left" || swipe === "down") goBy(1);
        if (swipe === "right" || swipe === "up") goBy(-1);
    }, [
        swipe,
        arEnabled,
        strongHand
    ]);
    const s = slides[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "is-page",
        onPointerDown: onPointerDown,
        onPointerUp: onPointerUp,
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `ar-toggle ${arEnabled ? "on" : ""}`,
                onClick: ()=>setArEnabled((v)=>!v),
                "aria-label": "Toggle AR gestures",
                children: arEnabled ? "🖐 AR ON" : "📴 AR OFF"
            }, void 0, false, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            arEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ARHUD, {
                    active: true
                }, void 0, false, {
                    fileName: "[project]/src/app/pardeep/page.jsx",
                    lineNumber: 317,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wormhole-bg",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "is-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "is-title",
                        children: "PARDEEP • PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pardeep/page.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mini-vid-wrap",
                        onMouseEnter: ()=>replayVideo(miniVidTopRef),
                        onTouchStart: ()=>replayVideo(miniVidTopRef),
                        title: "Hover / tap to replay",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: miniVidTopRef,
                                className: "mini-vid",
                                src: "/vidpardeep.mp4",
                                muted: true,
                                playsInline: true,
                                preload: "auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mini-vid-glass"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pardeep/page.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "is-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: railRef,
                        className: "rail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "homeBtn",
                                onClick: ()=>router.push("/"),
                                children: "← Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "avatar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/pardeep.jpg",
                                                alt: "Pardeep",
                                                onError: (e)=>{
                                                    e.currentTarget.style.display = "none";
                                                    e.currentTarget.parentElement?.classList.add("fallback");
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "initials",
                                                children: "PS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pmeta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pname",
                                                children: "Pardeep Singh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prole",
                                                children: "Full Stack • AI • Automation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "thumbs",
                                children: slides.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `thumb ${i === idx ? "active" : ""}`,
                                        onClick: ()=>go(i),
                                        "aria-label": x.title,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumbTop",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "thumbDot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "thumbTitle",
                                                        children: x.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumbSub",
                                                children: x.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pardeep/page.jsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, x.key, true, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "railHint",
                                children: [
                                    "Tip: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "pinch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 390,
                                        columnNumber: 18
                                    }, this),
                                    " to go ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 390,
                                        columnNumber: 37
                                    }, this),
                                    " • swipe in air for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Prev/Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pardeep/page.jsx",
                                        lineNumber: 390,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pardeep/page.jsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pardeep/page.jsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "is-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: cardRef,
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chip",
                                            children: [
                                                "SECTION ",
                                                idx + 1,
                                                "/",
                                                slides.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "subtitle",
                                            children: s.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pardeep/page.jsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body",
                                    children: s.body.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bullet",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "b-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pardeep/page.jsx",
                                                    lineNumber: 408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pardeep/page.jsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pardeep/page.jsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn",
                                            onClick: ()=>goBy(-1),
                                            children: "← Prev"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn primary",
                                            onClick: ()=>goBy(1),
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pardeep/page.jsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pardeep/page.jsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pardeep/page.jsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pardeep/page.jsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: css
            }, void 0, false, {
                fileName: "[project]/src/app/pardeep/page.jsx",
                lineNumber: 426,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pardeep/page.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
const css = `
.is-page{
  min-height:100vh;
  color:#fff;
  position:relative;
  overflow:hidden;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
  background:#06040b;
  user-select:none;
}

/* ✅ AR Toggle */
.ar-toggle{
  position:fixed;
  left:50%;
  bottom:18px;
  transform:translateX(-50%);
  z-index:999999;
  padding:10px 14px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color:#fff;
  font-weight:1000;
  letter-spacing:.06em;
  cursor:pointer;
  backdrop-filter: blur(10px);
}
.ar-toggle.on{
  background: linear-gradient(135deg, rgba(124,58,237,.75), rgba(59,130,246,.55));
  border-color: rgba(167,139,250,.35);
  box-shadow: 0 18px 70px rgba(124,58,237,.22);
}

/* Background GIF */
.wormhole-bg{
  position:fixed;
  inset:0;
  z-index:0;
  background-image: url("/wormhole.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.06);
  filter: saturate(1.18) contrast(1.12) brightness(0.55);
}
.wormhole-bg::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(1200px 900px at 35% 35%, rgba(124,58,237,0.20), transparent 55%),
    radial-gradient(900px 700px at 70% 55%, rgba(59,130,246,0.14), transparent 60%),
    linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.82));
}

/* Top bar */
.is-top{
  position:relative;
  z-index:2;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  padding:18px 26px;
}
.is-title{font-weight:900; letter-spacing:.12em; font-size:14px; opacity:.92;}

/* ✅ SINGLE top-right HUD video */
.mini-vid-wrap{
  position: relative;
  width: 320px;
  height: 140px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.10);
  box-shadow: 0 22px 110px rgba(0,0,0,.55);
  cursor: pointer;
  opacity: 1;
  backdrop-filter: blur(10px);
}

.mini-vid{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08);
  filter: blur(2.2px) saturate(1.25) contrast(1.15) brightness(.95);
}

.mini-vid-glass{
  position:absolute;
  inset:0;
  background:
    radial-gradient(220px 120px at 30% 30%, rgba(124,58,237,.18), transparent 55%),
    radial-gradient(220px 120px at 70% 70%, rgba(59,130,246,.12), transparent 60%),
    linear-gradient(to bottom, rgba(0,0,0,.10), rgba(0,0,0,.25));
  pointer-events:none;
}

.mini-vid-wrap:hover{ opacity: 1; }

@media (max-width: 700px){
  .mini-vid-wrap{ display:none; }
}

/* Layout */
.is-layout{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns: 320px 1fr;
  gap: 22px;
  padding: 8px 26px 32px;
  align-items:start;
}
@media (max-width: 980px){
  .is-layout{grid-template-columns:1fr; gap:14px;}
  .rail{order:2}
}

/* Left roaming rail */
.rail{
  border-radius:22px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(10,6,18,.45);
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 90px rgba(0,0,0,.45);
  padding: 14px;
  max-height: calc(100vh - 120px);
  overflow:auto;
  will-change: transform;
}
.homeBtn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color:#fff;
  font-weight:900;
  cursor:pointer;
}
.homeBtn:hover{ background: rgba(255,255,255,.10); }

.profile{
  display:flex;
  gap:12px;
  align-items:center;
  margin-top:14px;
  padding:12px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.05);
}
.avatar{
  width:54px;
  height:54px;
  border-radius:999px;
  overflow:hidden;
  position:relative;
  border:1px solid rgba(255,255,255,.18);
  box-shadow: 0 0 22px rgba(124,58,237,.30);
  background: radial-gradient(circle at 30% 30%, rgba(124,58,237,.55), rgba(59,130,246,.28));
}
.avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
.avatar .initials{
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  font-weight:1000;
  letter-spacing:.08em;
  opacity:.92;
}
.avatar:not(.fallback) .initials{ display:none; }

.pname{ font-weight:1000; letter-spacing:.02em; }
.prole{ opacity:.72; font-size:12px; margin-top:2px; }

.thumbs{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top:12px;
}

.thumb{
  text-align:left;
  padding:12px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06);
  cursor:pointer;
  color: rgba(255,255,255,.92);
}
.thumb:hover{
  background: rgba(255,255,255,.10);
}
.thumb.active{
  border-color: rgba(167,139,250,.55);
  background: rgba(124,58,237,.18);
  box-shadow:
    0 0 0 1px rgba(124,58,237,.14),
    0 14px 60px rgba(124,58,237,.14);
  color: #fff;
}
.thumbTop{
  display:flex;
  align-items:center;
  gap:10px;
}
.thumbDot{
  width:10px;
  height:10px;
  border-radius:999px;
  background: rgba(167,139,250,.95);
  box-shadow: 0 0 14px rgba(124,58,237,.65);
  flex:0 0 10px;
}
.thumbTitle{
  font-weight:1000;
  letter-spacing:.08em;
  font-size:12px;
  color: rgba(255,255,255,.96);
}
.thumbSub{
  font-size:12px;
  margin-top:6px;
  line-height:1.35;
  color: rgba(255,255,255,.78);
  opacity: 1;
}
.thumb.active .thumbSub{
  color: rgba(255,255,255,.86);
}

.railHint{
  margin-top:12px;
  padding:10px 12px;
  border-radius:16px;
  border:1px dashed rgba(255,255,255,.18);
  background: rgba(255,255,255,.04);
  opacity:.78;
  font-size:12px;
}

/* Right card */
.is-right{display:flex; justify-content:center;}
.card{
  width:min(900px, 100%);
  border-radius:24px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(10,6,18,.55);
  box-shadow: 0 30px 120px rgba(0,0,0,.55);
  backdrop-filter: blur(12px);
  padding: 22px;
}
.card-head h1{
  margin:10px 0 2px;
  font-size:44px;
  letter-spacing:.02em;
  line-height:1.02;
}
.subtitle{opacity:.75; margin:0; font-size:14px;}
.chip{
  display:inline-flex; padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  font-weight:1000; font-size:12px; letter-spacing:.08em;
}
.card-body{margin-top:18px; display:flex; flex-direction:column; gap:12px;}
.bullet{display:flex; gap:10px; align-items:flex-start;}
.b-dot{
  width:10px; height:10px; border-radius:999px; margin-top:6px;
  background: rgba(167,139,250,.9);
  box-shadow: 0 0 14px rgba(124,58,237,.6);
  flex:0 0 10px;
}
.bullet p{margin:0; opacity:.92; line-height:1.55; font-size:15px;}

.card-actions{
  display:flex; justify-content:space-between; gap:12px;
  margin-top:18px;
}
.btn{
  padding:10px 14px; border-radius:14px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color:#fff; cursor:pointer; font-weight:1000;
}
.btn.primary{
  background: linear-gradient(135deg, rgba(124,58,237,.85), rgba(59,130,246,.65));
  border-color: rgba(167,139,250,.35);
  box-shadow: 0 16px 60px rgba(124,58,237,.25);
}
`;
}),
];

//# sourceMappingURL=src_app_pardeep_page_jsx_0crnzp1._.js.map