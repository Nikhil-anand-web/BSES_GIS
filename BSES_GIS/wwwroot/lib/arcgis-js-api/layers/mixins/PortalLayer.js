/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../config","../../kernel","../../request","../../core/asyncUtils","../../core/Error","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../support/layerUtils","../../portal/Portal","../../portal/PortalItem","../../portal/PortalUser","../../portal/support/portalItemUtils"],(function(e,t,r,i,s,o,a,l,n,u,c,p,d,h,f,y,g,m,I,P,_,v,w,U,b){"use strict";const E=t=>{let f=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).resourceReferences={portalItem:null,paths:[]},e.userHasEditingPrivileges=!0,e.userHasFullEditingPrivileges=!1,e.userHasUpdateItemPrivileges=!1,e}r._inherits(i,t);var h=i.prototype;return h.destroy=function(){this.portalItem=c.destroyMaybe(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0},h.readPortalItem=function(e,t,r){if(t.itemId)return new w({id:t.itemId,portal:r&&r.portal})},h.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},h.loadFromPortal=async function(t,r){if(this.portalItem&&this.portalItem.id)try{const{load:i}=await new Promise(((t,r)=>e(["../../portal/support/layersLoader"],t,r)));return p.throwIfAborted(r),await i({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},r)}catch(i){throw p.isAbortError(i)||u.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${i}`),i}},h.finishLoadEditablePortalLayer=async function(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>(p.throwIfAbortError(e),!0))))},h._setUserPrivileges=async function(e,t){if(!s.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(r){p.throwIfAbortError(r)}},h._fetchUserPrivileges=async function(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return b.getUserPrivileges(r);let s,a;if(i)s=r.portal.url;else try{s=await _.getOwningPortalUrl(this.url,t)}catch(c){p.throwIfAbortError(c)}if(!s||!d.hasSameCanonicalPortal(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(o.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(c){p.throwIfAbortError(c)}const l=!0,n=!1,u=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:u}};try{if(i?await r.reload():(r=new w({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return b.getUserPrivileges(r)}catch(c){p.throwIfAbortError(c)}return{features:{edit:l,fullEdit:n},content:{updateItem:u}}},h._fetchFallbackUserPrivileges=async function(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){p.throwIfAbortError(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}},h._fetchUserHasEditingPrivileges=async function(e){const t=this.url?o.id?.findCredential(this.url):null;if(!t)return!0;const r=H.credential===t?H.user:await this._fetchEditingUser(e);return H.credential=t,H.user=r,null==r||null==r.privileges||r.privileges.includes("features:user:edit")},h._fetchEditingUser=async function(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=o.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=v.getDefault();if(s&&s.loaded&&d.normalize(s.restUrl)===d.normalize(i))return s.user;const n=`${i}/community/self`,u=null!=e?e.signal:null,c=await l.result(a(n,{authMode:"no-prompt",query:{f:"json"},signal:u}));return c.ok?U.fromJSON(c.value.data):null},h.read=function(e,t){t&&(t.layer=this),r._get(r._getPrototypeOf(i.prototype),"read",this).call(this,e,t)},h.write=function(e,t){const s=t&&t.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||v.getDefault());return s&&o&&!d.hasSamePortal(o.restUrl,s.restUrl)?(t.messages&&t.messages.push(new n("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):r._get(r._getPrototypeOf(i.prototype),"write",this).call(this,e,{...t,layer:this})},r._createClass(i,[{key:"portalItem",set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}}]),i}(t);return i.__decorate([h.property({type:w})],f.prototype,"portalItem",null),i.__decorate([m.reader("web-document","portalItem",["itemId"])],f.prototype,"readPortalItem",null),i.__decorate([P.writer("web-document","portalItem",{itemId:{type:String}})],f.prototype,"writePortalItem",null),i.__decorate([h.property({clonable:!1})],f.prototype,"resourceReferences",void 0),i.__decorate([h.property({type:Boolean,readOnly:!0})],f.prototype,"userHasEditingPrivileges",void 0),i.__decorate([h.property({type:Boolean,readOnly:!0})],f.prototype,"userHasFullEditingPrivileges",void 0),i.__decorate([h.property({type:Boolean,readOnly:!0})],f.prototype,"userHasUpdateItemPrivileges",void 0),f=i.__decorate([I.subclass("esri.layers.mixins.PortalLayer")],f),f},H={credential:null,user:null};t.PortalLayer=E,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));