/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p,a){"use strict";let u=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).scale=1,e.offset=0,e}return e._inherits(o,r),e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"scale",void 0),r.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"offset",void 0),u=r.__decorate([a.subclass("esri.layers.voxel.VoxelRegularSpacing")],u);return u}));
