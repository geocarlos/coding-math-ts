import Vector2D from "./Vector2D.js";

class Particle {
    private _position: Vector2D;
    private _velocity: Vector2D;
    private _gravity: Vector2D;

    constructor(x: number, y: number, speed: number, direction: number, gravity?: number) {
        this._position = new Vector2D(x, y);
        this._velocity = new Vector2D(0, 0);
        this.velocity.length = speed;
        this.velocity.angle = direction;
        this._gravity = new Vector2D(0, gravity || 0);
    }

    get position() {
        return this._position;
    }

    get velocity() {
        return this._velocity;
    }

    get gravity() {
        return this._gravity;
    }

    update() {
        this.position.addTo(this.velocity);
    }

    accelerate(accel: Vector2D) {
        this.position.addTo(this.gravity);
        this.velocity.addTo(accel);
    }
}

export default Particle;