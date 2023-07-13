/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../support/AggregateField","../support/featureReductionUtils","../../views/2d/layers/support/clusterUtils"],(function(e,r,t,n,o,u,s,i,c,a,l){"use strict";const d=e=>{let o=function(e){function t(...r){var t;return(t=e.call(this,...r)||this).own(t.watch("renderer",(()=>{if(t.featureReduction){const e=t._normalizeFeatureReduction(t.featureReduction);t._set("featureReduction",e)}}),!0)),t}return r._inherits(t,e),t.prototype._normalizeFeatureReduction=function(e){if("cluster"!==e?.type)return e;const r=e.clone(),t=[new c({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],n=(r.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return r.fields=[...t,...n],r;if(e.symbol)return r.fields=[...t,...n],r.renderer=null,r;if(!this.renderer)return e;const o=l.createClusterRenderer(t,this.renderer,e,null,!1);return r.fields=[...t,...n],r.renderer=o,r},r._createClass(t,[{key:"featureReduction",set:function(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}},{key:"renderer",set:function(e){}}]),t}(e);return t.__decorate([n.property(a.featureReductionProperty)],o.prototype,"featureReduction",null),o=t.__decorate([i.subclass("esri.layers.mixins.FeatureReductionLayer")],o),o};e.FeatureReductionLayer=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
