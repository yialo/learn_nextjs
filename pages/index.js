import Head from 'next/head';
import Link from 'next/link';

import { Layout, SITE_TITLE } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

import utilStyle from '../styles/utils.module.scss';

export default function Home({ allPostsData }) {
  return (
    <Layout home title={SITE_TITLE}>
      <section className={utilStyle.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>Blog</h2>
        <ul className={utilStyle.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyle.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
