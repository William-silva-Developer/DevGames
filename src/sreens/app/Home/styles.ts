import styled from "styled-components/native";
import Utils from "../../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";
("../../../utils/Utils");

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Utils.COLORS.BLUE1};
  padding-left: 13px;
  padding-right: 13px;
`;
export const HeaderLogo = styled.View`
  background-color: transparent;
  flex-direction: row;
  margin-top: 46px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderInput = styled.View`
  background-color: transparent;
  flex-direction: row;
  margin-top: 46px;
  align-items: center;
  justify-content: space-between;
`;

export const TextDev = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT700};
  font-size: ${RFValue(36)}px;
`;

export const TextGames = styled.Text`
  color: ${() => Utils.COLORS.RED};
  font-family: ${() => Utils.FONT.RBT700};
  font-size: ${RFValue(36)}px;
`;

export const AreaCategory = styled.View`
  width: 777px;
  margin-top: 10px;
`;

export const AllGames = styled.View`
  background-color: transparent;
  align-items: center;
  flex: 1;
`;

export const CustomTextTitle = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT700};
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  margin-bottom: 13px;
`;
