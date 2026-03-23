export function printHelp(): void {
  console.log(
    `
  genkey-cli or gen <command> [options]

  Commands:
    uuidv4 | uuid        Generate a UUID v4
    uuidv7               Generate a UUID v7
    secret_key | sk      Generate a 16-character secret key

  Options:
    --length <number>    Secret key length (for secret_key)
    --version | -v  Show version
    --help | -h          Show help

  Examples:
    genkey-cli uuidv4
    genkey-cli uuidv7
    genkey-cli secret_key
    genkey-cli secret_key --length 64
    `.trim()
  );
}
