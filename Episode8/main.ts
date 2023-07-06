import Particle from "./Particle.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.document.body.clientWidth;
    const height = canvas.height = window.document.body.clientHeight;

    const particles: Particle[] = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    }

    render();

    function render() {
        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
            particle.update();

            context.beginPath();
            context.arc(particle.position.x, particle.position.y, 10, 0, Math.PI * 2, false);
            context.fill();
        }

        requestAnimationFrame(render);
    }
}