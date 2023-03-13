window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    render();

    function render() {
        context.fillRect(100, 100, 5, 5);
        context.stroke();
        context.fill();

        requestAnimationFrame(render);
    }
}