/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../rest/query/operations/pbfDehydratedFeatureSet","../../../rest/query/operations/pbfQueryUtils"],(function(e,r,t){"use strict";let n=function(){function n(){}return n.prototype._parseFeatureQuery=function(e){const n=t.parsePBFFeatureQuery(e.buffer,new r.DehydratedFeatureSetParserContext(e.options)),s={...n,spatialReference:n.spatialReference?.toJSON(),fields:n.fields?n.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(s)},e._createClass(n)}();function s(){return new n}return s}));
