export const Tools = {
  SELECT: 'select',
  DRAW: 'brush',
  ASSETS: 'tpl'
};

class ToolBox {
  constructor(matrixElm) {
    this.matrixElm = matrixElm;
  }

  handleSelect(mode, selectArea) {
    // TODO:
  }

  handleDrag(mode, dragPos, color) {
    if (mode === Tools.DRAW) {
      const [x, y] = dragPos;
      this.matrixElm.setColor(x, y, color);
    }
  }
}

export default ToolBox;
