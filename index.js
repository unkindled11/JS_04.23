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
  return function (args) {
    clearTimeout(customTimeout);
    customTimeout = setTimeout(() => {
      func.apply(this.args);
    }, delay);
  };
}
const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 3000);
debounceLog100();
setTimeout(debounceLog100, 2000);
