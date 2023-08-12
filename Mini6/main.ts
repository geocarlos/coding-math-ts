import { Utils } from "./Utils.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d") as CanvasRenderingContext2D;
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	for (let i = 0; i < 200; i++) {
		context.beginPath();
		context.fillStyle = 'red';
		context.arc(Utils.randomRange(0, width * .33), Utils.randomRange(0, height), Utils.randomRange(10, 40), 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = 'green';
		context.arc(Utils.randomRange(width * .33, width * .66), Utils.randomRange(0, height), Utils.randomRange(10, 40), 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = 'blue';
		context.arc(Utils.randomRange(width * .66, width), Utils.randomRange(0, height), Utils.randomRange(10, 40), 0, Math.PI * 2, false);
		context.fill();
	}
};