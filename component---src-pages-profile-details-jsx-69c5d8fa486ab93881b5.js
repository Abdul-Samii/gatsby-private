(self.webpackChunkgatsby_web3_product_hunt=self.webpackChunkgatsby_web3_product_hunt||[]).push([[877],{399:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(6540),a=r(8027),l=r(2446),o=r(1735),c=r(9341);var s=e=>{var t;let{project:r}=e;return n.createElement(n.Fragment,null,n.createElement("p",{className:"mt-8 text-sm md:text-base lg:text-lg leading-relaxed"},n.createElement(c.A,{markdown:r.overview})),n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"},null==r||null===(t=r.screenshots)||void 0===t?void 0:t.map(((e,t)=>n.createElement("div",{key:`projectImg-${t}`,className:"relative overflow-hidden rounded-md"},n.createElement("img",{src:e,alt:"cover-image",className:"object-contain w-full h-full"}))))))},i=r(5066),d=r(1351),m=r(9197);const u={website:{component:n.createElement(i.kXp,{className:"text-gray-600 h-12 w-12"}),placeholder:"www.yoursite.com",label:"Website",link:""},github:{component:n.createElement(a.hL4,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"GitHub",link:"https://www.github.com/"},facebook:{component:n.createElement(a.ok6,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Facebook",link:"https://www.facebook.com/"},instagram:{component:n.createElement(a.ao$,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Instagram",link:"https://www.instagram.com/"},twitter:{component:n.createElement(m.TCj,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Twitter",link:"https://www.twitter.com/"},tiktok:{component:n.createElement(d.Wch,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"TikTok",link:"https://www.tiktok.com/"},telegram:{component:n.createElement(o.EPG,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Telegram",link:"https://www.telegram.com/"},youtube:{component:n.createElement(d.Jvf,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"YouTube",link:"https://www.youtube.com/channel/"},reddit:{component:n.createElement(a.Fhi,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Reddit",link:"https://www.reddit.com/user/"},discord:{component:n.createElement(a.O4U,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"Discord",link:"https://www.discord.com/invite/"},linkedin:{component:n.createElement(a.H1h,{className:"text-gray-600 h-12 w-12"}),placeholder:"username",label:"LinkedIn",link:"https://www.linkedin.com/company/"},appstore:{component:n.createElement(a.eMv,{className:"text-gray-600 h-12 w-12"}),placeholder:"www.apple.com/app-store",label:"App Store",link:"https://www.apple.com/app-store/"},playstore:{component:n.createElement(a.N8X,{className:"text-gray-600 h-12 w-12"}),placeholder:"play.google.com/store/apps/details?id=com.username",label:"Play Store",link:"https://play.google.com/store/apps/details?id="}};var p=e=>{var t;let{project:r}=e;const a=null==r?void 0:r.links;let l=0;return n.createElement("div",{className:"flex flex-wrap gap-4 mt-8"},null===(t=Object.keys(u))||void 0===t?void 0:t.map((e=>(a[e]&&l++,a[e]&&n.createElement("a",{key:e,href:"website"===e?a[e]:`${u[e].link}${a[e]}`,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-100 rounded-lg p-2 md:p-4 hover:bg-blue-100"},u[e].component)))),0===l&&n.createElement("p",null,"No Links found"))},h=r(1083);var f=e=>{let{channelId:t}=e;const{0:r,1:a}=(0,n.useState)([]),l="AIzaSyDqYlCdQnNrjZOQhDdwNSR7GOUdQchxuUg";return(0,n.useEffect)((()=>{(async()=>{try{const e=await h.A.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",channelId:t,maxResults:4,order:"date",type:"video",key:l}});a(e.data.items)}catch(e){console.error("Error fetching YouTube videos",e)}})()}),[t,l]),n.createElement("div",{className:"youtube-embed mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"},t?null==r?void 0:r.map((e=>n.createElement("div",{key:e.id.videoId,className:"video-item flex flex-col border-b-2 p-4"},n.createElement("iframe",{className:"w-full rounded-md",height:"180px",src:`https://www.youtube.com/embed/${e.id.videoId}`,allowFullScreen:!0,title:e.snippet.title}),n.createElement("div",{className:"flex flex-col mt-4"},n.createElement("h3",{className:"font-extrabold text-lg"},e.snippet.title),n.createElement("p",{className:"text-gray-400 font-semibold"},e.snippet.channelTitle))))):n.createElement("p",null,"No youtube channel id found"))},w=r(1976),v=r.n(w),g="https://platform.twitter.com/widgets.js",b="twttr",x=b,y=!("undefined"==typeof window||!window.document||!window.document.createElement);function k(){return new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};v().isDefined(x)||v()(g,x),v().ready(x,{success:function(){var t=window[b];t&&t.widgets||r(),e(t.widgets)},error:r})}))}function E(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function N(e){var t=(0,n.useRef)();return function(e,t){if(E(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!Object.prototype.hasOwnProperty.call(t,r[a])||!E(e[r[a]],t[r[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function j(e){return"object"==typeof e?Object.assign({},e):e}var C="twdiv";function T(e,t,r,a){var l=(0,n.useState)(null),o=l[0],c=l[1],s=(0,n.useRef)(null);if(!y)return{ref:s,error:o};var i=[e,N(t),N(r)];return(0,n.useEffect)((function(){c(null);var n,l,o=!1;if(s.current){if(n=s.current,l=C,n&&n.querySelectorAll("*").forEach((function(e){e.hasAttribute(l)&&e.remove()})),!s||!s.current)return;var i=document.createElement("div");i.setAttribute(C,"yes"),s.current.appendChild(i),k().then((function(n){return n[e](j(t),i,j(r))})).then((function(e){if(!e&&!o)throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");s&&s.current&&(o?i&&i.remove():a&&a())})).catch((function(e){console.error(e),c(e)}))}return function(){o=!0}}),i),{ref:s,error:o}}var $=function(e){var t=e.dataSource,r=e.options,a=e.onLoad,l=e.renderError,o=T("createTimeline",t,r,a),c=o.ref,s=o.error;return n.createElement("div",{ref:c},s&&l&&l(s))};var z=e=>{let{username:t}=e;return n.createElement("div",{className:"twitter-feed-container mt-8"},t?n.createElement($,{dataSource:{sourceType:"profile",screenName:t},options:{width:"100%",height:"600"}}):n.createElement("h2",null,"No Twitter username found"))},A=r(8025),S=r(1161),I=r(326),M=r(8154);var O=()=>{var e,t;const{0:r,1:c}=(0,n.useState)("overview"),i=(0,A.useLocation)(),d=new URLSearchParams(i.search).get("projectId")||"",{project:m,handleGetOneProject:u,resetStates:h}=(0,n.useContext)(S.v),{0:w,1:v}=(0,n.useState)(!0),{handleUpvoteProject:g}=(0,n.useContext)(S.v),{0:b,1:x}=(0,n.useState)(m.upvotes);return(0,n.useEffect)((()=>{u(d)}),[d]),(0,n.useEffect)((()=>{""!==m.name&&(x(m.upvotes),v(!1))}),[m]),(0,n.useEffect)((()=>{v(!0),h()}),[]),n.createElement(I.A,null,n.createElement(M.m,null,n.createElement("title",null,"Profile Details | BestCrypt0"),n.createElement("meta",{name:"description",content:"View and update your profile details on BestCrypt0."})),w?n.createElement("div",{className:"flex justify-center items-center mt-[10%]"},n.createElement("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"})):n.createElement("div",null,n.createElement("div",{className:"h-80 w-full"},n.createElement("img",{src:null==m?void 0:m.coverImg,className:"object-strech h-64 w-full"})),n.createElement("div",{className:"mx-4 mt-4"},n.createElement("div",{className:"flex flex-col md:flex-row"},n.createElement("img",{src:null==m?void 0:m.logo,className:"h-20 w-28"}),n.createElement("div",{className:"md:ml-2 mt-2 md:mt-0"},n.createElement("h2",{className:"text-2xl font-bold"},null==m?void 0:m.name),n.createElement("p",null,null==m?void 0:m.tldr),n.createElement("div",{className:"flex space-x-2 mt-2"},null==m||null===(e=m.tags)||void 0===e?void 0:e.map(((e,t)=>n.createElement("p",{key:t,className:"px-2 rounded-sm border-[1px] bg-secondarylight text-xs"},e.name))),n.createElement(l.k,{data:{text:null==m?void 0:m.tldr,url:window.location.href,title:null==m?void 0:m.name},onClick:()=>console.log("shared successfully!")},n.createElement("button",{className:"text-gray-500"},n.createElement(a.A$,null)))))),n.createElement("div",{className:"md:flex mt-12"},n.createElement("div",{className:"flex space-x-6 w-full md:w-auto border-b-2"},null===(t=["overview","links","videos","updates"])||void 0===t?void 0:t.map((e=>n.createElement("p",{key:e,className:"font-bold cursor-pointer "+(r===e?"border-b-2 border-primarydark":""),onClick:()=>c(e)},e.charAt(0).toUpperCase()+e.slice(1))))),n.createElement("div",{onClick:()=>{g(d),x(b+1)},className:"hidden md:w-24 ml-[20%] md:ml-12 mb-2 border-[1px] md:flex md:px-6 px-2 md:py-2 py-1 rounded-sm md:rounded-md text-gray-500 space-x-2"},n.createElement(o.lvq,{className:"md:h-4 h-2 md:w-4 w-2 my-auto"}),n.createElement("p",{className:"text-xs md:text-sm"},b))),"overview"===r&&n.createElement("div",null,n.createElement(s,{project:m}),n.createElement(p,{project:m}),n.createElement(f,{channelId:(null==m?void 0:m.links.youtube)||""}),n.createElement(z,{username:(null==m?void 0:m.links.twitter)||""})),"links"===r&&n.createElement(p,{project:m}),"videos"===r&&n.createElement(f,{channelId:(null==m?void 0:m.links.youtube)||""}),"updates"===r&&n.createElement(z,{username:(null==m?void 0:m.links.twitter)||""}))))}},9341:function(e,t,r){"use strict";var n=r(6540),a=r(1552),l=r.n(a);t.A=e=>{let{markdown:t}=e;const r=(new(l().Converter)).makeHtml(t);return n.createElement("div",{dangerouslySetInnerHTML:{__html:r}})}},1976:function(e,t){var r,n,a;n=[],void 0===(a="function"==typeof(r=function(){var e=function(){},t={},r={},n={};function a(e,t){e=e.push?e:[e];var a,l,o,c=[],s=e.length,i=s;for(a=function(e,r){r.length&&c.push(e),--i||t(c)};s--;)l=e[s],(o=r[l])?a(l,o):(n[l]=n[l]||[]).push(a)}function l(e,t){if(e){var a=n[e];if(r[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function o(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function c(t,r,n,a){var l,o,s,i=document,d=n.async,m=(n.numRetries||0)+1,u=n.before||e,p=t.replace(/[\?|#].*$/,""),h=t.replace(/^(css|img|module|nomodule)!/,"");if(a=a||0,/(^css!|\.css$)/.test(p))(s=i.createElement("link")).rel="stylesheet",s.href=h,(l="hideFocus"in s)&&s.relList&&(l=0,s.rel="preload",s.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p))(s=i.createElement("img")).src=h;else if((s=i.createElement("script")).src=h,s.async=void 0===d||d,o="noModule"in s,/^module!/.test(p)){if(!o)return r(t,"l");s.type="module"}else if(/^nomodule!/.test(p)&&o)return r(t,"l");s.onload=s.onerror=s.onbeforeload=function(e){var o=e.type[0];if(l)try{s.sheet.cssText.length||(o="e")}catch(i){18!=i.code&&(o="e")}if("e"==o){if((a+=1)<m)return c(t,r,n,a)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";r(t,o,e.defaultPrevented)},!1!==u(t,s)&&i.head.appendChild(s)}function s(e,t,r){var n,a,l=(e=e.push?e:[e]).length,o=l,s=[];for(n=function(e,r,n){if("e"==r&&s.push(e),"b"==r){if(!n)return;s.push(e)}--l||t(s)},a=0;a<o;a++)c(e[a],n,r)}function i(e,r,n){var a,c;if(r&&r.trim&&(a=r),c=(a?n:r)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function i(t,r){s(e,(function(e){o(c,e),t&&o({success:t,error:r},e),l(a,e)}),c)}if(c.returnPromise)return new Promise(i);i()}return i.ready=function(e,t){return a(e,(function(e){o(t,e)})),i},i.done=function(e){l(e,[])},i.reset=function(){t={},r={},n={}},i.isDefined=function(e){return e in t},i})?r.apply(t,n):r)||(e.exports=a)},2446:function(e,t,r){"use strict";r.d(t,{k:function(){return f}});var n=r(6540),a=r(4848),l=r(961);function o({children:e,onClose:t}){return(0,a.jsx)("div",{onClick:e=>{e.target===e.currentTarget&&t(e)},className:"rws-backdrop web-share-fade",children:e})}!function(e,{insertAt:t}={}){if(!e||typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===t&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}(".web-share-fade{animation:rwsFade .5s;animation-fill-mode:both}@keyframes rwsFade{0%{opacity:0}to{opacity:1}}.web-share-fade-in-up{animation:rwsfadeInUp .5s;animation-fill-mode:both}@keyframes rwsfadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.rws-icons{padding:1.25rem;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1.25rem}.rws-icon{width:100%;height:auto;cursor:pointer;border:0;background:#1a78f6;padding:.75rem;border-radius:.5rem;font-size:0}.rws-container{max-width:24rem;width:90%;background-color:#fff;border-radius:.5rem;border-bottom-left-radius:0;border-bottom-right-radius:0}.rws-backdrop{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.4);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:1400}.rws-header{padding:1rem 1.25rem;font-size:1.25rem;font-weight:600;padding-bottom:0}.rws-close{background:#edf2f7;cursor:pointer;padding:.75rem;display:block;width:100%;border:0;font-size:1rem}\n");var c=e=>window.open(e,"_blank","noopener"),s={facebook:{path:(0,a.jsx)("path",{d:"M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"}),color:"#0076FB",e:e=>c(`https://www.facebook.com/sharer/sharer.php?u=${e}`)},twitter:{path:(0,a.jsx)("path",{d:"M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z"}),color:"#1DA1F2",e:(e,t)=>c(`https://twitter.com/intent/tweet?text=${t}&url=${e}`)},whatsapp:{path:(0,a.jsx)("path",{d:"M17.5 14.4l-2-1c-.3 0-.5-.1-.7.2l-1 1.1c-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.1-.3 0-.5.2-.6l.4-.6c.2-.1.2-.3.3-.5v-.5L9 7c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5 0-.8.4-.2.3-1 1-1 2.5s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5l1.7.6a4 4 0 001.9.2c.5-.1 1.7-.8 2-1.5.2-.6.2-1.2.1-1.4l-.5-.3M12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.3a9.9 9.9 0 01-1.5-5.3 9.9 9.9 0 0116.8-7 9.8 9.8 0 013 7 9.9 9.9 0 01-10 9.9m8.4-18.3A11.8 11.8 0 0012.1 0 12 12 0 001.8 17.8L0 24l6.4-1.6a11.9 11.9 0 005.6 1.4 12 12 0 0012-11.9 11.8 11.8 0 00-3.5-8.4z"}),color:"#25D366",e:(e,t)=>c(`https://api.whatsapp.com/send?text=${t} ${e}`)},reddit:{path:(0,a.jsx)("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 01-2.5.06l-2.6-.55-.8 3.75c1.83.07 3.48.63 4.68 1.49.3-.31.73-.5 1.2-.5.97 0 1.76.8 1.76 1.76 0 .72-.43 1.33-1.01 1.61a3.11 3.11 0 01.04.52c0 2.7-3.13 4.87-7 4.87-3.88 0-7-2.17-7-4.87 0-.18 0-.36.04-.53A1.75 1.75 0 014.03 12a1.75 1.75 0 012.96-1.26 8.52 8.52 0 014.74-1.5l.89-4.17a.34.34 0 01.14-.2.35.35 0 01.24-.04l2.9.62a1.21 1.21 0 011.11-.7zM9.25 12a1.25 1.25 0 101.25 1.25c0-.69-.56-1.25-1.25-1.25zm5.5 0a1.25 1.25 0 000 2.5 1.25 1.25 0 000-2.5zm-5.47 3.99a.33.33 0 00-.23.1.33.33 0 000 .46c.84.84 2.49.91 2.96.91.48 0 2.1-.06 2.96-.91a.36.36 0 00.03-.47.33.33 0 00-.46 0c-.55.54-1.68.73-2.51.73-.83 0-1.98-.2-2.51-.73a.33.33 0 00-.24-.1z"}),color:"#FF4500",e:(e,t)=>c(`https://www.reddit.com/submit?url=${e}&title=${t}`)},telegram:{path:(0,a.jsx)("path",{d:"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"}),color:"#0088CC",e:(e,t)=>c(`https://telegram.me/share/msg?url=${e}&text=${t}`)},linkedin:{path:(0,a.jsx)("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"}),color:"#0073b1",e:(e,t,r)=>c(`https://www.linkedin.com/shareArticle?mini=true&url=${e}&title=${r}&summary=${t}`)},mail:{path:(0,a.jsx)("path",{d:"M20 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),color:"#E53E3E",e:(e,t)=>c(`mailto:?body=${e}&subject=${t}`)},copy:{path:(0,a.jsx)("path",{d:"M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"}),color:"#718096",e:e=>navigator.clipboard.writeText(decodeURIComponent(e))},vk:{path:(0,a.jsx)("path",{d:"M22.7 6.24c.16-.52 0-.9-.73-.9H19.5c-.62 0-.91.32-1.06.69 0 0-1.25 3.04-3.02 5.02-.57.57-.83.75-1.15.75-.15 0-.39-.18-.39-.7V6.24c0-.63-.17-.9-.69-.9H9.34c-.39 0-.62.29-.62.56 0 .59.88.72.97 2.4v3.6c0 .8-.14.95-.45.95-.84 0-2.86-3.06-4.06-6.56-.24-.68-.48-.96-1.1-.96H1.61c-.7 0-.85.33-.85.7 0 .65.84 3.88 3.88 8.14 2.03 2.92 4.9 4.5 7.5 4.5 1.55 0 1.75-.35 1.75-.96 0-2.78-.15-3.04.64-3.04.36 0 .99.18 2.44 1.58 1.67 1.67 1.95 2.42 2.88 2.42h2.45c.7 0 1.06-.35.85-1.05-.46-1.45-3.62-4.44-3.76-4.64-.36-.47-.26-.68 0-1.1 0 0 3-4.21 3.3-5.64Z"}),color:"#07f",e:(e,t,r)=>c(`http://vk.com/share.php?url=${e}&title=${r}&comment=${t}`)},okru:{path:(0,a.jsx)("path",{d:"M13.6 16.4c1-.3 2-.7 2.8-1.2a1.5 1.5 0 0 0-1.5-2.5 6.3 6.3 0 0 1-6.7 0 1.5 1.5 0 1 0-1.5 2.5c.9.5 1.8 1 2.9 1.2L6.8 19a1.4 1.4 0 1 0 2 2l2.8-2.6 2.7 2.7a1.5 1.5 0 1 0 2-2l-2.7-2.8Zm-2-11.1a2 2 0 1 1 0 4.1 2 2 0 0 1 0-4.1Zm0 7a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"}),color:"#e27e35",e:e=>c(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${e}`)}},i=({children:e})=>{let t=document.createElement("div");return n.useEffect((()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)})),[t]),(0,l.createPortal)(e,t)};function d({onClose:e,closeText:t}){return(0,a.jsx)("button",{className:"rws-close","aria-label":"Close",type:"button",onClick:e,children:t||"Close"})}function m({title:e}){return(0,a.jsx)("header",{className:"rws-header",children:e})}function u({name:e,data:t,onClose:r,onClick:n}){let{path:l,viewBox:o="0 0 24 24",color:c,e:i}=s[e];return(0,a.jsx)("button",{onClick:()=>{n&&n(e),i(encodeURIComponent(t.url),t.text,t.title),r()},"aria-label":e,className:"rws-icon",style:{background:c},children:(0,a.jsx)("svg",{fill:"white",viewBox:o,children:l})})}var p=({onClose:e,sites:t,data:r,closeText:n,onClick:l})=>(0,a.jsxs)("section",{role:"dialog","aria-modal":"true",className:"rws-container web-share-fade-in-up",children:[(0,a.jsx)(m,{title:r.title}),(0,a.jsx)("div",{className:"rws-icons",children:t.map((t=>(0,a.jsx)(u,{name:t,data:r,onClose:e,onClick:l},t)))}),(0,a.jsx)(d,{onClose:e,closeText:n})]});var h=Object.keys(s).slice(0,8),f=(0,n.memo)((e=>{var t;let{onOpen:r,onClose:l,isOpen:c}=function(){let[e,t]=(0,n.useState)(!1);return{isOpen:e,onOpen:(0,n.useCallback)((()=>t(!0)),[]),onClose:(0,n.useCallback)((()=>t(!1)),[]),onToggle:(0,n.useCallback)((()=>t((e=>!e))),[])}}(),s=(0,n.useMemo)((()=>({...e.data,title:e.data.title||"share",text:e.data.text||"",url:e.data.url||typeof window<"u"&&window.location.href||""})),[e.data]),d=(0,n.useCallback)((async()=>{if(window.navigator.share&&!e.disableNative)try{await window.navigator.share(s),e.onClick()}catch(t){console.warn(t)}else r()}),[s]);return(0,a.jsxs)(a.Fragment,{children:[(0,n.cloneElement)(e.children,{...null==(t=e.children)?void 0:t.props,onClick:d}),c&&(0,a.jsx)(i,{children:(0,a.jsx)(o,{onClose:l,children:(0,a.jsx)(p,{onClose:l,sites:e.sites||h,data:s,closeText:e.closeText,onClick:e.onClick})})})]})}))}}]);
//# sourceMappingURL=component---src-pages-profile-details-jsx-69c5d8fa486ab93881b5.js.map