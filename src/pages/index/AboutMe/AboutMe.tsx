import {
  BulbOutlined,
  CalendarOutlined,
  MessageOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, List, Row, Space } from 'antd'
import SectionTitle from '../components/SectionTItle/SectionTitle'

import { StyledContent, StyledIcon } from './AboutMe.style'

const INTRO = [
  {
    icon: <CalendarOutlined />,
    content: '1.5 years building B2B service platform for 100k+ users.',
  },
  {
    icon: <ThunderboltOutlined />,
    content:
      'Expert at turning complex business logic into manageable and modularized components.',
  },
  {
    icon: <BulbOutlined />,
    content:
      'Adaptable to new technologies and unprecedented feature requests.',
  },
  {
    icon: <MessageOutlined />,
    content:
      'Strong and concise communication skills to gather information and convey thoughts.',
  },
]

const AboutMe = () => {
  return (
    <Row>
      <Col xs={24} lg={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <SectionTitle>About Me</SectionTitle>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={INTRO}
          renderItem={({ icon, content }) => (
            <List.Item>
              <Card>
                <Space direction="vertical" size={12} align="center">
                  <StyledIcon>{icon}</StyledIcon>
                  <StyledContent>{content}</StyledContent>
                </Space>
              </Card>
            </List.Item>
          )}
        ></List>
      </Col>
    </Row>
  )
}

export default AboutMe
