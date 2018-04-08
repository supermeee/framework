<template>
  <div id="login-app">
    <div class="content">
      <p>this is a login view</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-App',
  data() {
    return {}
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
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
