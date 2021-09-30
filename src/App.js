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

        if (priceDifference >= 0) {
          setProfitPerCent(
            "The profit percent is " + ((priceDifference / initialPrice) * 100).toFixed(2)
          );
          setProfitAmount(
            "and the total profit value is " + priceDifference * stockQuantity
          );
          setResultColor("green");
          setResultDisplay("block");
        } else {
          setProfitPerCent(
            "the loss percent is " + ((priceDifference / initialPrice) * 100).toFixed(2)
          );
          setProfitAmount(
            "and the total loss value is " + priceDifference * stockQuantity
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
        <h1>Stock Profit Loss Calculator</h1>
        <p>Calculate the profit on your investment easy way</p>
      </header>
      <div>
        <form action="">
          <label htmlFor="">Please input Initial Stock Price</label>
          <input
            onChange={(e) => setInitialPrice(e.target.value)}
            type="number"
            placeholder="Initial Stock Price"
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
            placeholder="Current Value"
          />

          <button onClick={(e) => clcHandler(e)}>Calculate</button>
          <p style={{ color: "red", fontSize: "20px" }}>{errorMessage}</p>
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
