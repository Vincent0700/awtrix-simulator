<template>
  <div
    class="led-block"
    :class="{ active }"
    :style="style"
    @mousedown.stop="$emit('mousedown')"
    @mouseover.stop="$emit('mouseover')"
  />
</template>

<script>
export default {
  name: 'LEDBlock',
  props: {
    // 尺寸(px)
    size: {
      type: Number,
      default: 16
    },
    // 间隔(px)
    margin: {
      type: Number,
      default: 1
    },
    // 颜色
    color: {
      type: String,
      default: '#444'
    },
    // 是否被选中
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        margin: this.margin + 'px',
        background: this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.led-block {
  display: block;
  box-sizing: border-box;
  cursor: pointer;

  &.active {
    border: 2px solid #ff7689;
  }

  &:hover {
    border: 2px solid #ff7689;
  }
}
</style>
