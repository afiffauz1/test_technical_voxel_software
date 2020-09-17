let data = [4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0];

let newData = data.filter((item, pos) => {
  return data.indexOf(item) === pos;
});

console.log(newData);

console.log(`old Data = ${data}`);
console.log(`new Data after sort = ${newData.sort((a, b) => a - b)}`);
