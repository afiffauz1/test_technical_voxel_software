const kata = prompt("masukkan kata:");
const hasilPecah = kata.split("");
const hasilAkhir = [];

hasilPecah.forEach((huruf) => {
  if (huruf === "a") {
    huruf = "i";
  } else if (huruf === "u") {
    huruf = "i";
  } else if (huruf === "e") {
    huruf = "i";
  } else if (huruf === "o") {
    huruf = "i";
  }
  hasilAkhir.push(huruf);
});

console.log(`Kata sebelum diubah => ${kata}`);
console.log(`Kata setelah diubah => ${hasilAkhir.join("")}`);
