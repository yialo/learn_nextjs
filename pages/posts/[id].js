import { Layout } from '../../components/layout';

import { Time } from '../../components/time';
import { getAllPostIds, getPostData  } from '../../lib/posts';

import utilStyle from '../../styles/utils.module.scss';

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
