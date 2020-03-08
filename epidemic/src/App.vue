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
  background: linear-gradient(#78C1FA, #AAFAF4, #F2F5CA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a:hover {
  color: #7BB8AF;
  background: linear-gradient(#A36AF6, #AAFAF4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}

.footer {
  padding: 3rem 1.5rem 3rem;
}

</style>
