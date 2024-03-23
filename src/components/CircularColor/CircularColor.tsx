import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import s from "./CircularColor.module.css";

export default function CircularColor() {
    return (
        <Stack className={s.circular} sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
        </Stack>
    );
}
