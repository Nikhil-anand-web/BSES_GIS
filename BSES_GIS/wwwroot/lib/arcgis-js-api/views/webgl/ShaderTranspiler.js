/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/has","./enums","./reservedWordsGLSL3","./testUtils","../../chunks/builtins"],(function(t,e,a,r,n,o){"use strict";var i=999,s=9999,c=0,d=1,p=2,u=3,f=4,l=5,h=6,y=7,g=8,w=9,b=10,k=11,E=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function _(){var t,e,a,r=0,n=0,_=i,m=[],v=[],T=1,S=0,j=0,A=!1,x=!1,D="";return function(t){return v=[],null!==t?G(t.replace?t.replace(/\r\n/g,"\n"):t):X()};function R(t){t.length&&v.push({type:E[_],data:t,position:j,line:T,column:S})}function G(e){var o;for(r=0,a=(D+=e).length;t=D[r],r<a;){switch(o=r,_){case c:r=H();break;case d:r=C();break;case p:r=M();break;case u:r=P();break;case f:r=N();break;case k:r=V();break;case l:r=W();break;case s:r=$();break;case w:r=L();break;case i:r=F()}if(o!==r)if("\n"===D[o])S=0,++T;else++S}return n+=r,D=D.slice(r),v}function X(t){return m.length&&R(m.join("")),_=b,R("(eof)"),v}function F(){return m=m.length?[]:m,"/"===e&&"*"===t?(j=n+r-1,_=c,e=t,r+1):"/"===e&&"/"===t?(j=n+r-1,_=d,e=t,r+1):"#"===t?(_=p,j=n+r,r):/\s/.test(t)?(_=w,j=n+r,r):(A=/\d/.test(t),x=/[^\w_]/.test(t),j=n+r,_=A?f:x?u:s,r)}function L(){return/[^\s]/g.test(t)?(R(m.join("")),_=i,r):(m.push(t),e=t,r+1)}function M(){return"\r"!==t&&"\n"!==t||"\\"===e?(m.push(t),e=t,r+1):(R(m.join("")),_=i,r)}function C(){return M()}function H(){return"/"===t&&"*"===e?(m.push(t),R(m.join("")),_=i,r+1):(m.push(t),e=t,r+1)}function P(){if("."===e&&/\d/.test(t))return _=l,r;if("/"===e&&"*"===t)return _=c,r;if("/"===e&&"/"===t)return _=d,r;if("."===t&&m.length){for(;O(m););return _=l,r}if(";"===t||")"===t||"("===t){if(m.length)for(;O(m););return R(t),_=i,r+1}var a=2===m.length&&"="!==t;if(/[\w_\d\s]/.test(t)||a){for(;O(m););return _=i,r}return m.push(t),e=t,r+1}function O(t){for(var e,a,r=0;;){if(e=o.operators.indexOf(t.slice(0,t.length+r).join("")),a=o.operators[e],-1===e){if(r--+t.length>0)continue;a=t.slice(0,1).join("")}return R(a),j+=a.length,(m=m.slice(a.length)).length}}function V(){return/[^a-fA-F0-9]/.test(t)?(R(m.join("")),_=i,r):(m.push(t),e=t,r+1)}function N(){return"."===t||/[eE]/.test(t)?(m.push(t),_=l,e=t,r+1):"x"===t&&1===m.length&&"0"===m[0]?(_=k,m.push(t),e=t,r+1):/[^\d]/.test(t)?(R(m.join("")),_=i,r):(m.push(t),e=t,r+1)}function W(){return"f"===t&&(m.push(t),e=t,r+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(m.push(t),e=t,r+1):/[^\d]/.test(t)?(R(m.join("")),_=i,r):(m.push(t),e=t,r+1)}function $(){if(/[^\d\w_]/.test(t)){var a=m.join("");return _=o.literals.indexOf(a)>-1?g:o.builtins.indexOf(a)>-1?y:h,R(m.join("")),_=i,r}return m.push(t),e=t,r+1}}function m(t){var e=_(),a=[];return a=(a=a.concat(e(t))).concat(e(null))}function v(t){return m(t)}function T(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}const S=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function j(t,e="100",a="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replaceAll(/\s\s+/g," ");if(r===a)return r;if(r===e)return n.data="#version "+a,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function A(t,e){for(let a=e-1;a>=0;a--){const e=t[a];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function x(t,e,a,r){r=r||a;for(const n of t)if("ident"===n.type&&n.data===a){r in e?e[r]++:e[r]=0;return x(t,e,r+"_"+e[r],r)}return a}function D(t,e,a="afterVersion"){function r(t,e){for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&";"===e.data)return a}return null}function n(t){let e=-1,n=0,o=-1;for(let i=0;i<t.length;i++){const s=t[i];if("preprocessor"===s.type&&(/\#(if|ifdef|ifndef)\s+.+/.test(s.data)?++n:/\#endif\s*.*/.test(s.data)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===a&&"keyword"===s.type&&"precision"===s.data){const e=r(t,i);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=i)}return e+1}const o={data:"\n",type:"whitespace"},i=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=n(t);i(s-1)&&t.splice(s++,0,o);for(const c of e)t.splice(s++,0,c);i(s-1)&&i(s)&&t.splice(s,0,o)}function R(t,e,a,r="lowp"){D(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function G(t,e,a,r,n="lowp"){D(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function X(t,e){let a,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(a=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return a&&r&&t.splice(a,r-a+1),n}function F(t,e){if(t.startsWith("#version 300"))return t;const n=M(t);if(null!=n)return n;const o=v(t);if("300 es"===j(o,"100","300 es"))return t;let i=null,s=null;const c={},d={};for(let p=0;p<o.length;++p){const t=o[p];switch(t.type){case"keyword":e===a.ShaderType.VERTEX_SHADER&&"attribute"===t.data?t.data="in":"varying"===t.data&&(t.data=e===a.ShaderType.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(t.data.trim())&&(t.data=t.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===a.ShaderType.FRAGMENT_SHADER&&"gl_FragColor"===t.data&&(i||(i=x(o,c,"fragColor"),R(o,i,"vec4")),t.data=i),e===a.ShaderType.FRAGMENT_SHADER&&"gl_FragData"===t.data){const e=X(o,p+1),a=x(o,c,"fragData");G(o,a,"vec4",e,"mediump"),t.data=a}else e===a.ShaderType.FRAGMENT_SHADER&&"gl_FragDepthEXT"===t.data&&(s||(s=x(o,c,"gl_FragDepth")),t.data=s);break;case"ident":if(r.includes(t.data)){if(e===a.ShaderType.VERTEX_SHADER&&A(o,p))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");t.data in d||(d[t.data]=x(o,c,t.data)),t.data=d[t.data]}}}for(let a=o.length-1;a>=0;--a){const t=o[a];if("preprocessor"===t.type){const e=t.data.match(/\#extension\s+(.*)\:/);if(e&&e[1]&&S.includes(e[1].trim())){const t=o[a+1];o.splice(a,t&&"whitespace"===t.type?2:1)}const r=t.data.match(/\#ifdef\s+(.*)/);r&&r[1]&&S.includes(r[1].trim())&&(t.data="#if 1");const n=t.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&S.includes(n[1].trim())&&(t.data="#if 0")}}return C(t,T(o))}const L=new Map;function M(t){return n.shaderTranspiler.enableCache?L.get(t):null}function C(t,e){return n.shaderTranspiler.enableCache&&L.set(t,e),e}t.transpileShader=F,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
