import Head from 'next/head';
import Link from 'next/link';

import { Layout, SITE_TITLE } from '../components/layout';
import utilStyle from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <section className={utilStyle.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
