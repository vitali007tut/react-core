import { Card, CardMedia, Grid } from "@mui/material";
import React from "react";

type Props = {
    id: string;
    src: string;
};

const GoodsItem = (props: Props) => {
    const { id, src } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: 'center'}}>
                <CardMedia sx={{ height: 140 }} image={src} />
                <div className="card-body">
                    <h5 className="card-title">{id}</h5>
                </div>
                <button>Like</button>
            </Card>
        </Grid>
    );
};

export default GoodsItem;
