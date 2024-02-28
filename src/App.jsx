import "./reset.css";
import "./App.css";
import date from "./data.json";

function App() {
  // const basic = {
  //   title: "Basic",
  //   price: { monthly: "19.99", yearly: "199.99" },
  //   storage: "500 GB Storage",
  //   users: "2 Users Allowed",
  //   send: "Send up to 3 GB",
  // };
  // const professional = {
  //   title: "Professional",
  //   price: { monthly: "24.99", yearly: "249.99" },
  //   storage: "1 TB Storage",
  //   users: "5 Users Allowed",
  //   send: "Send up to 10 GB",
  // };
  // const master = {
  //   title: "Master",
  //   price: { monthly: "39.99", yearly: "239.99" },
  //   storage: "2 TB Storage",
  //   users: "10 Users Allowed",
  //   send: "Send up to 20 GB",
  // };

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
          <h3 className="title">{date[0].title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {date[0].price.monthly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{date[0].storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{date[0].users}</h4>
          <div className="line"></div>
          <h4 className="detail">{date[0].send}</h4>
          <div className="line"></div>
          <button className="learn-button">LEARN MORE</button>
        </div>

        <div className="main-container-active">
          <h3 className="title-active">{date[1].title}</h3>
          <h1 className="price-active">
            <span className="currency-active">$</span>
            {date[1].price.monthly}
          </h1>
          <div className="line-active"></div>
          <h4 className="detail-active">{date[1].storage}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{date[1].users}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{date[1].send}</h4>
          <div className="line-active"></div>
          <button className="learn-button-active">LEARN MORE</button>
        </div>

        <div className="main-container">
          <h3 className="title">{date[2].title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {date[2].price.monthly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{date[2].storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{date[2].users}</h4>
          <div className="line"></div>
          <h4 className="detail">{date[2].send}</h4>
          <div className="line"></div>
          <button className="learn-button">LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default App;
