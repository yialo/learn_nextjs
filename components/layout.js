import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import utilStyle from '../styles/utils.module.scss';
import style from './layout.module.scss';

const NAME = 'Yialo';
export const SITE_TITLE = 'Next.js Sample Website';

export function Layout({ children, home, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${
            encodeURI(SITE_TITLE)
          }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          property="og:title"
          content={SITE_TITLE}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={style.container}>
        <header className={style.header}>
          {
            home ? (
              <>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyle.borderCircle}
                  height={144}
                  width={144}
                  alt={NAME}
                />
                <h1 className={utilStyle.heading2Xl}>{NAME}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyle.borderCircle}
                      height={108}
                      width={108}
                      alt={NAME}
                    />
                  </a>
                </Link>
                <h2 className={utilStyle.headingLg}>
                  <Link href="/">
                    <a className={utilStyle.colorInherit}>{NAME}</a>
                  </Link>
                </h2>
              </>
            )
          }
        </header>

        <main>{children}</main>

        {!home && (
          <div className={style.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
