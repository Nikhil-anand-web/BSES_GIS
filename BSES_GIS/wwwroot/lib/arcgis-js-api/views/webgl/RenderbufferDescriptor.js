/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./Util"],(function(t,e,i){"use strict";let r=e._createClass((function(t,e,i=e){this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}));function n(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*i.getBytesPerElementFormat(t.internalFormat)}t.RenderbufferDescriptor=r,t.estimateMemory=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
