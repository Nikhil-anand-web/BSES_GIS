/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Symbol3DLayer","./edges/utils","./patterns/LineStylePattern3D","./patterns/StylePattern3D","./patterns/utils","./support/colors","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],(function(e,t,l,o,r,n,s,i,a,p,u,c,y,d,h,m){"use strict";var S;let b=S=function(t){function l(e){var l;return(l=t.call(this,e)||this).type="fill",l.material=null,l.pattern=null,l.castShadows=!0,l.outline=null,l.edges=null,l}return e._inherits(l,t),l.prototype.clone=function(){const e={edges:null!=this.edges?this.edges.clone():null,enabled:this.enabled,material:null!=this.material?this.material.clone():null,pattern:null!=this.pattern?this.pattern.clone():null,castShadows:this.castShadows,outline:null!=this.outline?this.outline.clone():null};return new S(e)},l.fromSimpleFillSymbol=function(e){const t=e.outline&&e.outline.style&&"inside-frame"!==e.outline.style&&"solid"!==e.outline.style?new u({style:e.outline.style}):null,l={size:e.outline?.width??0,color:(e.outline?.color??d.white).clone(),pattern:t};return t&&e.outline?.cap&&(l.patternCap=e.outline.cap),new S({material:new h.Symbol3DFillMaterial({color:(e.color??d.transparentWhite).clone()}),pattern:e.style&&"solid"!==e.style?new c({style:e.style}):null,outline:l})},e._createClass(l)}(a);t.__decorate([s.enumeration({Fill:"fill"},{readOnly:!0})],b.prototype,"type",void 0),t.__decorate([l.property({type:h.Symbol3DFillMaterial,json:{write:!0}})],b.prototype,"material",void 0),t.__decorate([l.property(y.symbol3dPatternProperty)],b.prototype,"pattern",void 0),t.__decorate([l.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0),t.__decorate([l.property({type:m.Symbol3DOutline,json:{write:!0}})],b.prototype,"outline",void 0),t.__decorate([l.property(p.symbol3dEdgesProperty)],b.prototype,"edges",void 0),b=S=t.__decorate([i.subclass("esri.symbols.FillSymbol3DLayer")],b);return b}));