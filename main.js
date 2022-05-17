var SpeechRecognition = window.webkitSpeechRecognition;    // API to convert speech to text
 var recognition = new SpeechRecognition();                 // creating new API to use it
function start()
{
   document.getElementById("textbox").innerHTML = "";
  
   recognition.start();                              // convert speech to text       
}
recognition.onresult = function(event) {
 
  console.log(event);
 
 
  var Content = event.results[0][0].transcript;
 
   document.getElementById("textbox").innerHTML = Content;
 

  if (Content=="take my selfie") {
    speak() 
  }
  
}
 function speak(){
var synth=window.speechSynthesis
speak_data="taking your selfie in 5 seconds" 
var utterThis = new SpeechSynthesisUtterance(speak_data); //function to convert Text to Speech
 
synth.speak(utterThis);
Webcam.attach("#camera")

setTimeout(function () {
  take_snapshot();
  save();
}, 5000); 

 }
 Webcam.set({
   width: 360,
   height: 250,
   image_format: 'jpeg',
   jpeg_quality: 200
});

function take_snapshot(){
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
});

}

function save(){
  link=document.getElementById("link")
  image=document.getElementById("selfie_image").src 
  link.href=image
  link.click()

}