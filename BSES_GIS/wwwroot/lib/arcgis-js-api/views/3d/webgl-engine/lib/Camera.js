/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Logger","../../../../core/mathUtils","../../../../core/screenUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/support/frustum","../../../../geometry/support/ray","../../../../geometry/support/vector","../../../ViewingMode","./fov"],(function(t,e,i,r,n,o,s,a,h,p,c,u,d,_,y,l,v,f,g,w,m,x,P,M,T){"use strict";var D;t.Camera=D=function(i){function r(t={}){var e;return(e=i.call(this,t)||this)._center=f.create(),e._up=f.create(),e._viewUp=f.create(),e._viewForward=f.create(),e._viewRight=f.create(),e._ray=x.create(),e._viewport=w.fromValues(0,0,1,1),e._padding=w.fromValues(0,0,0,0),e._fov=55/180*Math.PI,e._nearFar=l.fromValues(1,1e3),e._viewDirty=!0,e._viewMatrix=_.create(),e._viewProjectionDirty=!0,e._viewProjectionMatrix=_.create(),e._viewInverseTransposeMatrixDirty=!0,e._viewInverseTransposeMatrix=_.create(),e._frustumDirty=!0,e._frustum=m.create(),e._fullViewport=w.create(),e._pixelRatio=1,e.relativeElevation=0,e}e._inherits(r,i);var a=r.prototype;return a.depthNDCToWorld=function(t){const e=2*t-1;return 2*this.near*this.far/(this.far+this.near-e*(this.far-this.near))},a.copyFrom=function(t){v.copy(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,g.copy(this._viewport,t.viewport),this.notifyChange("_viewport"),g.copy(this._padding,t.padding),this.notifyChange("_padding"),y.copy(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.relativeElevation=t.relativeElevation;const e=t;return this._viewDirty=e._viewDirty,this._viewDirty||(d.copy(this._viewMatrix,t.viewMatrix),v.copy(this._viewRight,t.viewRight),v.copy(this._viewUp,t.viewUp),v.copy(this._viewForward,t.viewForward)),this._viewProjectionDirty=!0,this._frustumDirty=e._frustumDirty,this._frustumDirty||(m.copy(this._frustum,t.frustum),this._frustumDirty=!1),e._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(d.copy(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),g.copy(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this},a.copyViewFrom=function(t){this.eye=t.eye,this.center=t.center,this.up=t.up},a.clone=function(){return(new D).copyFrom(this)},a.equals=function(t){return v.exactEquals(this.eye,t.eye)&&v.exactEquals(this.center,t.center)&&v.exactEquals(this.up,t.up)&&g.exactEquals(this._viewport,t.viewport)&&g.exactEquals(this._padding,t.padding)&&y.exactEquals(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation},a.almostEquals=function(t){if(Math.abs(t.fov-this._fov)>=.001||g.squaredDistance(t.screenPadding,this.screenPadding)>=1||g.squaredDistance(this.screenViewport,t.screenViewport)>=1)return!1;v.sub(R,t.eye,t.center),v.sub(k,this.eye,this.center);const e=v.dot(R,k),i=v.sqrLen(R),r=v.sqrLen(k),n=5e-4;return e*e>=(1-1e-10)*i*r&&v.sqrDist(t.eye,this.eye)<Math.max(i,r)*n*n},a.computeRenderPixelSizeAt=function(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))},a.computeRenderPixelSizeAtDist=function(t){return t*this.perScreenPixelRatio},a.computeScreenPixelSizeAt=function(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))},a._viewDirectionDistance=function(t){return Math.abs(P.projectPointSignedLength(this.viewForward,v.subtract(R,t,this.eye)))},a.computeScreenPixelSizeAtDist=function(t){return t*this.perScreenPixelRatio},a.computeDistanceFromRadius=function(t,e){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(e||1)))},a.getScreenCenter=function(e=s.createScreenPointArray()){return e[0]=(this.padding[t.PaddingSide.LEFT]+this.width/2)/this.pixelRatio,e[1]=(this.padding[t.PaddingSide.TOP]+this.height/2)/this.pixelRatio,e},a.getRenderCenter=function(e,i=.5,r=.5){return e[0]=this.padding[t.PaddingSide.LEFT]+this.width*i,e[1]=this.padding[t.PaddingSide.BOTTOM]+this.height*r,e[2]=.5,e},a.setGLViewport=function(t){const e=this.viewport,i=this.padding;t.setViewport(e[0]-i[3],e[1]-i[2],e[2]+i[1]+i[3],e[3]+i[0]+i[2])},a.applyProjection=function(t,e){t!==S&&v.copy(S,t),S[3]=1,g.transformMat4(S,S,this.projectionMatrix);const i=Math.abs(S[3]);v.scale(S,S,1/i);const r=this.fullViewport;e[0]=o.lerp(0,r[0]+r[2],.5+.5*S[0]),e[1]=o.lerp(0,r[1]+r[3],.5+.5*S[1]),e[2]=.5*(S[2]+1),e[3]=i},a.unapplyProjection=function(t,e){const i=this.fullViewport;S[0]=(t[0]/(i[0]+i[2])*2-1)*t[3],S[1]=(t[1]/(i[1]+i[3])*2-1)*t[3],S[2]=(2*t[2]-1)*t[3],S[3]=t[3],null!=this.inverseProjectionMatrix&&(g.transformMat4(S,S,this.inverseProjectionMatrix),e[0]=S[0],e[1]=S[1],e[2]=S[2])},a.projectToScreen=function(t,e){return this.projectToRenderScreen(t,F),this.renderToScreen(F,e),e},a.projectToRenderScreen=function(t,e){if(S[0]=t[0],S[1]=t[1],S[2]=t[2],S[3]=1,g.transformMat4(S,S,this.viewProjectionMatrix),0===S[3])return null;v.scale(S,S,1/Math.abs(S[3]));const i=this.fullViewport;return"x"in e?(e.x=o.lerp(0,i[0]+i[2],.5+.5*S[0]),e.y=o.lerp(0,i[1]+i[3],.5+.5*S[1])):(e[0]=o.lerp(0,i[0]+i[2],.5+.5*S[0]),e[1]=o.lerp(0,i[1]+i[3],.5+.5*S[1]),e.length>2&&(e[2]=.5*(S[2]+1))),e},a.unprojectFromScreen=function(t,e){return this.unprojectFromRenderScreen(this.screenToRender(t,F),e)},a.unprojectFromRenderScreen=function(t,e){if(d.multiply(C,this.projectionMatrix,this.viewMatrix),!d.invert(C,C))return null;const i=this.fullViewport;return S[0]=2*(t[0]-i[0])/i[2]-1,S[1]=2*(t[1]-i[1])/i[3]-1,S[2]=2*t[2]-1,S[3]=1,g.transformMat4(S,S,C),0===S[3]?null:(e[0]=S[0]/S[3],e[1]=S[1]/S[3],e[2]=S[2]/S[3],e)},a.constrainWindowSize=function(t,e,i,r){const n=t*this.pixelRatio,o=e*this.pixelRatio,s=Math.max(n-i/2,0),a=Math.max(this.fullHeight-o-r/2,0),h=-Math.min(n-i/2,0),p=-Math.min(this.fullHeight-o-r/2,0);return[s,a,i-h- -Math.min(this.fullWidth-n-i/2,0),r-p- -Math.min(o-r/2,0)]},a.computeUp=function(t){t===M.ViewingMode.Global?this._computeUpGlobal():this._computeUpLocal()},a.screenToRender=function(t,e){const i=t[0]*this.pixelRatio,r=this.fullHeight-t[1]*this.pixelRatio;return e[0]=i,e[1]=r,e},a.renderToScreen=function(t,e){const i=t[0]/this.pixelRatio,r=(this.fullHeight-t[1])/this.pixelRatio;e[0]=i,e[1]=r},a._computeUpGlobal=function(){v.subtract(R,this.center,this.eye);const t=v.length(this.center);t<1?(v.set(this._up,0,0,1),this._markViewDirty(),this.notifyChange("_up")):Math.abs(v.dot(R,this.center))>.9999*v.length(R)*t||(v.cross(this._up,R,this.center),v.cross(this._up,this._up,R),v.normalize(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())},a._computeUpLocal=function(){v.direction(R,this.eye,this.center),Math.abs(R[2])<=.9999&&(v.scale(R,R,R[2]),v.set(this._up,-R[0],-R[1],1-R[2]),v.normalize(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())},a._compareAndSetView=function(t,e,i=""){"number"==typeof t[0]&&isFinite(t[0])&&"number"==typeof t[1]&&isFinite(t[1])&&"number"==typeof t[2]&&isFinite(t[2])?v.exactEquals(t,e)||(v.copy(e,t),this._markViewDirty(),i.length&&this.notifyChange(i)):n.getLogger("esri.views.3d.webgl-engine.lib.Camera").warn("Camera vector contains invalid number, ignoring value")},a._markViewDirty=function(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0},a._recomputeFrustum=function(){this._frustumDirty&&(m.fromMatrix(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)},a._ensureViewClean=function(){this._viewDirty&&(d.lookAt(this._viewMatrix,this.eye,this.center,this.up),v.set(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),v.set(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),v.set(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)},e._createClass(r,[{key:"pixelRatio",get:function(){return this._pixelRatio},set:function(t){this._pixelRatio=t>0?t:1}},{key:"eye",get:function(){return this._ray.origin},set:function(t){this._compareAndSetView(t,this._ray.origin)}},{key:"center",get:function(){return this._center},set:function(t){this._compareAndSetView(t,this._center,"_center")}},{key:"ray",get:function(){return v.subtract(this._ray.direction,this.center,this.eye),this._ray}},{key:"up",get:function(){return this._up},set:function(t){this._compareAndSetView(t,this._up,"_up")}},{key:"viewMatrix",get:function(){return this._ensureViewClean(),this._viewMatrix},set:function(t){d.copy(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"viewForward",get:function(){return this._ensureViewClean(),this._viewForward}},{key:"viewUp",get:function(){return this._ensureViewClean(),this._viewUp}},{key:"viewRight",get:function(){return this._ensureViewClean(),this._viewRight}},{key:"nearFar",get:function(){return this._nearFar}},{key:"near",get:function(){return this._nearFar[0]},set:function(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}},{key:"far",get:function(){return this._nearFar[1]},set:function(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}},{key:"viewport",get:function(){return this._viewport},set:function(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}},{key:"screenViewport",get:function(){if(1===this.pixelRatio)return this._viewport;const t=g.scale(w.create(),this._viewport,1/this.pixelRatio),e=this._get("screenViewport");return e&&g.equals(t,e)?e:t}},{key:"screenPadding",get:function(){if(1===this.pixelRatio)return this._padding;const t=g.scale(w.create(),this._padding,1/this.pixelRatio),e=this._get("screenPadding");return e&&g.equals(t,e)?e:t}},{key:"x",get:function(){return this._viewport[0]},set:function(e){e+=this._padding[t.PaddingSide.LEFT],this._viewport[0]!==e&&(this._viewport[0]=e,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}},{key:"y",get:function(){return this._viewport[1]},set:function(e){e+=this._padding[t.PaddingSide.BOTTOM],this._viewport[1]!==e&&(this._viewport[1]=e,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}},{key:"width",get:function(){return this._viewport[2]},set:function(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}},{key:"height",get:function(){return this._viewport[3]},set:function(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}},{key:"fullWidth",get:function(){return this._viewport[2]+this._padding[t.PaddingSide.RIGHT]+this._padding[t.PaddingSide.LEFT]},set:function(e){this.width=e-(this._padding[t.PaddingSide.RIGHT]+this._padding[t.PaddingSide.LEFT])}},{key:"fullHeight",get:function(){return this._viewport[3]+this._padding[t.PaddingSide.TOP]+this._padding[t.PaddingSide.BOTTOM]},set:function(e){this.height=e-(this._padding[t.PaddingSide.TOP]+this._padding[t.PaddingSide.BOTTOM])}},{key:"fullViewport",get:function(){return this._fullViewport[0]=this._viewport[0]-this._padding[t.PaddingSide.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[t.PaddingSide.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}},{key:"_aspect",get:function(){return this.width/this.height}},{key:"padding",get:function(){return this._padding},set:function(e){g.exactEquals(this._padding,e)||(this._viewport[0]+=e[t.PaddingSide.LEFT]-this._padding[t.PaddingSide.LEFT],this._viewport[1]+=e[t.PaddingSide.BOTTOM]-this._padding[t.PaddingSide.BOTTOM],this._viewport[2]-=e[t.PaddingSide.RIGHT]+e[t.PaddingSide.LEFT]-(this._padding[t.PaddingSide.RIGHT]+this._padding[t.PaddingSide.LEFT]),this._viewport[3]-=e[t.PaddingSide.TOP]+e[t.PaddingSide.BOTTOM]-(this._padding[t.PaddingSide.TOP]+this._padding[t.PaddingSide.BOTTOM]),g.copy(this._padding,e),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}},{key:"viewProjectionMatrix",get:function(){return this._viewProjectionDirty&&(d.multiply(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}},{key:"projectionMatrix",get:function(){const e=this.width,i=this.height,r=this.near*Math.tan(this.fovY/2),n=r*this._aspect,o=d.frustum(_.create(),-n*(1+2*this._padding[t.PaddingSide.LEFT]/e),n*(1+2*this._padding[t.PaddingSide.RIGHT]/e),-r*(1+2*this._padding[t.PaddingSide.BOTTOM]/i),r*(1+2*this._padding[t.PaddingSide.TOP]/i),this.near,this.far),s=this._get("projectionMatrix");return s&&d.equals(s,o)?s:o}},{key:"inverseProjectionMatrix",get:function(){return d.invert(_.create(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||_.create()}},{key:"fov",get:function(){return this._fov},set:function(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"fovX",get:function(){return T.fovd2fovx(this._fov,this.width,this.height)},set:function(t){this._fov=T.fovx2fovd(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"fovY",get:function(){return T.fovd2fovy(this._fov,this.width,this.height)},set:function(t){this._fov=T.fovy2fovd(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"distance",get:function(){return v.distance(this.center,this.eye)}},{key:"frustum",get:function(){return this._recomputeFrustum(),this._frustum}},{key:"viewInverseTransposeMatrix",get:function(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(d.invert(this._viewInverseTransposeMatrix,this.viewMatrix),d.transpose(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}},{key:"perRenderPixelRatio",get:function(){return Math.tan(this.fovX/2)/(this.width/2)}},{key:"perScreenPixelRatio",get:function(){return this.perRenderPixelRatio*this.pixelRatio}},{key:"aboveGround",get:function(){return null!=this.relativeElevation&&this.relativeElevation>=0}}]),r}(r),i.__decorate([a.property()],t.Camera.prototype,"_center",void 0),i.__decorate([a.property()],t.Camera.prototype,"_up",void 0),i.__decorate([a.property()],t.Camera.prototype,"_viewport",void 0),i.__decorate([a.property()],t.Camera.prototype,"_padding",void 0),i.__decorate([a.property()],t.Camera.prototype,"_fov",void 0),i.__decorate([a.property()],t.Camera.prototype,"_nearFar",void 0),i.__decorate([a.property()],t.Camera.prototype,"_pixelRatio",void 0),i.__decorate([a.property()],t.Camera.prototype,"pixelRatio",null),i.__decorate([a.property()],t.Camera.prototype,"eye",null),i.__decorate([a.property()],t.Camera.prototype,"center",null),i.__decorate([a.property()],t.Camera.prototype,"up",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"nearFar",null),i.__decorate([a.property()],t.Camera.prototype,"near",null),i.__decorate([a.property()],t.Camera.prototype,"far",null),i.__decorate([a.property()],t.Camera.prototype,"viewport",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"screenViewport",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"screenPadding",null),i.__decorate([a.property()],t.Camera.prototype,"x",null),i.__decorate([a.property()],t.Camera.prototype,"y",null),i.__decorate([a.property()],t.Camera.prototype,"width",null),i.__decorate([a.property()],t.Camera.prototype,"height",null),i.__decorate([a.property()],t.Camera.prototype,"fullWidth",null),i.__decorate([a.property()],t.Camera.prototype,"fullHeight",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"_aspect",null),i.__decorate([a.property()],t.Camera.prototype,"padding",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"projectionMatrix",null),i.__decorate([a.property({readOnly:!0})],t.Camera.prototype,"inverseProjectionMatrix",null),i.__decorate([a.property()],t.Camera.prototype,"fov",null),i.__decorate([a.property()],t.Camera.prototype,"fovX",null),i.__decorate([a.property()],t.Camera.prototype,"fovY",null),t.Camera=D=i.__decorate([u.subclass("esri.views.3d.webgl-engine.lib.Camera")],t.Camera);const S=w.create(),C=_.create(),R=f.create(),k=f.create(),F=s.createRenderScreenPointArray3();var j;t.PaddingSide=void 0,(j=t.PaddingSide||(t.PaddingSide={}))[j.TOP=0]="TOP",j[j.RIGHT=1]="RIGHT",j[j.BOTTOM=2]="BOTTOM",j[j.LEFT=3]="LEFT",Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));