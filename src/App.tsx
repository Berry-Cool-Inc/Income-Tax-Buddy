import React, { Component } from 'react';
import IncomeTaxForm from './components/IncomeTax/IncomeTaxComponent';
import './assets/App.css';
import 'antd/dist/antd.css';
import { Card, Col, Row, Layout, Menu, Icon, Button, Drawer } from 'antd';

const { Header, Sider, Content } = Layout;

class AppLayout extends Component {
  state = { showDrawer: false };

  setDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  };

  render() {
    return (
      <Layout>
        <Drawer
          title="About the app"
          placement="left"
          closable={false}
          onClose={this.setDrawer}
          visible={this.state.showDrawer}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
          <Row justify="end">
            {/* First navbar group */}
            <Col>
              <div className="logo" />
            </Col>
            <Col>
              <Button type="link" onClick={this.setDrawer}>
                <Icon type="info-circle" theme="filled" />
                About the app
              </Button>
              <Button
                type="link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Berry-Cool-Inc/IncomeTaxBuddy"
              >
                <Icon type="github" />
                Our github
              </Button>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '85px 25% 75px 25%',
            padding: 24,
            background: '#fff',
            minHeight: 500,
          }}
        >
          <Row type="flex" justify="center">
            <Col>
              <h2>Simple heading</h2>
              <div>Simple description of this web app</div>
              <br />
              <IncomeTaxForm />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const App: React.FC = () => {
  return <AppLayout />;
};

export default App;
