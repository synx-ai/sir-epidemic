<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html, body, .synx-dark-background {
  background-color: #171B1C;
}

a {
  color: #8CD1C7;
  background: -webkit-linear-gradient(#78C1FA, #AAFAF4, #F2F5CA, #F2A7B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a:hover {
  color: #7BB8AF;
  background: -webkit-linear-gradient(#A36AF6, #AAFAF4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
