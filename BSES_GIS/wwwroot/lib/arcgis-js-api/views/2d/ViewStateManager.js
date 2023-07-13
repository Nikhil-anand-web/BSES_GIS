/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Viewpoint","../../core/Accessor","../../core/Error","../../core/has","../../core/Logger","../../core/reactiveUtils","../../core/screenUtils","../../core/Warning","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../chunks/pe","../../geometry/Point","../../geometry/projection","../../geometry/support/spatialReferenceUtils","./PaddedViewState","./viewpointUtils","../../geometry/Extent"],(function(e,t,i,r,n,s,o,a,c,p,l,h,d,u,g,y,w,v,f,_,m,S,x){"use strict";function V(e){return"esri.Viewpoint"===e?.declaredClass}e.ViewStateManager=function(e){function i(t){var i;return(i=e.call(this,t)||this).constraints=null,i.ready=!1,i.resizeAlign="center",i.addHandles([p.watch((()=>i.constraints?.version),(e=>{i.constraints&&e&&i.ready&&(i.state.viewpoint=i.constraints.fit(i.state.paddedViewState.viewpoint))}),p.sync)]),i}t._inherits(i,e);var r=i.prototype;return r.getUserStartupOptions=function(e){if(!e[0]&&!e[1])return{center:void 0,rotation:void 0,scale:void 0};const{padding:t,constraints:i}=this,r=this._get("center"),n=this._get("extent"),s=this._get("scale"),o=this._get("rotation"),a=this._get("viewpoint"),c=this._get("zoom"),p=null!=c&&null!=i&&i.zoomToScale(c)||void 0;let l,h,d;const u=a?.rotation,g=a?.targetGeometry;"extent"===g?.type?l=g:"point"===g?.type&&(h=g,d=a?.scale);const y=n??l;return{center:r??h??y?.center,rotation:o??u,scale:(s??p??d??(y&&S.extentToScale(y,[e[0]-t.left-t.right,e[1]-t.top-t.bottom])))||void 0}},r.startup=function(e,t,i,r){const n=e.targetGeometry;try{this._project(e,i)}catch(s){c.getLogger(this).warn(new h("mapview:startup-projection-error","projection of initial viewpoint to the view's spatial reference, defaulting to the initial viewpoint.",{center:n.toJSON(),spatialReference:i,error:s})),e.targetGeometry=r||new v({x:0,y:0,spatialReference:i})}this.constraints?.fit(e),this._set("state",new m({padding:this.padding,size:t,viewpoint:e})),this._set("ready",!0)},r.teardown=function(){this._set("ready",!1);const{center:[e,t],spatialReference:i,rotation:r,scale:n}=this.state.paddedViewState,s=new v({x:e,y:t,spatialReference:i});this._set("viewpoint",null),this._set("extent",null),this._set("center",s),this._set("zoom",-1),this._set("rotation",r),this._set("scale",n),this._set("state",null)},r.changeSpatialReference=function(e){const t=this.state.paddedViewState.clone();if(null==this._scaleBeforeChangingSpatialReference)this._scaleBeforeChangingSpatialReference=t.scale;else{const e=t.viewpoint.clone();e.scale=this._scaleBeforeChangingSpatialReference,t.viewpoint=e}const i=t.clone(),[r,s]=t.center;let o=null;try{o=this._project(new v({x:r,y:s,spatialReference:t.spatialReference}),e)}catch(l){w.isLoaded()||c.getLogger(this).warn(new h("mapview:spatial-reference-change","could not project the view's center to the new spatial reference",{center:o?.toJSON(),spatialReference:e,error:l}))}o||(o=new v({x:0,y:0,spatialReference:e}));const p=S.centerAt(new n({targetGeometry:new v,scale:0,rotation:0}),t.viewpoint,o);i.viewpoint=p;try{const r=20,n=[t.size[0]/2,t.size[1]/2],s=[n[0]+r,n[1]],o=t.toMap([0,0],s),{x:c,y:l}=this._project(new v({x:o[0],y:o[1],spatialReference:t.spatialReference}),e);o[0]=c,o[1]=l,i.toScreen(o,o);const h=S.angleBetween(n,o,s),d=Math.hypot(o[0]-n[0],o[1]-n[1])/r;!Number.isFinite(d)||Math.abs(d)>4?(p.rotation=0,p.targetGeometry=new v({x:0,y:0,spatialReference:e})):(p.scale*=d,p.scale>a("mapview-srswitch-adjust-rotation-scale-threshold")?p.rotation=0:p.rotation+=Number.isFinite(h)?h:0)}catch{}this._get("constraints")?.constrain(p,void 0),this._get("state").viewpoint=p},r.resize=function(e,t){if(!this.ready)return;const i=this.state;let r=this.state.paddedViewState.viewpoint;const n=this.state.paddedViewState.size.concat();i.size=[e,t],S.resize(r,r,n,this.state.paddedViewState.size,this.resizeAlign),r=this.constraints?.constrain(r,void 0)??r,this.state.viewpoint=r},r.toMap=function(e){if(!this.ready)return null;const t=[0,0],[i,r]=this.state.toMap(t,[e.x,e.y]),n=this.state.spatialReference;return new v({x:i,y:r,spatialReference:n})},r.toScreen=function(e){if(!this.ready)return null;const t=this._project(e,this.state.spatialReference),i=[t.x,t.y];return this.state.toScreen(i,i),l.createScreenPoint(i[0],i[1])},r._project=function(e,t){const i=e&&e.targetGeometry||e;if(!t)return e;if(!i)return null;if(t.imageCoordinateSystem||i.spatialReference?.imageCoordinateSystem)return e;if(_.equals(t,i.spatialReference))return e;const r=f.project(i,t);if(!r)throw new o("mapview:projection-not-possible","projecting input geometry to target spatial reference returned a null value",{geometry:i,spatialReference:t});return V(e)?(e.targetGeometry=r,e):r},t._createClass(i,[{key:"center",get:function(){if(!this.ready)return this._get("center");const{center:e,spatialReference:t}=this.state.paddedViewState;return this.state.commitProperty("id"),new v({x:e[0],y:e[1],spatialReference:t})},set:function(e){if(null==e)return;if(!this.ready)return void this._set("center",e);let t;try{t=this._project(e,this.state.spatialReference)}catch(r){return void c.getLogger(this).error(new o("mapview:invalid-center","could not project the value in the view's spatial reference",{input:e,error:r}))}const i=this.viewpoint;S.centerAt(i,i,t),this.viewpoint=i}},{key:"extent",get:function(){return this.ready?(this.state.commitProperty("id"),this.state.paddedViewState.extent.clone()):this._get("extent")},set:function(e){if(null==e)return;if(!e.width||!e.height)return void c.getLogger(this).error(new o("mapview:invalid-extent","invalid extent size"));if(!this.ready)return this._set("extent",e),this._set("center",void 0),this._set("viewpoint",void 0),this._set("scale",void 0),void this._set("zoom",void 0);let t;try{t=this._project(e,this.state.spatialReference)}catch(r){return void c.getLogger(this).error(new o("mapview:invalid-extent","could not project the value in the view's spatial reference",{error:r}))}const i=this.viewpoint;S.setExtent(i,i,t,this.state.size,{constraints:this.constraints}),this.viewpoint=i}},{key:"padding",get:function(){return this.ready?this.state.padding:this._get("padding")},set:function(e){this.ready?(this.state.padding=e,this._set("padding",this.state.padding)):this._set("padding",e)}},{key:"resolution",get:function(){return this.ready?(this.state.commitProperty("id"),this.state.resolution):0}},{key:"rotation",get:function(){return this.ready?(this.state.commitProperty("id"),this.state.rotation):this._get("rotation")},set:function(e){if(isNaN(e))return;if(!this.ready)return void this._set("rotation",e);const t=this.viewpoint;S.rotateTo(t,t,e),this.viewpoint=t}},{key:"scale",get:function(){return this.ready?(this.state.commitProperty("id"),this.state.scale):this._get("scale")},set:function(e){if(!e||isNaN(e))return;if(!this.ready){this._set("scale",e),this._set("zoom",void 0);const t=this._get("extent");return void(t&&(this._set("extent",void 0),this._set("center",t.center)))}const t=this.viewpoint;S.scaleTo(t,t,e),this.viewpoint=t}},{key:"viewpoint",get:function(){if(!this.ready)return this._get("viewpoint");return this.state.paddedViewState.viewpoint.clone()},set:function(e){if(null==e)return;if(!this.ready)return this._set("viewpoint",e),this._set("extent",void 0),this._set("center",void 0),this._set("zoom",void 0),void this._set("scale",void 0);let t,i;try{t=this._project(e,this.state.spatialReference),!e.scale||isNaN(e.scale)?i=new o("mapview:invalid-viewpoint",`invalid scale value of ${e.scale}`):null==e.targetGeometry&&(i=new o("mapview:invalid-viewpoint","geometry not defined"))}catch(s){i=new o("mapview:invalid-viewpoint","could not project the value in the view's spatial reference",{error:s})}if(i)return void c.getLogger(this).error(i);this._scaleBeforeChangingSpatialReference=null;const r=new n({targetGeometry:new v,scale:0,rotation:0});S.copy(r,t),this.constraints?.constrain(r,this.state.paddedViewState.viewpoint),this.state.viewpoint=r,this._set("viewpoint",r)}},{key:"zoom",get:function(){return this.ready?this.constraints?.scaleToZoom(this.scale)??-1:this._get("zoom")},set:function(e){if(!(e>=0))return;if(!this.ready){this._set("zoom",e),this._set("scale",void 0);const t=this._get("extent");return void(t&&(this._set("extent",void 0),this._set("center",t.center)))}const t=this.constraints?.zoomToScale(e)??0;if(!t)return void this._set("zoom",-1);const i=this.viewpoint;S.scaleTo(i,i,t),this.viewpoint=i,this._set("zoom",this.constraints?.scaleToZoom(this.scale)??-1)}}]),i}(s),i.__decorate([d.property({type:v})],e.ViewStateManager.prototype,"center",null),i.__decorate([d.property()],e.ViewStateManager.prototype,"constraints",void 0),i.__decorate([d.property({type:x})],e.ViewStateManager.prototype,"extent",null),i.__decorate([d.property({value:{top:0,right:0,bottom:0,left:0},cast:e=>({top:0,right:0,bottom:0,left:0,...e})})],e.ViewStateManager.prototype,"padding",null),i.__decorate([d.property()],e.ViewStateManager.prototype,"ready",void 0),i.__decorate([d.property()],e.ViewStateManager.prototype,"resizeAlign",void 0),i.__decorate([d.property({readOnly:!0})],e.ViewStateManager.prototype,"resolution",null),i.__decorate([d.property({type:Number})],e.ViewStateManager.prototype,"rotation",null),i.__decorate([d.property({type:Number})],e.ViewStateManager.prototype,"scale",null),i.__decorate([d.property({readOnly:!0})],e.ViewStateManager.prototype,"state",void 0),i.__decorate([d.property({type:n})],e.ViewStateManager.prototype,"viewpoint",null),i.__decorate([d.property()],e.ViewStateManager.prototype,"zoom",null),e.ViewStateManager=i.__decorate([y.subclass("esri.views.2d.ViewStateManager")],e.ViewStateManager),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));