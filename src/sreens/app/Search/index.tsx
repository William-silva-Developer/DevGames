import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { Container, ListEmpty } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { requestListByNameGame } from "../../../store/ListByNameGameSlice/ListByNameGameSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { OBJGame } from "../../../interfaces/OBJGame/OBJGame";
import { ListAllGames } from "../../../components/ListAllGames";
//----------------------------------------------------------------------------------
type Params = {
  search: {
    name: string;
  };
};

type ParamsProps = RouteProp<Params, "search">;
//----------------------------------------------------------------------------------
const Search: React.FC = () => {
  const { params } = useRoute<ParamsProps>();

  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  //----------------------------------------------------------------------------------
  const games = useSelector((state: RootState) => state.searchByName.OBJGame);

  const loading = useSelector((state: RootState) => state.searchByName.loading);
  //----------------------------------------------------------------------------------
  useLayoutEffect(() => {
    async function getDeteilsGame() {
      if (params.name) {
        dispatch(requestListByNameGame(params.name));
      }
    }
    getDeteilsGame();
  }, [params.name]);
  //----------------------------------------------------------------------------------
  useEffect(() => {
    async function games() {
      console.log(games);
    }
    games();
  }, [games]);

  function renderGame({ item }) {
    return (
      <ListAllGames
        showButtonRemove={false}
        item={item}
        handle={() => {
          navigate("Detail", { id: String(item.id) });
        }}
      />
    );
  }

  return (
    <Container>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={100} color={"#00ff00"} />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={() => (
            <ListEmpty>Não encotramos um jogo com esse nome...</ListEmpty>
          )}
          data={games}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderGame}
        />
      )}
    </Container>
  );
};

export { Search };
