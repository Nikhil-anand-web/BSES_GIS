/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,r){"use strict";let t,o=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};t=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let n=(e,r)=>{let o=e;return r.forEach((e=>{o=o&&o.children?t(o.children,(r=>r.domNode===e)):void 0})),o},d=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),l=o(d.currentTarget,i.domNode);l.reverse();let p,a=n(i.getLastRender(),l);return e.scheduleRender(),a&&(p=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),p};return(e,r,t,o)=>d},i=e=>{let t,o,n=r.applyDefaultProjectionOptions(e),i=n.performanceLogger,l=!0,p=!1,a=[],c=[],s=(e,r,o)=>{let l,p=()=>l;n.eventHandlerInterceptor=d(t,p,i),l=e(r,o(),n),a.push(l),c.push(o)},u=()=>{if(o=void 0,l){l=!1,i("renderStart",void 0);for(let e=0;e<a.length;e++){let r=c[e]();i("rendered",void 0),a[e].update(r),i("patched",void 0)}i("renderDone",void 0),l=!0}};return t={renderNow:u,scheduleRender:()=>{o||p||(o=requestAnimationFrame(u))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),p=!0},resume:()=>{p=!1,l=!0,t.scheduleRender()},append:(e,t)=>{s(r.dom.append,e,t)},insertBefore:(e,t)=>{s(r.dom.insertBefore,e,t)},merge:(e,t)=>{s(r.dom.merge,e,t)},replace:(e,t)=>{s(r.dom.replace,e,t)},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),a.splice(r,1)[0];throw new Error("renderFunction was not found")}},t};e.createProjector=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));