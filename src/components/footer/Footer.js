import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      {/* 此处要改一个新footer内容 */}
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("❤️ Communicate technology, connect the world and create value")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {/* Theme by{" "}
          <a href="https://github.com/liujiaodaliao">
            developerFolio
          </a> */}
        </p>
      </div>
    </Fade>
  );
}
