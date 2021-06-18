import { Layout } from '../../components/layout';

import { getAllPostIds, getPostData  } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <h1>{postData.title}</h1>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
