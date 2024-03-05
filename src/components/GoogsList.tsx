import GoodsItem from "./GoogsItem";
import { Grid } from "@mui/material";

type Props = {
    goods: {
        id: string;
        urls: {
            small: string;
        };
    }[];
};

const GoodsList = (props: Props) => {
    const { goods } = props;

    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem id={item.id} src={item.urls.small} />
            ))}
        </Grid>
    );
};

export default GoodsList;
