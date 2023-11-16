import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  ContainerImage,
  Touchable,
  NameGame,
  TextRating,
  TouchableDelete,
  AreaButtonDelete,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IconStar } from "../IconStar";
import { Text, View } from "react-native";
import { IconRemoveGame } from "../IconRemoveGame";
//------------------------------------------------------------------------------------------------
export interface Props {
  item: {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: {
      id: number;
      title: string;
      count: number;
      percent: number;
    }[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {
      yet: number;
      owned: number;
      beaten: number;
      toplay: number;
      dropped: number;
      playing: number;
    };
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: {
      platform: {
        id: number;
        name: string;
        slug: string;
        image: null;
        year_end: null;
        year_start: number;
        games_count: number;
        image_background: string;
      };
      released_at: string;
      requirements_en: null;
      requirements_ru: null;
    }[];
    parent_platforms: {
      platform: {
        id: number;
        name: string;
        slug: string;
      };
    }[];
    genres: {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }[];
    stores: {
      id: number;
      store: {
        id: number;
        name: string;
        slug: string;
        domain: string;
        games_count: number;
        image_background: string;
      };
    }[];
    clip: null;
    tags: {
      id: number;
      name: string;
      slug: string;
      language: string;
      games_count: number;
      image_background: string;
    }[];
    esrb_rating: {
      id: number;
      name: string;
      slug: string;
    };
    short_screenshots: {
      id: number;
      image: string;
    }[];
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    seo_h1: string;
    noindex: boolean;
    nofollow: boolean;
    description: string;
    filters: {
      years: {
        from: number;
        to: number;
        filter: string;
        decade: number;
        years: {
          year: number;
          count: number;
          nofollow: boolean;
        }[];
        nofollow: boolean;
        count: number;
      }[];
    };
    nofollow_collections: string[];
  };
  handle: () => void;
  handleRemove?: () => void;
  showButtonRemove: boolean;
}
//------------------------------------------------------------------------------------------------

const ListAllGames: React.FC<Props> = ({
  item,
  handle,
  handleRemove,
  showButtonRemove,
}) => {
  return (
    <Touchable onPress={handle}>
      <LinearGradient
        style={{
          position: "absolute",
          flex: 1,
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          borderRadius: 8,
          backgroundColor: "transparent",
          zIndex: 1,
          height: 169,
        }}
        colors={["rgba(0,0,0, 0.3)", "rgba(0,0,0, 0.3)"]}
      />
      {item.background_image && (
        <ContainerImage source={{ uri: item.background_image }} />
      )}
      {showButtonRemove && (
        <IconRemoveGame
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1000,
            backgroundColor: "#FF455F",
            width: 46,
            height: 46,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleRemove}
        />
      )}
      <NameGame>{item?.name}</NameGame>

      <IconStar
        style={{ position: "absolute", bottom: 16, left: 25, zIndex: 1000 }}
      />
      <TextRating>
        {item?.rating} / {item?.rating_top}
      </TextRating>
    </Touchable>
  );
};

export { ListAllGames };
