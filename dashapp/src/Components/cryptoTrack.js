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
    var leftAlign = {
      display: "inline-block",
      textAlign: "left"
    };
    return (
      <div className="col-lg-8 border border-success rounded">
        <p>Crypto Tracker</p>
        <div className="border pad text-left">
          {Object.keys(this.state.cryptos).map(key => (
            <div>
              <p>
                {key} ${this.state.cryptos[key].USD}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
