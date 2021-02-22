module.exports = () => {
    let colorRGB = [
        0,  // red
        0,  // green
        0   // blue
    ]

    colorRGB[0] = Math.floor(Math.random() * 255);
    colorRGB[1] = Math.floor(Math.random() * 255);
    colorRGB[2] = Math.floor(Math.random() * 255);

    return colorRGB;
}