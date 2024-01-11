import express from "express"
const { exec } = require('node:child_process')
const router = express.Router();
import { deployApps, removeApps } from '../controller/install.controller';

export interface AppNames {
    originalName : string
}


const password = process.env.password as string;
const domain = process.env.domain as string;

router.post('/', async (req, res) => {
    const apps  = req.body.apps as AppNames[];
    try {
        if (!Array.isArray(apps)) {
            throw new Error('Invalid apps format');
        }

        await deployApps(password, domain, apps);
        res.send({ success: true });
    } catch (error: any) {
        console.error('Error:', error.message);
        res.status(500).send({ success: false, error: error.message });
    }
});

router.delete("/", async (req, res) => {
    const apps  = req.body.apps as AppNames[];
    try {
        if (!Array.isArray(apps)) {
            throw new Error('Invalid apps format');
        }

        await removeApps(password, domain, apps);
        res.send({ success: true });
    } catch (error: any) {
        console.error('Error:', error.message);
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router
