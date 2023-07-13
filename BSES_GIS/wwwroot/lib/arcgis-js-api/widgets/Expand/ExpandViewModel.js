/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,o,n,s,a,r,l){"use strict";let p=function(t){function i(e){var i;return(i=t.call(this,e)||this)._viewpointHandle=null,i.group=null,i}e._inherits(i,t);var n=i.prototype;return n.initialize=function(){this.addHandles(o.on((()=>this.view?.ui),"expand",(e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()})))},n.destroy=function(){this.removeAllHandles(),this._viewpointHandle=null,this.view=null},n._viewpointHandleChange=function(e){this._viewpointHandle&&(e?o.when((()=>this.view?.stationary),(()=>this._viewpointHandle?.resume()),{once:!0,initial:!0}):this._viewpointHandle.pause())},n._watchViewpoint=function(){const e="viewpoint";this.removeHandles(e),this._viewpointHandle=null;const{autoCollapse:t,view:i}=this;if(!i||!t)return;const n=o.pausable((()=>"3d"===i.type?i.camera:i.viewpoint),(()=>this._collapse()));this.addHandles(n,e),this._viewpointHandle=n},n._collapse=function(){this.expanded=!1},e._createClass(i,[{key:"autoCollapse",set:function(e){this._set("autoCollapse",e),this._watchViewpoint()}},{key:"expanded",set:function(e){const t=!!e;this._set("expanded",t);const i=this.get("view.ui");i&&i.emit("expand",{target:this}),this._viewpointHandleChange(t)}},{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}},{key:"view",set:function(e){this._get("view")!==e&&(this._set("view",e),e&&o.when((()=>e.ready),(()=>{this.view===e&&this._watchViewpoint()}),{once:!0,initial:!0}))}}]),i}(i);t.__decorate([n.property({value:!1})],p.prototype,"autoCollapse",null),t.__decorate([n.property({value:!1})],p.prototype,"expanded",null),t.__decorate([n.property()],p.prototype,"group",void 0),t.__decorate([n.property({readOnly:!0})],p.prototype,"state",null),t.__decorate([n.property({value:null})],p.prototype,"view",null),p=t.__decorate([l.subclass("esri.widgets.Expand.ExpandViewModel")],p);return p}));