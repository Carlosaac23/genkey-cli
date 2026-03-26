export function getArgs() {
  let args = process.argv.slice(2);

  const binaryNames = ['genkey-cli', 'gen'];
  const binaryIndex = process.argv.findIndex(arg => binaryNames.includes(arg));

  if (binaryIndex !== -1) {
    args = process.argv.slice(binaryIndex + 1);
  }

  return args;
}
