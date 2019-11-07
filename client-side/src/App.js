import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hill Cipher</h1>

      <div id="inSec">
        <p id="inputTM">Choose Key Matrix </p>
        <br />
        <div id="EDMenu">
          <button id="enhButton0" type="button">
            Encrypt
          </button>
          <button id="dehButton0" type="button">
            Decrypt
          </button>
        </div>

        <select id="choice">
          <option value="m22">2 X 2 Matrix</option>
          <option value="m33">3 X 3 Matrix</option>
        </select>

        <form id="m22">
          <input id="tw0" type="number" name="index" min="0" max="25" />
          <input id="tw1" type="number" name="index" min="0" max="25" /> <br />
          <input id="tw2" type="number" name="index" min="0" max="25" />
          <input id="tw3" type="number" name="index" min="0" max="25" />
        </form>

        <form id="m33">
          <input id="tr0" type="number" name="index" min="0" max="25" />
          <input id="tr1" type="number" name="index" min="0" max="25" />
          <input id="tr2" type="number" name="index" min="0" max="25" />
          <input id="tr3" type="number" name="index" min="0" max="25" />
          <input id="tr4" type="number" name="index" min="0" max="25" />
          <input id="tr5" type="number" name="index" min="0" max="25" />
          <input id="tr6" type="number" name="index" min="0" max="25" />
          <input id="tr7" type="number" name="index" min="0" max="25" />
          <input id="tr8" type="number" name="index" min="0" max="25" />
        </form>

        <button id="subButtonH" type="button">
          Submit
        </button>
        <br />
      </div>
    </div>
  );
}

export default App;
