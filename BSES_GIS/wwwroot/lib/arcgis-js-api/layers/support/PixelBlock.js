/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","./SimpleBandStatistics","./rasterFormats/pixelRangeUtils"],(function(t,e,i,s,r,l,n,o,a,h,p){"use strict";var c;let u=c=function(e){function s(t){var i;return(i=e.call(this,t)||this).width=null,i.height=null,i.pixelType="f32",i.validPixelCount=null,i.mask=null,i.maskIsAlpha=!1,i.premultiplyAlpha=!1,i.statistics=null,i.depthCount=1,i}t._inherits(s,e),s.createEmptyBand=function(t,e){return new(c.getPixelArrayConstructor(t))(e)},s.getPixelArrayConstructor=function(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e};var n=s.prototype;return n.castPixelType=function(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e},n.getPlaneCount=function(){return this.pixels?.length},n.addData=function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new i("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics??new h.SimpleBandStatistics)},n.getAsRGBA=function(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},n.getAsRGBAFloat=function(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},n.updateStatistics=function(){if(!this.pixels)return;this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(null!=t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e},n.clamp=function(t){if(!t||"f64"===t||"f32"===t||!this.pixels)return;const[e,i]=p.getPixelValueRange(t),s=this.pixels,r=this.width*this.height,l=s.length;let n,o,a;const h=[];for(let p=0;p<l;p++){a=c.createEmptyBand(t,r),n=s[p];for(let t=0;t<r;t++)o=n[t],a[t]=o>i?i:o<e?e:o;h.push(a)}this.pixels=h,this.pixelType=t},n.extractBands=function(t){const{pixels:e,statistics:i}=this;if(null==t||0===t.length||!e||0===e.length)return this;const s=e.length,r=t.some((t=>t>=e.length)),l=s===t.length&&!t.some(((t,e)=>t!==e));if(r||l)return this;const n=this.bandMasks?.length===s?t.map((t=>this.bandMasks[t])):void 0;let{mask:o,validPixelCount:a}=this;const{width:h,height:p}=this;if(n){if(1===n.length)o=n[0];else{const t=h*p;o=new Uint8Array(t).fill(255);for(let e=0;e<n.length;e++){const i=n[e];for(let e=0;e<t;e++)i[e]||(o[e]=0)}}a=o.filter((t=>!!t)).length}return new c({pixelType:this.pixelType,width:h,height:p,mask:o,bandMasks:n,validPixelCount:a,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>e[t])),statistics:i&&t.map((t=>i[t]))})},n.clone=function(){const t=new c({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;null!=this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0)),this.bandMasks&&(t.bandMasks=this.bandMasks.map((t=>new Uint8Array(t))));const i=c.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const s=!!this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=s?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=r.clone(this.statistics[e]);return t.premultiplyAlpha=this.premultiplyAlpha,t},n._fillFrom8Bit=function(t){const{mask:e,maskIsAlpha:i,premultiplyAlpha:s,pixels:r}=this;if(!t||!r||!r.length)return void l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let n,o,a,h;n=o=a=r[0],r.length>=3?(o=r[1],a=r[2]):2===r.length&&(o=r[1]);const p=new Uint32Array(t),c=this.width*this.height;if(n.length===c)if(null!=e&&e.length===c)if(i)for(h=0;h<c;h++){const t=e[h];if(t){const e=t/255;p[h]=s?t<<24|a[h]*e<<16|o[h]*e<<8|n[h]*e:t<<24|a[h]<<16|o[h]<<8|n[h]}}else for(h=0;h<c;h++)e[h]&&(p[h]=255<<24|a[h]<<16|o[h]<<8|n[h]);else for(h=0;h<c;h++)p[h]=255<<24|a[h]<<16|o[h]<<8|n[h];else l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")},n._fillFromNon8Bit=function(t){const{pixels:e,mask:i,statistics:s}=this;if(!t||!e||!e.length)return void l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let n=1,o=0,a=1;if(s&&s.length>0){for(const t of s)if(null!=t.minValue&&(o=Math.min(o,t.minValue)),null!=t.maxValue&&null!=t.minValue){const e=t.maxValue-t.minValue;a=Math.max(a,e)}n=255/a}else{let t=255;"s8"===r?(o=-128,t=127):"u16"===r?t=65535:"s16"===r?(o=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(o=-2147483648,t=2147483647):"f32"===r?(o=-34e38,t=34e38):"f64"===r&&(o=-Number.MAX_VALUE,t=Number.MAX_VALUE),n=255/(t-o)}const h=new Uint32Array(t),p=this.width*this.height;let c,u,f,d,g;if(c=u=f=e[0],c.length!==p)return l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(f=e[2]),null!=i&&i.length===p)for(d=0;d<p;d++)i[d]&&(h[d]=255<<24|(f[d]-o)*n<<16|(u[d]-o)*n<<8|(c[d]-o)*n);else for(d=0;d<p;d++)h[d]=255<<24|(f[d]-o)*n<<16|(u[d]-o)*n<<8|(c[d]-o)*n;else if(null!=i&&i.length===p)for(d=0;d<p;d++)g=(c[d]-o)*n,i[d]&&(h[d]=255<<24|g<<16|g<<8|g);else for(d=0;d<p;d++)g=(c[d]-o)*n,h[d]=255<<24|g<<16|g<<8|g},n._fillFrom32Bit=function(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return l.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let s,r,n,o;s=r=n=e[0],e.length>=3?(r=e[1],n=e[2]):2===e.length&&(r=e[1]);const a=this.width*this.height;if(s.length!==a)return l.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(null!=i&&i.length===a)for(o=0;o<a;o++)t[h++]=s[o],t[h++]=r[o],t[h++]=n[o],t[h++]=1&i[o];else for(o=0;o<a;o++)t[h++]=s[o],t[h++]=r[o],t[h++]=n[o],t[h++]=1},n._calculateBandStatistics=function(t,e){let i=1/0,s=-1/0;const r=t.length;let l,n=0;if(null!=e)for(l=0;l<r;l++)e[l]&&(n=t[l],i=n<i?n:i,s=n>s?n:s);else for(l=0;l<r;l++)n=t[l],i=n<i?n:i,s=n>s?n:s;return new h.SimpleBandStatistics(i,s)},t._createClass(s)}(s.JSONSupport);e.__decorate([n.property({json:{write:!0}})],u.prototype,"width",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"height",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"pixelType",void 0),e.__decorate([o.cast("pixelType")],u.prototype,"castPixelType",null),e.__decorate([n.property({json:{write:!0}})],u.prototype,"validPixelCount",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"mask",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"maskIsAlpha",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"pixels",void 0),e.__decorate([n.property()],u.prototype,"premultiplyAlpha",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"statistics",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"depthCount",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"noDataValues",void 0),e.__decorate([n.property({json:{write:!0}})],u.prototype,"bandMasks",void 0),u=c=e.__decorate([a.subclass("esri.layers.support.PixelBlock")],u);return u}));