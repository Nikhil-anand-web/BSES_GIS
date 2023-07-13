/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../kernel","../request","../core/Error","../core/JSONSupport","../core/Loadable","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../geometry/Extent","../intl/locale","./portalDefault","./PortalQueryParams","./PortalQueryResult","./PortalUser","../support/apiKeyUtils"],(function(e,t,r,o,a,s,p,n,i,u,l,d,c,y,h,_,m,f,v,S,g,P,b,G){"use strict";const O=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));var B;let D;const w={PortalGroup:()=>new Promise(((t,r)=>e(["./PortalGroup"],(e=>t(O(e))),r))),PortalItem:()=>new Promise(((t,r)=>e(["./PortalItem"],(e=>t(O(e))),r))),PortalUser:()=>new Promise(((t,r)=>e(["./PortalUser"],(e=>t(O(e))),r)))};let U=B=function(r){function n(e){var t;return(t=r.call(this,e)||this)._esriIdCredentialCreateHandle=null,t.access=null,t.allSSL=!1,t.authMode="auto",t.authorizedCrossOriginDomains=null,t.basemapGalleryGroupQuery=null,t.basemapGalleryGroupQuery3D=null,t.bingKey=null,t.canListApps=!1,t.canListData=!1,t.canListPreProvisionedItems=!1,t.canProvisionDirectPurchase=!1,t.canSearchPublic=!0,t.canShareBingPublic=!1,t.canSharePublic=!1,t.canSignInArcGIS=!1,t.canSignInIDP=!1,t.colorSetsGroupQuery=null,t.commentsEnabled=!1,t.created=null,t.culture=null,t.customBaseUrl=null,t.defaultBasemap=null,t.defaultDevBasemap=null,t.defaultExtent=null,t.defaultVectorBasemap=null,t.description=null,t.devBasemapGalleryGroupQuery=null,t.eueiEnabled=null,t.featuredGroups=null,t.featuredItemsGroupQuery=null,t.galleryTemplatesGroupQuery=null,t.livingAtlasGroupQuery=null,t.hasCategorySchema=!1,t.helperServices=null,t.homePageFeaturedContent=null,t.homePageFeaturedContentCount=null,t.httpPort=null,t.httpsPort=null,t.id=null,t.ipCntryCode=null,t.isPortal=!1,t.isReadOnly=!1,t.layerTemplatesGroupQuery=null,t.maxTokenExpirationMinutes=null,t.modified=null,t.name=null,t.portalHostname=null,t.portalMode=null,t.portalProperties=null,t.region=null,t.rotatorPanels=null,t.showHomePageDescription=!1,t.sourceJSON=null,t.supportsHostedServices=!1,t.symbolSetsGroupQuery=null,t.templatesGroupQuery=null,t.units=null,t.url=o.portalUrl,t.urlKey=null,t.user=null,t.use3dBasemaps=!0,t.useStandardizedQuery=!1,t.useVectorBasemaps=!1,t.vectorBasemapGalleryGroupQuery=null,t}t._inherits(n,r);var i=n.prototype;return i.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},i.destroy=function(){Q.unregister(this),this.defaultBasemap=u.destroyMaybe(this.defaultBasemap),this.defaultDevBasemap=u.destroyMaybe(this.defaultDevBasemap),this.defaultVectorBasemap=u.destroyMaybe(this.defaultVectorBasemap),this._esriIdCredentialCreateHandle=u.removeMaybe(this._esriIdCredentialCreateHandle)},i.readAuthorizedCrossOriginDomains=function(e){if(e)for(const t of e)o.request.trustedServers.includes(t)||o.request.trustedServers.push(t);return e},i.readDefaultBasemap=function(e){return this._readBasemap(e)},i.readDefaultDevBasemap=function(e){return this._readBasemap(e)},i.readDefaultVectorBasemap=function(e){return this._readBasemap(e)},i.readUrlKey=function(e){return e?e.toLowerCase():e},i.readUser=function(e){let t=null;return e&&(t=b.fromJSON(e),t.portal=this),t},i.load=function(t){const r=new Promise(((t,r)=>e(["../Basemap"],(e=>t(O(e))),r))).then((({default:e})=>{l.throwIfAborted(t),D=e})).then((()=>this.sourceJSON?this.sourceJSON:this.fetchSelf(this.authMode,!1,t))).then((e=>{if(a.id){const e=a.id;this.credential=e.findCredential(this.restUrl),this.credential||this.authMode!==B.AUTH_MODE_AUTO||(this._esriIdCredentialCreateHandle?.remove(),this._esriIdCredentialCreateHandle=e.on("credential-create",I(new WeakRef(this))),Q.register(this,this._esriIdCredentialCreateHandle,this))}this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(r),Promise.resolve(this)},i.createElevationLayers=async function(){await this.load();const t=this._getHelperService("defaultElevationLayers"),r=(await new Promise(((t,r)=>e(["../layers/ElevationLayer"],(e=>t(O(e))),r)))).default;return t?t.map((e=>new r({id:e.id,url:e.url}))):[]},i.fetchBasemaps=async function(e,t){const r=await this._fetchBasemaps(e,t);if(!0===t?.include3d&&!1!==this.use3dBasemaps){const o=await this._fetchBasemaps3D(e,t);r.unshift(...o)}return r},i.fetchCategorySchema=function(e){return this.hasCategorySchema?this.request(this.restUrl+"/portals/self/categorySchema",e).then((e=>e.categorySchema)):l.isAborted(e)?Promise.reject(l.createAbortError()):Promise.resolve([])},i.fetchFeaturedGroups=function(e){const t=this.featuredGroups,r=new g;if(r.num=100,r.sortField="title",t&&t.length){const o=[];for(const e of t)o.push(`(title:"${e.title}" AND owner:${e.owner})`);return r.query=o.join(" OR "),this.queryGroups(r,e).then((e=>e.results))}return l.isAborted(e)?Promise.reject(l.createAbortError()):Promise.resolve([])},i.fetchRegions=function(e){const t=this.user?.culture||this.culture||v.getLocale();return this.request(this.restUrl+"/portals/regions",{...e,query:{culture:t}})},i.fetchSettings=function(e){const t=this.user?.culture||this.culture||v.getLocale();return this.request(this.restUrl+"/portals/self/settings",{...e,query:{culture:t}})},n.getDefault=function(){return S.ensureDefaultPortalInstance((()=>new B))},i.queryGroups=function(e,t){return this.queryPortal("/community/groups",e,"PortalGroup",t)},i.queryItems=function(e,t){return this.queryPortal("/search",e,"PortalItem",t)},i.queryUsers=function(e,t){return e.sortField||(e.sortField="username"),this.queryPortal("/community/users",e,"PortalUser",t)},i.fetchSelf=function(e=this.authMode,t=!1,r){const o=this.restUrl+"/portals/self",a={authMode:e,query:{culture:v.getLocale().toLowerCase()},...r};return"auto"===a.authMode&&(a.authMode="no-prompt"),t&&(a.query.default=!0),this.request(o,a)},i.queryPortal=function(e,t,r,o){const a=c.ensureType(g,t),s=t=>this.request(this.restUrl+e,{...a.toRequestOptions(this),...o}).then((e=>{const r=a.clone();return r.start=e.nextStart,new P({nextQueryParams:r,queryParams:a,total:e.total,results:B._resultsToTypedArray(t,{portal:this},e,o)})})).then((e=>Promise.all(e.results.map((t=>"function"==typeof t.when?t.when():e))).then((()=>e),(t=>(l.throwIfAbortError(t),e)))));return r&&w[r]?w[r]().then((({default:e})=>(l.throwIfAborted(o),s(e)))):s()},i.signIn=function(){if(this.authMode===B.AUTH_MODE_ANONYMOUS)return Promise.reject(new p("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if("failed"===this.loadStatus)return Promise.reject(this.loadError);const e=e=>Promise.resolve().then((()=>"not-loaded"===this.loadStatus?(e||(this.authMode="immediate"),this.load().then((()=>null))):"loading"===this.loadStatus?this.load().then((()=>this.credential?null:(this.credential=e,this.fetchSelf("immediate")))):this.user&&this.credential===e?null:(this.credential=e,this.fetchSelf("immediate")))).then((e=>{e&&(this.sourceJSON=e,this.read(e))}));return a.id?a.id.getCredential(this.restUrl).then((t=>e(t))):e(this.credential)},i.normalizeUrl=function(e){const t=this.credential&&this.credential.token;return this._normalizeSSL(t?e+(e.includes("?")?"&":"?")+"token="+t:e)},i.requestToTypedArray=function(e,t,r){return this.request(e,t).then((e=>{const t=B._resultsToTypedArray(r,{portal:this},e);return Promise.all(t.map((t=>"function"==typeof t.when?t.when():e))).then((()=>t),(()=>t))}))},i.request=function(e,t={}){const r={f:"json",...t.query},{authMode:o=(this.authMode===B.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:a=null,cacheBust:p=!1,method:n="auto",responseType:i="json",signal:u}=t,l={authMode:o,body:a,cacheBust:p,method:n,query:r,responseType:i,timeout:0,signal:u};return s(this._normalizeSSL(e),l).then((e=>e.data))},i.toJSON=function(){throw new p("internal:not-yet-implemented","Portal.toJSON is not yet implemented")},n.fromJSON=function(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new B({sourceJSON:e})},i._getHelperService=function(e){const t=this.helperServices&&this.helperServices[e];if(!t)throw new p("portal:service-not-found",`The \`helperServices\` do not include an entry named "${e}"`);return t},i._fetchBasemaps=async function(e,t){const r=new g;r.query=e||(o.apiKey&&G.supportsApiKey(this.url)?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0;const a=await this.queryGroups(r,t);if(!a.total)return[];const s=a.results[0];r.num=100,r.query='type:"Web Map" -type:"Web Application"',r.sortField=s.sortField||"name",r.sortOrder=s.sortOrder||"desc";const p=await s.queryItems(r,t);if(!p.total)return[];return p.results.filter((e=>"Web Map"===e.type)).map((e=>new D({portalItem:e})))},i._fetchBasemaps3D=async function(e,t){const r=e||this.basemapGalleryGroupQuery3D;if(!r)return[];const o=new g({query:r,disableExtraQuery:!0}),a=await this.queryGroups(o,t);if(!a.total)return[];const s=a.results[0];o.num=100,o.query='type:"Web Scene"',o.sortField=s.sortField||"name",o.sortOrder=s.sortOrder||"desc";const p=await s.queryItems(o,t);if(!p.total)return[];return p.results.filter((e=>"Web Scene"===e.type)).map((e=>new D({portalItem:e})))},i._normalizeSSL=function(e){return e.replace(/^http:/i,"https:").replace(":7080",":7443")},i._readBasemap=function(e){if(e){const t=D.fromJSON(e);return t.portalItem={portal:this},t}return null},n._resultsToTypedArray=function(e,t,r,o){let a=[];if(r){const s=null!=o?o.signal:null;a=r.listings||r.notifications||r.userInvitations||r.tags||r.items||r.groups||r.comments||r.provisions||r.results||r.relatedItems||r,(e||t)&&(a=a.map((r=>{const o=Object.assign(e?e.fromJSON(r):r,t);return"function"==typeof o.load&&o.load(s),o})))}else a=[];return a},t._createClass(n,[{key:"extraQuery",get:function(){const e=!(this.user&&this.user.orgId)||this.canSearchPublic;return this.id&&!e?` AND orgid:${this.id}`:null}},{key:"isOrganization",get:function(){return!!this.access}},{key:"itemPageUrl",get:function(){return this.url?`${this.url}/home/item.html`:null}},{key:"restUrl",get:function(){let e=this.url;if(e){const t=e.indexOf("/sharing");e=t>0?e.substring(0,t):this.url.replace(/\/+$/,""),e+="/sharing/rest"}return e}},{key:"thumbnailUrl",get:function(){const e=this.restUrl,t=this.thumbnail;return e&&t?this._normalizeSSL(e+"/portals/self/resources/"+t):null}}]),n}(n.JSONSupportMixin(i));U.AUTH_MODE_ANONYMOUS="anonymous",U.AUTH_MODE_AUTO="auto",U.AUTH_MODE_IMMEDIATE="immediate",r.__decorate([d.property()],U.prototype,"access",void 0),r.__decorate([d.property()],U.prototype,"allSSL",void 0),r.__decorate([d.property()],U.prototype,"authMode",void 0),r.__decorate([d.property()],U.prototype,"authorizedCrossOriginDomains",void 0),r.__decorate([_.reader("authorizedCrossOriginDomains")],U.prototype,"readAuthorizedCrossOriginDomains",null),r.__decorate([d.property()],U.prototype,"basemapGalleryGroupQuery",void 0),r.__decorate([d.property({json:{name:"3DBasemapGalleryGroupQuery"}})],U.prototype,"basemapGalleryGroupQuery3D",void 0),r.__decorate([d.property()],U.prototype,"bingKey",void 0),r.__decorate([d.property()],U.prototype,"canListApps",void 0),r.__decorate([d.property()],U.prototype,"canListData",void 0),r.__decorate([d.property()],U.prototype,"canListPreProvisionedItems",void 0),r.__decorate([d.property()],U.prototype,"canProvisionDirectPurchase",void 0),r.__decorate([d.property()],U.prototype,"canSearchPublic",void 0),r.__decorate([d.property()],U.prototype,"canShareBingPublic",void 0),r.__decorate([d.property()],U.prototype,"canSharePublic",void 0),r.__decorate([d.property()],U.prototype,"canSignInArcGIS",void 0),r.__decorate([d.property()],U.prototype,"canSignInIDP",void 0),r.__decorate([d.property()],U.prototype,"colorSetsGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"commentsEnabled",void 0),r.__decorate([d.property({type:Date})],U.prototype,"created",void 0),r.__decorate([d.property()],U.prototype,"credential",void 0),r.__decorate([d.property()],U.prototype,"culture",void 0),r.__decorate([d.property()],U.prototype,"currentVersion",void 0),r.__decorate([d.property()],U.prototype,"customBaseUrl",void 0),r.__decorate([d.property()],U.prototype,"defaultBasemap",void 0),r.__decorate([_.reader("defaultBasemap")],U.prototype,"readDefaultBasemap",null),r.__decorate([d.property()],U.prototype,"defaultDevBasemap",void 0),r.__decorate([_.reader("defaultDevBasemap")],U.prototype,"readDefaultDevBasemap",null),r.__decorate([d.property({type:f})],U.prototype,"defaultExtent",void 0),r.__decorate([d.property()],U.prototype,"defaultVectorBasemap",void 0),r.__decorate([_.reader("defaultVectorBasemap")],U.prototype,"readDefaultVectorBasemap",null),r.__decorate([d.property()],U.prototype,"description",void 0),r.__decorate([d.property()],U.prototype,"devBasemapGalleryGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"eueiEnabled",void 0),r.__decorate([d.property({readOnly:!0})],U.prototype,"extraQuery",null),r.__decorate([d.property()],U.prototype,"featuredGroups",void 0),r.__decorate([d.property()],U.prototype,"featuredItemsGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"galleryTemplatesGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"livingAtlasGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"hasCategorySchema",void 0),r.__decorate([d.property()],U.prototype,"helpBase",void 0),r.__decorate([d.property()],U.prototype,"helperServices",void 0),r.__decorate([d.property()],U.prototype,"helpMap",void 0),r.__decorate([d.property()],U.prototype,"homePageFeaturedContent",void 0),r.__decorate([d.property()],U.prototype,"homePageFeaturedContentCount",void 0),r.__decorate([d.property()],U.prototype,"httpPort",void 0),r.__decorate([d.property()],U.prototype,"httpsPort",void 0),r.__decorate([d.property()],U.prototype,"id",void 0),r.__decorate([d.property()],U.prototype,"ipCntryCode",void 0),r.__decorate([d.property({readOnly:!0})],U.prototype,"isOrganization",null),r.__decorate([d.property()],U.prototype,"isPortal",void 0),r.__decorate([d.property()],U.prototype,"isReadOnly",void 0),r.__decorate([d.property({readOnly:!0})],U.prototype,"itemPageUrl",null),r.__decorate([d.property()],U.prototype,"layerTemplatesGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"maxTokenExpirationMinutes",void 0),r.__decorate([d.property({type:Date})],U.prototype,"modified",void 0),r.__decorate([d.property()],U.prototype,"name",void 0),r.__decorate([d.property()],U.prototype,"portalHostname",void 0),r.__decorate([d.property()],U.prototype,"portalMode",void 0),r.__decorate([d.property()],U.prototype,"portalProperties",void 0),r.__decorate([d.property()],U.prototype,"region",void 0),r.__decorate([d.property({readOnly:!0})],U.prototype,"restUrl",null),r.__decorate([d.property()],U.prototype,"rotatorPanels",void 0),r.__decorate([d.property()],U.prototype,"showHomePageDescription",void 0),r.__decorate([d.property()],U.prototype,"sourceJSON",void 0),r.__decorate([d.property()],U.prototype,"staticImagesUrl",void 0),r.__decorate([d.property({json:{name:"2DStylesGroupQuery"}})],U.prototype,"stylesGroupQuery2d",void 0),r.__decorate([d.property({json:{name:"stylesGroupQuery"}})],U.prototype,"stylesGroupQuery3d",void 0),r.__decorate([d.property()],U.prototype,"supportsHostedServices",void 0),r.__decorate([d.property()],U.prototype,"symbolSetsGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"templatesGroupQuery",void 0),r.__decorate([d.property()],U.prototype,"thumbnail",void 0),r.__decorate([d.property({readOnly:!0})],U.prototype,"thumbnailUrl",null),r.__decorate([d.property()],U.prototype,"units",void 0),r.__decorate([d.property()],U.prototype,"url",void 0),r.__decorate([d.property()],U.prototype,"urlKey",void 0),r.__decorate([_.reader("urlKey")],U.prototype,"readUrlKey",null),r.__decorate([d.property()],U.prototype,"user",void 0),r.__decorate([_.reader("user")],U.prototype,"readUser",null),r.__decorate([d.property()],U.prototype,"use3dBasemaps",void 0),r.__decorate([d.property()],U.prototype,"useStandardizedQuery",void 0),r.__decorate([d.property()],U.prototype,"useVectorBasemaps",void 0),r.__decorate([d.property()],U.prototype,"vectorBasemapGalleryGroupQuery",void 0),U=B=r.__decorate([m.subclass("esri.portal.Portal")],U);const C=U,Q=new FinalizationRegistry((e=>{e.remove()}));function I(e){const t=a.id;return()=>{const r=e.deref();r&&t.findCredential(r.restUrl)&&r.signIn().catch((()=>{}))}}return C}));