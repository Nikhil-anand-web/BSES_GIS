/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./LayerView2D","../../layers/LayerView"],(function(e,r,t,s,o,a,n,c,i){"use strict";let u=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).layer=null,e}e._inherits(t,r);var s=t.prototype;return s.attach=function(){},s.detach=function(){},s.supportsSpatialReference=function(e){return!0},s.moveStart=function(){this.requestUpdate()},s.viewChange=function(){this.requestUpdate()},s.moveEnd=function(){this.requestUpdate()},s.update=function(e){},e._createClass(t)}(c.LayerView2DMixin(i));r.__decorate([t.property()],u.prototype,"layer",void 0),u=r.__decorate([n.subclass("esri.views.2d.layers.VideoLayerView2D")],u);return u}));