import { spawn } from 'child_process';
import { AppNames } from '../routes/install';
import { io } from '..';
import axios from 'axios';
import { getNameByAppName } from '../provider/yApp.provider';

const user = process.env.user as string;
const host = process.env.host as string;


async function deployApps(password: string, domain: string, apps: AppNames[]) {
    try {
        let installed = 0;
        io.emit('progress', "Installation in progress...");
        for (const app of apps) {
            if ((await axios.get(`http://localhost:8000/scrap?appName=${getNameByAppName(app.originalName)}`)).data.isAvailable)
            {
                await installApp(password, domain, app);
                installed = 1;
            }
            else {
                io.emit("progress", `${getNameByAppName(app.originalName)} is not Available`);
            }
        }
        if (installed) io.emit("install");
    } catch (err) {
        console.error("could not execute all commands", err);
    }
}

async function removeApps(password: string, domain: string, apps: AppNames[]) {
    try {
        let uninstalled = 0;
        io.emit('progress', "Uninstallation in progress...");
        for (const app of apps) {
            if ((await axios.get(`http://localhost:8000/scrap?appName=${getNameByAppName(app.originalName)}`)).data.isAvailable)
            {
                await uninstallApp(password, domain, app);
                uninstalled = 1;
            }
            else {
                io.emit("progress", `${getNameByAppName(app.originalName)} is not Available`);
            }
        }
        if (uninstalled) io.emit("uninstall");

    } catch (err) {
        console.error("could not execute all commands", err);
    }
}

async function installApp(password: string, domain: string, app: AppNames) {
    return new Promise((resolve) => {
        const command = spawn('ssh', [
            `${user}@${host}`,
            `'sudo yunohost domain add ${app.originalName}.${domain} &&
            sudo yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"'`
        ], { shell: true });
            
        // const command = spawn('sudo', [
        //     `yunohost domain add ${app.originalName}.${domain} &&
        //     sudo yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"`
        // ], { shell: true });

        let output = '';

        command.stdout.on('data', (data) => {
            if (!data.includes(password)) {
                output += data.toString();
                console.log(`${data}`);
                io.emit('progress', data.toString());
            }
        });

        command.stderr.on('data', (data) => {
            if (!data.includes(password) && !data.includes("sudo")) {
                output += data.toString();
                console.error(`${data}`);
                io.emit('progress', data.toString());
            }
        });

        command.on('close', (code) => {
            if (code === 0) {
                console.log("Command executed successfully. Output:\n", output);
            } else {
                console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
            }
            // io.emit('progress', `Process finished with code ${code}`);
            resolve(code);
        });

        command.on('exit', (code) => {
            resolve(code);
        });
    });
}

async function uninstallApp(password: string, domain: string, app: AppNames) {
    return new Promise((resolve) => {
        // const command = spawn('sudo', [
        //     `yunohost app remove ${app.originalName} &&
        //     sudo yunohost domain remove ${app.originalName}.${domain}`
        // ], { shell: true });

        const command = spawn('ssh', [
                        `${user}@${host}`,
                        `-- "sudo yunohost app remove ${app.originalName} &&
                        sudo yunohost domain remove ${app.originalName}.${domain}"`
    ], { shell: true });
        let output = '';

        command.stdout.on('data', (data) => {
            if (!data.includes(password)) {
                output += data.toString();
                console.log(`${data}`);
                // Emit progress to connected clients
                io.emit('progress', data.toString());
            }
        });

        command.stderr.on('data', (data) => {
            if (!data.includes(password) && !data.includes("sudo")) {
                output += data.toString();
                console.error(`${data}`);
                io.emit('progress', data.toString());
            }
        });

        command.on('close', (code) => {
            if (code === 0) {
                console.log("Command executed successfully. Output:\n", output);
            } else {
                console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
            }
            // io.emit('progress', `Process finished with code ${code}`);
            resolve(code);
        });

        command.on('exit', (code) => {
            resolve(code);
        });
    });
}

export { deployApps, removeApps };