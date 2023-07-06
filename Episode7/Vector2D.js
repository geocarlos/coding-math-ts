class Vector2D {
    _x = 0;
    _y = 0;
    constructor(x, y) {
        if (x)
            this._x = x;
        if (y)
            this._y = y;
    }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get y() {
        return this._y;
    }
    set angle(angle) {
        this._x = Math.cos(angle) * this.length;
        this._y = Math.sin(angle) * this.length;
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set length(length) {
        this._x = Math.cos(this.angle) * length;
        this._y = Math.sin(this.angle) * length;
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    add(v2) {
        return new Vector2D(this.x + v2.x, this.y + v2.y);
    }
    subtract(v2) {
        return new Vector2D(this.x - v2.x, this.y - v2.y);
    }
    multiply(scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }
    divide(scalar) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    }
    addTo(v2) {
        this._x += v2.x;
        this._y += v2.y;
    }
    subtractFrom(v2) {
        this._x -= v2.x;
        this._y -= v2.y;
    }
    multiplyBy(v2) {
        this._x *= v2.x;
        this._y *= v2.y;
    }
    divideBy(v2) {
        this._x /= v2.x;
        this._y /= v2.y;
    }
}
export default Vector2D;
