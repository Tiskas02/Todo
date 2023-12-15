import {
  loadHandler,
  beforeUnloadHandler,
} from "./eventHandle/eventControl.js";

window.addEventListener("load", loadHandler);
window.addEventListener("unload", beforeUnloadHandler);
let x = 5;
console.log(x++); // 5
console.log(++x); //7
