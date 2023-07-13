/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/ArrayPool","../core/Handles","../core/maybe","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass"],(function(e,i,s,t,a,r,l,h,n,o,m,g){"use strict";const w={widthBreakpoint:{getValue(e){const i=e.viewSize[0],s=e.breakpoints,t=this.values;return i<=s.xsmall?t.xsmall:i<=s.small?t.small:i<=s.medium?t.medium:i<=s.large?t.large:t.xlarge},values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-width-xsmall esri-view-width-less-than-small esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",small:"esri-view-width-small esri-view-width-greater-than-xsmall esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",medium:"esri-view-width-medium esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-less-than-large esri-view-width-less-than-xlarge",large:"esri-view-width-large esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-less-than-xlarge",xlarge:"esri-view-width-xlarge esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-greater-than-large"}},heightBreakpoint:{getValue(e){const i=e.viewSize[1],s=e.breakpoints,t=this.values;return i<=s.xsmall?t.xsmall:i<=s.small?t.small:i<=s.medium?t.medium:i<=s.large?t.large:t.xlarge},values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-height-xsmall esri-view-height-less-than-small esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",small:"esri-view-height-small esri-view-height-greater-than-xsmall esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",medium:"esri-view-height-medium esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-less-than-large esri-view-height-less-than-xlarge",large:"esri-view-height-large esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-less-than-xlarge",xlarge:"esri-view-height-xlarge esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-greater-than-large"}},orientation:{getValue(e){const i=e.viewSize,s=i[0],t=i[1],a=this.values;return t>=s?a.portrait:a.landscape},values:{portrait:"portrait",landscape:"landscape"},valueToClassName:{portrait:"esri-view-orientation-portrait",landscape:"esri-view-orientation-landscape"}}},d={xsmall:544,small:768,medium:992,large:1200};function u(e){const i=e;return i&&i.xsmall<i.small&&i.small<i.medium&&i.medium<i.large}function v(e,i){return i?w[e].valueToClassName[i].split(" "):[]}const c=e=>{let n=function(e){function s(...i){var s;return(s=e.call(this,...i)||this)._breakpointsHandles=new a,s.orientation=null,s.widthBreakpoint=null,s.heightBreakpoint=null,s.breakpoints=d,s}i._inherits(s,e);var h=s.prototype;return h.initialize=function(){this._breakpointsHandles.add(l.watch((()=>[this.breakpoints,this.size]),(()=>this._updateClassNames()),l.initial))},h.destroy=function(){this.destroyed||(this._removeActiveClassNames(),this._breakpointsHandles=r.destroyMaybe(this._breakpointsHandles))},h._updateClassNames=function(){if(!this.container)return;const e=t.acquire(),i=t.acquire();let s,a=!1;for(s in w){const t=this[s],r=w[s].getValue({viewSize:this.size,breakpoints:this.breakpoints});t!==r&&(a=!0,this[s]=r,v(s,t).forEach((e=>i.push(e))),v(s,r).forEach((i=>e.push(i))))}a&&(this._applyClassNameChanges(e,i),t.release(e),t.release(i))},h._applyClassNameChanges=function(e,i){const s=this.container;s&&(i.forEach((e=>s.classList.remove(e))),e.forEach((e=>s.classList.add(e))))},h._removeActiveClassNames=function(){const e=this.container;if(!e)return;let i;for(i in w)v(i,this[i]).forEach((i=>e.classList.remove(i)))},i._createClass(s,[{key:"breakpoints",set:function(e){if(e===this._get("breakpoints"))return;const i=u(e);if(!i){const e=JSON.stringify(d,null,2);console.warn("provided breakpoints are not valid, using defaults:"+e)}e=i?e:d,this._set("breakpoints",{...e})}}]),s}(e);return s.__decorate([h.property()],n.prototype,"breakpoints",null),s.__decorate([h.property()],n.prototype,"orientation",void 0),s.__decorate([h.property()],n.prototype,"widthBreakpoint",void 0),s.__decorate([h.property()],n.prototype,"heightBreakpoint",void 0),n=s.__decorate([g.subclass("esri.views.BreakpointsOwner")],n),n};e.BreakpointsOwner=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));