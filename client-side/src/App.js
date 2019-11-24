import React from "react";
// import logo from "./logo.svg";
import { Container, Card } from "react-bootstrap";
import { Input, Select, Button } from "antd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

const InputGroup = Input.Group;
const { Option } = Select;

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], // don't know a shit
      text:"nothing",
      plainText: "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG",
      cipherText: "cipher Text",
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
      `http://localhost:5000/api/v1/encrypt/?text=${this.state.plainText}&key=${this.state.key}`,
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
      // dataSource: [],// don't know a shit
      toggler: event
      // cipherText:"cipherText",
      // toggler:true
    });
    console.log(this.state);
  };
  handleChange(event) {
    this.setState({
      // dataSource: [],// don't know a shit
      text: event.target.value
      // cipherText:"cipherText",
      // toggler:true
    });
  }handleKeyChange
  handleKeyChange(event) {
    this.setState({
      // dataSource: [],// don't know a shit
      key: event.target.value
      // cipherText:"cipherText",
      // toggler:true
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
              {/* <AutoComplete
                // dataSource={this.state.dataSource}
                style={{ width: 400 }}
                onChange={this.handleChange}
                placeholder="Email"
              /> */}
              <Input
                style={{ width: 400 }}
                placeholder="Enter text"
                onChange={this.handleChange}

                // defaultValue="input content"
              />
              <Input
                style={{
                   width: 200,
                   marginTop:10
                  }}
                placeholder="Enter key"
                onChange={(this.handleKeyChange)}
                // defaultValue="input content"
              />
            </InputGroup>
            <InputGroup>
            
            </InputGroup>
            <Card.Text>text: {this.state.text}</Card.Text>
            <Card.Text>key: {this.state.key}</Card.Text>
            <Card.Text>toggle: {this.state.toggler}</Card.Text>
            <Button
              block
              onClick={()=>{
                if(this.state.toggler === "encrypt"){
                  this.fetchEncrypt()
                } else if (this.state.toggler === "decrypt"){
                  this.fetchDecrypt()
                }
              }}
              // onClick={() => {
              //   // Encrypt
              //   var plainTextx = this.state.plainText;
              //   plainTextx = plainTextx.split(" ").join("");
              //   console.log(`plain Text splited ${plainTextx} `);
              //   var key = "cornell";
              //   var chars = "abcdefghijklmnopqrstuvwxyz";
              //   var klen = key.length;
              //   var pc = " ";
              //   var stop = 0;
              //   while (plainTextx.length % klen != 0) {
              //     stop = stop + 1;
              //     if (stop > 100) {
              //       console.log("broke </3 ");
              //       break;
              //     }
              //     console.log("first while");
              //     plainTextx += pc.charAt(0);
              //   }
              //   var colLength = plainTextx.length / klen;
              //   var ciphertext = "";
              //   var k = 0;
              //   for (let i = 0; i < klen; i++) {
              //     console.log("for");
              //     while (k < 26) {
              //       console.log("while");
              //       var t = key.indexOf(chars.charAt(k));
              //       var arrkw = key.split("");
              //       arrkw[t] = "_";
              //       key = arrkw.join("");
              //       if (t >= 0) break;
              //       else k++;
              //     }
              //     for (let j = 0; j < colLength; j++) {
              //       console.log("inner for");
              //       ciphertext += plainTextx.charAt(j * klen + t);
              //     }
              //   }
              //   this.setState({
              //     plainText: plainTextx,
              //     cipherText: ciphertext
              //   });
              //   console.log(this.state.cipherText);
              //   console.log(ciphertext);
              // }}
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
