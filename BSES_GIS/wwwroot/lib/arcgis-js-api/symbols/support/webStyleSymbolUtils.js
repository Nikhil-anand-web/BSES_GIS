/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../symbols","../../core/devEnvironmentUtils","../../core/Error","../../core/maybe","../../core/urlUtils","../../portal/Portal","../../chunks/persistableUrlUtils","./jsonUtils","./StyleOrigin","./styleUtils","./Thumbnail"],(function(e,t,l,r,n,o,a,m,s,i,u,y){"use strict";function b(e,t,l,o){const a=e.name;return null==a?Promise.reject(new r("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?S(a,t,o):u.fetchStyle(e,t,o).then((e=>f(n.unwrapOrThrow(e),a,t,l,u.symbolUrlFromStyleItem,o)))}function c(e,t){return t.items.find((t=>t.name===e))}function f(e,n,b,f,S,p){const g=b&&null!=b.portal?b.portal:a.getDefault(),h={portal:g,url:o.urlToObject(e.baseUrl),origin:"portal-item"},O=c(n,e.data);if(!O){const e=`The symbol name '${n}' could not be found`;return Promise.reject(new r("symbolstyleutils:symbol-name-not-found",e,{symbolName:n}))}let d=m.fromJSON(S(O,f),h),U=O.thumbnail?.href??null;const N=O.thumbnail&&O.thumbnail.imageData;l.isDevEnvironment()&&(d=l.adjustStaticAGOUrl(d)??"",U=l.adjustStaticAGOUrl(U));const T={portal:g,url:o.urlToObject(o.removeFile(d)),origin:"portal-item"};return u.requestJSON(d,p).then((l=>{const r="cimRef"===f?u.makeCIMSymbolRef(l.data):l.data,o=s.fromJSON(r,T);if(o&&t.isSymbol3D(o)){if(U){const e=m.fromJSON(U,h);o.thumbnail=new y.Thumbnail({url:e})}else N&&(o.thumbnail=new y.Thumbnail({url:`data:image/png;base64,${N}`}));e.styleUrl?o.styleOrigin=new i({portal:b.portal,styleUrl:e.styleUrl,name:n}):e.styleName&&(o.styleOrigin=new i({portal:b.portal,styleName:e.styleName,name:n}))}return o}))}function S(e,t,l){const r=u.Style2DUrlTemplate.replaceAll(/\{SymbolName\}/gi,e),n=null!=t.portal?t.portal:a.getDefault();return u.requestJSON(r,l).then((e=>{const t=u.makeCIMSymbolRef(e.data);return s.fromJSON(t,{portal:n,url:o.urlToObject(o.removeFile(r)),origin:"portal-item"})}))}e.fetchSymbolFromStyle=f,e.getStyleItemFromStyle=c,e.resolveWebStyleSymbol=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
