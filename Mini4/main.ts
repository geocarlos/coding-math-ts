function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const rect = {
        x: width / 2 - 200,
        y: height / 2 - 150,
        width: 400,
        height: 300
    };

    document.body.addEventListener("mousemove", function (event) {
        const x = clamp(event.clientX, rect.x + 10, rect.x + rect.width - 10);
        const y = clamp(event.clientY, rect.y + 10, rect.y + rect.height - 10);

        context.clearRect(0, 0, width, height);
        context.fillStyle = "#cccccc";
        context.fillRect(rect.x, rect.y, rect.width, rect.height);

        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
    });
}