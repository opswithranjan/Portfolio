import React, {useEffect, useRef} from "react";
import Loading from "../../containers/loading/Loading";

const WIDGETS_SRC = "https://platform.twitter.com/widgets.js";

/**
 * Dependency-free replacement for react-twitter-embed's TwitterTimelineEmbed.
 * Loads the official widgets.js once and renders a profile timeline via the
 * twttr.widgets API.
 */
export default function TwitterTimeline({userName, isDark, height = 400}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderTimeline = () => {
      if (cancelled || !containerRef.current || !window.twttr?.widgets) {
        return;
      }
      containerRef.current.innerHTML = "";
      window.twttr.widgets
        .createTimeline(
          {sourceType: "profile", screenName: userName},
          containerRef.current,
          {
            height,
            theme: isDark ? "dark" : "light",
            borderColor: "#fff",
            chrome: "noheader nofooter"
          }
        )
        .then(timeline => {
          if (!timeline && containerRef.current) {
            containerRef.current.innerHTML =
              "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";
          }
        });
    };

    const existing = document.getElementById("twitter-wjs");
    if (window.twttr?.widgets) {
      renderTimeline();
    } else if (existing) {
      existing.addEventListener("load", renderTimeline);
    } else {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = WIDGETS_SRC;
      script.async = true;
      script.onload = renderTimeline;
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, [userName, isDark, height]);

  return (
    <div ref={containerRef}>
      <Loading />
    </div>
  );
}
