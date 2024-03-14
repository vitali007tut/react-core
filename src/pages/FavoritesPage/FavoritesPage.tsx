import MediaCard from "../../components/Card/MediaCard";
import { useAuthSelector, useFavoritesSelector } from "../../hooks/redux";
import s from './FavoritesPage.module.css'
// import { IPhoto } from "../../models/models";

function FavoritesPage() {
    const { arrayFav } = useFavoritesSelector((state) => state.favorites);
    const { isAuth } = useAuthSelector((state) => state.userAuth);
    
    // const list = arrayFav.map(id => {
    //     const { data } = useGetPhotoQuery({ id });
    //     console.log(data);
        
    // })

    return (
        <><ul className={s.listImg}>
            {!arrayFav.length && (
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                    You don't have favorite items
                </p>
            )}
            {!!arrayFav.length && arrayFav.map((item) => (
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
