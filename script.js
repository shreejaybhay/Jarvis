// Elements
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stopBtn");
let allTabs = []
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
recognition.onresult = async function (event) {
    const transcript = event.results[0][0].transcript;
    console.log("Recognized speech:", transcript);
    if (transcript.includes("Hi, Jarvis") ||
        transcript.includes("Hello, Jarvis") ||
        transcript.includes("hi Jarvis")) {
        readOut("hello sir");
    }

    if (transcript.includes("Who am I speaking with") ||
        transcript.includes("who am i speaking with") ||
        transcript.includes("Who are you")) {
        readOut("I am Jarvis. I am an advanced artificial intelligence system created by Shree. My name stands for just a rather very intelligent system");
    }

    if (transcript.includes("Jarvis, what is your purpose") ||
        transcript.includes("Jarvis what is your purpose") ||
        transcript.includes("jarvis what is your purpose")) {
        readOut("As Jarvis, my purpose is to serve as your trusted virtual assistant, just as I did for Tony Stark in the Highland movies. I am here to assist you with various tasks and provide you with information and guidance.");
    }

    if (transcript.includes("Close all tabs")) {
        readOut("Closing all tabs sir");
        allTabs.forEach((index) => {
            index.close()
            console.log(index);
        })
    }


    if (transcript.includes("Open YouTube") ||
        transcript.includes("open YouTube") ||
        transcript.includes("open the YouTube") ||
        transcript.includes("Open the YouTube")) {
        readOut("Opening YouTube Sir");
        let yt = window.open("https://www.youtube.com/");
        allTabs.push(yt);
        console.log(allTabs);
    }

    if (transcript.includes("Open Google") ||
        transcript.includes("Open the Google")) {
        readOut("Opening Google Sir");
        let google = window.open("https://www.google.com/");
        allTabs.push(google);
        console.log(allTabs)

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
        transcript.includes("open my Twitter") ||
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
        let spokenWords = transcript.split("");
        spokenWords.splice(0, 11);
        spokenWords.pop();
        spokenWords = spokenWords.join("")
        console.log(spokenWords);
        readOut(`Here's the result for ${spokenWords}`);
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

    if (transcript.includes("What is the temperature of") ||
        transcript.includes("What is the temperature of")) {
        let temp = transcript.split("");
        temp.splice(0, 27);
        temp.pop();
        temp = temp.join("")
        console.log(temp);

        const APIKey = '4c2f83ed1109e31605ccaf79fb791e8a';
        const city = temp
        console.log(city);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                readOut(`Temperature of ${temp} is ${parseInt(json.main.temp)}°C`);
            })
    } else if (transcript.includes("Temperature of") ||
        transcript.includes("temperature of")) {
        let temp = transcript.split("");
        temp.splice(0, 15);
        temp.pop();
        temp = temp.join("")
        console.log(temp);

        const APIKey = '4c2f83ed1109e31605ccaf79fb791e8a';
        const city = temp
        console.log(city);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                readOut(`Temperature of ${temp} is ${parseInt(json.main.temp)}°C`);
            })
    }

    if (transcript.includes("What is the meaning of")) {

        let meaning = transcript.split("");
        meaning.splice(0, 22);
        meaning.pop();
        meaning = meaning.join("")
        console.log(meaning);

        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
        const word = meaning;
        console.log(word);

        fetch(`${url}${word}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                readOut(`Meaning of ${meaning} is ${data[0].meanings[0].definitions[0].definition}`)
            })
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