import { spawn } from 'child_process';
import chalk from 'chalk';

export const executeCommand = (cmd, repoFolder, options) => {
    console.log(`${chalk.yellow}:: ${repoFolder} ::${chalk.cls}`);

    return new Promise((resolve, reject) => {
        gitCmd = spawn(
            'git',
            [
                "--git-dir=${repoFolder}/.git",
                "--work-tree=${repoFolder}",
                cmd,
            ]);

        if (options.isVerbose) {
            gitCmd.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
        }

        gitCmd.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(data);
        });

        gitCmd.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            resolve(code);
        });
    });
}
