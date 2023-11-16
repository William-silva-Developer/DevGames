import styled from "styled-components/native";
import Utils from "../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Touchable = styled.TouchableOpacity`
  background-color: ${() => Utils.COLORS.COOL_GRAY2};
  width: 85px;
  height: 34px;
  border-radius: 8px;
  margin: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const CustomText = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(12)}px;
  font-family: ${() => Utils.FONT[600]};
  font-weight: 400;
`;
