import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import Express from "express";
import { NODE_ENV } from "../config/env";

export default function (app) {
  console.info("Setup - Loading modules...");

  //Request body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //Request body cookie parser
  app.use(cookieParser());

  //Public files folder
  app.use(Express.static(path.join(__dirname, "..", "..", "..", "public")));

  //HTTP logger
  if (NODE_ENV === "development") {
    app.use(morgan("tiny"));
  }
}
