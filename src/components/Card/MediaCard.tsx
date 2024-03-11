import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
    description: string;
    url: string;
    logined: boolean;
};

const MediaCard = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.url}/>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            {props.logined && <CardActions>
                <Button size="small">Add to favorites</Button>
            </CardActions>}
        </Card>
    );
};

export default MediaCard;
