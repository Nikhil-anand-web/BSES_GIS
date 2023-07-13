/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/mathUtils","../../../../core/maybe","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../ViewingMode","./CascadeCamera","./textureUtils","./Util","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/RenderbufferDescriptor","../../../webgl/Texture","../../../webgl/TextureDescriptor"],(function(e,t,s,a,i,r,n,c,o,h,u,d,l,_,f,p,m,x,g,b,y,M,w){"use strict";var S;e.SnapshotSlot=void 0,(S=e.SnapshotSlot||(e.SnapshotSlot={}))[S.Highlight=0]="Highlight",S[S.Default=1]="Default";let T=t._createClass((function(){this.camera=new p.CascadeCamera,this.lightMat=c.create()})),C=t._createClass((function(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0})),D=function(){function e(e,t){this._rctx=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this._numCascades=1,this.settings=new C,this._projectionView=c.create(),this._projectionViewInverse=c.create(),this._modelViewLight=c.create(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=_.create(),this._cascades=[new T,new T,new T,new T],this._lastOrigin=null,this._maxTextureSize=Math.min(s("esri-mobile")?2048:8192,this._rctx.parameters.maxTextureSize)}var r=e.prototype;return r.dispose=function(){this.enabled=!1,this.disposeOffscreenBuffers()},r.disposeOffscreenBuffers=function(){this._fbo=i.disposeMaybe(this._fbo),this._discardAllSnapshots()},r.getSnapshot=function(e){return this.enabled?this._snapshots[e]:null},r.start=function(e,t,s,a,i){x.assert(this.enabled),this._textureSize=this._computeTextureSize(e,i,a),this._ensureDepthTexture();const{near:r,far:n}=this._clampNearFar(s);this._computeCascadeDistances(n,r,a),this._setupMatrices(e,t);const{viewMatrix:c,projectionMatrix:o}=e;for(let h=0;h<this._numCascades;++h)this._constructCascade(h,o,c,t);this._lastOrigin=null,this.clear()},r.finish=function(e){x.assert(this.enabled),this._rctx.bindFramebuffer(e)},r.getShadowMapMatrices=function(e){if(!this._lastOrigin||!u.exactEquals(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||d.create(),u.copy(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){n.translate(A,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)B[16*t+e]=A[e]}}return B},r.takeCascadeSnapshotTo=function(e,t){x.assert(this.enabled);const s=this._ensureSnapshot(t);this._bindFbo();const a=this._rctx,i=a.bindTexture(s,M.Texture.TEXTURE_UNIT_FOR_UPDATES);a.gl.copyTexSubImage2D(g.TextureType.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),a.bindTexture(i,M.Texture.TEXTURE_UNIT_FOR_UPDATES)},r.clear=function(){const e=this._rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(g.ClearBufferBit.COLOR_BUFFER_BIT|g.ClearBufferBit.DEPTH_BUFFER_BIT)},r._computeTextureSize=function(e,t,s){const a=Math.min(window.devicePixelRatio,t)/e.pixelRatio,i=Math.max(e.fullWidth,e.fullHeight)*a,r=s?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality;return Math.floor(Math.min(this._maxTextureSize,m.applyTextureResizeModulo((1===this.numCascades?1:2)*i*r)))},r._ensureDepthTexture=function(){if(this._fbo?.width===this._textureSize)return;const e=new w.TextureDescriptor(this._textureSize);e.wrapMode=g.TextureWrapMode.CLAMP_TO_EDGE,e.samplingMode=g.TextureSamplingMode.NEAREST,this._fbo?.dispose(),this._fbo=new b.FramebufferObject(this._rctx,e,new y.RenderbufferDescriptor(g.RenderbufferFormat.DEPTH_COMPONENT16,this._textureSize))},r._ensureSnapshot=function(e){let t=this._snapshots[e];if(null!=t&&t.descriptor.width===this._textureSize)return t;this._discardSnapshot(e);const s=new w.TextureDescriptor;return s.wrapMode=g.TextureWrapMode.CLAMP_TO_EDGE,s.samplingMode=g.TextureSamplingMode.NEAREST,s.width=this._textureSize,s.height=this._textureSize,t=new M.Texture(this._rctx,s),this._snapshots[e]=t,t},r._discardSnapshot=function(e){this._snapshots[e]=i.disposeMaybe(this._snapshots[e])},r._discardAllSnapshots=function(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0},r._bindFbo=function(){const e=this._rctx;e.unbindTexture(this.depthTexture),e.bindFramebuffer(this._fbo)},r._constructCascade=function(e,t,s,a){const i=this._cascades[e],r=-this._cascadeDistances[e],c=-this._cascadeDistances[e+1],o=(t[10]*r+t[14])/Math.abs(t[11]*r+t[15]),h=(t[10]*c+t[14])/Math.abs(t[11]*c+t[15]);x.assert(o<h);for(let n=0;n<8;++n){const e=n%4==0||n%4==3?-1:1,t=n%4==0||n%4==1?-1:1,s=n<4?o:h;l.set(z,e,t,s,1);const a=R[n];l.transformMat4(a,z,this._projectionViewInverse),a[0]/=a[3],a[1]/=a[3],a[2]/=a[3]}u.negate(U,R[0]),i.camera.viewMatrix=n.translate(v,this._modelViewLight,U);for(let n=0;n<8;++n)u.transformMat4(R[n],R[n],i.camera.viewMatrix);let d=R[0][2],_=R[0][2];for(let n=1;n<8;++n)d=Math.min(d,R[n][2]),_=Math.max(_,R[n][2]);d-=200,_+=200,i.camera.near=-_,i.camera.far=-d,se(s,a,d,_,i.camera),n.multiply(i.lightMat,i.camera.projectionMatrix,i.camera.viewMatrix);const f=this._textureSize/(1===this.numCascades?1:2);i.camera.viewport=[e%2==0?0:f,0===Math.floor(e/2)?0:f,f,f]},r._setupMatrices=function(e,t){n.multiply(this._projectionView,e.projectionMatrix,e.viewMatrix),n.invert(this._projectionViewInverse,this._projectionView);const s=this._viewingMode===f.ViewingMode.Global?e.eye:u.set(U,0,0,1);n.lookAt(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],s)},r._clampNearFar=function(e){let{near:t,far:s}=e;return t<2&&(t=2),s<2&&(s=2),t>=s&&(t=2,s=4),{near:t,far:s}},r._computeCascadeDistances=function(e,t,s){const i=s?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(x.logWithBase(e/t,4)),i);const r=(e-t)/this._numCascades,n=(e/t)**(1/this._numCascades);let c=t,o=t;for(let h=0;h<this._numCascades+1;++h)this._cascadeDistances[h]=a.lerp(c,o,this.settings.splitSchemeLambda),c*=n,o+=r},t._createClass(e,[{key:"depthTexture",get:function(){return this._fbo?.colorTexture}},{key:"textureSize",get:function(){return this._textureSize}},{key:"numCascades",get:function(){return this._numCascades}},{key:"cascadeDistances",get:function(){return l.set(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}},{key:"maxCascades",get:function(){return this.settings.maxNumCascadesHighQuality},set:function(e){this.settings.maxNumCascadesHighQuality=a.clamp(Math.floor(e),1,4)}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e,e||this.disposeOffscreenBuffers()}},{key:"ready",get:function(){return this._enabled&&null!=this.depthTexture}},{key:"cascades",get:function(){for(let e=0;e<this._numCascades;++e)N[e]=this._cascades[e];return N.length=this._numCascades,N}},{key:"gpuMemoryUsage",get:function(){return this._snapshots.reduce(((e,t)=>e+(t?.gpuMemoryUsage??0)),this._fbo?.gpuMemoryUsage??0)}},{key:"test",get:function(){return{cascades:this._cascades,textureSize:this._textureSize}}}]),e}();const v=c.create(),z=_.create(),R=[];for(let ae=0;ae<8;++ae)R.push(_.create());const k=h.create(),E=h.create(),O=h.create(),F=h.create(),j=h.create(),U=d.create(),N=[],A=c.create(),B=new Array(64),H=h.create(),L=h.create(),V=[h.create(),h.create(),h.create(),h.create()],P=h.create(),Q=h.create(),I=h.create(),q=h.create(),W=h.create(),G=h.create(),X=h.create();function J(e,t,s,a,i,r,n,c){o.set(H,0,0);for(let x=0;x<4;++x)o.add(H,H,e[x]);o.scale(H,H,.25),o.set(L,0,0);for(let x=4;x<8;++x)o.add(L,L,e[x]);o.scale(L,L,.25),o.lerp(V[0],e[4],e[5],.5),o.lerp(V[1],e[5],e[6],.5),o.lerp(V[2],e[6],e[7],.5),o.lerp(V[3],e[7],e[4],.5);let h=0,u=o.squaredDistance(V[0],H);for(let x=1;x<4;++x){const e=o.squaredDistance(V[x],H);e<u&&(u=e,h=x)}o.subtract(P,V[h],e[h+4]);const d=P[0];let l,_;P[0]=-P[1],P[1]=d,o.subtract(Q,L,H),o.dot(Q,P)<0&&o.negate(P,P),o.lerp(P,P,Q,s),o.normalize(P,P),l=_=o.dot(o.subtract(I,e[0],H),P);for(let x=1;x<8;++x){const t=o.dot(o.subtract(I,e[x],H),P);t<l?l=t:t>_&&(_=t)}o.copy(a,H),o.scale(I,P,l-t),o.add(a,a,I);let f=-1,p=1,m=0,g=0;for(let x=0;x<8;++x){o.subtract(q,e[x],a),o.normalize(q,q);const t=P[0]*q[1]-P[1]*q[0];t>0?t>f&&(f=t,m=x):t<p&&(p=t,g=x)}x.verify(f>0,"leftArea"),x.verify(p<0,"rightArea"),o.scale(W,P,l),o.add(W,W,H),o.scale(G,P,_),o.add(G,G,H),X[0]=-P[1],X[1]=P[0];const b=x.rayRay2D(a,e[g],G,o.add(I,G,X),1,i),y=x.rayRay2D(a,e[m],G,I,1,r),M=x.rayRay2D(a,e[m],W,o.add(I,W,X),1,n),w=x.rayRay2D(a,e[g],W,I,1,c);x.verify(b,"rayRay"),x.verify(y,"rayRay"),x.verify(M,"rayRay"),x.verify(w,"rayRay")}function K(e,t){return 3*t+e}const Y=h.create();function Z(e,t){return o.set(Y,e[t],e[t+3]),Y}const $=h.create(),ee=r.create();function te(e,t,s,a,i){o.subtract($,s,a),o.scale($,$,.5),ee[0]=$[0],ee[1]=$[1],ee[2]=0,ee[3]=$[1],ee[4]=-$[0],ee[5]=0,ee[6]=$[0]*$[0]+$[1]*$[1],ee[7]=$[0]*$[1]-$[1]*$[0],ee[8]=1,ee[K(0,2)]=-o.dot(Z(ee,0),e),ee[K(1,2)]=-o.dot(Z(ee,1),e);let r=o.dot(Z(ee,0),s)+ee[K(0,2)],n=o.dot(Z(ee,1),s)+ee[K(1,2)],c=o.dot(Z(ee,0),a)+ee[K(0,2)],h=o.dot(Z(ee,1),a)+ee[K(1,2)];r=-(r+c)/(n+h),ee[K(0,0)]+=ee[K(1,0)]*r,ee[K(0,1)]+=ee[K(1,1)]*r,ee[K(0,2)]+=ee[K(1,2)]*r,r=1/(o.dot(Z(ee,0),s)+ee[K(0,2)]),n=1/(o.dot(Z(ee,1),s)+ee[K(1,2)]),ee[K(0,0)]*=r,ee[K(0,1)]*=r,ee[K(0,2)]*=r,ee[K(1,0)]*=n,ee[K(1,1)]*=n,ee[K(1,2)]*=n,ee[K(2,0)]=ee[K(1,0)],ee[K(2,1)]=ee[K(1,1)],ee[K(2,2)]=ee[K(1,2)],ee[K(1,2)]+=1,r=o.dot(Z(ee,1),t)+ee[K(1,2)],n=o.dot(Z(ee,2),t)+ee[K(2,2)],c=o.dot(Z(ee,1),s)+ee[K(1,2)],h=o.dot(Z(ee,2),s)+ee[K(2,2)],r=-.5*(r/n+c/h),ee[K(1,0)]+=ee[K(2,0)]*r,ee[K(1,1)]+=ee[K(2,1)]*r,ee[K(1,2)]+=ee[K(2,2)]*r,r=o.dot(Z(ee,1),t)+ee[K(1,2)],n=o.dot(Z(ee,2),t)+ee[K(2,2)],c=-n/r,ee[K(1,0)]*=c,ee[K(1,1)]*=c,ee[K(1,2)]*=c,i[0]=ee[0],i[1]=ee[1],i[2]=0,i[3]=ee[2],i[4]=ee[3],i[5]=ee[4],i[6]=0,i[7]=ee[5],i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=ee[6],i[13]=ee[7],i[14]=0,i[15]=ee[8]}function se(e,t,s,i,r){const n=1/R[0][3],c=1/R[4][3];x.assert(n<c);let o=n+Math.sqrt(n*c);const h=Math.sin(a.acosClamped(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));o/=h,J(R,o,h,k,E,O,F,j),te(k,E,F,j,r.projectionMatrix),r.projectionMatrix[10]=2/(s-i),r.projectionMatrix[14]=-(s+i)/(s-i)}e.ShadowMap=D,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));