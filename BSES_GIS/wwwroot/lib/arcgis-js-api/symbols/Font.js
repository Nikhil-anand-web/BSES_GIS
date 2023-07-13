/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./support/textUtils"],(function(t,e,o,r,s,i,n,a,c,p){"use strict";var l;let y=l=function(e){function o(t){var o;return(o=e.call(this,t)||this).decoration="none",o.family="sans-serif",o.size=9,o.style="normal",o.weight="normal",o}t._inherits(o,e);var s=o.prototype;return s.castSize=function(t){return r.toPt(t)},s.clone=function(){return new l({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})},s.hash=function(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`},t._createClass(o)}(o.JSONSupport);e.__decorate([s.property({type:p.fontDecorations,json:{default:"none",write:!0}})],y.prototype,"decoration",void 0),e.__decorate([s.property({type:String,json:{write:!0}})],y.prototype,"family",void 0),e.__decorate([s.property({type:Number,json:{write:{overridePolicy:(t,e,o)=>({enabled:!o||!o.textSymbol3D})}}})],y.prototype,"size",void 0),e.__decorate([i.cast("size")],y.prototype,"castSize",null),e.__decorate([s.property({type:p.fontStyles,json:{default:"normal",write:!0}})],y.prototype,"style",void 0),e.__decorate([s.property({type:p.fontWeights,json:{default:"normal",write:!0}})],y.prototype,"weight",void 0),y=l=e.__decorate([c.subclass("esri.symbols.Font")],y);return y}));
