// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","../../core/lang","../../geometry/support/graphicsUtils"],function(e,b,f,d){var g=b({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),h=b({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),k=b({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",
esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),l=b({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),m=b({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});
return e.createSubclass({declaredClass:"esri.tasks.support.ServiceAreaParameters",properties:{accumulateAttributes:null,attributeParameterValues:null,defaultBreaks:null,doNotLocateOnRestrictedElements:!0,excludeSourcesFromPolygons:null,facilities:null,impedanceAttribute:null,mergeSimilarPolygonRanges:!1,outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,outputLines:null,outputPolygons:null,outSpatialReference:null,overlapLines:!1,overlapPolygons:!1,pointBarriers:null,polygonBarriers:null,
polylineBarriers:null,restrictionAttributes:null,restrictUTurns:null,returnFacilities:!1,returnPointBarriers:!1,returnPolygonBarriers:!1,returnPolylineBarriers:!1,splitLinesAtBreaks:!1,splitPolygonsAtBreaks:!1,travelDirection:null,trimOuterPolygon:!1,trimPolygonDistance:null,trimPolygonDistanceUnits:null,useHierarchy:null,timeOfDay:null},toJSON:function(b){var c={returnFacilities:this.returnFacilities,returnBarriers:this.returnPointBarriers,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,
mergeSimilarPolygonRanges:this.mergeSimilarPolygonRanges,overlapLines:this.overlapLines,overlapPolygons:this.overlapPolygons,splitLinesAtBreaks:this.splitLinesAtBreaks,splitPolygonsAtBreaks:this.splitPolygonsAtBreaks,trimOuterPolygon:this.trimOuterPolygon,accumulateAttributeNames:this.accumulateAttributes?this.accumulateAttributes.join(","):null,attributeParameterValues:this.attributeParameterValues&&JSON.stringify(this.attributeParameterValues),defaultBreaks:this.defaultBreaks?this.defaultBreaks.join(","):
null,excludeSourcesFromPolygons:this.excludeSourcesFromPolygons?this.excludeSourcesFromPolygons.join(","):null,impedanceAttributeName:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:m.toJSON(this.outputGeometryPrecisionUnits),outputLines:g.toJSON(this.outputLines),outputPolygons:h.toJSON(this.outputPolygons),outSR:this.outSpatialReference?this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()):null,restrictionAttributeNames:this.restrictionAttributes?
this.restrictionAttributes.join(","):null,restrictUTurns:k.toJSON(this.restrictUTurns),travelDirection:l.toJSON(this.travelDirection),trimPolygonDistance:this.trimPolygonDistance,trimPolygonDistanceUnits:this.trimPolygonDistanceUnits,useHierarchy:this.useHierarchy,timeOfDay:this.timeOfDay&&this.timeOfDay.getTime()},a=this.facilities;"esri.tasks.support.FeatureSet"===a.declaredClass&&0<a.features.length?c.facilities=JSON.stringify({type:"features",features:d._encodeGraphics(a.features,b&&b["facilities.features"]),
doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.support.DataLayer"===a.declaredClass?c.facilities=a:"esri.tasks.support.DataFile"===a.declaredClass&&(c.facilities=JSON.stringify({type:"features",url:a.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}));a=function(a,c){return a?"esri.tasks.support.FeatureSet"===a.declaredClass?0<a.features.length?JSON.stringify({type:"features",features:d._encodeGraphics(a.features,b&&b[c])}):null:"esri.tasks.support.DataLayer"===
a.declaredClass?a:"esri.tasks.support.DataFile"===a.declaredClass?JSON.stringify({type:"features",url:a.url}):JSON.stringify(a):null};this.pointBarriers&&(c.barriers=a(this.pointBarriers,"pointBarriers.features"));this.polygonBarriers&&(c.polygonBarriers=a(this.polygonBarriers,"polygonBarriers.features"));this.polylineBarriers&&(c.polylineBarriers=a(this.polylineBarriers,"polylineBarriers.features"));return f.filter(c,function(a){if(null!==a)return!0})}})});