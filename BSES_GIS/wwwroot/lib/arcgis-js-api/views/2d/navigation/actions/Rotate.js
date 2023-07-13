/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../Viewpoint","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec2","../../../../chunks/vec2f64","../../viewpointUtils","../../../../geometry/Point"],(function(e,t,r,o,n,i,s,c,a,p,u,v,d,l){"use strict";const h=v.create(),y=v.create();let _=function(t){function r(e){var r;return(r=t.call(this,e)||this)._previousCenter=v.create(),r.viewpoint=new o({targetGeometry:new l,scale:0,rotation:0}),r}e._inherits(r,t);var n=r.prototype;return n.begin=function(e,t){this.navigation.begin(),u.set(this._previousCenter,t.center.x,t.center.y)},n.update=function(e,t){const{state:{size:r,padding:o}}=e;u.set(h,t.center.x,t.center.y),d.getAnchor(y,r,o),e.viewpoint=d.rotateBy(this.viewpoint,e.state.paddedViewState.viewpoint,d.angleBetween(y,this._previousCenter,h)),u.copy(this._previousCenter,h)},n.end=function(){this.navigation.end()},e._createClass(r)}(n);t.__decorate([i.property()],_.prototype,"viewpoint",void 0),t.__decorate([i.property()],_.prototype,"navigation",void 0),_=t.__decorate([p.subclass("esri.views.2d.actions.Rotate")],_);return _}));
