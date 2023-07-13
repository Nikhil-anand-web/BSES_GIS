/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./Logger","./accessorSupport/tracking","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass","./accessorSupport/tracking/SimpleTrackingTarget"],(function(t,e,n,a,s,r,c,i,o){"use strict";const p=t=>{let a=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._numUpdating=0,e._asyncUpdateState=new Map,e}e._inherits(n,t);var a=n.prototype;return a.autoUpdateAsync=function(t,e){return u((e=>this._updateAsync(t,e)),e)},a._updateAsync=async function(t,e){if(!this._startAsyncUpdate(t)){try{const n=await e();this._set(t,n)}catch(n){s.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,e)}},a._startAsyncUpdate=function(t){const e=this._asyncUpdateState.get(t)??d.None;return e&d.Updating?(this._asyncUpdateState.set(t,e|d.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,e|d.Updating),!1)},a._endAsyncUpdate=function(t){--this._numUpdating;const e=(this._asyncUpdateState.get(t)??d.None)&~d.Updating;return e&d.Invalidated?(this._asyncUpdateState.set(t,e&~d.Invalidated),!0):(this._asyncUpdateState.set(t,e),!1)},e._createClass(n,[{key:"updating",get:function(){return this._numUpdating>0}}]),n}(t);return n.__decorate([c.property({readOnly:!0})],a.prototype,"updating",null),n.__decorate([c.property()],a.prototype,"_numUpdating",void 0),a=n.__decorate([i.subclass("esri.core.AsyncUpdate")],a),a};var d;function u(t,e){const n=()=>{c&&!i&&t(a)},a=()=>{if(!c||i)return e();c.clear(),i=!0;const t=r.runTracked(c,e);return i=!1,t},s=()=>{c&&(c.destroy(),c=null)};let c=new o.SimpleTrackingTarget(n),i=!1;return t(a),{remove:s}}!function(t){t[t.None=0]="None",t[t.Updating=1]="Updating",t[t.Invalidated=2]="Invalidated"}(d||(d={})),t.AsyncUpdate=function(t){function n(){return t.apply(this,arguments)||this}return e._inherits(n,t),e._createClass(n)}(p(a)),t.AsyncUpdate=n.__decorate([i.subclass("esri.core.AsyncUpdate")],t.AsyncUpdate),t.AsyncUpdateMixin=p,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));