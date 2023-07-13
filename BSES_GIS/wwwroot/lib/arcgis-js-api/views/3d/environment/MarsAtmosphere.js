/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/mathUtils","../../../core/maybe","../../../core/reactiveUtils","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec2","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/ellipsoidUtils","../../../geometry/support/FloatArray","./AtmosphereType","./atmosphereUtils","../../../chunks/SimpleAtmosphere.glsl","./SimpleAtmosphereTechnique","./SimpleAtmosphereTechniqueConfiguration","./resources/MarsAtmosphereTexture","../support/mathUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/glUtil3D","../webgl-engine/lib/Util","../webgl-engine/lib/VertexArrayObject","../webgl-engine/lib/VertexAttribute","../../webgl/BufferObject","../../webgl/enums","../../webgl/Texture","../../webgl/TextureDescriptor","../../webgl/Util"],(function(e,t,s,r,i,a,n,o,h,c,u,p,l,m,_,d,g,f,A,b,x,y,R,T,V,P,w,v,q,S){"use strict";const C=128,F=-l.innerAtmosphereDepth,M=0,U=50,O=()=>1-511/512,k=f.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5e3,1-250/512],[5e4,.4140625]]);let D=function(){function a(e,t){this.view=e,this.type=p.AtmosphereType.Mars,this._passParameters=new m.SimpleAtmospherePassParameters,this._vaoCount=0,this._texV1=1;const s=c.getReferenceEllipsoid(e.spatialReference);this._planetRadius=s.radius,this._outerRimWidth=s.outerAtmosphereRimWidth,this._innerRimFactor=(this._planetRadius+F)/this._planetRadius,this._middleRimFactor=(this._planetRadius+M)/this._planetRadius,this._outerRimFactor=(this._planetRadius+this._outerRimWidth)/this._planetRadius,this._texV0=M/this._outerRimWidth,this._texVScale=this._texV1-this._texV0,this._techniqueRepository=t.techniqueRepository;const i=t.renderContext.rctx;this._cameraChangeHandle=r.watch((()=>this.view.state?.camera),(()=>t.requestRender()),r.syncAndInitial),this._vao=this._createRibbon(i),this._vaoCount=S.vertexCount(this._vao,"geometry"),this._fadeVao=y.createQuadVAO(i),this._fadeVaoCount=S.vertexCount(this._fadeVao,"geometry");const a=new q.TextureDescriptor;a.wrapMode=w.TextureWrapMode.CLAMP_TO_EDGE,a.flipped=!0,a.width=1,a.height=512,this._passParameters.texture=new v.Texture(i,a,g.marsAtmosphereTextureSimple);const n=new d.SimpleAtmosphereTechniqueConfiguration;n.geometry=d.SimpleAtmosphereGeometry.Cone,this._coneTechnique=this._techniqueRepository.acquire(_.SimpleAtmosphereTechnique,n),n.geometry=d.SimpleAtmosphereGeometry.Underground,this._undergroundTechnique=this._techniqueRepository.acquire(_.SimpleAtmosphereTechnique,n)}var f=a.prototype;return f.destroy=function(){this._coneTechnique.release(),this._undergroundTechnique.release(),this._cameraChangeHandle.remove(),this._passParameters.texture=s.disposeMaybe(this._passParameters.texture),this._fadeVao.dispose(),this._vao.dispose()},f.render=function(e){const t=e.bindParameters.camera;this._update(t);const s=e.rctx;this._passParameters.undergroundFadeAlpha<1&&(s.bindTechnique(this._coneTechnique,this._passParameters,e.bindParameters),s.bindVAO(this._vao),s.drawArrays(w.PrimitiveType.TRIANGLES,0,this._vaoCount)),this._passParameters.undergroundFadeAlpha>0&&(s.bindTechnique(this._undergroundTechnique,this._passParameters,e.bindParameters),s.bindVAO(this._fadeVao),s.drawArrays(w.PrimitiveType.TRIANGLE_STRIP,0,this._fadeVaoCount))},f.renderHaze=function(){},f._update=function(e){const s=h.create(),r=this._planetRadius,i=o.length(e.eye),a=i-r;if(a<0){const e=Math.min(-a/5e3,1);this._passParameters.undergroundFadeAlpha=e}else this._passParameters.undergroundFadeAlpha=0;const c=Math.max(U,a),u=r+F;this._passParameters.innerScale=E(r+c,r,u)-1,this._passParameters.altitudeFade=l.computeInnerAltitudeFade(a),o.scale(s,e.eye,(r+U)/i),I(s,e.center,e.up,r,this._passParameters.silhouette);const p=this._computeScreenRimWidth(e,s,e.up,this._passParameters.silhouette),m=O(),_=k(a);let d=this._texV0+m*this._texVScale,g=this._texV0+p*_*this._texVScale;if(a>U){I(e.eye,e.center,e.up,r,this._passParameters.silhouette);const s=this._computeScreenRimWidth(e,e.eye,e.up,this._passParameters.silhouette),i=t.clamp((s-1.5)/(p-1.5),0,1);d=this._texV0+i*m*this._texVScale,g=this._texV0+t.lerp(this._texV1,p*_,i)*this._texVScale}n.set(this._passParameters.texV,d,g)},f._createRibbon=function(e){const t=u.newFloatArray(3+3*C*3),s=new Uint32Array(3*C*5);t[0]=0,t[1]=0,t[2]=-1;for(let a=0;a<C;a++){const e=9*a+3;t[e]=a,t[e+1]=this._innerRimFactor,t[e+2]=-1,t[e+3]=a,t[e+4]=this._middleRimFactor,t[e+5]=0,t[e+6]=a,t[e+7]=this._outerRimFactor,t[e+8]=1;const r=3*a+1,i=a===C-1?1:r+3,n=15*a;s[n]=r,s[n+1]=r+1,s[n+2]=i+1,s[n+3]=i+1,s[n+4]=i,s[n+5]=r,s[n+6]=r+1,s[n+7]=r+2,s[n+8]=i+2,s[n+9]=i+2,s[n+10]=i+1,s[n+11]=r+1,s[n+12]=r,s[n+13]=i,s[n+14]=0}const r=G.createBuffer(s.length),i=r.position;for(let a=0;a<s.length;++a){const e=3*s[a];i.set(a,0,t[e]),i.set(a,1,t[e+1]),i.set(a,2,t[e+2])}return new T.VertexArrayObject(e,x.Default3D,{geometry:A.glLayout(G)},{geometry:P.BufferObject.createVertex(e,w.Usage.STATIC_DRAW,r.buffer)})},f._computeScreenRimWidth=function(e,t,s,r){return o.add(W,r.center,r.v2),o.scale(j,W,this._outerRimFactor),i.lookAt(L,t,W,s),R.project(W,L,e.projectionMatrix,e.viewport,W),R.project(j,L,e.projectionMatrix,e.viewport,j),o.distance(W,j)/e.height},e._createClass(a)}();function I(e,t,s,r,i){const a=o.length(e),n=r*Math.sqrt(a*a-r*r)/a,h=Math.sqrt(r*r-n*n),c=i.v1,u=i.v2;return o.scale(i.center,e,h/a),o.cross(c,e,t),o.squaredLength(c)<1&&o.cross(c,e,s),o.scale(c,c,n/o.length(c)),o.cross(u,c,e),o.scale(u,u,n/o.length(u)),n}const L=a.create(),W=h.create(),j=h.create();function E(e,t,s){return e*e/(Math.sqrt(e*e-t*t)*Math.sqrt(e*e-s*s)+t*s)}const G=b.newLayout().vec3f(V.VertexAttribute.POSITION);return D}));
