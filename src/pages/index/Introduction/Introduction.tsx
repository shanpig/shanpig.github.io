import { Avatar, Row, Space, Typography } from 'antd'
import { TypeAnimation } from 'react-type-animation'
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
            <StyledTitle>
              <div>Hello there ! I am </div>
              <TypeAnimation
                cursor
                speed={75}
                repeat={Infinity}
                wrapper="div"
                sequence={[
                  'Shanpig',
                  3000,
                  'Learning',
                  1000,
                  'Achieving',
                  1000,
                  'Progressing',
                  1000,
                ]}
              />
            </StyledTitle>
          </Space>
        </StyledCol>
      </Row>
    </div>
  )
}

export default Introduction
