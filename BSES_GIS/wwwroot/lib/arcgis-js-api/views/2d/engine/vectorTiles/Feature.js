/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/TileClipper"],(function(e,t){"use strict";var s;return function(e){e[e.moveTo=1]="moveTo",e[e.lineTo=2]="lineTo",e[e.close=7]="close"}(s||(s={})),function(){function o(e,t){this.values={},this._geometry=void 0,this._pbfGeometry=null;const s=t.keys,o=t.values,n=e.asUnsafe();for(;n.next();)switch(n.tag()){case 1:this.id=n.getUInt64();break;case 2:{const e=n.getMessage().asUnsafe(),t=this.values;for(;!e.empty();){const n=e.getUInt32(),r=e.getUInt32();t[s[n]]=o[r]}e.release();break}case 3:this.type=n.getUInt32();break;case 4:this._pbfGeometry=n.getMessage();break;default:n.skip()}}return o.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;const o=this._pbfGeometry.asUnsafe();let n,r;this._pbfGeometry=null,e?e.reset(this.type):n=[];let i,a=s.moveTo,l=0,u=0,c=0;for(;!o.empty();){if(0===l){const e=o.getUInt32();a=7&e,l=e>>3}switch(l--,a){case s.moveTo:u+=o.getSInt32(),c+=o.getSInt32(),e?e.moveTo(u,c):n&&(r&&n.push(r),r=[],r.push(new t.Point(u,c)));break;case s.lineTo:u+=o.getSInt32(),c+=o.getSInt32(),e?e.lineTo(u,c):r&&r.push(new t.Point(u,c));break;case s.close:e?e.close():r&&!r[0].equals(u,c)&&r.push(r[0].clone());break;default:throw o.release(),new Error("Invalid path operation")}}return e?i=e.result():n&&(r&&n.push(r),i=n),o.release(),this._geometry=i,i},e._createClass(o)}()}));
