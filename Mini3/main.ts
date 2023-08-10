function norm(value: number, min: number, max: number) {
    return (value - min) / (max - min);
}

function lerp(norm: number, min: number, max: number) {
    return (max - min) * norm + min;
}

function map(value: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number) {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
}

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    document.body.addEventListener("mousemove", function (event) {
        var radius = map(event.clientY,
            0, height,
            20, 340);

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(width / 2, height / 2, radius, 0, Math.PI * 2, false);
        context.fill();
    });
}