/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../assets","../../Color","../../request","../../core/LRUCache","../../core/screenUtils","./cimSymbolUtils"],(function(e,t,l,r,o,n,i){"use strict";const s="picture-fill",c="simple-fill",a="simple-line",p="simple-marker",u="text",h="cim",y=new o.LRUCache(1e3);function d(e){const l=e.style;let r=null;if(e)switch(e.type){case p:"cross"!==l&&"x"!==l&&(r=e.color);break;case c:"solid"===l?r=e.color:"none"!==l&&(r={type:"pattern",x:0,y:0,src:t.getAssetUrl(`esri/symbols/patterns/${l}.png`),width:5,height:5});break;case s:r={type:"pattern",src:e.url,width:n.pt2px(e.width)*e.xscale,height:n.pt2px(e.height)*e.yscale,x:n.pt2px(e.xoffset),y:n.pt2px(e.yoffset)};break;case u:r=e.color;break;case h:r=i.getCIMSymbolColor(e)}return r}function f(e,t){const l=e+"-"+t;return void 0!==y.get(l)?Promise.resolve(y.get(l)):r(e,{responseType:"image"}).then((e=>{const r=e.data,o=r.naturalWidth,n=r.naturalHeight,i=document.createElement("canvas");i.width=o,i.height=n;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,o,n),s.globalCompositeOperation="destination-in",s.drawImage(r,0,0);const c=i.toDataURL();return y.put(l,c),c}))}function m(e){if(!e)return null;let t=null;switch(e.type){case c:case s:case p:t=m(e.outline);break;case a:{const l=n.pt2px(e.width);null!=e.style&&"none"!==e.style&&0!==l&&(t={color:e.color,style:g(e.style),width:l,cap:e.cap,join:"miter"===e.join?n.pt2px(e.miterLimit):e.join});break}default:t=null}return t}const g=(()=>{const e={};return t=>{if(e[t])return e[t];const l=t.replaceAll("-","");return e[t]=l,l}})(),b=new l([128,128,128]);e.defaultThematicColor=b,e.dekebabifyLineStyle=g,e.getFill=d,e.getPatternUrlWithColor=f,e.getStroke=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));