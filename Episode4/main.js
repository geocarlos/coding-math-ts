window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 200;
    var angle = 0;
    // let xAngle = 0;
    // let yAngle = 0;
    var speed = .01;
    // let xSpeed = 0;
    // let ySpeed = 0;
    var x;
    var y;
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
};
