import { Divider, Typography } from 'antd'
import styled from 'styled-components'

export const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
  }
`

export const StyledDivider = styled(Divider)`
  &&& {
    margin-bottom: 48px;

    ::before,
    ::after {
      border-block-width: 3px;
    }
  }
`
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
`
