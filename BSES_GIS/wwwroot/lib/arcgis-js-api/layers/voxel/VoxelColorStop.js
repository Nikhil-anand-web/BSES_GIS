/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,i,l,n){"use strict";let a=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).color=null,e.position=0,e}return e._inherits(o,r),e._createClass(o)}(t.ClonableMixin(s.JSONSupport));r.__decorate([p.property({type:o,json:{type:[c.Integer],write:{enabled:!0,isRequired:!0}}})],a.prototype,"color",void 0),r.__decorate([p.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0),a=r.__decorate([n.subclass("esri.layers.voxel.VoxelColorStop")],a);return a}));
