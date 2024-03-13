import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useActions } from "../../hooks/actions";
import { useState } from "react";

type Props = {
    id: string;
    description: string;
    url: string;
    logined: boolean;
};

const MediaCard = (props: Props) => {
    const { setFav, removeFav } = useActions();
    const [isFavorite, setIsFavorite] = useState(false)

    const addToFavorites = () => {
        if (isFavorite) {
            removeFav(props.id);
            setIsFavorite(false);
        } else {
            setFav(props.id);
            setIsFavorite(true);
        }
    };

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia sx={{ height: 140 }} image={props.url} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            {props.logined && (
                <CardActions>
                    <Button
                        onClick={addToFavorites}
                        size="small"
                        className={isFavorite ? "favorite" : "simple"}
                    >
                        {isFavorite ? "Remove from" : "Add to"} favorites
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default MediaCard;
