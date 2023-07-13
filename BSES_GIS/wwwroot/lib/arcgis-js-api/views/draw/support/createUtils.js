/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../core/arrayUtils","../../../core/lang","../../../core/unitUtils","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/Circle","../../../geometry/geometryEngine","../../../geometry/support/coordsUtils","../../../geometry/support/spatialReferenceUtils","./surfaceCoordinateSystems","../../../geometry/Point","../../../geometry/Multipoint","../../../geometry/Polyline","../../../geometry/Polygon"],(function(e,t,n,a,o,r,l,i,c,s,u,y,f,m,p,x){"use strict";function h(e,t){const n=new f({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(n.z=e[2]),n}function M(e,t){return new m({points:e,spatialReference:t})}function P(e,t,n){const a=new p({paths:e,spatialReference:t});return n&&s.unnormalizeGeometryOnDatelineCrossing(a),a}function g(e,t,o,r=!0){const l=a.clone(e);l.forEach((e=>{const t=e[0],a=e[e.length-1];n.equals(t,a)&&1!==e.length||e.push(e[0])}));let i=new x({rings:l,spatialReference:t});return i.rings.forEach((e=>{s.isClockwise(e,!1,!1)||e.reverse()})),o&&s.unnormalizeGeometryOnDatelineCrossing(i),r&&i.isSelfIntersecting&&u.isValid(t)&&(i=c.simplify(i)),i}function S(e,t,a){const o=t.mapToLocalMultiple(e),r=[],l={x:o[0].x,y:o[0].y},i={x:o[1].x,y:o[1].y},c=Math.round(i.x-l.x),s=Math.round(i.y-l.y),u=Math.max(Math.abs(c),Math.abs(s));if(a){const e={x:l.x+u,y:l.y+u},t={x:l.x-u,y:l.y-u};r.push(y.makeSurfacePoint(e.x,t.y),y.makeSurfacePoint(t.x,t.y),y.makeSurfacePoint(t.x,e.y),y.makeSurfacePoint(e.x,e.y))}else{const e={x:c>0?l.x+u:l.x-u,y:s>0?l.y+u:l.y-u};r.push(y.makeSurfacePoint(l.x,l.y),y.makeSurfacePoint(e.x,l.y),y.makeSurfacePoint(e.x,e.y),y.makeSurfacePoint(l.x,e.y))}return d(g([r.map((e=>t.localToMap(e))).filter(n.isSome)],t.spatialReference,t.doUnnormalization,!0),r,t)}function k(e,t,a){let o=t.mapToLocalMultiple(e);if(1===o.length){const e=48,t=o[0];o=[y.makeSurfacePoint(t.x-e,t.y+e),y.makeSurfacePoint(t.x+e,t.y-e),y.makeSurfacePoint(t.x+e,t.y-e),y.makeSurfacePoint(t.x-e,t.y+e)]}const r=[],l={x:o[0].x,y:o[0].y},i={x:o[1].x,y:o[1].y};if(a){const e=Math.round(i.x-l.x),t=Math.round(i.y-l.y);r.push(y.makeSurfacePoint(l.x-e,l.y-t),y.makeSurfacePoint(i.x,l.y-t),y.makeSurfacePoint(i.x,i.y),y.makeSurfacePoint(l.x-e,i.y))}else r.push(y.makeSurfacePoint(l.x,l.y),y.makeSurfacePoint(i.x,l.y),y.makeSurfacePoint(i.x,i.y),y.makeSurfacePoint(l.x,i.y));return d(g([r.map((e=>t.localToMap(e))).filter(n.isSome)],t.spatialReference,t.doUnnormalization,!0),r,t)}function d(e,t,n){const a=R(t[3],t[2],n),o=R(t[1],t[2],n),r=R(t[0],t[1],n),l=R(t[0],t[3],n);return{geometry:e,midpoints:null!=a&&null!=o&&null!=r&&null!=l?{top:a,right:o,bottom:r,left:l}:null}}function R(e,t,n){b[0]=e.x,b[1]=e.y,b[2]=0,U[0]=t.x,U[1]=t.y,U[2]=0,r.lerp(b,b,U,.5),T.x=b[0],T.y=U[1],T.z=U[2];const a=n.localToMap(T);return null!=a?h(a,n.spatialReference):null}const T=y.makeSurfacePoint(0,0,0),b=l.create(),U=l.create();function z(e,t,n,a){const r=t.mapToLocalMultiple(e);let l=null,f=null;if(n)l=r[0],f=r[1];else{const e=r[0],t=r[1],n=Math.round(t.x-e.x),a=Math.round(t.y-e.y),o=Math.max(Math.abs(n),Math.abs(a));l=y.makeSurfacePoint(n>0?e.x+o/2:e.x-o/2,a>0?e.y+o/2:e.y-o/2),f=y.makeSurfacePoint(Math.abs(n)>Math.abs(a)?l.x-o/2:l.x,Math.abs(n)>Math.abs(a)?l.y:l.y-o/2)}const m=t.localToMap(l),p=t.localToMap(f);if(null==m||null==p)return null;t.doUnnormalization&&s.unnormalizeVerticesOnDatelineCrossing([[m,p]],t.spatialReference);const x=h(m,t.spatialReference),M=h(p,t.spatialReference),P=o.getMetersPerUnitForSR(t.spatialReference);let S=0;if(u.isValid(t.spatialReference))S=P*c.distance(x,M,null);else{const e=l.x-f.x,t=l.y-f.y;S=P*Math.sqrt(e*e+t*t)*(a||1)}const k=new i({center:x,radius:S,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:g(k.rings,k.spatialReference,!1),center:x,edge:M}}function C(e,t,a){const o=t.mapToLocalMultiple(e),r=o[0],l=o[1],i=Math.round(l.x-r.x),c=Math.round(l.y-r.y),s=y.makeSurfacePoint(a?r.x:r.x+i/2,a?r.y:r.y+c/2),u=a?i:i/2,f=a?c:c/2,m=60,p=[],x=2*Math.PI/m;function M(e){const t=Math.cos(e),n=Math.sin(e);return y.makeSurfacePoint(u*t+s.x,f*n+s.y)}for(let n=0;n<m;n++)p.push(M(n*x));p.push(p[0]);const{spatialReference:P,doUnnormalization:S}=t,k=g([p.map((e=>t.localToMap(e))).filter(n.isSome)],P,S,!1),d=t.localToMap(M(Math.PI/2)),R=t.localToMap(M(0)),T=t.localToMap(M(-Math.PI/2)),b=t.localToMap(M(Math.PI));return{geometry:k,midpoints:null!=d&&null!=R&&null!=T&&null!=b?{top:h(d,P),right:h(R,P),bottom:h(T,P),left:h(b,P)}:null}}e.createCircle=z,e.createEllipse=C,e.createMultipoint=M,e.createPoint=h,e.createPolygon=g,e.createPolyline=P,e.createRectangle=k,e.createSquare=S,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));