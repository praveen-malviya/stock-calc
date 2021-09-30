import Footer from "./Footer.js";

import { useState } from "react";
import "./App.css";

function App() {
  const [initialPrice, setInitialPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const [profitPerCent, setProfitPerCent] = useState("");
  const [profitAmount, setProfitAmount] = useState("");

  const [resultColor, setResultColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultDisplay, setResultDisplay] = useState("none")

  const clcHandler = (e) => {
    
    e.preventDefault();

    setProfitAmount("");
    setProfitPerCent("");
    setResultColor("");
    setErrorMessage("")

    if (currentPrice && initialPrice && stockQuantity) {
      if (currentPrice > 0 && initialPrice > 0 && stockQuantity > 0) {
        setErrorMessage("");
        
        const priceDifference = currentPrice - initialPrice;

        if (priceDifference === 0) {
          setProfitPerCent(
            "Well You are in No loss No Profit zone"
          );
          setProfitAmount(
            "Hang in there things will get better"
          );
          setResultColor("darkorange");
          setResultDisplay("block");
          }
        else if (priceDifference > 0) {
          setProfitPerCent(
            "The Profit Per Cent is " + ((priceDifference / initialPrice) * 100).toFixed(2)+"%."
          );
          setProfitAmount(
            "And Total Profit Value is ₹" + priceDifference * stockQuantity
          );
          setResultColor("green");
          setResultDisplay("block");
        } else  {
          setProfitPerCent(
            "The Loss Per Cent is " + ((Math.abs(priceDifference) / initialPrice) * 100).toFixed(2)+"%."
          );
          setProfitAmount(
            "And Total Loss Value is ₹" + Math.abs(priceDifference) * stockQuantity
          );
          setResultColor("Red");
          setResultDisplay("block");
          
        }
      } else {
        setErrorMessage("All the values should be greater than ZERO");
      }
    } else {
      setErrorMessage("Please Fill all the Value");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Stock Profit/Loss Calculator</h1>
        <h4>Calculate The Profit Of Your Investment Easy Way</h4>
      </header>
      <div>
        <form action="">
          <label htmlFor="">Please input Initial Stock Price</label>
          <input
            onChange={(e) => setInitialPrice(e.target.value)}
            type="number"
            placeholder="Initial Stock Price(₹)"
          />

          <label htmlFor="">How much Quantity</label>
          <input
            onChange={(e) => setStockQuantity(e.target.value)}
            type="number"
            placeholder="Quantity purchessed"
          />

          <label htmlFor="">Please input current value of stock</label>
          <input
            onChange={(e) => setCurrentPrice(e.target.value)}
            type="number"
            placeholder="Current Value(₹)"
          />

          <button onClick={(e) => clcHandler(e)}>Calculate</button>
          {errorMessage && <p style={{ color: "red", fontSize: "20px" }}>{errorMessage}</p>}
        </form>
        <div id="resultBox" style={{ backgroundColor: resultColor, display: resultDisplay }}>
          <p>{profitPerCent}</p>
          <p>{profitAmount}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
