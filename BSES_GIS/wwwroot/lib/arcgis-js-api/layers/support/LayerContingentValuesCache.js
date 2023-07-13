/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/arrayUtils","../../core/JSONSupport","../../core/Loadable","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/accessorSupport/decorators/subclass","./arcgisLayerUrl","./Contingency","./ContingencyConstraintViolation","./ContingentValue","./ContingentValuesResult","./FieldGroup","./Subtype"],(function(e,t,n,i,s,r,o,a,l,u,c,p,f,d,y,h,m){"use strict";var g;let V=g=function(t){function s(e){var i;return(i=t.call(this,e)||this).request=n,i.fieldGroups=null,i.fieldGroupDefinitions=null,i}e._inherits(s,t);var r=s.prototype;return r.initialize=function(){},s.createLoadedLayerContingentValuesCache=async function(e){await e.load();const t=e.sourceJSON;if(void 0===e.layerId)return null;const n=t.hasContingentValuesDefinition;if(n)return new g({layer:e}).load();if(void 0===n){const t=c.parse(e.url);if(null==t)return null;const n=t.url.path;if((await g._staticFetchEnterpriseFeatureRoot(n)).supportsQueryDataElements){const t=e.layerId.toString(),i=await g._staticFetchEnterpriseFieldGroup(n,t);if(i){const t=i.map((e=>({name:e.name,isEditingRestrictive:e.isEditingRestrictive,fields:e.fieldNames.names})));return new g({layer:e,fieldGroupDefinitions:t}).load()}}}return null},r.load=async function(e){const t=this.layer.load(e).then((()=>this._initializeContingentValues(this.fieldGroupDefinitions,e)));return this.addResolvingPromise(t),this},r.validateContingencyConstraints=function(e,t){const n=Object.keys(e),i=[],s=[];for(const r of this.fieldGroups){const o=r.isEditingRestrictive?"error":"warning";if(t&&!r.fields.some((e=>t.includes(e))))continue;if(!r.fields.every((e=>n.includes(e)))){s.push(new f({fieldGroup:r,type:o}));continue}let a=!1;const l=e[this.subtypeFieldName],u=r.contingencies.filter((e=>!(!e.isRetired&&e.subtype)||e.subtype.code===l));for(const t of u){let n=!0;for(const i in t.values){const s=t.values[i];if("any"!==s.objectType)if("null"===s.objectType){if(null!=e[i]){n=!1;break}}else if("code"===s.objectType){if(e[i]!==s.codedValue.code){n=!1;break}}else if("range"===s.objectType){const t=e[i];if(t<s.minValue||t>s.maxValue){n=!1;break}}}if(n){a=!0;break}}a||i.push(new f({fieldGroup:r,type:o}))}return{invalid:i,incomplete:s}},r.getContingentValues=function(e,t,n=!1){const i=e[this.subtypeFieldName],s=null!=i,r={};let o=[];const a=this.fieldGroups.filter((e=>e.fields.includes(t)));o.push(new d({objectType:"any"}));for(const l of a){let a=[];const u=l.contingencies.filter((e=>!(e.isRetired||e.subtype&&s&&e.subtype.code!==i)));let c=!1;const p={};for(const n of u){let i,s=!0;for(const r in n.values){const o=n.values[r];if(t!==r){if(void 0!==e[r]&&"any"!==o.objectType)if("null"===o.objectType)null!==e[r]&&(s=!1);else if("code"===o.objectType)e[r]!==o.codedValue.code&&(s=!1);else if("range"===o.objectType){const t=e[r];(t<o.minValue||t>o.maxValue)&&(s=!1)}}else i=o,c=c||"range"===o.objectType}if(i&&s){if("any"===i.objectType){a.length=0,a.push(i);break}const e=this._generateKey(i);p[e]||a.push(i),p[e]=!0}}c&&(a=this._joinRange(a)),r[l.name]=a,o=n?this._filterIntersection(o,a):[]}return 1===a.length&&n&&(o=[]),new y({contingentValuesAllGroups:o,contingentValuesByFieldGroup:r})},r._generateKey=function(e){switch(e.objectType){case"any":return"@any@";case"null":return"@null@";case"code":return e.codedValue.name+e.codedValue.code.toString();case"range":return e.minValue.toString()+"-"+e.maxValue.toString()}},r._joinRange=function(e){let t,n;e.sort(((e,t)=>"null"===e.objectType?-1:"null"===t.objectType?1:e.minValue-t.minValue));const i=[];for(const s of e)"null"!==s.objectType?null!=t&&null!=n?n<s.minValue?(i.push(new d({objectType:"range",minValue:t,maxValue:n})),t=s.minValue,n=s.maxValue):n<s.maxValue&&(n=s.maxValue):(t=s.minValue,n=s.maxValue):i.push(s);return i.push(new d({objectType:"range",minValue:t,maxValue:n})),i},r._filterIntersection=function(e,t){if(0===e.length||0===t.length)return[];if("any"===e[0].objectType)return t;if("any"===t[0].objectType)return e;const n="range"===e[0].objectType||"range"===e[1]?.objectType,i="range"===t[0].objectType||"range"===t[1]?.objectType;return n||i?this._intersectRanges(e,t):this._intersectValues(e,t)},r._intersectRanges=function(e,t){const n=[];let i,s=0;for(const r of e)for(;s<t.length;s++){const e=t[s];if("null"===r.objectType&&"null"===e.objectType)n.push(new d({objectType:"null"}));else{if("null"===r.objectType)break;if("null"===e.objectType)continue}if(r.maxValue<e.minValue)break;if(r.maxValue===e.minValue){n.push(new d({objectType:"range",minValue:r.maxValue,maxValue:e.minValue}));break}if(!(r.minValue>e.maxValue))if(r.minValue!==e.maxValue){if(i=r.minValue>e.minValue?r.minValue:e.minValue,r.maxValue<e.maxValue){n.push(new d({objectType:"range",minValue:i,maxValue:r.maxValue}));break}n.push(new d({objectType:"range",minValue:i,maxValue:e.maxValue}))}else n.push(new d({objectType:"range",minValue:r.minValue,maxValue:e.maxValue}))}return n},r._intersectValues=function(e,t){const n=[];for(const i of e)t.some((e=>{if(i.objectType===e.objectType)switch(i.objectType){case"any":case"null":return!0;case"code":return i.codedValue.code===e.codedValue.code&&i.codedValue.name===e.codedValue.name}return!1}))&&n.push(i);return n},s._staticFetchEnterpriseFeatureRoot=async function(e,t){return n(e,{responseType:"json",query:{f:"json"},...t}).then((e=>e.data))},s._staticFetchEnterpriseFieldGroup=async function(e,t,i){return n(`${e}/queryDataElements`,{responseType:"json",query:{layers:JSON.stringify([t]),f:"json"},...i}).then((e=>e.data.layerDataElements?.[0].dataElement.fieldGroups))},r._initializeContingentValues=async function(e,t){const n=e??await this._fetchFieldGroupDefs(t);if(0===n.length)return void(this.fieldGroups=[]);const i=await this._fetchContingentValues(n,t);this.fieldGroups=i},r._fetchFieldGroupDefs=async function(e){if(void 0===this.layer.layerId)return[];const t=this.layer.sourceJSON,n=this.layer.layerId.toString(),i=c.parse(this.layer.url).url.path;if(t.hasContingentValuesDefinition){return(await this._fetchAGOLFieldGroup(i,n,e)).map((e=>({name:e.name,isEditingRestrictive:e.restrictive,fields:e.fields.map((e=>this.layer.fieldsIndex.normalizeFieldName(e)))})))}return void 0!==t.hasContingentValuesDefinition?[]:this._fetchEnterpriseFeatureRoot(i,e).then((async t=>{if(t.supportsQueryDataElements){return(await this._fetchEnterpriseFieldGroup(i,n,e)).map((e=>({name:e.name,isEditingRestrictive:e.isEditingRestrictive,fields:e.fieldNames.names.map((e=>this.layer.fieldsIndex.normalizeFieldName(e)))})))}return[]}))},r._fetchAGOLFieldGroup=async function(e,t,i){return n(`${e}/${t}/fieldgroups`,{responseType:"json",query:{f:"json"},...i}).then((e=>e.data.fieldGroups))},r._fetchEnterpriseFieldGroup=async function(e,t,n){return g._staticFetchEnterpriseFieldGroup(e,t,n)},r._fetchEnterpriseFeatureRoot=async function(e,t){return g._staticFetchEnterpriseFeatureRoot(e,t)},r._fetchContingentValues=async function(e,t){if(void 0===this.layer.layerId)return[];const n=this.layer.sourceJSON,i=this.layer.layerId.toString(),s=c.parse(this.layer.url).url.path;if(n.hasContingentValuesDefinition){const n=await this._fetchAGOLContingentValues(s,i,t);return this._constructFieldGroupsAGOL(e,n)}const r=await this._fetchEnterpriseContingentValues(s,i,t);return this._constructFieldGroupsEnterprise(e,r)},r._constructFieldGroupsAGOL=function(e,t){return e.map((e=>{const n=t.contingentValuesDefinition.fieldGroups.find((t=>t.name===e.name));if(n){let i=[];return i=t.contingentValuesDefinition.hasSubType?this._parseAGOLFieldGroupSubtype(e,t,n.subTypes):this._parseAGOLFieldGroup(e,t,n.contingentValues),new h({name:e.name,isEditingRestrictive:e.isEditingRestrictive,fields:e.fields,contingencies:i})}return null})).filter(i.isSome)},r._parseAGOLFieldGroupSubtype=function(e,t,n){let i=[];return n?.forEach((n=>{const s=this._getSubtypeAGOL(n.name);i=i.concat(this._parseAGOLFieldGroup(e,t,n.contingentValues,s))})),i},r._parseAGOLFieldGroup=function(e,t,n,i=null){const s=[];for(const r of n??[]){const n=this._parseAGOLContingency(r,e,t,i);s.push(n)}return s},r._parseAGOLContingency=function(e,t,n,i){const s=e.id,r=!!e.retired&&1===e.retired,o={};for(let a=0,l=0;a<t.fields.length;a++){const s=t.fields[a],r=n.typeCodes[e.types[a]];if("Code"===r){let t=e.values[l];l++;const r=this._getDomain(i,s),a=this.layer.getField(s);if("string"===a?.type){const e=n.stringDicts.find((e=>e.domain===r.name));e&&(t=e.entries[t])}const u=r.codedValues.find((e=>e.code===t)),c=new d({codedValue:u,objectType:"code"});o[s]=c}else if("Range"===r){const t=e.values[l];l++;const n=t.range[0],i=t.range[1],r=new d({minValue:n,maxValue:i,objectType:"range"});o[s]=r}else if("Any"===r){const e=new d({objectType:"any"});o[s]=e}else{const e=new d({objectType:"null"});o[s]=e}}return new p({id:s,isRetired:r,subtype:i,values:o})},r._constructFieldGroupsEnterprise=function(e,t){const n=t.fieldGroups;return e.map((e=>{const i=n.find((t=>t.name===e.name));if(i){const n=i.contingencies.map((n=>{const i=n.id,s=n.isRetired||!1,r=this._getSubtypeEnterprise(n.subtypeCode),o={};for(let a=0;a<e.fields.length;a++){const i=e.fields[a];let s=n.values[a];if("number"==typeof s||"string"==typeof s){const e=this._getDomain(r,i),n=this.layer.getField(i);if("string"===n?.type)s=t.stringDictionary[s];else if("date"===n?.type){const e=new Date(`${s}+00:00`);s=e.getTime()}const a=e.codedValues.find((e=>e.code===s)),l=new d({codedValue:a,objectType:"code"});o[i]=l}else if("object"==typeof s){const e=s.minValue,t=s.maxValue,n=new d({minValue:e,maxValue:t,objectType:"range"});o[i]=n}else if(s){const e=new d({objectType:"any"});o[i]=e}else{const e=new d({objectType:"null"});o[i]=e}}return new p({id:i,isRetired:s,subtype:r,values:o})}));return new h({name:e.name,isEditingRestrictive:e.isEditingRestrictive,fields:e.fields,contingencies:n})}return null})).filter(i.isSome)},r._fetchEnterpriseContingentValues=async function(e,t,i){return n(`${e}/queryContingentValues`,{responseType:"json",query:{layers:JSON.stringify([t]),f:"json"},...i}).then((e=>e.data.contingentValueSets?.[0]))},r._fetchAGOLContingentValues=async function(e,t,i){return n(`${e}/${t}/contingentValues`,{responseType:"json",query:{f:"json"},...i}).then((e=>e.data))},r._getSubtypeEnterprise=function(e){const t=this.layer.sourceJSON;let n;if(t.subtypes){const i=t.subtypes.find((t=>t.code===e));n=m.fromJSON(i)}return n||null},r._getSubtypeAGOL=function(e){const t=this.layer.sourceJSON;let n;if(t.subtypes){const i=t.subtypes.find((t=>t.name===e));n=m.fromJSON(i)}return n||null},r._getDomain=function(e,t){const n=e?e.domains?.[t]:this.layer.getFieldDomain(t);return"inherited"===n?.type?this.layer.getFieldDomain(t):n},e._createClass(s,[{key:"subtypeFieldName",get:function(){const{layer:e}=this;return"subtype-group"===e.type?e.subtypeField:e.typeIdField}}]),s}(s.JSONSupportMixin(r));t.__decorate([o.property({constructOnly:!0})],V.prototype,"layer",void 0),t.__decorate([o.property({constructOnly:!0})],V.prototype,"request",void 0),t.__decorate([o.property({type:[h]})],V.prototype,"fieldGroups",void 0),t.__decorate([o.property({constructOnly:!0})],V.prototype,"fieldGroupDefinitions",void 0),t.__decorate([o.property()],V.prototype,"subtypeFieldName",null),V=g=t.__decorate([u.subclass("esri.layers.support.LayerContingentValuesCache")],V);return V}));