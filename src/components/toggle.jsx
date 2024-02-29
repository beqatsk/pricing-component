import "./toggle.css";
const Toggle = () => {
  return (
    <div>
      <h2>Our Pricing</h2>
      <div className="toggle-menu">
        <p className="annually">Annually</p>
        <input
          id="cb-toggle"
          type="checkbox"
          className="hide-me"
          aria-labelledby="cb-label"
        />
        <label htmlFor="cb-toggle" className="toggle"></label>

        <p className="monthly">Monthly</p>
      </div>
    </div>
  );
};
export default Toggle;
