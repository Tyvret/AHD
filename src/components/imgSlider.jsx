import React from "react";

export function Slider() {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      let imgContainer = document.querySelector(".img-container");
      let last = imgContainer.firstChild;
      imgContainer.removeChild(last);
      imgContainer.appendChild(last);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="img-container">
      <div className="box">
        <img src={require("../images/IMG_1307.JPG")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/IMG_1387.JPG")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/IMG_1390.JPG")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_1432.jpg")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_1733.jpg")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_2703.jpg")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_4173.jpg")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_4226.jpg")} alt="" />
      </div>
      <div className="box">
        <img src={require("../images/thumbnail_IMG_4353.jpg")} alt="" />
      </div>
    </div>
  );
}
