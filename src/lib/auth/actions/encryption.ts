"use server";

import CryptoJS from "crypto-js";

const secret = process.env.AUTH_SECRET || "secret";

export const encrypt = async (value: string) => {
  return CryptoJS.AES.encrypt(value, secret).toString();
};

export const decrypt = async (ciphertext: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (_e) {
    return null;
  }
};
