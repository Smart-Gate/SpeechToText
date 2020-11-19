// var speechRecognition = window.webkitSpeechRecognition
var recognition = new webkitSpeechRecognition();
var textbox = $("#textbox")
var instruction = $("#insructers")
var content =''
recognition.continuous = true
recognition.onstart = function() {
instruction.text("Voice recognition is on")
}
recognition.onspeechend = function(){
    instruction.text("no activity")
   
}
recognition.onerror = function(){
    instruction.text("try again")
   
}
recognition.onresult = function(event){
var current = event.resultIndex;
var transcript = event.results[current][0].transcript
content =+transcript
textbox.val(content)
}
$("#startbutton").click(function(event){
if(content.length){
content+=''
}
recognition.start()
})