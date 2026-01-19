import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}) {
  if (!animationData) {
    return <Loading />;
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <Player
        autoplay
        loop
        src={animationData}
        style={{height: "100%", width: "100%"}}
      />
    </React.Suspense>
  );
}
