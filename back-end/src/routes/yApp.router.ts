import express from "express"
import { getAllApp } from "../provider/yApp.provider";

const router = express.Router();

router.get("/", () => {
    getAllApp()
});

export default router;