/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_commonjsHelpers"],(function(t,o){"use strict";var r,n,e,f={exports:{}};f.exports,r=f,n=function(){function t(t,r,e,f,a){o(t,r,e||0,f||t.length-1,a||n)}function o(t,n,e,f,a){for(;f>e;){if(f-e>600){var s=f-e+1,i=n-e+1,c=Math.log(s),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(s-u)/s)*(i-s/2<0?-1:1);o(t,n,Math.max(e,Math.floor(n-i*u/s+h)),Math.min(f,Math.floor(n+(s-i)*u/s+h)),a)}var p=t[n],x=e,l=f;for(r(t,e,n),a(t[f],p)>0&&r(t,e,f);x<l;){for(r(t,x,l),x++,l--;a(t[x],p)<0;)x++;for(;a(t[l],p)>0;)l--}0===a(t[e],p)?r(t,e,l):r(t,++l,f),l<=n&&(e=l+1),n<=l&&(f=l-1)}}function r(t,o,r){var n=t[o];t[o]=t[r],t[r]=n}function n(t,o){return t<o?-1:t>o?1:0}return t},void 0!==(e=n())&&(r.exports=e);var a=f.exports;const s=o.getDefaultExportFromCjs(a);t.quickselect=s}));
