import * as PIXI from 'pixi.js'

let flg = false;
function down(event:any):void  {
    flg = true;
    setLoc(event);
}

function up (event:any):void {
    flg = false;
    setLoc(event);
}
function move (event:any):void {
    if(flg) {
        setLoc(event)
    }
}

function setLoc (event:any):void {
    
    console.log("x",event.clientX)
    console.log("y",event.clientY)
    //obj?.left =event.clientX - 50 + 'px';

}

window.onload=() => {
    let obj = document.getElementById("msg");
    obj?.addEventListener("mousedown",down);
    obj?.addEventListener("mouseup",up);
    obj?.addEventListener("mousemove",move);
}

// // 
// onmousedown="down(event)"
// onmouseup="up(event)"
// onmousemove="move(event)"