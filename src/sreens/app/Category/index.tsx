import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import { Container } from "./styles";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { requestListByCategory } from "../../../store/ListByCategorySlice/ListByCategorySlice";
import { RootState } from "../../../store/rootReducer";
import { ListAllGames } from "../../../components/ListAllGames";

//--------------------------------------------------------------------------------------------------------
type Params = {
  category: {
    id: string;
    nameCategory: string;
  };
};

type ParamsProps = RouteProp<Params, "category">;
//--------------------------------------------------------------------------------------------------------
const Category: React.FC = () => {
  const { params } = useRoute<ParamsProps>();

  const { navigate, setOptions } = useNavigation();
  const dispatch = useDispatch();
  //--------------------------------------------------------------------------------------------------------
  const arrGamesByCategory = useSelector(
    (state: RootState) => state.categoryId.OBJCategory
  );
  //---------------------------------------------------------------------------------------------------------
  const loading = useSelector((state: RootState) => state.categoryId.loading);
  //---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    setOptions({
      title: params.nameCategory,
    });
  }, [params.nameCategory]);
  //---------------------------------------------------------------------------------------------------------
  useLayoutEffect(() => {
    async function getcategoryGames() {
      if (params.id) {
        dispatch(requestListByCategory(params.id));
      }
    }
    getcategoryGames();
  }, [params.id]);
  //--------------------------------------------------------------------------------------------------------
  function renderGamesByCategory({ item }) {
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
  //--------------------------------------------------------------------------------------------------------
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
          data={arrGamesByCategory}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderGamesByCategory}
        />
      )}
    </Container>
  );
};

export { Category };
