
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var numbers = []
for (var i = 1; i <= 100; i++) {
    numbers.push(i)
}
var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
  // This code is provided as a demonstration of possible capability. You may choose not to use it.
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);
  speechRecognitionList.addFromString(numbers, 2);

  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

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
 });





  var recognizing;
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        TEXTAREA.value += event.results[i][0].transcript;
      }
    }
  }

  function reset() {
    recognizing = false;
    button.innerHTML = "Click to Speak";
  }

  function toggleStartStop() {
    if (recognizing) {
      recognition.stop();
      reset();
    } else {
      recognition.start();
      recognizing = true;
      button.innerHTML = "Click to Stop";
    }

    function speak(text, callback) {
      var u = new SpeechSynthesisUtterance();
      u.text = text;
      u.lang = 'en-US';
      u.onend = function () {
        if (callback) {
          callback();
        }
      };

      u.onerror = function (e) {
        if (callback) {
          callback(e);
        }
      };
      speechSynthesis.speak(u);}
    }

    navigator.webkitGetUserMedia(
        {
            audio: true
        }, 
        function(stream) 
        {
            // "that" is my wrapping object's scope
            that.stream = stream;
    
            var liveSource = context.createMediaStreamSource(stream);
            var levelChecker = context.createJavaScriptNode(that.bufSize, 1 ,1);
    
            liveSource.connect(levelChecker);
            levelChecker.connect(context.destination);
            levelChecker.onaudioprocess = function(event) 
            {
                var buf = event.inputBuffer.getChannelData(0);
                var len = buf.length;
                var rms = 0;
    
                // Iterate through buffer
                for (var i = 0; i < len; i++) 
                {
                    rms += Math.abs(buf[i]);
                }
                rms = Math.sqrt(rms / len);
                that.levelCheckerCB(rms);
            };
        }
    );

    function setup() {
      //createCanvas(200,200);
      mic = new p5.AudioIn();
      mic.start();
    }

    function draw() {
      var vol = mic.getLevel();
      ellipse(100, 100, 200, vol * 200);
    }