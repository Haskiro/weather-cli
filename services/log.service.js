import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
  console.log(chalk.bgRed.bold(" ERROR ") + " " + error);
};

export const printSuccess = (message) => {
  console.log(chalk.bgGreen.bold(" SUCCESS ") + " " + message);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgBlue.bold(" HELP ")}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
  );
};

export const printWeather = (res, icon) => {
  console.log(dedent`${chalk.bgWhite.bold(" WEATHER ")} Погода в городе ${
    res.name
  }
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed} м/c
    `);
};
