
const validateValue = (value) => {
  // return !(value < 0 || value > 100);
  if (value < 0 || value > 100) {
    return false;
  }
  return true;
}

module.exports = validateValue;
