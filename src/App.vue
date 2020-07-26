<template>
  <div id="app">
    <h1>Awtrix Simulator</h1>
    <div class="tools-wrapper"></div>
    <div class="led-wrapper">
      <LEDMatrix :size="size" />
    </div>
  </div>
</template>

<script>
import LEDMatrix from './components/LEDMatrix.vue';

export default {
  name: 'App',
  components: {
    LEDMatrix
  },
  data() {
    return {
      size: [32, 8]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  h1 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 500;
    padding: 40px 0;
    text-align: center;
  }

  .led-wrapper {
    display: flex;
    justify-content: center;
    background: #000;
    padding: 20px 0;
  }
}
</style>
