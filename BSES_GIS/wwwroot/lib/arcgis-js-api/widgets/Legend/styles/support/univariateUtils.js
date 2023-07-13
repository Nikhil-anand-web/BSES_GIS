/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils","../../../../libs/maquette/projection","../../../../libs/maquette/projector","../../../../symbols/support/symbolUtils","../../../support/widgetUtils","../../../support/jsxFactory"],(function(e,t,i,o,n,l,r){"use strict";const a=o.createProjector(),s=10,c=20,p=10,f=20,u={univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",colorRamp:"esri-legend__color-ramp"};function m(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1";return"vertical"===e?r.tsx("svg",{height:"4",width:"10"},r.tsx("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):r.tsx("svg",{height:"10",width:"10"},r.tsx("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function v(e,t="vertical"){const i=document.createElement("div");return i.style.height=`${c}px`,i.className=u.univariateAboveAndBelowSymbol,null!=e&&(i.style.opacity=e.toString()),a.append(i,m.bind(null,t)),i}function h(e,i,o="vertical",n){e.infos.forEach(((e,l)=>{if(n&&2===l)e.preview=v(i,o);else{const i=t.pt2px(e.size)+("horizontal"===o?f:p),n=e.preview,l="div"===n?.tagName.toLowerCase(),r=l?n:document.createElement("div");r.className=u.univariateAboveAndBelowSymbol,"horizontal"===o?r.style.width=`${i}px`:r.style.height=`${i}px`,!l&&n&&r.appendChild(n),e.preview=r}}))}function d(e,i="classic"){const o=e.infos;return"classic"===i?(t.pt2px(o[0].size)+p)/2:(t.pt2px(o[0].size)-t.pt2px(o[o.length-1].size))/2}function g(e,t){if(!e)return null;const i=e.infos.map((e=>e.color)),o=n.renderColorRampPreviewHTML("full"===t.type?i:"above"===t.type?i.slice(0,3):i.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList,ariaLabel:t.ariaLabel});return o.className=u.colorRamp,null!=t.opacity&&(o.style.opacity=t.opacity.toString()),o}function y(e,i,o,n="vertical"){let l=0;const r=e.infos,a=Math.floor(r.length/2),u="full"===i||"above"===i?0:a,m="full"===i||"below"===i?r.length-1:a;for(let v=u;v<=m;v++)if(o&&v===a)l+="horizontal"===n?s:c;else{l+=t.pt2px(r[v].size)+("horizontal"===n?f:p)}return Math.round(l)}function b(e,i,o,n="vertical"){const l=y(e,i,o,n),r=e.infos,a=Math.floor(r.length/2),u="full"===i||"above"===i?0:a,m="full"===i||"below"===i?r.length-1:a,v="full"===i?r[u].size+r[m].size:"above"===i?r[u].size:r[m].size,h=o?"vertical"===n?c:s:0,d="vertical"===n?p*("full"===i?2:1):f*("full"===i?2:1);return Math.round(l-(t.pt2px(v)/2+h/2+d/2))}function z(e,t,i="vertical"){const o=e.infos;let n=o.find((({type:e})=>"size-ramp"===e)),l=o.find((({type:e})=>"color-ramp"===e));return n&&(n={...n},n.infos=[...n.infos],h(n,t,i,!0)),l&&(l={...l},l.infos=[...l.infos]),"horizontal"===i&&(n?.infos.reverse(),l?.infos.reverse()),{sizeRampElement:n,colorRampElement:l}}function w(e,t="vertical"){const i=e.infos;let o=i.find((({type:e})=>"size-ramp"===e)),n=i.find((({type:e})=>"color-ramp"===e));return o&&(o={...o},o.infos=[...o.infos],h(o,null,t,!1)),n&&(n={...n},n.infos=[...n.infos]),"horizontal"===t&&(o?.infos.reverse(),n?.infos.reverse()),{sizeRampElement:o,colorRampElement:n}}e.getUnivariateAboveAndBelowRampElements=z,e.getUnivariateColorRampMargin=d,e.getUnivariateColorRampPreview=g,e.getUnivariateColorRampSize=b,e.getUnivariateColorSizeRampElements=w,e.getUnivariateSizeRampSize=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));