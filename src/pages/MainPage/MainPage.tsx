import s from "./MainPage.module.css";
import { useGetPhotosQuery, useSearchPhotosQuery } from "../../store/unsplash/unsplach.api";
import MediaCard from "../../components/Card/MediaCard";
import { useAuthSelector, useSearchSelector } from "../../hooks/redux";

function MainPage() {
    const { isLoading, data } = useGetPhotosQuery();
    const { search } = useSearchSelector((state) => state.searchUnsplash);
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
                            id={item.id}
                            description={item.alt_description}
                            url={item.urls.small}
                            logined={isAuth}
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
                                id={item.id}
                                description={item.alt_description}
                                url={item.urls.small}
                                logined={isAuth}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MainPage;
