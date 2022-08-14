import React from "react";
import "./Widgets.scss";
import { Avatar } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle, img) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <Avatar />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
        <div className="feedbtn">
          <span>+</span> Follow
        </div>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Tata consultancy services",
        "Company. information technology and services"
      )}
      {newsArticle("Coronavirus: UK updates", "Top news - 886 reader")}
      {newsArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
      {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
    </div>
  );
};

export default Widgets;
