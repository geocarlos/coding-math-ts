import Particle from "./Particle.js";

window.onload = function () {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const particles: Particle[] = [];

	for (var i = 0; i < 100; i += 1) {
		var p = new Particle(width / 2, height / 2, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0);
		p.radius = 10;
		particles.push(p);
	}

	update();

	function update() {
		if (!context) return;
		context.clearRect(0, 0, width, height);

		console.log(particles.length);


		for (var i = 0; i < particles.length; i += 1) {
			var p = particles[i];

			p.update();

			context.beginPath();
			context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
			context.fill();

		}

		removeDeadParticles();

		requestAnimationFrame(update);
	}


	function removeDeadParticles() {
		for (let i = particles.length - 1; i >= 0; i -= 1) {
			const p = particles[i];
			if (p.position.x - p.radius > width ||
				p.position.x + p.radius < 0 ||
				p.position.y - p.radius > height ||
				p.position.y + p.radius < 0) {

				particles.splice(i, 1);
			}
		}
	}
};