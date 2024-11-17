import "server-only";

import CryptoJS from "crypto-js";

const secret = process.env.AUTH_SECRET || "secret";

export const encrypt = async (value: string) => {
  try {
    const result = CryptoJS.AES.encrypt(value, secret).toString();
    return { error: null, result };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Encryption failed", result: null };
  }
};

export const decrypt = async (ciphertext: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
    return {
      error: null,
      result: bytes.toString(CryptoJS.enc.Utf8),
    };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Decryption failed", result: null };
  }
};
