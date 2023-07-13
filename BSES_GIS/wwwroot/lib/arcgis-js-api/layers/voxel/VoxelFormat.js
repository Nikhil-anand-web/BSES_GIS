/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,t,o,r,p,s,a,c){"use strict";let i=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).continuity=null,e.hasNoData=!1,e.noData=0,e.offset=0,e.scale=1,e.type=null,e}return e._inherits(o,t),e._createClass(o)}(o.JSONSupport);t.__decorate([r.property({type:["discrete","continuous"],json:{write:!0}})],i.prototype,"continuity",void 0),t.__decorate([r.property({type:Boolean,json:{write:!0}})],i.prototype,"hasNoData",void 0),t.__decorate([r.property({type:Number,json:{write:!0}})],i.prototype,"noData",void 0),t.__decorate([r.property({type:Number,json:{write:!0}})],i.prototype,"offset",void 0),t.__decorate([r.property({type:Number,json:{write:!0}})],i.prototype,"scale",void 0),t.__decorate([r.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"type",void 0),i=t.__decorate([c.subclass("esri.layers.voxel.VoxelFormat")],i);return i}));
