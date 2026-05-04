import { getArgs } from '../helpers/args.js';
import { copyToClipboard } from '../helpers/copyToClipboard.js';
import { fail } from '../helpers/error.js';
import { formatOutput } from '../helpers/format.js';
import { logWarning } from '../helpers/logWarning.js';
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
      console.log(noCopy ? out : `${out}\n`);

      await copyToClipboard({ value: out, noCopy });

      process.exit(0);
    }

    if (length !== undefined) {
      console.log(
        `Here's your ${length} characters long secret key: ${value}${noCopy ? '' : '\n'}`
      );

      if (length < 32) {
        logWarning();
      }

      await copyToClipboard({ value, noCopy });

      process.exit(0);
    }

    console.log(`Here's your secret key: ${value}${noCopy ? '' : '\n'}`);

    if (length === undefined) {
      logWarning();
    }

    await copyToClipboard({ value, noCopy });

    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      fail(error.message);
    }
  }
}
