import React from "react";
import "./style.css";

const Modal = props => {
  return (
    <div>
      <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="modal-1" />
        <div class="modal__inner">
          <form class="pure-form">
            <fieldset class="pure-group">
              <input type="text" class="pure-input-1" placeholder="Username" />
              <input type="text" class="pure-input-1" placeholder="Password" />
              <input type="email" class="pure-input-1" placeholder="Email" />
            </fieldset>

            <fieldset class="pure-group">
              <textarea class="pure-input-1" placeholder="Textareas work too" />
            </fieldset>

            <button
              type="submit"
              class="pure-button pure-input-1 pure-button-primary"
            >
              New Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
