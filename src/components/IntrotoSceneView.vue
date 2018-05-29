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
        'esri/Map',
        'esri/views/SceneView',
        'dojo/domReady!'
      ], options).then(([Map, SceneView]) => {
       var map = new Map({
          basemap: 'streets',
          ground: 'world-elevation'
        })
        var view = new SceneView({
          container: 'viewDiv',
          map,
          scale: 50000000,
          center: [-101.17, 21.78]
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