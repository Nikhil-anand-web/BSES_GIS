/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,n){"use strict";async function r(n,r){const{WhereClause:t}=await new Promise(((n,r)=>e(["./sql/WhereClause"],n,r)));return t.create(n,r)}function t(e,n){return null!=e?null!=n?`(${e}) AND (${n})`:e:n}n.parseWhereClause=r,n.sqlAnd=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
