import { Avatar } from 'antd'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  background: rgb(0 0 0 / 0.85);
  margin-top: 84px;
  min-height: 300px;
  padding: 60px;
`

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const StyledAvatar = styled(Avatar).attrs({ size: 64 })`
  background-color: white;
  transition: transform 0.1s ease-in-out;

  :hover {
    svg {
      transform: rotateZ(5deg);
    }
  }

  svg {
    color: black;
    width: 36px;
    height: 36px;
  }
`

export const StyledFooterText = styled.div`
  font-size: 0.7rem;
  margin-top: 16px;
  text-align: center;
  color: rgb(255 255 255 / 0.4);
  transition: color 0.1s ease-in-out;

  :hover {
    color: rgb(255 255 255 / 0.5);
  }
`
