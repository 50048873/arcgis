<template>
  <div class="map">
    <div id="viewDiv" class="balt-theme"></div>
    <input class="esri-component esri-widget-button esri-widget esri-interactive" type="button" id="swap-btn" value="3D"></input>
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
    fn1 () {
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/views/SceneView',
        "esri/widgets/Fullscreen"
      ], options).then(([Map, MapView, SceneView, Fullscreen]) => {
        var swapButton = document.getElementById('swap-btn')

        var appConfig = {
          mapView: null,
          sceneView: null,
          activeView: null,
          container: 'viewDiv'
        }

        var map = new Map({
          basemap: 'streets',
          ground: 'world-elevation'
        })

        var initialViewParams = {
          map: map,
          zoom: 4,
          center: [15, 65],
          container: appConfig.container
        }

        appConfig.mapView = createView(initialViewParams, '2d')
        appConfig.activeView = appConfig.mapView
        initialViewParams.container = null
        appConfig.sceneView = createView(initialViewParams, '3d')

        let fullscreen = new Fullscreen({
          view: appConfig.activeView
        })
        appConfig.activeView.ui.add(fullscreen, "top-left")
        appConfig.activeView.ui.add(swapButton, "top-left")

        swapButton.addEventListener('click', function () {
          swapView()
        })

        function swapView () {
          var is3D = appConfig.activeView.type === '3d'
          appConfig.activeView.container = null
          if (is3D) {
            appConfig.mapView.viewpoint = appConfig.activeView.viewpoint.clone()
            appConfig.mapView.container = appConfig.container
            appConfig.activeView = appConfig.mapView
            swapButton.value = '3D'
          } else {
            appConfig.sceneView.viewpoint = appConfig.activeView.viewpoint.clone()
            appConfig.sceneView.container = appConfig.container
            appConfig.activeView = appConfig.sceneView
            swapButton.value = '2D'
          }
          let fullscreen = new Fullscreen({
            view: appConfig.activeView
          })
          appConfig.activeView.ui.add(fullscreen, "top-left")
          appConfig.activeView.ui.add(swapButton, "top-left")
        }

        function createView (params, type) {
          var view;
          var is2D = type === '2d'
          if (is2D) {
            view = new MapView(params)
          } else {
            view = new SceneView(params)
          }
          return view
        }
      })
    },
    fn2 () {
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/views/SceneView',
        "esri/widgets/Fullscreen"
      ], options).then(([Map, MapView, SceneView, Fullscreen]) => {
        var swapButton = document.getElementById('swap-btn')
        var view;
        var fullscreen;

        var create2dView = function () {
          var map = new Map({
            basemap: 'streets'
          })

          return new MapView({
            map: map,
            zoom: 4,
            center: [15, 65],
            container: 'viewDiv'
          })
        }

        var create3dView = function () {
          var map = new Map({
            basemap: 'streets',
            ground: 'world-elevation'
          })

          return new SceneView({
            map: map,
            zoom: 4,
            center: [15, 65],
            container: 'viewDiv'
          })
        }

        var toggleView = function () {
          if (view === undefined) {
            view = create2dView()
          } else {
            var is2D = view.type === '2d'
            if (is2D) {
              view = create3dView()
              swapButton.value = '2D'
            } else {
              view = create2dView()
              swapButton.value = '3D'
            }
          }

          if (fullscreen === undefined) {
            fullscreen = new Fullscreen({
              view: view
            })
          }
          view.ui.add(fullscreen, "top-left")
          view.ui.add(swapButton, "top-left")
        }

        toggleView()

        swapButton.addEventListener('click', function () {
          toggleView()
        })
      })
    }
  },
  mounted () {
    this.fn2()
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
    #infoDiv {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
</style>
