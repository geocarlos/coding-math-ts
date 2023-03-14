window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    render();

    function render() {
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = '#FFFFFF';
        context.strokeText("EPISODE 6 HAS NO CODING", 30, canvas.height / 4)
        context.strokeText("IT JUST VECTOR THEORY", 50, canvas.height / 2)

        // requestAnimationFrame(render);
    }
}