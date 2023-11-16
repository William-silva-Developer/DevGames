import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { FlatList, Image, Modal, ScrollView, View, Text } from "react-native";

import {
  AreaCategories,
  AreaDescription,
  AreaRating,
  CardCategory,
  CardPlatForms,
  Container,
  ContentHead,
  CustomTextCategory,
  Description,
  DescriptionText,
  NameGame,
  Scroll,
  TextRating,
} from "./styles";
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ButtonLeftCircle } from "../../../components/ButtonLeftCircle";
import { BookMark } from "../../../components/BookMark";
import { useDispatch, useSelector } from "react-redux";
import {
  listDetailsGame,
  requestListDetailsGame,
} from "../../../store/ListDetailsGameSlice/ListDetailsGameSlice";
import { RootState } from "../../../store/rootReducer";
import { ButtonLink } from "../../../components/ButtonLink";
import { IconStar } from "../../../components/IconStar";
import { ButtomFull } from "../../../components/ButtomFull";
import { ModalFullDescription } from "../../../components/ModalFullDescription";
import { saveFileLocalStore, Key, isFavorite } from "../../../utils/LocalStore";
import { CustomToast } from "../../../components/CustomToast";
import { useCustomToast } from "../../../hooks/useToast";

//--------------------------------------------------------------------------------------
type Params = {
  deteil: {
    id: string;
  };
};

type ParamsProps = RouteProp<Params, "deteil">;
//--------------------------------------------------------------------------------------
const Details: React.FC = () => {
  const { params } = useRoute<ParamsProps>();

  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { message, showToast } = useCustomToast();
  const [backgroundButton, setBackgroundButton] = useState<boolean>(false);
  //--------------------------------------------------------------------------------------
  const arrDetailsGame = useSelector(
    (state: RootState) => state.detailsGame.OBJDetailsGame
  );
  //--------------------------------------------------------------------------------------
  async function getDeteilsGame() {
    dispatch(requestListDetailsGame(params.id));
  }
  //--------------------------------------------------------------------------------------

  useFocusEffect(
    useCallback(() => {
      if (params.id) {
        getDeteilsGame();
      }
      return () => {
        dispatch(listDetailsGame({}));
      };
    }, [params.id])
  );
  //--------------------------------------------------------------------------------------
  async function isGameFavorited() {
    const result: boolean = await isFavorite(arrDetailsGame);

    if (result === true) {
      setBackgroundButton(result);
      return;
    } else {
      setBackgroundButton(result);
      return;
    }
  }
  //--------------------------------------------------------------------------------------
  useEffect(() => {
    isGameFavorited();
  }, [isGameFavorited]);

  //--------------------------------------------------------------------------------------

  function limitarTexto(texto: string, tamanhoMaximo: number) {
    if (texto?.length > tamanhoMaximo) {
      return texto.substring(0, tamanhoMaximo) + "...";
    } else {
      return texto;
    }
  }
  //--------------------------------------------------------------------------------------
  const handlesaveGame = () => {
    switch (backgroundButton) {
      case true:
        showToast("Item já favoritado.", "DEFAULT");
        return;
      case false:
        saveFileLocalStore(Key, arrDetailsGame);
        showToast("Item favoritado com sucesso!", "SUCCESS");
        setBackgroundButton(true);
        return;
      default: {
        return;
      }
    }
  };
  //--------------------------------------------------------------------------------------
  return (
    <Container>
      <View>
        <Scroll>
          <Image
            style={{ width: 293, height: 281 }}
            source={{ uri: arrDetailsGame?.background_image }}
          />
          <Image
            style={{ width: 293, height: 281 }}
            source={{ uri: arrDetailsGame?.background_image_additional }}
          />
        </Scroll>
      </View>
      <ButtonLeftCircle handle={() => navigate("Home")} />
      <View style={{ position: "absolute", right: 13, top: 39 }}>
        <BookMark state={backgroundButton} handle={handlesaveGame} />
      </View>
      <ButtonLink handle={() => alert("Botão link")} />
      <ScrollView>
        <ContentHead>
          <AreaRating>
            <IconStar />
            <TextRating>
              {arrDetailsGame.rating} / {arrDetailsGame.rating_top}
            </TextRating>
          </AreaRating>
          <NameGame>{arrDetailsGame?.name}</NameGame>
        </ContentHead>
        <AreaCategories>
          <NameGame>Genres</NameGame>
          <FlatList
            horizontal={true}
            data={arrDetailsGame.genres}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardCategory>
                <CustomTextCategory>{item?.name}</CustomTextCategory>
              </CardCategory>
            )}
          />
        </AreaCategories>
        <AreaDescription>
          <Description>Description</Description>
          <DescriptionText>
            {limitarTexto(arrDetailsGame?.description, 300)}
          </DescriptionText>
          <ButtomFull
            title="Read full description"
            handle={() => setShowModal(true)}
          />
        </AreaDescription>
        <AreaCategories>
          <NameGame>Platforms</NameGame>
          <FlatList
            horizontal={true}
            data={arrDetailsGame.platforms}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <CardPlatForms>
                <CustomTextCategory>{item?.platform.name}</CustomTextCategory>
              </CardPlatForms>
            )}
          />
        </AreaCategories>
        <AreaCategories>
          <NameGame>Stores</NameGame>
          <FlatList
            horizontal={true}
            data={arrDetailsGame?.stores}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <CardPlatForms>
                <CustomTextCategory>{item?.store.name}</CustomTextCategory>
              </CardPlatForms>
            )}
          />
        </AreaCategories>
      </ScrollView>
      <Modal visible={showModal}>
        <ModalFullDescription
          description={arrDetailsGame?.description}
          handleShowModal={() => setShowModal(false)}
        />
      </Modal>

      {message.length > 0 && <CustomToast message={message} />}
    </Container>
  );
};

export { Details };
