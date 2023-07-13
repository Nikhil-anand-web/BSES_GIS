/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers"],(function(e,r){"use strict";var o;e.ExecutionErrorCodes=void 0,(o=e.ExecutionErrorCodes||(e.ExecutionErrorCodes={})).AsyncNotEnabled="AsyncNotEnabled",o.ModulesNotSupported="ModulesNotSupported",o.CircularModules="CircularModules",o.NeverReach="NeverReach",o.UnsupportedHashType="UnsupportedHashType",o.InvalidParameter="InvalidParameter",o.UnexpectedToken="UnexpectedToken",o.Unrecognised="Unrecognised",o.UnrecognisedType="UnrecognisedType",o.MaximumCallDepth="MaximumCallDepth",o.BooleanConditionRequired="BooleanConditionRequired",o.TypeNotAllowedInFeature="TypeNotAllowedInFeature",o.KeyMustBeString="KeyMustBeString",o.WrongNumberOfParameters="WrongNumberOfParameters",o.CallNonFunction="CallNonFunction",o.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",o.NoFunctionInDictionary="NoFunctionInDictionary",o.NoFunctionInArray="NoFunctionInArray",o.AssignModuleFunction="AssignModuleFunction",o.LogicExpressionOrAnd="LogicExpressionOrAnd",o.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",o.FunctionNotFound="FunctionNotFound",o.InvalidMemberAccessKey="InvalidMemberAccessKey",o.UnsupportedUnaryOperator="UnsupportUnaryOperator",o.InvalidIdentifier="InvalidIdentifier",o.MemberOfNull="MemberOfNull",o.UnsupportedOperator="UnsupportedOperator",o.Cancelled="Cancelled",o.ModuleAccessorMustBeString="ModuleAccessorMustBeString",o.ModuleExportNotFound="ModuleExportNotFound",o.Immutable="Immutable",o.OutOfBounds="OutOfBounds",o.IllegalResult="IllegalResult",o.FieldNotFound="FieldNotFound",o.PortalRequired="PortalRequired",o.LogicError="LogicError",o.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",o.KeyAccessorMustBeString="KeyAccessorMustBeString",o.WrongSpatialReference="WrongSpatialReference";const t={[e.ExecutionErrorCodes.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[e.ExecutionErrorCodes.LogicError]:"Logic error - {reason}",[e.ExecutionErrorCodes.NeverReach]:"Encountered unreachable logic",[e.ExecutionErrorCodes.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[e.ExecutionErrorCodes.ModuleAccessorMustBeString]:"Module accessor must be a string",[e.ExecutionErrorCodes.ModuleExportNotFound]:"Module has no export with provided identifier",[e.ExecutionErrorCodes.ModulesNotSupported]:"Current profile does not support modules",[e.ExecutionErrorCodes.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[e.ExecutionErrorCodes.FunctionNotFound]:"Function not found",[e.ExecutionErrorCodes.FieldNotFound]:"Key not found - {key}",[e.ExecutionErrorCodes.CircularModules]:"Circular module dependencies are not allowed",[e.ExecutionErrorCodes.Cancelled]:"Execution cancelled",[e.ExecutionErrorCodes.UnsupportedHashType]:"Type not supported in hash function",[e.ExecutionErrorCodes.IllegalResult]:"Value is not a supported return type",[e.ExecutionErrorCodes.PortalRequired]:"Portal is required",[e.ExecutionErrorCodes.InvalidParameter]:"Invalid parameter",[e.ExecutionErrorCodes.WrongNumberOfParameters]:"Call with wrong number of parameters",[e.ExecutionErrorCodes.Unrecognised]:"Unrecognised code structure",[e.ExecutionErrorCodes.UnrecognisedType]:"Unrecognised type",[e.ExecutionErrorCodes.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[e.ExecutionErrorCodes.BooleanConditionRequired]:"Conditions must use booleans",[e.ExecutionErrorCodes.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[e.ExecutionErrorCodes.NoFunctionInArray]:"Arrays cannot contain functions.",[e.ExecutionErrorCodes.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[e.ExecutionErrorCodes.KeyAccessorMustBeString]:"Accessor must be a string",[e.ExecutionErrorCodes.KeyMustBeString]:"Object keys must be a string",[e.ExecutionErrorCodes.Immutable]:"Object is immutable",[e.ExecutionErrorCodes.UnexpectedToken]:"Unexpected token",[e.ExecutionErrorCodes.MemberOfNull]:"Cannot access property of null object",[e.ExecutionErrorCodes.MaximumCallDepth]:"Exceeded maximum function depth",[e.ExecutionErrorCodes.OutOfBounds]:"Out of bounds",[e.ExecutionErrorCodes.InvalidIdentifier]:"Identifier not recognised",[e.ExecutionErrorCodes.CallNonFunction]:"Expression is not a function",[e.ExecutionErrorCodes.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[e.ExecutionErrorCodes.AssignModuleFunction]:"Cannot assign function to module variable",[e.ExecutionErrorCodes.UnsupportedUnaryOperator]:"Unsupported unary operator",[e.ExecutionErrorCodes.UnsupportedOperator]:"Unsupported operator",[e.ExecutionErrorCodes.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[e.ExecutionErrorCodes.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"};let n=function(e){function o(...r){return e.call(this,...r)||this}return r._inherits(o,e),r._createClass(o)}(r._wrapNativeSuper(Error)),i=function(e){function o(t,n){var i;return(i=e.call(this,a(n)+t.message,{cause:t})||this).loc=null,Error.captureStackTrace&&Error.captureStackTrace(r._assertThisInitialized(i),o),n&&n.loc&&(i.loc=n.loc),i}return r._inherits(o,e),r._createClass(o)}(n),s=function(e){function o(n,i,s,c){var u;return(u=e.call(this,"Execution error - "+a(s)+l(t[i],c))||this).loc=null,u.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(r._assertThisInitialized(u),o),s&&s.loc&&(u.loc=s.loc),u}return r._inherits(o,e),r._createClass(o)}(r._wrapNativeSuper(Error));function a(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}let c=function(e){function o(n,i,s,c){var u;return(u=e.call(this,"Compilation error - "+a(s)+l(t[i],c))||this).loc=null,u.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(r._assertThisInitialized(u),o),s&&s.loc&&(u.loc=s.loc),u}return r._inherits(o,e),r._createClass(o)}(r._wrapNativeSuper(Error)),u=function(e){function o(){var t;return(t=e.call(this,"Uncompilable code structures")||this).declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(r._assertThisInitialized(t),o),t}return r._inherits(o,e),r._createClass(o)}(r._wrapNativeSuper(Error));function l(e,r){try{if(!r)return e;for(const o in r){let t=r[o];t||(t=""),e=e.replace("{"+o+"}",r[o])}}catch(o){}return e}function d(e,r,o){return"esri.arcade.arcadeexecutionerror"===o.declaredRootClass||"esri.arcade.arcadecompilationerror"===o.declaredRootClass?null===o.loc&&r&&r.loc?new i(o,{cause:o}):o:("esri.arcade.featureset.support.featureseterror"===o.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===o.declaredRootClass||o.declaredRootClass,r&&r.loc?new i(o,{cause:o}):o)}var p;e.ModuleErrorCodes=void 0,(p=e.ModuleErrorCodes||(e.ModuleErrorCodes={})).UnrecognisedUri="UnrecognisedUri",p.UnsupportedUriProtocol="UnsupportedUriProtocol";const E={[e.ModuleErrorCodes.UnrecognisedUri]:"Unrecognised uri - {uri}",[e.ModuleErrorCodes.UnsupportedUriProtocol]:"Unrecognised uri protocol"};let C=function(e){function o(t,n){var i;return(i=e.call(this,l(E[t],n))||this).declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(r._assertThisInitialized(i),o),i}return r._inherits(o,e),r._createClass(o)}(r._wrapNativeSuper(Error));function x(e,r,o){return"Parsing error - "+a(e)+l(t[r],o)}e.ArcadeCompilationError=c,e.ArcadeExecutionError=s,e.ArcadeUncompilableError=u,e.ErrorWithCause=n,e.ExecutionErrorMessages=t,e.LocatableArcadeExecutionError=i,e.ModuleError=C,e.ModuleErrorMessages=E,e.doSubstitutions=l,e.ensureArcadeExecutionError=d,e.parsingValidationMessage=x,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));