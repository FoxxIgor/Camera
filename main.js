var SpeechRecognition = window.webkitSpeechRecognition; //webkitSpeechRecognition é um api que reconhece o que estamos falando e converte em texto
var recognition = new SpeechRecognition();
var textBox = document.getElementById("textBox");

function start(){
    textBox.innerHTML ="";
    recognition.start();
}
recognition.onresult= function(event){  //A função onresult contém todos os valores da fala convertidos em texto.
    console.log(event);
    var content = event.results[0][0].transcript;
    textBox.innerHTML = content;
    console.log(content);
    if( content == "take my selfie"){
        console.log("tirando selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speakData = "Tirando sua selfie daora!";
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera); //* ela vai acionar sua camera o attach
    setTimeout(function(){
        takeself();
        save();
    },2300);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeself(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo' src='"+data_uri+"'>";
    });
}
function save(){
    link = document.getElementById("link");
    img = document.getElementById("photo").src;
    link.href=img;
    link.click(); //* clica automaticamente para vc o click
}