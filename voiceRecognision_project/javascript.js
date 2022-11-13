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