const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ success: true });
})
.post('/', (req, res) => {
    let responseText = '';
    let shouldEndSession = true;
    console.log(req.body);
    if (req.body.request.type === 'LaunchRequest') {
        responseText = 'Hey, I am here to make your day';
        shouldEndSession = false;
    }
    else {
        responseText = 'Hey, I am not that funny';
        shouldEndSession = false;
    }
    const responseObj = {
        "version": "string",
        "sessionAttributes": {
          "key": "value"
        },
        "response": {
          "outputSpeech": {
            "type": "PlainText",
            "text": responseText,
            "ssml": "<speak>SSML text string to speak</speak>"
          },
          shouldEndSession
        }
      }
      
    res.json(responseObj);
});


app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
})