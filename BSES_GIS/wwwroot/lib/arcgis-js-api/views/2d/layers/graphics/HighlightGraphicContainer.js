/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/Error","../../../../core/accessorSupport/decorators/subclass","../../engine/webgl/enums","./BaseGraphicContainer","../../../webgl/enums"],(function(e,t,r,s,i,n,o,a,c,h,l){"use strict";let u=function(t){function r(){return t.apply(this,arguments)||this}e._inherits(r,t);var s=r.prototype;return s.doRender=function(t){t.drawPhase===c.WGLDrawPhase.HIGHLIGHT&&e._get(e._getPrototypeOf(r.prototype),"doRender",this).call(this,t)},s.renderChildren=function(t){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(t.context),e._get(e._getPrototypeOf(r.prototype),"renderChildren",this).call(this,t);const{painter:s}=t,i=s.effects.highlight;i.bind(t),t.context.setColorMask(!0,!0,!0,!0),t.context.clear(l.ClearBufferBit.COLOR_BUFFER_BIT),this._renderChildren(t,i.defines.concat(["highlightAll"])),i.draw(t),i.unbind()},e._createClass(r)}(h);u=t.__decorate([a.subclass("esri.views.2d.layers.support.HighlightGraphicContainer")],u);return u}));