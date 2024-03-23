import MediaCard from "../../components/Card/MediaCard";
import { getUserFavorites } from "../../hooks/lsService";
import { useTypedSelector } from "../../hooks/redux";
import { useTheme } from "../../hooks/useTheme";
import { useSearchPhotosQuery } from "../../store/unsplash/unsplach.api";
import s from "./ResultsPage.module.css";

export default function ResultsPage() {
    const { search } = useTypedSelector((state) => state.searchUnsplash);
    const { theme } = useTheme();
    const { isAuth } = useTypedSelector((state) => state.userAuth);
    const users = useTypedSelector((state) => state.arrayUsers);
    const favorites = getUserFavorites(users.users);
    const color = theme === "light" ? "black" : "";

    const { isLoading: isSearchLoading, data: searchData } = useSearchPhotosQuery(
        {
            search,
            per_page: "11",
        },
        {
            skip: search.length < 3,
        },
    );

    return (
        <>
            {searchData?.length !== 0 && (
                <p className={s.title} style={{ background: color }}>
                    Search results for word: <span style={{ color: "red" }}>{search}</span>
                </p>
            )}
            <ul className={s.listImg} style={{ background: color }}>
                {isSearchLoading && <p className="text-center">Search loading...</p>}
                {searchData?.length === 0 && (
                    <p className={s.title} style={{ background: color }}>
                        No search results with word: <span style={{ color: "red" }}>{search}</span>
                    </p>
                )}
                {searchData?.map((item) => (
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
        </>
    );
}
