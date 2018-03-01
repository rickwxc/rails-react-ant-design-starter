import React from "react"
import PropTypes from "prop-types"
import {  Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import 'antd/dist/antd.css';



class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
  <Layout>
    <Header className="header">
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        Greeting: {this.props.greeting}
    </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    </Footer>
  </Layout>



      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
