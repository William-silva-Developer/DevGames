export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Detail: {
        id: string;
      };
      Search: {
        name: string;
      };
      Category: {
        id: string;
        nameCategory: string;
      };
      Favorite: undefined;
    }
  }
}
