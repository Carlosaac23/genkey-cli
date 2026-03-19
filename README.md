# genkey-cli

A simple CLI tool to generate secret keys and UUIDs directly from your terminal.

## Installation

```bash
npm i genkey-cli
```

## Usage

```bash
create <command> [options]
```

## Commands

| Command                               | Description                              |
| ------------------------------------- | ---------------------------------------- |
| `create uuidv4` or `create uuid`      | Generate a UUID v4                       |
| `create uuidv7`                       | Generate a UUID v7                       |
| `create secret_key` or `create sk`    | Generate a 16-character secret key       |
| `create secret_key --length <number>` | Generate a secret key with custom length |

## Examples

```bash
create uuidv4 - uuid
# Here's your uuidv4: 110e8400-e29b-41d4-a716-446655440000

create secret_key - sk
# Here's your secret key: XAfb$!F&qKxL_YWT

create secret_key --length 64
# Here's your 64 characters long secret key:: vQoxuqod7&xEam!6MjMxFhx4xY&yvf?pZlh7ZXXE...
```

## License

MIT
