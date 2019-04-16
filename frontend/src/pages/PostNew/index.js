import React from "react";
import Modal from "../../components/Modal";

const PostNew = () => {
  return (
    <Modal isOpen={true}>
      <div>
        <form className="pure-form">
          <fieldset className="pure-group">
            <input
              type="text"
              className="pure-input-1-2"
              placeholder="Username"
            />
            <input
              type="text"
              className="pure-input-1-2"
              placeholder="Password"
            />
            <input
              type="email"
              className="pure-input-1-2"
              placeholder="Email"
            />
          </fieldset>

          <fieldset className="pure-group">
            <input
              type="text"
              className="pure-input-1-2"
              placeholder="A title"
            />
            <textarea
              className="pure-input-1-2"
              placeholder="Textareas work too"
            />
          </fieldset>

          <button
            type="submit"
            className="pure-button pure-input-1-2 pure-button-primary"
          >
            Sign in
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default PostNew;
