import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  // RegEx validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const accountRegex = /^[0-9]{8,20}$/;

  
    
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in");
    } catch (error) {
      alert("Payment Approved and Submitted to SWIFT Successfully");
    }
  };

  const [swift, setSwift] = useState("");

  const swiftRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

  const makePayment = () => {
  if (!amountRegex.test(amount))
    return alert("Invalid amount");

  if (!accountRegex.test(account))
    return alert("Invalid account number");

  if (!swiftRegex.test(swift))
    return alert("Invalid SWIFT Code");

  alert("Payment Approved and Submitted to SWIFT Successfully");
};

  const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "48%",
  padding: "10px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer"
};

const payBtnStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "green",
  color: "white",
  cursor: "pointer"
};

  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f6f8"
  }}>
    <div style={{
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "350px",
      textAlign: "center"
    }}>

      <h2 style={{ marginBottom: "20px", color:"#003366" }}>
🏦   Employee International Payments Portal
      </h2>

      <h3>Employee Login</h3>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <input
  placeholder="SWIFT Code"
  onChange={(e) => setSwift(e.target.value)}
  style={inputStyle}
/>

      
      <button style={btnStyle} onClick={login}>Login</button>

      <hr style={{ margin: "20px 0" }} />

      <h3>Pending International Payment</h3>

      <input
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Account Number"
        onChange={(e) => setAccount(e.target.value)}
        style={inputStyle}
      />

      <button style={payBtnStyle} onClick={makePayment}>
        Approve & Send to SWIFT
      </button>

    </div>
  </div>
);
}

export default App;
