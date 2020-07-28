<template>
  <div id="app">
    <!-- 标题栏 -->
    <h1>Awtrix Simulator</h1>
    <!-- 调试面板 -->
    <DebugPanel :lists="debugInfo" />
    <!-- 提示面板 -->
    <InstructionPanel :name="tipsShown" />
    <!-- 工具面板 -->
    <ToolsPanel
      :tools="tools"
      :active="currentMode"
      @click="setCurrentMode"
      @mouseover="handleToolsMouseover"
      @mouseout="handleToolsMouseout"
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
import DebugPanel from '@/components/DebugPanel.vue';
import InstructionPanel from '@/components/InstructionPanel.vue';
import Matrix, { MODE } from '@/libs/matrix.js';

export default {
  name: 'App',
  components: {
    ToolsPanel,
    DebugPanel,
    InstructionPanel,
    LEDMatrix
  },
  data() {
    return {
      matrix: new Matrix(),
      size: [32, 8],
      tools: Object.values(MODE),
      currentMode: MODE.SELECT,
      tipsShown: '',
      selectMode: 2, // 0: 绘制模式 1: 单选 2: 多选
      selectArea: {
        enable: false,
        startPos: [0, 0],
        endPos: [0, 0]
      },
      bgColor: '#444444',
      debugInfo: [
        {
          label: 'SELECT',
          value: 'selectAreaText'
        },
        {
          label: 'FCOLOR',
          value: 'bgColorText'
        }
      ]
    };
  },
  computed: {
    selectAreaText() {
      if (this.selectArea.enable === true) {
        const lt = this.selectArea.startPos;
        const rb = this.selectArea.endPos;
        if (lt[0] === rb[0] && lt[1] === rb[1]) {
          return `[${lt[0]},${lt[1]}]`;
        } else {
          return `[${lt[0]},${lt[1]}] [${rb[0]},${rb[1]}]`;
        }
      } else {
        return '[N,N] [N,N]';
      }
    },
    bgColorText() {
      if (!this.bgColor) {
        return 'NULL';
      } else {
        return this.bgColor.toUpperCase();
      }
    }
  },
  mounted() {
    // initialize
    this.matrix.init(this.$refs.matrix);
    this.setCurrentMode(MODE.SELECT);

    // 捕获键盘按键
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 68) {
        // press 'D' 填充区域
        if (this.selectArea.enable) {
          this.matrix.onDrawArea(
            this.selectArea.startPos,
            this.selectArea.endPos,
            this.bgColorText
          );
        }
      } else if (e.keyCode === 8) {
        // press 'backspace' 删除区域
        if (this.selectArea.enable) {
          this.matrix.onDrawArea(this.selectArea.startPos, this.selectArea.endPos, null);
        }
      }
    });
  },
  methods: {
    /**
     * 设置当前的工具
     * @param name {string} 工具名
     */
    setCurrentMode(name) {
      this.currentMode = name;
      if (name === MODE.SELECT) this.selectMode = 2;
      else if (name === MODE.DRAW) this.selectMode = 0;
    },
    /**
     * 处理鼠标移入工具
     * @param {string} name
     */
    handleToolsMouseover(name) {
      this.tipsShown = name;
    },
    /**
     * 处理鼠标移出工具
     * @param {string} name
     */
    handleToolsMouseout(name) {
      if (this.tipsShown === name) {
        this.tipsShown = null;
      }
    },
    /**
     * 处理选中区域
     * @param {object} selectArea 选中区域对象
     */
    handleSelect(selectArea) {
      this.selectArea.enable = selectArea.enable;
      this.selectArea.startPos = selectArea.startPos;
      this.selectArea.endPos = selectArea.endPos;
    },
    /**
     * 处理鼠标拖拽
     * @param {number} x x坐标
     * @param {number} y y坐标
     */
    handleDrag(x, y) {
      if (this.currentMode === MODE.DRAW) {
        this.matrix.onDraw([x, y], this.bgColorText);
      }
    },
    /**
     * 处理背景色修改
     * @param {string} color 颜色值
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
}
</style>
