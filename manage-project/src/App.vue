<template>
  <div id="app">
    <my-header></my-header>
    <my-menu></my-menu>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import myMenu from '@/components/sidebar.vue'
import myHeader from '@/components/header.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    'myHeader': myHeader,
    'myMenu': myMenu
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  position: absolute;
  top: 51px;
  left: 241px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
