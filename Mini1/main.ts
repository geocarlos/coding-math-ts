function normalize(value: number, min: number, max: number) {
    return (value - min) / (max - min);
}

window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const values = [7, 5, 21, 18, 33, 12, 27, 18, 9, 23, 14, 6, 31, 25, 17, 13, 29];
    const min = Math.min.apply(null, values);
    const max = Math.max.apply(null, values);

    context.beginPath();

    for (var i = 0; i < values.length; i += 1) {
        var normValue = normalize(values[i], min, max),
            x = width / (values.length - 1) * i,
            y = height - height * normValue;

        if (i == 0) {
            context.moveTo(x, y);
        }
        else {
            context.lineTo(x, y);
        }
    }

    context.stroke();

    // bonus material! you can also plot the points

    for (var i = 0; i < values.length; i += 1) {
        var normValue = normalize(values[i], min, max),
            x = width / (values.length - 1) * i,
            y = height - height * normValue;
        context.beginPath();
        context.arc(x, y, 4, 0, Math.PI * 2, false);
        context.fill();
    }
}