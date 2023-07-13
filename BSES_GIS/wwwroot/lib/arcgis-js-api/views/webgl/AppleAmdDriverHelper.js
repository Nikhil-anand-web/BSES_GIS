/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./BufferObject","./enums"],(function(e,r,t,i){"use strict";let n=function(){function e(e){this._rctx=e,this._indexBuffer=this._createIndexbuffer(),this._program=this._createHelperProgram()}e.getShaderSources=function(){return{vertex:"#version 300 es\n    precision highp float;\n\n    void main(void) {\n      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);\n    }",fragment:"#version 300 es\n    precision highp float;\n\n    out vec4 fragColor;\n\n    void main(void) {\n      fragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }"}};var n=e.prototype;return n._createHelperProgram=function(){const r=e.getShaderSources();return this._rctx.programCache.acquire(r.vertex,r.fragment,new Map([]))},n._createIndexbuffer=function(){return t.BufferObject.createIndex(this._rctx,i.Usage.STATIC_DRAW,new Uint32Array([0]))},n.resetIndicesType=function(){this._program.compiled&&this._indexBuffer&&(this._rctx.bindVAO(null),this._rctx.useProgram(this._program),this._rctx.bindBuffer(this._indexBuffer,i.BufferType.ELEMENT_ARRAY_BUFFER),this._rctx.drawElements(i.PrimitiveType.POINTS,1,i.DataType.UNSIGNED_INT,0))},n.dispose=function(){this._program.dispose(),this._indexBuffer.dispose()},r._createClass(e)}();e.AppleAmdDriverHelper=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
