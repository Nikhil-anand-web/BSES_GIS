/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/arrayUtils","../II3SMeshView3D"],(function(e,t,i){"use strict";let s=e._createClass((function(){this.ids=new Set,this.paused=!1}));return function(){function l({collection:e,forAllFeatures:t,forAllFeaturesOfNode:i}){this._highlights=[],this._collection=e,this._forAllFeatures=t,this._forAllFeaturesOfNode=i}var h=l.prototype;return h.destroy=function(){this._highlights.forEach((e=>this._releaseSet(e))),this._highlights=null},h.acquireSet=function(){const e=new s;this._highlights.push(e);const i={remove:()=>{this._highlights&&(this._releaseSet(e),t.removeUnordered(this._highlights,e))},pause:()=>{this._releaseSet(e),e.paused=!0},resume:()=>{e.paused=!1,this._initializeSet(e)}};return{set:e,handle:i}},h.setFeatureIds=function(e,t){t.forEach((t=>e.ids.add(t))),this._initializeSet(e)},h._initializeSet=function(e){this._forAllFeatures(((t,s,l)=>(e.ids.has(t)&&this._collection.addComponentHighlight(l.objectHandle,s),i.ForAllFeaturesReturnType.CONTINUE)))},h._releaseSet=function(e){this._forAllFeatures(((t,s,l)=>(e.ids.has(t)&&this._collection.removeComponentHighlight(l.objectHandle,s),i.ForAllFeaturesReturnType.CONTINUE)))},h.objectCreated=function(e){this._highlights.forEach((t=>{t.paused||this._forAllFeaturesOfNode(e,((s,l)=>(t.ids.has(s)&&this._collection.addComponentHighlight(e.objectHandle,l),i.ForAllFeaturesReturnType.CONTINUE)))}))},h.objectDeleted=function(e){this._collection.clearHighlights(e.objectHandle)},e._createClass(l)}()}));
