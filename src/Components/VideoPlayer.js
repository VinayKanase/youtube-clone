import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/VideoPlayer.css";

function VideoPlayer() {
 let { videoId } = useParams();
 return (
  <div className="videoPlayer">
   <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
 );
}

export default VideoPlayer;