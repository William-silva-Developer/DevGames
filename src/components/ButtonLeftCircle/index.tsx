import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  handle: () => void;
}

export function ButtonLeftCircle({ handle, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={handle}
      style={{
        backgroundColor: "#050B18",
        borderRadius: 100,
        width: 45,
        height: 45,
        zIndex: 999,
        top: 39,
        position: "absolute",
        marginLeft: 13,
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      <AntDesign name="arrowleft" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
