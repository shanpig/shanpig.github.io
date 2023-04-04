import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Shanpig</title>
        <meta
          name="description"
          content="Accomplished Front End Web Developer with 1.5 years building B2B service platform with 100k+ users."
        />
        <meta name="og:title" content="Shanpig, a front end web developer" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <ul>
        {navItems.map(({ label, page }) => (
          <li key={label}>
            <Link href={page}>
              <a className={pathname === page ? 'active' : undefined}>
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
