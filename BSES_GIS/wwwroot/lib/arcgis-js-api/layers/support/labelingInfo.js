/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/lang","../../core/Logger","./LabelClass"],(function(e,r,n,t,o){"use strict";const l=t.getLogger("esri.layers.support.labelingInfo"),i=/\[([^\[\]]+)\]/gi;function a(e,r,n){return e?e.map((e=>{const t=new o;if(t.read(e,n),t.labelExpression){const e=r.fields||r.layerDefinition&&r.layerDefinition.fields||this.fields;t.labelExpression=t.labelExpression.replaceAll(i,((r,n)=>`[${s(n,e)}]`))}return t})):null}function s(e,r){if(!r)return e;const n=e.toLowerCase();for(let t=0;t<r.length;t++){const e=r[t].name;if(e.toLowerCase()===n)return e}return e}const c={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function f(e,r){const t=n.clone(e);return t.some((e=>u(e,r)))?[]:t}function u(e,n){const t=e.labelPlacement,o=c[n];if(!e.symbol)return l.warn("No ILabelClass symbol specified."),!0;if(!o)return l.error(new r("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${n}' is not supported`)),!0;if(!o.includes(t)){const r=o[0];t&&l.warn(`Found invalid label placement type ${t} for ${n}. Defaulting to ${r}`),e.labelPlacement=r}return!1}e.reader=a,e.validateLabelingInfo=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));