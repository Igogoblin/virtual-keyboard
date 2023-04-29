console.log("work");
const arr = [];
document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log("event.code", event.code); // this is my solution!!!
  console.log("event.key", event.key);
  console.log(event.getModifierState("Shift", "NumLock")); // true
  arr.push(event.code);
  if (event.code === "NumLock") {
    console.log(arr);
  }
});
//  65 buttons

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("area");
const h = document.createElement("h1");
h.textContent = "Виртуальная клавиатура";
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
// , ""
const array = [
  { name: "Backquote", value: ["`", "~"], class: [""] },
  { name: "Digit1", value: [1, "!"], class: [""] },
  { name: "Digit2", value: [2, "@"], class: [""] },
  { name: "Digit3", value: [3, "#"], class: [""] },
  { name: "Digit4", value: [4, "$"], class: [""] },
  { name: "Digit5", value: [5, "%"], class: [""] },
  { name: "Digit6", value: [6, "^"], class: [""] },
  { name: "Digit7", value: [7, "&"], class: [""] },
  { name: "Digit8", value: [8, "*"], class: [""] },
  { name: "Digit9", value: [9, "("], class: [""] },
  { name: "Digit0", value: [0, ")"], class: [""] },
  { name: "Minus", value: ["-", "_"], class: [""] },
  { name: "Equal", value: ["=", "+"], class: [""] },
  { name: "Backspace", value: ["Backspace"], class: ["dark long"] },
  { name: "Tab", value: ["Tab"], class: ["dark"] },
  { name: "KeyQ", value: ["q", "Q"], class: [""] },
  { name: "KeyW", value: ["w", "W"], class: [""] },
  { name: "KeyE", value: ["e", "E"], class: [""] },
  { name: "KeyR", value: ["r", "R"], class: [""] },
  { name: "KeyT", value: ["t", "T"], class: [""] },
  { name: "KeyY", value: ["y", "Y"], class: [""] },
  { name: "KeyU", value: ["u", "U"], class: [""] },
  { name: "KeyI", value: ["i", "I"], class: [""] },
  { name: "KeyO", value: ["o", "O"], class: [""] },
  { name: "KeyP", value: ["p", "P"], class: [""] },
  { name: "BracketLeft", value: ["[", "{"], class: [""] },
  { name: "BracketRight", value: ["]", "{"], class: [""] },
  { name: "Backslash", value: ["\\", ""], class: [""] },
  { name: "Delete", value: ["Del"], class: ["dark"] },
  { name: "CapsLock", value: ["CapsLock"], class: ["dark long"] },
  { name: "KeyA", value: ["a", "A"], class: [""] },
  { name: "KeyS", value: ["s", "S"], class: [""] },
  { name: "KeyD", value: ["d", "D"], class: [""] },
  { name: "KeyF", value: ["f", "F"], class: [""] },
  { name: "KeyG", value: ["g", "G"], class: [""] },
  { name: "KeyH", value: ["h", "H"], class: [""] },
  { name: "KeyJ", value: ["j", "J"], class: [""] },
  { name: "KeyK", value: ["k", "K"], class: [""] },
  { name: "KeyL", value: ["l", "L"], class: [""] },
  { name: "Semicolon", value: [";"], class: [""] },
  { name: "Quote", value: ["'"], class: [""] },
  { name: "Enter", value: ["Enter"], class: ["dark long"] },
  { name: "ShiftLeft", value: ["Shift"], class: ["dark long"] },
  { name: "KeyZ", value: ["z", "Z"], class: [""] },
  { name: "KeyX", value: ["x", "X"], class: [""] },
  { name: "KeyC", value: ["c", "C"], class: [""] },
  { name: "KeyV", value: ["v", "V"], class: [""] },
  { name: "KeyB", value: ["b", "B"], class: [""] },
  { name: "KeyN", value: ["n", "N"], class: [""] },
  { name: "KeyM", value: ["m", "M"], class: [""] },
  { name: "Comma", value: [","], class: [""] },
  { name: "Period", value: [","], class: [""] },
  { name: "Slash", value: ["."], class: [""] },
  { name: "ArrowUp", value: ["▲"], class: ["dark"] },
  { name: "ShiftRight", value: ["Shift"], class: ["dark long"] },
  { name: "ControlLeft", value: ["Ctrl"], class: ["dark"] },
  { name: "MetaLeft", value: ["Win"], class: ["dark"] },
  { name: "AltLeft", value: ["Alt"], class: ["dark"] },
  { name: "Space", value: [""], class: ["logest"] },
  { name: "AltRight", value: ["Alt"], class: ["dark"] },
  { name: "ArrowLeft", value: ["◄"], class: ["dark"] },
  { name: "ArrowDown", value: ["▼"], class: ["dark"] },
  { name: "ArrowRight", value: ["►"], class: ["dark"] },
  { name: "ControlRight", value: ["Ctrl"], class: ["dark"] },
];

let txt = "";

for (let i = 0; i < array.length; i++) {
  // let d = document.createElement("div");
  // eslint-disable-next-line quotes

  txt += `<div data-item="${array[i].name}" class="${array[i].class}">${array[i].value[0]}</div>`;
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
});

document.addEventListener("keyup", (e) => {
  console.log(e.code);
  txtarea.value += e.key;
});
console.log(board.childNodes);
