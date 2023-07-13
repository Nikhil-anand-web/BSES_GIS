/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,i,a){"use strict";let n=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).opacity=1,e.position=0,e}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],n.prototype,"opacity",void 0),r.__decorate([s.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"position",void 0),n=r.__decorate([a.subclass("esri.layers.voxel.VoxelOpacityStop")],n);return n}));
