import { CorsOptions } from "cors";

export const MAX_CODE_PHRASE_TRY = 3;

export const corsOptions: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

/*
  RegEx-s
*/
export const nonRequiredName = /^[a-zA-Zà-ÿĀ-ſǀ-ǂḀ-ỿ'`-а-яА-ЯёЁїЇґҐ]{0,50}$/
export const requiredName = /^[a-zA-Zà-ÿĀ-ſǀ-ǂḀ-ỿ'`-а-яА-ЯёЁїЇґҐ]{1,50}$/