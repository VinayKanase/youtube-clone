import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/VideoCard.css";
import { Link } from "react-router-dom";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  gifOnHover,
  videoId
}) {
  const [srcOfImage, setSrcOfImage] = useState(image);

  let handleMouseEnter = () =>
    setTimeout(() => setSrcOfImage(gifOnHover), 1500);

  let handleMouseLeave = () => {
    let tempInterval = setInterval(() => setSrcOfImage(image), 100);
    setTimeout(() => clearInterval(tempInterval), 1800);
  };
  return (
    <Link to={`/watch/${videoId}`}>
      <div className="videoCard">
        <img
          className="videoCard__thumbnail"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={srcOfImage}
          alt={title}
        />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p className="videoCard__channelName">{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </ Link>
  );
}

export default VideoCard;
