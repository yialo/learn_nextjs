import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import remark from 'remark'
import html from 'remark-html'

const postsDirectoryPath = path.join(process.cwd(), '_posts');

type PostMatterData = {
  title: string;
  date: string;
};

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectoryPath, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data as PostMatterData,
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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectoryPath);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectoryPath, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContent);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data as PostMatterData,
  };
}
