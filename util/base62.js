const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const conversionbase62 = (num) => {
  let shortCode = "";

  while (num > 0) {
    const remainder = num % 62;

    shortCode =  BASE62[remainder] + shortCode ;
    num = Math.floor(num / 62);
  }

  return shortCode;
};

module.exports = conversionbase62;
