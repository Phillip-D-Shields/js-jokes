# js-jokes

### flowchart

![flowchart](flowchart.png)

## How to run the app?

1. Clone the repo
2. Add your own API key in `script.js`

```javascript
// tell jokes via voiceRSS api
function tellJoke(joke) {
  // console.log("tellJoke() called: ", joke);
  VoiceRSS.speech({
    key: "<voice_rss_api_key_here>", //  add api key here
    src: joke,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}
```

3. Run `npx live-server` or however you want to serve the app
