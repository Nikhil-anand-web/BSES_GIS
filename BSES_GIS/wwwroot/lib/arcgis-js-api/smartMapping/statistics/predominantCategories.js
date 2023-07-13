/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../core/Error","./support/utils","../support/binningUtils","../support/adapters/support/layerUtils"],(function(e,r,i,a){"use strict";async function n(n){if(!(n&&n.layer&&n.view&&n.fields))throw new e("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");n.forBinning&&i.verifyBinningParams(n,"predominant-categories");const{layer:t,...s}=n,o=n.forBinning?a.binningCapableLayerTypes:a.defaultSupportedLayerTypes,p=a.createLayerAdapter(t,o,n.forBinning);if(!p)throw new e("predominant-categories:invalid-parameters","'layer' must be one of these types: "+a.getLayerTypeLabels(o).join(", "));const l={layerAdapter:p,...s};await Promise.all([l.view.when(),p.load({signal:l.signal})]);const d=r.verifyBasicFieldValidity(p,l.fields,"predominant-categories:invalid-parameters");if(d)throw d;return l}async function t(e){const{layerAdapter:r,...i}=await n(e);return r.predominantCategories(i)}return t}));
