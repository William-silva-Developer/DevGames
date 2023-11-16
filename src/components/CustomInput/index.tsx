import React from "react";
import { View } from "react-native";

import { TextInput, TextInputStyledProps } from "./styles";

const CustomInput: React.FC<TextInputStyledProps> = (rest) => {
  return <TextInput {...rest} />;
};

export { CustomInput };
