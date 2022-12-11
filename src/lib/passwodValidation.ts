import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function validatePassword(dbPassword: string, password: string) {
  const isValid = await bcrypt.compare(password, dbPassword);
  return isValid;
}
