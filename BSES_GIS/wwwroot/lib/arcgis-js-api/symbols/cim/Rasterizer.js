/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/mathUtils","./CIMSymbolHelper","./rasterizingUtils","./Rect","./SDFHelper","./utils"],(function(e,t,a,r,n,i,s){"use strict";const l=512;return function(){function o(e){this._resourceManager=e,this._rasterizationCanvas=null}var m=o.prototype;return m.dispose=function(){this._rasterizationCanvas=null},m.rasterizeJSONResource=function(e,s,l){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[a,n,i]=r.rasterizeSimpleFill(this._rasterizationCanvas,e.style,s);return{size:[n,i],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:t.nextPowerOfTwo(Math.ceil(s))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,n;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=a.slsDashToTemplateArray(e.style,e.cap),e.cap){case"butt":n="Butt";break;case"square":n="Square";break;default:n="Round"}else t=e.dashTemplate,n=e.cim.capStyle;const[i,s,l]=r.rasterizeDash(t,n);return{size:[s,l],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let o,m=null,c=null,f=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(o=a.CIMSymbolHelper.fromSimpleMarker(e),c=i.getSDFInfo(o)):e.cim&&"CIMHatchFill"===e.cim.type?(o=a.CIMSymbolHelper.fromCIMHatchFill(e.cim,s),m=new n(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin),f=s):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(o=a.CIMSymbolHelper.fromCIMInsidePolygon(e.cim),m=new n(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):(o=e.cim,e.avoidSDFRasterization||(c=i.getSDFInfo(o))),c&&!l){const[e,t,a]=i.buildSDF(c);return e?{size:[t,a],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:f}:null}const[u,h,p,y,C]=a.CIMSymbolHelper.rasterize(this._rasterizationCanvas,o,m,this._resourceManager,!l);return u?{size:[h,p],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:C}:null},m.rasterizeImageResource=function(e,t,a,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const n=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?n.putImageData(a,0,0):(a.setAttribute("width",`${e}px`),a.setAttribute("height",`${t}px`),n.drawImage(a,0,0,e,t));const i=n.getImageData(0,0,e,t),o=new Uint8Array(i.data);if(r)for(const s of r)if(s&&s.oldColor&&4===s.oldColor.length&&s.newColor&&4===s.newColor.length){const[e,t,a,r]=s.oldColor,[n,i,l,m]=s.newColor;if(e===n&&t===i&&a===l&&r===m)continue;for(let s=0;s<o.length;s+=4)e===o[s]&&t===o[s+1]&&a===o[s+2]&&r===o[s+3]&&(o[s]=n,o[s+1]=i,o[s+2]=l,o[s+3]=m)}let m;for(let s=0;s<o.length;s+=4)m=o[s+3]/255,o[s]=o[s]*m,o[s+1]=o[s+1]*m,o[s+2]=o[s+2]*m;let c=o,f=e,u=t;const h=l;if(f>=h||u>=h){const a=f/u;a>1?(f=h,u=Math.round(h/a)):(u=h,f=Math.round(h*a)),c=new Uint8Array(4*f*u);const r=new Uint8ClampedArray(c.buffer);s.resampleHermite(o,e,t,r,f,u,!1)}return{size:[f,u],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e._createClass(o)}()}));