<template>
  <div class="led-matrix">
    <div v-for="y in size[1]" :key="y" class="led-row">
      <LEDBlock
        v-for="x in size[0]"
        :key="x"
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
    }
  },
  data() {
    return {
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
      }
    };
  },
  methods: {
    /**
     * 处理LED方块 MouseDown 事件
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    handleLEDMouseDown(x, y) {
      this.mouseInfo.down = true;
      this.mouseInfo.startX = x;
      this.mouseInfo.startY = y;
      this.mouseInfo.endX = x;
      this.mouseInfo.endY = y;
      this.calcSelectArea();

      const handleGlobalMousUp = () => {
        this.mouseInfo.down = false;
        this.calcSelectArea();
        document.removeEventListener('mouseup', handleGlobalMousUp);
      };

      const handleGlobalMouseDown = () => {
        this.selectArea.enable = false;
        document.removeEventListener('mousedown', handleGlobalMouseDown);
      };

      document.addEventListener('mouseup', handleGlobalMousUp);
      document.addEventListener('mousedown', handleGlobalMouseDown);
    },
    /**
     * 处理LED方块 MouseOver 事件
     * @param {number} x coordinate axis x
     * @param {number} y coordinate axis y
     */
    handleLEDMouseOver(x, y) {
      if (this.mouseInfo.down) {
        this.mouseInfo.endX = x;
        this.mouseInfo.endY = y;
        this.calcSelectArea();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.led-row {
  display: flex;
}
</style>
