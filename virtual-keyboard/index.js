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
// const array = [
//   "ControlRight",
//   "ArrowRight",
//   "ArrowDown",
//   "ArrowLeft",
//   "ControlLeft",
//   "AltRight",
//   "Space",
//   "AltLeft",
//   "ControlLeft",
//   "ShiftRight",
//   "ArrowUp",
//   "Slash",
//   "Period",
//   "Comma",
//   "KeyM",
//   "KeyN",
//   "KeyB",
//   "KeyV",
//   "KeyC",
//   "KeyX",
//   "KeyZ",
//   "IntlBackslash",
//   "ShiftLeft",
//   "Enter",
//   "Quote",
//   "Semicolon",
//   "KeyL",
//   "KeyK",
//   "KeyJ",
//   "KeyH",
//   "KeyG",
//   "KeyF",
//   "KeyD",
//   "KeyS",
//   "KeyA",
//   "CapsLock",
//   "Delete",
//   "Backslash",
//   "BracketRight",
//   "BracketLeft",
//   "KeyP",
//   "KeyO",
//   "KeyI",
//   "KeyU",
//   "KeyY",
//   "KeyT",
//   "KeyR",
//   "KeyE",
//   "KeyW",
//   "KeyQ",
//   "Tab",
//   "NumLock",
// ];
const array = [
  { name: "Backquote", value: ["`"], class: [""] },
  { name: "Digit1", value: [1], class: [""] },
  { name: "Digit2", value: [2], class: [""] },
  { name: "Digit3", value: [3], class: [""] },
  { name: "Digit4", value: [4], class: [""] },
  { name: "Digit5", value: [5], class: [""] },
  { name: "Digit6", value: [6], class: [""] },
  { name: "Digit7", value: [7], class: [""] },
  { name: "Digit8", value: [8], class: [""] },
  { name: "Digit9", value: [9], class: [""] },
  { name: "Digit0", value: [0], class: [""] },
  { name: "Minus", value: ["-"], class: [""] },
  { name: "Equal", value: ["="], class: [""] },
  { name: "Backspace", value: ["Backspace"], class: ["long"] },
  { name: "Tab", value: ["Tab"], class: [""] },
  { name: "KeyQ", value: ["q"], class: [""] },
  { name: "KeyW", value: ["w"], class: [""] },
  { name: "KeyE", value: ["e"], class: [""] },
  { name: "KeyR", value: ["r"], class: [""] },
  { name: "KeyT", value: ["t"], class: [""] },
  { name: "KeyY", value: ["y"], class: [""] },
  { name: "KeyU", value: ["u"], class: [""] },
  { name: "KeyI", value: ["i"], class: [""] },
  { name: "KeyO", value: ["o"], class: [""] },
  { name: "KeyP", value: ["p"], class: [""] },
  { name: "BracketLeft", value: [""], class: [""] },
  { name: "BracketRight", value: [""], class: [""] },
  { name: "Backslash", value: [""], class: [""] },
  { name: "Delete", value: ["Del"], class: [""] },
  { name: "CapsLock", value: ["CapsLock"], class: ["long"] },
  { name: "KeyA", value: ["a"], class: [""] },
  { name: "KeyS", value: ["s"], class: [""] },
  { name: "KeyD", value: ["d"], class: [""] },
  { name: "KeyF", value: ["f"], class: [""] },
  { name: "KeyG", value: ["g"], class: [""] },
  { name: "KeyH", value: ["h"], class: [""] },
  { name: "KeyJ", value: ["j"], class: [""] },
  { name: "KeyK", value: ["k"], class: [""] },
  { name: "KeyL", value: ["l"], class: [""] },
  { name: "Semicolon", value: [";"], class: [""] },
  { name: "Quote", value: ["'"], class: [""] },
  { name: "Enter", value: ["Enter"], class: ["long"] },
  { name: "ShiftLeft", value: ["Shift"], class: ["long"] },
  { name: "KeyZ", value: ["z"], class: [""] },
  { name: "KeyX", value: ["x"], class: [""] },
  { name: "KeyC", value: ["c"], class: [""] },
  { name: "KeyV", value: ["v"], class: [""] },
  { name: "KeyB", value: ["b"], class: [""] },
  { name: "KeyN", value: ["n"], class: [""] },
  { name: "KeyM", value: ["m"], class: [""] },
  { name: "Comma", value: [","], class: [""] },
  { name: "Period", value: [","], class: [""] },
  { name: "Slash", value: ["."], class: [""] },
  { name: "ArrowUp", value: ["/"], class: [""] },
  { name: "ShiftRight", value: ["*"], class: [""] },
  { name: "ShiftRight", value: ["Shift"], class: [""] },
  { name: "ControlLeft", value: ["Ctrl"], class: [""] },
  { name: "MetaLeft", value: ["Win"], class: [""] },
  { name: "AltLeft", value: ["Alt"], class: [""] },
  { name: "Space", value: [""], class: ["logest"] },
  { name: "AltRight", value: ["Alt"], class: [""] },
  { name: "ArrowLeft", value: ["*"], class: [""] },
  { name: "ArrowDown", value: ["*"], class: [""] },
  { name: "ArrowRight", value: ["*"], class: [""] },
  { name: "ControlRight", value: ["Ctrl"], class: [""] },
  // "Tab",
  // "KeyQ",
  // "KeyW",
  // "KeyE",
  // "KeyR",
  // "KeyT",
  // "KeyY",
  // "KeyU",
  // "KeyI",
  // "KeyO",
  // "KeyP",
  // "BracketLeft",
  // "BracketRight",
  // "Backslash",
  // "Delete",
  // "CapsLock",
  // "KeyA",
  // "KeyS",
  // "KeyD",
  // "KeyF",
  // "KeyG",
  // "KeyH",
  // "KeyJ",
  // "KeyK",
  // "KeyL",
  // "Semicolon",
  // "Quote",
  // "Enter",
  // "ShiftLeft",
  // "KeyZ",
  // "KeyX",
  // "KeyC",
  // "KeyV",
  // "KeyB",
  // "KeyN",
  // "KeyM",
  // "Comma",
  // "Period",
  // "Slash",
  // "ArrowUp",
  // "ShiftRight",
  // "ControlLeft",
  // "MetaLeft",
  // "AltLeft",
  // "Space",
  // "AltRight",
  // "ArrowLeft",
  // "ArrowDown",
  // "ArrowRight",
  // "ControlRight",
];
// eslint-disable-next-line no-plusplus
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
    // let count = this.getAttribute("data-item");
    // document.addEventListener("keyup", function (e) {
    //   if (e === count) {
    //     txtarea.innerHTML += count;
    //   }
    // });
  });
}

document.addEventListener("keyup", (e) => {
  console.log(e.code);
  txtarea.value += e.key;
  // for (let i = 0; i < board.children; i++) {
  //   board.children[i].addEventListener("keyup", function () {
  //     if (e.code === this.getAttribute("data-item")) {
  //       txtarea.textContent = board.children[i].value;
  //       console.log("zahodim");
  //     }
  //   });
  // }
});
console.log(board.childNodes);
