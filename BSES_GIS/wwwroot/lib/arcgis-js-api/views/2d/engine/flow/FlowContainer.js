/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./BrushFlow","../webgl/enums","../webgl/WGLContainer"],(function(e,t,r,n){"use strict";let s=function(n){function s(){var e;return(e=n.apply(this,arguments)||this).flowStyle=null,e}e._inherits(s,n);var o=s.prototype;return o.doRender=function(t){e._get(e._getPrototypeOf(s.prototype),"doRender",this).call(this,t)},o.prepareRenderPasses=function(n){const o=n.registerRenderPass({name:"flow",brushes:[t],target:()=>this.children,drawPhase:r.WGLDrawPhase.MAP});return[...e._get(e._getPrototypeOf(s.prototype),"prepareRenderPasses",this).call(this,n),o]},e._createClass(s,[{key:"requiresDedicatedFBO",get:function(){return!1}}]),s}(n);return s}));
