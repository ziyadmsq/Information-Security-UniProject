import React from "react";
import { Container, Card } from "react-bootstrap";
import { Input, Select, Button } from "antd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

const InputGroup = Input.Group;
const { Option } = Select;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"nothing",
      key: "nothing yet",
      toggler: "encrypt"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.fetchEncrypt = this.fetchEncrypt.bind(this);
    this.fetchDecrypt = this.fetchDecrypt.bind(this);
  }
  fetchEncrypt() {
    fetch(
      `http://localhost:5000/api/v1/encrypt/?text=${this.state.text}&key=${this.state.key}`,
      {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log(data.message)
        this.setState({ text: data.message });
      })
      .catch(error => {
        console.log(error, "catch the hoop");
      });
  }
  fetchDecrypt() {
    fetch(
      `http://localhost:5000/api/v1/decrypt/?text=${this.state.text}&key=${this.state.key}`,
      {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log(data.message)
        this.setState({ text: data.message });
      })
      .catch(error => {
        console.log(error, "catch the hoop");
      });
  }
  handleTeacherChange = event => {
    this.setState({
      toggler: event
    });
    console.log(this.state);
  };
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }handleKeyChange
  handleKeyChange(event) {
    this.setState({
      key: event.target.value
    });
  }

  render() {
    return (
      <Container align="center">
        <Card align="left" bg="info" text="white" style={{ width: 650 }}>
          <Card.Header>Information Security</Card.Header>
          <Card.Body>
            <Card.Title>Defence Assignment</Card.Title>
            <Card.Text>
              using Node js to [] and []. for the client side i used reactjs
            </Card.Text>
            <InputGroup compact>
              <Select defaultValue="encrypt" onChange={this.handleTeacherChange}>
                <Option value="encrypt">encrypt</Option>
                <Option value="decrypt">decrypt</Option>
              </Select>
              <Input
                style={{ width: 400 }}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <Input
                style={{
                   width: 200,
                   marginTop:10
                  }}
                placeholder="Enter key"
                onChange={(this.handleKeyChange)}
              />
            </InputGroup>
            <InputGroup>
            
            </InputGroup>
            <Card.Text>text: {this.state.text}</Card.Text>
            <Card.Text>key: {this.state.key}</Card.Text>
            <Button
              block
              onClick={()=>{
                if(this.state.toggler === "encrypt"){
                  this.fetchEncrypt()
                } else if (this.state.toggler === "decrypt"){
                  this.fetchDecrypt()
                }
              }}
            >
              {this.state.toggler.toUpperCase()}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default App;
