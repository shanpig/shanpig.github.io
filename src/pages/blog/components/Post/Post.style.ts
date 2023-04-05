import { Card } from 'antd'
import styled from 'styled-components'

export const StyledPost = styled(Card)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  :active {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`

export const StyledTitle = styled.div`
  color: rgb(0 0 0 / 85%);
  font-weight: 600;
  font-size: 1.2rem;
  text-align: left;
`

export const StyledAuthor = styled.div``

export const StyledDate = styled.div`
  text-align: right;
`
