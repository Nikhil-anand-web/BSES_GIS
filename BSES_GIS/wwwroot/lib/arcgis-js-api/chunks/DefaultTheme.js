/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./Theme"],(function(e,t){"use strict";function o(e,t,o,a){e.set(t,o.get(a)),o.on(a,(o=>{e.set(t,o)}))}class a extends t.Theme{setupDefaultRules(){super.setupDefaultRules();const e=this._root.language,a=this._root.interfaceColors,i=this._root.horizontalLayout,r=this._root.verticalLayout,n=this.rule.bind(this);n("InterfaceColors").setAll({stroke:t.Color.fromHex(15066597),fill:t.Color.fromHex(15987699),primaryButton:t.Color.fromHex(6788316),primaryButtonHover:t.Color.fromHex(6779356),primaryButtonDown:t.Color.fromHex(6872182),primaryButtonActive:t.Color.fromHex(6872182),primaryButtonText:t.Color.fromHex(16777215),primaryButtonStroke:t.Color.fromHex(16777215),secondaryButton:t.Color.fromHex(14277081),secondaryButtonHover:t.Color.fromHex(10724259),secondaryButtonDown:t.Color.fromHex(9276813),secondaryButtonActive:t.Color.fromHex(15132390),secondaryButtonText:t.Color.fromHex(0),secondaryButtonStroke:t.Color.fromHex(16777215),grid:t.Color.fromHex(0),background:t.Color.fromHex(16777215),alternativeBackground:t.Color.fromHex(0),text:t.Color.fromHex(0),alternativeText:t.Color.fromHex(16777215),disabled:t.Color.fromHex(11382189),positive:t.Color.fromHex(5288704),negative:t.Color.fromHex(11730944)});{const e=n("ColorSet");e.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[t.Color.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),e.setPrivate("currentStep",0),e.setPrivate("currentPass",0)}n("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:t.out(t.cubic)}),n("Component").setAll({interpolationDuration:0,interpolationEasing:t.out(t.cubic)}),n("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:t.p50,tooltipY:t.p50,tooltipPosition:"fixed",isMeasured:!0}),n("Sprite").states.create("default",{visible:!0,opacity:1}),n("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),n("Graphics").setAll({strokeWidth:1}),n("Chart").setAll({width:t.p100,height:t.p100,interactiveChildren:!1}),n("Sprite",["horizontal","center"]).setAll({centerX:t.p50,x:t.p50}),n("Sprite",["vertical","center"]).setAll({centerY:t.p50,y:t.p50}),n("Container",["horizontal","layout"]).setAll({layout:i}),n("Container",["vertical","layout"]).setAll({layout:r}),n("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),n("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),n("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),n("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),n("LinearGradient").setAll({rotation:90}),n("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:t.GridLayout.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),n("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:i,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:e.translate("Press ENTER to toggle"),role:"checkbox"});{const e=n("Rectangle",["legend","item","background"]);e.setAll({fillOpacity:0}),o(e,"fill",a,"background")}n("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:t.p50,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),n("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:t.p100,height:t.p100,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const e=n("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});o(e,"fill",a,"disabled"),o(e,"stroke",a,"disabled")}n("Label",["legend","label"]).setAll({centerY:t.p50,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0});o(n("Label",["legend","label"]).states.create("disabled",{}),"fill",a,"disabled");n("Label",["legend","value","label"]).setAll({centerY:t.p50,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:t.p100,populateText:!0});o(n("Label",["legend","value","label"]).states.create("disabled",{}),"fill",a,"disabled");n("HeatLegend").setAll({stepCount:1}),n("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),n("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:t.p100,width:15}),n("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:t.p100,height:15}),n("HeatLegend",["vertical"]).setAll({height:t.p100}),n("HeatLegend",["horizontal"]).setAll({width:t.p100}),n("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),n("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const e=n("Label");e.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),o(e,"fill",a,"text")}n("RadialLabel").setAll({textType:"regular",centerY:t.p50,centerX:t.p50,inside:!1,radius:0,baseRadius:t.p100,orientation:"auto",textAlign:"center"}),n("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),n("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),n("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const e=n("Tick");e.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),o(e,"stroke",a,"grid")}n("Bullet").setAll({locationX:.5,locationY:.5}),n("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:t.p50,centerY:t.p50,animationEasing:t.out(t.cubic),exportable:!1});n("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:t.Color.fromHex(16777215)});{const e=n("Label",["tooltip"]);e.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),o(e,"fill",a,"alternativeText")}n("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:i,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),n("Button").states.create("hover",{}),n("Button").states.create("down",{stateAnimationDuration:0}),n("Button").states.create("active",{});{const e=n("RoundedRectangle",["button","background"]);o(e,"fill",a,"primaryButton"),o(e,"stroke",a,"primaryButtonStroke")}o(n("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",a,"primaryButtonHover");o(n("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"primaryButtonDown");o(n("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",a,"primaryButtonActive");o(n("Graphics",["button","icon"]),"stroke",a,"primaryButtonText");o(n("Label",["button"]),"fill",a,"primaryButtonText");n("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:t.p100,role:"button",ariaLabel:e.translate("Zoom Out"),layer:30});{const e=n("RoundedRectangle",["background","button","zoom"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),o(e,"fill",a,"primaryButton")}o(n("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",a,"primaryButtonHover");o(n("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"primaryButtonDown");{const e=n("Graphics",["icon","button","zoom"]);e.setAll({crisp:!0,strokeOpacity:.7,draw:e=>{e.moveTo(0,0),e.lineTo(12,0)}}),o(e,"stroke",a,"primaryButtonText")}n("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:t.p50,centerY:t.p50,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:e.translate("Use up and down arrows to move selection")});{const e=n("RoundedRectangle",["background","resize","button"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),o(e,"fill",a,"secondaryButton"),o(e,"stroke",a,"secondaryButtonStroke")}o(n("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",a,"secondaryButtonHover");o(n("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"secondaryButtonDown");{const e=n("Graphics",["resize","button","icon"]);e.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:e=>{e.moveTo(0,.5),e.lineTo(0,12.5),e.moveTo(4,.5),e.lineTo(4,12.5)}}),o(e,"stroke",a,"secondaryButtonText")}n("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),n("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),n("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:e.translate("Play"),toggleKey:"active"});{const e=n("RoundedRectangle",["play","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),o(e,"fill",a,"primaryButton")}{const e=n("Graphics",["play","icon"]);e.setAll({stateAnimationDuration:0,dx:1,draw:e=>{e.moveTo(0,-5),e.lineTo(8,0),e.lineTo(0,5),e.lineTo(0,-5)}}),o(e,"fill",a,"primaryButtonText")}n("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),n("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:e=>{e.moveTo(-4,-5),e.lineTo(-1,-5),e.lineTo(-1,5),e.lineTo(-4,5),e.lineTo(-4,-5),e.moveTo(4,-5),e.lineTo(1,-5),e.lineTo(1,5),e.lineTo(4,5),e.lineTo(4,-5)}}),n("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:e.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const e=n("RoundedRectangle",["switch","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),o(e,"fill",a,"primaryButton")}{const e=n("Circle",["switch","icon"]);e.setAll({radius:8,centerY:0,centerX:0,dx:0}),o(e,"fill",a,"primaryButtonText")}n("Graphics",["switch","icon"]).states.create("active",{dx:16}),n("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:t.out(t.cubic)}),n("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:t.p100}),n("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:t.p100}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const e=n("RoundedRectangle",["scrollbar","main","background"]);e.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),o(e,"fill",a,"fill")}{const e=n("RoundedRectangle",["scrollbar","thumb"]);e.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),o(e,"fill",a,"secondaryButton")}o(n("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",a,"secondaryButtonHover");o(n("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"secondaryButtonDown");n("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:t.p50,width:t.p100,centerX:t.p50,ariaLabel:e.translate("Use up and down arrows to move selection")}),n("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:t.p50,centerY:t.p50,height:t.p100,ariaLabel:e.translate("Use left and right arrows to move selection")});{const e=n("PointedRectangle",["axis","tooltip","background"]);e.setAll({cornerRadius:0}),o(e,"fill",a,"alternativeBackground")}n("Label",["axis","tooltip"]).setAll({role:void 0}),n("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),n("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),n("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),n("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),n("Star").setAll({spikes:5,innerRadius:5,radius:10}),n("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),n("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),n("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),n("SpriteResizer").setAll({rotationStep:10});n("Container",["resizer","grip"]).states.create("hover",{});{const e=n("RoundedRectangle",["resizer","grip"]);e.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),o(e,"fill",a,"background"),o(e,"stroke",a,"alternativeBackground")}{const e=n("RoundedRectangle",["resizer","grip","outline"]);e.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),e.states.create("hover",{fillOpacity:.3}),o(e,"fill",a,"alternativeBackground")}n("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),n("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const e=n("Rectangle",["resizer","rectangle"]);e.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),o(e,"stroke",a,"alternativeBackground")}}}e.DefaultTheme=a,e.setColor=o}));
