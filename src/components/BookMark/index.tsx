import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  handle: () => void;
  state?: boolean;
}

export function BookMark({ handle, state, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={handle}
      style={!state ? styles.default : styles.isFavorite}
      {...rest}
    >
      <MaterialCommunityIcons name="bookmark-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#1F2430",
    borderRadius: 100,
    height: 37,
    width: 37,
    alignItems: "center",
    justifyContent: "center",
  },
  isFavorite: {
    backgroundColor: "#FF455F",
    borderRadius: 100,
    height: 37,
    width: 37,
    alignItems: "center",
    justifyContent: "center",
  },
});
