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
    --special | -s       Generates secret keys with special chars (for secret_key only)
    --version | -v       Show version
    --help | -h          Show help
    --json               Print JSON output
    --raw                Print only the generated value

  Examples:
    genkey-cli uuidv4
    genkey-cli uuidv7
    genkey-cli secret_key
    genkey-cli secret_key --length 64
    genkey-cli secret_key --length -s
    genkey-cli secret_key --json
    genkey-cli secret_key --raw
    `.trim()
  );
}
