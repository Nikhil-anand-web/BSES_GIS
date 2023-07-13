/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./enums","./TextureDescriptor"],(function(e,i,t,r){"use strict";let a=function(e){function r(r,a){var s;switch((s=e.call(this)||this).context=r,Object.assign(i._assertThisInitialized(s),a),s.internalFormat){case t.SizedPixelFormat.R16F:case t.SizedPixelFormat.R16I:case t.SizedPixelFormat.R16UI:case t.SizedPixelFormat.R32F:case t.SizedPixelFormat.R32I:case t.SizedPixelFormat.R32UI:case t.SizedPixelFormat.R8_SNORM:case t.SizedPixelFormat.R8:case t.SizedPixelFormat.R8I:case t.SizedPixelFormat.R8UI:s.pixelFormat=t.PixelFormat.RED}return s}return i._inherits(r,e),r.validate=function(e,i){return new r(e,i)},i._createClass(r)}(r.TextureDescriptor);e.ValidatedTextureDescriptor=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
