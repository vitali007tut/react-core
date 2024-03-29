import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import s from "./HistoryCard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

type Props = {
    item: string;
};

export default function HistoryCard(props: Props) {
    const { changeSearch, removeSearchFromCurrentUser } = useActions();
    const navigate = useNavigate();

    const removeHandler = () => {
        removeSearchFromCurrentUser(props.item);
    };

    const searchHandler = (event: React.SyntheticEvent<HTMLElement>) => {
        event.preventDefault();
        changeSearch(props.item);
        navigate(`/search?query=${props.item}`);
    };

    return (
        <div className={s.card}>
            <div onClick={searchHandler} className={s.link}>
                {props.item}
            </div>
            <DeleteIcon onClick={removeHandler} className={s.delButton} />
        </div>
    );
}

HistoryCard.propTypes = {
    item: PropTypes.string,
};
