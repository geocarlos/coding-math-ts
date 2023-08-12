import Particle from "./Particle.js";
import Vector2D from "./Vector2D.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2, 0, 0.97);

    p.radius = 10;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        p.update();

        context.beginPath();
        context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
        context.fill();

        requestAnimationFrame(update);
    }
};