const kata = prompt("masukkan kata");

if (kata.split("").reverse().join("") === kata) {
  console.log("Benar");
} else {
  console.log("Salah");
}
