import React from "react";
import { Image } from "semantic-ui-react";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className=" absolute">
      <Image id="inputimage" alt="" src={imageUrl} className="imgBox" />
      {Object.entries(box).length !== 0 ? (
        <div
          className="absolute pointer ba b--blue bw2"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      ) : (
        undefined
      )}
    </div>
  );
};

export default FaceRecognition;
