var currentUtterance = null;
    
function readText(sectionId) {
  if (currentUtterance) {
    
    window.speechSynthesis.cancel();
  }

  var section = document.getElementById(sectionId);
  var textToRead = section.textContent || section.innerText;

  
  var utterance = new SpeechSynthesisUtterance(textToRead);

  
  window.speechSynthesis.speak(utterance);

  
  currentUtterance = utterance;
}

function stopSpeech() {
  
  window.speechSynthesis.cancel();
}