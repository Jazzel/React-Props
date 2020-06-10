import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MediaCard from "./MediaCard";
import Gate from "./Gate";

export default function App() {
  const [gateState, setGateState] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World Again !!</p>
        <div className="row">
          <div className="col">
            <MediaCard
              title="Media Title"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              imageURL={logo}
            />
          </div>
          <div className="col">
            <div className="jumbotron text-dark">
              <input
                className="custom-checkbox"
                checked={gateState}
                onChange={() => setGateState(!gateState)}
                type="checkbox"
              />
              <label class="ml-2">
                {gateState ? "Open the Gate" : "Close the Gate"}
              </label>
              <Gate isOpen={gateState} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
