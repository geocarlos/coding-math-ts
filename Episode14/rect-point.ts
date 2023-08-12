import { Utils } from "./Utils.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d")!;
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const rect = {
		x: 300,
		y: 200,
		width: -200,
		height: -100
	};

	document.body.addEventListener("mousemove", function (event) {

		context.clearRect(0, 0, width, height);
		if (Utils.pointInRect(event.clientX, event.clientY, rect)) {
			context.fillStyle = "#ff6666";
		}
		else {
			context.fillStyle = "#999999";
		}
		context.fillRect(rect.x, rect.y, rect.width, rect.height);
	})
};