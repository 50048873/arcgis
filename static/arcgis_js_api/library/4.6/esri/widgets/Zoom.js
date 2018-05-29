// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Widget ./Zoom/IconButton ./Zoom/ZoomViewModel dojo/i18n!./Zoom/nls/Zoom".split(" "),function(m,n,k,b,c,d,l,e,f,g){return function(h){function a(a){a=h.call(this)||this;a.view=null;a.viewModel=new f;return a}k(a,h);a.prototype.postInitialize=function(){this._zoomInButton=new e({action:this.zoomIn,iconClass:"esri-icon-plus",title:g.zoomIn});this._zoomOutButton=
new e({action:this.zoomOut,iconClass:"esri-icon-minus",title:g.zoomOut})};Object.defineProperty(a.prototype,"layout",{set:function(a){"horizontal"!==a&&(a="vertical");this._set("layout",a)},enumerable:!0,configurable:!0});a.prototype.render=function(){var a=this.viewModel,c=(b={},b["esri-zoom--horizontal"]="horizontal"===this.layout,b);this._zoomInButton.enabled="ready"===a.state&&a.canZoomIn;this._zoomOutButton.enabled="ready"===a.state&&a.canZoomOut;return d.tsx("div",{class:"esri-zoom esri-widget",
classes:c},this._zoomInButton.render(),this._zoomOutButton.render());var b};a.prototype.zoomIn=function(){};a.prototype.zoomOut=function(){};b([c.property({value:"vertical"}),d.renderable()],a.prototype,"layout",null);b([c.aliasOf("viewModel.view"),d.renderable()],a.prototype,"view",void 0);b([c.property({type:f}),d.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],a.prototype,"viewModel",void 0);b([c.aliasOf("viewModel.zoomIn")],a.prototype,"zoomIn",null);b([c.aliasOf("viewModel.zoomOut")],
a.prototype,"zoomOut",null);return a=b([c.subclass("esri.widgets.Zoom")],a)}(c.declared(l))});