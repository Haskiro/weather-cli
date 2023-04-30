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
