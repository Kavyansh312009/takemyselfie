var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        speak();
    }
}
function speak(){
    var speak1=window.speechSynthesis;
    var sentence="getting up your selfie in 5 seconds";
    var say=new SpeechSynthesisUtterance(sentence);
    speak1.speak(say);
    Webcam.attach(camera) 
    
    setTimeout(function(){
        take_snapshot();
        save();
        
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
var camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image"src="'+data_uri+'">'
    })
}

function save(){
    image =document.getElementById("selfie_image").src;
    document.getElementById("link").href = image;
    document.getElementById("link").click();
}