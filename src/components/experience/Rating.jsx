import React from "react";

const StarRating = ({rate}) => {  
  return (
    <div className="star-rating">
        {[...Array(rate)].map((star) => {
            return (
                <span className="star">&#9733;</span>
            );
        })}
    </div>
  );
};

export default StarRating;