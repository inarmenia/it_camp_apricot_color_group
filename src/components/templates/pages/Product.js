import React from "react";
import { Link } from "react-router-dom";

import "../styles/Product.css";

export const Product = (props) => {
  return (
    <div className="product">
      <div className="up">
        <h3>{props.name}</h3>
        <p>{props.description.slice(0, 100)}</p>
      </div>
      <div className="down">
        <Link
          to={props.downloadLink}
          target="_blank"
          download={props.name + ".pdf"}
        >
          Download
        </Link>
        <img className="imageOfProduct" src={props.image} alt={props.name} />
      </div>
    </div>
  );
};
