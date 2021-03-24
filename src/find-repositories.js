import fs from 'fs';

export const findRepositories = (parentDirectory = process.cwd()) => {
    const isDirectory = fs.statSync(parentDirectory).isDirectory();

    if (!isDirectory) {
        console.error('parentDirectory must be a directory');
        process.exit(1);
    }

    const gitDirs = fs.readdirSync(parentDirectory)
        .map((item) => {
            if (fs.statSync(item).isDirectory()) {
                return fs.readdirSync(item).includes('.git');
            }
        });

    console.trace(`${gitDirs.length} git directories found in ${parentDirectory}`);

    return gitDirs;
}
