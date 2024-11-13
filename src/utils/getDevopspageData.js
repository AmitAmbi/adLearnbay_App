import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const dirPath = path.resolve(process.cwd(), 'src', 'pageData', 'devops');
  const files = await fs.readdir(dirPath);
  const paths = files.map(file => ({ id: path.parse(file).name }));

  return paths;
}

export async function getPageData(id) {
  try {
    const filePath = path.resolve(process.cwd(), 'src', 'pageData', 'devops', `${id}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { error: '404 Error: Page data not found' };
    }
    console.error('Error loading page data:', error);
    return { error: 'An unexpected error occurred while loading page data' };
  }
}

