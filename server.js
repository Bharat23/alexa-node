const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    fetch('http://api.yomomma.info/')
    .then(data => res.send(JSON.parse(data).joke))
    // res.json({ success: true });
})
.post('/', (req, res) => {
    let responseText = '';
    let shouldEndSession = true;
    let responseObj = {
        "version": "string",
        "sessionAttributes": {
          "key": "value"
        },
        "response": {
          "outputSpeech": {
            "type": "PlainText",
            "text": '',
            "ssml": "<speak>SSML text string to speak</speak>"
          },
          shouldEndSession: false
        }
    }
    if (req.body.request.type === 'LaunchRequest') {
        responseObj.response.outputSpeech.text = 'Hey, I am here to make your day';
        responseObj.response.shouldEndSession = false;
        res.json(responseObj);
    }
    else {
        let { type, intent } = req.body.request;
        if (type === 'IntentRequest' && intent.name === 'AMAZON.StopIntent') {
            responseObj.response.shouldEndSession = true;
            responseObj.response.outputSpeech.text = 'You got served!!!';
            res.json(responseObj);
        }
        else {
            responseObj.response.shouldEndSession = false;
            fetch('http://api.yomomma.info/')
            .then(data => {
                responseObj.response.outputSpeech.text = JSON.parse(data).joke;
                res.json(responseObj);
        });
        }
    }
});


app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
})