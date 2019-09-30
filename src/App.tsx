import React, { Component } from 'react';
import IncomeTaxForm from './components/IncomeTax/IncomeTaxComponent';
import './assets/App.css';
import 'antd/dist/antd.css';
import { Col, Row, Layout, Icon, Button, Drawer } from 'antd';

const { Header, Content } = Layout;

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
          <p>
            The main aim of this web application itself is to be <b>simple and deadly fast</b> in function and user
            outcome.
          </p>
          <p>
            We may progess this project more to the point where the web application will refresh it's calculation data
            (tax brackets, etc...) for YoY changes
          </p>
          <p>
            This simple side project was meant to be a way to learn new tech-stacks like typescript and react + next.js.
            You can view the source code on Github <br /> <br />{' '}
            <Button
              type="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Berry-Cool-Inc/IncomeTaxBuddy"
            >
              <Icon type="github" style={{ fontSize: '25px', color: 'black' }} />
            </Button>
          </p>
        </Drawer>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
          <Row justify="end">
            {/* First navbar group */}
            <Col span="21">
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
            margin: '150px auto',
            padding: '45px 0 0 0',
            background: '#fff',
            minHeight: 500,
            minWidth: 900,
            width: '50%',
          }}
        >
          <Row type="flex" justify="center">
            <Col>
              <h2>Income tax calculator for period 2019-2020</h2>
              <div>
                A very simple web application to calculate applicable income tax. <br />{' '}
                <b>
                  Simply input your monthly basic income and age bracket{' '}
                  <span role="img" aria-label="Skull">
                    🙂
                  </span>
                </b>
              </div>
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
