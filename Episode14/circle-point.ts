import { Utils } from "./Utils.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d")!;
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const circle = {
		x: Math.random() * width,
		y: Math.random() * height,
		radius: 50 + Math.random() * 100
	};


	document.body.addEventListener("mousemove", function(event) {

		if(Utils.circlePointCollision(event.clientX, event.clientY, circle)) {
			context.fillStyle = "#f66";
		}
		else {
			context.fillStyle = "#999";
		}

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(circle.x, circle.y, circle.radius,
					0, Math.PI * 2, false);
		context.fill();
		
	})
	

};