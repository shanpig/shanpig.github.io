import { Typography } from 'antd'
import styled from 'styled-components'

export const StyledIcon = styled.div`
  text-align: center;

  svg {
    width: 40px;
    height: 40px;
  }
`

export const StyledContent = styled(Typography.Paragraph)`
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  max-width: 300px;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
