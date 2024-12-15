import React from 'react';
import { Typography, Row, Col, Card, Tag, Button, Space, Divider } from 'antd';
import { 
  CalendarOutlined, 
  EyeOutlined, 
  ArrowRightOutlined,
  NotificationOutlined,
  RocketOutlined,
  TrophyOutlined,
  TeamOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const News: React.FC = () => {
  // 新闻分类
  const categories = [
    { key: 'company', label: '公司动态', icon: <NotificationOutlined /> },
    { key: 'product', label: '产品更新', icon: <RocketOutlined /> },
    { key: 'award', label: '荣誉资质', icon: <TrophyOutlined /> },
    { key: 'culture', label: '企业文化', icon: <TeamOutlined /> }
  ];

  // 新闻数据
  const news = [
    {
      id: 1,
      title: "麻雀软件荣获2024年度高新技术企业认证",
      category: "company",
      date: "2024-03-15",
      views: 2580,
      summary: "近日，麻雀软件凭借强大的技术创新能力和研发实力，成功通过高新技术企业认证...",
      image: "/images/banner5.jpg",
      tags: ["企业荣誉", "技术创新"]
    },
    {
      id: 2,
      title: "抖音直播解决方案2.0版本重磅发布",
      category: "product",
      date: "2024-03-10",
      views: 3456,
      summary: "全新升级的抖音直播解决方案2.0版本正式发布，新增AI场景识别、智能数据分析等功能...",
      image: "/images/banner4.jpg",
      tags: ["产品发布", "技术创新"]
    },
    {
      id: 3,
      title: "麻雀软件完成新一轮融资",
      category: "company",
      date: "2024-03-05",
      views: 2890,
      summary: "麻雀软件宣布完成B轮融资，未来将进一步加大研发投入，提升产品竞争力...",
      image: "/images/banner5.jpg",
      tags: ["企业发展", "融资消息"]
    },
    {
      id: 4,
      title: "2024年度客户服务满意度达99%",
      category: "company",
      date: "2024-02-28",
      views: 2100,
      summary: "根据第三方调查机构的调查结果显示，麻雀软件2024年度客户服务满意度达到99%...",
      image: "/images/banner4.jpg",
      tags: ["服务品质", "客户满意"]
    }
  ];

  return (
    <div>
      {/* 页面标题 */}
      <div style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/banner5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <Title level={1} style={{ color: 'white', marginBottom: '24px' }}>
          新闻动态
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          了解麻雀软件的最新动态和行业资讯
        </Paragraph>
      </div>

      {/* 主要内容区 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* 分类导航 */}
        <Row justify="center" style={{ marginBottom: '48px' }}>
          <Space size="large">
            {categories.map(cat => (
              <Button
                key={cat.key}
                type="text"
                size="large"
                icon={cat.icon}
                style={{ fontSize: '16px' }}
              >
                {cat.label}
              </Button>
            ))}
          </Space>
        </Row>

        {/* 新闻列表 */}
        <Row gutter={[32, 32]}>
          {news.map((item, index) => (
            <Col xs={24} md={12} key={item.id}>
              <div className={`fade-in delay-${index}`}>
                <Card
                  hoverable
                  className="hover-scale"
                  cover={
                    <div style={{
                      height: '240px',
                      background: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}/>
                  }
                  bodyStyle={{ padding: '24px' }}
                >
                  {/* 标签和日期 */}
                  <Space style={{ marginBottom: '16px' }}>
                    {item.tags.map((tag, i) => (
                      <Tag key={i} color="blue">{tag}</Tag>
                    ))}
                    <Space>
                      <CalendarOutlined style={{ color: '#8c8c8c' }} />
                      <Text type="secondary">{item.date}</Text>
                    </Space>
                    <Space>
                      <EyeOutlined style={{ color: '#8c8c8c' }} />
                      <Text type="secondary">{item.views}</Text>
                    </Space>
                  </Space>

                  {/* 标题 */}
                  <Title level={4} style={{ marginBottom: '16px' }}>
                    {item.title}
                  </Title>

                  {/* 摘要 */}
                  <Paragraph
                    style={{ 
                      fontSize: '16px',
                      marginBottom: '24px',
                      height: '48px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {item.summary}
                  </Paragraph>

                  {/* 阅读更多按钮 */}
                  <Button type="link" style={{ padding: 0 }}>
                    阅读更多 <ArrowRightOutlined />
                  </Button>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* 加载更多 */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button type="primary" size="large">
            加载更多
          </Button>
        </div>
      </div>

      {/* 订阅区域 */}
      <div style={{ 
        background: '#f5f5f5',
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
          <Title level={2}>订阅我们的新闻</Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
            及时了解麻雀软件的最新动态和行业资讯
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large">
              立即订阅
            </Button>
            <Button size="large">
              了解更多
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default News; 