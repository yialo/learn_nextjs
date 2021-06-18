import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectoryPath = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectoryPath, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    }

    if (a > b) {
      return -1;
    }

    return 0;
  });
}
