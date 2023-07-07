class Vector2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    set x(value: number) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value: number) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    set angle(angle: number) {
        const length = this.length;
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    get angle() {
        return Math.atan2(this._y, this._x);
    }

    set length(length: number) {
        const angle = this.angle;
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    add(vector: Vector2D) {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector: Vector2D) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar: number) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    divide(scalar: number) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    }

    addTo(vector: Vector2D) {
        this._x += vector.x;
        this._y += vector.y;
    }

    subtractFrom(vector: Vector2D) {
        this._x -= vector.x;
        this._y -= vector.y;
    }

    multiplyBy(scalar: number) {
        this._x *= scalar;
        this._y *= scalar;
    }

    divideBy(scalar: number) {
        this._x /= scalar;
        this._y /= scalar;
    }
}

export default Vector2D;