/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./Dictionary"],(function(e,t){"use strict";return function(t){function i(e,i,n,l,s,r,d){var a;return(a=t.call(this)||this).attachmentUrl=s,a.declaredClass="esri.arcade.Attachment",a.immutable=!1,a.setField("id",e),a.setField("name",i),a.setField("contenttype",n),a.setField("size",l),a.setField("exifinfo",r),a.setField("keywords",d),a.immutable=!0,a}return e._inherits(i,t),i.prototype.deepClone=function(){return new i(this.field("id"),this.field("name"),this.field("contenttype"),this.field("size"),this.attachmentUrl,this.field("exifinfo")?.deepClone()??null,this.field("keywords"))},e._createClass(i)}(t)}));
