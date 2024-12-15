import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, Space, Divider, message } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  ClockCircleOutlined, 
  WechatOutlined, 
  QqOutlined
} from '@ant-design/icons';
import Map from '../components/Map';
import QRCode from '../components/QRCode';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  // 联系信息数据
  const contactInfo = [
    {
      icon: <EnvironmentOutlined />,
      title: "公司地址",
      content: "深圳市南山区科技园科技中路1号科技大厦",
      color: "#1890ff"
    },
    {
      icon: <PhoneOutlined />,
      title: "联系电话",
      content: "0755-88888888",
      color: "#52c41a"
    },
    {
      icon: <MailOutlined />,
      title: "电子邮箱",
      content: "contact@sparrow-tech.com",
      color: "#722ed1"
    },
    {
      icon: <ClockCircleOutlined />,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      color: "#fa8c16"
    }
  ];

  // 表单提交处理
  const onFinish = async (values: any) => {
    try {
      // 这里替换为实际的API调用
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('消息发送成功！我们会尽快与您联系。');
        form.resetFields();
      } else {
        message.error('发送失败，请稍后重试。');
      }
    } catch (error) {
      message.error('发送失败，请检查网络连接。');
    }
  };

  return (
    <div>
      {/* 页面标题 */}
      <div style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/banner5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '150px 0 120px',
        color: 'white',
        textAlign: 'center'
      }}>
        <Title level={1} style={{ color: 'white', marginBottom: '24px' }}>
          联系我们
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          如果您有任何问题或建议，请随时与我们联系
        </Paragraph>
      </div>

      {/* 联系信息卡片 */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '-60px auto 0', 
        position: 'relative',
        padding: '0 20px' 
      }}>
        <Row gutter={[24, 24]}>
          {contactInfo.map((info, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div className={`fade-in delay-${index}`}>
                <Card hoverable className="hover-scale" style={{ 
                  textAlign: 'center', 
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    lineHeight: '64px',
                    borderRadius: '32px',
                    background: `${info.color}15`,
                    margin: '0 auto 16px',
                    fontSize: '28px',
                    color: info.color
                  }}>
                    {info.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: '8px' }}>{info.title}</Title>
                  <Text>{info.content}</Text>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* 主要内容区 */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <Row gutter={[48, 48]}>
          {/* 联系表单 */}
          <Col xs={24} md={14}>
            <div className="fade-in">
              <Title level={2}>发送消息</Title>
              <Paragraph style={{ marginBottom: '32px' }}>
                如果您对我们的产品和服务感兴趣，请填写以下表单，我们会尽快与您联系。
              </Paragraph>
              <Form
                name="contact"
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="姓名"
                      rules={[{ required: true, message: '请输入您的姓名' }]}
                    >
                      <Input placeholder="请输入您的姓名" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phone"
                      label="电话"
                      rules={[{ required: true, message: '请输入您的电话' }]}
                    >
                      <Input placeholder="请输入您的电话" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="email"
                  label="邮箱"
                  rules={[
                    { required: true, message: '请输入您的邮箱' },
                    { type: 'email', message: '请输入正确的邮箱格式' }
                  ]}
                >
                  <Input placeholder="请输入您的邮箱" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  label="主题"
                  rules={[{ required: true, message: '请输入消息主题' }]}
                >
                  <Input placeholder="请输入消息主题" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="消息内容"
                  rules={[{ required: true, message: '请输入消息内容' }]}
                >
                  <TextArea rows={6} placeholder="请输入消息内容" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large">
                    发送消息
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          {/* 其他联系方式 */}
          <Col xs={24} md={10}>
            <div className="fade-in delay-1">
              <Title level={2}>关注我们</Title>
              <Paragraph style={{ marginBottom: '32px' }}>
                您也可以通过以下方式关注我们，获取最新动态。
              </Paragraph>
              
              {/* 社交媒体 */}
              <Card className="hover-scale">
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <Space align="start">
                    <WechatOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <div style={{ flex: 1 }}>
                      <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                        官方微信
                      </Text>
                      <Text type="secondary">扫描二维码关注公众号</Text>
                      <div style={{ marginTop: '12px' }}>
                        <QRCode url="/images/wechat-qr.jpg" />
                      </div>
                    </div>
                  </Space>
                  <Divider style={{ margin: '12px 0' }} />
                  <Space align="start">
                    <QqOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                    <div style={{ flex: 1 }}>
                      <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                        在线客服
                      </Text>
                      <Text type="secondary">工作时间：周一至周五 9:00-18:00</Text>
                      <div style={{ marginTop: '12px' }}>
                        <QRCode url="/images/wechat-qr.jpg" />
                      </div>
                    </div>
                  </Space>
                </Space>
              </Card>

              {/* 公司地图 */}
              <div style={{ marginTop: '32px' }}>
                <Title level={3}>公司地址</Title>
                <Card className="hover-scale">
                  <Map height="300px" />
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact; 