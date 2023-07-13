/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./ActionBase"],(function(t,e,i,s,r,o,c,a){"use strict";var n;let l=n=function(e){function i(t){var i;return(i=e.call(this,t)||this).image=null,i.type="button",i}return t._inherits(i,e),i.prototype.clone=function(){return new n({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})},t._createClass(i)}(a);e.__decorate([i.property()],l.prototype,"image",void 0),l=n=e.__decorate([c.subclass("esri.support.Action.ActionButton")],l);return l}));
