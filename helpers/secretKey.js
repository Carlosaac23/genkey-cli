export function generateSecretKey(length = 16) {
  const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
  const digit = "0123456789";
  const specialCharacter = "!@#$%^&*_?";

  const allCharacters = uppercaseLetter + lowercaseLetter + digit + specialCharacter;
  let secretKey = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    secretKey += allCharacters[randomIndex];
  }

  return secretKey;
}
