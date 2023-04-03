import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Introduction from './index/Introduction/Introduction'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <Introduction />
    </>
  )
}
