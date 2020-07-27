import { encode, decode } from 'base64-arraybuffer';
window.encode = encode;
window.decode = decode;

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
 * 下载二进制文件
 * @param {Array} buffer 二进制数据
 * @param {string} filename 文件名
 */
const downloadBinary = function(buffer, filename = 'untitled.led') {
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(new Blob([buffer]));
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export default {
  hex2rgb,
  rgb2hex,
  bin2str: encode,
  str2bin: decode,
  downloadBinary
};
