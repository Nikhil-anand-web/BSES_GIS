/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Viewpoint","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../chunks/common","../../chunks/mat2d","../../chunks/mat2df32","../../chunks/mat2df64","../../chunks/mat3","../../chunks/mat3f32","../../chunks/vec2","../../chunks/vec2f32","../../chunks/vec2f64","../../core/libs/gl-matrix-2/types/vec2","./viewpointUtils","../../geometry/Extent","../../geometry/Point"],(function(t,e,i,r,s,o,n,a,c,p,l,h,u,f,d,m,y,v,_,w,R,g,M){"use strict";var x;const k=[0,0];let z=x=function(e){function i(t){var i;return(i=e.call(this,t)||this)._viewpoint2D={center:_.create(),rotation:0,scale:0,spatialReference:void 0},i.center=[0,0],i.extent=new g,i.id=0,i.inverseTransform=f.create(),i.resolution=0,i.rotation=0,i.scale=0,i.transform=f.create(),i.transformNoRotation=f.create(),i.displayMat3=m.create(),i.displayViewMat3=m.create(),i.viewMat3=m.create(),i.viewMat2d=u.create(),i.worldScreenWidth=0,i.size=[0,0],i}t._inherits(i,e);var s=i.prototype;return s.copy=function(t){const e=this.size,i=this.viewpoint;return i&&e?(this.viewpoint=R.copy(i,t.viewpoint),this._set("size",y.copy(e,t.size))):(this.viewpoint=t.viewpoint.clone(),this._set("size",[t.size[0],t.size[1]])),this._set("pixelRatio",t.pixelRatio),this},s.clone=function(){return new x({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})},s.toMap=function(t,e,i){return w.isVec2(e)?y.transformMat2d(t,e,this.inverseTransform):(k[0]=e,k[1]=i,y.transformMat2d(t,k,this.inverseTransform))},s.toScreen=function(t,e,i){return w.isVec2(e)?y.transformMat2d(t,e,this.transform):(k[0]=e,k[1]=i,y.transformMat2d(t,k,this.transform))},s.toScreenNoRotation=function(t,e,i){return w.isVec2(e)?y.transformMat2d(t,e,this.transformNoRotation):(k[0]=e,k[1]=i,y.transformMat2d(t,k,this.transformNoRotation))},s.getScreenTransform=function(t,e){const{center:i}=this._viewpoint2D,r=this._get("pixelRatio")||1,s=this._get("size");return R.getMatrix(t,i,s,e,0,r),t},s._update=function(){const{center:t,spatialReference:e,scale:i,rotation:s}=this._viewpoint2D,o=this._get("pixelRatio")||1,n=this._get("size"),a=new r({targetGeometry:new M(t[0],t[1],e),scale:i,rotation:s});if(this._set("viewpoint",a),!n||!e||!i)return;this.resolution=R.getResolution(a),this.rotation=s,this.scale=i,this.spatialReference=e,y.copy(this.center,t);const c=0!==n[0]?2/n[0]:0,p=0!==n[1]?-2/n[1]:0;d.set(this.displayMat3,c,0,0,0,p,0,-1,1,1);const u=d.identity(this.viewMat3),f=v.fromValues(n[0]/2,n[1]/2),m=v.fromValues(-n[0]/2,-n[1]/2),_=l.toRadian(s);d.translate(u,u,f),d.rotate(u,u,_),d.translate(u,u,m),d.multiply(this.displayViewMat3,this.displayMat3,u);const w=h.fromTranslation(this.viewMat2d,f);return h.rotate(w,w,_),h.translate(w,w,m),R.getExtent(this.extent,a,n),R.getTransform(this.transform,a,n,o),h.invert(this.inverseTransform,this.transform),R.getTransformNoRotation(this.transformNoRotation,a,n,o),this.worldScreenWidth=R.getWorldScreenWidth(this.spatialReference,this.resolution),this._set("id",this.id+1),this},t._createClass(i,[{key:"pixelRatio",set:function(t){this._set("pixelRatio",t),this._update()}},{key:"size",set:function(t){this._set("size",t),this._update()}},{key:"viewpoint",set:function(t){if(t){const e=this._viewpoint2D,i=t.targetGeometry;e.center[0]=i.x,e.center[1]=i.y,e.rotation=t.rotation,e.scale=t.scale,e.spatialReference=i.spatialReference}this._update()}}]),i}(s.JSONSupport);e.__decorate([o.property({readOnly:!0})],z.prototype,"id",void 0),e.__decorate([o.property({value:1,json:{write:!0}})],z.prototype,"pixelRatio",null),e.__decorate([o.property({json:{write:!0}})],z.prototype,"size",null),e.__decorate([o.property()],z.prototype,"spatialReference",void 0),e.__decorate([o.property({type:r,json:{write:!0}})],z.prototype,"viewpoint",null),z=x=e.__decorate([p.subclass("esri.views.2d.ViewState")],z);return z}));