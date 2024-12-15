import React from 'react';
import { Typography, Row, Col, Card, Button, Space, Divider } from 'antd';
import { RocketOutlined, CodeOutlined, CloudOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Products: React.FC = () => {
  // 产品服务数据
  const products = [
    {
      icon: <RocketOutlined />,
      title: "抖音直播解决方案",
      description: "专业的抖音直播运营系统，提供全方位的直播管理功能",
      features: [
        "24小时无人直播系统",
        "智能场景切换",
        "用户互动自动回复",
        "数据分析报表",
        "多账号管理"
      ],
      background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)'
    },
    {
      icon: <CodeOutlined />,
      title: "软件定制开发",
      description: "为企业提供专业的软件定制开发服务，满足个性化需求",
      features: [
        "需求分析与设计",
        "技术选型与架构",
        "开发与测试",
        "部署与维护",
        "技术支持"
      ],
      background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)'
    },
    {
      icon: <CloudOutlined />,
      title: "云服务解决方案",
      description: "提供完整的云服务解决方案，助力企业数字化转型",
      features: [
        "云服务器部署",
        "数据库优化",
        "负载均衡",
        "安全防护",
        "监控告警"
      ],
      background: 'linear-gradient(135deg, #722ed1 0%, #531dab 100%)'
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: "企业安全服务",
      description: "为企业提供全面的安全保障服务，保护企业数字资产",
      features: [
        "安全评估",
        "漏洞扫描",
        "渗透测试",
        "应急响应",
        "安全培训"
      ],
      background: 'linear-gradient(135deg, #fa8c16 0%, #d46b08 100%)'
    }
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      {/* 页面标题 */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={1}>产品服务</Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '800px', margin: '20px auto' }}>
          我们提供全方位的软件开发和技术服务解决方案，助力企业数字化转型
        </Paragraph>
      </div>

      {/* 产品列表 */}
      <Row gutter={[32, 32]} style={{ padding: '0 50px', maxWidth: '1400px', margin: '0 auto' }}>
        {products.map((product, index) => (
          <Col xs={24} md={12} key={index}>
            <div className={`fade-in delay-${index}`}>
              <Card
                hoverable
                className="hover-scale"
                style={{ height: '100%', overflow: 'hidden' }}
                bodyStyle={{ padding: '30px' }}
              >
                {/* 卡片头部 */}
                <div style={{
                  background: product.background,
                  margin: '-30px -30px 20px',
                  padding: '30px',
                  color: 'white',
                  borderRadius: '8px 8px 0 0'
                }}>
                  {React.cloneElement(product.icon as React.ReactElement, {
                    style: { fontSize: '48px', marginBottom: '16px' }
                  })}
                  <Title level={3} style={{ color: 'white', margin: 0 }}>
                    {product.title}
                  </Title>
                </div>

                {/* 卡片内容 */}
                <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
                  {product.description}
                </Paragraph>

                <Divider style={{ margin: '16px 0' }} />

                {/* 功能列表 */}
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  margin: '0 0 24px 0'
                }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ 
                      padding: '8px 0',
                      fontSize: '16px',
                      color: 'rgba(0, 0, 0, 0.85)',
                      borderBottom: i !== product.features.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 按钮 */}
                <Space>
                  <Button type="primary" size="large">
                    了解详情
                  </Button>
                  <Button size="large">
                    立即咨询
                  </Button>
                </Space>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      {/* 服务优势 */}
      <div style={{ 
        background: '#f5f5f5',
        padding: '80px 0',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 50px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            我们的服务优势
          </Title>
          <Row gutter={[32, 32]}>
            {[
              {
                title: "专业团队",
                description: "拥有多年经验的技术团队，提供专业的技术支持和服务"
              },
              {
                title: "快速响应",
                description: "7*24小时技术支持，及时响应客户需求"
              },
              {
                title: "质量保证",
                description: "严格的质量管理体系，确保项目交付质量"
              },
              {
                title: "持续创新",
                description: "持续关注技术发展，不断创新服务模式"
              }
            ].map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className={`fade-in delay-${index}`}>
                  <Card hoverable className="hover-scale" style={{ textAlign: 'center' }}>
                    <Title level={4}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Products; 