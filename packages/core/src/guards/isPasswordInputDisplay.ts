import { PASSWORD_INPUT_DISPLAY_TYPE } from "../constants";
import { PasswordInputDisplay } from "../models";

export function isPasswordInputDisplay(obj: any): obj is PasswordInputDisplay {
    return !!obj && (obj as PasswordInputDisplay).type === PASSWORD_INPUT_DISPLAY_TYPE;
}