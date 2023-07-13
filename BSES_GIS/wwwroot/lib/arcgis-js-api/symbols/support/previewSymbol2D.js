/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/Error","../../core/fontUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils","./textUtils","../../views/support/colorUtils"],(function(e,t,a,l,n,o,i,s,r,c){"use strict";const u="picture-fill",h="picture-marker",p="simple-fill",m="simple-line",d="simple-marker",f="text",y="Aa",g=i.SymbolSizeDefaults.size,w=i.SymbolSizeDefaults.maxSize,b=i.SymbolSizeDefaults.maxOutlineSize,v=i.SymbolSizeDefaults.lineWidth,x=225,k=document.createElement("canvas");function z(e,t){const a=k.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}const S=7.2/2.54,L=72/2.54;function C(e){if(0===e.length)return 0;if(e.length>2){const t=n.px2pt(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*S*t;case"cm":return a*L*t}}return parseFloat(e)}function M(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?n.pt2px(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?n.pt2px(t.height):null}}async function D(e,t){const a=t.fill,l=e.color;if("pattern"===a?.type&&l&&e.type!==u){const e=await o.getPatternUrlWithColor(a.src,l.toCss(!0));a.src=e,t.fill=a}}async function U(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await l.loadFont(e.font)}catch{}const{width:o}=M(n),i=/[\uE600-\uE6FF]/.test(t.shape.text);null!=o||i||(a[0]=z(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family}))}function A(e,t,a,l,o){if(null!=e.haloColor&&null!=e.haloSize){o.masking??(o.masking=a.map((()=>[])));const i=n.pt2px(e.haloSize);l[0]+=i,l[1]+=i,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*i,join:"round",cap:"round"}}]),o.masking.unshift([{shape:{type:"rect",x:0,y:0,width:l[0]+2*r.BACKGROUND_PADDING,height:l[1]+2*r.BACKGROUND_PADDING},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(l[0]+=2*r.BACKGROUND_PADDING,l[1]+=2*r.BACKGROUND_PADDING,a.unshift([{shape:{type:"rect",x:0,y:0,width:l[0],height:l[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:n.pt2px(e.borderLineSize)}}]),o.masking?.unshift([]))}function F(e,t){return e>t?"dark":"light"}function j(e,t){const a="number"==typeof t?.size?t?.size:null,l=null!=a?n.pt2px(a):null,s=null!=t?.maxSize?n.pt2px(t.maxSize):null,r=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,c=o.getFill(e);let x=o.getStroke(e);"dark"!==B(e,245)||t?.ignoreWhiteSymbols||(x={width:.75,...x,color:"#bdc3c7"});const k={shape:null,fill:c,stroke:x,offset:[0,0]};x?.width&&(x.width=Math.min(x.width,b));const S=x?.width||0;let L=null!=t?.size&&(null==t?.scale||t?.scale),D=0,U=0,A=!1;switch(e.type){case d:{const a=e.style,{width:o,height:i}=M(t),c=o===i&&null!=o?o:null!=l?l:Math.min(n.pt2px(e.size),s||w);switch(D=c,U=c,a){case"circle":k.shape={type:"circle",cx:0,cy:0,r:.5*c},L||(D+=S,U+=S);break;case"cross":k.shape={type:"path",path:[{command:"M",values:[0,.5*U]},{command:"L",values:[D,.5*U]},{command:"M",values:[.5*D,0]},{command:"L",values:[.5*D,U]}]};break;case"diamond":k.shape={type:"path",path:[{command:"M",values:[0,.5*U]},{command:"L",values:[.5*D,0]},{command:"L",values:[D,.5*U]},{command:"L",values:[.5*D,U]},{command:"Z",values:[]}]},L||(D+=S,U+=S);break;case"square":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[D,0]},{command:"L",values:[D,U]},{command:"L",values:[0,U]},{command:"Z",values:[]}]},L||(D+=S,U+=S),r&&(A=!0);break;case"triangle":k.shape={type:"path",path:[{command:"M",values:[.5*D,0]},{command:"L",values:[D,U]},{command:"L",values:[0,U]},{command:"Z",values:[]}]},L||(D+=S,U+=S),r&&(A=!0);break;case"x":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[D,U]},{command:"M",values:[D,0]},{command:"L",values:[0,U]}]},r&&(A=!0);break;case"path":k.shape={type:"path",path:e.path||""},L||(D+=S,U+=S),r&&(A=!0),L=!0}break}case m:{const{width:e,height:a}=M(t),n=null!=a?a:null!=l?l:S,o=null!=e?e:v;x&&(x.width=n),D=o,U=n;const i=k?.stroke?.cap||"butt",s="round"===i;L=!0,k.stroke&&(k.stroke.cap="butt"===i?"square":i),k.shape={type:"path",path:[{command:"M",values:[s?n/2:0,U/2]},{command:"L",values:[s?D-n/2:D,U/2]}]};break}case u:case p:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:n}=M(t);D=!e&&a!==n||null==a?null!=l?l:g:a,U=!e&&a!==n||null==n?D:n,L||(D+=S,U+=S),L=!0,k.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[D,0]},{command:"L",values:[D,U]},{command:"L",values:[0,U]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:i.shapes.fill[0];break}case h:{const a=Math.min(n.pt2px(e.width),s||w),o=Math.min(n.pt2px(e.height),s||w),{width:i,height:c}=M(t),u=i===c&&null!=i?i:null!=l?l:Math.max(a,o),h=a/o;D=h<=1?Math.ceil(u*h):u,U=h<=1?u:Math.ceil(u/h),k.shape={type:"image",x:-Math.round(D/2),y:-Math.round(U/2),width:D,height:U,src:e.url||""},r&&(A=!0);break}case f:{const a=e,o=t?.overrideText||a.text||y,i=a.font,{width:r,height:c}=M(t),u=null!=c?c:null!=l?l:Math.min(n.pt2px(i.size),s||w),h=z(o,{weight:i.weight,size:u,family:i.family}),p=/[\uE600-\uE6FF]/.test(o);D=r??(p?u:h),U=u;let m=.25*C((i?u:0).toString());p&&(m+=5),k.shape={type:"text",text:o,x:a.xoffset||0,y:a.yoffset||m,align:"middle",alignBaseline:a.verticalAlignment,decoration:i&&i.decoration,rotated:a.rotated,kerning:a.kerning},k.font=i&&{size:u,style:i.style,decoration:i.decoration,weight:i.weight,family:i.family};break}}return{shapeDescriptor:k,size:[D,U],renderOptions:{node:t?.node,scale:L,opacity:t?.opacity,rotation:r,useRotationSize:A,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}async function P(e,t){const{shapeDescriptor:l,size:n,renderOptions:o}=j(e,t);if(!l.shape)throw new a("symbolPreview: renderPreviewHTML2D","symbol not supported.");await D(e,l),await U(e,l,n,t);const r=[[l]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];r.unshift([{...l,offset:[-e,0],fill:i.adjustColorBrightness(l.fill,-.3)}]),r.push([{...l,offset:[e,0],fill:i.adjustColorBrightness(l.fill,.3)}]),n[0]+=2*e,o.scale=!1}return"text"===e.type&&A(e,l,r,n,o),s.renderSymbol(r,n,o)}function B(e,a=x){const l=o.getFill(e),n=o.getStroke(e),i=!l||"type"in l?null:new t(l),s=n?.color?new t(n?.color):null,r=i?F(c.getColorLuminance(i),a):null,u=s?F(c.getColorLuminance(s),a):null;return u?r?r===u?r:a>=x?"light":"dark":u:r}e.getContrastingBackgroundTheme=B,e.getRenderSymbolParameters=j,e.previewSymbol2D=P,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));