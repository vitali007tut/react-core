import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useActions } from "../../hooks/actions";
import { useState } from "react";
import { IPhoto } from "../../models/models";
import s from './MediaCard.module.css'

type Props = {
    item: IPhoto;
    id: string;
    description: string;
    url: string;
    logined: boolean;
    favorite: boolean;
};

const MediaCard = (props: Props) => {
    const { setFav, removeFav, addFavToUser } = useActions();
    const [isFavorite, setIsFavorite] = useState(props.favorite);

    const addToFavorites = () => {
        if (isFavorite) {
            removeFav(props.item);
            setIsFavorite(false);
        } else {
            setFav(props.item);
            setIsFavorite(true);
            addFavToUser(props.item);
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
                        className={`${isFavorite ? s.simple : s.favorite}`}
                    >
                        {isFavorite ? "Remove from" : "Add to"} favorites
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default MediaCard;
