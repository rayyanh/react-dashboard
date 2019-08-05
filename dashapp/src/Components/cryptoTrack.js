import React, { Component } from "react";
import axios from "axios";

export default class CryptoTrack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,IOT&tsyms=USD"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    var x = [
      <img className="imgSize" src={require("./bitcoin.svg")} />,
      <img className="imgSize" src={require("./etherium.svg")} />,
      <img className="imgSize" src={require("./ripple.svg")} />
    ];
    var i = 1;
    return (
      <div className="col-lg-3 border border-success rounded boxThing">
        <h3 className="funTitle">Crypto Tracker</h3>
        <div className=" pad text-left ">
          {Object.keys(this.state.cryptos).map(key => (
            <div>
              <p className="crypto-container">
                {x[i - 1]} {i++} . {key} ${this.state.cryptos[key].USD}
              </p>
              <div />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
