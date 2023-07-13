/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom"],(function(e,t,r){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
	 * v1.4.2
	 */function n(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return a()}},r.exports),r.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},i=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))},l=n((function(e){var t=Array.prototype.concat,r=Array.prototype.slice,n=e.exports=function(e){for(var n=[],a=0,o=e.length;a<o;a++){var l=e[a];i(l)?n=t.call(n,r.call(l)):n.push(l)}return n};n.wrap=function(e){return function(){return e(n(arguments))}}})),s=n((function(e){var t=Object.hasOwnProperty,r={};for(var n in o)t.call(o,n)&&(r[o[n]]=n);var a=e.exports={to:{},get:{}};function i(e,t,r){return Math.min(Math.max(t,e),r)}function s(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}a.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=a.get.hsl(e),r="hsl";break;case"hwb":t=a.get.hwb(e),r="hwb";break;default:t=a.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},a.get.rgb=function(e){if(!e)return null;var r,n,a,l=/^#([a-f0-9]{3,4})$/i,s=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,c=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,h=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,u=/^(\w+)$/,g=[0,0,0,1];if(r=e.match(s)){for(a=r[2],r=r[1],n=0;n<3;n++){var d=2*n;g[n]=parseInt(r.slice(d,d+2),16)}a&&(g[3]=parseInt(a,16)/255)}else if(r=e.match(l)){for(a=(r=r[1])[3],n=0;n<3;n++)g[n]=parseInt(r[n]+r[n],16);a&&(g[3]=parseInt(a+a,16)/255)}else if(r=e.match(c)){for(n=0;n<3;n++)g[n]=parseInt(r[n+1],0);r[4]&&(r[5]?g[3]=.01*parseFloat(r[4]):g[3]=parseFloat(r[4]))}else{if(!(r=e.match(h)))return(r=e.match(u))?"transparent"===r[1]?[0,0,0,0]:t.call(o,r[1])?((g=o[r[1]])[3]=1,g):null:null;for(n=0;n<3;n++)g[n]=Math.round(2.55*parseFloat(r[n+1]));r[4]&&(r[5]?g[3]=.01*parseFloat(r[4]):g[3]=parseFloat(r[4]))}for(n=0;n<3;n++)g[n]=i(g[n],0,255);return g[3]=i(g[3],0,1),g},a.get.hsl=function(e){if(!e)return null;var t=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,r=e.match(t);if(r){var n=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,i(parseFloat(r[2]),0,100),i(parseFloat(r[3]),0,100),i(isNaN(n)?1:n,0,1)]}return null},a.get.hwb=function(e){if(!e)return null;var t=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,r=e.match(t);if(r){var n=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,i(parseFloat(r[2]),0,100),i(parseFloat(r[3]),0,100),i(isNaN(n)?1:n,0,1)]}return null},a.to.hex=function(){var e=l(arguments);return"#"+s(e[0])+s(e[1])+s(e[2])+(e[3]<1?s(Math.round(255*e[3])):"")},a.to.rgb=function(){var e=l(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},a.to.rgb.percent=function(){var e=l(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},a.to.hsl=function(){var e=l(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},a.to.hwb=function(){var e=l(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},a.to.keyword=function(e){return r[e.slice(0,3)]}})),c={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const h={};for(const fe of Object.keys(c))h[c[fe]]=fe;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var g=u;for(const fe of Object.keys(u)){if(!("channels"in u[fe]))throw new Error("missing channels property: "+fe);if(!("labels"in u[fe]))throw new Error("missing channel labels property: "+fe);if(u[fe].labels.length!==u[fe].channels)throw new Error("channel and label counts mismatch: "+fe);const{channels:e,labels:t}=u[fe];delete u[fe].channels,delete u[fe].labels,Object.defineProperty(u[fe],"channels",{value:e}),Object.defineProperty(u[fe],"labels",{value:t})}function d(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}function f(){const e={},t=Object.keys(g);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}function b(e){const t=f(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),n=Object.keys(g[e]);for(let a=n.length,o=0;o<a;o++){const a=n[o],i=t[a];-1===i.distance&&(i.distance=t[e].distance+1,i.parent=e,r.unshift(a))}}return t}function p(e,t){return function(r){return t(e(r))}}function m(e,t){const r=[t[e].parent,e];let n=g[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),n=p(g[t[a].parent][a],n),a=t[a].parent;return n.conversion=r,n}u.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),o=Math.max(t,r,n),i=o-a;let l,s;o===a?l=0:t===o?l=(r-n)/i:r===o?l=2+(n-t)/i:n===o&&(l=4+(t-r)/i),l=Math.min(60*l,360),l<0&&(l+=360);const c=(a+o)/2;return s=o===a?0:c<=.5?i/(o+a):i/(2-o-a),[l,100*s,100*c]},u.rgb.hsv=function(e){let t,r,n,a,o;const i=e[0]/255,l=e[1]/255,s=e[2]/255,c=Math.max(i,l,s),h=c-Math.min(i,l,s),u=function(e){return(c-e)/6/h+.5};return 0===h?(a=0,o=0):(o=h/c,t=u(i),r=u(l),n=u(s),i===c?a=n-r:l===c?a=1/3+t-n:s===c&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},u.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=u.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*o,100*n]},u.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},u.rgb.keyword=function(e){const t=h[e];if(t)return t;let r,n=1/0;for(const a of Object.keys(c)){const t=d(e,c[a]);t<n&&(n=t,r=a)}return r},u.keyword.rgb=function(e){return c[e]},u.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},u.rgb.lab=function(e){const t=u.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(r-n),200*(n-a)]},u.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,o,i;if(0===r)return i=255*n,[i,i,i];a=n<.5?n*(1+r):n+r-n*r;const l=2*n-a,s=[0,0,0];for(let c=0;c<3;c++)o=t+1/3*-(c-1),o<0&&o++,o>1&&o--,i=6*o<1?l+6*(a-l)*o:2*o<1?a:3*o<2?l+(a-l)*(2/3-o)*6:l,s[c]=255*i;return s},u.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const o=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,a*=o<=1?o:2-o;return[t,100*(0===n?2*a/(o+a):2*r/(n+r)),100*((n+r)/2)]},u.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*o),s=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}},u.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,i;i=(2-r)*n;const l=(2-r)*a;return o=r*a,o/=l<=1?l:2-l,o=o||0,i/=2,[t,100*o,100*i]},u.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let o;a>1&&(r/=a,n/=a);const i=Math.floor(6*t),l=1-n;o=6*t-i,0!=(1&i)&&(o=1-o);const s=r+o*(l-r);let c,h,u;switch(i){default:case 6:case 0:c=l,h=s,u=r;break;case 1:c=s,h=l,u=r;break;case 2:c=r,h=l,u=s;break;case 3:c=r,h=s,u=l;break;case 4:c=s,h=r,u=l;break;case 5:c=l,h=r,u=s}return[255*c,255*h,255*u]},u.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},u.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,o,i;return a=3.2406*t+-1.5372*r+-.4986*n,o=-.9689*t+1.8758*r+.0415*n,i=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[255*a,255*o,255*i]},u.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*r-16,500*(t-r),200*(r-n)]},u.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,o=t**3,i=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},u.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(r*r+n*n),a]},u.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},u.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let o=null===t?u.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),0===o)return 30;let i=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(i+=60),i},u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])},u.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},u.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},u.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},u.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},u.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),i=a-o;let l,s;return l=i<1?o/(1-i):0,s=i<=0?0:a===t?(r-n)/i%6:a===r?2+(n-t)/i:4+(t-r)/i,s/=6,s%=1,[360*s,100*i,100*l]},u.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},u.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},u.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],o=t%1*6,i=o%1,l=1-i;let s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return s=(1-r)*n,[255*(r*a[0]+s),255*(r*a[1]+s),255*(r*a[2]+s)]},u.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},u.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},u.gray.hsl=function(e){return[0,0,e[0]]},u.gray.hsv=u.gray.hsl,u.gray.hwb=function(e){return[0,100,e[0]]},u.gray.cmyk=function(e){return[0,0,0,e[0]]},u.gray.lab=function(e){return[e[0],0,0]},u.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};var y=function(e){const t=b(e),r={},n=Object.keys(t);for(let a=n.length,o=0;o<a;o++){const e=n[o];null!==t[e].parent&&(r[e]=m(e,t))}return r};const w={};function k(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}function v(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}Object.keys(g).forEach((e=>{w[e]={},Object.defineProperty(w[e],"channels",{value:g[e].channels}),Object.defineProperty(w[e],"labels",{value:g[e].labels});const t=y(e);Object.keys(t).forEach((r=>{const n=t[r];w[e][r]=v(n),w[e][r].raw=k(n)}))}));var S=w;const x=["keyword","gray","hex"],M={};for(const fe of Object.keys(S))M[[...S[fe].labels].sort().join("")]=fe;const A={};function C(e,t){if(!(this instanceof C))return new C(e,t);if(t&&t in x&&(t=null),t&&!(t in S))throw new Error("Unknown model: "+t);let r,n;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof C)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){const t=s.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,n=S[this.model].channels,this.color=t.value.slice(0,n),this.valpha="number"==typeof t.value[n]?t.value[n]:1}else if(e.length>0){this.model=t||"rgb",n=S[this.model].channels;const r=Array.prototype.slice.call(e,0,n);this.color=$(r,n),this.valpha="number"==typeof e[n]?e[n]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=t.sort().join("");if(!(n in M))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=M[n];const{labels:a}=S[this.model],o=[];for(r=0;r<a.length;r++)o.push(e[a[r]]);this.color=$(o)}if(A[this.model])for(n=S[this.model].channels,r=0;r<n;r++){const e=A[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}C.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in s.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const r=1===t.valpha?t.color:[...t.color,this.valpha];return s.to[t.model](r)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return s.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=S[this.model],{labels:r}=S[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new C([...this.color.map(z(e)),this.valpha],this.model)},alpha(e){return void 0!==e?new C([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:_("rgb",0,j(255)),green:_("rgb",1,j(255)),blue:_("rgb",2,j(255)),hue:_(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:_("hsl",1,j(100)),lightness:_("hsl",2,j(100)),saturationv:_("hsv",1,j(100)),value:_("hsv",2,j(100)),chroma:_("hcg",1,j(100)),gray:_("hcg",2,j(100)),white:_("hwb",1,j(100)),wblack:_("hwb",2,j(100)),cyan:_("cmyk",0,j(100)),magenta:_("cmyk",1,j(100)),yellow:_("cmyk",2,j(100)),black:_("cmyk",3,j(100)),x:_("xyz",0,j(95.047)),y:_("xyz",1,j(100)),z:_("xyz",2,j(108.833)),l:_("lab",0,j(100)),a:_("lab",1),b:_("lab",2),keyword(e){return void 0!==e?new C(e):S[this.model].keyword(this.color)},hex(e){return void 0!==e?new C(e):s.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new C(e);const t=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),s.to.hex(t)+r},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[r,n]of e.entries()){const e=n/255;t[r]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(2126*e[0]+7152*e[1]+722*e[2])/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return C.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const r=e.rgb(),n=this.rgb(),a=void 0===t?.5:t,o=2*a-1,i=r.alpha()-n.alpha(),l=((o*i==-1?o:(o+i)/(1+o*i))+1)/2,s=1-l;return C.rgb(l*r.red()+s*n.red(),l*r.green()+s*n.green(),l*r.blue()+s*n.blue(),r.alpha()*a+n.alpha()*(1-a))}};for(const fe of Object.keys(S)){if(x.includes(fe))continue;const{channels:e}=S[fe];C.prototype[fe]=function(...e){return this.model===fe?new C(this):e.length>0?new C(e,fe):new C([...q(S[this.model][fe].raw(this.color)),this.valpha],fe)},C[fe]=function(...t){let r=t[0];return"number"==typeof r&&(r=$(t,e)),new C(r,fe)}}function H(e,t){return Number(e.toFixed(t))}function z(e){return function(t){return H(t,e)}}function _(e,t,r){e=Array.isArray(e)?e:[e];for(const n of e)(A[n]||(A[n]=[]))[t]=r;return e=e[0],function(n){let a;return void 0!==n?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function j(e){return function(t){return Math.max(0,Math.min(e,t))}}function q(e){return Array.isArray(e)?e:[e]}function $(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var E=C;
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
	 * v1.4.2
	 */const O=/^[0-9A-F]$/i,L=/^#[0-9A-F]{3}$/i,F=/^#[0-9A-F]{6}$/i,B=/^#[0-9A-F]{4}$/i,G=/^#[0-9A-F]{8}$/i,R=e=>Number((100*e).toFixed()),D=e=>Number((e/100).toFixed(2));function I(e,t=!1){return P(e,t)||V(e,t)}function N(e,t,r){return!!e&&(e.length===t&&r.test(e))}function P(e,t=!1){return N(e,t?5:4,t?B:L)}function V(e,t=!1){return N(e,t?9:7,t?G:F)}function U(e,t=!1,r=!1){if((e=e.toLowerCase()).startsWith("#")||(e=`#${e}`),P(e,t))return W(Q(e,t));if(t&&r&&I(e,!1)){return W(Q(`${e}${P(e,!1)?"f":"ff"}`,!0))}return e}function X(e,t=!1){return t?e.hexa():e.hex()}function W(e){const{r:t,g:r,b:n}=e;return`#${T(t)}${T(r)}${T(n)}${"a"in e?T(255*e.a):""}`.toLowerCase()}function T(e){return e.toString(16).padStart(2,"0")}function J(e){const t={...e,a:e.alpha??1};return delete t.alpha,t}function K(e){const t={...e,alpha:e.a??1};return delete t.a,t}function Q(e,t=!1){if(!I(e,t))return null;let r,n,a,o;if(3===(e=e.replace("#","")).length||4===e.length){const[t,i,l,s]=e.split("");r=parseInt(`${t}${t}`,16),n=parseInt(`${i}${i}`,16),a=parseInt(`${l}${l}`,16),o=parseInt(`${s}${s}`,16)/255}else r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16),o=parseInt(e.slice(6,8),16)/255;return isNaN(o)?{r,g:n,b:a}:{r,g:n,b:a,a:o}}const Y=e=>e,Z=Y({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"}),ee=Y({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function te(e){if("string"==typeof e){if(e.startsWith("#")){const{length:t}=e;if(4===t||7===t)return Z.HEX;if(5===t||9===t)return Z.HEXA}if(e.startsWith("rgba("))return Z.RGBA_CSS;if(e.startsWith("rgb("))return Z.RGB_CSS;if(e.startsWith("hsl("))return Z.HSL_CSS;if(e.startsWith("hsla("))return Z.HSLA_CSS}if("object"==typeof e){if(re(e,"r","g","b"))return re(e,"a")?ee.RGBA:ee.RGB;if(re(e,"h","s","l"))return re(e,"a")?ee.HSLA:ee.HSL;if(re(e,"h","s","v"))return re(e,"a")?ee.HSVA:ee.HSV}return null}function re(e,...t){return t.every((t=>t&&e&&`${t}`in e))}function ne(e,t){return e?.rgb().array().toString()===t?.rgb().array().toString()}function ae(e){return e===Z.HEXA||e===Z.RGBA_CSS||e===Z.HSLA_CSS||e===ee.RGBA||e===ee.HSLA||e===ee.HSVA}function oe(e){return e===Z.HEX?Z.HEXA:e===Z.RGB_CSS?Z.RGBA_CSS:e===Z.HSL_CSS?Z.HSLA_CSS:e===ee.RGB?ee.RGBA:e===ee.HSL?ee.HSLA:e===ee.HSV?ee.HSVA:e}function ie(e){return e===Z.HEXA?Z.HEX:e===Z.RGBA_CSS?Z.RGB_CSS:e===Z.HSLA_CSS?Z.HSL_CSS:e===ee.RGBA?ee.RGB:e===ee.HSLA?ee.HSL:e===ee.HSVA?ee.HSV:e}
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
	 * v1.4.2
	 */const le={swatch:"swatch",noColorSwatch:"swatch--no-color",checker:"checker"},se={borderLight:"rgba(0, 0, 0, 0.3)",borderDark:"rgba(255, 255, 255, 0.15)"},ce=4,he={squareSize:ce,size:2*ce},ue="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}",ge=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(e){this.internalColor=e?E(e):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const e=!this.internalColor,r={[le.swatch]:!0,[le.noColorSwatch]:e};return t.h("svg",{class:r,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:e,el:n,internalColor:a}=this,o=e?"100%":"0",i={height:"100%",rx:o,stroke:"light"===r.getModeName(n)?se.borderLight:se.borderDark,"stroke-width":"2",width:"100%"};if(!a)return t.h(t.Fragment,null,t.h("clipPath",{id:"shape"},t.h("rect",{height:"100%",rx:o,width:"100%"})),t.h("rect",{"clip-path":`inset(0 round ${o})`,rx:o,...i}),t.h("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const l=a.alpha(),s=X(a),c=X(a,l<1);return t.h(t.Fragment,null,t.h("title",null,c),t.h("defs",null,t.h("pattern",{height:he.size,id:"checker",patternUnits:"userSpaceOnUse",width:he.size,x:"0",y:"0"},t.h("rect",{class:le.checker,height:he.squareSize,width:he.squareSize,x:"0",y:"0"}),t.h("rect",{class:le.checker,height:he.squareSize,width:he.squareSize,x:he.squareSize,y:he.squareSize}))),t.h("rect",{fill:"url(#checker)",height:"100%",rx:o,width:"100%"}),t.h("rect",{fill:s,style:{"clip-path":l<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${o})`},...i}),l<1?t.h("rect",{fill:c,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...i}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return ue}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]}]);function de(){if("undefined"==typeof customElements)return;["calcite-color-picker-swatch"].forEach((e=>{if("calcite-color-picker-swatch"===e)customElements.get(e)||customElements.define(e,ge)}))}de(),e.CSSColorMode=Z,e.ColorPickerSwatch=ge,e.alphaCompatible=ae,e.alphaToOpacity=R,e.color=E,e.colorEqual=ne,e.defineCustomElement=de,e.hexChar=O,e.hexify=X,e.isLonghandHex=V,e.isValidHex=I,e.normalizeAlpha=J,e.normalizeColor=K,e.normalizeHex=U,e.opacityToAlpha=D,e.parseMode=te,e.rgbToHex=W,e.toAlphaMode=oe,e.toNonAlphaMode=ie}));
