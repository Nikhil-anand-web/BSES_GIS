/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../Color","../../../intl/date","../../../intl/number","../../../renderers/support/utils","../../../renderers/visualVariables/SizeVariable"],(function(t,e,n,i,a,o){"use strict";function r(t){return n.formatDate(new Date(t),a.timelineDateFormatOptions)}function s(t){const e=2,n=Math.floor(Math.log10(Math.abs(t)))+1,a=n<4||n>6?4:n,o=1e6,r=Math.abs(t)>=o?"compact":"standard";return i.formatNumber(t,{notation:r,minimumSignificantDigits:e,maximumSignificantDigits:a})}function u(t,e,n){if(null==e||null==t)return[];const i=[];for(let a=-1*n;a<=n;a++)0!==a&&i.push(e+a*t);return i}function l(t){const{max:e,min:n,padding:i,pathHeight:a,pathWidth:o,stops:r}=t,s=e-n;let u,l=`M0 0 L${o} 0 `;const h=3===r.length?[r[0],r[1],r[2]]:[r[0],r[2],r[4]],m=Math.min.apply(Math,h.map((t=>t.size))),c=Math.max(Math.abs(h[0].size-h[1].size),Math.abs(h[2].size-h[1].size));return h.reverse(),h.forEach((({size:t,value:e},r)=>{const h=Math.round((t-m)/c*100)/100,f=Math.round(a-(e-n)/s*a);u=h*o,0===u&&(u=i*o),0===r&&(l+=`L${u} 0 `),l+=`L${u} ${f} `})),l+=`L${u} ${a} L0 ${a} L0 0 Z`,l}function h(t){const{bottomValue:e,bottomWidth:n,max:i,min:a,pathHeight:o,pathWidth:r,topValue:s,topWidth:u}=t,l=u*r,h=n*r,m=i-a,c=Math.round(o-(e-a)/m*o);return`M${l} 0 L${l} ${Math.round(o-(s-a)/m*o)} L${h} ${c} L${h} ${o} L0 ${o} L0 0 Z`}function m(t){let e=t.maxSize,n=t.minSize;return e instanceof o&&(e=e.stops[0].size),n instanceof o&&(n=n.stops[0].size),[e,n]}function c(t,e,n){const i=n.length-1;if(i<0)return[];const a=n[0],o=n[i]-a,r=e-t,s=[];for(let u=1;u<i;u++){const e=(n[u]-a)/o*r+t;s.push({index:u,value:e})}return s.unshift({index:0,value:t}),s.push({index:i,value:e}),s}function f(t){return t instanceof e?t.toCss(!0):e.fromString(t??"").toCss(!0)}t.formatDateLabel=r,t.formatNumberLabel=s,t.getDeviationValues=u,t.getDynamicPathForSizeStops=l,t.getFillFromColor=f,t.getPathForSizeStops=h,t.getSizesFromVariable=m,t.getStopChanges=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));