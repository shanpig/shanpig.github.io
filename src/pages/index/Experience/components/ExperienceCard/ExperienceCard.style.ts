import { Collapse, List, Typography } from 'antd'
import styled from 'styled-components'

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-item {
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out;

    :hover,
    &.ant-collapse-item-active {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
  }
`

export const StyledList = styled(List)`
  padding: 12px 24px;
`

export const StyledListItem = styled(List.Item)`
  font-size: 0.8rem;
`
