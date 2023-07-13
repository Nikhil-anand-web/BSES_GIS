/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","./config","./kernel","./core/Error","./core/has","./core/lang","./core/promiseUtils","./core/urlUtils","./portal/support/urlUtils","./support/apiKeyUtils","./support/requestUtils"],(function(e,r,t,s,o,a,n,i,l,u,c){"use strict";const d=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));async function p(e,r){e instanceof URL&&(e=e.toString()),r?.query instanceof URLSearchParams&&(r.query=i.queryToObject(r.query.toString().replaceAll("+"," ")));const t=i.isDataProtocol(e),s=i.isBlobProtocol(e);s||t||(e=i.normalize(e));const a={url:e,requestOptions:{...r}};let l=i.getInterceptor(e);if(l){const e=await E(l,a);if(null!=e)return{data:e,getHeader:b,httpStatus:200,requestOptions:a.requestOptions,url:a.url};l.after||l.error||(l=null)}if(e=a.url,"image"===(r=a.requestOptions).responseType&&(o("host-webworker")||o("host-node")))throw O("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),a);if("head"===r.method){if(r.body)throw O("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),a);if(t||s)throw O("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),a)}if(await k(),h)return h.execute(e,r);const u=new AbortController;n.onAbort(r,(()=>u.abort()));const c={controller:u,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:l,params:a,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},d=await A(c);return l?.after?.(d),d}let h;const m=r.request,f="FormData"in globalThis,y=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],w=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],b=()=>null,q=Symbol();function T(e){const r=i.getOrigin(e);r&&!p._corsServers.includes(r)&&p._corsServers.push(r)}function S(e){const r=i.getOrigin(e);return!r||r.endsWith(".arcgis.com")||p._corsServers.includes(r)||i.isTrustedServer(r)}function O(e,r,t,o){let i="Error";const l={url:t.url,requestOptions:t.requestOptions,getHeader:b,ssl:!1};if(r instanceof s)return r.details?(r.details=a.clone(r.details),r.details.url=t.url,r.details.requestOptions=t.requestOptions):r.details=l,r;if(r){const e=o&&(e=>o.headers.get(e)),t=o?.status,s=r.message;s&&(i=s),e&&(l.getHeader=e),l.httpStatus=(null!=r.httpCode?r.httpCode:r.code)||t||0,l.subCode=r.subcode,l.messageCode=r.messageCode,"string"==typeof r.details?l.messages=[r.details]:l.messages=r.details,l.raw=q in r?r[q]:r}return n.isAbortError(r)?n.createAbortError():new s(e,i,l)}async function k(){o("host-webworker")?h||(h=await new Promise(((r,t)=>e(["./core/workers/request"],r,t)))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}async function v(){t.id||await new Promise(((r,t)=>e(["./identity/IdentityManager"],(e=>r(d(e))),t)))}async function C(e){const s=e.params.url,o=e.params.requestOptions,a=e.controller.signal,i=o.body;let l=null,c=null;if(f&&"HTMLFormElement"in globalThis&&(i instanceof FormData?l=i:i instanceof HTMLFormElement&&(l=new FormData(i))),"string"==typeof i&&(c=i),e.fetchOptions={cache:o.cacheBust&&!("polyfill"in p._abortableFetch)?"no-cache":"default",credentials:"same-origin",headers:o.headers||{},method:"head"===o.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:a},(l||c)&&(e.fetchOptions.body=l||c),"anonymous"===o.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(s)||o.query?.token||l?.get("token")),!e.hasToken&&r.apiKey&&u.supportsApiKey(s)&&(o.query||(o.query={}),o.query.token=r.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!P(s)&&!n.isAborted(a)){let r;"immediate"===o.authMode?(await v(),r=await t.id.getCredential(s,{signal:a}),e.credential=r):"no-prompt"===o.authMode?(await v(),r=await t.id.getCredential(s,{prompt:!1,signal:a}).catch((()=>{})),e.credential=r):t.id&&(r=t.id.findCredential(s)),r&&(e.credentialToken=r.token,e.useSSL=!!r.ssl)}}function P(e){return w.some((r=>r.test(e)))}async function x(e){let r=e.params.url;const s=e.params.requestOptions,a=e.fetchOptions??{},u=i.isBlobProtocol(r)||i.isDataProtocol(r),d=s.responseType||"json",h=u?0:null!=s.timeout?s.timeout:m.timeout;let y=!1;if(!u){e.useSSL&&(r=i.toHTTPS(r)),s.cacheBust&&"default"===a.cache&&(r=i.addQueryParameter(r,"request.preventCache",Date.now()));let n={...s.query};e.credentialToken&&(n.token=e.credentialToken);let u=i.objectToQuery(n);o("esri-url-encodes-apostrophe")&&(u=u.replaceAll("'","%27"));const d=r.length+1+u.length;let p;y="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||d>m.maxUrlLength;const h=s.useProxy||!!i.getProxyRule(r);if(h){const e=i.getProxyUrl(r);p=e.path,!y&&p.length+1+d>m.maxUrlLength&&(y=!0),e.query&&(n={...e.query,...n})}if("HEAD"===a.method&&(y||h)){if(y){if(d>m.maxUrlLength)throw O("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw O("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw O("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(y?(a.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?r=i.addQueryParameters(r,n):(a.body=i.objectToQuery(n),a.headers||(a.headers={}),a.headers["Content-Type"]="application/x-www-form-urlencoded")):r=i.addQueryParameters(r,n),h&&(e.useProxy=!0,r=`${p}?${r}`),n.token&&f&&a.body instanceof FormData&&!l.isSecureProxyService(r)&&a.body.set("token",n.token),s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!i.hasSameOrigin(r,i.getAppUrl()))if(i.isTrustedServer(r))e.withCredentials=!0;else if(t.id){const s=t.id.findServerInfo(r);s?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(a.credentials="include",c.isNoCorsRequestRequired(r)&&await c.sendNoCorsRequest(y?i.addQueryParameters(r,n):r))}let g,w,b=0,q=!1;h>0&&(b=setTimeout((()=>{q=!0,e.controller.abort()}),h));try{if("native-request-init"===s.responseType)w=a,w.url=r;else if("image"!==s.responseType||"default"!==a.cache||"GET"!==a.method||y||L(s.headers)||!u&&!e.useProxy&&m.proxyUrl&&!S(r)){if(g=await p._abortableFetch(r,a),e.useProxy||T(r),"native"===s.responseType)w=g;else if("HEAD"!==a.method)if(g.ok){switch(d){case"array-buffer":w=await g.arrayBuffer();break;case"blob":case"image":w=await g.blob();break;default:w=await g.text()}if(b&&(clearTimeout(b),b=0),"json"===d||"xml"===d||"document"===d)if(w)switch(d){case"json":w=JSON.parse(w);break;case"xml":w=U(w,"application/xml");break;case"document":w=U(w,"text/html")}else w=null;if(w){if("array-buffer"===d||"blob"===d){const e=g.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&w["blob"===d?"size":"byteLength"]<=750)try{const e=await new Response(w).json();e.error&&(w=e)}catch{}}"image"===d&&w instanceof Blob&&(w=await R(URL.createObjectURL(w),e,!0))}}else{w=await g.text();try{w=JSON.parse(w)}catch{}}}else w=await R(r,e)}catch(k){if("AbortError"===k.name){if(q)throw c.createTimeoutError();throw n.createAbortError("Request canceled")}if(!(!g&&k instanceof TypeError&&m.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||S(r))throw k;e.redoRequest=!0,i.addProxyRule({proxyUrl:m.proxyUrl,urlPrefix:i.getOrigin(r)??""})}finally{b&&clearTimeout(b)}return[g,w]}async function E(e,r){if(null!=e.responseData)return e.responseData;if(e.headers&&(r.requestOptions.headers={...r.requestOptions.headers,...e.headers}),e.query&&(r.requestOptions.query={...r.requestOptions.query,...e.query}),e.before){let o,a;try{a=await e.before(r)}catch(t){o=O("request:interceptor",t,r)}if((a instanceof Error||a instanceof s)&&(o=O("request:interceptor",a,r)),o)throw e.error&&e.error(o),o;return a}}function L(e){if(e)for(const r of Object.getOwnPropertyNames(e))if(e[r])return!0;return!1}function U(e,r){let t;try{t=(new DOMParser).parseFromString(e,r)}catch{}if(!t||t.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return t}async function A(e){let r,s;await C(e);try{do{[r,s]=await x(e)}while(!await D(e,r,s))}catch(n){const t=O("request:server",n,e.params,r);throw t.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(t),t}const o=e.params.url;if(s&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&s.user?.username&&!i.isTrustedServer(o)){const e=i.getOrigin(o,!0);e&&m.trustedServers.push(e)}Array.isArray(s.authorizedCrossOriginNoCorsDomains)&&c.registerNoCorsDomains(s.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&t.id){const e=t.id.findServerInfo(a.server);let r=e?.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=t.id.findCredential(r,a.userId);e&&-1===t.id._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r)}}return{data:s,getHeader:r?e=>r?.headers.get(e):b,httpStatus:r?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function D(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!r||"native"===o.responseType||"native-request-init"===o.responseType)return!0;let a,n;if(s&&(s.error?a=s.error:"error"===s.status&&Array.isArray(s.messages)&&(a={...s},a[q]=s,a.details=s.messages)),!a&&!r.ok)throw a=new Error(`Unable to load ${r.url} status: ${r.status}`),a[q]=s,a;let i,l=null;a&&(n=Number(a.code),l=a.hasOwnProperty("subcode")?Number(a.subcode):null,i=a.messageCode,i=i?.toUpperCase());const u=o.authMode;if(403===n&&(4===l||a.message?.toLowerCase().includes("ssl")&&!a.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===n)&&void 0!==n&&y.includes(n)&&!P(e.params.url)&&(403!==n||i&&!g.includes(i)&&(null==l||2===l&&e.credentialToken))){await v();try{const r=await t.id.getCredential(e.params.url,{error:O("request:server",a,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=void 0,e.credentialToken=void 0,!1;a=c}}if(a)throw a;return!0}function R(e,r,t=!1){const s=r.controller.signal,o=new Image;return r.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=m.priority,o.src=e,c.loadImageAsync(o,e,t,s)}return p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"],p}));