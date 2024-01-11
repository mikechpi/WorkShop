import { spawn } from 'child_process';
import { AppNames } from '../routes/install';
import { io } from '..';

const user = process.env.user as string;
const host = process.env.host as string;


async function deployApps(password: string, domain: string, apps: AppNames[]) {

    for (const app of apps) {
        try {
            await installApp(password, domain, app);
        } catch (err) {
            console.error("could not execute command: ", err);
        }
    }
}

async function removeApps(password: string, domain: string, apps: AppNames[]) {
    for (const app of apps) {
        try {
            await uninstallApp(password, domain, app);
        } catch (err) {
            console.error("could not execute command: ", err);
        }
    }
}

async function installApp(password: string, domain: string, app: AppNames) {
    return new Promise((resolve) => {
        const command = spawn('ssh', [
            `${user}@${host}`,
            `'echo ${password} | sudo -S yunohost domain add ${app.originalName}.${domain} &&
            echo ${password} | sudo -S yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"'`
        ], { shell: true });
            
        // const command = spawn('echo', [
        //     `${password} | sudo -S yunohost domain add ${app.originalName}.${domain} &&
        //     echo ${password} | sudo -S yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"`
        // ], { shell: true });

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
            if (!data.includes(password)) {
                output += data.toString();
                console.error(`${data}`);
                // Emit error progress to connected clients
                io.emit('progress', data.toString());
            }
        });

        command.on('close', (code) => {
            if (code === 0) {
                console.log("Command executed successfully. Output:\n", output);
            } else {
                console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
            }
            // Notify the client that the process has finished
            io.emit('progress', `Process finished with code ${code}`);
            resolve(code);
        });

        command.on('exit', (code) => {
            resolve(code);
        });
    });
}

async function uninstallApp(password: string, domain: string, app: AppNames) {
    return new Promise((resolve) => {
        // const command = spawn('echo', [
        //     `${password} | sudo -S yunohost app remove ${app.originalName} && echo ${password} &&
        //     echo ${password} | sudo -S yunohost domain remove ${app.originalName}.${domain}`
        // ], { shell: true });

        const command = spawn('ssh', [
                        `${user}@${host}`,
                        `-- "echo ${password} | sudo -S yunohost app remove ${app.originalName} &&
                        echo ${password} | sudo -S yunohost domain remove ${app.originalName}.${domain}"`
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
            if (!data.includes(password)) {
                output += data.toString();
                console.error(`${data}`);
                // Emit error progress to connected clients
                io.emit('progress', data.toString());
            }
        });

        command.on('close', (code) => {
            if (code === 0) {
                console.log("Command executed successfully. Output:\n", output);
            } else {
                console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
            }
            // Notify the client that the process has finished
            io.emit('progress', `Process finished with code ${code}`);
            resolve(code);
        });

        command.on('exit', (code) => {
            resolve(code);
        });
    });
}

export { deployApps, removeApps };