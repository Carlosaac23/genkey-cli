# Changelog

All notable changes to this project will be documented in this file.

## [1.1.4] - 2026-04-01

### Changed [1.1.4]

- Reduced build output size by simplifying TypeScript emit and trimming published artifacts.
- Improved version handling to avoid runtime `package.json` import in CLI output.
- Switched UUID v4 to `crypto.randomUUID` and kept `uuid` only for v7 support.

### Fized [1.1.4]

- Minor package metada cleanup (`main` path and publish surface).

## [1.1.3] - 2026-03-26

### Added [1.1.3]

- Now after create a secret key or uuid it will automatically copied to your clipboard

### Changed [1.1.3]

- Separate command logic into individual modules, reducing `index.ts` complexity

## [1.1.2] - 2026-03-24

### Fixed [1.1.2]

- Removed debug `console.log` statements left in production build

## [1.1.1] - 2026-03-24

### Fixed [1.1.1]

- Corrected `outDir` in `tsconfig.json` from `./dist/index.js` to `./dist`, which caused `dist/index.js` to be created as a directory instead of a file

## [1.1.0] - 2026-03-23

### Added

- `--special` / `-s` flag for `secret_key` command — generates keys with special characters (`!@#$%^&*_?`)

### Changed

- Migrated entire codebase from JavaScript to TypeScript
- Improved input validation for `--length` flag (rejects non-numeric and missing values)
- Added max length limit of 1024 for secret keys

### Fixed [1.1.0]

- Fixed `process.argv` parsing when running as a globally installed binary
- Fixed duplicate key generation bug in `secret_key` command

## [1.0.0] - 2026-03-19

### Added [1.0.0]

- `uuidv4` / `uuid` command — generate a UUID v4
- `uuidv7` command — generate a UUID v7
- `secret_key` / `sk` command — generate a cryptographically secure secret key
- `--length` flag for custom secret key length (minimum 8, maximum 1024)
- `--version` / `-v` flag
- `--help` / `-h` flag
- Binary aliases: `gen` and `genkey-cli`
