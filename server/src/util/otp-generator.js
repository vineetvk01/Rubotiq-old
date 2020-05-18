function otpgenerator (config) {
  const { digits = 4, } = config;

  const requiredDigits = parseInt(digits);
  if (Object.is(requiredDigits, NaN)) {
    throw new Error(' { digits } should be a number.');
  }

  const min = Math.pow(10, digits);
  const max = Math.pow(10, digits + 1) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default otpgenerator;
