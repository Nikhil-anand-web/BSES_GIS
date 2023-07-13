/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./FillSymbol3DLayer","./Symbol3D"],(function(e,o,r,s,t,l,n,c,i,y){"use strict";var a;const p=r.ofType({base:null,key:"type",typeMap:{fill:i}});let u=a=function(o){function r(e){var r;return(r=o.call(this,e)||this).symbolLayers=new p,r.type="mesh-3d",r}return e._inherits(r,o),r.prototype.clone=function(){return new a({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},r.fromSimpleFillSymbol=function(e){return new a({symbolLayers:[i.fromSimpleFillSymbol(e)]})},e._createClass(r)}(y);o.__decorate([t.property({type:p})],u.prototype,"symbolLayers",void 0),o.__decorate([n.enumeration({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],u.prototype,"type",void 0),u=a=o.__decorate([c.subclass("esri.symbols.MeshSymbol3D")],u);return u}));