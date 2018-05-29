// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/screenUtils ./enums ./Utils ./MeshData ./visualVariablesUtils ./MeshUtils ./MaterialInfoUtils ./enums ./WGLDisplayObject ./WGLDisplayRecord".split(" "),function(R,M,D,p,d,N,I,O,J,u,P,K){function Q(n,e,v,a,l,m){z.length=0;x.length=0;l=e.symbol;var p=m.get(l);m=l.text;var g=m.length;if(0===g||!p||!p.glyphMosaicItems)return z;for(var r=0;r<g;r++){var C=m.charCodeAt(r);x.push(C)}var c=0;x.forEach(function(a){c+=p.glyphMosaicItems[a].metrics.advance});var h=-Math.round(c/
2),k=e.vv,f=d.numTo32(v);e=n.centroid||n.geometry;n=e.x;e=e.y;var q,t,A,B;m=d.copyAndPremultiply(l.color);var g=d.copyAndPremultiply(l.haloColor),E=d.i8888to32(m[0],m[1],m[2],m[3]),F=d.i8888to32(g[0],g[1],g[2],g[3]);a=[D.pt2px(l.xoffset)*a,D.pt2px(l.yoffset)*a];n+=a[0];e+=a[1];var y=l.font.size,w=10*(null!=l.haloSize?D.pt2px(D.toPt(l.haloSize)):0);if(0<w){var G=d.i1616to32(2*n+1,2*e);x.forEach(function(a){var b=[],c=[];a=p.glyphMosaicItems[a];q=Math.round(a.rect.x/4);t=Math.round(a.rect.y/4);A=q+
Math.round(a.rect.width/4);B=t+Math.round(a.rect.height/4);var e=J.createTextMaterialInfo(a,k),g=N.pool.acquire(),l=h,n=a.metrics.height;b.push(G);b.push(f);b.push(F);b.push(d.i1616to32(32*l,32*n));b.push(d.i8888to32(q,t,y,w));c.push(1);var m=l+a.metrics.width;b.push(G);b.push(f);b.push(F);b.push(d.i1616to32(32*m,32*n));b.push(d.i8888to32(A,t,y,w));c.push(1);b.push(G);b.push(f);b.push(F);b.push(d.i1616to32(32*l,0));b.push(d.i8888to32(q,B,y,w));c.push(1);b.push(G);b.push(f);b.push(F);b.push(d.i1616to32(32*
m,0));b.push(d.i8888to32(A,B,y,w));c.push(1);g.update({geometry:b,visibility:c},4,[0,1,2,1,3,2]);b=K.pool.acquire(v,u.WGLGeometryType.TEXT,g,e,0,0);z.push(b);h+=a.metrics.advance})}var h=-Math.round(c/2),H=d.i1616to32(2*n,2*e);x.forEach(function(a){var b=[],c=[];a=p.glyphMosaicItems[a];q=Math.round(a.rect.x/4);t=Math.round(a.rect.y/4);A=q+Math.round(a.rect.width/4);B=t+Math.round(a.rect.height/4);var l=J.createTextMaterialInfo(a,k),g=N.pool.acquire(),e=h,n=a.metrics.height;b.push(H);b.push(f);b.push(E);
b.push(d.i1616to32(32*e,32*n));b.push(d.i8888to32(q,t,y,w));c.push(1);var m=e+a.metrics.width;b.push(H);b.push(f);b.push(E);b.push(d.i1616to32(32*m,32*n));b.push(d.i8888to32(A,t,y,w));c.push(1);b.push(H);b.push(f);b.push(E);b.push(d.i1616to32(32*e,0));b.push(d.i8888to32(q,B,y,w));c.push(1);b.push(H);b.push(f);b.push(E);b.push(d.i1616to32(32*m,0));b.push(d.i8888to32(A,B,y,w));c.push(1);g.update({geometry:b,visibility:c},4,[0,1,2,1,3,2]);b=K.pool.acquire(v,u.WGLGeometryType.TEXT,g,l,0,0);z.push(b);
h+=a.metrics.advance});return z}function L(d,g){if(!d)return p.WGLVVFlag.NONE;var e=0;d.forEach(function(a){var d=a.type;"size"===d&&"outline"!==a.target?e|=I.getTypeOfSizeVisualVariable(a):"color"===d?e|=p.WGLVVFlag.COLOR:"opacity"===d?e|=p.WGLVVFlag.OPACITY:g&&"rotation"===d&&(e|=p.WGLVVFlag.ROTATION)});return e}Object.defineProperty(M,"__esModule",{value:!0});var g=[],x=[],z=[];M.getDisplayObject=function(n,e,v,a,l,m,z,x,r){e=n.attributes[e];var C=P.pool.acquire(e);g.length=0;var c=v.renderer,
h=v.getSymbol(n);if(h){var k=d.isMarkerSymbol(h)||d.isTextSymbol(h);if("esriGeometryPoint"===a||"esriGeometryPolyline"===a)g.push({symbol:h,vv:L(c.visualVariables,k)});else if(k){if(c.backgroundFillSymbol&&(a=c.backgroundFillSymbol,g.push({symbol:a,vv:p.WGLVVFlag.NONE}),a.outline&&"none"!==a.outline.style)){k=p.WGLVVFlag.NONE;if(c.visualVariables)for(var f=0,q=c.visualVariables;f<q.length;f++){var t=q[f];if("size"===t.type&&"outline"===t.target){k|=I.getTypeOfSizeVisualVariable(t);break}}g.push({symbol:a.outline,
vv:k})}g.push({symbol:h,vv:L(c.visualVariables,!0)})}else if(d.isFillSymbol(h)){k=p.WGLVVFlag.NONE;if(c.visualVariables)for(f=0,q=c.visualVariables;f<q.length;f++)a=q[f],a=a.type,"color"===a?k|=p.WGLVVFlag.COLOR:"opacity"===a&&(k|=p.WGLVVFlag.OPACITY);g.push({symbol:h,vv:k});if(h.outline&&"none"!==h.outline.style){k=p.WGLVVFlag.NONE;if(c.visualVariables)for(f=0,c=c.visualVariables;f<c.length;f++)if(a=c[f],"size"===a.type&&"outline"===a.target){k|=I.getTypeOfSizeVisualVariable(a);break}g.push({symbol:h.outline,
vv:k})}}else d.isLineSymbol(h)&&g.push({symbol:h,vv:L(c.visualVariables,k)})}for(h=0;h<g.length;h++){a=g[h];k=a.symbol;c=d.getSymbolGeometryType(k);f=0!==a.vv;switch(c){case u.WGLGeometryType.MARKER:r.icon||(r.icon=d.getStrides(u.WGLGeometryType.MARKER,f,!1));break;case u.WGLGeometryType.LINE:r.line||(r.line=d.getStrides(u.WGLGeometryType.LINE,f));break;case u.WGLGeometryType.FILL:r.fill||(r.fill=d.getStrides(u.WGLGeometryType.FILL,f));break;case u.WGLGeometryType.TEXT:r.text||(r.text=d.getStrides(u.WGLGeometryType.TEXT,
f))}if(c===u.WGLGeometryType.TEXT)for(c=0,a=Q(n,a,e,m,v,x);c<a.length;c++)C.displayRecords.push(a[c]);else f=x.get(k),a=J.createMaterialInfo(v,f,c,a.vv),k=O.createMesh(e,v,a.materialKeyInfo,f,c,l,m,z,n,k),c=K.pool.acquire(e,c,k,a,0,0),C.displayRecords.push(c)}return C}});