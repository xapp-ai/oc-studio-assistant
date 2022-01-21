/*! Copyright (c) 2022, XAPP AI */
import React, { ChangeEvent, FC, useCallback } from "react";
import styles from "./Password.scss";

export interface PasswordProps {
    readonly value: string;
    readonly disabled?: boolean;
    onChange(val: string): void;
}

export const Password: FC<PasswordProps> = props => {
    const { value, onChange } = props;

    const handleOnChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        onChange(ev.target.value);
    }, [onChange]);

    return (
        <input className={styles.password}
            type="password"
            value={value}
            disabled={props.disabled}
            onChange={handleOnChange}
        />
    );
};
