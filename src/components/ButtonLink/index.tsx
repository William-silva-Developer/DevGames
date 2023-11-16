import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface Props {
  handle: () => void;
}

export function ButtonLink({ handle }: Props) {
  return (
    <TouchableOpacity
      onPress={handle}
      style={{
        backgroundColor: "#E72F49",
        opacity: 0.9,
        borderRadius: 100,
        width: 55,
        height: 55,
        zIndex: 999,
        top: 249,
        position: "absolute",
        marginLeft: 306,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="link" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
