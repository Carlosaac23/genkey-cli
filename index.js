#!/usr/bin/env node
import { generateUuidV4, generateUuidV7 } from './helpers/uuid.js';
import { generateSecretKey } from './helpers/secretKey.js';

function readCommands() {
  const args = process.argv.slice(process.argv.indexOf('create') + 1);
  const command = args[0];

  if (!command) {
    console.log('You forgot one command');
    return;
  }

  if (command === 'uuidv4' || command === 'uuid') {
    console.log(`Here's your uuidv4: ${generateUuidV4()}`);
    return;
  } else if (command === 'uuidv7') {
    console.log(`Here's your uuidv7: ${generateUuidV7()}`);
    return;
  }

  if (command === 'secret_key' || command === 'sk') {
    if (args.includes('--length')) {
      if (
        args[args.indexOf('--length') + 1] === undefined ||
        isNaN(args[args.indexOf('--length') + 1])
      ) {
        console.log('You missed number length');
        return;
      } else {
        const length = Number(args[args.length - 1]);
        console.log(
          `Here's your ${length} characters long secret key: ${generateSecretKey(length)}`
        );
        return;
      }
    }

    console.log(`Here's your secret key: ${generateSecretKey()}`);
    return;
  }

  console.log(`command ${command} does not exist`);
}

readCommands();
