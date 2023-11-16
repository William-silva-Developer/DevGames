import React, { useEffect, useState } from "react";

import {
  Container,
  HeaderLogo,
  TextDev,
  TextGames,
  HeaderInput,
  AreaCategory,
  AllGames,
  CustomTextTitle,
} from "./styles";
import { BookMark } from "../../../components/BookMark";
import { CustomInput } from "../../../components/CustomInput";
import { ButtonSearch } from "../../../components/ButtonSearch";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/rootReducer";
import { requestAllGames } from "../../../store/ListGamesSlice/ListGamesSlice";
import { requestListCategory } from "../../../store/ListCategorySlice/ListCategorySlice";
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
  View,
} from "react-native";
import { ButtonCategory } from "../../../components/ButtonCategory";
import { ListAllGames } from "../../../components/ListAllGames";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const [search, setSearch] = useState<string>("");
  //------------------------------------------------------------------------------------------------

  const arrCategory = useSelector(
    (state: RootState) => state.category.OBJCategory
  );
  //------------------------------------------------------------------------------------------------
  const loading = useSelector((state: RootState) => state.listAllFilms.loading);
  //------------------------------------------------------------------------------------------------
  const arrGames = useSelector(
    (state: RootState) => state.listAllFilms.OBJFilms
  );
  //------------------------------------------------------------------------------------------------

  useEffect(() => {
    async function getAllFilms() {
      dispatch(requestAllGames());
      dispatch(requestListCategory());
    }
    getAllFilms();
  }, []);

  //------------------------------------------------------------------------------------------------
  function renderGenres({ item }) {
    return (
      <ButtonCategory
        item={item}
        handle={() => {
          if (Number(item.id) === 547812) {
            dispatch(requestAllGames());
          } else {
            navigate("Category", { id: item.id, nameCategory: item.name });
          }
        }}
      />
    );
  }
  //------------------------------------------------------------------------------------------------
  function renderAllGames({ item }) {
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
  //------------------------------------------------------------------------------------------------
  return (
    <Container>
      <HeaderLogo>
        <TextDev>
          Dev<TextGames>Games</TextGames>
        </TextDev>
        <BookMark handle={() => navigate("Favorite")} />
      </HeaderLogo>
      <HeaderInput>
        <CustomInput
          placeholder="Looking for game?"
          placeholderTextColor="#ffffff"
          value={search}
          onChangeText={setSearch}
        />
        <ButtonSearch
          handle={() => {
            navigate("Search", { name: search });
          }}
        />
      </HeaderInput>
      <AreaCategory>
        {arrCategory && (
          <FlatList
            horizontal={true}
            data={arrCategory}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderGenres}
          />
        )}
      </AreaCategory>
      <CustomTextTitle>Trending games</CustomTextTitle>
      <AllGames>
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
            data={arrGames}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderAllGames}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => {
                  dispatch(requestAllGames());
                }}
                tintColor={"#00ff00"}
                colors={["#00ff00"]}
              />
            }
          />
        )}
      </AllGames>
    </Container>
  );
};

export { Home };
