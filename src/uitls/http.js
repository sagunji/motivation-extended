import axios from 'axios';

const http = axios.create({
    // baseURL: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers: {
        "X-Mashape-Key": "C5i527XYTCmshShEe5d5SlvWEgrup1AZTywjsnWfrcGepY1Zku",
        "X-Mashape-Host": "andruxnet-random-famous-quotes.p.mashape.com"
    }
});

export default http;
