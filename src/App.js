import React, { Component } from "react";
import Clarifai from "clarifai";

import ImageRecognition from "./components/FaceRecognition";
import ImageInputForm from "./components/ImageInput";

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:
        "https://peopledotcom.files.wordpress.com/2018/12/books-8.jpg?crop=0px%2C13px%2C2700px%2C1419px&resize=1200%2C630",
      imageUrl: "",
      box: {}
    };
  }

  locateFace = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  drawBoxes = box => {
    this.setState({ box });
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.drawBoxes(this.locateFace(response));
      })

      .catch(err => {
        alert("no face detected");
        this.setState({ box: {} });
      });
  };

  render() {
    const { imageUrl, box } = this.state;
    const { handleSubmit, handleInput } = this;
    return (
      <div className="center tc w-30  mt7">
        <h1>Face Recognition</h1>
        <ImageInputForm handleInput={handleInput} handleSubmit={handleSubmit} />
        <ImageRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
