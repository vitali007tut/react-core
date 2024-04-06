import s from "./MainPage.module.css";
import { useGetPhotosQuery } from "../../store/unsplash/unsplach.api";
import MediaCard from "../../components/Card/MediaCard";
import { useTypedSelector } from "../../hooks/redux";
import { IPhoto } from "../../models/models";
import { getUserFavorites } from "../../hooks/lsService";
import { useTheme } from "../../hooks/useTheme";

function MainPage() {
    const { isLoading, data } = useGetPhotosQuery();
    const { isAuth } = useTypedSelector((state) => state.userAuth);
    const { theme } = useTheme();
    let favorites: IPhoto[] = [];
    const users = useTypedSelector((state) => state.arrayUsers);
    favorites = getUserFavorites(users.users);

    const color = theme === "light" ? "black" : "";

    return (
        <div className={s.container}>
            <p className={s.title} style={{ background: color }}>
                Main page
            </p>
            <ul className={s.listImg} style={{ background: color }}>
                {isLoading && <p className="text-center">Loading...</p>}
                {data?.map((item) => (
                    <li key={item.id} className={s.liItem}>
                        <MediaCard
                            item={item}
                            id={item.id}
                            description={item.alt_description}
                            url={item.urls.small}
                            logined={isAuth}
                            favorite={favorites.map((e) => e.id).includes(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainPage;
