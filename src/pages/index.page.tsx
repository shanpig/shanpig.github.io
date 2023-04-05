import Introduction from './index/Introduction/Introduction'
import AboutMe from './index/AboutMe/AboutMe'
import TechStack from './TechStack/TechStack'
import Experience from './index/Experience/Experience'
import Portfolio from './index/Portfolio/Portfolio'
import { StyledPage } from './index.style'

export default function Index() {
  return (
    <StyledPage>
      <Introduction />
      <AboutMe />
      <TechStack />
      <Experience />
      <Portfolio />
    </StyledPage>
  )
}
