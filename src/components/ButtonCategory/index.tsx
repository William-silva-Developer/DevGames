import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Touchable, CustomText } from "./styles";

interface GenreInfo {
  item: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  };
  handle: () => void;
}

const ButtonCategory: React.FC<GenreInfo> = ({ item, handle }) => {
  return (
    <Touchable onPress={handle}>
      <CustomText>{item?.name}</CustomText>
    </Touchable>
  );
};

export { ButtonCategory };
