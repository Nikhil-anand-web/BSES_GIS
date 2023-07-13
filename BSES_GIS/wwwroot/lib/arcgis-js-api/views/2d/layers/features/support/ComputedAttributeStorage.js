/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../engine/webgl/DisplayId","./DisplayIdGenerator","./StaticBitSet"],(function(t,e,n,s,i){"use strict";function r(t,e,n){if(!(t.length>e))for(;t.length<=e;)t.push(n)}let u=function(){function t(){this._numerics=[],this._strings=[],this._idGenerator=new s.DisplayIdGenerator,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}var u=t.prototype;return u.createBitset=function(){const t=this._bitsets.length;return this._bitsets.push(i.StaticBitSet.create(this._allocatedSize,n.DISPLAY_ID_TEXEL_MASK)),t+1},u.getBitset=function(t){return this._bitsets[t-1]},u._expand=function(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)},u._ensureNumeric=function(t,e){this._numerics[t]||(this._numerics[t]=[]);r(this._numerics[t],e,0)},u._ensureInstanceId=function(t){r(this._instanceIds,t,0)},u._ensureString=function(t,e){this._strings[t]||(this._strings[t]=[]);r(this._strings[t],e,null)},u.createDisplayId=function(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),n.createDisplayId(e,t)},u.releaseDisplayId=function(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&n.DISPLAY_ID_TEXEL_MASK)},u.getComputedNumeric=function(t,e){return this.getComputedNumericAtIndex(t&n.DISPLAY_ID_TEXEL_MASK,0)},u.setComputedNumeric=function(t,e,s){return this.setComputedNumericAtIndex(t&n.DISPLAY_ID_TEXEL_MASK,s,0)},u.getComputedString=function(t,e){return this.getComputedStringAtIndex(t&n.DISPLAY_ID_TEXEL_MASK,0)},u.setComputedString=function(t,e,s){return this.setComputedStringAtIndex(t&n.DISPLAY_ID_TEXEL_MASK,0,s)},u.getComputedNumericAtIndex=function(t,e){const s=t&n.DISPLAY_ID_TEXEL_MASK;return this._ensureNumeric(e,s),this._numerics[e][s]},u.setComputedNumericAtIndex=function(t,e,s){const i=t&n.DISPLAY_ID_TEXEL_MASK;this._ensureNumeric(e,i),this._numerics[e][i]=s},u.getInstanceId=function(t){const e=t&n.DISPLAY_ID_TEXEL_MASK;return this._ensureInstanceId(e),this._instanceIds[e]},u.setInstanceId=function(t,e){const s=t&n.DISPLAY_ID_TEXEL_MASK;this._ensureInstanceId(s),this._instanceIds[s]=e},u.getComputedStringAtIndex=function(t,e){const s=t&n.DISPLAY_ID_TEXEL_MASK;return this._ensureString(e,s),this._strings[e][s]},u.setComputedStringAtIndex=function(t,e,s){const i=t&n.DISPLAY_ID_TEXEL_MASK;this._ensureString(e,i),this._strings[e][i]=s},u.getXMin=function(t){return this._bounds[4*(t&n.DISPLAY_ID_TEXEL_MASK)]},u.getYMin=function(t){return this._bounds[4*(t&n.DISPLAY_ID_TEXEL_MASK)+1]},u.getXMax=function(t){return this._bounds[4*(t&n.DISPLAY_ID_TEXEL_MASK)+2]},u.getYMax=function(t){return this._bounds[4*(t&n.DISPLAY_ID_TEXEL_MASK)+3]},u.setBounds=function(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let i=1/0,u=1/0,_=-1/0,o=-1/0;s.forEachVertex(((t,e)=>{i=Math.min(i,t),u=Math.min(u,e),_=Math.max(_,t),o=Math.max(o,e)}));const c=t&n.DISPLAY_ID_TEXEL_MASK;return r(this._bounds,4*c+4,0),this._bounds[4*c]=i,this._bounds[4*c+1]=u,this._bounds[4*c+2]=_,this._bounds[4*c+3]=o,!0},e._createClass(t)}();t.ComputedAttributeStorage=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
