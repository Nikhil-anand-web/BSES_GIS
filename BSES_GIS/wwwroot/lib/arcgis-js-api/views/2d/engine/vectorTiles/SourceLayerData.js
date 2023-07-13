/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(e){this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=e.clone();const s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:this.name=s.getString();break;case 3:this.keys.push(s.getString());break;case 4:this.values.push(s.processMessage(t._parseValue));break;case 5:this.extent=s.getUInt32();break;default:s.skip()}}return t.prototype.getData=function(){return this._pbfLayer},t._parseValue=function(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null},e._createClass(t)}()}));
