import { Divider, Typography } from 'antd'
import styled from 'styled-components'

export const StyledDivider = styled(Divider)`
  &&& {
    margin: 48px 0;

    ::before,
    ::after {
      border-block-width: 3px;
    }
  }
`

export const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
  }
`
