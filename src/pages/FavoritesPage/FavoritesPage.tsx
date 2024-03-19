import MediaCard from "../../components/Card/MediaCard";
import { useTypedSelector } from "../../hooks/redux";
import s from "./FavoritesPage.module.css";
import { IPhoto } from "../../models/models";
import { getFavoritesArray } from "../../hooks/lsService";

function FavoritesPage() {
    const { isAuth } = useTypedSelector((state) => state.userAuth);
    let favorites: IPhoto[] = [];
    const users = useTypedSelector((state) => state.arrayUsers);
    favorites = getFavoritesArray(users);

    return (
        <>
            <ul className={s.listImg}>
                {!favorites.length && (
                    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                        You don't have favorite items
                    </p>
                )}
                {!!favorites.length &&
                    favorites.map((item) => (
                        <li key={item.id} className={s.liItem}>
                            <MediaCard
                                item={item}
                                id={item.id}
                                description={item.alt_description}
                                url={item.urls.small}
                                logined={isAuth}
                                favorite={true}
                            />
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default FavoritesPage;
