/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../chunks/persistableUrlUtils"],(function(e,r,o,t,c,s,i,n,p,a,u,l){"use strict";var y;const d=t.strict()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});e.ObjectSymbol3DLayerResource=y=function(e){function o(){return e.apply(this,arguments)||this}return r._inherits(o,e),o.prototype.clone=function(){return new y({href:this.href,primitive:this.primitive})},r._createClass(o)}(c.JSONSupport),o.__decorate([s.property({type:String,json:{read:l.read,write:l.write}})],e.ObjectSymbol3DLayerResource.prototype,"href",void 0),o.__decorate([a.enumeration(d)],e.ObjectSymbol3DLayerResource.prototype,"primitive",void 0),e.ObjectSymbol3DLayerResource=y=o.__decorate([u.subclass("esri.symbols.support.ObjectSymbol3DLayerResource")],e.ObjectSymbol3DLayerResource);const b="sphere";e.defaultPrimitive=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
