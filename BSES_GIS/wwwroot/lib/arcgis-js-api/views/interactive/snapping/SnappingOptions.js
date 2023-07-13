/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./FeatureSnappingLayerSource","./Settings"],(function(e,t,r,o,a,n,i,p,l,c,s){"use strict";let d=function(t){function r(e){var r;return(r=t.call(this,e)||this).enabled=!1,r.enabledToggled=!1,r.selfEnabled=!0,r.featureEnabled=!0,r.featureSources=new o,r.distance=s.defaults.distance,r.touchSensitivityMultiplier=s.defaults.touchSensitivityMultiplier,r}return e._inherits(r,t),e._createClass(r,[{key:"effectiveEnabled",get:function(){return this.enabledToggled?!this.enabled:this.enabled}},{key:"effectiveSelfEnabled",get:function(){return this.effectiveEnabled&&this.selfEnabled}},{key:"effectiveFeatureEnabled",get:function(){return this.effectiveEnabled&&this.featureEnabled}}]),r}(r);t.__decorate([a.property()],d.prototype,"enabled",void 0),t.__decorate([a.property()],d.prototype,"enabledToggled",void 0),t.__decorate([a.property()],d.prototype,"selfEnabled",void 0),t.__decorate([a.property()],d.prototype,"featureEnabled",void 0),t.__decorate([a.property({type:o.ofType(c)})],d.prototype,"featureSources",void 0),t.__decorate([a.property()],d.prototype,"distance",void 0),t.__decorate([a.property()],d.prototype,"touchSensitivityMultiplier",void 0),t.__decorate([a.property({readOnly:!0})],d.prototype,"effectiveEnabled",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"effectiveSelfEnabled",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"effectiveFeatureEnabled",null),d=t.__decorate([l.subclass("esri.views.interactive.snapping.SnappingOptions")],d);return d}));
