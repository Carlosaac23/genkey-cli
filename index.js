#!/usr/bin/env node
import { generateUuidV4, generateUuidV7 } from "./helpers/uuid.js";
import { generateSecretKey } from "./helpers/secretKey.js";

function readCommands() {
  const commands = process.argv;
  const command1 = commands[2];
  const command2 = commands[3];

  if (!command1 || !command2) {
    console.log("You forgot one command");
    return;
  }

  if (command2 === "uuidv4" || command2 === "uuid") {
    console.log(`Here's your UUID V4: ${generateUuidV4()}`);
    return;
  } else if (command2 === "uuidv7") {
    console.log(`Here's your UUID V7: ${generateUuidV7()}`);
    return;
  }

  if (command2 === "secret_key") {
    if (commands.includes("--length")) {
      const length = Number(commands[commands.length - 1]);
      console.log(`Here's your Secret Key: ${generateSecretKey(length)}`);
    } else {
      console.log(`Here's your Secret Key: ${generateSecretKey()}`);
    }

    return;
  }

  console.log(`command ${command2} does not exist`);
}

readCommands();
