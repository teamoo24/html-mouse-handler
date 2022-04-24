import * as PIXI from 'pixi.js'

window.onload = () => {
    const app = new PIXI.Application({width: 400, height: 200});
	document.getElementById("main")?.appendChild(app.view);
}