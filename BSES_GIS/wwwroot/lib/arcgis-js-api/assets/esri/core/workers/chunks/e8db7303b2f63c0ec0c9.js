"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6314],{46851:(t,n,e)=>{e.d(n,{R:()=>i,a:()=>s,g:()=>o,t:()=>u});let r=1e-6;function o(){return r}const i=Math.random,a=Math.PI/180,c=180/Math.PI;function u(t){return t*a}function s(t){return t*c}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:i,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))},getEpsilon:o,setEpsilon:function(t){r=t},toDegree:s,toRadian:u},Symbol.toStringTag,{value:"Module"}))},97323:(t,n,e)=>{function r(){return[0,0]}function o(t,n){return[t,n]}function i(t,n){return new Float64Array(t,n,2)}function a(){return o(1,1)}function c(){return o(1,0)}function u(){return o(0,1)}e.d(n,{a:()=>r,c:()=>i,f:()=>o});const s=a(),f=c(),l=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:s,UNIT_X:f,UNIT_Y:l,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:r,createView:i,fromArray:function(t){const n=[0,0],e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:o,ones:a,unitX:c,unitY:u,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},17896:(t,n,e)=>{e.d(n,{A:()=>M,C:()=>f,D:()=>l,a:()=>u,b:()=>s,c:()=>a,d:()=>g,e:()=>A,f:()=>O,g:()=>h,h:()=>N,i:()=>d,j:()=>D,k:()=>R,l:()=>i,m:()=>I,n:()=>m,p:()=>T,q:()=>S,r:()=>L,s:()=>c,t:()=>E,u:()=>U});var r=e(65617),o=e(46851);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function c(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function s(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function l(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function M(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}function g(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return e*e+r*r+o*o}function T(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function m(t,n){const e=n[0],r=n[1],o=n[2];let i=e*e+r*r+o*o;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function A(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function O(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],c=e[1],u=e[2];return t[0]=o*u-i*c,t[1]=i*a-r*u,t[2]=r*c-o*a,t}function N(t,n,e,r){const o=n[0],i=n[1],a=n[2];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t}function I(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12],t[1]=e[1]*r+e[5]*o+e[9]*i+e[13],t[2]=e[2]*r+e[6]*o+e[10]*i+e[14],t}function E(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=r*e[0]+o*e[3]+i*e[6],t[1]=r*e[1]+o*e[4]+i*e[7],t[2]=r*e[2]+o*e[5]+i*e[8],t}function S(t,n,e){const r=e[0],o=e[1],i=e[2],a=e[3],c=n[0],u=n[1],s=n[2];let f=o*s-i*u,l=i*c-r*s,h=r*u-o*c,M=o*h-i*l,d=i*f-r*h,g=r*l-o*f;const T=2*a;return f*=T,l*=T,h*=T,M*=2,d*=2,g*=2,t[0]=c+f+M,t[1]=u+l+d,t[2]=s+h+g,t}const p=(0,r.c)(),b=(0,r.c)();function R(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function L(t,n,e){const r=e[0]-n[0],o=e[1]-n[1],i=e[2]-n[2];let a=r*r+o*o+i*i;return a>0?(a=1/Math.sqrt(a),t[0]=r*a,t[1]=o*a,t[2]=i*a,t):(t[0]=0,t[1]=0,t[2]=0,t)}const v=s,y=f,w=l,D=d,P=g,U=i,F=T;Object.freeze(Object.defineProperty({__proto__:null,abs:function(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t},add:u,angle:function(t,n){a(p,t),a(b,n),m(p,p),m(b,b);const e=A(p,b);return e>1?0:e<-1?Math.PI:Math.acos(e)},bezier:function(t,n,e,r,o,i){const a=1-i,c=a*a,u=i*i,s=c*a,f=3*i*c,l=3*u*a,h=u*i;return t[0]=n[0]*s+e[0]*f+r[0]*l+o[0]*h,t[1]=n[1]*s+e[1]*f+r[1]*l+o[1]*h,t[2]=n[2]*s+e[2]*f+r[2]*l+o[2]*h,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},copy:a,cross:O,direction:L,dist:D,distance:d,div:w,divide:l,dot:A,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],a=n[0],c=n[1],u=n[2],s=(0,o.g)();return Math.abs(e-a)<=s*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(r-c)<=s*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(i-u)<=s*Math.max(1,Math.abs(i),Math.abs(u))},exactEquals:R,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,e,r,o,i){const a=i*i,c=a*(2*i-3)+1,u=a*(i-2)+i,s=a*(i-1),f=a*(3-2*i);return t[0]=n[0]*c+e[0]*u+r[0]*s+o[0]*f,t[1]=n[1]*c+e[1]*u+r[1]*s+o[1]*f,t[2]=n[2]*c+e[2]*u+r[2]*s+o[2]*f,t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},len:U,length:i,lerp:N,max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},mul:y,multiply:f,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},normalize:m,random:function(t,n){n=n||1;const e=o.R,r=2*e()*Math.PI,i=2*e()-1,a=Math.sqrt(1-i*i)*n;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t[2]=i*n,t},rotateX:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:h,scaleAndAdd:M,set:c,sign:function(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t},sqrDist:P,sqrLen:F,squaredDistance:g,squaredLength:T,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:v,subtract:s,transformMat3:E,transformMat4:I,transformQuat:S},Symbol.toStringTag,{value:"Module"}))},65617:(t,n,e)=>{function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function a(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function c(t,n){return new Float64Array(t,n,3)}function u(){return i(1,1,1)}function s(){return i(1,0,0)}function f(){return i(0,1,0)}function l(){return i(0,0,1)}e.d(n,{O:()=>M,U:()=>T,Z:()=>h,a:()=>o,b:()=>c,c:()=>r,d:()=>d,e:()=>g,f:()=>i,g:()=>a});const h=[0,0,0],M=u(),d=s(),g=f(),T=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:M,UNIT_X:d,UNIT_Y:g,UNIT_Z:T,ZEROS:h,clone:o,create:r,createView:c,fromArray:a,fromValues:i,ones:u,unitX:s,unitY:f,unitZ:l,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},98766:(t,n,e)=>{e.d(n,{a:()=>a,b:()=>f,c:()=>o,d:()=>T,e:()=>M,f:()=>d,g:()=>A,h:()=>O,l:()=>m,n:()=>g,s:()=>i});var r=e(46851);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,e,r,o){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t}function a(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function u(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function s(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function f(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function l(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+o*o+i*i)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+o*o+i*i}function M(t){const n=t[0],e=t[1],r=t[2],o=t[3];return Math.sqrt(n*n+e*e+r*r+o*o)}function d(t){const n=t[0],e=t[1],r=t[2],o=t[3];return n*n+e*e+r*r+o*o}function g(t,n){const e=n[0],r=n[1],o=n[2],i=n[3];let a=e*e+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e*a,t[1]=r*a,t[2]=o*a,t[3]=i*a),t}function T(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function m(t,n,e,r){const o=n[0],i=n[1],a=n[2],c=n[3];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t[3]=c+r*(e[3]-c),t}function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function O(t,n){const e=t[0],o=t[1],i=t[2],a=t[3],c=n[0],u=n[1],s=n[2],f=n[3],l=(0,r.g)();return Math.abs(e-c)<=l*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-u)<=l*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(i-s)<=l*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-f)<=l*Math.max(1,Math.abs(a),Math.abs(f))}const N=c,I=u,E=s,S=l,p=h,b=M,R=d;Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},copy:o,dist:S,distance:l,div:E,divide:s,dot:T,equals:O,exactEquals:A,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},len:b,length:M,lerp:m,max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},mul:I,multiply:u,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},normalize:g,random:function(t,n){const e=r.R;let o,i,a,c,u,s;n=n||1;do{o=2*e()-1,i=2*e()-1,u=o*o+i*i}while(u>=1);do{a=2*e()-1,c=2*e()-1,s=a*a+c*c}while(s>=1);const f=Math.sqrt((1-u)/s);return t[0]=n*o,t[1]=n*i,t[2]=n*a*f,t[3]=n*c*f,t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:f,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},set:i,sqrDist:p,sqrLen:R,squaredDistance:h,squaredLength:d,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:N,subtract:c,transformMat4:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=n[3];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12]*a,t[1]=e[1]*r+e[5]*o+e[9]*i+e[13]*a,t[2]=e[2]*r+e[6]*o+e[10]*i+e[14]*a,t[3]=e[3]*r+e[7]*o+e[11]*i+e[15]*a,t},transformQuat:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],c=e[1],u=e[2],s=e[3],f=s*r+c*i-u*o,l=s*o+u*r-a*i,h=s*i+a*o-c*r,M=-a*r-c*o-u*i;return t[0]=f*s+M*-a+l*-u-h*-c,t[1]=l*s+M*-c+h*-a-f*-u,t[2]=h*s+M*-u+f*-c-l*-a,t[3]=n[3],t}},Symbol.toStringTag,{value:"Module"}))},22021:(t,n,e)=>{e.d(n,{BV:()=>f,Kt:()=>h,Sf:()=>i,Vl:()=>s,ZF:()=>l,_3:()=>N,jE:()=>A,oK:()=>T,oc:()=>O,t7:()=>u,uZ:()=>a,wt:()=>c});var r=e(17896);e(98766);const o=new Float32Array(1);function i(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function a(t,n,e){return Math.min(Math.max(t,n),e)}function c(t){return 0==(t&t-1)}function u(t,n,e){return t+(n-t)*e}function s(t){return t*Math.PI/180}function f(t){return 180*t/Math.PI}function l(t){return Math.acos(a(t,-1,1))}function h(t){return Math.asin(a(t,-1,1))}function M(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const d=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const g=BigInt("1000000");function T(t){return m(Math.max(-N,Math.min(t,N)))}function m(t){return o[0]=t,o[0]}function A(t,n){const e=(0,r.l)(t),o=h(t[2]/e),i=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,o,i),n}function O(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(M(n,1)&&M(e,1)&&M(r,1))}!function(t){const n=function(t){return d.setFloat64(0,t),d.getBigInt64(0)}(t=Math.abs(t)),e=function(t){return d.setBigInt64(0,t),d.getFloat64(0)}(n<=g?g:n-g);Math.abs(t-e)}(1);const N=m(34028234663852886e22)},47545:(t,n,e)=>{e.d(n,{d:()=>i});var r=e(22021),o=e(24882);function i(t,n,e){const i=Array.isArray(t),f=i?t.length/n:t.byteLength/(4*n),l=i?t:new Uint32Array(t,0,f*n),h=e?.minReduction??0,M=e?.originalIndices||null,d=M?M.length:0,g=e?.componentOffsets||null;let T=0;if(g)for(let t=0;t<g.length-1;t++){const n=g[t+1]-g[t];n>T&&(T=n)}else T=f;const m=Math.floor(1.1*T)+1;(null==s||s.length<2*m)&&(s=new Uint32Array((0,r.Sf)(2*m)));for(let t=0;t<2*m;t++)s[t]=0;let A=0;const O=!!g&&!!M,N=O?d:f;let I=(0,o.$z)(f);const E=new Uint32Array(d),S=1.96;let p=0!==h?Math.ceil(4*S*S/(h*h)*h*(1-h)):N,b=1,R=g?g[1]:N;for(let t=0;t<N;t++){if(t===p){const n=1-A/t;if(n+S*Math.sqrt(n*(1-n)/t)<h)return null;p*=2}if(t===R){for(let t=0;t<2*m;t++)s[t]=0;if(M)for(let t=g[b-1];t<g[b];t++)E[t]=I[M[t]];R=g[++b]}const e=O?M[t]:t,r=e*n,o=u(l,r,n);let i=o%m,c=A;for(;0!==s[2*i+1];){if(s[2*i]===o){const t=s[2*i+1]-1;if(a(l,r,t*n,n)){c=I[t];break}}i++,i>=m&&(i-=m)}c===A&&(s[2*i]=o,s[2*i+1]=e+1,A++),I[e]=c}if(0!==h&&1-A/f<h)return null;if(O){for(let t=g[b-1];t<E.length;t++)E[t]=I[M[t]];I=(0,o.mi)(E)}const L=i?new Array(A):new Uint32Array(A*n);A=0;for(let t=0;t<N;t++)I[t]===A&&(c(l,(O?M[t]:t)*n,L,A*n,n),A++);if(M&&!O){const t=new Uint32Array(d);for(let n=0;n<t.length;n++)t[n]=I[M[n]];I=(0,o.mi)(t)}return{buffer:Array.isArray(L)?L:L.buffer,indices:I,uniqueCount:A}}function a(t,n,e,r){for(let o=0;o<r;o++)if(t[n+o]!==t[e+o])return!1;return!0}function c(t,n,e,r,o){for(let i=0;i<o;i++)e[r+i]=t[n+i]}function u(t,n,e){let r=0;for(let o=0;o<e;o++)r=t[n+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let s=null},5329:(t,n,e)=>{e.d(n,{K:()=>i});var r=e(35371),o=e(21968);function i(t,n=0){const e=t.stride;return Array.from(t.fields.keys()).filter((n=>{const e=t.fields.get(n)?.optional;return!(e&&e.glPadding)})).map((r=>{const i=t.fields.get(r),c=i.constructor.ElementCount,u=a(i.constructor.ElementType),s=i.offset,f=!(!i.optional||!i.optional.glNormalized);return new o.G(r,c,u,s,e,f,n)}))}function a(t){const n=c[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const c={u8:r.g.UNSIGNED_BYTE,u16:r.g.UNSIGNED_SHORT,u32:r.g.UNSIGNED_INT,i8:r.g.BYTE,i16:r.g.SHORT,i32:r.g.INT,f32:r.g.FLOAT}},35065:(t,n,e)=>{var r;e.d(n,{T:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.MODELORIGINHI="modelOriginHi",t.MODELORIGINLO="modelOriginLo",t.MODEL="model",t.MODELNORMAL="modelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.U8PADDING="u8padding",t.U16PADDING="u16padding",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},17288:(t,n,e)=>{e.d(n,{Hr:()=>f,dG:()=>s,tf:()=>a});var r=e(5329),o=e(65576),i=e(35065);const a=(0,o.U$)().vec3f(i.T.POSITION).u16(i.T.COMPONENTINDEX).u16(i.T.U16PADDING),c=(0,o.U$)().vec2u8(i.T.SIDENESS),u=((0,r.K)(c),(0,o.U$)().vec3f(i.T.POSITION0).vec3f(i.T.POSITION1).u16(i.T.COMPONENTINDEX).u8(i.T.VARIANTOFFSET,{glNormalized:!0}).u8(i.T.VARIANTSTROKE).u8(i.T.VARIANTEXTENSION,{glNormalized:!0}).u8(i.T.U8PADDING,{glPadding:!0}).u16(i.T.U16PADDING,{glPadding:!0})),s=u.clone().vec3f(i.T.NORMAL),f=u.clone().vec3f(i.T.NORMALA).vec3f(i.T.NORMALB);new Map([[i.T.POSITION0,0],[i.T.POSITION1,1],[i.T.COMPONENTINDEX,2],[i.T.VARIANTOFFSET,3],[i.T.VARIANTSTROKE,4],[i.T.VARIANTEXTENSION,5],[i.T.NORMAL,6],[i.T.NORMALA,6],[i.T.NORMALB,7],[i.T.SIDENESS,8]])},97411:(t,n,e)=>{e.d(n,{n:()=>f});var r=e(67676),o=e(22021),i=e(17896),a=e(65617);const c=-1;var u,s;function f(t,n,e,a=m){const u=t.vertices.position,s=t.vertices.componentIndex,f=(0,o.Vl)(a.anglePlanar),T=(0,o.Vl)(a.angleSignificantEdge),A=Math.cos(T),O=Math.cos(f),N=g.edge,I=N.position0,E=N.position1,S=N.faceNormal0,p=N.faceNormal1,b=d(t),R=function(t){const n=t.faces.length/3,e=t.faces,r=t.neighbors;let o=0;for(let t=0;t<n;t++){const n=r[3*t],i=r[3*t+1],a=r[3*t+2],u=e[3*t],s=e[3*t+1],f=e[3*t+2];o+=n===c||u<s?1:0,o+=i===c||s<f?1:0,o+=a===c||f<u?1:0}const i=new Int32Array(4*o);let a=0;for(let t=0;t<n;t++){const n=r[3*t],o=r[3*t+1],u=r[3*t+2],s=e[3*t],f=e[3*t+1],l=e[3*t+2];(n===c||s<f)&&(i[a++]=s,i[a++]=f,i[a++]=t,i[a++]=n),(o===c||f<l)&&(i[a++]=f,i[a++]=l,i[a++]=t,i[a++]=o),(u===c||l<s)&&(i[a++]=l,i[a++]=s,i[a++]=t,i[a++]=u)}return i}(t),L=R.length/4,v=n.allocate(L);let y=0;const w=L,D=e.allocate(w);let P=0,U=0,F=0;const _=(0,r.w6)(0,L),C=new Float32Array(L);C.forEach(((t,n,e)=>{u.getVec(R[4*n],I),u.getVec(R[4*n+1],E),e[n]=(0,i.i)(I,E)})),_.sort(((t,n)=>C[n]-C[t]));const V=new Array,x=new Array;for(let t=0;t<L;t++){const r=_[t],o=C[r],a=R[4*r],d=R[4*r+1],g=R[4*r+2],T=R[4*r+3],m=T===c;if(u.getVec(a,I),u.getVec(d,E),m)(0,i.s)(S,b[3*g],b[3*g+1],b[3*g+2]),(0,i.c)(p,S),N.componentIndex=s.get(a),N.cosAngle=(0,i.e)(S,p);else{if((0,i.s)(S,b[3*g],b[3*g+1],b[3*g+2]),(0,i.s)(p,b[3*T],b[3*T+1],b[3*T+2]),N.componentIndex=s.get(a),N.cosAngle=(0,i.e)(S,p),h(N,O))continue;N.cosAngle<-.9999&&(0,i.c)(p,S)}U+=o,F++,m||l(N,A)?(n.write(v,y++,N),V.push(o)):M(N,f)&&(e.write(D,P++,N),x.push(o))}const B=new Float32Array(V.reverse()),q=new Float32Array(x.reverse());return{regular:{instancesData:n.trim(v,y),lodInfo:{lengths:B}},silhouette:{instancesData:e.trim(D,P),lodInfo:{lengths:q}},averageEdgeLength:U/F}}function l(t,n){return t.cosAngle<n}function h(t,n){return t.cosAngle>n}function M(t,n){const e=(0,o.ZF)(t.cosAngle),r=g.fwd,a=g.ortho;return(0,i.r)(r,t.position1,t.position0),e*((0,i.e)((0,i.f)(a,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>n}function d(t){const n=t.faces.length/3,e=t.vertices.position,r=t.faces,o=T.v0,a=T.v1,c=T.v2,u=new Float32Array(3*n);for(let t=0;t<n;t++){const n=r[3*t],s=r[3*t+1],f=r[3*t+2];e.getVec(n,o),e.getVec(s,a),e.getVec(f,c),(0,i.b)(a,a,o),(0,i.b)(c,c,o),(0,i.f)(o,a,c),(0,i.n)(o,o),u[3*t]=o[0],u[3*t+1]=o[1],u[3*t+2]=o[2]}return u}(s=u||(u={}))[s.SOLID=0]="SOLID",s[s.SKETCH=1]="SKETCH";const g={edge:{position0:(0,a.c)(),position1:(0,a.c)(),faceNormal0:(0,a.c)(),faceNormal1:(0,a.c)(),componentIndex:0,cosAngle:0},ortho:(0,a.c)(),fwd:(0,a.c)()},T={v0:(0,a.c)(),v1:(0,a.c)(),v2:(0,a.c)()},m={anglePlanar:4,angleSignificantEdge:35}},212:(t,n,e)=>{e.d(n,{Kl:()=>b,n_:()=>D,kY:()=>R,Yr:()=>w});var r=e(47545);function o(t,n,e){const r=n/3,o=new Uint32Array(e+1),i=new Uint32Array(e+1),a=(t,n)=>{t<n?o[t+1]++:i[n+1]++};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];a(e,r),a(r,o),a(o,e)}let c=0,u=0;for(let t=0;t<e;t++){const n=o[t+1],e=i[t+1];o[t+1]=c,i[t+1]=u,c+=n,u+=e}const s=new Uint32Array(6*r),f=o[e],l=(t,n,e)=>{if(t<n){const r=o[t+1]++;s[2*r]=n,s[2*r+1]=e}else{const r=i[n+1]++;s[2*f+2*r]=t,s[2*f+2*r+1]=e}};for(let n=0;n<r;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];l(e,r,n),l(r,o,n),l(o,e,n)}const h=(t,n)=>{const e=2*t,r=n-t;for(let t=1;t<r;t++){const n=s[e+2*t],r=s[e+2*t+1];let o=t-1;for(;o>=0&&s[e+2*o]>n;o--)s[e+2*o+2]=s[e+2*o],s[e+2*o+3]=s[e+2*o+1];s[e+2*o+2]=n,s[e+2*o+3]=r}};for(let t=0;t<e;t++)h(o[t],o[t+1]),h(f+i[t],f+i[t+1]);const M=new Int32Array(3*r),d=(n,e)=>n===t[3*e]?0:n===t[3*e+1]?1:n===t[3*e+2]?2:-1,g=(t,n)=>{const e=d(t,n);M[3*n+e]=-1},T=(t,n,e,r)=>{const o=d(t,n);M[3*n+o]=r;const i=d(e,r);M[3*r+i]=n};for(let t=0;t<e;t++){let n=o[t];const e=o[t+1];let r=i[t];const a=i[t+1];for(;n<e&&r<a;){const e=s[2*n],o=s[2*f+2*r];e===o?(T(t,s[2*n+1],o,s[2*f+2*r+1]),n++,r++):e<o?(g(t,s[2*n+1]),n++):(g(o,s[2*f+2*r+1]),r++)}for(;n<e;)g(t,s[2*n+1]),n++;for(;r<a;)g(s[2*f+2*r],s[2*f+2*r+1]),r++}return M}var i=e(65576),a=e(35065),c=e(17288),u=e(77734),s=e(17896),f=e(65617),l=e(5329);class h{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?m:T}write(t,n,e){const r=this._edgeHashFunction(e);S.seed=r;const o=S.getIntRange(0,255),i=S.getIntRange(0,this.settings.variants-1),a=S.getFloat(),c=255*(.5*function(t,n){const e=t<0?-1:1;return Math.abs(t)**1.2*e}(-(1-Math.min(a/.7,1))+Math.max(0,a-.7)/(1-.7))+.5);t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex),t.variantOffset.set(n,o),t.variantStroke.set(n,i),t.variantExtension.set(n,c)}trim(t,n){return t.slice(0,n)}}const M=new Float32Array(6),d=new Uint32Array(M.buffer),g=new Uint32Array(1);function T(t){const n=M;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],g[0]=5381;for(let t=0;t<d.length;t++)g[0]=31*g[0]+d[t];return g[0]}function m(t){const n=M;n[0]=O(t.position0[0]),n[1]=O(t.position0[1]),n[2]=O(t.position0[2]),n[3]=O(t.position1[0]),n[4]=O(t.position1[1]),n[5]=O(t.position1[2]),g[0]=5381;for(let t=0;t<d.length;t++)g[0]=31*g[0]+d[t];return g[0]}const A=1e4;function O(t){return Math.round(t*A)/A}class N{constructor(){this._commonWriter=new h}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.dG.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e),(0,s.a)(E,e.faceNormal0,e.faceNormal1),(0,s.n)(E,E),t.normal.setVec(n,E)}trim(t,n){return this._commonWriter.trim(t,n)}}N.Layout=c.dG,N.glLayout=(0,l.K)(c.dG,1);class I{constructor(){this._commonWriter=new h}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.Hr.createBuffer(t)}write(t,n,e){this._commonWriter.write(t,n,e),t.normalA.setVec(n,e.faceNormal0),t.normalB.setVec(n,e.faceNormal1)}trim(t,n){return this._commonWriter.trim(t,n)}}I.Layout=c.Hr,I.glLayout=(0,l.K)(c.Hr,1);const E=(0,f.c)(),S=new u.Z;var p=e(97411);function b(t){const n=R(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return v.updateSettings(t.writerSettings),y.updateSettings(t.writerSettings),(0,p.n)(n,v,y)}function R(t,n,e,i){if(n){const n=o(e,i,t.count);return new L(e,i,n,t)}const a=(0,r.d)(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:i}),u=o(a.indices,i,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:u,vertices:c.tf.createView(a.buffer)}}class L{constructor(t,n,e,r){this.faces=t,this.facesLength=n,this.neighbors=e,this.vertices=r}}const v=new N,y=new I,w=(0,i.U$)().vec3f(a.T.POSITION0).vec3f(a.T.POSITION1),D=(0,i.U$)().vec3f(a.T.POSITION0).vec3f(a.T.POSITION1).u16(a.T.COMPONENTINDEX).u16(a.T.U16PADDING,{glPadding:!0})}}]);