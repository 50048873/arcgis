// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../core/Accessor ../../../core/Promise dojo/Deferred dojo/aspect dojo/_base/lang".split(" "),function(c,b,d,e,f,g){return c([b,d],{"-chains-":g.mixin(b._meta.chains,{setup:"after",initializeRenderContext:"after",uninitializeRenderContext:"before"}),properties:{gl:{readOnly:!0,get:function(){return this._gl}},needsRender:{value:!0},visible:{value:!0}},constructor:function(){this.didRender=!1;this.renderContext=null;this.watch("visible",function(){this.needsRender=
!0}.bind(this));this._contextDfd=new e},initialize:function(){this.addResolvingPromise(this._contextDfd.promise);f.around(this,"render",function(a){return function(){return this.isRejected()?this.didRender=!0:this.isResolved()?!this.visible||a.apply(this,arguments)?this.didRender=!0:!1:!1}.bind(this)}.bind(this));this.when(function(){this.destroyed||this.setup(this.renderContext)}.bind(this))},needsRender:!0,visible:!0,initializeRenderContext:function(a){this.renderContext=a;this._contextDfd.resolve()},
uninitializeRenderContext:function(a){},setup:function(a){},render:function(a){return!1}})});