/*! Copyright (c) 2021, XAPP AI */
import {
    AbstractHandler,
    Content,
    Context,
    Data,
    keyFromRequest,
    Request
} from "stentor";

import { log } from "stentor-logger";

import { PASSWORD_INPUT_DISPLAY_TYPE } from "@xapp/assistant-core";

/**
 * Flow for reseting the user's password
 */
export class PasswordResetHandler extends AbstractHandler<Content, Data> {

    public name = "PasswordResetHandler";

    public async handleRequest(request: Request, context: Context): Promise<void> {

        log().debug(`${this.name} handleRequest()`);
        log().debug(JSON.stringify(request, undefined, 2));

        const key = keyFromRequest(request);

        switch (key) {
            case this.intentId:

                context.response.respond({
                    outputSpeech: "PLEASE ENTER YOUR PASSWORD BELOW",
                    displays: [{
                        type: PASSWORD_INPUT_DISPLAY_TYPE
                    }]
                });

                break;
            default:
                // Let it fall through to the super
                return super.handleRequest(request, context);
        }
    }
}