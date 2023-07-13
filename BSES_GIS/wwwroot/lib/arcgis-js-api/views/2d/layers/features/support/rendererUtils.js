/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/Error","../../../../../core/has","../../../../../core/Logger","../../../../../core/screenUtils","../../../../webgl/capabilities"],(function(e,r,t,o,s,l){"use strict";const a=8,i=a-2,n=o.getLogger("esri.views.2d.layers.features.support.rendererUtils"),u=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const r=e.clone(),t=r.visualVariables.map((e=>c(e)?f(e):e));return r.visualVariables=t,r};function p(e){return e.map((e=>c(e)?f(e.clone()):e))}function c(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function f(e){return e.stops=y(e.type,e.stops??[]),e}function b(e,r,t){return(1-t)*e+t*r}function g(e,r){const[t,...o]=r,l=o.pop(),a=o[0].value,n=o[o.length-1].value,u=(n-a)/i,p=[];for(let i=a;i<n;i+=u){let t=0;for(;i>=o[t].value;)t++;const l=o[t],a=r[t-1],n=i-a.value,u=l.value===a.value?1:n/(l.value-a.value);if("color"===e){const e=o[t],s=r[t-1],l=e.color.clone();l.r=b(s.color.r,l.r,u),l.g=b(s.color.g,l.g,u),l.b=b(s.color.b,l.b,u),l.a=b(s.color.a,l.a,u),p.push({value:i,color:l,label:e.label})}else if("size"===e){const e=o[t],l=r[t-1],a=s.toPt(e.size),n=b(s.toPt(l.size),a,u);p.push({value:i,size:n,label:e.label})}else{const e=o[t],s=b(r[t-1].opacity,e.opacity,u);p.push({value:i,opacity:s,label:e.label})}}return[t,...p,l]}function d(e){const[r,...t]=e,o=t.pop();for(;t.length>i;){let e=0,r=0;for(let o=1;o<t.length;o++){const s=t[o-1],l=t[o],a=Math.abs(l.value-s.value);a>r&&(r=a,e=o)}t.splice(e,1)}return[r,...t,o]}function y(e,r){return r.length<=a?r:(n.warn(`Found ${r.length} Visual Variable stops, but MapView only supports ${a}. Displayed stops will be simplified.`),r.length>2*a?g(e,r):d(r))}function m(){if(t("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:r,supportsColorBufferFloat:o,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:a}=l.getWebGLCapabilities("2d");return e&&o&&s||r&&a?"symbol":t("heatmap-allow-raster-fallback")?"raster":"none"}function v(e){if(!e)return!0;switch(e.type){case"dot-density":if(!l.getWebGLCapabilities("2d").supportsTextureFloat)return n.error(new r("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const e=m();if("none"===e||"raster"===e&&!t("heatmap-force-raster")){const t=l.getWebGLCapabilities("2d"),o=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((e=>!t[e])).join(", ");if("none"===e)return n.errorOnce(new r("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${o}`)),!1;"raster"===e&&n.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${o}. Feature support may be limited.`)}break}}return!0}e.getSupportedHeatmapRenderer=m,e.isRendererSupported=v,e.simplifyVVRenderer=u,e.simplifyVisualVariables=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
