const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
})