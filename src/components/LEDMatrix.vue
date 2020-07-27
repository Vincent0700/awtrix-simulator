<template>
  <div class="led-matrix">
    <div v-for="(_, y) in size[1]" :key="y" class="led-row">
      <LEDBlock
        v-for="(_, x) in size[0]"
        :key="x"
        :color="getColor(x, y) | filterColor"
        :active="isInsideSelectArea(x, y)"
        @mousedown="handleLEDMouseDown(x, y)"
        @mouseover="handleLEDMouseOver(x, y)"
      />
    </div>
  </div>
</template>

<script>
import LEDBlock from '@/components/LEDBlock.vue';
import tools from '@/libs/tools.js';

export default {
  name: 'LEDMatrix',
  components: {
    LEDBlock
  },
  filters: {
    filterColor(color) {
      return color ? color : '#444';
    }
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
    const defaultColors = Array(count).fill(null);
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
  created() {
    document.addEventListener('mousedown', () => (this.mouseDown = true));
    document.addEventListener('mouseup', () => (this.mouseDown = false));
  },
  methods: {
    /**
     * 处理LED方块 MouseDown 事件
     * @param {number} x x坐标
     * @param {number} y y坐标
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
        notifySelect();
      };

      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousedown', handleGlobalMouseDown);
    },
    /**
     * 处理LED方块 MouseOver 事件
     * @param {number} x x坐标
     * @param {number} y y坐标
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
        // 处理绘制模式
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
     * @param {number} x x坐标
     * @param {number} y y坐标
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
     * @param {number} x x坐标
     * @param {number} y y坐标
     * @returns {string} color
     */
    getColor(x, y) {
      return this.colorData[y * this.size[0] + x];
    },
    /**
     * 设置指定方块颜色
     * @param {number} x x坐标
     * @param {number} y y坐标
     */
    setColor(x, y, color) {
      this.$set(this.colorData, y * this.size[0] + x, color);
    },
    /**
     * 获取方块数据
     * @param {number} x1 左上x坐标
     * @param {number} y1 左上y坐标
     * @param {number} x2 右下x坐标
     * @param {number} y2 右下y坐标
     */
    getData(x1, y1, x2, y2) {
      const width = x2 - x1 + 1;
      const height = y2 - y1 + 1;
      const bufferSize = width * height * 3 + 2;
      const buffer = new ArrayBuffer(bufferSize);
      const view = new DataView(buffer);
      let offset = 0;
      view.setUint8(offset++, width);
      view.setUint8(offset++, height);
      for (let y = y1; y <= y2; ++y) {
        for (let x = x1; x <= x2; ++x) {
          const color = this.getColor(x, y);
          const [r, g, b] = tools.hex2rgb(color);
          view.setUint8(offset++, r);
          view.setUint8(offset++, g);
          view.setUint8(offset++, b);
        }
      }
      return buffer;
    },
    /**
     * 设置方块数据
     * @param {number} x1 左上x坐标
     * @param {number} y1 左上y坐标
     * @param {ArrayBuffer} buffer
     */
    setData(x1, y1, buffer) {
      let offset = 0;
      const array = new Uint8Array(buffer);
      const width = array[offset++];
      const height = array[offset++];
      for (let y = y1; y <= y1 + height - 1; ++y) {
        for (let x = x1; x <= x1 + width - 1; ++x) {
          const r = array[offset++];
          const g = array[offset++];
          const b = array[offset++];
          if (!r && !g && !b) {
            this.setColor(x, y, null);
          } else {
            const color = tools.rgb2hex([r, g, b]);
            this.setColor(x, y, color);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.led-row {
  display: flex;
}
</style>
