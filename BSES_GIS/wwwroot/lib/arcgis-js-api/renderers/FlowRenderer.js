/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/jsonMap","../core/JSONSupport","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./mixins/VisualVariablesMixin","./support/AuthoringInfo","./support/LegendOptions"],(function(e,t,o,r,n,p,i,a,s,l,c,d,u,y,h){"use strict";var w;const g=new r.JSONMap({flow_from:"flow-from",flow_to:"flow-to"});let _=w=function(t){function r(e){var r;return(r=t.call(this,e)||this).density=.8,r.color=new o([255,255,255,1]),r.maxPathLength=200,r.trailWidth=1.5,r.flowSpeed=10,r.trailLength=100,r.smoothing=0,r.flowRepresentation="flow-from",r.type="flow",r.authoringInfo=null,r.legendOptions=null,r.trailCap="butt",r.background="none",r}e._inherits(r,t);var n=r.prototype;return n.clone=function(){const{density:e,maxPathLength:t,trailWidth:o,flowSpeed:r,trailLength:n,smoothing:p,flowRepresentation:i,trailCap:a,background:s}=this,l=this.color.clone(),c=(this.visualVariables||[]).map((e=>e.clone())),d=this.authoringInfo?.clone(),u=this.legendOptions?.clone();return new w({density:e,color:l,maxPathLength:t,trailWidth:o,flowSpeed:r,trailLength:n,trailCap:a,background:s,smoothing:p,flowRepresentation:i,visualVariables:c,authoringInfo:d,legendOptions:u})},n.getSymbol=function(e,t){},n.getSymbolAsync=async function(e,t){},n.getSymbols=function(){return[]},e._createClass(r)}(u.VisualVariablesMixin(n.JSONSupport));t.__decorate([i.property({type:Number,json:{write:!0}})],_.prototype,"density",void 0),t.__decorate([i.property({type:o,json:{write:{allowNull:!0}}})],_.prototype,"color",void 0),t.__decorate([i.property({type:Number,cast:p.toPt,json:{write:!0}})],_.prototype,"maxPathLength",void 0),t.__decorate([i.property({type:Number,cast:p.toPt,json:{write:!0}})],_.prototype,"trailWidth",void 0),t.__decorate([i.property({type:Number,json:{write:!0}})],_.prototype,"flowSpeed",void 0),t.__decorate([i.property({type:Number,json:{write:!0}})],_.prototype,"trailLength",void 0),t.__decorate([i.property({type:Number,cast:p.toPt,json:{write:!1}})],_.prototype,"smoothing",void 0),t.__decorate([i.property({type:g.apiValues,json:{type:g.jsonValues,read:{reader:g.read},write:{writer:g.write}}})],_.prototype,"flowRepresentation",void 0),t.__decorate([c.enumeration({flowRenderer:"flow"})],_.prototype,"type",void 0),t.__decorate([i.property({type:y,json:{write:!0}})],_.prototype,"authoringInfo",void 0),t.__decorate([i.property({type:h.LegendOptions,json:{write:!0}})],_.prototype,"legendOptions",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],_.prototype,"trailCap",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],_.prototype,"background",void 0),_=w=t.__decorate([d.subclass("esri.renderers.FlowRenderer")],_);return _}));