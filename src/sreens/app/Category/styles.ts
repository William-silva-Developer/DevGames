import styled from "styled-components/native";
import Utils from "../../../utils/Utils";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => Utils.COLORS.BLUE1};
  padding-left: 13px;
  padding-right: 13px;
  align-items: center;
`;
