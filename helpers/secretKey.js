import crypto from 'crypto';

export function generateSecretKey(length = 16) {
  const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
  const digit = '0123456789';
  const specialCharacter = '!@#$%^&*_?';

  const allCharacters = uppercaseLetter + lowercaseLetter + digit + specialCharacter;
  let secretKey = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, allCharacters.length);
    secretKey += allCharacters[randomIndex];
  }

  return secretKey;
}
