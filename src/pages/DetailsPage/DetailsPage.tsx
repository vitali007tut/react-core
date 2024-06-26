import { useParams } from "react-router-dom";
import { useGetPhotoQuery } from "../../store/unsplash/unsplach.api";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTypedSelector } from "../../hooks/redux";
import { IPhoto } from "../../models/models";
import { getUserFavorites } from "../../hooks/lsService";
import { useState } from "react";
import { useActions } from "../../hooks/actions";
import s from "./DetailsPage.module.css";

export default function DetailsPage() {
    const { id } = useParams();
    const { addFavToCurrentUser, removeFavFromCurrentUser } = useActions();
    const { isAuth } = useTypedSelector((state) => state.userAuth);
    let favorites: IPhoto[] = [];
    const users = useTypedSelector((state) => state.arrayUsers);
    favorites = getUserFavorites(users.users);
    const [isFavorite, setIsFavorite] = useState(favorites.map((e) => e.id).includes(id || ""));
    const { isLoading, data } = useGetPhotoQuery(id || "");

    const addToFavorites = () => {
        if (isFavorite) {
            if (data) removeFavFromCurrentUser(data);
            setIsFavorite(false);
        } else {
            if (data) addFavToCurrentUser(data);
            setIsFavorite(true);
        }
    };

    return (
        <div className={s.container}>
            {isLoading && <p className="text-center">Loading...</p>}
            <img src={data?.urls.small}></img>
            <div className={s.description}>
                <p>
                    <b>Details:</b>
                </p>
                <div>
                    <b>ID: </b>
                    {data?.id}
                </div>
                <div>
                    <b>Description: </b>
                    {data?.alt_description}
                </div>
                <div>
                    <b>Author: </b> {data?.user.name}
                </div>
                <div>
                    <b>Bigger view: </b>
                    <a href={data?.urls.regular} target="_blank">
                        Link
                    </a>
                </div>
                <div>
                    <b>The biggest view: </b>
                    <a href={data?.urls.full} target="_blank">
                        Link
                    </a>
                </div>
                {isAuth && (
                    <Button onClick={addToFavorites} size="small">
                        {isFavorite ? "Remove from" : "Add to"}&nbsp;
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                )}
            </div>
        </div>
    );
}
