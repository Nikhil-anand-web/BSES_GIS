/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../symbols","../core/arrayUtils","../core/Clonable","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../layers/support/fieldUtils","./Renderer","./mixins/VisualVariablesMixin","./support/AttributeColorInfo","./support/OthersCategory","./support/PieChartLegendOptions","../symbols/SimpleMarkerSymbol","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],(function(e,t,r,o,i,s,l,n,a,p,u,c,y,d,b,h,m,g,_,f,S){"use strict";let v=function(t){function o(e){var o;return(o=t.call(this,e)||this).attributes=null,o.backgroundFillSymbol=null,o.defaultColor=new r([0,0,0,0]),o.defaultLabel=null,o.holePercentage=0,o.othersCategory=new m.OthersCategory,o.legendOptions=null,o.outline=null,o.size=12,o.type="pie-chart",o}e._inherits(o,t);var s=o.prototype;return s.getSymbol=function(){return new _({size:this.size?this.size/2+(this.outline?.width||0):0})},s.getSymbolAsync=async function(){return this.getSymbol()},s.getSymbols=function(){return[this.getSymbol(),this.backgroundFillSymbol].filter(i.isSome)},s.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")},s.getMeshHash=function(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")},s.collectRequiredFields=async function(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes)r.valueExpression&&await y.collectArcadeFieldNames(e,t,r.valueExpression),r.field&&e.add(r.field)},e._createClass(o)}(b.VisualVariablesMixin(s.ClonableMixin(d)));t.__decorate([n.property({type:[h],json:{write:!0}})],v.prototype,"attributes",void 0),t.__decorate([n.property({type:f,json:{default:null,write:!0}})],v.prototype,"backgroundFillSymbol",void 0),t.__decorate([n.property({type:r,json:{write:!0}})],v.prototype,"defaultColor",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],v.prototype,"defaultLabel",void 0),t.__decorate([n.property({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"holePercentage",void 0),t.__decorate([n.property({type:m.OthersCategory,json:{write:!0}})],v.prototype,"othersCategory",void 0),t.__decorate([n.property({type:g.PieChartLegendOptions,json:{write:!0}})],v.prototype,"legendOptions",void 0),t.__decorate([n.property({type:S,json:{default:null,write:!0}})],v.prototype,"outline",void 0),t.__decorate([n.property({type:Number,cast:l.toPt,json:{write:!0}})],v.prototype,"size",void 0),t.__decorate([u.enumeration({pieChart:"pie-chart"})],v.prototype,"type",void 0),v=t.__decorate([c.subclass("esri.renderers.PieChartRenderer")],v);return v}));
