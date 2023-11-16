import styled from "styled-components/native";
import Utils from "../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Utils.COLORS.BLUE2};
  padding-left: 13px;
  padding-right: 13px;
`;

export const AreaDescriptionFull = styled.View`
  backgroud-color: #fff;
  flex: 1;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT400};
  font-size: ${RFValue(24)}px;
  margin-bottom: 16px;
`;

export const CustomTextDescription = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT400};
  text-align: justify;
  font-size: ${RFValue(14)}px;
  font-weight: 400;
`;
