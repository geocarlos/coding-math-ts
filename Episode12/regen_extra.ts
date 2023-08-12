import Particle from "./Particle.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d") as CanvasRenderingContext2D;
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const particles: Particle[] = [];


	update();

	function update() {
		context.clearRect(0, 0, width, height);

		// if we have less than 100 particles, create one and add it to the array
		// once we have 100, this will be skipped.
		if (particles.length < 100) {
			var p = new Particle(width / 2, height, 5 + Math.random() * 8, -Math.PI / 2 + (Math.random() * .2 - .1), 0.1);
			p.radius = Math.random() * 10 + 2;
			particles.push(p);
		}

		for (var i = 0; i < particles.length; i += 1) {
			var p = particles[i];

			p.update();

			context.beginPath();
			context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
			context.fill();

			if (p.position.y - p.radius > height) {
				p.position.x = width / 2;
				p.position.y = height;
				p.velocity.length = 5 + Math.random() * 8;
				p.velocity.angle = -Math.PI / 2 + (Math.random() * .2 - .1);
			}
		}

		requestAnimationFrame(update);
	}

};