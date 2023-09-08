x=0;
y=0;
draw_circle="";
draw_rect="";

var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;

document.getElementById("status").innerHTML="Your Speech has been recognised as: "+content;

if(content == "Circle"){
    x=180;
    y=200;
    document.getElementById("status").innerHTML="Started drawing circle";
    draw_circle="set";
}

if(content == "Rectangle"){
    x=100;
    y=200;
    document.getElementById("status").innerHTML="Started drawing rectangle";
    draw_rect="set";
}
}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="";
    }
    rect(100,150,80,50);
}