/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,i,l,p){"use strict";var c;let n=c=function(r){function o(e){var o;return(o=r.call(this,e)||this).cols=null,o.level=0,o.levelValue=null,o.origin=null,o.resolution=0,o.rows=null,o.scale=0,o}return e._inherits(o,r),o.prototype.clone=function(){return new c({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})},e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],n.prototype,"cols",void 0),r.__decorate([t.property({type:s.Integer,json:{write:!0}})],n.prototype,"level",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"levelValue",void 0),r.__decorate([t.property({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],n.prototype,"origin",void 0),r.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"resolution",void 0),r.__decorate([t.property({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],n.prototype,"rows",void 0),r.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"scale",void 0),n=c=r.__decorate([p.subclass("esri.layers.support.LOD")],n);return n}));