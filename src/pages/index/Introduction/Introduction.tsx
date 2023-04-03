import { Avatar, Col, Row, Space, Typography } from 'antd'
import { StyledCol, StyledTitle } from './Introduction.style'

const Introduction = () => {
  return (
    <div className="introduction">
      <Row justify="center">
        <StyledCol span={24}>
          <Avatar size={150} src="/avatar.png"></Avatar>
        </StyledCol>
        <StyledCol span={24}>
          <Space size={4} direction="vertical" align="center">
            <StyledTitle>Hi ! My name is Shanpig.</StyledTitle>
            <Typography.Text strong>
              Learning, Achieving, Progressing
            </Typography.Text>
          </Space>
        </StyledCol>
      </Row>
    </div>
  )
}

export default Introduction
