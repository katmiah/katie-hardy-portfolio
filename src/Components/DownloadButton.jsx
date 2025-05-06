import React from "react";

function DownloadButton() {
  return (
    <div>
      <a href="/KatieHardy_CV.pdf" download>
        <button className="button">Download my CV</button>
      </a>
    </div>
  );
}
export default DownloadButton;
