/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../core/Error","../../../geometry/Extent","./xmlUtilities"],(function(e,t,r,n){"use strict";function i(e){return e.indexOf("?")===e.length-1?e.substring(0,e.length-1):e}function a(e){const t=n.getElementValue(e,"Service/name"),a=n.getElement(e,"Capability"),o=n.getElement(a,"GetCapabilities/Get/OnlineResource")?.getAttribute("xlink:href")??"",l=n.getElement(a,"DescribeCoverage/Get/OnlineResource")?.getAttribute("xlink:href")??"",s=n.getElement(a,"GetCoverage/Get/OnlineResource")?.getAttribute("xlink:href")??"",c={getCapabilities:i(o),describeCoverage:i(l),getCoverage:i(s)},m=n.getElements(e,"CoverageOfferingBrief"),u=[];for(let i=0;i<m.length;i++){const e=m[i],t=n.getElementValue(e,"name"),a=n.getElements(e,"pos"),o=n.getSpaceDelimitedNumericValues(a[0]),l=n.getSpaceDelimitedNumericValues(a[1]),s=new r({xmin:o[0],ymin:o[1],xmax:l[0],ymax:l[1],spatialReference:{wkid:4326}});u.push({id:t,lonLatEnvelope:s})}return{name:t,onlineResources:c,coverages:u,supportedVersions:["1.0.0"]}}function o(e){const t={};for(let i=0;i<e.childNodes.length;i++){const a=e.childNodes[i];if(1!==a.nodeType)continue;const l=n.getNodeNameIgnoreNS(a).toLowerCase();switch(l){case"title":case"abstract":t[l]=n.getElementValue(a);break;case"identifier":t.id=n.getElementValue(a);break;case"wgs84boundingbox":{const e=n.getSpaceDelimitedNumericValues(a,"LowerCorner"),i=n.getSpaceDelimitedNumericValues(a,"UpperCorner");t.lonLatEnvelope=new r({xmin:e[0],ymin:e[1],xmax:i[0],ymax:i[1],spatialReference:{wkid:4326}})}break;case"coveragesummary":t.coverageSummaries=t.coverageSummaries||[],t.coverageSummaries.push(o(a))}}return t}function l(e,t){if(e.coverageSummaries)for(let r=0;r<e.coverageSummaries.length;r++)e.coverageSummaries[r].abstract=e.coverageSummaries[r].abstract||e.abstract,e.coverageSummaries[r].lonLatEnvelope=e.coverageSummaries[r].lonLatEnvelope||e.lonLatEnvelope,e.coverageSummaries[r].title=e.coverageSummaries[r].title||e.title,l(e.coverageSummaries[r],t);null!=e.id&&t.push(e)}function s(e){const t=n.getElement(e.querySelector("Operation[name=GetCapabilities]"),"Get")?.getAttribute("xlink:href")||"",r=n.getElement(e.querySelector("Operation[name=DescribeCoverage]"),"Get")?.getAttribute("xlink:href")||"",a=n.getElement(e.querySelector("Operation[name=GetCoverage]"),"Get")?.getAttribute("xlink:href")||"";return{getCapabilities:i(t),describeCoverage:i(r),getCoverage:i(a)}}function c(e){const t=n.getElementValue(e,"ServiceIdentification/Title"),r=n.getElementValues(e,"ServiceIdentification/ServiceTypeVersion"),i=s(n.getElement(e,"OperationsMetadata")),a=[],c=n.getElement(e,"Contents");for(let s=0;s<c.childNodes.length;s++){const e=c.childNodes[s];1===e.nodeType&&(n.isSameTagIgnoreNS(e,"CoverageSummary")&&l(o(e),a))}return{name:t,onlineResources:i,coverages:a,supportedVersions:r,supportedFormats:n.getElementValues(c,"SupportedFormat")}}function m(e){const t=n.getElement(e,"ServiceIdentification"),i=n.getElementValue(t,"Title"),a=n.getElementValues(t,"ServiceTypeVersion"),o=n.getElementValues(t,"Profile"),l=s(n.getElement(e,"OperationsMetadata")),c=n.getElements(e,"Contents/CoverageSummary"),m=[];for(let s=0;s<c.length;s++){const e=c[s],t=n.getElementValue(e,"CoverageId"),i=n.getElement(e,"WGS84BoundingBox");let a;if(i){const e=n.getSpaceDelimitedNumericValues(i,"LowerCorner"),t=n.getSpaceDelimitedNumericValues(i,"UpperCorner");a=new r({xmin:e[0],ymin:e[1],xmax:t[0],ymax:t[1],spatialReference:{wkid:4326}})}const o=n.getElementValue(e,"CoverageSubtype")||"RectifiedGridCoverage";m.push({id:t,lonLatEnvelope:a,coverageSubType:o})}const u=n.getElement(e,"ServiceMetadata");return{name:i,supportedVersions:a,supportedFormats:n.getElementValues(u,"formatSupported"),supportedInterpolations:n.getElementValues(u,"interpolationSupported").concat(n.getElementValues(u,"InterpolationSupported")),onlineResources:l,profiles:o,coverages:m}}function u(e,r=null){let n=null;if("string"==typeof e){n=(new DOMParser).parseFromString(e,"text/xml")}else n=e;const i=n.documentElement.getAttribute("version"),o=(i||r||"1.0.0").slice(0,3);let l;if("2.0"===o)l=m(n);else if("1.1"===o)l=c(n);else{if("1.0"!==o)throw new t("wcsraster:parsecapabilities","the capabilities version is not supported");l=a(n)}return l.capabilitiesVersion=i,l}e.parseCapabilities=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));