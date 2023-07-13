/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/reactiveUtils","../../webgl-engine/lib/ContentObjectType","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Texture","../../webgl-engine/lib/UpdatePolicy","../../webgl-engine/lib/WebGLLayer"],(function(e,t,s,r,c,i,o,n){"use strict";let u=function(){function e(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}var u=e.prototype;return u.destroy=function(){this._destroyResources()},u.recreate=function(){this.attached&&this._createResources()},u.recreateGeometry=function(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(null==this._resources||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type!==r.ContentObjectType.Mesh&&t.type!==r.ContentObjectType.Line&&t.type!==r.ContentObjectType.Point||e.remove(t)})),t.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer),this._resources.external.forEach((t=>{t.type!==r.ContentObjectType.Mesh&&t.type!==r.ContentObjectType.Line&&t.type!==r.ContentObjectType.Point||e.add(t)}))},u._createOrDestroyResources=function(){this._attached?this._resources||this._createResources():this._destroyResources()},u._createResources=function(){this._destroyResources();const e=this._resourceFactory,t=e.view,r=t._stage;if(!r)return;const u=new n.WebGLLayer(r,{pickable:!1,updatePolicy:o.UpdatePolicy.SYNC}),a=new c.Object3D({castShadow:!1}),l=e.createResources(a,u);l.forEach((e=>{r.add(e),e instanceof i.Texture&&r.loadImmediate(e)})),r.add(a),u.add(a);const h=e.cameraChanged,_=h?s.watch((()=>t.state.camera),(e=>h(e)),s.initial):null;this._resources={layer:u,object:a,external:l,cameraHandle:_},this._syncVisible()},u._destroyResources=function(){if(null==this._resources)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach((t=>e.remove(t)))),this._resources.object.dispose(),this._resources.cameraHandle?.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null},u._syncVisible=function(){null!=this._resources&&(this._resources.object.visible=this._visible)},t._createClass(e,[{key:"object",get:function(){return null!=this._resources?this._resources.object:null}},{key:"resources",get:function(){return null!=this._resources?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this._syncVisible())}},{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}}]),e}();e.VisualElementResources=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
