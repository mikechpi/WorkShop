import express from "express"
import { getUrlByAppName } from "../provider/yApp.provider";

const router = express.Router();

router.get("/", (req, res) => {
});

router.get("/:name", async (req, res) => {
    const name = req.params.name

    await getUrlByAppName(name)   
})

export default router;