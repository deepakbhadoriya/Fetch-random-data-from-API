import React, { Component } from "react";
import axios from "axios";

class DisplayApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webdata: [],
      counter: 34
    };

  componentDidMount=()=>{
    axios
      .get(`http://numbersapi.com/1..${this.state.counter}`)
      .then(response => {
        this.setState({ webdata: response.data });
        //console.log(this.state.webdata);
      })
      .catch(err => console.log(err));
  }
  };

  randomfunction = () => {
    this.setState({
      counter: Math.floor(Math.random() * 100)
    });
  };

}

  // display = () => {
  //   var alength = this.state.webdata.length;
  //   for (var i = 1; i <= alength; i++) {
  //     //return <li>{this.state.webdata[i]}</li>;
  //     console.log(this.state.webdata[i]);
  //   }

  render() {
    return (
      <div>
        <h3>{this.state.webdata}</h3>
        <button onClick={this.randomfunction}> click me</button>
      </div>
    );
  }
  }

export default DisplayApi;
