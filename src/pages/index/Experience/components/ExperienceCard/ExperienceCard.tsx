import { Collapse, Typography } from 'antd'
import { ACHIEVEMENTS } from '../../Experience.constants'
import {
  StyledListItem,
  StyledCollapse,
  StyledHeader,
  StyledTitle,
  StyledList,
} from './ExperienceCard.style'

const { Panel } = Collapse

const ExperienceCard = ({ panelKey, company, role, startAt, endAt }) => {
  return (
    <StyledCollapse ghost expandIcon={() => <></>}>
      <Panel
        key={panelKey}
        header={
          <StyledHeader>
            <StyledTitle level={4}>{company}</StyledTitle>
            <Typography.Text>{role}</Typography.Text>
            <Typography.Text>
              {startAt} ~ {endAt || 'current'}
            </Typography.Text>
          </StyledHeader>
        }
      >
        <StyledList>
          {ACHIEVEMENTS[company].map((achievement) => (
            <StyledListItem key={achievement}>{achievement}</StyledListItem>
          ))}
        </StyledList>
      </Panel>
    </StyledCollapse>
  )
}

export default ExperienceCard
