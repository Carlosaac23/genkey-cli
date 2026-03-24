#!/usr/bin/env node
import { fail } from './helpers/error.js';
import { formatOutput } from './helpers/format.js';
import { printHelp } from './helpers/help.js';
import { generateSecretKey } from './lib/secretKey.js';
import { generateUuidV4, generateUuidV7 } from './lib/uuid.js';
import pkg from './package.json' with { type: 'json' };

function getArgs() {
  let args = process.argv.slice(2);

  const binaryNames = ['genkey-cli', 'gen'];
  const binaryIndex = process.argv.findIndex(arg => binaryNames.includes(arg));

  if (binaryIndex !== -1) {
    args = process.argv.slice(binaryIndex + 1);
  }

  return args;
}

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
    console.log('Version: ', pkg.version);
    process.exit(0);
  }

  // Generates uuid's
  if (command === 'uuidv4' || command === 'uuid') {
    const value = generateUuidV4();
    const out = formatOutput({ type: 'uuidv4', value, meta: {}, args });

    if (out !== null) {
      console.log(out);
      process.exit(0);
    }

    console.log(`Here's your uuidv4: ${generateUuidV4()}`);
    process.exit(0);
  } else if (command === 'uuidv7') {
    const value = generateUuidV7();
    const out = formatOutput({ type: 'uuidv7', value, meta: {}, args });

    if (out !== null) {
      console.log(out);
      process.exit(0);
    }

    console.log(`Here's your uuidv7: ${generateUuidV7()}`);
    process.exit(0);
  }

  // Generates secret keys
  if (command === 'secret_key' || command === 'sk') {
    const lengthFlagIndex = args.findIndex(a => a === '--length' || a === '-l');
    const withSpecial = args.some(a => a === '--special' || a === '-s');

    let length;
    if (lengthFlagIndex !== -1) {
      const lengthArg = args[lengthFlagIndex + 1];
      if (lengthArg === undefined || Number.isNaN(Number(lengthArg))) {
        console.log('You missed number length');
        process.exit(1);
      }

      length = Number(lengthArg);
    }

    try {
      const value = generateSecretKey(length, withSpecial);
      const out = formatOutput({ type: 'secret_key', value, meta: { length: value.length }, args });

      if (out !== null) {
        console.log(out);
        process.exit(0);
      }

      if (length !== undefined) {
        console.log(`Here's your ${length} characters long secret key: ${value}`);
        process.exit(0);
      }

      console.log(`Here's your secret key: ${value}`);
      process.exit(0);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        fail(error.message);
      }
    }
  }

  console.log(`command ${command} does not exist`);
}

main();
