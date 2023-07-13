/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/dom","../../assets","../../core/has","../../core/urlUtils","../../chunks/index"],(function(e,t,o,n,s,c){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function d(){const{classList:e}=document.body,o=window.matchMedia("(prefers-color-scheme: dark)").matches,n=()=>e.contains(t.darkMode)||e.contains(t.autoMode)&&o?"dark":"light",s=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:e}})),c=e=>{d!==e&&s(e),d=e};let d=n();s(d),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>c(e.matches?"dark":"light"))),new MutationObserver((()=>c(n()))).observe(document.body,{attributes:!0,attributeFilter:["class"]})}function a(){"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?d():document.addEventListener("DOMContentLoaded",(()=>d()),{once:!0}))}let i;function r(){try{c.getAssetPath(".")}catch{c.setAssetPath(s.makeAbsolute(o.getAssetUrl(i)))}}function u(e){const t=[];for(const o of Object.keys(e))customElements.get(`calcite-${o}`)||t.push(e[o]?.());return Promise.all(t)}a(),i="components/assets",e.commitAssetPath=r,e.loadCalciteComponents=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
