import "./styles.css";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState("");
  const [luck, setLuck] = useState(0);
  const [answer, setAnswer] = useState("");
  // Setting Date of Birth
  function setDob(event) {
    setDate(event.target.value);
  }
  //Setting Lucky Number
  function setLuckNumber(event) {
    setLuck(event.target.value);
  }
  //Calculating sum of digits of DOB
  function sumDate(dateValue) {
    let sum = 0;
    while (Math.floor(dateValue / 10) !== 0) {
      sum = sum + (dateValue % 10);
      dateValue = Math.floor(dateValue / 10);
      if (Math.floor(dateValue / 10) === 0 && dateValue % 10 !== 0) {
        sum = sum + dateValue;
      }
    }
    return sum;
  }
  //ALtering DOB string and returning answer
  function luckyDate() {
    let result;
    let dateValue = date.replaceAll("-", "");
    result = sumDate(dateValue);
    if (result % luck === 0) {
      setAnswer("Wow....Lucky");
    } else {
      setAnswer("Sorry....Unlucky");
    }
  }
  return (
    <div className="App">
      <h1>🎁 Lucky Birthday</h1>
      <label for="date">Select your DOB</label>
      <input
        type="date"
        onChange={setDob}
        className="userInput"
        id="date"
      ></input>
      <label for="lucky">Set your lucky number</label>
      <input
        type="number"
        placeholder="Enter your lucky number"
        onChange={setLuckNumber}
        className="userInput"
        id="lucky"
      ></input>
      <button onClick={luckyDate} className="userInput">
        {" "}
        Click Me
      </button>
      <p>{answer}</p>
    </div>
  );
}
