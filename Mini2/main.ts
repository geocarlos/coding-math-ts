function lerp(norm: number, min: number, max: number) {
    return (max - min) * norm + min;
}

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const minX = 50;
    const maxX = width - 50;
    const minY = 100;
    const maxY = height - 100;
    const minAlpha = 0;
    const maxAlpha = 1;
    const minRadius = 10;
    const maxRadius = 400;
    let t = 0;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        context.globalAlpha = lerp(t, maxAlpha, minAlpha);
        context.beginPath();
        context.arc(lerp(t, minX, maxX),
            lerp(t, minY, maxY),
            lerp(t, minRadius, maxRadius),
            0, Math.PI * 2, false);
        context.fill();

        t += .005;
        if (t > 1) {
            t = 0;
        }

        requestAnimationFrame(update);
    }
}