module.exports = [
"[project]/src/components/ARGestureControl.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ARGestureControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ar/useAR.js [app-ssr] (ecmascript)");
"use client";
;
;
const clamp01 = (n)=>Math.max(0, Math.min(1, n));
function ARGestureControl({ active = true, getTargets, onSelectNearest, onSwipeNext, onSwipePrev }) {
    const ar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ar$2f$useAR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const latestRef = ar?.latestRef;
    const pinch = !!ar?.pinch;
    const swipe = ar?.events?.swipe ?? null;
    const prevPinchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastSwipeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* ---------------- NEAREST TARGET (MIRROR SAFE) ---------------- */ const getNearestChoice = ()=>{
        const pkt = latestRef?.current;
        if (!pkt) return null;
        const x = clamp01(pkt.x ?? 0.5);
        const y = clamp01(pkt.y ?? 0.5);
        // 🔥 mirror X because camera + cursor are mirrored
        const px = (1 - x) * window.innerWidth;
        const py = y * window.innerHeight;
        const { pardeepEl } = getTargets?.() || {};
        if (!pardeepEl) return null;
        return "pardeep";
    };
    /* ---------------- PINCH = CLICK ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) {
            prevPinchRef.current = pinch;
            return;
        }
        const rising = !prevPinchRef.current && pinch;
        if (rising) {
            const chosen = getNearestChoice();
            if (chosen) {
                onSelectNearest?.(chosen);
            }
        }
        prevPinchRef.current = pinch;
    }, [
        pinch,
        active,
        onSelectNearest
    ]);
    /* ---------------- SWIPE ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active || !swipe) return;
        const now = Date.now();
        if (now - lastSwipeRef.current < 350) return;
        lastSwipeRef.current = now;
        if (swipe === "left" || swipe === "down") onSwipeNext?.();
        if (swipe === "right" || swipe === "up") onSwipePrev?.();
    }, [
        swipe,
        active,
        onSwipeNext,
        onSwipePrev
    ]);
    return null; // 🔥 no HUD, no clutter
}
}),
];

//# sourceMappingURL=src_components_ARGestureControl_jsx_0~urpwr._.js.map