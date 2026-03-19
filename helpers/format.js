export function formatOutput({ type, value, meta, args }) {
  if (args.includes('--raw')) return value;

  if (args.includes('--json')) {
    return JSON.stringify({ type, value, ...meta }, null, 2);
  }

  return null;
}
