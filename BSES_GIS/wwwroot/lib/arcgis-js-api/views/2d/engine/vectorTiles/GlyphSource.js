/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/pbf"],(function(e,t,n){"use strict";let a=function(){function t(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const t=e.getMessage();for(;t.next();)switch(t.tag()){case 3:{const e=t.getMessage();let n,a,s,r,i,c,o;for(;e.next();)switch(e.tag()){case 1:n=e.getUInt32();break;case 2:a=e.getBytes();break;case 3:s=e.getUInt32();break;case 4:r=e.getUInt32();break;case 5:i=e.getSInt32();break;case 6:c=e.getSInt32();break;case 7:o=e.getUInt32();break;default:e.skip()}e.release(),n&&(this._metrics[n]={width:s,height:r,left:i,top:c,advance:o},this._bitmaps[n]=a);break}default:t.skip()}t.release();break}default:e.skip()}}var n=t.prototype;return n.getMetrics=function(e){return this._metrics[e]},n.getBitmap=function(e){return this._bitmaps[e]},e._createClass(t)}(),s=function(){function t(){this._ranges=[]}var n=t.prototype;return n.getRange=function(e){return this._ranges[e]},n.addRange=function(e,t){this._ranges[e]=t},e._createClass(t)}();return function(){function r(e){this._glyphInfo={},this._baseURL=e}var i=r.prototype;return i.getRange=function(e,s){const r=this._getFontStack(e);if(r.getRange(s))return Promise.resolve();const i=256*s,c=i+255;if(this._baseURL){const o=this._baseURL.replace("{fontstack}",e).replace("{range}",i+"-"+c);return t(o,{responseType:"array-buffer"}).then((e=>{r.addRange(s,new a(new n(new Uint8Array(e.data),new DataView(e.data))))})).catch((()=>{r.addRange(s,new a)}))}return r.addRange(s,new a),Promise.resolve()},i.getGlyph=function(e,t){const n=this._getFontStack(e);if(!n)return;const a=Math.floor(t/256),s=n.getRange(a);return s?{metrics:s.getMetrics(t),bitmap:s.getBitmap(t)}:void 0},i._getFontStack=function(e){let t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new s),t},e._createClass(r)}()}));
