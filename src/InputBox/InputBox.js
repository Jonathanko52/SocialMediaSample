import React from "react";
import "./InputBox.css";

const InputBox = props => {
  const textRef = React.createRef();
  const urlRef = React.createRef();
  return (
    <div className="InputBox">
      <input
        ref={urlRef}
        onChange={e => {
          props.urlChange(e);
        }}
        placeholder="Enter URL"
      />
      <input
        ref={textRef}
        onChange={e => {
          props.textChange(e);
        }}
        placeholder="Title"
      />
      <button
        onClick={e => {
          props.submitInput(e);
          textRef.current.value = "";
          urlRef.current.value = "";
        }}
      >
        New Post
      </button>
    </div>
  );
};

export default InputBox;
