/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,t,l){"use strict";let a;function r(){return!!t._lclib}function i(){return a||(a=new Promise(((t,l)=>e(["../../chunks/lclayout"],t,l))).then((e=>e.lclayout)).then((({default:e})=>e({locateFile:e=>l.getAssetUrl(`esri/libs/linkchartlayout/${e}`)}))).then((e=>{o(e)})),a)}function o(e){t._lclib=e}var n;function u(e,l,a,r,i,o){const n=a.length,u=i.length,c=Float64Array.BYTES_PER_ELEMENT,y=Uint32Array.BYTES_PER_ELEMENT,s=Uint8Array.BYTES_PER_ELEMENT,b=16,L=b-1+n*(s+2*c)+u*(2*y),_=t._lclib._malloc(L);try{const s=_+b-_%b,L=s+n*c,d=L+n*c,E=d+u*y,p=E+u*y,C=()=>[t._lclib.HEAPF64.subarray(s>>3,(s>>3)+n),t._lclib.HEAPF64.subarray(L>>3,(L>>3)+n),t._lclib.HEAPU32.subarray(d>>2,(d>>2)+u),t._lclib.HEAPU32.subarray(E>>2,(E>>2)+u),t._lclib.HEAPU8.subarray(p,p+n)],[f,m,P,A,h]=C();f.set(a),m.set(r),P.set(i),A.set(o),h.set(l);const g=e(n,p,s,L,u,d,E),[F,H,R,T,v]=C();return a.set(F),r.set(H),i.set(R),o.set(T),l.set(v),g}finally{t._lclib._free(_)}}t._lclib=null,t.NodeFlag=void 0,(n=t.NodeFlag||(t.NodeFlag={}))[n.None=0]="None",n[n.IsMovable=1]="IsMovable",n[n.IsGeographic=2]="IsGeographic",n[n.IsRoot=4]="IsRoot";const c=2,y=1,s=-1;var b,L;function _(e,l,a,r,i,o,n,u,c,y,s,b,L,_,d){const E=l.length,p=Float64Array.BYTES_PER_ELEMENT,C=Uint32Array.BYTES_PER_ELEMENT,f=16,m=f-1+e*(8*p)+E*(3*C),P=t._lclib._malloc(m);try{const m=P+f-P%f,A=m+e*p,h=A+e*p,g=h+e*p,F=g+e*p,H=F+e*p,R=H+e*p,T=R+e*p,v=T+e*p,S=v+E*C,M=S+E*C,B=()=>[t._lclib.HEAPF64.subarray(m>>3,(m>>3)+e),t._lclib.HEAPF64.subarray(A>>3,(A>>3)+e),t._lclib.HEAPF64.subarray(h>>3,(h>>3)+e),t._lclib.HEAPF64.subarray(g>>3,(g>>3)+e),t._lclib.HEAPF64.subarray(F>>3,(F>>3)+e),t._lclib.HEAPF64.subarray(H>>3,(H>>3)+e),t._lclib.HEAPF64.subarray(R>>3,(R>>3)+e),t._lclib.HEAPF64.subarray(T>>3,(T>>3)+e),t._lclib.HEAPU32.subarray(v>>2,(v>>2)+E),t._lclib.HEAPU32.subarray(S>>2,(S>>2)+E),t._lclib.HEAPU32.subarray(M>>2,(M>>2)+E)],[N,I,U,D,Y,z,G,w,k,j,q]=B();N.set(u),I.set(c),U.set(y),D.set(s),Y.set(b),z.set(L),G.set(_),w.set(d),k.set(l),j.set(a),q.set(r);const x=t._lclib.computeCentrality(e,E,v,S,M,i,o,n,m,A,h,g,F,H,R,T),[O,$,J,K,Q,V,W,X,Z,ee,te]=B();return u.set(O),c.set($),y.set(J),s.set(K),b.set(Q),L.set(V),_.set(W),d.set(X),l.set(Z),a.set(ee),r.set(te),x}finally{t._lclib._free(P)}}t.LCForceDirectedLayout=void 0,function(e){function l(){return t._lclib.getMinIdealEdgeLength()}function a(e,l,a,r,i,o=c,n=y,b=s){return u(((e,l,a,r,i,u,c)=>t._lclib.applyForceDirectedLayout(e,l,a,r,i,u,c,o,n,b)),e,l,a,r,i)}e.getMinIdealEdgeLength=l,e.apply=a}(t.LCForceDirectedLayout||(t.LCForceDirectedLayout={})),t.LCCommunityLayout=void 0,function(e){function l(e,l,a,r,i,o=c,n=y,b=s){return u(((e,l,a,r,i,u,c)=>t._lclib.applyCommunityLayout(e,l,a,r,i,u,c,o,n,b)),e,l,a,r,i)}e.apply=l}(t.LCCommunityLayout||(t.LCCommunityLayout={})),t.LCSimpleLayout=void 0,function(e){function l(e,l,a,r,i){return u(t._lclib.applySimpleLayout,e,l,a,r,i)}e.apply=l}(t.LCSimpleLayout||(t.LCSimpleLayout={})),t.LCHierarchicalLayout=void 0,function(e){function l(e,l,a,r,i){return u(t._lclib.applyHierarchicalLayout,e,l,a,r,i)}e.apply=l}(t.LCHierarchicalLayout||(t.LCHierarchicalLayout={})),t.LCRadialTreeLayout=void 0,function(e){function l(e,l,a,r,i){return u(t._lclib.applyRadialTreeLayout,e,l,a,r,i)}e.apply=l}(t.LCRadialTreeLayout||(t.LCRadialTreeLayout={})),t.LCSmartTreeLayout=void 0,function(e){function l(e,l,a,r,i){return u(t._lclib.applySmartTreeLayout,e,l,a,r,i)}e.apply=l}(t.LCSmartTreeLayout||(t.LCSmartTreeLayout={})),t.RelationshipInterpretation=void 0,(b=t.RelationshipInterpretation||(t.RelationshipInterpretation={}))[b.Undirected=0]="Undirected",b[b.Directed=1]="Directed",b[b.Reversed=2]="Reversed",t.CentralityMode=void 0,(L=t.CentralityMode||(t.CentralityMode={}))[L.ByCC_Raw=0]="ByCC_Raw",L[L.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",L[L.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC",t.computeCentrality=_,t.defaultBudgetTheoreticalSeconds=c,t.defaultIdealEdgeLengthMultiplier=y,t.defaultRepulsionRadiusMultiplier=s,t.isLoaded=r,t.load=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
