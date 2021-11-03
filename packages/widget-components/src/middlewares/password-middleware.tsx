import { ChatMessagePart, MessageMiddlewareBuilder } from "@xapp/chat-widget";
import React from "react";
import { PasswordContainer } from "../components";

import { isPasswordInputDisplay } from "@xapp/assistant-core";

export const passwordMiddlewareBuilder: MessageMiddlewareBuilder = next => props => {
    const { msg, ctx } = props;

    if (isPasswordInputDisplay(msg)) {
        return (
            <ChatMessagePart showAvatar={false} user={ctx.user}>
                <PasswordContainer msg={msg} ctx={ctx} />
            </ChatMessagePart>
        );
    }
    return next(props);
};