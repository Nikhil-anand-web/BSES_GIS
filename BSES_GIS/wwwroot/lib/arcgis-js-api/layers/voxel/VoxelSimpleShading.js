/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,a,c,p){"use strict";let u=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).diffuseFactor=.5,e.specularFactor=.5,e}return e._inherits(o,r),e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"diffuseFactor",void 0),r.__decorate([t.property({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"specularFactor",void 0),u=r.__decorate([p.subclass("esri.layers.voxel.VoxelSimpleShading")],u);return u}));
