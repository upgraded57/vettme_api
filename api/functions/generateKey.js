function generateKey(type) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChars = Array.from(
    { length: 16 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");

  return type === "private"
    ? `private_${randomChars}_key`
    : type === "public"
      ? `public_${randomChars}_key`
      : null;
}

module.exports = generateKey;
