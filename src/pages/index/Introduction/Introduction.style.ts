import { Col, Typography } from 'antd'
import styled from 'styled-components'

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`

export const StyledTitle = styled(Typography.Title)`
  &&& {
    margin-bottom: 0;
    text-align: center;
  }
`
