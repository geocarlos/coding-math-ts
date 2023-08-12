import Particle from "./Particle.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const particles: Particle[] = [];

	for (var i = 0; i < 100; i += 1) {
		var p = new Particle(width / 2, height, Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .2 - .1), 0.1);
		p.radius = Math.random() * 10 + 2;
		particles.push(p);
	}

	update();

	function update() {
		if (!context) return;
		context.clearRect(0, 0, width, height);


		for (var i = 0; i < 100; i += 1) {
			var p = particles[i];

			p.update();

			context.beginPath();
			context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
			context.fill();

			if (p.position.y - p.radius > height) {
				p.position.x = width / 2;
				p.position.y = height;
				p.velocity.length = Math.random() * 8 + 5;
				p.velocity.angle = -Math.PI / 2 + (Math.random() * .2 - .1);
			}

		}

		requestAnimationFrame(update);
	}

};