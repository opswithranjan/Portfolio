import React, {useContext} from "react";
import "./twitter.scss";
import TwitterTimeline from "../../components/twitterTimeline/TwitterTimeline";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  return (
    <div className="tw-main-div" id="twitter">
      <div className="centerContent">
        <TwitterTimeline userName={twitterDetails.userName} isDark={isDark} />
      </div>
    </div>
  );
}
