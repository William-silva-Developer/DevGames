import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";

import { Container, TextArrayEmpty } from "./styles";
//import { usesaveGame } from "../../../hooks/useSaveGame";
import { useNavigation } from "@react-navigation/native";
import { ListAllGames } from "../../../components/ListAllGames";
import { DetailsGame } from "../../../interfaces/DetailsGame/DetailsGame";
import { getFileLocalStore, Key, removeFile } from "../../../utils/LocalStore";

const Favorite: React.FC = () => {
  const { navigate } = useNavigation();

  const [loading, setloading] = useState<boolean>(false);
  const [arrGame, setArrGame] = useState<DetailsGame[]>([]);
  //----------------------------------------------------------------
  async function getData() {
    const file: DetailsGame[] | [] = await getFileLocalStore(Key);

    if (!Array.isArray(file)) {
      return;
    }
    setArrGame(file);
  }
  //----------------------------------------------------------------
  useEffect(() => {
    getData();
  }, []);
  //---------------------------------------------
  async function toRemoveGame(idGame: string) {
    await removeFile(idGame);
    getData();
  }

  function renderAllGames({ item }) {
    return (
      <ListAllGames
        handleRemove={() => toRemoveGame(String(item.id))}
        showButtonRemove={true}
        item={item}
        handle={() => {
          navigate("Detail", { id: String(item.id) });
        }}
      />
    );
  }
  return (
    <Container>
      <FlatList
        ListEmptyComponent={() => (
          <TextArrayEmpty>There are no favorite games</TextArrayEmpty>
        )}
        data={arrGame}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderAllGames}
      />
    </Container>
  );
};

export { Favorite };
