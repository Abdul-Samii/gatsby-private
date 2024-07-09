/*! For license information please see component---src-pages-index-jsx-621f1c6c568b2156ad64.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_web3_product_hunt=self.webpackChunkgatsby_web3_product_hunt||[]).push([[279],{2704:function(e,t,a){a.d(t,{A:function(){return m}});var r=a(4506),l=a(6540);var n=e=>{let{filterItem:t,selected:a,onClick:r}=e;return l.createElement("p",{onClick:r,className:"border-[1px] cursor-pointer w-fit h-fit text-xs px-3 py-1 rounded-full whitespace-nowrap "+(a?"bg-blue-500 text-white":"bg-gray-200 text-gray-700")},t)};function o({title:e,titleId:t,...a},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))}var s=l.forwardRef(o);function c({title:e,titleId:t,...a},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}var i=l.forwardRef(c),d=a(9695);var m=()=>{const{setSearchFilteredProjects:e,searchProjects:t,tags:a,coreCategory:o}=(0,l.useContext)(d.o),{0:c,1:m}=(0,l.useState)([]),{0:u,1:h}=(0,l.useState)([]),{0:p,1:f}=(0,l.useState)(""),v=(0,l.useRef)(null),{0:x,1:b}=(0,l.useState)(!1),{0:w,1:g}=(0,l.useState)(!0),{0:E,1:y}=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=()=>{if(v.current){const e=v.current;b(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.clientWidth)}};return v.current&&(v.current.addEventListener("scroll",e),e()),()=>{v.current&&v.current.removeEventListener("scroll",e)}}),[]);const k=e=>{if(E||!v.current)return;const t=v.current,a=.2*t.offsetWidth,r=t.scrollLeft,l=("left"===e?Math.max(0,r-a):Math.min(t.scrollWidth-t.clientWidth,r+a))-r;let n;const o=e=>{n||(n=e);const a=e-n,s=Math.min(a/500,1);t.scrollLeft=r+l*s,s<1?requestAnimationFrame(o):y(!1)};y(!0),requestAnimationFrame(o)};return(0,l.useEffect)((()=>{(()=>{let a=t;var r,l;u.length>0&&(a=null===(r=a)||void 0===r?void 0:r.filter((e=>u.some((t=>e.coreCategories.some((e=>e._id===t)))))));c.length>0&&(a=null===(l=a)||void 0===l?void 0:l.filter((e=>e.tags.some((e=>c.includes(e._id))))));e(a)})()}),[c,u,t,e]),l.createElement("div",{className:"flex mt-4"},l.createElement("div",{className:"hidden md:inline relative w-[70%] ml-32"},x&&l.createElement("button",{className:"absolute rounded-full h-10 -left-1 -top-1 bottom-0 px-3 py-1 bg-gray-200",onClick:()=>k("left")},l.createElement(s,{className:"h-4 opacity-70"})),l.createElement("div",{className:"flex p-1 space-x-2 w-full overflow-x-hidden",ref:v},null==o?void 0:o.map(((e,t)=>l.createElement(n,{key:t,filterItem:e.name,selected:u.includes(e._id),onClick:()=>{return t=e._id,void(u.includes(t)?h(u.filter((e=>e!==t))):h([].concat((0,r.A)(u),[t])));var t}})))),w&&l.createElement("button",{className:"absolute rounded-full h-10 -right-1 -top-1 bottom-0 px-3 py-1 bg-gray-200",onClick:()=>k("right")},l.createElement(i,{className:"h-4 opacity-70"}))),l.createElement("select",{value:p,onChange:e=>{return t=e.target.value,void(c.includes(t)?(m(c.filter((e=>e!==t))),f("")):(m([].concat((0,r.A)(c),[t])),f(t)));var t},className:"border-[1px] px-3 ml-4 rounded-md outline-none"},l.createElement("option",{value:""},"Select a tag"),null==a?void 0:a.map((e=>l.createElement("option",{value:e._id,key:e._id},e.name)))))}},4939:function(e,t,a){var r=a(6540),l=a(1735),n=a(8027),o=a(4194),s=a(2446),c=a(9695),i=a(1161),d=a(9341);t.A=e=>{let{className:t,project:a}=e;const{setSearchValue:m}=(0,r.useContext)(c.o),{handleUpvoteProject:u}=(0,r.useContext)(i.v),{0:h,1:p}=(0,r.useState)(a.upvotes);var f=new URL(window.location.href);return r.createElement("div",{className:`bg-white border relative border-gray-200 h-28 md:h-36 w-full p-2 rounded-md shadow-sm ${t||"md:w-48"}`},r.createElement("div",{className:"flex items-center space-x-4"},r.createElement("div",{className:"flex items-center space-x-4",onClick:()=>{return e=a._id,m(""),void(0,o.navigate)(`/profile-details?projectId=${e}`);var e}},r.createElement("img",{src:a.logo,alt:"Icon",className:"w-12 h-12 rounded-full border-2 border-white"}),r.createElement("div",{className:"flex flex-col max-w-52 md:max-w-[85%]"},r.createElement("h2",{className:"font-bold text-lg text-nowrap"},a.name),r.createElement("p",{className:"text-sm text-gray-500 w-[85%] truncate md:overflow-visible md:text-wrap"},r.createElement(d.A,{markdown:a.tldr})))),r.createElement("div",{onClick:()=>{return e=a._id,u(e),void p(h+1);var e},className:"ml-auto flex items-center space-x-1 bg-slate-50 absolute right-4 top-[30%] md:top-[40%] border-[1px] px-4 py-2 rounded-md"},r.createElement(l.lvq,{className:"w-4 h-4 text-gray-500"}),r.createElement("p",{className:"text-sm text-gray-500"},h))),r.createElement("div",{className:"rounded-md flex justify-between"},r.createElement("div",{className:"flex space-x-2 ml-16 mt-4"},r.createElement("p",{className:"px-2 rounded-sm border-[1px] bg-secondarylight text-xs"},a.tags[0].name),a.tags[1]&&r.createElement("p",{className:"px-2 rounded-sm border-[1px] bg-secondarylight text-xs"},a.tags[1].name),r.createElement("p",{className:"text-xs ml-2"},a.tags.length>1&&`+ ${a.tags.length-1} more`),r.createElement(s.k,{data:{text:null==a?void 0:a.tldr,url:`${f.protocol}//${f.host}/profile-details?projectId=${a._id}`,title:null==a?void 0:a.name},disableNative:!1},r.createElement("button",{className:"text-gray-500"},r.createElement(n.A$,null))))))}},2964:function(e,t,a){a.r(t),a.d(t,{Head:function(){return V},default:function(){return B}});var r=a(6540),l=a.t(r,2),n=a(9695),o=a(2704),s=a(4939),c=a(1161),i=a(5588);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}const m=r.createContext(null);const u=r.createContext(null);const h=r.createContext(null);const p=r.createContext({outlet:null,matches:[],isDataRoute:!1});function f(){return null!=r.useContext(h)}function v(){return f()||(0,i.Oi)(!1),r.useContext(h).location}function x(e){r.useContext(u).static||r.useLayoutEffect(e)}function b(){let{isDataRoute:e}=r.useContext(p);return e?function(){let{router:e}=E(w.UseNavigateStable),t=y(g.UseNavigateStable),a=r.useRef(!1);x((()=>{a.current=!0}));let l=r.useCallback((function(r,l){void 0===l&&(l={}),a.current&&("number"==typeof r?e.navigate(r):e.navigate(r,d({fromRouteId:t},l)))}),[e,t]);return l}():function(){f()||(0,i.Oi)(!1);let e=r.useContext(m),{basename:t,future:a,navigator:l}=r.useContext(u),{matches:n}=r.useContext(p),{pathname:o}=v(),s=JSON.stringify((0,i.yD)(n,a.v7_relativeSplatPath)),c=r.useRef(!1);return x((()=>{c.current=!0})),r.useCallback((function(a,r){if(void 0===r&&(r={}),!c.current)return;if("number"==typeof a)return void l.go(a);let n=(0,i.Gh)(a,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==t&&(n.pathname="/"===n.pathname?t:(0,i.HS)([t,n.pathname])),(r.replace?l.replace:l.push)(n,r.state,r)}),[t,l,s,o,e])}()}r.Component;var w=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(w||{}),g=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(g||{});function E(e){let t=r.useContext(m);return t||(0,i.Oi)(!1),t}function y(e){let t=function(e){let t=r.useContext(p);return t||(0,i.Oi)(!1),t}(),a=t.matches[t.matches.length-1];return a.route.id||(0,i.Oi)(!1),a.route.id}l.startTransition;new Promise((()=>{}));r.Component;var k=()=>{const{sponsoredListings:e}=(0,r.useContext)(c.v),t=b(),{setSearchValue:a}=(0,r.useContext)(n.o);return React.createElement("div",{className:"w-[25%] h-fit mt-12 p-6 rounded-md mr-4 shadow-sm border-[1px] hidden md:block"},React.createElement("h2",{className:"font-bold text-xl"},"Sponsored Listings"),null==e?void 0:e.map((e=>React.createElement("a",{href:`${e.links.websiteLink}`,target:"_blank",key:`listing-${e._id}`,className:"flex space-x-3 mt-8 border-b-[1px] pb-6 "},React.createElement("img",{src:e.logo,className:"h-12 rounded-full"}),React.createElement("div",{className:"w-[-webkit-fill-available]"},React.createElement("h2",{className:"font-bold text-lg"},e.name),React.createElement("p",{className:""},e.tldr))))),React.createElement("div",{className:"flex space-x-2 justify-center mt-8"},React.createElement("button",{onClick:()=>{return a(e="Layer 1"),void t(`/search-results?search-query=${e}`);var e},className:"w-32 border-[1px] border-primarydark font-semibold rounded-md p-2"},"View all"),React.createElement("button",{onClick:()=>t("/add-project"),className:"bg-primarydark text-white font-semibold w-32 rounded-md p-2"},"List a project")))};var N=()=>{const{searchFilteredProjects:e}=(0,r.useContext)(n.o),{0:t,1:a}=(0,r.useState)(!0);return(0,r.useEffect)((()=>{void 0!==e&&a(!1)}),[e]),r.createElement("div",{className:"mt-12 z-50"},r.createElement(o.A,null),r.createElement("div",{className:"flex justify-between mt-4"},r.createElement("div",{className:"md:w-[50%] w-full md:mx-auto px-2 space-y-2"},t?r.createElement("div",{className:"flex justify-center items-center"},r.createElement("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"})):r.createElement(r.Fragment,null,0===(null==e?void 0:e.length)?r.createElement("p",null,"No Projects Found. Please use the form to upload"):null==e?void 0:e.map(((e,t)=>r.createElement("div",null,r.createElement(s.A,{key:t,className:"w-1/2",project:e})))))),r.createElement(k,null)))};function C({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"}))}var j=r.forwardRef(C),R=a.p+"static/ethereum-icon-7efcceea06b17a0b419318745f3a6b8b.png",L=a.p+"static/bitcoin-icon-e024e669e888c37157941f46c179cad6.png",S=a.p+"static/l-icon-0089b542b06bbebd002204885b9a7807.png",A=a.p+"static/sherbank-icon-5ac2054d9a6368d3a1f14eebc11a04f2.png",$=a(4194);var M=()=>{const{setSearchValue:e}=(0,r.useContext)(n.o);return r.createElement("div",{className:"h-[40vh] back bg-cover bg-center md:h-[60vh] bg-secondarylight relative"},r.createElement("div",{className:"absolute inset-0 flex flex-col justify-center items-center px-4"},r.createElement("div",{className:"flex bg-white shadow-sm py-1 px-4 rounded-md mb-4"},r.createElement("a",{href:"https://www.discord.gg/dMUA4WRqVF",target:"_blank",className:"text-xs md:text-sm"},"Join our Discord Community!"),r.createElement(j,{className:"h-4 ml-2 mt-1"})),r.createElement("h1",{className:"font-bold text-2xl md:text-5xl text-center text-white w-full md:w-[40vw] animate-slide-up"},"Discover the best on the blockchain"),r.createElement("p",{className:"text-center w-[30vw] text-white mt-4 hidden md:inline animate-fade-in"},"Curated directory of top decentralized applications, blockchain infrastructure and crypto projects."),r.createElement("div",{className:"space-x-3  mt-4 md:mt-12 relative flex md:space-x-4"},r.createElement("button",{onClick:()=>{return e(t="Layer 1"),void(0,$.navigate)(`/search-results?search-query=${t}`);var t},className:"w-36 bg-white shadow-md hover:border-[1px] border-primarydark py-2 md:py-2 rounded-md relative"},"Explore"),r.createElement("button",{onClick:()=>(0,$.navigate)("/add-project"),className:"w-36 bg-primarydark shadow-md hover:bg-secondarydark text-white py-2 md:py-2 rounded-md relative"},"List a Project")),r.createElement("div",{className:"absolute left-4 md:left-[15%] top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 md:space-y-16 hidden md:flex"},r.createElement("img",{src:R,alt:"Left Icon 1",className:"h-8 md:h-12"}),r.createElement("img",{src:S,alt:"Left Icon 2",className:"h-8 md:h-12"})),r.createElement("div",{className:"absolute right-4 md:right-[15%] top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 md:space-y-16 hidden md:flex"},r.createElement("img",{src:A,alt:"Right Icon 1",className:"h-8 md:h-12"}),r.createElement("img",{src:L,alt:"Right Icon 2",className:"h-8 md:h-12"}))))};var z=()=>r.createElement("div",{className:"bg-primarydark relative w-[85vw] md:w-[75vw] mx-auto h-[50vh] md:h-96 flex flex-col justify-center items-center rounded-2xl text-white my-16"},r.createElement("h2",{className:"text-lg font-bold mr-2 text-white absolute top-12"},r.createElement("span",{className:"font-thin"},"Best"),"Crypt0"),r.createElement("div",{className:"absolute justify-center flex flex-col items-center mt-[0rem]"},r.createElement("h1",{className:"font-extrabold text-xl  top-24 md:text-4xl"},"Get exclusive early access"),r.createElement("p",{className:"w-[80vw] text-sm md:text-lg md:w-[600px] tracking-wider mt-4 text-center"},"Join our community of crypto lovers and have your say on the latest and greatest products and projects on the blockchain."),r.createElement("a",{href:"https://www.discord.gg/dMUA4WRqVF",target:"_blank",className:"w-72 md:w-96 bg-white shadow-md hover:border-[1px] text-center border-primarydark py-2 md:py-2 rounded-md absolute text-black mt-44"},"JOIN DISCORD")));a(4101);function U({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))}var I=r.forwardRef(U);var _=e=>{let{title:t}=e;return r.createElement("div",{className:"relative"},r.createElement("div",{className:"flex justify-between md:mx-56 border-b-[1px] pb-4 mt-12 mx-8"},r.createElement("div",{className:"flex space-x-2"},r.createElement("h2",{className:"my-auto font-extrabold text-xl"},t),r.createElement(I,{className:"h-5 my-auto text-gray-500"})),r.createElement($.Link,{to:"/explore",className:"hidden md:inline py-2 px-4 border-[1px] rounded-md font-semibold"},"Explore all")))};var O=()=>{var e;const{projects:t}=(0,r.useContext)(c.v),{0:a,1:l}=(0,r.useState)(!0);return(0,r.useEffect)((()=>{void 0!==t&&l(!1)}),[t]),r.createElement(r.Fragment,null,r.createElement(_,{title:"Recently Added"}),r.createElement("div",{className:"mt-12 z-50"},r.createElement("div",{className:"flex justify-between mt-4"},r.createElement("div",{className:"md:w-[50%] w-full md:mx-auto px-2 space-y-2"},a?r.createElement("div",{className:"flex justify-center items-center"},r.createElement("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"})):r.createElement(r.Fragment,null,0===(null==t?void 0:t.length)?r.createElement("p",null,"No Projects Found. Please use the form to upload"):null==t||null===(e=t.slice(0,19))||void 0===e?void 0:e.map(((e,t)=>r.createElement("div",{key:t},r.createElement(s.A,{className:"w-1/2",project:e})))))),r.createElement(k,null))))},F=a(326);const V=()=>r.createElement(Seo,{title:"BestCrypt0"});var B=()=>{const{searchValue:e}=(0,r.useContext)(n.o);return r.createElement(F.A,{className:"h-[100vh] w-full"},e?r.createElement(N,null):r.createElement(r.Fragment,null,r.createElement(M,null),r.createElement(O,null),r.createElement("div",{className:"h-28"}),r.createElement(z,null)))}},9341:function(e,t,a){var r=a(6540),l=a(1552),n=a.n(l);t.A=e=>{let{markdown:t}=e;const a=(new(n().Converter)).makeHtml(t);return r.createElement("div",{dangerouslySetInnerHTML:{__html:a}})}},2446:function(e,t,a){a.d(t,{k:function(){return f}});var r=a(6540),l=a(4848),n=a(961);function o({children:e,onClose:t}){return(0,l.jsx)("div",{onClick:e=>{e.target===e.currentTarget&&t(e)},className:"rws-backdrop web-share-fade",children:e})}!function(e,{insertAt:t}={}){if(!e||typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(".web-share-fade{animation:rwsFade .5s;animation-fill-mode:both}@keyframes rwsFade{0%{opacity:0}to{opacity:1}}.web-share-fade-in-up{animation:rwsfadeInUp .5s;animation-fill-mode:both}@keyframes rwsfadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.rws-icons{padding:1.25rem;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1.25rem}.rws-icon{width:100%;height:auto;cursor:pointer;border:0;background:#1a78f6;padding:.75rem;border-radius:.5rem;font-size:0}.rws-container{max-width:24rem;width:90%;background-color:#fff;border-radius:.5rem;border-bottom-left-radius:0;border-bottom-right-radius:0}.rws-backdrop{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.4);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:1400}.rws-header{padding:1rem 1.25rem;font-size:1.25rem;font-weight:600;padding-bottom:0}.rws-close{background:#edf2f7;cursor:pointer;padding:.75rem;display:block;width:100%;border:0;font-size:1rem}\n");var s=e=>window.open(e,"_blank","noopener"),c={facebook:{path:(0,l.jsx)("path",{d:"M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"}),color:"#0076FB",e:e=>s(`https://www.facebook.com/sharer/sharer.php?u=${e}`)},twitter:{path:(0,l.jsx)("path",{d:"M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z"}),color:"#1DA1F2",e:(e,t)=>s(`https://twitter.com/intent/tweet?text=${t}&url=${e}`)},whatsapp:{path:(0,l.jsx)("path",{d:"M17.5 14.4l-2-1c-.3 0-.5-.1-.7.2l-1 1.1c-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.1-.3 0-.5.2-.6l.4-.6c.2-.1.2-.3.3-.5v-.5L9 7c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5 0-.8.4-.2.3-1 1-1 2.5s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5l1.7.6a4 4 0 001.9.2c.5-.1 1.7-.8 2-1.5.2-.6.2-1.2.1-1.4l-.5-.3M12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.3a9.9 9.9 0 01-1.5-5.3 9.9 9.9 0 0116.8-7 9.8 9.8 0 013 7 9.9 9.9 0 01-10 9.9m8.4-18.3A11.8 11.8 0 0012.1 0 12 12 0 001.8 17.8L0 24l6.4-1.6a11.9 11.9 0 005.6 1.4 12 12 0 0012-11.9 11.8 11.8 0 00-3.5-8.4z"}),color:"#25D366",e:(e,t)=>s(`https://api.whatsapp.com/send?text=${t} ${e}`)},reddit:{path:(0,l.jsx)("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 01-2.5.06l-2.6-.55-.8 3.75c1.83.07 3.48.63 4.68 1.49.3-.31.73-.5 1.2-.5.97 0 1.76.8 1.76 1.76 0 .72-.43 1.33-1.01 1.61a3.11 3.11 0 01.04.52c0 2.7-3.13 4.87-7 4.87-3.88 0-7-2.17-7-4.87 0-.18 0-.36.04-.53A1.75 1.75 0 014.03 12a1.75 1.75 0 012.96-1.26 8.52 8.52 0 014.74-1.5l.89-4.17a.34.34 0 01.14-.2.35.35 0 01.24-.04l2.9.62a1.21 1.21 0 011.11-.7zM9.25 12a1.25 1.25 0 101.25 1.25c0-.69-.56-1.25-1.25-1.25zm5.5 0a1.25 1.25 0 000 2.5 1.25 1.25 0 000-2.5zm-5.47 3.99a.33.33 0 00-.23.1.33.33 0 000 .46c.84.84 2.49.91 2.96.91.48 0 2.1-.06 2.96-.91a.36.36 0 00.03-.47.33.33 0 00-.46 0c-.55.54-1.68.73-2.51.73-.83 0-1.98-.2-2.51-.73a.33.33 0 00-.24-.1z"}),color:"#FF4500",e:(e,t)=>s(`https://www.reddit.com/submit?url=${e}&title=${t}`)},telegram:{path:(0,l.jsx)("path",{d:"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"}),color:"#0088CC",e:(e,t)=>s(`https://telegram.me/share/msg?url=${e}&text=${t}`)},linkedin:{path:(0,l.jsx)("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"}),color:"#0073b1",e:(e,t,a)=>s(`https://www.linkedin.com/shareArticle?mini=true&url=${e}&title=${a}&summary=${t}`)},mail:{path:(0,l.jsx)("path",{d:"M20 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),color:"#E53E3E",e:(e,t)=>s(`mailto:?body=${e}&subject=${t}`)},copy:{path:(0,l.jsx)("path",{d:"M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"}),color:"#718096",e:e=>navigator.clipboard.writeText(decodeURIComponent(e))},vk:{path:(0,l.jsx)("path",{d:"M22.7 6.24c.16-.52 0-.9-.73-.9H19.5c-.62 0-.91.32-1.06.69 0 0-1.25 3.04-3.02 5.02-.57.57-.83.75-1.15.75-.15 0-.39-.18-.39-.7V6.24c0-.63-.17-.9-.69-.9H9.34c-.39 0-.62.29-.62.56 0 .59.88.72.97 2.4v3.6c0 .8-.14.95-.45.95-.84 0-2.86-3.06-4.06-6.56-.24-.68-.48-.96-1.1-.96H1.61c-.7 0-.85.33-.85.7 0 .65.84 3.88 3.88 8.14 2.03 2.92 4.9 4.5 7.5 4.5 1.55 0 1.75-.35 1.75-.96 0-2.78-.15-3.04.64-3.04.36 0 .99.18 2.44 1.58 1.67 1.67 1.95 2.42 2.88 2.42h2.45c.7 0 1.06-.35.85-1.05-.46-1.45-3.62-4.44-3.76-4.64-.36-.47-.26-.68 0-1.1 0 0 3-4.21 3.3-5.64Z"}),color:"#07f",e:(e,t,a)=>s(`http://vk.com/share.php?url=${e}&title=${a}&comment=${t}`)},okru:{path:(0,l.jsx)("path",{d:"M13.6 16.4c1-.3 2-.7 2.8-1.2a1.5 1.5 0 0 0-1.5-2.5 6.3 6.3 0 0 1-6.7 0 1.5 1.5 0 1 0-1.5 2.5c.9.5 1.8 1 2.9 1.2L6.8 19a1.4 1.4 0 1 0 2 2l2.8-2.6 2.7 2.7a1.5 1.5 0 1 0 2-2l-2.7-2.8Zm-2-11.1a2 2 0 1 1 0 4.1 2 2 0 0 1 0-4.1Zm0 7a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"}),color:"#e27e35",e:e=>s(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${e}`)}},i=({children:e})=>{let t=document.createElement("div");return r.useEffect((()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)})),[t]),(0,n.createPortal)(e,t)};function d({onClose:e,closeText:t}){return(0,l.jsx)("button",{className:"rws-close","aria-label":"Close",type:"button",onClick:e,children:t||"Close"})}function m({title:e}){return(0,l.jsx)("header",{className:"rws-header",children:e})}function u({name:e,data:t,onClose:a,onClick:r}){let{path:n,viewBox:o="0 0 24 24",color:s,e:i}=c[e];return(0,l.jsx)("button",{onClick:()=>{r&&r(e),i(encodeURIComponent(t.url),t.text,t.title),a()},"aria-label":e,className:"rws-icon",style:{background:s},children:(0,l.jsx)("svg",{fill:"white",viewBox:o,children:n})})}var h=({onClose:e,sites:t,data:a,closeText:r,onClick:n})=>(0,l.jsxs)("section",{role:"dialog","aria-modal":"true",className:"rws-container web-share-fade-in-up",children:[(0,l.jsx)(m,{title:a.title}),(0,l.jsx)("div",{className:"rws-icons",children:t.map((t=>(0,l.jsx)(u,{name:t,data:a,onClose:e,onClick:n},t)))}),(0,l.jsx)(d,{onClose:e,closeText:r})]});var p=Object.keys(c).slice(0,8),f=(0,r.memo)((e=>{var t;let{onOpen:a,onClose:n,isOpen:s}=function(){let[e,t]=(0,r.useState)(!1);return{isOpen:e,onOpen:(0,r.useCallback)((()=>t(!0)),[]),onClose:(0,r.useCallback)((()=>t(!1)),[]),onToggle:(0,r.useCallback)((()=>t((e=>!e))),[])}}(),c=(0,r.useMemo)((()=>({...e.data,title:e.data.title||"share",text:e.data.text||"",url:e.data.url||typeof window<"u"&&window.location.href||""})),[e.data]),d=(0,r.useCallback)((async()=>{if(window.navigator.share&&!e.disableNative)try{await window.navigator.share(c),e.onClick()}catch(t){console.warn(t)}else a()}),[c]);return(0,l.jsxs)(l.Fragment,{children:[(0,r.cloneElement)(e.children,{...null==(t=e.children)?void 0:t.props,onClick:d}),s&&(0,l.jsx)(i,{children:(0,l.jsx)(o,{onClose:n,children:(0,l.jsx)(h,{onClose:n,sites:e.sites||p,data:c,closeText:e.closeText,onClick:e.onClick})})})]})}))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-621f1c6c568b2156ad64.js.map