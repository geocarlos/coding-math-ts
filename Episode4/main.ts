window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    let angle = 0;
    // let xAngle = 0;
    // let yAngle = 0;
    const speed = .01;
    // let xSpeed = 0;
    // let ySpeed = 0;
    let x;
    let y;

    render();

    // xSpeed = Math.random();
    // ySpeed = Math.random();
    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
}