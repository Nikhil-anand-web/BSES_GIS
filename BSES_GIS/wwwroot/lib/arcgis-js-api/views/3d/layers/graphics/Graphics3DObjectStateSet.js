/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../webgl-engine/lib/Object3DStateSet"],(function(t,e,i){"use strict";let s=function(){function t(t,e){this.stateType=t,this.objectIdField=e,this.objectStateSet=new i.Object3DStateSet,this.ids=new Set,this.paused=!1}return t.prototype.hasGraphic=function(t){if(this.objectIdField){const e=t.graphic.attributes[this.objectIdField];return this.ids.has(e)}return this.ids.has(t.graphic.uid)},e._createClass(t)}();t.Graphics3DObjectStateSet=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
