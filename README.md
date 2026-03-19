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
| `create secret_key`                   | Generate a 32-character secret key       |
| `create secret_key --length <number>` | Generate a secret key with custom length |

## Examples

```bash
create uuidv4 - uuid
# Here's your UUID V4: 110e8400-e29b-41d4-a716-446655440000

create secret_key
# Here's your Secret Key: a3f1c8e2b7d4a9f0e1c2b3d4e5f6a7b8

create secret_key --length 64
# Here's your Secret Key: a3f1c8e2b7d4a9f0e1c2b3d4e5f6a7b8...
```

## License

ISC
