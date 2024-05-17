import { Link } from "react-router-dom";
import Review from "./Review";

const ReviewList = () => {
  const reviews = [
    {
      count: 1,
      title: "review 1",
      content: "Hey there",
      timeStamp: "12/11/2023",
    },
    {
      count: 1,
      title: "review 1",
      content: "Hey there",
      timeStamp: "12/11/2023",
    },
    {
      count: 1,
      title: "review 1",
      content: "Hey there",
      timeStamp: "12/11/2023",
    },
  ];
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
          {reviews.map((review) => {
            return <Review review={review} />;
          })}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};
export default ReviewList;
