import { Tabs } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledHeader, StyledLink } from './Header.style'
import Script from 'next/script'

const navItems = {
  '/': 'Home',
  '/blog': 'Blog',
}

const Header = () => {
  const { pathname } = useRouter()
  const titlePre = navItems[pathname]

  return (
    <header>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
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
          items={Object.entries(navItems).map(([page, label]) => ({
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
