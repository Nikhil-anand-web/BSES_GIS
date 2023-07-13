/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/commonProperties","../../layers/support/ExportWMSImageParameters"],(function(e,r,t,o,s,a,p,i,n,c,u){"use strict";const y=a=>{let p=function(r){function s(){return r.apply(this,arguments)||this}e._inherits(s,r);var a=s.prototype;return a.initialize=function(){this.exportImageParameters=new u.ExportWMSImageParameters({layer:this.layer})},a.destroy=function(){this.exportImageParameters=o.destroyMaybe(this.exportImageParameters)},a.fetchPopupFeatures=function(e){const{layer:r}=this;if(!e)return Promise.reject(new t("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:o}=r;if(!o)return Promise.reject(new t("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:a,width:p,height:i,x:n,y:c}=s;if(!(a&&p&&i))throw new t("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:p,height:i});return r.fetchFeatureInfo(a,p,i,n,c)},e._createClass(s,[{key:"exportImageVersion",get:function(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}}]),s}(a);return r.__decorate([s.property()],p.prototype,"exportImageParameters",void 0),r.__decorate([s.property({readOnly:!0})],p.prototype,"exportImageVersion",null),r.__decorate([s.property()],p.prototype,"layer",void 0),r.__decorate([s.property(c.combinedViewLayerTimeExtentProperty)],p.prototype,"timeExtent",void 0),p=r.__decorate([n.subclass("esri.layers.mixins.WMSLayerView")],p),p};return y}));
