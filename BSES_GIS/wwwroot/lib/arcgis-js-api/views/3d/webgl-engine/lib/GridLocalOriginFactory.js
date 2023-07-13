/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/uid","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../geometry/projection","./Attribute","./ContentObjectType","./Geometry","./LocalOriginFactory","./Object3D","./testUtils","./VertexAttribute","./WebGLLayer","../materials/RibbonLineMaterial"],(function(t,e,i,r,n,o,s,a,c,h,u,g,d,l,b,_){"use strict";let f=function(){function t(t){this._originSR=t,this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._rootOriginId="root/"+i.generateUID()}var n=t.prototype;return n.getOrigin=function(t){const e=this._origins.get(this._rootOriginId);if(null==e){const e=d.gridLocalOriginFactory.rootOrigin;if(null!=e)return this._origins.set(this._rootOriginId,u.fromValues(e[0],e[1],e[2],this._rootOriginId)),this.getOrigin(t);const i=u.fromValues(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const i=this._gridSize,n=Math.round(t[0]/i),o=Math.round(t[1]/i),s=Math.round(t[2]/i),a=`${n}/${o}/${s}`;let c=this._origins.get(a);const h=.5*i;if(r.subtract(O,t,e.vec3),O[0]=Math.abs(O[0]),O[1]=Math.abs(O[1]),O[2]=Math.abs(O[2]),O[0]<h&&O[1]<h&&O[2]<h){if(c){const e=Math.max(...O);r.subtract(O,t,c.vec3),O[0]=Math.abs(O[0]),O[1]=Math.abs(O[1]),O[2]=Math.abs(O[2]);if(Math.max(...O)<e)return c}return e}return c||(c=u.fromValues(n*i,o*i,s*i,a),this._origins.set(a,c)),c},n._drawOriginBox=function(t,e=o.fromValues(1,1,0,1)){const i=window.view,r=i._stage,n=e.toString();if(!this._objects.has(n)){this._material=new _.RibbonLineMaterial({width:2,color:e}),r.add(this._material);const t=new b.WebGLLayer(r,{pickable:!1}),i=new g.Object3D({castShadow:!1});r.add(i),t.add(i),this._objects.set(n,i)}const u=this._objects.get(n),d=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],f=d.length,O=new Array(3*f),M=new Array,m=.5*this._gridSize;for(let o=0;o<f;o++)O[3*o]=t[0]+(1&d[o]?m:-m),O[3*o+1]=t[1]+(2&d[o]?m:-m),O[3*o+2]=t[2]+(4&d[o]?m:-m),o>0&&M.push(o-1,o);s.projectBuffer(O,this._originSR,0,O,i.renderSpatialReference,0,f);const y=new h.Geometry(this._material,[[l.VertexAttribute.POSITION,new a.Attribute(O,3,!0)]],[[l.VertexAttribute.POSITION,M]],null,c.ContentObjectType.Line);r.add(y),u.addGeometry(y)},e._createClass(t,[{key:"test",get:function(){const t=this;return{set gridSize(e){t._gridSize=e}}}}]),t}();const O=n.create();t.GridLocalOriginFactory=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));