/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(t,e,n,i,a,r,l){"use strict";let s=function(t){function n(e,n,i,a,l=r.SnappingDomain.ALL,s=!0,o=!0){var p;return(p=t.call(this,a,l)||this).type=e,p.lineStart=n,p.lineEnd=i,p.fadeLeft=s,p.fadeRight=o,p}return e._inherits(n,t),n.prototype.equals=function(t){return t instanceof n&&(this.type===t.type&&a.exactEquals(this.lineStart,t.lineStart)&&a.exactEquals(this.lineEnd,t.lineEnd)&&this.fadeLeft===t.fadeLeft&&this.fadeRight===t.fadeRight)},e._createClass(n,[{key:"length",get:function(){return a.distance(this.lineStart,this.lineEnd)}}]),n}(l.SnappingHint);t.LineSnappingHint=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
