const arr = [];
// let capsL = false;
// let langI = false;
console.log(localStorage.getItem("capsL"));
!localStorage.getItem("capsL")
  ? (capsL = false)
  : (capsL = localStorage.getItem("capsL"));
!localStorage.getItem("langI")
  ? (langI = false)
  : (langI = localStorage.getItem("langI"));

console.log("capsL", capsL);
console.log("langI", langI);

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("area");
const h = document.createElement("h1");
h.textContent = "Virtual Keyboard";
const txtarea = document.createElement("textarea");
const board = document.createElement("div");
board.classList.add("board");
const p = document.createElement("p");

body.prepend(div);
div.append(h);
div.append(txtarea);
div.append(board);
div.append(p);
// eslint-disable-next-line quotes
p.innerHTML = `<p>Клавиатура создана в операционной системе Windows<p><p>Для переключения языка комбинации: левые cltr + alt</p>`;

const array = [
  { name: "Backquote", value: ["`", "~", "ё", "Ё"], class: [""] },
  { name: "Digit1", value: [1, "!", "1", "!"], class: [""] },
  { name: "Digit2", value: [2, "@", "2", '"'], class: [""] },
  { name: "Digit3", value: [3, "#", "3", "№"], class: [""] },
  { name: "Digit4", value: [4, "$", "4", ";"], class: [""] },
  { name: "Digit5", value: [5, "%", "5", "%"], class: [""] },
  { name: "Digit6", value: [6, "^", "6", ":"], class: [""] },
  { name: "Digit7", value: [7, "&", "7", "?"], class: [""] },
  { name: "Digit8", value: [8, "*", "8", "*"], class: [""] },
  { name: "Digit9", value: [9, "(", "9", "("], class: [""] },
  { name: "Digit0", value: [0, ")", "0", ")"], class: [""] },
  { name: "Minus", value: ["-", "_", "-", "_"], class: [""] },
  { name: "Equal", value: ["=", "+", "=", "+"], class: [""] },
  {
    name: "Backspace",
    value: ["Backspace", "Backspace", "Backspace", "Backspace"],
    class: ["dark long"],
  },
  { name: "Tab", value: ["Tab", "Tab", "", ""], class: ["dark"] },
  { name: "KeyQ", value: ["q", "Q", "й", "Й"], class: [""] },
  { name: "KeyW", value: ["w", "W", "ц", "Ц"], class: [""] },
  { name: "KeyE", value: ["e", "E", "у", "У"], class: [""] },
  { name: "KeyR", value: ["r", "R", "к", "К"], class: [""] },
  { name: "KeyT", value: ["t", "T", "е", "Е"], class: [""] },
  { name: "KeyY", value: ["y", "Y", "н", "Н"], class: [""] },
  { name: "KeyU", value: ["u", "U", "г", "Г"], class: [""] },
  { name: "KeyI", value: ["i", "I", "ш", "Ш"], class: [""] },
  { name: "KeyO", value: ["o", "O", "щ", "Щ"], class: [""] },
  { name: "KeyP", value: ["p", "P", "з", "З"], class: [""] },
  { name: "BracketLeft", value: ["[", "{", "х", "Х"], class: [""] },
  { name: "BracketRight", value: ["]", "{", "ъ", "Ъ"], class: [""] },
  { name: "Backslash", value: ["\\", "|", "\\", "/"], class: [""] },
  { name: "Delete", value: ["Del", "Del", "Del", "Del"], class: ["dark"] },
  {
    name: "CapsLock",
    value: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
    class: ["dark long"],
  },
  { name: "KeyA", value: ["a", "A", "ф", "Ф"], class: [""] },
  { name: "KeyS", value: ["s", "S", "ы", "Ы"], class: [""] },
  { name: "KeyD", value: ["d", "D", "в", "В"], class: [""] },
  { name: "KeyF", value: ["f", "F", "а", "А"], class: [""] },
  { name: "KeyG", value: ["g", "G", "п", "П"], class: [""] },
  { name: "KeyH", value: ["h", "H", "р", "Р"], class: [""] },
  { name: "KeyJ", value: ["j", "J", "о", "О"], class: [""] },
  { name: "KeyK", value: ["k", "K", "л", "Л"], class: [""] },
  { name: "KeyL", value: ["l", "L", "д", "Д"], class: [""] },
  { name: "Semicolon", value: [";", ":", "ж", "Ж"], class: [""] },
  { name: "Quote", value: ["'", '"', "э", "Э"], class: [""] },
  {
    name: "Enter",
    value: ["Enter", "Enter", "Enter", "Enter"],
    class: ["dark long"],
  },
  {
    name: "ShiftLeft",
    value: ["Shift", "Shift", "Shift", "Shift"],
    class: ["dark long"],
  },
  { name: "KeyZ", value: ["z", "Z", "я", "Я"], class: [""] },
  { name: "KeyX", value: ["x", "X", "ч", "Ч"], class: [""] },
  { name: "KeyC", value: ["c", "C", "с", "С"], class: [""] },
  { name: "KeyV", value: ["v", "V", "м", "М"], class: [""] },
  { name: "KeyB", value: ["b", "B", "и", "И"], class: [""] },
  { name: "KeyN", value: ["n", "N", "т", "Т"], class: [""] },
  { name: "KeyM", value: ["m", "M", "ь", "Ь"], class: [""] },
  { name: "Comma", value: [",", "<", "б", "Б"], class: [""] },
  { name: "Period", value: [".", ">", "ю", "Ю"], class: [""] },
  { name: "Slash", value: ["/", "?", ".", ","], class: [""] },
  { name: "ArrowUp", value: ["▲", "▲", "▲", "▲"], class: ["dark"] },
  {
    name: "ShiftRight",
    value: ["Shift", "Shift", "Shift", "Shift"],
    class: ["dark long"],
  },
  {
    name: "ControlLeft",
    value: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    class: ["dark"],
  },
  { name: "MetaLeft", value: ["Win", "Win", "Win", "Win"], class: ["dark"] },
  { name: "AltLeft", value: ["Alt", "Alt", "Alt", "Alt"], class: ["dark"] },
  { name: "Space", value: ["", "", "", ""], class: ["logest"] },
  { name: "AltRight", value: ["Alt", "Alt", "Alt", "Alt"], class: ["dark"] },
  { name: "ArrowLeft", value: ["◄", "◄", "◄", "◄"], class: ["dark"] },
  { name: "ArrowDown", value: ["▼", "▼", "▼", "▼"], class: ["dark"] },
  { name: "ArrowRight", value: ["►", "►", "►", "►"], class: ["dark"] },
  {
    name: "ControlRight",
    value: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    class: ["dark"],
  },
];

