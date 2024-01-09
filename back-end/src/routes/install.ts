import express from "express"

const { exec } = require('node:child_process')

// run the `ls` command using exec

const router = express.Router();

router.post("/", (req, res) => {
    // const apps = req.body.apps;
    // apps.forEach(app => {
        
    // });
    // exec(`ssh houssam@51.158.111.126 "echo digitalcampus123 | sudo -S yunohost app install ${app}"`, (err : string, output: string) => {
    //     // once the command has completed, the callback function is called
    //     if (err) {
    //         // log and return if we encounter an error
    //         console.error("could not execute command: ", err)
    //         return
    //     }
    //     // log the output received from the command
    //     console.log("Output: \n", output);
    //     res.send({});
    // })
    
});

module.exports = router