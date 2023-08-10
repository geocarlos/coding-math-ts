import Particle from "./Particle.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.document.body.clientWidth;
    const height = canvas.height = window.document.body.clientHeight;

    const sun = new Particle(width / 2, height / 2, 0, 0);
    const planet = new Particle(width / 2 + 200, height / 2, 10, -Math.PI / 2);

    sun.mass = 20000;

    render();

    function render() {
        context.clearRect(0, 0, width, height);

        planet.gravitateTo(sun);
        planet.update();

        context.beginPath();
        context.fillStyle = '#ffff00';
        context.arc(sun.position.x, sun.position.y, 20, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.fillStyle = '#0000ff';
        context.arc(planet.position.x, planet.position.y, 5, 0, Math.PI * 2, false);
        context.fill();

        requestAnimationFrame(render);
    }
}