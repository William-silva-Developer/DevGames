import { AntDesign } from "@expo/vector-icons";

export function IconStar({ ...rest }) {
  return (
    <AntDesign
      // style={{ position: "absolute", bottom: 16, left: 25, zIndex: 1000 }}
      name="star"
      size={14}
      color="#FABB1E"
      {...rest}
    />
  );
}
