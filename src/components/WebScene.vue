<template>
  <div class="map">
    <div id="viewDiv" class="balt-theme"></div>
    <div id="titleDiv"></div>
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
        'esri/views/SceneView',
        'esri/WebScene',
        'esri/config',
        'dojo/domReady!'
      ], options).then(([SceneView, WebScene, esriConfig]) => {
        esriConfig.portalUrl = 'https://dsdz.maps.arcgis.com'
        var titleDiv = document.getElementById('titleDiv')
        var scene = new WebScene({
          portalItem: {
            id: '550baa44134940a6b53b117714932a3c'
          }
        })
        var view = new SceneView({
          map: scene,
          container: 'viewDiv',
          padding: {
            top: 40
          }
        })
        view.when(function() {
          var title = scene.portalItem.title
          titleDiv.innerHTML = title
        })
        view.on('click', function(e) {
          var screenPoint = {
            x: e.x,
            y: e.y
          }
          view.hitTest(screenPoint).then(function(res) {
            console.log(res)
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
