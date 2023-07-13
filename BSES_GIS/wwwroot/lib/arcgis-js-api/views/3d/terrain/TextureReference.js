/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec3f64","../../../chunks/vec4f64"],(function(e,t,s,r){"use strict";let n=function(){function e(e,t,n,o,u,c){this.texture=e,this.type=t,e.retain(),this.offsetAndScale=r.fromValues(n.offset[0],n.offset[1],n.scale,n.scale),this.opacities=s.fromValues(o,u,c)}return e.prototype.destroy=function(){this.texture.release()},t._createClass(e)}();e.TextureReference=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
