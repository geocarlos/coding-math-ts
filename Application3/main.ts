import Particle from "./Particle.js";
import { Utils } from "./Utils.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d")!;
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const gun = {
		x: 100,
		y: height,
		angle: -Math.PI / 4
	};
	const cannonBall = new Particle(gun.x, gun.y, 15, gun.angle, 0.2);
	
	cannonBall.radius = 7;
	
	let isShooting = false;
	
	const forceSpeed = 0.1;
	let forceAngle = 0;
	let rawForce = 0;

	update();

	document.body.addEventListener("mousedown", onMouseDown);

	document.body.addEventListener("keydown", function (event) {
		if (event.key === ' ' && !isShooting) {
			shoot();
		}
	});

	function shoot() {
		cannonBall.position.x = gun.x + Math.cos(gun.angle) * 40;
		cannonBall.position.y = gun.y + Math.sin(gun.angle) * 40;
		cannonBall.velocity.length = Utils.map(rawForce, -1, 1, 2, 20);
		cannonBall.velocity.angle = gun.angle;

		isShooting = true;
	}

	function update() {
		if (isShooting) {
			cannonBall.update();
		}
		else {
			forceAngle += forceSpeed;
			rawForce = Math.sin(forceAngle);
		}
		draw();

		if (cannonBall.position.y > height) {
			isShooting = false;
		}
		requestAnimationFrame(update);
	}

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

		context.fillStyle = "#ccc";
		context.beginPath();
		context.rect(10, height - 10, 20, -100);
		context.fill();

		context.fillStyle = "#666";
		context.beginPath();
		context.rect(10, height - 10, 20, Utils.map(rawForce, -1, 1, 0, -100));
		context.fill();

		context.fillStyle = "#000";
		context.beginPath();
		context.arc(gun.x, gun.y, 24, 0, Math.PI * 2, false);
		context.fill();

		context.save();
		context.translate(gun.x, gun.y);
		context.rotate(gun.angle);
		context.fillRect(0, -8, 40, 16);
		context.restore();

		context.beginPath();
		context.arc(cannonBall.position.x,
			cannonBall.position.y,
			cannonBall.radius,
			0, Math.PI * 2, false);
		context.fill();
	}

};