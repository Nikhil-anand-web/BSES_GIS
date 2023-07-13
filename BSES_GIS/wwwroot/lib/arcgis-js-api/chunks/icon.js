/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./observers"],(function(t,i,a,e){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const n={icon:"icon",flipRtl:"flip-rtl"},c={},s={},r={s:16,m:24,l:32};async function o({icon:t,scale:a}){const e=r[a],n=l(t),o="F"===n.charAt(n.length-1),m=`${o?n.substring(0,n.length-1):n}${e}${o?"F":""}`;if(c[m])return c[m];s[m]||(s[m]=fetch(i.getAssetPath(`./assets/icon/${m}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${m}" is not a valid calcite-ui-icon name`),""))));const h=await s[m];return c[m]=h,h}function l(t){const i=!isNaN(Number(t.charAt(0))),a=t.split("-");if(a.length>0){const i=/[a-z]/i;t=a.map(((t,a)=>t.replace(i,(function(t,i){return 0===a&&0===i?t:t.toUpperCase()})))).join("")}return i?`i${t}`:t}const m="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}",h=i.proxyCustomElement(class extends i.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:c,scale:s,textLabel:o}=this,l=a.getElementDir(t),m=r[s],h=!!o,f=[].concat(c||"");return i.h(i.Host,{"aria-hidden":a.toAriaBoolean(!h),"aria-label":h?o:null,role:h?"img":null},i.h("svg",{"aria-hidden":"true",class:{[n.flipRtl]:"rtl"===l&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${m} ${m}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},f.map((t=>"string"==typeof t?i.h("path",{d:t}):i.h("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:a,visible:e}=this;i.Build.isBrowser&&t&&e&&(this.pathData=await o({icon:t,scale:a}))}waitUntilVisible(t){this.intersectionObserver=e.createObserver("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return m}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function f(){if("undefined"==typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}f(),t.Icon=h,t.defineCustomElement=f}));
