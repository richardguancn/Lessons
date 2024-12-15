import React from 'react';
import { Typography, Row, Col, Card, Timeline, Image } from 'antd';
import { 
  RocketOutlined, 
  TeamOutlined, 
  TrophyOutlined, 
  SafetyCertificateOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  // 公司数据
  const companyStats = [
    { number: '5年+', label: '行业经验', icon: <RocketOutlined /> },
    { number: '100+', label: '服务客户', icon: <TeamOutlined /> },
    { number: '50+', label: '技术专利', icon: <TrophyOutlined /> },
    { number: '99%', label: '客户满意度', icon: <SafetyCertificateOutlined /> }
  ];

  // 发展历程
  const history = [
    {
      year: '2024',
      events: [
        '服务客户突破100家',
        '获得高新技术企业认证',
        '完成B轮融资'
      ]
    },
    {
      year: '2023',
      events: [
        '发布抖音直播解决方案2.0',
        '技术团队扩展到50人',
        '成立人工智能实验室'
      ]
    },
    {
      year: '2022',
      events: [
        '获得软件企业认证',
        '完成A轮融资',
        '发布首个AI产品'
      ]
    },
    {
      year: '2021',
      events: [
        '公司成立',
        '完成天使轮融资',
        '核心团队组建'
      ]
    }
  ];

  return (
    <div>
      {/* 公司简介 */}
      <div style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/banner5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={1} style={{ color: 'white', marginBottom: '24px' }}>
            关于麻雀软件
          </Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            麻雀软件是一家专注于软件开发的高新技术企业，致力于为企业提供专业的软件解决方案。
            我们拥有专业的研发团队和先进的技术储备，始终以客户需求为导向，
            提供高质量的软件产品和服务。
          </Paragraph>

          {/* 数据统计 */}
          <Row gutter={[32, 32]} justify="center">
            {companyStats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <div className={`fade-in delay-${index}`}>
                  {React.cloneElement(stat.icon, { 
                    style: { fontSize: '36px', color: '#1890ff', marginBottom: '16px' } 
                  })}
                  <Title level={2} style={{ color: 'white', margin: '0 0 8px' }}>
                    {stat.number}
                  </Title>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {stat.label}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* 公司优势 */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
            我们的优势
          </Title>
          <Row gutter={[32, 32]}>
            {[
              {
                title: '专业团队',
                description: '拥有一支经验丰富的技术团队，平均从业经验5年以上',
                icon: <TeamOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              },
              {
                title: '技术创新',
                description: '持续关注技术发展，不断进行技术创新和积累',
                icon: <RocketOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              },
              {
                title: '优质服务',
                description: '提供7*24小时技术支持，确保系统稳定运行',
                icon: <SafetyCertificateOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              },
              {
                title: '成功案例',
                description: '积累了大量成功案例，涵盖多个行业领域',
                icon: <TrophyOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              }
            ].map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className={`fade-in delay-${index}`}>
                  <Card hoverable className="hover-scale" style={{ textAlign: 'center', height: '100%' }}>
                    {item.icon}
                    <Title level={4} style={{ margin: '16px 0' }}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* 发展历程 */}
      <div style={{ padding: '80px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
            发展历程
          </Title>
          <Timeline
            mode="alternate"
            items={history.map(item => ({
              children: (
                <Card className="hover-scale" style={{ marginBottom: '20px' }}>
                  <Title level={3} style={{ color: '#1890ff', marginBottom: '16px' }}>
                    {item.year}
                  </Title>
                  {item.events.map((event, index) => (
                    <Paragraph key={index} style={{ marginBottom: '8px' }}>
                      {event}
                    </Paragraph>
                  ))}
                </Card>
              )
            }))}
          />
        </div>
      </div>

      {/* 企业文化 */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
            企业文化
          </Title>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <div className="fade-in">
                <Title level={3}>企业使命</Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  用科技创新推动企业数字化转型，让技术创造更大的价值。
                </Paragraph>

                <Title level={3} style={{ marginTop: '40px' }}>企业愿景</Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  成为最受信赖的企业数字化转型伙伴。
                </Paragraph>

                <Title level={3} style={{ marginTop: '40px' }}>核心价值观</Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  诚信、创新、专业、共赢
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="fade-in delay-1">
                <Image
                  src="/images/about-culture.jpg"
                  alt="企业文化"
                  style={{ borderRadius: '8px', width: '100%' }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About; 