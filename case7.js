let uang = Number(prompt("masukkan angka"));
let pecahan = [];

while (uang != 0) {
  if (uang >= 50000) {
    pecahan.push(50000);
    uang = uang - 50000;
  } else if (uang >= 20000) {
    pecahan.push(20000);
    uang = uang - 20000;
  } else if (uang >= 2000) {
    pecahan.push(2000);
    uang = uang - 2000;
  } else if (uang >= 200) {
    pecahan.push(200);
    uang = uang - 200;
  } else {
    pecahan.push(100);
    uang = uang - 100;
  }
}

console.log(`hasil pecahan uang => ${pecahan}`);
