<template>
  <div class="led-matrix">
    <div v-for="(_, y) in size[1]" :key="y" class="led-row">
      <LEDBlock
        v-for="(_, x) in size[0]"
        :key="x"
        :color="getColor(x, y)"
        :active="isInsideSelectArea(x, y)"
        @mousedown="handleLEDMouseDown(x, y)"
        @mouseover="handleLEDMouseOver(x, y)"
      />
    </div>
  </div>
</template>

<script>
import LEDBlock from './LEDBlock.vue';

export default {
  name: 'LEDMatrix',
  components: {
    LEDBlock
  },
  props: {
    // 点阵屏的尺寸
    size: {
      type: Array,
      default() {
        return [32, 8];
      }
    },
    // 是否允许多选 0:禁止选中 1:单选 2:多选
    selectMode: {
      type: Number,
      default: 2
    }
  },
  data() {
    const count = this.size[0] * this.size[1];
    const defaultColors = Array(count).fill('#444');
    return {
      // 鼠标按下
      mouseDown: false,
      // 鼠标 mousedown 和 mouseover 的坐标
      mouseInfo: {
        down: false,
        startX: -1,
        startY: -1,
        endX: -1,
        endY: -1
      },
      // 选中区域
      selectArea: {
        enable: false,
        startPos: [-1, -1],
        endPos: [-1, -1]
      },
      // 颜色表
      colorData: defaultColors
    };
  },
  computed: {
    maxWidth() {
      return this.size[0];
    },
    maxHeight() {
      return this.size[1];
    }
  },
  created() {
    document.addEventListener('mousedown', () => (this.mouseDown = true));
    document.addEventListener('mouseup', () => (this.mouseDown = false));
  },
  methods: {
    /**
     * 处理LED方块 MouseDown 事件
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    handleLEDMouseDown(x, y) {
      if (!this.selectMode) {
        this.mouseDown = true;
        this.$emit('drag', x, y);
        return;
      }

      this.mouseInfo.down = true;
      this.mouseInfo.startX = x;
      this.mouseInfo.startY = y;
      this.mouseInfo.endX = x;
      this.mouseInfo.endY = y;
      this.calcSelectArea();

      const notifySelect = () => {
        const areaCopy = JSON.parse(JSON.stringify(this.selectArea));
        this.$emit('select', this.selectArea);
      };

      const handleGlobalMouseUp = () => {
        this.mouseInfo.down = false;
        this.calcSelectArea();
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        notifySelect();
      };

      const handleGlobalMouseDown = () => {
        this.selectArea.enable = false;
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };

      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousedown', handleGlobalMouseDown);
    },
    /**
     * 处理LED方块 MouseOver 事件
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    handleLEDMouseOver(x, y) {
      if (this.selectMode === 2) {
        // 处理多选
        if (this.mouseInfo.down) {
          this.mouseInfo.endX = x;
          this.mouseInfo.endY = y;
          this.calcSelectArea();
        }
      } else if (this.selectMode === 1) {
        // 处理单选
        if (this.mouseInfo.down) {
          this.mouseInfo.startX = x;
          this.mouseInfo.startY = y;
          this.mouseInfo.endX = x;
          this.mouseInfo.endY = y;
          this.calcSelectArea();
        }
      } else {
        if (this.mouseDown) {
          this.$emit('drag', x, y);
        }
      }
    },
    /**
     * 计算选中区域
     */
    calcSelectArea() {
      if (
        !~this.mouseInfo.startX &&
        !~this.mouseInfo.startY &&
        !~this.mouseInfo.endX &&
        !~this.mouseInfo.endY
      ) {
        this.selectArea.enable = false;
      } else {
        this.selectArea.startPos = [
          Math.min(this.mouseInfo.startX, this.mouseInfo.endX),
          Math.min(this.mouseInfo.startY, this.mouseInfo.endY)
        ];
        this.selectArea.endPos = [
          Math.max(this.mouseInfo.startX, this.mouseInfo.endX),
          Math.max(this.mouseInfo.startY, this.mouseInfo.endY)
        ];
        this.selectArea.enable = true;
      }
    },
    /**
     * 计算坐标是否处于选择区域内
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    isInsideSelectArea(x, y) {
      return (
        this.selectArea.enable &&
        x >= this.selectArea.startPos[0] &&
        x <= this.selectArea.endPos[0] &&
        y >= this.selectArea.startPos[1] &&
        y <= this.selectArea.endPos[1]
      );
    },
    /**
     * 获取指定方块的颜色
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     * @returns {string} color
     */
    getColor(x, y) {
      return this.colorData[y * this.size[0] + x];
    },
    /**
     * 设置指定方块颜色
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    setColor(x, y, color) {
      this.$set(this.colorData, y * this.size[0] + x, color);
    }
  }
};
</script>

<style lang="scss" scoped>
.led-row {
  display: flex;
}
</style>
