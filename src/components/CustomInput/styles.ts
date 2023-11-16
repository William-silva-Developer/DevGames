import styled from "styled-components/native";
import Utils from "../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputProps } from "react-native";

//----------------------------------------------------------------------------------

export const TextInput = styled.TextInput.attrs({
  autoCapitalize: "words",
  maxFontSizeMultiplier: 1,
})<TextInputProps>`
  background-color: ${() => Utils.COLORS.COOL_GRAY1};
  width: 303px;
  height: 43px;
  border-radius: 20px;
  padding-left: 13px;
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  font-family: ${() => Utils.FONT.RBT400};
  color: ${() => Utils.COLORS.WHITE};
`;
export type TextInputStyledProps = TextInputProps;
