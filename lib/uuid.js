import { v4 as uuidv4, v7 as uuidv7 } from 'uuid';

function generateUuid(version = 4) {
  if (version === 4) {
    return uuidv4();
  }

  if (version === 7) {
    if (typeof uuidv7 !== 'function') {
      return uuidv4();
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
