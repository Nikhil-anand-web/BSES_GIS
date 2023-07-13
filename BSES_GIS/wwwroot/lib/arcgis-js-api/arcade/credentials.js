/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function n(){this._username="",this._password="",this._token=null}return n.fromUserName=function(e,t){const r=new n;return r._username=e,r._password=t,r._token=null,r},n.fromArcadeDictionary=function(e){const t=new n;return e.hasField("username")&&(t._username=e.field("username")),e.hasField("password")&&(t._password=e.field("password")),e.hasField("token")&&(t._token=e.field("token")),t},n.fromToken=function(e){const t=new n;return t._token=e,t},n.prototype.getToken=async function(){return null===this._token?"No Token Provided":this._token},e._createClass(n,[{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]),n}()}));
