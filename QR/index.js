import inquirer from 'inquirer';
import qr from "qr-image";
// import fs from "fs";
import * as fs from 'node:fs';

inquirer
    .prompt([
        {
            message: "Enter website name : ",
            name: "siteName"
        },
        {
            message: "Enter Your URL : ",
            name: "URL"
        }
    ])
    .then((answers) => {
        const urlName = answers.siteName;
        const url = answers.URL;
        let qrImage = qr.image(url);
        qrImage.pipe(fs.createWriteStream(`QR-images/${urlName}.png`));
        fs.writeFile(`URLS/${urlName}.txt`, url, (err) => {
            if (err) throw err;
            console.log("This file has been saved.");
        });
    })


