/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/ObjectPool"],(function(o,n){"use strict";let l=function(){function n(){this.spans=[]}var l=n.prototype;return l.acquire=function(o){this.lodInfo=o},l.release=function(){this.lodInfo=null,this.spans.length=0},l.forEach=function(o,n){const{spans:l,lodInfo:e}=this,{level:t}=e;if(0!==l.length)for(const{row:r,colFrom:s,colTo:c}of l)for(let l=s;l<=c;l++)o.call(n,t,r,e.normalizeCol(l),e.getWorldForColumn(l))},o._createClass(n)}();return l.pool=new n(l),l}));
