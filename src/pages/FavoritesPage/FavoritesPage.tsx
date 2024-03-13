import { useFavoritesSelector } from "../../hooks/redux";
// import { IPhoto } from "../../models/models";

function FavoritesPage() {
    const { arrayFav } = useFavoritesSelector((state) => state.favorites);
    
    // const list = arrayFav.map(id => {
    //     const { data } = useGetPhotoQuery({ id });
    //     console.log(data);
        
    // })

    return (
        <>
            {!arrayFav.length && (
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                    You don't have favorite items
                </p>
            )}
            {arrayFav.length && ''}
        </>
    );
}

export default FavoritesPage;
