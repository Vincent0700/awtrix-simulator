<template>
  <div class="tools-panel">
    <div class="tools-group">
      <div
        v-for="item in tools"
        :key="item"
        class="tools-item"
        :class="{ active: active === item }"
        @click.stop="$emit('click', item)"
      >
        <i class="iconfont" :class="'icon-' + item"></i>
      </div>
    </div>
    <div class="tools-group">
      <div class="tools-item">
        <el-color-picker v-model="bgColor" :predefine="presetColor" size="mini" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tools: {
      type: Array,
      default() {
        return ['select'];
      }
    },
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bgColor: '#00BCD4',
      presetColor: [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722'
      ]
    };
  },
  watch: {
    bgColor: {
      handler(val) {
        if (!val) {
          this.bgColor = '#444444';
          this.$emit('bgColorChange', null);
        } else {
          this.$emit('bgColorChange', this.bgColor);
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.tools-panel {
  display: flex;
  justify-content: center;
  margin: 10px 0;

  .tools-group {
    padding: 3px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    display: flex;

    .tools-item {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      background: #333;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
      cursor: pointer;

      &.active {
        background: #ff7689;
      }

      &:hover {
        background: #666;
      }

      .iconfont {
        color: #fff;

        &.icon-select {
          font-size: 22px;
        }

        &.icon-brush {
          font-size: 18px;
        }

        &.icon-tpl {
          font-size: 18px;
        }
      }
    }
  }

  .el-color-picker {
    $width: 16px;
    width: $width;
    height: $width;

    .el-color-picker__trigger {
      width: $width;
      height: $width;
      padding: 0;
      border: none;

      .el-color-picker__color {
        width: $width;
        height: $width;
        border: 1px solid #fff;
        border-radius: 0;
        box-sizing: border-box;
      }
    }

    .el-icon-arrow-down::before,
    .el-icon-close::before {
      content: '';
    }
  }
}
</style>
