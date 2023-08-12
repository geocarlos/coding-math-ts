import Particle from "./Particle.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        const rgbValues = [Math.floor(Math.random() * 100 * 155), Math.floor(Math.random() * 10 + 100), Math.floor(Math.random() * 10 + 100)]
        const color = `rgb(${rgbValues[Math.floor(Math.random() * 3)]}, ${rgbValues[Math.floor(Math.random() * 3)]}, ${rgbValues[Math.floor(Math.random() * 3)]})`;
        particles.push(new Particle(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1, color));
    }

    render();

    function render() {
        context.clearRect(0, 0, width, height);

        for (const particle of particles) {
            particle.update();

            context.beginPath();
            context.arc(particle.position.x, particle.position.y, 4, 0, Math.PI * 2, false);
            context.fillStyle = particle.color;
            context.fill();
        }


        requestAnimationFrame(render);
    }
}