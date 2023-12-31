import Vector2D from "./Vector2D.js";

class Particle {
    private _position: Vector2D;
    private _velocity: Vector2D;

    constructor(x: number, y: number, speed: number, direction: number) {
        this._position = new Vector2D(x, y);
        this._velocity = new Vector2D(0, 0);
        this._velocity.length = speed;
        this._velocity.angle = direction;
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
}

export default Particle;