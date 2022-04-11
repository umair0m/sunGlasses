function preload() {
    clown_nose=loadImage("https://i.postimg.cc/3Jbhm1mW/glasses-filter.png");    
    }
    function setup() {
    canvas = createCanvas(300,300);
    canvas.center();  
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
    }
    rightEye=0;
    leftEye=0;
    
    function gotPoses(result) {
    if(result.length>0){
    console.log(result);
    rightEye = result[0].pose.rightEye.x-10 ;
    leftEye= result[0].pose.leftEye.y-10 ; 
    console.log("right eye= "+rightEye);    
    console.log("left eye= "+leftEye);
    
    } 
    }
    function modelLoaded() {
    console.log("poseNet is initialized");    
    }
    
    function draw(){
    image(video,0,0,300,300);
    // fill(255,0,0)
    // stroke(255,0,0)
    // circle(noseX,noseY,20);
    image(clown_nose,rightEye,leftEye,50,30)
    
    }
    function take_snapshot() {
    save('myFilterImage.png');    
    }