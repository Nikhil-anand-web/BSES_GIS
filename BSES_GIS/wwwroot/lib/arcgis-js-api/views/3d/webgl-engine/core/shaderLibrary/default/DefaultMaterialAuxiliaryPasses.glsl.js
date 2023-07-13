/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat3","../../../../../../chunks/mat3f64","../../../../../../chunks/mat4f64","../ForwardLinearDepth.glsl","../ShaderOutput","../Slice.glsl","../Transform.glsl","../attributes/NormalAttribute.glsl","../attributes/ObjectAndLayerIdColor.glsl","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexNormal.glsl","../output/OutputDepth.glsl","../output/OutputHighlight.glsl","../shading/VisualVariables.glsl","../util/AlphaDiscard.glsl","../util/View.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform","../../shaderModules/Matrix4PassUniform","../../shaderModules/Texture2DPassUniform","../../../lib/basicInterfaces"],(function(e,r,o,a,l,t,s,i,d,n,u,c,p,m,v,g,h,f,x,T,O,b){"use strict";function w(e,w){const{vertex:A,fragment:P}=e,V=w.hasModelTransformation;if(V){const e=o.create();A.uniforms.add(new T.Matrix4PassUniform("model",(e=>e.modelTransformation??a.IDENTITY))),A.uniforms.add(new x.Matrix3PassUniform("normalTransform",(o=>(r.normalFromMat4(e,o.modelTransformation??a.IDENTITY),e))))}const y=w.hasColorTexture&&w.alphaDiscardMode!==b.AlphaDiscardMode.Opaque;switch(w.output){case t.ShaderOutput.Depth:case t.ShaderOutput.Shadow:case t.ShaderOutput.ShadowHighlight:case t.ShaderOutput.ShadowExcludeHighlight:case t.ShaderOutput.ObjectAndLayerIdColor:h.addProjViewLocalOrigin(A,w),e.include(i.Transform,w),e.include(u.TextureCoordinateAttribute,w),e.include(v.VisualVariables,w),e.include(p.OutputDepth,w),e.include(s.SliceDraw,w),e.include(n.ObjectAndLayerIdColor,w),l.addNearFar(e),e.varyings.add("depth","float"),y&&P.uniforms.add(new O.Texture2DPassUniform("tex",(e=>e.texture))),A.code.add(f.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(g.DiscardOrAdjustAlphaPass,w),P.code.add(f.glsl`
          void main(void) {
            discardBySlice(vpos);
            ${y?f.glsl`
                    vec4 texColor = texture(tex, ${w.hasColorTextureTransform?f.glsl`colorUV`:f.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${w.output===t.ShaderOutput.ObjectAndLayerIdColor?f.glsl`outputObjectAndLayerIdColor();`:f.glsl`outputDepth(depth);`}
          }
        `);break;case t.ShaderOutput.Normal:{h.addProjViewLocalOrigin(A,w),e.include(i.Transform,w),e.include(d.NormalAttribute,w),e.include(c.VertexNormal,w),e.include(u.TextureCoordinateAttribute,w),e.include(v.VisualVariables,w),y&&P.uniforms.add(new O.Texture2DPassUniform("tex",(e=>e.texture))),w.normalType===d.NormalType.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=w.normalType===d.NormalType.Attribute||w.normalType===d.NormalType.Compressed;A.code.add(f.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${r?f.glsl`vNormalWorld = ${V?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:f.glsl`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.SliceDraw,w),e.include(g.DiscardOrAdjustAlphaPass,w),P.code.add(f.glsl`
          void main() {
            discardBySlice(vpos);
            ${y?f.glsl`
                    vec4 texColor = texture(tex, ${w.hasColorTextureTransform?f.glsl`colorUV`:f.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${w.normalType===d.NormalType.ScreenDerivative?f.glsl`vec3 normal = screenDerivativeNormal(vPositionView);`:f.glsl`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case t.ShaderOutput.Highlight:h.addProjViewLocalOrigin(A,w),e.include(i.Transform,w),e.include(u.TextureCoordinateAttribute,w),e.include(v.VisualVariables,w),y&&P.uniforms.add(new O.Texture2DPassUniform("tex",(e=>e.texture))),A.code.add(f.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.SliceDraw,w),e.include(g.DiscardOrAdjustAlphaPass,w),e.include(m.OutputHighlight,w),P.code.add(f.glsl`
          void main() {
            discardBySlice(vpos);
            ${y?f.glsl`
                    vec4 texColor = texture(tex, ${w.hasColorTextureTransform?f.glsl`colorUV`:f.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}e.DefaultMaterialAuxiliaryPasses=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
