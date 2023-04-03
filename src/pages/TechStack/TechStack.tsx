import SectionTitle from '../index/components/SectionTItle/SectionTitle'
import Image from 'next/image'
import { Col, Row, Space, Tooltip } from 'antd'
import { StyledImage, StyledLogos } from './TechStack.style'

const LOGOS = [
  { title: 'react', logo: '/logos/react-logo.png' },
  { title: 'typescript', logo: '/logos/typescript-logo.png' },
  { title: 'styled-components', logo: '/logos/styled-components-logo.png' },
  { title: 'ant-design', logo: '/logos/ant-design-logo.png' },
  { title: 'storybook', logo: '/logos/storybook-logo.png' },
  { title: 'graphql', logo: '/logos/graphql-logo.png' },
  { title: 'cypress', logo: '/logos/cypress-logo.png' },
  { title: 'jest', logo: '/logos/jest-logo.png' },
  { title: 'react-router', logo: '/logos/react-router-logo.png' },
  { title: 'redux', logo: '/logos/redux-logo.png' },
]

const TechStack = () => {
  return (
    <Row>
      <Col xs={24} lg={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <SectionTitle>Tech Stack</SectionTitle>
        <StyledLogos>
          {LOGOS.map(({ title, logo }) => (
            <Tooltip title={title}>
              <StyledImage
                key={logo}
                src={logo}
                width={100}
                height={100}
                objectFit="contain"
              ></StyledImage>
            </Tooltip>
          ))}
        </StyledLogos>
      </Col>
    </Row>
  )
}

export default TechStack
