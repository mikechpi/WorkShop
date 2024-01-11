import express from "express"
import { getUrlByAppName } from "../provider/yApp.provider";

const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");

// const url = "https://apps.yunohost.org/app/rustdesk-server"

async function getAppInfo(url : string) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const name = $("h1").text();
        const image = $("main img").attr("src");
        const description = $("main .from-markdown").text();
        const version = $("main .text-slate-500").text();
        const availability = $('main span i').attr('class');
        const isAvailable = availability.includes("text-red-500") ? true : false;
        //.length > 0 ? true : false
        return {
            name,
            image,
            description,
            version,
            isAvailable
        };
    } catch (error) {
        console.error(error);
    }
}

router.get("/", async (req, res) => {
    const appName = req.query.appName as string;
    const url = await getUrlByAppName(appName);
    const info = await getAppInfo(url);
    res.send(info)
});

module.exports = router