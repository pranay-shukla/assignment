import React from "react";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
  return (
    <>
      <tr>
        <td>{review.count}</td>
        <td>{review.title}</td>
        <td>{review.content}</td>
        <td>{review.timeStamp}</td>
        <td>
          <Link to={`/${review.id}`} className="edit">
            Edit
          </Link>
        </td>
        <td>
          <button className="delete">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Review;
