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
          title: 'Test1',
          path: '/test1'
        },
        {
          title: 'Intro to SceneView',
          path: '/test2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
