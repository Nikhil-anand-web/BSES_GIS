/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],(function(e,t,o,r,l,s,n,c,i,a,y,u,p,m){"use strict";var b;const f=o.ofType({base:null,key:"type",typeMap:{icon:i,object:a,text:u}});let h=b=function(t){function o(e){var o;return(o=t.call(this,e)||this).verticalOffset=null,o.callout=null,o.symbolLayers=new f,o.type="point-3d",o}e._inherits(o,t);var l=o.prototype;return l.supportsCallout=function(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1;for(const e of this.symbolLayers.items)switch(e.type){case"icon":case"text":case"object":continue;default:return!1}return!0},l.hasVisibleCallout=function(){return p.hasVisibleCallout(this)},l.hasVisibleVerticalOffset=function(){return p.hasVisibleVerticalOffset(this)},l.clone=function(){return new b({verticalOffset:r.clone(this.verticalOffset),callout:r.clone(this.callout),styleOrigin:r.clone(this.styleOrigin),symbolLayers:r.clone(this.symbolLayers),thumbnail:r.clone(this.thumbnail)})},o.fromSimpleMarkerSymbol=function(e){return new b({symbolLayers:[i.fromSimpleMarkerSymbol(e)]})},o.fromPictureMarkerSymbol=function(e){return new b({symbolLayers:[i.fromPictureMarkerSymbol(e)]})},o.fromCIMSymbol=function(e){const t=e.data?.symbol?.type;if("CIMPointSymbol"!==t)return null;const o=e.data.symbol;return new b(o?.callout?{symbolLayers:[i.fromCIMSymbol(e)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}:{symbolLayers:[i.fromCIMSymbol(e)]})},o.fromTextSymbol=function(e){return new b({symbolLayers:[u.fromTextSymbol(e)]})},e._createClass(o)}(y);t.__decorate([l.property({type:m,json:{write:!0}})],h.prototype,"verticalOffset",void 0),t.__decorate([l.property(p.calloutProperty)],h.prototype,"callout",void 0),t.__decorate([l.property({type:f,json:{origins:{"web-scene":{write:!0}}}})],h.prototype,"symbolLayers",void 0),t.__decorate([n.enumeration({PointSymbol3D:"point-3d"},{readOnly:!0})],h.prototype,"type",void 0),h=b=t.__decorate([c.subclass("esri.symbols.PointSymbol3D")],h);return h}));
