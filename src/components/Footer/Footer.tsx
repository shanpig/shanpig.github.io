import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { Tooltip, Typography } from 'antd'
import {
  StyledAvatar,
  StyledFooter,
  StyledFooterText,
  StyledIconWrapper,
} from './Footer.style'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledIconWrapper>
        <Tooltip title="shanpigLiao@gmail.com">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:shanpigLiao@gmail.com"
          >
            <StyledAvatar icon={<MailOutlined />} />
          </a>
        </Tooltip>
        <Tooltip title="linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/shanpig/"
          >
            <StyledAvatar icon={<LinkedinOutlined />} />
          </a>
        </Tooltip>
        <Tooltip title="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shanpig"
          >
            <StyledAvatar icon={<GithubOutlined />} />
          </a>
        </Tooltip>
      </StyledIconWrapper>
      <StyledFooterText>@ 2023 Shanpig Liao</StyledFooterText>
    </StyledFooter>
  )
}

export default Footer
