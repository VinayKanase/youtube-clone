import React from 'react';
import "../css/ChannelRow.css";
import { Avatar } from '@material-ui/core';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
 return (
  <div className="channelRow">
   <Avatar className="channelRow__logo" src={image} alt={channel} />
   <div className="channelRow__text">
    <h4>{channel}
     {verified && <CheckCircleOutlined />}
    </h4>
    <p>{subs} subscribers • {noOfVideos} videos</p>
    <p>{description}</p>
   </div>
  </div>
 )
}

export default ChannelRow;