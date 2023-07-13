/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Handles","../../core/has","../../core/Logger","../../core/maybe","../../core/PerformanceSampler","../../core/PooledArray","../../core/promiseUtils","../../core/reactiveUtils","../../core/signal","../../core/time","../../layers/support/PromiseQueue","./debugFlags","./RenderState"],(function(e,t,i,s,r,n,a,o,u,_,d,h,c,T,l){"use strict";function E(){return new b.Scheduler}var g,f;e.Task=void 0,(g=e.Task||(e.Task={}))[g.YIELD=1]="YIELD",e.TaskPriority=void 0,(f=e.TaskPriority||(e.TaskPriority={})).RESOURCE_CONTROLLER_IMMEDIATE="immediate",f.RESOURCE_CONTROLLER="schedule",f.SLIDE="slide",f.STREAM_DATA_LOADER="stream loader",f.ELEVATION_QUERY="elevation query",f.TERRAIN_SURFACE="terrain",f.SURFACE_GEOMETRY_UPDATES="surface geometry updates",f.LOD_RENDERER="LoD renderer",f.GRAPHICS_CORE="Graphics3D",f.I3S_CONTROLLER="I3S",f.POINT_CLOUD_LAYER="point cloud",f.FEATURE_TILE_FETCHER="feature fetcher",f.OVERLAY="overlay",f.STAGE="stage",f.GRAPHICS_DECONFLICTOR="graphics deconflictor",f.FILTER_VISIBILITY="Graphics3D filter visibility",f.SCALE_VISIBILITY="Graphics3D scale visibility",f.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",f.POINT_OF_INTEREST_FREQUENT="POI frequent",f.POINT_OF_INTEREST_INFREQUENT="POI infrequent",f.LABELER="labeler",f.FEATURE_QUERY_ENGINE="feature query",f.FEATURE_TILE_TREE="feature tile tree",f.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",f.ELEVATION_ALIGNMENT="elevation alignment",f.TEXT_TEXTURE_ATLAS="text texture atlas",f.TEXTURE_UNLOAD="texture unload",f.LINE_OF_SIGHT_TOOL="line of sight tool",f.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",f.ELEVATION_PROFILE="elevation profile",f.SNAPPING="snapping",f.SHADOW_ACCUMULATOR="shadow accumulator",f.CLOUDS_GENERATOR="clouds generator",f[f.NONE=0]="NONE",f[f.TEST_PRIO=1]="TEST_PRIO";const k=0,m=new Map([[e.TaskPriority.RESOURCE_CONTROLLER_IMMEDIATE,k],[e.TaskPriority.RESOURCE_CONTROLLER,4],[e.TaskPriority.SLIDE,k],[e.TaskPriority.STREAM_DATA_LOADER,k],[e.TaskPriority.ELEVATION_QUERY,k],[e.TaskPriority.TERRAIN_SURFACE,1],[e.TaskPriority.SURFACE_GEOMETRY_UPDATES,1],[e.TaskPriority.LOD_RENDERER,2],[e.TaskPriority.GRAPHICS_CORE,2],[e.TaskPriority.I3S_CONTROLLER,2],[e.TaskPriority.POINT_CLOUD_LAYER,2],[e.TaskPriority.FEATURE_TILE_FETCHER,2],[e.TaskPriority.OVERLAY,4],[e.TaskPriority.STAGE,4],[e.TaskPriority.GRAPHICS_DECONFLICTOR,4],[e.TaskPriority.FILTER_VISIBILITY,4],[e.TaskPriority.SCALE_VISIBILITY,4],[e.TaskPriority.FRUSTUM_VISIBILITY,4],[e.TaskPriority.CLOUDS_GENERATOR,4],[e.TaskPriority.POINT_OF_INTEREST_FREQUENT,6],[e.TaskPriority.POINT_OF_INTEREST_INFREQUENT,30],[e.TaskPriority.LABELER,8],[e.TaskPriority.FEATURE_QUERY_ENGINE,8],[e.TaskPriority.FEATURE_TILE_TREE,16],[e.TaskPriority.FEATURE_TILE_TREE_ACTIVE,k],[e.TaskPriority.ELEVATION_ALIGNMENT,12],[e.TaskPriority.TEXT_TEXTURE_ATLAS,12],[e.TaskPriority.TEXTURE_UNLOAD,12],[e.TaskPriority.LINE_OF_SIGHT_TOOL,16],[e.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE,k],[e.TaskPriority.SNAPPING,k],[e.TaskPriority.SHADOW_ACCUMULATOR,30]]);function I(e){return m.has(e)?m.get(e):"number"==typeof e?e:1}const R=h.Milliseconds(6.5),y=h.Milliseconds(1),P=h.Milliseconds(30),p=h.Milliseconds(1e3/30),S=h.Milliseconds(100),A=.9;var b,L;!function(s){let u=function(){var i=s.prototype;function s(){this._updating=d.signal(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new a("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new g,this._state=l.RenderState.INTERACTING,this._tasks=new o,this._runQueue=new o,this._load=0,this._idleStateCallbacks=new o,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=_.watch((()=>T.SCHEDULER_LOG_SLOW_TASKS),(e=>this._debug=e),_.initial);for(const i of Object.keys(e.TaskPriority))this.performanceInfo.tasks.set(e.TaskPriority[i],new a(e.TaskPriority[i]));const t=this;this._test={FRAME_SAFETY_BUDGET:R,INTERACTING_BUDGET:p,IDLE_BUDGET:S,get availableBudget(){return t._budget.budget},usedBudget:0,getBudget:()=>t._budget,setBudget:e=>t._budget=e,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}return i._updatingChanged=function(){this._updating.value=this._tasks.some((e=>e.needsUpdate))},i.destroy=function(){this._tasks.toArray().forEach((e=>e.remove())),this._tasks.clear(),n.removeMaybe(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()},i.taskRunningChanged=function(e){this._updatingChanged(),e&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask((()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.remaining>0&&this._schedule()&&this.frame())})))},i.registerTask=function(e,t){const i=I(e),s=new E(this,e,t,i);return this._tasks.push(s),this._updatingChanged(),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new a(e)),s},i.registerIdleStateCallbacks=function(e,t){const i={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(i),this.state===l.RenderState.IDLE&&this._idleUpdatesStartFired&&i.idleBegin();const s=this;return{remove:()=>this._removeIdleStateCallbacks(i),set idleBegin(e){s._idleUpdatesStartFired&&(i.idleEnd(),s._state===l.RenderState.IDLE&&e()),i.idleBegin=e},set idleEnd(e){i.idleEnd=e}}},i.updateBudget=function(e){this._test.usedBudget=0,++this._frameNumber;let t=R,i=e.frameDuration,s=y;switch(this.state){case l.RenderState.IDLE:t=h.Milliseconds(0),i=h.Milliseconds(Math.max(S,e.frameDuration)),s=P;break;case l.RenderState.INTERACTING:i=h.Milliseconds(Math.max(p,e.frameDuration));case l.RenderState.ANIMATING:}return i=h.Milliseconds(i-e.elapsedFrameTime-t),this.state!==l.RenderState.IDLE&&i<y&&!this._forceTask?(this._forceTask=!0,!1):(i=h.Milliseconds(Math.max(i,s)),this._budget.reset(i,this.state),this._updateLoad(),this._schedule())},i.frame=function(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case l.RenderState.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case l.RenderState.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed},i.stopFrame=function(){this._budget.reset(h.Milliseconds(0),this._state),this._budget.madeProgress()},i._removeIdleStateCallbacks=function(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)},i.removeTask=function(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e),this._updatingChanged()},i._updateTask=function(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))},i._getState=function(t){if(this._runQueue.some((e=>e.name===t)))return e.TaskState.SCHEDULED;let i=e.TaskState.IDLE;return this._tasks.forAll((s=>{s.name===t&&s.needsUpdate&&(s.schedulePriority<=1?i=e.TaskState.READY:i!==e.TaskState.READY&&(i=e.TaskState.WAITING))})),i},i._getRuntime=function(e){let t=0;return this._tasks.forAll((i=>{i.name===e&&(t+=i.runtime)})),t},i._resetRuntimes=function(){this._tasks.forAll((e=>e.runtime=0))},i._getRunning=function(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,i)=>{t+=e>1?` ${e}x ${i}`:` ${i}`})),t},i._runIdle=function(){this._run()},i._runInteracting=function(){this._run()},i._runAnimating=function(){this._run()},i._updateLoad=function(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=this._load*A+e*(1-A)},i._schedule=function(){for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1))),this._tasks.forAll((e=>{e.basePriority===k&&e.needsUpdate&&!this._runQueue.includes(e)&&e.blockFrame!==this._frameNumber&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((i=>{if(i.needsUpdate&&0!==i.schedulePriority&&i.basePriority!==k&&i.blockFrame!==this._frameNumber)if(e=!0,t=Math.max(t,i.basePriority),1===i.schedulePriority)i.schedulePriority=0,this._runQueue.push(i);else--i.schedulePriority})),!e)return this._updatingChanged(),!1}return this._updatingChanged(),!0},i._run=function(){const t=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){const s=this._budget.now(),n=this._runQueue.pop();this._budget.resetProgress();try{n.task.runTask(this._budget)===e.Task.YIELD&&(n.blockFrame=this._frameNumber)}catch(i){r.getLogger("esri.views.support.Scheduler").error(`Exception in task "${n.name}"`,i)}!this._budget.hasProgressed&&n.blockFrame!==this._frameNumber&&n.needsUpdate&&(n.name,e.TaskPriority.I3S_CONTROLLER,n.blockFrame=this._frameNumber),n.schedulePriority=n.basePriority;const a=this._budget.now()-s;if(n.runtime+=a,this._frameTaskTimes.set(n.priority,this._frameTaskTimes.get(n.priority)+a),this._debug&&a>2*this._budget.budget&&console.log("Task",n.name,"used",a,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updatingChanged(),void this._recordFrameTaskTimes(this._budget.now()-t)}}while(this._schedule());this._updatingChanged(),this._recordFrameTaskTimes(this._budget.now()-t)},i._startFrameTaskTimes=function(){for(const t of Object.keys(e.TaskPriority))this._frameTaskTimes.set(e.TaskPriority[t],0)},i._recordFrameTaskTimes=function(e){this._frameTaskTimes.forEach(((e,t)=>this.performanceInfo.tasks.get(t).record(e))),this.performanceInfo.total.record(e)},t._createClass(s,[{key:"updating",get:function(){return this._updating.value}},{key:"load",get:function(){return this._load}},{key:"state",get:function(){return this._state},set:function(e){this._state!==e&&(this._state=e,this.state!==l.RenderState.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}},{key:"test",get:function(){return this._test}}]),s}();s.Scheduler=u;let E=function(){function e(e,t,s,r){this._scheduler=e,this.name=t,this._basePriority=r,this.blockFrame=0,this.runtime=0,this._queue=new c.PromiseQueue,this._handles=new i,this.schedulePriority=this._basePriority,this._task=d.signal(null!=s?s:this._queue),this._handles.add(_.when((()=>this.task.running),(t=>e.taskRunningChanged(t))))}var s=e.prototype;return s.remove=function(){this.processQueue(O),this._scheduler.removeTask(this),this.schedule=N.schedule,this.reschedule=N.reschedule,this._handles.destroy()},s.setPriority=function(e){this.name=e;const t=I(e);this._basePriority!==k&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t},s.schedule=function(e,t,i){return this._queue.push(e,t,i)},s.reschedule=function(e,t,i){return this._queue.unshift(e,t,i)},s.processQueue=function(e){this._queue.runTask(e)},t._createClass(e,[{key:"task",get:function(){return this._task.value}},{key:"updating",get:function(){return this._queue.running}},{key:"basePriority",get:function(){return this._basePriority}},{key:"priority",get:function(){return this.name},set:function(e){this.setPriority(e)}},{key:"needsUpdate",get:function(){return this.updating||this.task.running}}]),e}(),g=function(){function e(){this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=l.RenderState.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}var i=e.prototype;return i.run=function(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)},i.madeProgress=function(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done},i.reset=function(e,t){this._begin=this.now(),this._budget=e,this._state=t,this.resetProgress()},i.now=function(){return performance.now()},i.resetProgress=function(){this._progressed=!1,this._done=!1},t._createClass(e,[{key:"done",get:function(){return this._done}},{key:"budget",get:function(){return this._budget}},{key:"state",get:function(){return this._state}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e}},{key:"remaining",get:function(){return Math.max(this._budget-this.elapsed,0)}},{key:"elapsed",get:function(){return performance.now()-this._begin}},{key:"hasProgressed",get:function(){return this._progressed}}]),e}();s.Budget=g}(b||(b={})),e.TaskState=void 0,(L=e.TaskState||(e.TaskState={})).SCHEDULED="s",L.READY="r",L.WAITING="w",L.IDLE="i";const O=(()=>{const e=new b.Budget;return e.enabled=!1,e})();const N=new(function(){function e(){}var i=e.prototype;return i.remove=function(){},i.processQueue=function(){},i.schedule=function(e,t,i){try{if(u.isAborted(t)){const e=u.createAbortError();return i?Promise.resolve(i(e)):Promise.reject(e)}return u.when(e(O))}catch(s){return Promise.reject(s)}},i.reschedule=function(e,t,i){return this.schedule(e,t,i)},t._createClass(e)}());e.ImmediateTask=N,e.getTaskPriority=I,e.newScheduler=E,e.noBudget=O,e.taskPriorities=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));