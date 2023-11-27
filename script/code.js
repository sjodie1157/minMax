let array = [42, 28, 18, 6, 11];
document.querySelector('[data-array]').textContent = array

let minValue = Math.min(...array);
document.querySelector('[data-min]').textContent = minValue
let maxValue = Math.max(...array);
document.querySelector('[data-max]').textContent = maxValue

