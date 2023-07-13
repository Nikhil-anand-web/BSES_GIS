/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry/GeometryCursor","./enums"],(function(t,e,n,o){"use strict";const s=.03;let r=function(){function t(t=0,e=!1){}var s=t.prototype;return s.isEmpty=function(t){if(!t.nextPoint())return!0;let e,n,o,s;for(e=t.x,n=t.y;t.nextPoint();e=n,n=s)if(o=t.x,s=t.y,o!==e||s!==n)return t.seekPathStart(),!1;return t.seekPathStart(),!0},s.normalize=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);0!==e&&(t[0]/=e,t[1]/=e)},s.getLength=function(t,e,n,o){const s=n-t,r=o-e;return Math.sqrt(s*s+r*r)},s.getSegLength=function(t){const[[e,n],[o,s]]=t;return this.getLength(e,n,o,s)},s.getCoord2D=function(t,e,n,o,s){return[t+(n-t)*s,e+(o-e)*s]},s.getSegCoord2D=function(t,e){const[[n,o],[s,r]]=t;return this.getCoord2D(n,o,s,r,e)},s.getAngle=function(t,e,n,o,s){const r=n-t,i=o-e;return Math.atan2(i,r)},s.getAngleCS=function(t,e,n,o,s){const r=n-t,i=o-e,u=Math.sqrt(r*r+i*i);return u>0?[r/u,i/u]:[1,0]},s.getSegAngleCS=function(t,e){const[[n,o],[s,r]]=t;return this.getAngleCS(n,o,s,r,e)},s.cut=function(t,e,n,o,s,r){return[s<=0?[t,e]:this.getCoord2D(t,e,n,o,s),r>=1?[n,o]:this.getCoord2D(t,e,n,o,r)]},s.getSubCurve=function(t,e,o){const s=n.GeometryCursor.createEmptyOptimizedCIM("esriGeometryPolyline");return this.appendSubCurve(s,t,e,o)?s:null},s.appendSubCurve=function(t,e,n,o){t.startPath(),e.seekPathStart();let s=0,r=!0;if(!e.nextPoint())return!1;let i=e.x,u=e.y;for(;e.nextPoint();){const c=this.getLength(i,u,e.x,e.y);if(0!==c){if(r){if(s+c>n){const f=(n-s)/c;let l=1,h=!1;s+c>=o&&(l=(o-s)/c,h=!0);const a=this.cut(i,u,e.x,e.y,f,l);if(a&&t.pushPoints(a),h)break;r=!1}}else{if(s+c>o){const n=this.cut(i,u,e.x,e.y,0,(o-s)/c);n&&t.pushPoint(n[1]);break}t.pushXY(e.x,e.y)}s+=c,i=e.x,u=e.y}else i=e.x,u=e.y}return!0},s.getCIMPointAlong=function(t,e){if(!t.nextPoint())return null;let n,o,s,r,i=0;for(n=t.x,o=t.y;t.nextPoint();n=s,o=r){s=t.x,r=t.y;const u=this.getLength(n,o,s,r);if(0!==u){if(i+u>e){const t=(e-i)/u;return this.getCoord2D(n,o,s,r,t)}i+=u}}return null},s.offset=function(t,e,n,s,r){if(!t||t.length<2)return null;let i=0,u=t[i++],c=i;for(;i<t.length;){const e=t[i];e[0]===u[0]&&e[1]===u[1]||(i!==c&&(t[c]=t[i]),u=t[c++]),i++}const f=t[0][0]===t[c-1][0]&&t[0][1]===t[c-1][1];if(f&&--c,c<(f?3:2))return null;const l=[];u=f?t[c-1]:null;let h=t[0];for(let a=0;a<c;a++){const r=a===c-1?f?t[0]:null:t[a+1];if(u)if(r){const t=[r[0]-h[0],r[1]-h[1]];this.normalize(t);const i=[h[0]-u[0],h[1]-u[1]];this.normalize(i);const c=i[0]*t[1]-i[1]*t[0],f=i[0]*t[0]+i[1]*t[1];if(0===c&&1===f){h=r;continue}if(c>=0==e<=0){if(f<1){const n=[t[0]-i[0],t[1]-i[1]];this.normalize(n);const o=Math.sqrt((1+f)/2);if(o>1/s){const t=-Math.abs(e)/o;l.push([h[0]-n[0]*t,h[1]-n[1]*t])}}}else switch(n){case o.GeometricEffectOffsetMethod.Mitered:{const n=Math.sqrt((1+f)/2);if(n>0&&1/n<s){const o=[t[0]-i[0],t[1]-i[1]];this.normalize(o);const s=Math.abs(e)/n;l.push([h[0]-o[0]*s,h[1]-o[1]*s]);break}}case o.GeometricEffectOffsetMethod.Bevelled:l.push([h[0]+i[1]*e,h[1]-i[0]*e]),l.push([h[0]+t[1]*e,h[1]-t[0]*e]);break;case o.GeometricEffectOffsetMethod.Rounded:if(f<1){l.push([h[0]+i[1]*e,h[1]-i[0]*e]);const n=Math.floor(2.5*(1-f));if(n>0){const o=1/n;let s=o;for(let r=1;r<n;r++,s+=o){const n=[i[1]*(1-s)+t[1]*s,-i[0]*(1-s)-t[0]*s];this.normalize(n),l.push([h[0]+n[0]*e,h[1]+n[1]*e])}}l.push([h[0]+t[1]*e,h[1]-t[0]*e])}break;case o.GeometricEffectOffsetMethod.Square:default:if(c<0)l.push([h[0]+(i[1]+i[0])*e,h[1]+(i[1]-i[0])*e]),l.push([h[0]+(t[1]-t[0])*e,h[1]-(t[0]+t[1])*e]);else{const n=Math.sqrt((1+Math.abs(f))/2),o=[t[0]-i[0],t[1]-i[1]];this.normalize(o);const s=e/n;l.push([h[0]-o[0]*s,h[1]-o[1]*s])}}}else{const t=[h[0]-u[0],h[1]-u[1]];this.normalize(t),l.push([h[0]+t[1]*e,h[1]-t[0]*e])}else{const t=[r[0]-h[0],r[1]-h[1]];this.normalize(t),l.push([h[0]+t[1]*e,h[1]-t[0]*e])}u=h,h=r}return l.length<(f?3:2)?null:(f&&l.push([l[0][0],l[0][1]]),l)},e._createClass(t)}();t.CurveHelper=r,t.PIXEL_TOLERANCE=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));