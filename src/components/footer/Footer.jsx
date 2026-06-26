import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Ranjan Singh")}
        </p>
      </div>
    </Fade>
  );
}
