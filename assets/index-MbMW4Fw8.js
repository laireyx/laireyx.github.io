import{u as l,r as h,j as e,S as n,L as a,T as s,P as i,V as p,q as d}from"./index-U7S2QUZE.js";async function u(r){return await(await fetch(`https://laireyx.net/gh-api/repos/${r}`)).json()}function o({repo:r}){const{data:t}=l({queryFn:()=>u(r),queryKey:["gh-api","repo",r]}),c=h.useMemo(()=>new Intl.DateTimeFormat(["ko-KR"],{dateStyle:"short",timeStyle:"short",hourCycle:"h24"}).format(new Date(t.updated_at)),[t]);return e.jsxs(n,{children:[e.jsx(a,{to:t.html_url,children:e.jsx(s,{size:"h4",children:t.name})}),e.jsxs(i,{children:["Last update: ",c,e.jsx("br",{}),t.description]})]})}function y(){const{data:r}=l({queryFn:d,queryKey:["gh-api","profile"]});return e.jsxs(p,{children:[e.jsx(s,{children:"Projects"}),e.jsxs(n,{children:[e.jsx(a,{to:"https://play.google.com/store/apps/details?id=net.miririt.maldivesplayer",children:e.jsx(s,{size:"h4",children:"MaldiVes player"})}),e.jsx(i,{children:"Small yet powerful RMMV emulator on Android."})]}),e.jsx(o,{repo:"laireyx/react-worker-hooks"}),e.jsx(o,{repo:"laireyx/mofdb"}),e.jsx(i,{children:e.jsxs(s,{size:"h6",children:["See all my ",r.public_repos," projects at: ",e.jsx(a,{to:r.html_url,children:"@laireyx"})]})})]})}export{y as default};