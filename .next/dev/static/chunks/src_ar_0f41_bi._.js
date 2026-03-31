(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ar/ARProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARContext",
    ()=>ARContext,
    "default",
    ()=>ARProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ARContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ARProvider({ children, defaultEnabled = true }) {
    _s();
    // master AR toggle
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!defaultEnabled);
    // idle | requesting | tracking | denied | disabled
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultEnabled ? "idle" : "disabled");
    // latest hand packet (authoritative, no rerenders)
    const latestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5,
        pinch: false,
        confidence: 0,
        ts: 0
    });
    // reactive UI state
    const [pinch, setPinch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confidence, setConfidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // gesture events (one–shot)
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // camera stream (optional preview usage)
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasStream, setHasStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stopStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARProvider.useCallback[stopStream]": ()=>{
            try {
                const s = streamRef.current;
                if (s) s.getTracks().forEach({
                    "ARProvider.useCallback[stopStream]": (t)=>t.stop()
                }["ARProvider.useCallback[stopStream]"]);
            } catch  {}
            streamRef.current = null;
            setHasStream(false);
        }
    }["ARProvider.useCallback[stopStream]"], []);
    const setStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARProvider.useCallback[setStream]": (stream)=>{
            streamRef.current = stream || null;
            setHasStream(!!stream);
        }
    }["ARProvider.useCallback[setStream]"], []);
    const setAR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARProvider.useCallback[setAR]": (on)=>{
            const v = !!on;
            setEnabled(v);
            if (!v) {
                stopStream();
                latestRef.current = {
                    x: 0.5,
                    y: 0.5,
                    pinch: false,
                    confidence: 0,
                    ts: 0
                };
                setPinch(false);
                setConfidence(0);
                setEvents({});
                setStatus("disabled");
            } else {
                setStatus("idle");
            }
        }
    }["ARProvider.useCallback[setAR]"], [
        stopStream
    ]);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ARProvider.useMemo[api]": ()=>({
                // state
                enabled,
                status,
                pinch,
                confidence,
                events,
                // refs
                latestRef,
                streamRef,
                hasStream,
                // setters (used by useAR.js)
                setEnabled: setAR,
                setStatus,
                setPinch,
                setConfidence,
                setEvents,
                setStream,
                stopStream
            })
    }["ARProvider.useMemo[api]"], [
        enabled,
        status,
        pinch,
        confidence,
        events,
        hasStream,
        setAR,
        setStatus,
        setStream,
        stopStream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ARContext.Provider, {
        value: api,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/ar/ARProvider.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(ARProvider, "aFrzjOoEpPR7e4Dy22tgDt99UyU=");
_c = ARProvider;
var _c;
__turbopack_context__.k.register(_c, "ARProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ar/ARCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ARCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$ARProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/ARProvider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ARCursor() {
    _s();
    const ar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$ARProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARContext"]);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCursor.useEffect": ()=>{
            let raf = 0;
            const loop = {
                "ARCursor.useEffect.loop": ()=>{
                    const dot = dotRef.current;
                    const ring = ringRef.current;
                    const pkt = ar?.latestRef?.current;
                    const enabled = ar?.enabled !== false;
                    const running = ar?.status === "tracking" || ar?.status === "running";
                    // hard hide conditions
                    if (document.hidden || !dot || !ring || !enabled || !running || !pkt) {
                        if (dot) dot.style.opacity = "0";
                        if (ring) ring.style.opacity = "0";
                        raf = requestAnimationFrame(loop);
                        return;
                    }
                    const x = typeof pkt.x === "number" ? pkt.x : 0.5;
                    const y = typeof pkt.y === "number" ? pkt.y : 0.5;
                    const conf = typeof pkt.confidence === "number" ? pkt.confidence : typeof ar?.confidence === "number" ? ar.confidence : 0;
                    if (conf < 0.35) {
                        dot.style.opacity = "0";
                        ring.style.opacity = "0";
                        raf = requestAnimationFrame(loop);
                        return;
                    }
                    /* ---------- MIRRORED SCREEN COORDS ---------- */ let px = x * window.innerWidth;
                    let py = y * window.innerHeight;
                    px = Math.max(0, Math.min(window.innerWidth - 1, px));
                    py = Math.max(0, Math.min(window.innerHeight - 1, py));
                    const mx = window.innerWidth - px;
                    /* ---------- GESTURE STATE ---------- */ const pinch = !!pkt.pinch || !!pkt.pinching || !!ar?.pinch || !!ar?.pinching;
                    const zooming = !!ar?.events?.zoom;
                    /* ---------- TRANSFORMS ---------- */ const base = `translate(${mx}px, ${py}px) translate(-50%, -50%)`;
                    let scale = 1;
                    if (pinch) scale = 1.35;
                    if (zooming) scale = 1.6;
                    ring.style.transform = `${base} scale(${scale})`;
                    dot.style.transform = base;
                    ring.style.opacity = "1";
                    dot.style.opacity = "1";
                    raf = requestAnimationFrame(loop);
                }
            }["ARCursor.useEffect.loop"];
            raf = requestAnimationFrame(loop);
            return ({
                "ARCursor.useEffect": ()=>cancelAnimationFrame(raf)
            })["ARCursor.useEffect"];
        }
    }["ARCursor.useEffect"], [
        ar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                style: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    zIndex: 999998,
                    pointerEvents: "none",
                    border: "1px solid rgba(124,58,237,.6)",
                    boxShadow: "0 0 28px rgba(124,58,237,.45), inset 0 0 12px rgba(59,130,246,.25)",
                    background: "rgba(255,255,255,.03)",
                    transition: "transform 90ms ease, opacity 160ms ease",
                    opacity: 0
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/ar/ARCursor.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                style: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    zIndex: 999999,
                    pointerEvents: "none",
                    boxShadow: "0 0 30px rgba(96,165,250,.95)",
                    background: "linear-gradient(135deg, rgba(124,58,237,.95), rgba(59,130,246,.95))",
                    transition: "opacity 160ms ease",
                    opacity: 0
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/ar/ARCursor.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ARCursor, "2BgvPg1SEV3FtecYPTM6132GUX4=");
_c = ARCursor;
var _c;
__turbopack_context__.k.register(_c, "ARCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ar/useAR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$ARProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/ARProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const clamp01 = (n)=>Math.max(0, Math.min(1, n));
const dist = (a, b)=>Math.hypot(a.x - b.x, a.y - b.y);
// Pinch hysteresis (stable)
const PINCH_ON = 0.065;
const PINCH_OFF = 0.085;
/* 🔥 GLOBAL SINGLETON GUARD */ let AR_STARTED = false;
function useAR() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$ARProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARContext"]);
    if (!ctx) throw new Error("useAR must be used inside <ARProvider>.");
    const { enabled, latestRef, setPinch, setConfidence, setEvents, setStatus, setStream } = ctx;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const landmarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSwipeTs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastZoomDist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAR.useEffect": ()=>{
            if (!enabled) return;
            if (AR_STARTED) return;
            AR_STARTED = true;
            let stopped = false;
            setStatus("requesting");
            /* ---------------- VIDEO ELEMENT ---------------- */ const video = document.createElement("video");
            video.playsInline = true;
            video.muted = true;
            video.autoplay = true;
            video.style.display = "none";
            document.body.appendChild(video);
            videoRef.current = video;
            async function init() {
                /* ---------------- CAMERA SAFETY CHECK ---------------- */ const mediaDevices = ("TURBOPACK compile-time value", "object") !== "undefined" && window.navigator && window.navigator.mediaDevices || null;
                if (!mediaDevices?.getUserMedia) {
                    console.error("❌ Camera API not available. Use HTTPS or localhost.");
                    setStatus("denied");
                    return;
                }
                /* ---------------- TASKS VISION ---------------- */ const fileset = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
                landmarkerRef.current = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandLandmarker"].createFromOptions(fileset, {
                    baseOptions: {
                        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 2
                });
                /* ---------------- CAMERA STREAM ---------------- */ const stream = await mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user"
                    },
                    audio: false
                });
                if (stopped) return;
                streamRef.current = stream;
                video.srcObject = stream;
                setStream(stream);
                await video.play();
                setStatus("tracking");
                /* ---------------- MAIN LOOP ---------------- */ const loop = {
                    "useAR.useEffect.init.loop": ()=>{
                        if (stopped) return;
                        const now = performance.now();
                        const res = landmarkerRef.current.detectForVideo(video, now);
                        const hands = res?.landmarks;
                        if (!hands || hands.length === 0) {
                            setConfidence(0);
                            setPinch(false);
                            rafRef.current = requestAnimationFrame(loop);
                            return;
                        }
                        /* ---------- PRIMARY HAND ---------- */ const lm = hands[0];
                        const index = lm[8];
                        const thumb = lm[4];
                        const x = clamp01(index.x);
                        const y = clamp01(index.y);
                        const ts = Date.now();
                        /* ---------- PINCH (STABLE) ---------- */ const prevPinch = latestRef.current?.pinch ?? false;
                        const d = dist(index, thumb);
                        let isPinch = prevPinch;
                        if (!prevPinch && d < PINCH_ON) isPinch = true;
                        if (prevPinch && d > PINCH_OFF) isPinch = false;
                        latestRef.current = {
                            x,
                            y,
                            ts,
                            pinch: isPinch,
                            confidence: 1,
                            rawLandmarks: lm
                        };
                        setConfidence(1);
                        setPinch(isPinch);
                        /* ---------- SWIPE ---------- */ if (lastPosRef.current) {
                            const dx = x - lastPosRef.current.x;
                            const dy = y - lastPosRef.current.y;
                            const dt = ts - lastPosRef.current.ts;
                            if (dt < 220 && Math.hypot(dx, dy) > 0.12) {
                                const nowT = Date.now();
                                if (nowT - lastSwipeTs.current > 450) {
                                    lastSwipeTs.current = nowT;
                                    setEvents({
                                        swipe: Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "right" : "left" : dy > 0 ? "down" : "up"
                                    });
                                }
                            }
                        }
                        lastPosRef.current = {
                            x,
                            y,
                            ts
                        };
                        /* ---------- TWO-HAND ZOOM ---------- */ if (hands.length === 2) {
                            const a = hands[0][8];
                            const b = hands[1][8];
                            const dz = dist(a, b);
                            if (lastZoomDist.current == null) {
                                lastZoomDist.current = dz;
                            } else {
                                const delta = dz - lastZoomDist.current;
                                if (Math.abs(delta) > 0.015) {
                                    setEvents({
                                        zoom: delta > 0 ? "out" : "in"
                                    });
                                    lastZoomDist.current = dz;
                                }
                            }
                        } else {
                            lastZoomDist.current = null;
                        }
                        rafRef.current = requestAnimationFrame(loop);
                    }
                }["useAR.useEffect.init.loop"];
                loop();
            }
            init().catch({
                "useAR.useEffect": (err)=>{
                    console.error("AR init failed:", err);
                    setStatus("denied");
                }
            }["useAR.useEffect"]);
            /* ---------------- CLEANUP ---------------- */ return ({
                "useAR.useEffect": ()=>{
                    stopped = true;
                    AR_STARTED = false;
                    cancelAnimationFrame(rafRef.current);
                    streamRef.current?.getTracks().forEach({
                        "useAR.useEffect": (t)=>t.stop()
                    }["useAR.useEffect"]);
                    landmarkerRef.current?.close();
                    video.remove();
                    setStream(null);
                    setStatus("idle");
                }
            })["useAR.useEffect"];
        }
    }["useAR.useEffect"], [
        enabled,
        latestRef,
        setPinch,
        setConfidence,
        setEvents,
        setStatus,
        setStream
    ]);
    return ctx;
}
_s(useAR, "cjaa4ZGqIt0V8cA0J9Q8At0E4sc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ar/ARPreviewBubble.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ARPreviewBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/useAR.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ARPreviewBubble({ size = 118, position = {
    right: 18,
    bottom: 18
} }) {
    _s();
    const ar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const vRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------------- bind camera stream ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARPreviewBubble.useEffect": ()=>{
            const v = vRef.current;
            if (!v) return;
            const stream = ar?.streamRef?.current;
            if (!ar?.enabled || !stream) {
                try {
                    v.pause();
                    v.srcObject = null;
                } catch  {}
                return;
            }
            try {
                v.srcObject = stream;
                v.muted = true;
                v.playsInline = true;
                v.play().catch({
                    "ARPreviewBubble.useEffect": ()=>{}
                }["ARPreviewBubble.useEffect"]);
            } catch  {}
        }
    }["ARPreviewBubble.useEffect"], [
        ar?.enabled,
        ar?.hasStream,
        ar?.streamRef
    ]);
    /* ---------------- status mapping ---------------- */ const isRunning = ar?.status === "tracking";
    const isRequesting = ar?.status === "requesting";
    const isDenied = ar?.status === "denied";
    const dotColor = !ar?.enabled ? "rgba(148,163,184,.9)" : isRunning ? "rgba(34,197,94,.9)" : isRequesting ? "rgba(251,191,36,.9)" : isDenied ? "rgba(239,68,68,.9)" : "rgba(148,163,184,.9)";
    const label = !ar?.enabled ? "AR OFF" : isRunning ? "AR ON" : isRequesting ? "Starting…" : isDenied ? "Denied" : "AR ON";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            ...position,
            zIndex: 999999,
            width: size,
            height: size,
            borderRadius: 999,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.16)",
            background: "rgba(10,6,18,.55)",
            boxShadow: "0 22px 80px rgba(0,0,0,.55)",
            backdropFilter: "blur(12px)"
        },
        children: [
            ar?.enabled && ar?.hasStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: vRef,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scaleX(-1)",
                    filter: "saturate(1.1) contrast(1.05) brightness(0.95)"
                }
            }, void 0, false, {
                fileName: "[project]/src/ar/ARPreviewBubble.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    color: "rgba(255,255,255,.75)",
                    fontFamily: "ui-monospace, Menlo, monospace",
                    fontSize: 11,
                    letterSpacing: ".12em",
                    textTransform: "uppercase"
                },
                children: "camera"
            }, void 0, false, {
                fileName: "[project]/src/ar/ARPreviewBubble.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(120px 80px at 30% 30%, rgba(124,58,237,.18), transparent 55%)," + "radial-gradient(120px 80px at 70% 70%, rgba(59,130,246,.12), transparent 60%)," + "linear-gradient(to bottom, rgba(0,0,0,.10), rgba(0,0,0,.35))",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/ar/ARPreviewBubble.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>ar.setEnabled?.(!ar.enabled),
                style: {
                    position: "absolute",
                    left: "50%",
                    bottom: 10,
                    transform: "translateX(-50%)",
                    padding: "8px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,.18)",
                    background: ar?.enabled ? "linear-gradient(135deg, rgba(124,58,237,.85), rgba(59,130,246,.65))" : "rgba(255,255,255,.08)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 11,
                    letterSpacing: ".10em",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                title: `status: ${ar?.status} • conf: ${Number(ar?.confidence || 0).toFixed(2)}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 8,
                            height: 8,
                            borderRadius: 999,
                            background: dotColor,
                            boxShadow: "0 0 16px rgba(255,255,255,.22)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/ar/ARPreviewBubble.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/ar/ARPreviewBubble.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ar/ARPreviewBubble.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(ARPreviewBubble, "uCGqmKnwEYdguW4RV/7Z5Y2p8D8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ARPreviewBubble;
var _c;
__turbopack_context__.k.register(_c, "ARPreviewBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ar_0f41_bi._.js.map