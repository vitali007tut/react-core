import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
    id: string;
    alt_description: string;
    url: string;
};

const MediaCard = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia sx={{ height: 140 }} image={props.url} title={props.id} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.alt_description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
            </CardActions>
        </Card>
    );
};

export default MediaCard;
