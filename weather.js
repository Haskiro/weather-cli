#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token ?? "moscow", token);
    printSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status === 401) {
      printError("Неверно указан токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }

  if (args.s) {
  }

  if (args.t) {
    saveToken(args.t);
  }

  getForcast();
};

initCLI();
