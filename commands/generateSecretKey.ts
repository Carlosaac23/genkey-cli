import clipboard from 'clipboardy';

import { getArgs } from '../helpers/args.js';
import { copied } from '../helpers/copied.js';
import { fail } from '../helpers/error.js';
import { formatOutput } from '../helpers/format.js';
import { generateSecretKey } from '../lib/secretKey.js';
export async function generateSecretKeyCommand() {
  const args = getArgs();
  const lengthFlagIndex = args.findIndex(a => a === '--length' || a === '-l');
  const withSpecial = args.some(a => a === '--special' || a === '-s');
  const noCopy = args.some(a => a === '--no-copy');

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

    if (length !== undefined) {
      console.log(`Here's your ${length} characters long secret key: ${value}\n`);

      if (length < 32) {
        console.warn('⚠️  For higher security, consider using --length 32 or higher\n');
      }

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

    console.log(`Here's your secret key: ${value}\n`);

    if (length === undefined) {
      console.warn('⚠️  For higher security, consider using --length 32 or higher\n');
    }

    if (!noCopy) {
      try {
        await clipboard.write(value);
        copied();
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }

    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      fail(error.message);
    }
  }
}
