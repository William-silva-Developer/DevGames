import React from "react";
import { Modal, ScrollView, Text, View } from "react-native";

import {
  Container,
  Title,
  CustomTextDescription,
  AreaDescriptionFull,
} from "./styles";
import { ButtonLeftCircle } from "../ButtonLeftCircle";

interface Props {
  description: string;
  handleShowModal: () => void;
}

const ModalFullDescription: React.FC<Props> = ({
  description,
  handleShowModal,
}) => {
  return (
    <Container>
      <ButtonLeftCircle handle={handleShowModal} />
      <ScrollView>
        <AreaDescriptionFull>
          <Title>Description</Title>
          <CustomTextDescription>{description}</CustomTextDescription>
        </AreaDescriptionFull>
      </ScrollView>
    </Container>
  );
};

export { ModalFullDescription };
