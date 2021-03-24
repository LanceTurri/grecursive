import asyncPool from "tiny-async-pool";

import { findRepositories } from './find-repositories.js';
import { executeCommand } from './execute-command.js';


export const grecursive = async (cmd, options = {}) => {
  const timeout = (i) => new Promise(resolve => setTimeout(() => resolve(i), i));
  const cmdPromises = findRepositories()
    .map((folder) => executeCommand(cmd, folder, options.isVerbose));

  await asyncPool(2, cmdPromises, timeout);
}
