import styled from "styled-components/native";
import Utils from "../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Touchable = styled.TouchableOpacity`
  margin-bottom: 10px;
  width: 354px;
  height: 169px;
  border-radius: 8px;
`;

export const ContainerImage = styled.Image`
  width: 354px;
  height: 169px;
  border-radius: 8px;
`;

export const NameGame = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-weight: 700;
  font-size: ${RFValue(16)}px;
  position: absolute;
  z-index: 1000;
  bottom: 30px;
  left: 25px;
`;

export const TextRating = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-weight: 700;
  font-size: ${RFValue(14)}px;
  position: absolute;
  z-index: 1000;
  bottom: 12px;
  left: 45px;
`;

export const AreaButtonDelete = styled.View`
background-color: ${() => Utils.COLORS.RED}
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;

export const TouchableDelete = styled.TouchableOpacity``;
