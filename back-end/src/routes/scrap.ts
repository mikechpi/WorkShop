import express from "express"

const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://apps.yunohost.org/app/rustdesk-server"

async function getAppInfo(url : string) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const name = $("h1").text();
        const image = $("main img").attr("src");
        const description = $("main .from-markdown").text();
        const version = $("main .text-slate-500").text();
        return {
            name,
            image,
            description,
            version
        };
    } catch (error) {
        console.error(error);
    }
}

router.get("/", async (req, res) => {
   const name = await getAppInfo(url);
   console.log(name);

});

module.exports = router