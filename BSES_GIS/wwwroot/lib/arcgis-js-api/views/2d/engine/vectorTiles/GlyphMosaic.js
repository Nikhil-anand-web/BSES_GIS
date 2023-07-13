/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./RectangleBinPack","../webgl/Rect","../../../webgl/enums","../../../webgl/Texture","../../../webgl/TextureDescriptor"],(function(t,e,i,s,h,r){"use strict";return function(){function n(t,i,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=i,this._glyphSource=s,this._binPack=new e(t-4,i-4),this._glyphData.push(new Uint8Array(t*i)),this._dirties.push(!0),this._textures.push(void 0)}var o=n.prototype;return o.getGlyphItems=function(t,s){const h=[],r=this._glyphSource,n=new Set,o=1/256;for(const e of s){const t=Math.floor(e*o);n.add(t)}const a=[];return n.forEach((e=>{const i=t+e;if(this._rangePromises.has(i))a.push(this._rangePromises.get(i));else{const s=r.getRange(t,e).then((()=>{this._rangePromises.delete(i)}),(()=>{this._rangePromises.delete(i)}));this._rangePromises.set(i,s),a.push(s)}})),Promise.all(a).then((()=>{let n=this._glyphIndex[t];n||(n={},this._glyphIndex[t]=n);for(const o of s){const s=n[o];if(s){h[o]={sdf:!0,rect:s.rect,metrics:s.metrics,page:s.page,code:o};continue}const a=r.getGlyph(t,o);if(!a||!a.metrics)continue;const c=a.metrics;let l;if(0===c.width)l=new i(0,0,0,0);else{const t=3,i=c.width+2*t,s=c.height+2*t;let h=i%4?4-i%4:4,r=s%4?4-s%4:4;1===h&&(h=5),1===r&&(r=5),l=this._binPack.allocate(i+h,s+r),l.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new e(this.width-4,this.height-4),l=this._binPack.allocate(i+h,s+r));const n=this._glyphData[this._currentPage],o=a.bitmap;let g,u;if(o)for(let e=0;e<s;e++){g=i*e,u=this.width*(l.y+e+1)+l.x;for(let t=0;t<i;t++)n[u+t+1]=o[g+t]}}n[o]={rect:l,metrics:c,tileIDs:null,page:this._currentPage},h[o]={sdf:!0,rect:l,metrics:c,page:this._currentPage,code:o},this._dirties[this._currentPage]=!0}return h}))},o.removeGlyphs=function(t){for(const e in this._glyphIndex){const i=this._glyphIndex[e];if(!i)continue;let s;for(const e in i)if(s=i[e],s.tileIDs.delete(t),0===s.tileIDs.size){const t=this._glyphData[s.page],h=s.rect;let r,n;for(let e=0;e<h.height;e++)for(r=this.width*(h.y+e)+h.x,n=0;n<h.width;n++)t[r+n]=0;delete i[e],this._dirties[s.page]=!0}}},o.bind=function(t,e,i,n=0){if(!this._textures[i]){const e=new r.TextureDescriptor;e.pixelFormat=s.PixelFormat.ALPHA,e.wrapMode=s.TextureWrapMode.CLAMP_TO_EDGE,e.width=this.width,e.height=this.height,this._textures[i]=new h.Texture(t,e,new Uint8Array(this.width*this.height))}const o=this._textures[i];o.setSamplingMode(e),this._dirties[i]&&o.setData(this._glyphData[i]),t.bindTexture(o,n),this._dirties[i]=!1},o.dispose=function(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0},t._createClass(n)}()}));
