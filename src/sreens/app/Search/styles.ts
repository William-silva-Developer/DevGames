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

export const ListEmpty = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(14)}px;
  font-weight: 400;
`;
