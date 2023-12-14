import http from "http";
// const http =require("http");
import {generateLovePercent} from "./features.js";
// import {gfname2,gfname3} from "./features.js";

// const gfname = require("./features");

import fs from "fs";



console.log(generateLovePercent());

const server = http.createServer((req,res) => {
    console.log(req.method);
    if (req.url === "/about") {
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
    }   else if (req.url =="/"){
        fs.readFile("./index.html", (err,home) =>{
            res.end("home");
        });
    }
    else if (req.url =="/contact"){
        res.end("<h1>Conatact Page</h1>");
    }
    else {
        res.end("<h1>Page not Found</h1>");
    }
})

server.listen(5000, () => {
    console.log("Server is working")
});