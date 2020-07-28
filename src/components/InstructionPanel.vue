<template>
  <div v-show="name" class="instruction-panel">
    <div v-show="name === MODE.SELECT">
      <header>SELECT MODE</header>
      <p>1. SELECT an LED area.</p>
      <p>2. PRESS 'D' to DRAW.</p>
      <p>3. PRESS 'BACKSPACE' to ERASE color.</p>
    </div>
    <div v-show="name === MODE.DRAW">
      <header>DRAW MODE</header>
      <p>1. DRAG your mouse to DRAW.</p>
    </div>
    <div v-show="name === 'FCOLOR'">
      <header>FOREGROUND COLOR</header>
    </div>
  </div>
</template>

<script>
import { MODE } from '@/libs/matrix.js';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MODE
    };
  }
};
</script>

<style lang="scss" scoped>
.instruction-panel {
  position: fixed;
  top: 5px;
  right: 5px;
  padding: 10px;
  border-radius: 1px;
  font-family: monospace;
  background: #ccc;
  color: #333;

  header {
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }
}
</style>
