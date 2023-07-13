/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],(function(t,e,n,s){"use strict";const i=1e-15;let r=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n,s,i){return new o(t,e,n)},e._createClass(t)}();r.instance=null;let o=function(t){function n(e,n,i){var r;return(r=t.call(this,e)||this)._curveHelper=new s.CurveHelper,r._angleToLine=void 0===n.angleToLine||n.angleToLine,r._offset=void 0!==n.offset?n.offset*i:0,r._endPoints=void 0===n.placeOnEndPoints||n.placeOnEndPoints,r._controlPoints=void 0===n.placeOnControlPoints||n.placeOnControlPoints,r._regularVertices=void 0===n.placeOnRegularVertices||n.placeOnRegularVertices,r._tags=[],r._tagIterator=0,r}e._inherits(n,t);var i=n.prototype;return i.processPath=function(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null;const e=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(e[2]);let n=e[0],s=e[1];if(0!==this._offset){const t=Math.cos(e[2]),i=Math.sin(e[2]);n-=this._offset*i,s+=this._offset*t}return this.internalPlacement.setTranslate(n,s),this._tagIterator++,this.internalPlacement},i._preparePath=function(t){this._tags.length=0,this._tagIterator=0,t.seekPathStart();const e=t.isClosed();let n=0,s=!1,i=0,r=0;if(t.seekPathStart(),t.nextPoint()){let o=t.x,l=t.y,h=t.getControlPoint(),c=!0,_=t.nextPoint();for(;_;){const u=t.x,g=t.y,f=t.getControlPoint();(this._angleToLine||0!==this._offset)&&(i=this._curveHelper.getAngle(o,l,u,g,0)),c?(c=!1,e?(n=i,s=h):(this._endPoints||this._controlPoints&&h)&&this._tags.push([o,l,i])):h?this._controlPoints&&this._tags.push([o,l,a(r,i)]):this._regularVertices&&this._tags.push([o,l,a(r,i)]),(this._angleToLine||0!==this._offset)&&(r=this._curveHelper.getAngle(o,l,u,g,1)),_=t.nextPoint(),_||(e?f||s?this._controlPoints&&this._tags.push([u,g,a(r,n)]):this._regularVertices&&this._tags.push([u,g,a(r,n)]):(this._endPoints||this._controlPoints&&f)&&this._tags.push([u,g,r])),o=u,l=g,h=f}}this._tagIterator=0},e._createClass(n)}(n.PathTransformationCursor);function a(t,e){const n=Math.PI;for(;Math.abs(e-t)>n+2*i;)e-t>n?e-=2*n:e+=2*n;return(t+e)/2}t.PlacementOnVertices=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));