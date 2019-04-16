import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Form = () => (
  <div className="container">
    <form className="pure-form pure-input-1">
      <fieldset className="pure-group">
        <select>
          <option selected="true" disabled="disabled">
            Category
          </option>
          <option>React</option>
          <option>Redux</option>
          <option>Udacity</option>
        </select>
        <input type="text" className="pure-input-1" placeholder="Author" />
      </fieldset>

      <fieldset className="pure-group">
        <input type="text" className="pure-input-1" placeholder="Title" />
        <input type="text" className="pure-input-1" placeholder="Body" />
        <textarea className="pure-input-1" placeholder="Your text here..." />
      </fieldset>

      <button
        type="submit"
        className="pure-button pure-input-2-5 pure-button-primary"
      >
        Submit
      </button>
      <Link to={"/"} className="pure-button pure-button-success pure-input-2-5">
        Cancel
      </Link>
    </form>
  </div>
);

export default Form;
