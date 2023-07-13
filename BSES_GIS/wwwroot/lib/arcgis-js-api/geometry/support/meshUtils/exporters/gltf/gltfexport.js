/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/urlUtils","./index","./asset","./scene","./node"],(function(e,n,t,o,i,r,l){"use strict";let s=function(){function e(e,n){this._file={type:"model/gltf-binary",data:e},this.origin=n}var o=e.prototype;return o.buffer=function(){return Promise.resolve(this._file)},o.download=function(e){t.downloadBlobAsFile(new Blob([this._file.data],{type:this._file.type}),e)},n._createClass(e)}();function d(e,n){const t=new i.Asset,d=new r.Scene;return t.addScene(d),d.addNode(new l.Node(e)),o.exportGLB(t,n).then((e=>new s(e[o.MODEL_NAME_GLB],e.origin)))}e.toBinaryGLTF=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
