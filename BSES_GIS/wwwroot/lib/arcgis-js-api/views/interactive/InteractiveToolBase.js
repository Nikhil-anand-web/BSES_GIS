/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Logger","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./interfaces","./ManipulatorCollection"],(function(e,t,o,i,a,n,r,s,l,c,u,p,d){"use strict";e.InteractiveToolBase=function(e){function o(t){var o;return(o=e.call(this,t)||this).manipulators=new d.ManipulatorCollection,o.automaticManipulatorSelection=!0,o.hasGrabbedManipulators=!1,o.hasHoveredManipulators=!1,o.firstGrabbedManipulator=null,o.created=!1,o.removeIncompleteOnCancel=!0,o._editableFlags=new Map([[p.EditableFlag.MANAGER,!0],[p.EditableFlag.USER,!0]]),o._creationFinishedResolver=n.createResolver(),o}t._inherits(o,e);var i=o.prototype;return i.destroy=function(){this.manipulators.destroy(),this._set("view",null)},i.onAdd=function(){this._syncVisible()},i.activate=function(){null!=this.view?(this.view.focus(),this.onActivate()):a.getLogger(this).error("Can't activate tool if view is not defined.")},i.deactivate=function(){this.onDeactivate()},i.handleInputEvent=function(e){this.onInputEvent(e)},i.handleInputEventAfter=function(e){this.onInputEventAfter(e)},i.setEditableFlag=function(e,t){this._editableFlags.set(e,t),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),e===p.EditableFlag.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()},i.getEditableFlag=function(e){return this._editableFlags.get(e)??!1},i.whenCreated=function(){return this._creationFinishedResolver.promise},i.onManipulatorSelectionChanged=function(){},i.onActivate=function(){},i.onDeactivate=function(){},i.onShow=function(){},i.onHide=function(){},i.onEditableChange=function(){},i.onInputEvent=function(e){},i.onInputEventAfter=function(e){},i.finishToolCreation=function(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)},i._syncVisible=function(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)},i._show=function(){this._updateManipulatorAttachment(),this.onShow()},i._hide=function(){this._updateManipulatorAttachment(),this.onHide()},i._updateManipulatorAttachment=function(){this.visible?this.manipulators.attach():this.manipulators.detach()},t._createClass(o,[{key:"active",get:function(){return null!=this.view&&this.view.activeTool===this}},{key:"visible",set:function(e){this._get("visible")!==e&&(this._set("visible",e),this._syncVisible())}},{key:"editable",get:function(){return this.getEditableFlag(p.EditableFlag.USER)},set:function(e){this.setEditableFlag(p.EditableFlag.USER,e)}},{key:"updating",get:function(){return!1}},{key:"cursor",get:function(){return null}},{key:"hasFocusedManipulators",get:function(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}},{key:"internallyEditable",get:function(){return this.getEditableFlag(p.EditableFlag.USER)&&this.getEditableFlag(p.EditableFlag.MANAGER)}}]),o}(i),o.__decorate([r.property({constructOnly:!0})],e.InteractiveToolBase.prototype,"view",void 0),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"active",null),o.__decorate([r.property({value:!0})],e.InteractiveToolBase.prototype,"visible",null),o.__decorate([r.property({value:!0})],e.InteractiveToolBase.prototype,"editable",null),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"manipulators",void 0),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"updating",null),o.__decorate([r.property()],e.InteractiveToolBase.prototype,"cursor",null),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"automaticManipulatorSelection",void 0),o.__decorate([r.property()],e.InteractiveToolBase.prototype,"hasFocusedManipulators",null),o.__decorate([r.property()],e.InteractiveToolBase.prototype,"hasGrabbedManipulators",void 0),o.__decorate([r.property()],e.InteractiveToolBase.prototype,"hasHoveredManipulators",void 0),o.__decorate([r.property()],e.InteractiveToolBase.prototype,"firstGrabbedManipulator",void 0),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"created",void 0),o.__decorate([r.property({readOnly:!0})],e.InteractiveToolBase.prototype,"removeIncompleteOnCancel",void 0),e.InteractiveToolBase=o.__decorate([u.subclass("esri.views.interactive.InteractiveToolBase")],e.InteractiveToolBase),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
