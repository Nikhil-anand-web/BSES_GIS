/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(n,e){"use strict";let r=e._createClass((function(){this.near=Number.MAX_VALUE,this.far=-Number.MAX_VALUE}));function t(n,e){return{near:n,far:e}}function a(n){return n?u(n,1/0,-1/0):t(1/0,-1/0)}function u(n,e,r){return n.near=e,n.far=r,n}function i(n,e,r=n){return null!=e&&(r.near=Math.min(n.near,e.near),r.far=Math.max(n.far,e.far)),r}function f(n,e){return n.near<=e&&e<=n.far}const o={near:0,far:0};n.DepthRange=r,n.ZERO=o,n.create=t,n.empty=a,n.set=u,n.union=i,n.within=f,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
