import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Review = ({ review, serial, handleDelete }) => {
  const navigate = useNavigate();

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
