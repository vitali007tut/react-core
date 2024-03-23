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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
                <Link to={`details/${props.id}`}>
                    <Button>Details</Button>
                </Link>
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

MediaCard.propTypes = {
    item: PropTypes.object,
    id: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    logined: PropTypes.bool,
    favorite: PropTypes.bool,
};
