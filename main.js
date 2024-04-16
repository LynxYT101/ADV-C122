x =0;
y =0;

apple = ""
to_number = ""
draw_apple = ""

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload(){

apple = loadImage("apple.png")

}

function setup(){

    canvas = createCanvas(900,600);

}



function start(){

    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();

}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    to_number = Number(content);
    if (Number.isInteger(to_number)) {

        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";

    }
    else {

        document.getElementById("status").innerHTML = "The Speech has not been recognized a number";

    }
}

function speak(){

    syth = window.speechSynthesis;
    speak_data = content + "Apples drawn";
    utterThis = new SpeechSynthesisUtterance (speak_data);
    syth.speak(utterThis);

}


function draw(){

    if(draw_apple == "set") {

        for (var i = 1; i <= to_number; i++) {

            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 700);
            image(apple, x, y, 50, 50);

        }
        document.getElementById("status").innerHTML = to_number + "Apples drawn";
        speak();
        draw_apple = "";

    }

}