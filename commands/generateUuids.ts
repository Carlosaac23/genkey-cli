import clipboard from 'clipboardy';

import { getArgs } from '../helpers/args.js';
import { copied } from '../helpers/copied.js';
import { formatOutput } from '../helpers/format.js';
import { generateUuidV4, generateUuidV7 } from '../lib/uuid.js';

export async function generateUuidCommand() {
  const args = getArgs();
  const noCopy = args.some(a => a === '--no-copy');
  const value = generateUuidV4();
  const out = formatOutput({ type: 'uuidv4', value, meta: {}, args });

  if (out !== null) {
    console.log(`${out}\n`);

    if (!noCopy) {
      try {
        await clipboard.write(out);
        copied();
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }

    process.exit(0);
  }

  console.log(`Here's your uuidv4: ${value}\n`);

  if (!noCopy) {
    try {
      await clipboard.write(value);
      copied();
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }

  process.exit(0);
}

export async function generateUuidV7Command() {
  const args = getArgs();
  const noCopy = args.some(a => a === '--no-copy');
  const value = generateUuidV7();
  const out = formatOutput({ type: 'uuidv7', value, meta: {}, args });

  if (out !== null) {
    console.log(`${out}\n`);

    if (!noCopy) {
      try {
        await clipboard.write(out);
        copied();
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }

    process.exit(0);
  }

  console.log(`Here's your uuidv7: ${value}\n`);

  if (!noCopy) {
    try {
      await clipboard.write(value);
      copied();
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }

  process.exit(0);
}