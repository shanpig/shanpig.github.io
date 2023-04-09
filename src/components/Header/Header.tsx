import Head from 'next/head'
import { useRouter } from 'next/router'
import { StyledHeader, StyledLink, StyledTabs } from './Header.style'
import Script from 'next/script'

const navItems = {
  '/': 'Home',
  '/blog': 'Blog',
}

const Header = () => {
  const { pathname, push } = useRouter()
  const titlePre = navItems[pathname]
  const titleText = titlePre ? `${titlePre} | Shanpig` : 'Shanpig'

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
        <title>{titleText}</title>
        <meta
          name="description"
          content="Accomplished Front End Web Developer with 1.5 years building B2B service platform with 100k+ users."
        />
        <meta name="og:title" content="Shanpig, a front end web developer" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <StyledHeader>
        <StyledTabs
          type="card"
          activeKey={pathname}
          onTabClick={(page) => push(page)}
          items={Object.entries(navItems).map(([page, label]) => ({
            label: <StyledLink>{label}</StyledLink>,
            key: page,
          }))}
        ></StyledTabs>
      </StyledHeader>
    </header>
  )
}

export default Header
