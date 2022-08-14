import React from "react";
import "./searchPopup.scss";
function SearchPopup() {
  return (
    <div className="searchpopup">
      <div className="recent_clear">
        <div className="recent">Recent</div>
        <div className="clear">Clear</div>
      </div>
      <div className="recent_items"></div>
      <div className="recent_history">Allen eben Tetteh</div>
    </div>
  );
}

export default SearchPopup;
