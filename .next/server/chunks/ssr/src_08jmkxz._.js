module.exports=[44201,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(26304),e=a.i(50944),f=a.i(17779);let g=c.default.lazy(()=>a.A(73204)),h=`
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
`;a.s(["default",0,function(){let a=(0,c.useRef)(null),i=(0,c.useRef)(null),j=(0,c.useRef)(null),k=(0,e.useRouter)(),{pinch:l,swipe:m,confidence:n}=(0,f.default)(),[o,p]=(0,c.useState)(!0),q=(0,c.useMemo)(()=>[{key:"summary",title:"SUMMARY",subtitle:"Full Stack • AI • Automation",body:["CSE undergraduate building production-ready full-stack apps with AI agents and automation (Django/DRF, React, WebSockets).","Shipped end-to-end prototypes—API integrations, real-time features, and deployed ML-assisted systems across healthcare and Web3 use cases."]},{key:"education",title:"EDUCATION",subtitle:"Chandigarh University • IGNOU",body:["Chandigarh University — B.E. CSE (Sep 2022 – Jun 2026) • CGPA ~7.7/10","IGNOU — B.Sc (General) distance • CGPA ~6.8/10","Certifications: AI Agents (Microsoft), DL for CV (NVIDIA), Data Viz (Coursera)"]},{key:"projects",title:"PROJECTS",subtitle:"MedGenie • Gen3 AI DeFi Agent",body:["MedGenie 3.0 — One Health platform (React + Django REST + JWT) with climate-aware outbreak forecasting, record uploads, Groq-powered multilingual chat.","Telemedicine flows using signaling + WebRTC consults; live dashboards.","Gen3 AI DeFi Agent — secure wallet onboarding, pre-tx simulation, real-time WebSocket dashboards, automations."]},{key:"research",title:"RESEARCH",subtitle:"IEEE tracks & papers",body:["ML Approaches in DNA Analysis — IEEE ICWITE 2025","LLMs in Multilingual/Low-resource contexts — IEEE PUNECON 2025","Wavelet-based Terrain Generation — IEEE DELCON 2025","Epigenetic Modifications (MC1R/SLC24A5/FOXL2) — IEEE DELCON 2025"]},{key:"skills",title:"SKILLS",subtitle:"Stack that ships",body:["Python, JavaScript, Django/DRF, React, WebSockets","DB: SQLite/Postgres/MySQL • Vector DB concepts","DevOps: Docker, AWS basics, CI ideas","Soft: ownership, execution, problem scoping"]}],[]),[r,s]=(0,c.useState)(0),t=a=>{s(b=>(b+a+q.length)%q.length)},u=n>=.55;(0,c.useEffect)(()=>{let b=a.current;if(b)return d.default.killTweensOf(b),d.default.fromTo(b,{opacity:0,x:130,y:35,rotateY:-38,rotateZ:-12,transformOrigin:"0% 50%"},{opacity:1,x:0,y:0,rotateY:0,rotateZ:0,duration:.7,ease:"power3.out"}),d.default.to(b,{y:-10,duration:2.8,ease:"sine.inOut",yoyo:!0,repeat:-1}),()=>d.default.killTweensOf(b)},[r]),(0,c.useEffect)(()=>{let a=a=>{20>Math.abs(a.deltaY)||(a.deltaY>0?t(1):t(-1))};return window.addEventListener("wheel",a,{passive:!0}),()=>window.removeEventListener("wheel",a)},[]),(0,c.useEffect)(()=>{let a=a=>{"ArrowRight"===a.key&&t(1),"ArrowLeft"===a.key&&t(-1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]);let v=(0,c.useRef)({x:0,y:0,down:!1});(0,c.useEffect)(()=>{let a=i.current;if(!a)return;d.default.set(a,{transformPerspective:900,transformOrigin:"50% 50%"});let b=b=>{let c=a.getBoundingClientRect(),e=b.clientX??(b.touches?.[0]?.clientX||c.left+c.width/2),f=b.clientY??(b.touches?.[0]?.clientY||c.top+c.height/2),g=(e-(c.left+c.width/2))/(c.width/2),h=(f-(c.top+c.height/2))/(c.height/2),i=Math.max(-1,Math.min(1,g)),j=Math.max(-1,Math.min(1,h));d.default.to(a,{rotateY:7*i,rotateX:-(6*j),x:10*i,y:8*j,duration:.35,ease:"power3.out"})},c=()=>{d.default.to(a,{rotateX:0,rotateY:0,x:0,y:0,duration:.6,ease:"power3.out"})},e=d.default.to(a,{y:"-=6",duration:2.8,ease:"sine.inOut",yoyo:!0,repeat:-1});return window.addEventListener("mousemove",b,{passive:!0}),window.addEventListener("touchmove",b,{passive:!0}),a.addEventListener("mouseleave",c),()=>{e.kill(),window.removeEventListener("mousemove",b),window.removeEventListener("touchmove",b),a.removeEventListener("mouseleave",c)}},[]),(0,c.useEffect)(()=>{let a=j.current;if(!a)return;let b=!1,c=async()=>{try{a.muted=!0,a.playsInline=!0,a.currentTime=0,await a.play()}catch{}},d=()=>{b||a.pause()};return a.addEventListener("ended",d),c(),()=>{b=!0,a.removeEventListener("ended",d)}},[]);let w=a=>{let b=a.current;b&&(b.currentTime=0,b.play().catch(()=>{}))},x=(0,c.useRef)(!1);(0,c.useEffect)(()=>{if(!o||!u){x.current=l;return}!x.current&&l&&t(1),x.current=l},[l,o,u]);let y=(0,c.useRef)(0);(0,c.useEffect)(()=>{if(!o||!u||!m)return;let a=Date.now();a-y.current<420||(y.current=a,("left"===m||"down"===m)&&t(1),("right"===m||"up"===m)&&t(-1))},[m,o,u]);let z=q[r];return(0,b.jsxs)("div",{className:"is-page",onPointerDown:a=>v.current={x:a.clientX,y:a.clientY,down:!0},onPointerUp:a=>{if(!v.current.down)return;v.current.down=!1;let b=a.clientX-v.current.x,c=a.clientY-v.current.y;60>Math.abs(b)||Math.abs(b)<Math.abs(c)||(b<0?t(1):t(-1))},onTouchStart:a=>{let b=a.touches?.[0];b&&(v.current={x:b.clientX,y:b.clientY,down:!0})},onTouchEnd:a=>{if(!v.current.down)return;v.current.down=!1;let b=a.changedTouches?.[0];if(!b)return;let c=b.clientX-v.current.x,d=b.clientY-v.current.y;60>Math.abs(c)||Math.abs(c)<Math.abs(d)||(c<0?t(1):t(-1))},children:[(0,b.jsx)("button",{className:`ar-toggle ${o?"on":""}`,onClick:()=>p(a=>!a),"aria-label":"Toggle AR gestures",children:o?"🖐 AR ON":"📴 AR OFF"}),o&&(0,b.jsx)(c.Suspense,{fallback:null,children:(0,b.jsx)(g,{active:!0})}),(0,b.jsx)("div",{className:"wormhole-bg","aria-hidden":"true"}),(0,b.jsxs)("header",{className:"is-top",children:[(0,b.jsx)("div",{className:"is-title",children:"PARDEEP • PORTFOLIO"}),(0,b.jsxs)("div",{className:"mini-vid-wrap",onMouseEnter:()=>w(j),onTouchStart:()=>w(j),title:"Hover / tap to replay",children:[(0,b.jsx)("video",{ref:j,className:"mini-vid",src:"/vidpardeep.mp4",muted:!0,playsInline:!0,preload:"auto"}),(0,b.jsx)("div",{className:"mini-vid-glass"})]})]}),(0,b.jsxs)("div",{className:"is-layout",children:[(0,b.jsxs)("aside",{ref:i,className:"rail",children:[(0,b.jsx)("button",{className:"homeBtn",onClick:()=>k.push("/"),children:"← Home"}),(0,b.jsxs)("div",{className:"profile",children:[(0,b.jsxs)("div",{className:"avatar",children:[(0,b.jsx)("img",{src:"/pardeep.jpg",alt:"Pardeep",onError:a=>{a.currentTarget.style.display="none",a.currentTarget.parentElement?.classList.add("fallback")}}),(0,b.jsx)("span",{className:"initials",children:"PS"})]}),(0,b.jsxs)("div",{className:"pmeta",children:[(0,b.jsx)("div",{className:"pname",children:"Pardeep Singh"}),(0,b.jsx)("div",{className:"prole",children:"Full Stack • AI • Automation"})]})]}),(0,b.jsx)("div",{className:"thumbs",children:q.map((a,c)=>(0,b.jsxs)("button",{className:`thumb ${c===r?"active":""}`,onClick:()=>{s(a=>(c+q.length)%q.length)},"aria-label":a.title,children:[(0,b.jsxs)("div",{className:"thumbTop",children:[(0,b.jsx)("span",{className:"thumbDot"}),(0,b.jsx)("span",{className:"thumbTitle",children:a.title})]}),(0,b.jsx)("div",{className:"thumbSub",children:a.subtitle})]},a.key))}),(0,b.jsxs)("div",{className:"railHint",children:["Tip: ",(0,b.jsx)("b",{children:"pinch"})," to go ",(0,b.jsx)("b",{children:"Next"})," • swipe in air for ",(0,b.jsx)("b",{children:"Prev/Next"})]})]}),(0,b.jsx)("main",{className:"is-right",children:(0,b.jsxs)("div",{ref:a,className:"card",children:[(0,b.jsxs)("div",{className:"card-head",children:[(0,b.jsxs)("div",{className:"chip",children:["SECTION ",r+1,"/",q.length]}),(0,b.jsx)("h1",{children:z.title}),(0,b.jsx)("p",{className:"subtitle",children:z.subtitle})]}),(0,b.jsx)("div",{className:"card-body",children:z.body.map((a,c)=>(0,b.jsxs)("div",{className:"bullet",children:[(0,b.jsx)("span",{className:"b-dot"}),(0,b.jsx)("p",{children:a})]},c))}),(0,b.jsxs)("div",{className:"card-actions",children:[(0,b.jsx)("button",{className:"btn",onClick:()=>t(-1),children:"← Prev"}),(0,b.jsx)("button",{className:"btn primary",onClick:()=>t(1),children:"Next →"})]})]})})]}),(0,b.jsx)("style",{children:h})]})}])},73204,a=>{a.v(b=>Promise.all(["server/chunks/ssr/src_components_ARGestureControl_jsx_0~urpwr._.js"].map(b=>a.l(b))).then(()=>b(66770)))}];

//# sourceMappingURL=src_08jmkxz._.js.map