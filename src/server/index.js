var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
app.use(express.static('dist'));

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const PORT = 8081;



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
});



app.get('/test/*', async (req, res) => {
    try{
    const url = req.params[0];
    const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1"
    const API_KEY = process.env.API_KEY
    const apiRes = await axios.get(`${BASE_API_URL}?key=${API_KEY}&url=${url}&lang=en`);
    const {text, score_tag, agreement, subjectivity, confidence, irony} = apiRes.data

    res.send({score_tag, agreement, subjectivity, confidence, irony})} 
    catch (err) {
        console.log(err);
        res.status(500);
    }
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


// TODO: export app to use it in the unit testing
