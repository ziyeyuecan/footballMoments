<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html,body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  /*width: 100%;  */
}
  p,input,h1,h2,h3,h4,h5,ul,ol,form,textarea,a{
    margin: 0;
    padding: 0;
  }
</style>
