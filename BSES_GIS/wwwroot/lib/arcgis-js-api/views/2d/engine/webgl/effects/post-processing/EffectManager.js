/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","./Bloom","./Blur","./Colorize","./DropShadow","./Opacity"],(function(e,t,o,c,r,n,s){"use strict";function f(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const i={colorize:()=>new r.Colorize,blur:()=>new c.Blur,bloom:()=>new o.Bloom,opacity:()=>new s.Opacity,"drop-shadow":()=>new n.DropShadow};let a=function(){function e(){this._effectMap=new Map}var o=e.prototype;return o.dispose=function(){this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear()},o.getPostProcessingEffects=function(e){if(!e||0===e.length)return[];const t=[];for(const o of e){const e=f(o.type);let c=this._effectMap.get(e);c||(c=i[e](),this._effectMap.set(e,c)),t.push({postProcessingEffect:c,effect:o})}return t},t._createClass(e)}();e.EffectManager=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
