/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../support/QueueProcessor"],(function(e,t,r,s,o,n,i,c,a){"use strict";function u(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>e.objectId??e.globalId)).filter((e=>null!=e))}function p(e,t){const r=new Set(e);for(const s of t.values())r.add(s);return r}function l(e,t){const r=new Set(e);for(const s of t.values())r.delete(s);return r}let f=function(t){function r(e){var r;return(r=t.call(this,e)||this)._hasGlobalIds=!1,r._notifyUpdating=()=>{r.notifyChange("updating")},r}e._inherits(r,t);var s=r.prototype;return s.normalizeCtorArgs=function(e){return this._queueProcessor=new a.QueueProcessor({concurrency:1,process:e.process}),{}},s.destroy=function(){this.clear()},s.clear=function(){this._queueProcessor.clear()},s.push=function(e){const t=this._queueProcessor,r=t.last();switch(e.type){case"update":case"refresh":if(r?.type===e.type)return;t.push(e).then(this._notifyUpdating,this._notifyUpdating);break;case"edit":{const s="processed-edit"===r?.type?r:null;s&&t.popLast();const o=this._mergeEdits(s,e);for(const e of o)e&&t.push(e).then(this._notifyUpdating,this._notifyUpdating);break}}this.notifyChange("updating")},s._mergeEdits=function(e,t){const{addedFeatures:r,deletedFeatures:s,updatedFeatures:o}=t.edits;if(this._hasGlobalIds=this._hasGlobalIds||u(r)||u(o)||u(s),this._hasGlobalIds){return[e,{type:"processed-edit",edits:{addOrModified:[...r,...o],removed:s}}]}const n=new Set(d(e?.edits.addOrModified??[])),i=new Set(d(e?.edits.removed??[])),c=new Set([...d(r),...d(o)]),a=new Set(d(s));return[{type:"processed-edit",edits:{addOrModified:Array.from(p(l(n,a),c)).map((e=>({objectId:e}))),removed:Array.from(p(l(i,c),a)).map((e=>({objectId:e})))}}]},e._createClass(r,[{key:"updating",get:function(){return this._queueProcessor.length>0}}]),r}(r);t.__decorate([s.property({readOnly:!0})],f.prototype,"updating",null),t.__decorate([s.property()],f.prototype,"process",void 0),f=t.__decorate([c.subclass("esri.views.2d.layers.support.FeatureCommandQueue")],f);return f}));