var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// console.log(SpeechRecognition);
var recognition = new SpeechRecognition();
var LytInstructions = $("#Lytinstructions");
var Lyttextbox = $("#LytTextbox");
var content = '';
recognition.continuous = true;
// if(lang == "ar-SA"){ // uncaught refef error: lang is not defined

recognition.lang = "en-US";



recognition.onstart = function (){
  LytInstructions.text("Speech recognition is on");
  // setTimeout(function() {
  // refresh();
  // },5000);
 
}

recognition.onspeechend = function (){
  LytInstructions.text("voice recognition is off"); 
  recognition.stop();
  console.log("Speech has stopped being detected");
  // recognition.stop();
 
}
recognition.onerror = function(){
  LytInstructions.text("try again");
}
// recognition.addEventListener("soundend", (event) => {
//   console.log("Sound has stopped being received");
//   instructions.text("try sound has stopped");
// });
// function refresh()
// {
// setTimeout(function() {
// 	$('#main').fadeOut('slow').load('').fadeIn('slow');
// 	refresh();
// 	},);
	// }
recognition.onresult = function (event){  
    var current = event.resultIndex;
    var transcript =event.results[current][0].transcript;
    content += transcript;

    Lyttextbox.val(content);
    // $(document).ready( function refresh(){
    //   $('#auto')
    //   // refresh();
    //   location.reload();
    //   });


    // var color = event.results[0][0].transcript;
    //     diagnostic.textContent = `Result received: ${color}.`;
    //     bg.style.backgroundColor = color;
}
$("#start").click (function (event){
  if (content.length) {
      content += '';
  }
  recognition.start();

})


// $("#start-btn").click (function (event){
//     if (content.length) {
//         content += '';
//     }
//     recognition.start();
	
// })
Lyttextbox.on('input', function(){
  content = $this.val();
})
function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}
getLocalStream();
$("#auto").click (function refresh(){
  location.reload();
});
$("#stop").click (function stp(){
  recognition.stop();
  LytInstructions.text("Speech recognition is off"); 
});




