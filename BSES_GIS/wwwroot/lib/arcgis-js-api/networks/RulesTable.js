/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../request","../core/JSONSupport","../core/Loadable","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./support/typeUtils"],(function(e,t,o,r,s,n,i,a,u,c,p){"use strict";let l=function(t){function r(e){var r;return(r=t.call(this,e)||this).request=o,r}e._inherits(r,t);var s=r.prototype;return s.initialize=function(){},s.load=async function(e){const t=this.layer.load(e).then((()=>this._initializeRulesTable()));return this.addResolvingPromise(t),this},s.getFeatureSQL=function(e,t){const o=e.layerId.toString(),r=e.fieldsIndex?.normalizeFieldName("assetGroup"),s=e.fieldsIndex?.normalizeFieldName("assetType"),n=r?t.attributes[r]:null,i=s?t.attributes[s]:null,a=this.rulesHash[o];if(a){const e=a.assetGroupHash[n];if(e){return e.assetTypeHash[i]||null}}return null},s._initializeRulesTable=async function(){const e={};let t;!function(e){e[e.from=0]="from",e[e.to=1]="to",e[e.via=2]="via"}(t||(t={}));const o=[{networkSourceId:"fromNetworkSource",assetGroupId:"fromAssetGroup",assetTypeId:"fromAssetType"},{networkSourceId:"toNetworkSource",assetGroupId:"toAssetGroup",assetTypeId:"toAssetType"},{networkSourceId:"viaNetworkSource",assetGroupId:"viaAssetGroup",assetTypeId:"viaAssetType"}];for(const r of this.rules){if(r.ruleType!==p.RuleType.RTJunctionJunctionConnectivity&&r.ruleType!==p.RuleType.RTJunctionEdgeConnectivity&&r.ruleType!==p.RuleType.RTEdgeJunctionEdgeConnectivity)continue;let s=[[t.from,t.to],[t.to,t.from]];r.ruleType===p.RuleType.RTEdgeJunctionEdgeConnectivity&&(s=[[t.from,t.via],[t.via,t.from],[t.to,t.via],[t.via,t.to]]);for(const n of s){const s=n.shift(),i=n.shift();let a=!1;switch(r.ruleType){case p.RuleType.RTEdgeJunctionEdgeConnectivity:a=s===t.from||s===t.to;break;case p.RuleType.RTJunctionEdgeConnectivity:a=s===t.to}const u=o[s],c=r[u.networkSourceId]?.layerId.toString()??"",l=r[u.assetGroupId]?.assetGroupCode?.toString(),y=r[u.assetTypeId],d=y?.assetTypeCode?.toString(),T=o[i],f=r[T.networkSourceId]?.layerId.toString()??"",h=r[T.assetGroupId]?.assetGroupCode?.toString(),v=r[T.assetTypeId],S=v?.assetTypeCode?.toString(),g=e[c]??{assetGroupHash:{}};if(!(l&&d&&h&&S))continue;const I=g.assetGroupHash[l]??{assetTypeHash:{}},R=I.assetTypeHash[d]??{};if(R[f]=R[f]??{},a){R[c]=R[c]??{};const e=`(assetgroup = ${l} AND assettype = ${d})`;R[c].anyVertex=R[c].anyVertex?`${R[c].anyVertex}`:`${e}`,"esriNECPEndVertex"===v?.connectivityPolicy&&(R[c].endVertex=R[c]?.endVertex?`${R[c].endVertex}`:`${e}`)}const x=`(assetgroup = ${h} AND assettype = ${S})`;R[f].anyVertex=R[f]?.anyVertex?`${R[f].anyVertex} OR ${x}`:`${x}`,"esriNECPEndVertex"===v?.connectivityPolicy&&(R[f].endVertex=R[f]?.endVertex?`${R[f].endVertex} OR ${x}`:`${x}`),I.assetTypeHash[d]=R,g.assetGroupHash[l]=I,e[c]=g}}this.rulesHash=e},e._createClass(r)}(r.JSONSupportMixin(s));t.__decorate([n.property({constructOnly:!0})],l.prototype,"layer",void 0),t.__decorate([n.property({constructOnly:!0})],l.prototype,"rules",void 0),t.__decorate([n.property()],l.prototype,"rulesHash",void 0),t.__decorate([n.property({constructOnly:!0})],l.prototype,"request",void 0),l=t.__decorate([c.subclass("esri.networks.RulesTable")],l);return l}));
