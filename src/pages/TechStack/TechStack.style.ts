import styled from 'styled-components'
import Image from 'next/image'

export const StyledLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

export const StyledImage = styled(Image)`
  transform: scale(0.8);
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1);
  }
`
