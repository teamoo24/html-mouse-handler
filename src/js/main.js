"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let flg = false;
function down(event) {
    flg = true;
    setLoc(event);
}
function up(event) {
    flg = false;
    setLoc(event);
}
function move(event) {
    if (flg) {
        setLoc(event);
    }
}
function setLoc(event) {
    console.log("x", event.clientX);
    console.log("y", event.clientY);
    //obj?.left =event.clientX - 50 + 'px';
}
window.onload = () => {
    let obj = document.getElementById("msg");
    obj === null || obj === void 0 ? void 0 : obj.addEventListener("mousedown", down);
    obj === null || obj === void 0 ? void 0 : obj.addEventListener("mouseup", up);
    obj === null || obj === void 0 ? void 0 : obj.addEventListener("mousemove", move);
};
// // 
// onmousedown="down(event)"
// onmouseup="up(event)"
// onmousemove="move(event)"
