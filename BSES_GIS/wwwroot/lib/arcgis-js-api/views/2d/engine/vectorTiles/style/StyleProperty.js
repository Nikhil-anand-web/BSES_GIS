/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../Color","../GeometryUtils","../expression/expression","../expression/types"],(function(t,e,i,r,n){"use strict";return function(){function l(t,e){let i;switch(this.isDataDriven=!1,this.interpolator=null,t.type){case"number":case"color":i=!0;break;case"array":i="number"===t.value;break;default:i=!1}if(null==e&&(e=t.default),Array.isArray(e)&&e.length>0&&r.ops[e[0]]){const i={number:n.NumberType,color:n.ColorType,string:n.StringType,boolean:n.BooleanType,enum:n.StringType};try{const l="array"===t.type?n.arrayType(i[t.value]||n.ValueType,t.length):i[t.type],a=r.createExpression(e,null,l);this.getValue=this._buildExpression(a,t),this.isDataDriven=!0,a instanceof r.Interpolate&&a.input instanceof r.Zoom&&(this.interpolator=a)}catch(a){console.log(a.message),this.getValue=this._buildSimple(t.default)}return}i&&"interval"===e.type&&(i=!1);const l=e&&e.stops&&e.stops.length>0;if(l)for(const r of e.stops)r[1]=this._validate(r[1],t);if(this.isDataDriven=!!e&&!!e.property,this.isDataDriven)if(void 0!==e.default&&(e.default=this._validate(e.default,t)),l)switch(e.type){case"identity":this.getValue=this._buildIdentity(e,t);break;case"categorical":this.getValue=this._buildCategorical(e,t);break;default:this.getValue=i?this._buildInterpolate(e,t):this._buildInterval(e,t)}else this.getValue=this._buildIdentity(e,t);else l?this.getValue=i?this._buildZoomInterpolate(e):this._buildZoomInterval(e):(e=this._validate(e,t),this.getValue=this._buildSimple(e))}var a=l.prototype;return a._validate=function(t,e){if("number"===e.type){if(null!=e.minimum&&t<e.minimum)return e.minimum;if(null!=e.maximum&&t>e.maximum)return e.maximum}else"color"===e.type?t=l._parseColor(t):"enum"===e.type?"string"==typeof t&&(t=e.values.indexOf(t)):"array"===e.type&&"enum"===e.value?t=t.map((t=>"string"==typeof t?e.values.indexOf(t):t)):"string"===e.type&&(t=n.valueToString(t));return t},a._buildSimple=function(t){return()=>t},a._buildExpression=function(t,e){return(i,r)=>{try{const n=t.evaluate(r,i);return void 0===n?e.default:this._validate(n,e)}catch(n){return console.log(n.message),e.default}}},a._buildIdentity=function(t,e){return(i,r)=>{let n;return r&&(n=r.values[t.property]),void 0!==n&&(n=this._validate(n,e)),null!=n?n:void 0!==t.default?t.default:e.default}},a._buildCategorical=function(t,e){return(i,r)=>{let n;return r&&(n=r.values[t.property]),n=this._categorical(n,t.stops),void 0!==n?n:void 0!==t.default?t.default:e.default}},a._buildInterval=function(t,e){return(i,r)=>{let n;return r&&(n=r.values[t.property]),"number"==typeof n?this._interval(n,t.stops):void 0!==t.default?t.default:e.default}},a._buildInterpolate=function(t,e){return(i,r)=>{let n;return r&&(n=r.values[t.property]),"number"==typeof n?this._interpolate(n,t.stops,t.base||1):void 0!==t.default?t.default:e.default}},a._buildZoomInterpolate=function(t){return e=>this._interpolate(e,t.stops,t.base||1)},a._buildZoomInterval=function(t){return e=>this._interval(e,t.stops)},a._categorical=function(t,e){const i=e.length;for(let r=0;r<i;r++)if(e[r][0]===t)return e[r][1]},a._interval=function(t,e){const i=e.length;let r=0;for(let n=0;n<i&&e[n][0]<=t;n++)r=n;return e[r][1]},a._interpolate=function(t,e,r){let n,l;const a=e.length;for(let i=0;i<a;i++){const r=e[i];if(!(r[0]<=t)){l=r;break}n=r}if(n&&l){const e=l[0]-n[0],a=t-n[0],o=1===r?a/e:(r**a-1)/(r**e-1);if(Array.isArray(n[1])){const t=n[1],e=l[1],r=[];for(let n=0;n<t.length;n++)r.push(i.interpolate(t[n],e[n],o));return r}return i.interpolate(n[1],l[1],o)}return n?n[1]:l?l[1]:void 0},l._isEmpty=function(t){for(const e in t)if(t.hasOwnProperty(e))return!1;return!0},l._parseColor=function(t){return Array.isArray(t)?t:("string"==typeof t&&(t=new e(t)),t instanceof e&&!this._isEmpty(t)?e.toUnitRGBA(t):void 0)},t._createClass(l)}()}));
