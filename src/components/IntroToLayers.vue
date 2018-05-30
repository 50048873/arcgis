<template>
  <div class="map">
    <div id="viewDiv" class="balt-theme"></div>
    <span id="layerToggle">
      <input type="checkbox" id="streetsLyr" checked> Transportation
    </span>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
import {options} from '@/assets/js/config'
export default {
  data () {
    return {
    }
  },
  methods: {
    init () {
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/SceneView',
        'esri/layers/TileLayer',
        'dojo/dom',
        'dojo/on',
        'dojo/domReady!'
      ], options).then(([Map, SceneView, TileLayer, dom, on]) => {
        var transportationLyr = new TileLayer({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
          id: "streets",
          opacity: 0.7
        });
        var housingLyr = new TileLayer({
          url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
          id: "ny-housing"
        });
        var map = new Map({
          basemap: 'oceans',
          layers: [housingLyr, transportationLyr]
        })
        //map.layers.add(transportationLyr);
        var view = new SceneView({
          container: 'viewDiv',
          map
        })

        // Create a variable referencing the checkbox node
        var streetsLyrToggle = dom.byId("streetsLyr");

        // Listen to the onchange event for the checkbox
        on(streetsLyrToggle, "change", function(){
          // When the checkbox is checked (true), set the layer's visibility to true
          transportationLyr.visible = streetsLyrToggle.checked;
        });

        view.on("layerview-create", function(event) {
          if (event.layer.id === "ny-housing") {
            // Explore the properties of the housing layer's layer view here
            console.log("LayerView for New York housing density created!", event.layerView);
          }
          if (event.layer.id === "streets") {
            // Explore the properties of the transportation layer's layer view here
            console.log("LayerView for streets created!", event.layerView);
          }
        });
        housingLyr.when(function() {
          view.goTo(housingLyr.fullExtent);
        });
      }).catch(err => {
        // handle any errors
        console.error(err)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less" scoped>
  .map {
    position: absolute;
    top: 35px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
  }
</style>