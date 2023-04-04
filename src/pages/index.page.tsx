import Header from '../components/Header/Header'
import Introduction from './index/Introduction/Introduction'
import AboutMe from './index/AboutMe/AboutMe'
import TechStack from './TechStack/TechStack'
import Experience from './index/Experience/Experience'
import Portfolio from './index/Portfolio/Portfolio'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <Introduction />
      <AboutMe />
      <TechStack />
      <Experience />
      <Portfolio />
    </>
  )
}
