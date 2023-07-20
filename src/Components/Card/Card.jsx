import React, { useState } from "react";
import "./Card.scss";
import { BsDot, BsArrowRightCircleFill, BsArrowLeftCircleFill, BsFillStarFill } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";

const Card = ({ id, image, title, rating, price, location }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex < image.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : image.length - 1));
  };

  return (
    <div className="card__cont">
      <div className="card__img-container">
        <p className="card__prev" onClick={handlePrev}>
          <BsArrowLeftCircleFill />
        </p>
        {image[0] ? (
          <img src={image[currentImgIndex]} className="card__img" alt={`Image ${currentImgIndex + 1}`} />
        ) : (
          <Skeleton width={250} height={150} />
        )}
        <p className="card__nxt" onClick={handleNext}>
          <BsArrowRightCircleFill />
        </p>

        <div className="card__dots">
          {image.map((e, i) => (
            <BsDot key={i} className={i === currentImgIndex ? "active" : ""} />
          ))}
        </div>
      </div>

      <div className="card__title-row">
        <h3>{title || <Skeleton width={150} />}</h3>
        <p>
          <span>
            {rating ? (
              <BsFillStarFill />
            ) : (
              <>
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
              </>
            )}
          </span>
          {rating || <Skeleton />}
        </p>
      </div>
      <div className="card__desc-row">
        <p>{location}</p>
        <b>{price} night</b>
      </div>
    </div>
  );
};

export default Card;
