const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// disable/enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// tell jokes via voiceRSS api
function tellJoke(joke) {
  // console.log("tellJoke() called: ", joke);
  VoiceRSS.speech({
    key: "<voice_rss_api_key_here>",
    src: joke,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}
// get jokes via api
async function getJokes() {
  let joke = "";
  try {
    const apiUrl =
      "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist";
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    tellJoke(joke);
    toggleButton();
  } catch (error) {
    console.error("error in getJokes(): ", error);
  }
}

// event listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
