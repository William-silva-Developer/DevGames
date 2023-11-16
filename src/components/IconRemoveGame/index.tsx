import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Utils from "../../utils/Utils";

export function IconRemoveGame({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialIcons name="delete-outline" size={28} color="#fff" />
    </TouchableOpacity>
  );
}
