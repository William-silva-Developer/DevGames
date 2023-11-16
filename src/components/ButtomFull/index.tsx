import React from "react";
import { CustomText, Touchable } from "./styles";

interface Props {
  title: string;
  handle: () => void;
}

export function ButtomFull({ title, handle }: Props) {
  return (
    <Touchable onPress={handle}>
      <CustomText>{title}</CustomText>
    </Touchable>
  );
}
