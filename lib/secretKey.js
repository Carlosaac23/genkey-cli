import crypto from 'crypto';

export function generateSecretKey(length = 16) {
  if (!Number.isFinite(length) || Number.isNaN(length)) {
    throw new Error('Secret key length must be a number');
  }

  if (!Number.isInteger(length)) {
    throw new Error('Secret key length must be an integer');
  }

  if (length < 8) {
    throw new Error('Secret key length must be at least 8');
  }

  const MAX_LENGTH = 1024;
  if (length > MAX_LENGTH) {
    throw new Error(`Secret key length must be <= ${MAX_LENGTH}`);
  }

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
