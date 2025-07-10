import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // selected rating
  const [hover, setHover] = useState(0);   // hovered star

  return (
    <div
      className="my-4"
      style={{ position: "relative", bottom: "-44px" }}
    >
      <p className="mb-0" style={{ width: "max-content" }}>
        Rate Your Experience:
      </p>
      <div className="fs-5 ps-1 my-0" style={{ cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{ color: (hover || rating) >= star ? "#ffc107" : "#e4e5e9" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
