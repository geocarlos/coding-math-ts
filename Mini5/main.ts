function distanceXY(x0: number, y0: number, x1: number, y1: number) {
    const dx = x1 - x0;
    const dy = y1 - y0;
    return Math.sqrt(dx ** 2 + dy ** 2);
}

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const rect = {
        x: width / 2 - 200,
        y: height / 2 - 150,
        width: 400,
        height: 300
    };

    document.body.addEventListener("mousemove", function (event) {
        
        context.clearRect(0, 0, width, height);

        const dist = distanceXY(centerX, centerY, event.clientX, event.clientY);

        if (dist < 100) {
            context.fillStyle = "#ff6666";
        } else {
            context.fillStyle = "#cccccc";
        }

        context.beginPath();
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        context.fill();
    });
}