import React from "react";

function Card(props) {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <a href={props.link} target="_black">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
          </a>
          <div>
            <span className="card_category"> {props.title}</span>
            <h3 className="card_title"> {props.sname}</h3>
            <a className="btn" href={props.link} target="_black">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
