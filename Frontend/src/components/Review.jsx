import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Review = ({ review, serial }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const url = "http://127.0.0.1:3000/api/v1/reviews/" + id;
    const requestOptions = {
      method: "DELETE",
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <>
      <tr>
        <td>{serial}</td>
        <td>{review.title}</td>
        <td>{review.content}</td>
        <td>{new Date(review.dateTime).toLocaleDateString()}</td>
        <td>
          <Link to={`/${review.id}`} className="edit">
            Edit
          </Link>
        </td>
        <td>
          <button className="delete" onClick={() => handleDelete(review.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Review;
