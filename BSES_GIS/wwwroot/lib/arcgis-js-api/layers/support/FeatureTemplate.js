/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,i,l,a,n,s,p){"use strict";const u=new t.JSONMap({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let c=function(r){function o(e){var o;return(o=r.call(this,e)||this).name=null,o.description=null,o.drawingTool=null,o.prototype=null,o.thumbnail=null,o}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(i.JSONSupport));r.__decorate([l.property({json:{write:!0}})],c.prototype,"name",void 0),r.__decorate([l.property({json:{write:!0}})],c.prototype,"description",void 0),r.__decorate([l.property({json:{read:u.read,write:u.write}})],c.prototype,"drawingTool",void 0),r.__decorate([l.property({json:{write:!0}})],c.prototype,"prototype",void 0),r.__decorate([l.property({json:{write:!0}})],c.prototype,"thumbnail",void 0),c=r.__decorate([p.subclass("esri.layers.support.FeatureTemplate")],c);return c}));
