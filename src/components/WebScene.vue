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
        // 'esri/dom',
        'dojo/domReady!'
      ], options).then(([SceneView, WebScene, esriConfig]) => {
        esriConfig.portalUrl = 'https://dsdz.maps.arcgis.com'
        // var titleDiv = dom.byId('titleDiv')
        var scene = new WebScene({
          portalItem: {
            id: 'e0b5af3401b14d989149cc95fc79dc8e'
          }
        })
        var view = new SceneView({
          map: scene,
          container: 'viewDiv',
          padding: {
            top: 40
          }
        })
        // view.then(function() {
        //   var title = scene.portalItem.title
        //   titleDiv.innerHTML = title
        // })
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