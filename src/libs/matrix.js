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

  onDraw([x, y], color) {
    this.matrixElm.setColor(x, y, color);
  }

  onDrawArea([x1, y1], [x2, y2], color) {
    for (let y = y1; y <= y2; ++y) {
      for (let x = x1; x <= x2; ++x) {
        this.onDraw([x, y], color);
      }
    }
  }
}

export default Matrix;
