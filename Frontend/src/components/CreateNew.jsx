import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const CreateNew = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();
  const handleSave = () => {
    const url = "http://127.0.0.1:3000/api/v1/reviews";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        content: contentRef.current.value,
      }),
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.status !== "fail") {
          navigate("/");
        }
      });
  };
  const handleReset = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  };
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="new">
      <input className="title" type="text" placeholder="Title" ref={titleRef} />
      <input
        className="content"
        type="text"
        placeholder="Content"
        ref={contentRef}
      />
      <button className="save" onClick={handleSave}>
        {" "}
        Save
      </button>
      <button className="reset" onClick={handleReset}>
        {" "}
        Reset
      </button>
      <button className="cancel" onClick={handleCancel}>
        {" "}
        Cancel
      </button>
    </div>
  );
};
export default CreateNew;

// save
// reset
// cancel
