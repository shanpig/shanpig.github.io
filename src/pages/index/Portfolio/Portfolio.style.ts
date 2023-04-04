import { Card } from 'antd'
import styled, { css } from 'styled-components'

export const StyledLink = styled.a`
  height: 100%;
`

const shadow = css`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.1s ease-in-out;

  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`

export const StyledCard = styled(Card)`
  ${shadow};

  height: 100%;
`

export const StyledPost = styled.a`
  ${shadow};

  display: flex;
  background-color: white;
  align-items: center;
  gap: 12px;
  color: black;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: 600;

  :hover {
    color: black;
  }
`
