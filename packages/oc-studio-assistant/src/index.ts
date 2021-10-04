/*! Copyright (c) 2021, XAPP AI */

// Loads the environment variables from a .env file at root
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// Assistant
import { Assistant } from "stentor";

// Channels
import { Stentor } from "stentor-channel";
import { LexV2Channel } from "@xapp/stentor-lex-v2";

// TODO Hooks this to the Stentor channel. This is the NLU (LExv2)
import { LexServiceV2 } from "@xapp/stentor-service-lex";

// Services
import { DynamoUserStorage } from "stentor-user-storage-dynamo";

// Custom Handlers
import { QuestionAnsweringHandler } from "@xapp/question-answering-handler";

// Return the handler for running in an AWS Lambda function.
export const handler: AWSLambda.Handler = new Assistant()
    .withUserStorage(new DynamoUserStorage())
    .withHandlers({
        QuestionAnsweringHandler: QuestionAnsweringHandler
    })
    .withChannels([
            LexV2Channel(),
            Stentor(new LexServiceV2({})) // set lex v2 service for nlu
    ])
    .lambda();
