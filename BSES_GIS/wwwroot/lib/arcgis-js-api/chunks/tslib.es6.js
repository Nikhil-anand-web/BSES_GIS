/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n,c){var o,r=arguments.length,f=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,c);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(f=(r<3?o(f):r>3?o(t,n,f):o(t,n))||f);return r>3&&f&&Object.defineProperty(t,n,f),f}function n(e,t,n,c){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function f(e){try{u(c.next(e))}catch(t){r(t)}}function i(e){try{u(c.throw(e))}catch(t){r(t)}}function u(e){e.done?n(e.value):o(e.value).then(f,i)}u((c=c.apply(e,t||[])).next())}))}e.__awaiter=n,e.__decorate=t}));
