import styled from "styled-components/native";
import Utils from "../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Touchable = styled.TouchableOpacity`
  background-color: ${() => Utils.COLORS.BLUE3};
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 6px;
`;

export const CustomText = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(14)}px;
  font-family: ${() => Utils.FONT.RBT400};
  font-weight: 400;
`;
