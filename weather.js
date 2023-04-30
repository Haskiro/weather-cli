#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    //TODO: Вывод help
  }

  if (args.s) {
    //TODO: Сохранить город
  }

  if (args.t) {
    //TODO: Сохранить токен
  }

  //TODO: Вывести погоду
};

initCLI();
