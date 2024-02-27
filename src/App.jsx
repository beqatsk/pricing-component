import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <h2>Our Pricing</h2>
      <div className="toggle-menu">
        <p className="annually">Annually</p>
        <div className="toggle-btn">
          <div className="circle"></div>
        </div>
        <p className="monthly">Monthly</p>
      </div>
    </>
  );
}

export default App;
