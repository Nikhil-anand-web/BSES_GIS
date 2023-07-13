/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../Color","../../../symbols","../../../renderers/support/numberUtils","../../../symbols/support/cimSymbolUtils","../../../symbols/support/utils","./utils","../../support/widgetUtils","../../../support/themeUtils","../../../symbols/SimpleMarkerSymbol","../../../symbols/SimpleLineSymbol"],(function(e,l,t,n,i,o,s,r,a,u,c,m){"use strict";const y=30,f=12,p=[255,255,255],b=[200,200,200],h=[128,128,128],S=20,d=5;function g(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}function w(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}function v(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}function z(e){return"esri.symbols.TextSymbol"===e.declaredClass}function V(e,l){const t=e.length-1;return e.map(((e,n)=>r.createStopLabel(e,n,t,l)))}async function L(e,l,t,n,o,r,a){const u=l.legendOptions,c=u&&u.customValues,m=a||await x(e,t),y=l.stops,f=!!m,p=!!c,b=null!=l.minSize&&null!=l.maxSize,h=y&&y.length>1,S=!!l.target;if(!f||!p&&!(b||h&&!S))return;const d=s.isVolumetricSymbol(m);let g=!1,w=null,v=null;w=d&&!h?i.round([l.minDataValue,l.maxDataValue]):c??await E(l,m,n,o);const z=e?.authoringInfo,L="univariate-color-size"===z?.type,C=L&&"above-and-below"===z?.univariateTheme;if(!w&&h&&(w=y.map((e=>e.value)),g=y.some((e=>!!e.label)),"flow"===e.type&&(w=i.round(w)),g&&(v=y.map((e=>e.label)))),d&&null!=w&&w?.length>2&&!C&&(w=[w[0],w[w.length-1]]),!w)return null;L&&5!==w?.length&&(w=R({minSize:w[0],maxSize:w[w.length-1]}));const I=d?k(e,w):null,M=s.getSymbolOutlineSize(m),U=g?null:V(w,r);return(await Promise.all(w.map((async(t,i)=>{const s=d?I[i]:await O(l,m,t,n,o);return{value:t,symbol:P(C&&"class-breaks"===e.type?D(e,i):m,s),label:g?v[i]:U[i],size:s,outlineSize:M}})))).reverse()}function k(e,l){const t=e?.authoringInfo,n="univariate-color-size"===t?.type;let i=[f,y];if(n){const e=l[0],t=l[l.length-1],n=f,o=y;i=l.map((l=>n+(l-e)/(t-e)*(o-n)))}return n&&"below"===t?.univariateTheme&&i.reverse(),i}function D(e,l){const t=e.classBreakInfos,n=t.length,i=n<2||!(l>=2)?t[0].symbol.clone():t[n-1].symbol.clone();return e.visualVariables.some((e=>"color"===e.type))&&(i.type.includes("3d")?I(i):M(i)),i}async function x(e,l){if("flow"===e.type)return r.getSymbolForFlowRenderer(e,l);if("pie-chart"===e.type)return new c({color:null,outline:e.outline?.width?e.outline:new m});let t=null,n=null;if("simple"===e.type)t=e.symbol;else if("class-breaks"===e.type){const l=e.classBreakInfos;t=l&&l[0]&&l[0].symbol,n=l.length>1}else if("unique-value"===e.type){const l=e.uniqueValueInfos;t=l?.[0]?.symbol,n=null!=l&&l.length>1}return!t||C(t)?null:(t=t.clone(),(l||n)&&(t.type.includes("3d")?I(t):M(t)),t)}function C(e){if(e){if(n.isSymbol3D(e)){return!!e.symbolLayers&&e.symbolLayers.some((e=>e&&"fill"===e.type))}return e.type.includes("fill")}return!1}function I(e){"line-3d"===e.type?e.symbolLayers.forEach((e=>{e.material={color:h}})):e.symbolLayers.forEach((e=>{"icon"!==e.type||e.resource&&e.resource.href?e.material={color:b}:(e.material={color:p},e.outline={color:h,size:1.5})}))}function M(e){const l=u.isDarkTheme();if("cim"===e.type)o.applyCIMSymbolColor(e,new t(b));else if(e.type.includes("line"))e.color=h;else if(e.color=l?h:p,"simple-marker"===e.type)if(e.outline){const l=e.outline?.color?.toHex();"#ffffff"===l&&(e.outline.color=h)}else e.outline={color:h,width:1.5}}async function E(l,t,n,o){const s=(await new Promise(((l,t)=>e(["../../../renderers/visualVariables/support/visualVariableUtils"],l,t)))).getSizeRangeAtScale(l,n,o),r=s&&R(s);if(!s||!r)return;let a=r.map((e=>U(e,l,s)));a=i.round(a);for(let e=1;e<a.length-1;e++){const i=await _(l,t,a[e],a[e-1],n,o);i&&(a[e]=i[0],r[e]=i[1])}return a}function R(e){const l=e.minSize,t=e.maxSize,n=d,i=(t-l)/(n-1),o=[];for(let s=0;s<n;s++)o.push(l+i*s);return o}function U(e,l,t){const n=t.minSize,i=t.maxSize,o=l.minDataValue,s=l.maxDataValue;let r;if(e<=n)r=o;else if(e>=i)r=s;else{r=(e-n)/(i-n)*(s-o)+o}return r}async function _(e,l,t,n,o,s){const r=await O(e,l,t,o,s),a=await O(e,l,n,o,s),u=i.numDigits(t),c=u.fractional,m=S;let y=u.integer,f=null,p=null;t>0&&t<1&&(f=10**c,t*=f,y=i.numDigits(t).integer);for(let b=y-1;b>=0;b--){const n=10**b;let u=Math.floor(t/n)*n,c=Math.ceil(t/n)*n;null!=f&&(u/=f,c/=f);let y=(u+c)/2;[,y]=i.round([u,y,c],{indexes:[1]});const h=await O(e,l,u,o,s),S=await O(e,l,c,o,s),d=await O(e,l,y,o,s),g=i.percentChange(r,h,a,null),w=i.percentChange(r,S,a,null),v=i.percentChange(r,d,a,null);let z=g.previous<=m,V=w.previous<=m;if(z&&V&&(g.previous<=w.previous?(z=!0,V=!1):(V=!0,z=!1)),z?p=[u,h]:V?p=[c,S]:v.previous<=m&&(p=[y,d]),p)break}return p}async function O(l,t,n,i,o){const{getSize:s}=await new Promise(((l,t)=>e(["../../../renderers/visualVariables/support/visualVariableUtils"],l,t)));return s(l,n,{scale:i,view:o,shape:"simple-marker"===t.type?t.style:null})}function P(e,l){const t=e.clone();if(n.isSymbol3D(t))s.isVolumetricSymbol(t)||t.symbolLayers.forEach((e=>{"fill"!==e.type&&(e.size=l)}));else if(g(t))t.size=l;else if(w(t)){const e=t.width,n=t.height;t.height=l,t.width=l*(e/n)}else v(t)?t.width=l:z(t)&&t.font&&(t.font.size=l);return t}l.REAL_WORLD_MAX_SIZE=y,l.REAL_WORLD_MIN_SIZE=f,l.getRampStops=L,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})}));