/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","../../../layers/GraphicsLayer","../../../symbols/SimpleFillSymbol","./GeometryHandler"],(function(e,t,r,n,o,a){"use strict";const i="utility-network-trace-result-area";function c(e){return!!e&&"graphics"===e.type}let l=function(){function e(){this.traceInformation={},this._geometryHandler=new a.GeometryHandler}var l=e.prototype;return l.addResultAreaToMap=function(e,t){const r=this._createGraphicLayer(t);r&&c(r)&&r.add(e)},l.changeResultAreaColor=function(e,t,r){const n=this._findGraphicsByTraceId(e,r);n&&n.forEach((e=>{const r=new o({color:t.color,style:"solid",outline:{color:t.color,width:1}});e.symbol=r}))},l.createBuffer=function(e,t,r,n){return this._geometryHandler.createBuffer(e,t,r,n)},l.createConvexHull=function(e,t,r){const n=this._geometryHandler.createConvexHull(e);return t>0&&n?this.createBuffer(n,[t],r,!1):n},l.createResultAreaGraphic=function(e,t,n,a,i,c){const l=new o({color:c.color,style:"solid",outline:{color:c.color,width:1}}),s=[];for(const r in t)s.push({fieldName:r,label:"areaStatistic"===r?a.attributeStrings[r]+" ("+i.units[n]?.abbr+")":a.attributeStrings[r],value:t[r]});return new r({geometry:e,symbol:l,attributes:t,popupTemplate:{title:t.traceName,content:[{type:"fields",fieldInfos:s}]}})},l.removeResultArea=function(e,t){const r=t.findLayerById(i);if(r&&c(r)){const n=this._findGraphicsByTraceId(e,t);n&&r.removeMany(n)}},l.removeResultAreaGrahicsLayer=function(e){if(e){const t=e.findLayerById(i);t&&c(t)&&e.remove(t)}},l._createGraphicLayer=function(e){if(!e.findLayerById(i)){const t=new n({id:i});return e.add(t),t}const t=e.findLayerById(i);return t&&c(t)?t:null},l._findGraphicsByTraceId=function(e,t){const r=t.findLayerById(i);if(r&&c(r)){const t=r.graphics.filter((t=>t.attributes.traceId===e));return t.length>0?t.toArray():null}return null},t._createClass(e)}();e.ResultAreaHandler=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
