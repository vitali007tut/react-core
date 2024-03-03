// import React from 'react';
import { FC } from "react";
import { Button as ButtonMUI } from "@mui/material";
import type { ButtonProps as ButtonMUIProps } from "@mui/material";

export const Button: FC<ButtonMUIProps> = ({ children, size, endIcon, type = "button" }) => {
    return (
        <ButtonMUI type={type} variant="contained" color="primary" size={size} endIcon={endIcon}>
            {children}
        </ButtonMUI>
    );
};
