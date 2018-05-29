import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/Test1'
import IntrotoSceneView from '@/components/IntrotoSceneView'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
