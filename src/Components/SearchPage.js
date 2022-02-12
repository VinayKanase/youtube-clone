import React from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "../css/SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj"
        channel="Marvel Entertainment"
        verified
        subs="18M"
        noOfVideos={7697}
        description="Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of over 8,000 characters featured in a variety of media over seventy years. Marvel utilizes its character franchises in entertainment, licensing and publishing."
      />
      <hr />
      <VideoRow
        views="28M"
        subs="18M"
        description="Welcome to chaos 🌙 Watch the new trailer for Marvel Studios’ Moon Knight and start streaming the Original series."
        timestamp="3 weeks ago"
        channel="Marvel Entertainment"
        title="Marvel Studios’ Moon Knight | Official Trailer | Disney+"
        image="https://i.ytimg.com/vi/x7Krla_UxRg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcqIKCKA7L47-eyULtXor0Mrtojg" />

      <VideoRow
        views="252M"
        subs="18M"
        description={`"There was an idea…" Avengers: Infinity War. In theaters April 27.`}
        timestamp="4 years ago"
        channel="Marvel Entertainment"
        title="Marvel Studios' Avengers: Infinity War Official Trailer"
        image="https://i.ytimg.com/vi/6ZfuNTqbHE8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7aF2-JChFSlAyhXqgNER_68M1LQ" />
      <VideoRow
        views="148M"
        subs="18M"
        description="Whatever it takes. Watch the brand-new trailer for Marvel Studios’ Avengers: Endgame. In theaters April 26."
        timestamp="2 years ago"
        channel="Marvel Entertainment"
        title="Marvel Studios' Avengers: Endgame - Official Trailer"
        image="https://i.ytimg.com/vi/TcMBFSGVi1c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXO1cevCUJzlIsm7-4YjoT5bIkBw" />
      <VideoRow
        views="29M"
        subs="18M"
        description={`Watch the brand new trailer for Marvel Studios’ "Shang-Chi and the Legend of the Ten Rings" and experience it only in theaters September 3.`}
        timestamp="7 months ago"
        channel="Marvel Entertainment"
        title="Marvel Studios’ Shang-Chi and the Legend of the Ten Rings | Official Trailer"
        image="https://i.ytimg.com/vi/8YjFbMbfXaQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTypF1yTn0EcW37auHCj8DnvkgPA" />
      <VideoRow
        views="50M"
        subs="18M"
        description="Long live the king. Watch the new trailer for Marvel Studios #BlackPanther. In theaters February 16!"
        timestamp="4 years ago"
        channel="Marvel Entertainment"
        title="Marvel Studios' Black Panther - Official Trailer"
        image="https://i.ytimg.com/vi/xjDjIWPwcPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOwxeDIw-plZKqBquV85jYCiANug" />
      <VideoRow
        views="25M"
        subs="18M"
        description="Witness the power of the Sorcerer Supreme in the first teaser for Marvel's 'Doctor Strange,'"
        timestamp="5 years ago"
        channel="Marvel Entertainment"
        title="Marvel's Doctor Strange Teaser Trailer"
        image="https://i.ytimg.com/vi/Lt-U_t2pUHI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1uUHEVMPMktE3XT4DsE1IkRnm8Q" />

    </div>
  )
}

export default SearchPage;