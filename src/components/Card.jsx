import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function ContactCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <div className="info">
          <Detail tel={props.tel} />
          <Detail tel={props.email} />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
