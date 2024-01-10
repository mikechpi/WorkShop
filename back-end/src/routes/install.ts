import express from "express"
import { YApp } from "@prisma/client";
const { exec } = require('node:child_process')
const router = express.Router();

router.post("/", (req, res) => {
    const user = process.env.user;
    const host = process.env.host;
    const password = process.env.password;
    const apps = req.body.apps as YApp[];
    apps.forEach(app => {
        exec(`ssh ${user}@${host} "echo ${password} | sudo -S yunohost app install ${app}" --args "domain=domain.tld&path=/path&init_main_permission=visitors"`, (err : string, output: string) => {
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