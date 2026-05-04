import { getArgs } from '../helpers/args.js';
import { copyToClipboard } from '../helpers/copyToClipboard.js';
import { formatOutput } from '../helpers/format.js';
import { generateUuidV4, generateUuidV7 } from '../lib/uuid.js';

export async function generateUuidCommand() {
  const args = getArgs();
  const noCopy = args.some(a => a === '--no-copy');
  const value = generateUuidV4();
  const out = formatOutput({ type: 'uuidv4', value, meta: {}, args });

  if (out !== null) {
    console.log(noCopy ? out : `${out}\n`);

    await copyToClipboard({ value: out, noCopy });

    process.exit(0);
  }

  console.log(`Here's your uuidv4: ${value}${noCopy ? '' : '\n'}`);

  await copyToClipboard({ value, noCopy });

  process.exit(0);
}

export async function generateUuidV7Command() {
  const args = getArgs();
  const noCopy = args.some(a => a === '--no-copy');
  const value = generateUuidV7();
  const out = formatOutput({ type: 'uuidv7', value, meta: {}, args });

  if (out !== null) {
    console.log(noCopy ? out : `${out}\n`);

    await copyToClipboard({ value: out, noCopy });

    process.exit(0);
  }

  console.log(`Here's your uuidv7: ${value}${noCopy ? '' : '\n'}`);

  await copyToClipboard({ value, noCopy });

  process.exit(0);
}
