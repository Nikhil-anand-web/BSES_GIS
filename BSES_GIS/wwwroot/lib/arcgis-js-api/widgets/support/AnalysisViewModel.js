/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/asyncUtils","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,s,n,a,r,o,l,c,y,h,u,p){"use strict";var w;function d(e){return null!=e&&e.state>=w.RUNNING?(e.abort(),null):e}!function(e){e[e.PENDING=0]="PENDING",e[e.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",e[e.RUNNING=2]="RUNNING"}(w||(w={})),e.AnalysisViewModel=function(e){function i(i={}){var s;(s=e.call(this,i)||this).view=null,s.analysisView=null,s._reconnectViewTask=null,s._forceInteractiveHandle=null,s._parentChangeFromReconnect=!1,s._startUserOperation=null,s.logger=a.getLogger(t._assertThisInitialized(s));const n=i?.analysis;return null!=n?s.analysis=n:(s._set("analysis",s.constructAnalysis()),s._set("isAnalysisOwner",!0)),i&&null!=i.visible&&(s.visible=i.visible),s}t._inherits(i,e);var s=i.prototype;return s.normalizeCtorArgs=function(e){const{analysis:t,...i}=e;return i},s.initialize=function(){this.addHandles([l.watch((()=>({readyAndNotSupported:null!=this.view&&this.view.ready&&!this.supported})),(({readyAndNotSupported:e})=>{e&&this.logger.errorOnce(this.unsupportedErrorMessage)}),l.syncAndInitial),l.watch((()=>r.applySome(this.analysis,(({parent:e})=>e))),(e=>{this._parentChangeFromReconnect||e===this.view||this._set("isAnalysisOwner",!1);const t=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,t&&this._scheduleViewReconnect()}),l.sync),l.watch((()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported})),(({view:e},t)=>{const i=t?.view;e!==i&&(this._startUserOperation=r.abortMaybe(this._startUserOperation),this._disconnectFromView(i)),this._scheduleViewReconnect()}),l.syncAndInitial)])},s.destroy=function(){this._reconnectViewTask=r.abortMaybe(this._reconnectViewTask),this._startUserOperation=r.abortMaybe(this._startUserOperation),null!=this.analysisView&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),this._set("view",null),null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))},s.clear=function(){this._startUserOperation=r.abortMaybe(this._startUserOperation),this._resetInteractiveCreationState(),null!=this.tool&&null!=this.view&&this.view.activeTool===this.tool&&(this.view.activeTool=null)},s.start=async function(){this.clear();const e={task:null,abort:null,state:w.PENDING},t=n.createTask((async t=>{if(e.state=w.WAIT_FOR_VIEW_READY,await l.whenOnce((()=>this.ready),t),e.state=w.RUNNING,null==this.analysisView||null==this.view)return;const i=this.analysisView.tool;null!=i&&(this.view.activeTool=i,l.when((()=>i.created),(()=>{i.active&&null!=this.view&&(this.view.activeTool=null)}),{initial:!0,once:!0}))}));return e.task=t,e.abort=()=>t.abort(),this._startUserOperation=e,t.promise},s.onConnectToAnalysisView=function(e){},s.onDisconnectFromAnalysisView=function(){},s._scheduleViewReconnect=function(){this._reconnectViewTask=r.abortMaybe(this._reconnectViewTask);const e=n.createTask((async t=>{try{await this._reconnectView(t)}catch(i){if(o.throwIfAborted(t),!o.isAbortError(i))return void this.logger.warn("Failed to use analysis in view model",i);throw i}finally{e===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=e},s._reconnectView=async function(e){const{view:t}=this,i=null!=t&&t.ready&&this.supported,s=this.analysis;if(this._startUserOperation=d(this._startUserOperation),this._disconnectFromView(t),i&&null!=t&&null!=s){if(this.isAnalysisOwner){if(null!=s.parent)return void this.logger.errorOnce("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,t.analyses.add(s)}this.analysisView=await t.whenAnalysisView(s),o.isAborted(e)?this._startUserOperation=d(this._startUserOperation):(this.analysisView.visible=this.visible,this._forceInteractiveHandle=this.analysisView.forceInteractiveForViewModel(),this.addHandles(this._forceInteractiveHandle),this.onConnectToAnalysisView(this.analysisView))}},s._disconnectFromView=function(e){null!=e&&this.isAnalysisOwner&&e.analyses.includes(this.analysis)&&(this._parentChangeFromReconnect=!0,this.analysis.clear(),e.analyses.remove(this.analysis)),this.onDisconnectFromAnalysisView(),this._forceInteractiveHandle=r.removeMaybe(this._forceInteractiveHandle),this.analysisView=null},s._setExternalAnalysis=function(e){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=void 0,this._forceInteractiveHandle=r.removeMaybe(this._forceInteractiveHandle)),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",e),this._parentChangeFromReconnect=!1},s._resetInteractiveCreationState=function(){this.analysis.clear(),null!=this.tool&&this.tool.resetCreated()},t._createClass(i,[{key:"supported",get:function(){return null==this.view||this.view.type===this.supportedViewType}},{key:"visible",set:function(e){this._set("visible",e),null!=this.analysisView&&(this.analysisView.visible=e)}},{key:"active",get:function(){return null!=this.tool&&this.tool.active}},{key:"disabled",get:function(){return null==this.view||!this.view.ready||!this.supported}},{key:"analysis",set:function(e){e!==this._get("analysis")&&(this._startUserOperation=r.abortMaybe(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(e),this._scheduleViewReconnect())}},{key:"ready",get:function(){return null!=this.analysisView&&!this.connectingToView}},{key:"connectingToView",get:function(){return null!=this._reconnectViewTask}},{key:"isAnalysisOwner",get:function(){return this._get("isAnalysisOwner")}},{key:"tool",get:function(){return null!=this.analysisView?this.analysisView.tool:null}},{key:"testInfo",get:function(){return{analysisView:this.analysisView}}}]),i}(s),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"supported",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"view",void 0),i.__decorate([c.property({type:Boolean,value:!0})],e.AnalysisViewModel.prototype,"visible",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"active",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"disabled",null),i.__decorate([c.property({nonNullable:!0})],e.AnalysisViewModel.prototype,"analysis",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"analysisView",void 0),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"ready",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"connectingToView",null),i.__decorate([c.property({readOnly:!0})],e.AnalysisViewModel.prototype,"isAnalysisOwner",null),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"_reconnectViewTask",void 0),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"_forceInteractiveHandle",void 0),i.__decorate([c.property()],e.AnalysisViewModel.prototype,"tool",null),e.AnalysisViewModel=i.__decorate([p.subclass("esri.widgets.support.AnalysisViewModel")],e.AnalysisViewModel),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));