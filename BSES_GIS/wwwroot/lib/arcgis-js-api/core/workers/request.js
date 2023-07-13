/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../Error"],(function(e,t){"use strict";let s;function a(e,a){let r=a.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",a.responseType=r;const n=a.signal;return delete a.signal,globalThis.invokeStaticMessage("request",{url:e,options:a},{signal:n}).then((async o=>{let i,l,u,c,b;if(o.data)if(o.data instanceof ArrayBuffer){if(!("json"!==r&&"text"!==r&&"blob"!==r||(i=new Blob([o.data]),"json"!==r&&"text"!==r||(s||(s=new FileReaderSync),c=s.readAsText(i),"json"!==r)))){try{l=JSON.parse(c||null)}catch(d){const s={...d,url:e,requestOptions:a};throw new t("request:server",d.message,s)}if(l.error){const s={...l.error,url:e,requestOptions:a};throw new t("request:server",l.error.message,s)}}}else"native"===r&&(o.data.signal=n,u=await fetch(o.data.url,o.data),o.httpStatus=u.status);switch(r){case"blob":b=i;break;case"json":b=l;break;case"native":b=u;break;case"text":b=c;break;default:b=o.data}return{data:b,httpStatus:o.httpStatus,requestOptions:a,ssl:o.ssl,url:e}}))}e.execute=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
