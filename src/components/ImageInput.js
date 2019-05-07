import React from "react";
import { Input, Button } from "semantic-ui-react";

const ImageInput = ({ handleInput, handleSubmit }) => {
  return (
    <div className="center flex justify-between">
      <Input
        onChange={handleInput}
        className="w-100"
        placeholder="paste image URL here"
      />
      <Button onClick={handleSubmit}>Detect</Button>
    </div>
  );
};

export default ImageInput;
