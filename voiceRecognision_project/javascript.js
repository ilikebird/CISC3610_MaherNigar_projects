window.addEventListener("load", () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
  
 //sizing the height and width
 canvas.height = window.innerHeight;
 canvas.width = window.innerWidth;

//This is for the circle
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 5;
circle2 = ctx.arc(700, 200, 120, 3, 9 * Math.PI);
ctx.fill(circle2)



//Voice recognision part
const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const diagnostic = document.querySelector('.output');
const bg = document.querySelector('html');

document.body.onclick = () => {
  recognition.start();
  console.log('Ready to receive a color command.');
}

abortBtn.onclick = () => {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

recognition.onspeechend = () => {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}

});