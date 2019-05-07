import React, { Component } from "react";
import Clarifai from "clarifai";
import ImageRecognition from "./components/FaceRecognition";
import ImageInputForm from "./components/ImageInput";
import "./App.css";
import { Button } from "semantic-ui-react";
import randomImage from "./static/exampleImages";
//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY
});
const key = process.env.REACT_APP_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      password: ""
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
    if (this.state.password !== process.env.REACT_APP_KEY)
      return alert("password is required");
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

  handleRandom = async () => {
    await this.setState({ input: "" });
    await this.setState({
      input: randomImage()
    });
    await this.handleSubmit();
  };

  handlePassword = async event => {
    await this.setState({ password: event.target.value });
  };

  render() {
    const { imageUrl, box } = this.state;
    const { handleSubmit, handleInput, handleRandom, handlePassword } = this;
    return (
      <div className="center tc w-40  mt4">
        <h1>Face Recognition App</h1>
        <ImageInputForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          handleRandom={handleRandom}
          handlePassword={handlePassword}
        />

        <ImageRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
