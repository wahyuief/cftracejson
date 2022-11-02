import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudflare CDN-CGI Trace with JSON Format</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cloudflare CDN-CGI Trace with JSON Format
        </h1>

        <p className={styles.description}>
          Get started with{' '}
          <code className={styles.code}>/api/trace</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://kurawal.id" target="_blank">
          Powered by Kurawal Teknologi
        </a>
      </footer>
    </div>
  )
}
