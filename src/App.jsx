import "./reset.css";
import "./App.css";
import date from "./data.json";
import Toggle from "./components/toggle";

function App() {
  return (
    <>
      <Toggle />

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
              {item.price.monthly}
            </h1>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.storage}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.users}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.send}
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
