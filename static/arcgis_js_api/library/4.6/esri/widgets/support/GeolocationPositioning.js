// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../Graphic ../../core/Accessor ../../core/Error ../../core/Evented ../../core/promiseUtils ../../symbols/PictureMarkerSymbol ../../core/geolocationUtils".split(" "),function(k,t,l,c,d,m,n,p,q,g,r,h){return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a._geolocationUsable=!0;a._iconPath=k.toUrl("../../images/support/sdk_gps_location.png");
a.geolocationOptions=null;a.goToLocationEnabled=!0;a.graphic=new m({symbol:new r({url:a._iconPath,width:21,height:21})});a.scale=null;a.useHeadingEnabled=!0;a.view=null;return a}l(b,f);b.prototype.initialize=function(){h.supported()||(this._geolocationUsable=!1)};b.prototype.destroy=function(){this._clear();this.view=null};b.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)};b.prototype._getScale=function(a){a=a&&a.coords&&a.coords.accuracy;return this.scale||a||5E4};
b.prototype._getHeading=function(a,b){b=b.spatialReference;a=a.coords&&a.coords.heading;if(!(!b||!b.isWebMercator&&!b.isWGS84||"number"!==typeof a||0>a||360<a))return a};b.prototype._animatePoint=function(a,b,d){if(!this.goToLocationEnabled)return g.resolve(b);var c=this.view,e=this.useHeadingEnabled?this._getHeading(b,c):void 0;a={target:a,scale:d};void 0!==e&&"3d"===c.type&&(a.heading=e);void 0!==e&&"2d"===c.type&&(c.rotation=e);return c.goTo(a).then(function(){return b})};b.prototype._setPosition=
function(a){var b=this;return h.positionToPoint(a,this.view).then(function(c){b.graphic&&(b.graphic.geometry=c);var d=b._getScale(a);b._animatePoint(c,a,d);return a}).otherwise(function(){return g.reject(new p("positioning:invalid-point","Cannot position invalid point"))})};c([d.property()],b.prototype,"geolocationOptions",void 0);c([d.property()],b.prototype,"goToLocationEnabled",void 0);c([d.property()],b.prototype,"graphic",void 0);c([d.property()],b.prototype,"scale",void 0);c([d.property()],
b.prototype,"useHeadingEnabled",void 0);c([d.property()],b.prototype,"view",void 0);return b=c([d.subclass("esri.widgets.support.GeolocationPositioning")],b)}(d.declared(n,q))});