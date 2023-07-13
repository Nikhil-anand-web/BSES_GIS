/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/time","../../../../../geometry/support/meshUtils/exporters/gltf/imageutils","../../../../../chunks/index4"],(function(e,t,i,s){"use strict";async function n(e,n){const a=s.parseGIF_1(e),r=s.decompressFrames_1(a,!0),{width:o,height:c}=a.lsd,d=document.createElement("canvas");d.width=o,d.height=c;const u=d.getContext("2d",{willReadFrequently:!0}),m=[],f=[];for(const s of r){f.push(t.Milliseconds(s.delay||100));const e=new ImageData(s.patch,s.dims.width,s.dims.height),n=i.imageTypeToCanvas(e),a=3===s.disposalType?u.getImageData(s.dims.left,s.dims.top,s.dims.width,s.dims.height):void 0;u.drawImage(n,s.dims.left,s.dims.top);const r=u.getImageData(0,0,o,c);m.push(r),1===s.disposalType||(2===s.disposalType?u.clearRect(s.dims.left,s.dims.top,s.dims.width,s.dims.height):3===s.disposalType&&u.putImageData(a,s.dims.left,s.dims.top))}return{frameDurations:f,getFrame:e=>m[e],width:o,height:c}}const a=[71,73,70];function r(e){const t=new Uint8Array(e);return!a.some(((e,i)=>e!==t[i]))}function o(e){if(!r(e))return!1;const t=new DataView(e),i=t.getUint8(10);let s=13+(128&i?3*2**(1+(7&i)):0),n=0,a=!1;for(;!a;){switch(t.getUint8(s++)){case 33:if(!o())return!1;break;case 44:c();break;case 59:a=!0;break;default:return!1}if(n>1)return!0}function o(){switch(t.getUint8(s++)){case 249:d();break;case 1:u();break;case 254:m();break;case 255:f();break;default:return!1}return!0}function c(){n++,s+=8;const e=t.getUint8(s++);s+=128&e?3*2**(1+(7&e)):0,s++,l()}function d(){s++,s+=4,l()}function u(){n++,s++,s+=12,l()}function m(){l()}function f(){s++,s+=8,s+=3,l()}function l(){let e;for(;e=t.getUint8(s++);)s+=e}return!1}e.isAnimatedGIF=o,e.isGIF=r,e.parseGif=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
