import s from "./MainPage.module.css";

import { useGetPhotosQuery } from "../../store/unsplash/unsplach.api";
import MediaCard from "../../components/Card/MediaCard";

function MainPage() {
    const { isLoading, data } = useGetPhotosQuery();

    return (
        <ul className={s.listImg}>
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((item) => (
                <li key={item.id} className={s.liItem}>
                    <MediaCard
                        id={item.id}
                        alt_description={item.alt_description}
                        url={item.urls.small}
                    />
                </li>
            ))}
        </ul>
    );
}

export default MainPage;
