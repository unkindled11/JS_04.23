// ===Task#1===
Array.prototype.customFilter = function (item, obj) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (item.call(obj, this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};
// ===Task#2===
function createDebounceFunction(func, delay) {
  let customTimeout;
  return function () {
    clearTimeout(customTimeout);
    customTimeout = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}
