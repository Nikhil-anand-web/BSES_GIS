/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(e,t,n,r,i,a,s){"use strict";let o=function(e){function n(t,n,r,i,s=a.SnappingDomain.ALL){var o;return(o=e.call(this,i,s)||this).previousVertex=t,o.centerVertex=n,o.nextVertex=r,o}return t._inherits(n,e),n.prototype.equals=function(e){return e instanceof n&&(i.exactEquals(this.previousVertex,e.previousVertex)&&i.exactEquals(this.centerVertex,e.centerVertex)&&i.exactEquals(this.nextVertex,e.nextVertex))},t._createClass(n)}(s.SnappingHint);e.RightAngleSnappingHint=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
