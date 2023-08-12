import Particle from "./Particle.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const p = new Particle(width / 2, height / 2, 3, Math.random() * Math.PI * 2);

	p.radius = 50;

	update();

	function update() {
		if (!context) return;
		context.clearRect(0, 0, width, height);


		p.update();

		context.beginPath();
		context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
		context.fill();

		if (p.position.x - p.radius > width) {
			p.position.x = -p.radius;
		}
		if (p.position.x + p.radius < 0) {
			p.position.x = width + p.radius;
		}
		if (p.position.y - p.radius > height) {
			p.position.y = -p.radius;
		}
		if (p.position.y + p.radius < 0) {
			p.position.y = height + p.radius;
		}


		requestAnimationFrame(update);
	}
};