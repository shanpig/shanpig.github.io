import { Tabs } from 'antd'
import styled from 'styled-components'

export const StyledHeader = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 36px;
`

export const StyledLink = styled.div`
  color: black;
`

export const StyledTabs = styled(Tabs)`
  &&& {
    .ant-tabs-tab {
      padding: 0;

      & .ant-tabs-tab-btn {
        padding: 8px 16px;
      }
    }
  }
`
