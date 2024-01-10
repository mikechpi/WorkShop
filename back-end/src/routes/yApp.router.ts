import express from "express"
import { getAllApp, getOneApp } from "../provider/yApp.provider";

const router = express.Router();

router.get("/", async (req, res) => {
    const apps = await getAllApp()
    res.json(apps);
});

router.get("/:name", async (req, res) => {
    const apps = await getOneApp(req.params.name)
    res.json(apps);
});
module.exports = router