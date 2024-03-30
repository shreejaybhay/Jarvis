// Elements
const startBtn = document.getElementById("mainContent");
const stopBtn = document.getElementById("stopBtn");

// Speech recognition setup
const SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Speech recognition start
recognition.onstart = function () {
    console.log("Speech recognition active");
};

// Speech recognition end
recognition.onend = function () {
    console.log("Speech recognition inactive");
};

// Speech recognition result
recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    console.log("Recognized speech:", transcript);
    if (transcript.includes("Hi, Jarvis") ||
        transcript.includes("Hello, Jarvis") ||
        transcript.includes("hi Jarvis")) {
        readOut("hello sir");
    }

    if (transcript.includes("Open YouTube") ||
        transcript.includes("open YouTube") ||
        transcript.includes("open the YouTube") ||
        transcript.includes("Open the YouTube")) {
        readOut("Opening YouTube Sir");
        window.open("https://www.youtube.com/");
    }
    if (transcript.includes("Open Google") ||
        transcript.includes("open the Google")) {
        readOut("Opening Google Sir");
        window.open("https://www.google.com/")
    }
    if (transcript.includes("Open Firebase")) {
        readOut("Opening Firebase Console");
        window.open("https://console.firebase.google.com/");
    }

    if (transcript.includes("Open Pinterest") ||
        transcript.includes("open pinterest") ||
        transcript.includes("open Pinterest") ||
        transcript.includes("Open the Pinterest") ||
        transcript.includes("open the pinterest") ||
        transcript.includes("open the Pinterest")) {
        readOut("Opening Pinterest Sir");
        window.open("https://pinterest.com/")
    }

    if (transcript.includes("Open Twitter") ||
        transcript.includes("open twitter") ||
        transcript.includes("Open the Twitter") ||
        transcript.includes("open the twitter") ||
        transcript.includes("open the Twitter")) {
        readOut("Opening Twitter Sir")
        window.open("https://twitter.com/home")
    }

    if (transcript.includes("Open GitHub") ||
        transcript.includes("open github") ||
        transcript.includes("open GtHub") ||
        transcript.includes("Open the GitHub") ||
        transcript.includes("open the GitHub") ||
        transcript.includes("open the github") ||
        transcript.includes("open my GitHub profile") ||
        transcript.includes("Open my GitHub profile")
    ) {
        readOut("Opening GitHub Sir")
        window.open("https://github.com/shreejaybhay")
    }

    // google search
    if (transcript.includes("Search for") ||
        transcript.includes("search for")) {
        readOut("Here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`http://google.com/search?q=${input}`)
    }
    if (transcript.includes("Play") ||
        transcript.includes("play")) {
        readOut("Here's the result");
        let input = transcript.split("");
        input.splice(0, 5);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`)
    }

    if (transcript.includes("Open Spotify") ||
        transcript.includes("open Spotify") ||
        transcript.includes("open spotify")
    ) {
        readOut("Opening Spotify Sir");
        window.open("https://open.spotify.com/collection/tracks")
    }
};

// speech recognition continuous
// recognition.continuous = true;

// Event listeners
startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});


function readOut(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1;
    speech.pitch = 0.5;
    window.speechSynthesis.speak(speech)
    console.log("speaking out");
}