/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/triangle"],(function(t,e,n,s){"use strict";function c(t,n,c){if(!t||!n)return!1;const{size:a,data:r}=t;e.set(c,0,0,0),e.set(l,0,0,0);let u=0,f=0;for(let g=0;g<n.length-2;g+=3){const t=n[g]*a,h=n[g+1]*a,m=n[g+2]*a;e.set(o,r[t],r[t+1],r[t+2]),e.set(d,r[h],r[h+1],r[h+2]),e.set(i,r[m],r[m+1],r[m+2]);const p=s.areaPoints3d(o,d,i);p?(e.add(o,o,d),e.add(o,o,i),e.scale(o,o,1/3*p),e.add(c,c,o),u+=p):(e.add(l,l,o),e.add(l,l,d),e.add(l,l,i),f+=3)}return(0!==f||0!==u)&&(0!==u?(e.scale(c,c,1/u),!0):0!==f&&(e.scale(c,l,1/f),!0))}function a(t,n,s){if(!t||!n)return!1;const{size:c,data:a}=t;e.set(s,0,0,0);let r=-1,o=0;for(let e=0;e<n.length;e++){const t=n[e]*c;r!==t&&(s[0]+=a[t],s[1]+=a[t+1],s[2]+=a[t+2],o++),r=t}return o>1&&e.scale(s,s,1/o),o>0}function r(t,n,s,c){if(!t)return!1;e.set(c,0,0,0),e.set(l,0,0,0);let a=0,r=0;const{size:i,data:u}=t,f=n?n.length-1:u.length/i-1,g=f+(s?2:0);for(let h=0;h<g;h+=2){const t=h<f?h:f,s=h<f?h+1:0,g=(n?n[t]:t)*i,m=(n?n[s]:s)*i;o[0]=u[g],o[1]=u[g+1],o[2]=u[g+2],d[0]=u[m],d[1]=u[m+1],d[2]=u[m+2],e.scale(o,e.add(o,o,d),.5);const p=e.dist(o,d);p>0?(e.add(c,c,e.scale(o,o,p)),a+=p):0===a&&(e.add(l,l,o),r++)}return 0!==a?(e.scale(c,c,1/a),!0):0!==r&&(e.scale(c,l,1/r),!0)}const o=n.create(),d=n.create(),i=n.create(),l=n.create();t.computeAttachmentOriginLines=r,t.computeAttachmentOriginPoints=a,t.computeAttachmentOriginTriangles=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));