var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
  console.log(event);
  var content = event.results[0][0].transcript;
  console.log(content);
document.getElementById("textbox").innerHTML = content;
if (content =="take my selfie")
{
  console.log("taking selfie")
  speak();
}

}
function speak(){
  var synth= window.speechSynthesis;
  Webcam.attach(camera);
  

  setTimeout(function(){
    img_id="selfie-1";
    take_snapshot();
    speak_data = "taking your selfie in 5 second"
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
   save();
  }, 5000);

  setTimeout(function(){
    img_id="selfie-2";
    take_snapshot();
    speak_data = "taking your selfie in 10 second"
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
   save();
  }, 10000);

  setTimeout(function(){
    img_id="selfie-3";
    take_snapshot();
    speak_data = "taking your selfie in 15 second"
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
   save();
  }, 15000);
  
}
Webcam.set({
  width:360,
  height:250,
  image_format:'png',
  png_quality:90
});
camera = document.getElementById("camera");
function take_snapshot()
{
    console.log(img_id)
  Webcam.snap(function(data_uri) {
    if (img_id =="selfie-1"){
    document.getElementById("result1").innerHTML = '<img id="selfie-1" src="'+data_uri+'"/>';}
    if (img_id =="selfie-2"){
        document.getElementById("result2").innerHTML = '<img id="selfie-2" src="'+data_uri+'"/>';}
        if (img_id =="selfie-3"){
            document.getElementById("result3").innerHTML = '<img id="selfie-3" src="'+data_uri+'"/>';}
  });

  
}
function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie-1").src;
  image = document.getElementById("selfie-2").src;
  image = document.getElementById("selfie-3").src;
  link.href = image;
  link.click();
}