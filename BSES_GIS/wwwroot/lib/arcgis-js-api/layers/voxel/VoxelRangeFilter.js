/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,a,c,n,p){"use strict";let l=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).enabled=!1,e.range=null,e}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:Boolean,json:{default:!1,write:!0}})],l.prototype,"enabled",void 0),r.__decorate([s.property({type:[Number],json:{write:!0}})],l.prototype,"range",void 0),l=r.__decorate([p.subclass("esri.layers.voxel.VoxelRangeFilter")],l);return l}));
