const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordGenerate = document.getElementById("btn1");
let symbolsBtn = document.getElementById("btn2");
let numbersBtn = document.getElementById("btn3");
let password1 = document.getElementById("pw1");
let password2 = document.getElementById("pw2");
let darkMode = document.getElementById("dark-mode");
let lightMode = document.getElementById("light-mode");

let includeSymbols = true;
let includeNumbers = true;
let isDark = true;

function password() {
  let availableCharacters = characters.filter((item) => {
    const isNumber = /[0-9]/.test(item);
    const isSymbol = /[^a-zA-Z0-9]/.test(item);

    if (!includeSymbols && isSymbol) return false;
    if (!includeNumbers && isNumber) return false;
    return true;
  });

  // PASSWORD 1
  let generatePassword1 = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex1 = Math.floor(Math.random() * availableCharacters.length);
    generatePassword1 += availableCharacters[randomIndex1];
  }
  password1.textContent = generatePassword1;
  ((password1.style.fontFamily = "Karla"), sans - serif);

  // PASSWORD 2
  let generatePassword2 = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex2 = Math.floor(Math.random() * availableCharacters.length);
    generatePassword2 += availableCharacters[randomIndex2];
  }
  password2.textContent = generatePassword2;
  ((password2.style.fontFamily = "Karla"), sans - serif);
}

function toggleSymbols() {
  includeSymbols = !includeSymbols;
  symbolsBtn.classList.toggle("active", includeSymbols);
}

function toggleNumbers() {
  includeNumbers = !includeNumbers;
  numbersBtn.classList.toggle("active", includeNumbers);
}

function copyPw() {
  // Check if empty before attempting to copy
  if (!password1.textContent || !password2.textContent) {
    alert("Generate a password first!");
    return;
  }

  // PASSWORD 1
  navigator.clipboard
    .writeText(password1.textContent)
    .then(() => {
      alert("Copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });

  // PASSWORD 2
  navigator.clipboard
    .writeText(password2.textContent)
    .then(() => {
      alert("Copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

function toggleLight() {
  if (!isDark) return;
  const container = document.querySelector(".container");
  container.classList.toggle("light-mode");
  isDark = !isDark;
}

function toggleDark() {
  if (isDark) return;
  const container = document.querySelector(".container");
  container.classList.remove("light-mode");
  isDark = true;
}
