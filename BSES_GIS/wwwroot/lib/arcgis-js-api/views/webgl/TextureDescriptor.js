/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./enums","./Util"],(function(t,e,i,s){"use strict";let r=e._createClass((function(t=0,e=t){this.width=t,this.height=e,this.target=i.TextureType.TEXTURE_2D,this.pixelFormat=i.PixelFormat.RGBA,this.dataType=i.PixelType.UNSIGNED_BYTE,this.samplingMode=i.TextureSamplingMode.LINEAR,this.wrapMode=i.TextureWrapMode.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}));function a(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(t.hasMipmap?4/3:1)*s.getBytesPerElementFormat(t.internalFormat)}t.TextureDescriptor=r,t.estimateMemory=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
