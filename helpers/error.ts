export function fail(message: string, code: number = 1) {
  console.error(message);
  process.exit(code);
}
