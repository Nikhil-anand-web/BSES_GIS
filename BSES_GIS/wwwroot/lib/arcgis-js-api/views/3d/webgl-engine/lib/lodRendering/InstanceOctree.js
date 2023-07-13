/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/sphere","../../../support/mathUtils","../Octree"],(function(e,t,n,r,a,i,s){"use strict";let c=function(e){function s(t,r){var i;return(i=e.call(this,(e=>a.wrap(i._instanceData.view.boundingSphere.getVec(e,i._tmpSphere))),{maximumDepth:25})||this)._instanceData=t,i._boundingSphere=r,i._tmpSphere=a.create(),i._tmpMat4=n.create(),i}t._inherits(s,e);var c=s.prototype;return c.addInstance=function(e){const t=this._instanceData.view.boundingSphere,n=this._instanceData.getCombinedModelTransform(e,this._tmpMat4);r.transformMat4(this._tmpSphere,this._boundingSphere.center,n),this._tmpSphere[3]=this._boundingSphere.radius*i.maxScale(n),t.setVec(e,this._tmpSphere),this.add([e])},c.removeInstance=function(e){this.remove([e])},t._createClass(s)}(s);e.InstanceOctree=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
