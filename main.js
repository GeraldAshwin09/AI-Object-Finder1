function setup()
{
canvas= createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(380, 380);
video.hide();
}

function draw()
{
    image(video,0,0,400,400)
}