/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/colorUtils","../../core/jsonMap"],(function(o,r,t,l){"use strict";const e=["random","ndvi","ndvi2","ndvi3","elevation","gray","hillshade"],i=[{id:"aspect",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,61]},{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],toColor:[0,181,255]},{fromColor:[0,181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"black-to-white",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blue-bright",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blue-light-to-dark",fromColor:[211,229,232],toColor:[46,100,140]},{id:"blue-green-bright",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blue-green-light-to-dark",fromColor:[216,242,237],toColor:[21,79,74]},{id:"brown-light-to-dark",fromColor:[240,236,170],toColor:[102,72,48]},{id:"brown-to-blue-green-diverging-right",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brown-to-blue-green-diverging-dark",type:"multipart",colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficient-bias",fromColor:[214,214,255],toColor:[0,57,148]},{id:"cold-to-hot-diverging",type:"multipart",colorRamps:[{fromColor:[69,117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"condition-number",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyan-to-purple",type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyan-light-to-blue-dark",type:"multipart",colorRamps:[{fromColor:[182,237,240],toColor:[31,131,224]},{fromColor:[31,131,224],toColor:[9,9,145]}]},{id:"distance",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,171,171]},{fromColor:[171,171,171],toColor:[255,252,255]}]},{id:"elevation2",type:"multipart",colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors",fromColor:[255,235,214],toColor:[196,10,10]},{id:"gray-light-to-dark",fromColor:[219,219,219],toColor:[69,69,69]},{id:"green-bright",fromColor:[204,255,204],toColor:[14,204,14]},{id:"green-light-to-dark",fromColor:[220,245,233],toColor:[34,102,51]},{id:"green-to-blue",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,242,242],toColor:[2,33,227]}]},{id:"orange-bright",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orange-light-to-dark",fromColor:[250,233,212],toColor:[171,65,36]},{id:"partial-spectrum",type:"multipart",colorRamps:[{fromColor:[242,241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partial-spectrum-1-diverging",type:"multipart",colorRamps:[{fromColor:[135,38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],toColor:[39,32,122]}]},{id:"partial-spectrum-2-diverging",type:"multipart",colorRamps:[{fromColor:[115,77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pink-to-yellow-green-diverging-bright",type:"multipart",colorRamps:[{fromColor:[158,30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pink-to-yellow-green-diverging-dark",type:"multipart",colorRamps:[{fromColor:[97,47,73],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[22,59,15]}]},{id:"precipitation",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,143],toColor:[11,44,122]}]},{id:"prediction",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,250,100],toColor:[232,16,20]}]},{id:"purple-bright",fromColor:[255,204,255],toColor:[199,0,199]},{id:"purple-to-green-diverging-bright",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purple-to-green-diverging-dark",type:"multipart",colorRamps:[{fromColor:[67,14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purple-blue-bright",fromColor:[223,184,230],toColor:[112,12,242]},{id:"purple-blue-light-to-dark",fromColor:[229,213,242],toColor:[93,44,112]},{id:"purple-red-bright",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purple-red-light-to-dark",fromColor:[250,215,246],toColor:[143,17,57]},{id:"red-bright",fromColor:[255,204,204],toColor:[219,0,0]},{id:"red-light-to-dark",fromColor:[255,224,224],toColor:[143,10,10]},{id:"red-to-blue-diverging-bright",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},{id:"red-to-blue-diverging-dark",type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"red-to-green",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,245,0]}]},{id:"red-to-green-diverging-bright",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[54,145,33]}]},{id:"red-to-green-diverging-dark",type:"multipart",colorRamps:[{fromColor:[97,21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrum-full-bright",type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]},{id:"spectrum-full-dark",type:"multipart",colorRamps:[{fromColor:[153,0,0],toColor:[153,153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrum-full-light",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface",type:"multipart",colorRamps:[{fromColor:[112,153,89],toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},{fromColor:[242,206,133],toColor:[194,140,124]},{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,128,0],toColor:[128,0,0]}]},{id:"white-to-black",fromColor:[255,255,255],toColor:[0,0,0]},{id:"yellow-to-dark-red",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellow-to-green-to-dark-blue",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellow-to-red",fromColor:[245,245,0],toColor:[255,0,0]},{id:"yellow-green-bright",fromColor:[236,252,204],toColor:[157,204,16]},{id:"yellow-green-light-to-dark",fromColor:[215,240,175],toColor:[96,107,45]}],n=new l.JSONMap({Aspect:"aspect","Black to White":"black-to-white","Blue Bright":"blue-bright","Blue Light to Dark":"blue-light-to-dark","Blue-Green Bright":"blue-green-bright","Blue-Green Light to Dark":"blue-green-light-to-dark","Brown Light to Dark":"brown-light-to-dark","Brown to Blue Green Diverging, Bright":"brown-to-blue-green-diverging-right","Brown to Blue Green Diverging, Dark":"brown-to-blue-green-diverging-dark","Coefficient Bias":"coefficient-bias","Cold to Hot Diverging":"cold-to-hot-diverging","Condition Number":"condition-number","Cyan to Purple":"cyan-to-purple","Cyan-Light to Blue-Dark":"cyan-light-to-blue-dark",Distance:"distance","Elevation #1":"elevation1","Elevation #2":"elevation2",Errors:"errors","Gray Light to Dark":"gray-light-to-dark","Green Bright":"green-bright","Green Light to Dark":"green-light-to-dark","Green to Blue":"green-to-blue","Orange Bright":"orange-bright","Orange Light to Dark":"orange-light-to-dark","Partial Spectrum":"partial-spectrum","Partial Spectrum 1 Diverging":"partial-spectrum-1-diverging","Partial Spectrum 2 Diverging":"partial-spectrum-2-diverging","Pink to YellowGreen Diverging, Bright":"pink-to-yellow-green-diverging-bright","Pink to YellowGreen Diverging, Dark":"pink-to-yellow-green-diverging-dark",Precipitation:"precipitation",Prediction:"prediction","Purple Bright":"purple-bright","Purple to Green Diverging, Bright":"purple-to-green-diverging-bright","Purple to Green Diverging, Dark":"purple-to-green-diverging-dark","Purple-Blue Bright":"purple-blue-bright","Purple-Blue Light to Dark":"purple-blue-light-to-dark","Purple-Red Bright":"purple-red-bright","Purple-Red Light to Dark":"purple-red-light-to-dark","Red Bright":"red-bright","Red Light to Dark":"red-light-to-dark","Red to Blue Diverging, Bright":"red-to-blue-diverging-bright","Red to Blue Diverging, Dark":"red-to-blue-diverging-dark","Red to Green":"red-to-green","Red to Green Diverging, Bright":"red-to-green-diverging-bright","Red to Green Diverging, Dark":"red-to-green-diverging-dark",Slope:"slope","Spectrum-Full Bright":"spectrum-full-bright","Spectrum-Full Dark":"spectrum-full-dark","Spectrum-Full Light":"spectrum-full-light",Surface:"surface",Temperature:"temperature","White to Black":"white-to-black","Yellow to Dark Red":"yellow-to-dark-red","Yellow to Green to Dark Blue":"yellow-to-green-to-dark-blue","Yellow to Red":"yellow-to-red","Yellow-Green Bright":"yellow-green-bright","Yellow-Green Light to Dark":"yellow-green-light-to-dark"});function C(o,r){if(!o||!r||o.length!==r.length)return!1;for(let t=0;t<o.length;t++)if(o[t]>r[t]+2||o[t]<r[t]-2)return!1;return!0}function a(o){const r=o.clone();return r.fromColor=o.toColor,r.toColor=o.fromColor,r.algorithm=o.algorithm,r}function m(o){if("multipart"===o.type){const r=o.clone();return r.colorRamps?.length?(r.colorRamps=r.colorRamps.reverse().map((o=>a(o))),r):r}return a(o)}function g(o,t){if(!o)return;const l=t??i;let e=null;return"algorithmic"===o.type?l.some((r=>{if(C(o.fromColor.toRgb(),r.fromColor)&&C(o.toColor.toRgb(),r.toColor))return e=r.id,!0})):"multipart"===o.type&&l.some((t=>{const l=o.colorRamps,i=t.colorRamps;if(l&&i&&l.length===i.length&&!i.some(((o,t)=>{if(!C(l[t].fromColor.toRgb(),new r(o.fromColor).toRgb())||!C(l[t].toColor.toRgb(),new r(o.toColor).toRgb()))return!0}))){if(e)return!0;e=t.id}})),e}function p(o,r,t=!1){if(!o)return;let l=g(o,r);return null!=l||t||(l=g(o=m(o),r)),l}function u(o,r=!1){const t="string"==typeof o?o:p(o,void 0,r);return t?n.toJSON(t):null}function f(o,r="esriCIELabAlgorithm"){const t=i.find((({id:r})=>r===o));return t?t.colorRamps?{type:"multipart",colorRamps:t.colorRamps.map((o=>({type:"algorithmic",algorithm:r,fromColor:[...o.fromColor],toColor:[...o.toColor]})))}:{type:"algorithmic",algorithm:r,fromColor:[...t.fromColor],toColor:[...t.toColor]}:null}function s(o){const r=(o=o||{}).numColors||256,t=o.distanceOffset||0,l=null!=o.isCustomInterval?o.isCustomInterval:null!==o.distanceInterval&&o.distanceInterval!==1/(r-1),e=o.distanceInterval||1/(r-1);return{...o,numColors:r,distanceOffset:t,interpolateAlpha:!!o.interpolateAlpha,distanceInterval:e,isCustomInterval:l,weights:o.weights}}function c(o,r,t){const{numColors:l,distanceOffset:e,distanceInterval:i,isCustomInterval:n}=t,C=0===o.s,a=0===r.s;let m=o.h,g=r.h;C&&!a?m=g:a&&!C&&(r={...r,h:m},g=m);let p,u=Math.abs(g-m);const f=360;u<f/2?p=(g-m)*i:(u=f-u,p=m>g?u*i:-u*i);const s=(r.s-o.s)*i,c=(r.v-o.v)*i;let{s:d,v:h}=o,b=m;if(e){const o=e/i;b=(b+o*p+f)%f,d+=o*s,h+=o*c}const v=[];for(let R=0;R<l-1;R++)v.push({h:b,s:d,v:h}),b=(b+p+f)%f,d+=s,h+=c;return v.push(n?{h:b,s:d,v:h}:r),v}function d(o,r,t){const{numColors:l,distanceOffset:e,distanceInterval:i,isCustomInterval:n}=t;let{l:C,a,b:m}=o;const g=(r.l-C)*i,p=(r.a-a)*i,u=(r.b-m)*i,f=[];if(e){const o=e/i;C+=o*g,a+=o*p,m+=o*u}for(let s=0;s<l-1;s++)f.push({l:C,a,b:m}),C+=g,a+=p,m+=u;return f.push(n?{l:C,a,b:m}:r),f}function h(o,r,t){const{numColors:l,distanceOffset:e,distanceInterval:i,isCustomInterval:n}=t,C=o.h,a=r.h,m=2*Math.PI;let g;if(C<=a){const o=a-C,r=a-C-m;g=Math.abs(r)<Math.abs(o)?r:o}else{const o=a+m-C,r=a-C;g=Math.abs(r)<Math.abs(o)?r:o}const p=g*i,u=(r.l-o.l)*i,f=(r.c-o.c)*i;let{l:s,c,h:d}=o;if(e){const o=e/i;s+=o*u,c+=o*f,d=(d+o*p+m)%m}const h=[];for(let b=0;b<l-1;b++)h.push({l:s,c,h:d}),s+=u,c+=f,d=(d+p+m)%m;return h.push(n?{l:s,c,h:d}:r),h}function b(o,r){let{fromColor:l,toColor:e}=o;l=[...l],e=[...e],3===l.length&&(l=l.concat([255])),3===e.length&&(e=e.concat([255]));const i=o.algorithm||"esriCIELabAlgorithm",n=s(r),{numColors:C,distanceOffset:a,isCustomInterval:m,interpolateAlpha:g}=n;if(1===C&&0===a)return[l];if(2===C&&0===a&&!m)return[l,e];const p={r:l[0],g:l[1],b:l[2]},u={r:e[0],g:e[1],b:e[2]},f="esriCIELabAlgorithm"===i?d(t.toLAB(p),t.toLAB(u),n):"esriHSVAlgorithm"===i?c(t.toHSV(p),t.toHSV(u),n):h(t.toLCH(p),t.toLCH(u),n),b=[],v=l[3]??255,R=((e[3]??255)-v)/(C-1);for(let s=0;s<C;s++){const{r:o,g:r,b:l}=t.toRGB(f[s]),e=g?Math.round(v+R*s):255;b.push([o,r,l,e])}return b}function v(o,r){const{numColors:t,interpolateAlpha:l}=s(r);let e=r?.weights;const{colorRamps:i}=o;if(e){const o=e.reduce(((o,r)=>o+r));e=e.map((r=>r/o))}else{e=[];for(let o=0;o<i.length;o++)e[o]=1/i.length}const n=[];let C=0,a=0;const m=1/(t-1);let g=!1;for(let u=0;u<i.length;u++){let o=g?0:C*m-a,r=u===i.length-1?t-1-C:(e[u]-o)/m;if(g=Math.ceil(r)===r,r=Math.ceil(r),0===r)continue;o/=e[u];const p=b(i[u],{numColors:r,interpolateAlpha:l,distanceOffset:o,distanceInterval:m/e[u]});C+=p.length,n.push(...p),a+=e[u]}const p=[...i[i.length-1].toColor];return 3===p.length&&p.push(255),n.push(p),n}function R(o,r){const t="toJSON"in o?o.toJSON():o;return"multipart"===t.type?v(t,r):b(t,r)}function y(o,r){const t=R(o,r),l=r?.interpolateAlpha;return t.forEach(((o,r)=>{o.unshift(r),l||o.pop()})),t}function k(o){const r=t.toHSV(o);return{type:"HsvColor",Hue:r.h,Saturation:r.s,Value:r.v,AlphaValue:255}}function w(o){const r=o.toJSON();return{Algorithm:r?.Algorithm||"esriHSVAlgorithm",type:"AlgorithmicColorRamp",FromColor:k(o.fromColor),ToColor:k(o.toColor)}}function B(o){const r=u(o);if(!r)return null;if("algorithmic"===o.type)return{...w(o),Name:r};if(o.colorRamps){const t=o.colorRamps.map(w);return{type:"MultiPartColorRamp",NumColorRamps:t.length,ArrayOfColorRamp:t,Name:r}}return null}function D(o){const r=o.reverse().map((o=>{const r=o.toString(16);return r.length<2?"0"+r:r}));return 4294967295&Number.parseInt(r.join(""),16)}o.PREDEFINED_JSON_COLOR_RAMPS=i,o.colorRampDict=n,o.convertColorRampToColormap=y,o.convertColorRampToColors=R,o.convertRGBATo32Bit=D,o.getColorRampId=p,o.getColorRampJSON=f,o.getColorRampName=u,o.getRFxArgColorRampValue=B,o.rasterColormapNames=e,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
