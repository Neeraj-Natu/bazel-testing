// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Link from 'next/link';
import Head from 'next/head';

export default function FirstBlog() {
  return (
    <>
    <Head>
      <title>First Blog</title>
    </Head>
    <div>
      <p>
          My first Blog !!!
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </p>
      <p>
      <Link href="/">Back to Home</Link>
      </p>
    </div>
    </>
  )
}
