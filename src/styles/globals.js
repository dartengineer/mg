export const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --black:#080A0C;
  --dark:#0E1014;
  --card:#141619;
  --border:rgba(255,255,255,0.07);
  --white:#FFFFFF;
  --off:#A0A6B1;
  --accent:#FF4D00;
  --display:'Bebas Neue',sans-serif;
  --body:'DM Sans',sans-serif;
  --mono:'DM Mono',monospace;
  --ease:cubic-bezier(0.25,0.46,0.45,0.94);
  --spring:cubic-bezier(0.34,1.56,0.64,1);
}
html{scroll-behavior:smooth}
body{font-family:var(--body);background:var(--black);color:var(--white);overflow-x:hidden;cursor:none}

/* Custom cursor */
.cursor{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;mix-blend-mode:difference}
.cursor-dot{width:8px;height:8px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);transition:transform 0.1s}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(255,255,255,0.6);border-radius:50%;transform:translate(-50%,-50%);transition:all 0.15s var(--ease)}
.cursor-ring.hovered{transform:translate(-50%,-50%) scale(1.8);border-color:#fff;opacity:0.5}

/* Scrollbar */
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--black)}
::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px}

input,textarea,select{
  font-family:var(--body);font-size:14px;
  background:transparent;color:var(--white);
  border:none;border-bottom:1px solid rgba(255,255,255,0.15);
  padding:14px 0;width:100%;outline:none;
  transition:border-color 0.3s;
}
input:focus,textarea:focus,select:focus{border-bottom-color:var(--accent)}
select option{background:var(--dark);color:var(--white)}
input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.3)}
textarea{resize:vertical;min-height:100px}

@keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideLeft{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
@keyframes scaleIn{from{opacity:0;transform:scale(0.88)}to{opacity:1;transform:scale(1)}}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes borderGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,0)}50%{box-shadow:0 0 0 4px rgba(255,77,0,0.2)}}

.tag{
  display:inline-block;
  font-family:var(--mono);font-size:10px;letter-spacing:0.08em;
  color:rgba(255,255,255,0.5);
  border:1px solid rgba(255,255,255,0.1);
  padding:4px 10px;
}

.section-num{
  font-family:var(--mono);font-size:11px;color:var(--accent);
  letter-spacing:0.2em;margin-bottom:8px;display:block;
}

.btn{
  display:inline-flex;align-items:center;gap:10px;
  font-family:var(--body);font-size:13px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;
  padding:14px 32px;cursor:pointer;text-decoration:none;
  transition:all 0.3s var(--ease);border:none;position:relative;overflow:hidden;
}
.btn::after{
  content:'';position:absolute;inset:0;background:rgba(255,255,255,0.06);
  transform:translateX(-100%);transition:transform 0.3s var(--ease);
}
.btn:hover::after{transform:translateX(0)}
.btn-primary{background:var(--accent);color:#fff}
.btn-primary:hover{background:#e04000;transform:translateY(-2px)}
.btn-ghost{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,0.2)}
.btn-ghost:hover{border-color:var(--white);background:rgba(255,255,255,0.05);transform:translateY(-2px)}
.btn-dark{background:var(--card);color:var(--white);border:1px solid var(--border)}
.btn-dark:hover{border-color:var(--accent);color:var(--accent)}

.noise{
  position:fixed;top:0;left:0;width:100%;height:100%;
  pointer-events:none;z-index:998;opacity:0.025;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:120px 120px;
}
`;
