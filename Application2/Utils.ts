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
		return Math.min(Math.max(value, min), max);
	}
}