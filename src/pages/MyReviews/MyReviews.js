import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  document.title = "My Reviews";
  return (
    <div>
      <Navbar />
      {reviews.length > 0 ? (
        <>
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
                        <Link to={`/update-review/${_id}`}>
                          <FontAwesomeIcon icon={faPen} title="Edit Review" />
                        </Link>
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
        </>
      ) : (
        <>
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-5xl font-bold">No reviews were added</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
