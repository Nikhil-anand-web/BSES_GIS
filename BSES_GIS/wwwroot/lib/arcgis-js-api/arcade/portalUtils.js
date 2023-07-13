/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../kernel","../request","../portal/Portal"],(function(e,r,n,t){"use strict";function s(e,r){if(null===e)return r;return new t({url:e.field("url")})}async function u(e,t,s){const u=r.id?.findCredential(e.restUrl);if(!u)return null;if("loaded"===e.loadStatus&&""===t&&e.user&&e.user.sourceJSON&&!1===s)return e.user.sourceJSON;if(""===t){const r=await n(e.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===s?{}:{returnUserLicenseTypeExtensions:!0}}});if(r.data){const e=r.data;if(e&&e.username)return e}return null}const o=await n(e.restUrl+"/community/users/"+t,{responseType:"json",query:{f:"json"}});if(o.data){const e=o.data;return e.error?null:e}return null}e.getPortal=s,e.lookupUser=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
