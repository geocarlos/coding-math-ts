import Particle from "./Particle";
import Vector2D from "./Vector2D";
import { spring2 } from "./spring2";

const isSpring2 = window.location.pathname.includes('spring2');

const spring1 = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const springPoint = new Vector2D(width / 2, height / 2);
    const weight = new Particle(Math.random() * width, Math.random() * height, 50, Math.random() * Math.PI * 2, 0.5);
    const k = 0.1;
    const springLength = 100;

    weight.radius = 20;
    weight.friction = 0.5 + Math.random() * .5;

    document.body.addEventListener("mousemove", function (event) {
        springPoint.x = event.clientX;
        springPoint.y = event.clientY;
    });


    update();

    function update() {
        context.clearRect(0, 0, width, height);

        const distance = springPoint.subtract(weight.position);
        distance.length -= springLength;
        const springForce = distance.multiply(k);

        weight.velocity.addTo(springForce);

        weight.update();

        context.beginPath();
        context.arc(weight.position.x, weight.position.y, weight.radius,
            0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(springPoint.x, springPoint.y, 4,
            0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.moveTo(weight.position.x, weight.position.y);
        context.lineTo(springPoint.x, springPoint.y);
        context.stroke();

        requestAnimationFrame(update);
    }

};

window.onload = () => isSpring2 ? spring2() : spring1();