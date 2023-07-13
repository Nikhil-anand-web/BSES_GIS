/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../LRUCache","./WhereClause"],(function(e,t,n,c){"use strict";let i=function(){function e(e,t){this._cache=new n.LRUCache(e),this._invalidCache=new n.LRUCache(t)}return e.prototype.get=function(e,t){const n=`${t.uid}:${e}`,i=this._cache.get(n);if(i)return i;if(void 0!==this._invalidCache.get(n))return null;try{const i=c.WhereClause.create(e,t);return this._cache.put(n,i),i}catch{return this._invalidCache.put(n,null),null}},t._createClass(e)}();e.WhereClauseCache=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
