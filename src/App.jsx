import "./reset.css";
import "./App.css";
import date from "./data.json";
import Toggle from "./components/toggle";
import { useState } from "react";

function App() {
  const [monthly, setMonthly] = useState(false);
  return (
    <>
      <Toggle setMonthly={setMonthly} />

      <div className="list-container">
        {date.map((item, index) => (
          <div
            key={index}
            className={`main-container${index === 1 ? "-active" : ""}`}
          >
            <h3 className={`title${index === 1 ? "-active" : ""}`}>
              {item.title}
            </h3>
            <h1 className={`price${index === 1 ? "-active" : ""}`}>
              <span className={`currency${index === 1 ? "-active" : ""}`}>
                $
              </span>
              {monthly ? item.price.monthly : item.price.yearly}
            </h1>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {monthly ? item.storage.monthly : item.storage.yearly}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {monthly ? item.users.monthly : item.users.yearly}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {monthly ? item.send.monthly : item.send.yearly}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <button className={`learn-button${index === 1 ? "-active" : ""}`}>
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
