import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useActions } from "../../hooks/actions";
import { useState } from "react";
import { IPhoto } from "../../models/models";
import s from "./MediaCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
    item: IPhoto;
    id: string;
    description: string;
    url: string;
    logined: boolean;
    favorite: boolean;
};

const MediaCard = (props: Props) => {
    const { addFavToCurrentUser, removeFavFromCurrentUser } = useActions();
    const [isFavorite, setIsFavorite] = useState(props.favorite);

    const addToFavorites = () => {
        if (isFavorite) {
            removeFavFromCurrentUser(props.item);
            setIsFavorite(false);
        } else {
            addFavToCurrentUser(props.item);
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
            <div className={s.buttons}>
                <Button href={`/details/${props.id}`}>Details</Button>
                {props.logined && (
                    <CardActions>
                        <Button
                            onClick={addToFavorites}
                            size="small"
                            className={`${isFavorite ? s.simple : s.favorite}`}
                        >
                            {isFavorite ? "Remove from" : "Add to"}&nbsp;
                            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Button>
                    </CardActions>
                )}
            </div>
        </Card>
    );
};

export default MediaCard;
