import React, { Component } from "react";
import axios from "axios";

class Apidisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
      dataArray: "",
      toggle: 0,
      table: ""
    };
  }

  randomfunction = () => {
    //Generate random Number
    var randomNum = Math.floor(Math.random() * 100);

    //Get data from api
    axios
      .get(`http://numbersapi.com/1..${randomNum}`)
      .then(response => {
        this.setState({ dataArray: response.data, random: randomNum });
      })
      .catch(err => console.log(err));
  };

  dataDisplay = b => {
    var newArray = [];

    //store object data from api into array
    for (var i = 1; i <= b; i++) {
      newArray[i - 1] = this.state.dataArray[i];
    }

    const webdata = JSON.stringify(newArray);

    const currentdate = new Date();

    console.log(currentdate);
    axios
      .post("http://localhost:5000/savedata", { webdata, currentdate })
      .then(res => console.log(res.data));

    this.setState({
      table: (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((value, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    });
  };

  loadresult = () => {
    return <div className="row">{this.dataDisplay()}</div>;
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <button
              className="btn-primary btn-lg"
              onClick={this.randomfunction}
            >
              Generate No.
            </button>
          </div>
          <div className="col-3">
            This is your random Number{this.state.random}
          </div>
          <div className="col-4">
            <button
              className="btn-primary btn-lg"
              onClick={() => this.dataDisplay(this.state.random)}
            >
              Load Result
            </button>
          </div>
        </div>
        <br />
        {this.state.table}
      </div>
    );
  }
}

export default Apidisplay;
