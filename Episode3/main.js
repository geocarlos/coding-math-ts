"use strict";
window.onload = function () {
    const canvas = document.getElementById("canvas"), context = canvas.getContext("2d"), width = canvas.width = window.innerWidth, height = canvas.height = window.innerHeight;
    const centerY = height * .5, centerX = width * .5, offset = height * .4, speed = 0.025;
    let angle = 0;
    render();
    function render() {
        const y = centerY + Math.sin(angle) * offset;
        context.globalAlpha = .5;
        context.rect(0, 0, width, height);
        context.fill();
        context.save();
        context.beginPath();
        context.arc(centerX, y, 50, 0, Math.PI * 2, false);
        context.fillStyle = '#FFFFFF';
        context.fill();
        context.closePath();
        context.restore();
        angle += speed;
        requestAnimationFrame(render);
    }
};
