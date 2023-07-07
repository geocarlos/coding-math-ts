import Vector2D from "./Vector2D.js";

class Particle {
    private _position: Vector2D;
    private _velocity: Vector2D;

    constructor(x: number, y: number, speed: number, direction: number) {
        this._position = new Vector2D(x, y);
        this._velocity = new Vector2D(0, 0);
        console.log('SPEED:', speed);
        this.velocity.length = speed;
        this.velocity.angle = direction;
        console.log(this.velocity.length);
        console.log('Direction:', direction)
        console.log('Angle:', this.velocity.angle);
    }

    get position() {
        return this._position;
    }

    get velocity() {
        return this._velocity;
    }

    update() {
        this.position.addTo(this.velocity);
    }

    accelerate(accel: Vector2D) {
        this.velocity.addTo(accel);
    }
}

export default Particle;