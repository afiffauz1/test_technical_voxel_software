let data = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67];

let newData = data.filter((item, pos) => {
  return data.indexOf(item) === pos;
});

console.log(`old Data = ${data}`);
console.log(`new Data = ${newData}`);
