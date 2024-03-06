import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import s from './MainPage.module.css'
// import GoodsItem from "../../components/GoogsItem";
import GoodsList from "../../components/GoogsList";
import { Container } from "@mui/material";

function MainPage() {
    // const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/photos/?client_id=HJboD6dYO80ohcm2nrbPeY2aavUsaoEtQY7bQnusOyQ&page=1",
            )
            .then((response) => response.data)
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            });
    }, []);

    // items.map((i) => console.log(i));

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
                <GoodsList goods={items} />
            </Container>
        );
        // <ul className={s.listImg}>
        // {items.map(item => (
        //   <li key={item['id']}>
        {
            /* <img width = '150px' src={item['urls']['small']}></img> */
        }
        {
            /* <GoodsItem id={item['id']} src={item['urls']['small']} /> */
        }
        {
            /* </li>
        ))}
      </ul> */
        }
    }
}

export default MainPage;
