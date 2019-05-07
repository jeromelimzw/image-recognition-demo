import React from "react";
import { Input, Button } from "semantic-ui-react";

const ImageInput = ({
  handleInput,
  handleSubmit,
  handleRandom,
  handlePassword
}) => {
  return (
    <div className="center flex justify-between mb5">
      <Input
        onChange={handleInput}
        className="w-100"
        placeholder="paste image URL here"
      />
      <Input
        onChange={handlePassword}
        type="password"
        placeholder="enter password here"
      />
      <Button onClick={handleSubmit}>Detect</Button>
      <Button onClick={handleRandom}>Random </Button>
    </div>
  );
};

export default ImageInput;
