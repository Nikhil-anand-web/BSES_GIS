/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./lang","./Logger","./Message"],(function(e,t,r,s){"use strict";let n=function(s){function n(e,t,r){return s.call(this,e,t,r)||this}return e._inherits(n,s),n.prototype.toJSON=function(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((e,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return t.clone(r)}catch(s){return"[object]"}})))}}catch(e){throw r.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}},n.fromJSON=function(e){return new n(e.name,e.message,e.details)},e._createClass(n)}(s);return n.prototype.type="error",n}));
