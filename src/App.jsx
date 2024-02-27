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
      <div className="list-container">
        <div className="main-container">
          <h3 className="title">{}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <button className="learn-button">LEARN MORE</button>
        </div>

        <div className="main-container-active">
          <h3 className="title-active">{}</h3>
          <h1 className="price-active">
            <span className="currency-active">$</span>
            {}
          </h1>
          <div className="line-active"></div>
          <h4 className="detail-active">{}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{}</h4>
          <div className="line-active"></div>
          <button className="learn-button-active">LEARN MORE</button>
        </div>

        <div className="main-container">
          <h3 className="title">{}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <h4 className="detail">{}</h4>
          <div className="line"></div>
          <button className="learn-button">LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default App;
