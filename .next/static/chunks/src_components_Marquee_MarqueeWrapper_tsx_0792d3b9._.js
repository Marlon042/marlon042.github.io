(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Marquee/MarqueeWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const marqueeAnimation = (element, elementWidth, windowWidth)=>{
    element.animate([
        {
            transform: 'translateX(0)'
        },
        {
            transform: "translateX(".concat(windowWidth - elementWidth, "px)")
        }
    ], {
        duration: 20000,
        easing: 'linear',
        direction: 'alternate',
        iterations: Infinity
    });
};
const MarqueeWrapper = (param)=>{
    let { children, className = '' } = param;
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeWrapper.useEffect": ()=>{
            setWindowWidth(window.innerWidth);
            if (elementRef.current) {
                const elementWidth = elementRef.current.getBoundingClientRect().width;
                marqueeAnimation(elementRef.current, elementWidth, windowWidth);
            }
            const handleResize = {
                "MarqueeWrapper.useEffect.handleResize": ()=>setWindowWidth(window.innerWidth)
            }["MarqueeWrapper.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "MarqueeWrapper.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["MarqueeWrapper.useEffect"];
        }
    }["MarqueeWrapper.useEffect"], [
        windowWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-x-hidden ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inter w-max whitespace-nowrap p-5 lg:p-7",
            ref: elementRef,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Marquee/MarqueeWrapper.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Marquee/MarqueeWrapper.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MarqueeWrapper, "4+FSIAjyTHGEVSToSs1ugB1yA4E=");
_c = MarqueeWrapper;
const __TURBOPACK__default__export__ = MarqueeWrapper;
var _c;
__turbopack_context__.k.register(_c, "MarqueeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Marquee/MarqueeWrapper.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Marquee/MarqueeWrapper.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_components_Marquee_MarqueeWrapper_tsx_0792d3b9._.js.map