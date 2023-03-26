import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";
import "./MyReviews.css";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Review deleted Successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Review Time</th>
              <th>Operation</th>
            </tr>
          </thead>

          {reviews.map((rev, index) => {
            const { _id, serviceName, review, timestamp } = rev;
            return (
              <tbody key={index}>
                <tr className="border">
                  <th>{index + 1}</th>
                  <td>{serviceName}</td>
                  <td className="wrap-text">{review}</td>
                  <td>{timestamp}</td>
                  <td>
                    <FontAwesomeIcon icon={faPen} title="Edit Review" />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="ml-3"
                      title="Delete Review"
                      onClick={() => handleDelete(_id)}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
