import React from "react";
import "../css/RecommendedVideos.css";
import VideoCard from "./VideoCard.js";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Jurassic World Dominion - Official Trailer [HD]"
          views="15M views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s176-c-k-c0x00ffffff-no-rj"
          channel="Universal Pictures"
          image="https://i.ytimg.com/vi/fb5ELWi-ekk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVmiez8ygVZk-B3L_EeWQCmO954Q"
        />
        <VideoCard
          title="Marvel Studios' Doctor Strange in the Multiverse of Madness | Official Teaser"
          views="33M views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://i.ytimg.com/vi/Rt_UqUm38BI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjPFhilbUggWjInFkdPwbGeAlJeA"
        />
        <VideoCard
          title="Radhe Shyam Trailer | Prabhas | Pooja Hegde | Radha Krishna Kumar | Bhushan Kumar | 11th March 2022"
          views="46M views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/ZAP6q_Zv-4g/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhRNA0oc2K2tJYa91I-k1Kayguww"
        />
        <VideoCard
          title="RRR Official Trailer (Hindi) India’s Biggest Action Drama | NTR,RamCharan,AjayD,AliaB | SS Rajamouli"
          views="8.6M views"
          timestamp="6 days ago"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s176-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/vi/NgBoMJy386M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkNdOiKBGcigdlkIVu7mL_V2dl4g"
        />
        <VideoCard
          title="Marvel Studios’ Moon Knight | Official Trailer | Disney+"
          views="28M views"
          timestamp="3 weeks ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://i.ytimg.com/vi/x7Krla_UxRg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcqIKCKA7L47-eyULtXor0Mrtojg"
        />
        <VideoCard
          title="The Matrix Resurrections – Official Trailer 1"
          views="44M views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQru04uKF6Iprawy3YIy3i_be-mzPguuaSfZBKIGw=s176-c-k-c0x00ffffff-no-rj"
          channel="Warner Bros. Pictures"
          image="https://i.ytimg.com/vi/9ix7TUGVYIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeu-36g7Uis3l5wQ7PCMfAvLryqA"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
