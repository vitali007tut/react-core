import s from "./MainPage.module.css";
import { useGetPhotosQuery, useSearchPhotosQuery } from "../../store/unsplash/unsplach.api";
import MediaCard from "../../components/Card/MediaCard";
import { useTypedSelector } from "../../hooks/redux";
import { IPhoto } from "../../models/models";
import { getFavoritesArray } from "../../hooks/lsService";

function MainPage() {
    const { isLoading, data } = useGetPhotosQuery();
    const { search } = useTypedSelector((state) => state.searchUnsplash);
    const { isAuth } = useTypedSelector((state) => state.userAuth);
    let favorites: IPhoto[] = [];
    const users = useTypedSelector((state) => state.arrayUsers);
    favorites = getFavoritesArray(users);

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
            <ul className={s.listImg}>
                {isSearchLoading && <p className="text-center">Search loading...</p>}
                {searchData?.length === 0 && (
                    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
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

            {search.length < 3 && (
                <ul className={s.listImg}>
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
            )}
        </>
    );
}

export default MainPage;
