/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/Error","../../../core/accessorSupport/decorators/subclass","../resources","../../support/widget","../../support/jsxFactory"],(function(e,t,o,r,s,n,c,a,i,d,u,l){"use strict";const p=e=>{let r=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).renderNodeContent=e=>u.isWidget(e)&&!e.destroyed?l.tsx("div",{class:d.CSS.contentNode,key:e},e.render()):e instanceof HTMLElement?l.tsx("div",{class:d.CSS.contentNode,key:e,bind:e,afterCreate:t._attachToNode}):u.hasDomNode(e)?l.tsx("div",{class:d.CSS.contentNode,key:e,bind:e.domNode,afterCreate:t._attachToNode}):null,t}return t._inherits(o,e),o.prototype._attachToNode=function(e){const t=this;e.appendChild(t)},t._createClass(o)}(e);return r=o.__decorate([i.subclass("esri.widgets.Feature.ContentMixin")],r),r};e.FeatureContentMixin=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
