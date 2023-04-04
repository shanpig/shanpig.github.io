import { Tabs } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledHeader, StyledLink } from './Header.style'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Shanpig</title>
        <meta
          name="description"
          content="Accomplished Front End Web Developer with 1.5 years building B2B service platform with 100k+ users."
        />
        <meta name="og:title" content="Shanpig, a front end web developer" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <StyledHeader>
        <Tabs
          type="card"
          items={navItems.map(({ label, page }) => ({
            label: (
              <Link key={label} href={page}>
                <StyledLink>{label}</StyledLink>
              </Link>
            ),
            key: page,
            active: pathname === page,
          }))}
        ></Tabs>
      </StyledHeader>
    </header>
  )
}

export default Header
