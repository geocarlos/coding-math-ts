import Particle from "./Particle.js";
import Vector2D from "./Vector2D.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const thrust = new Vector2D(0, 0);
    let angle = 0;
    let thrusting = false;
    let turningLeft = false;
    let turningRight = false;

    const ship = new Particle(width / 2, height / 2, 0, 0, 0, 0.99);

    render();

    function render() {
        context.fillRect(0, 0, width, height);

        if (turningLeft) {
            angle -= 0.05;
        }

        if (turningRight) {
            angle += 0.05;
        }

        thrust.angle = angle;

        if (thrusting) {
            thrust.length = 0.1;
        } else {
            thrust.length = 0;
        }
        
        ship.velocity.addTo(thrust);
        
        ship.update();

        context.save();
        context.translate(ship.position.x, ship.position.y);
        context.rotate(angle);

        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.closePath();
        context.fillStyle = '#FFFFFF';
        context.strokeStyle = '#FFFFFF';
        context.fill();
        context.stroke();
        if (thrusting) {
            context.beginPath();
            context.moveTo(-10, 0);
            context.lineTo(-18, 0);
            context.lineWidth = 8;
            context.strokeStyle = '#FF9800';
            context.stroke();
        }
        context.restore();

        if (ship.position.x > width) {
            ship.position.x = 0;
        }
        if (ship.position.x < 0) {
            ship.position.x = width;
        }
        if (ship.position.y > height) {
            ship.position.y = 0;
        }
        if (ship.position.y < 0) {
            ship.position.y = height;
        }

        requestAnimationFrame(render);
    }

    window.document.body.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp') {
            thrusting = true;
        }
        if (event.key === 'ArrowRight') {
            turningRight = true;
        }
        if (event.key === 'ArrowLeft') {
            turningLeft = true;
        }
    });

    window.document.body.addEventListener('keyup', function (event) {
        if (event.key === 'ArrowUp') {
            thrusting = false;
        }
        if (event.key === 'ArrowRight') {
            turningRight = false;
        }
        if (event.key === 'ArrowLeft') {
            turningLeft = false;
        }
    });
}