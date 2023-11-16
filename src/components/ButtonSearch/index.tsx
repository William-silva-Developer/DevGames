import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Utils from "../../utils/Utils";

interface Props {
  handle: () => void;
}

export function ButtonSearch({ handle }: Props) {
  return (
    <TouchableOpacity onPress={handle}>
      <Feather name="search" size={38} color={Utils.COLORS.RED} />
    </TouchableOpacity>
  );
}
