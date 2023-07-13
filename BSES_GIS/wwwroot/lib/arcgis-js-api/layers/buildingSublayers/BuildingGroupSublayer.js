/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/loadAll","../../core/Warning","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./BuildingComponentSublayer","./BuildingSublayer"],(function(e,r,o,s,n,t,u,l,i,a,c,p){"use strict";var y;const d={type:o,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:b}}},read:!1}};function b(e,r,s){if(e&&Array.isArray(e))return new o(e.map((e=>{const r=h(e);if(r){const o=new r;return o.read(e,s),o}return s&&s.messages&&e&&s.messages.push(new n("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:s})),null})))}let g=y=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="building-group",o.listMode="show",o.sublayers=null,o}return e._inherits(o,r),o.prototype.loadAll=function(){return s.loadAllChildren(this,(e=>y.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)}))))},e._createClass(o)}(p);function h(e){return"group"===e.layerType?g:c}r.__decorate([t.property({type:["hide","show","hide-children"],json:{write:!0}})],g.prototype,"listMode",void 0),r.__decorate([t.property(d)],g.prototype,"sublayers",void 0),g=y=r.__decorate([a.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],g),function(e){function r(e,o){e.forEach((e=>{o(e),"building-group"===e.type&&r(e.sublayers,o)}))}e.sublayersProperty=d,e.readSublayers=b,e.forEachSublayer=r}(g||(g={}));return g}));