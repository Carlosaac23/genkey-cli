import { v4 as uuidv4, v7 as uuidv7 } from "uuid";

export function generateUuidV4() {
  return uuidv4();
}

export function generateUuidV7() {
  return uuidv7();
}
