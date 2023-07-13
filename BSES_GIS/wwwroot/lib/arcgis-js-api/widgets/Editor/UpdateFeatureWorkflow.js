/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../support/featureFlags","../../views/support/layerViewUtils","./UpdateFeatureWorkflowData","./UpdateRecordWorkflow","./workflowUtils"],(function(e,t,i,o,r,a,s,n,l,c,d,h,u,p){"use strict";var y;const f={...u.HANDLE_KEYS,highlights:Symbol(),interactiveGraphics:Symbol(),geometryGraphics:Symbol()};e.UpdateFeatureWorkflow=y=function(e){function i(t){var i;return(i=e.call(this,t)||this).type="update-feature",i._layerViewEditSession=null,i._webStyleCache=new Map,i}t._inherits(i,e);var r=i.prototype;return r.initialize=async function(){const{edits:{feature:e},layerView:t}=this.data;p.canCreateInteractiveEditSession(t)&&(this._layerViewEditSession=t.createInteractiveEditSession(e))},r.destroy=function(){this._layerViewEditSession?.rollback()},r.commit=async function(){this.removeHandles(f.interactiveGraphics);try{const e=this.data.edits.stagedForDelete;await t._get(t._getPrototypeOf(i.prototype),"commit",this).call(this),this.removeHandles(f.geometryGraphics);const o=this._layerViewEditSession;e?o?.rollback():o?.commit()}catch(e){throw this.removeHandles(f.geometryGraphics),await this._configureSketchViewModel(),new o("editor-workflow:failed-to-commit","An error occurred when sending the updates to the service",{error:e})}},r.enter=async function(){await t._get(t._getPrototypeOf(i.prototype),"enter",this).call(this),this.data.editableItem.geometryUpdatesEnabled?this.hasHandles(f.interactiveGraphics)||await this._configureSketchViewModel():this._configureHighlight()},r.exit=function(e={removeSketchHandles:!0}){t._get(t._getPrototypeOf(i.prototype),"exit",this).call(this,e),e.removeSketchHandles&&this.removeHandles([f.geometryGraphics,f.interactiveGraphics])},r._configureFeatureFormViewModel=function(){t._get(t._getPrototypeOf(i.prototype),"_configureFeatureFormViewModel",this).call(this);const{_layerViewEditSession:e}=this,{viewModel:o}=this.data;this.addHandles(o.featureFormViewModel.on("value-change",(t=>{e?.setAttribute(t.fieldName,t.value)})),f.exit)},r._configureHighlight=function(){const{edits:e,layerView:t}=this.data;d.highlightsSupported(t)&&this.addHandles(t.highlight(e.feature),f.highlights)},r._configureSketchViewModel=async function(){const{data:e,_layerViewEditSession:t}=this,{edits:i,viewModel:o}=e,r=i.feature,{featureFormViewModel:a,sketchViewModel:s,view:n}=o;s.allowDeleteKey=!1;const l=p.getVisualVariableAttributes(r),{interactive:d,visual:h}=await p.setUpGeometryUpdate(r,l,s,n,(({geometry:e,attributes:o},s)=>{if(i.updateAttributes(o),i.updateGeometry(e),a.feature.geometry=e,null!=l.rotation){const{field:e}=l.rotation;a.setValue(e,o[e])}if(null!=l.size){const{field:e}=l.size;a.setValue(e,o[e])}const{sourceLayer:n}=r;null!=n&&"scene"===n.type&&null!=n.infoFor3D&&c.sceneLayerEditingEnabled()&&c.i3sPatchingEnabled()&&t&&null!=e&&"mesh"===e.type&&t.setGeometry(e),("undo"===s.type||"redo"===s.type||"update"===s.type&&null!=s.toolEventInfo&&p.isTerminalUpdateEventType(s.toolEventInfo.type))&&a.notifyFeatureGeometryChanged()}),this._webStyleCache);this.addHandles(d,f.interactiveGraphics),this.addHandles(h,f.geometryGraphics)},r._onFullFeatureLoaded=function(e){t._get(t._getPrototypeOf(i.prototype),"_onFullFeatureLoaded",this).call(this,e);const{edits:o}=this.data;o.updateGeometry(e.geometry),o.trackChanges()},i.create=async function(e){const t=new y({data:await h.create(e),onCommit:this._onCommitFactory(e.applyEdits)});return t._set("steps",this._createWorkflowSteps(t)),t},t._createClass(i)}(u.UpdateRecordWorkflow),i.__decorate([r.property()],e.UpdateFeatureWorkflow.prototype,"_layerViewEditSession",void 0),e.UpdateFeatureWorkflow=y=i.__decorate([l.subclass("esri.widgets.Editor.UpdateFeatureWorkflow")],e.UpdateFeatureWorkflow),e.HANDLE_KEYS=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));