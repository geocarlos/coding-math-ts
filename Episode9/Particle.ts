import Vector2D from "./Vector2D.js";

class Particle {
    private _position: Vector2D;
    private _velocity: Vector2D;
    private _gravity: Vector2D;
    private _color: string;

    constructor(x: number, y: number, speed: number, direction: number, gravity?: number, color?: string) {
        this._position = new Vector2D(x, y);
        this._velocity = new Vector2D(0, 0);
        this._velocity.length = speed;
        this._velocity.angle = direction;
        this._gravity = new Vector2D(0, gravity || 0);
        this._color = color || '#000000';
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

    get color() {
        return this._color;
    }

    update() {
        this.velocity.addTo(this._gravity);
        this.position.addTo(this.velocity);
    }

    accelerate(accel: Vector2D) {
        this.velocity.addTo(accel);
    }
}

export default Particle;