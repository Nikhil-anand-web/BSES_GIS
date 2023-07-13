/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","./GeometryHandler"],(function(t,e,l,i){"use strict";const o=[227,27,21,.6],r=[21,244,21,.6],a=12,c=[{color:[255,0,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff0000"},{color:[255,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff00ff"},{color:[217,188,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#D9BCFF"},{color:[0,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#00ff00"},{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ffff00"},{color:[0,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#0000ff"},{color:[255,165,0,.5],haloOpacity:.9,fillOpacity:.2,hex:"#ffa500"},{color:[0,0,0,.5],haloOpacity:.9,fillOpacity:.2,hex:"#000000"}];let n=function(){function t(){this._geometryHandler=new i.GeometryHandler}var n=t.prototype;return n.getFlagGraphic=function(t,e,l,i){const a="starting-point"===e?r:o;if("polygon"===t.type){const e=t;e.centroid&&(t=e.centroid)}if(i){return this.makeGraphic(t,a,l?.attributes,null,i)}return this.makeGraphic(t,a,l?.attributes)},n.getHighlightColor=function(t){return c[t]},n.makeGraphic=function(t,e,i,o,r){let c,n=t;switch(t.type){case"multipoint":c={type:"simple-marker",color:e,size:a,outline:{color:e,width:0}},o&&(n=t);break;case"point":c=r||{type:"simple-marker",color:e,size:a,outline:{color:e,width:0}},o&&(n=t);break;case"polyline":c={type:"simple-line",color:e,width:a},o&&(n=t);break;case"polygon":c={type:"simple-fill",color:e,outline:{color:e,width:a}},o&&(n=t)}return new l({geometry:n,symbol:c,attributes:i??null})},e._createClass(t)}();t.GraphicHandler=n,t.HIGHLIGHT_COLOR=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
