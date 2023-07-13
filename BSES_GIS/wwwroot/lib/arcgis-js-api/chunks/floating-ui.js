/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","./index","./dom","./debounce"],(function(t,e,n,o,i){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function r(t){return t.split("-")[1]}function l(t){return"y"===t?"height":"width"}function a(t){return t.split("-")[0]}function s(t){return["top","bottom"].includes(a(t))?"x":"y"}function c(t,e,n){let{reference:o,floating:i}=t;const c=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,u=s(e),d=l(u),m=o[d]/2-i[d]/2,p="x"===u;let g;switch(a(e)){case"top":g={x:c,y:o.y-i.height};break;case"bottom":g={x:c,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:f};break;case"left":g={x:o.x-i.width,y:f};break;default:g={x:o.x,y:o.y}}switch(r(e)){case"start":g[u]-=m*(n&&p?-1:1);break;case"end":g[u]+=m*(n&&p?-1:1)}return g}const f=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,a=r.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=c(f,o,s),m=o,p={},g=0;for(let h=0;h<a.length;h++){const{name:n,fn:r}=a[h],{x:y,y:x,data:w,reset:v}=await r({x:u,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:p,rects:f,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=x?x:d,p={...p,[n]:{...p[n],...w}},v&&g<=50&&(g++,"object"==typeof v&&(v.placement&&(m=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:u,y:d}=c(f,m,s))),h=-1)}return{x:u,y:d,placement:m,strategy:i,middlewareData:p}};function u(t){return{top:0,right:0,bottom:0,left:0,...t}}function d(t){return"number"!=typeof t?u(t):{top:t,right:t,bottom:t,left:t}}function m(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function p(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:a,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=e,h=d(g),y=a[p?"floating"===u?"reference":"floating":u],x=m(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:s})),w="floating"===u?{...l.floating,x:o,y:i}:l.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},E=m(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:s}):w);return{top:(x.top-E.top+h.top)/b.y,bottom:(E.bottom-x.bottom+h.bottom)/b.y,left:(x.left-E.left+h.left)/b.x,right:(E.right-x.right+h.right)/b.x}}const g=Math.min,h=Math.max;function y(t,e,n){return h(t,g(e,n))}const x=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:a,placement:c,rects:f,platform:u,elements:m}=e;if(null==n)return{};const p=d(o),g={x:i,y:a},h=s(c),x=l(h),w=await u.getDimensions(n),v="y"===h,b=v?"top":"left",E=v?"bottom":"right",R=v?"clientHeight":"clientWidth",P=f.reference[x]+f.reference[h]-g[h]-f.floating[x],L=g[h]-f.reference[h],T=await(null==u.getOffsetParent?void 0:u.getOffsetParent(n));let A=T?T[R]:0;A&&await(null==u.isElement?void 0:u.isElement(T))||(A=m.floating[R]||f.floating[x]);const D=P/2-L/2,C=p[b],S=A-w[x]-p[E],k=A/2-w[x]/2+D,O=y(C,k,S),F=null!=r(c)&&k!=O&&f.reference[x]/2-(k<C?p[b]:p[E])-w[x]/2<0?k<C?C-k:S-k:0;return{[h]:g[h]-F,data:{[h]:O,centerOffset:k-O}}}}),w=["top","right","bottom","left"],v=w.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),b={left:"right",right:"left",bottom:"top",top:"bottom"};function E(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function R(t,e,n){void 0===n&&(n=!1);const o=r(t),i=s(t),a=l(i);let c="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=E(c)),{main:c,cross:E(c)}}const P={start:"end",end:"start"};function L(t){return t.replace(/start|end/g,(t=>P[t]))}function T(t,e,n){return(t?[...n.filter((e=>r(e)===t)),...n.filter((e=>r(e)!==t))]:n.filter((t=>a(t)===t))).filter((n=>!t||(r(n)===t||!!e&&L(n)!==n)))}const A=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:l,middlewareData:s,placement:c,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:m,allowedPlacements:g=v,autoAlignment:h=!0,...y}=t,x=void 0!==m||g===v?T(m||null,h,g):g,w=await p(e,y),b=(null==(n=s.autoPlacement)?void 0:n.index)||0,E=x[b];if(null==E)return{};const{main:P,cross:L}=R(E,l,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(c!==E)return{reset:{placement:x[0]}};const A=[w[a(E)],w[P],w[L]],D=[...(null==(o=s.autoPlacement)?void 0:o.overflows)||[],{placement:E,overflows:A}],C=x[b+1];if(C)return{data:{index:b+1,overflows:D},reset:{placement:C}};const S=D.map((t=>{const e=r(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),k=(null==(i=S.filter((t=>t[2].slice(0,r(t[0])?2:3).every((t=>t<=0))))[0])?void 0:i[0])||S[0][0];return k!==c?{data:{index:b+1,overflows:D},reset:{placement:k}}:{}}}};function D(t){const e=E(t);return[L(t),e,L(e)]}function C(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}function S(t,e,n,o){const i=r(t);let l=C(a(t),"start"===n,o);return i&&(l=l.map((t=>t+"-"+i)),e&&(l=l.concat(l.map(L)))),l}const k=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:c}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...y}=t,x=a(o),w=a(l)===l,v=await(null==s.isRTL?void 0:s.isRTL(c.floating)),b=d||(w||!h?[E(l)]:D(l));d||"none"===g||b.push(...S(l,h,g,v));const P=[l,...b],L=await p(e,y),T=[];let A=(null==(n=i.flip)?void 0:n.overflows)||[];if(f&&T.push(L[x]),u){const{main:t,cross:e}=R(o,r,v);T.push(L[t],L[e])}if(A=[...A,{placement:o,overflows:T}],!T.every((t=>t<=0))){var C,k;const t=((null==(C=i.flip)?void 0:C.index)||0)+1,e=P[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let n=null==(k=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!n)switch(m){case"bestFit":{var O;const t=null==(O=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:O[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}};function O(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function F(t){return w.some((e=>t[e]>=0))}const H=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e;switch(n){case"referenceHidden":{const t=O(await p(e,{...o,elementContext:"reference"}),i.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:F(t)}}}case"escaped":{const t=O(await p(e,{...o,altBoundary:!0}),i.floating);return{data:{escapedOffsets:t,escaped:F(t)}}}default:return{}}}}};async function M(t,e){const{placement:n,platform:o,elements:i}=t,l=await(null==o.isRTL?void 0:o.isRTL(i.floating)),c=a(n),f=r(n),u="x"===s(n),d=["left","top"].includes(c)?-1:1,m=l&&u?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:g,crossAxis:h,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),u?{x:h*m,y:g*d}:{x:g*d,y:h*m}}const W=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await M(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function B(t){return"x"===t?"y":"x"}const N=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=t,u={x:n,y:o},d=await p(e,f),m=s(a(i)),g=B(m);let h=u[m],x=u[g];if(r){const t="y"===m?"bottom":"right";h=y(h+d["y"===m?"top":"left"],h,h-d[t])}if(l){const t="y"===g?"bottom":"right";x=y(x+d["y"===g?"top":"left"],x,x-d[t])}const w=c.fn({...e,[m]:h,[g]:x});return{...w,data:{x:w.x-n,y:w.y-o}}}}};function V(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function $(t){return V(t).getComputedStyle(t)}function j(t){return t instanceof V(t).Node}function z(t){return j(t)?(t.nodeName||"").toLowerCase():""}function I(t){return t instanceof V(t).HTMLElement}function U(t){return t instanceof V(t).Element}function q(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof V(t).ShadowRoot||t instanceof ShadowRoot}function X(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Y(t){return["table","td","th"].includes(z(t))}function _(t){const e=G(),n=$(t);return"none"!==n.transform||"none"!==n.perspective||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function G(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(z(t))}const K=Math.min,Q=Math.max,Z=Math.round;function tt(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=I(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=Z(n)!==r||Z(o)!==l;return a&&(n=r,o=l),{width:n,height:o,fallback:a}}function et(t){return U(t)?t:t.contextElement}const nt={x:1,y:1};function ot(t){const e=et(t);if(!I(e))return nt;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=tt(e);let l=(r?Z(n.width):n.width)/o,a=(r?Z(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const it={x:0,y:0};function rt(t,e,n){var o,i;if(void 0===e&&(e=!0),!G())return it;const r=t?V(t):window;return!n||e&&n!==r?it:{x:(null==(o=r.visualViewport)?void 0:o.offsetLeft)||0,y:(null==(i=r.visualViewport)?void 0:i.offsetTop)||0}}function lt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=et(t);let l=nt;e&&(o?U(o)&&(l=ot(o)):l=ot(t));const a=rt(r,n,o);let s=(i.left+a.x)/l.x,c=(i.top+a.y)/l.y,f=i.width/l.x,u=i.height/l.y;if(r){const t=V(r),e=o&&U(o)?V(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=ot(n),e=n.getBoundingClientRect(),o=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,s*=t.x,c*=t.y,f*=t.x,u*=t.y,s+=e.x,c+=e.y,n=V(n).frameElement}}return m({width:f,height:u,x:s,y:c})}function at(t){return((j(t)?t.ownerDocument:t.document)||window.document).documentElement}function st(t){return U(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ct(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=I(n),r=at(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},a={x:1,y:1};const s={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==z(n)||X(r))&&(l=st(n)),I(n))){const t=lt(n);a=ot(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-l.scrollLeft*a.x+s.x,y:e.y*a.y-l.scrollTop*a.y+s.y}}function ft(t){return lt(at(t)).left+st(t).scrollLeft}function ut(t){const e=at(t),n=st(t),o=t.ownerDocument.body,i=Q(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=Q(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+ft(t);const a=-n.scrollTop;return"rtl"===$(o).direction&&(l+=Q(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:a}}function dt(t){if("html"===z(t))return t;const e=t.assignedSlot||t.parentNode||q(t)&&t.host||at(t);return q(e)?e.host:e}function mt(t){const e=dt(t);return J(e)?e.ownerDocument.body:I(e)&&X(e)?e:mt(e)}function pt(t,e){var n;void 0===e&&(e=[]);const o=mt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=V(o);return i?e.concat(r,r.visualViewport||[],X(o)?o:[]):e.concat(o,pt(o))}function gt(t,e){const n=V(t),o=at(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,a=0,s=0;if(i){r=i.width,l=i.height;const t=G();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:a,y:s}}function ht(t,e){const n=lt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=I(t)?ot(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}function yt(t,e,n){let o;if("viewport"===e)o=gt(t,n);else if("document"===e)o=ut(at(t));else if(U(e))o=ht(e,n);else{const n=rt(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return m(o)}function xt(t,e){const n=dt(t);return!(n===e||!U(n)||J(n))&&("fixed"===$(n).position||xt(n,e))}function wt(t,e){const n=e.get(t);if(n)return n;let o=pt(t).filter((t=>U(t)&&"body"!==z(t))),i=null;const r="fixed"===$(t).position;let l=r?dt(t):t;for(;U(l)&&!J(l);){const e=$(l),n=_(l);n||"fixed"!==e.position||(i=null);(r?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||X(l)&&!n&&xt(t,l))?o=o.filter((t=>t!==l)):i=e,l=dt(l)}return e.set(t,o),o}function vt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?wt(e,this._c):[].concat(n),o],l=r[0],a=r.reduce(((t,n)=>{const o=yt(e,n,i);return t.top=Q(o.top,t.top),t.right=K(o.right,t.right),t.bottom=K(o.bottom,t.bottom),t.left=Q(o.left,t.left),t}),yt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function bt(t){return tt(t)}function Et(t,e){return I(t)&&"fixed"!==$(t).position?e?e(t):t.offsetParent:null}function Rt(t){let e=dt(t);for(;I(e)&&!J(e);){if(_(e))return e;e=dt(e)}return null}function Pt(t,e){const n=V(t);if(!I(t))return n;let o=Et(t,e);for(;o&&Y(o)&&"static"===$(o).position;)o=Et(o,e);return o&&("html"===z(o)||"body"===z(o)&&"static"===$(o).position&&!_(o))?n:o||Rt(t)||n}function Lt(t,e,n){const o=I(e),i=at(e),r="fixed"===n,l=lt(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&!r)if(("body"!==z(e)||X(i))&&(a=st(e)),I(e)){const t=lt(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=ft(i));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}const Tt={getClippingRect:vt,convertOffsetParentRelativeRectToViewportRelativeRect:ct,isElement:U,getDimensions:bt,getOffsetParent:Pt,getDocumentElement:at,getScale:ot,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Pt,r=this.getDimensions;return{reference:Lt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===$(t).direction};function At(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:a=!1}=o,s=i||r?[...U(t)?pt(t):t.contextElement?pt(t.contextElement):[],...pt(e)]:[];s.forEach((t=>{const e=!U(t)&&t.toString().includes("V");!i||a&&!e||t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let c,f=null;l&&(f=new ResizeObserver((()=>{n()})),U(t)&&!a&&f.observe(t),U(t)||!t.contextElement||a||f.observe(t.contextElement),f.observe(e));let u=a?lt(t):null;function d(){const e=lt(t);!u||e.x===u.x&&e.y===u.y&&e.width===u.width&&e.height===u.height||n(),u=e,c=requestAnimationFrame(d)}return a&&d(),n(),()=>{var t;s.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=f)||t.disconnect(),f=null,a&&cancelAnimationFrame(c)}}const Dt=(t,e,n)=>{const o=new Map,i={platform:Tt,...n},r={...i.platform,_c:o};return f(t,e,{...i,platform:r})},Ct={floatingUINonChromiumPositioningFix:!0,...globalThis.calciteComponentsConfig},St=kt();async function kt(){function e(){return navigator.userAgentData}function o(){const t=e();return t?.brands?t.brands.map((({brand:t,version:e})=>`${t}/${e}`)).join(" "):navigator.userAgent}function i(){const t=e();return t?.brands?!!t.brands.find((({brand:t,version:e})=>("Google Chrome"===t||"Chromium"===t)&&Number(e)>=109)):!!navigator.userAgent.split(" ").find((t=>{const[e,n]=t.split("/");return"Chrome"===e&&parseInt(n)>=109}))}if(n.Build.isBrowser&&Ct.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(o())||i())){const{offsetParent:e}=await new Promise(((e,n)=>t(["./composed-offset-position.esm"],e,n))),n=Tt.getOffsetParent;Tt.getOffsetParent=t=>n(t,e)}}const Ot="data-placement",Ft=100,Ht=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Mt="bottom-start",Wt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Bt({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:r,type:l}){const a=[N(),H()];if("menu"===l)return[...a,k({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===l||"tooltip"===l){const l=[...a,W({mainAxis:"number"==typeof o?o:0,crossAxis:"number"==typeof i?i:0})];return"auto"===t||"auto-start"===t||"auto-end"===t?l.push(A({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||l.push(k(n?{fallbackPlacements:n}:{})),r&&l.push(x({element:r})),l}return[]}function Nt(t,e){const n=t.filter((t=>Ht.includes(t)));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Ht.map((t=>`"${t}"`)).join(", ").trim()}`,{el:e}),n}function Vt(t,e){const n=["left","right"];return"rtl"===o.getElementDir(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function $t(t,e,n=!1){if(t.open)return n?jt(t,e):It(t,e)}const jt=i.debounce(It,Ft,{leading:!0,maxWait:Ft}),zt={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"};async function It(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:r,flipPlacements:l,offsetDistance:a,offsetSkidding:s,arrowEl:c,type:f}){if(!e||!n)return null;await St;const{x:u,y:d,placement:m,strategy:p,middlewareData:g}=await Dt(e,n,{strategy:o,placement:"auto"===i||"auto-start"===i||"auto-end"===i?void 0:Vt(n,i),middleware:Bt({placement:i,flipDisabled:r,flipPlacements:l,offsetDistance:a,offsetSkidding:s,arrowEl:c,type:f})});if(c&&g.arrow){const{x:e,y:n}=g.arrow,o=m.split("-")[0],i=null!=e?"left":"top",r=zt[o],l={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout="left"===o||"right"===o?"horizontal":"vertical"),Object.assign(c.style,{...l,[i]:`${"left"==i?e:n}px`,[o]:"100%",transform:r})}const h=g.hide?.referenceHidden,y=h?"hidden":null,x=y?"none":null;n.setAttribute(Ot,m);const w=`translate(${Math.round(u)}px,${Math.round(d)}px)`;Object.assign(n.style,{visibility:y,pointerEvents:x,position:p,top:"0",left:"0",transform:w})}const Ut=new WeakMap;function qt(t,e,n){if(!n||!e)return;Xt(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const o=At;Ut.set(t,o(e,n,(()=>t.reposition())))}function Xt(t,e,n){if(!n||!e)return;const o=Ut.get(t);o&&o(),Ut.delete(t)}const Yt=4,_t=Math.ceil(Math.hypot(Yt,Yt));e.FloatingCSS=Wt,e.connectFloatingUI=qt,e.defaultMenuPlacement=Mt,e.defaultOffsetDistance=_t,e.disconnectFloatingUI=Xt,e.filterComputedPlacements=Nt,e.reposition=$t}));
