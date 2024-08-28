import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Função para criptografar uma mensagem
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(
  "Olá meu nome é Marcus Eduardo Costa Ribeiro",
  "utf-8",
  "hex"
);
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

// Função para descriptografar uma mensagem
function decrypt(encryptedText, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

console.log(decrypt(encrypted, key, iv));
