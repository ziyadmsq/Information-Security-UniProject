import React from "react";
// import logo from "./logo.svg";
import {Container, Card } from "react-bootstrap";
import { Input,Select,Button } from 'antd';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

const InputGroup = Input.Group;
const { Option } = Select;

// function App() {
class App extends React.Component {
  state = {
    dataSource: [],
  };

  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };
  render(){
    return (
    // <>
      // {/* <div className="App"> */}
      <Container align="center">
        <Card align="left" bg="info" text="white" style={{ width: 650 }}>
          <Card.Header>Information Security</Card.Header>
          <Card.Body>
            <Card.Title>Defence Assignment</Card.Title>
            <Card.Text>
              using Node js to [] and []. 
              for the client side i used reactjs 
            </Card.Text>
            <InputGroup compact>
              <Select defaultValue="Sign Up">
                <Option value="Sign Up">Sign Up</Option>
                <Option value="Sign In">Sign In</Option>
              </Select>
              {/* <AutoComplete
                // dataSource={this.state.dataSource}
                style={{ width: 400 }}
                onChange={this.handleChange}
                placeholder="Email"
              /> */}
              <Input
                style={{ width: 400 }}
                placeholder="Email"
                // defaultValue="input content" 
                />
            </InputGroup>
            
          </Card.Body>
        </Card>
      </Container>
      // {/* </div> */}
    // {/* </> */}
  );
  }
  
}

export default App;
