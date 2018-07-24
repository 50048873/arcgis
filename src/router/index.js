import Vue from 'vue'
import Router from 'vue-router'
import MapView from '@/components/MapView'
import IntrotoSceneView from '@/components/IntrotoSceneView'
import IntroToLayers from '@/components/IntroToLayers'
import IntroToPopups from '@/components/IntroToPopups'
import WebScene from '@/components/WebScene'
import ToggleView from '@/components/ToggleView'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "ON",
  routes: [
    {
      path: '/test1',
      name: 'MapView',
      component: MapView
    },
    {
    	path: '/test2',
    	name: 'IntrotoSceneView',
    	component: IntrotoSceneView
    },
    {
    	path: '/test3',
    	name: 'IntroToLayers',
    	component: IntroToLayers
    },
    {
    	path: '/test4',
    	name: 'IntroToPopups',
    	component: IntroToPopups
    },
    {
    	path: '/test5',
    	name: 'WebScene',
    	component: WebScene
    },
    {
      path: '/test6',
      name: 'ToggleView',
      component: ToggleView
    }
  ]
})
