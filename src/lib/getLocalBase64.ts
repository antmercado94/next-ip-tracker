import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export async function getLocalBase64(imageUrl: string) {
  try {
    const file = await fs.readFile(imageUrl);

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
