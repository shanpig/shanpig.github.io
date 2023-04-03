import Header from '../components/header'
import Introduction from './index/Introduction/Introduction'
import AboutMe from './index/AboutMe/AboutMe'
import TechStack from './TechStack/TechStack'
import Experience from './index/Experience/Experience'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <Introduction />
      <AboutMe />
      <TechStack />
      <Experience />
      {/* <Portfolio /> */}
    </>
  )
}
