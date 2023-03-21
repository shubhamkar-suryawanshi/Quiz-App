import { useState } from "react";

function Quiz() {
  const [q, setQ] = useState(1);
  const [ans, setAns] = useState({
    field: "",
    stack: "",
    sector: ""
  });

  const hidden = {
    display: "none"
  };

  const visible = {
    display: "block"
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Form</h1>
      <div style={q === 1 ? visible : hidden}>
        <p>Q1. Your Field</p>
        <input
          type="radio"
          id="engg"
          name="field"
          onChange={(e) => {
            return e.target.value;
          }}
        />
         <label htmlFor="engg">Engineering</label>
        <br />
        <input
          type="radio"
          id="science"
          name="field"
          onChange={(e) => {
            return e.target.value;
          }}
        />
         <label htmlFor="science">Science</label>
        <br />
      </div>

      <div style={q === 2 ? visible : hidden}>
        <p>Q2. Your TechStack</p>
        <input type="checkbox" id="js" name="field" />
         <label htmlFor="js">JS</label>
        <br />
        <input type="checkbox" id="react" name="field" />
         <label htmlFor="react">React</label>
        <br />
        <input type="checkbox" id="next" name="field" />
         <label htmlFor="next">Next</label>
        <br />
      </div>

      <div style={q === 3 ? visible : hidden}>
        <p>Q3. Sector</p>
        <input type="radio" id="service" name="field" />
         <label htmlFor="service">Service</label>
        <br />
        <input type="radio" id="product" name="field" />
         <label htmlFor="product">Product</label>
        <br />
      </div>
      <br />
      <br />
      <button
        type="submit"
        onClick={() => {
          return setQ(q + 1);
        }}
      >
        {q === 3 ? "Submit" : "Save & Next"}
      </button>
    </form>
  );
}

export default Quiz;
