/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/has"],(function(e,t){"use strict";var n;function o(t,n,o={}){const r=n===e.ContextType.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const e of r){const n=t.getContext(e,o);if(n)return n}return null}function r(e,t,n={}){const r=c(e);for(const c of r){const e=o(t,c,n);if(e)return e}return null}function c(n){if("3d"===n)return[e.ContextType.WEBGL2];const o=t("esri-force-webgl");return o===e.ContextType.WEBGL1||o===e.ContextType.WEBGL2?[o]:t("mac")&&t("chrome")?[e.ContextType.WEBGL1,e.ContextType.WEBGL2]:[e.ContextType.WEBGL2,e.ContextType.WEBGL1]}e.ContextType=void 0,(n=e.ContextType||(e.ContextType={}))[n.WEBGL1=1]="WEBGL1",n[n.WEBGL2=2]="WEBGL2",e.createContext=o,e.createContextForView=r,e.getContextTypes=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
