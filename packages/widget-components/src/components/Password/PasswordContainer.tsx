import { ChatMessagePart, ChatMessageRequestCustom, MessageMiddlewareProps } from "@xapp/chat-widget";
import React, { FC, FormEvent, useCallback, useState } from "react";
import { Password } from "./Password";

import { PasswordSelectRequest } from "@xapp/assistant-core";

export type PasswordContainerProps = MessageMiddlewareProps;

export const PasswordContainer: FC<PasswordContainerProps> = props => {
    const { ctx } = props;

    const [pwd, setPwd] = useState<string>("");
    const [sent, setSent] = useState<boolean>(false);

    const request: PasswordSelectRequest = {
        type: "OPTION_SELECT_REQUEST",
        intentId: "OptionSelect",
        password: pwd
    };

    const handleSubmit = useCallback((ev: FormEvent) => {
        setSent(true);
        ctx.send({
            type: "custom",
            payload: JSON.stringify(request)
        } as ChatMessageRequestCustom);
        ev.preventDefault();
    }, [pwd, ctx]);

    return (
        <ChatMessagePart showAvatar={false} user={ctx.user}>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Enter password:
                        <Password value={pwd} onChange={setPwd} disabled={sent} />
                    </label>
                </p>
                <p>
                    <button type="submit" disabled={sent} >Submit</button>
                </p>
            </form>
        </ChatMessagePart>
    );

};