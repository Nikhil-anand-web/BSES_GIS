/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,s={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function a(e){const a=e?.match(t);if(!a)return null;const[,r,o,c]=a;if(!r)return null;let l=null,n=null,m=null;const{devext:u,qaext:i,www:p}=s;if(o)if(l=r,c)switch(c.toLowerCase()){case"devext":({customBaseUrl:n,portalHostname:m}=u);break;case"qa":({customBaseUrl:n,portalHostname:m}=i);break;default:return null}else({customBaseUrl:n,portalHostname:m}=p);else switch(r.toLowerCase()){case"devext":({customBaseUrl:n,portalHostname:m}=u);break;case"qaext":({customBaseUrl:n,portalHostname:m}=i);break;case"www":({customBaseUrl:n,portalHostname:m}=p);break;default:return null}return{customBaseUrl:n,isPortal:!1,portalHostname:m,urlKey:l}}function r(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}e.isSecureProxyService=r,e.parseKnownArcGISOnlineDomain=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
