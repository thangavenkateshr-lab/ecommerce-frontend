import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import { showReview } from "../../actions/reviewAction";

const ProductReview = ({id}) => {
  const { loading, reviews } = useSelector((state) => state.reviewState)
  const dispatch = useDispatch();

  useEffect(() => {
  if (id) {
    dispatch(showReview(id));
  }
}, [dispatch, id]);

  if(loading){
    return(
      <Loader/>
    )
  }
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={review._id}>
          <p>{review.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReview;