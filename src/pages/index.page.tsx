import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Introduction from './index/Introduction/Introduction'
import AboutMe from './index/AboutMe/AboutMe'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <Introduction />
      <AboutMe />
      {/* <TechStack />
      <Experience />
      <Portfolio /> */}
    </>
  )
}
