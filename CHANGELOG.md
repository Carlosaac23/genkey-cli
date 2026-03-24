# Changelog

All notable changes to this project will be documented in this file.

## [1.1.1] - 2026-03-24

### Fixed

- Corrected `outDir` in `tsconfig.json` from `./dist/index.js` to `./dist`, which caused `dist/index.js` to be created as a directory instead of a file

## [1.1.0] - 2026-03-23

### Added

- `--special` / `-s` flag for `secret_key` command — generates keys with special characters (`!@#$%^&*_?`)

### Changed

- Migrated entire codebase from JavaScript to TypeScript
- Improved input validation for `--length` flag (rejects non-numeric and missing values)
- Added max length limit of 1024 for secret keys

### Fixed

- Fixed `process.argv` parsing when running as a globally installed binary
- Fixed duplicate key generation bug in `secret_key` command

## [1.0.0] - 2026-03-19

### Added

- `uuidv4` / `uuid` command — generate a UUID v4
- `uuidv7` command — generate a UUID v7
- `secret_key` / `sk` command — generate a cryptographically secure secret key
- `--length` flag for custom secret key length (minimum 8, maximum 1024)
- `--version` / `-v` flag
- `--help` / `-h` flag
- Binary aliases: `gen` and `genkey-cli`
