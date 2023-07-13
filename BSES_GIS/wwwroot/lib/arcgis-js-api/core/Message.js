/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./object"],(function(e,t){"use strict";function n(e,n){return e.replaceAll(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,((e,r)=>{if(""===r)return"$";const s=t.getDeepValue(r,n);return(s??"").toString()}))}return function(){function t(e,t,r){this.name=e,this.details=r,this.message=(t&&n(t,r))??""}return t.prototype.toString=function(){return"["+this.name+"]: "+this.message},e._createClass(t)}()}));
