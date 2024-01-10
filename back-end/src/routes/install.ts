import express from "express"
const { exec } = require('node:child_process')
const router = express.Router();

interface AppNames {
    originalName : string
}

router.post("/", (req, res) => {
    const user = process.env.user;
    const host = process.env.host;
    const password = process.env.password;
    const domain = process.env.domain;
    const apps = req.body.apps as AppNames[];
    apps.forEach(app => {
        exec(`ssh ${user}@${host} "echo ${password} | sudo -S yunohost app install ${app.originalName}" --args "domain=${domain}&path=/${app.originalName}&init_main_permission=visitors&password=${password}"`, (err : string, output: string) => {
            // once the command has completed, the callback function is called
            if (err) {
                // log and return if we encounter an error
                console.error("could not execute command: ", err)
                return
            }
            // log the output received from the command
            console.log("Output: \n", output);
            res.send({});
        })
    });
});
module.exports = router