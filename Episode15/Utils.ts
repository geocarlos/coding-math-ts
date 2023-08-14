import Particle from "./Particle";
import Vector2D from "./Vector2D";

export interface Circle {
	x: number;
	y: number;
	radius: number;
}

export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export class Utils {
	static norm(value: number, min: number, max: number) {
		return (value - min) / (max - min);
	}

	static lerp(norm: number, min: number, max: number) {
		return (max - min) * norm + min;
	}

	static map(value: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number) {
		return Utils.lerp(Utils.norm(value, sourceMin, sourceMax), destMin, destMax);
	}

	static clamp(value: number, min: number, max: number) {
		return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	}

	static distance(p0: Vector2D | Circle | Rectangle, p1: Vector2D | Circle | Rectangle) {
		const dx = p1.x - p0.x;
		const dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	static distanceXY(x0: number, y0: number, x1: number, y1: number) {
		var dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
	}

	static circleCollision(c0: Circle, c1: Circle) {
		return Utils.distance(c0, c1) <= c0.radius + c1.radius;
	}

	static circlePointCollision(x: number, y: number, circle: Circle) {
		return Utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
	}

	static pointInRect(x: number, y: number, rect: Rectangle) {
		return Utils.inRange(x, rect.x, rect.x + rect.width) &&
		       Utils.inRange(y, rect.y, rect.y + rect.height);
	}

	static inRange(value: number, min: number, max: number) {
		return value >= Math.min(min, max) && value <= Math.max(min, max);
	}

	static rangeIntersect(min0: number, max0: number, min1: number, max1: number) {
		return Math.max(min0, max0) >= Math.min(min1, max1) && 
			   Math.min(min0, max0) <= Math.max(min1, max1);
	}

	static rectIntersect(r0: Rectangle , r1: Rectangle) {
		return Utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
			   Utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
	}

}