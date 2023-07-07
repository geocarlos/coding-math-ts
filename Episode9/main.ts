import Particle from "./Particle.js";
import Vector2D from "./Vector2D.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.document.body.clientWidth;
    const height = canvas.height = window.document.body.clientHeight;
    const acceleration = new Vector2D(0.1, 0.1);

    const particle = new Particle(100, height, 1, 1);

    particle.velocity.angle = -Math.PI / 2;
    particle.velocity.length = 10;

    render();

    function render() {
        context.clearRect(0, 0, width, height);

        particle.accelerate(acceleration);
        particle.update();

        context.beginPath();
        context.arc(particle.position.x, particle.position.y, 10, 0, Math.PI * 2, false);
        context.fill();

        requestAnimationFrame(render);
    }
}