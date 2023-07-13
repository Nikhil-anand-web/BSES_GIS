/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4","../../../../chunks/vec4f64","../core/shaderModules/Float4PassUniform","../core/shaderModules/interfaces"],(function(e,t,r,s,n,o){"use strict";let i=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(o.NoParameters),a=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(i);function u(e){e.uniforms.add(new n.Float4PassUniform("resolution",(e=>{const{descriptor:t}=e.colorTexture,s=t.width,n=t.height;return r.set(c,1/s,1/n,s,n)})))}const c=s.create();e.SMAAPassParameters=i,e.ValidSMAAPassParameters=a,e.addResolutionUniform=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
