/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","../../geometry/Point","./PlacesParameters"],(function(e,t,r,o,s,p,a,c,i,n){"use strict";var l;let u=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).categoryIds=null,r.extent=null,r.offset=0,r.pageSize=10,r.point=null,r.radius=1e3,r.searchText=null,r}return e._inherits(r,t),r.prototype.clone=function(){return new l({apiKey:this.apiKey,url:this.url,categoryIds:this.categoryIds?.slice()??null,extent:this.extent?.clone()??null,offset:this.offset,pageSize:this.pageSize,point:this.point?.clone()??null,radius:this.radius,searchText:this.searchText})},e._createClass(r)}(n);t.__decorate([r.property()],u.prototype,"categoryIds",void 0),t.__decorate([r.property({type:c})],u.prototype,"extent",void 0),t.__decorate([r.property()],u.prototype,"offset",void 0),t.__decorate([r.property()],u.prototype,"pageSize",void 0),t.__decorate([r.property({type:i})],u.prototype,"point",void 0),t.__decorate([r.property()],u.prototype,"radius",void 0),t.__decorate([r.property()],u.prototype,"searchText",void 0),u=l=t.__decorate([a.subclass("esri.rest.support.PlacesQueryParameters")],u);return u}));