/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/webgl/enums","./BaseGraphicContainer"],(function(e,t,i){"use strict";let r=function(i){function r(){return i.apply(this,arguments)||this}e._inherits(r,i);var n=r.prototype;return n.renderChildren=function(i){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(i.context,!1),e._get(e._getPrototypeOf(r.prototype),"renderChildren",this).call(this,i),i.drawPhase===t.WGLDrawPhase.MAP&&this._renderChildren(i),this.hasHighlight()&&i.drawPhase===t.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(i),this._boundsRenderer&&this._boundsRenderer.doRender(i))},n._renderHighlight=function(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()},e._createClass(r)}(i);return r}));
