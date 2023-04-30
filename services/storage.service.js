import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

export const saveKeyValue = async (key, value) => {
  let data = {};
  // Если файл уже есть, считываем старые значения, чтобы они не потерялись при перезаписи файла
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

// Проверка, существует ли путь
const isExists = async (path) => {
  try {
    // Если такого пути нет, то выпадает ошибка
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};
