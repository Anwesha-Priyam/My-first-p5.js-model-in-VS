function preload()
{}
function setup()
{
    canvas=createCanvas(550,790);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tintColor="";
}
function draw()
{
    image(video,0,0,500,500);
    tint(tintColor);
}
function Snapshot()
{
    save("MyFilterPicture.png");
}
function addFilter()
{
    tintColor=document.getElementById("colorName").value;
}