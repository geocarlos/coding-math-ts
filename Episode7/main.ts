import Vector2D from "./Vector2D.js";

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const v1 = new Vector2D();
    v1.x = 5;
    v1.y = 3;
    // v1.angle = Math.PI / 3;
    // v1.length = 90;

    const v2 = new Vector2D(10, 5);
    // v2.angle = Math.PI / 6;
    // v2.length = 100;

    const v3 = v1.add(v2);

    console.log('\nV1', v1.length, '\nV2', v2.length, '\nV3', v3.length, '\nV4', v2.multiply(2).length);

    render();

    function render() {
        context.fillRect(0, 0, width, height);
        context.stroke();
        context.fill();

        requestAnimationFrame(render);
    }
}