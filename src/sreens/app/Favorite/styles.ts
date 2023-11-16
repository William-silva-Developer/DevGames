import styled from "styled-components/native";
import Utils from "../../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Utils.COLORS.BLUE1};
  padding-left: 13px;
  padding-right: 13px;
  align-items: center;
`;

export const TextArrayEmpty = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${() => Utils.FONT.RBT400};
  color: ${() => Utils.COLORS.WHITE};
`;
