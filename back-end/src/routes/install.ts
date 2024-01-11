import express from "express"
const { exec } = require('node:child_process')
const router = express.Router();
import { deployApps, removeApps } from '../controller/install.controller';

export interface AppNames {
    originalName : string
}

const user = process.env.user as string;
const host = process.env.host as string;
const password = process.env.password as string;
const domain = process.env.domain as string;

router.post('/', async (req, res) => {
    const apps  = req.body.apps as AppNames[];
    try {
        if (!Array.isArray(apps)) {
            throw new Error('Invalid apps format');
        }

        await deployApps(user, host, password, domain, apps);
        res.send({ success: true });
    } catch (error: any) {
        console.error('Error:', error.message);
        res.status(500).send({ success: false, error: error.message });
    }
});



// router.post("/", (req, res) => {
//     const apps = req.body.apps;
//     console.log(typeof(apps))
//     res.send({});
//     apps.forEach(app => {
//         exec(`ssh ${user}@${host} "echo ${password} | sudo -S yunohost domain add ${app.originalName}.${domain} && echo ${password} | sudo -S yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"`, (err : string, output: string) => {
//             if (err) {
//                 console.error("could not execute command: ", err)
//                 return
//             }
//             console.log("Output: \n", output);
//             res.send({});
//         })
//         console.log(app.originalName)
//     });
// });

router.delete("/", async (req, res) => {
    const apps  = req.body.apps as AppNames[];
    // console.log(typeof(apps[1]));
    try {
        if (!Array.isArray(apps)) {
            throw new Error('Invalid apps format');
        }

        await removeApps(user, host, password, domain, apps);
        res.send({ success: true });
    } catch (error: any) {
        console.error('Error:', error.message);
        res.status(500).send({ success: false, error: error.message });
    }
});

module.exports = router
