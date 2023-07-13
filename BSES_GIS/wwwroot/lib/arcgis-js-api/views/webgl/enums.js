/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(_){"use strict";var E,T,R,A,N,S,C,O,I,L,M,D,P,G,U,e,B,F,r,H;_.ClearBufferBit=void 0,(E=_.ClearBufferBit||(_.ClearBufferBit={}))[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",_.PrimitiveType=void 0,(T=_.PrimitiveType||(_.PrimitiveType={}))[T.POINTS=0]="POINTS",T[T.LINES=1]="LINES",T[T.LINE_LOOP=2]="LINE_LOOP",T[T.LINE_STRIP=3]="LINE_STRIP",T[T.TRIANGLES=4]="TRIANGLES",T[T.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",T[T.TRIANGLE_FAN=6]="TRIANGLE_FAN",_.BlendFactor=void 0,(R=_.BlendFactor||(_.BlendFactor={}))[R.ZERO=0]="ZERO",R[R.ONE=1]="ONE",R[R.SRC_COLOR=768]="SRC_COLOR",R[R.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",R[R.SRC_ALPHA=770]="SRC_ALPHA",R[R.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",R[R.DST_ALPHA=772]="DST_ALPHA",R[R.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",R[R.DST_COLOR=774]="DST_COLOR",R[R.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",R[R.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",R[R.CONSTANT_COLOR=32769]="CONSTANT_COLOR",R[R.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",R[R.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",R[R.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",_.BlendOperation=void 0,(A=_.BlendOperation||(_.BlendOperation={}))[A.ADD=32774]="ADD",A[A.MIN=32775]="MIN",A[A.MAX=32776]="MAX",A[A.SUBTRACT=32778]="SUBTRACT",A[A.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT",_.BufferType=void 0,(N=_.BufferType||(_.BufferType={}))[N.ARRAY_BUFFER=34962]="ARRAY_BUFFER",N[N.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",N[N.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",N[N.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",N[N.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",N[N.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",N[N.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_.Face=void 0,(S=_.Face||(_.Face={}))[S.FRONT=1028]="FRONT",S[S.BACK=1029]="BACK",S[S.FRONT_AND_BACK=1032]="FRONT_AND_BACK",_.CullMode=void 0,(C=_.CullMode||(_.CullMode={}))[C.CW=2304]="CW",C[C.CCW=2305]="CCW",_.DataType=void 0,(O=_.DataType||(_.DataType={}))[O.BYTE=5120]="BYTE",O[O.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",O[O.SHORT=5122]="SHORT",O[O.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",O[O.INT=5124]="INT",O[O.UNSIGNED_INT=5125]="UNSIGNED_INT",O[O.FLOAT=5126]="FLOAT",_.CompareFunction=void 0,(I=_.CompareFunction||(_.CompareFunction={}))[I.NEVER=512]="NEVER",I[I.LESS=513]="LESS",I[I.EQUAL=514]="EQUAL",I[I.LEQUAL=515]="LEQUAL",I[I.GREATER=516]="GREATER",I[I.NOTEQUAL=517]="NOTEQUAL",I[I.GEQUAL=518]="GEQUAL",I[I.ALWAYS=519]="ALWAYS",_.StencilOperation=void 0,(L=_.StencilOperation||(_.StencilOperation={}))[L.ZERO=0]="ZERO",L[L.KEEP=7680]="KEEP",L[L.REPLACE=7681]="REPLACE",L[L.INCR=7682]="INCR",L[L.DECR=7683]="DECR",L[L.INVERT=5386]="INVERT",L[L.INCR_WRAP=34055]="INCR_WRAP",L[L.DECR_WRAP=34056]="DECR_WRAP",_.TextureSamplingMode=void 0,(M=_.TextureSamplingMode||(_.TextureSamplingMode={}))[M.NEAREST=9728]="NEAREST",M[M.LINEAR=9729]="LINEAR",M[M.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",M[M.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",M[M.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",M[M.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",_.TextureWrapMode=void 0,(D=_.TextureWrapMode||(_.TextureWrapMode={}))[D.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",D[D.REPEAT=10497]="REPEAT",D[D.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",_.TextureType=void 0,(P=_.TextureType||(_.TextureType={}))[P.TEXTURE_2D=3553]="TEXTURE_2D",P[P.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",P[P.TEXTURE_3D=32879]="TEXTURE_3D",P[P.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",P[P.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",P[P.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",P[P.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",P[P.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",P[P.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",P[P.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",_.PixelFormat=void 0,(G=_.PixelFormat||(_.PixelFormat={}))[G.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",G[G.DEPTH_STENCIL=34041]="DEPTH_STENCIL",G[G.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",G[G.ALPHA=6406]="ALPHA",G[G.RGB=6407]="RGB",G[G.RGBA=6408]="RGBA",G[G.LUMINANCE=6409]="LUMINANCE",G[G.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",G[G.RED=6403]="RED",G[G.RG=33319]="RG",G[G.RED_INTEGER=36244]="RED_INTEGER",G[G.RG_INTEGER=33320]="RG_INTEGER",G[G.RGB_INTEGER=36248]="RGB_INTEGER",G[G.RGBA_INTEGER=36249]="RGBA_INTEGER",_.SizedPixelFormat=void 0,(U=_.SizedPixelFormat||(_.SizedPixelFormat={}))[U.RGBA4=32854]="RGBA4",U[U.R16F=33325]="R16F",U[U.RG16F=33327]="RG16F",U[U.RGB32F=34837]="RGB32F",U[U.RGBA16F=34842]="RGBA16F",U[U.R32F=33326]="R32F",U[U.RG32F=33328]="RG32F",U[U.RGBA32F=34836]="RGBA32F",U[U.R11F_G11F_B10F=35898]="R11F_G11F_B10F",U[U.RGB8=32849]="RGB8",U[U.RGBA8=32856]="RGBA8",U[U.RGB5_A1=32855]="RGB5_A1",U[U.R8=33321]="R8",U[U.RG8=33323]="RG8",U[U.R8I=33329]="R8I",U[U.R8UI=33330]="R8UI",U[U.R16I=33331]="R16I",U[U.R16UI=33332]="R16UI",U[U.R32I=33333]="R32I",U[U.R32UI=33334]="R32UI",U[U.RG8I=33335]="RG8I",U[U.RG8UI=33336]="RG8UI",U[U.RG16I=33337]="RG16I",U[U.RG16UI=33338]="RG16UI",U[U.RG32I=33339]="RG32I",U[U.RG32UI=33340]="RG32UI",U[U.RGB16F=34843]="RGB16F",U[U.RGB9_E5=35901]="RGB9_E5",U[U.SRGB8=35905]="SRGB8",U[U.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",U[U.RGB565=36194]="RGB565",U[U.RGBA32UI=36208]="RGBA32UI",U[U.RGB32UI=36209]="RGB32UI",U[U.RGBA16UI=36214]="RGBA16UI",U[U.RGB16UI=36215]="RGB16UI",U[U.RGBA8UI=36220]="RGBA8UI",U[U.RGB8UI=36221]="RGB8UI",U[U.RGBA32I=36226]="RGBA32I",U[U.RGB32I=36227]="RGB32I",U[U.RGBA16I=36232]="RGBA16I",U[U.RGB16I=36233]="RGB16I",U[U.RGBA8I=36238]="RGBA8I",U[U.RGB8I=36239]="RGB8I",U[U.R8_SNORM=36756]="R8_SNORM",U[U.RG8_SNORM=36757]="RG8_SNORM",U[U.RGB8_SNORM=36758]="RGB8_SNORM",U[U.RGBA8_SNORM=36759]="RGBA8_SNORM",U[U.RGB10_A2=32857]="RGB10_A2",U[U.RGB10_A2UI=36975]="RGB10_A2UI",_.PixelType=void 0,(e=_.PixelType||(_.PixelType={}))[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",_.RenderbufferFormat=void 0,(B=_.RenderbufferFormat||(_.RenderbufferFormat={}))[B.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",B[B.STENCIL_INDEX8=36168]="STENCIL_INDEX8",B[B.DEPTH_STENCIL=34041]="DEPTH_STENCIL",B[B.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",B[B.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",B[B.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",B[B.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",_.Usage=void 0,(F=_.Usage||(_.Usage={}))[F.STATIC_DRAW=35044]="STATIC_DRAW",F[F.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",F[F.STREAM_DRAW=35040]="STREAM_DRAW",F[F.STATIC_READ=35045]="STATIC_READ",F[F.DYNAMIC_READ=35049]="DYNAMIC_READ",F[F.STREAM_READ=35041]="STREAM_READ",F[F.STATIC_COPY=35046]="STATIC_COPY",F[F.DYNAMIC_COPY=35050]="DYNAMIC_COPY",F[F.STREAM_COPY=35042]="STREAM_COPY",_.ShaderType=void 0,(r=_.ShaderType||(_.ShaderType={}))[r.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",r[r.VERTEX_SHADER=35633]="VERTEX_SHADER",_.FramebufferTarget=void 0,(H=_.FramebufferTarget||(_.FramebufferTarget={}))[H.FRAMEBUFFER=36160]="FRAMEBUFFER",H[H.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",H[H.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER";const t=33984;var o,a;_.ResourceType=void 0,(o=_.ResourceType||(_.ResourceType={}))[o.Texture=0]="Texture",o[o.BufferObject=1]="BufferObject",o[o.VertexArrayObject=2]="VertexArrayObject",o[o.Shader=3]="Shader",o[o.Program=4]="Program",o[o.FramebufferObject=5]="FramebufferObject",o[o.Renderbuffer=6]="Renderbuffer",o[o.Sync=7]="Sync",o[o.COUNT=8]="COUNT",_.ColorAttachment=void 0,(a=_.ColorAttachment||(_.ColorAttachment={}))[a.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",a[a.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",a[a.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",a[a.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",a[a.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",a[a.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",a[a.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",a[a.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",a[a.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",a[a.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",a[a.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",a[a.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",a[a.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",a[a.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",a[a.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",a[a.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15";const i=33306;var n,d,Y,V,X,u,c;_.CompressedTextureFormat=void 0,(n=_.CompressedTextureFormat||(_.CompressedTextureFormat={}))[n.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",n[n.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",n[n.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",n[n.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",n[n.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",n[n.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",n[n.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",n[n.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",n[n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",_.UniformType=void 0,(d=_.UniformType||(_.UniformType={}))[d.FLOAT=5126]="FLOAT",d[d.FLOAT_VEC2=35664]="FLOAT_VEC2",d[d.FLOAT_VEC3=35665]="FLOAT_VEC3",d[d.FLOAT_VEC4=35666]="FLOAT_VEC4",d[d.INT=5124]="INT",d[d.INT_VEC2=35667]="INT_VEC2",d[d.INT_VEC3=35668]="INT_VEC3",d[d.INT_VEC4=35669]="INT_VEC4",d[d.BOOL=35670]="BOOL",d[d.BOOL_VEC2=35671]="BOOL_VEC2",d[d.BOOL_VEC3=35672]="BOOL_VEC3",d[d.BOOL_VEC4=35673]="BOOL_VEC4",d[d.FLOAT_MAT2=35674]="FLOAT_MAT2",d[d.FLOAT_MAT3=35675]="FLOAT_MAT3",d[d.FLOAT_MAT4=35676]="FLOAT_MAT4",d[d.SAMPLER_2D=35678]="SAMPLER_2D",d[d.SAMPLER_CUBE=35680]="SAMPLER_CUBE",d[d.UNSIGNED_INT=5125]="UNSIGNED_INT",d[d.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",d[d.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",d[d.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",d[d.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",d[d.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",d[d.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",d[d.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",d[d.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",d[d.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",d[d.SAMPLER_3D=35679]="SAMPLER_3D",d[d.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",d[d.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",d[d.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",d[d.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",d[d.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",d[d.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",d[d.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",d[d.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",d[d.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",d[d.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",d[d.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",d[d.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",_.SyncParameter=void 0,(Y=_.SyncParameter||(_.SyncParameter={}))[Y.OBJECT_TYPE=37138]="OBJECT_TYPE",Y[Y.SYNC_CONDITION=37139]="SYNC_CONDITION",Y[Y.SYNC_STATUS=37140]="SYNC_STATUS",Y[Y.SYNC_FLAGS=37141]="SYNC_FLAGS",_.SyncStatus=void 0,(V=_.SyncStatus||(_.SyncStatus={}))[V.UNSIGNALED=37144]="UNSIGNALED",V[V.SIGNALED=37145]="SIGNALED",_.ClientWaitSyncStatus=void 0,(X=_.ClientWaitSyncStatus||(_.ClientWaitSyncStatus={}))[X.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",X[X.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",X[X.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",X[X.WAIT_FAILED=37149]="WAIT_FAILED",_.SyncCondition=void 0,(u=_.SyncCondition||(_.SyncCondition={}))[u.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",_.SyncFlag=void 0,(c=_.SyncFlag||(_.SyncFlag={}))[c.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",_.BASE_TEXTURE_UNIT=t,_.DepthStencilAttachment=i,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})}));