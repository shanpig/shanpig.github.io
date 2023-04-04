import { Card, Col, Row } from 'antd'
import SectionTitle from '../components/SectionTItle/SectionTitle'
import {
  PORTFOLIO_ITEMS,
  TECH_ARTICLES,
  TECH_TALKS,
} from './Portfolio.constants'
import { MediumCircleFilled } from '@ant-design/icons'
import { StyledCard, StyledLink, StyledPost } from './Portfolio.style'

const { Meta } = Card

const Portfolio = () => {
  return (
    <Row>
      <Col xs={24} lg={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <SectionTitle>Portfolio</SectionTitle>
        <Row gutter={[24, 24]}>
          {PORTFOLIO_ITEMS.map(({ title, url, description, coverImage }) => (
            <Col span={8}>
              <StyledLink target="_blank" rel="noreferrer noopener" href={url}>
                <StyledCard
                  cover={
                    <img
                      style={{ objectFit: 'cover' }}
                      src={coverImage}
                      width={200}
                      height={150}
                    ></img>
                  }
                >
                  <Meta title={title} description={description}></Meta>
                </StyledCard>
              </StyledLink>
            </Col>
          ))}
        </Row>
        <SectionTitle>Tech Talks</SectionTitle>
        <Row gutter={[24, 24]}>
          {TECH_TALKS.map(({ title, url, coverImage }) => (
            <Col span={8}>
              <StyledLink target="_blank" rel="noreferrer noopener" href={url}>
                <StyledCard
                  cover={
                    <img
                      style={{ objectFit: 'cover' }}
                      src={coverImage}
                      width={200}
                      height={150}
                    ></img>
                  }
                >
                  <Meta title={title}></Meta>
                </StyledCard>
              </StyledLink>
            </Col>
          ))}
        </Row>
        <SectionTitle>Medium Posts</SectionTitle>
        <Row gutter={[24, 24]}>
          {TECH_ARTICLES.map(({ title, url }) => (
            <Col span={24}>
              <StyledPost target="_blank" rel="noreferrer noopener" href={url}>
                <MediumCircleFilled color="black" />
                <div>{title}</div>
              </StyledPost>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Portfolio