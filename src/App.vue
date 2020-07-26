<template>
  <div id="app">
    <!-- 标题栏 -->
    <h1>Awtrix Simulator</h1>
    <!-- 调试面板 -->
    <div class="debug-panel">
      <div class="debug-item">
        <label>SELECT</label>
        <span>{{ selectAreaText }}</span>
      </div>
      <div class="debug-item">
        <label>FCOLOR</label>
        <span>{{ bgColorText }}</span>
      </div>
    </div>
    <!-- 工具面板 -->
    <ToolsPanel
      :tools="tools"
      :active="currentMode"
      @click="setCurrentMode"
      @bgColorChange="handleBgColorChange"
    />
    <!-- LED点阵 -->
    <div class="led-wrapper">
      <LEDMatrix
        ref="matrix"
        :size="size"
        :selectMode="selectMode"
        @select="handleSelect"
        @drag="handleDrag"
      />
    </div>
  </div>
</template>

<script>
import ToolsPanel from '@/components/ToolsPanel.vue';
import LEDMatrix from '@/components/LEDMatrix.vue';
import ToolBox, { Tools } from '@/toolbox.js';

export default {
  name: 'App',
  components: {
    ToolsPanel,
    LEDMatrix
  },
  data() {
    return {
      size: [32, 8],
      tools: Object.values(Tools),
      currentMode: Tools.SELECT,
      selectMode: 2, // 0: 禁止选中 1: 单选 2: 多选
      selectArea: {
        enable: false,
        startPos: [0, 0],
        endPos: [0, 0]
      },
      bgColor: '#444444',
      toolbox: null
    };
  },
  computed: {
    selectAreaText() {
      if (this.selectArea.enable === true) {
        const lt = this.selectArea.startPos;
        const rb = this.selectArea.endPos;
        return `[${lt[0]},${lt[1]}] [${rb[0]},${rb[1]}]`;
      } else {
        return '[N,N] [N,N]';
      }
    },
    bgColorText() {
      if (!this.bgColor || this.bgColor === '#444444') {
        return 'NULL';
      } else {
        return this.bgColor.toUpperCase();
      }
    }
  },
  mounted() {
    this.toolbox = new ToolBox(this.$refs.matrix);
    this.setCurrentMode(Tools.SELECT);
  },
  methods: {
    /**
     * 设置当前的工具
     * @param name {string} 工具名
     */
    setCurrentMode(name) {
      this.currentMode = name;
      if (name === Tools.SELECT) this.selectMode = 2;
      else if (name === Tools.DRAW) this.selectMode = 0;
      else if (name === Tools.ASSETS) this.selectMode = 1;
    },
    /**
     * 处理选中区域
     * @param selectArea {object} 选中区域对象
     */
    handleSelect(selectArea) {
      this.selectArea.enable = selectArea.enable;
      this.selectArea.startPos = selectArea.startPos;
      this.selectArea.endPos = selectArea.endPos;
      this.toolbox.handleSelect(this.currentMode, this.selectArea);
    },
    /**
     * 处理鼠标拖拽
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    handleDrag(x, y) {
      this.toolbox.handleDrag(this.currentMode, [x, y], this.bgColorText);
    },
    /**
     * 处理背景色修改
     * @param color {string} 颜色值
     */
    handleBgColorChange(color) {
      this.bgColor = color;
    }
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
}
</style>
