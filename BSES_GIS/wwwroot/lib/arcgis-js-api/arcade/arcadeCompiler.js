/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../chunks/_rollupPluginBabelHelpers","./Dictionary","./Feature","../chunks/languageUtils","./treeAnalysis","../chunks/array","./functions/date","./functions/geometry","./functions/geomsync","./functions/maths","./functions/stats","./functions/string","../core/promiseUtils","../geometry/Geometry","../geometry/SpatialReference","./ArcadeModuleLoader","./ArcadeModule","./FunctionWrapper","./executionError"],(function(e,n,r,t,o,l,a,i,c,s,u,d,p,m,g,f,E,h,y,b,x){"use strict";let S=function(e){function n(n,r){var t;return(t=e.call(this)||this).paramCount=r,t.fn=n,t}r._inherits(n,e);var t=n.prototype;return t.createFunction=function(e){return(...n)=>{if(n.length!==this.paramCount)throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,null);return this.fn(...n)}},t.call=function(e,n){return this.fn(...n.arguments)},t.marshalledCall=function(e,n,r,t){return t(e,n,((n,o,a)=>{a=a.map((n=>!l.isFunctionParameter(n)||n instanceof b.ScopeMarshalledFunction?n:b.wrapModuleScopedResponse(n,e,t)));const i=this.call(r,{arguments:a});return g.isPromiseLike(i)?i.then((e=>b.wrapModuleScopedResponse(e,r,t))):i}))},r._createClass(n)}(b.ArcadeFunction);function w(e,n){const r=[];for(let t=0;t<n.arguments.length;t++)r.push(v(e,n.arguments[t]));return r}function C(e,n,r){try{return r(e,null,n.arguments)}catch(t){throw t}}function v(e,n){try{switch(n.type){case"EmptyStatement":return"lc.voidOperation";case"VariableDeclarator":return T(e,n);case"VariableDeclaration":return j(e,n);case"BlockStatement":case"Program":return G(e,n);case"FunctionDeclaration":return D(e,n);case"ImportDeclaration":return L(e,n);case"ExportNamedDeclaration":return P(e,n);case"ReturnStatement":return $(e,n);case"IfStatement":return B(e,n);case"ExpressionStatement":return k(e,n);case"AssignmentExpression":return _(e,n);case"UpdateExpression":return N(e,n);case"BreakStatement":return"break";case"ContinueStatement":return"continue";case"TemplateLiteral":return V(e,n);case"TemplateElement":return JSON.stringify(n.value?n.value.cooked:"");case"ForStatement":return I(e,n);case"ForInStatement":return M(e,n);case"WhileStatement":return O(e,n);case"Identifier":return z(e,n);case"MemberExpression":return K(e,n);case"Literal":return null===n.value||void 0===n.value?"null":JSON.stringify(n.value);case"CallExpression":return Y(e,n);case"UnaryExpression":return q(e,n);case"BinaryExpression":return J(e,n);case"LogicalExpression":return H(e,n);case"ArrayExpression":return W(e,n);case"ObjectExpression":return A(e,n);case"Property":return F(e,n);case"Array":throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.NeverReach,n);default:throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.Unrecognised,n)}}catch(r){throw r}}function A(e,n){let r="lang.dictionary([";for(let t=0;t<n.properties.length;t++){const o=n.properties[t];U(o.key.name);t>0&&(r+=","),r+="lang.strCheck("+("Identifier"===o.key.type?"'"+o.key.name+"'":v(e,o.key))+",'ObjectExpression'),lang.aCheck("+v(e,o.value)+", 'ObjectExpression')"}return r+="])",r}function F(e,n){throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.NeverReach,n)}function M(e,n){const r=re(e),t=re(e),o=re(e);let l="var "+r+" = "+v(e,n.right)+";\n";"VariableDeclaration"===n.left.type&&(l+=v(e,n.left));let a="VariableDeclaration"===n.left.type?n.left.declarations[0].id.name:n.left.name;a=a.toLowerCase(),U(a);let i="";null!==e.localScope&&(void 0!==e.localScope[a]?i="lscope['"+a+"']":void 0!==e.localScope._SymbolsMap[a]&&(i="lscope['"+e.localScope._SymbolsMap[a]+"']"));let c="";if(""===i)if(void 0!==e.globalScope[a])i="gscope['"+a+"']";else if(void 0!==e.globalScope._SymbolsMap[a])i="gscope['"+e.globalScope._SymbolsMap[a]+"']";else if(null!==e.localScope)if(e.undeclaredGlobalsInFunctions.has(a))i="gscope['"+e.undeclaredGlobalsInFunctions.get(a).manglename+"']",c=e.undeclaredGlobalsInFunctions.get(a).manglename;else{const r={manglename:ne(e),node:n.left};e.undeclaredGlobalsInFunctions.set(a,r),i="gscope['"+r.manglename+"']",c=r.manglename}return c&&(l+="lang.chkAssig('"+c+"',runtimeCtx); \n"),l+="if ("+r+"===null) {  lastStatement = lc.voidOperation; }\n ",l+="else if (lc.isArray("+r+") || lc.isString("+r+")) {",l+="var "+t+"="+r+".length; \n",l+="for(var "+o+"=0; "+o+"<"+t+"; "+o+"++) {\n",l+=i+"="+o+";\n",l+=v(e,n.body),l+="\n}\n",l+=" lastStatement = lc.voidOperation; \n",l+=" \n}\n",l+="else if (lc.isImmutableArray("+r+")) {",l+="var "+t+"="+r+".length(); \n",l+="for(var "+o+"=0; "+o+"<"+t+"; "+o+"++) {\n",l+=i+"="+o+";\n",l+=v(e,n.body),l+="\n}\n",l+=" lastStatement = lc.voidOperation; \n",l+=" \n}\n",l+="else if (( "+r+" instanceof lang.Dictionary) || ( "+r+" instanceof lang.Feature)) {",l+="var "+t+"="+r+".keys(); \n",l+="for(var "+o+"=0; "+o+"<"+t+".length; "+o+"++) {\n",l+=i+"="+t+"["+o+"];\n",l+=v(e,n.body),l+="\n}\n",l+=" lastStatement = lc.voidOperation; \n",l+=" \n}\n",e.isAsync&&(l+="else if (lc.isFeatureSet("+r+")) {",l+="var "+t+"="+r+".iterator(runtimeCtx.abortSignal); \n",l+="for(var "+o+"=lang. graphicToFeature( yield "+t+".next(),"+r+", runtimeCtx); "+o+"!=null; "+o+"=lang. graphicToFeature( yield "+t+".next(),"+r+", runtimeCtx)) {\n",l+=i+"="+o+";\n",l+=v(e,n.body),l+="\n}\n",l+=" lastStatement = lc.voidOperation; \n",l+=" \n}\n"),l+="else { lastStatement = lc.voidOperation; } \n",l}function I(e,n){let r="lastStatement = lc.voidOperation; \n";null!==n.init&&(r+=v(e,n.init)+"; ");const t=re(e),o=re(e);return r+="var "+t+" = true; ",r+="\n do { ",null!==n.update&&(r+=" if ("+t+"===false) {\n "+v(e,n.update)+"  \n}\n "+t+"=false; \n"),null!==n.test&&(r+="var "+o+" = "+v(e,n.test)+"; ",r+="if ("+o+"===false) { break; } else if ("+o+"!==true) { lang.error('"+x.ExecutionErrorCodes.BooleanConditionRequired+"');   }\n"),r+=v(e,n.body),null!==n.update&&(r+="\n "+v(e,n.update)),r+="\n"+t+" = true; \n} while(true);  lastStatement = lc.voidOperation; ",r}function N(e,n){let r=null,t="";if("MemberExpression"===n.argument.type)return r=v(e,n.argument.object),!0===n.argument.computed?t=v(e,n.argument.property):(t="'"+n.argument.property.name+"'",U(n.argument.property.name)),"lang.memberupdate("+r+","+t+",'"+n.operator+"',"+n.prefix+")";if(r=n.argument.name.toLowerCase(),U(r),null!==e.localScope){if(void 0!==e.localScope[r])return"lang.update(lscope, '"+r+"','"+n.operator+"',"+n.prefix+")";if(void 0!==e.localScope._SymbolsMap[r])return"lang.update(lscope, '"+e.localScope._SymbolsMap[r]+"','"+n.operator+"',"+n.prefix+")"}if(void 0!==e.globalScope[r])return"lang.update(gscope, '"+r+"','"+n.operator+"',"+n.prefix+")";if(void 0!==e.globalScope._SymbolsMap[r])return"lang.update(gscope, '"+e.globalScope._SymbolsMap[r]+"','"+n.operator+"',"+n.prefix+")";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(r))return"lang.update(gscope,lang.chkAssig( '"+e.undeclaredGlobalsInFunctions.get(r).manglename+"',runtimeCtx),'"+n.operator+"',"+n.prefix+")";const t={manglename:ne(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(r,t),"lang.update(gscope, lang.chkAssig('"+t.manglename+"',runtimeCtx),'"+n.operator+"',"+n.prefix+")"}throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.InvalidIdentifier,n)}function O(e,n){let r="lastStatement = lc.voidOperation; \n";const t=re(e);return r+=`\n  var ${t} = true;\n    do {\n      ${t} = ${v(e,n.test)};\n      if (${t}==false) {\n        break;\n      }\n      if (${t}!==true) {\n        lang.error('${x.ExecutionErrorCodes.BooleanConditionRequired}');\n      }\n      ${v(e,n.body)}\n    }\n    while (${t} !== false);\n    lastStatement = lc.voidOperation;\n  `,r}function _(e,n){const r=v(e,n.right);let t=null,o="";if("MemberExpression"===n.left.type)return t=v(e,n.left.object),!0===n.left.computed?o=v(e,n.left.property):(o="'"+n.left.property.name+"'",U(n.left.property.name)),"lang.assignmember("+t+","+o+",'"+n.operator+"',"+r+")";if(t=n.left.name.toLowerCase(),U(t),null!==e.localScope){if(void 0!==e.localScope[t])return"lscope['"+t+"']=lang.assign("+r+",'"+n.operator+"', lscope['"+t+"'])";if(void 0!==e.localScope._SymbolsMap[t])return"lscope['"+e.localScope._SymbolsMap[t]+"']=lang.assign("+r+",'"+n.operator+"', lscope['"+e.localScope._SymbolsMap[t]+"'])"}if(void 0!==e.globalScope[t])return"gscope['"+t+"']=lang.assign("+r+",'"+n.operator+"', gscope['"+t+"'])";if(void 0!==e.globalScope._SymbolsMap[t])return"gscope['"+e.globalScope._SymbolsMap[t]+"']=lang.assign("+r+",'"+n.operator+"', gscope['"+e.globalScope._SymbolsMap[t]+"'])";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(t))return"gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(t).manglename+"',runtimeCtx)]=lang.assign("+r+",'"+n.operator+"', gscope['"+e.undeclaredGlobalsInFunctions.get(t).manglename+"'])";const o={manglename:ne(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(t,o),"gscope[lang.chkAssig('"+o.manglename+"',runtimeCtx)]=lang.assign("+r+",'"+n.operator+"', gscope['"+o.manglename+"'])"}throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.InvalidIdentifier,n)}function k(e,n){return"AssignmentExpression"===n.expression.type?"lastStatement = lc.voidOperation; "+v(e,n.expression)+"; \n ":(n.expression.type,"lastStatement = "+v(e,n.expression)+"; ")}function R(e,n){return"BlockStatement"===n.type?v(e,n):"ReturnStatement"===n.type||"BreakStatement"===n.type||"ContinueStatement"===n.type?v(e,n)+"; ":"UpdateExpression"===n.type?"lastStatement = "+v(e,n)+"; ":"ExpressionStatement"===n.type?v(e,n):"ObjectExpression"===n.type?"lastStatement = "+v(e,n)+"; ":v(e,n)+"; "}function B(e,n){if("AssignmentExpression"===n.test.type||"UpdateExpression"===n.test.type)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.BooleanConditionRequired,n);return`if (lang.mustBoolean(${v(e,n.test)}, runtimeCtx) === true) {\n    ${R(e,n.consequent)}\n  } `+(null!==n.alternate?"IfStatement"===n.alternate.type?" else "+B(e,n.alternate):` else {\n      ${R(e,n.alternate)}\n    }\n`:" else {\n      lastStatement = lc.voidOperation;\n    }\n")}function G(e,n){let r="";for(let t=0;t<n.body.length;t++)"EmptyStatement"!==n.body[t].type&&("ReturnStatement"===n.body[t].type||"BreakStatement"===n.body[t].type||"ContinueStatement"===n.body[t].type?r+=v(e,n.body[t])+"; \n":"UpdateExpression"===n.body[t].type||"ObjectExpression"===n.body[t].type?r+="lastStatement = "+v(e,n.body[t])+"; \n":r+=v(e,n.body[t])+" \n");return r}function $(e,n){if(null===n.argument)return"return lc.voidOperation";return"return "+v(e,n.argument)}function L(e,n){const r=n.specifiers[0].local.name.toLowerCase();U(r);const t=e.libraryResolver?.loadLibrary(r),o=ne(e);void 0===e.moduleFactory[t.uri]&&(e.moduleFactory[t.uri]=ye(t.syntax,{interceptor:e.interceptor,services:e.services,moduleFactory:e.moduleFactory,lrucache:e.lrucache,timeReference:e.timeReference??null,libraryResolver:e.libraryResolver,customfunctions:e.customfunctions,vars:{}},e.isAsync)),e.moduleFactoryMap[o]=t.uri;let l="";if(l=e.isAsync?"(yield lang.loadModule('"+o+"', runtimeCtx) ); ":"lang.loadModule('"+o+"', runtimeCtx); ",void 0!==e.globalScope[r])return"gscope['"+r+"']="+l;if(void 0!==e.globalScope._SymbolsMap[r])return"gscope['"+e.globalScope._SymbolsMap[r]+"']="+l;let a="";return e.undeclaredGlobalsInFunctions.has(r)?(a=e.undeclaredGlobalsInFunctions.get(r).manglename,e.undeclaredGlobalsInFunctions.delete(r)):a=ne(e),e.globalScope._SymbolsMap[r]=a,e.mangleMap[r]=a,"gscope[lang.setAssig('"+a+"', runtimeCtx)]="+l}function P(e,n){const r=v(e,n.declaration);if("FunctionDeclaration"===n.declaration.type)e.exports[n.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===n.declaration.type)for(const t of n.declaration.declarations)e.exports[t.id.name.toLowerCase()]="variable";return r}function U(e){if("iif"===e)throw new x.ArcadeUncompilableError;if("decode"===e)throw new x.ArcadeUncompilableError;if("when"===e)throw new x.ArcadeUncompilableError}function D(e,n){const r=n.id.name.toLowerCase();U(r);let t="",o=!1;void 0!==e.globalScope[r]?t=r:void 0!==e.globalScope._SymbolsMap[r]?t=e.globalScope._SymbolsMap[r]:e.undeclaredGlobalsInFunctions.has(r)?(t=e.undeclaredGlobalsInFunctions.get(r).manglename,e.globalScope._SymbolsMap[r]=t,e.mangleMap[r]=t,e.undeclaredGlobalsInFunctions.delete(r),o=!0):(t=ne(e),e.globalScope._SymbolsMap[r]=t,e.mangleMap[r]=t);const l={isAsync:e.isAsync,console:e.console,exports:e.exports,undeclaredGlobalsInFunctions:e.undeclaredGlobalsInFunctions,customfunctions:e.customfunctions,moduleFactory:e.moduleFactory,moduleFactoryMap:e.moduleFactoryMap,libraryResolver:e.libraryResolver,lrucache:e.lrucache,interceptor:e.interceptor,services:e.services,symbols:e.symbols,mangleMap:e.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:e.depthCounter,globalScope:e.globalScope};let a="new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";for(let i=0;i<n.params.length;i++){const r=n.params[i].name.toLowerCase();U(r);const t=ne(e);l.localScope._SymbolsMap[r]=t,l.mangleMap[r]=t,a+="lscope['"+t+"']=arguments["+i.toString()+"];\n"}return!0===e.isAsync?(a+="return lang.__awaiter(this, void 0, void 0, function* () {\n",a+=G(l,n.body)+"\n return lastStatement; ",a+="});  }",a+=", runtimeCtx),"+n.params.length+")",a+="\n lastStatement = lc.voidOperation; \n"):(a+=G(l,n.body)+"\n return lastStatement; }, runtimeCtx),"+n.params.length+")",a+="\n lastStatement = lc.voidOperation; \n"),o?"gscope[lang.setAssig('"+t+"', runtimeCtx)]="+a:"gscope['"+t+"']="+a}function j(e,n){const r=[];for(let t=0;t<n.declarations.length;t++)r.push(v(e,n.declarations[t]));return r.join("\n")+" \n lastStatement=  lc.voidOperation; \n"}function T(e,n){let r=null===n.init?null:v(e,n.init);r===l.voidOperation&&(r=null);const t=n.id.name.toLowerCase();if(U(t),null!==e.localScope){if(void 0!==e.localScope[t])return"lscope['"+t+"']="+r+"; ";if(void 0!==e.localScope._SymbolsMap[t])return"lscope['"+e.localScope._SymbolsMap[t]+"']="+r+"; ";{const n=ne(e);return e.localScope._SymbolsMap[t]=n,e.mangleMap[t]=n,"lscope['"+n+"']="+r+"; "}}if(void 0!==e.globalScope[t])return"gscope['"+t+"']="+r+"; ";if(void 0!==e.globalScope._SymbolsMap[t])return"gscope['"+e.globalScope._SymbolsMap[t]+"']="+r+"; ";if(e.undeclaredGlobalsInFunctions.has(t)){const n=e.undeclaredGlobalsInFunctions.get(t).manglename;return e.globalScope._SymbolsMap[t]=n,e.mangleMap[t]=n,e.undeclaredGlobalsInFunctions.delete(t),"gscope[lang.setAssig('"+n+"', runtimeCtx)]="+r+"; "}const o=ne(e);return e.globalScope._SymbolsMap[t]=o,e.mangleMap[t]=o,"gscope['"+o+"']="+r+"; "}function K(e,n){try{let r;return!0===n.computed?r=v(e,n.property):(r="'"+n.property.name+"'",U(n.property.name)),"lang.member("+v(e,n.object)+","+r+")"}catch(r){throw r}}function q(e,n){try{return"lang.unary("+v(e,n.argument)+",'"+n.operator+"')"}catch(r){throw r}}function W(e,n){try{const r=[];for(let t=0;t<n.elements.length;t++)"Literal"===n.elements[t].type?r.push(v(e,n.elements[t])):r.push("lang.aCheck("+v(e,n.elements[t])+",'ArrayExpression')");return"["+r.join(",")+"]"}catch(r){throw r}}function V(e,n){try{const r=[];let t=0;for(const o of n.quasis)r.push(o.value?JSON.stringify(o.value.cooked):JSON.stringify("")),!1===o.tail&&(r.push(n.expressions[t]?"lang.castString(lang.aCheck("+v(e,n.expressions[t])+", 'TemplateLiteral'))":""),t++);return"(["+r.join(",")+"]).join('')"}catch(r){throw r}}function J(e,n){try{return"lang.binary("+v(e,n.left)+","+v(e,n.right)+",'"+n.operator+"')"}catch(r){throw r}}function H(e,n){try{if("AssignmentExpression"===n.left.type||"UpdateExpression"===n.left.type)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,n);if("AssignmentExpression"===n.right.type||"UpdateExpression"===n.right.type)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,n);if("&&"===n.operator||"||"===n.operator)return"(lang.logicalCheck("+v(e,n.left)+") "+n.operator+" lang.logicalCheck("+v(e,n.right)+"))";throw new x.ArcadeCompilationError(null,x.ExecutionErrorCodes.LogicExpressionOrAnd,null)}catch(r){throw r}}function z(e,n){try{const r=n.name.toLowerCase();if(U(r),null!==e.localScope){if(void 0!==e.localScope[r])return"lscope['"+r+"']";if(void 0!==e.localScope._SymbolsMap[r])return"lscope['"+e.localScope._SymbolsMap[r]+"']"}if(void 0!==e.globalScope[r])return"gscope['"+r+"']";if(void 0!==e.globalScope._SymbolsMap[r])return"gscope['"+e.globalScope._SymbolsMap[r]+"']";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(r))return"gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(r).manglename+"',runtimeCtx)]";const t={manglename:ne(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(r,t),"gscope[lang.chkAssig('"+t.manglename+"',runtimeCtx)]"}throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.InvalidIdentifier,n)}catch(r){throw r}}function Y(e,n){try{if("MemberExpression"===n.callee.type){let r;!0===n.callee.computed?r=v(e,n.callee.property):(r="'"+n.callee.property.name+"'",U(n.callee.property.name));let t="[";for(let o=0;o<n.arguments.length;o++)o>0&&(t+=", "),t+=v(e,n.arguments[o]);return t+="]",e.isAsync?"(yield lang.callModuleFunction("+v(e,n.callee.object)+","+t+","+r+",runtimeCtx))":"lang.callModuleFunction("+v(e,n.callee.object)+","+t+","+r+",runtimeCtx)"}if("Identifier"!==n.callee.type)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.FunctionNotFound,n);const r=n.callee.name.toLowerCase();if("iif"===r)return Q(e,n);if("when"===r)return X(e,n);if("decode"===r)return Z(e,n);let t="";if(null!==e.localScope&&(void 0!==e.localScope[r]?t="lscope['"+r+"']":void 0!==e.localScope._SymbolsMap[r]&&(t="lscope['"+e.localScope._SymbolsMap[r]+"']")),""===t)if(void 0!==e.globalScope[r])t="gscope['"+r+"']";else if(void 0!==e.globalScope._SymbolsMap[r])t="gscope['"+e.globalScope._SymbolsMap[r]+"']";else if(null!==e.localScope)if(e.undeclaredGlobalsInFunctions.has(r))t="gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(r).manglename+"',runtimeCtx)]";else{const o={manglename:ne(e),node:n.argument};e.undeclaredGlobalsInFunctions.set(r,o),t="gscope[lang.chkAssig('"+o.manglename+"',runtimeCtx)]"}if(""!==t){let r="[";for(let t=0;t<n.arguments.length;t++)t>0&&(r+=", "),r+=v(e,n.arguments[t]);return r+="]",e.isAsync?"(yield lang.callfunc("+t+","+r+",runtimeCtx) )":"lang.callfunc("+t+","+r+",runtimeCtx)"}throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.FunctionNotFound,n)}catch(r){throw r}}function Q(e,n){try{if(3!==n.arguments.length)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,n);const r=re(e);return`${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        var ${r} = ${v(e,n.arguments[0])};\n\n        if (${r} === true) {\n          return  ${v(e,n.arguments[1])};\n        }\n        else if (${r} === false) {\n          return ${v(e,n.arguments[2])};\n        }\n        else {\n          lang.error('ExecutionErrorCodes.BooleanConditionRequired');\n        }\n      ${e.isAsync?"})}()))":"}()"}`}catch(r){throw r}}function X(e,n){try{if(n.arguments.length<3)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,n);if(n.arguments.length%2==0)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,n);const r=re(e);let t="var ";for(let o=0;o<n.arguments.length-1;o+=2)t+=`${r} = lang.mustBoolean(${v(e,n.arguments[o])}, runtimeCtx);\n      if (${r} === true ) {\n        return ${v(e,n.arguments[o+1])}\n      }\n`;return`${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        ${t}\n        return ${v(e,n.arguments[n.arguments.length-1])}\n        ${e.isAsync?"})}()))":"}()"}`}catch(r){throw r}}function Z(e,n){try{if(n.arguments.length<2)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,n);if(2===n.arguments.length)return`(${v(e,n.arguments[1])})`;if((n.arguments.length-1)%2==0)throw new x.ArcadeCompilationError(e,x.ExecutionErrorCodes.WrongNumberOfParameters,n);const r=re(e),t=re(e);let o="var ";for(let l=1;l<n.arguments.length-1;l+=2)o+=`${t} = ${v(e,n.arguments[l])};\n      if (lang.binary(${t}, ${r}, "==") === true ) {\n        return ${v(e,n.arguments[l+1])}\n      }\n`;return`${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        var ${r} = ${v(e,n.arguments[0])};\n        ${o}\n        return ${v(e,n.arguments[n.arguments.length-1])}\n        ${e.isAsync?"})}()))":"}()"}`}catch(r){throw r}}const ee={};function ne(e){return e.symbols.symbolCounter++,"_T"+e.symbols.symbolCounter.toString()}function re(e){return e.symbols.symbolCounter++,"_Tvar"+e.symbols.symbolCounter.toString()}c.registerFunctions(ee,C),m.registerFunctions(ee,C),d.registerFunctions(ee,C),s.registerFunctions(ee,C),p.registerFunctions(ee,C),ee.iif=function(e,n){try{return C(e,n,((r,t,o)=>{throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.Unrecognised,n)}))}catch(r){throw r}},ee.decode=function(e,n){try{return C(e,n,((r,t,o)=>{throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.Unrecognised,n)}))}catch(r){throw r}},ee.when=function(e,n){try{return C(e,n,((r,t,o)=>{throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.Unrecognised,n)}))}catch(r){throw r}};const te={};for(const be in ee)te[be]=new b.NativeFunction(ee[be]);u.registerFunctions(ee,C);for(const be in ee)ee[be]=new b.NativeFunction(ee[be]);const oe=function(){};oe.prototype=ee;const le=function(){};function ae(e,n,r){const t={};e||(e={}),r||(r={}),t._SymbolsMap={},t.textformatting=1,t.infinity=1,t.pi=1;for(const o in n)t[o]=1;for(const o in r)t[o]=1;for(const o in e)t[o]=1;return t}function ie(e,n,r,l){const a=r?new le:new oe;e||(e={}),n||(n={});const i=new t({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});i.immutable=!1,a._SymbolsMap={textformatting:1,infinity:1,pi:1},a.textformatting=i,a.infinity=Number.POSITIVE_INFINITY,a.pi=Math.PI;for(const t in n)a[t]=n[t],a._SymbolsMap[t]=1;for(const t in e)a._SymbolsMap[t]=1,e[t]&&"esri.Graphic"===e[t].declaredClass?a[t]=o.createFromGraphic(e[t],l??null):a[t]=e[t];return a}le.prototype=te;const ce={fixSpatialReference:l.fixSpatialReference,parseArguments:w,standardFunction:C};function se(e,n){const r={mode:n,compiled:!0,functions:{},signatures:[],standardFunction:C,standardFunctionAsync:C,evaluateIdentifier:de};for(let t=0;t<e.length;t++)e[t].registerFunctions(r);if("sync"===n){for(const e in r.functions)ee[e]=new b.NativeFunction(r.functions[e]),oe.prototype[e]=ee[e];for(let e=0;e<r.signatures.length;e++)a.addFunctionDeclaration(r.signatures[e],"sync")}else{for(const e in r.functions)te[e]=new b.NativeFunction(r.functions[e]),le.prototype[e]=te[e];for(let e=0;e<r.signatures.length;e++)a.addFunctionDeclaration(r.signatures[e],"async")}}function ue(e,n){return e(n)}function de(e,n){const r=n.name;if("_SymbolsMap"===r)throw new x.ArcadeExecutionError(e,x.ExecutionErrorCodes.InvalidIdentifier,null);if(e.localStack.length>0){if("_t"!==r.substr(0,2).toLowerCase()&&void 0!==e.localStack[e.localStack.length-1][r])return e.localStack[e.localStack.length-1][r];const n=e.mangleMap[r];if(void 0!==n&&void 0!==e.localStack[e.localStack.length-1][n])return e.localStack[e.localStack.length-1][n]}if("_t"!==r.substr(0,2).toLowerCase()&&void 0!==e.globalScope[r])return e.globalScope[r];if(1===e.globalScope._SymbolsMap[r])return e.globalScope[r];const t=e.mangleMap[r];return void 0!==t?e.globalScope[t]:void 0}se([i.ArrayFunctions],"sync"),se([i.ArrayFunctions],"async");let pe=0;const me={error(e){throw new x.ArcadeExecutionError(null,e,null)},__awaiter:(e,n,r,t)=>new Promise(((r,o)=>{function l(e){try{i(t.next(e))}catch(n){o(n)}}function a(e){try{i(t.throw(e))}catch(n){o(n)}}function i(e){e.done?r(e.value):e.value&&e.value.then?e.value.then(l,a):(pe++,pe%100==0?setTimeout((()=>{pe=0,l(e.value)}),0):l(e.value))}i((t=t.apply(e,n||[])).next())})),functionDepthchecker:(e,n)=>function(){if(n.depthCounter.depth++,n.localStack.push([]),n.depthCounter.depth>64)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.MaximumCallDepth,null);const r=e.apply(this,arguments);return g.isPromiseLike(r)?r.then((e=>(n.depthCounter.depth--,n.localStack.length=n.localStack.length-1,e))):(n.depthCounter.depth--,n.localStack.length=n.localStack.length-1,r)},chkAssig(e,n){if(void 0===n.gdefs[e])throw new x.ArcadeExecutionError(n,x.ExecutionErrorCodes.InvalidIdentifier,null);return e},mustBoolean(e,n){if(!0===e||!1===e)return e;throw new x.ArcadeExecutionError(n,x.ExecutionErrorCodes.BooleanConditionRequired,null)},setAssig:(e,n)=>(n.gdefs[e]=1,e),castString:e=>l.toString(e),aCheck(e,n){if(l.isFunctionParameter(e)){if("ArrayExpression"===n)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.NoFunctionInArray,null);if("ObjectExpression"===n)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.NoFunctionInDictionary,null);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.NoFunctionInTemplateLiteral,null)}return e===l.voidOperation?null:e},Dictionary:t,Feature:o,UserDefinedCompiledFunction:S,dictionary(e){const n={},r=new Map;for(let t=0;t<e.length;t+=2){if(l.isFunctionParameter(e[t+1]))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.NoFunctionInDictionary,null);if(!1===l.isString(e[t]))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyMustBeString,null);let o=e[t].toString();const a=o.toLowerCase();r.has(a)?o=r.get(a):r.set(a,o),e[t+1]===l.voidOperation?n[o]=null:n[o]=e[t+1]}const o=new t(n);return o.immutable=!1,o},strCheck(e){if(!1===l.isString(e))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyMustBeString,null);return e},unary(e,n){if(l.isBoolean(e)){if("!"===n)return!e;if("-"===n)return-1*l.toNumber(e);if("+"===n)return 1*l.toNumber(e);if("~"===n)return~l.toNumber(e);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.UnsupportedUnaryOperator,null)}if("-"===n)return-1*l.toNumber(e);if("+"===n)return 1*l.toNumber(e);if("~"===n)return~l.toNumber(e);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.UnsupportedUnaryOperator,null)},logicalCheck(e){if(!1===l.isBoolean(e))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.LogicExpressionOrAnd,null);return e},logical(e,n,r){if(l.isBoolean(e)&&l.isBoolean(n))switch(r){case"||":return e||n;case"&&":return e&&n;default:throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.LogicExpressionOrAnd,null)}throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.LogicExpressionOrAnd,null)},binary(e,n,r){switch(r){case"|":case"<<":case">>":case">>>":case"^":case"&":return l.binaryOperator(l.toNumber(e),l.toNumber(n),r);case"==":case"=":return l.equalityTest(e,n);case"!=":return!l.equalityTest(e,n);case"<":case">":case"<=":case">=":return l.greaterThanLessThan(e,n,r);case"+":return l.isString(e)||l.isString(n)?l.toString(e)+l.toString(n):l.toNumber(e)+l.toNumber(n);case"-":return l.toNumber(e)-l.toNumber(n);case"*":return l.toNumber(e)*l.toNumber(n);case"/":return l.toNumber(e)/l.toNumber(n);case"%":return l.toNumber(e)%l.toNumber(n);default:throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.UnsupportedOperator,null)}},assign(e,n,r){switch(n){case"=":return e===l.voidOperation?null:e;case"/=":return l.toNumber(r)/l.toNumber(e);case"*=":return l.toNumber(r)*l.toNumber(e);case"-=":return l.toNumber(r)-l.toNumber(e);case"+=":return l.isString(r)||l.isString(e)?l.toString(r)+l.toString(e):l.toNumber(r)+l.toNumber(e);case"%=":return l.toNumber(r)%l.toNumber(e);default:throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.UnsupportedOperator,null)}},update(e,n,r,t){const o=l.toNumber(e[n]);return e[n]="++"===r?o+1:o-1,!1===t?o:"++"===r?o+1:o-1},graphicToFeature:(e,n,r)=>null===e?null:o.createFromGraphicLikeObject(e.geometry,e.attributes,n,r.timeReference),memberupdate(e,n,r,o){let a;if(l.isArray(e)){if(!l.isNumber(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ArrayAccessorMustBeNumber,null);if(n<0&&(n=e.length+n),n<0||n>=e.length)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);a=l.toNumber(e[n]),e[n]="++"===r?a+1:a-1}else if(e instanceof t){if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0!==e.hasField(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.FieldNotFound,null,{key:n});a=l.toNumber(e.field(n)),e.setField(n,"++"===r?a+1:a-1)}else if(l.isFeature(e)){if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0!==e.hasField(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.FieldNotFound,null);a=l.toNumber(e.field(n)),e.setField(n,"++"===r?a+1:a-1)}else{if(l.isImmutableArray(e))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.Immutable,null);if(!(e instanceof he))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidIdentifier,null);if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ModuleAccessorMustBeString,null);if(!0!==e.hasGlobal(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ModuleExportNotFound,null);a=l.toNumber(e.global(n)),e.setGlobal(n,"++"===r?a+1:a-1)}return!1===o?a:"++"===r?a+1:a-1},assignmember(e,n,r,o){if(l.isArray(e)){if(!l.isNumber(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ArrayAccessorMustBeNumber,null);if(n<0&&(n=e.length+n),n<0||n>e.length)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);if(n===e.length){if("="!==r)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);e[n]=this.assign(o,r,e[n])}else e[n]=this.assign(o,r,e[n])}else if(e instanceof t){if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===e.hasField(n))e.setField(n,this.assign(o,r,e.field(n)));else{if("="!==r)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.FieldNotFound,null);e.setField(n,this.assign(o,r,null))}}else if(l.isFeature(e)){if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===e.hasField(n))e.setField(n,this.assign(o,r,e.field(n)));else{if("="!==r)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.FieldNotFound,null);e.setField(n,this.assign(o,r,null))}}else{if(l.isImmutableArray(e))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.Immutable,null);if(!(e instanceof he))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidIdentifier,null);if(!1===l.isString(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ModuleAccessorMustBeString,null);if(!e.hasGlobal(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.ModuleExportNotFound,null);e.setGlobal(n,this.assign(o,r,e.global(n)))}},member(e,n){if(null===e)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.MemberOfNull,null);if(e instanceof t||l.isFeature(e)){if(l.isString(n))return e.field(n);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}if(e instanceof f){if(l.isString(n))return s.geometryMember(e,n,null,null);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}if(l.isArray(e)){if(l.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=e.length+n),n>=e.length||n<0)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);return e[n]}throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}if(l.isString(e)){if(l.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=e.length+n),n>=e.length||n<0)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);return e[n]}throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}if(l.isImmutableArray(e)){if(l.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=e.length()+n),n>=e.length()||n<0)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.OutOfBounds,null);return e.get(n)}throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}if(e instanceof he){if(l.isString(n))return e.global(n);throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)}throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidMemberAccessKey,null)},callfunc:(e,n,r)=>e.call(r,{arguments:n,preparsed:!0}),loadModule(e,n){const r=n.moduleFactoryMap[e];if(n.moduleSingletons[r])return n.moduleSingletons[r];const t=n.moduleFactory[r]({vars:{},moduleSingletons:n.moduleSingletons,depthCounter:n.depthCounter,console:n.console,abortSignal:n.abortSignal,isAsync:n.isAsync,services:n.services,lrucache:n.lrucache,timeReference:n.timeReference??null,interceptor:n.interceptor},n.spatialReference);return n.moduleSingletons[r]=t,t},callModuleFunction(e,n,r,t){if(!(e instanceof he))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.FunctionNotFound,null);const o=e.global(r);if(!1===l.isFunctionParameter(o))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.CallNonFunction,null);return o.call(t,{preparsed:!0,arguments:n})}};function ge(e){console.log(e)}function fe(e,n,r=!1){null===n&&(n={vars:{},customfunctions:{}});let t=null;e.usesModules&&(t=new h.ArcadeModuleLoader(null,e.loadedModules));const o={isAsync:r,globalScope:ae(n.vars,r?te:ee,n.customfunctions),moduleFactory:{},moduleFactoryMap:{},undeclaredGlobalsInFunctions:new Map,customfunctions:n.customfunctions,libraryResolver:t,localScope:null,mangleMap:{},depthCounter:{depth:1},exports:{},console:ge,lrucache:n.lrucache,timeReference:n.timeReference??null,interceptor:n.interceptor,services:n.services,symbols:{symbolCounter:0}};let a=v(o,e);""===a&&(a="lc.voidOperation; "),o.undeclaredGlobalsInFunctions.size>0&&o.undeclaredGlobalsInFunctions.forEach((e=>{throw new x.ArcadeCompilationError(n,x.ExecutionErrorCodes.InvalidIdentifier,e.node)}));let i="";i=r?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+a+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+a+"\n return lastStatement; } \n return this.postProcess(mainBody()); ";const c=o.moduleFactory,s=o.moduleFactoryMap,u=o.exports,d={};for(const l in u)d[l]=void 0!==o.mangleMap[l]?o.mangleMap[l]:l;const p={lc:l.lc,lang:me,mangles:o.mangleMap,postProcess(e){if(e instanceof l.ReturnResult&&(e=e.value),e instanceof l.ImplicitResult&&(e=e.value),e===l.voidOperation&&(e=null),e===l.breakResult)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.IllegalResult,null);if(e===l.continueResult)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.IllegalResult,null);if(l.isFunctionParameter(e))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.IllegalResult,null);return e},prepare(e,n){let r=e.spatialReference;null==r&&(r=E.WebMercator);const t=ie(e.vars,e.customfunctions,n,e.timeReference);return{localStack:[],isAsync:n,moduleFactory:c,moduleFactoryMap:s,mangleMap:this.mangles,moduleSingletons:{},exports:u,gdefs:{},exportmangle:d,spatialReference:r,globalScope:t,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console??ge,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:{depth:1}}}};return new Function("context","spatialReference",i).bind(p)}async function Ee(){return se([await new Promise(((n,r)=>e(["./functions/geomasync"],n,r)))],"async"),!0}let he=function(e){function n(n){var r;return(r=e.call(this,null)||this).moduleContext=n,r}r._inherits(n,e);var t=n.prototype;return t.hasGlobal=function(e){return void 0===this.moduleContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.moduleContext.exports[e]},t.setGlobal=function(e,n){const r=this.moduleContext.globalScope,t=e.toLowerCase();if(l.isFunctionParameter(n))throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.AssignModuleFunction,null);r[this.moduleContext.exportmangle[t]]=n},t.global=function(e){const n=this.moduleContext.globalScope;e=e.toLowerCase();const r=n[this.moduleContext.exportmangle[e]];if(void 0===r)throw new x.ArcadeExecutionError(null,x.ExecutionErrorCodes.InvalidIdentifier,null);if(l.isFunctionParameter(r)&&!(r instanceof b.ScopeMarshalledFunction)){const t=new b.ScopeMarshalledFunction;return t.fn=r,t.parameterEvaluator=C,t.context=this.moduleContext,n[this.moduleContext.exportmangle[e]]=t,t}return r},r._createClass(n)}(y.ArcadeModule);function ye(e,n,r=!1){const t={isAsync:r,moduleFactory:n.moduleFactory,moduleFactoryMap:{},libraryResolver:new h.ArcadeModuleLoader(null,e.loadedModules),globalScope:ae(n.vars,r?te:ee,n.customfunctions),customfunctions:n.customfunctions,localScope:null,mangleMap:{},undeclaredGlobalsInFunctions:new Map,depthCounter:{depth:1},exports:{},console:ge,lrucache:n.lrucache,timeReference:n.timeReference??null,interceptor:n.interceptor,services:n.services,symbols:{symbolCounter:0}};let o=v(t,e);""===o&&(o="lc.voidOperation; ");let a="";a=r?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+o+"\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+o+"\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";const i=t.moduleFactory,c=t.moduleFactoryMap,s=t.exports,u={};for(const l in s)u[l]=void 0!==t.mangleMap[l]?t.mangleMap[l]:l;const d={lc:l.lc,lang:me,mangles:t.mangleMap,prepareModule:e=>new he(e),prepare(e,n){let r=e.spatialReference;null==r&&(r=new E({wkid:102100}));const t=ie(e.vars,e.customfunctions,n,e.timeReference);return{localStack:[],isAsync:n,exports:s,exportmangle:u,gdefs:{},moduleFactory:i,moduleFactoryMap:c,moduleSingletons:e.moduleSingletons,mangleMap:this.mangles,spatialReference:r,globalScope:t,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console??ge,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:e.depthCounter}}};return new Function("context","spatialReference",a).bind(d)}n.UserDefinedCompiledFunction=S,n.compileScript=fe,n.enableAsyncSupport=Ee,n.executeScript=ue,n.extend=se,n.functionHelper=ce,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));