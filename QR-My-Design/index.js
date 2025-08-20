import express from "express";
import qr from "qr-image";
import fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { image } from "qr-image";
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000;
const app = express();
const publicDir = __dirname + "/public";

app.use(express.static(publicDir));

app.get("/", (req, res) => {
    res.sendFile(publicDir + "/index.html");
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} .. .. `);
})