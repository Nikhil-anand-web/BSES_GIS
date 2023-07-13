/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils","../../core/number"],(function(t,r,e){"use strict";function n(t,r,e){return void 0===e||0==+e?Math[t](r):(r=+r,e=+e,isNaN(r)||"number"!=typeof e||e%1!=0?NaN:(r=r.toString().split("e"),+((r=(r=Math[t](+(r[0]+"e"+(r[1]?+r[1]-e:-e)))).toString().split("e"))[0]+"e"+(r[1]?+r[1]+e:e))))}function u(t,u){function o(t,e,n){const u=r.toNumber(t);return isNaN(u)?u:isNaN(e)||isNaN(n)||e>n?NaN:u<e?e:u>n?n:u}t.number=function(t,n){return u(t,n,((u,o,c)=>{r.pcCheck(c,1,2,t,n);const i=c[0];if(r.isNumber(i))return i;if(null===i)return 0;if(r.isDate(i))return i.toNumber();if(r.isBoolean(i))return Number(i);if(r.isArray(i))return NaN;if(""===i)return Number(i);if(void 0===i)return Number(i);if(r.isString(i)){if(void 0!==c[1]){let t=r.multiReplace(c[1],"‰","");return t=r.multiReplace(t,"¤",""),e.parse(i,{pattern:t})}return Number(i.trim())}return Number(i)}))},t.abs=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.abs(r.toNumber(o[0])))))},t.acos=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.acos(r.toNumber(o[0])))))},t.asin=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.asin(r.toNumber(o[0])))))},t.atan=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.atan(r.toNumber(o[0])))))},t.atan2=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,2,2,t,e),Math.atan2(r.toNumber(o[0]),r.toNumber(o[1])))))},t.ceil=function(t,e){return u(t,e,((u,o,c)=>{if(r.pcCheck(c,1,2,t,e),2===c.length){let t=r.toNumber(c[1]);return isNaN(t)&&(t=0),n("ceil",r.toNumber(c[0]),-1*t)}return Math.ceil(r.toNumber(c[0]))}))},t.round=function(t,e){return u(t,e,((u,o,c)=>{if(r.pcCheck(c,1,2,t,e),2===c.length){let t=r.toNumber(c[1]);return isNaN(t)&&(t=0),n("round",r.toNumber(c[0]),-1*t)}return Math.round(r.toNumber(c[0]))}))},t.floor=function(t,e){return u(t,e,((u,o,c)=>{if(r.pcCheck(c,1,2,t,e),2===c.length){let t=r.toNumber(c[1]);return isNaN(t)&&(t=0),n("floor",r.toNumber(c[0]),-1*t)}return Math.floor(r.toNumber(c[0]))}))},t.cos=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.cos(r.toNumber(o[0])))))},t.isnan=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),"number"==typeof o[0]&&isNaN(o[0]))))},t.exp=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.exp(r.toNumber(o[0])))))},t.log=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.log(r.toNumber(o[0])))))},t.pow=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,2,2,t,e),r.toNumber(o[0])**r.toNumber(o[1]))))},t.random=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,0,0,t,e),Math.random())))},t.sin=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.sin(r.toNumber(o[0])))))},t.sqrt=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.sqrt(r.toNumber(o[0])))))},t.tan=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),Math.tan(r.toNumber(o[0])))))},t.defaultvalue=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,2,2,t,e),null===o[0]||""===o[0]||void 0===o[0]?o[1]:o[0])))},t.isempty=function(t,e){return u(t,e,((n,u,o)=>(r.pcCheck(o,1,1,t,e),null===o[0]||(""===o[0]||void 0===o[0]))))},t.boolean=function(t,e){return u(t,e,((n,u,o)=>{r.pcCheck(o,1,1,t,e);const c=o[0];return r.toBoolean(c)}))},t.constrain=function(t,e){return u(t,e,((n,u,c)=>{r.pcCheck(c,3,3,t,e);const i=r.toNumber(c[1]),a=r.toNumber(c[2]);if(r.isArray(c[0])){const t=[];for(const r of c[0])t.push(o(r,i,a));return t}if(r.isImmutableArray(c[0])){const t=[];for(let r=0;r<c[0].length();r++)t.push(o(c[0].get(r),i,a));return t}return o(c[0],i,a)}))}}t.registerFunctions=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));