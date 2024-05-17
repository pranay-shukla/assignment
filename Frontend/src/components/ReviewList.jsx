import { Link } from "react-router-dom";
import Review from "./Review";
import { useEffect, useState } from "react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviewList();
  }, []);
  const getReviewList = () => {
    const url = "http://127.0.0.1:3000/api/v1/reviews";
    const requestOptions = {
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setReviews(res.data.reviews);
      });
  };
  const handleDelete = (id) => {
    const url = "http://127.0.0.1:3000/api/v1/reviews/" + id;
    const requestOptions = {
      method: "DELETE",
    };
    fetch(url, requestOptions).then((res) => {
      getReviewList();
    });
  };
  return (
    <div className="review-list">
      <Link to="/new" className="new">
        Create New Review
      </Link>
      <table className="list-table">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Title</th>
            <th>Content</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => {
            return (
              <Review
                key={review._id}
                review={review}
                serial={index + 1}
                handleDelete={handleDelete}
              />
            );
          })}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};
export default ReviewList;
