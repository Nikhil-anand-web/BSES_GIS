/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./common"],(function(t,n){"use strict";function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function o(t,n,a,r,o,u,s,e,c,i){return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=u,t[5]=s,t[6]=e,t[7]=c,t[8]=i,t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function s(t,n){if(t===n){const a=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function e(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],e=n[5],c=n[6],i=n[7],l=n[8],M=l*s-e*i,f=-l*u+e*c,h=i*u-s*c;let m=a*M+r*f+o*h;return m?(m=1/m,t[0]=M*m,t[1]=(-l*r+o*i)*m,t[2]=(e*r-o*s)*m,t[3]=f*m,t[4]=(l*a-o*c)*m,t[5]=(-e*a+o*u)*m,t[6]=h*m,t[7]=(-i*a+r*c)*m,t[8]=(s*a-r*u)*m,t):null}function c(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],e=n[5],c=n[6],i=n[7],l=n[8];return t[0]=s*l-e*i,t[1]=o*i-r*l,t[2]=r*e-o*s,t[3]=e*c-u*l,t[4]=a*l-o*c,t[5]=o*u-a*e,t[6]=u*i-s*c,t[7]=r*c-a*i,t[8]=a*s-r*u,t}function i(t){const n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],s=t[5],e=t[6],c=t[7],i=t[8];return n*(i*u-s*c)+a*(-i*o+s*e)+r*(c*o-u*e)}function l(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],e=n[4],c=n[5],i=n[6],l=n[7],M=n[8],f=a[0],h=a[1],m=a[2],b=a[3],d=a[4],p=a[5],y=a[6],x=a[7],g=a[8];return t[0]=f*r+h*s+m*i,t[1]=f*o+h*e+m*l,t[2]=f*u+h*c+m*M,t[3]=b*r+d*s+p*i,t[4]=b*o+d*e+p*l,t[5]=b*u+d*c+p*M,t[6]=y*r+x*s+g*i,t[7]=y*o+x*e+g*l,t[8]=y*u+x*c+g*M,t}function M(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],e=n[4],c=n[5],i=n[6],l=n[7],M=n[8],f=a[0],h=a[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=s,t[4]=e,t[5]=c,t[6]=f*r+h*s+i,t[7]=f*o+h*e+l,t[8]=f*u+h*c+M,t}function f(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],e=n[4],c=n[5],i=n[6],l=n[7],M=n[8],f=Math.sin(a),h=Math.cos(a);return t[0]=h*r+f*s,t[1]=h*o+f*e,t[2]=h*u+f*c,t[3]=h*s-f*r,t[4]=h*e-f*o,t[5]=h*c-f*u,t[6]=i,t[7]=l,t[8]=M,t}function h(t,n,a){const r=a[0],o=a[1],u=a[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=u*n[6],t[7]=u*n[7],t[8]=u*n[8],t}function m(t,n,a){const r=a[0],o=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t}function b(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function d(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function p(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function y(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function x(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=a+a,e=r+r,c=o+o,i=a*s,l=r*s,M=r*e,f=o*s,h=o*e,m=o*c,b=u*s,d=u*e,p=u*c;return t[0]=1-M-m,t[3]=l-p,t[6]=f+d,t[1]=l+p,t[4]=1-i-m,t[7]=h-b,t[2]=f-d,t[5]=h+b,t[8]=1-i-M,t}function g(t,n){const a=n[0],r=n[1],o=n[2],u=n[4],s=n[5],e=n[6],c=n[8],i=n[9],l=n[10],M=l*s-e*i,f=-l*u+e*c,h=i*u-s*c,m=a*M+r*f+o*h;if(!m)return null;const b=1/m;return t[0]=M*b,t[1]=(-l*r+o*i)*b,t[2]=(e*r-o*s)*b,t[3]=f*b,t[4]=(l*a-o*c)*b,t[5]=(-e*a+o*u)*b,t[6]=h*b,t[7]=(-i*a+r*c)*b,t[8]=(s*a-r*u)*b,t}function S(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],e=n[5],c=n[6],i=n[7],l=n[8],M=n[9],f=n[10],h=n[11],m=n[12],b=n[13],d=n[14],p=n[15],y=a*e-r*s,x=a*c-o*s,g=a*i-u*s,S=r*c-o*e,j=r*i-u*e,q=o*i-u*c,A=l*b-M*m,E=l*d-f*m,F=l*p-h*m,O=M*d-f*b,_=M*p-h*b,v=f*p-h*d;let T=y*v-x*_+g*O+S*F-j*E+q*A;return T?(T=1/T,t[0]=(e*v-c*_+i*O)*T,t[1]=(c*F-s*v-i*E)*T,t[2]=(s*_-e*F+i*A)*T,t[3]=(o*_-r*v-u*O)*T,t[4]=(a*v-o*F+u*E)*T,t[5]=(r*F-a*_-u*A)*T,t[6]=(b*q-d*j+p*S)*T,t[7]=(d*g-m*q-p*x)*T,t[8]=(m*j-b*g+p*y)*T,t):null}function j(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function q(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function A(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function E(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function F(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function O(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function v(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function T(t,a){const r=t[0],o=t[1],u=t[2],s=t[3],e=t[4],c=t[5],i=t[6],l=t[7],M=t[8],f=a[0],h=a[1],m=a[2],b=a[3],d=a[4],p=a[5],y=a[6],x=a[7],g=a[8],S=n.getEpsilon();return Math.abs(r-f)<=S*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(o-h)<=S*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(u-m)<=S*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(s-b)<=S*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(e-d)<=S*Math.max(1,Math.abs(e),Math.abs(d))&&Math.abs(c-p)<=S*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(i-y)<=S*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(l-x)<=S*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(M-g)<=S*Math.max(1,Math.abs(M),Math.abs(g))}function B(t){const a=n.getEpsilon(),r=t[0],o=t[1],u=t[2],s=t[3],e=t[4],c=t[5],i=t[6],l=t[7],M=t[8];return Math.abs(1-(r*r+s*s+i*i))<=a&&Math.abs(1-(o*o+e*e+l*l))<=a&&Math.abs(1-(u*u+c*c+M*M))<=a}const L=l,N=F,Q=Object.freeze(Object.defineProperty({__proto__:null,add:E,adjoint:c,copy:r,determinant:i,equals:T,exactEquals:v,frob:A,fromMat2d:y,fromMat4:a,fromQuat:x,fromRotation:d,fromScaling:p,fromTranslation:b,identity:u,invert:e,isOrthoNormal:B,mul:L,multiply:l,multiplyScalar:O,multiplyScalarAndAdd:_,normalFromMat4:S,normalFromMat4Legacy:g,projection:j,rotate:f,scale:h,scaleByVec2:m,set:o,str:q,sub:N,subtract:F,translate:M,transpose:s},Symbol.toStringTag,{value:"Module"}));t.add=E,t.adjoint=c,t.copy=r,t.determinant=i,t.equals=T,t.exactEquals=v,t.frob=A,t.fromMat2d=y,t.fromMat4=a,t.fromQuat=x,t.fromRotation=d,t.fromScaling=p,t.fromTranslation=b,t.identity=u,t.invert=e,t.isOrthoNormal=B,t.mat3=Q,t.mul=L,t.multiply=l,t.multiplyScalar=O,t.multiplyScalarAndAdd=_,t.normalFromMat4=S,t.normalFromMat4Legacy=g,t.projection=j,t.rotate=f,t.scale=h,t.scaleByVec2=m,t.set=o,t.str=q,t.sub=N,t.subtract=F,t.translate=M,t.transpose=s}));
