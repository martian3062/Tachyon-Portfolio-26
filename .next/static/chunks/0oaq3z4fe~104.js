(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91611,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(89970),i=e.i(18566),n=e.i(2043);let o=a.default.lazy(()=>e.A(80009)),s=`
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
`;e.s(["default",0,function(){let e=(0,a.useRef)(null),l=(0,a.useRef)(null),d=(0,a.useRef)(null),c=(0,i.useRouter)(),{pinch:p,swipe:u,confidence:g}=(0,n.default)(),[b,x]=(0,a.useState)(!0),h=(0,a.useMemo)(()=>[{key:"summary",title:"SUMMARY",subtitle:"Full Stack • AI • Automation",body:["CSE undergraduate building production-ready full-stack apps with AI agents and automation (Django/DRF, React, WebSockets).","Shipped end-to-end prototypes—API integrations, real-time features, and deployed ML-assisted systems across healthcare and Web3 use cases."]},{key:"education",title:"EDUCATION",subtitle:"Chandigarh University • IGNOU",body:["Chandigarh University — B.E. CSE (Sep 2022 – Jun 2026) • CGPA ~7.7/10","IGNOU — B.Sc (General) distance • CGPA ~6.8/10","Certifications: AI Agents (Microsoft), DL for CV (NVIDIA), Data Viz (Coursera)"]},{key:"projects",title:"PROJECTS",subtitle:"MedGenie • Gen3 AI DeFi Agent",body:["MedGenie 3.0 — One Health platform (React + Django REST + JWT) with climate-aware outbreak forecasting, record uploads, Groq-powered multilingual chat.","Telemedicine flows using signaling + WebRTC consults; live dashboards.","Gen3 AI DeFi Agent — secure wallet onboarding, pre-tx simulation, real-time WebSocket dashboards, automations."]},{key:"research",title:"RESEARCH",subtitle:"IEEE tracks & papers",body:["ML Approaches in DNA Analysis — IEEE ICWITE 2025","LLMs in Multilingual/Low-resource contexts — IEEE PUNECON 2025","Wavelet-based Terrain Generation — IEEE DELCON 2025","Epigenetic Modifications (MC1R/SLC24A5/FOXL2) — IEEE DELCON 2025"]},{key:"skills",title:"SKILLS",subtitle:"Stack that ships",body:["Python, JavaScript, Django/DRF, React, WebSockets","DB: SQLite/Postgres/MySQL • Vector DB concepts","DevOps: Docker, AWS basics, CI ideas","Soft: ownership, execution, problem scoping"]}],[]),[m,f]=(0,a.useState)(0),v=e=>{f(t=>(t+e+h.length)%h.length)},y=g>=.55;(0,a.useEffect)(()=>{let t=e.current;if(t)return r.default.killTweensOf(t),r.default.fromTo(t,{opacity:0,x:130,y:35,rotateY:-38,rotateZ:-12,transformOrigin:"0% 50%"},{opacity:1,x:0,y:0,rotateY:0,rotateZ:0,duration:.7,ease:"power3.out"}),r.default.to(t,{y:-10,duration:2.8,ease:"sine.inOut",yoyo:!0,repeat:-1}),()=>r.default.killTweensOf(t)},[m]),(0,a.useEffect)(()=>{let e=e=>{20>Math.abs(e.deltaY)||(e.deltaY>0?v(1):v(-1))};return window.addEventListener("wheel",e,{passive:!0}),()=>window.removeEventListener("wheel",e)},[]),(0,a.useEffect)(()=>{let e=e=>{"ArrowRight"===e.key&&v(1),"ArrowLeft"===e.key&&v(-1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let w=(0,a.useRef)({x:0,y:0,down:!1});(0,a.useEffect)(()=>{let e=l.current;if(!e)return;r.default.set(e,{transformPerspective:900,transformOrigin:"50% 50%"});let t=t=>{let a=e.getBoundingClientRect(),i=t.clientX??(t.touches?.[0]?.clientX||a.left+a.width/2),n=t.clientY??(t.touches?.[0]?.clientY||a.top+a.height/2),o=(i-(a.left+a.width/2))/(a.width/2),s=(n-(a.top+a.height/2))/(a.height/2),l=Math.max(-1,Math.min(1,o)),d=Math.max(-1,Math.min(1,s));r.default.to(e,{rotateY:7*l,rotateX:-(6*d),x:10*l,y:8*d,duration:.35,ease:"power3.out"})},a=()=>{r.default.to(e,{rotateX:0,rotateY:0,x:0,y:0,duration:.6,ease:"power3.out"})},i=r.default.to(e,{y:"-=6",duration:2.8,ease:"sine.inOut",yoyo:!0,repeat:-1});return window.addEventListener("mousemove",t,{passive:!0}),window.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("mouseleave",a),()=>{i.kill(),window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),e.removeEventListener("mouseleave",a)}},[]),(0,a.useEffect)(()=>{let e=d.current;if(!e)return;let t=!1,a=async()=>{try{e.muted=!0,e.playsInline=!0,e.currentTime=0,await e.play()}catch{}},r=()=>{t||e.pause()};return e.addEventListener("ended",r),a(),()=>{t=!0,e.removeEventListener("ended",r)}},[]);let k=e=>{let t=e.current;t&&(t.currentTime=0,t.play().catch(()=>{}))},j=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(!b||!y){j.current=p;return}!j.current&&p&&v(1),j.current=p},[p,b,y]);let E=(0,a.useRef)(0);(0,a.useEffect)(()=>{if(!b||!y||!u)return;let e=Date.now();e-E.current<420||(E.current=e,("left"===u||"down"===u)&&v(1),("right"===u||"up"===u)&&v(-1))},[u,b,y]);let N=h[m];return(0,t.jsxs)("div",{className:"is-page",onPointerDown:e=>w.current={x:e.clientX,y:e.clientY,down:!0},onPointerUp:e=>{if(!w.current.down)return;w.current.down=!1;let t=e.clientX-w.current.x,a=e.clientY-w.current.y;60>Math.abs(t)||Math.abs(t)<Math.abs(a)||(t<0?v(1):v(-1))},onTouchStart:e=>{let t=e.touches?.[0];t&&(w.current={x:t.clientX,y:t.clientY,down:!0})},onTouchEnd:e=>{if(!w.current.down)return;w.current.down=!1;let t=e.changedTouches?.[0];if(!t)return;let a=t.clientX-w.current.x,r=t.clientY-w.current.y;60>Math.abs(a)||Math.abs(a)<Math.abs(r)||(a<0?v(1):v(-1))},children:[(0,t.jsx)("button",{className:`ar-toggle ${b?"on":""}`,onClick:()=>x(e=>!e),"aria-label":"Toggle AR gestures",children:b?"🖐 AR ON":"📴 AR OFF"}),b&&(0,t.jsx)(a.Suspense,{fallback:null,children:(0,t.jsx)(o,{active:!0})}),(0,t.jsx)("div",{className:"wormhole-bg","aria-hidden":"true"}),(0,t.jsxs)("header",{className:"is-top",children:[(0,t.jsx)("div",{className:"is-title",children:"PARDEEP • PORTFOLIO"}),(0,t.jsxs)("div",{className:"mini-vid-wrap",onMouseEnter:()=>k(d),onTouchStart:()=>k(d),title:"Hover / tap to replay",children:[(0,t.jsx)("video",{ref:d,className:"mini-vid",src:"/vidpardeep.mp4",muted:!0,playsInline:!0,preload:"auto"}),(0,t.jsx)("div",{className:"mini-vid-glass"})]})]}),(0,t.jsxs)("div",{className:"is-layout",children:[(0,t.jsxs)("aside",{ref:l,className:"rail",children:[(0,t.jsx)("button",{className:"homeBtn",onClick:()=>c.push("/"),children:"← Home"}),(0,t.jsxs)("div",{className:"profile",children:[(0,t.jsxs)("div",{className:"avatar",children:[(0,t.jsx)("img",{src:"/pardeep.jpg",alt:"Pardeep",onError:e=>{e.currentTarget.style.display="none",e.currentTarget.parentElement?.classList.add("fallback")}}),(0,t.jsx)("span",{className:"initials",children:"PS"})]}),(0,t.jsxs)("div",{className:"pmeta",children:[(0,t.jsx)("div",{className:"pname",children:"Pardeep Singh"}),(0,t.jsx)("div",{className:"prole",children:"Full Stack • AI • Automation"})]})]}),(0,t.jsx)("div",{className:"thumbs",children:h.map((e,a)=>(0,t.jsxs)("button",{className:`thumb ${a===m?"active":""}`,onClick:()=>{f(e=>(a+h.length)%h.length)},"aria-label":e.title,children:[(0,t.jsxs)("div",{className:"thumbTop",children:[(0,t.jsx)("span",{className:"thumbDot"}),(0,t.jsx)("span",{className:"thumbTitle",children:e.title})]}),(0,t.jsx)("div",{className:"thumbSub",children:e.subtitle})]},e.key))}),(0,t.jsxs)("div",{className:"railHint",children:["Tip: ",(0,t.jsx)("b",{children:"pinch"})," to go ",(0,t.jsx)("b",{children:"Next"})," • swipe in air for ",(0,t.jsx)("b",{children:"Prev/Next"})]})]}),(0,t.jsx)("main",{className:"is-right",children:(0,t.jsxs)("div",{ref:e,className:"card",children:[(0,t.jsxs)("div",{className:"card-head",children:[(0,t.jsxs)("div",{className:"chip",children:["SECTION ",m+1,"/",h.length]}),(0,t.jsx)("h1",{children:N.title}),(0,t.jsx)("p",{className:"subtitle",children:N.subtitle})]}),(0,t.jsx)("div",{className:"card-body",children:N.body.map((e,a)=>(0,t.jsxs)("div",{className:"bullet",children:[(0,t.jsx)("span",{className:"b-dot"}),(0,t.jsx)("p",{children:e})]},a))}),(0,t.jsxs)("div",{className:"card-actions",children:[(0,t.jsx)("button",{className:"btn",onClick:()=>v(-1),children:"← Prev"}),(0,t.jsx)("button",{className:"btn primary",onClick:()=>v(1),children:"Next →"})]})]})})]}),(0,t.jsx)("style",{children:s})]})}])},80009,e=>{e.v(t=>Promise.all(["static/chunks/0oh~93.3s~e-k.js"].map(t=>e.l(t))).then(()=>t(61444)))}]);