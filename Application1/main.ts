import { Utils } from "./Utils.js";

window.onload = function() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
		const context = canvas.getContext("2d")!;
		const width = canvas.width = window.innerWidth;
		const height = canvas.height = window.innerHeight;
		const gun = {
			x: 100,
			y: height,
			angle: -Math.PI / 4
		};

	draw();

	document.body.addEventListener("mousedown", onMouseDown);

	function onMouseDown(event: MouseEvent) {
		document.body.addEventListener("mousemove", onMouseMove);
		document.body.addEventListener("mouseup", onMouseUp);
		aimGun(event.clientX, event.clientY);
	}

	function onMouseMove(event: MouseEvent) {
		aimGun(event.clientX, event.clientY);
	}

	function onMouseUp(event: MouseEvent) {
		document.body.removeEventListener("mousemove", onMouseMove);
		document.body.removeEventListener("mouseup", onMouseUp);
		aimGun(event.clientX, event.clientY);
	}

	function aimGun(mouseX: number, mouseY: number) {
		gun.angle = Utils.clamp(Math.atan2(mouseY - gun.y, mouseX - gun.x), -Math.PI / 2, -0.3);
		draw();
	}

	function draw() {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.arc(gun.x, gun.y, 24, 0, Math.PI * 2, false);
		context.fill();

		context.save();
		context.translate(gun.x, gun.y);
		context.rotate(gun.angle);
		context.fillRect(0, -8, 40, 16);
		context.restore();
	}

};