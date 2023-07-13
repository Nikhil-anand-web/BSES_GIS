/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils","../../../../../core/mathUtils","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../lib/ContentObjectType","../../lib/screenSizePerspectiveUtils","../../lib/Util","../../lib/VertexAttribute"],(function(t,e,n,i,o,r,c,s,l,a){"use strict";const u=r.create();function f(t,e,n,i,o,r){if(t.visible)if(t.boundingInfo){l.assert(t.type===c.ContentObjectType.Mesh);const s=e.tolerance;b(t.boundingInfo,n,i,s,o,r)}else{const e=t.indices.get(a.VertexAttribute.POSITION),c=t.vertexAttributes.get(a.VertexAttribute.POSITION);m(n,i,0,e.length/3,e,c,void 0,o,r)}}const p=o.create();function b(t,e,n,i,o,c){if(null==t)return;const s=y(e,n,p);if(r.setMin(u,t.bbMin),r.setMax(u,t.bbMax),null!=o&&o.applyToAabb(u),v(u,e,s,i)){const{primitiveIndices:r,indices:s,position:l}=t,a=r?r.length:s.length/3;if(a>N){const r=t.getChildren();if(void 0!==r){for(const t of r)b(t,e,n,i,o,c);return}}m(e,n,0,a,s,l,r,o,c)}}const h=o.create();function m(t,e,n,i,o,r,c,s,l){if(c)return d(t,e,n,i,o,r,c,s,l);const{data:a,stride:u}=r,f=t[0],p=t[1],b=t[2],m=e[0]-f,x=e[1]-p,M=e[2]-b;for(let d=n,y=3*n;d<i;++d){let t=u*o[y++],e=a[t++],n=a[t++],i=a[t];t=u*o[y++];let r=a[t++],c=a[t++],v=a[t];t=u*o[y++];let T=a[t++],I=a[t++],A=a[t];null!=s&&([e,n,i]=s.applyToVertex(e,n,i,d),[r,c,v]=s.applyToVertex(r,c,v,d),[T,I,A]=s.applyToVertex(T,I,A,d));const O=r-e,V=c-n,P=v-i,N=T-e,S=I-n,L=A-i,D=x*L-S*M,E=M*N-L*m,U=m*S-N*x,j=O*D+V*E+P*U;if(Math.abs(j)<=Number.EPSILON)continue;const B=f-e,C=p-n,W=b-i,k=B*D+C*E+W*U;if(j>0){if(k<0||k>j)continue}else if(k>0||k<j)continue;const z=C*P-V*W,G=W*O-P*B,H=B*V-O*C,R=m*z+x*G+M*H;if(j>0){if(R<0||k+R>j)continue}else if(R>0||k+R<j)continue;const Y=(N*z+S*G+L*H)/j;if(Y>=0){l(Y,g(O,V,P,N,S,L,h),d,!1)}}}function d(t,e,n,i,o,r,c,s,l){const{data:a,stride:u}=r,f=t[0],p=t[1],b=t[2],m=e[0]-f,d=e[1]-p,x=e[2]-b;for(let M=n;M<i;++M){const t=c[M];let e=3*t,n=u*o[e++],i=a[n++],r=a[n++],y=a[n];n=u*o[e++];let v=a[n++],T=a[n++],I=a[n];n=u*o[e];let A=a[n++],O=a[n++],V=a[n];null!=s&&([i,r,y]=s.applyToVertex(i,r,y,M),[v,T,I]=s.applyToVertex(v,T,I,M),[A,O,V]=s.applyToVertex(A,O,V,M));const P=v-i,N=T-r,S=I-y,L=A-i,D=O-r,E=V-y,U=d*E-D*x,j=x*L-E*m,B=m*D-L*d,C=P*U+N*j+S*B;if(Math.abs(C)<=Number.EPSILON)continue;const W=f-i,k=p-r,z=b-y,G=W*U+k*j+z*B;if(C>0){if(G<0||G>C)continue}else if(G>0||G<C)continue;const H=k*S-N*z,R=z*P-S*W,Y=W*N-P*k,q=m*H+d*R+x*Y;if(C>0){if(q<0||G+q>C)continue}else if(q>0||G+q<C)continue;const w=(L*H+D*R+E*Y)/C;if(w>=0){l(w,g(P,N,S,L,D,E,h),t,!1)}}}const x=o.create(),M=o.create();function g(t,e,n,o,r,c,s){return i.set(x,t,e,n),i.set(M,o,r,c),i.cross(s,x,M),i.normalize(s,s),s}function y(t,e,n){return i.set(n,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function v(t,e,n,i){return T(t,e,n,i,1/0)}function T(t,e,n,i,o){const r=(t[0]-i-e[0])*n[0],c=(t[3]+i-e[0])*n[0];let s=Math.min(r,c),l=Math.max(r,c);const a=(t[1]-i-e[1])*n[1],u=(t[4]+i-e[1])*n[1];if(l=Math.min(l,Math.max(a,u)),l<0)return!1;if(s=Math.max(s,Math.min(a,u)),s>l)return!1;const f=(t[2]-i-e[2])*n[2],p=(t[5]+i-e[2])*n[2];return l=Math.min(l,Math.max(f,p)),!(l<0)&&(s=Math.max(s,Math.min(f,p)),!(s>l)&&s<o)}function I(t,e,i,o,r){let c=(i.screenLength||0)*t.pixelRatio;null!=r&&(c=s.scale(c,o,e,r));const l=c*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return n.clamp(l*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function A(t,e){const n=e?A(e):{};for(const i in t){let e=t[i];e&&e.forEach&&(e=V(e)),null==e&&i in n||(n[i]=e)}return n}function O(t,n){let i=!1;for(const o in n){const r=n[o];void 0!==r&&(Array.isArray(r)?null===t[o]?(t[o]=r.slice(),i=!0):e.update(t[o],r)&&(i=!0):t[o]!==r&&(i=!0,t[o]=r))}return i}function V(t){const e=[];return t.forEach((t=>e.push(t))),e}const P={multiply:1,ignore:2,replace:3,tint:4},N=1e3;t.colorMixModes=P,t.computeInvDir=y,t.computeNormal=g,t.copyParameters=A,t.intersectAabbInvDir=v,t.intersectAabbInvDirBefore=T,t.intersectTriangleGeometry=f,t.intersectTriangles=m,t.updateParameters=O,t.verticalOffsetAtDistance=I,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
