/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../ArcadePortal","../Attachment","../Dictionary","../executionError","../../chunks/languageUtils","../featureset/support/shared","./convertdirection","./hash","../../geometry/Extent","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/SpatialReference","../../core/urlUtils","../../portal/Portal"],(function(e,t,r,n,o,i,a,u,c,d,s,l,p,f,h,g,y){"use strict";function m(e){if("loaded"===e.loadStatus&&e.user&&e.user.sourceJSON){return e.user.sourceJSON}return null}function A(e,t){return!!e&&g.hasSamePortal(e,t?.restUrl||"")}function E(e,t){if(!e||!t)return e===t;if(e.x===t.x&&e.y===t.y){if(e.hasZ){if(e.z!==t.z)return!1}else if(t.hasZ)return!1;if(e.hasM){if(e.m!==t.m)return!1}else if(t.hasM)return!1;return!0}return!1}function x(e,a,u){if(null!==e)if(i.isArray(e)){if(a.updateUint8Array([61]),u.map.has(e)){const t=u.map.get(e);a.updateIntArray([61237541^t])}else{u.map.set(e,u.currentLength++);for(const t of e)x(t,a,u);u.map.delete(e),u.currentLength--}a.updateUint8Array([199])}else if(i.isImmutableArray(e)){if(a.updateUint8Array([61]),u.map.has(e)){const t=u.map.get(e);a.updateIntArray([61237541^t])}else{u.map.set(e,u.currentLength++);for(const t of e.toArray())x(t,a,u);u.map.delete(e),u.currentLength--}a.updateUint8Array([199])}else{if(i.isDate(e))return a.updateIntArray([e.toNumber()]),void a.updateUint8Array([241]);if(i.isString(e))return a.updateIntArray([e.length]),a.updateWithString(e),void a.updateUint8Array([41]);if(i.isBoolean(e))a.updateUint8Array([!0===e?1:0,113]);else{if(i.isNumber(e))return a.updateFloatArray([e]),void a.updateUint8Array([173]);if(e instanceof r)throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(e instanceof t)throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(!(e instanceof n)){if(i.isFeature(e))throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(e instanceof l)return a.updateIntArray([3833836621]),a.updateIntArray([0]),a.updateFloatArray([e.x]),a.updateIntArray([1]),a.updateFloatArray([e.y]),e.hasZ&&(a.updateIntArray([2]),a.updateFloatArray([e.z])),e.hasM&&(a.updateIntArray([3]),a.updateFloatArray([e.m])),a.updateIntArray([3765347959]),void x(e.spatialReference.wkid,a,u);if(e instanceof p){a.updateIntArray([1266616829]);for(let t=0;t<e.rings.length;t++){const r=e.rings[t],n=[];let o=null,i=null;for(let a=0;a<r.length;a++){const u=e.getPoint(t,a);if(0===a)o=u;else if(E(i,u))continue;i=u,a===r.length-1&&E(o,u)||n.push(u)}a.updateIntArray([1397116793,n.length]);for(let e=0;e<n.length;e++){const t=n[e];a.updateIntArray([3962308117,e]),x(t,a,u),a.updateIntArray([2716288009])}a.updateIntArray([2278822459])}return a.updateIntArray([3878477243]),void x(e.spatialReference.wkid,a,u)}if(e instanceof f){a.updateIntArray([4106883559]);for(let t=0;t<e.paths.length;t++){const r=e.paths[t];a.updateIntArray([1397116793,r.length]);for(let n=0;n<r.length;n++)a.updateIntArray([3962308117,n]),x(e.getPoint(t,n),a,u),a.updateIntArray([2716288009]);a.updateIntArray([2278822459])}return a.updateIntArray([2568784753]),void x(e.spatialReference.wkid,a,u)}if(e instanceof s){a.updateIntArray([588535921,e.points.length]);for(let t=0;t<e.points.length;t++){const r=e.getPoint(t);a.updateIntArray([t]),x(r,a,u)}return a.updateIntArray([1700171621]),void x(e.spatialReference.wkid,a,u)}if(e instanceof d)return a.updateIntArray([3483648373]),a.updateIntArray([0]),a.updateFloatArray([e.xmax]),a.updateIntArray([1]),a.updateFloatArray([e.xmin]),a.updateIntArray([2]),a.updateFloatArray([e.ymax]),a.updateIntArray([3]),a.updateFloatArray([e.ymin]),e.hasZ&&(a.updateIntArray([4]),a.updateFloatArray([e.zmax]),a.updateIntArray([5]),a.updateFloatArray([e.zmin])),e.hasM&&(a.updateIntArray([6]),a.updateFloatArray([e.mmax]),a.updateIntArray([7]),a.updateFloatArray([e.mmin])),a.updateIntArray([3622027469]),void x(e.spatialReference.wkid,a,u);if(e instanceof h)return a.updateIntArray([14]),void 0!==e.wkid&&null!==e.wkid&&a.updateIntArray([e.wkid]),void(e.wkt&&a.updateWithString(e.wkt));if(i.isFunctionParameter(e))throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(i.isFeatureSet(e))throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(i.isFeatureSetCollection(e))throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);if(e===i.voidOperation)throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node);throw new o.ArcadeExecutionError(u.context,o.ExecutionErrorCodes.UnsupportedHashType,u.node)}if(a.updateUint8Array([223]),u.map.has(e)){const t=u.map.get(e);a.updateIntArray([61237541^t])}else{u.map.set(e,u.currentLength++);for(const t of e.keys()){a.updateIntArray([t.length]),a.updateWithString(t),a.updateUint8Array([251]);x(e.field(t),a,u),a.updateUint8Array([239])}u.map.delete(e),u.currentLength--}a.updateUint8Array([73])}}else a.updateUint8Array([0,139])}function C(e,r){e.portal=function(e,n){return r(e,n,((r,o,a)=>(i.pcCheck(a,1,1,e,n),new t(i.toString(a[0])))))},e.typeof=function(e,t){return r(e,t,((r,n,a)=>{i.pcCheck(a,1,1,e,t);const u=i.getType(a[0]);if("Unrecognised Type"===u)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.UnrecognisedType,t);return u}))},e.trim=function(e,t){return r(e,t,((r,n,o)=>(i.pcCheck(o,1,1,e,t),i.toString(o[0]).trim())))},e.tohex=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,1,1,e,t);const a=i.toNumber(o[0]);return isNaN(a)?a:a.toString(16)}))},e.upper=function(e,t){return r(e,t,((r,n,o)=>(i.pcCheck(o,1,1,e,t),i.toString(o[0]).toUpperCase())))},e.proper=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,1,2,e,t);let a=1;2===o.length&&"firstword"===i.toString(o[1]).toLowerCase()&&(a=2);const u=/\s/,c=i.toString(o[0]);let d="",s=!0;for(let e=0;e<c.length;e++){let t=c[e];if(u.test(t))1===a&&(s=!0);else{t.toUpperCase()!==t.toLowerCase()&&(s?(t=t.toUpperCase(),s=!1):t=t.toLowerCase())}d+=t}return d}))},e.lower=function(e,t){return r(e,t,((r,n,o)=>(i.pcCheck(o,1,1,e,t),i.toString(o[0]).toLowerCase())))},e.guid=function(e,t){return r(e,t,((r,n,o)=>{if(i.pcCheck(o,0,1,e,t),o.length>0)switch(i.toString(o[0]).toLowerCase()){case"digits":return i.generateUUID().replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return i.generateUUID();case"digits-hyphen-braces":return"{"+i.generateUUID()+"}";case"digits-hyphen-parentheses":return"("+i.generateUUID()+")"}return"{"+i.generateUUID()+"}"}))},e.standardizeguid=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,2,2,e,t);let a=i.toString(o[0]);if(""===a||null===a)return"";const u=/^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(a);if(!u)return"";const c=u.groups;switch(a=c.partA+"-"+c.partB+"-"+c.partC+"-"+c.partD+"-"+c.partE,i.toString(o[1]).toLowerCase()){case"digits":return a.replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return a;case"digits-hyphen-braces":return"{"+a+"}";case"digits-hyphen-parentheses":return"("+a+")"}return"{"+a+"}"}))},e.console=function(e,t){return r(e,t,((t,r,n)=>(0===n.length||(1===n.length?e.console(i.toString(n[0])):e.console(i.toString(n))),i.voidOperation)))},e.mid=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,2,3,e,t);let a=i.toNumber(o[1]);if(isNaN(a))return"";if(a<0&&(a=0),2===o.length)return i.toString(o[0]).substr(a);let u=i.toNumber(o[2]);return isNaN(u)?"":(u<0&&(u=0),i.toString(o[0]).substr(a,u))}))},e.find=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,2,3,e,t);let a=0;if(o.length>2){if(a=i.toNumber(i.defaultUndefined(o[2],0)),isNaN(a))return-1;a<0&&(a=0)}return i.toString(o[1]).indexOf(i.toString(o[0]),a)}))},e.left=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,2,2,e,t);let a=i.toNumber(o[1]);return isNaN(a)?"":(a<0&&(a=0),i.toString(o[0]).substr(0,a))}))},e.right=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,2,2,e,t);let a=i.toNumber(o[1]);return isNaN(a)?"":(a<0&&(a=0),i.toString(o[0]).substr(-1*a,a))}))},e.split=function(e,t){return r(e,t,((r,n,o)=>{let a;i.pcCheck(o,2,4,e,t);let u=i.toNumber(i.defaultUndefined(o[2],-1));const c=i.toBoolean(i.defaultUndefined(o[3],!1));if(-1===u||null===u||!0===c?a=i.toString(o[0]).split(i.toString(o[1])):(isNaN(u)&&(u=-1),u<-1&&(u=-1),a=i.toString(o[0]).split(i.toString(o[1]),u)),!1===c)return a;const d=[];for(let e=0;e<a.length&&!(-1!==u&&d.length>=u);e++)""!==a[e]&&void 0!==a[e]&&d.push(a[e]);return d}))},e.text=function(e,t){return r(e,t,((r,n,o)=>(i.pcCheck(o,1,2,e,t),i.toStringExplicit(o[0],o[1]))))},e.concatenate=function(e,t){return r(e,t,((e,t,r)=>{const n=[];if(r.length<1)return"";if(i.isArray(r[0])){const e=i.defaultUndefined(r[2],"");for(let t=0;t<r[0].length;t++)n[t]=i.toStringExplicit(r[0][t],e);return r.length>1?n.join(r[1]):n.join("")}if(i.isImmutableArray(r[0])){const e=i.defaultUndefined(r[2],"");for(let t=0;t<r[0].length();t++)n[t]=i.toStringExplicit(r[0].get(t),e);return r.length>1?n.join(r[1]):n.join("")}for(let o=0;o<r.length;o++)n[o]=i.toStringExplicit(r[o]);return n.join("")}))},e.reverse=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,1,1,e,t),i.isArray(a[0])){const e=a[0].slice(0);return e.reverse(),e}if(i.isImmutableArray(a[0])){const e=a[0].toArray().slice(0);return e.reverse(),e}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.replace=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,3,4,e,t);const a=i.toString(o[0]),u=i.toString(o[1]),c=i.toString(o[2]);return 4!==o.length||i.toBoolean(o[3])?i.multiReplace(a,u,c):a.replace(u,c)}))},e.schema=function(e,t){return r(e,t,((r,a,u)=>{if(i.isFeature(u[0])){const t=i.featureSchema(u[0]);return t?n.convertObjectToArcadeDictionary(t,i.defaultTimeZone(e)):null}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.subtypes=function(e,t){return r(e,t,((r,a,u)=>{if(i.pcCheck(u,1,1,e,t),i.isFeature(u[0])){const t=i.featureSubtypes(u[0]);return t?n.convertObjectToArcadeDictionary(t,i.defaultTimeZone(e)):null}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.subtypecode=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,1,1,e,t),i.isFeature(a[0])){const e=i.featureSubtypes(a[0]);if(!e)return null;if(e.subtypeField&&a[0].hasField(e.subtypeField)){const t=a[0].field(e.subtypeField);for(const r of e.subtypes)if(r.code===t)return r.code;return null}return null}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.subtypename=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,1,1,e,t),i.isFeature(a[0])){const e=i.featureSubtypes(a[0]);if(!e)return"";if(e.subtypeField&&a[0].hasField(e.subtypeField)){const t=a[0].field(e.subtypeField);for(const r of e.subtypes)if(r.code===t)return r.name;return""}return""}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.gdbversion=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,1,1,e,t),i.isFeature(a[0]))return a[0].gdbVersion();throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.domain=function(e,t){return r(e,t,((r,u,c)=>{if(i.pcCheck(c,2,3,e,t),i.isFeature(c[0])){const t=i.featureFullDomain(c[0],i.toString(c[1]),void 0===c[2]?void 0:c[2]);return t&&t.domain?"coded-value"===t.domain.type||"codedValue"===t.domain.type?n.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:a.layerFieldEsriConstants[t.field.type],codedValues:t.domain.codedValues.map((e=>({name:e.name,code:e.code})))},i.defaultTimeZone(e)):n.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:a.layerFieldEsriConstants[t.field.type],min:t.domain.min,max:t.domain.max},i.defaultTimeZone(e)):null}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.domainname=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,2,4,e,t),i.isFeature(a[0]))return i.featureDomainValueLookup(a[0],i.toString(a[1]),a[2],void 0===a[3]?void 0:a[3]);throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.domaincode=function(e,t){return r(e,t,((r,n,a)=>{if(i.pcCheck(a,2,4,e,t),i.isFeature(a[0]))return i.featureDomainCodeLookup(a[0],i.toString(a[1]),a[2],void 0===a[3]?void 0:a[3]);throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t)}))},e.urlencode=function(e,t){return r(e,t,((r,o,a)=>{if(i.pcCheck(a,1,1,e,t),null===a[0])return"";if(a[0]instanceof n){let e="";for(const t of a[0].keys()){const r=a[0].field(t);""!==e&&(e+="&"),e+=null===r?encodeURIComponent(t)+"=":encodeURIComponent(t)+"="+encodeURIComponent(r)}return e}return encodeURIComponent(i.toString(a[0]))}))},e.hash=function(e,t){return r(e,t,((r,n,o)=>{i.pcCheck(o,1,1,e,t);const a=new c.XXH(0);return x(o[0],a,{context:e,node:t,map:new Map,currentLength:0}),a.digest()}))},e.convertdirection=function(e,t){return r(e,t,((r,n,o)=>(i.pcCheck(o,3,3,e,t),u.convertDirection(o[0],o[1],o[2]))))},e.fromjson=function(e,t){return r(e,t,((r,a,u)=>{if(i.pcCheck(u,1,1,e,t),!1===i.isString(u[0]))throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,t);return n.convertJsonToArcade(JSON.parse(i.toString(u[0])),i.defaultTimeZone(e))}))},e.expects=function(e,t){return r(e,t,((r,n,a)=>{if(a.length<1)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.WrongNumberOfParameters,t);return i.voidOperation}))},e.tocharcode=function(e,t){return r(e,t,((r,n,a)=>{i.pcCheck(a,1,2,e,t);const u=i.toNumber(i.defaultUndefined(a[1],0)),c=i.toString(a[0]);if(0===c.length&&1===a.length)return null;if(c.length<=u||u<0)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.OutOfBounds,t);return c.charCodeAt(u)}))},e.tocodepoint=function(e,t){return r(e,t,((r,n,a)=>{i.pcCheck(a,1,2,e,t);const u=i.toNumber(i.defaultUndefined(a[1],0)),c=i.toString(a[0]);if(0===c.length&&1===a.length)return null;if(c.length<=u||u<0)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.OutOfBounds,t);return c.codePointAt(u)}))},e.fromcharcode=function(e,t){return r(e,t,((r,n,a)=>{if(a.length<1)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.WrongNumberOfParameters,t);const u=a.map((e=>Math.trunc(i.toNumber(e)))).filter((e=>e>=0&&e<=65535));return 0===u.length?null:String.fromCharCode.apply(null,u)}))},e.fromcodepoint=function(e,t){return r(e,t,((r,n,a)=>{if(a.length<1)throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.WrongNumberOfParameters,t);let u;try{u=a.map((e=>Math.trunc(i.toNumber(e)))).filter((e=>e<=1114111&&e>>>0===e))}catch(c){return null}return 0===u.length?null:String.fromCodePoint.apply(null,u)}))},e.getuser=function(e,a){return r(e,a,((r,u,c)=>{i.pcCheck(c,0,2,e,a);let d=i.defaultUndefined(c[1],"");if(d=!0===d||!1===d?"":i.toString(d),null!==d&&""!==d)return null;if(0===c.length||c[0]instanceof t){let t=null;if(t=e.services&&e.services.portal?e.services.portal:y.getDefault(),c.length>0){if(!A(c[0].field("url"),t))return null}if(!t)return null;if(""===d){const r=m(t);if(r){const t=JSON.parse(JSON.stringify(r));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return n.convertObjectToArcadeDictionary(t,i.defaultTimeZone(e))}}return null}throw new o.ArcadeExecutionError(e,o.ExecutionErrorCodes.InvalidParameter,a)}))},e.getenvironment=function(e,t){return r(e,t,((r,o,a)=>(i.pcCheck(a,0,0,e,t),n.convertObjectToArcadeDictionary(i.defaultExecutingContext(i.defaultTimeZone(e),e.spatialReference),i.defaultTimeZone(e),!0))))}}e.registerFunctions=C,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));