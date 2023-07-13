/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../core/Error","../layers/support/Field"],(function(e,t,n){"use strict";function i(e){return Object.keys(e.attributes).map((t=>{const i=e.attributes[t];return"objectid"===t.toLowerCase()||"fid"===t.toLowerCase()?new n({name:t,alias:t,type:"oid"}):new n("number"==typeof i?{name:t,alias:t,type:"double"}:{name:t,alias:t,type:"string"})}))}function r(e){if(!e.fields){const t=e.features[0];if(t.layer){e.fields=t.layer.fields;const n=Object.keys(t.attributes),i=e.fields.filter((e=>n.includes(e.name)));e.fields=i}else e.fields=i(t)}return e}function o(e){return e.map((({attributes:e})=>e))}function a(e){const{delimiter:t,fields:n=[],outFields:i=[]}=e,r=t||",",o=n.map((e=>e.name));return e=>{let t="";return o.filter((e=>i.includes(e))).forEach((i=>{const o=n.find((({name:e})=>e===i));let a=e[i]||"";if("date"===o?.type&&(a=new Date(a).toString()),o?.domain&&"coded-value"===o.domain.type){const e=o.domain.codedValues.find((e=>a===e.code));e&&(a=e.name)}"string"==typeof a&&a.includes(r)&&(a=`"${a}"`),t+=`${a}${r}`})),`${t}\r\n`}}async function s(e,{includeGeometry:i=!0,delimiter:s=",",outFields:l=["*"]}={}){if(e=r(e),i&&"point"!==e.geometryType)throw new t("export-csv:invalid-geometries",`the input geometry ${e.geometryType} is not supported, must be point`);const{features:u}=e;if(!u.length)return null;let d=e.fields;const[m]=l;"*"===m&&(l=d.map((e=>e.name))),i&&"point"===e.geometryType&&(d.some((e=>"x"===e.name||"y"===e.name))||(d=[...d,new n({name:"lon",alias:"Longitude",type:"double"}),new n({name:"lat",alias:"Latitude",type:"double"})],l=[...l,"lon","lat"]),u.forEach((e=>{e.attributes.lon=e.geometry.longitude,e.attributes.lat=e.geometry.latitude}))),d=d.filter((e=>l.includes(e.name)));const c=s||",",f=o(u),p=d.map((e=>e.name)).join(c),y=a({delimiter:c,outFields:l||d.map((e=>e.name)),fields:d});let b=`${p}${c}\r\n`;f.forEach((e=>{b+=y(e)}));const g=new RegExp(`${c}\r\ns*$`,"g");return b.replace(g,"")}e.attributeToString=a,e.convertFeaturesToCSV=s,e.extractAttributes=o,e.extractFieldsFromFeature=i,e.validateFeatureSetFields=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
