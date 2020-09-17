const rudi = [8, 7, 6, 9, 0];
const ani = [5, 8, 9, 6, 0];

for (i = 0; i <= rudi.length; i++) {
  if (rudi[i] > ani[i]) {
    rudi[4] += 1;
  }
}

for (i = 0; i <= ani.length; i++) {
  if (ani[i] > rudi[i]) {
    ani[4] += 1;
  }
}

console.log(
  `
nilai Rudi
sejarah: ${rudi[0]}
matematika: ${rudi[1]}
sosiologi: ${rudi[2]}
kewarganegaran: ${rudi[3]}
===================
ani punya nilai:
sejarah: ${ani[0]}
matematika: ${ani[1]}
sosiologi: ${ani[2]}
kewarganegaran: ${ani[3]}
===================
Rudi => ${rudi[4]}
Ani => ${ani[4]}
`
);
