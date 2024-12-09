import fs from "fs/promises";
import path from "path";

// Encoding/decoding functions to handle file-safe IDs
const encodeId = (id) => id.replace(/\//g, "_");
const decodeId = (id) => id.replace(/_/g, "/");

// Generate static parameters for dynamic routes
export async function generateStaticParams() {
  const dirPath = path.resolve(process.cwd(), "src", "pageData", "datascience");

  try {
    const files = await fs.readdir(dirPath);
    const paths = files.map((file) => ({
      id: encodeId(path.parse(file).name).split("_"), // Split to return as array
    }));
    return paths;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}


// Fetch page data based on ID
export async function getPageData(id) {
  const normalizedId = Array.isArray(id) ? id.join("/") : id;
  const encodedId = encodeId(normalizedId);

  const filePath = path.resolve(
    process.cwd(),
    "src",
    "pageData",
    "datascience",
    `${encodedId}.json`
  );

  try {
    // Check if the file exists
    await fs.access(filePath);
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading page data:", error);
    return { error: "Page data not found." };
  }
}
