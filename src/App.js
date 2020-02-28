import React from "react";
import "./App.css";

import TradingViewWidget from "react-tradingview-widget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TradingViewWidget symbol="BINANCE:BTCUSDT" />
      </header>
    </div>
  );
}

export default App;
