<template>
  <div class="map">
    <div id="viewDiv" class="balt-theme"></div>
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
        'esri/tasks/Locator',
        'esri/Map',
        'esri/views/MapView',
        'dojo/domReady!'
      ], options).then(([Locator, Map, MapView]) => {
        var locatorTask = new Locator({
           url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
        });
        var map = new Map({
          basemap: 'streets'
        })
        //map.layers.add(transportationLyr);
        var view = new MapView({
          container: 'viewDiv',
          map,
          center: [-116.3031, 43.6088],
          zoom: 12
        })

        view.on('click', function(event) {
          event.stopPropagation()
          var lat = Math.round(event.mapPoint.latitude * 1000) / 1000
          var lon = Math.round(event.mapPoint.longitude * 1000) / 1000
          view.popup.open({
            title: "Reverse geocode: [" + lon + ", " + lat + "]",
            location: event.mapPoint
          })
          locatorTask.locationToAddress(event.mapPoint).then(function(response) {
            // If an address is successfully found, show it in the popup's content
            view.popup.content = response.address;
          }).catch(function(err) {
            // If the promise fails and no result is found, show a generic message
            view.popup.content = "No address was found for this location";
          })
        })
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