import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/Test1'
import IntrotoSceneView from '@/components/IntrotoSceneView'
import IntroToLayers from '@/components/IntroToLayers'
import IntroToPopups from '@/components/IntroToPopups'
import WebScene from '@/components/WebScene'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "ON",
  routes: [
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
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
    }
  ]
})
