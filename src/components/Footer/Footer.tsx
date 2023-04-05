import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { Tooltip, message, notification } from 'antd'
import {
  StyledAvatar,
  StyledFooter,
  StyledFooterText,
  StyledIconWrapper,
} from './Footer.style'

const Footer = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('shanpigLiao@gmail.com')

    notification.success({
      placement: 'bottomLeft',
      message: 'Email copied to clipboard!',
      description: 'shanpigLiao@gmail.com',
    })
  }

  return (
    <StyledFooter>
      <StyledIconWrapper>
        <Tooltip title="shanpigLiao@gmail.com">
          <div onClick={copyEmailToClipboard}>
            <StyledAvatar icon={<MailOutlined />} />
          </div>
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
