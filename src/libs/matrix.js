export const MODE = {
  SELECT: 'select',
  DRAW: 'brush'
};

class Matrix {
  constructor() {
    this.matrixElm = null;
  }

  init(matrixElm) {
    this.matrixElm = matrixElm;
  }

  onSelect(mode, selectArea) {
    // TODO:
  }

  onDraw([x, y], color) {
    this.matrixElm.setColor(x, y, color);
  }
}

export default Matrix;
