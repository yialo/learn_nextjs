import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '../../components/layout';

import { Time } from '../../components/time';
import { getAllPostIds, getPostData  } from '../../lib/posts';

import utilStyle from '../../styles/utils.module.scss';

export default function Post({ postData }) {
  return (
    <Layout home={false} title={postData.title}>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Time dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};
