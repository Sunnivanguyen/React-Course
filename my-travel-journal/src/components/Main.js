import React from "react";

export default function Main(props) {
  return (
    <div className="destination">
      <img src={props.item.imageUrl} />
      <div className="infomation">
        <div className="location">
          <img src="../images/map-icon.png" className="map-icon" />
          <p className="country">{props.item.location.toUpperCase()}</p>
          <a
            href={props.item.googleMapsUrl}
            className="google-map"
            target="-blank"
          >
            View on Google Maps
          </a>
        </div>
        <p className="destination-name">{props.item.title}</p>
        <p className="travel-time">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
