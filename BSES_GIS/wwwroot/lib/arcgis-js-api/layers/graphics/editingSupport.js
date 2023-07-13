/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../Graphic","../../core/Collection","../../core/Error","../../core/lang","../../core/Logger","../../core/promiseUtils","../../core/urlUtils","../../geometry/support/normalizeUtils","../mixins/EditBusLayer","../support/infoFor3D","../support/layerUtils"],(function(e,t,a,r,s,i,n,o,d,l,u,p){"use strict";function c(e){return e&&null!=e.applyEdits}function h(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function y(e){return e.every(h)}function m(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function f(e){return e.every(m)}async function g(e,t,a,r={}){let i;if(l.isEditBusLayer(e)&&e.url)i=l.emitApplyEditsEvent(e.url,e.layerId,"original-and-current-features"===r.returnServiceEditsOption);else{i=n.createResolver(),i.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:i.promise};e.emit("apply-edits",t)}try{const{results:n,edits:o}=await b(e,t,a,r),d=e=>e.filter((e=>!e.error)).map(s.clone),l={edits:o,addedFeatures:d(n.addFeatureResults),updatedFeatures:d(n.updateFeatureResults),deletedFeatures:d(n.deleteFeatureResults),addedAttachments:d(n.addAttachmentResults),updatedAttachments:d(n.updateAttachmentResults),deletedAttachments:d(n.deleteAttachmentResults),exceededTransferLimit:!1};return n.editedFeatureResults?.length&&(l.editedFeatures=n.editedFeatureResults),i.resolve(l),n}catch(o){throw i.reject(o),o}}async function b(e,t,a,s){if(await e.load(),!c(t))throw new r(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!p.getEffectiveEditingEnabled(e))throw new r(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await F(e,a,s);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function F(e,t,s){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(!t||!n&&!o)throw new r(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const l=p.getEffectiveLayerCapabilities(e);if(!l.data.isVersioned&&s?.gdbVersion)throw new r(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!l.editing.supportsRollbackOnFailure&&s?.rollbackOnFailureEnabled)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!l.editing.supportsGlobalId&&s?.globalIdUsed)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!l.editing.supportsGlobalId&&o)throw new r(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!s?.globalIdUsed&&o)throw new r(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const u={...s};if(null!=u.rollbackOnFailureEnabled||l.editing.supportsRollbackOnFailure||(u.rollbackOnFailureEnabled=!0),u.rollbackOnFailureEnabled||"original-and-current-features"!==u.returnServiceEditsOption||(!1===u.rollbackOnFailureEnabled&&i.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),u.rollbackOnFailureEnabled=!0),!l.editing.supportsReturnServiceEditsInSourceSpatialReference&&u.returnServiceEditsInSourceSR)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(u.returnServiceEditsInSourceSR&&"original-and-current-features"!==u.returnServiceEditsOption)throw new r(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c={...t};if(c.addFeatures=t&&a.isCollection(t.addFeatures)?t.addFeatures.toArray():c.addFeatures||[],c.updateFeatures=t&&a.isCollection(t.updateFeatures)?t.updateFeatures.toArray():c.updateFeatures||[],c.deleteFeatures=t&&a.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():c.deleteFeatures||[],c.addFeatures.length&&!l.operations.supportsAdd)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!l.operations.supportsUpdate)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!l.operations.supportsDelete)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");c.addAttachments=c.addAttachments||[],c.updateAttachments=c.updateAttachments||[],c.deleteAttachments=c.deleteAttachments||[],c.addFeatures=c.addFeatures.map(R),c.updateFeatures=c.updateFeatures.map(R),c.addAssetFeatures=[];const h=s?.globalIdUsed||d;c.addFeatures.forEach((t=>v(t,e,h))),c.updateFeatures.forEach((t=>E(t,e,h))),c.deleteFeatures.forEach((t=>I(t,e,h))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),d&&await O(c,e);return{edits:await $(c),options:u}}function w(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new r(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new r(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new r(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){if("geometry"in e&&"mesh"===e.geometry?.type){const{geometry:a}=e;if(a.vertexSpace.isGeoreferenced)throw new r(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function v(e,t,a){w(e,t,a),A(e,t)}function I(e,t,a){w(e,t,a)}function E(e,t,a){w(e,t,a),A(e,t);const s=p.getEffectiveLayerCapabilities(t);if("geometry"in e&&null!=e.geometry&&!s?.editing.supportsGeometryUpdate)throw new r(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function S(e,t){const{feature:a,attachment:s}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new r(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new r(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=o.dataComponents(s.data);if(e&&!e.isBase64)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function $(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await d.normalizeCentralMeridian(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function R(e){const a=new t;return e.attributes||(e.attributes={}),a.geometry=e.geometry,a.attributes=e.attributes,a}async function O(e,t){if(null==t.infoFor3D)return;const{infoFor3D:a}=t,s=u.getMimeTypeFormatId("model/gltf-binary",a.supportedFormats)??u.getFilenameFormatId("glb",a.supportedFormats);if(!(!!s&&a.editFormats.includes(s)))throw new r(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:i}=e;for(const r of e.addFeatures??[])L(r)&&i.push(r);for(const r of e.updateFeatures??[])L(r)&&i.push(r)}function L(e){return"mesh"===e?.geometry?.type}function U(e,t,a,s){if(!c(t))throw new r(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new r(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,s)}e.applyEdits=g,e.isFeatureIdentifierArrayWithGlobalId=f,e.isFeatureIdentifierArrayWithObjectId=y,e.isFeatureIdentifierWithGlobalId=m,e.isFeatureIdentifierWithObjectId=h,e.uploadAssets=U,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
