import { randomUUID } from 'node:crypto';
import { v7 as uuidv7 } from 'uuid';

function generateUuid(version: number = 4): string {
  if (version === 4) {
    return randomUUID();
  }

  if (version === 7) {
    if (typeof uuidv7 !== 'function') {
      return randomUUID();
    }

    return uuidv7();
  }

  throw new Error(`Unsupported UUID version: ${version}`);
}

export function generateUuidV4() {
  return generateUuid(4);
}

export function generateUuidV7() {
  return generateUuid(7);
}
