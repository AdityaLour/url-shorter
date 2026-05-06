const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const conversionbase62 = (num) => {
  let shortcode = "";

  while (num > 0) {
    const remainder = num % 62;

    shortCode = shortcode + BASE62[remainder];
    num = Math.floor(num / 62);
  }

  return shortCode;
};

module.exports = conversionbase62;
