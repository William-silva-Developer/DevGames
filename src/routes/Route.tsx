import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../sreens/app/Home";
import { Search } from "../sreens/app/Search";
import { Details } from "../sreens/app/Details";
import { Category } from "../sreens/app/Category";
import { Favorite } from "../sreens/app/Favorite";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#050B18",
          },
        }}
      />

      <Screen
        name="Detail"
        component={Details}
        options={{
          title: "Details",
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#050B18",
          },
          headerShown: false,
        }}
      />

      <Screen
        name="Category"
        component={Category}
        options={{
          title: "Category",
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#050B18",
          },
        }}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: "My Favorite",
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#050B18",
          },
        }}
      />
    </Navigator>
  );
};

export { Routes };
