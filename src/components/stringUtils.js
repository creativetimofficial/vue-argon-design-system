export function randomString(length = 7) {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let text = "";

  for (let i = 0; i < length; i++)
    text += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );

  return text;
}
