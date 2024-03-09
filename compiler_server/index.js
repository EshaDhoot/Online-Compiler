const express = require("express");
const app = express();

const cors = require("cors");
const axios = require("axios");

const { PORT, API_KEY } = require('./config');

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {

    let code = req.body.code;
    let language = req.body.lang;
    let input = req.body.input;
    const langEnum = [
        'php',
        'python',
        'c',
        'c_cpp',
        'csharp',
        'kotlin',
        'golang',
        'r',
        'java',
        'typescript',
        'nodejs',
        'ruby',
        'perl',
        'swift',
        'fortran',
        'bash'
    ];

    let data = ({
        "langEnum": langEnum,
        "lang": language,
        "code": code,
        "input": input,
    });

    let config = {
        method: 'post',
        url: 'https://code-compiler10.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'x-compile': 'rapidapi',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'code-compiler10.p.rapidapi.com'
        },
        data: data
    };
   
    axios(config)
        .then((response) => {
            res.send(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
});

const setupAndStartServer = async() => {
    app.listen(PORT , () => {
        console.log(`Server listening on Port: ${PORT}`);
    });
}

setupAndStartServer();