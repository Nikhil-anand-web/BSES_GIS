/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Evented","../../../core/HandleOwner","../../../core/Identifiable","../../../core/Promise","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,i,n,o,s,l,p,u,a,c){"use strict";const d=(e,p)=>{let u=function(e){function r(t){var r;return(r=e.call(this,t)||this).sublayer=null,r.parent=null,r.view=null,r}t._inherits(r,e);var i=r.prototype;return i.initialize=function(){},i.canResume=function(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1},i.isUpdating=function(){return!1},t._createClass(r,[{key:"suspended",get:function(){return!this.canResume()}},{key:"updating",get:function(){return!this.suspended&&this.isUpdating()}},{key:"visible",get:function(){return!!this.sublayer?.visible},set:function(e){this._overrideIfSome("visible",e)}},{key:"fullOpacity",get:function(){const e=e=>null!=e?e:1;return e(this.get("sublayer.opacity"))*e(this.get("parent.fullOpacity"))}}]),r}(s.EsriPromiseMixin(n.HandleOwnerMixin(o.IdentifiableMixin(i.EventedMixin(e)))));return r.__decorate([l.property()],u.prototype,"sublayer",void 0),r.__decorate([l.property()],u.prototype,"parent",void 0),r.__decorate([l.property({readOnly:!0})],u.prototype,"suspended",null),r.__decorate([l.property({type:Boolean,readOnly:!0})],u.prototype,"updating",null),r.__decorate([l.property()],u.prototype,"view",void 0),r.__decorate([l.property()],u.prototype,"visible",null),r.__decorate([l.property()],u.prototype,"fullOpacity",null),u=r.__decorate([c.subclass("esri.views.3d.layers.BuildingSublayerView3D")],u),u};e.BuildingSublayerView3DMixin=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));