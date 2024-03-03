// import React, {FC} from 'react';
import { TextField } from "@mui/material";
// import type { TextFieldProps } from "@mui/material";
export const InputField = (props: { label: string }) => {
    return <TextField id="standard-basic" variant="standard" label={props.label}></TextField>;
};
