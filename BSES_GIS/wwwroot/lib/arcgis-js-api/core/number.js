/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./string","../intl/locale"],(function(e,t,n){"use strict";const r={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function s(e=n.getLocale()){let t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[s,l,o="#,##0.###"]=r[e];return{decimal:s,group:l,pattern:o}}function l(e,t){const n=s((t={...t}).locale);t.customs=n;const r=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:i(e,r,t)}const o=/[#0,]*[#0](?:\.0*#*)?/;function i(e,t,n){const r=(n=n||{}).customs.group,s=n.customs.decimal,l=t.split(";"),i=l[0];if((t=l[e<0?1:0]||"-"+i).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const c=o,p=i.match(c);if(!p)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(c,a(e,p[0],{decimal:s,group:r,places:n.places,round:n.round}))}function a(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let l=n.places;s?l=n.places.substring(s+1):+l>=0||(l=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),i=o[1]||"";if(r[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;+e>i.length&&(o[1]=i.padEnd(Number(e),"0")),+l<i.length&&(o[1]=i.substr(0,Number(l)))}else o[1]&&o.pop();const a=r[0].replace(",","");let c=a.indexOf("0");-1!==c&&(c=a.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),a.includes("#")||(o[0]=o[0].substr(o[0].length-c)));let p,u,g=r[0].lastIndexOf(",");if(-1!==g){p=r[0].length-g-1;const e=r[0].substr(0,g);g=e.lastIndexOf(","),-1!==g&&(u=e.length-g-1)}const d=[];for(let f=o[0];f;){const e=f.length-p;d.push(e>0?f.substr(e):f),f=e>0?f.slice(0,e):"",u&&(p=u,u=void 0)}return o[0]=d.reverse().join(n.group||","),o.join(n.decimal||".")}function c(e){return p(e).regexp}function p(e){const n=s((e=e||{}).locale),r=e.pattern||n.pattern,l=n.group,i=n.decimal;let a=1;if(r.includes("%"))a/=100;else if(r.includes("‰"))a/=1e3;else if(r.includes("¤"))throw new Error("currency notation not supported");const c=r.split(";");1===c.length&&c.push("-"+c[0]);const p=f(c,(n=>(n="(?:"+t.escapeRegExpString(n,".")+")").replace(o,(t=>{const n={signed:!1,separator:e.strict?l:[l,""],fractional:e.fractional,decimal:i,exponent:!1},r=t.split(".");let s=e.places;1===r.length&&1!==a&&(r[1]="###"),1===r.length||0===s?n.fractional=!1:(void 0===s&&(s=e.pattern?r[1].lastIndexOf("0")+1:1/0),s&&null==e.fractional&&(n.fractional=!0),!e.places&&+s<r[1].length&&(s+=","+r[1].length),n.places=s);const o=r[0].split(",");return o.length>1&&(n.groupSize=o.pop().length,o.length>1&&(n.groupSize2=o.pop().length)),"("+g(n)+")"}))),!0);return{regexp:p.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:l,decimal:i,factor:a}}function u(e,t){const n=p(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],n.factor*=-1}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function g(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=f(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+f(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}function d(e){"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="";return f(e.signed,(e=>e?"[-+]":""),!0)+f(e.separator,(n=>{if(!n)return"(?:\\d+)";" "===(n=t.escapeRegExpString(n))?n="\\s":" "===n&&(n="\\s\\xa0");const r=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+n+"]\\d{"+s+"})*["+n+"]\\d{"+r+"})";return r-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*)"}),!0)}const f=(e,t,n)=>{if(!(e instanceof Array))return t(e);const r=[];for(let s=0;s<e.length;s++)r.push(t(e[s]));return h(r.join("|"),Boolean(n))},h=(e,t)=>"("+(t?"?:":"")+e+")";e._parseInfo=p,e.format=l,e.getCustoms=s,e.parse=u,e.regexp=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
