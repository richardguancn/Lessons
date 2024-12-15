import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';
import { RocketOutlined, CodeOutlined, CustomerServiceOutlined, PlayCircleOutlined, BarChartOutlined, MessageOutlined, TeamOutlined } from '@ant-design/icons';
import { getAssetPath } from '../utils/paths';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Banner Section */}
      <div
        className="fade-in"
        style={{
          height: '600px',
          margin: '0',
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('${getAssetPath('/images/banner4.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div>
          <div className="slide-down">
            <Title style={{ color: 'white', fontSize: '48px', marginBottom: '24px' }}>
              麻雀软件科技
            </Title>
          </div>
          <div className="slide-up">
            <Paragraph style={{ color: 'white', fontSize: '20px', marginBottom: '32px' }}>
              专注于软件开发解决方案，助力企业数字化转型
            </Paragraph>
          </div>
          <div className="zoom-in">
            <Space size="large">
              <Button type="primary" size="large" onClick={() => {
                window.location.href = '/products';
              }}>
                了解更多
              </Button>
              <Button ghost size="large" onClick={() => {
                window.location.href = '/contact';
              }}>
                联系我们
              </Button>
            </Space>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: '64px 0', background: '#f5f5f5' }}>
        <Row justify="center" style={{ marginBottom: '48px' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <div className="fade-in">
              <Title level={2}>我们的服务</Title>
              <Paragraph style={{ fontSize: '16px' }}>
                为您提供全方位的软件解决方案
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Row gutter={[32, 32]} style={{ padding: '0 50px' }}>
          {[
            {
              icon: <RocketOutlined />,
              title: "抖音直播解决方案",
              description: "提供24小时无人直播系统，智能化运营，提升直播效率"
            },
            {
              icon: <CodeOutlined />,
              title: "软件定制开发",
              description: "根据企业需求，提供专业的软件定制开发服务"
            },
            {
              icon: <CustomerServiceOutlined />,
              title: "技术支持服务",
              description: "专业的技术团队，为您提供全方位的技术支持"
            }
          ].map((service, index) => (
            <Col xs={24} md={8} key={index}>
              <div className={`fade-in delay-${index}`}>
                <Card
                  hoverable
                  className="hover-scale"
                  style={{ height: '100%' }}
                  cover={
                    <div style={{ 
                      padding: '48px 0 24px', 
                      textAlign: 'center',
                      background: '#fafafa'
                    }}>
                      {React.cloneElement(service.icon as React.ReactElement, {
                        style: { fontSize: '48px', color: '#1890ff' }
                      })}
                    </div>
                  }
                >
                  <Card.Meta
                    title={service.title}
                    description={service.description}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* 新增：技术优势 Section */}
      <div style={{ padding: '64px 0', background: '#fff' }}>
        <Row justify="center" style={{ marginBottom: '48px' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <div className="fade-in">
              <Title level={2}>技术优势</Title>
              <Paragraph style={{ fontSize: '16px' }}>
                专业的技术团队，先进的开发理念
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Row gutter={[32, 32]} style={{ padding: '0 50px' }}>
          {[
            {
              title: "前沿技术",
              description: "采用最新的技术栈和开发框架，确保系统的高性能和可扩展性"
            },
            {
              title: "敏捷开发",
              description: "快速迭代，持续交付，及时响应需求变化"
            },
            {
              title: "质量保证",
              description: "严格的代码审查和测试流程，确保产品质量"
            },
            {
              title: "安全可靠",
              description: "注重数据安全和系统稳定性，提供可靠的技术保障"
            }
          ].map((item, index) => (
            <Col xs={24} sm={12} key={index}>
              <div className={`fade-in delay-${index}`}>
                <Card hoverable className="hover-scale" style={{ height: '100%' }}>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Statistics Section with Background */}
      <div style={{ 
        padding: '64px 0',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url('${getAssetPath('/images/banner5.jpg')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center'
      }}>
        <Row gutter={[48, 48]} justify="center" style={{ margin: 0, padding: '0 50px' }}>
          {[
            { number: '5年+', desc: '行业经验' },
            { number: '100+', desc: '成功案例' },
            { number: '24/7', desc: '技术支持' }
          ].map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <div className={`fade-in delay-${index}`}>
                <Title style={{ 
                  fontSize: '48px', 
                  margin: '0', 
                  color: 'white' 
                }}>
                  {item.number}
                </Title>
                <Paragraph style={{ 
                  fontSize: '16px', 
                  marginTop: '16px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {item.desc}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* 新增：解决方案 Section */}
      <div style={{ padding: '64px 0', background: '#fff' }}>
        <Row justify="center" style={{ padding: '0 50px' }}>
          <Col xs={24} md={12} style={{ padding: '32px' }}>
            <div className="fade-in">
              <Title level={2}>抖音直播解决方案</Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
                我们提供完整的抖音直播运营解决方案，帮助企业快速建立直播营销渠道
              </Paragraph>
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 比例
                background: 'linear-gradient(135deg, #1890ff 0%, #001529 100%)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  {/* 模拟直播界面 */}
                  <div style={{
                    flex: 2,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '10px',
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '2px',
                    }} />
                  </div>
                  {/* 模拟数据面板 */}
                  <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                  }}>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        padding: '10px',
                      }} />
                    ))}
                  </div>
                </div>
              </div>
              <Button type="primary" size="large" style={{ marginTop: '24px' }}>
                了解详情
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} style={{ padding: '32px' }}>
            <div className="fade-in delay-1">
              <img 
                src="/images/solution.png" 
                alt="解��方案" 
                style={{ 
                  width: '100%', 
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* 客户评价和联系我们 Section */}
      <div style={{ 
        padding: '64px 0',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('${getAssetPath('/images/banner5.jpg')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
      }}>
        {/* 客户评价 */}
        <div style={{ marginBottom: '80px' }}>
          <Row justify="center" style={{ marginBottom: '48px' }}>
            <Col span={24} style={{ textAlign: 'center' }}>
              <div className="fade-in">
                <Title level={2} style={{ color: 'white' }}>客户评价</Title>
                <Paragraph style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  来自客户的真实反馈
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 32]} style={{ padding: '0 50px' }}>
            {[
              {
                content: "麻雀���件的直播系统帮助我们提升了300%的销售额，非常专业的团队！",
                author: "某电商平台负责人"
              },
              {
                content: "系统稳定性很好，技术支持响应及时，是值得信赖的合作伙伴。",
                author: "某品牌运营总监"
              },
              {
                content: "定制开发完全满足了我们的需求，团队专业度很高交付及时。",
                author: "某企业技术总监"
              }
            ].map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <div className={`fade-in delay-${index}`}>
                  <Card 
                    hoverable 
                    className="hover-scale"
                    style={{ 
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <Paragraph style={{ 
                      fontSize: '16px',
                      fontStyle: 'italic',
                      marginBottom: '24px',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      "{item.content}"
                    </Paragraph>
                    <div style={{ 
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      paddingTop: '16px',
                      marginTop: '16px'
                    }}>
                      <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }} strong>
                        {item.author}
                      </Text>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* 联系我们 */}
        <div className="fade-in" style={{ textAlign: 'center', padding: '0 50px' }}>
          <Title level={2} style={{ color: 'white' }}>联系我们</Title>
          <Paragraph style={{ 
            fontSize: '16px', 
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            期待与您的合作，让我们一起打造优秀的软件解决方案
          </Paragraph>
          <Space size="large">
            <Button 
              type="primary" 
              size="large" 
              className="hover-scale"
              style={{
                height: '48px',
                padding: '0 40px',
                fontSize: '16px'
              }}
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              立即咨询
            </Button>
            <Button 
              ghost 
              size="large" 
              className="hover-scale"
              style={{
                height: '48px',
                padding: '0 40px',
                fontSize: '16px'
              }}
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              获取方案
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Home; 