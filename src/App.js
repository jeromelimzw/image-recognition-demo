import React, { Component } from "react";
import Clarifai from "clarifai";
import ImageRecognition from "./components/FaceRecognition";
import ImageInputForm from "./components/ImageInput";
import "./App.css";
import randomImage from "./static/exampleImages";
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

  handleInput = async event => {
    await this.setState({ input: event.target.value });
    await this.setState({ imageUrl: this.state.input });
    this.setState({ box: {} });
  };

  handleSubmit = async () => {
    if (this.state.password !== key) return alert("password is required");
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      );
      await this.drawBoxes(this.locateFace(response));
    } catch (error) {
      alert("no face detected");
      this.setState({ box: {} });
    }
  };

  handleRandom = async () => {
    await this.setState({
      input: randomImage()
    });
    await this.setState({ imageUrl: this.state.input });
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
