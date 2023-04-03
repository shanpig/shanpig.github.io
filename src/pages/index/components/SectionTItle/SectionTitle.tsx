import { StyledDivider, StyledTitle } from './SectionTitle.style'

const SectionTitle = ({ children }) => {
  return (
    <StyledDivider>
      <StyledTitle level={2}>{children}</StyledTitle>
    </StyledDivider>
  )
}

export default SectionTitle
