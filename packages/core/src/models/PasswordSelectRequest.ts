/*! Copyright (c) 2022, XAPP AI */
import { OptionSelectRequest } from "stentor";

export interface PasswordSelectRequest extends Pick<OptionSelectRequest, "type" | "intentId"> {
    password: string;
}