/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/handleUtils","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/layerUtils","../../support/featureFlags","./UpdateRecordWorkflowData","./Workflow","./workflowUtils"],(function(e,t,a,o,r,i,n,s,d,l,c,u,p,f,h,m,g){"use strict";var y;const w={exit:Symbol()},b="esri.widgets.Editor.UpdateRecordWorkflow";e.UpdateRecordWorkflow=y=function(e){function a(t){var a;return(a=e.call(this,t)||this).fullFeature=null,a.type="update-table-record",a}t._inherits(a,e);var s=a.prototype;return s.initialize=async function(){const{data:e}=this,{edits:t}=e,a=t.feature,n=new AbortController;this.addHandles(r.abortHandle(n)),this.updatingHandles.addPromise(g.fetchFullFeature(a,e.viewModel.view.spatialReference,n.signal).then((e=>{i.isAborted(n)||this._onFullFeatureLoaded(e)}),(e=>this.cancel({force:!0,error:new o("editor:failed-to-fetch-full-feature","Failed to retrieve all information for this feature. The update cannot proceed.",{detail:{error:e}})}))))},s.deleteAndCommit=async function(){return this.data.edits.stageDelete(),this.commit()},s.enter=async function(){this._configureAttachmentsViewModel(),this._configureFeatureFormViewModel()},s.exit=function(e){this.removeHandles(w.exit)},s._configureAttachmentsViewModel=function(){const{data:e,fullFeature:t}=this,{attachmentsCapabilities:a,viewModel:o}=e,{attachmentsViewModel:r}=o;r.set({capabilities:a,graphic:t,filesEnabled:!1,mode:"view"}),this.addHandles(n.watch((()=>r.mode),(e=>{switch(e){case"add":this.go("adding-attachment");break;case"edit":this.go("editing-attachment")}})),w.exit)},s._configureFeatureFormViewModel=function(){const{edits:e,formTemplate:t,viewModel:{featureFormViewModel:a,view:o}}=this.data;a.set({arcadeEditType:"UPDATE",feature:this.fullFeature,formTemplate:t,map:o?.map,spatialReference:o.spatialReference}),this.addHandles(a.on("value-change",(()=>{e.updateAttributes(a.getValues()),this.fullFeature.attributes=e.feature.attributes})),w.exit)},s._onFullFeatureLoaded=function(e){this.fullFeature=e;const{edits:t}=this.data;t.updateAttributes(e.attributes),t.trackChanges()},a.create=async function(e){const t=new y({data:await h.create(e),onCommit:this._onCommitFactory(e.applyEdits)});return t._set("steps",this._createWorkflowSteps(t)),t},a._createWorkflowSteps=function(e){const{attachmentsViewModel:t}=e.data.viewModel;return[{id:"editing-attributes",async setUp(){},async tearDown(){}},{id:"adding-attachment",async setUp(){},async tearDown(){t.mode="view"}},{id:"editing-attachment",async setUp(){},async tearDown(){t.mode="view"}}]},t._createClass(a,[{key:"editableItem",get:function(){return this.data.editableItem}},{key:"hasPendingEdits",get:function(){return this.data.edits.modified}},{key:"shouldShowAttachments",get:function(){return this.editableItem.attachmentsOnUpdateEnabled}},{key:"shouldAllowAttachmentEditing",get:function(){return this.editableItem.supports.includes("update")}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"reliesOnOwnerAdminPrivileges",get:function(){const{layer:e}=this.editableItem,t=e.capabilities?.operations.supportsUpdate,a=p.getEffectiveLayerCapabilities(e)?.operations.supportsUpdate;return p.getEffectiveEditingEnabled(e)&&!e.editingEnabled||!!a&&!t}}]),a}(m),e.UpdateRecordWorkflow._onCommitFactory=e=>async t=>{const{edits:a}=t,{feature:o}=a;if(!o)return;const r=o.sourceLayer,i=o.clone();if(!a.attributesModified||a.stagedForDelete){const e=r.objectIdField;if(i.attributes={[e]:o.getAttribute(e)},f.sceneLayerEditingEnabled()&&f.i3sPatchingEnabled()&&"scene"===r.type&&null!=r.infoFor3D){const e=r.associatedLayer?.globalIdField;null!=e&&i.setAttribute(e,o.getAttribute(e))}}a.geometryModified&&!a.stagedForDelete||(i.geometry=null);const n=a.stagedForDelete?"deleteFeatures":"updateFeatures";await e(r,{[n]:[i]})},a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"editableItem",null),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"fullFeature",void 0),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"hasPendingEdits",null),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"shouldShowAttachments",null),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"shouldAllowAttachmentEditing",null),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"updating",null),a.__decorate([s.property()],e.UpdateRecordWorkflow.prototype,"reliesOnOwnerAdminPrivileges",null),e.UpdateRecordWorkflow=y=a.__decorate([u.subclass(b)],e.UpdateRecordWorkflow),e.HANDLE_KEYS=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
