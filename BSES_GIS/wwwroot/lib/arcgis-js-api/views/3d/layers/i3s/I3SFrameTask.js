/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../support/Scheduler"],(function(e,r,t,n,s,o,i,a,c,l){"use strict";let u=function(e){function t(){var r;return(r=e.call(this)||this).referenceCount=0,r.callbacks=new Array,r.runIndex=0,r}r._inherits(t,e);var n=t.prototype;return n.runTask=function(e){this._sort();const r=this.callbacks,t={numIndexLoading:0,numNodesLoading:0};for(let n=0;n<r.length&&!e.done;++n)r[n].priority=r[n].runTask(e,t),this.runIndex=n},n._sort=function(){const e=this.callbacks;let r=e.length;for(let t=this.runIndex;t>0;t--){const n=e[t-1];let s=t;for(;s<e.length&&n.priority<=e[s].priority&&(s!==r||n.priority<e[s].priority);)e[s-1]=e[s],s++;e[s-1]=n,r=s-1}this.runIndex=0},n.add=function(e){this._sort(),e.priority=1/0,this.callbacks.unshift(e),this.notifyChange("running")},n.remove=function(e){s.removeUnordered(this.callbacks,e),this.runIndex=this.callbacks.length,this._sort(),this.notifyChange("running")},r._createClass(t,[{key:"running",get:function(){return this.callbacks.some((e=>e.running))}}]),t}(n);t.__decorate([o.property({readOnly:!0})],u.prototype,"running",null),u=t.__decorate([c.subclass("esri.views.3d.layers.i3s.I3SFrameTask")],u);let h=r._createClass((function(e,r){this.task=e,this.handle=r}));const d=new Map;function p(e,r){let t=d.get(e);if(null==t){const r=new u,n=e.registerTask(l.TaskPriority.I3S_CONTROLLER,r);t=new h(r,n),d.set(e,t)}return t.task.add(r),{remove:()=>{if(null==t)return;t.task.remove(r);t.task.callbacks.length>0||(d.delete(e),t.handle.remove(),t.task.destroy()),t=null}}}e.addCallback=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
