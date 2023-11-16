import AsyncStorage from "@react-native-async-storage/async-storage";
import { DetailsGame } from "../interfaces/DetailsGame/DetailsGame";

//CHAVE USADA PARA ARMAZENAR ALGUNS DADOS EM SEGUNDO PLANO DA TELA DE DENÚNCIA
export const Key = "@DevGames:favoriteGame";

// ----------------------------------------------------------------

export async function getFileLocalStore(key: string) {
  try {
    const File = await AsyncStorage.getItem(key);
    return JSON.parse(File) || [];
  } catch (error) {
    console.log("Erro ao recuperar dados.", error);
  }
}

export async function saveFileLocalStore(key: string, newFile: any) {
  try {
    const file = await getFileLocalStore(key);
    let hasItem = file.some((item: any) => item.id === newFile.id);
    if (hasItem) {
      return true;
    }
    file.push(newFile);

    await AsyncStorage.setItem(key, JSON.stringify(file));

    return true;
  } catch (error) {
    console.log("Erro ao salvar item", error);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

export async function removeFile(id: string) {
  try {
    const file: DetailsGame[] | [] = await getFileLocalStore(Key);

    const MyFile = file.filter((item: DetailsGame) => {
      return item.id !== Number(id);
    });

    await AsyncStorage.setItem(Key, JSON.stringify(MyFile));

    return MyFile;
  } catch (error) {
    console.log("Erro ao remover item.", error);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

export async function isFavorite(file: DetailsGame) {
  const myFile: DetailsGame[] | [] = await getFileLocalStore(Key);

  const result = myFile.find((item: DetailsGame) => item.id === file.id);

  if (result) {
    return true;
  }

  return false;
}
