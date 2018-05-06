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
    console.log(req.body);
    const responseObj = {
        "version": "string",
        "sessionAttributes": {
          "key": "value"
        },
        "response": {
          "outputSpeech": {
            "type": "PlainText",
            "text": "Plain text string to speak",
            "ssml": "<speak>SSML text string to speak</speak>"
          },
          "shouldEndSession": true
        }
      }
      
    res.json(responseObj);
});


app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
})