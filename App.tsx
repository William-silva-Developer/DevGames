import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Routes } from "./src/routes/Route";
import { store } from "./src/store";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  async function prepare() {
    try {
      setLoadingComplete(false);

      // CARREGAMENTO DE FONTS
      await Font.loadAsync({
        ...Ionicons.font,
        "GeneralSans-400": require("./assets/fonts/GeneralSans-Regular.otf"),
        "GeneralSans-600": require("./assets/fonts/GeneralSans-Semibold.otf"),
        "GeneralSans-700": require("./assets/fonts/GeneralSans-Bold.otf"),
        "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-600": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-400": require("./assets/fonts/Roboto-Light.ttf"),
      });
    } catch (e) {
      return;
    } finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  if (!loadingComplete) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size={"large"} color={"#00ff00"} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#050B18" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
