import React from "react";

const SingleProduct = ({ cuisineType, calories, img, name, weight }) => {
  return (
    <>
      <section>
        <div className="single_div">
          <img className="single_img" src={img} alt="ashg" />
          <div className="details_part">
            <h4>{name}</h4>

            <h5> Weight: {weight.toFixed(0)}</h5>
            <p>CuisineType : {cuisineType}</p>
            <p className="source_code"> Genesis: {calories}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
