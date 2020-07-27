/**
 * 十六进制颜色转RGB
 * @param {string} str 十六进制颜色值
 * @returns {Array} RGB数组
 */
const hex2rgb = function(str) {
  if (/^#[0-9a-fA-F]{3}$/.exec(str)) {
    const r = parseInt(str[1] + str[1], 16);
    const g = parseInt(str[2] + str[2], 16);
    const b = parseInt(str[3] + str[3], 16);
    return [r, g, b];
  } else if (/^#[0-9a-fA-F]{6}$/.exec(str)) {
    const r = parseInt(str[1] + str[2], 16);
    const g = parseInt(str[3] + str[4], 16);
    const b = parseInt(str[5] + str[6], 16);
    return [r, g, b];
  } else {
    return [0, 0, 0];
  }
};

/**
 * RGB颜色转十六进制
 * @param {Array} rgb RGB数组
 * @returns {string} 十六进制
 */
const rgb2hex = function([r, g, b]) {
  const fn = (s) => {
    let hex = s.toString(16);
    if (hex.length === 1) hex += '0';
    return hex;
  };
  return '#' + fn(r) + fn(g) + fn(b);
};

/**
 * ArrayBuffer 转 Base64
 * @param {ArrayBuffer} buffer
 * @returns {string} base64
 */
const buffer2base64 = function(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  for (var len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

export default {
  hex2rgb,
  rgb2hex,
  buffer2base64
};
