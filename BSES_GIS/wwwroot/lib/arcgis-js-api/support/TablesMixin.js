/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/collectionUtils","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass"],(function(e,t,r,s,o,i,n,a,l,c,u){"use strict";function p(e,t,r){if(e)for(let s=0,o=e.length;s<o;s++){const o=e.at(s);if(o[t]===r)return o;if("group"===o?.type){const e=p(o.tables,t,r);if(e)return e}}}const d=e=>{let a=function(e){function r(...r){var o;return(o=e.call(this,...r)||this).tables=new s,o.addHandles([o.tables.on("after-add",(e=>{const r=e.item;r.parent&&r.parent!==t._assertThisInitialized(o)&&"tables"in r.parent&&r.parent.tables.remove(r),r.parent=t._assertThisInitialized(o),"feature"!==r.type&&i.getLogger(t._assertThisInitialized(o)).error(`Layer 'title:${r.title}, id:${r.id}' of type '${r.type}' is not supported as a table and will therefore be ignored.`)})),o.tables.on("after-remove",(e=>{e.item.parent=null}))]),o}t._inherits(r,e);var n=r.prototype;return n.destroy=function(){const e=this.tables.removeAll();for(const t of e)t.destroy();this.tables.destroy()},n.findTableById=function(e){return p(this.tables,"id",e)},n.findTableByUid=function(e){return p(this.tables,"uid",e)},t._createClass(r,[{key:"tables",set:function(e){this._set("tables",o.referenceSetter(e,this._get("tables")))}}]),r}(e);return r.__decorate([n.property()],a.prototype,"tables",null),a=r.__decorate([u.subclass("esri.support.TablesMixin")],a),a};e.TablesMixin=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
