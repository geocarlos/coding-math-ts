import Particle from "./Particle";
import { Utils } from "./Utils";
import Vector2D from "./Vector2D";

export const spring2 = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const particleA = new Particle(Utils.randomRange(0, width),
        Utils.randomRange(0, height),
        Utils.randomRange(0, 50),
        Utils.randomRange(0, Math.PI * 2),
        0.2);
    const particleB = new Particle(Utils.randomRange(0, width),
        Utils.randomRange(0, height),
        Utils.randomRange(0, 50),
        Utils.randomRange(0, Math.PI * 2),
        0.2);
    const particleC = new Particle(Utils.randomRange(0, width),
        Utils.randomRange(0, height),
        Utils.randomRange(0, 50),
        Utils.randomRange(0, Math.PI * 2),
        0.2);
    const k = 0.01;
    const separation = 200;

    particleA.friction = 0.9;
    particleA.radius = 20;

    particleB.friction = 0.9;
    particleB.radius = 20;

    particleC.friction = 0.9;
    particleC.radius = 20;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        spring(particleA, particleB, separation);
        spring(particleB, particleC, separation);
        spring(particleC, particleA, separation);

        checkEdges(particleA);
        checkEdges(particleB);
        checkEdges(particleC);

        particleA.update();
        particleB.update();
        particleC.update();

        context.beginPath();
        context.arc(particleA.position.x, particleA.position.y,
            particleA.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(particleB.position.x, particleB.position.y,
            particleB.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(particleC.position.x, particleC.position.y,
            particleC.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.moveTo(particleA.position.x, particleA.position.y);
        context.lineTo(particleB.position.x, particleB.position.y);
        context.lineTo(particleC.position.x, particleC.position.y);
        context.lineTo(particleA.position.x, particleA.position.y);
        context.stroke();

        requestAnimationFrame(update);
    }

    function spring(p0: Particle, p1: Particle, separation: number) {
        var distance = p0.position.subtract(p1.position);
        distance.length = distance.length - separation;

        var springForce = distance.multiply(k);

        p1.velocity.addTo(springForce);
        p0.velocity.subtractFrom(springForce);
    }

    function checkEdges(p: Particle) {
        if (p.position.y + p.radius > height) {
            p.position.y = height - p.radius;
            p.velocity.y = p.velocity.y * -0.95;
        }
    }
};