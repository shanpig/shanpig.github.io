import { Col, Row } from 'antd'
import SectionTitle from '../components/SectionTItle/SectionTitle'
import ExperienceCard from './components/ExperienceCard/ExperienceCard'

import { EXPERIENCES } from './Experience.constants'
import { StyledTimeline } from './Experience.style'

const Experience = () => {
  return (
    <Row>
      <Col xs={24} lg={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <SectionTitle>Experiences</SectionTitle>
        <StyledTimeline
          mode="left"
          items={EXPERIENCES.map((experience) => {
            const key = `${experience.company}${experience.role}`

            return {
              children: <ExperienceCard key={key} {...experience} />,
            }
          })}
        />
      </Col>
    </Row>
  )
}

export default Experience
