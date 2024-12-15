import React from 'react';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Cases: React.FC = () => {
  // 案例数据
  const cases = [
    {
      title: "某知名电商平台直播系统",
      tags: ["直播系统", "数据分析", "AI智能"],
      description: "为客户定制开发的直播管理系统，支持多账号管理、智能场景切换、数据分析等功能，帮助客户提升直播效率300%。",
      results: [
        "日均直播时长提升200%",
        "观看人数增长150%",
        "互动转化率提升80%",
        "运营成本降低40%"
      ],
      image: "/images/case1.jpg",
      industry: "电商直播"
    },
    {
      title: "某制造企业生产管理系统",
      tags: ["企业管理", "数字化转型", "物联网"],
      description: "帮助传统制造企业实现数字化转型，开发智能生产管理系统，实现生产全流程数字化管理。",
      results: [
        "生产效率提升50%",
        "库存周转率提升40%",
        "质量问题降低60%",
        "管理成本降低30%"
      ],
      image: "/images/case2.jpg",
      industry: "智能制造"
    },
    {
      title: "某金融机构数据分析平台",
      tags: ["大数据", "AI算法", "金融科技"],
      description: "为金融机构开发的智能数据分析平台，运用AI算法实现数据智能分析，辅助决策。",
      results: [
        "分析效率提升400%",
        "决策准确率提升60%",
        "风险识别率提升70%",
        "运营成本降低45%"
      ],
      image: "/images/case3.jpg",
      industry: "金融科技"
    },
    {
      title: "某教育机构在线学习平台",
      tags: ["在线教育", "直播课堂", "数据分析"],
      description: "为教育机构开发的在线学习平台，支持直播课堂、课程管理、学习追踪等功能。",
      results: [
        "学习参与度提升80%",
        "课程完成率提升65%",
        "师生互动增长100%",
        "教学质量提升50%"
      ],
      image: "/images/case4.jpg",
      industry: "在线教育"
    }
  ];

  return (
    <div>
      {/* 页面标题 */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/banner5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        color: 'white'
      }}>
        <Title level={1} style={{ color: 'white' }}>成功案例</Title>
        <Paragraph style={{ 
          fontSize: '18px', 
          maxWidth: '800px', 
          margin: '20px auto',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          我们用专业的技术和服务，帮助客户实现业务增长
        </Paragraph>
      </div>

      {/* 案例列表 */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 50px' }}>
        <Row gutter={[32, 48]}>
          {cases.map((item, index) => (
            <Col xs={24} md={12} key={index}>
              <div className={`fade-in delay-${index}`}>
                <Card
                  hoverable
                  className="hover-scale"
                  cover={
                    <div style={{
                      height: '240px',
                      background: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '40px 24px 24px',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white'
                      }}>
                        <Tag color="blue" style={{ marginBottom: '8px' }}>{item.industry}</Tag>
                        <Title level={3} style={{ color: 'white', margin: 0 }}>{item.title}</Title>
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: '24px' }}
                >
                  <div style={{ marginBottom: '16px' }}>
                    {item.tags.map((tag, i) => (
                      <Tag key={i} color="blue" style={{ marginBottom: '8px', marginRight: '8px' }}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  
                  <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
                    {item.description}
                  </Paragraph>

                  <div style={{ 
                    background: '#f5f5f5', 
                    padding: '16px', 
                    borderRadius: '8px',
                    marginBottom: '24px'
                  }}>
                    <Title level={5} style={{ marginBottom: '16px' }}>项目成效：</Title>
                    {item.results.map((result, i) => (
                      <div key={i} style={{ 
                        padding: '8px 0',
                        borderBottom: i !== item.results.length - 1 ? '1px solid #e8e8e8' : 'none',
                        color: '#666'
                      }}>
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button type="primary" size="large">
                    查看详情 <ArrowRightOutlined />
                  </Button>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* 合作流程 */}
      <div style={{ 
        background: '#f5f5f5',
        padding: '80px 0',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 50px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            合作流程
          </Title>
          <Row gutter={[32, 32]} justify="center">
            {[
              { title: "需求沟通", description: "深入了解客户需求，确定项目目标" },
              { title: "方案设计", description: "制定详细的解决方案和实施计划" },
              { title: "开发实施", description: "专业团队开发，定期沟通进度" },
              { title: "交付使用", description: "系统上线，提供技术支持和培训" }
            ].map((step, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className={`fade-in delay-${index}`}>
                  <Card hoverable className="hover-scale" style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      background: '#1890ff',
                      color: 'white',
                      borderRadius: '50%',
                      margin: '0 auto 16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <Title level={4}>{step.title}</Title>
                    <Paragraph>{step.description}</Paragraph>
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

export default Cases; 