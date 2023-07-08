import Vector2D from "./Vector2D.js";

class Particle {
    private _position: Vector2D;
    private _velocity: Vector2D;
    private _mass = 1;

    constructor(x: number, y: number, speed: number, direction: number) {
        this._position = new Vector2D(x, y);
        this._velocity = new Vector2D(0, 0);
        this.velocity.length = speed;
        this.velocity.angle = direction;
    }

    get position() {
        return this._position;
    }

    get velocity() {
        return this._velocity;
    }

    get mass() {
        return this._mass;
    }

    set mass (value: number) {
        this._mass = value;
    }

    update() {
        this.position.addTo(this.velocity);
    }

    accelerate(accel: Vector2D) {
        this.velocity.addTo(accel);
    }

    angleTo(p2: Particle) {
        return Math.atan2(p2.position.y - this.position.y, p2.position.x - this.position.x);
    }

    distanceTo(p2: Particle) {
        const dx = p2.position.x - this.position.x;
        const dy = p2.position.y - this.position.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    gravitateTo(p2: Particle) {
        const grav = new Vector2D(0, 0);
        const dist = this.distanceTo(p2);

        grav.length = p2.mass / (dist ** 2);
        grav.angle = this.angleTo(p2);
        this.velocity.addTo(grav);
    }
}

export default Particle;