<template>
  <div id="app">
    <tab :data="tab"></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from '@/baseComponents/Tab'
export default {
  name: 'App',
  components: {
    Tab
  },
  data() {
    return {
      tab: [
        {
          title: 'MapView',
          path: '/test1'
        },
        {
          title: 'IntroToSceneView',
          path: '/test2'
        },
        {
          title: 'IntroToLayers',
          path: '/test3'
        },
        {
          title: 'IntroToPopups',
          path: '/test4'
        },
        {
          title: 'WebScene',
          path: '/test5'
        },
        {
          title: '2d-3d切换',
          path: '/test6'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
