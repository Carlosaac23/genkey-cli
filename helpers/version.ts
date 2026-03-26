import pkg from '../package.json' with { type: 'json' };

export function showVersion() {
  console.log('Version: ', pkg.version);
}
