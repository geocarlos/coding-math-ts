class Vector2D {
    private _x = 1;
    private _y = 0;

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
        console.log('This length:', this.length);
        this._x = Math.cos(angle) * this.length;
        this._y = Math.sin(angle) * this.length;
        console.log('x', this.x, 'y', this.y);
        console.log('Angle:', Math.atan2(this.y, this.x));
    }

    get angle() {
        console.log('x', this.x, 'y', this.y);
        return Math.atan2(this._y, this._x);
    }

    set length(length: number) {
        this._x = Math.cos(this.angle) * length;
        this._y = Math.sin(this.angle) * length;
        console.log('x', this.x, 'y', this.y);
        console.log('Angle:', Math.atan2(this.y, this.x));
    }

    get length() {
        console.log('x', this.x, 'y', this.y);
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    add(v2: Vector2D) {
        return new Vector2D(this.x + v2.x, this.y + v2.y);
    }

    subtract(v2: Vector2D) {
        return new Vector2D(this.x - v2.x, this.y - v2.y);
    }

    multiply(scalar: number) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    divide(scalar: number) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    }

    addTo(v2: Vector2D) {
        this._x += v2.x;
        this._y += v2.y;
    }

    subtractFrom(v2: Vector2D) {
        this._x -= v2.x;
        this._y -= v2.y;
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