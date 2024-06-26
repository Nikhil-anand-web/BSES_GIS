/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/arrayUtils","../../../../../core/promiseUtils","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","./LodComponentData"],(function(e,n,t,o,i,r,s){"use strict";let u=function(){function e(e,n){this.minScreenSpaceRadius=e,this.components=n}e.create=async function(n,i,r){const u=await Promise.allSettled(i.components.map((e=>n.controller.schedule((()=>new s.LodComponentData(n,e)),r)))),c=u.map((e=>"fulfilled"===e.status?e.value:null)).filter(t.isSome);if(o.isAborted(r)||c.length!==u.length){c.forEach((e=>e.destroy())),o.throwIfAborted(r);for(const e of u)if("rejected"===e.status)throw e.reason}return new e(i.minScreenSpaceRadius,c)};var u=e.prototype;return u.destroy=function(){this.components.forEach((e=>e.destroy()))},u.intersect=function(e,n,t,o,i,r,s){this.components.forEach((u=>u.intersect(e,n,t,o,i,r,this.boundingSphere,s)))},n._createClass(e,[{key:"boundingBox",get:function(){if(null==this._boundingBox){const e=r.empty();this.components.forEach((n=>{null!=n.boundingInfo&&(r.expandWithVec3(e,n.boundingInfo.bbMin),r.expandWithVec3(e,n.boundingInfo.bbMax))})),this._boundingBox=e}return this._boundingBox}},{key:"boundingSphere",get:function(){if(null==this._boundingSphere){const e=this.boundingBox,n=i.create();r.center(e,n),this._boundingSphere={center:n,radius:.5*r.diameter(e)}}return this._boundingSphere}},{key:"triangleCount",get:function(){return this.components.reduce(((e,n)=>e+n.triangleCount),0)}}]),e}();e.LodLevel=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
