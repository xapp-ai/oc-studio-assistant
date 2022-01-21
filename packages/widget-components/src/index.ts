/*! Copyright (c) 2022, XAPP AI */
import { passwordMiddlewareBuilder } from "./middlewares";

(window["xappMsgMiddlewares"] = window["xappMsgMiddlewares"] || []).push(passwordMiddlewareBuilder);

export { default as React } from "react";
export { passwordMiddlewareBuilder };

