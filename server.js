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
    console.log(req);
    res.json({post: 'success'});
});


app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
})