/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../geometryCursorCollectUtils","./coordsUtils"],(function(t,n,e){"use strict";function r(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function o(t){return t?l(t.rings,t.hasZ??!1):null}function l(t,n){if(!t||!t.length)return null;const e=[],r=[],o=n?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let l=0,u=t.length;l<u;l++){const e=i(t[l],n,o);e&&r.push(e)}if(r.sort(((t,e)=>{let r=t[2]-e[2];return 0===r&&n&&(r=t[4]-e[4]),r})),r.length&&(e[0]=r[0][0],e[1]=r[0][1],n&&(e[2]=r[0][3]),(e[0]<o[0]||e[0]>o[1]||e[1]<o[2]||e[1]>o[3]||n&&(e[2]<o[4]||e[2]>o[5]))&&(e.length=0)),!e.length){const r=t[0]&&t[0].length?u(t[0],n):null;if(!r)return null;e[0]=r[0],e[1]=r[1],n&&r.length>2&&(e[2]=r[2])}return e}function i(t,n,e){let r=0,o=0,l=0,i=0,u=0;const s=t.length?t[0][0]:0,I=t.length?t[0][1]:0,g=t.length&&n?t[0][2]:0;for(let h=0;h<t.length;h++){const c=t[h],f=t[(h+1)%t.length],[N,x,m]=c,a=N-s,P=x-I,[T,d,y]=f,E=T-s,C=d-I,b=a*C-E*P;if(i+=b,r+=(a+E)*b,o+=(P+C)*b,n&&c.length>2&&f.length>2){const t=m-g,n=y-g,e=a*n-E*t;l+=(t+n)*e,u+=e}N<e[0]&&(e[0]=N),N>e[1]&&(e[1]=N),x<e[2]&&(e[2]=x),x>e[3]&&(e[3]=x),n&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(i>0&&(i*=-1),u>0&&(u*=-1),!i)return null;i*=.5,u*=.5;const c=[r/(6*i)+s,o/(6*i)+I,i];return n&&(e[4]===e[5]||0===u?(c[3]=(e[4]+e[5])/2,c[4]=0):(c[3]=l/(6*u)+g,c[4]=u)),c}function u(t,n){const r=n?[0,0,0]:[0,0],o=n?[0,0,0]:[0,0];let l=0,i=0,u=0,s=0;for(let I=0,g=t.length;I<g-1;I++){const g=t[I],c=t[I+1];if(g&&c){r[0]=g[0],r[1]=g[1],o[0]=c[0],o[1]=c[1],n&&g.length>2&&c.length>2&&(r[2]=g[2],o[2]=c[2]);const t=e.getLength(r,o);if(t){l+=t;const r=e.getMidpoint(g,c);i+=t*r[0],u+=t*r[1],n&&r.length>2&&(s+=t*r[2])}}}return l>0?n?[i/l,u/l,s/l]:[i/l,u/l]:t.length?t[0]:null}function s(t){const{hasZ:e,numPaths:r}=t;if(0===r)return null;const o=[],l=[],u=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(t.reset();t.nextPath();){const e=i(n.collectPath(t),t.hasZ,u);e&&l.push(e)}if(l.sort(((t,n)=>{let r=t[2]-n[2];return 0===r&&e&&(r=t[4]-n[4]),r})),l.length&&(o[0]=l[0][0],o[1]=l[0][1],e&&(o[2]=l[0][3]),(o[0]<u[0]||o[0]>u[1]||o[1]<u[2]||o[1]>u[3]||e&&(o[2]<u[4]||o[2]>u[5]))&&(o.length=0)),!o.length){t.reset(),t.nextPath();const n=t.numPoints?I(t):null;if(!n)return null;o[0]=n[0],o[1]=n[1],e&&n.length>2&&(o[2]=n[2])}return o}function I(t){const{hasZ:n}=t,r=n?[0,0,0]:[0,0],o=n?[0,0,0]:[0,0];let l=0,i=0,u=0,s=0;if(t.nextPoint()){let I=t.x,g=t.y,c=t.z;for(;t.nextPoint();){const h=t.x,f=t.y,N=t.z;r[0]=I,r[1]=g,o[0]=h,o[1]=f,n&&(r[2]=c,o[2]=N);const x=e.getLength(r,o);if(x){l+=x;const t=e.getMidpoint(r,o);i+=x*t[0],u+=x*t[1],n&&t.length>2&&(s+=x*t[2])}I=h,g=f,c=N}}return l>0?n?[i/l,u/l,s/l]:[i/l,u/l]:t.numPoints?(t.seekPathStart(),t.nextPoint(),[t.x,t.y]):null}const g=1e-6;function c(t){let n=0;for(t.reset();t.nextPath();)n+=e.getRingAreaCursor(t);if(n<g){const n=s(t);return n?[n[0],n[1]]:null}const r=[0,0];if(t.reset(),!t.nextPath()||!t.nextPoint())return null;const o=[t.x,t.y];for(t.reset();t.nextPath();)f(r,o,t);return r[0]*=1/n,r[1]*=1/n,r[0]+=o[0],r[1]+=o[1],r}const h=1/3;function f(t,n,r){if(!t||!r||r.numPoints<3)return null;r.nextPoint();const o=r.x,l=r.y;r.nextPoint();let i,u=r.x-o,s=r.y-l,I=0,g=0;for(;r.nextPoint();)I=r.x-o,g=r.y-l,i=.5*h*(I*s-g*u),t[0]+=i*(u+I),t[1]+=i*(s+g),u=I,s=g;const c=e.getRingAreaCursor(r),f=[o,l];return f[0]-=n[0],f[1]-=n[1],f[0]*=c,f[1]*=c,t[0]+=f[0],t[1]+=f[1],t}t.extentCentroid=r,t.lineCentroid=u,t.lineCentroidCursor=I,t.polygonCentroid=o,t.ringCentroid=i,t.ringsCentroid=l,t.ringsCentroidCursor=s,t.weightedAreaCentroid=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));