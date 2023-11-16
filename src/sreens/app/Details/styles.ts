import styled from "styled-components/native";
import Utils from "../../../utils/Utils";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Utils.COLORS.BLUE1};
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  background-color: transparent;
  zindex: 1px;
`;

export const ContentHead = styled.View`
  height: 50px;
  background: transparent;
  margin-left: 14px;
  top: 24px;
`;

export const NameGame = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT400};
  font-weight: 700;
  font-size: ${RFValue(16)}px;
`;

export const AreaRating = styled.View`
  flex-direction: row;
  background: transparent;
  gap: 5px;
  align-items: center;
`;
export const TextRating = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-family: ${() => Utils.FONT.RBT400};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;

//category

export const AreaCategories = styled.View`
  height: 100px;
  margin-left: 13px;
  top: 28px;
  background-color: transparent;
`;

export const CardCategory = styled.View`
  background-color: ${() => Utils.COLORS.COOL_GRAY2};
  width: 80px;
  height: 30px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-right: 8px;
  margin-top: 2px;
`;

export const CustomTextCategory = styled.Text`
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(10)}px;
  font-family: ${() => Utils.FONT.RBT400};
  font-weight: 700;
`;

//description

export const AreaDescription = styled.View`
  height: 192px;
  margin-left: 13px;
  margin-right: 13px;
`;

export const Description = styled.Text`
  font-family: ${() => Utils.FONT.RBT400};
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`;

export const DescriptionText = styled.Text`
  font-family: ${() => Utils.FONT.RBT400};
  color: ${() => Utils.COLORS.WHITE};
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  text-align: justify;
`;

export const CardPlatForms = styled.View`
  background-color: ${() => Utils.COLORS.BLUE2};
  width: 80px;
  height: 30px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-right: 8px;
  margin-top: 2px;
`;