let txt = "";

for (let i = 0; i < array.length; i++) {
  // let d = document.createElement("div");

  // let forBuilding = 0;
  // if (langI == false && capsL == false) {
  //   forBuilding = 0;
  // } else if (langI == true && capsL == false) {
  //   console.log("daaaaaaa");
  //   forBuilding = 2;
  // } else if (langI == false && capsL == true) {
  //   forBuilding = 1;
  // } else if (langI == true && capsL == true) {
  //   forBuilding = 3;
  // }
  // console.log("forBuilding", forBuilding);
  // console.log(langI + " " + capsL);

  // eslint-disable-next-line quotes
  txt += `<div data-item="${array[i].name}" class="${array[i].class}">${array[i].value[forBuilding]}</div>`;
}
board.insertAdjacentHTML("beforeend", txt);

for (let i = 0; i < board.childNodes.length; i++) {
  board.childNodes[i].addEventListener("click", function () {
    console.log(this.getAttribute("data-item"));
  });
}
// work with animation
function show(e) {
  for (let i = 0; i < board.childNodes.length; i++) {
    if (board.childNodes[i].getAttribute("data-item") === e.code) {
      board.childNodes[i].style.backgroundColor = "green";
      board.childNodes[i].style.borderRadius = "20px";
      board.childNodes[i].style.animation = "all 0.2s";
      setTimeout(() => {
        board.childNodes[i].classList[0] == "dark"
          ? (board.childNodes[i].style.backgroundColor = "#111111")
          : (board.childNodes[i].style.backgroundColor = "#444444");
        board.childNodes[i].style.borderRadius = "5px";
      }, 200);
    }
  }
}

document.addEventListener("keydown", (e) => {
  show(e);
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    // shift(1);
    !langI ? shift(1) : shift(3);
  }
  console.log(e.getModifierState("Control"));
  console.log(e.getModifierState("Alt"));
  if (e.getModifierState("Control") && e.getModifierState("Alt")) {
    console.log("language");
    !langI ? (langI = true) : (langI = false);
    language();
    console.log(langI);
    localStorage.setItem("langI", langI);
  }
});

document.addEventListener("keyup", (e) => {
  // переключение языков
  // капслок
  console.log(e.code == "CapsLock");
  if (e.code == "CapsLock") {
    !capsL ? (capsL = true) : (capsL = false);
    capsLock();
    localStorage.setItem("capsL", capsL);
  }
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    !langI ? shift(0) : shift(2);
  }

  console.log(e.code);
  txtarea.value += e.key;
});
console.log(board.childNodes);

function capsLock() {
  count = 1;
  capsL ? (count = 1) : (count = 0);
  if (langI) {
    capsL ? (count = 3) : (count = 2);
  }
  for (let i = 0; i < 53; i++) {
    if (i > 0 && i < 15) {
      continue;
    }
    board.childNodes[i].textContent = array[i].value[count];
  }
}

function shift(count) {
  console.log("this is shift");
  for (let i = 0; i < 53; i++) {
    board.childNodes[i].textContent = array[i].value[count];
  }
}

function language() {
  count = 0;
  langI ? (count = 2) : (count = 0);
  for (let i = 0; i < 53; i++) {
    if (i > 0 && i < 15) {
      continue;
    }
    board.childNodes[i].textContent = array[i].value[count];
  }
}

// для печатания
