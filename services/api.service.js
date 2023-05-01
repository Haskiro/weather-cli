import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY]"
    );
  }

  if (!city && !process.env.CITY) {
    throw new Error("Не задан город, задайте его через команду -s [CITY]");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: process.env.CITY ?? city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  console.log(data);
  return data;
};
