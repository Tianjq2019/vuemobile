<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <yd-button type="primary">primary</yd-button>
    <yd-switch v-model="switch1"></yd-switch>
    <p>【model: switch1 = {{switch1}}】</p> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
            return {
                switch1: false
            }
        }
}
</script>

<style>

</style>
