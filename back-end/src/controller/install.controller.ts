import { spawn } from 'child_process';
import { AppNames } from '../routes/install';

async function deployApps(user: string, host: string, password: string, domain: string, apps: AppNames[]) {
    for (const app of apps) {
        try {
            await executeInstallCommand(user, host, password, domain, app);
        } catch (err) {
            console.error("could not execute command: ", err);
        }
    }
}

async function removeApps(user: string, host: string, password: string, domain: string, apps: AppNames[]) {
    for (const app of apps) {
        try {
            await executeUninstallCommand(user, host, password, domain, app);
        } catch (err) {
            console.error("could not execute command: ", err);
        }
    }
}

async function executeInstallCommand(user: string, host: string, password: string, domain: string, app: AppNames) {
        const command = spawn('ssh', [
            `${user}@${host}`,
            `'echo ${password} | sudo -S yunohost domain add ${app.originalName}.${domain} &&
            echo ${password} | sudo -S yunohost app install ${app.originalName} --args "domain=${app.originalName}.${domain}&path=/&init_main_permission=visitors&language=fr&admin=houssam&password=${password}"'`
        ], { shell: true });

        let output = '';

        command.stdout.on('data', (data) => {
            output += data.toString();
            console.log(`stdout: ${data}`);
        });

        command.stderr.on('data', (data) => {
            output += data.toString();
            console.error(`stdout: ${data}`);
        });

        command.on('close', (code) => {
            if (code === 0) {
                console.log("Command executed successfully. Output:\n", output);
            } else {
                console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
            }
        });
}

async function executeUninstallCommand(user: string, host: string, password: string, domain: string, app: AppNames) {
    const command = spawn('ssh', [
        `${user}@${host}`,
        `'echo ${password} | sudo -S yunohost app remove ${app.originalName} && echo ${password} &&
        echo ${password} | sudo -S yunohost domain remove ${app.originalName}.${domain}'`
    ], { shell: true });

    let output = '';

    command.stdout.on('data', (data) => {
        output += data.toString();
        console.log(`stdout: ${data}`);
    });

    command.stderr.on('data', (data) => {
        output += data.toString();
        console.error(`stdout: ${data}`);
    });

    command.on('close', (code) => {
        if (code === 0) {
            console.log("Command executed successfully. Output:\n", output);
        } else {
            console.error("Error executing command. Exit code:", code, "\nOutput:\n", output);
        }
    });
}

export { deployApps , removeApps };