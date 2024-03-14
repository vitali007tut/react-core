import s from "./MainPage.module.css";
import { useGetPhotosQuery, useSearchPhotosQuery } from "../../store/unsplash/unsplach.api";
import MediaCard from "../../components/Card/MediaCard";
import { useAuthSelector, useFavoritesSelector, useSearchSelector, useUserFavoritesSelector } from "../../hooks/redux";

function MainPage() {
    const { isLoading, data } = useGetPhotosQuery();
    const { search } = useSearchSelector((state) => state.searchUnsplash);
    //*!
    const { favorites } = useUserFavoritesSelector((state) => state.userFavorites)
    console.log(favorites);
    
    const { arrayFav } = useFavoritesSelector((state) => state.favorites);
    const { isAuth } = useAuthSelector((state) => state.userAuth);

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
                {searchData?.map((item) => (
                    <li key={item.id} className={s.liItem}>
                        <MediaCard
                            item={item}
                            id={item.id}
                            description={item.alt_description}
                            url={item.urls.small}
                            logined={isAuth}
                            favorite={arrayFav.map((e) => e.id).includes(item.id)}
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
                                favorite={arrayFav.map((e) => e.id).includes(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MainPage;
