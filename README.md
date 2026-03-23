# genkey-cli

A simple CLI tool to generate secret keys and UUIDs directly from your terminal.

## Installation

```bash
npm i -g genkey-cli
```

## Why genkey-cli?

Every developer at some point needs a quick secret key for a JWT, or a UUID for a database record. Instead of opening a browser, writing a script, or digging through docs — just run one command and get what you need instantly.

## Usage

```bash
genkey-cli or gen <command> [options]
```

Running without a command prints the help output.

## Commands

| Command                                    | Description                              |
| ------------------------------------------ | ---------------------------------------- |
| `genkey-cli uuidv4` or `genkey-cli uuid`   | Generate a UUID v4                       |
| `genkey-cli uuidv7`                        | Generate a UUID v7                       |
| `genkey-cli secret_key` or `genkey-cli sk` | Generate a 16-character secret key       |
| `genkey-cli secret_key --length <number>`  | Generate a secret key with custom length |

## Options

| Option                               | Description                         |
| ------------------------------------ | ----------------------------------- |
| `--length <number>` or `-l <number>` | Secret key length (min 8, max 1024) |
| `--version` or `-v`                  | Show current CLI version            |
| `--help` or `-h`                     | Show help                           |
| `--json`                             | Print JSON output                   |
| `--raw`                              | Print only the generated value      |

## Examples

```bash
genkey-cli uuidv4
# Here's your uuidv4: 110e8400-e29b-41d4-a716-446655440000

genkey-cli secret_key
# Here's your secret key: XAfb$!F&qKxL_YWT

genkey-cli secret_key --length 64
# Here's your 64 characters long secret key: vQoxuqod7&xEam!6MjMxFhx4xY&yvf?pZlh7ZXXE...

genkey-cli uuidv7 --raw
# 018f9b62-0b5c-7c52-9b1a-7c2d7e2c3db7

genkey-cli secret_key --json
# {
#   "type": "secret_key",
#   "value": "wV3y*2xAq7G@pZ9nM0bK1rT6cH8fJ4dS",
#   "length": 16
# }
```

## License

MIT
