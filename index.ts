#!/usr/bin/env node
import { generateSecretKeyCommand } from './commands/generateSecretKey.js';
import { generateUuidCommand, generateUuidV7Command } from './commands/generateUuids.js';
import { getArgs } from './helpers/args.js';
import { printHelp } from './helpers/help.js';
import { showVersion } from './helpers/version.js';

function main() {
  const args = getArgs();
  const command = args[0];

  if (!command) {
    printHelp();
    process.exit(1);
  }

  if (command === '--help' || command === '-h') {
    printHelp();
    process.exit(0);
  }

  if (command === '--version' || command === '-v') {
    showVersion();
    process.exit(0);
  }

  // Generates uuid's
  if (command === 'uuidv4' || command === 'uuid') {
    generateUuidCommand();
    return;
  } else if (command === 'uuidv7') {
    generateUuidV7Command();
    return;
  }

  // Generates secret keys
  if (command === 'secret_key' || command === 'sk') {
    generateSecretKeyCommand();
    return;
  }

  console.log(`command ${command} does not exist`);
}

main();
