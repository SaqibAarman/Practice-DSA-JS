// USING SPEECH WEB API

const text = "Hello World";
const utterance = new SpeechSynthesisUtterance(text); // SPEECH WEB API
window.speechSynthesis.speak(utterance); // This will spoke out "TEXT"
