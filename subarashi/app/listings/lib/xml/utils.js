import { promises as fs } from "fs";
import path from "path";
const XML_DIR = path.join(process.cwd(), "public", "xml");

export async function saveXML(id, content) {
  await fs.mkdir(XML_DIR, { recursive: true });
  await fs.writeFile(path.join(XML_DIR, `${id}.xml`), content);
}

export async function getXML(id) {
  try {
    return await fs.readFile(path.join(XML_DIR, `${id}.xml`), "utf-8");
  } catch (error) {
    return null;
  }
}
