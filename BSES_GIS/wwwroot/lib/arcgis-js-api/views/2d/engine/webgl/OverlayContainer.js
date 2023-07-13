/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../../../chunks/mat3","../../../../chunks/mat3f32","../../../../chunks/vec2f32","../../../../chunks/vec3f32","../../../../geometry/support/normalizeUtils","../../../../geometry/support/spatialReferenceUtils","../../viewpointUtils","../brushes","./enums","./WGLContainer"],(function(e,t,r,s,a,i,o,n,c,l,u,d){"use strict";let h=function(d){function h(){var e;return(e=d.apply(this,arguments)||this)._localOrigin=t.createScreenPoint(0,0),e._viewStateId=-1,e._dvsMat3=s.create(),e.requiresDedicatedFBO=!1,e}e._inherits(h,d);var p=h.prototype;return p.beforeRender=function(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)},p.prepareRenderPasses=function(t){const r=t.registerRenderPass({name:"overlay",brushes:[l.brushes.overlay],target:()=>this.children,drawPhase:u.WGLDrawPhase.MAP});return[...e._get(e._getPrototypeOf(h.prototype),"prepareRenderPasses",this).call(this,t),r]},p._updateMatrices=function(e){const{state:t}=e,{id:s,size:n,pixelRatio:c,resolution:l,rotation:u,viewpoint:d,displayMat3:h}=t;if(this._viewStateId===s)return;const p=Math.PI/180*u,f=c*n[0],v=c*n[1],{x:y,y:M}=d.targetGeometry,_=o.normalizeMapX(y,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=M;const g=l*f,m=l*v,w=r.identity(this._dvsMat3);r.multiply(w,w,h),r.translate(w,w,a.fromValues(f/2,v/2)),r.scale(w,w,i.fromValues(f/g,-v/m,1)),r.rotate(w,w,-p),this._viewStateId=s},p._updateOverlays=function(e,t){const{state:r}=e,{rotation:s,spatialReference:a,worldScreenWidth:i,size:o,viewpoint:l}=r,u=this._localOrigin;let d=0;const h=n.getInfo(a);if(h&&a.isWrappable){const e=o[0],n=o[1],p=180/Math.PI*s,f=Math.abs(Math.cos(p)),v=Math.abs(Math.sin(p)),y=Math.round(e*f+n*v),[M,_]=h.valid,g=c.getWorldWidth(a),{x:m,y:w}=l.targetGeometry,P=[m,w],b=[0,0];r.toScreen(b,P);const R=[0,0];let O;O=y>i?.5*i:.5*y;const k=Math.floor((m+.5*g)/g),C=M+k*g,D=_+k*g,I=[b[0]+O,0];r.toMap(R,I),R[0]>D&&(d=g),I[0]=b[0]-O,r.toMap(R,I),R[0]<C&&(d=-g);for(const r of t){const e=r.elementView.bounds;if(null==e)continue;const[t,,s]=e;t<M&&s>M?r.updateDrawCoords(u,g):s>_&&t<_?r.updateDrawCoords(u,-g):r.updateDrawCoords(u,d)}}else for(const n of t)n.updateDrawCoords(u,d)},e._createClass(h,[{key:"dvsMat3",get:function(){return this._dvsMat3}}]),h}(d);return h}));