nosex=0
nosey=0
difference=0
rightwristx=0
leftwristx=0
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560,150)
    video = createCapture(VIDEO);
    video.size(550,500)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotposes);
}

function draw() {
background("#00FF00")
fill("#ADD8E6")
stroke("F90093")
square(nosex, nosey, difference);
 
}

function modelLoaded() {
    console.log('posenet is initialzied!');
}

function gotposes(results) {
    if(results.length > 0 )
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex = " + nosex + "nosey = + nosey");

        leftwristx= results[0].pose.leftWrist.x;
        rightwristx= results[0].pose.rightWrist.x;
        difference=floor( leftwristx - rightwristx);
        console.log("leftwristx = " + leftwristx + "rightwristx = " + rightwristx + "difference = " + difference);
    }
}

