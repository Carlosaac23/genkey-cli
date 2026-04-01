import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const version = process.env.npm_package_version ?? '0.0.0';
const outDir = resolve(process.cwd(), 'helpers');
const outFile = resolve(outDir, 'version.generated.ts');

await mkdir(outDir, { recursive: true });
await writeFile(outFile, `export const VERSION = ${JSON.stringify(version)};\n`, 'utf-8');
