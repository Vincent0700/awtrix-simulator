<template>
  <div class="debug-panel">
    <div v-for="item in lists" :key="item.lable" class="debug-item">
      <label>{{ item.label }}</label>
      <span>{{ $parent[item.value] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.debug-panel {
  position: fixed;
  top: 5px;
  left: 5px;
  padding: 4px;
  width: 200px;
  border-radius: 1px;
  font-family: Monaco, Consolas, 'Andale Mono', 'lucida console', 'Courier New', monospace;
  background: #ccc;
  color: #333;

  .debug-item {
    display: flex;
    justify-content: flex-start;
    margin-top: 2px;
    font-size: 12px;
    line-height: 18px;

    &:first-child {
      margin-top: 0;
    }

    label {
      background: #333;
      color: #fff;
      width: 64px;
      text-align: center;
    }

    span {
      flex: 1;
      box-sizing: border-box;
      padding-left: 8px;
      border: 1px solid #333;
      border-left: 0;
    }
  }
}
</style>
